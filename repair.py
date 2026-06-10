import json

content = open('js/script.js', 'r', encoding='utf-8').read()

start_marker = '    "alfabetizacion-ciber": {'
end_marker = '    "alfabetizacion-tramites": {'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    new_ciber = """    "alfabetizacion-ciber": {
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
        },
        "instructions": { "es": "Puedes ver una muestra del material didáctico del curso haciendo clic en Ver Proyecto.", "gl": "Podes ver unha mostra do material didáctico do curso facendo clic en Ver Proxecto.", "en": "You can see a sample of the course teaching material by clicking View Project." },
        "link": "assets/docs/ciber_presentacion.pdf"
    },
"""
    new_content = content[:start_idx] + new_ciber + content[end_idx:]
    open('js/script.js', 'w', encoding='utf-8').write(new_content)
    print("Repaired!")
else:
    print("Markers not found.")
