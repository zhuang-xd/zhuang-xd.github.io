---
tags: old
title: USART
sidebar: false
date: 2023-06-08
---
# USART

## 定义

基本功能和[[UART]]相同，但更强大

## 作用

- 将并行数据转换为串行数据进行传输
- 将串行数据转换为并行数据进行处理

## 特点

- [串行](串行总线.md)、[同步](同步总线.md)或[异步](异步总线.md)、[全双工](全双工总线.md)

USART和UART都是串行通信接口，它们的基本功能都是

UART（Universal Asynchronous Receiver/Transmitter）是一种通用异步收发器，通常用于简单的串行通信。UART使用固定的波特率进行通信，数据帧格式通常为8位数据位、1位停止位和可选的奇偶校验位。UART通信中的数据传输是异步的，没有时钟信号进行同步。UART通信通常使用硬件流控制或软件流控制来实现数据的发送和接收。

USART（Universal Synchronous/Asynchronous Receiver/Transmitter）是一种通用同步/异步收发器，除了支持UART通信协议外，还可以支持同步通信协议，如SPI、I2C等。USART通信可以选择异步模式或同步模式，可以设置多种波特率和数据帧格式。USART还支持硬件流控制和多主机模式等高级功能，可以满足更复杂的通信需求。

因此，USART相比UART具有更加灵活和强大的通信能力，可以支持更多的通信协议和工作模式，但成本也更高。在实际应用中，需要根据具体的需求来选择UART或USART进行串行通信。