import { act } from 'react';
import { afterEach, expect, it } from 'vitest';
import { setLocale } from '../../src/i18n';
import { useTranslation } from '../../src/react/i18n';
import { mount } from './render';
import { ErrorText } from '../../src/react/settings/section';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../../src/react/query';
import { BrowserSources } from '../../src/react/taste/browser-sources';

afterEach(() => setLocale('zh-CN'));

it('浏览器来源的启用与停止读取按钮具有本地化名称，保留浏览器原名', async () => {
  const browsers = [true, false].map((enabled, index) => ({
    id: `browser-${index}`, name: 'Edge 原名', path: 'R:\\资料', enabled, available: true, profiles: 1,
  }));
  setLocale('en');
  const host = await mount(<QueryClientProvider client={queryClient}>
    <BrowserSources browsers={browsers} sources={[]} range="all" />
  </QueryClientProvider>);
  expect(host.querySelector('[aria-label="Stop reading Edge 原名"]')).not.toBeNull();
  expect(host.querySelector('[aria-label="Enable Edge 原名"]')).not.toBeNull();
  await act(async()=>setLocale('vi'));
  expect(host.querySelector('[aria-label="Dừng đọc Edge 原名"]')).not.toBeNull();
  expect(host.querySelector('[aria-label="Bật Edge 原名"]')).not.toBeNull();
});

it('接口校验错误随语言切换，保持表单输入节点与原始服务端原因', async () => {
  const source = '媒体库名称请使用 1 到 80 个可见字符';
  setLocale('en');
  const host = await mount(<div><ErrorText>{source}</ErrorText><input defaultValue="我的馆藏" /></div>);
  const input = host.querySelector('input');
  expect(host.querySelector('[role=alert]')?.textContent).toBe('Use 1–80 visible characters for the media library name');
  await act(async()=>setLocale('vi'));
  expect(host.querySelector('[role=alert]')?.textContent).toBe('Tên thư viện nội dung phải gồm 1 đến 80 ký tự hiển thị');
  expect(host.querySelector('input')).toBe(input);
  expect(input?.value).toBe('我的馆藏');
  expect(source).toBe('媒体库名称请使用 1 到 80 个可见字符');
});

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
