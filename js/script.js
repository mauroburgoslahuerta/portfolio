// Global variables
let modal;
let currentLang = 'es'; // Default language

// 3. Multi-language Projects Data
const projectsData = {
    "edutestia-app": {
        "title": {
            "es": "Edutestia - Plataforma Educativa con IA Generativa",
            "gl": "Edutestia - Plataforma Educativa con IA Xenerativa",
            "en": "Edutestia - Educational Platform with Generative AI"
        },
        "tag": "IA",
        "iframeArr": [],
        "innerImage": "assets/images/edutestia_logo.png",
        "shortDesc": {
            "es": "Plataforma de desarrollo propio que transforma cualquier tema en una aventura educativa interactiva en segundos.",
            "gl": "Plataforma de desenvolvemento propio que transforma calquera tema nunha aventura educativa interactiva en segundos.",
            "en": "Self-developed platform that transforms any topic into an interactive educational adventure in seconds."
        },
        "desc": {
            "es": "<strong>Edutestia</strong> transforma cualquier tema en una experiencia educativa interactiva. Su objetivo no es automatizar la educación, sino empoderar al creador: <strong>la IA propone, pero el criterio final siempre es humano.</strong><br><br><strong>Filosofía y Mecánicas:</strong><div style='display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; margin-top: 10px;'><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);'><strong style='display:block; margin-bottom:4px;'>🧠 Aprendizaje Adaptativo</strong>Ajusta dinámicamente lenguaje y dificultad, sin necesidad de programación manual.</div><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);'><strong style='display:block; margin-bottom:4px;'>🛡️ Enfoque Pedagógico</strong>Los temas sensibles no se censuran, se reformulan priorizando la reflexión y la convivencia.</div><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);'><strong style='display:block; margin-bottom:4px;'>✨ Control Consciente</strong>Edición total de preguntas, respuestas e imágenes. Ningún contenido se publica sin validación.</div><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);'><strong style='display:block; margin-bottom:4px;'>📈 Aprender Haciendo</strong>El error no penaliza. Se registra el primer y último intento para fomentar la mejora continua.</div></div>",
            "gl": "<strong>Edutestia</strong> transforma calquera tema nunha experiencia educativa interactiva. O seu obxectivo non é automatizar a educación, senón empoderar ao creador: <strong>a IA propón, pero o criterio final sempre é humano.</strong><br><br><strong>Filosofía e Mecánicas:</strong><div style='display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; margin-top: 10px;'><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);'><strong style='display:block; margin-bottom:4px;'>🧠 Aprendizaxe Adaptativo</strong>Axusta dinamicamente linguaxe e dificultade, sen necesidade de programación manual.</div><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);'><strong style='display:block; margin-bottom:4px;'>🛡️ Enfoque Pedagóxico</strong>Os temas sensibles non se censuran, reformúlanse priorizando a reflexión e a convivencia.</div><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);'><strong style='display:block; margin-bottom:4px;'>✨ Control Consciente</strong>Edición total de preguntas, respostas e imaxes. Ningún contido publícase sen validación.</div><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);'><strong style='display:block; margin-bottom:4px;'>📈 Aprender Facendo</strong>O erro non penaliza. Rexístrase o primeiro e último intento para fomentar a mellora continua.</div></div>",
            "en": "<strong>Edutestia</strong> transforms any topic into an interactive educational experience. Its goal is not to automate education, but to empower the creator: <strong>AI proposes, but the final judgment is always human.</strong><br><br><strong>Philosophy & Mechanics:</strong><div style='display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; margin-top: 10px;'><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);'><strong style='display:block; margin-bottom:4px;'>🧠 Adaptive Learning</strong>Dynamically adjusts language and difficulty without manual programming.</div><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);'><strong style='display:block; margin-bottom:4px;'>🛡️ Pedagogical Approach</strong>Sensitive topics are not censored, they are reframed prioritizing ethics and reflection.</div><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);'><strong style='display:block; margin-bottom:4px;'>✨ Conscious Control</strong>Total editing of questions, answers, and images. No content is published without validation.</div><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);'><strong style='display:block; margin-bottom:4px;'>📈 Learning by Doing</strong>Mistakes are not penalized. First and last attempts are recorded to foster continuous improvement.</div></div>"
        },
        "objectives": {
            "es": [
                "Personalizar el aprendizaje de forma masiva",
                "Generar contenido en tiempo real",
                "Proporcionar feedback inmediato",
                "Gamificar sin barreras de entrada",
                "Analizar el desempeño"
            ],
            "gl": [
                "Personalizar a aprendizaxe de forma masiva",
                "Xerar contido en tempo real",
                "Proporcionar feedback inmediato",
                "Gamificar sen barreiras de entrada",
                "Analizar o desempeño"
            ],
            "en": [
                "Personalize learning on a massive scale",
                "Generate content in real time",
                "Provide immediate feedback",
                "Gamify without entry barriers",
                "Analyze performance"
            ]
        },
        "instructions": {
            "es": "1. Introduce un tema y la edad. <br>2. La IA genera un borrador que puedes <strong>editar y pulir al 100%</strong>. <br>3. Comparte el enlace y analiza la evolución (nota inicial vs final) de tus alumnos.",
            "gl": "1. Introduce un tema e a idade. <br>2. A IA xera un borrador que podes <strong>editar e pulir ao 100%</strong>. <br>3. Comparte a ligazón e analiza a evolución (nota inicial vs final) dos teus alumnos.",
            "en": "1. Enter a topic and age. <br>2. AI generates a draft you can <strong>edit and polish 100%</strong>. <br>3. Share the link and analyze your students' evolution (initial vs final score)."
        },
        "link": "https://edutestia.com/"
    },
    "edutestia-example": {
        "title": {
            "es": "Edutestia - Pensamiento Computacional (4.º EP)",
            "gl": "Edutestia - Pensamento Computacional (4.º EP)",
            "en": "Edutestia - Computational Thinking (4th Grade)"
        },
        "tag": "Diseño Instruccional",
        "iframeArr": [],
        "innerImage": "assets/images/aventuria_ct_game.png",
        "desc": {
            "es": "Recurso educativo hecho con la plataforma <strong>Edutestia (de creación propia)</strong> para trabajar el Pensamiento Computacional en 4.º EP. Generé la estructura base con mi herramienta y <strong>revisé cada detalle al 100%</strong>, asegurando un contenido pedagógico de máxima calidad y totalmente adaptado a mis alumnos.",
            "gl": "Recurso educativo feito coa plataforma <strong>Edutestia (de creación propia)</strong> para traballar o Pensamento Computacional en 4.º EP. Xerei a estrutura base coa miña ferramenta e <strong>revisei cada detalle ao 100%</strong>, asegurando un contido pedagóxico de máxima calidade e totalmente adaptado aos meus alumnos.",
            "en": "Educational resource made with the <strong>Edutestia platform (my own creation)</strong> to work on Computational Thinking in 4th Grade. I generated the base structure with my tool and <strong>reviewed every detail 100%</strong>, ensuring maximum pedagogical quality content fully adapted to my students."
        },
        "objectives": {
            "es": [
                "Identificar patrones lógicos",
                "Comprender secuencias de algoritmos",
                "Resolver problemas computacionales",
                "Fomentar el aprendizaje autónomo"
            ],
            "gl": [
                "Identificar patróns lóxicos",
                "Comprender secuencias de algoritmos",
                "Resolver problemas computacionais",
                "Fomentar a aprendizaxe autónoma"
            ],
            "en": [
                "Identify logical patterns",
                "Understand algorithm sequences",
                "Solve computational problems",
                "Encourage autonomous learning"
            ]
        },
        "instructions": {
            "es": "Haz clic en 'Jugar' para experimentar una aventura real tal como la verían tus alumnos.",
            "gl": "Fai clic en 'Xogar' para experimentar unha aventura real tal como a verían os teus alumnos.",
            "en": "Click 'Play' to experience a real adventure just as your students would see it."
        },
        "link": "https://edutestia.com/?id=7f27b66a-900d-439b-bc8c-a2e3a1f21fb1"
    },
    "pilla-al-pez": {
        "title": {
            "es": "Pilla al pez – Scratch (1.º&nbsp;ciclo&nbsp;de&nbsp;EP)",
            "gl": "Pilla o peixe – Scratch (1.º&nbsp;ciclo&nbsp;de&nbsp;EP)",
            "en": "Catch the Fish – Scratch (1st&nbsp;cycle&nbsp;PE)"
        },
        "tag": "Scratch",
        "iframeArr": [
            "https://scratch.mit.edu/projects/1233768152/embed"
        ],
        "desc": {
            "es": "Actividad de iniciación al pensamiento computacional en Scratch. Los estudiantes desarrollan desde cero un videojuego interactivo donde programan el control de personajes, el sistema de puntuación y la lógica de colisiones entre un tiburón y un pez.",
            "gl": "Actividade de iniciación ao pensamento computacional en Scratch. Os estudantes desenvolven dende cero un videoxogo interactivo onde programan o control de personaxes, o sistema de puntuación e a lóxica de colisións entre un tiburón e un peixe.",
            "en": "Introductory activity to computational thinking in Scratch. Students develop an interactive video game from scratch where they program character control, the scoring system, and the collision logic between a shark and a fish."
        },
        "objectives": {
            "es": [
                "Coordinar movimientos y aplicar lógica",
                "Resolver problemas de forma creativa",
                "Desarrollar autonomía",
                "Experimentar con código visual",
                "Trabajar cooperativamente",
                "Aplicar enfoque STEAM"
            ],
            "gl": [
                "Coordinar movementos e aplicar lóxica",
                "Resolver problemas de forma creativa",
                "Desenvolver autonomía",
                "Experimentar con código visual",
                "Traballar cooperativamente",
                "Aplicar enfoque STEAM"
            ],
            "en": [
                "Coordinate movements and apply logic",
                "Solve problems creatively",
                "Develop autonomy",
                "Experiment with visual code",
                "Work cooperatively",
                "Apply STEAM approach"
            ]
        },
        "instructions": {
            "es": "Controla al tiburón con las flechas del teclado para atrapar al pez y sumar puntos.",
            "gl": "Controla a quenlla coas frechas do teclado para atrapar o peixe e sumar puntos.",
            "en": "Control the shark with the arrow keys to catch the fish and score points."
        },
        "link": "https://scratch.mit.edu/projects/1233768152"
    },
    "makecode": {
        "title": {
            "es": "Laberinto - Arcade Makecode (2.º&nbsp;ciclo&nbsp;de&nbsp;EP)",
            "gl": "Labirinto - Arcade Makecode (2.º&nbsp;ciclo&nbsp;de&nbsp;EP)",
            "en": "Maze - Arcade Makecode (2nd&nbsp;cycle&nbsp;PE)"
        },
        "tag": "MakeCode Arcade",
        "iframeArr": [
            "https://arcade.makecode.com/---run?id=S41120-74970-90190-57842"
        ],
        "desc": {
            "es": "Práctica de diseño de niveles y programación lógica. Cada grupo asume el rol de desarrollador para crear su propio laberinto: dibujan el recorrido (tilemap), configuran las paredes físicas, y programan tanto el movimiento como la condición de victoria al llegar al tesoro.",
            "gl": "Práctica de deseño de niveis e programación lóxica. Cada grupo asume o rol de desenvolvedor para crear o seu propio labirinto: debuxan o percorrido (tilemap), configuran as paredes físicas, e programan tanto o movemento como a condición de vitoria ao chegar ao tesouro.",
            "en": "Practice in level design and logical programming. Each group takes on the role of developer to create their own maze: they draw the path (tilemap), configure physical walls, and program both the movement and the win condition upon reaching the treasure."
        },
        "objectives": {
            "es": [
                "Desarrollar el pensamiento computacional",
                "Planificar rutas espaciales",
                "Resolver problemas algorítmicos",
                "Aplicar lógica de programación por bloques",
                "Fomentar la creatividad",
                "Integrar enfoque STEAM"
            ],
            "gl": [
                "Desenvolver o pensamento computacional",
                "Planificar rutas espaciais",
                "Resolver problemas algorítmicos",
                "Aplicar lóxica de programación por bloques",
                "Fomentar a creatividade",
                "Integrar enfoque STEAM"
            ],
            "en": [
                "Develop computational thinking",
                "Plan spatial routes",
                "Solve algorithmic problems",
                "Apply block programming logic",
                "Foster creativity",
                "Integrate STEAM approach"
            ]
        },
        "instructions": {
            "es": "Usa las flechas del teclado para moverte por el laberinto y encontrar el cofre.",
            "gl": "Usa as frechas do teclado para moverte polo labirinto e atopar o cofre.",
            "en": "Use the arrow keys to move through the maze and find the chest."
        },
        "link": "https://arcade.makecode.com/S41120-74970-90190-57842"
    },
    "uxia": {
        "title": {
            "es": "Fichas UX-IA (Uxía) - Pensamiento Computacional (1.º&nbsp;ciclo&nbsp;de&nbsp;EP)",
            "gl": "Fichas UX-IA (Uxía) - Pensamento Computacional (1.º&nbsp;ciclo&nbsp;de&nbsp;EP)",
            "en": "UX-IA Worksheets (Uxía) - Computational Thinking (1st&nbsp;cycle&nbsp;PE)"
        },
        "tag": "Innovación",
        "iframeArr": [],
        "desc": {
            "es": "Recurso educativo original formado por fichas progresivas diseñadas para trabajar pensamiento computacional y lógica de forma sencilla y visual. Cada ficha propone un recorrido con flechas que el alumnado debe seguir para llegar a la meta. En niveles superiores, se introducen casillas vacías. Ideal para iniciarse en la lógica antes de Scratch.",
            "gl": "Recurso educativo orixinal formado por fichas progresivas deseñadas para traballar pensamento computacional e lóxica de forma sinxela e visual. Cada ficha propón un percorrido con frechas que o alumnado debe seguir para chegar á meta. En niveis superiores, introdúcense casas baleiras. Ideal para iniciarse na lóxica antes de Scratch.",
            "en": "Original educational resource consisting of progressive worksheets designed to work on computational thinking and logic in a simple and visual way. Each worksheet proposes a path with arrows that students must follow to reach the goal. Higher levels introduce empty boxes. Ideal for starting logic before Scratch."
        },
        "objectives": {
            "es": [
                "Mejorar la atención y orientación espacial",
                "Resolver problemas lógicos",
                "Planificar de forma autónoma",
                "Interpretar secuencias y direcciones",
                "Aplicar enfoque STEAM"
            ],
            "gl": [
                "Mellorar a atención e orientación espacial",
                "Resolver problemas lóxicos",
                "Planificar de forma autónoma",
                "Interpretar secuencias e direccións",
                "Aplicar enfoque STEAM"
            ],
            "en": [
                "Improve attention and spatial orientation",
                "Solve logical problems",
                "Plan autonomously",
                "Interpret sequences and directions",
                "Apply STEAM approach"
            ]
        },
        "instructions": {
            "es": "Sigue las flechas y completa el recorrido para llegar a la meta.",
            "gl": "Segue as frechas e completa o percorrido para chegar á meta.",
            "en": "Follow the arrows and complete the path to reach the goal."
        },
        "link": "https://drive.google.com/file/d/17lW6UsIxhoV4hEMmJIJuxkmCke_47_L8/view?usp=sharing"
    },
    "lego-noel": {
        "title": {
            "es": "Papá Noel y su reno motorizado – LEGO® SPIKE (3.º&nbsp;ciclo&nbsp;de&nbsp;EP)",
            "gl": "Papá Noel e o seu reno motorizado – LEGO® SPIKE (3.º&nbsp;ciclo&nbsp;de&nbsp;EP)",
            "en": "Santa and his motorized reindeer – LEGO® SPIKE (3rd&nbsp;cycle&nbsp;PE)"
        },
        "tag": "Robótica",
        "iframeArr": [],
        "innerImage": ["assets/images/lego_1.png", "assets/images/lego_2.png"],
        "desc": {
            "es": "Taller de robótica y programación secuencial con LEGO® SPIKE. A partir de la construcción de un modelo motorizado, los estudiantes experimentan de forma práctica con engranajes y sensores, aprendiendo a controlar la transmisión, la velocidad y el sentido del movimiento.",
            "gl": "Obradoiro de robótica e programación secuencial con LEGO® SPIKE. A partir da construción dun modelo motorizado, os estudantes experimentan de forma práctica con engrenaxes e sensores, aprendendo a controlar a transmisión, a velocidade e o sentido do movemento.",
            "en": "Robotics and sequential programming workshop with LEGO® SPIKE. Starting with the construction of a motorized model, students experiment practically with gears and sensors, learning to control transmission, speed, and direction of movement."
        },
        "objectives": {
            "es": [
                "Resolver problemas mecánicos",
                "Programar secuencias de motores",
                "Trabajar en equipo distribuyendo roles",
                "Comprender el funcionamiento de engranajes",
                "Aplicar enfoque STEAM"
            ],
            "gl": [
                "Resolver problemas mecánicos",
                "Programar secuencias de motores",
                "Traballar en equipo distribuíndo roles",
                "Comprender o funcionamento de engrenaxes",
                "Aplicar enfoque STEAM"
            ],
            "en": [
                "Solve mechanical problems",
                "Program motor sequences",
                "Work as a team distributing roles",
                "Understand how gears work",
                "Apply STEAM approach"
            ]
        },
        "link": "#"
    },
    "super-maria": {
        "title": {
            "es": "Super María – Arcade MakeCode (3.º&nbsp;ciclo de EP)",
            "gl": "Super María – Arcade MakeCode (3.º&nbsp;ciclo de EP)",
            "en": "Super María – Arcade MakeCode (3rd cycle PE)"
        },
        "tag": "MakeCode Arcade",
        "iframeArr": [
            "https://arcade.makecode.com/---run?id=S11062-56291-87574-31057"
        ],
        "desc": {
            "es": "Proyecto con MakeCode Arcade. Se crea un videojuego de plataformas con desplazamiento lateral. El escenario incluye obstáculos, zonas de lava y un enemigo patrullando, obligando a planificar el recorrido y ajustar los saltos.",
            "gl": "Proxecto con MakeCode Arcade. Créase un videoxogo de plataformas con desprazamento lateral. O escenario inclúe obstáculos, zonas de lava e un inimigo patrullando, obrigando a planificar o percorrido e axustar os saltos.",
            "en": "Project with MakeCode Arcade. A side-scrolling platform video game is created. The scenario includes obstacles, lava zones, and a patrolling enemy, forcing path planning and jump adjustment."
        },
        "objectives": {
            "es": [
                "Aplicar lógica de programación",
                "Simular físicas 2D (gravedad y velocidad)",
                "Diseñar niveles interactivos (Tilemap)",
                "Gestionar variables (vidas, puntos)",
                "Crear personajes",
                "Integrar enfoque STEAM"
            ],
            "gl": [
                "Aplicar lóxica de programación",
                "Simular físicas 2D (gravidade e velocidade)",
                "Deseñar niveis interactivos (Tilemap)",
                "Xestionar variables (vidas, puntos)",
                "Crear personaxes",
                "Integrar enfoque STEAM"
            ],
            "en": [
                "Apply programming logic",
                "Simulate 2D physics (gravity and speed)",
                "Design interactive levels (Tilemap)",
                "Manage variables (lives, points)",
                "Create characters",
                "Integrate STEAM approach"
            ]
        },
        "instructions": {
            "es": "Controla con botones de dirección. Barra espaciadora para saltar. Evita la lava y los enemigos.",
            "gl": "Controla con botóns de dirección. Barra espaciadora para saltar. Evita a lava e os inimigos.",
            "en": "Control with direction buttons. Spacebar to jump. Avoid lava and enemies."
        },
        "link": "https://arcade.makecode.com/S11062-56291-87574-31057"
    },
    "flappy-bird": {
        "title": {
            "es": "Flappy Bird – Scratch (3.º&nbsp;ciclo&nbsp;de&nbsp;EP)",
            "gl": "Flappy Bird – Scratch (3.º&nbsp;ciclo&nbsp;de&nbsp;EP)",
            "en": "Flappy Bird – Scratch (3rd&nbsp;cycle&nbsp;PE)"
        },
        "tag": "Scratch",
        "iframeArr": [
            "https://scratch.mit.edu/projects/1235072996/embed"
        ],
        "desc": {
            "es": "Proyecto avanzado en Scratch recreando el clásico Flappy Bird. El reto es mantener al personaje en el aire evitando obstáculos. Se trabajan conceptos de movimiento continuo, gravedad, eventos y detección de colisiones.",
            "gl": "Proxecto avanzado en Scratch recreando o clásico Flappy Bird. O reto é manter o personaxe no aire evitando obstáculos. Trabállanse conceptos de movemento continuo, gravidade, eventos e detección de colisións.",
            "en": "Advanced Scratch project recreating the classic Flappy Bird. The challenge is to keep the character in the air avoiding obstacles. Concepts of continuous movement, gravity, events, and collision detection are worked on."
        },
        "objectives": {
            "es": [
                "Simular físicas de gravedad e inercia",
                "Programar clones avanzados",
                "Gestionar eventos e interrupciones",
                "Aplicar lógica condicional compleja",
                "Resolver problemas técnicos",
                "Integrar enfoque STEAM"
            ],
            "gl": [
                "Simular físicas de gravidade e inercia",
                "Programar clons avanzados",
                "Xestionar eventos e interrupcións",
                "Aplicar lóxica condicional complexa",
                "Resolver problemas técnicos",
                "Integrar enfoque STEAM"
            ],
            "en": [
                "Simulate gravity and inertia physics",
                "Program advanced clones",
                "Manage events and interrupts",
                "Apply complex conditional logic",
                "Solve technical problems",
                "Integrate STEAM approach"
            ]
        },
        "instructions": {
            "es": "Pulsa la barra espaciadora para aletear y mantenerte en el aire. Evita los tubos.",
            "gl": "Pulsa a barra espaciadora para aletear e manterte no aire. Evita os tubos.",
            "en": "Press the spacebar to flap and stay in the air. Avoid the pipes."
        },
        "link": "https://scratch.mit.edu/projects/1235072996"
    },
    "meteoritos": {
        "title": {
            "es": "Esquiva los meteoritos – Scratch (3.º&nbsp;ciclo&nbsp;de&nbsp;EP)",
            "gl": "Esquiva os meteoritos – Scratch (3.º&nbsp;ciclo&nbsp;de&nbsp;EP)",
            "en": "Dodge the Meteorites – Scratch (3rd&nbsp;cycle&nbsp;PE)"
        },
        "tag": "Scratch",
        "iframeArr": [
            "https://scratch.mit.edu/projects/1235073502/embed"
        ],
        "desc": {
            "es": "Desarrollo de un juego de supervivencia enfocado en el uso de variables y números aleatorios. El alumnado programa la caída impredecible de meteoritos y diseña un sistema de dificultad progresiva donde la velocidad de caída aumenta con el tiempo.",
            "gl": "Desenvolvemento dun xogo de supervivencia enfocado no uso de variables e números aleatorios. O alumnado programa a caída imprevisible de meteoritos e deseña un sistema de dificultade progresiva onde a velocidade de caída aumenta co tempo.",
            "en": "Development of a survival game focused on the use of variables and random numbers. Students program the unpredictable falling of meteorites and design a progressive difficulty system where the falling speed increases over time."
        },
        "objectives": {
            "es": [
                "Generar números aleatorios",
                "Utilizar coordenadas cartesianas",
                "Programar bucles y condiciones",
                "Gestionar la dificultad progresiva",
                "Fomentar la creatividad artística",
                "Aplicar enfoque STEAM"
            ],
            "gl": [
                "Xerar números aleatorios",
                "Utilizar coordenadas cartesianas",
                "Programar bucles e condicións",
                "Xestionar a dificultade progresiva",
                "Fomentar a creatividade artística",
                "Aplicar enfoque STEAM"
            ],
            "en": [
                "Generate random numbers",
                "Use Cartesian coordinates",
                "Program loops and conditions",
                "Manage progressive difficulty",
                "Foster artistic creativity",
                "Apply STEAM approach"
            ]
        },
        "instructions": {
            "es": "Mueve el ratón para controlar la nave. Esquiva los meteoritos el mayor tiempo posible.",
            "gl": "Mover o rato para controlar a nave. Esquiva os meteoritos o maior tempo posible.",
            "en": "Move the mouse to control the spaceship. Dodge the meteorites as long as possible."
        },
        "link": "https://scratch.mit.edu/projects/1235073502"
    },
    "opos-forestales": {
        "title": {
            "es": "Plataforma Oposiciones Forestales (Galicia)",
            "gl": "Plataforma Oposicións Forestais (Galicia)",
            "en": "Forestry Exams Platform (Galicia)"
        },
        "tag": "Desarrollo EdTech",
        "iframeArr": [],
        "innerImage": "assets/images/opos_preview.png",
        "desc": {
            "es": "Plataforma EdTech integral desarrollada ad hoc para mi hermano y un amigo. Ante su falta de herramientas eficientes para preparar sus oposiciones, automaticé la ingesta del temario y +1.400 ítems interactivos mediante pipelines ETL (Python/Node.js) e IA. El resultado escaló a un sistema completo con simulacros, casos prácticos y un dashboard analítico alimentado por React 19 y Supabase.",
            "gl": "Plataforma EdTech integral desenvolvida ad hoc para o meu irmán e un amigo. Ante a súa falta de ferramentas eficientes para preparar as súas oposicións, automaticei a inxestión do temario e +1.400 ítems interactivos mediante pipelines ETL (Python/Node.js) e IA. O resultado escalou a un sistema completo con simulacros, casos prácticos e un dashboard analítico alimentado por React 19 e Supabase.",
            "en": "Comprehensive EdTech platform developed ad hoc for my brother and a friend. Seeing their lack of efficient tools to prepare for their exams, I automated the ingestion of the syllabus and +1,400 interactive items using ETL pipelines (Python/Node.js) and AI. The result scaled into a complete system with mock exams, practical cases, and an analytics dashboard powered by React 19 and Supabase."
        },
        "objectives": {
            "es": [
                "Ingestar contenido oficial masivo mediante pipelines ETL asistidos por IA",
                "Implementar mecánicas de 'immediate feedback' y Clínica de Errores",
                "Desarrollar un dashboard analítico con seguimiento de precisión semaforizado",
                "Diseñar una arquitectura escalable (React 19, Context API, Supabase)",
                "Crear una experiencia de usuario fluida con Tailwind v4 y framer-motion"
            ],
            "gl": [
                "Inxestar contido oficial masivo mediante pipelines ETL asistidos por IA",
                "Implementar mecánicas de 'immediate feedback' e Clínica de Erros",
                "Desenvolver un dashboard analítico con seguimento de precisión semaforizado",
                "Deseñar unha arquitectura escalable (React 19, Context API, Supabase)",
                "Crear unha experiencia de usuario fluída con Tailwind v4 e framer-motion"
            ],
            "en": [
                "Ingest massive official content using AI-assisted ETL pipelines",
                "Implement 'immediate feedback' mechanics and an Error Clinic",
                "Develop an analytical dashboard with traffic-light accuracy tracking",
                "Design a scalable architecture (React 19, Context API, Supabase)",
                "Create a seamless user experience with Tailwind v4 and framer-motion"
            ]
        },
        "instructions": {
            "es": "Visita la plataforma y utiliza el botón de 'Invitado' para explorar el dashboard, la Clínica de Errores y realizar un test de prueba.",
            "gl": "Visita a plataforma e utiliza o botón de 'Invitado' para explorar o dashboard, a Clínica de Erros e realizar un test de proba.",
            "en": "Visit the platform and use the 'Guest' button to explore the dashboard, the Error Clinic, and take a practice test."
        },
        "link": "https://opos-forestales.vercel.app/"
    },
    "alfabetizacion-digital": {
        "title": {
            "es": "Alfabetización: WhatsApp y Privacidad",
            "gl": "Alfabetización: WhatsApp e Privacidade",
            "en": "Literacy: WhatsApp & Privacy"
        },
        "tag": "Diseño Instruccional",
        "iframeArr": [],
        "innerImage": "assets/images/whatsapp_cover.png",
        "shortDesc": {
            "es": "Alfabetización digital centrada en autonomía, privacidad y uso práctico de WhatsApp.",
            "gl": "Alfabetización dixital centrada na autonomía, privacidade e uso práctico de WhatsApp.",
            "en": "Digital literacy focused on autonomy, privacy, and practical use of WhatsApp."
        },
        "desc": {
            "es": "Diseño instruccional para adultos (Programa Red.es). Metodología 'Explicar y Probar' para enseñar configuración básica, gestión de comunidades y protocolos de privacidad esenciales, priorizando la accesibilidad.",
            "gl": "Deseño instrucional para adultos (Programa Red.es). Metodoloxía 'Explicar e Probar' para ensinar configuración básica, xestión de comunidades e protocolos de privacidade esenciais, priorizando a accesibilidade.",
            "en": "Instructional design for adults (Red.es Program). 'Explain and Test' methodology to teach basic setup, community management, and essential privacy protocols, prioritizing accessibility."
        },
        "objectives": {
            "es": [
                "Dominar la comunicación y privacidad en WhatsApp",
                "Gestionar grupos e interacciones avanzadas",
                "Implementar protocolos de ciberseguridad y mantenimiento"
            ],
            "gl": [
                "Dominar a comunicación e privacidade en WhatsApp",
                "Xestionar grupos e interaccións avanzadas",
                "Implementar protocolos de ciberseguridade e mantemento"
            ],
            "en": [
                "Master communication and privacy on WhatsApp",
                "Manage groups and advanced interactions",
                "Implement cybersecurity and maintenance protocols"
            ]
        }
    },
    "alfabetizacion-ciber": {
        "title": {
            "es": "Alfabetización: Ciberseguridad Básica",
            "gl": "Alfabetización: Ciberseguridade Básica",
            "en": "Literacy: Basic Cybersecurity"
        },
        "tag": "Diseño Instruccional",
        "iframeArr": [],
        "innerImage": "assets/images/ciber_cover.png",
        "shortDesc": {
            "es": "Introducción accesible a la seguridad digital y prevención de fraudes para adultos mayores.",
            "gl": "Introdución accesible á seguridade dixital e prevención de fraudes para adultos maiores.",
            "en": "Accessible introduction to digital security and fraud prevention for seniors."
        },
        "desc": {
            "es": "Diseño de un módulo práctico centrado en empoderar frente a amenazas cibernéticas (phishing, estafas). Metodología basada en listas de verificación y reducción de tecnicismos para fomentar un uso seguro de la tecnología diaria.",
            "gl": "Deseño dun módulo práctico centrado en empoderar fronte a ameazas cibernéticas (phishing, estafas). Metodoloxía baseada en listas de verificación e redución de tecnicismos para fomentar un uso seguro da tecnoloxía diaria.",
            "en": "Design of a practical module focused on empowering against cyber threats (phishing, scams). Methodology based on checklists and reduction of technical jargon to foster safe use of everyday technology."
        },
        "objectives": {
            "es": [
                "Detectar amenazas y evaluar escenarios digitales",
                "Configurar barreras preventivas (contraseñas, 2FA)",
                "Ejecutar protocolos de respuesta ante incidentes"
            ],
            "gl": [
                "Detectar ameazas e avaliar escenarios dixitais",
                "Configurar barreiras preventivas (contrasinais, 2FA)",
                "Executar protocolos de resposta ante incidentes"
            ],
            "en": [
                "Detect threats and evaluate digital scenarios",
                "Configure preventive barriers (passwords, 2FA)",
                "Execute incident response protocols"
            ]
        }
    },
    "alfabetizacion-tramites": {
        "title": {
            "es": "Alfabetización: Trámites con la Administración",
            "gl": "Alfabetización: Trámites coa Administración",
            "en": "Literacy: Government Digital Procedures"
        },
        "tag": "Diseño Instruccional",
        "iframeArr": [],
        "innerImage": "assets/images/tramites_cover.png",
        "shortDesc": {
            "es": "Gestión de Cl@ve, certificados digitales y acceso a la Carpeta Ciudadana para mayores.",
            "gl": "Xestión de Cl@ve, certificados dixitais e acceso á Carpeta Cidadá para maiores.",
            "en": "Management of Cl@ve, digital certificates, and access to the Citizen Folder for seniors."
        },
        "desc": {
            "es": "Formación especializada en e-Administración. Rompiendo la barrera burocrática enseñando el uso de Cl@ve, Certificado Digital, Sergas Móbil y Mi Carpeta Ciudadana mediante casos prácticos y acompañamiento directo.",
            "gl": "Formación especializada en e-Administración. Rompendo a barreira burocrática ensinando o uso de Cl@ve, Certificado Dixital, Sergas Móbil e Mi Carpeta Ciudadana mediante casos prácticos e acompañamento directo.",
            "en": "Specialized training in e-Government. Breaking the bureaucratic barrier by teaching the use of Cl@ve, Digital Certificate, health apps, and Citizen Folder through real case studies and direct support."
        },
        "objectives": {
            "es": [
                "Instalar y usar Cl@ve PIN",
                "Pedir citas médicas online",
                "Navegar por sedes electrónicas sin frustración"
            ],
            "gl": [
                "Instalar e usar Cl@ve PIN",
                "Pedir citas médicas online",
                "Navegar por sedes electrónicas sen frustración"
            ],
            "en": [
                "Install and use Cl@ve PIN",
                "Request medical appointments online",
                "Navigate electronic headquarters without frustration"
            ]
        }
    },
    "alfabetizacion-redes": {
        "title": {
            "es": "Alfabetización: Redes Sociales",
            "gl": "Alfabetización: Redes Sociais",
            "en": "Literacy: Social Networks"
        },
        "tag": "Diseño Instruccional",
        "iframeArr": [],
        "innerImage": "assets/images/redes_cover.png",
        "shortDesc": {
            "es": "Uso seguro y constructivo de redes sociales para evitar el aislamiento en el entorno rural.",
            "gl": "Uso seguro e construtivo de redes sociais para evitar o illamento na contorna rural.",
            "en": "Safe and constructive use of social networks to prevent isolation in the rural environment."
        },
        "desc": {
            "es": "Curso orientado a combatir la soledad no deseada en el entorno rural a través de las redes sociales. Enfoque en privacidad, creación de comunidades y consumo crítico de información (Fake News).",
            "gl": "Curso orientado a combater a soidade non desexada na contorna rural a través das redes sociais. Enfoque en privacidad, creación de comunidades e consumo crítico de información (Fake News).",
            "en": "Course aimed at combating unwanted loneliness in rural areas through social networks. Focus on privacy, community building, and critical consumption of information (Fake News)."
        },
        "objectives": {
            "es": [
                "Configurar la privacidad de perfiles",
                "Detectar noticias falsas (Fake News)",
                "Participar activamente en redes sociales"
            ],
            "gl": [
                "Configurar a privacidade de perfís",
                "Detectar novas falsas (Fake News)",
                "Participar activamente nas redes sociais"
            ],
            "en": [
                "Configure profile privacy",
                "Detect fake news (Fake News)",
                "Participate actively in social networks"
            ]
        },
        "instructions": { "es": "Puedes ver una muestra del material didáctico del curso haciendo clic en Ver Proyecto.", "gl": "Podes ver unha mostra do material didáctico do curso facendo clic en Ver Proxecto.", "en": "You can see a sample of the course teaching material by clicking View Project." },
        "link": "#"
    },
    "alfabetizacion-reservas": {
        "title": {
            "es": "Alfabetización: Reservas y Compras Online",
            "gl": "Alfabetización: Reservas e Compras Online",
            "en": "Literacy: Online Booking and Shopping"
        },
        "tag": "Diseño Instruccional",
        "iframeArr": [],
        "innerImage": "assets/images/reservas_cover.png",
        "shortDesc": {
            "es": "Planificación de viajes y compras seguras online con foco en detección de fraudes.",
            "gl": "Planificación de viaxes e compras seguras en liña con foco na detección de fraudes.",
            "en": "Travel planning and secure online shopping with a focus on fraud detection."
        },
        "desc": {
            "es": "Capacitación para la autonomía en el ocio y el transporte. El curso enseña a utilizar comparadores de vuelos, apps de tren/autobús y pasarelas de pago seguras para adquirir billetes y entradas.",
            "gl": "Capacitación para a autonomía no lecer e o transporte. O curso ensina a utilizar comparadores de voos, apps de tren/autobús e pasarelas de pago seguras para adquirir billetes e entradas.",
            "en": "Training for autonomy in leisure and transportation. The course teaches the use of flight comparators, train/bus apps, and secure payment gateways to purchase tickets."
        },
        "objectives": {
            "es": [
                "Usar tarjetas bancarias de forma segura",
                "Navegar por apps de transporte (Renfe, Alsa)",
                "Comparar precios y detectar webs fraudulentas"
            ],
            "gl": [
                "Usar tarxetas bancarias de forma segura",
                "Navegar por apps de transporte (Renfe, Alsa)",
                "Comparar prezos e detectar webs fraudulentas"
            ],
            "en": [
                "Use bank cards securely",
                "Navigate transport apps (Renfe, Alsa)",
                "Compare prices and detect fraudulent websites"
            ]
        },
        "instructions": { "es": "Puedes ver una muestra del material didáctico del curso haciendo clic en Ver Proyecto.", "gl": "Podes ver unha mostra do material didáctico do curso facendo clic en Ver Proxecto.", "en": "You can see a sample of the course teaching material by clicking View Project." },
        "link": "#"
    }
};



