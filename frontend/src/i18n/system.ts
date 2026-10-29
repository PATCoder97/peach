import { getLocale, translate, type Locale } from './index';
import { systemMessages } from './system-messages';

const templates = Object.keys(systemMessages).filter(source => /\{[a-zA-Z][a-zA-Z0-9_]*\}/.test(source)).map(source => {
  const names: string[] = [];
  const parts = source.split(/(\{[a-zA-Z][a-zA-Z0-9_]*\})/g);
  const pattern = parts.map(part => {
    if (/^\{[a-zA-Z][a-zA-Z0-9_]*\}$/.test(part)) {
      names.push(part.slice(1, -1));
      return '(.+?)';
    }
    return part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }).join('');
  return { source, names, specificity: source.replace(/\{[a-zA-Z][a-zA-Z0-9_]*\}/g, '').length,
    pattern: new RegExp(`^${pattern}$`, 'su') };
}).sort((left, right) => right.specificity - left.specificity || left.names.length - right.names.length);

/** 只用于系统文案，不用于馆藏标题、来源摘录、文件路径或用户输入。 */
export function translateSystem(source: string, language: Locale = getLocale()): string {
  const exact = translate(source, {}, language);
  if (language === 'zh-CN' || exact !== source || source.length > 8192) return exact;
  const exception = /^(ValueError|TypeError|RuntimeError|SettingsFileError): (.+)$/su.exec(source);
  if (exception) {
    const detail = translateSystem(exception[2]!, language);
    if (detail !== exception[2]) return `${exception[1]}: ${detail}`;
  }
  for (const template of templates) {
    const match = template.pattern.exec(source);
    if (!match) continue;
    const values = Object.fromEntries(template.names.map((name, index) => [name, match[index + 1]!]));
    return translate(template.source, values, language);
  }
  return source;
}
