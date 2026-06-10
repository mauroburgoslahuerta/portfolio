import sys

def main():
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    reps = [
        ("Práctica de introducción a la programación por bloques simulando mecánicas de movimiento y colisión.", "Práctica de introducción a la programación por bloques donde el alumnado programa el movimiento y la interacción entre personajes."),
        ("Taller mecánico-digital sobre el uso de engranajes y programación secuencial de motores.", "Taller de robótica sobre el uso de engranajes y programación de secuencias de movimiento con motores."),
        ("Recurso interactivo generado con AventurIA (plataforma propia) para introducir a los alumnos en la algoritmia.", "Recurso interactivo generado con AventurIA (plataforma propia) para introducir al alumnado en el pensamiento computacional.")
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
