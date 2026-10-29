import { act } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { LOCALE_KEY, setLocale } from '../../src/i18n';
import { LoginPage } from '../../src/react/pages/login/login-page';
import { choose, mount, type } from './render';

beforeEach(async () => { await act(async () => setLocale('en')) });
afterEach(async () => { vi.restoreAllMocks(); await act(async () => setLocale('zh-CN')); localStorage.removeItem(LOCALE_KEY) });

describe('语言选择', () => {
  it('通过选择器切换英文和越南文，表单输入与原生提交契约保持不变', async () => {
    const host = await mount(<LoginPage data={{ next: '/settings' }} />);
    const password = host.querySelector<HTMLInputElement>('input[name="token"]')!;
    await type(password, 'draft-password');
    expect(host.textContent).toContain('Sign in');
    await choose(host.querySelector('[data-language-setting] button'), 'Tiếng Việt');
    expect(host.textContent).toContain('Đăng nhập');
    expect(host.textContent).toContain('Mật khẩu truy cập');
    expect(document.documentElement.lang).toBe('vi');
    expect(host.querySelector('input[name="token"]')).toBe(password);
    expect(password.value).toBe('draft-password');
    expect([...new FormData(host.querySelector('form')!).entries()]).toEqual([
      ['token', 'draft-password'], ['next', '/settings'], ['days', '30'],
    ]);
    expect(localStorage.getItem(LOCALE_KEY)).toBe('vi');
    await choose(host.querySelector('[data-language-setting] button'), 'English');
    expect(host.textContent).toContain('Sign in');
    expect(password.value).toBe('draft-password');
  });

  it('外部语言变化同步翻译错误与可访问名称', async () => {
    const host = await mount(<LoginPage data={{ invalid: 'true' }} />);
    expect(host.querySelector('[role="alert"]')!.textContent).toBe('Incorrect access password');
    await act(async () => setLocale('vi'));
    expect(host.querySelector('[role="alert"]')!.textContent).toBe('Mật khẩu truy cập không đúng');
  });
});
