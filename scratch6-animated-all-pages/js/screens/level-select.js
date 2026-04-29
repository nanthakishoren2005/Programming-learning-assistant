// ============================================
// Screen 4 — Select Level
// ============================================
import { navigateTo } from '../router.js';
import { getState, setState } from '../state.js';
import { levelDescriptions } from '../level-data.js';
import { spawnBgAnim } from '../bg-animations.js';

const levels = ['beginner', 'intermediate', 'advanced'];
const levelLabels = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced'
};
const levelEmojis = {
  beginner: '',
  intermediate: '',
  advanced: ''
};

export function init() {
  spawnBgAnim('level-select-bg-anim');
  const container = document.getElementById('level-path');
  const descEl = document.getElementById('level-desc-text');
  const confirmBtn = document.getElementById('confirm-level');
  const lang = getState().selectedLang || 'python';
  let selected = getState().selectedLevel || '';

  // Build level cards
  container.innerHTML = '';
  levels.forEach((lvl, i) => {
    const card = document.createElement('div');
    card.className = 'level-card' + (lvl === selected ? ' active' : '');
    card.dataset.level = lvl;
    card.style.animationDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <div class="level-card-body">
        <h4>${levelLabels[lvl]}</h4>
      </div>
      <div class="level-check">
         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
           <polyline points="20 6 9 17 4 12"></polyline>
         </svg>
      </div>
    `;
    card.addEventListener('click', () => selectLevel(lvl));
    container.appendChild(card);
  });

  if (selected && levelDescriptions[lang]?.[selected]) {
    descEl.textContent = levelDescriptions[lang][selected];
  }
  confirmBtn.disabled = !selected;

  function selectLevel(lvl) {
    selected = lvl;
    confirmBtn.disabled = false;

    container.querySelectorAll('.level-card').forEach(c => {
      c.classList.toggle('active', c.dataset.level === lvl);
    });

    // Animate description swap
    const desc = levelDescriptions[lang]?.[lvl] || '';
    descEl.style.opacity = '0';
    setTimeout(() => {
      descEl.textContent = desc;
      anime({
        targets: descEl,
        opacity: [0, 1],
        translateY: [8, 0],
        duration: 280,
        easing: 'easeOutCubic'
      });
    }, 100);
  }

  confirmBtn?.addEventListener('click', () => {
    setState({ selectedLevel: selected });
    navigateTo('#learning-module');
  });
}

export function cleanup() {}
