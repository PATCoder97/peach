import { messages } from './catalog';

export const LOCALE_KEY = 'peach.locale.v1';
export const LOCALES = ['en', 'vi', 'zh-CN'] as const;
export type Locale = typeof LOCALES[number];
export const LANGUAGE_CHOICES = [['en', 'English'], ['vi', 'Tiếng Việt'], ['zh-CN', '简体中文']] as const;

export function normalizeLocale(value: unknown): Locale | null {
  return LOCALES.includes(value as Locale) ? value as Locale : null;
}

/** 未保存时沿用上游中文，用户明确选择后持续使用该语言。 */
export function readLocale(storage: Pick<Storage, 'getItem'>): Locale {
  try {
    const saved = normalizeLocale(storage.getItem(LOCALE_KEY));
    if (saved) return saved;
  } catch { /* 存储不可读时仍可打开界面。 */ }
  return 'zh-CN';
}

let locale: Locale | null = null;
const listeners = new Set<() => void>();

export function getLocale(): Locale {
  if (locale) return locale;
  try { locale = readLocale(localStorage) }
  catch { locale = 'zh-CN' }
  return locale;
}

function publish(next: Locale): void {
  const changed = getLocale() !== next;
  locale = next;
  if (typeof document !== 'undefined') document.documentElement.lang = next;
  if (changed) listeners.forEach((listener) => listener());
}

/** 先落盘再切换；写入失败由选择器报告，保留原选择。 */
export function setLocale(next: Locale): void {
  if (!normalizeLocale(next)) throw new Error('Unsupported locale');
  localStorage.setItem(LOCALE_KEY, next);
  publish(next);
}

function storageChanged(event: StorageEvent): void {
  if ((event.key === LOCALE_KEY || event.key === null) && event.storageArea === localStorage) {
    publish(readLocale(localStorage));
  }
}

export function subscribeLocale(listener: () => void): () => void {
  if (!listeners.size) window.addEventListener('storage', storageChanged);
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (!listeners.size) window.removeEventListener('storage', storageChanged);
  };
}

export function translate(source: string, values: Readonly<Record<string, string | number>> = {}, language = getLocale()): string {
  const key = Object.hasOwn(messages, source) ? source : source.trim();
  const entry = Object.hasOwn(messages, key) ? messages[key] : undefined;
  let text = language === 'zh-CN' || !entry ? source : entry[language === 'vi' ? 1 : 0];
  if (entry && language !== 'zh-CN' && key !== source) {
    const offset = source.indexOf(key);
    text = source.slice(0, offset) + text + source.slice(offset + key.length);
  }
  return text.replace(/\{([a-zA-Z][a-zA-Z0-9_]*)\}/g, (match, key: string) =>
    Object.hasOwn(values, key) ? String(values[key]) : match);
}

export function applyDocumentLocale(): void {
  document.documentElement.lang = getLocale();
}
