// ============================================
// Shared Animation Utilities
// ============================================

export function fadeIn(targets, opts = {}) {
  return anime({
    targets,
    opacity: [0, 1],
    duration: opts.duration || 400,
    easing: opts.easing || 'easeOutCubic',
    delay: opts.delay || 0,
    ...opts
  });
}

export function fadeOut(targets, opts = {}) {
  return anime({
    targets,
    opacity: [1, 0],
    duration: opts.duration || 300,
    easing: opts.easing || 'easeInCubic',
    delay: opts.delay || 0,
    ...opts
  });
}

export function slideUp(targets, opts = {}) {
  return anime({
    targets,
    opacity: [0, 1],
    translateY: [opts.distance || 20, 0],
    duration: opts.duration || 400,
    easing: opts.easing || 'easeOutCubic',
    delay: opts.delay || 0,
    ...opts
  });
}

export function staggerIn(targets, opts = {}) {
  return anime({
    targets,
    opacity: [0, 1],
    translateY: [15, 0],
    delay: anime.stagger(opts.stagger || 80),
    duration: opts.duration || 350,
    easing: opts.easing || 'easeOutCubic',
    ...opts
  });
}

// ============================================
// Button Click Animations
// ============================================
export function initializeButtonAnimations() {
  const buttons = document.querySelectorAll('.btn-primary, .btn.primary');
  
  buttons.forEach(btn => {
    // Skip if already initialized
    if (btn.hasAttribute('data-animation-init')) return;
    btn.setAttribute('data-animation-init', 'true');
    
    btn.addEventListener('click', (e) => {
      // Don't animate if button is disabled
      if (btn.disabled) return;
      
      // --- 1. Ripple effect ---
      const ripple = document.createElement('span');
      ripple.className = 'btn-ripple';
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2.2;
      ripple.style.cssText = `
        width: ${size}px; height: ${size}px;
        left: ${e.clientX - rect.left - size / 2}px;
        top: ${e.clientY - rect.top - size / 2}px;
      `;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);

      // --- 2. Button scale pop ---
      anime({
        targets: btn,
        scale: [1, 0.92, 1.06, 1],
        duration: 450,
        easing: 'easeOutElastic(1, 0.5)'
      });

      // --- 3. Arrow icon launch (if exists) ---
      const icon = btn.querySelector('.icon');
      if (icon) {
        anime({
          targets: icon,
          translateX: [0, 28],
          opacity: [1, 0],
          duration: 320,
          easing: 'easeInCubic',
          complete: () => {
            anime({
              targets: icon,
              translateX: [-18, 0],
              opacity: [0, 1],
              duration: 280,
              easing: 'easeOutCubic'
            });
          }
        });
      }

      // --- 4. Particle burst from button center ---
      const burstContainer = document.createElement('div');
      burstContainer.className = 'btn-burst';
      burstContainer.style.cssText = `
        position: fixed;
        left: ${rect.left + rect.width / 2}px;
        top: ${rect.top + rect.height / 2}px;
        pointer-events: none; z-index: 9999;
      `;
      document.body.appendChild(burstContainer);

      const colors = ['#818cf8', '#a78bfa', '#c4b5fd', '#6366f1', '#ffffff'];
      const snippets = ['{ }', '//', '=>', '<>', '++', '**', '()'];
      for (let i = 0; i < 12; i++) {
        const dot = document.createElement('span');
        dot.className = 'burst-dot';
        dot.textContent = Math.random() > 0.5 ? snippets[i % snippets.length] : '•';
        dot.style.color = colors[i % colors.length];
        burstContainer.appendChild(dot);
      }

      anime({
        targets: burstContainer.querySelectorAll('.burst-dot'),
        translateX: () => anime.random(-130, 130),
        translateY: () => anime.random(-110, 110),
        scale: [0, () => 0.6 + Math.random() * 0.8],
        opacity: [1, 0],
        duration: () => 550 + Math.random() * 300,
        delay: anime.stagger(18),
        easing: 'easeOutExpo',
        complete: () => burstContainer.remove()
      });

      // --- 5. Glow pulse on button ---
      anime({
        targets: btn,
        boxShadow: [
          '0 10px 25px rgba(99,102,241,0.4)',
          '0 0 55px rgba(139,92,246,0.85)',
          '0 10px 25px rgba(99,102,241,0.4)'
        ],
        duration: 600,
        easing: 'easeOutCubic'
      });
    });
  });
}

export function pulseElement(targets) {
  return anime({
    targets,
    scale: [1, 1.05, 1],
    duration: 400,
    easing: 'easeInOutQuad'
  });
}

export function shakeElement(targets) {
  return anime({
    targets,
    translateX: [0, -8, 8, -5, 5, 0],
    duration: 500,
    easing: 'easeInOutQuad'
  });
}

export function highlightCorrect(targets) {
  return anime({
    targets,
    backgroundColor: ['rgba(34,197,94,0.3)', 'rgba(34,197,94,0.08)'],
    duration: 800,
    easing: 'easeOutCubic'
  });
}

export function highlightIncorrect(targets) {
  return anime({
    targets,
    backgroundColor: ['rgba(239,68,68,0.3)', 'rgba(239,68,68,0.08)'],
    duration: 800,
    easing: 'easeOutCubic'
  });
}
