@echo off
setlocal
REM Crop one 5x4 blog cover image into 20 individual blog cover images.
REM Usage:
REM   crop_blog_cover_grid_5x4.bat "C:\Users\jeff_\Downloads\blog-20-covers-grid.png"

set SOURCE=%~1
if "%SOURCE%"=="" (
  set /p SOURCE=Enter full path of the 5x4 cover image: 
)

powershell -ExecutionPolicy Bypass -File "%~dp0crop_blog_cover_grid_5x4.ps1" -SourceImage "%SOURCE%"
endlocal
