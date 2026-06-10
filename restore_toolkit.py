import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

toolkit_old_pattern = re.compile(r'<div class="toolkit-grid">.*?</div>\s*</div>\s*</div>\s*</section>', re.DOTALL)

toolkit_new = """<div class="toolkit-grid">
                    <div class="tool-item">
                        <i class="fas fa-cube" style="color: #ffeb3b;"></i>
                        <span>LEGO Education</span>
                    </div>
                    <div class="tool-item">
                        <i class="fas fa-microchip" style="color: #00e676;"></i>
                        <span>Micro:bit</span>
                    </div>
                    <div class="tool-item">
                        <i class="fas fa-cat" style="color: #ffab91;"></i>
                        <span>Scratch</span>
                    </div>
                    <div class="tool-item">
                        <i class="fas fa-gamepad" style="color: #b388ff;"></i>
                        <span>MakeCode</span>
                    </div>
                    <div class="tool-item">
                        <i class="fas fa-leaf" style="color: #81c784;"></i>
                        <span>Kodu</span>
                    </div>
                    <div class="tool-item">
                        <i class="fas fa-palette" style="color: #29b6f6;"></i>
                        <span>Canva</span>
                    </div>
                    <div class="tool-item">
                        <i class="fas fa-brain" style="color: #e1bee7;"></i>
                        <span>IA Gen</span>
                    </div>
                    <div class="tool-item">
                        <i class="fas fa-cut" style="color: #ffffff;"></i>
                        <span>CapCut</span>
                    </div>
                </div>
            </div>
        </div>
    </section>"""

html = toolkit_old_pattern.sub(toolkit_new, html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Restored 8 toolkit items.")
