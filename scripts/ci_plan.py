"""按已验证基线与提交影响生成 CI 矩阵，未知范围与手动验证使用全量。"""
from __future__ import annotations

import argparse
import json
import os
from pathlib import Path
import subprocess
import sys

if not __package__:
    sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
    __package__ = "scripts"
ROOT = Path(__file__).resolve().parents[1]


def browser_matrix(root: Path = ROOT, count: int = 6) -> dict:
    """以实测秒数分配文件；每个文件只属于一个独立 runner。"""
    timing_file = root / "scripts/ci-browser-timings.json"
    timings = json.loads(timing_file.read_text(encoding="utf-8"))["seconds"] if timing_file.is_file() else {}
    files = [path.relative_to(root).as_posix() for path in (root / "frontend/e2e").rglob("*.test.ts")]
    if not files or count < 1:
        raise ValueError("Ma trận trình duyệt phải có ca kiểm thử và số phân mảnh phải là số nguyên dương")
    groups = [[] for _ in range(min(count, len(files)))]
    totals = [0.0 for _ in groups]
    for name in sorted(files, key=lambda name: (-timings.get(name, 30.0), name)):
        slot = min(range(len(groups)), key=lambda index: (totals[index], index))
        groups[slot].append(name)
        totals[slot] += timings.get(name, 30.0)
    return {"include": [{"index": index, "files": json.dumps(sorted(group)),
                         "estimated_seconds": round(totals[index])}
                        for index, group in enumerate(groups)]}


def validate_results(results: dict, required: list[str], *, phase: str = "complete") -> None:
    """所选任务全部成功；未选择的任务可以跳过，不能隐藏失败。"""
    if phase == "frontend":
        required = [name for name in required if name in {"plan", "web-bundle", "web-vendor"}]
        mandatory = {"plan"}
    elif phase == "complete":
        mandatory = {"plan", "python", "workflow-lint", "frontend-ready"}
    elif phase == "desktop":
        mandatory = {"plan"}
    else:
        raise ValueError(f"Giai đoạn kiểm tra không hợp lệ: {phase}")
    if not mandatory.issubset(required):
        raise ValueError("Kế hoạch kiểm tra thiếu tác vụ bắt buộc")
    bad = {name: results.get(name, {}).get("result", "missing")
           for name in required if results.get(name, {}).get("result") != "success"}
    bad.update({name: item["result"] for name, item in results.items()
                if item["result"] not in {"success", "skipped"}})
    if bad:
        raise ValueError(f"Tác vụ kiểm tra thất bại: {bad}")


def runtime_paths(paths: list[str], contents: dict | None) -> list[str]:
    from . import change_impact
    return [path for path in paths if not change_impact.documentation(path)
            and not (contents and path in contents
                     and change_impact.kind(path, *contents[path]) == "prose")]


def browser_input(path: str) -> bool:
    from . import test_runner as runner
    if path == "tests/test_web_e2e.py" or path.startswith("frontend/e2e/"):
        return True
    if path.startswith(("tests/", "frontend/test/", "frontend/scripts/", "scripts/")):
        return False
    return path in {"src/peach/auth.py", "src/peach/server.py"} \
        or path.startswith(("src/peach/web_", "src/peach/routes_")) \
        or "web" in runner.scopes_for_changes([path])[0]


def desktop_systems(paths: list[str]) -> list[str]:
    """平台入口、打包脚本与直接回归触发对应桌面平台。"""
    systems = set()
    for path in paths:
        name = Path(path).name.lower()
        if path in {".github/workflows/desktop.yml", ".github/workflows/release.yml"}:
            systems.update(("windows-latest", "macos-latest"))
        elif any(word in name for word in ("windows", "win32")) or path.endswith(".ps1"):
            systems.add("windows-latest")
        elif any(word in name for word in ("macos", "darwin")):
            systems.add("macos-latest")
        elif path in {"peach.spec", "setup.py"} or path.startswith((
                "scripts/installer/", "resources/setup/", "src/peach/tray", "src/peach/platform",
                "src/peach/mount", "src/peach/certs", "src/peach/process", "src/peach/desktop",
                "src/peach/standalone_update", "src/peach/folder_picker", "src/peach/local_playback",
                "src/peach/netwatch", "src/peach/ffmpeg", "src/peach/hardware_transcode",
                "tests/test_tray", "tests/test_platform", "tests/test_mount", "tests/test_certs",
                "tests/test_process", "tests/test_desktop", "tests/test_standalone_update",
                "tests/test_folder_picker", "tests/test_local_playback", "tests/test_netwatch")):
            systems.update(("windows-latest", "macos-latest"))
    return sorted(systems)


def python_matrix(systems: list[str], *, wide: bool, runtime_tools: bool) -> dict:
    """全量按平台分片，定向域在一台 runner 内运行。"""
    rows = []
    for system in systems:
        scope = "full" if wide else "auto"
        # 独立 runner 承担分片，避免共享文件、端口和全量证据锁。
        shards = (4 if system == "windows-latest" else 2) if scope == "full" else 1
        for index in range(shards):
            rows.append({"os": system, "python": "3.14", "scope": scope,
                         "runtime_tools": runtime_tools,
                         "shard_index": index, "shard_count": shards})
    return {"include": rows}


