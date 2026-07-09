---
title: Git：用 dev 分支隔离 main 上的待提交改动
date: 2026-06-18
tags:
  - documents
public: true
star: false
---
# Git：用 dev 分支隔离 main 上的待提交改动

## 场景

当前在 `main` 分支上有两个已经 commit 的改动，但因为需要等其他项目适配，暂时不能推送或合并。
这时又来了新任务需要改同一套代码，需要把这两个提交先"挪"出去，让 `main` 保持干净。

## 核心思路

1. 基于当前 `main` 创建一个 `dev` 分支，保留这两个提交。
2. 把 `main` 回退到这两个提交之前的状态。
3. 在 `main` 上做新任务。
4. 等其他项目适配好后，再把 `dev` 合并回 `main`。

## 操作步骤

### 1. 创建 dev 分支

```bash
git branch dev
```

这会在当前 `main` 的 HEAD 处创建一个 `dev` 分支，包含这两个提交。

### 2. 回退 main

```bash
git checkout main
git reset --hard HEAD~2
```

> ⚠️ `--hard` 会直接丢弃 main 上这两个 commit 的改动。但因为已经在 `dev` 分支保存了一份，所以不会丢。

执行后：

- `main`：干净，回到改动前的基线
- `dev`：保留两个提交，等待后续合并

### 4. 验证

```bash
git branch -v
```

输出示例：

```text
  dev   a1b2c3d  提交2的说明
* main  e4f5g6h  更早的提交说明
```

### 5. 在 main 上做新任务

```bash
git checkout main
# 正常改代码、add、commit
```

## 后续合并

等其他项目适配好后，把 `dev` 的改动合并回 `main`：

```bash
git checkout main
git merge dev
```

如果期间 `main` 有新提交，也可以先 rebase：

```bash
git checkout dev
git rebase main
git checkout main
git merge dev
```

## 注意事项

- `git reset --hard` 是破坏性操作，执行前确保 `dev` 分支已经创建成功。
- 如果两个提交之后还有别人的提交，不要直接用 `HEAD~2`，需要用 `git reset --hard <commit-hash>` 指定回退目标。
- 如果工作区有未提交的改动，先 `git stash` 或 `git add` + `git commit`，避免被清理。
