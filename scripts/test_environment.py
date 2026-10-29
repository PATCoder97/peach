"""正式测试入口的依赖准备，只在隔离工作树自动同步环境。"""
from __future__ import annotations

import os
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT / "src") not in sys.path:
    sys.path.insert(0, str(ROOT / "src"))

from peach.runtime_prepare import Dependencies, find_uv


def prepare(root: Path, main: Path, *, run=subprocess.run, which=shutil.which,
            environ=None) -> None:
    """准备完成才允许加载测试运行器；主检出依赖只读检查。"""
    root, main = root.resolve(), main.resolve()
    if not (root / "uv.lock").is_file():
        raise RuntimeError(f"Chưa tìm thấy tệp khóa phụ thuộc kiểm thử: {root / 'uv.lock'}")
    environment = dict(os.environ if environ is None else environ)
    for name in ("VIRTUAL_ENV", "UV_PROJECT_ENVIRONMENT"):
        environment.pop(name, None)
    if root == main:
        step = Dependencies(root, run=run, which=which, environ=environment, frozen=False).check()
        if step.state != "current":
            raise RuntimeError(f"Phụ thuộc của checkout chính chưa sẵn sàng: {step.message}; hãy kiểm thử trong worktree riêng. Luồng khởi động lại sẽ đồng bộ phụ thuộc của checkout chính.")
        print("Môi trường phụ thuộc của checkout chính đã sẵn sàng.", flush=True)
        return
    if (root / ".venv").resolve() != root / ".venv":
        raise RuntimeError(".venv của worktree trỏ ra thư mục ngoài; không thể đồng bộ môi trường của checkout chính hoặc worktree khác.")
    uv = find_uv(which=which, environ=environment)
    if uv is None:
        raise RuntimeError("Chưa tìm thấy uv trong PATH hoặc thư mục cài đặt WinGet.")
    print(f"Đồng bộ môi trường kiểm thử theo uv.lock: {root / '.venv'}", flush=True)
    result = run([str(uv), "sync", "--locked", "--all-extras", "--python", sys.executable,
                  "--project", str(root)], cwd=str(root), env=environment, check=False)
    if result.returncode:
        raise RuntimeError(f"Đồng bộ phụ thuộc kiểm thử thất bại (mã thoát {result.returncode}); kiểm thử chưa khởi chạy.")


def main(argv=None) -> int:
    import argparse

    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("root", type=Path)
    parser.add_argument("main_root", type=Path)
    args = parser.parse_args(argv)
    try:
        prepare(args.root, args.main_root)
    except (RuntimeError, OSError) as error:
        print(str(error), file=sys.stderr, flush=True)
        return 3
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
