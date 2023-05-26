import{_ as s,o as a,c as n,O as e}from"./chunks/framework.4afe7240.js";const l="/assets/20230525205149680.1cc02aad.png",t="/assets/20230525213346111.d4999fcf.png",o="/assets/20230525213650647.cc405582.png",g=JSON.parse('{"title":"用github_action自动部署vitepress项目","description":"","frontmatter":{},"headers":[],"relativePath":"about/deploy/用github_action自动部署vitepress项目.md","filePath":"about/deploy/用github_action自动部署vitepress项目.md","lastUpdated":1685077408000}'),p={name:"about/deploy/用github_action自动部署vitepress项目.md"},i=e('<h1 id="用github-action自动部署vitepress项目" tabindex="-1">用github_action自动部署vitepress项目 <a class="header-anchor" href="#用github-action自动部署vitepress项目" aria-label="Permalink to &quot;用github_action自动部署vitepress项目&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>原本是想用 <a href="https://vercel.com/dashboard" target="_blank" rel="noreferrer">Vercel</a> 的自动部署的，但没有自己的域名，生成的静态站点域名是 <code>vercel.app</code> 的，因此感觉还不如直接用 <code>github.io</code>，于是就琢磨起用 <code>github action</code> 自动部署站点，但是遇到了不少坑</p><h2 id="写workflow的配置文件" tabindex="-1">写workflow的配置文件 <a class="header-anchor" href="#写workflow的配置文件" aria-label="Permalink to &quot;写workflow的配置文件&quot;">​</a></h2><p>相当于一个linux云服务器，可以使用别人写好的配置文件，可以在项目添加</p><p><img src="'+l+`" alt=""></p><p>以下是我的配置文件 <code>.github\\workflows\\deploy.yml</code></p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">name: Build and deploy</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">on:</span></span>
<span class="line"><span style="color:#A6ACCD;">  push:</span></span>
<span class="line"><span style="color:#A6ACCD;">    branches: [master]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  workflow_dispatch:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">jobs:</span></span>
<span class="line"><span style="color:#A6ACCD;">  Build:</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: Build</span></span>
<span class="line"><span style="color:#A6ACCD;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    steps:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - uses: actions/checkout@v2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Use Node.js</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: actions/setup-node@v1</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          node-version: &#39;16&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Install dependencies</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: npm install</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Build VitePress site</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: npm run docs:build</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Deploy Github Pages</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: JamesIves/github-pages-deploy-action@releases/v4</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          token: \${{ secrets.ACCESS_TOKEN }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          folder: ./docs/.vitepress/dist</span></span>
<span class="line"><span style="color:#A6ACCD;">          branch: gh-pages</span></span></code></pre></div><h2 id="授予workflow自动部署的权限" tabindex="-1">授予workflow自动部署的权限 <a class="header-anchor" href="#授予workflow自动部署的权限" aria-label="Permalink to &quot;授予workflow自动部署的权限&quot;">​</a></h2><p>配置文件中的</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">token: \${{ secrets.ACCESS_TOKEN }}</span></span></code></pre></div><p><code>ACCESS_TOKEN</code> 就是授予wrokflow权限，配置步骤如下:</p><h3 id="一、创建-github-token" tabindex="-1">一、创建 github token <a class="header-anchor" href="#一、创建-github-token" aria-label="Permalink to &quot;一、创建 github token&quot;">​</a></h3><ol><li>登录GitHub账号</li><li>点击右上角头像，选择Settings</li><li>在左侧菜单中选择Developer settings</li><li>选择Personal access tokens</li><li>点击Generate new token</li><li>输入Token description，选择需要的权限</li><li>点击Generate token</li><li>复制生成的token，保存好备用</li></ol><h3 id="二、创建项目中的-secret" tabindex="-1">二、创建项目中的 secret <a class="header-anchor" href="#二、创建项目中的-secret" aria-label="Permalink to &quot;二、创建项目中的 secret&quot;">​</a></h3><p>setting -&gt; Secrets and varibles -&gt; Actions -&gt; New repository secret</p><ul><li>name： 随便取</li><li>value： <code>github token</code></li></ul><p><img src="`+t+'" alt=""></p><h3 id="三、其他问题" tabindex="-1">三、其他问题 <a class="header-anchor" href="#三、其他问题" aria-label="Permalink to &quot;三、其他问题&quot;">​</a></h3><p>自动部署的时候可能还是会遇到如下问题，同样是权限的问题，这里是<a href="https://blog.csdn.net/ibigboy/article/details/126402267" target="_blank" rel="noreferrer">解决方法</a></p><p><img src="'+o+'" alt=""></p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ol><li><a href="https://juejin.cn/post/6937532951223599141#heading-6" target="_blank" rel="noreferrer">用GitHub Action + VuePress自动化部署自己的文档网站</a></li><li><a href="https://juejin.cn/post/7168799961939722277" target="_blank" rel="noreferrer">vitepress+github actions搭建全自动部署高性能SSG网站</a></li></ol>',23),r=[i];function c(d,h,C,u,A,b){return a(),n("div",null,r)}const y=s(p,[["render",c]]);export{g as __pageData,y as default};
