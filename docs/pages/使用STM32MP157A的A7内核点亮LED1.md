---
tags: 思维
aliases: C语言工程模板
title: 使用STM32MP157A的A7内核点亮LED1
sidebar: false
date: 2023-06-07
---
# 使用STM32MP157A的A7内核点亮LED1

> [C语言工程模板](https://github.com/zhuang-xd/armv7-c-porject-template)

:::code-group
```c [main.c]
#include "led.h"
int main()
{
    all_led_init();
    while(1)
    {
        all_led_flash();
    }
    return 0;
}
```

```c [include/led.h]
#ifndef __LED_H__
#define __LED_H__
 
//定义寄存器组织结构体
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
 void  all_led_flash();
#endif
```

```c [src/led.c]
#include"led.h"
//延时函数
void delay_ms(int ms)
{
 int i,j;
 for(i = 0; i < ms;i++)
  for (j = 0; j < 1800; j++);
}
//led灯设置初始化 
 void all_led_init()
 {
    RCC |=(0x3<<4);
    //led1
    GPIOE->moder &= (~(0X3<<20));
    GPIOE->moder |= (0X1<<20);
    GPIOE->otyper &=(~(0X1<<10));
    GPIOE->ospeedr &= (~(0X3<<20));
    GPIOE->pupdr &= (~(0X3<<20));
     //led2
    GPIOF->moder &= (~(0X3<<20));
    GPIOF->moder |= (0X1<<20);
    GPIOF->otyper &=(~(0X1<<10));
    GPIOF->ospeedr &= (~(0X3<<20));
    GPIOF->pupdr &= (~(0X3<<20));
     //led3
    GPIOE->moder &= (~(0X3<<16));
    GPIOE->moder |= (0X1<<16);
    GPIOE->otyper &=(~(0X1<<8));
    GPIOE->ospeedr &= (~(0X3<<16));
    GPIOE->pupdr &= (~(0X3<<16));
 }
void  all_led_flash()
{
    //LED1亮
    GPIOE->odr |=(0X1<<10);
    GPIOF->odr &= (~(0X1<<10));
    GPIOE->odr &= (~(0X1<<8));
    delay_ms(1000);
    //LED2亮
    GPIOE->odr &=(~(0X1<<10));
    GPIOF->odr |=(0X1<<10);
    GPIOE->odr &= (~(0X1<<8));
    delay_ms(1000);
    
    //LED3亮
    GPIOE->odr &=(~(0X1<<10));
    GPIOF->odr &= (~(0X1<<10));
    GPIOE->odr |= (0X1<<8);
    delay_ms(1000);
} 
```
:::