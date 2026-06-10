import sys

def main():
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    reps = [
        ("Desarrollo de un motor 2D propio donde el alumnado diseña el tilemap y programa la lógica de victoria.", "Práctica de pensamiento algorítmico donde el alumnado diseña su propio laberinto y programa la condición de victoria."),
        ("Diseño de un videojuego de plataformas aplicando variables de gravedad, físicas 2D y patrullaje de enemigos.", "Diseño de un videojuego de plataformas donde el alumnado aprende a programar gravedad, saltos y rutinas de enemigos."),
        ("Recreación técnica del clásico arcade para dominar la inercia, la clonación de objetos y las interrupciones.", "Proyecto avanzado de programación por bloques para trabajar conceptos de física, clonación de personajes y eventos.")
    ]

    for old, new in reps:
        if old in content:
            content = content.replace(old, new)
            print(f"Updated: {new}")
        else:
            print(f"Warning: Could not find '{old}'")

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("Done")

if __name__ == "__main__":
    main()
