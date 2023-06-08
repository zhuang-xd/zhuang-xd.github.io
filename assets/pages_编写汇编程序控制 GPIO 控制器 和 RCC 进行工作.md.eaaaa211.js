import{_ as s,o as n,c as a,O as p}from"./chunks/framework.4afe7240.js";const l="/assets/20230606144955411.723cf348.png",e="/assets/20230606150059544.3082edfb.png",o="/assets/20230606145507560.4e1983b7.png",c="/assets/20230606145637779.26d470b5.png",t="/assets/20230606145738590.90d2ebae.png",C="/assets/20230606145839193.8e4ce282.png",A="/assets/20230606150128950.69d1b6a1.png",r="/assets/20230606145033169.bfc75efd.png",I=JSON.parse('{"title":"编写汇编程序控制 GPIO 控制器 和 RCC 进行工作","description":"","frontmatter":{"tags":"待成文","title":"编写汇编程序控制 GPIO 控制器 和 RCC 进行工作","date":"2023-06-06T00:00:00.000Z"},"headers":[],"relativePath":"pages/编写汇编程序控制 GPIO 控制器 和 RCC 进行工作.md","filePath":"pages/编写汇编程序控制 GPIO 控制器 和 RCC 进行工作.md","lastUpdated":1686223285000}'),i={name:"pages/编写汇编程序控制 GPIO 控制器 和 RCC 进行工作.md"},R=p('<h1 id="编写汇编程序控制-gpio-控制器-和-rcc-进行工作" tabindex="-1">编写汇编程序控制 GPIO 控制器 和 RCC 进行工作 <a class="header-anchor" href="#编写汇编程序控制-gpio-控制器-和-rcc-进行工作" aria-label="Permalink to &quot;编写汇编程序控制 GPIO 控制器 和 RCC 进行工作&quot;">​</a></h1><p><img src="'+l+'" alt="350"></p><p><a href="./设置RCC使能.html">设置RCC使能</a> （起始地址为什么是0x5000A28 #待收录 ）</p><p><img src="'+e+'" alt="350"></p><p>设置PE10管教为输出模式</p><p><img src="'+o+'" alt="350"></p><p>设置推挽输出</p><p><img src="'+c+'" alt="350"></p><p>设置PE10输出速度为低速</p><p><img src="'+t+'" alt=""></p><p>不设置上拉下拉电阻</p><p><img src="'+C+'" alt=""></p><p>循环输出高低电平 #待收录</p><p>亮一秒 #待收录</p><p>灭一秒 <img src="'+A+'" alt="350"></p><p>延时函数 （作用？ #待收录 ）</p><p><img src="'+r+`" alt="350"></p><p>完整代码</p><div class="language-arm-asm"><button title="Copy Code" class="copy"></button><span class="lang">arm-asm</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.text </span></span>
<span class="line"><span style="color:#A6ACCD;">.global _start</span></span>
<span class="line"><span style="color:#A6ACCD;">_start: </span></span>
<span class="line"><span style="color:#A6ACCD;">@设置RCC寄存器使能</span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R0,=0X50000A28 </span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">ORR R1,R1,#(0X1&lt;&lt;4) </span></span>
<span class="line"><span style="color:#A6ACCD;">STR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">@设置PE10管脚为输出模式</span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R0,=0X50006000 </span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">BIC R1,R1,#(0X3&lt;&lt;20) @先清零 </span></span>
<span class="line"><span style="color:#A6ACCD;">ORR R1,R1,#(0X1&lt;&lt;20) @再设置位 </span></span>
<span class="line"><span style="color:#A6ACCD;">STR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">@设置PE0为推挽输出</span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R0,=0X50006004 </span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">BIC R1,R1,#(0X1&lt;&lt;10) @先清零 </span></span>
<span class="line"><span style="color:#A6ACCD;">STR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">@设置PE10速度为低速</span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R0,=0X50006008 </span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">BIC R1,R1,#(0X3&lt;&lt;20) @先清零 </span></span>
<span class="line"><span style="color:#A6ACCD;">STR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">@不设置上拉下拉电阻</span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R0,=0X5000600C </span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">BIC R1,R1,#(0X3&lt;&lt;20) @先清零 </span></span>
<span class="line"><span style="color:#A6ACCD;">STR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">@循环输出高低电平</span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R0,=0X50006014 </span></span>
<span class="line"><span style="color:#A6ACCD;">loop: </span></span>
<span class="line"><span style="color:#A6ACCD;"> @亮一秒</span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">ORR R1,R1,#(0X1&lt;&lt;10) </span></span>
<span class="line"><span style="color:#A6ACCD;">STR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">bl delay_1s</span></span>
<span class="line"><span style="color:#A6ACCD;">@灭一秒</span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">BIC R1,R1,#(0X1&lt;&lt;10) </span></span>
<span class="line"><span style="color:#A6ACCD;">STR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">bl delay_1s</span></span>
<span class="line"><span style="color:#A6ACCD;">b loop</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">@1s左右的延时函数</span></span>
<span class="line"><span style="color:#A6ACCD;">delay_1s: </span></span>
<span class="line"><span style="color:#A6ACCD;">	mov r3, #0x10000000 </span></span>
<span class="line"><span style="color:#A6ACCD;">mm: </span></span>
<span class="line"><span style="color:#A6ACCD;"> cmp r3, #0 </span></span>
<span class="line"><span style="color:#A6ACCD;">	subne r3, r3, #1 </span></span>
<span class="line"><span style="color:#A6ACCD;">	bne mm</span></span>
<span class="line"><span style="color:#A6ACCD;">	mov pc, lr</span></span>
<span class="line"><span style="color:#A6ACCD;">.end</span></span></code></pre></div>`,19),D=[R];function _(y,m,d,g,P,b){return n(),a("div",null,D)}const f=s(i,[["render",_]]);export{I as __pageData,f as default};
