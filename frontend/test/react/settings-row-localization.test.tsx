import { act } from 'react';
import { afterEach, expect, it, vi } from 'vitest';
import { setLocale } from '../../src/i18n';
import { SettingsRow } from '../../src/react/components/settings-rows';
import { NumberSetting } from '../../src/react/settings-panel/number-setting';
import { DialRow } from '../../src/react/settings-panel/legacy-controls';
import { useTranslation } from '../../src/react/i18n';
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

it('数值校验提示随当前语言更新并保留未通过校验的输入', async () => {
  const host = await mount(<NumberSetting id="batchSizeSetting" label="每批作品" value={60} onApply={vi.fn()} />);
  const input = host.querySelector('input')!;
  await type(input, '0');
  await act(async () => { input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })) });
  const error = host.querySelector<HTMLElement>('[data-number-error]')!;
  expect(error.hidden).toBe(false);
  expect(error.textContent).toContain('请输入');
  for (const locale of ['en', 'vi'] as const) {
    await act(async () => setLocale(locale));
    expect(error.textContent).not.toMatch(/\p{Script=Han}/u);
    expect(error.textContent).toContain('1');
    expect(error.textContent).toContain('200');
    expect(host.querySelector('input')).toBe(input);
    expect(input.value).toBe('0');
    expect(input.getAttribute('aria-invalid')).toBe('true');
  }
});

it('光晕拉条的可访问名称随语言更新且保留拉条节点和值', async () => {
  function LocalizedDial() {
    const t = useTranslation();
    return <DialRow field="strength" label={t('强度')} max={100} value={45} hidden={false} onStep={vi.fn()} onSettle={vi.fn()} />;
  }
  const host = await mount(<LocalizedDial />);
  const slider = host.querySelector('[role="slider"]')!;
  expect(slider.getAttribute('aria-label')).toBe('强度');
  for (const locale of ['en', 'vi'] as const) {
    await act(async () => setLocale(locale));
    expect(host.querySelector('[role="slider"]')).toBe(slider);
    expect(slider.getAttribute('aria-label')).not.toMatch(/\p{Script=Han}/u);
    expect(slider.getAttribute('aria-valuenow')).toBe('45');
  }
});
