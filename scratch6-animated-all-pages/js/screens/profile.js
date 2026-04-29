// ============================================
// Profile — Dropdown + Slide-in Panel
// ============================================
import { lessonData } from '../lesson-data.js';
import { getState, setState, resetState } from '../state.js';
import { navigateTo } from '../router.js';

let cleanupFns = [];

export function init() {
  const panel = document.getElementById('profilePanel');
  const overlay = document.getElementById('profile-panel-overlay');
  const closeBtn = document.getElementById('closeProfile');
  const content = document.getElementById('profile-panel-content');

  if (!panel || !content) return;

  const state = getState();
  const firstName = state.firstName || '';
  const lastName = state.lastName || '';
  const email = state.email || '';
  const userName = state.userName || 'User';
  const initials = (firstName ? firstName[0] : '') + (lastName ? lastName[0] : '');

  // ---- Calculate Progress for all languages ----
  const lessonsCompleted = state.lessonsCompleted || {};
  const langs = [
    { id: 'python', name: 'Python', icon: '🐍' },
    { id: 'html', name: 'HTML', icon: '🌐' },
    { id: 'css', name: 'CSS', icon: '🎨' },
    { id: 'javascript', name: 'JavaScript', icon: '⚡' }
  ];

  const progressHtml = langs.map(l => {
    const done = (lessonsCompleted[`${l.id}-beginner`] || []).length +
                 (lessonsCompleted[`${l.id}-intermediate`] || []).length +
                 (lessonsCompleted[`${l.id}-advanced`] || []).length;
    const total = 30; // 10 per level
    const pct = Math.round((done / total) * 100);
    return `
      <div class="profile-lang-progress" data-lang="${l.id}">
        <div class="profile-lang-info">
          <span class="profile-lang-name">${l.icon} ${l.name}</span>
          <span class="profile-lang-pct">${pct}%</span>
        </div>
        <div class="progress-bar-track" style="height: 6px; background: rgba(0,0,0,0.05); border-radius: 3px; overflow: hidden; margin-right: 40px;">
          <div class="progress-bar-fill" style="width: ${pct}%; background: var(--${l.id}-accent, var(--accent-primary)); height: 100%;"></div>
        </div>
        <button class="continue-popup-btn" data-lang="${l.id}" title="Continue ${l.name}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </button>
      </div>
    `;
  }).join('');

  // ---- Identify Current Lesson ----
  const currentLang = state.selectedLang || 'python';
  const currentLevel = state.selectedLevel || 'beginner';
  const levelKey = `${currentLang}-${currentLevel}`;
  const completedIds = lessonsCompleted[levelKey] || [];
  const levelLessons = lessonData[currentLang]?.[currentLevel] || [];
  
  let currentLessonTitle = "Not started yet";
  let currentLessonIndex = completedIds.length; // Next one to do
  if (currentLessonIndex < levelLessons.length) {
    currentLessonTitle = levelLessons[currentLessonIndex].title;
  } else if (levelLessons.length > 0) {
    currentLessonTitle = "Level Mastered! 🎉";
  }

  content.innerHTML = `
    <div class="profile-avatar-large">${initials.toUpperCase() || userName[0]?.toUpperCase() || 'U'}</div>
    <h3 class="profile-panel-name">${firstName} ${lastName}</h3>
    <p class="profile-panel-username">@${userName}</p>

    <div class="profile-info-card">
      <h4 style="margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
        <i class="fa fa-graduation-cap"></i> Current Lesson
      </h4>
      <div style="background: rgba(99, 102, 241, 0.08); padding: 12px; border-radius: 12px; border: 1px solid rgba(99, 102, 241, 0.2);">
        <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--accent-light); font-weight: 700; margin-bottom: 4px;">${currentLang} • ${currentLevel}</div>
        <div style="font-weight: 600; font-size: 1rem; color: var(--text-primary);">${currentLessonTitle}</div>
        <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px;">${completedIds.length} of ${levelLessons.length} completed in this level</div>
      </div>
    </div>

    <div class="profile-info-card">
      <h4 style="margin-bottom: 12px;"><i class="fa fa-chart-line"></i> Path Progress</h4>
      <div style="display: flex; flex-direction: column; gap: 0;">
        ${progressHtml}
      </div>
    </div>

    <div class="profile-info-card">
      <h4 style="margin-bottom: 12px;"><i class="fa fa-user"></i> Account Info</h4>
      <p style="font-size: 0.9rem; color: var(--text-secondary);">Email: <span style="color: var(--text-primary); font-weight: 500;">${email || '—'}</span></p>
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 8px;">Streak: <span style="color: #f59e0b; font-weight: 700;">🔥 ${state.streak || 0} days</span></p>
    </div>
  `;

  // Open panel
  panel.classList.add('active');
  overlay.classList.add('active');

  // Hide the dropdown when opening panel
  const dropdown = document.getElementById('profileDropdown');
  if (dropdown) dropdown.classList.remove('show');

  // Close panel
  const closePanel = () => {
    panel.classList.remove('active');
    overlay.classList.remove('active');
  };

  closeBtn?.addEventListener('click', closePanel);
  overlay?.addEventListener('click', closePanel);

  // Handle Continue buttons
  content.querySelectorAll('.continue-popup-btn').forEach(btn => {
    const handler = (e) => {
      e.stopPropagation();
      const lang = btn.getAttribute('data-lang');
      const state = getState();
      const level = state.selectedLevel || 'beginner';
      setState({ selectedLang: lang, selectedLevel: level });
      closePanel();
      navigateTo('#learning-module');
    };
    btn.addEventListener('click', handler);
    cleanupFns.push(() => btn.removeEventListener('click', handler));
  });

  cleanupFns.push(() => {
    closeBtn?.removeEventListener('click', closePanel);
    overlay?.removeEventListener('click', closePanel);
  });
}

export function cleanup() {
  cleanupFns.forEach(fn => fn());
  cleanupFns = [];
}
