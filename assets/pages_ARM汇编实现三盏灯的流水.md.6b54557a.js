import{_ as s,o as n,c as a,O as l}from"./chunks/framework.4afe7240.js";const y=JSON.parse('{"title":"ARM汇编实现三盏灯的流水","description":"","frontmatter":{"tags":"应用","title":"ARM汇编实现三盏灯的流水","date":"2023-06-06T00:00:00.000Z"},"headers":[],"relativePath":"pages/ARM汇编实现三盏灯的流水.md","filePath":"pages/ARM汇编实现三盏灯的流水.md","lastUpdated":1686070884000}'),p={name:"pages/ARM汇编实现三盏灯的流水.md"},e=l(`<h1 id="arm汇编实现三盏灯的流水" tabindex="-1">ARM汇编实现三盏灯的流水 <a class="header-anchor" href="#arm汇编实现三盏灯的流水" aria-label="Permalink to &quot;ARM汇编实现三盏灯的流水&quot;">​</a></h1><h2 id="思路" tabindex="-1">思路 <a class="header-anchor" href="#思路" aria-label="Permalink to &quot;思路&quot;">​</a></h2><table><thead><tr><th>第一秒</th><th>第二秒</th><th>第三秒</th></tr></thead><tbody><tr><td>LED3灭</td><td>LED1灭</td><td>LED2灭</td></tr><tr><td>LED1亮</td><td>LED2亮</td><td>LED3亮</td></tr></tbody></table><h2 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码&quot;">​</a></h2><p>参考 <a href="./点亮FSMP1A开发板的LED1.html">点亮FSMP1A开发板的LED1</a></p><div class="language-nasm"><button title="Copy Code" class="copy"></button><span class="lang">nasm</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.text </span></span>
<span class="line"><span style="color:#A6ACCD;">.global _start</span></span>
<span class="line"><span style="color:#A6ACCD;">_start: </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* LED1 PE10 */</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@不设置上拉下拉电阻</span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R0,=0X5000600C </span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">BIC R1,R1,#(0X3&lt;&lt;20) @先清零 </span></span>
<span class="line"><span style="color:#A6ACCD;">STR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* LED2 PF10 */</span></span>
<span class="line"><span style="color:#A6ACCD;">@设置RCC寄存器使能</span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R0,=0X50000A28 </span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">ORR R1,R1,#(0X1&lt;&lt;5) </span></span>
<span class="line"><span style="color:#A6ACCD;">STR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">@设置PF10管脚为输出模式</span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R0,=0X50007000 </span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">BIC R1,R1,#(0X3&lt;&lt;20) @先清零 </span></span>
<span class="line"><span style="color:#A6ACCD;">ORR R1,R1,#(0X1&lt;&lt;20) @再设置位 </span></span>
<span class="line"><span style="color:#A6ACCD;">STR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">@设置PF10为推挽输出</span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R0,=0X50007004 </span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">BIC R1,R1,#(0X1&lt;&lt;10) @先清零 </span></span>
<span class="line"><span style="color:#A6ACCD;">STR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">@设置PF10速度为低速</span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R0,=0X50007008 </span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">BIC R1,R1,#(0X3&lt;&lt;20) @先清零 </span></span>
<span class="line"><span style="color:#A6ACCD;">STR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@不设置上拉下拉电阻</span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R0,=0X5000700C </span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">BIC R1,R1,#(0X3&lt;&lt;20) @先清零 </span></span>
<span class="line"><span style="color:#A6ACCD;">STR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/* LED3  PE8 */</span></span>
<span class="line"><span style="color:#A6ACCD;">@设置RCC寄存器使能</span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R0,=0X50000A28 </span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">ORR R1,R1,#(0X1&lt;&lt;4) </span></span>
<span class="line"><span style="color:#A6ACCD;">STR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">@设置PE8管脚为输出模式</span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R0,=0X50006000 </span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">BIC R1,R1,#(0X3&lt;&lt;16) @先清零 </span></span>
<span class="line"><span style="color:#A6ACCD;">ORR R1,R1,#(0X1&lt;&lt;16) @再设置位 </span></span>
<span class="line"><span style="color:#A6ACCD;">STR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">@设置PE8为推挽输出</span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R0,=0X50006004 </span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">BIC R1,R1,#(0X1&lt;&lt;8) @先清零 </span></span>
<span class="line"><span style="color:#A6ACCD;">STR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">@设置PE8速度为低速</span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R0,=0X50006008 </span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">BIC R1,R1,#(0X3&lt;&lt;16) @先清零 </span></span>
<span class="line"><span style="color:#A6ACCD;">STR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@不设置上拉下拉电阻</span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R0,=0X5000600C </span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">BIC R1,R1,#(0X3&lt;&lt;16) @先清零 </span></span>
<span class="line"><span style="color:#A6ACCD;">STR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@循环输出高低电平</span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R0,=0X50006014  @LED1 LED3</span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R2,=0X50007014  @LED2</span></span>
<span class="line"><span style="color:#A6ACCD;">loop: </span></span>
<span class="line"><span style="color:#A6ACCD;">    @LED3灭</span></span>
<span class="line"><span style="color:#A6ACCD;">    LDR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">    BIC R1,R1,#(0X1&lt;&lt;8) </span></span>
<span class="line"><span style="color:#A6ACCD;">    STR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">    bl delay_1s</span></span>
<span class="line"><span style="color:#A6ACCD;">    @LED1亮</span></span>
<span class="line"><span style="color:#A6ACCD;">    LDR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">    ORR R1,R1,#(0X1&lt;&lt;10) </span></span>
<span class="line"><span style="color:#A6ACCD;">    STR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">    bl delay_1s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    @LED1灭</span></span>
<span class="line"><span style="color:#A6ACCD;">    LDR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">    BIC R1,R1,#(0X1&lt;&lt;10) </span></span>
<span class="line"><span style="color:#A6ACCD;">    STR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">    @LED2亮</span></span>
<span class="line"><span style="color:#A6ACCD;">    LDR R1,[R2] </span></span>
<span class="line"><span style="color:#A6ACCD;">    ORR R1,R1,#(0X1&lt;&lt;10) </span></span>
<span class="line"><span style="color:#A6ACCD;">    STR R1,[R2] </span></span>
<span class="line"><span style="color:#A6ACCD;">    bl delay_1s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    @LED2灭</span></span>
<span class="line"><span style="color:#A6ACCD;">    LDR R1,[R2] </span></span>
<span class="line"><span style="color:#A6ACCD;">    BIC R1,R1,#(0X1&lt;&lt;10) </span></span>
<span class="line"><span style="color:#A6ACCD;">    STR R1,[R2] </span></span>
<span class="line"><span style="color:#A6ACCD;">    @LED3亮</span></span>
<span class="line"><span style="color:#A6ACCD;">    LDR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">    ORR R1,R1,#(0X1&lt;&lt;8) </span></span>
<span class="line"><span style="color:#A6ACCD;">    STR R1,[R0] </span></span>
<span class="line"><span style="color:#A6ACCD;">    bl delay_1s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    b loop</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">@1s左右的延时函数</span></span>
<span class="line"><span style="color:#A6ACCD;">delay_1s: </span></span>
<span class="line"><span style="color:#A6ACCD;">	mov r3, #0x10000000 </span></span>
<span class="line"><span style="color:#A6ACCD;">mm: </span></span>
<span class="line"><span style="color:#A6ACCD;">    cmp r3, #0 </span></span>
<span class="line"><span style="color:#A6ACCD;">	subne r3, r3, #1 </span></span>
<span class="line"><span style="color:#A6ACCD;">	bne mm</span></span>
<span class="line"><span style="color:#A6ACCD;">	mov pc, lr</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.end</span></span></code></pre></div>`,6),o=[e];function c(C,A,t,R,D,r){return n(),a("div",null,o)}const L=s(p,[["render",c]]);export{y as __pageData,L as default};
