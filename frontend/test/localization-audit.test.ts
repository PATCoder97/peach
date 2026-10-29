import { describe, expect, it } from 'vitest';
import { inspectSource, missingTranslations } from '../scripts/localization-audit.mjs';

describe('界面语言覆盖清单', () => {
  it('识别正文与可访问属性，不把注释、模块名和业务属性键当成界面', () => {
    const result = inspectSource('sample.tsx', `
      import module from '中文模块';
      // 中文注释
      const entity = { '中文字段': record.title };
      const view = <button title="删除作品" aria-label="删除作品">删除</button>;
    `);
    expect(result.errors).toEqual([]);
    expect(result.findings.map(item => [item.kind, item.text])).toEqual([
      ['attribute', '删除作品'], ['attribute', '删除作品'], ['text', '删除'],
    ]);
  });

  it('记录插值文案，区分译文入口和需要人工分类的业务值', () => {
    const result = inspectSource('sample.tsx', `
      const label = t('已完成 {count} 项', { count });
      const html = uiTextHtml('立即重试');
      const original = '原始馆藏标题';
      const view = <p>{translate(\`已完成 \${count} 项\`)}</p>;
    `);
    expect(result.findings.map(item => [item.kind, item.translated])).toEqual([
      ['string', true], ['string', true], ['string', false], ['template', true],
    ]);
    expect(result.findings[3]?.text).toBe('已完成 {value0} 项');
  });

  it('动态馆藏字段保持原样且不会被清单虚构成可翻译文案', () => {
    const result = inspectSource('sample.tsx', '<p title={asset.path}>{asset.title}{performer.name}</p>');
    expect(result.findings).toEqual([]);
    expect(inspectSource('sample.tsx', 'const = ;').errors.length).toBeGreaterThan(0);
  });

  it('已调用翻译但未登记词条时仍报告缺口，不把接入等同于译文完整', () => {
    const { findings } = inspectSource('sample.tsx', "const label = uiText(' 技术详情 '); const other = t('缺失文案');");
    expect(missingTranslations(findings, new Set(['技术详情'])).map(item => item.text)).toEqual(['缺失文案']);
  });
});
