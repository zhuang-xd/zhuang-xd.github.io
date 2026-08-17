---
title: Git：拉取远程代码时和本地代码有冲突的解决方法
date: 2026-07-13
tags:
  - documents
public: true
star: false
---
# Git：拉取远程代码时和本地代码有冲突的解决方法
## 场景

远程代码领先于本地版本，无法通过 `git pull` 直接拉取
## 操作步骤

### 方法1 使用变基拉取 (Pull with Rebase)

避免生成merge的脏commit，会把本地的 commit，**整体挪到** 远程的 commit 的最新进度后面，保持一条直线。

```bash
git pull --rebase origin master
```

### 方法2： 保留本地修改，并合并远程更新

使用 `git stash` 将本地修改暂时藏起来，拉取远程代码，然后再把修改应用回来。

```bash
# 1. 查看当前修改状态（可选）
git status
# 2. 贮藏当前所有未提交的修改
git stash
# 3. 拉取远程最新代码
git pull
# 4. 恢复之前贮藏的修改
git stash pop
```
- 如果 `stash pop` 没有冲突，修改会自动合并到最新代码中。
- 如果有冲突，Git 会提示哪些文件冲突，你需要手动解决冲突（编辑文件，删除 `<<<<<<<`、`=======`、`>>>>>>>` 标记），然后 `git add` 并 `git commit`。

如果有冲突刷要手动合并，用文本编辑器打开这两个文件，你会看到类似这样的标记：

```text
<<<<<<< Updated upstream
（远程分支的改动）
=======
（你本地 stash 中的改动）
>>>>>>> Stashed changes
```