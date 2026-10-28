import { afterEach, describe, expect, it } from 'vitest';
import { LOCALE_KEY, setLocale } from '../src/i18n';
import { formatDateTime, formatNumber } from '../src/i18n/format';
import { fmtDur } from '../src/core';

afterEach(() => { setLocale('zh-CN'); localStorage.removeItem(LOCALE_KEY) });

describe('界面数量和日期格式', () => {
  it('长时长按语言显示天数，播放器时钟与无效时长保持格式', () => {
    for (const [locale, days, mixed] of [['en','2 days','2 days 3 hours'],['vi','2 ngày','2 ngày 3 giờ']] as const) {
      setLocale(locale);
      expect(fmtDur(48 * 3600)).toBe(days);
      expect(fmtDur(51 * 3600)).toBe(mixed);
      expect(fmtDur(90)).toBe('1:30');
      expect(fmtDur(-1)).toBe('—');
    }
  });
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
