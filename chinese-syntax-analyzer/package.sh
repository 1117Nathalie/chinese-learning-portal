#!/bin/bash
cd "$(dirname "$0")"
mkdir -p temp_package
cp *.html temp_package/
cp README.md temp_package/
cd temp_package && zip -r ../chinese-syntax-analyzer.zip * && cd ..
rm -rf temp_package
echo "打包完成！文件已保存为 chinese-syntax-analyzer.zip"
echo "您可以将此ZIP文件分享给学生。"
