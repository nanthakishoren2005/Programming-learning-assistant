// ============================================
// Screen 5 — Learning Module
// ============================================
import { navigateTo } from '../router.js';
import { getState, setState } from '../state.js';
import { lessonData } from '../lesson-data.js';
import { highlightElement, wrapCodeLines, animateCodeLines, copyCode } from '../code-highlighter.js';
import { runPython, initPyodide } from '../pyodide-runner.js';
import { runHtmlCss } from '../html-css-runner.js';
import { spawnBgAnim } from '../bg-animations.js';

let currentLessonIndex = 0;

export function init() {
  spawnBgAnim('learning-module-bg-anim');
  const state = getState();
  const lang = state.selectedLang || 'python';
  const level = state.selectedLevel || 'beginner';
  const lessons = lessonData[lang]?.[level] || lessonData[lang]?.beginner || [];

  if (lessons.length === 0) {
    document.querySelector('#learning-module .lesson-body').innerHTML =
      `<div class="callout callout-info"><strong>Coming soon!</strong> Lessons for this level are being prepared.</div>
       <button class="btn-secondary" onclick="location.hash='#level-select'">← Back to levels</button>`;
    return;
  }

  // Pre-load Pyodide in background if Python
  if (lang === 'python') initPyodide();

  currentLessonIndex = 0;
  renderLesson(lessons, lang);
}

function renderLesson(lessons, lang) {
  const lesson = lessons[currentLessonIndex];
  const body = document.querySelector('#learning-module .lesson-body');
  const langLabel = lang.toUpperCase();
  const isHtmlCss = lang === 'html' || lang === 'css';

  body.innerHTML = `
    <h3>${lesson.title}</h3>
    <p class="lesson-text">${lesson.text}</p>

    <div class="code-block-wrap">
      <div class="code-block-header">
        <span class="lang-label">${langLabel}</span>
        <button class="copy-btn">Copy</button>
      </div>
      <pre><code class="language-${lang === 'html' ? 'markup' : lang}">${escapeHtml(lesson.code)}</code></pre>
    </div>

    <div class="callout callout-info">
      <strong>Key insight:</strong> ${lesson.callout}
    </div>

    <div class="try-it-box">
      <h4>💻 Try it yourself</h4>
      <textarea class="code-editor" spellcheck="false">${escapeHtml(lesson.tryIt)}</textarea>
      <div style="display:flex;gap:0.5rem;align-items:center;">
        <button class="run-btn" id="lesson-run-btn">Run</button>
        <span class="run-status" id="run-status" style="font-size:0.8rem;color:var(--text-muted)"></span>
      </div>
      <div class="output-console" id="lesson-output"></div>
      ${isHtmlCss ? '<iframe class="preview-frame" id="lesson-preview" sandbox="allow-scripts" style="display:none;"></iframe>' : ''}
    </div>

    <div class="lesson-nav">
      <button class="btn-secondary" id="lesson-prev" ${currentLessonIndex === 0 ? 'style="visibility:hidden"' : ''}>← Previous</button>
      <span style="font-size:var(--text-sm);color:var(--text-muted)">${currentLessonIndex + 1} / ${lessons.length}</span>
      ${currentLessonIndex < lessons.length - 1
        ? `<button class="btn-primary" id="lesson-next">Next →</button>`
        : `<button class="btn-primary" id="lesson-done">Go to Quiz →</button>`
      }
    </div>
  `;

  // Highlight code
  highlightElement(body);

  // Wrap and animate code lines
  const pre = body.querySelector('pre');
  if (pre) {
    setTimeout(() => {
      wrapCodeLines(pre);
      animateCodeLines(pre);
    }, 50);
  }

  // Copy button
  body.querySelector('.copy-btn')?.addEventListener('click', function() { copyCode(this); });

  // Run button
  const runBtn = document.getElementById('lesson-run-btn');
  const statusEl = document.getElementById('run-status');
  runBtn?.addEventListener('click', async () => {
    const code = body.querySelector('.code-editor').value;
    const outputPanel = document.getElementById('lesson-output');
    runBtn.disabled = true;
    statusEl.textContent = lang === 'python' ? 'Loading Python runtime...' : 'Running...';

    if (lang === 'python') {
      const { output, error } = await runPython(code);
      runBtn.disabled = false;
      statusEl.textContent = '';
      outputPanel.style.display = 'block';
      outputPanel.classList.add('visible');
      if (error) {
        outputPanel.textContent = error;
        outputPanel.className = 'output-console visible error';
      } else {
        outputPanel.textContent = output;
        outputPanel.className = 'output-console visible success';
      }
    } else {
      // HTML/CSS — compile & render in iframe
      const iframe = document.getElementById('lesson-preview');
      const result = runHtmlCss(code, iframe, lang);
      runBtn.disabled = false;
      statusEl.textContent = '';
      if (result.error) {
        outputPanel.style.display = 'block';
        outputPanel.textContent = result.error;
        outputPanel.className = 'output-console visible error';
      } else {
        outputPanel.style.display = 'none';
      }
    }

    anime.set(outputPanel, { opacity: 1, translateY: 0 });
  });

  // Nav buttons
  document.getElementById('lesson-prev')?.addEventListener('click', () => {
    currentLessonIndex--;
    renderLesson(lessons, lang);
  });
  document.getElementById('lesson-next')?.addEventListener('click', () => {
    // Mark lesson completed
    const state = getState();
    const completed = { ...state.lessonsCompleted };
    const key = `${lang}-${state.selectedLevel}`;
    if (!completed[key]) completed[key] = [];
    if (!completed[key].includes(currentLessonIndex)) {
      completed[key].push(currentLessonIndex);
    }
    setState({ lessonsCompleted: completed });

    currentLessonIndex++;
    renderLesson(lessons, lang);
  });
  document.getElementById('lesson-done')?.addEventListener('click', () => {
    // Mark last lesson
    const state = getState();
    const completed = { ...state.lessonsCompleted };
    const key = `${lang}-${state.selectedLevel}`;
    if (!completed[key]) completed[key] = [];
    if (!completed[key].includes(currentLessonIndex)) {
      completed[key].push(currentLessonIndex);
    }
    setState({ lessonsCompleted: completed });
    navigateTo('#quiz');
  });

  // Entrance animation
  anime({
    targets: body.children,
    opacity: [0, 1],
    translateY: [15, 0],
    delay: anime.stagger(60),
    duration: 350,
    easing: 'easeOutCubic'
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function cleanup() {
  currentLessonIndex = 0;
}
