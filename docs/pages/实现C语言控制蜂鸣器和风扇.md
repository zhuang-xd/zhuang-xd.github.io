---
tags: 应用
title: 实现C语言控制蜂鸣器和风扇
date: 2023-06-07
---
# 实现C语言控制蜂鸣器和风扇

## 效果

- 5秒风扇转
- 5秒蜂鸣器响

## 代码

:::: code-group 
```c [main.c]
#include "func.h"

int main()
{
	buzzer_init();
	fan_init();
    while (1)
    {
        buzzer_run();
        fan_stop();
        delay_ms(5000);

        fan_run();
        buzzer_stop();
        delay_ms(5000);
    }
    
	return 0;
}
```

```c [func.h]
#ifndef __FUNC_H__
#define __FUNC_H__

//定义寄存器组织结构体
typedef struct{
    unsigned int moder;
    unsigned int otyper;
    unsigned int ospeedr;
    unsigned int pupdr;
    unsigned int idr;
    unsigned int odr;
}gpio_t;

#define GPIOB ((gpio_t *)0X50003000) // 蜂鸣器 pb6
#define GPIOE ((gpio_t *)0x50006000) // 风扇 pe9

#define RCC (*(volatile unsigned int *)0X50000A28)

void delay_ms(int ms);

void buzzer_init(); // 蜂鸣器初始化
void buzzer_run(); // 蜂鸣器启动
void buzzer_stop(); // 蜂鸣器停
void fan_init(); // 风扇初始化
void fan_run(); // 风扇启动
void fan_stop(); // 风扇停

#endif
```

```c [func.c]
#include "func.h"

// 延时函数
void delay_ms(int ms)
{
    int i, j;
    for (i = 0; i < ms; i++)
        for (j = 0; j < 1800; j++)
            ;
}

// 蜂鸣器初始化
void buzzer_init()
{
    RCC |= (0x3 << 1);
    // 蜂鸣器
    GPIOB->moder &= (~(0X3 << 12));
    GPIOB->moder |= (0X1 << 12);
    GPIOB->otyper &= (~(0X1 << 6));
    GPIOB->ospeedr &= (~(0X3 << 12));
    GPIOB->pupdr &= (~(0X3 << 12));
}

// 蜂鸣器响
void buzzer_run()
{
    GPIOB->odr |= (0X1 << 6);
}

// 蜂鸣器停
void buzzer_stop()
{
    GPIOB->odr &= (~(0X1 << 6));
}

// 风扇初始化
void fan_init()
{
    RCC |= (0x3 << 4);
    // 风扇
    GPIOE->moder &= (~(0X3 << 18));
    GPIOE->moder |= (0X1 << 18);
    GPIOE->otyper &= (~(0X1 << 9));
    GPIOE->ospeedr &= (~(0X3 << 18));
    GPIOE->pupdr &= (~(0X3 << 18));
}

// 风扇跑
void fan_run()
{
    GPIOE->odr |= (0X1 << 9);
}

// 风扇停
void fan_stop()
{
    GPIOE->odr &= (~(0X1 << 9));
}
```
::::
