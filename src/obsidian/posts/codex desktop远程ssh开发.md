---
title: codex desktop远程ssh开发
date: 2026-07-09
tags:
  - documents
public: true
star: false
---
# codex desktop远程ssh开发

## 效果

![](../attachments/images/Pasted%20image%2020260709131850.png)

## 背景

由于 windows 端改 linux中的代码时，codex喜欢用powershell，这俩经常斗智斗勇，所以尝试通过远程ssh，调用远端的 codex cli 来修改代码
## 操作

### linux安装codex cli

安装 nvm：
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

重启终端或执行 `source ~/.bashrc`，然后安装nodejs
```shell
nvm install --lts   # 安装最新 LTS（v20.x）
```

安装codex cli
```shell
npm install -g @openai/codex
```

### 添加codex配置文件

`config.toml`
```toml
model_provider = "custom"
model = "gpt-5.5"
model_context_window = 1000000
model_auto_compact_token_limit = 900000 #可以设置为400000等值，自动压缩token过长有时会导致注意力不佳
model_reasoning_effort = "high"
disable_response_storage = true
approvals_reviewer = "user"

[model_providers]

[projects."/code/2800"]
trust_level = "trusted"
[model_providers.custom]
name = "custom"
wire_api = "responses"
requires_openai_auth = true
base_url = "YOUR_URL" # 这里可以填写中转的url

[projects."/root/.codex"]
trust_level = "trusted"

[tui.model_availability_nux]
"gpt-5.5" = 4
```

`auth.json`
```json
{
  "OPENAI_API_KEY": "YOUR_API_KEY"
}
```

准备完后 llinux 端的 codex cli 就可以跑通了

![](../attachments/images/Pasted%20image%2020260709131623.png)

### windows端 codex desktop远程连接

![](../attachments/images/Pasted%20image%2020260709131742.png)

已经可以开启对话了

![](../attachments/images/Pasted%20image%2020260709131850.png)

