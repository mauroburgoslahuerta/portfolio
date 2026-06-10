import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

replacement = """<div class="toolkit-grid">
<div class="tool-item">
<i class="fas fa-gamepad" style="color: #ff9800;"></i>
<span>Scratch & MakeCode</span>
</div>
<div class="tool-item">
<i class="fas fa-cubes" style="color: #f44336;"></i>
<span>LEGO Education</span>
</div>
<div class="tool-item">
<i class="fas fa-photo-video" style="color: #00bcd4;"></i>
<span>Canva & CapCut</span>
</div>
<div class="tool-item">
<i class="fas fa-brain" style="color: #e1bee7;"></i>
<span>IA Generativa</span>
</div>
<div class="tool-item">
<i class="fas fa-chalkboard-teacher" style="color: #29b6f6;"></i>
<span>Diseño Instruccional</span>
</div>
</div>"""

# Replace everything from <div class="toolkit-grid"> to its closing </div>
# Since regex across multiple lines with nested divs is hard, I'll use BeautifulSoup
from bs4 import BeautifulSoup

soup = BeautifulSoup(content, 'html.parser')
grid = soup.find('div', class_='toolkit-grid')

if grid:
    grid.clear()
    new_grid_content = BeautifulSoup(replacement, 'html.parser').find('div')
    for child in new_grid_content.children:
        grid.append(child)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(str(soup))

print("Fixed toolkit grid.")
