---
title: Git：将本地其他分支的提交合并到master分支
date: 2026-07-13
tags:
  - documents
public: true
star: false
---
# git：将本地其他分支的提交合并到master分支

## 操作步骤

切换到主分支，将其他分支的某个提交的hash写上

```bash
git cherry-pick 7fc3763
```