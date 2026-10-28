import { afterEach, describe, expect, it, vi } from 'vitest';
import { messages } from '../src/i18n/catalog';
import { applyDocumentLocale, getLocale, LOCALE_KEY, normalizeLocale, readLocale, setLocale, subscribeLocale, translate } from '../src/i18n';
import { installShellLocale } from '../src/i18n/shell';
import { systemTextHtml, uiTextHtml } from '../src/i18n/html';

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  setLocale('zh-CN');
  localStorage.removeItem(LOCALE_KEY);
  document.body.replaceChildren();
});

describe('界面语言', () => {
  it('未知原文不读取对象原型，业务文本保持原样', () => {
    for (const source of ['constructor', '__proto__', 'toString', '原始作品名']) {
      expect(translate(source, {}, 'vi')).toBe(source);
      expect(translate(source, {}, 'en')).toBe(source);
    }
  });
  it('译文复用词条时保留原文两侧的布局空白', () => {
    expect(translate(' 设置 ', {}, 'vi')).toBe(' Cài đặt ');
    expect(translate('\n设置\n', {}, 'en')).toBe('\nSettings\n');
    expect(translate(' 原始作品名 ', {}, 'en')).toBe(' 原始作品名 ');
  });
  it('保留已有默认语言，只接受支持的持久偏好', () => {
    expect(readLocale({ getItem: () => null })).toBe('zh-CN');
    expect(readLocale({ getItem: () => 'vi' })).toBe('vi');
    expect(readLocale({ getItem: () => 'en' })).toBe('en');
    expect(readLocale({ getItem: () => 'unknown' })).toBe('zh-CN');
    expect(readLocale({ getItem: () => { throw new Error('blocked') } })).toBe('zh-CN');
    expect(normalizeLocale({})).toBeNull();
  });

  it('切换时保存、通知订阅者并更新文档语言，重新读取保留选择', () => {
    const listener = vi.fn();
    const stop = subscribeLocale(listener);
    try {
      setLocale('vi');
      expect(localStorage.getItem(LOCALE_KEY)).toBe('vi');
      expect(readLocale(localStorage)).toBe('vi');
      expect(getLocale()).toBe('vi');
      expect(document.documentElement.lang).toBe('vi');
      expect(translate('设置')).toBe('Cài đặt');
      setLocale('en');
      expect(translate('设置')).toBe('Settings');
      expect(listener).toHaveBeenCalledTimes(2);
      applyDocumentLocale();
      expect(document.documentElement.lang).toBe('en');
    } finally { stop() }
  });

  it('写入被拒绝时保留原语言并向调用方报告失败', () => {
    setLocale('en');
    vi.stubGlobal('localStorage', {
      getItem: localStorage.getItem.bind(localStorage),
      setItem: () => { throw new DOMException('blocked', 'SecurityError') },
    });
    expect(() => setLocale('vi')).toThrow('blocked');
    expect(getLocale()).toBe('en');
    expect(document.documentElement.lang).toBe('en');
  });

  it('另一标签页切换或清空偏好时更新当前页，取消订阅后不再通知', () => {
    setLocale('en');
    const listener = vi.fn();
    const stop = subscribeLocale(listener);
    localStorage.setItem(LOCALE_KEY, 'vi');
    window.dispatchEvent(new StorageEvent('storage', { key: LOCALE_KEY, newValue: 'vi', storageArea: localStorage }));
    expect(getLocale()).toBe('vi');
    localStorage.removeItem(LOCALE_KEY);
    window.dispatchEvent(new StorageEvent('storage', { key: LOCALE_KEY, newValue: null, storageArea: localStorage }));
    expect(getLocale()).toBe('zh-CN');
    stop();
    setLocale('en');
    expect(listener).toHaveBeenCalledTimes(2);
  });

  it('插值保留原值且不递归解释，缺失译文保留原文', () => {
    expect(translate('上移 {label}', { label: '{count}<作品>' }, 'vi')).toBe('Di chuyển {count}<作品> lên');
    expect(translate('ABP-968 作品原名', {}, 'en')).toBe('ABP-968 作品原名');
    expect(translate('设置', {}, 'zh-CN')).toBe('设置');
    for (const [source, translations] of Object.entries(messages)) {
      const placeholders = (value: string) => [...value.matchAll(/\{([a-zA-Z][a-zA-Z0-9_]*)\}/g)].map(match => match[1]).sort();
      for (const translated of translations) {
        expect(translated.trim().length, source).toBeGreaterThan(0);
        expect(placeholders(translated), source).toEqual(placeholders(source));
      }
    }
  });

  it('壳只更新明确标记的属性，保留用户内容和已更换用途的控件', () => {
    document.body.innerHTML = '<button data-i18n-title="设置" title="设置"></button><input value="设置"><p>设置</p>';
    const stop = installShellLocale();
    try {
      setLocale('vi');
      expect(document.querySelector('button')!.title).toBe('Cài đặt');
      expect(document.querySelector('input')!.value).toBe('设置');
      expect(document.querySelector('p')!.textContent).toBe('设置');
      document.querySelector('button')!.title = 'Another action';
      setLocale('en');
      expect(document.querySelector('button')!.title).toBe('Another action');
    } finally { stop() }
  });

  it('遗留构件明确登记系统模板，切换语言不解析来源 HTML 或改写输入', () => {
    const original = '正在监视 R:\\技术详情\\<img src=x>.mp4';
    document.body.innerHTML = uiTextHtml('设置') + systemTextHtml(original)
      + '<input value="技术详情"><p data-original>技术详情</p>';
    const stop = installShellLocale();
    const input = document.querySelector('input');
    try {
      setLocale('en');
      expect(document.querySelector('[data-i18n-text]')?.textContent).toBe('Settings');
      expect(document.querySelector('[data-i18n-system]')?.textContent).toBe('Monitoring R:\\技术详情\\<img src=x>.mp4');
      expect(document.querySelector('img')).toBeNull();
      setLocale('vi');
      expect(document.querySelector('[data-i18n-system]')?.textContent).toBe('Đang theo dõi R:\\技术详情\\<img src=x>.mp4');
      expect(document.querySelector('input')).toBe(input);
      expect(input?.value).toBe('技术详情');
      expect(document.querySelector('[data-original]')?.textContent).toBe('技术详情');
    } finally { stop() }
  });
});
