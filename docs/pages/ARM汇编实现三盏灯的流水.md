---
tags: 思维
title: ARM汇编实现三盏灯的流水
sidebar: false
date: 2023-06-06
---
# ARM汇编实现三盏灯的流水

## 思路

| 第一秒 | 第二秒 | 第三秒 |
| ------ | ------ | ------ |
| LED3灭 | LED1灭 | LED2灭 |
| LED1亮 | LED2亮 | LED3亮 | 

## 代码

参考 [点亮FSMP1A开发板的LED1](点亮FSMP1A开发板的LED1.md)
```arm-asm
.text 
.global _start
_start: 

/* LED1 PE10 */
@设置RCC寄存器使能
LDR R0,=0X50000A28 
LDR R1,[R0] 
ORR R1,R1,#(0X1<<4) 
STR R1,[R0] 
 
@设置PE10管脚为输出模式
LDR R0,=0X50006000 
LDR R1,[R0] 
BIC R1,R1,#(0X3<<20) @先清零 
ORR R1,R1,#(0X1<<20) @再设置位 
STR R1,[R0] 
 
@设置PE0为推挽输出
LDR R0,=0X50006004 
LDR R1,[R0] 
BIC R1,R1,#(0X1<<10) @先清零 
STR R1,[R0] 
 
@设置PE10速度为低速
LDR R0,=0X50006008 
LDR R1,[R0] 
BIC R1,R1,#(0X3<<20) @先清零 
STR R1,[R0] 

@不设置上拉下拉电阻
LDR R0,=0X5000600C 
LDR R1,[R0] 
BIC R1,R1,#(0X3<<20) @先清零 
STR R1,[R0] 


/* LED2 PF10 */
@设置RCC寄存器使能
LDR R0,=0X50000A28 
LDR R1,[R0] 
ORR R1,R1,#(0X1<<5) 
STR R1,[R0] 
 
@设置PF10管脚为输出模式
LDR R0,=0X50007000 
LDR R1,[R0] 
BIC R1,R1,#(0X3<<20) @先清零 
ORR R1,R1,#(0X1<<20) @再设置位 
STR R1,[R0] 
 
@设置PF10为推挽输出
LDR R0,=0X50007004 
LDR R1,[R0] 
BIC R1,R1,#(0X1<<10) @先清零 
STR R1,[R0] 
 
@设置PF10速度为低速
LDR R0,=0X50007008 
LDR R1,[R0] 
BIC R1,R1,#(0X3<<20) @先清零 
STR R1,[R0] 

@不设置上拉下拉电阻
LDR R0,=0X5000700C 
LDR R1,[R0] 
BIC R1,R1,#(0X3<<20) @先清零 
STR R1,[R0] 

/* LED3  PE8 */
@设置RCC寄存器使能
LDR R0,=0X50000A28 
LDR R1,[R0] 
ORR R1,R1,#(0X1<<4) 
STR R1,[R0] 
 
@设置PE8管脚为输出模式
LDR R0,=0X50006000 
LDR R1,[R0] 
BIC R1,R1,#(0X3<<16) @先清零 
ORR R1,R1,#(0X1<<16) @再设置位 
STR R1,[R0] 
 
@设置PE8为推挽输出
LDR R0,=0X50006004 
LDR R1,[R0] 
BIC R1,R1,#(0X1<<8) @先清零 
STR R1,[R0] 
 
@设置PE8速度为低速
LDR R0,=0X50006008 
LDR R1,[R0] 
BIC R1,R1,#(0X3<<16) @先清零 
STR R1,[R0] 

@不设置上拉下拉电阻
LDR R0,=0X5000600C 
LDR R1,[R0] 
BIC R1,R1,#(0X3<<16) @先清零 
STR R1,[R0] 



@循环输出高低电平
LDR R0,=0X50006014  @LED1 LED3
LDR R2,=0X50007014  @LED2
loop: 
    @LED3灭
    LDR R1,[R0] 
    BIC R1,R1,#(0X1<<8) 
    STR R1,[R0] 
    bl delay_1s
    @LED1亮
    LDR R1,[R0] 
    ORR R1,R1,#(0X1<<10) 
    STR R1,[R0] 
    bl delay_1s

    @LED1灭
    LDR R1,[R0] 
    BIC R1,R1,#(0X1<<10) 
    STR R1,[R0] 
    @LED2亮
    LDR R1,[R2] 
    ORR R1,R1,#(0X1<<10) 
    STR R1,[R2] 
    bl delay_1s

    @LED2灭
    LDR R1,[R2] 
    BIC R1,R1,#(0X1<<10) 
    STR R1,[R2] 
    @LED3亮
    LDR R1,[R0] 
    ORR R1,R1,#(0X1<<8) 
    STR R1,[R0] 
    bl delay_1s

    b loop

 
@1s左右的延时函数
delay_1s: 
	mov r3, #0x10000000 
mm: 
    cmp r3, #0 
	subne r3, r3, #1 
	bne mm
	mov pc, lr

.end

```