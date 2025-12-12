// Global variables
let modal;

document.addEventListener('DOMContentLoaded', () => {
    // 1. Animation Logic
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // 2. Typewriter Effect
    const textElement = document.getElementById('typewriter');
    if (textElement) {
        const roles = [
            "Educación Primaria",
            "Robótica Educativa",
            "Programación Educativa",
            "Educación Física",
            "Pensamiento Computacional",
            "Innovación Pedagógica",
            "Competencia Digital"
        ];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                textElement.innerHTML = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50; // Faster deleting
            } else {
                textElement.innerHTML = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100; // Normal typing
            }

            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true;
                typeSpeed = 2000; // Pause at end
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 500; // Pause before next word
            }

            setTimeout(type, typeSpeed);
        }
        type();
    }

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

// Projects Data
const projectsData = {
    "pilla-al-pez": {
        title: "Pilla al pez – Scratch (1.º ciclo de EP)",
        tag: "Scratch",
        iframeArr: ["https://scratch.mit.edu/projects/1233768152/embed"],
        desc: "Proyecto de introducción a la programación por bloques mediante la plataforma Scratch, orientado al desarrollo del pensamiento computacional en edades tempranas. El alumnado crea desde cero un videojuego interactivo en el que un tiburón debe atrapar a un pez en movimiento, programando el control de personajes, puntuación y colisiones.",
        objectives: [
            "Coordinación y lógica",
            "Creatividad y resolución de problemas",
            "Fomento de la autonomía",
            "Experimentación con código visual",
            "Trabajo cooperativo",
            "Enfoque STEAM"
        ],
        instructions: "Controla al tiburón con las flechas del teclado para atrapar al pez y sumar puntos.",
        link: "https://scratch.mit.edu/projects/1233768152"
    },
    "makecode": {
        title: "Laberinto - Arcade Makecode (2º ciclo de EP)",
        tag: "MakeCode Arcade",
        iframeArr: ["https://arcade.makecode.com/---run?id=S41120-74970-90190-57842"],
        desc: "Proyecto de programación educativa con MakeCode Arcade. El alumnado diseña y programa desde cero un videojuego tipo laberinto. Cada grupo crea su propio recorrido, define las colisiones, establece el movimiento del personaje y programa la detección del cofre del tesoro como meta final.",
        objectives: [
            "Pensamiento computacional",
            "Planificación espacial",
            "Resolución de problemas",
            "Lógica de programación por bloques",
            "Creatividad lúdica y colaborativa",
            "Enfoque STEAM"
        ],
        instructions: "Usa las flechas del teclado para moverte por el laberinto y encontrar el cofre.",
        link: "https://arcade.makecode.com/S41120-74970-90190-57842"
    },
    "uxia": {
        title: "Fichas UX-IA (Uxía) - Pensamiento Computacional (1º ciclo de EP)",
        tag: "Innovación",
        iframeArr: [],
        desc: "Recurso educativo original formado por fichas progresivas diseñadas para trabajar pensamiento computacional y lógica de forma sencilla y visual. Cada ficha propone un recorrido con flechas que el alumnado debe seguir para llegar a la meta. En niveles superiores, se introducen casillas vacías. Ideal para iniciarse en la lógica antes de Scratch.",
        objectives: [
            "Atención y orientación espacial",
            "Resolución de problemas",
            "Planificación y autonomía",
            "Interpretación de secuencias y direcciones",
            "Enfoque STEAM"
        ],
        instructions: "Sigue las flechas y completa el recorrido para llegar a la meta.",
        link: "https://drive.google.com/file/d/1uPUpHjmnQdD-AqS6FyG350FADFJA-4P2/view?usp=sharing"
    },
    "lego-noel": {
        title: "Papá Noel y su reno motorizado – LEGO® SPIKE (3.º ciclo de EP)",
        tag: "Robótica",
        iframeArr: [],
        desc: "Proyecto de robótica educativa y programación secuencial donde se construye y programa un modelo motorizado de Papá Noel con su reno, utilizando LEGO® SPIKE. El grupo aprende a usar motores, engranajes y sensores básicos para generar movimiento, experimentando con transmisión, velocidad y dirección.",
        objectives: [
            "Uso de motores, engranajes y sensores",
            "Conceptos de transmisión, velocidad y dirección",
            "Creatividad y cooperación",
            "Trabajo por proyectos (narrativa navideña)",
            "Enfoque STEAM"
        ],
        instructions: "Construye el modelo y prográmalo para que se mueva y transporte los regalos.",
        link: "#"
    },
    "super-maria": {
        title: "Super María – Arcade MakeCode (3.º ciclo de EP)",
        tag: "MakeCode Arcade",
        iframeArr: ["https://arcade.makecode.com/---run?id=S11062-56291-87574-31057"],
        desc: "Proyecto con MakeCode Arcade. Se crea un videojuego de plataformas con desplazamiento lateral. El escenario incluye obstáculos, zonas de lava y un enemigo patrullando, obligando a planificar el recorrido y ajustar los saltos.",
        objectives: [
            "Pensamiento computacional",
            "Planificación lógica",
            "Resolución de problemas",
            "Física básica y control de movimiento",
            "Perseverancia y autonomía",
            "Enfoque STEAM"
        ],
        instructions: "Controla con botones de dirección. Barra espaciadora para saltar. Evita la lava y los enemigos.",
        link: "https://arcade.makecode.com/S11062-56291-87574-31057"
    },
    "flappy-bird": {
        title: "Flappy Bird – Scratch (3.º ciclo de EP)",
        tag: "Scratch",
        iframeArr: ["https://scratch.mit.edu/projects/1235072996/embed"],
        desc: "Proyecto avanzado en Scratch recreando el clásico Flappy Bird. El reto es mantener al personaje en el aire evitando obstáculos. Se trabajan conceptos de movimiento continuo, gravedad, eventos y detección de colisiones.",
        objectives: [
            "Movimiento continuo y gravedad",
            "Eventos y colisiones",
            "Pensamiento lógico y precisión",
            "Autorregulación emocional ante el error",
            "Mejora progresiva del código",
            "Enfoque STEAM"
        ],
        instructions: "Pulsa la barra espaciadora para aletear y mantenerte en el aire. Evita los tubos.",
        link: "https://scratch.mit.edu/projects/1235072996"
    },
    "meteoritos": {
        title: "Esquiva los meterotitos – Scratch (3.º ciclo de EP)",
        tag: "Scratch",
        iframeArr: ["https://scratch.mit.edu/projects/1235073502/embed"],
        desc: "Proyecto en Scratch donde se diseña un videojuego tipo arcade controlado con el ratón. La nave debe esquivar meteoritos que rebotan y aumentan de dificultad. La puntuación sube con el tiempo de supervivencia.",
        objectives: [
            "Pensamiento computacional y atención",
            "Lógica de movimiento, dirección y rebote",
            "Toma de decisiones en entornos dinámicos",
            "Enfoque STEAM"
        ],
        instructions: "Mueve el ratón para controlar la nave. Esquiva los meteoritos el mayor tiempo posible.",
        link: "https://scratch.mit.edu/projects/1235073502"
    }
};

