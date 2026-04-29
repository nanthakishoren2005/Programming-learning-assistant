// ============================================
// Screen 2 — Onboarding
// ============================================
import { navigateTo } from '../router.js';
import { getState, setState } from '../state.js';
import { spawnBgAnim } from '../bg-animations.js';

export function init() {
  spawnBgAnim('onboarding-bg-anim');
  const nameInput = document.getElementById('user-name');
  const continueBtn = document.getElementById('onboarding-continue');

  // Restore state
  const s = getState();
  if (nameInput && s.userName) nameInput.value = s.userName;

  function updateButton() {
    const name = nameInput?.value.trim();
    continueBtn.disabled = !name;
  }

  nameInput?.addEventListener('input', updateButton);

  continueBtn?.addEventListener('click', () => {
    setState({
      userName: nameInput.value.trim()
    });
    navigateTo('#language-select');
  });

  updateButton();

  // Animate in
  anime({
    targets: '#onboarding .onboarding-wrap > *',
    opacity: [0, 1],
    translateY: [20, 0],
    delay: anime.stagger(80),
    duration: 400,
    easing: 'easeOutCubic'
  });
}

export function cleanup() {}
