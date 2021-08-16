@echo off
npm run build & copy "docs\index.html" "docs\404.html" & echo www.rpmtw.ga >> "docs\CNAME"