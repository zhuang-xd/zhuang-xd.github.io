import{_ as s,o as a,c as l,O as n}from"./chunks/framework.4afe7240.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{"title":"2023-05-26T00:00:00.000Z"},"headers":[],"relativePath":"timeline/2023-05-26.md","filePath":"timeline/2023-05-26.md","lastUpdated":1685077408000}'),o={name:"timeline/2023-05-26.md"},e=n(`<h2 id="第一个sh脚本" tabindex="-1">第一个sh脚本 <a class="header-anchor" href="#第一个sh脚本" aria-label="Permalink to &quot;第一个sh脚本&quot;">​</a></h2><p>sh脚本必须要可执行权限</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">u+x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hello.sh</span></span></code></pre></div><p>代码如下</p><p><code>hello.sh</code></p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/usr/bin/zsh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello wrold!</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>执行</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">./hello.sh</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 或</span></span>
<span class="line"><span style="color:#FFCB6B;">zsh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hello.sh</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 或</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hello.sh</span></span></code></pre></div><h2 id="追加环境变量" tabindex="-1">追加环境变量 <a class="header-anchor" href="#追加环境变量" aria-label="Permalink to &quot;追加环境变量&quot;">​</a></h2><p>配置完环境变量后 <code>./hello.sh</code> 就可以直接以 <code>hello.sh</code> 执行</p><p>有以下4种方式：</p><ul><li>当前终端生效</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> PATH</span><span style="color:#89DDFF;">=\${</span><span style="color:#A6ACCD;">PATH</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">:/home/ubuntu/download</span><span style="color:#89DDFF;">\`</span></span></code></pre></div><ul><li><strong>当前用户</strong>配置文件 <code>~/.zshrc</code></li><li><strong>全局</strong>配置文件 <code>/etc/zsh/zshrc</code> （常用）</li></ul><p>tip：使用修改完配置文件需要 <code>source ~/.zshrc</code> 或 <code>. .zshrc</code>使修改生效</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> PATH</span><span style="color:#89DDFF;">=\${</span><span style="color:#A6ACCD;">PATH</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">:/home/ubuntu/download</span><span style="color:#89DDFF;">\`</span></span></code></pre></div><ul><li>在 <code>/etc/environment</code> 文件中添加路径也可以实现<strong>全局</strong></li></ul><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><ul><li>shell脚本是弱类型语言</li><li>赋值 <code>=</code> 两端不可加空格</li><li>字符串可以不带引号，但<strong>推荐字符串变量带引号</strong>，防止出现空格的情况</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 定义变量</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">20</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">hello</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 推荐带&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2 10</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 字符串拼接</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">=\${</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> world!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#拼接赋值</span></span>
<span class="line"><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$a</span><span style="color:#C3E88D;"> world!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#拼接赋值 (常用)</span></span></code></pre></div><h3 id="外部传参" tabindex="-1">外部传参 <a class="header-anchor" href="#外部传参" aria-label="Permalink to &quot;外部传参&quot;">​</a></h3><p>在shell脚本中，可以使用$1、$2、$3等变量来获取外部传入的参数。其中$1表示第一个参数，$2表示第二个参数，以此类推。例如：</p><p><code>#!/bin/bash echo &quot;第一个参数为：$1&quot; echo &quot;第二个参数为：$2&quot; echo &quot;第三个参数为：$3&quot;</code></p><p>如果在命令行中执行该脚本，并且传入了三个参数，如下所示：</p><p><code>./test.sh arg1 arg2 arg3</code></p><p>那么输出结果为：</p><p><code>第一个参数为：arg1 第二个参数为：arg2 第三个参数为：arg3</code></p><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><h3 id="变量的使用" tabindex="-1">变量的使用 <a class="header-anchor" href="#变量的使用" aria-label="Permalink to &quot;变量的使用&quot;">​</a></h3><p>输出当前路径</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/usr/bin/zsh</span></span>
<span class="line"><span style="color:#A6ACCD;">var</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">$(</span><span style="color:#82AAFF;">pwd</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> $var</span></span></code></pre></div>`,32),p=[e];function t(c,r,i,y,h,d){return a(),l("div",null,p)}const F=s(o,[["render",t]]);export{C as __pageData,F as default};
