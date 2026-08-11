---
title: Git：重新编辑某一个提交记录
date: 2026-08-11
tags:
  - documents
public: true
star: false
---
# Git：重新编辑某一个提交记录
## 场景

我在这个本地提交`d59e55f8f145ef37695c4250a8b390f439529489`中误将脚本`clean_2800.sh`也添加了进去并提交了，我想在这个问题提交中把这个文件去除
## 操作步骤

```shell
# 1. 启动交互式变基，从该提交的父提交开始
git rebase -i d59e55f8f145ef37695c4250a8b390f439529489^
# 2. 在弹出的编辑器中，找到该提交所在行（最前面就是 d59e55f...）
#    编辑：把开头的 pick 改为 edit，保存并退出。
#    删除：把开头的 pick 改为 drop，保存并退出。
# 3. 此时 Git 会停在那个提交，你可以修改它：
git rm --cached clean_2800.sh
git commit --amend --no-edit
# 4. 继续变基，应用后续的提交
git rebase --continue
```


