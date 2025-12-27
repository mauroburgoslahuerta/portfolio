// Global variables
let modal;
let currentLang = 'es'; // Default language

// 3. Multi-language Projects Data
const projectsData = {
    "aventuria-app": {
        title: {
            es: "AventurIA - Plataforma Educativa con IA Generativa",
            gl: "AventurIA - Plataforma Educativa con IA Xenerativa",
            en: "AventurIA - Educational Platform with Generative AI"
        },
        tag: "IA",
        iframeArr: [], // No iframe for the main app, just image
        shortDesc: {
            es: "Plataforma de desarrollo propio que transforma cualquier tema en una aventura educativa interactiva en segundos.",
            gl: "Plataforma de desenvolvemento propio que transforma calquera tema nunha aventura educativa interactiva en segundos.",
            en: "Self-developed platform that transforms any topic into an interactive educational adventure in seconds."
        },
        desc: {
            es: "<strong>AventurIA</strong> convierte cualquier tema en una <strong>aventura gráfica interactiva</strong>. Una plataforma de autoría visual donde <strong>tú eres el arquitecto y la IA es solo tu asistente</strong>.<br><br><strong>Filosofía y Mecánicas:</strong><div style='display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; margin-top: 10px;'><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border-left: 4px solid #F4C430;'><strong style='display:block; margin-bottom:4px;'>✨ Control de Edición</strong>El usuario mantiene el control absoluto. Revisión y pulido en tiempo real (Edición Viva).</div><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border-left: 4px solid #9C27B0;'><strong style='display:block; margin-bottom:4px;'>🧠 Pedagogía Invisible</strong>Integración de la <strong>Taxonomía de Bloom</strong>. Ajuste automático de complejidad y vocabulario.</div><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border-left: 4px solid #2196F3;'><strong style='display:block; margin-bottom:4px;'>🛡️ Reformulación Pedagógica</strong>Los temas sensibles no se bloquean, se recontextualizan educativamente.</div><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border-left: 4px solid #4CAF50;'><strong style='display:block; margin-bottom:4px;'>📈 Puntuación Dual</strong>Registro de nota del primer intento vs último para un control total por parte del docente.</div></div>",
            gl: "<strong>AventurIA</strong> converte calquera tema nunha <strong>aventura gráfica interactiva</strong>. Unha plataforma de autoría visual onde <strong>ti es o arquitecto e a IA é só o teu asistente</strong>.<br><br><strong>Filosofía e Mecánicas:</strong><div style='display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; margin-top: 10px;'><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border-left: 4px solid #F4C430;'><strong style='display:block; margin-bottom:4px;'>✨ Control de Edición</strong>O usuario mantén o control absoluto. Revisión e pulido en tempo real (Edición Viva).</div><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border-left: 4px solid #9C27B0;'><strong style='display:block; margin-bottom:4px;'>🧠 Pedagoxía Invisible</strong>Integración da <strong>Taxonomía de Bloom</strong>. Axuste automático de complexidade e vocabulario.</div><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border-left: 4px solid #2196F3;'><strong style='display:block; margin-bottom:4px;'>🛡️ Reformulación Pedagóxica</strong>Os temas sensibles non se bloquean, recontextualízanse educativamente.</div><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border-left: 4px solid #4CAF50;'><strong style='display:block; margin-bottom:4px;'>📈 Puntuación Dual</strong>Rexistro de nota do primeiro intento vs último para un control total por parte do docente.</div></div>",
            en: "<strong>AventurIA</strong> turns any topic into an <strong>interactive graphic adventure</strong>. A visual authoring platform where <strong>you are the architect and AI is just your assistant</strong>.<br><br><strong>Philosophy & Mechanics:</strong><div style='display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; margin-top: 10px;'><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border-left: 4px solid #F4C430;'><strong style='display:block; margin-bottom:4px;'>✨ Control of Edition</strong>User maintains absolute control. Real-time review and polishing (Live Editing).</div><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border-left: 4px solid #9C27B0;'><strong style='display:block; margin-bottom:4px;'>🧠 Invisible Pedagogy</strong>Integration of <strong>Bloom's Taxonomy</strong>. Automatic adjustment of complexity and vocabulary.</div><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border-left: 4px solid #2196F3;'><strong style='display:block; margin-bottom:4px;'>🛡️ Pedagogical Reframing</strong>Sensitive topics are not blocked, they are recontextualized educationally.</div><div style='background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border-left: 4px solid #4CAF50;'><strong style='display:block; margin-bottom:4px;'>📈 Dual Scoring</strong>Record of first attempt score vs last for total control by the teacher.</div></div>"
        },
        objectives: {
            es: ["Personalización masiva del aprendizaje", "Generación de contenido en tiempo real", "Feedback inmediato para el alumnado", "Gamificación sin barreras de entrada (Modo Invitado)", "Analíticas de desempeño"],
            gl: ["Personalización masiva da aprendizaxe", "Xeración de contido en tempo real", "Feedback inmediato para o alumnado", "Gamificación sen barreiras de entrada (Modo Invitado)", "Analíticas de desempeño"],
            en: ["Massive learning personalization", "Real-time content generation", "Immediate feedback for students", "Gamification with no entry barriers (Guest Mode)", "Performance analytics"]
        },
        instructions: {
            es: "1. Introduce un tema y la edad. <br>2. La IA genera un borrador que puedes <strong>editar y pulir al 100%</strong>. <br>3. Comparte el enlace y analiza la evolución (nota inicial vs final) de tus alumnos.",
            gl: "1. Introduce un tema e a idade. <br>2. A IA xera un borrador que podes <strong>editar e pulir ao 100%</strong>. <br>3. Comparte a ligazón e analiza a evolución (nota inicial vs final) dos teus alumnos.",
            en: "1. Enter a topic and age. <br>2. AI generates a draft you can <strong>edit and polish 100%</strong>. <br>3. Share the link and analyze your students' evolution (initial vs final score)."
        },
        link: "https://aventuria.vercel.app/"
    },
    "aventuria-example": {
        title: {
            es: "AventurIA - Pensamiento Computacional (4.º EP)",
            gl: "AventurIA - Pensamento Computacional (4.º EP)",
            en: "AventurIA - Computational Thinking (4th Grade)"
        },
        tag: "IA",
        iframeArr: [],
        innerImage: "assets/images/aventuria_ct_game.png",
        desc: {
            es: "Recurso educativo hecho con la plataforma <strong>AventurIA (de creación propia)</strong> para trabajar el Pensamiento Computacional en 4.º EP. Generé la estructura base con mi herramienta y <strong>revisé cada detalle al 100%</strong>, asegurando un contenido pedagógico de máxima calidad y totalmente adaptado a mis alumnos.",
            gl: "Recurso educativo feito coa plataforma <strong>AventurIA (de creación propia)</strong> para traballar o Pensamento Computacional en 4.º EP. Xerei a estrutura base coa miña ferramenta e <strong>revisei cada detalle ao 100%</strong>, asegurando un contido pedagóxico de máxima calidade e totalmente adaptado aos meus alumnos.",
            en: "Educational resource made with the <strong>AventurIA platform (my own creation)</strong> to work on Computational Thinking in 4th Grade. I generated the base structure with my tool and <strong>reviewed every detail 100%</strong>, ensuring maximum pedagogical quality content fully adapted to my students."
        },
        objectives: {
            es: ["Identificar patrones lógicos", "Comprender secuencias de algoritmos", "Resolución de problemas computacionales", "Aprendizaje autónomo gamificado"],
            gl: ["Identificar patróns lóxicos", "Comprender secuencias de algoritmos", "Resolución de problemas computacionais", "Aprendizaxe autónoma gamificada"],
            en: ["Identify logical patterns", "Understand algorithm sequences", "Computational problem solving", "Gamified autonomous learning"]
        },
        instructions: {
            es: "Haz clic en 'Jugar' para experimentar una aventura real tal como la verían tus alumnos.",
            gl: "Fai clic en 'Xogar' para experimentar unha aventura real tal como a verían os teus alumnos.",
            en: "Click 'Play' to experience a real adventure just as your students would see it."
        },
        link: "https://aventuria.vercel.app/?id=7f27b66a-900d-439b-bc8c-a2e3a1f21fb1"
    },
    "pilla-al-pez": {
        title: {
            es: "Pilla al pez – Scratch (1.º&nbsp;ciclo&nbsp;de&nbsp;EP)",
            gl: "Pilla o peixe – Scratch (1.º&nbsp;ciclo&nbsp;de&nbsp;EP)",
            en: "Catch the Fish – Scratch (1st&nbsp;cycle&nbsp;PE)"
        },
        tag: "Scratch",
        iframeArr: ["https://scratch.mit.edu/projects/1233768152/embed"],
        desc: {
            es: "Proyecto de introducción a la programación por bloques mediante la plataforma Scratch, orientado al desarrollo del pensamiento computacional en edades tempranas. El alumnado crea desde cero un videojuego interactivo en el que un tiburón debe atrapar a un pez en movimiento, programando el control de personajes, puntuación y colisiones.",
            gl: "Proxecto de introdución á programación por bloques mediante a plataforma Scratch, orientado ao desenvolvemento do pensamento computacional en idades temperás. O alumnado crea desde cero un videoxogo interactivo no que unha quenlla debe atrapar un peixe en movemento, programando o control de personaxes, puntuación e colisións.",
            en: "Introductory block programming project using Scratch, aimed at developing computational thinking at an early age. Students create an interactive video game from scratch where a shark must catch a moving fish, programming character control, scoring, and collisions."
        },
        objectives: {
            es: ["Coordinación y lógica", "Creatividad y resolución de problemas", "Fomento de la autonomía", "Experimentación con código visual", "Trabajo cooperativo", "Enfoque STEAM"],
            gl: ["Coordinación e lóxica", "Creatividade e resolución de problemas", "Fomento da autonomía", "Experimentación con código visual", "Traballo cooperativo", "Enfoque STEAM"],
            en: ["Coordination and logic", "Creativity and problem solving", "Promoting autonomy", "Visual code experimentation", "Cooperative work", "STEAM approach"]
        },
        instructions: {
            es: "Controla al tiburón con las flechas del teclado para atrapar al pez y sumar puntos.",
            gl: "Controla a quenlla coas frechas do teclado para atrapar o peixe e sumar puntos.",
            en: "Control the shark with the arrow keys to catch the fish and score points."
        },
        link: "https://scratch.mit.edu/projects/1233768152"
    },
    "makecode": {
        title: {
            es: "Laberinto - Arcade Makecode (2.º&nbsp;ciclo&nbsp;de&nbsp;EP)",
            gl: "Labirinto - Arcade Makecode (2.º&nbsp;ciclo&nbsp;de&nbsp;EP)",
            en: "Maze - Arcade Makecode (2nd&nbsp;cycle&nbsp;PE)"
        },
        tag: "MakeCode Arcade",
        iframeArr: ["https://arcade.makecode.com/---run?id=S41120-74970-90190-57842"],
        desc: {
            es: "Proyecto de programación educativa con MakeCode Arcade. El alumnado diseña y programa desde cero un videojuego tipo laberinto. Cada grupo crea su propio recorrido, define las colisiones, establece el movimiento del personaje y programa la detección del cofre del tesoro como meta final.",
            gl: "Proxecto de programación educativa con MakeCode Arcade. O alumnado deseña e programa desde cero un videoxogo tipo labirinto. Cada grupo crea o seu propio percorrido, define as colisións, establece o movemento do personaxe e programa a detección do cofre do tesouro como meta final.",
            en: "Educational programming project with MakeCode Arcade. Students design and program a maze-type video game from scratch. Each group creates its own path, defines collisions, sets character movement, and programs treasure chest detection as the final goal."
        },
        objectives: {
            es: ["Pensamiento computacional", "Planificación espacial", "Resolución de problemas", "Lógica de programación por bloques", "Creatividad lúdica y colaborativa", "Enfoque STEAM"],
            gl: ["Pensamento computacional", "Planificación espacial", "Resolución de problemas", "Lóxica de programación por bloques", "Creatividade lúdica e colaborativa", "Enfoque STEAM"],
            en: ["Computational thinking", "Spatial planning", "Problem solving", "Block programming logic", "Playful and collaborative creativity", "STEAM approach"]
        },
        instructions: {
            es: "Usa las flechas del teclado para moverte por el laberinto y encontrar el cofre.",
            gl: "Usa as frechas do teclado para moverte polo labirinto e atopar o cofre.",
            en: "Use the arrow keys to move through the maze and find the chest."
        },
        link: "https://arcade.makecode.com/S41120-74970-90190-57842"
    },
    "uxia": {
        title: {
            es: "Fichas UX-IA (Uxía) - Pensamiento Computacional (1.º&nbsp;ciclo&nbsp;de&nbsp;EP)",
            gl: "Fichas UX-IA (Uxía) - Pensamento Computacional (1.º&nbsp;ciclo&nbsp;de&nbsp;EP)",
            en: "UX-IA Worksheets (Uxía) - Computational Thinking (1st&nbsp;cycle&nbsp;PE)"
        },
        tag: "Innovación",
        iframeArr: [],
        desc: {
            es: "Recurso educativo original formado por fichas progresivas diseñadas para trabajar pensamiento computacional y lógica de forma sencilla y visual. Cada ficha propone un recorrido con flechas que el alumnado debe seguir para llegar a la meta. En niveles superiores, se introducen casillas vacías. Ideal para iniciarse en la lógica antes de Scratch.",
            gl: "Recurso educativo orixinal formado por fichas progresivas deseñadas para traballar pensamento computacional e lóxica de forma sinxela e visual. Cada ficha propón un percorrido con frechas que o alumnado debe seguir para chegar á meta. En niveis superiores, introdúcense casas baleiras. Ideal para iniciarse na lóxica antes de Scratch.",
            en: "Original educational resource consisting of progressive worksheets designed to work on computational thinking and logic in a simple and visual way. Each worksheet proposes a path with arrows that students must follow to reach the goal. Higher levels introduce empty boxes. Ideal for starting logic before Scratch."
        },
        objectives: {
            es: ["Atención y orientación espacial", "Resolución de problemas", "Planificación y autonomía", "Interpretación de secuencias y direcciones", "Enfoque STEAM"],
            gl: ["Atención e orientación espacial", "Resolución de problemas", "Planificación e autonomía", "Interpretación de secuencias e direccións", "Enfoque STEAM"],
            en: ["Attention and spatial orientation", "Problem solving", "Planning and autonomy", "Interpretation of sequences and directions", "STEAM approach"]
        },
        instructions: {
            es: "Sigue las flechas y completa el recorrido para llegar a la meta.",
            gl: "Segue as frechas e completa o percorrido para chegar á meta.",
            en: "Follow the arrows and complete the path to reach the goal."
        },
        link: "https://drive.google.com/file/d/17lW6UsIxhoV4hEMmJIJuxkmCke_47_L8/view?usp=sharing"
    },
    "lego-noel": {
        title: {
            es: "Papá Noel y su reno motorizado – LEGO® SPIKE (3.º&nbsp;ciclo&nbsp;de&nbsp;EP)",
            gl: "Papá Noel e o seu reno motorizado – LEGO® SPIKE (3.º&nbsp;ciclo&nbsp;de&nbsp;EP)",
            en: "Santa and his motorized reindeer – LEGO® SPIKE (3rd&nbsp;cycle&nbsp;PE)"
        },
        tag: "Robótica",
        iframeArr: [],
        desc: {
            es: "Proyecto de robótica educativa y programación secuencial donde se construye y programa un modelo motorizado de Papá Noel con su reno, utilizando LEGO® SPIKE. El grupo aprende a usar motores, engranajes y sensores básicos para generar movimiento, experimentando con transmisión, velocidad y dirección.",
            gl: "Proxecto de robótica educativa e programación secuencial onde se constrúe e programa un modelo motorizado de Papá Noel co seu reno, utilizando LEGO® SPIKE. O grupo aprende a usar motores, engrenaxes e sensores básicos para xerar movemento, experimentando con transmisión, velocidade e dirección.",
            en: "Educational robotics and sequential programming project where a motorized model of Santa and his reindeer is built and programmed using LEGO® SPIKE. The group learns to use motors, gears, and basic sensors to generate movement, experimenting with transmission, speed, and direction."
        },
        objectives: {
            es: ["Uso de motores, engranajes y sensores", "Conceptos de transmisión, velocidad y dirección", "Creatividad y cooperación", "Trabajo por proyectos (narrativa navideña)", "Enfoque STEAM"],
            gl: ["Uso de motores, engrenaxes e sensores", "Conceptos de transmisión, velocidade e dirección", "Creatividade e cooperación", "Traballo por proxectos (narrativa do Nadal)", "Enfoque STEAM"],
            en: ["Use of motors, gears and sensors", "Concepts of transmission, speed and direction", "Creativity and cooperation", "Project-based work (Christmas narrative)", "STEAM approach"]
        },
        instructions: {
            es: "Construye el modelo y prográmalo para que se mueva y transporte los regalos.",
            gl: "Constrúe o modelo e prográmao para que se mova e transporte os agasallos.",
            en: "Build the model and program it to move and transport the gifts."
        },
        link: "#"
    },
    "super-maria": {
        title: {
            es: "Super María – Arcade MakeCode (3.º&nbsp;ciclo de EP)",
            gl: "Super María – Arcade MakeCode (3.º&nbsp;ciclo de EP)",
            en: "Super María – Arcade MakeCode (3rd cycle PE)"
        },
        tag: "MakeCode Arcade",
        iframeArr: ["https://arcade.makecode.com/---run?id=S11062-56291-87574-31057"],
        desc: {
            es: "Proyecto con MakeCode Arcade. Se crea un videojuego de plataformas con desplazamiento lateral. El escenario incluye obstáculos, zonas de lava y un enemigo patrullando, obligando a planificar el recorrido y ajustar los saltos.",
            gl: "Proxecto con MakeCode Arcade. Créase un videoxogo de plataformas con desprazamento lateral. O escenario inclúe obstáculos, zonas de lava e un inimigo patrullando, obrigando a planificar o percorrido e axustar os saltos.",
            en: "Project with MakeCode Arcade. A side-scrolling platform video game is created. The scenario includes obstacles, lava zones, and a patrolling enemy, forcing path planning and jump adjustment."
        },
        objectives: {
            es: ["Pensamiento computacional", "Planificación lógica", "Resolución de problemas", "Física básica y control de movimiento", "Perseverancia y autonomía", "Enfoque STEAM"],
            gl: ["Pensamento computacional", "Planificación lóxica", "Resolución de problemas", "Física básica e control de movemento", "Perseveranza e autonomía", "Enfoque STEAM"],
            en: ["Computational thinking", "Logical planning", "Problem solving", "Basic physics and motion control", "Perseverance and autonomy", "STEAM approach"]
        },
        instructions: {
            es: "Controla con botones de dirección. Barra espaciadora para saltar. Evita la lava y los enemigos.",
            gl: "Controla con botóns de dirección. Barra espaciadora para saltar. Evita a lava e os inimigos.",
            en: "Control with direction buttons. Spacebar to jump. Avoid lava and enemies."
        },
        link: "https://arcade.makecode.com/S11062-56291-87574-31057"
    },
    "flappy-bird": {
        title: {
            es: "Flappy Bird – Scratch (3.º&nbsp;ciclo&nbsp;de&nbsp;EP)",
            gl: "Flappy Bird – Scratch (3.º&nbsp;ciclo&nbsp;de&nbsp;EP)",
            en: "Flappy Bird – Scratch (3rd&nbsp;cycle&nbsp;PE)"
        },
        tag: "Scratch",
        iframeArr: ["https://scratch.mit.edu/projects/1235072996/embed"],
        desc: {
            es: "Proyecto avanzado en Scratch recreando el clásico Flappy Bird. El reto es mantener al personaje en el aire evitando obstáculos. Se trabajan conceptos de movimiento continuo, gravedad, eventos y detección de colisiones.",
            gl: "Proxecto avanzado en Scratch recreando o clásico Flappy Bird. O reto é manter o personaxe no aire evitando obstáculos. Trabállanse conceptos de movemento continuo, gravidade, eventos e detección de colisións.",
            en: "Advanced Scratch project recreating the classic Flappy Bird. The challenge is to keep the character in the air avoiding obstacles. Concepts of continuous movement, gravity, events, and collision detection are worked on."
        },
        objectives: {
            es: ["Movimiento continuo y gravedad", "Eventos y colisiones", "Pensamiento lógico y precisión", "Autorregulación emocional ante el error", "Mejora progresiva del código", "Enfoque STEAM"],
            gl: ["Movemento continuo e gravidade", "Eventos e colisións", "Pensamento lóxico e precisión", "Autorregulación emocional ante o erro", "Mellora progresiva do código", "Enfoque STEAM"],
            en: ["Continuous movement and gravity", "Events and collisions", "Logical thinking and precision", "Emotional self-regulation in the face of error", "Progressive code improvement", "STEAM approach"]
        },
        instructions: {
            es: "Pulsa la barra espaciadora para aletear y mantenerte en el aire. Evita los tubos.",
            gl: "Pulsa a barra espaciadora para aletear e manterte no aire. Evita os tubos.",
            en: "Press the spacebar to flap and stay in the air. Avoid the pipes."
        },
        link: "https://scratch.mit.edu/projects/1235072996"
    },
    "meteoritos": {
        title: {
            es: "Esquiva los meteoritos – Scratch (3.º&nbsp;ciclo&nbsp;de&nbsp;EP)",
            gl: "Esquiva os meteoritos – Scratch (3.º&nbsp;ciclo&nbsp;de&nbsp;EP)",
            en: "Dodge the Meteorites – Scratch (3rd&nbsp;cycle&nbsp;PE)"
        },
        tag: "Scratch",
        iframeArr: ["https://scratch.mit.edu/projects/1235073502/embed"],
        desc: {
            es: "Proyecto en Scratch donde se diseña un videojuego tipo arcade controlado con el ratón. La nave debe esquivar meteoritos que rebotan y aumentan de dificultad. La puntuación sube con el tiempo de supervivencia.",
            gl: "Proxecto en Scratch onde se deseña un videoxogo tipo arcade controlado co rato. A nave debe esquivar meteoritos que rebotan e aumentan de dificultade. A puntuación sobe co tempo de supervivencia.",
            en: "Scratch project designing an arcade-type video game controlled with the mouse. The spaceship must dodge meteorites that bounce and increase in difficulty. Score goes up with survival time."
        },
        objectives: {
            es: ["Pensamiento computacional y atención", "Lógica de movimiento, dirección y rebote", "Toma de decisiones en entornos dinámicos", "Enfoque STEAM"],
            gl: ["Pensamento computacional e atención", "Lóxica de movemento, dirección e rebote", "Toma de decisións en contornas dinámicas", "Enfoque STEAM"],
            en: ["Computational thinking and attention", "Logic of movement, direction and bounce", "Decision making in dynamic environments", "STEAM approach"]
        },
        instructions: {
            es: "Mueve el ratón para controlar la nave. Esquiva los meteoritos el mayor tiempo posible.",
            gl: "Mover o rato para controlar a nave. Esquiva os meteoritos o maior tempo posible.",
            en: "Move the mouse to control the spaceship. Dodge the meteorites as long as possible."
        },
        link: "https://scratch.mit.edu/projects/1235073502"
    }
};

