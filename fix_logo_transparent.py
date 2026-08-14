from pathlib import Path
from PIL import Image

# Usage from project root:
# python fix_logo_transparent.py
# Source: public/images/logo-full.png
# Output: public/images/logo-full-header.png

source = Path("public/images/logo-full.png")
output = Path("public/images/logo-full-header.png")

if not source.exists():
    raise FileNotFoundError(f"Cannot find {source}. Put your current logo file there first.")

img = Image.open(source).convert("RGBA")
pixels = img.load()
w, h = img.size

# Remove fake checkerboard or very light background.
# Keeps dark brown / rose logo strokes and text.
for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        maxc = max(r, g, b)
        minc = min(r, g, b)
        # Very light neutral pixels become transparent.
        if maxc >= 226 and (maxc - minc) <= 38:
            pixels[x, y] = (r, g, b, 0)
        # Extra cleanup for almost-white pixels.
        elif r >= 238 and g >= 238 and b >= 238:
            pixels[x, y] = (r, g, b, 0)

# Crop to non-transparent content, with small padding.
alpha = img.getchannel("A")
bbox = alpha.getbbox()
if bbox:
    left, top, right, bottom = bbox
    pad_x = max(8, int((right - left) * 0.035))
    pad_y = max(6, int((bottom - top) * 0.12))
    left = max(0, left - pad_x)
    top = max(0, top - pad_y)
    right = min(w, right + pad_x)
    bottom = min(h, bottom + pad_y)
    img = img.crop((left, top, right, bottom))

output.parent.mkdir(parents=True, exist_ok=True)
img.save(output)
print(f"Saved: {output}")
print(f"New size: {img.size[0]} x {img.size[1]}")
