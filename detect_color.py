
try:
    from PIL import Image
    from collections import Counter
    
    img = Image.open("public/images/logo-onette.png")
    img = img.convert("RGB")
    width, height = img.size
    
    # Sample pixels (every 10th pixel to be fast)
    pixels = []
    for x in range(0, width, 10):
        for y in range(0, height, 10):
            pixels.append(img.getpixel((x, y)))
            
    most_common = Counter(pixels).most_common(1)[0][0]
    hex_color = '#{:02x}{:02x}{:02x}'.format(most_common[0], most_common[1], most_common[2])
    print(f"Most common color: {hex_color}")
    
except ImportError:
    print("PIL not installed")
except Exception as e:
    print(f"Error: {e}")
