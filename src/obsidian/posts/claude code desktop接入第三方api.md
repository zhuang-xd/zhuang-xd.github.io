---
title: claude code desktop接入第三方api
date: 2026-06-06
tags:
  - documents
public: true
star: false
---
# claude code desktop接入第三方api

## 效果

用 `claude code` 写一个贪吃蛇页游
![](../attachments/images/Pasted%20image%2020260602015323.png)

## 背景

公司提供了 阿里百炼的token 使用，研究了一下如何使用，最初是通过 `claude code for vscode` 的插件实现在 vscode 中使用，但实际上体验不如 `copolit`，于是便想使用完全体的 `claude code desktop`
## 思路

主要是
1. 开启claude code desktop的 `develop mode` 启用第三方api 
2. 通过`cc switch` 管理第三方api，转发路由给 `claude code` 使用
## 操作

### cc switch 配置
> [下载地址](https://ccswitch.io/zh/)

选中 `claude code desktop` 添加 阿里百炼 `api`
![](../attachments/images/Pasted%20image%2020260602012847.png)

url填写（我的api是百炼团队版的）
```
https://token-plan.cn-beijing.maas.aliyuncs.com/apps/anthropic
```

具体配置如下
![](../attachments/images/Pasted%20image%2020260602012818.png)

启用 `claude` 的路由转发
![](../attachments/images/Pasted%20image%2020260602013013.png)

至此 `cc switch` 相关配置已完成

### claude code desktop 配置
> [下载地址](https://claude.com/download)

参考[百炼文档](https://help.aliyun.com/zh/model-studio/claude-code?spm=a2c4g.11186623.help-menu-2400256.d_0_4_2.39083ba2Uds2xd#ccswitch-desktop-section)
![](../attachments/images/Pasted%20image%2020260602013550.png)

配置如下
![](../attachments/images/Pasted%20image%2020260602013753.png)

配置完应用更改，重启即可使用了
### claude code desktop 汉化

最后做一个 `claude code desktop` 的汉化，使用开源项目
[javaht/claude-desktop-zh-cn: Claude Desktop Chinese Patch (macOS & Windows)](https://github.com/javaht/claude-desktop-zh-cn)

选择第 `1` 种汉化方式即可
![](../attachments/images/Pasted%20image%2020260602012647.png)
