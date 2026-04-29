// ============================================
// App Entry Point — init all modules
// ============================================
import { initRouter, registerScreen } from './router.js';
import { loadState, getState, subscribe } from './state.js';
import { initializeButtonAnimations } from './animations.js';

// Screen modules
import * as login from './screens/login.js';
import * as welcome from './screens/welcome.js';
import * as onboarding from './screens/onboarding.js';
import * as languageSelect from './screens/language-select.js';
import * as levelSelect from './screens/level-select.js';
import * as learningModule from './screens/learning-module.js';
import * as quiz from './screens/quiz.js';
import * as progress from './screens/progress.js';
import * as chatbot from './screens/chatbot.js';
import * as taskAssignment from './screens/task-assignment.js';
import * as submitTask from './screens/submit-task.js';
import * as settings from './screens/settings.js';
import * as profile from './screens/profile.js';

// Boot
document.addEventListener('DOMContentLoaded', () => {
  // Load persisted state
  loadState();

  // Register all screens
  registerScreen('login-screen', login.init, login.cleanup);
  registerScreen('welcome', welcome.init, welcome.cleanup);
  registerScreen('onboarding', onboarding.init, onboarding.cleanup);
  registerScreen('language-select', languageSelect.init, languageSelect.cleanup);
  registerScreen('level-select', levelSelect.init, levelSelect.cleanup);
  registerScreen('learning-module', learningModule.init, learningModule.cleanup);
  registerScreen('quiz', quiz.init, quiz.cleanup);
  registerScreen('progress-screen', progress.init, progress.cleanup);
  registerScreen('chatbot', chatbot.init, chatbot.cleanup);
  registerScreen('task-assignment', taskAssignment.init, taskAssignment.cleanup);
  registerScreen('submit-task', submitTask.init, submitTask.cleanup);
  registerScreen('settings', settings.init, settings.cleanup);
  registerScreen('profile-screen', profile.init, profile.cleanup);

  // Start router
  initRouter();

  // Nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const screen = link.dataset.screen;
      if (screen) window.location.hash = screen;
    });
  });

  // Settings button
  const settingsBtn = document.getElementById('settings-btn');
  if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
      window.location.hash = '#settings';
    });
  }

  // Profile avatar — toggle dropdown
  const avatarBtn = document.getElementById('profile-avatar-btn');
  const profileDropdown = document.getElementById('profileDropdown');
  if (avatarBtn && profileDropdown) {
    avatarBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      profileDropdown.classList.toggle('show');
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.profile-menu-wrapper')) {
        profileDropdown.classList.remove('show');
      }
    });

    // MY PROFILE opens the slide-in panel
    document.getElementById('openProfile')?.addEventListener('click', () => {
      profileDropdown.classList.remove('show');
      profile.init();
    });

    // SIGN-OUT
    document.getElementById('dropdown-logout')?.addEventListener('click', () => {
      profileDropdown.classList.remove('show');
      import('./state.js').then(({ resetState }) => {
        resetState();
        window.location.hash = '#login';
      });
    });
  }

  // Update avatar initials whenever state changes
  function updateAvatar() {
    const s = getState();
    const btn = document.getElementById('profile-avatar-btn');
    if (btn) {
      const initials = (s.firstName ? s.firstName[0] : '') + (s.lastName ? s.lastName[0] : '');
      btn.textContent = initials.toUpperCase() || s.userName?.[0]?.toUpperCase() || 'U';
    }
  }
  subscribe(updateAvatar);
  updateAvatar();

  // ---- Apply default light theme ----
  let savedTheme = localStorage.getItem('learnix_theme');
  if (!savedTheme) {
    document.documentElement.setAttribute('data-theme', 'light');
    document.body.classList.remove('dark');
    localStorage.setItem('learnix_theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }

  // ---- Top Bar Theme Toggle ----
  const topThemeToggle = document.getElementById('theme-toggle-top');
  if (topThemeToggle) {
    topThemeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const newTheme = isDark ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      if (newTheme === 'dark') document.body.classList.add('dark');
      else document.body.classList.remove('dark');
      
      localStorage.setItem('learnix_theme', newTheme);
      
      // Update toggle icon
      const thumbIcon = topThemeToggle.querySelector('.toggle-thumb i');
      if (thumbIcon) {
        thumbIcon.className = newTheme === 'dark' ? 'fa fa-moon' : 'fa fa-sun';
      }
      
      // Update settings page toggle button if it's currently rendered
      const settingsToggle = document.getElementById('theme-toggle');
      if (settingsToggle) {
        settingsToggle.innerHTML = newTheme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode';
      }
    });
    
    // Set initial icon
    const currentTheme = localStorage.getItem('learnix_theme') || 'light';
    const thumbIcon = topThemeToggle.querySelector('.toggle-thumb i');
    if (thumbIcon) {
      thumbIcon.className = currentTheme === 'dark' ? 'fa fa-moon' : 'fa fa-sun';
    }
  }

  initializeButtonAnimations();
});
