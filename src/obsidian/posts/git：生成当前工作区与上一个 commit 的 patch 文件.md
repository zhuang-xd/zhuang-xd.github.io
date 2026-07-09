---
title: Git：生成当前工作区与上一个 commit 的 patch 文件
date: 2026-06-27
tags:
  - documents
public: true
star: false
---
# Git：生成当前工作区与上一个 commit 的 patch 文件

## 场景

当前代码有需要改动的，但又不想提交，可以生成一个patch，验证完其他方案后还可以通过patch改回代码
## 操作步骤

### 1. 基础命令（未提交改动 + 上一版对比）

```bash
# 对比 HEAD（上一个commit）和当前修改，生成patch 
git diff HEAD > diff.patch
```
### 2. 使用patch

```bash
git apply diff.patch
patch -p1 < diff.patch 
```

这个p1表示层级
```bash
patch -p1 < BES2800BP-FreeRTOS/mtu_ble.patch
patch -p2 < mtu_ble.patch
```