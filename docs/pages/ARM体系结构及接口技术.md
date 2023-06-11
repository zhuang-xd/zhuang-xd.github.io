---
tags: 项目
date: 2023-06-01
aliases: [HQYJ-ARM课程, ARM]
title: ARM体系结构及接口技术
sidebar: false
---
# ARM体系结构及接口技术

- ARM体系结构 [特殊功能寄存器](STM32MP157特殊功能寄存器.md)
	- ARM基础理论
		- [[冯诺依曼结构]]
			- [[程序和指令的区别]]
		- [特殊功能寄存器](ARMv7特殊功能寄存器.md)
			- SP
			- LR
			- PC
			- CPSR
			- SPSR
	- [ARM汇编](ARM汇编.md)
		- 汇编指令
		- 汇编语法
- ARM基础硬件实验 （基于 [FSMP1A开发板](FSMP1A开发板.md) 开发）
	- GPIO实验
		- A7内核
			- 汇编语言开发 [点亮FSMP1A开发板的LED1](../pages/点亮FSMP1A开发板的LED1.md)
			- C语言开发 [使用STM32MP157A的A7内核点亮LED1](../pages/使用STM32MP157A的A7内核点亮LED1.md)
				- [用c语言封装STM32MP175的特殊功能寄存器](用c语言封装STM32MP175的特殊功能寄存器.md)
		- M4内核
			- hel库 [使用STM32MP157A的M4内核点亮LED1](../pages/使用STM32MP157A的M4内核点亮LED1.md)
	- [UART](UART.md) 通信实验
	- 按键中断实验
	- IIC 实验
	- SPI 总线实验







- [总线](总线.md)
	- 常见总线
		- [UART](UART.md) 
		- [IIC总线](IIC总线.md)
		- [SPI总线](../pages/SPI总线.md)
		- [RS-485总线](../pages/RS-485总线.md)
		- [USB总线](USB总线.md)
	- [总线的分类](../pages/总线的分类.md)
		- [串行总线和并行总线的区别](../pages/串行总线和并行总线的区别.md)
- 练习
	- [ARM汇编实现三盏灯的流水](ARM汇编实现三盏灯的流水.md)
	- [实现C语言控制蜂鸣器和风扇](实现C语言控制蜂鸣器和风扇.md)