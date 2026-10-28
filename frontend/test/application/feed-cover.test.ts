import { afterEach, expect, it, vi } from 'vitest';

import { advanceImageFallback } from '../../src/card-art/image-fallback';
import { feedNewCardHtml, feedNewCoverHtml, feedNetworkNote } from '../../src/application/feed.js';
import { setLocale } from '../../src/i18n';

afterEach(() => setLocale('zh-CN'));

it('新作操作与网络提示使用所选语言，标题姓名与作品键保留原文', () => {
  for (const [locale, open, retry] of [['en','Open title details: 中文-123','next run'],['vi','Mở chi tiết tác phẩm: 中文-123','lượt tiếp theo']] as const) {
    setLocale(locale);
    const host = document.createElement('div');
    host.innerHTML = feedNewCardHtml({id:1,code:'中文-123',title:'标题原文',performers:'姓名原文'});
    expect(host.querySelector('.feednewopen')?.getAttribute('aria-label')).toBe(open);
    expect(host.querySelector('.feednewopen')?.getAttribute('href')).toBe('/works/%E4%B8%AD%E6%96%87-123');
    expect(host.querySelector('[data-feed-action="want"]')).not.toBeNull();
    expect(host.textContent).toContain('标题原文');
    expect(host.textContent).toContain('姓名原文');
    expect(feedNetworkNote(2,[{has_cover:false}])).toContain(retry);
  }
});

// 封面片段只读条目字段，其余域控制器换成空壳，免得装载整套应用。
vi.mock('../../src/application/catalog.js', () => ({ catalogState: {} }));
vi.mock('../../src/application/preferences.js', () => ({ preferencesState: {}, wireDrag: () => {} }));
vi.mock('../../src/application/entity.js', () => ({ pushEntityPage: () => {} }));
vi.mock('../../src/application/effects', () => ({ applicationEffects: {} }));

const render = (item: Record<string, unknown>) => {
  const host = document.createElement('div');
  host.innerHTML = feedNewCoverHtml(item);
  return host;
};

it('未入库新作的官方封面经 Peach 代理取图，页面不出现图床地址', () => {
  const host = render({ code: 'ABC-001', has_cover: false,
    cover_url: 'https://awsimgsrc.dmm.co.jp/pics_dig/digital/video/abc00001/abc00001pl.jpg' });
  const image = host.querySelector('img')!;
  expect(image.getAttribute('src')).toBe('/cover-image?code=ABC-001');
  expect(host.innerHTML).not.toContain('dmm.co.jp');
});

it('代理取不到封面时换成「封面未取得」占位，不留裂图', () => {
  const host = render({ code: 'ABC-001', has_cover: false, cover_url: 'https://pics.dmm.co.jp/digital/video/abc00001/abc00001pl.jpg' });
  expect(advanceImageFallback(host.querySelector('img'))).toBe('drop');
  expect(host.querySelector('img')).toBeNull();
  expect(host.querySelector('span.nopic')?.textContent).toBe('封面未取得');
});

it('没有可代理的地址或番号时直接显示无封面，不发请求', () => {
  for (const item of [{ code: 'ABC-001', cover_url: '' }, { code: '', cover_url: 'https://pics.dmm.co.jp/a.jpg' }]) {
    const host = render({ ...item, has_cover: false });
    expect(host.querySelector('img')).toBeNull();
    expect(host.querySelector('[data-feed-cover-state="missing"]')?.textContent).toBe('无封面');
  }
});