document.addEventListener('DOMContentLoaded', () => {
    // 1. Animation Logic
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // 1.5. Mobile Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });
    }

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });

    // Back to Top Logic
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Project Filtering Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active to clicked
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');

                    if (filterValue === 'all' || category === filterValue) {
                        card.classList.remove('hidden');
                        setTimeout(() => {
                            card.classList.remove('fade-out');
                        }, 10);
                    } else {
                        card.classList.add('fade-out');
                        setTimeout(() => {
                            card.classList.add('hidden');
                        }, 300);
                    }
                });
            });
        });
    }

    // Modal click outside logic
    window.onclick = function (event) {
        if (event.target.id === 'project-modal') {
            closeModal();
        }
    };
});

// Function to filter projects from About Section cards
window.filterFromAbout = function(category) {
    const projectsSection = document.getElementById('proyectos');
    if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
        const filterBtn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
        if (filterBtn) {
            filterBtn.click();
        }
    }, 300); // Small delay to allow scrolling to start
};

// ============================================
// MODAL LOGIC & DEEP LINKING
// ============================================

window.openModal = function (projectId) {
    try {
        console.log("Opening modal for:", projectId);
        if (!window.modal) window.modal = document.getElementById('project-modal');
        if (!window.modal) {
            console.error("Modal element not found!");
            return;
        }

        const project = projectsData[projectId];
        if (!project) {
            console.error("Project not found in data:", projectId);
            return;
        }

        // Use currentLang for content
        document.getElementById('modal-title').innerHTML = project.title[currentLang] || project.title['es'];
        document.getElementById('modal-tag').innerText = project.tag;
        document.getElementById('modal-tag').className = `tag ${project.tag.toLowerCase().split(' ')[0]}`;

        // Media Logic (Iframe or Image)
        const container = document.getElementById('modal-game-container');
        const iframe = document.getElementById('modal-iframe');
        const modalImg = document.getElementById('modal-image');

        iframe.style.display = 'none';
        modalImg.style.display = 'none';
        iframe.src = "";
        modalImg.src = "";

        // Remove dynamically added galleries if they exist
        const oldGalleries = container.querySelectorAll('.dynamic-gallery-container');
        oldGalleries.forEach(el => el.remove());

        if (project.iframeArr && project.iframeArr.length > 0) {
            iframe.src = project.iframeArr[0];
            iframe.style.display = 'block';
            container.style.display = 'block';
        } else if (project.innerImage) {
            if (Array.isArray(project.innerImage)) {
                // Handle multiple images native gallery
                const galleryDiv = document.createElement('div');
                galleryDiv.className = 'dynamic-gallery-container';
                galleryDiv.style.display = 'flex';
                galleryDiv.style.gap = '15px';
                galleryDiv.style.width = '100%';
                
                project.innerImage.forEach(src => {
                    const img = document.createElement('img');
                    img.src = src;
                    img.style.flex = '1';
                    img.style.borderRadius = '8px';
                    img.style.objectFit = 'cover';
                    img.style.minWidth = '0'; // Allows flex items to shrink properly
                    galleryDiv.appendChild(img);
                });
                container.appendChild(galleryDiv);
                container.style.display = 'block';
            } else {
                modalImg.src = project.innerImage;
                modalImg.style.display = 'block';
                container.style.display = 'block';
            }
        } else {
            container.style.display = 'none';
        }

        // Text Content
        document.getElementById('modal-desc').innerHTML = project.desc[currentLang] || project.desc['es'];
        
        const instPara = document.getElementById('modal-instructions');
        const instSection = instPara.closest('.modal-section');
        if (project.instructions) {
            instPara.innerHTML = project.instructions[currentLang] || project.instructions['es'];
            if(instSection) instSection.style.display = 'block';
        } else {
            if(instSection) instSection.style.display = 'none';
        }

        // Button Logic
        const linkBtn = document.getElementById('modal-link');

        if (!project.link || project.link === "#") {
            linkBtn.style.display = 'none';
        } else {
            linkBtn.style.display = 'inline-block';
            linkBtn.href = project.link;
            linkBtn.target = "_blank";

            let btnText = "Ver Proyecto";
            let btnIcon = '<i class="fas fa-external-link-alt"></i>';
            const prefix = "Ver en ";

            if (projectId === 'edutestia-app' || projectId === 'opos-forestales') {
                linkBtn.innerHTML = `Visitar Web <i class="fas fa-rocket"></i>`;
            } else if (project.tag.includes('Scratch')) {
                linkBtn.innerHTML = `${prefix} Scratch <i class="fas fa-gamepad"></i>`;
            } else if (project.tag.includes('MakeCode')) {
                linkBtn.innerHTML = `${prefix} MakeCode <i class="fas fa-gamepad"></i>`;
            } else if (project.tag === 'IA' || project.tag === 'Diseño Instruccional') {
                linkBtn.innerHTML = `Jugar <i class="fas fa-rocket"></i>`;
            } else if (projectId === 'uxia') {
                linkBtn.innerHTML = `${prefix} PDF <i class="fas fa-file-pdf"></i>`;
            } else {
                linkBtn.innerHTML = `${prefix} ${btnText} ${btnIcon}`;
            }
        }

        // Objectives Title
        const objectivesTitleSpan = document.getElementById('modal-objectives-title');
        if (objectivesTitleSpan) {
            const isEdTech = project.tag && (project.tag.includes('EdTech') || project.tag === 'IA' || project.tag.includes('Desarrollo'));
            objectivesTitleSpan.textContent = isEdTech ? 'Características Técnicas' : 'Objetivos Didácticos';
        }

        // Objectives
        const objectivesList = document.getElementById('modal-objectives');
        objectivesList.innerHTML = '';
        (project.objectives[currentLang] || project.objectives['es']).forEach(obj => {
            const li = document.createElement('li');
            li.innerText = obj;
            objectivesList.appendChild(li);
        });

        // Show Modal
        window.modal.style.display = "flex"; 
        void window.modal.offsetWidth;
        window.modal.classList.add("show");
        
        // Deep Linking: Update URL Hash
        if (window.history && window.history.pushState) {
            window.history.pushState(null, null, '#' + projectId);
        }
        
        console.log("Modal opened successfully.");

    } catch (error) {
        console.error("Error in openModal:", error);
    }
};

window.closeModal = function () {
    console.log("Attempting to close modal...");
    const m = document.getElementById('project-modal');
    if (!m) return;

    m.classList.remove("show");
    setTimeout(() => {
        m.style.display = "none";
        const iframe = document.getElementById('modal-iframe');
        if (iframe) iframe.src = "";
        
        // Deep Linking: Clear URL Hash
        if (window.history && window.history.pushState) {
            window.history.pushState(null, null, window.location.pathname);
        }
    }, 300);
};




window.revealPhone = function (container) {
    const mask = container.querySelector('.phone-mask');
    const number = container.querySelector('.phone-number');

    if (mask && number) {
        mask.style.display = 'none';
        number.classList.remove('hidden');
    }
};
