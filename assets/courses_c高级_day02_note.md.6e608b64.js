import{_ as l,o as i,c as u,O as o}from"./chunks/framework.4afe7240.js";const g=JSON.parse('{"title":"day02","description":"","frontmatter":{},"headers":[],"relativePath":"courses/c高级/day02/note.md","filePath":"courses/c高级/day02/note.md"}'),t={name:"courses/c高级/day02/note.md"},e=o('<h1 id="day02" tabindex="-1">day02 <a class="header-anchor" href="#day02" aria-label="Permalink to &quot;day02&quot;">​</a></h1><h2 id="文件权限相关操作" tabindex="-1">文件权限相关操作 <a class="header-anchor" href="#文件权限相关操作" aria-label="Permalink to &quot;文件权限相关操作&quot;">​</a></h2><ul><li>chmod <ul><li>chmod u-w 1.c ---&gt;给所属用户取消可写权限</li><li>chmod u+x 1.c ---&gt;给所属用户添加可执行权限 ====&gt;chmod u=wx 1.c给文件所属用户赋可写和可执行权限。</li><li>chmod o=rx 1.c ----&gt;给其他用户赋可读和可执行权限</li></ul></li><li>chgrp <ul><li>chgrp ubuntu 1 -----&gt;执行不成功，因为在修改超级用户所属文件的组</li></ul></li><li>chown <ul><li>sudo chown root 1.c 把1.c的所属用户修改为root</li><li>sudo chown :root 1.c 把1.c的所属组用户该为root</li><li>sudo chown ubuntu: 1.c 把1.c的所属用户和所属组用户都改为ubuntu</li><li>sudo chown ubuntu:root 1.c 把1.c的所属用户改为ubuntu，把1.c的所属组用户改为root</li></ul></li><li>ln <ul><li>软连接 <ul><li>ln -s 被链接文件的绝对路径 软链接文件的绝对路径</li></ul></li><li>硬链接 <ul><li>ln 被链接文件的绝对路径 硬链接文件的绝对路径</li></ul></li></ul></li></ul><h2 id="开关机权限相关操作" tabindex="-1">开关机权限相关操作 <a class="header-anchor" href="#开关机权限相关操作" aria-label="Permalink to &quot;开关机权限相关操作&quot;">​</a></h2><ul><li>shutdown <ul><li>关机 <ul><li>shutdown -r now</li><li>shutdown 10:36 ----&gt;在10:36分关机</li><li>shutdown +10 -----&gt;在10分钟之后关机</li></ul></li><li>重启 <ul><li>shutdown -r now -----&gt;立即重启</li><li>shutdown -r 10:36 ----&gt;在10:36分重启</li><li>shutdown -r +10 -----&gt;在10分钟之后重启</li><li>reboot 立即重启(常用)</li></ul></li></ul></li></ul><h2 id="用户相关操作" tabindex="-1">用户相关操作 <a class="header-anchor" href="#用户相关操作" aria-label="Permalink to &quot;用户相关操作&quot;">​</a></h2><ul><li>查看用户 <ul><li>whoami</li></ul></li><li>创建用户 <ul><li>sudo adduser 用户名</li></ul></li><li>给新用户添加sudo权限 <ul><li>修改/etc/sudoers文件，sudo vim /etc/sudoers</li></ul></li><li>删除用户 <ul><li>sudo userdel -r 用户名 -----&gt;删除用户的同时删除家目录</li></ul></li><li>修改用户的信息 <ul><li>sudo usermod -c 描述信息 用户名 ----&gt;修改用户的描述信息</li><li>sudo usermod -l 新的用户名 用户名 ----&gt;修改用户的用户名</li><li>sudo usermod -g 目标组 用户名 ----&gt;修改用户的所属组</li><li>sudo usermod -m -d 新的家目录位置 用户名 ---&gt;修改用户的家目录</li></ul></li></ul><h2 id="磁盘相关操作" tabindex="-1">磁盘相关操作 <a class="header-anchor" href="#磁盘相关操作" aria-label="Permalink to &quot;磁盘相关操作&quot;">​</a></h2><ul><li>查看是否连接成功 <ul><li>ls /dev/sd*</li></ul></li><li>查看磁盘使用率 <ul><li>df -h</li></ul></li><li>分区 <ul><li>sudo fdisk /dev/sdb ----&gt;是整个磁盘设备不是再分具体的分区</li></ul></li><li>格式化 <ul><li>sudo mkfs.ntfs/ext4 /dev/sdc1 ----&gt;格式化的文件格式可以按两下tab键显示，要格式化的是具体的分区</li></ul></li><li>挂载 <ul><li>sudo mount /dev/sdb1 ~/udisk</li></ul></li></ul>',9),a=[e];function d(s,r,c,n,h,m){return i(),u("div",null,a)}const b=l(t,[["render",d]]);export{g as __pageData,b as default};
