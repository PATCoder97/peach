import assert from 'node:assert/strict';
import { after, before, describe, it } from 'node:test';
import { mkdirSync } from 'node:fs';
import type { Browser } from 'playwright-core';
import { launch, layout, settle, visit, VIEWPORTS } from './harness.ts';

describe('来源链接与凭据布局', () => {
  let browser: Browser;
  before(async () => { browser = await launch(); });
  after(async () => { await browser?.close(); });
  for (const viewport of VIEWPORTS) {
    for (const locale of ['vi', 'en']) {
      it(`Cookie 的 User-Agent 与拒绝原因使用所选语言且无溢出（${locale}/${viewport.name}）`, async () => {
        const source = { source: 'fc2ppvdb', label: 'FC2PPV-DB', login: 'https://fc2ppv-db.com/',
          accepts_cookie: true, cookie_saved: true, browser: false, network: 'direct', user_agent: '' };
        const opened = await visit(browser, '/sources', viewport, async page => {
          await page.addInitScript(language => localStorage.setItem('peach.locale.v1', language), locale);
          await page.route('**/api/scraping', route => route.fulfill({ json: { sources: [source] } }));
          await page.route('**/api/scraping/check', route => route.fulfill({ json: {
            ok: true, source: { ...source, cooldown_until: Date.now() / 1000 + 900 },
            results: [{ label: '来源页面', ok: false, status: 403, request_sent: true, reason: 'http_forbidden',
              message: '来源本次返回 HTTP 403，已暂停请求。Cookie 已保存不代表站方接受；请核对 Cookie、User-Agent 与浏览器的网络出口。' }],
          } }));
        });
        try {
          const card = opened.page.getByRole('region', { name: 'FC2PPV-DB', exact: true });
          const agent = card.getByRole('textbox', { name: locale === 'vi'
            ? 'User-Agent của trình duyệt lấy Cookie' : 'User-Agent of the browser used to obtain the Cookie', exact: true });
          await agent.fill('Browser-Fixture/1.0');
          await card.getByRole('button', { name: locale === 'vi' ? 'Kiểm tra kết nối' : 'Check connection', exact: true }).click();
          await card.getByText(locale === 'vi' ? /Nguồn vừa trả HTTP 403/ : /The source returned HTTP 403 on this attempt/).waitFor();
          assert.doesNotMatch(await card.innerText(), /\p{Script=Han}/u);
          assert.equal(await agent.inputValue(), 'Browser-Fixture/1.0');
          const dimensions = await layout(opened.page);
          assert.ok(dimensions.scrollWidth <= dimensions.viewportWidth + 1, JSON.stringify(dimensions));
          mkdirSync('../build/agent-verification/browser', { recursive: true });
          await card.screenshot({ path: `../build/agent-verification/browser/source-cookie-${locale}-${viewport.name}.png` });
          assert.deepEqual(opened.problems, []);
        } finally { await opened.close() }
      });
    }
    it(`自定义来源可试查、保存且表单无横向溢出（${viewport.name}）`, { timeout: 60_000 }, async () => {
      const opened = await visit(browser, '/sources', viewport);
      const page = opened.page;
      const items: unknown[] = [];
      await page.route('**/api/custom-metadata', async route => {
        const body = route.request().method() === 'POST' ? route.request().postDataJSON() : null;
        if (body?.action === 'preview') {
          assert.equal(body.code, 'DEMO-001');
          await route.fulfill({ json: { record: { code: 'DEMO-001', title: '接口试查结果' } } });
          return;
        }
        if (body) items.push({ ...body, id: 'custom-demo' });
        await route.fulfill({ json: { items } });
      });
      try {
        await page.reload();
        const region = page.getByRole('region', { name: '自定义元数据来源', exact: true });
        const add = region.getByRole('button', { name: '添加来源', exact: true });
        const assertClosedCard = async () => {
          await add.waitFor(); await settle(page);
          const geometry = await add.evaluate(button => {
            const row = button.parentElement!;
            const card = button.closest('section')!.lastElementChild!;
            return { divider: parseFloat(getComputedStyle(row).borderTopWidth),
              radius: parseFloat(getComputedStyle(card).borderTopLeftRadius),
              top: button.getBoundingClientRect().top - card.getBoundingClientRect().top };
          });
          assert.equal(geometry.divider, 0, JSON.stringify(geometry));
          assert.ok(geometry.radius > 0 && geometry.top >= 12 && geometry.top <= 18, JSON.stringify(geometry));
        };
        await assertClosedCard();
        await page.getByRole('button', { name: '添加来源', exact: true }).click();
        const form = page.getByRole('form', { name: '元数据来源配置', exact: true });
        await form.getByRole('button', { name: '取消', exact: true }).click();
        await form.waitFor({ state: 'detached' });
        await assertClosedCard();
        await region.screenshot({ path: `../build/agent-verification/browser/custom-source-closed-${viewport.name}.png` });
        await add.click();
        const editorGeometry = await region.evaluate(node => {
          const card = node.lastElementChild!.getBoundingClientRect();
          const input = node.querySelector('form label')!.getBoundingClientRect();
          const form = node.querySelector('form')!.getBoundingClientRect();
          const footer = node.querySelector('form button[type="submit"]')!.parentElement!.getBoundingClientRect();
          return { top: input.top - card.top, left: footer.left - card.left, right: card.right - footer.right, bottom: form.bottom - footer.bottom };
        });
        assert.ok(editorGeometry.top >= 14 && editorGeometry.top <= 18, JSON.stringify(editorGeometry));
        assert.ok(Math.abs(editorGeometry.left) <= 1 && Math.abs(editorGeometry.right) <= 1 && Math.abs(editorGeometry.bottom) <= 1, JSON.stringify(editorGeometry));
        await form.getByRole('textbox', { name: '来源名称', exact: true }).fill('公开演示元数据');
        await form.getByRole('textbox', { name: 'JSON 接口地址', exact: true }).fill('https://example.com/api/{code}');
        const code = form.getByRole('textbox', { name: '试查番号（回车查询）', exact: true });
        await code.fill('DEMO-001');
        await code.press('Enter');
        await form.locator('pre').filter({ hasText: '接口试查结果' }).waitFor();
        const dimensions = await layout(page);
        assert.ok(dimensions.scrollWidth <= dimensions.viewportWidth + 1, JSON.stringify(dimensions));
        assert.deepEqual(dimensions.offenders, []);
        await page.getByRole('region', { name: '自定义元数据来源', exact: true }).screenshot({
          path: `../build/agent-verification/browser/custom-source-${viewport.name}.png`,
        });
        await form.getByRole('button', { name: '保存来源', exact: true }).click();
        await form.waitFor({ state: 'detached' });
        const savedSource = region.getByText('公开演示元数据', { exact: true }).locator('..');
        await savedSource.locator('[data-status-tone="neutral"]').filter({ hasText: '已停用' }).waitFor();
        assert.equal(items.length, 1);
        assert.equal(await add.evaluate(button => parseFloat(getComputedStyle(button.parentElement!).borderTopWidth)), 1);
        assert.deepEqual(opened.problems, []);
      } finally { await opened.close(); }
    });
    it(`GitHub 标识、网址和外链箭头居中对齐（${viewport.name}）`, async () => {
      const opened = await visit(browser, '/sources', viewport);
      try {
        await opened.page.route('**/api/scraping/amane-bridge', route => route.fulfill({ json: {
          installed: true, installed_version: '0.17.0', version: '0.17.0',
          repository: 'https://github.com/sgzw-x/amane', license: 'GPL-3.0', sites: [], job: { status: 'idle' },
        } }));
        await opened.page.reload();
        const link = opened.page.locator('section[aria-label="amane"] a');
        await link.waitFor(); await settle(opened.page);
        const positions = await link.evaluate(node => {
          const boxes = [node.querySelector('img')!, node.querySelector('span')!, node.querySelector('svg')!].map(el => {
            const r = el.getBoundingClientRect(); return { center: r.y + r.height / 2, width: r.width };
          });
          return boxes;
        });
        assert.equal(positions.length, 3);
        assert.ok(positions.every(p => p.width > 0));
        assert.ok(Math.max(...positions.map(p => p.center)) - Math.min(...positions.map(p => p.center)) <= 1);
        const dimensions = await layout(opened.page);
        assert.ok(dimensions.scrollWidth <= dimensions.viewportWidth);
      } finally { await opened.close(); }
    });
    it(`凭据的每个输入字段占满正文宽度（${viewport.name}）`, async () => {
      const opened = await visit(browser, '/settings/library?section='+encodeURIComponent('来源与订阅'), viewport);
      try {
        await opened.page.route('**/api/follow/credentials', route => route.fulfill({ json: {
          root: '', providers: [{ provider: 'simpcity', provider_label: 'SimpCity', followable: true,
            requirement: 'required', needs: ['cookie', 'user_agent'], fields: [], missing: ['cookie', 'user_agent'], why: '来源登录说明' }],
        } }));
        await opened.page.reload();
        const field = opened.page.getByLabel('cookie', { exact: true });
        await field.waitFor(); await settle(opened.page);
        const labels = await opened.page.evaluate(() => ['来源凭据', '作品资料站点'].map(name => {
          const section = document.querySelector(`[aria-label="${name}"]`)!;
          const label = section.querySelector('p')!;
          return { x: label.getBoundingClientRect().x, size: getComputedStyle(label).fontSize, weight: getComputedStyle(label).fontWeight };
        }));
        assert.deepEqual(labels[0], labels[1], '配置分区标题对齐且使用相同排版');
        for (const name of ['cookie', 'user_agent']) {
          const geometry = await opened.page.getByLabel(name, { exact: true }).evaluate(node => {
            const wrapper = node.closest('[data-input-size]')!;
            return { width: wrapper.getBoundingClientRect().width, available: wrapper.parentElement!.getBoundingClientRect().width };
          });
          assert.ok(Math.abs(geometry.width - geometry.available) <= 1, JSON.stringify(geometry));
        }
        const dimensions = await layout(opened.page);
        assert.ok(dimensions.scrollWidth <= dimensions.viewportWidth);
      } finally { await opened.close(); }
    });
  }
});
