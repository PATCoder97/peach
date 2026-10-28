/* 保存按钮按当前语言显示，提交值与服务端协议保持不变。 */
import { act } from 'react';
import { afterEach, expect, it, vi } from 'vitest';
import { setLocale } from '../../src/i18n';
import { StartupSettings } from '../../src/react/settings/general-settings';
import { buttonNamed, mount, settle, submit } from './render';

afterEach(async () => { await act(async () => setLocale('zh-CN')) });

it('保存配置换语言后保留主提交按钮和设置值，写入保持原始布尔协议', async () => {
  const request = vi.fn(async () => ({ ok: true, status: 200, json: async () => ({ saved: true }) }));
  vi.stubGlobal('fetch', request);
  const receipt = vi.fn();
  await act(async () => setLocale('en'));
  const host = await mount(<StartupSettings startup={{ available: true, enabled: true, silent: true,
    desktop: false, message: '', desktop_message: '' }} receipt={receipt} />);
  const button = buttonNamed('Save configuration', host) as HTMLButtonElement;
  expect(button).not.toBeNull();
  expect(button.type).toBe('submit');
  expect(button.className).toContain('bg-button-primary');
  await act(async () => setLocale('vi'));
  expect(buttonNamed('Lưu cấu hình', host)).toBe(button);
  await submit(host.querySelector('form'));
  await settle();
  expect(request).toHaveBeenCalledOnce();
  const [url, options] = request.mock.calls[0] as unknown as [string, RequestInit];
  expect(url).toBe('/api/configuration/startup');
  expect(JSON.parse(String(options.body))).toEqual({ enabled: true, silent: true, desktop: false });
  expect(receipt).toHaveBeenCalledWith('已保存配置');
});
