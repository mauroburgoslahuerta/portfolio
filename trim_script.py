import os

with open('js/script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Cut at "// ============================================\n// LANGUAGE LOGIC"
idx = content.find('// ============================================\n// LANGUAGE LOGIC')

top_part = content[:idx]

bottom_part = """
function startTypewriter() {
    const textElement = document.getElementById('typewriter');
    if (!textElement) return;

    if (typeof typeTimeout !== 'undefined' && typeTimeout) clearTimeout(typeTimeout);

    const roles = rolesData['es'];
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

window.revealPhone = function (container) {
    const mask = container.querySelector('.phone-mask');
    const number = container.querySelector('.phone-number');

    if (mask && number) {
        mask.style.display = 'none';
        number.classList.remove('hidden');
    }
};
"""

with open('js/script.js', 'w', encoding='utf-8') as f:
    f.write(top_part + bottom_part)
