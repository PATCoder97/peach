import { act } from 'react';
import { afterEach, expect, it } from 'vitest';
import { ApiError } from '../../src/api';
import { LOCALE_KEY, setLocale } from '../../src/i18n';
import { useAction } from '../../src/react/settings/use-action';
import { click, mount, settle } from './render';

afterEach(async () => { await act(async () => setLocale('zh-CN')); localStorage.removeItem(LOCALE_KEY) });

function FailingAction() {
  const action = useAction();
  return <>
    <button onClick={() => { void action.run('save', async () => { throw new ApiError('Unauthorized', 401) }, () => {}) }}>Save</button>
    <p role="alert">{action.error}</p>
  </>;
}

it('已显示的表单错误随语言更新，无需重新请求或再次触发失败', async () => {
  await act(async () => setLocale('vi'));
  const host = await mount(<FailingAction />);
  await click(host.querySelector('button'));
  await settle();
  expect(host.querySelector('[role="alert"]')?.textContent).toContain('Phiên đăng nhập');
  const button = host.querySelector('button');
  await act(async () => setLocale('en'));
  expect(host.querySelector('[role="alert"]')?.textContent).toContain('session has expired');
  expect(host.querySelector('button')).toBe(button);
});
