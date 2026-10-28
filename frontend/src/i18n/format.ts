import { getLocale, type Locale } from './index';

const numbers = new Map<Locale, Intl.NumberFormat>();

/** 显示用数量按所选语言分组；API 中的数字和原始文本不变。 */
export function formatNumber(value: number, options?: Intl.NumberFormatOptions): string {
  const locale = getLocale();
  if (options) return new Intl.NumberFormat(locale, options).format(value);
  let formatter = numbers.get(locale);
  if (!formatter) {
    formatter = new Intl.NumberFormat(locale);
    numbers.set(locale, formatter);
  }
  return formatter.format(value);
}

/** 日期使用所选语言与当前设备时区，调用方可为特定展示指定格式。 */
export function formatDateTime(value: string | number | Date, options: Intl.DateTimeFormatOptions): string {
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? '' : new Intl.DateTimeFormat(getLocale(), options).format(date);
}