// Roles for Typewriter
const rolesData = {
    es: ["Educación Primaria", "Robótica Educativa", "Programación Educativa", "Pensamiento Computacional", "Innovación Pedagógica", "Competencia Digital", "Educación Física"],
    gl: ["Educación Primaria", "Robótica Educativa", "Programación Educativa", "Pensamento Computacional", "Innovación Pedagóxica", "Competencia Dixital", "Educación Física"],
    en: ["Primary Education", "Educational Robotics", "Educational Programming", "Computational Thinking", "Pedagogical Innovation", "Digital Competence", "Physical Education"]
};

// Typewriter state
let typeTimeout; // To clear timeout on changelang

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

    // 2. Typewriter Initialization (Default ES)
    startTypewriter();

    // 3. Modal Initialization
    modal = document.getElementById('project-modal');
    const closeModalBtn = document.querySelector('.close-modal');

    if (closeModalBtn) {
        closeModalBtn.onclick = closeModal;
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            closeModal();
        }
    }
});

// ============================================
// LANGUAGE LOGIC
// ============================================

window.changeLanguage = function (lang) {
    currentLang = lang;
    document.documentElement.lang = lang; // Accessibility & SEO update

    // 1. Update Buttons State
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.style.opacity = '1';
            btn.classList.add('active');
        } else {
            btn.style.opacity = '0.5';
            btn.classList.remove('active');
        }
    });

    // 2. Update Static Text (data-i18n)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (window.translations[lang] && window.translations[lang][key]) {
            el.innerHTML = window.translations[lang][key];
        }
    });

    // 3. Update Dynamic Project Cards Titles/Descriptions
    document.querySelectorAll('[data-project-title]').forEach(el => {
        const pId = el.getAttribute('data-project-title');
        if (projectsData[pId]) {
            el.innerText = projectsData[pId].title[lang];
        }
    });

    document.querySelectorAll('[data-project-desc]').forEach(el => {
        const pId = el.getAttribute('data-project-desc');
        if (projectsData[pId]) {
            // Prefer shortDesc for cards if available, otherwise use desc
            const descObj = projectsData[pId].shortDesc ? projectsData[pId].shortDesc : projectsData[pId].desc;
            el.innerText = descObj[lang];
        }
    });

    // 4. Restart Typewriter with new language roles
    startTypewriter();
};


