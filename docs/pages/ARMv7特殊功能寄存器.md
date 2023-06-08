---
tags: 概念
aliases: 特殊功能寄存器
title: ARMv7特殊功能寄存器
date: 2023-06-06
---
# ARMv7特殊功能寄存器

## 定义
#待学习 
- CPSR（Current Program Status Register）
	- 当前程序状态寄存器，用于存储当前处理器的状态信息，例如处理器模式、中断使能状态、条件码等。
- SPSR（Saved Program Status Register）
	- 保存的程序状态寄存器，用于在处理器模式切换时保存当前的CPSR值。
- PC（Program Counter）
	- 程序计数器，用于存储下一条要执行的指令的地址。
- LR（Link Register）
	- 链接寄存器，用于存储函数调用前的返回地址。
- SP（Stack Pointer）
	- 堆栈指针，用于存储当前堆栈的栈顶地址。
- R0-R15（General-Purpose Registers）
	- 通用寄存器，用于存储处理器和程序的各种数据。
- NVIC（Nested Vectored Interrupt Controller）
	- 嵌套向量中断控制器，用于管理中断请求和中断处理。
- SCB（System Control Block）
	- 系统控制块，用于控制处理器和系统的各种特殊功能，例如时钟、复位、电源管理等。
- MPU（Memory Protection Unit）
	- 内存保护单元，用于保护系统的内存不受非法访问和攻击。
- SysTic
	- 系统定时器，用于提供系统的时钟和定时功能。

## 特点

- 这些寄存器**没有地址**
- 访问这些寄存器在CPU内部