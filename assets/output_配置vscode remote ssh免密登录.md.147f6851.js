import{_ as e,o,c as s,O as t}from"./chunks/framework.4afe7240.js";const u=JSON.parse('{"title":"配置vscode remote ssh免密登录","description":"","frontmatter":{},"headers":[],"relativePath":"output/配置vscode remote ssh免密登录.md","filePath":"output/配置vscode remote ssh免密登录.md","lastUpdated":1685295011000}'),a={name:"output/配置vscode remote ssh免密登录.md"},r=t('<h1 id="配置vscode-remote-ssh免密登录" tabindex="-1">配置vscode remote ssh免密登录 <a class="header-anchor" href="#配置vscode-remote-ssh免密登录" aria-label="Permalink to &quot;配置vscode remote ssh免密登录&quot;">​</a></h1><h2 id="远程连接" tabindex="-1">远程连接 <a class="header-anchor" href="#远程连接" aria-label="Permalink to &quot;远程连接&quot;">​</a></h2><p>远程主机安装 <code>openssh-server</code> ，本机使用 <code>openssh-client</code> 连接服务端</p><ol><li>在虚拟机上安装SSH服务，并启动服务。</li><li>在VS Code中安装Remote Development扩展，并启用该扩展。</li><li>在VS Code的左侧活动栏中点击Remote Explorer图标，然后选择“+”符号，选择SSH Targets，并输入虚拟机的IP地址和用户名。</li><li>输入SSH密码或使用SSH密钥进行认证。</li><li>成功连接后，您可以在VS Code中打开虚拟机上的文件并进行编辑。</li></ol><h2 id="免密登录" tabindex="-1">免密登录 <a class="header-anchor" href="#免密登录" aria-label="Permalink to &quot;免密登录&quot;">​</a></h2><ol><li>本机生成公钥 <code>ssh-keygen -t rsa</code></li><li>将本机的公钥 <code>id_rsa.pub</code> 添加到 远程主机的 <code>~/.ssh/authorized_keys</code> 目录中</li></ol>',6),d=[r];function c(l,i,_,h,n,m){return o(),s("div",null,d)}const S=e(a,[["render",c]]);export{u as __pageData,S as default};