// Global Open Modal Function
window.openModal = function (projectId) {
    // Ensure modal is loaded
    if (!modal) modal = document.getElementById('project-modal');
    if (!modal) return; // Should not happen

    const project = projectsData[projectId];
    if (!project) return;

    document.getElementById('modal-title').innerText = project.title;
    document.getElementById('modal-tag').innerText = project.tag;
    document.getElementById('modal-tag').className = `tag ${project.tag.toLowerCase().split(' ')[0]}`;

    // Iframe handling
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
    document.getElementById('modal-desc').innerText = project.desc;
    document.getElementById('modal-instructions').innerText = project.instructions;

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

        if (projectId === 'uxia') {
            btnText = "Ver PDF Completo";
            btnIcon = '<i class="fas fa-file-pdf"></i>';
        } else if (project.tag.includes('Scratch')) {
            btnText = "Ver en Scratch";
        } else if (project.tag.includes('MakeCode')) {
            btnText = "Ver en MakeCode Arcade";
            btnIcon = '<i class="fas fa-gamepad"></i>';
        }
        linkBtn.innerHTML = `${btnText} ${btnIcon}`;
    }

    // Objectives
    const objectivesList = document.getElementById('modal-objectives');
    objectivesList.innerHTML = '';
    project.objectives.forEach(obj => {
        const li = document.createElement('li');
        li.innerText = obj;
        objectivesList.appendChild(li);
    });

    // Show
    modal.style.display = "block";
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
};

// Global Close Modal Function
window.closeModal = function () {
    if (!modal) return;
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
        const iframe = document.getElementById('modal-iframe');
        if (iframe) iframe.src = "";
    }, 300);
};
