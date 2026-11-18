# 浏览器 Docker 镜像

本 fork 的 `browser` 目标在普通镜像上增加 Chromium、Xvfb、Openbox、x11vnc 和 noVNC。
普通构建仍生成无桌面的镜像；两者共用上游应用、OCR 环境、UID/GID 入口与数据目录迁移。

## 启动

先按 [Docker 部署](DOCKER.md) 准备 `.env`、媒体挂载和数据卷，再增加：

```dotenv
PEACH_IMAGE_REPOSITORY=<个人镜像命名空间>/peach
PEACH_VERSION=vi-en
PEACH_VNC_PASSWORD_PATH=./secrets/peach_vnc_password
```

由部署者在该密码路径创建只含八个可打印 ASCII 字符的文件，末尾可换行。
文件通过 Compose secret 只读挂载；不要写进镜像、Git、命令行或日志。
宿主机文件权限须允许配置的容器 UID/GID 读取；容器降权后不会改写该只读文件。
标签以发布者实际提供的镜像为准，不能凭分支或标签存在推断镜像已经发布。

```text
docker compose -f compose.yaml -f compose.browser.yaml up -d
```

应用端口沿用普通部署。noVNC 默认在同一绑定地址的 `8901` 端口，页面为 `/vnc.html`。
`PEACH_VNC_PORT` 可以改端口；NAS 访问需按普通部署设置 `PEACH_BIND`。
VNC 原始端口只监听容器内回环地址，Chromium 调试端口不发布到宿主机。

首次设置与登录沿用上游网页流程。需要人工验证时打开 noVNC；窗口／无窗口选项继续可用，
需要操作验证页时选择窗口模式。Chromium profile 保存在 `/data/secrets/browser`。
更换镜像或重启时保留 `/data`，不要复制或公开其中的会话文件。

## 构建与验收

```text
docker build --target browser -t peach:browser .
python scripts/smoke_docker.py peach:browser --browser
```

验收只使用本次创建的临时容器、临时卷和固定测试密码，覆盖首次设置、实际服务身份、
Chromium 取页、noVNC 鉴权、重启后的浏览器会话，以及显示组件退出时整个容器停止。
不要把真实数据卷交给验收脚本；普通镜像沿用 `scripts/smoke_docker.py <镜像>`。

Actions 的 `Docker fork` 提供普通和 browser 两个 Linux amd64 目标，默认只构建和验收。
明确选择发布后才使用现有 Docker Hub 配置推送同一份已验收镜像，browser 标签加 `-browser`。
`Docker` CI 同时验收 amd64、arm64 标准镜像与 amd64 browser 镜像，浏览器目标复用标准镜像的构建缓存。
多架构发行继续使用上游标准镜像入口；browser 发布使用个人镜像流程。
