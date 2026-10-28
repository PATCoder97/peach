import { expect, it } from 'vitest';
import { translateSystem } from '../src/i18n/system';

it('容器扫描的阶段名称与部分完成回执按语言显示', () => {
  expect(translateSystem('读取媒体属性与检查垃圾','en')).toBe('Read media properties and check for junk');
  expect(translateSystem('采集外部资料与封面','vi')).toBe('Lấy thông tin và ảnh bìa từ nguồn ngoài');
  expect(translateSystem('1 项需要处理，可重试未完成的部分。','en'))
    .toBe('Items needing attention: 1. Retry unfinished parts.');
  expect(translateSystem('3 项需要处理，可重试未完成的部分。','vi'))
    .toBe('3 mục cần xử lý. Có thể thử lại các phần chưa hoàn tất.');
});

it('系统盘容量优先匹配完整模板，卸载说明保留源码安装的手动步骤', () => {
  expect(translateSystem('26.8 GB 可用，共 149.9 GB（系统盘）','en'))
    .toBe('26.8 GB available of 149.9 GB (system drive)');
  expect(translateSystem('26.8 GB 可用，共 149.9 GB（系统盘）','vi'))
    .toBe('Khả dụng 26.8 GB, tổng 149.9 GB (ổ hệ thống)');
  expect(translateSystem('源码安装请先关闭开机自启并退出托盘，再手动移除项目与数据目录','vi'))
    .toBe('Với bản cài từ mã nguồn, hãy tắt tự khởi động và thoát khay hệ thống trước, rồi xóa thủ công thư mục dự án và dữ liệu.');
});

it('系统模板翻译保留名称、路径和原始计数，不修改未知原文', () => {
  expect(translateSystem('已入库 1,234 个文件', 'en')).toBe('Imported 1,234 files');
  expect(translateSystem('正在监视 R:\\影片\\技术详情', 'vi')).toBe('Đang theo dõi R:\\影片\\技术详情');
  expect(translateSystem('扫描与资料采集已完成：识别 8 个番号，取得 65 组作品资料，自动保存 0 条', 'vi'))
    .toBe('Đã quét và thu thập thông tin: nhận diện 8 mã tác phẩm, lấy 65 bộ thông tin, tự lưu 0 bản ghi');
  expect(translateSystem('影片：已入库 3 个文件', 'en')).toBe('影片：已入库 3 个文件');
  expect(translateSystem('尚未收录的诊断原文', 'vi')).toBe('尚未收录的诊断原文');
  expect(translateSystem('已入库 3 个文件', 'zh-CN')).toBe('已入库 3 个文件');
});
