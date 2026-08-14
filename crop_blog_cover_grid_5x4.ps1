param(
  [Parameter(Mandatory=$true)]
  [string]$SourceImage,

  [string]$ProjectRoot = "",

  [int]$Columns = 5,
  [int]$Rows = 4
)

# Crop one 5x4 blog cover collage image into 20 separate cover images.
# Usage from project root:
# powershell -ExecutionPolicy Bypass -File .\crop_blog_cover_grid_5x4.ps1 -SourceImage "C:\Users\jeff_\Downloads\blog-20-covers-grid.png"

if ([string]::IsNullOrWhiteSpace($ProjectRoot)) {
  $ProjectRoot = Get-Location
}

if (!(Test-Path $SourceImage)) {
  Write-Host "Source image not found: $SourceImage" -ForegroundColor Red
  exit 1
}

$OutputDir = Join-Path $ProjectRoot "public\images\blog"
if (!(Test-Path $OutputDir)) {
  New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
}

# Output filenames must match seed_20_more_blog_posts.sql cover_image paths.
# Grid order: left to right, top to bottom.
$OutputNames = @(
  "postpartum-meal-week-4.png",
  "postpartum-week-1-soup-guide.png",
  "postpartum-vegetables-guide.png",
  "postpartum-meal-less-oily-guide.png",
  "postpartum-constipation-diet-tips.png",

  "postpartum-low-appetite-meal-guide.png",
  "c-section-week-2-diet-guide.png",
  "breastfeeding-night-snack-guide.png",
  "breastfeeding-soup-guide.png",
  "third-trimester-postpartum-meal-prep.png",

  "postpartum-meal-booking-checklist.png",
  "newborn-first-week-home-guide.png",
  "baby-first-month-family-routine.png",
  "richmond-hill-postpartum-meal-guide.png",
  "north-york-postpartum-meal-guide.png",

  "aurora-postpartum-meal-guide.png",
  "jiahua-staged-menu-guide.png",
  "customer-story-prepared-postpartum-meals.png",
  "customer-story-simple-postpartum-meals.png",
  "postpartum-meal-vs-takeout.png"
)

if ($OutputNames.Count -ne ($Columns * $Rows)) {
  Write-Host "OutputNames count does not match grid size." -ForegroundColor Red
  exit 1
}

Add-Type -AssemblyName System.Drawing

$sourceBitmap = [System.Drawing.Bitmap]::FromFile($SourceImage)
$cellWidth = [Math]::Floor($sourceBitmap.Width / $Columns)
$cellHeight = [Math]::Floor($sourceBitmap.Height / $Rows)

Write-Host "Source image: $SourceImage" -ForegroundColor Cyan
Write-Host "Image size: $($sourceBitmap.Width)x$($sourceBitmap.Height)" -ForegroundColor Cyan
Write-Host "Grid: $Columns columns x $Rows rows" -ForegroundColor Cyan
Write-Host "Cell size: $cellWidth x $cellHeight" -ForegroundColor Cyan
Write-Host "Output folder: $OutputDir" -ForegroundColor Cyan
Write-Host ""

try {
  for ($row = 0; $row -lt $Rows; $row++) {
    for ($col = 0; $col -lt $Columns; $col++) {
      $index = ($row * $Columns) + $col
      $outputName = $OutputNames[$index]
      $outputPath = Join-Path $OutputDir $outputName

      $x = $col * $cellWidth
      $y = $row * $cellHeight

      # Last row/column absorbs any remainder pixels from uneven image size.
      $w = if ($col -eq ($Columns - 1)) { $sourceBitmap.Width - $x } else { $cellWidth }
      $h = if ($row -eq ($Rows - 1)) { $sourceBitmap.Height - $y } else { $cellHeight }

      $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
      $crop = $sourceBitmap.Clone($rect, $sourceBitmap.PixelFormat)

      try {
        $crop.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
        Write-Host "Saved: $outputName" -ForegroundColor Green
      }
      finally {
        $crop.Dispose()
      }
    }
  }
}
finally {
  $sourceBitmap.Dispose()
}

Write-Host ""
Write-Host "Done. Cropped 20 cover images are now in public\images\blog." -ForegroundColor Cyan
Write-Host "These filenames match the cover_image paths in seed_20_more_blog_posts.sql." -ForegroundColor Cyan
