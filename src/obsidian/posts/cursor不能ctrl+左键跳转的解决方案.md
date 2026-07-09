---
title: cursor不能ctrl+左键跳转的解决方案
date: 2026-06-12
tags:
  - documents
public: true
star: false
---
# cursor不能ctrl+左键跳转的解决方案

在装新版本cursor之后，同步VSCODE插件，发现cursor上的C插件正常，但无法使用ctrl+左键跳转。原因是C/C最新拓展目前不支持cursor，需要降版本安装1.23.5

- [linux版本](https://github.com/microsoft/vscode-cpptools/releases/download/v1.23.5/cpptools-linux-x64.vsix)
- [windows版本]([https://github.com/microsoft/vscode-cpptools/releases/download/v1.23.5/cpptools-linux-x64.vsix](https://github.com/microsoft/vscode-cpptools/releases/download/v1.23.5/cpptools-windows-x64.vsix))