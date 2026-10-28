import { expect, it } from 'vitest';
import { translateSystem } from '../src/i18n/system';

it('系统模板翻译保留名称、路径和原始计数，不修改未知原文', () => {
  expect(translateSystem('已入库 1,234 个文件', 'en')).toBe('Imported 1,234 files');
  expect(translateSystem('正在监视 R:\\影片\\技术详情', 'vi')).toBe('Đang theo dõi R:\\影片\\技术详情');
  expect(translateSystem('扫描与资料采集已完成：识别 8 个番号，取得 65 组作品资料，自动保存 0 条', 'vi'))
    .toBe('Đã quét và thu thập thông tin: nhận diện 8 mã tác phẩm, lấy 65 bộ thông tin, tự lưu 0 bản ghi');
  expect(translateSystem('影片：已入库 3 个文件', 'en')).toBe('影片：已入库 3 个文件');
  expect(translateSystem('尚未收录的诊断原文', 'vi')).toBe('尚未收录的诊断原文');
  expect(translateSystem('已入库 3 个文件', 'zh-CN')).toBe('已入库 3 个文件');
});
