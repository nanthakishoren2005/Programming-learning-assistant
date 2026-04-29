// ============================================
// Screen 3 — Select Programming Language
// ============================================
import { navigateTo } from '../router.js';
import { getState, setState } from '../state.js';
import { spawnBgAnim } from '../bg-animations.js';

export function init() {
  spawnBgAnim('language-select-bg-anim');
  const cards = document.querySelectorAll('.lang-card');
  const confirmBtn = document.getElementById('confirm-lang');
  let selected = getState().selectedLang || '';

  // Restore selection
  cards.forEach(c => {
    if (c.dataset.lang === selected) c.classList.add('selected');
    else c.classList.remove('selected');
  });
  confirmBtn.disabled = !selected;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selected = card.dataset.lang;
      confirmBtn.disabled = false;

      // Dynamic pop and spring bounce for the card
      anime({
        targets: card,
        scale: [0.9, 1.05, 1],
        rotateZ: [-1, 1, 0],
        duration: 800,
        easing: 'spring(1, 80, 12, 0)'
      });

      // Spin and pop the icon inside the card
      const icon = card.querySelector('svg') || card.querySelector('img');
      if (icon) {
        anime({
          targets: icon,
          scale: [0.5, 1.2, 1],
          rotate: '1turn',
          duration: 1000,
          easing: 'spring(1, 80, 10, 0)'
        });
      }
    });
  });

  confirmBtn?.addEventListener('click', () => {
    setState({ selectedLang: selected });
    navigateTo('#level-select');
  });

  // Stagger card entrance
  anime({
    targets: '.lang-card',
    opacity: [0, 1],
    translateY: [30, 0],
    delay: anime.stagger(100),
    duration: 450,
    easing: 'easeOutCubic'
  });
}

export function cleanup() {}
