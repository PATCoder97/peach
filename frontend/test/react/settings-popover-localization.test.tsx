import { act } from 'react';
import { afterEach, expect, it, vi } from 'vitest';
import { setLocale } from '../../src/i18n';
import { CloudDriveGuide } from '../../src/react/settings/clouddrive-guide';
import { CloudProxySettings } from '../../src/react/settings/cloud-proxy-settings';
import { click, mount, settle, type } from './render';

afterEach(async () => { await act(async () => setLocale('zh-CN')) });

it('CloudDrive 帮助的硬盘档位、名目和数量随语言切换', async () => {
  const host = await mount(<CloudDriveGuide />);
  for (const locale of ['en', 'vi', 'zh-CN'] as const) {
    await act(async () => setLocale(locale));
    const body = host.querySelector('ul')!;
    expect(body.textContent).toContain('10–20 GiB');
    if (locale === 'zh-CN') expect(body.textContent).toContain('机械硬盘');
    else expect(body.textContent).not.toMatch(/\p{Script=Han}/u);
  }
});

it('CloudDrive 代理选项随语言切换，保留账号名与未保存端口', async () => {
  const proxy = { mode: 'http', host: 'localhost', port: 7890, username: '', password_set: false };
  vi.stubGlobal('fetch', vi.fn(async () => ({ ok: true, status: 200, json: async () => ({ accounts: [{
    id: 'one', name: '原始账号', cloud: '115open', path: '/drive1', revision: '1', writable: true,
    data: proxy, api: { ...proxy, mode: 'direct' },
  }] }) })));
  const host = await mount(<CloudProxySettings receipt={vi.fn()} />);
  await settle();
  const port = [...host.querySelectorAll<HTMLInputElement>('input')].find(node => node.value === '7890')!;
  await type(port, '7891');
  for (const locale of ['en', 'vi'] as const) {
    await act(async () => setLocale(locale));
    expect([...host.querySelectorAll('input')].find(node => node.value === '7891')).toBe(port);
    const picker = host.querySelector<HTMLButtonElement>('button[aria-haspopup="listbox"]')!;
    await click(picker);
    const options = document.querySelector('[role="listbox"]')!;
    expect(options).not.toBeNull();
    expect(options.textContent).not.toMatch(/\p{Script=Han}/u);
    expect(host.textContent?.replaceAll('原始账号', '')).not.toMatch(/\p{Script=Han}/u);
    await click([...options.querySelectorAll('[role="option"]')].find(node => node.textContent?.includes('HTTP'))!);
  }
});
