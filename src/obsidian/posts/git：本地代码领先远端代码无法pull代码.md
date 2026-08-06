---
title: git：本地代码领先远端代码无法pull代码
date: 2026-07-13
tags:
  - documents
public: true
star: false
---
# git：本地代码领先远端代码无法pull代码

## 操作步骤

### 使用变基拉取 (Pull with Rebase)

避免生成merge的脏commit，会把本地的 commit，**整体挪到** 远程的 commit 的最新进度后面，保持一条直线。

```bash
git pull --rebase origin master
```