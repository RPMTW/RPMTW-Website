@echo off
copy %~dp0docs\index.html %~dp0docs\404.html

git init
git add .
git commit -m "更好的的更新"
git branch -M main
git remote add origin https://github.com/a3510377/rpmtw-pages-vue-cli.git
git push -u origin main
