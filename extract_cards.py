import re
import json

def extract():
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Simple regex for cards
    cards = re.findall(r'<article class="project-card".*?data-category="(.*?)".*?<h3.*?>(.*?)</h3>.*?<p.*?>(.*?)</p>', html, re.DOTALL)
    out_html = '\n'.join([f"[{cat}] {t.strip()}: {d.strip()}" for cat, t, d in cards])
    
    with open('js/script.js', 'r', encoding='utf-8') as f:
        js = f.read()
        
    js_match = re.search(r'const projectsData = (\{.*?\});', js, re.DOTALL)
    out_js = js_match.group(1) if js_match else ''
    
    with open('cards_text.md', 'w', encoding='utf-8') as f:
        f.write('# Exterior Cards (index.html)\\n' + out_html + '\\n\\n# Interior Cards (script.js)\\n' + out_js)

if __name__ == '__main__':
    extract()
