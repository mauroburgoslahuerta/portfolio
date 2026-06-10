import re

with open('index_pristine.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Remove lang-switch
lang_switch_pattern = re.compile(r'<div class="lang-switch">.*?</div>\s*', re.DOTALL)
html = lang_switch_pattern.sub('', html)

# 2. Remove translations.js script
html = html.replace('<script src="js/translations.js?v=42"></script>', '')

# 3. Replace the Toolkit Grid
toolkit_old_pattern = re.compile(r'<div class="toolkit-grid">.*?</div>\s*</div>\s*</div>\s*</section>', re.DOTALL)

toolkit_new = """<div class="toolkit-grid">
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
                </div>
            </div>
        </div>
    </section>"""
html = toolkit_old_pattern.sub(toolkit_new, html)

# 4. Replace the Hero Text
# Old: <p class="hero-text fade-in" data-i18n="hero-text">Transformando la educación a través de la innovación, el pensamiento computacional y la robótica.</p>
# Using a regex to catch it safely regardless of formatting
hero_pattern = re.compile(r'<p class="hero-text fade-in"[^>]*>.*?</p>', re.DOTALL)
hero_new = '<p class="hero-text fade-in">Educación y Tecnología. Creando materiales didácticos y herramientas digitales para potenciar el aprendizaje.</p>'
html = hero_pattern.sub(hero_new, html)

# Write to index.html directly
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("index.html safely restored and refactored!")
