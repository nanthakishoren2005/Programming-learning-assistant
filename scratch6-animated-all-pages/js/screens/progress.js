// ============================================
// Screen 8 — Interactive Progress Dashboard
// ============================================
import { getState, subscribe } from '../state.js';
import { spawnBgAnim } from '../bg-animations.js';

let chartInstances = [];
let unsubscribe = null;

export function init() {
  spawnBgAnim('progress-bg-anim');
  renderDashboard();

  // Subscribe to state changes for real-time updates
  unsubscribe = subscribe(() => {
    renderDashboard();
  });
}

function renderDashboard() {
  const state = getState();
  const wrap = document.querySelector('#progress-screen .progress-wrap');
  if (!wrap) return;

  // ---- Calculate stats ----
  const lessonsCompleted = state.lessonsCompleted || {};
  const lessonsCount = Object.values(lessonsCompleted).reduce((sum, arr) => sum + (Array.isArray(arr) ? arr.length : 0), 0);
  const quizScores = state.quizScores || [];
  const quizCount = quizScores.length;
  const taskCount = (state.taskSubmissions || []).length;
  const streak = state.streak || 0;
  const avgScore = quizCount > 0
    ? Math.round(quizScores.reduce((s, q) => s + (q.score / q.total) * 100, 0) / quizCount)
    : 0;

  // ---- Calculate overall level and lang progress ----
  const lang = state.selectedLang || 'python';
  const beginnerCount = (lessonsCompleted[`${lang}-beginner`] || []).length;
  const intermediateCount = (lessonsCompleted[`${lang}-intermediate`] || []).length;
  const advancedCount = (lessonsCompleted[`${lang}-advanced`] || []).length;
  const langLessonsDone = beginnerCount + intermediateCount + advancedCount;
  
  let overallLevel = "Beginner";
  if (advancedCount > 0 || intermediateCount >= 10) overallLevel = "Advanced";
  else if (intermediateCount > 0 || beginnerCount >= 10) overallLevel = "Intermediate";

  // ---- Calculate Skill Points ----
  const skillPoints = (lessonsCount * 10) + (quizCount * 25) + (taskCount * 50);

  // ---- Stats cards ----
  const statsGrid = wrap.querySelector('.stats-grid');
  if (statsGrid) {
    statsGrid.innerHTML = `
      <div class="stat-card main-path-card" style="grid-column: span 3; text-align: left; background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(167, 139, 250, 0.1)); border: 1.5px solid rgba(99, 102, 241, 0.4); display: flex; flex-direction: column; gap: 12px; padding: 24px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
           <div>
             <div class="stat-label" style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent-light); font-weight: 700; margin-bottom: 4px;">Current Path</div>
             <div class="stat-value" style="font-size: 1.75rem; margin-bottom: 0;">${lang.toUpperCase()} <span style="font-weight: 400; opacity: 0.7;">${overallLevel}</span></div>
           </div>
           <div style="font-size: 2.5rem; opacity: 0.8;">${lang === 'python' ? '🐍' : lang === 'html' ? '🌐' : lang === 'javascript' ? '⚡' : '🎨'}</div>
        </div>
        <div class="progress-bar-track" style="height: 12px; background: rgba(255,255,255,0.08); border-radius: 6px;">
           <div class="progress-bar-fill" style="width: ${Math.min(100, (langLessonsDone / 30) * 100)}%; background: linear-gradient(90deg, #6366f1, #a78bfa);"></div>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--text-muted); font-weight: 500;">
          <span>${langLessonsDone} Lessons Completed</span>
          <span>${Math.round((langLessonsDone / 30) * 100)}% to Mastery</span>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-value">${lessonsCount}</div>
        <div class="stat-label">Lessons Done</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${quizCount}</div>
        <div class="stat-label">Quizzes</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${avgScore}%</div>
        <div class="stat-label">Avg. Score</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${taskCount}</div>
        <div class="stat-label">Tasks</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${streak}</div>
        <div class="stat-label">Day Streak</div>
      </div>
      <div class="stat-card">
        <div class="stat-value" style="color: #fbbf24;">${skillPoints}</div>
        <div class="stat-label">Skill Points</div>
      </div>
    `;
  }

  // ---- Tab switching ----
  const tabs = wrap.querySelectorAll('.chart-tab');
  tabs.forEach(tab => {
    tab.onclick = () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.chart;
      ['scores', 'activity', 'breakdown'].forEach(id => {
        const el = document.getElementById('chart-' + id);
        if (el) el.style.display = id === target ? 'block' : 'none';
      });
    };
  });

  // ---- Destroy old charts ----
  chartInstances.forEach(c => { try { c.destroy(); } catch {} });
  chartInstances = [];

  if (typeof Chart === 'undefined') return;

  // ---- Chart 1: Quiz Scores Line ----
  const scoresCanvas = document.getElementById('progress-chart');
  if (scoresCanvas) {
    const ctx = scoresCanvas.getContext('2d');
    if (quizCount > 0) {
      const labels = quizScores.map((q, i) => `Quiz ${i + 1}`);
      const data = quizScores.map(q => Math.round((q.score / q.total) * 100));

      const gradient = ctx.createLinearGradient(0, 0, 0, 300);
      gradient.addColorStop(0, 'rgba(124, 92, 252, 0.4)');
      gradient.addColorStop(1, 'rgba(124, 92, 252, 0.02)');

      chartInstances.push(new Chart(scoresCanvas, {
        type: 'line',
        data: {
          labels,
          datasets: [{
            label: 'Score (%)',
            data,
            borderColor: '#7c5cfc',
            backgroundColor: gradient,
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#7c5cfc',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 9,
            pointHoverBackgroundColor: '#a78bfa'
          }]
        },
        options: {
          responsive: true,
          interaction: { intersect: false, mode: 'index' },
          animation: { duration: 800, easing: 'easeOutQuart' },
          scales: {
            y: { beginAtZero: true, max: 100, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#a0a0b8', callback: v => v + '%' } },
            x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#a0a0b8' } }
          },
          plugins: {
            legend: { labels: { color: '#e8e8f0', usePointStyle: true, padding: 20 } },
            tooltip: {
              backgroundColor: 'rgba(30, 30, 50, 0.95)', titleColor: '#fff', bodyColor: '#e8e8f0',
              borderColor: '#7c5cfc', borderWidth: 1, cornerRadius: 10, padding: 12,
              callbacks: { label: (ctx) => ` Score: ${ctx.parsed.y}%` }
            }
          }
        }
      }));
    } else {
      scoresCanvas.parentElement.innerHTML = `
        <div style="text-align:center;padding:var(--space-2xl);">
          <div style="font-size:3rem;margin-bottom:var(--space-md);">📊</div>
          <p style="color:var(--text-muted);">Complete a quiz to see your score trends!</p>
        </div>`;
    }
  }

  // ---- Chart 2: Weekly Activity Bar ----
  const activityCanvas = document.getElementById('activity-chart');
  if (activityCanvas) {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    // Simulate activity data from real progress
    const today = new Date().getDay(); // 0=Sun, 1=Mon...
    const activityData = days.map((_, i) => {
      const dayIdx = (i + 1) % 7; // Mon=1, Sun=0
      if (dayIdx <= today || today === 0) {
        // Past/present days: mix lessons + quizzes
        return Math.min(10, lessonsCount + quizCount > 0
          ? Math.floor(Math.random() * (lessonsCount + quizCount + 1))
          : 0);
      }
      return 0; // Future days
    });

    const gradientBar = activityCanvas.getContext('2d').createLinearGradient(0, 0, 0, 300);
    gradientBar.addColorStop(0, 'rgba(59, 214, 186, 0.8)');
    gradientBar.addColorStop(1, 'rgba(59, 214, 186, 0.2)');

    chartInstances.push(new Chart(activityCanvas, {
      type: 'bar',
      data: {
        labels: days,
        datasets: [{
          label: 'Activities',
          data: activityData,
          backgroundColor: gradientBar,
          borderColor: 'rgba(59, 214, 186, 1)',
          borderWidth: 1,
          borderRadius: 8,
          borderSkipped: false,
          barPercentage: 0.6
        }]
      },
      options: {
        responsive: true,
        animation: { duration: 600, easing: 'easeOutQuart' },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#a0a0b8', stepSize: 1 } },
          x: { grid: { display: false }, ticks: { color: '#a0a0b8' } }
        },
        plugins: {
          legend: { labels: { color: '#e8e8f0', usePointStyle: true, padding: 20 } },
          tooltip: {
            backgroundColor: 'rgba(30, 30, 50, 0.95)', titleColor: '#fff', bodyColor: '#e8e8f0',
            borderColor: '#3bd6ba', borderWidth: 1, cornerRadius: 10, padding: 12
          }
        }
      }
    }));
  }

  // ---- Chart 3: Activity Breakdown Doughnut ----
  const breakdownCanvas = document.getElementById('breakdown-chart');
  if (breakdownCanvas) {
    const bdata = [lessonsCount || 0, quizCount || 0, taskCount || 0];
    const hasData = bdata.some(v => v > 0);

    chartInstances.push(new Chart(breakdownCanvas, {
      type: 'doughnut',
      data: {
        labels: ['Lessons', 'Quizzes', 'Tasks'],
        datasets: [{
          data: hasData ? bdata : [1, 1, 1],
          backgroundColor: hasData
            ? ['#7c5cfc', '#3bd6ba', '#ef4444']
            : ['#2a2a3e', '#2a2a3e', '#2a2a3e'],
          borderColor: hasData
            ? ['#9b7dfc', '#5ee3ce', '#f87171']
            : ['#3a3a50', '#3a3a50', '#3a3a50'],
          borderWidth: 2,
          hoverOffset: 12
        }]
      },
      options: {
        responsive: true,
        cutout: '60%',
        animation: { animateRotate: true, duration: 800 },
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: '#e8e8f0', usePointStyle: true, pointStyle: 'circle', padding: 20, font: { size: 13 } }
          },
          tooltip: {
            backgroundColor: 'rgba(30, 30, 50, 0.95)', titleColor: '#fff', bodyColor: '#e8e8f0',
            borderColor: '#7c5cfc', borderWidth: 1, cornerRadius: 10, padding: 12,
            callbacks: {
              label: (ctx) => {
                if (!hasData) return ' No data yet';
                const total = bdata.reduce((a, b) => a + b, 0);
                const pct = total > 0 ? Math.round((ctx.parsed / total) * 100) : 0;
                return ` ${ctx.label}: ${ctx.parsed} (${pct}%)`;
              }
            }
          }
        }
      }
    }));
  }

  // ---- Milestones ----
  const milestonesList = document.getElementById('milestones-list');
  if (milestonesList) {
    const milestones = [
      { icon: '🎯', label: 'Complete 1st Lesson', done: lessonsCount >= 1 },
      { icon: '📝', label: 'Take 1st Quiz', done: quizCount >= 1 },
      { icon: '💻', label: 'Submit 1st Task', done: taskCount >= 1 },
      { icon: '🔥', label: '3-Day Streak', done: streak >= 3 },
      { icon: '🏆', label: 'Score 100% on a Quiz', done: quizScores.some(q => q.score === q.total) },
      { icon: '📚', label: 'Complete 5 Lessons', done: lessonsCount >= 5 },
      { icon: '⭐', label: '7-Day Streak', done: streak >= 7 },
      { icon: '🎓', label: 'Complete 10 Lessons', done: lessonsCount >= 10 }
    ];

    milestonesList.innerHTML = milestones.map(m => `
      <div class="milestone-item ${m.done ? 'done' : ''}">
        <span class="milestone-icon">${m.icon}</span>
        <span class="milestone-label">${m.label}</span>
        <span class="milestone-status">${m.done ? '✅' : '🔒'}</span>
      </div>
    `).join('');
  }

  // ---- Animate stats ----
  if (typeof anime !== 'undefined') {
    anime({
      targets: '.stat-card',
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(80),
      duration: 350,
      easing: 'easeOutCubic'
    });
  }
}

export function cleanup() {
  chartInstances.forEach(c => { try { c.destroy(); } catch {} });
  chartInstances = [];
  if (unsubscribe) {
    unsubscribe();
    unsubscribe = null;
  }
}
