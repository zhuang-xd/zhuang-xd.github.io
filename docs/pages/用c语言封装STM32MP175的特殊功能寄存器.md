---
tags: 思维
title: 用c语言封装STM32MP175的特殊功能寄存器
sidebar: false
date: 2023-06-07
---
# 用c语言封装STM32MP175的特殊功能寄存器

共有3种封装[特殊功能寄存器](STM32MP157特殊功能寄存器.md)的地址的方式
1. 强转为指针类型
2. 宏定义
3. 结构体成员

::: code-group
```c [封装方式1]
// 将数值强转为指针类型，操作指针对应的空间
GPIOE_MODER  
(*(unsigned int *)0X50006000) &= (~(0X3<<20))//先清0
(*(unsigned int *)0X50006000) |= (0X1<<20)
```

```c [封装方式2]
// 宏定义封装
#define GPIOE_MODER  (*(unsigned int *)0X50006000)
#define GPIOE_OTYPER  (*(unsigned int *)0X50006004)
 ex:
     #include "gpio.h"
 
#define RCC (*(volatile unsigned int *)0X50000A28)
#define GPIOE_MODER (*(volatile unsigned int *)0X50006000)
#define GPIOE_OTYPER (*(volatile unsigned int *)0X50006004)
#define GPIOE_OSPEEDR (*(volatile unsigned int *)0X50006008)
#define GPIOE_ODR (*(volatile unsigned int *)0X50006014)
#define GPIOE_PUPDR (*(volatile unsigned int *)0X5000600C)
```

```c [封装方式3]
typedef struct{
    unsigned int moder;
    unsigned int otyper;
    unsigned int ospeedr;
    unsigned int pupdr;
    unsigned int idr;
    unsigned int odr;
}gpio_t;

//定义GPIOE和GPIOF
#define GPIOE ((gpio_t *)0X50006000)
#define GPIOF ((gpio_t *)0X50007000)
#define RCC (*(volatile unsigned int *)0X50000A28)
void delay_ms(int ms);
void all_led_init();
void all_led_flash();


//延时函数
void delay_ms(int ms)
{
 int i,j;
 for(i = 0; i < ms;i++)
  for (j = 0; j < 1800; j++);
}
 
int main()
{
    //寄存器初始化
    RCC |=(0X1<<4);
    //设置为输出
    GPIOE_MODER &= (~(0X3<<20));
    GPIOE_MODER |= (0X1<<20);
    //推挽输出
    GPIOE_OTYPER &= (~(0X1<<10));
    //低速输出
    GPIOE_OSPEEDR &= (~(0X3<<20));
    //无上拉下拉电阻
    GPIOE_PUPDR &= (~(0X3<<20));
    while(1)
    {
        //亮灯
        GPIOE_ODR |= (0x1<<10);
        delay_ms(1000);
        GPIOE_ODR &= (~(0x1<<10));
        delay_ms(1000);
    }
    return 0;
}

```
:::