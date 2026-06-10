import json
import re

target = "<h3 data-project-title"
with open(r'C:\Users\Mauro\.gemini\antigravity\brain\d020db17-4389-44d6-9365-ff685c00e466\.system_generated\logs\transcript.jsonl', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for line in reversed(lines):
    if target in line and "alfabetizacion-digital" in line:
        matches = re.findall(r'<h3 data-project-title=.*?</h3>.*?<p data-project-desc=.*?</p>', line, re.DOTALL | re.IGNORECASE)
        if matches:
            print("FOUND:")
            print(matches[0][:500])
            break
