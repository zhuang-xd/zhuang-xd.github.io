---
tags: 思维
title: volatile关键字一般用于修饰寄存器变量
sidebar: false
date: 2023-06-07
---
# volatile关键字一般用于修饰寄存器变量

[用c语言封装STM32MP175的特殊功能寄存器](用c语言封装STM32MP175的特殊功能寄存器.md) 中的如下代码

```text
#define RCC (*(volatile unsigned int *)0X50000A28)
#define GPIOE_MODER (*(volatile unsigned int *)0X50006000)
#define GPIOE_OTYPER (*(volatile unsigned int *)0X50006004)
```

防止编译器将对变量的读写操作优化为一些不必要的指令，例如将读操作缓存到寄存器中，或将多个写操作合并为一个写操作。如果这些优化被应用，那么程序可能无法正确地读取或写入变量的值，导致程序出现错误。 #待学习 

因此，在嵌入式系统中，使用 [volatile](volatile.md) 关键字来声明寄存器变量是非常常见的做法，以确保程序的正确性。