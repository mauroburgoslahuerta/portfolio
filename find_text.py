import json

target = "alfabetizacion-digital"
with open(r'C:\Users\Mauro\.gemini\antigravity\brain\d020db17-4389-44d6-9365-ff685c00e466\.system_generated\logs\transcript.jsonl', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for line in reversed(lines):
    if target in line and "data-project-title" in line:
        idx = line.find('data-project-title')
        print(line[idx-20:idx+300])
        break
