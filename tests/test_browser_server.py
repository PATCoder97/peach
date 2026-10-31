"""浏览器容器的密码边界、进程看守和失败清理。"""
import contextlib
import io
import os
from pathlib import Path
import signal
import sys
import tempfile
import threading
import unittest
from unittest.mock import Mock, patch

from peach import browser_server


class BrowserPasswordTests(unittest.TestCase):
    def test_password_is_read_from_a_file_without_changing_it(self):
        with tempfile.TemporaryDirectory() as folder:
            path = Path(folder).resolve() / 'password'
            path.write_bytes(b'sample42\r\n')
            with patch.dict(os.environ, {'PEACH_VNC_PASSWORD_FILE': str(path)}):
                self.assertEqual(browser_server.password_file(), path)
            self.assertEqual(path.read_bytes(), b'sample42\r\n')

    def test_missing_or_invalid_passwords_are_rejected_without_disclosing_them(self):
        with tempfile.TemporaryDirectory() as folder:
            path = Path(folder).resolve() / 'password'
            with patch.dict(os.environ, {'PEACH_VNC_PASSWORD_FILE': str(path)}):
                with self.assertRaises(RuntimeError):
                    browser_server.password_file()
                for password in ('', 'short', 'too-long-password', 'sample 2', 'sample42\nother', '密码密码密码密码'):
                    with self.subTest(password=password):
                        path.write_text(password, encoding='utf-8')
                        with self.assertRaises(RuntimeError) as caught:
                            browser_server.password_file()
                        if password:
                            self.assertNotIn(password, str(caught.exception))


@unittest.skipUnless(os.name == 'posix', '进程组看守用于 Linux 容器')
class BrowserDesktopTests(unittest.TestCase):
    def test_a_failed_child_is_reported_with_its_component_name(self):
        desktop = browser_server.Desktop(threading.Event())
        process = desktop.launch('Xvfb', sys.executable, '-c', 'raise SystemExit(7)')
        self.addCleanup(desktop.close)
        process.wait(timeout=10)
        with self.assertRaisesRegex(RuntimeError, 'Xvfb.*7'):
            desktop.check()

    def test_shutdown_reaps_a_task_owned_process_group(self):
        desktop = browser_server.Desktop(threading.Event())
        process = desktop.launch('fixture', sys.executable, '-c', 'import time; time.sleep(60)')
        self.addCleanup(desktop.close)
        self.assertEqual(os.getpgid(process.pid), process.pid)
        desktop.close()
        self.assertEqual(process.poll(), -signal.SIGTERM)
        self.assertEqual(desktop.processes, [])

    def test_stopped_startup_does_not_wait_for_a_listener(self):
        stopping = threading.Event()
        stopping.set()
        desktop = browser_server.Desktop(stopping)
        with self.assertRaisesRegex(RuntimeError, 'sẵn sàng'):
            desktop.wait_for(('127.0.0.1', 0))

    def test_desktop_binds_vnc_to_loopback_and_preflights_chromium(self):
        desktop = browser_server.Desktop(threading.Event())
        with patch.object(desktop, 'launch') as launch, patch.object(desktop, 'wait_for'), \
                patch.object(desktop, 'check'), patch.object(browser_server, 'find_browser', return_value='/usr/bin/chromium'), \
                patch.object(browser_server, '_Browser') as browser:
            desktop.start(Path('/run/secrets/test-password'))
        commands = {call.args[0]: call.args[1:] for call in launch.call_args_list}
        self.assertIn('-nolisten', commands['Xvfb'])
        vnc = commands['VNC']
        self.assertEqual(vnc[vnc.index('-listen') + 1], '127.0.0.1')
        self.assertEqual(vnc[vnc.index('-passwdfile') + 1], '/run/secrets/test-password')
        browser.return_value.start.assert_called_once()
        browser.return_value.close.assert_called_once()

    def test_failed_browser_preflight_closes_its_browser(self):
        desktop = browser_server.Desktop(threading.Event())
        with patch.object(desktop, 'launch'), patch.object(desktop, 'wait_for'), \
                patch.object(browser_server, 'find_browser', return_value='/usr/bin/chromium'), \
                patch.object(browser_server, '_Browser') as browser:
            browser.return_value.start.side_effect = browser_server.BrowserUnavailable('fixture')
            with self.assertRaisesRegex(RuntimeError, 'Chromium'):
                desktop.start(Path('/run/secrets/test-password'))
        browser.return_value.close.assert_called_once()

    def test_startup_failure_cleans_the_desktop_and_never_launches_peach(self):
        desktop = Mock()
        desktop.start.side_effect = RuntimeError('Xvfb failed')
        with patch.object(browser_server, 'Desktop', return_value=desktop), \
                patch.object(browser_server, 'password_file', return_value=Path('/fixture')), \
                patch.object(browser_server.signal, 'signal'), contextlib.redirect_stderr(io.StringIO()):
            self.assertEqual(browser_server.main([]), 1)
        desktop.launch.assert_not_called()
        desktop.close.assert_called_once()

    def test_runtime_failure_cleans_every_component(self):
        desktop = Mock()
        desktop.check.side_effect = RuntimeError('noVNC failed')
        stopping = Mock()
        stopping.is_set.return_value = False
        stopping.wait.return_value = False
        with patch.object(browser_server, 'Desktop', return_value=desktop), \
                patch.object(browser_server, 'password_file', return_value=Path('/fixture')), \
                patch.object(browser_server.threading, 'Event', return_value=stopping), \
                patch.object(browser_server.signal, 'signal'), contextlib.redirect_stderr(io.StringIO()), \
                contextlib.redirect_stdout(io.StringIO()):
            self.assertEqual(browser_server.main(['--port', '8900']), 1)
        desktop.launch.assert_called_once_with('Peach', sys.executable, '-m', 'peach.server', '--port', '8900')
        desktop.close.assert_called_once()


if __name__ == '__main__':
    unittest.main()
