"""Docker 浏览器入口：看守虚拟显示、noVNC 与 Peach，浏览器仍由采集传输管理。"""
from __future__ import annotations

import os
from pathlib import Path
import signal
import socket
import subprocess
import sys
import tempfile
import threading
import time

from .browser_transport import BrowserUnavailable, _Browser, find_browser


def password_file() -> Path:
    """VNC 使用文件中的八位 ASCII 密码，不把凭据放进命令行或日志。"""
    path = Path(os.environ.get('PEACH_VNC_PASSWORD_FILE', '/run/secrets/peach_vnc_password'))
    try:
        password = path.read_text(encoding='ascii').removesuffix('\n').removesuffix('\r')
    except (OSError, UnicodeError):
        raise RuntimeError('Không đọc được tệp PEACH_VNC_PASSWORD_FILE; hãy gắn tệp mật khẩu noVNC.') from None
    if len(password) != 8 or any(not 33 <= ord(char) <= 126 for char in password):
        raise RuntimeError('Mật khẩu noVNC phải có đúng 8 ký tự ASCII, không có khoảng trắng.')
    return path


class Desktop:
    """本入口创建的每个进程有独立进程组，退出时连同其子进程清理。"""

    def __init__(self, stopping: threading.Event):
        self.stopping = stopping
        self.processes: list[tuple[str, subprocess.Popen]] = []

    def launch(self, name: str, *command: str) -> subprocess.Popen:
        process = subprocess.Popen(command, stdin=subprocess.DEVNULL, start_new_session=True)
        self.processes.append((name, process))
        return process

    def check(self) -> None:
        for name, process in self.processes:
            if process.poll() is not None:
                raise RuntimeError(f'{name} đã dừng, mã thoát {process.returncode}.')

    def wait_for(self, address: str | tuple[str, int]) -> None:
        deadline = time.monotonic() + 30
        while not self.stopping.is_set() and time.monotonic() < deadline:
            self.check()
            family = socket.AF_UNIX if isinstance(address, str) else socket.AF_INET
            try:
                with socket.socket(family) as connection:
                    connection.settimeout(0.5)
                    connection.connect(address)
                return
            except OSError:
                self.stopping.wait(0.1)
        raise RuntimeError('Màn hình hoặc dịch vụ noVNC chưa sẵn sàng.')

    def start(self, password: Path) -> None:
        self.launch('Xvfb', 'Xvfb', ':99', '-screen', '0', '1280x800x24', '-nolisten', 'tcp')
        self.wait_for('/tmp/.X11-unix/X99')
        self.launch('Openbox', 'openbox', '--sm-disable')
        self.launch('VNC', 'x11vnc', '-display', ':99', '-listen', '127.0.0.1', '-rfbport', '5900',
                    '-passwdfile', str(password), '-forever', '-shared', '-noxdamage', '-quiet')
        self.wait_for(('127.0.0.1', 5900))
        self.launch('noVNC', '/usr/bin/websockify', '--web=/usr/share/novnc',
                    '0.0.0.0:6080', '127.0.0.1:5900')
        self.wait_for(('127.0.0.1', 6080))
        # 在接收采集任务前核对真实 Chromium 能启动，而不静默退回已被拒绝的 HTTP 路径。
        executable = find_browser()
        if executable is None:
            raise RuntimeError('Không tìm thấy Chromium trong ảnh trình duyệt.')
        with tempfile.TemporaryDirectory(prefix='peach-browser-check-') as folder:
            browser = _Browser(executable, Path(folder), ())
            try:
                browser.start()
            except BrowserUnavailable:
                raise RuntimeError('Chromium không khởi động được; hãy kiểm tra log container.') from None
            finally:
                browser.close()
        self.check()

    def close(self) -> None:
        for _name, process in reversed(self.processes):
            try:
                os.killpg(process.pid, signal.SIGTERM)
            except ProcessLookupError:
                continue
            try:
                process.wait(timeout=30)
            except subprocess.TimeoutExpired:
                pass
            # 主进程退出后，组内仍可能有 Chromium 或 Web 子进程。
            try:
                os.killpg(process.pid, signal.SIGKILL)
            except ProcessLookupError:
                pass
            process.wait(timeout=10)
        self.processes.clear()


def main(argv: list[str] | None = None) -> int:
    stopping = threading.Event()
    for signum in (signal.SIGTERM, signal.SIGINT):
        signal.signal(signum, lambda *_: stopping.set())
    desktop = Desktop(stopping)
    try:
        desktop.start(password_file())
        if stopping.is_set():
            return 0
        desktop.launch('Peach', sys.executable, '-m', 'peach.server', *(sys.argv[1:] if argv is None else argv))
        print('Trình duyệt đã sẵn sàng. Mở cổng noVNC tại /vnc.html để xác minh khi được yêu cầu.', flush=True)
        while not stopping.wait(0.5):
            desktop.check()
        return 0
    except (OSError, RuntimeError) as error:
        print(str(error), file=sys.stderr, flush=True)
        return 1
    finally:
        desktop.close()


if __name__ == '__main__':
    raise SystemExit(main())
