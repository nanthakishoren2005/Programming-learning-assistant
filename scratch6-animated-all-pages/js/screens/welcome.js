// ============================================
// Screen 1 — Welcome
// ============================================
import { navigateTo } from '../router.js';
import { spawnBgAnim } from '../bg-animations.js';

export function init() {
  spawnBgAnim('welcome-bg-anim');

  // Animate hero content
  anime({
    targets: '#welcome .hero-content > *',
    opacity: [0, 1],
    translateY: [30, 0],
    delay: anime.stagger(150),
    duration: 800,
    easing: 'easeOutExpo'
  });

  // CTA button — navigation (animations handled globally)
  const cta = document.getElementById('welcome-cta');
  if (cta) {
    cta.addEventListener('click', () => {
      // Navigate after animation settles
      setTimeout(() => navigateTo('#onboarding'), 480);
    });
  }
}

export function cleanup() {}
