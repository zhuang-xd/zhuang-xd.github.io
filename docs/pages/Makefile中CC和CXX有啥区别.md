---
tags: old
title: Makefile中CC和CXX有啥区别
sidebar: false
date: 2023-06-06
---
# Makefile中CC和CXX有啥区别

在Makefile中，`cc`和`cxx`都是编译器的命令。`cc`是C语言编译器，`cxx`是C++语言编译器。

在使用Makefile编译时，如果需要编译C语言代码，就需要使用`cc`命令；如果需要编译C++语言代码，就需要使用`cxx`命令。因为C语言和C++语言的语法和特性不同，所以需要使用不同的编译器进行编译。

例如，在Makefile中编译C语言代码可以这样写：

`hello: hello.c     cc -o hello hello.c`

在Makefile中编译C++语言代码可以这样写：

`hello: hello.cpp     cxx -o hello hello.cpp`

需要注意的是，不同的编译器可能有不同的命令和选项，具体使用时需要参考编译器的文档。