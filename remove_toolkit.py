import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# The toolkit section looks like:
# <!-- Toolkit Strip -->
# <div class="toolkit">
#   ...
# </div>
# <section class="about fade-in" id="sobre-mi">

toolkit_pattern = re.compile(r'<!-- Toolkit Strip -->\s*<div class="toolkit">.*?</div>\s*(?=<section class="about fade-in" id="sobre-mi">)', re.DOTALL)

new_html = toolkit_pattern.sub('', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

print("Toolkit removed.")
