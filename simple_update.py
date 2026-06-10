import sys

def main():
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    reps = [
        ("Plataforma integral de preparación para opositores forestales.", "Plataforma web escalable (React/Supabase) con ingesta de temario y simulacros automatizados por IA."),
        ("Recurso educativo hecho con la plataforma AventurIA (de", "Recurso interactivo generado con AventurIA (plataforma propia) para introducir a los alumnos en la algoritmia.</p><!--"),
        ("creación propia) para trabajar el Pensamiento Computacional en 4.º de Primaria.</p>", "-->"),
        ("Proyecto de introducción a la programación por bloques donde", "Práctica de introducción a la programación por bloques simulando mecánicas de movimiento y colisión.</p><!--"),
        ("un tiburón debe atrapar a un pez", ""),
        ("en movimiento.</p>", "-->"),
        ("Videojuego tipo laberinto diseñado desde cero donde el objetivo", "Desarrollo de un motor 2D propio donde el alumnado diseña el tilemap y programa la lógica de victoria.</p><!--"),
        ("es encontrar el cofre del", ""),
        ("tesoro.</p>", "-->"),
        ("Recurso de fichas progresivas para trabajar lógica y pensamiento", "Recurso analógico progresivo para asentar las bases de la lógica y la secuencia sin utilizar pantallas.</p><!--"),
        ("computacional de forma", ""),
        ("visual.</p>", "-->"),
        ("Construcción y programación de un modelo motorizado navideño", "Taller mecánico-digital sobre el uso de engranajes y programación secuencial de motores.</p><!--"),
        ("con LEGO Spike Essential.</p>", "-->"),
        ("Videojuego de plataformas con desplazamiento lateral, saltos", "Diseño de un videojuego de plataformas aplicando variables de gravedad, físicas 2D y patrullaje de enemigos.</p><!--"),
        ("y enemigos.</p>", "-->"),
        ("Recreación del clásico videojuego trabajando gravedad,", "Recreación técnica del clásico arcade para dominar la inercia, la clonación de objetos y las interrupciones.</p><!--"),
        ("eventos y colisiones.</p>", "-->"),
        ("Juego arcade controlado con ratón donde una nave esquiva", "Juego de supervivencia que introduce la generación de números aleatorios y la dificultad progresiva.</p><!--"),
        ("objetos a distintas velocidades.</p>", "-->")
    ]

    for old, new in reps:
        if old in content:
            content = content.replace(old, new)
        else:
            print(f"Warning: Could not find '{old}'")

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("Done")

if __name__ == "__main__":
    main()
