"""对外请求使用同一份标准桌面 Chrome User-Agent。

没有来源专属配置时使用这份默认值。带 Cookie 的来源可在「来源和凭证」填写取 Cookie 的浏览器
User-Agent，由 `scraping_access.client_for` 按站应用；本机浏览器路径由浏览器管理身份。
"""

# Chrome 153，2026-09-24 按用户 Chrome 的 `chrome://version` 核对；采用标准缩减版本格式。
USER_AGENT = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
              "(KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36")
