// ============================================
// Screen 11 — Submit Task (Code Editor)
// ============================================
import { getState, setState } from '../state.js';
import { navigateTo } from '../router.js';
import { tasks } from '../task-data.js';
import { runPython } from '../pyodide-runner.js';
import { runHtmlCss } from '../html-css-runner.js';
import { spawnBgAnim } from '../bg-animations.js';

let cmEditor = null;

export function init() {
  spawnBgAnim('submit-task-bg-anim');
  const state = getState();
  const lang = state.selectedLang || 'python';
  const level = state.selectedLevel || 'beginner';
  const taskId = state.currentTask;
  const allTasks = tasks[lang]?.[level] || [];
  const task = allTasks.find(t => t.id === taskId) || allTasks[0];

  if (!task) {
    document.querySelector('#submit-task .submit-wrap').innerHTML =
      '<div class="callout callout-info">No task selected. <a href="#task-assignment">Choose a task</a>.</div>';
    return;
  }

  const wrap = document.querySelector('#submit-task .submit-wrap');
  wrap.innerHTML = `
    <button class="btn-secondary" onclick="location.hash='#task-assignment'" style="margin-bottom:var(--space-lg);">← Back to tasks</button>
    <h2>${task.title}</h2>
    <div class="task-brief">
      <p>${task.description}</p>
      <div class="task-concepts" style="margin-top:var(--space-md);">
        ${task.concepts.map(c => `<span class="concept-tag">${c}</span>`).join('')}
      </div>
    </div>
    <div class="editor-container">
      <textarea id="code-submission">${task.starter || ''}</textarea>
    </div>
    <div class="submit-actions">
      <button class="run-btn" id="task-run">Run</button>
      <button class="btn-primary" id="task-submit">Submit Solution</button>
    </div>
    <div class="output-container">
      <div class="output-header">Output</div>
      <div class="output-console" id="task-output"></div>
    </div>
    ${lang !== 'python' ? '<iframe class="preview-frame" id="task-preview" sandbox="allow-scripts" style="display:none;"></iframe>' : ''}
    <div id="submit-feedback" style="margin-top:var(--space-lg);"></div>
  `;

  // Init CodeMirror
  const textarea = document.getElementById('code-submission');
  const cmMode = lang === 'python' ? 'python' : lang === 'html' ? 'htmlmixed' : 'css';

  if (typeof CodeMirror !== 'undefined') {
    cmEditor = CodeMirror.fromTextArea(textarea, {
      mode: cmMode,
      theme: 'default',
      lineNumbers: true,
      indentWithTabs: false,
      tabSize: lang === 'python' ? 4 : 2,
      autofocus: true,
      matchBrackets: true
    });
    cmEditor.setSize('100%', '320px');
  }

  // Run button
  document.getElementById('task-run')?.addEventListener('click', async () => {
    const code = cmEditor ? cmEditor.getValue() : textarea.value;
    const output = document.getElementById('task-output');
    const runBtn = document.getElementById('task-run');
    runBtn.disabled = true;

    if (lang === 'python') {
      const result = await runPython(code);
      runBtn.disabled = false;
      output.classList.add('visible');
      if (result.error) {
        // Build helpful hint based on error type
        let hint = '';
        if (result.error.includes('NameError')) {
          hint = '👉 Check variable/function name spelling';
        } else if (result.error.includes('SyntaxError')) {
          hint = '👉 Check brackets, quotes, or indentation';
        } else if (result.error.includes('TypeError')) {
          hint = '👉 Check function argument types';
        } else if (result.error.includes('IndentationError')) {
          hint = '👉 Check code indentation';
        } else if (result.error.includes('ZeroDivisionError')) {
          hint = '👉 Cannot divide by zero';
        }
        
        const displayError = hint ? `${result.error}\n${hint}` : result.error;
        output.textContent = displayError;
        output.className = 'output-console visible error';
      } else {
        output.textContent = result.output;
        output.className = 'output-console visible success';
      }
    } else {
      const iframe = document.getElementById('task-preview');
      const result = runHtmlCss(code, iframe, lang);
      runBtn.disabled = false;
      if (result.error) {
        output.textContent = result.error;
        output.className = 'output-console visible error';
      } else {
        output.style.display = 'none';
      }
    }

    anime({
      targets: output.style.display !== 'none' ? output : '#task-preview',
      opacity: [0, 1],
      translateY: [8, 0],
      duration: 300,
      easing: 'easeOutCubic'
    });
  });

  // Submit button
  document.getElementById('task-submit')?.addEventListener('click', () => {
    const code = cmEditor ? cmEditor.getValue() : textarea.value;
    const submissions = [...(state.taskSubmissions || []), {
      taskId: task.id,
      lang,
      code,
      date: new Date().toISOString()
    }];
    setState({ taskSubmissions: submissions });

    const feedback = document.getElementById('submit-feedback');
    feedback.innerHTML = `
      <div class="callout callout-success">
        <strong>✓ Solution submitted!</strong> Great work on "${task.title}". Keep practicing!
      </div>
    `;

    anime({
      targets: feedback,
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 350,
      easing: 'easeOutCubic'
    });
  });

  // Entrance
  anime({
    targets: wrap.children,
    opacity: [0, 1],
    translateY: [15, 0],
    delay: anime.stagger(60),
    duration: 350,
    easing: 'easeOutCubic'
  });
}

export function cleanup() {
  if (cmEditor) {
    cmEditor.toTextArea();
    cmEditor = null;
  }
}
