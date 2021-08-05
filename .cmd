@echo off
yarn build
copy %~dp0docs\index.html %~dp0docs\404.html

git init
git add .
git commit -m "建置 Wiki 測試"
git branch -M main
git remote add origin https://github.com/RPMTW/RPMTW-Website.git
git push -u origin main
yarn serve