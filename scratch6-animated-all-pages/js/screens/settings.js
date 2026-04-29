// ============================================
// Screen 12 — Settings
// ============================================
import { getState, setState, resetState } from '../state.js';
import { navigateTo } from '../router.js';
import { spawnBgAnim } from '../bg-animations.js';

export function init() {
  spawnBgAnim('settings-bg-anim');
  const wrap = document.querySelector('#settings .settings-wrap');
  if (!wrap) return;

  const state = getState();

  wrap.innerHTML = `
    <h2>Settings</h2>

    <div class="settings-section">
      <h3>Profile</h3>
      <div class="setting-row">
        <span class="setting-label">Name</span>
        <span style="color:var(--text-primary);font-weight:500;">${state.userName || 'Not set'}</span>
      </div>
      <div class="setting-row">
        <span class="setting-label">Current Language</span>
        <span style="color:var(--accent-light);font-weight:600;">${(state.selectedLang || 'None').toUpperCase()}</span>
      </div>
      <div class="setting-row">
        <span class="setting-label">Current Level</span>
        <span style="color:var(--text-primary);font-weight:500;">${state.selectedLevel ? state.selectedLevel.charAt(0).toUpperCase() + state.selectedLevel.slice(1) : 'Not set'}</span>
      </div>
    </div>

    <div class="settings-section">
      <h3>Appearance</h3>
      <div class="setting-row">
        <span class="setting-label">Theme</span>
        <button class="btn-secondary" id="theme-toggle" style="padding: 6px 12px; font-size: 0.85rem;">
          ${document.documentElement.getAttribute('data-theme') === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
    </div>

    <div class="settings-section">
      <h3>Quick Actions</h3>
      <div style="display:flex;flex-direction:column;gap:var(--space-sm);">
        <button class="btn-secondary" id="change-lang">🔄 Change Language</button>
        <button class="btn-secondary" id="change-level">📊 Change Level</button>
        <button class="btn-secondary" id="reset-progress" style="color:var(--error);">🗑 Reset All Progress</button>
      </div>
    </div>
  `;


  // Quick actions
  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    if (newTheme === 'dark') document.body.classList.add('dark');
    else document.body.classList.remove('dark');
    
    localStorage.setItem('learnix_theme', newTheme);
    
    // Re-render to update button text
    init();
  });

  document.getElementById('change-lang')?.addEventListener('click', () => navigateTo('#language-select'));
  document.getElementById('change-level')?.addEventListener('click', () => navigateTo('#level-select'));
  document.getElementById('reset-progress')?.addEventListener('click', () => {
    if (confirm('Are you sure? This will erase all your progress, scores, and submissions.')) {
      // Only reset progress, keep account info
      setState({
        lessonsCompleted: {},
        quizScores: [],
        taskSubmissions: [],
        streak: 0,
        lastVisit: null
      });
      // Re-render settings to reflect reset
      init();
    }
  });

  // Entrance
  anime({
    targets: '.settings-section',
    opacity: [0, 1],
    translateY: [15, 0],
    delay: anime.stagger(80),
    duration: 350,
    easing: 'easeOutCubic'
  });
}

export function cleanup() {}
