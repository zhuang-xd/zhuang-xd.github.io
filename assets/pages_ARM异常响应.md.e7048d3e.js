import{_ as a}from"./chunks/20230606054200408.934d71c7.js";import{_ as t,o as e,c as l,V as i}from"./chunks/framework.364d6ed5.js";const A=JSON.parse('{"title":"ARM异常响应","description":"","frontmatter":{"tags":"old","title":"ARM异常响应","sidebar":false,"date":"2023-06-06T00:00:00.000Z"},"headers":[],"relativePath":"pages/ARM异常响应.md","filePath":"pages/ARM异常响应.md","lastUpdated":1686486320000}'),o={name:"pages/ARM异常响应.md"},r=i('<h1 id="arm异常响应" tabindex="-1">ARM异常响应 <a class="header-anchor" href="#arm异常响应" aria-label="Permalink to &quot;ARM异常响应&quot;">​</a></h1><p>ARM产生异常后的动作（<strong>自动完成</strong>）</p><ol><li>准备工作 <ol><li>备份 <a href="./CPSR寄存器.html">CPSR</a> 中的内容到 <a href="./SPSR寄存器.html">SPSR</a></li><li>修改CPSR的值 <ol><li>禁用相应的中断</li><li>进入相应的异常模式</li><li>进入ARM状态</li></ol></li><li>保存返回地址到LR</li></ol></li><li>跳转，到 <a href="./异常向量表.html">异常向量表</a> 中对应的位置</li></ol><p><img src="'+a+'" alt="|350"></p>',4),s=[r];function _(n,c,d,p,m,h){return e(),l("div",null,s)}const S=t(o,[["render",_]]);export{A as __pageData,S as default};
