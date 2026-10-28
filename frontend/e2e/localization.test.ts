/* 各路由的语言验收：记录可见系统文案，来源内容留给用例逐项判断。 */
import assert from 'node:assert/strict';
import { mkdirSync, writeFileSync } from 'node:fs';
import { after, before, it } from 'node:test';
import type { Browser } from 'playwright-core';
import { launch, layout, requiredEnv, settle, visit, VIEWPORTS } from './harness.ts';

let browser: Browser;
before(async () => { browser = await launch() });
after(async () => { await browser?.close() });

const routes = ['/', '/jav', '/jav?tab=wants', '/follow', '/subscriptions', '/stats', '/taste', '/review', '/tasks',
  '/settings/library', '/settings/network', '/settings/downloads', '/settings/subscriptions', '/settings/maintenance',
  '/settings/appearance', '/settings/playback', '/settings/jav', '/settings/search', '/settings/content',
  '/playlists', '/data-cleanup', '/duplicates', '/quality-goals', '/sources', '/junk-files',
  '/performers', '/creators', '/studios', '/agencies', '/series', '/tags'];

const indexSourceText = ['林晚晴', '顾清和', '苏念安', '陈知夏', '周见山', '何以宁', '白露', '江小满',
  '山间小屋', '城市步行者', '厨房观察员', '晨雾映画', '海岸线工作室', '山谷工房', '极光影像', '四季纪录',
  '城市漫步', '慢生活厨房', '山野四季', '手作日常', '夜景延时',
  '延时摄影', '自然风景', '城市夜景', '航拍', '料理', '手工', '旅行日记', '音乐现场', '横屏', '竖屏'];

// 合成馆藏原始字段保留中文；界面断言只扣除当前路由中的这些已知资料。
const fixtureText: Readonly<Record<string, readonly string[]>> = {
  ...Object.fromEntries(['/performers', '/creators', '/studios', '/agencies', '/series', '/tags'].map(route => [route, indexSourceText])),
  '/': ['河畔慢跑.mp4', '阳台花园.mp4', '车站的傍晚.mp4', '雪后山径.mp4'],
  '/review': ['厨房里的周末', '陈知夏', '苏念安', '极光影像', '慢生活厨房', '横屏', '料理', '音乐现场',
    '雨后街道', '顾清和', '江小满', '海岸线工作室', '城市漫步', '竖屏', '自然风景', '湖面航拍', '夜景延时'],
};

