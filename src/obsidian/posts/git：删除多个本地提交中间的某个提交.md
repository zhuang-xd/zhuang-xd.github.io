---
title: Git：本地 dev 推送到远程 feature 并统一分支名
date: 2026-08-07
tags: 
public: true
star: false
---
# Git：本地 dev 推送到远程 feature 并统一分支名

## 操作步骤

`6b2927a^` 表示该提交的上一个提交

```bash
git rebase -i 6b2927a^
```

运行命令后，会弹出一个文本编辑器（通常是 Vim 或 VS Code 自带的编辑器），里面会列出从 `6b2927a` 开始到当前 HEAD 的所有提交，像这样：

```text
pick 6b2927a set ble_wifi_evn_conidx default value to 0xff
pick xxxxxxx revert "*shell_sleep as default"
```

**步骤 3：标记为删除**  
找到 `6b2927a` 开头的那一行，将前面的 `pick` 改为 `drop`（或者 `d`），或者**直接删掉这一整行**。

**步骤 4：保存并退出**  
保存文件并关闭编辑器。

Git 会自动执行变基，把这个提交丢掉，并将它后面的提交一个接一个重新应用上去。