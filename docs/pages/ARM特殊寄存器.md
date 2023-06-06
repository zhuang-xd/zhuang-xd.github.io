---
tags: 待成文
title: ARM特殊寄存器
date: 2023-06-06
---
# ARM特殊寄存器

ARM 处理器中有一些特殊的寄存器，这些寄存器用于存储一些特殊的信息或控制处理器的运行。以下是 ARM 处理器中常见的一些特殊寄存器：

1. [PC](PC寄存器.md)（Program Counter）寄存器：用于存储当前正在执行的指令的地址。
2. [LR](LR寄存器.md)（Link Register）寄存器：用于存储跳转指令（如 BL）的返回地址。
3. SP（Stack Pointer）寄存器：用于存储栈顶地址。
4. [CPSR](CPSR寄存器.md)（Current Program Status Register）寄存器：用于存储当前程序的状态信息，包括处理器模式、中断使能状态、条件码等。
5. [SPSR](SPSR寄存器.md)（Saved Program Status Register）寄存器：用于存储处理器在处理中断或异常时的状态信息。
6. PRIMASK 寄存器：用于控制全局中断的使能状态。
7. FAULTMASK 寄存器：用于控制处理器在处理异常时的中断屏蔽状态。
8. BASEPRI 寄存器：用于控制优先级抢占的屏蔽状态。
9. CONTROL 寄存器：用于控制处理器的特权级别和栈的选择。

这些特殊寄存器在 ARM 处理器的编程中非常重要，掌握它们的使用方法对于 ARM 处理器的开发和调试都非常有帮助。