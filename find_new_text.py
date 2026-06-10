import json

file_path = r'C:\Users\Mauro\.gemini\antigravity\brain\d020db17-4389-44d6-9365-ff685c00e466\.system_generated\logs\transcript.jsonl'
with open(file_path, 'r', encoding='utf-8') as f:
    for line in reversed(f.readlines()):
        if '"alfabetizacion-digital"' in line and '"desc"' in line:
            if 'Docencia directa de 5 ediciones' not in line:
                try:
                    data = json.loads(line)
                    if data['type'] == 'PLANNER_RESPONSE' and 'replace_file_content' in line:
                        print("FOUND NEW TEXT:")
                        idx = line.find('alfabetizacion-digital')
                        print(line[idx:idx+1500])
                        break
                except:
                    pass
