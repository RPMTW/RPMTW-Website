@echo off
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/a3510377/rpmtw-pages-vue-cli.git
git push -u origin main