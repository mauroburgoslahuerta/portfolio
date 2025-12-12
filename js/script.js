// Global variables
let modal;
let currentLang = 'es'; // Default language

// 3. Multi-language Projects Data
const projectsData = {
    "pilla-al-pez": {
        title: {
            es: "Pilla al pez – Scratch (1.º ciclo de EP)",
            gl: "Pilla o peixe – Scratch (1.º ciclo de EP)",
            en: "Catch the Fish – Scratch (1st cycle PE)"
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
            es: "Laberinto - Arcade Makecode (2º ciclo de EP)",
            gl: "Labirinto - Arcade Makecode (2º ciclo de EP)",
            en: "Maze - Arcade Makecode (2nd cycle PE)"
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
            es: "Fichas UX-IA (Uxía) - Pensamiento Computacional (1º ciclo de EP)",
            gl: "Fichas UX-IA (Uxía) - Pensamento Computacional (1º ciclo de EP)",
            en: "UX-IA Worksheets (Uxía) - Computational Thinking (1st cycle PE)"
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
        link: "https://drive.google.com/file/d/1uPUpHjmnQdD-AqS6FyG350FADFJA-4P2/view?usp=sharing"
    },
    "lego-noel": {
        title: {
            es: "Papá Noel y su reno motorizado – LEGO® SPIKE (3.º ciclo de EP)",
            gl: "Papá Noel e o seu reno motorizado – LEGO® SPIKE (3.º ciclo de EP)",
            en: "Santa and his motorized reindeer – LEGO® SPIKE (3rd cycle PE)"
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
            es: "Super María – Arcade MakeCode (3.º ciclo de EP)",
            gl: "Super María – Arcade MakeCode (3.º ciclo de EP)",
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
            es: "Flappy Bird – Scratch (3.º ciclo de EP)",
            gl: "Flappy Bird – Scratch (3.º ciclo de EP)",
            en: "Flappy Bird – Scratch (3rd cycle PE)"
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
            es: "Esquiva los meterotitos – Scratch (3.º ciclo de EP)",
            gl: "Esquiva os meteoritos – Scratch (3.º ciclo de EP)",
            en: "Dodge the Meteorites – Scratch (3rd cycle PE)"
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
    es: ["Educación Primaria", "Robótica Educativa", "Programación Educativa", "Educación Física", "Pensamiento Computacional", "Innovación Pedagógica", "Competencia Digital"],
    gl: ["Educación Primaria", "Robótica Educativa", "Programación Educativa", "Educación Física", "Pensamento Computacional", "Innovación Pedagóxica", "Competencia Dixital"],
    en: ["Primary Education", "Educational Robotics", "Educational Programming", "Physical Education", "Computational Thinking", "Pedagogical Innovation", "Digital Competence"]
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
            el.innerText = projectsData[pId].desc[lang];
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
        document.getElementById('modal-title').innerText = project.title[currentLang] || project.title['es'];
        document.getElementById('modal-tag').innerText = project.tag;
        document.getElementById('modal-tag').className = `tag ${project.tag.toLowerCase().split(' ')[0]}`;

        // Iframe
        const container = document.getElementById('modal-game-container');
        const iframe = document.getElementById('modal-iframe');

        if (project.iframeArr && project.iframeArr.length > 0) {
            iframe.src = project.iframeArr[0];
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
            iframe.src = "";
        }

        // Text Content
        document.getElementById('modal-desc').innerText = project.desc[currentLang] || project.desc['es'];
        document.getElementById('modal-instructions').innerText = project.instructions[currentLang] || project.instructions['es'];

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

            if (projectId === 'uxia') {
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
