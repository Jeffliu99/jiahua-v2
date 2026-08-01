param(
  [Parameter(Mandatory=$true)]
  [string]$SourceImage,

  [string]$ProjectRoot = "",

  [int]$Columns = 3,
  [int]$Rows = 3
)

# Crop one 3x3 blog cover collage image into separate cover images.
# Usage from project root:
# powershell -ExecutionPolicy Bypass -File .\crop_blog_cover_grid.ps1 -SourceImage "C:\Users\jeff_\Downloads\blog-covers.png"

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

# Output filenames must match seed_blog_posts.sql cover_image paths.
# Grid order: left to right, top to bottom.
$OutputNames = @(
  "postpartum-meals-in-canada.png",
  "c-section-recovery-diet.png",
  "breastfeeding-nutrition-guide.png",
  "gta-postpartum-meal-service-guide.png",
  "natural-birth-30-day-diet-guide.png",
  "when-to-book-postpartum-meals.png",
  "markham-postpartum-meal-delivery-guide.png",
  "postpartum-meal-week-2.png",
  "postpartum-meal-week-3.png"
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
Write-Host "Done. Cropped cover images are now in public\images\blog." -ForegroundColor Cyan
Write-Host "These filenames match the cover_image paths in seed_blog_posts.sql." -ForegroundColor Cyan