// Typewriter Function (Refactored for restartability)
function startTypewriter() {
    const textElement = document.getElementById('typewriter');
    if (!textElement) return;

    // Clear previous timeout if exists
    if (typeTimeout) clearTimeout(typeTimeout);

    const roles = rolesData[currentLang];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            textElement.innerHTML = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            textElement.innerHTML = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }

        typeTimeout = setTimeout(type, typeSpeed);
    }
    type();
}


// Global Open Modal Function (Refactored i18n & Debug)
window.openModal = function (projectId) {
    try {
        console.log("Opening modal for:", projectId);
        if (!modal) modal = document.getElementById('project-modal');
        if (!modal) {
            console.error("Modal element not found!");
            alert("Error: Modal no encontrado en el DOM.");
            return;
        }

        // Safety check for translations
        if (!window.translations) {
            console.error("Window.translations is undefined!");
            alert("Error: El archivo de traducciones no se ha cargado. Verifica que 'js/translations.js' está subido.");
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

        // Reset
        iframe.style.display = 'none';
        modalImg.style.display = 'none';
        iframe.src = "";
        modalImg.src = "";

        if (project.iframeArr && project.iframeArr.length > 0) {
            iframe.src = project.iframeArr[0];
            iframe.style.display = 'block';
            container.style.display = 'block';
        } else if (project.innerImage) {
            modalImg.src = project.innerImage;
            modalImg.style.display = 'block';
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }

        // Text Content
        document.getElementById('modal-desc').innerHTML = project.desc[currentLang] || project.desc['es'];
        document.getElementById('modal-instructions').innerHTML = project.instructions[currentLang] || project.instructions['es'];

        // Button Logic
        const linkBtn = document.getElementById('modal-link');

        if (!project.link || project.link === "#") {
            linkBtn.style.display = 'none';
        } else {
            linkBtn.style.display = 'inline-block';
            linkBtn.href = project.link;
            linkBtn.target = "_blank";

            // Safe translation access
            const t = window.translations[currentLang];
            let btnText = (t && t["btn-view-projects"]) ? t["btn-view-projects"] : "Ver Proyecto";
            let btnIcon = '<i class="fas fa-external-link-alt"></i>';

            const prefix = currentLang === 'en' ? "View on " : (currentLang === 'gl' ? "Ver en " : "Ver en ");

            // Custom logic for different tags
            if (projectId === 'aventuria-app') {
                const tryAppText = (t && t["btn-try-app"]) ? t["btn-try-app"] : "Probar App Web";
                linkBtn.innerHTML = `${tryAppText} <i class="fas fa-rocket"></i>`;
            } else if (project.tag === 'IA') {
                // Use "Jugar"/"Xogar"/"Play" for IA projects without "Ver en" prefix if simpler, or keep consistency.
                // User wants "Jugar".
                const playText = (t && t["btn-play"]) ? t["btn-play"] : "Jugar";
                linkBtn.innerHTML = `${playText} <i class="fas fa-rocket"></i>`;
            } else if (projectId === 'uxia') {
                linkBtn.innerHTML = `${prefix} PDF <i class="fas fa-file-pdf"></i>`;
            } else {
                linkBtn.innerHTML = `${prefix} ${btnText} ${btnIcon}`;
            }
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
        modal.style.display = "flex"; // Changed from block to flex for centering if needed, matches CSS
        // Force reflow
        void modal.offsetWidth;
        modal.classList.add("show");
        console.log("Modal opened successfully.");

    } catch (error) {
        console.error("Error in openModal:", error);
        alert("Error al abrir el proyecto: " + error.message);
    }
};

window.closeModal = function () {
    console.log("Attempting to close modal...");
    const m = document.getElementById('project-modal');
    if (!m) {
        console.error("Modal not found in DOM during close attempt.");
        return;
    }

    m.classList.remove("show");
    setTimeout(() => {
        m.style.display = "none";
        const iframe = document.getElementById('modal-iframe');
        if (iframe) iframe.src = "";
    }, 300);
};

// Phone Reveal Function
window.revealPhone = function (container) {
    const mask = container.querySelector('.phone-mask');
    const number = container.querySelector('.phone-number');

    if (mask && number) {
        mask.style.display = 'none';
        number.classList.remove('hidden');
    }
};

// Back to Top and Filters Initialization (Safe Guarded)
document.addEventListener('DOMContentLoaded', () => {
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
});
