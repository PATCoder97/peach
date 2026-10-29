import assert from 'node:assert/strict';
import { mkdirSync } from 'node:fs';
import { after, before, it } from 'node:test';
import type { Browser } from 'playwright-core';
import { launch, layout, visit, VIEWPORTS } from './harness.ts';

let browser: Browser;
before(async () => { browser = await launch() });
after(async () => { await browser?.close() });

for (const locale of ['vi', 'en']) for (const viewport of VIEWPORTS) {
  it(`${locale}/${viewport.name}：已统计存储、图例和清理确认使用所选语言`, async () => {
    const view = await visit(browser, '/settings/maintenance', viewport, async page => {
      await page.addInitScript(language => localStorage.setItem('peach.locale.v1', language), locale);
      await page.route('**/api/configuration', async route => {
        const data = await (await route.fetch()).json();
        await route.fulfill({ json: { ...data, storage: {
          data_root: '/tmp/settings-example', free_bytes: 4 * 2 ** 30, total_bytes: 8 * 2 ** 30, system_drive: false,
          job: { state: 'idle', message: '' }, relocation: { available: true, message: '', last: null },
          usage: { measured_at: 1793276000, total_bytes: 2 ** 30, total_files: 3, categories: [
            { key: 'database', label: '数据库', description: '影片、人物、标签与观看记录',
              note: 'Peach 的全部资料都在这里，删除就是清空媒体库', cleanable: false, bytes: 2 ** 29, files: 1, reclaimable: 0 },
            { key: 'playback', label: '播放缓存', description: '浏览器不能直接播放的影片转码后的副本',
              note: '再次播放时重新转码', cleanable: true, bytes: 2 ** 29, files: 1, reclaimable: 2 ** 29 },
          ] },
        } } });
      });
    });
    try {
      const section = view.page.locator('#storageSettings');
      await section.locator('[data-category="playback"]').waitFor();
      assert.doesNotMatch(await section.innerText(), /\p{Script=Han}/u);
      const box = section.locator('[data-category="playback"] input[type="checkbox"]');
      await box.check();
      await section.getByRole('button', { name: locale === 'vi' ? 'Dọn mục đã chọn' : 'Clean selected', exact: true }).click();
      const dialog = view.page.getByRole('dialog', { name: locale === 'vi' ? 'Dọn dữ liệu đã chọn' : 'Clean selected data', exact: true });
      await dialog.waitFor();
      assert.doesNotMatch(await dialog.innerText(), /\p{Script=Han}/u);
      await view.page.keyboard.press('Escape');
      assert.equal(await box.isChecked(), true);
      const geometry = await layout(view.page);
      assert.ok(geometry.scrollWidth <= geometry.viewportWidth + 1, JSON.stringify(geometry));
      mkdirSync('../build/agent-verification/settings-localization', { recursive: true });
      await view.page.screenshot({ path: `../build/agent-verification/settings-localization/${locale}-${viewport.name}.png` });
      assert.deepEqual(view.problems, []);
    } finally { await view.close() }
  });
}
