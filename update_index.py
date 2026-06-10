import sys

def main():
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix meta description
    old_meta = """<meta name="description"
        content="Portfolio de Mauro Burgos Lahuerta. Graduado en Educación Primaria y Docente especializado en Robótica, Programación y Metodologías Activas.">"""
    new_meta = """<meta name="description"
        content="Portfolio de Mauro Burgos Lahuerta. Diseñador Pedagógico y Creador EdTech. Conectando la experiencia en el aula con el desarrollo de soluciones tecnológicas e IA.">"""
    
    old_og_desc = """<meta property="og:description"
        content="Portfolio de Mauro Burgos Lahuerta. Graduado en Educación Primaria y Docente especializado en Robótica, Programación y Metodologías Activas.">"""
    new_og_desc = """<meta property="og:description"
        content="Portfolio de Mauro Burgos Lahuerta. Diseñador Pedagógico y Creador EdTech. Conectando la experiencia en el aula con el desarrollo de soluciones tecnológicas e IA.">"""

    # Fix favicon
    favicon_html = """    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧠</text></svg>">
"""
    if "data:image/svg+xml" not in content:
        content = content.replace("<title>Mauro Burgos | Educación & Tecnología</title>", "<title>Mauro Burgos | Educación & Tecnología</title>\n" + favicon_html)

    # Replace newlines for robust replacing
    content = content.replace(old_meta, new_meta)
    content = content.replace(old_og_desc, new_og_desc)

    # Fix CTA buttons
    old_cta = """            <div class="cta-buttons">
                <a href="#proyectos" class="btn primary"><span>Ver Proyectos</span> <i
                        class="fas fa-arrow-down"></i></a>
                <a href="#contacto" class="btn secondary">Contactar</a>
            </div>"""
    new_cta = """            <div class="cta-buttons">
                <a href="#proyectos" class="btn primary"><span>Ver Proyectos</span> <i
                        class="fas fa-arrow-down"></i></a>
                <a href="assets/docs/CV_Mauro_Burgos.pdf" target="_blank" class="btn secondary">Descargar CV <i class="fas fa-file-pdf"></i></a>
                <a href="#contacto" class="btn secondary">Contactar</a>
            </div>"""
            
    content = content.replace(old_cta, new_cta)

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("Done")

if __name__ == "__main__":
    main()
