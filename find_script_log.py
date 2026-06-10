import json
import os

transcript_path = r"C:\Users\Mauro\.gemini\antigravity\brain\d020db17-4389-44d6-9365-ff685c00e466\.system_generated\logs\transcript.jsonl"

last_script = None
last_index = None

if not os.path.exists(transcript_path):
    print("Transcript not found at", transcript_path)
else:
    with open(transcript_path, 'r', encoding='utf-8') as f:
        for line in f:
            try:
                data = json.loads(line)
                if 'tool_calls' in data:
                    for call in data['tool_calls']:
                        if call.get('name') == 'write_to_file':
                            args = call.get('args', {})
                            target = args.get('TargetFile', '')
                            content = args.get('CodeContent', '')
                            if 'script.js' in target:
                                last_script = content
                            elif 'index.html' in target:
                                last_index = content
                        elif call.get('name') == 'replace_file_content' or call.get('name') == 'multi_replace_file_content':
                            pass # Too hard to reconstruct from patches, let's look for write_to_file or output of view_file
            except:
                pass
            
            try:
                data = json.loads(line)
                if 'output' in data:
                    out = data['output']
                    if 'File Path: `file:///f:/Proyectos%20Antigravity/Portfolio%20-%20copia/js/script.js`' in out:
                        # This is a view_file output.
                        # It has line numbers like "1: const ..."
                        pass
            except:
                pass

    if last_script:
        print("Found a write_to_file for script.js. Length:", len(last_script))
    else:
        print("No full write_to_file found for script.js")
