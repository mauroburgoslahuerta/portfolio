import sys

def apply_updates():
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            content = f.read()

        # Update Hero
        old_hero = '<p class="hero-text fade-in">Educación y Tecnología. Creando materiales didácticos y herramientas digitales para potenciar el aprendizaje.</p>'
        new_hero = '<p class="hero-text fade-in">Conectando la tecnología con el aprendizaje. Diseñador Pedagógico y Creador EdTech. Diagnostico necesidades formativas y orquesto Inteligencia Artificial para construir las plataformas digitales que las resuelven.</p>'
        
        if old_hero in content:
            content = content.replace(old_hero, new_hero)
            print("Hero updated successfully.")
        else:
            print("Warning: Old hero text not found. Trying alternative match...")
            # Fallback for weird encoding issues if any, using a substring
            start_hero = content.find('<p class="hero-text fade-in">')
            end_hero = content.find('</p>', start_hero)
            if start_hero != -1 and end_hero != -1:
                content = content[:start_hero] + new_hero + content[end_hero+4:]
                print("Hero updated via substring fallback.")

        # Update Puerta 3 (Desarrollo EdTech)
        old_edtech = '<p>Creador de soluciones EdTech. Sistematizo procesos y desarrollo recursos educativos interactivos apoyándome en la Inteligencia Artificial. Enfoque centrado en resolver problemas reales del aprendizaje mediante la tecnología.</p>'
        new_edtech = '<p>Creador de plataformas EdTech. Diseño la arquitectura pedagógica y coordino modelos de Inteligencia Artificial para desarrollar aplicaciones funcionales. Mi enfoque consiste en transformar problemas reales de aprendizaje en soluciones tecnológicas escalables.</p>'
        
        if old_edtech in content:
            content = content.replace(old_edtech, new_edtech)
            print("EdTech section updated successfully.")
        else:
            print("Warning: Old EdTech text not found. Trying alternative match...")
            start_ed = content.find('<h3>Desarrollo EdTech</h3>')
            if start_ed != -1:
                start_p = content.find('<p>', start_ed)
                end_p = content.find('</p>', start_p)
                if start_p != -1 and end_p != -1:
                    content = content[:start_p] + new_edtech + content[end_p+4:]
                    print("EdTech section updated via substring fallback.")

        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(content)
            
        print("All updates applied!")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    apply_updates()
