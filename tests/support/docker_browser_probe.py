"""隔离浏览器容器中的真实页面、noVNC 与会话验收。"""


def main() -> None:
    import http.server
    import json
    from pathlib import Path
    import tempfile
    import threading
    import time
    from unittest.mock import patch
    from peach.browser_transport import BrowserTransport, _Browser
    from peach.http import HttpRequest
    from peach.scraping_access import SourceTransport, cooldown_path

    phase = __import__('sys').argv[1]
    class Fixture(http.server.BaseHTTPRequestHandler):
        def do_GET(self):
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            if self.path == '/seed':
                self.send_header('Set-Cookie', 'peach_fixture=kept; Max-Age=3600; Path=/; SameSite=Lax')
            self.end_headers()
            self.wfile.write(('<html><title>Peach fixture</title><body>' + self.headers.get('Cookie', '') +
                             '</body></html>').encode())
        def log_message(self, *_args):
            pass

    server = http.server.ThreadingHTTPServer(('127.0.0.1', 9009), Fixture)
    threading.Thread(target=server.serve_forever, daemon=True).start()
    root = Path('/data/secrets')
    cooldown = cooldown_path(root, 'fc2ppvdb')
    if phase == 'seed':
        cooldown.write_text(json.dumps({'until': time.time() + 900, 'blocks': 1, 'via': 'http'}))
    transport = SourceTransport(root)
    try:
        with patch('peach.scraping_access.source_for', return_value='fc2ppvdb'):
            response = transport(HttpRequest('GET', 'http://127.0.0.1:9009/' + phase, {}), 30, 65536)
        browser_transport = transport.transports['fc2ppvdb']
        assert isinstance(browser_transport, BrowserTransport), 'Không dùng đường Chromium'
        assert response.status == 200 and b'Peach fixture' in response.body
        assert not cooldown.exists(), 'Thời gian chờ HTTP cũ vẫn chặn Chromium'
        if phase == 'check':
            assert b'peach_fixture=kept' in response.body, 'Cookie không tồn tại sau khi khởi động lại'
        browser_transport.close()
    finally:
        transport.close()
        server.shutdown()

    # Tải trang noVNC thật, dùng chính mô-đun RFB của nó kết nối WebSocket và xác thực VNC.
    with tempfile.TemporaryDirectory(prefix='novnc-smoke-') as folder:
        browser = _Browser('/usr/bin/chromium', Path(folder), ('--headless=new',), attended=True)
        try:
            browser.start()
            browser.navigate('http://127.0.0.1:6080/vnc.html')
            for _ in range(100):
                if browser.evaluate('document.readyState') == 'complete':
                    break
                time.sleep(.1)
            for password, expected in [('invalid!', False), ('sample42', True)]:
                expression = """(async () => {
                  const {default: RFB} = await import('/core/rfb.js');
                  const target = document.createElement('div'); document.body.append(target);
                  return await new Promise((resolve, reject) => {
                    const rfb = new RFB(target, 'ws://127.0.0.1:6080/websockify',
                      {credentials: {password: PASSWORD}});
                    const timer = setTimeout(() => {rfb.disconnect(); reject(new Error('VNC timeout'));}, 15000);
                    const done = (ok) => {clearTimeout(timer); rfb.disconnect(); target.remove(); resolve(ok);};
                    rfb.addEventListener('connect', () => done(true));
                    rfb.addEventListener('securityfailure', () => done(false));
                  });
                })()""".replace('PASSWORD', json.dumps(password))
                reply = browser.socket.call('Runtime.evaluate', 20, expression=expression,
                                             awaitPromise=True, returnByValue=True)
                assert reply.get('result', {}).get('value') is expected, reply
        finally:
            browser.close()
    print(json.dumps({'phase': phase, 'chromium': True, 'novnc_password': True, 'old_http_cooldown': 'cleared'}))


if __name__ == "__main__":
    main()
