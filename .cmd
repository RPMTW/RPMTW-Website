@echo off
yarn build & copy "docs\index.html" "docs\404.html" & echo www.rpmtw.ga >> "docs\CNAME"