import{_ as s,o as a,c as l,O as o}from"./chunks/framework.4afe7240.js";const F=JSON.parse('{"title":"expr和双括号运算符的区别","description":"","frontmatter":{},"headers":[],"relativePath":"output/expr和双括号运算符的区别.md","filePath":"output/expr和双括号运算符的区别.md","lastUpdated":1685297158000}'),p={name:"output/expr和双括号运算符的区别.md"},n=o(`<h1 id="expr和双括号运算符的区别" tabindex="-1">expr和双括号运算符的区别 <a class="header-anchor" href="#expr和双括号运算符的区别" aria-label="Permalink to &quot;expr和双括号运算符的区别&quot;">​</a></h1><p>在shell中默认会以字符串的形式进行算数运算</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$((</span><span style="color:#C3E88D;">&quot;</span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">&quot; </span><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#2</span></span></code></pre></div><p>而在涉及 字符串和数字相运算时，会将字符串自动转换为0</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$((</span><span style="color:#C3E88D;">&quot;hello&quot; </span><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#1</span></span></code></pre></div><p>为了避免这个问题可以采用 <code>expr</code> 运算符</p><p>它只可以进行整数的算数运算，会自动将数字字符串转换为数字</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">expr</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#1</span></span></code></pre></div><p>而非数字的字符串都会报错</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">expr</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">w</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># expr: 非整数参数</span></span>
<span class="line"><span style="color:#FFCB6B;">expr</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># expr: 非整数参数</span></span></code></pre></div>`,10),e=[n];function t(c,r,y,C,i,D){return a(),l("div",null,e)}const A=s(p,[["render",t]]);export{F as __pageData,A as default};
