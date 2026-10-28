import { act } from 'react';
import { afterEach, expect, it } from 'vitest';
import { setLocale } from '../../src/i18n';
import { useTranslation } from '../../src/react/i18n';
import { mount } from './render';

afterEach(() => setLocale('zh-CN'));

it('登记的动态界面模板响应语言，原始字段和输入不参与翻译', async () => {
  function View() {
    const uiText = useTranslation();
    return <div><span data-status>{uiText('已评 3 星')}</span>
      <span data-source>已评 3 星</span><input defaultValue="原始名称" />
      <span data-count>{uiText('已选 {value0} 项',{value0:4})}</span></div>;
  }
  setLocale('en');
  const host = await mount(<View />);
  const input = host.querySelector('input');
  expect(host.querySelector('[data-status]')?.textContent).toBe('Rated 3 stars');
  expect(host.querySelector('[data-count]')?.textContent).toBe('4 items selected');
  await act(async()=>setLocale('vi'));
  expect(host.querySelector('[data-status]')?.textContent).toBe('Đã đánh giá 3 sao');
  expect(host.querySelector('[data-count]')?.textContent).toBe('Đã chọn 4 mục');
  expect(host.querySelector('[data-source]')?.textContent).toBe('已评 3 星');
  expect(host.querySelector('input')).toBe(input);
  expect(input?.value).toBe('原始名称');
});
