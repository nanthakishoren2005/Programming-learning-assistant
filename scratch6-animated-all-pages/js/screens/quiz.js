// ============================================
// Screen 7 — Quiz Page
// ============================================
import { getState, setState } from '../state.js';
import { navigateTo } from '../router.js';
import { quizBank } from '../quiz-bank.js';
import { highlightElement } from '../code-highlighter.js';
import { spawnBgAnim } from '../bg-animations.js';

let currentQ = 0;
let score = 0;
let answered = false;
let questions = [];

export function init() {
  spawnBgAnim('quiz-bg-anim');
  const lang = getState().selectedLang || 'python';
  const level = getState().selectedLevel || 'beginner';
  questions = quizBank[lang]?.[level] || [];
  currentQ = 0;
  score = 0;
  answered = false;

  renderQuestion();
}

function renderQuestion() {
  const wrap = document.querySelector('#quiz .quiz-wrap');
  if (!wrap) return;

  if (currentQ >= questions.length) {
    renderResults(wrap);
    return;
  }

  answered = false;
  const q = questions[currentQ];
  const lang = getState().selectedLang || 'python';

  wrap.innerHTML = `
    <div class="quiz-header">
      <h2>Quiz</h2>
      <span style="font-size:var(--text-sm);color:var(--text-muted);">
        Question ${currentQ + 1} / ${questions.length}
      </span>
    </div>

    <div class="progress-bar-track" style="margin-bottom:var(--space-xl);">
      <div class="progress-bar-fill" style="width: ${((currentQ) / questions.length) * 100}%"></div>
    </div>

    <div class="quiz-question">
      <p>${escapeHtml(q.question)}</p>
      ${q.hasCode && q.codeSnippet ? `
        <div class="code-block-wrap" style="margin-top:1rem;">
          <div class="code-block-header">
            <span class="lang-label">${lang.toUpperCase()}</span>
          </div>
          <pre><code class="language-${lang === 'html' ? 'markup' : lang}">${escapeHtml(q.codeSnippet)}</code></pre>
        </div>
      ` : ''}

      <div class="quiz-options">
        ${q.options.map((opt, i) => `
          <div class="quiz-option" data-idx="${i}">${escapeHtml(opt)}</div>
        `).join('')}
      </div>

      <div class="quiz-explanation" id="quiz-explanation">
        ${q.explanation}
      </div>
    </div>

    <div style="display:flex;justify-content:flex-end;margin-top:var(--space-lg);">
      <button class="btn-primary" id="quiz-next" style="display:none;">
        ${currentQ < questions.length - 1 ? 'Next →' : 'See Results'}
      </button>
    </div>
  `;

  // Highlight code
  highlightElement(wrap);

  // Option click
  wrap.querySelectorAll('.quiz-option').forEach(opt => {
    opt.addEventListener('click', () => {
      if (answered) return;
      answered = true;

      const idx = parseInt(opt.dataset.idx);
      const correct = q.correct;

      // Mark all options
      wrap.querySelectorAll('.quiz-option').forEach((o, i) => {
        o.classList.add('disabled');
        if (i === correct) o.classList.add('correct');
        if (i === idx && idx !== correct) o.classList.add('incorrect');
      });

      if (idx === correct) {
        score++;
        anime({ targets: opt, scale: [1, 1.04, 1], duration: 350, easing: 'easeOutCubic' });
      } else {
        anime({ targets: opt, translateX: [0, -5, 5, -3, 3, 0], duration: 400, easing: 'easeInOutQuad' });
      }

      // Show explanation
      document.getElementById('quiz-explanation').classList.add('visible');
      document.getElementById('quiz-next').style.display = 'inline-flex';

      anime({
        targets: '#quiz-explanation',
        opacity: [0, 1],
        translateY: [8, 0],
        duration: 280,
        easing: 'easeOutCubic'
      });
    });
  });

  // Next button
  document.getElementById('quiz-next')?.addEventListener('click', () => {
    currentQ++;
    renderQuestion();
  });

  // Entrance
  anime({
    targets: '.quiz-question',
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 400,
    easing: 'easeOutCubic'
  });
}

function renderResults(wrap) {
  const percent = Math.round((score / questions.length) * 100);
  const state = getState();

  // Save score
  const scores = [...(state.quizScores || []), { date: new Date().toISOString(), lang: state.selectedLang, score, total: questions.length }];
  setState({ quizScores: scores });

  wrap.innerHTML = `
    <div style="text-align:center;padding:var(--space-3xl) 0;">
      <div style="font-size:4rem;margin-bottom:var(--space-lg);">${percent >= 80 ? '🎉' : percent >= 50 ? '👍' : '💪'}</div>
      <h2>Quiz Complete!</h2>
      <p style="font-size:var(--text-xl);margin:var(--space-lg) 0;">
        <strong style="color:var(--accent-light);">${score}</strong> / ${questions.length} correct (${percent}%)
      </p>
      <div class="progress-bar-track" style="max-width:300px;margin:var(--space-xl) auto;height:12px;">
        <div class="progress-bar-fill" style="width:${percent}%;transition:width 1s ease-out;"></div>
      </div>
      <p style="margin:var(--space-xl) 0;color:var(--text-secondary);">
        ${percent >= 80 ? 'Excellent work! You\'re mastering this material.' :
          percent >= 50 ? 'Good effort! Review the lessons and try again.' :
          'Keep practicing! Review the concepts and come back stronger.'}
      </p>
      <div style="display:flex;gap:var(--space-md);justify-content:center;margin-top:var(--space-xl);">
        <button class="btn-secondary" onclick="location.hash='#learning-module'">Review Lessons</button>
        <button class="btn-primary" onclick="location.hash='#progress'">View Progress</button>
      </div>
    </div>
  `;

  // Animate score filling
  anime({
    targets: wrap.querySelector('.progress-bar-fill'),
    width: [0, `${percent}%`],
    duration: 1200,
    delay: 400,
    easing: 'easeOutCubic'
  });
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function cleanup() {
  currentQ = 0;
  score = 0;
}
