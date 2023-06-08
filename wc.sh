#！/bin/bash
cd d:blog/docs/pages

#定义变量
curtime=`date +%F' '%T`

#以统计docs文件夹为例
if [ $? -eq 0 ]; then
    file_number=$(ls *.md | wc -l)
fi

#导出
cat /dev/null > index.md      #情况文本内容
# yaml
echo -e "---" >> index.md
echo -e "lastUpdated: false" >> index.md
echo -e "---" >> index.md
# 统计
echo -e "# 统计" >> index.md
echo -e "- 当前笔记总数： $file_number" >> index.md
echo -e "::: info 备注" >> index.md
echo -e "1. 字数仅作参考，因为可能包含大段的代码。" >> index.md
echo -e "2. 该笔记由bash脚本生成，上次生成时间：${curtime}" >> index.md
echo -e ":::" >> index.md

