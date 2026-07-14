---
title: 恢复标准 dev null 设备节
date: 2026-07-14
tags:
  - documents
public: true
star: false
---
# 恢复标准 dev null 设备节

## 背景

编译报错，当前环境的 `/dev/null` 不是字符设备，而是一个普通文件（`file /dev/null` 显示 `empty`，权限还是 `0755`）。

并行构建时，有任务把 ELF 写进它
- 另一个任务又把它当空 C 源文件读取，2800 出现“把 ELF 当 C 编译”；
- 6350 的 `as-option` 探测也因此失效

## 操作步骤

恢复标准 /dev/null 设备节

```bash
# 删除现有文件
sudo rm -f /dev/null

# 重建字符设备节点
sudo mknod -m 0666 /dev/null c 1 3
```