/** 请求与连接错误的界面文案；服务端原始响应仍由调用方保留。 */
export const requestMessages: Readonly<Record<string, readonly [string, string]>> = {
  '提交内容有误，请检查输入后重试。': ['Check the submitted values and try again.', 'Hãy kiểm tra thông tin đã nhập rồi thử lại.'],
  '登录已失效，请刷新页面重新登录。': ['Your session has expired. Refresh the page and sign in again.', 'Phiên đăng nhập đã hết hạn. Hãy tải lại trang và đăng nhập lại.'],
  '当前设备没有执行此操作的权限，请在运行 Peach 的电脑上操作。': ['This device cannot perform this action. Open Peach on the device running the service.', 'Thiết bị này không có quyền thực hiện thao tác. Hãy mở Peach trên thiết bị đang chạy dịch vụ.'],
  '请求的内容已不存在，请刷新列表。': ['This item no longer exists. Refresh the list.', 'Mục này không còn tồn tại. Hãy tải lại danh sách.'],
  '请求超时，请稍后重试。': ['The request timed out. Try again later.', 'Yêu cầu đã hết thời gian chờ. Hãy thử lại sau.'],
  '当前状态不允许此操作，请刷新后重试。': ['This action is unavailable in the current state. Refresh and try again.', 'Không thể thực hiện thao tác ở trạng thái hiện tại. Hãy tải lại rồi thử lại.'],
  '提交内容过大，请减少数量后重试。': ['The request is too large. Select fewer items and try again.', 'Yêu cầu quá lớn. Hãy giảm số lượng mục rồi thử lại.'],
  '请求过于频繁，请稍后重试。': ['Too many requests. Try again later.', 'Có quá nhiều yêu cầu. Hãy thử lại sau.'],
  'Peach 服务处理失败，请重试；持续失败时查看托盘日志。': ['The Peach service could not complete the request. Try again; if it keeps failing, check the service logs.', 'Dịch vụ Peach không xử lý được yêu cầu. Hãy thử lại; nếu lỗi tiếp diễn, kiểm tra nhật ký dịch vụ.'],
  'Peach 服务没有取回结果，请稍后重试；持续失败时查看托盘日志。': ['The Peach service could not retrieve a result. Try again later; if it keeps failing, check the service logs.', 'Dịch vụ Peach chưa lấy được kết quả. Hãy thử lại sau; nếu lỗi tiếp diễn, kiểm tra nhật ký dịch vụ.'],
  'Peach 服务暂时不可用，请稍后重试。': ['The Peach service is temporarily unavailable. Try again later.', 'Dịch vụ Peach tạm thời không khả dụng. Hãy thử lại sau.'],
  '等待服务响应超时，请稍后重试。': ['The service did not respond in time. Try again later.', 'Dịch vụ không phản hồi kịp thời. Hãy thử lại sau.'],
  '无法连接到 Peach 服务，请确认网络连接和托盘服务已启动。': ['Cannot connect to Peach. Check your network and make sure the Peach service is running.', 'Không thể kết nối đến Peach. Hãy kiểm tra mạng và bảo đảm dịch vụ Peach đang chạy.'],
  '等待服务响应超时，请检查连接后重试。': ['The service did not respond in time. Check the connection and try again.', 'Dịch vụ không phản hồi kịp thời. Hãy kiểm tra kết nối rồi thử lại.'],
  '操作未完成，请重试；持续失败时查看托盘日志。': ['The action could not be completed. Try again; if it keeps failing, check the service logs.', 'Chưa thực hiện được thao tác. Hãy thử lại; nếu lỗi tiếp diễn, kiểm tra nhật ký dịch vụ.'],
  '媒体盘没有挂载，请先连接媒体盘。': ['The media drive is not mounted. Connect it first.', 'Ổ lưu trữ nội dung chưa được gắn. Hãy kết nối ổ trước.'],
};
