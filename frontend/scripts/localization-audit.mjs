import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseSync } from 'oxc-parser';

const han = /\p{Script=Han}/u;
const translatedCalls = new Set(['t', 'translate', 'uiText', 'uiTextHtml']);
const displayAttributes = new Set([
  'title', 'label', 'aria-label', 'placeholder', 'alt', 'summary', 'hint', 'description',
  'emptyText', 'loadingText', 'errorText', 'textValue', 'caption',
  'term', 'topLabel', 'triggerLabel', 'prefix', 'meta', 'empty', 'passwordHint',
  'aria-roledescription', 'status', 'copyLabel', 'dailyTitle', 'containerAriaLabel',
]);

/** 收集可见文案和待分类的运行时字符串；注释、模块名和对象键不算界面。 */
export function inspectSource(file, source) {
  const parsed = parseSync(file, source);
  const findings = [];
  const append = (node, text, kind, translated) => {
    if (!han.test(text)) return;
    findings.push({ file, line: source.slice(0, node.start).split('\n').length,
      start: node.start, end: node.end, text, kind, translated });
  };
  const walk = (node, parent, key, translated = false) => {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) { node.forEach(value => walk(value, parent, key, translated)); return; }
    if (key === 'comments' || key === 'key' && !parent?.computed
      || key === 'source' && (parent?.type === 'ImportDeclaration' || parent?.type?.startsWith('Export'))
      || node.type?.startsWith('TS') && node.type !== 'TSAsExpression' && node.type !== 'TSSatisfiesExpression') return;
    const localized = translated || parent?.type === 'CallExpression'
      && translatedCalls.has(parent.callee?.name) && key === 'arguments' && parent.arguments[0] === node;
    if (node.type === 'Literal' && typeof node.value === 'string') {
      const display = parent?.type === 'JSXAttribute' && displayAttributes.has(parent.name?.name);
      append(node, node.value, display ? 'attribute' : 'string', localized);
    } else if (node.type === 'JSXText') {
      const text = node.value.replace(/\s+/g, ' ').trim();
      append(node, text, 'text', localized);
    } else if (node.type === 'TemplateLiteral') {
      const text = node.quasis.map((part, index) => `${index ? `{value${index - 1}}` : ''}${part.value.cooked ?? part.value.raw}`).join('');
      append(node, text, 'template', localized);
    }
    for (const [childKey, child] of Object.entries(node)) walk(child, node, childKey, localized);
  };
  walk(parsed.program);
  return { findings, errors: parsed.errors.map(error => error.message) };
}

export function sourceFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) return ['boardui', 'i18n'].includes(entry.name) ? [] : sourceFiles(file);
    return /\.[jt]sx?$/.test(file) ? [file] : [];
  });
}

export function catalogKeys(directory) {
  const keys = new Set();
  const walk = (node) => {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) { node.forEach(walk); return; }
    if (node.type === 'Property' && node.key?.type === 'Literal' && typeof node.key.value === 'string') {
      keys.add(node.key.value);
    }
    Object.values(node).forEach(walk);
  };
  for (const entry of readdirSync(directory)) {
    if (!entry.endsWith('.ts') || ['index.ts', 'shell.ts'].includes(entry)) continue;
    walk(parseSync(entry, readFileSync(join(directory, entry), 'utf8')).program);
  }
  return keys;
}

export const missingTranslations = (findings, keys) => findings.filter(item => item.translated
  && !keys.has(item.text) && !keys.has(item.text.trim()));

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
  const results = sourceFiles(join(root, 'frontend/src')).map(file =>
    inspectSource(relative(root, file), readFileSync(file, 'utf8')));
  const findings = results.flatMap(result => result.findings);
  const errors = results.flatMap(result => result.errors);
  const pending = findings.filter(item => !item.translated);
  const visible = pending.filter(item => item.kind === 'text' || item.kind === 'attribute');
  const missing = missingTranslations(findings, catalogKeys(join(root, 'frontend/src/i18n')));
  const report = { files: results.length, occurrences: findings.length, pending: pending.length,
    visible: visible.length, unique: new Set(pending.map(item => item.text)).size,
    missingMessages: new Set(missing.map(item => item.text.trim())).size, errors };
  if (process.argv.includes('--json')) console.log(JSON.stringify({ ...report, findings, missing }, null, 2));
  else console.log(JSON.stringify(report));
  if (process.argv.includes('--check')) process.exitCode = Number(errors.length > 0 || visible.length > 0 || missing.length > 0);
}
