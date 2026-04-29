// ============================================
// Router — hash-based SPA navigation
// ============================================

const routes = {
  '#login':            'login-screen',
  '#welcome':          'welcome',
  '#onboarding':       'onboarding',
  '#language-select':  'language-select',
  '#level-select':     'level-select',
  '#learning-module':  'learning-module',
  '#quiz':             'quiz',
  '#progress':         'progress-screen',
  '#chatbot':          'chatbot',
  '#task-assignment':  'task-assignment',
  '#submit-task':      'submit-task',
  '#settings':         'settings'
};

const screenInitHandlers = {};
const screenCleanupHandlers = {};
let currentScreen = null;

export function registerScreen(screenId, initFn, cleanupFn) {
  screenInitHandlers[screenId] = initFn;
  if (cleanupFn) screenCleanupHandlers[screenId] = cleanupFn;
}

export function navigateTo(hash) {
  window.location.hash = hash;
}

export function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('load', handleRoute);
  if (!window.location.hash) {
    window.location.hash = '#login';
  } else {
    handleRoute();
  }
}

function handleRoute() {
  const hash = window.location.hash || '#login';
  const targetId = routes[hash];
  if (!targetId) {
    window.location.hash = '#login';
    return;
  }

  // Cleanup previous screen
  if (currentScreen && screenCleanupHandlers[currentScreen]) {
    screenCleanupHandlers[currentScreen]();
  }

  // Hide all screens
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
    s.style.opacity = '0';
  });

  // Show target
  const target = document.getElementById(targetId);
  if (target) {
    target.classList.add('active');
    // Animate in
    if (typeof anime !== 'undefined') {
      anime({
        targets: target,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 400,
        easing: 'easeOutCubic'
      });
    } else {
      target.style.opacity = '1';
    }

    currentScreen = targetId;

    // Toggle top bar visibility (hide on welcome/onboarding)
    const topBar = document.getElementById('top-bar');
    if (topBar) {
      const hideOn = ['login-screen', 'welcome', 'onboarding'];
      topBar.style.display = hideOn.includes(targetId) ? 'none' : 'flex';
    }

    // Init screen
    if (screenInitHandlers[targetId]) {
      screenInitHandlers[targetId]();
    }

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.screen === hash);
    });
  }
}

export function getCurrentScreen() {
  return currentScreen;
}
