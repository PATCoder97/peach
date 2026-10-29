import { expect, it } from 'vitest';
import { translateSystem } from '../src/i18n/system';

it.each([
  ['浏览兴趣以自然风景为主，Peach 中稳定出现标签甲、标签乙。',
    'Browsing interests mainly focus on 自然风景; 标签甲、标签乙 appear consistently in Peach.',
    'Sở thích duyệt web chủ yếu là 自然风景; 标签甲、标签乙 xuất hiện thường xuyên trong Peach.'],
  ['浏览兴趣目前以自然风景为主，Peach 观看证据仍偏少。',
    'Browsing interests currently focus on 自然风景; viewing evidence in Peach is still limited.',
    'Sở thích duyệt web hiện chủ yếu là 自然风景; bằng chứng xem trong Peach còn ít.'],
  ['Peach 观看行为目前更集中在标签甲、标签乙。',
    'Viewing activity in Peach currently focuses more on 标签甲、标签乙.',
    'Hoạt động xem trong Peach hiện tập trung hơn vào 标签甲、标签乙.'],
  ['探索 标签甲', 'Explore 标签甲', 'Khám phá 标签甲'],
  ['浏览信号 1,234 次 · 馆藏 56 部 · 已有观看印证',
    '1,234 browsing signals · 56 library titles · Corroborated by viewing',
    '1,234 tín hiệu duyệt web · 56 tác phẩm trong thư viện · Đã đối chiếu với lượt xem'],
  ['浏览信号 1,234 次 · 馆藏 56 部 · 尚无观看印证',
    '1,234 browsing signals · 56 library titles · No viewing corroboration yet',
    '1,234 tín hiệu duyệt web · 56 tác phẩm trong thư viện · Chưa đối chiếu với lượt xem'],
])('口味系统文案翻译并保留来源名称与计数：%s', (source, english, vietnamese) => {
  expect(translateSystem(source, 'en')).toBe(english);
  expect(translateSystem(source, 'vi')).toBe(vietnamese);
  expect(translateSystem(source, 'zh-CN')).toBe(source);
});

it('接口异常前缀保留类型，只翻译登记的原因', () => {
  expect(translateSystem('ValueError: 播放列表名称最多 80 个字符','en'))
    .toBe('ValueError: Playlist names can contain at most 80 characters');
  expect(translateSystem('ValueError: 播放列表名称最多 80 个字符','vi'))
    .toBe('ValueError: Tên danh sách phát dài tối đa 80 ký tự');
  expect(translateSystem('RuntimeError: 未登记的来源原文','vi'))
    .toBe('RuntimeError: 未登记的来源原文');
});

it('后端配置、下载与复核提示翻译完整模板，路径与诊断值保持原样', () => {
  expect(translateSystem('所选图片不在本机缓存：R:\\资料\\封面.jpg','en'))
    .toBe('The selected image is not in the local cache: R:\\资料\\封面.jpg');
  expect(translateSystem('该创作者有 230 条作品，超过单次批准上限 200，请在页面上显式勾选后再通过','vi'))
    .toBe('Người sáng tạo này có 230 tác phẩm, vượt giới hạn 200 cho mỗi lần phê duyệt. Hãy đánh dấu rõ các mục trên trang trước khi phê duyệt.');
  expect(translateSystem('分析浏览记录：已处理 3 / 5 条','vi'))
    .toBe('Đang phân tích lịch sử duyệt web: đã xử lý 3 / 5');
  expect(translateSystem('文件整理未完成：R:\\作品\\原名.mp4','en'))
    .toBe('File organization is incomplete: R:\\作品\\原名.mp4');
  expect(translateSystem('未登记的诊断消息：原始原因','en')).toBe('未登记的诊断消息：原始原因');
});

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
