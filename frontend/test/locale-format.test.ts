import { afterEach, describe, expect, it } from 'vitest';
import { LOCALE_KEY, setLocale } from '../src/i18n';
import { formatDateTime, formatNumber } from '../src/i18n/format';

afterEach(() => { setLocale('zh-CN'); localStorage.removeItem(LOCALE_KEY) });

describe('界面数量和日期格式', () => {
  it('英语和越南语使用各自的千位与小数分隔符', () => {
    setLocale('en');
    expect(formatNumber(1234.5)).toBe('1,234.5');
    setLocale('vi');
    expect(formatNumber(1234.5)).toBe('1.234,5');
    expect(formatNumber(1234.5, { maximumFractionDigits: 0 })).toBe('1.235');
    setLocale('en');
    expect(formatNumber(1234.5)).toBe('1,234.5');
  });

  it('日期随语言更新，无效时间戳保持缺失而不伪造日期', () => {
    const options = { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' } as const;
    setLocale('en');
    expect(formatDateTime('2026-10-25T08:00:00Z', options)).toBe('October 25, 2026');
    setLocale('vi');
    expect(formatDateTime('2026-10-25T08:00:00Z', options)).toContain('tháng 10');
    expect(formatDateTime('invalid', options)).toBe('');
  });
});
