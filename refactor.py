import json
import re

with open('js/translations.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# Extract the 'es' dictionary part
# It starts at "es: {" and goes to the first "gl: {"
start_idx = js_content.find('es: {')
end_idx = js_content.find('gl: {')
es_content = js_content[start_idx:end_idx]

# Clean it up to parse as JSON or just extract keys using regex
es_dict = {}
for line in es_content.split('\n'):
    match = re.search(r'"([^"]+)":\s*"([^"]*)"', line)
    if match:
        es_dict[match.group(1)] = match.group(2)

# But wait, there are values with HTML inside them, which use double quotes or single quotes.
# e.g., "about-p1": "Soy un <strong>perfil híbrido</strong>..."
# Let's extract them properly:
for match in re.finditer(r'"([^"]+)":\s*"(.*?)",?\s*(?://.*)?$', es_content, re.MULTILINE):
    es_dict[match.group(1)] = match.group(2)

print(f"Extracted {len(es_dict)} translation keys.")

from bs4 import BeautifulSoup

with open('index.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

soup = BeautifulSoup(html_content, 'html.parser')

# Find all elements with data-i18n
elements = soup.find_all(attrs={"data-i18n": True})
print(f"Found {len(elements)} elements with data-i18n.")

for el in elements:
    key = el['data-i18n']
    if key in es_dict:
        # Some texts contain HTML tags (like <strong>), so we use BeautifulSoup to parse the translated value and set it
        # Actually, if we use el.string = ..., it escapes HTML.
        # So we should clear the element and append the parsed HTML
        el.clear()
        parsed_html = BeautifulSoup(es_dict[key], 'html.parser')
        for child in parsed_html:
            el.append(child)
    # Remove the data-i18n attribute
    del el['data-i18n']

# Remove lang switch div
lang_switch = soup.find('div', class_='lang-switch')
if lang_switch:
    lang_switch.decompose()

# Remove translations.js script tag
scripts = soup.find_all('script')
for script in scripts:
    if script.get('src') == 'js/translations.js':
        script.decompose()

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(str(soup))

print("index.html updated successfully.")
