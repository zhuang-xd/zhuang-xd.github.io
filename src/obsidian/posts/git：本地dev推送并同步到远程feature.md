---
title: Git：本地 dev 推送到远程 feature 并统一分支名
date: 2026-06-18
tags:
  - documents
public: true
star: false
---
# Git：本地 dev 推送到远程 feature 并统一分支名

## 场景

本地有一个 `dev` 分支，远程仓库有一个 `feature` 分支，想把本地 `dev` 的改动推送到远程 `feature`。
但本地 `dev` 和远程 `feature` 名字不一致，操作和后续维护都比较别扭，最终想把本地分支也改名为 `feature` 并建立跟踪关系。

## 核心思路

1. 直接重命名本地 `dev` 为 `feature`，并设置跟踪远程 `origin/feature`。
2. 如果远程 `feature` 有本地没有的提交，先 `git pull origin feature` 同步。
3. 之后就可以直接用 `git push` / `git pull` 操作。

## 操作步骤

### 1. 重命名dev分支

```bash
git checkout feature
git branch -m dev feature
```

### 2. 推送本地 dev 到远程 feature

```bash
git pull origin feature
git branch -u origin/feature feature
git push
```

> 这个命令只是**一次性**指定本次 push 的源和目标，不会把 `master` 或其他分支的默认推送目标改成 `feature`。