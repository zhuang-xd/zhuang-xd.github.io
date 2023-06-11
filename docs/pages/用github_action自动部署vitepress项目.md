---
tags: old
title: 用github_action自动部署vitepress项目
sidebar: false
date: 2023-05-26
---
# 用github_action自动部署vitepress项目

## 前言

原本是想用 [Vercel](https://vercel.com/dashboard) 的自动部署的，但没有自己的域名，生成的静态站点域名是 `vercel.app` 的，因此感觉还不如直接用 `github.io`，于是就琢磨起用 `github action` 自动部署站点，但是遇到了不少坑

## 写workflow的配置文件

相当于一个linux云服务器，可以使用别人写好的配置文件，可以在项目添加

以下是我的配置文件 `.github\workflows\deploy.yml`

```YAML
name: Build and deploy

on:
  push:
    branches: [master]

  workflow_dispatch:

jobs:
  Build:
    name: Build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Use Node.js
        uses: actions/setup-node@v1
        with:
          node-version: '16'

      - name: Install dependencies
        run: npm install

      - name: Build VitePress site
        run: npm run docs:build

      - name: Deploy Github Pages
        uses: JamesIves/github-pages-deploy-action@releases/v4
        with:
          token: ${{ secrets.ACCESS_TOKEN }}
          folder: ./docs/.vitepress/dist
          branch: gh-pages
```

## 授予workflow自动部署的权限

配置文件中的

```YAML
token: ${{ secrets.ACCESS_TOKEN }}
```

`ACCESS_TOKEN` 就是授予wrokflow权限，配置步骤如下:

### 一、创建 github token

1. 登录GitHub账号
2. 点击右上角头像，选择Settings
3. 在左侧菜单中选择Developer settings
4. 选择Personal access tokens
5. 点击Generate new token
6. 输入Token description，选择需要的权限
7. 点击Generate token
8. 复制生成的token，保存好备用

### 二、创建项目中的 secret

setting -> Secrets and varibles -> Actions -> New repository secret

- name： 随便取
- value： `github token`

### 三、自动执行脚本

windows下通过任务计划程序 + 编写 `deploy.bat` 批处理，实现每小时自动push

```shell
cd d:/blog
git add -A
git commit --date=now -m 'deploy'
git push -f git@github.com:zhuang-xd/zhuang-xd.github.io.git master
```

注：以 `SYSTEM` 的用户账户去执行，就会只在后台运行cmd了

### 四、其他问题

自动部署的时候可能还是会遇到如下问题，同样是权限的问题，这里是[解决方法](https://blog.csdn.net/ibigboy/article/details/126402267)

## 参考

1. [用GitHub Action + VuePress自动化部署自己的文档网站](https://juejin.cn/post/6937532951223599141#heading-6)
2. [vitepress+github actions搭建全自动部署高性能SSG网站](https://juejin.cn/post/7168799961939722277)
3. [windows计划任务后台运行，去掉cmd的黑窗口](https://blog.csdn.net/lvshuocool/article/details/106352024)