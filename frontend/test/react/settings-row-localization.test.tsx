import { act } from 'react';
import { afterEach, expect, it } from 'vitest';
import { setLocale } from '../../src/i18n';
import { SettingsRow } from '../../src/react/components/settings-rows';
import { mount, type } from './render';

afterEach(async () => { await act(async () => setLocale('zh-CN')) });

it('系统说明换语言时保留路径、输入和控件节点', async () => {
  const host = await mount(<SettingsRow label="监视本机文件夹" description={'正在监视 R:\\影片\\技术详情'}>
    <input aria-label="Raw input" defaultValue="" />
  </SettingsRow>);
  const input = host.querySelector('input');
  await type(input, 'R:\\我的收藏\\原始名称');
  await act(async () => setLocale('en'));
  expect(host.textContent).toContain('Monitor local folders');
  expect(host.textContent).toContain('Monitoring R:\\影片\\技术详情');
  await act(async () => setLocale('vi'));
  expect(host.textContent).toContain('Theo dõi thư mục cục bộ');
  expect(host.textContent).toContain('Đang theo dõi R:\\影片\\技术详情');
  expect(host.querySelector('input')).toBe(input);
  expect(input?.value).toBe('R:\\我的收藏\\原始名称');
});
