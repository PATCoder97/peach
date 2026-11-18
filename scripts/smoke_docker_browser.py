"""浏览器镜像的真实 Chromium 取页、noVNC 鉴权与跨重启会话验收。"""
from __future__ import annotations

import json
from pathlib import Path
import subprocess
import tempfile
import time
import uuid

from smoke_docker import docker, process_identity, ready, request


PROBE_FILE = Path(__file__).resolve().parents[1] / 'tests/support/docker_browser_probe.py'


def create(name: str, volume: str, image: str) -> None:
    invalid = name + '-missing-password'
    try:
        rejected = subprocess.run(['docker', 'run', '--rm', '--name', invalid, '--network', 'none', image],
                                  capture_output=True, text=True, timeout=60, encoding='utf-8')
    finally:
        docker('rm', '--force', invalid, check=False)
    assert rejected.returncode == 1 and 'PEACH_VNC_PASSWORD_FILE' in rejected.stderr, rejected.stderr
    docker('create', '--name', name, '--network', 'none', '--shm-size', '512m',
           '--mount', f'type=volume,source={volume},target=/data',
           '--env', 'PEACH_VNC_PASSWORD_FILE=/tmp/peach-smoke-password', image)
    # 这里只生成隔离测试的固定口令，不读取部署凭据。
    with tempfile.TemporaryDirectory(prefix='peach-vnc-smoke-') as folder:
        password = Path(folder) / 'password'
        password.write_text('sample42\n', encoding='ascii')
        password.chmod(0o644)
        docker('cp', str(password), name + ':/tmp/peach-smoke-password')
    docker('start', name)


def check(name: str, phase: str) -> None:
    sources = json.loads(request(name, '/api/scraping'))['sources']
    source = next(item for item in sources if item['source'] == 'fc2ppvdb')
    assert source['browser'] and source['browser_in_container'], source
    docker('cp', str(PROBE_FILE), name + ':/tmp/peach-browser-probe.py')
    result = json.loads(docker('exec', '--user', process_identity(name), name, 'python', '/tmp/peach-browser-probe.py', phase))
    assert result['chromium'] and result['novnc_password'], result
    print(json.dumps(result, ensure_ascii=False))


def component_failure(name: str) -> None:
    """停止本次隔离容器的 VNC，入口须退出，不能让应用继续报告可用。"""
    docker('exec', name, 'python', '-c',
           "import os,signal; from pathlib import Path; "
           "pids=[int(p.name) for p in Path('/proc').iterdir() if p.name.isdigit() "
           "and (p/'comm').is_file() and (p/'comm').read_text().strip()=='x11vnc']; "
           "assert len(pids)==1,pids; os.kill(pids[0],signal.SIGTERM)")
    deadline = time.monotonic() + 70
    while time.monotonic() < deadline:
        state = json.loads(docker('inspect', '--format', '{{json .State}}', name))
        if not state['Running']:
            assert state['ExitCode'] == 1, state
            assert 'VNC đã dừng' in docker('logs', name)
            return
        time.sleep(.5)
    raise RuntimeError('Container vẫn chạy sau khi VNC đã dừng')


def main(image: str) -> None:
    """独立临时卷验证首次设置、实际降权、浏览器会话与组件失败退出。"""
    name = 'peach-browser-smoke-' + uuid.uuid4().hex[:12]
    volume = name + '-data'
    try:
        docker('volume', 'create', volume)
        create(name, volume, image)
        ready(name, setup=True)
        result = json.loads(request(name, '/api/setup', authenticated=False, body={
            'media_dir': [], 'skip_media': True, 'scan_now': False, 'access_enabled': True,
            'access_password': 'smoke-password', 'access_confirm': 'smoke-password'}))
        assert result.get('url') == '/?onboarding=1', result
        ready(name)
        assert process_identity(name) == '1000:1000'
        check(name, 'seed')
        docker('restart', '--time', '75', name)
        ready(name)
        assert process_identity(name) == '1000:1000'
        check(name, 'check')
        component_failure(name)
        print(json.dumps({'image': image, 'checks': ['first-setup', 'non-root', 'chromium', 'novnc-auth',
                                                    'browser-session-restart', 'component-failure']}))
    finally:
        docker('rm', '--force', name, check=False)
        docker('volume', 'rm', volume, check=False)
