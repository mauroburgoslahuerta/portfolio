import json

log_file = r'C:\Users\Mauro\.gemini\antigravity\brain\d020db17-4389-44d6-9365-ff685c00e466\.system_generated\logs\transcript.jsonl'
with open(log_file, 'r', encoding='utf-8') as f:
    lines = f.readlines()

for line in lines:
    if "alfabetizacion-digital" in line and "desc" in line:
        try:
            data = json.loads(line)
            if data.get('source') == 'MODEL' and data.get('type') == 'PLANNER_RESPONSE':
                tool_calls = data.get('tool_calls', [])
                for tc in tool_calls:
                    if tc.get('name') in ['replace_file_content', 'multi_replace_file_content', 'write_to_file']:
                        args = tc.get('args', {})
                        content = str(args)
                        if "alfabetizacion-digital" in content:
                            idx = content.find('"alfabetizacion-digital"')
                            print(f"--- AT {data.get('created_at')} ---")
                            print(content[idx:idx+800])
        except Exception as e:
            pass