it('从语言选择器切换后保留设置值、控件节点和持久偏好', async () => {
  const view = await visit(browser, '/settings/appearance', VIEWPORTS[0]!, async page => {
    await page.addInitScript(() => { if (!localStorage.getItem('peach.locale.v1')) localStorage.setItem('peach.locale.v1', 'en') });
  });
  try {
    const picker = view.page.locator('[data-language-setting] button');
    await picker.waitFor({ state: 'visible' });
    const control = view.page.locator('#uiSoundsSetting');
    const selected = !(await control.isChecked());
    await control.setChecked(selected);
    const original = await control.elementHandle();
    await picker.click();
    await view.page.getByRole('option', { name: 'Tiếng Việt', exact: true }).click();
    await view.page.waitForFunction(() => document.documentElement.lang === 'vi');
    assert.equal(await control.isChecked(), selected);
    assert.ok(await control.evaluate((node, previous) => node === previous, original));
    assert.equal(await view.page.evaluate(() => localStorage.getItem('peach.locale.v1')), 'vi');
    await view.page.reload();
    await picker.waitFor({ state: 'visible' });
    assert.equal(await view.page.locator('html').getAttribute('lang'), 'vi');
    assert.equal(await view.page.evaluate(() => localStorage.getItem('peach.locale.v1')), 'vi');
    assert.ok(view.page.url().startsWith(requiredEnv('PEACH_E2E_ORIGIN')));
    assert.deepEqual(view.problems, []);
  } finally { await view.close() }
});
for (const language of ['en', 'vi']) {
  for (const viewport of VIEWPORTS) {
  it(`${language}/${viewport.name} 作品详情与播放器设置使用所选语言`, async () => {
    const view = await visit(browser, `/assets/${requiredEnv('PEACH_E2E_ITEM')}`, viewport, async page => {
      await page.addInitScript(locale => localStorage.setItem('peach.locale.v1', locale), language);
    });
    try {
      await view.page.locator('#stage[open] [data-item-side]').waitFor({ state: 'visible' });
      const toggle = view.page.locator('#stage [data-player-quality] > button');
      await toggle.waitFor({ state:'visible' });
      assert.equal(await toggle.getAttribute('aria-label'), language === 'en' ? 'Player settings' : 'Cài đặt trình phát');
      await toggle.click();
      const menu = view.page.locator('#stage .vjs-peach-settings-menu');
      await menu.waitFor({ state:'visible' });
      assert.doesNotMatch(await menu.innerText(), /\p{Script=Han}/u);
      await view.page.locator('[data-player-quality-view]').click();
      assert.doesNotMatch(await menu.innerText(), /\p{Script=Han}/u);
      assert.ok(await menu.locator('[data-player-quality-option]').count() > 0);
      const geometry = await layout(view.page);
      assert.ok(geometry.scrollWidth <= geometry.viewportWidth + 1, JSON.stringify(geometry));
      mkdirSync('../build/agent-verification/localization', { recursive: true });
      await view.page.screenshot({path:`../build/agent-verification/localization/${language}-${viewport.name}-player.png`});
      assert.deepEqual(view.problems, []);
    } finally { await view.close() }
  });
  it(`${language}/${viewport.name} 路由可渲染并保留所选语言`, async () => {
    mkdirSync('../build/agent-verification/localization', { recursive: true });
    const report: Record<string, string[]> = {};
    const untranslatedReport: Record<string, string[]> = {};
    for (const route of routes) {
      const view = await visit(browser, route, viewport, async page => {
        await page.addInitScript(locale => localStorage.setItem('peach.locale.v1', locale), language);
      });
      try {
        await view.page.locator('#main').waitFor({ state: 'visible' });
        await view.page.locator('#grid [data-media-card], #grid [data-geist-empty-state], #stats [role="tab"], #stats [data-run-id], #stats [data-empty-state], #stats form, #stats [data-collection-summary], #stats #libraryProcessing button, #count [data-junk-filters], [data-settings-panel] [data-settings-nav], #index [data-k], #index [data-empty-state]').first().waitFor({ state: 'visible' });
        await settle(view.page);
        assert.equal(await view.page.locator('html').getAttribute('lang'), language);
        const content = /^\/settings\/(appearance|playback|jav|search|content)$/.test(route) ? '#settingsPanel' : '#main';
        assert.ok((await view.page.locator(content).innerText()).trim().length > 0, `${route}: 正文为空`);
        const geometry = await layout(view.page);
        assert.ok(geometry.scrollWidth <= geometry.viewportWidth + 1,
          `${language}/${viewport.name}${route}: ${JSON.stringify(geometry)}`);
        report[route] = await view.page.evaluate(() => {
          const text: string[] = [];
          const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
          while (walker.nextNode()) {
            const node = walker.currentNode;
            const parent = node.parentElement;
            if (parent && !parent.closest('script,style,noscript,[data-code-block] code') && parent.getClientRects().length && getComputedStyle(parent).visibility !== 'hidden'
              && /\p{Script=Han}/u.test(node.textContent || '')) text.push(node.textContent!.trim());
          }
          for (const node of document.querySelectorAll('[aria-label],[title],[placeholder]')) {
            if (!node.getClientRects().length) continue;
            for (const attribute of ['aria-label', 'title', 'placeholder']) {
              const value = node.getAttribute(attribute);
              if (value && /\p{Script=Han}/u.test(value)) text.push(`${attribute}: ${value}`);
            }
          }
          return [...new Set(text)];
        });
        const untranslated = report[route]!.filter(text => {
          for (const original of fixtureText[route] || []) text = text.replaceAll(original, '');
          return /\p{Script=Han}/u.test(text);
        });
        if (untranslated.length) untranslatedReport[route] = untranslated;
        if (['/settings/appearance', '/data-cleanup', '/performers', '/tags'].includes(route)) {
          await view.page.screenshot({ path: `../build/agent-verification/localization/${language}-${viewport.name}-${route.slice(1).replaceAll('/', '-')}.png` });
        }
        assert.deepEqual(view.problems, [], `${route}: ${view.problems.join('\n')}`);
      } finally { await view.close() }
    }
    mkdirSync('../build/agent-verification/localization', { recursive: true });
    writeFileSync(`../build/agent-verification/localization/${language}-${viewport.name}.json`, JSON.stringify(report, null, 2));
    assert.deepEqual(untranslatedReport, {}, `${language}/${viewport.name}: 系统文案仍含中文`);
  });
  }
}