def plan(event: str, paths: list[str], contents: dict | None = None, *, target: str = "linux") -> dict:
    from . import test_runner as runner
    scopes, _ = runner.scopes_for_changes(paths, contents=contents)
    wide = event == "workflow_dispatch" or "full" in scopes
    effective = runtime_paths(paths, contents)
    systems = (["macos-latest", "windows-latest"] if event == "workflow_dispatch"
               else desktop_systems(effective)) if target == "desktop" else ["ubuntu-latest"]
    matrix = python_matrix(systems, wide=wide, runtime_tools=wide or scopes != ("checks",))
    wheels = [{"os": system, "python": "3.14"} for system in systems]
    shared = wide
    browser = shared or any(browser_input(path) for path in effective)
    frontend = shared or any(path.startswith(("frontend/", "web/dist/", ".github/workflows/test.yml"))
                             or path == "scripts/copy-rules.json" for path in effective)
    vendor = shared or any(path.startswith(("web/vendor/", ".github/workflows/test.yml"))
                           or path in {"package.json", "package-lock.json", "web/index.html",
                                       "scripts/vendor_web_dependencies.mjs"} for path in effective)
    wheel = shared or "packaging" in scopes or any(path.startswith(("src/", "migrations/", "web/", "resources/"))
                                                 for path in effective)
    docker = shared or any(path in {"Dockerfile", ".dockerignore", "compose.yaml", "compose.browser.yaml", "pyproject.toml", "uv.lock",
                                   "setup.py", "MANIFEST.in", "README.md", "scripts/smoke_docker.py",
                                   "scripts/write_reporting_config.py", "scripts/build_amane_runtime.py", "scripts/smoke_docker_browser.py",
                                   "scripts/amane_bridge.spec", ".github/workflows/docker.yml",
                                   ".github/workflows/test.yml"}
                           or path.startswith(("src/", "migrations/", "web/", "resources/", "tools/amane-bridge/"))
                           for path in paths)
    if target == "desktop":
        required = ["plan", "python", "wheel-build", "wheel-smoke"] if systems else ["plan"]
        return {"matrix": matrix, "wheel_matrix": {"include": wheels},
                "active": bool(systems), "required_jobs": required, "wide": wide}
    required = ["plan", "python", "workflow-lint", "frontend-ready"]
    required += [name for enabled, names in ((browser, ["web-e2e"]), (frontend, ["web-bundle"]),
                                            (vendor, ["web-vendor"]), (wheel, ["wheel-build", "wheel-smoke"]),
                                            (docker, ["docker"]))
                 if enabled for name in names]
    return {"matrix": matrix, "wheel_matrix": {"include": wheels}, "wide": wide,
            "browser_matrix": browser_matrix(), "browser": browser, "frontend": frontend,
            "vendor": vendor, "wheel": wheel, "docker": docker, "required_jobs": required}


def github_verified_base(root: Path, workflow: str = "test.yml") -> str:
    """最近成功的主线 Test 必须属于当前祖先，失败区间继续包含在差异内。"""
    from .ci_scope import ancestor_of_head, verified_base
    repo = os.environ['GITHUB_REPOSITORY']
    payload = subprocess.check_output(
        ['gh', 'api', f'repos/{repo}/actions/workflows/{workflow}/runs?branch=master&event=push&status=success&per_page=20'],
        text=True, encoding='utf-8')
    runs = json.loads(payload)['workflow_runs']
    rows = [{'sha': run['head_sha'], 'status': 'success'} for run in runs
            if run.get('conclusion') == 'success' and run.get('event') == 'push' and run.get('head_branch') == 'master']
    current = subprocess.check_output(['git', '-C', str(root), 'rev-parse', 'HEAD'], text=True, encoding='utf-8').strip()
    base = verified_base(rows, current, ancestor_of_head(root))
    if base is None:
        raise ValueError('最近成功的主线 Test 中没有当前提交的祖先')
    return base


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--event", choices=("push", "pull_request", "workflow_dispatch"))
    parser.add_argument("--base")
    parser.add_argument("--target", choices=("linux", "desktop"), default="linux")
    parser.add_argument("--verify-results", action="store_true")
    parser.add_argument("--phase", choices=("complete", "frontend", "desktop"), default="complete")
    args = parser.parse_args()
    if args.verify_results:
        validate_results(json.loads(os.environ["RESULTS"]), json.loads(os.environ["REQUIRED_JOBS"]),
                         phase=args.phase)
        return
    if not args.event or not args.base:
        parser.error("生成计划需要 --event 与 --base")
    from . import test_runner as runner
    root = Path(__file__).resolve().parents[1]
    base = args.base
    try:
        if args.event == 'push' and args.target == 'linux':
            base = github_verified_base(root)
        elif args.event == 'push' and args.target == 'desktop':
            try:
                base = github_verified_base(root, "desktop.yml")
            except (OSError, KeyError, ValueError, subprocess.CalledProcessError) as error:
                print(f"Chưa lấy được mốc desktop đã kiểm tra; so sánh với mốc của lần đẩy này: {error}", file=sys.stderr)
        paths = runner.changed_files(root, base)
        result = plan(args.event, paths, runner.changed_contents(root, base, paths), target=args.target)
    except (OSError, KeyError, ValueError, subprocess.CalledProcessError) as error:
        if args.target == "desktop" and args.event != "workflow_dispatch":
            raise ValueError("桌面改动范围未取得，不能判为无需验证") from error
        # 首次推送、浅克隆或已删除基线：扩大验证，不能把无 diff 当成无需测试。
        print(f'Chưa lấy được mốc đã kiểm tra; chạy đầy đủ: {error}', file=sys.stderr)
        result = plan("workflow_dispatch", [], target=args.target)
    result['base'] = base
    print(json.dumps(result, ensure_ascii=False, indent=2))
    if output := os.environ.get("GITHUB_OUTPUT"):
        with Path(output).open("a", encoding="utf-8") as stream:
            for key in result:
                value = result[key]
                encoded = value if isinstance(value, str) else json.dumps(value)
                stream.write(f"{key}={encoded}\n")


if __name__ == "__main__":
    main()
