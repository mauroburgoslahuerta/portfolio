import sys

def run_update():
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    replacements = {
        "Plataforma integral de preparación para opositores forestales.": "Plataforma web escalable (React/Supabase) con ingesta de temario y simulacros automatizados por IA.",
        "Recurso educativo hecho con la plataforma AventurIA (de\\n                            creación propia) para trabajar el Pensamiento Computacional en 4.º de Primaria.": "Recurso interactivo generado con AventurIA (plataforma propia) para introducir a los alumnos en la algoritmia.",
        "Proyecto de introducción a la programación por bloques donde\\n                            un tiburón debe atrapar a un pez\\n                            en movimiento.": "Práctica de introducción a la programación por bloques simulando mecánicas de movimiento y colisión.",
        "Videojuego tipo laberinto diseñado desde cero donde el objetivo\\n                            es encontrar el cofre del\\n                            tesoro.": "Desarrollo de un motor 2D propio donde el alumnado diseña el tilemap y programa la lógica de victoria.",
        "Recurso de fichas progresivas para trabajar lógica y pensamiento\\n                            computacional de forma\\n                            visual.": "Recurso analógico progresivo para asentar las bases de la lógica y la secuencia sin utilizar pantallas.",
        "Construcción y programación de un modelo motorizado navideño\\n                            con LEGO Spike Essential.": "Taller mecánico-digital sobre el uso de engranajes y programación secuencial de motores.",
        "Videojuego de plataformas con desplazamiento lateral, saltos\\n                            y enemigos.": "Diseño de un videojuego de plataformas aplicando variables de gravedad, físicas 2D y patrullaje de enemigos.",
        "Recreación del clásico videojuego trabajando gravedad,\\n                            eventos y colisiones.": "Recreación técnica del clásico arcade para dominar la inercia, la clonación de objetos y las interrupciones.",
        "Juego arcade controlado con ratón donde una nave esquiva\\n                            objetos a distintas velocidades.": "Juego de supervivencia que introduce la generación de números aleatorios y la dificultad progresiva."
    }

    # Normalize whitespace for robust replacing
    import re
    
    def normalize_space(s):
        return re.sub(r'\s+', ' ', s).strip()

    count = 0
    # A bit dangerous to just replace normalized, so let's find the original
    # We will use regex to find matching <p> tags and replace their content
    
    for old_t, new_t in replacements.items():
        old_norm = normalize_space(old_t)
        # Find all <p> inside project-content
        pattern = r'(<div class="project-content">.*?<p.*?>)(.*?)(</p>)'
        
        def repl(match):
            nonlocal count
            content_norm = normalize_space(match.group(2))
            if content_norm == old_norm:
                count += 1
                return match.group(1) + new_t + match.group(3)
            return match.group(0)
            
        content_new = re.sub(pattern, repl, content, flags=re.DOTALL)
        if content_new == content and count == 0:
            print(f"Failed to match: {old_norm}")
        content = content_new
        count = 0

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated {count} card texts.")

if __name__ == '__main__':
    run_update()
