---
tags: 思维
title: Linux-arm交叉编译环境搭建
sidebar: false
date: 2023-06-05
---
# Linux-arm交叉编译环境搭建

1. 安装一个32位软件的兼容库
```bash
sudo apt-get install lib32z1
```


2. 在 `ubuntu` 的家目录下创建 `toolchain` 目录

```BASH
cd ~
mkdir toolchain
```
 
3. 拷贝交叉编译工具链的压缩包到 `ubuntu` 的 `~/toolchain` 目录下, 使用tar命令进行解压缩
```BASH
tar -vxf gcc-linaro-7.5.0-2019.12-i686_arm-linux-gnueabihf.tar.xz
```

4. 将解压缩成功之后得到一个 `gcc-linaro-7.5.0-2019.12-i686_arm-linux-gnueabihf`，重命名为 `gcc-7.5.0`
```bash
mv gcc-linaro-7.5.0-2019.12-i686_arm-linux-gnueabihf gcc-7.5.0
```

5. 修改PATH环境变量，将交叉编译工具链的路径 `~/toolchain/gcc-7.5.0/bin` 添加到PATH环境变量中（修改 `/etc/bash.bashrc` 文件）
	
```bash
export PATH=$PATH:/home/linux/toolchain/gcc-7.5.0/bin/
```
 
6. 使修改后的环境变量立即生效
	
```bash
source /etc/bash.bashrc
```
 
7. 测试是否安装成功 
	
```bash
arm-linux-gnueabihf-gcc -v   ---> 查看交叉编译工具链的版本号
```