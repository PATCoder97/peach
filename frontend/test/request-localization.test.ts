import { afterEach, describe, expect, it } from 'vitest';
import { ApiError } from '../src/api';
import { requestErrorMessage, requestErrorSource } from '../src/core/request-error';
import { LOCALE_KEY, setLocale } from '../src/i18n';

afterEach(() => {
  setLocale('zh-CN');
  localStorage.removeItem(LOCALE_KEY);
});

describe('请求反馈的界面语言', () => {
  it('HTTP、网络与超时反馈随语言切换，同时保留状态优先级', () => {
    setLocale('vi');
    expect(requestErrorMessage('Unauthorized', 401)).toContain('Phiên đăng nhập');
    expect(requestErrorMessage(new TypeError('Failed to fetch'))).toContain('Không thể kết nối');
    expect(requestErrorMessage('read timed out')).toContain('thời');
    expect(requestErrorMessage('timeout in handler', 500)).toContain('không xử lý');
    setLocale('en');
    expect(requestErrorMessage('Unauthorized', 401)).toContain('session has expired');
    expect(requestErrorMessage(new TypeError('Failed to fetch'))).toContain('Cannot connect');
  });

  it('界面翻译不更改错误响应体和服务端原始原因', () => {
    const body = { errors: { path: '媒体盘没有挂载，请先连接媒体盘。' }, path: 'R:\\原始目录' };
    setLocale('vi');
    const error = new ApiError(body.errors.path, 409, body);
    expect(error.status).toBe(409);
    expect(error.body).toBe(body);
    expect(error.message).toContain('Ổ lưu trữ');
    setLocale('en');
    expect(requestErrorMessage(error)).toContain('media drive is not mounted');
    expect(requestErrorSource(body.errors.path, 409)).toBe(body.errors.path);
    expect(body.path).toBe('R:\\原始目录');
  });
});
