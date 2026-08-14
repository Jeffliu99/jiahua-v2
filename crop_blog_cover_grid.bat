@echo off
setlocal
REM Crop one 3x3 blog cover image into individual blog cover images.
REM Usage:
REM   crop_blog_cover_grid.bat "C:\Users\jeff_\Downloads\blog-covers.png"

set SOURCE=%~1
if "%SOURCE%"=="" (
  set /p SOURCE=Enter full path of the 3x3 cover image: 
)

powershell -ExecutionPolicy Bypass -File "%~dp0crop_blog_cover_grid.ps1" -SourceImage "%SOURCE%"
endlocal
