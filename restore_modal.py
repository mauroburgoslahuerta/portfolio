import re

with open('js/script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. WhatsApp
content = re.sub(
    r'"alfabetizacion-digital": \{.*?"objectives": \{.*?\}.*?"link": "#"',
    lambda m: m.group(0).replace('"link": "#"', '"instructions": { "es": "Puedes ver la presentación real que utilicé en clase haciendo clic en Ver Proyecto.", "gl": "Podes ver a presentación real que utilicei na aula facendo clic en Ver Proxecto.", "en": "You can see the actual presentation I used in class by clicking View Project." },\n        "link": "assets/docs/whatsapp_presentacion.pdf"'),
    content,
    flags=re.DOTALL
)

# 2. Ciberseguridad
content = re.sub(
    r'"alfabetizacion-ciber": \{.*?"objectives": \{.*?\}.*?"link": "#"',
    lambda m: m.group(0).replace('"link": "#"', '"instructions": { "es": "Puedes ver una muestra del material didáctico del curso haciendo clic en Ver Proyecto.", "gl": "Podes ver unha mostra do material didáctico do curso facendo clic en Ver Proxecto.", "en": "You can see a sample of the course teaching material by clicking View Project." },\n        "link": "assets/docs/ciber_presentacion.pdf"'),
    content,
    flags=re.DOTALL
)

# 3. Trámites
content = re.sub(
    r'"alfabetizacion-tramites": \{.*?"objectives": \{.*?\}.*?"link": "#"',
    lambda m: m.group(0).replace('"link": "#"', '"instructions": { "es": "Puedes ver una muestra del material didáctico del curso haciendo clic en Ver Proyecto.", "gl": "Podes ver unha mostra do material didáctico do curso facendo clic en Ver Proxecto.", "en": "You can see a sample of the course teaching material by clicking View Project." },\n        "link": "assets/docs/tramites_presentacion.pdf"'),
    content,
    flags=re.DOTALL
)

# 4. Redes Sociales (I don't know if it had PDF, let's just add the instructions and link #)
content = re.sub(
    r'"alfabetizacion-redes": \{.*?"objectives": \{.*?\}.*?"link": "#"',
    lambda m: m.group(0).replace('"link": "#"', '"instructions": { "es": "Puedes ver una muestra del material didáctico del curso haciendo clic en Ver Proyecto.", "gl": "Podes ver unha mostra do material didáctico do curso facendo clic en Ver Proxecto.", "en": "You can see a sample of the course teaching material by clicking View Project." },\n        "link": "#"'),
    content,
    flags=re.DOTALL
)

# 5. Reservas
content = re.sub(
    r'"alfabetizacion-reservas": \{.*?"objectives": \{.*?\}.*?"link": "#"',
    lambda m: m.group(0).replace('"link": "#"', '"instructions": { "es": "Puedes ver una muestra del material didáctico del curso haciendo clic en Ver Proyecto.", "gl": "Podes ver unha mostra do material didáctico do curso facendo clic en Ver Proxecto.", "en": "You can see a sample of the course teaching material by clicking View Project." },\n        "link": "#"'),
    content,
    flags=re.DOTALL
)

with open('js/script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Instructions restored to alphabetization projects.")
