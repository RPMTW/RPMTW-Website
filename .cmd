@echo off
start build.cmd
copy %~dp0docs\index.html %~dp0docs\404.html

git init
git add .
git commit -m "Better update"
git branch -M main
git remote add origin https://github.com/RPMTW/RPMTW-Website.git
git push -u origin main
yarn serve
