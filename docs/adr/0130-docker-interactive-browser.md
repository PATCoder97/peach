# ADR-0130：Docker 提供带交互式浏览器的独立变体

- 状态：已接受
- 日期：2026-10-31
- 修订：ADR-0105 的容器分发范围；ADR-0065 的本机浏览器用于容器虚拟显示。

## 背景

FC2PPV-DB 与 JAVten 可能拒绝带浏览器 Cookie 的 HTTP 客户端，同一网络出口也不保证放行。
无桌面 Docker 镜像不具备 ADR-0065 的本机浏览器能力，另一个浏览器容器也不会被 Peach 自动使用。

## 决策

保留原镜像，增加同一源码构建的 `X.Y.Z-browser` 变体。浏览器变体从应用运行层派生，包含 Debian
Chromium、Xvfb、Openbox、x11vnc、noVNC 与 websockify；直接包在 Dockerfile 固定版本。
复用 `BrowserTransport` 启动浏览器和读取页面，不引入远程 CDP 服务或验证码解题服务。

入口以现有非 root 用户启动显示与 noVNC，实际启动一次 Chromium 检查可用性后再启动 `peach.server`。
关键进程退出时报告组件并退出，由 Docker 重启策略处理。退出只清理本入口创建的进程组。

noVNC 使用独立密码文件。传统 VNC 只使用密码前八位，入口要求正好八位可打印 ASCII，不接受空格。
凭据不进入启动参数或日志。VNC 仅监听容器回环，CDP 使用动态回环端口，只发布应用与 noVNC 端口。
noVNC 页面资源可读取，查看与控制桌面需要密码。HTTP 部署限受信任私有网络，远程访问使用 VPN 或 TLS。

Chromium 在浏览器变体使用 `--no-sandbox`，由非 root 容器隔离承担该边界，不要求特权模式。
原桌面和无桌面镜像不设置此参数。profile 位于凭据目录，随 `/data` 持久化，不进入构建和日志导出。

## 验收与限制

两个变体分别构建并用临时卷冒烟。浏览器变体验证实际 Chromium 取页、noVNC WebSocket 的正确与错误密码、
HTTP 旧冷却切换到浏览器，以及重启后的 Cookie。初始化、鉴权、配置、扫描、Range、转码、桥环境、
重载与持久化沿用公共容器验收。

隔离页面通过不证明 FC2PPV-DB 在用户网络已恢复，Cloudflare 仍可能再次要求确认或拒绝访问。
此功能不重置已有配置和真实账本，不更改来源连接方式。
