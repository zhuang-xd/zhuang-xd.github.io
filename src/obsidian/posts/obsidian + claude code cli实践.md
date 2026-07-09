---
title: obsidian + claude code cli实践
date: 2026-06-06
tags:
  - documents
public: true
star: false
---
# obsidian + claude code cli实践

## 效果

![](../attachments/images/Pasted%20image%2020260606062307.png)

## 背景

由于接触了 [claude code desktop接入第三方api](claude%20code%20desktop接入第三方api.md) 于是 就把 `claude cli` 也尝试一下
## 思路

本地是基于 claudian插件 实现将 `claude cli` 接入 `obsidian`，通过 `obsidian skill` 实现ai与ob的联动，并且本身是一个基于vue3的博客 [Zhuang Xiao Dong](https://zhuang-xd.github.io/#blog) 项目，实现发布的效果
## 操作

### 安装

1. claude cli
```shell
npm install -g @anthropic-ai/claude-code
```

2. obsidian cli
![](../attachments/images/Pasted%20image%2020260606062852.png)

3. claudian 插件，不需要额外的配置，直接开启即可
![](../attachments/images/Pasted%20image%2020260606063107.png)

4.  在 `claudian` 中用自然语言安装 `obsidian skill`