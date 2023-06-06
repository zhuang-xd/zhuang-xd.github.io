import{_ as a,o as s,c as e,O as t}from"./chunks/framework.4afe7240.js";const A=JSON.parse('{"title":"设置RCC使能","description":"","frontmatter":{"tags":"待成文","title":"设置RCC使能","date":"2023-06-06T00:00:00.000Z"},"headers":[],"relativePath":"pages/设置RCC使能.md","filePath":"pages/设置RCC使能.md","lastUpdated":1686070363000}'),n={name:"pages/设置RCC使能.md"},o=t(`<h1 id="设置rcc使能" tabindex="-1">设置RCC使能 <a class="header-anchor" href="#设置rcc使能" aria-label="Permalink to &quot;设置RCC使能&quot;">​</a></h1><p>这段代码是ARM汇编语言，它的作用是将地址为0x50000A28的内存中的数据的第5位（从右往左数）置为1。</p><div class="language-ARM-ASM"><button title="Copy Code" class="copy"></button><span class="lang">ARM-ASM</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">LDR R0, =0x50000A28       </span></span>
<span class="line"><span style="color:#A6ACCD;">LDR R1, [R0]</span></span>
<span class="line"><span style="color:#A6ACCD;">ORR R1, R1, #(0x1&lt;&lt;4)</span></span>
<span class="line"><span style="color:#A6ACCD;">STR R1 [R0]</span></span></code></pre></div><p>第1行代码：将 <code>0x50000A28</code> 这个地址的值加载到寄存器R0中。</p><p>第2行代码：将寄存器R0中所存储的地址对应的内存中的值加载到寄存器R1中。</p><p>第3行代码：将寄存器R1中的值与0x10（二进制为00010000）进行按位或运算，目的是<strong>将第5位（从右往左数）置为1</strong>。</p><p>第4行代码：将寄存器R1中的值存储回地址为 <code>0x50000A28</code> 的内存中。</p><blockquote><p>[[为什么不能直接修改0x50000A28的值，而要加载到寄存器中操作？]]</p></blockquote>`,8),p=[o];function c(l,r,_,i,R,d){return s(),e("div",null,p)}const h=a(n,[["render",c]]);export{A as __pageData,h as default};
