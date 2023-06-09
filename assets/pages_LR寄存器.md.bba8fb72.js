import{_ as a,o as e,c as t,O as r}from"./chunks/framework.4afe7240.js";const p=JSON.parse('{"title":"LR","description":"","frontmatter":{"tags":"待成文","aliases":["LR","Link Register"],"title":"LR","sidebar":false,"date":"2023-06-06T00:00:00.000Z"},"headers":[],"relativePath":"pages/LR寄存器.md","filePath":"pages/LR寄存器.md","lastUpdated":1686281074000}'),s={name:"pages/LR寄存器.md"},i=r('<h1 id="lr" tabindex="-1">LR <a class="header-anchor" href="#lr" aria-label="Permalink to &quot;LR&quot;">​</a></h1><h2 id="作用" tabindex="-1">作用 <a class="header-anchor" href="#作用" aria-label="Permalink to &quot;作用&quot;">​</a></h2><p>用于存储跳转指令（如 BL）的返回地址</p><ul><li>当 ARM 处理器执行跳转指令（如 BL）时，会将跳转指令的下一条指令的地址存储到 LR 寄存器中，以便在跳转指令执行完毕后返回到跳转指令的下一条指令。在 ARM 处理器中，LR 寄存器通常用于实现函数调用和返回操作，即在函数调用时将返回地址保存到 LR 寄存器中，在函数返回时将 LR 寄存器中的值恢复到 PC 寄存器中，以便返回到调用函数的下一条指令继续执行。</li><li>在 ARM 处理器中，LR 寄存器的值可以通过多种方式修改。例如，在函数调用时，可以使用跳转指令（如 BL）将返回地址保存到 LR 寄存器中；在异常处理程序中，也会使用跳转指令将返回地址保存到 LR 寄存器中。此外，在 ARM 处理器的 Thumb 指令集中，LR 寄存器还可以用于存储调用子程序时的状态信息。</li></ul><h2 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h2><p>Link Register 寄存器是 ARM 处理器中的一个特殊寄存器。在 ARM 处理器中，LR 寄存器的位数为 32 位，可以存储 4GB 的地址空间。</p>',6),o=[i];function l(_,n,R,d,c,L){return e(),t("div",null,o)}const u=a(s,[["render",l]]);export{p as __pageData,u as default};
