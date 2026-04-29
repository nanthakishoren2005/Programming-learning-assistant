import json

def load(path, varname):
    with open(path, 'r', encoding='utf-8') as f:
        src = f.read()
    clean = []
    for ln in src.split('\n'):
        s = ln.strip()
        if s.startswith('from pymongo') or s.startswith('import pymongo'):
            clean.append('')
        elif s.startswith('client =') or s.startswith('db =') or s.startswith('collection'):
            clean.append('')
        elif 'open("lessons.json"' in s or 'json.dump(' in s:
            clean.append('')
        elif s.startswith('print(') and 'content' not in s:
            clean.append('')
        else:
            clean.append(ln)
    code = '\n'.join(clean)
    code = code.replace('if all_python_lessons:\n\n','')
    code = code.replace('if all_css_lessons:\n\n','')
    code = code.replace('if all_html_lessons:\n\n','')
    ns = {'json':json}
    exec(code, ns)
    return ns[varname]

py = load('insert_all_python_lessons.py','python_lessons')
ht = load('insert_all_html_lessons.py','html_lessons')
cs = load('insert_all_css_lessons.py','css_lessons')

def is_natural_language(line):
    """Check if a line is natural language (not code)."""
    s = line.strip()
    if not s:
        return False
    # Must be > 20 chars and start with uppercase
    if len(s) < 20 or not s[0].isupper():
        return False
    # Must NOT contain code-like patterns
    code_markers = ['()', '{}', '();', '();', '>>>', '...']
    if any(m in s for m in code_markers):
        return False
    # Count words - natural language has many words
    words = s.split()
    if len(words) < 4:
        return False
    # Check it reads like English (most words are lowercase regular words)
    return True

def extract_code_and_desc(content):
    """Split content: code at top/middle, description sentence(s) at end."""
    if not content:
        return '', ''
    lines = content.split('\n')
    
    # Find trailing natural language block from the end
    desc_start = len(lines)
    i = len(lines) - 1
    while i >= 0:
        s = lines[i].strip()
        if s == '':
            i -= 1
            continue
        if is_natural_language(s):
            desc_start = i
            i -= 1
        else:
            break
    
    code = '\n'.join(lines[:desc_start]).strip()
    desc = ' '.join(l.strip() for l in lines[desc_start:] if l.strip())
    return code, desc

def convert(lessons, lang, level):
    result = []
    pfx = {'python':'py','html':'html','css':'css'}[lang]
    lp = level[0]
    for i, L in enumerate(lessons):
        topics = L.get('topics',[])
        t0 = topics[0].get('content','') if topics else ''
        t1 = topics[1].get('content','') if len(topics)>1 else ''
        
        main_text = t0
        code, extra_desc = extract_code_and_desc(t1)
        
        callout = extra_desc if extra_desc else f"{topics[0].get('title','')} — {L.get('module','')} module."
        
        if not code:
            code = t1

        if lang=='python':
            tryIt = f"# Try it yourself!\n{code}" if code else "# Write your code here\nprint('Hello!')"
        elif lang=='html':
            tryIt = code if code else "<h1>Try HTML here!</h1>"
        else:
            tryIt = code if code else "/* Try CSS here */\nh1 { color: blue; }"
        
        result.append({
            'id': f'{pfx}-{lp}-{i+1}',
            'title': f"Lesson {i+1} — {L['title']}",
            'text': main_text,
            'code': code,
            'language': lang,
            'callout': callout,
            'tryIt': tryIt,
            'expectedOutput': None
        })
    return result

out = {}
for lang, data in [('python',py),('html',ht),('css',cs)]:
    out[lang] = {}
    for level in ['beginner','intermediate','advanced']:
        out[lang][level] = convert(data.get(level,[]), lang, level)
        c = sum(1 for l in out[lang][level] if l['code'])
        print(f"  {lang}/{level}: {len(out[lang][level])} lessons ({c} with code)")

js = "// Lesson Data — auto-generated\nexport const lessonData = " + json.dumps(out, indent=2, ensure_ascii=False) + ";\n"
with open('js/lesson-data.js','w',encoding='utf-8') as f:
    f.write(js)
print("Done!")
