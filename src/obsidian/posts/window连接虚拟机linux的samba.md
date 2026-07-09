---
title: window连接虚拟机linux的samba
date: 2026-06-12
tags:
  - documents
public: true
star: false
---
# window连接虚拟机linux的samba

安装samba服务
```shell
sudo apt install samba
```

给samba添加root用户
```shell
[root@localhost ~]# smbpasswd -a root
New SMB password:
Retype new SMB password:
Added user root
```

配置samba
```shell
sudo vim /etc/samba/smb.conf
```
在末尾添加
```ini
[code]
comment = Shared Folder
path = /code
public = yes
writable = yes
browseable = yes
valid users = root
```

在windows输入 `\\ubuntu ip\code` 即可远程连接