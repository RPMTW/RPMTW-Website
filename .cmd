@echo off
yarn build & copy "%~dp0\docs\index.html" "%~dp0\docs\404.html"
