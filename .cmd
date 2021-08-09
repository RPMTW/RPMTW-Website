@echo off
copy "%~dp0\docs\index.html" "%~dp0\docs\404.html"

git init
git add .
git commit -m "set home-main-img css"
git branch -M main
git remote add origin https://github.com/RPMTW/RPMTW-Website.git
git push -u origin main
