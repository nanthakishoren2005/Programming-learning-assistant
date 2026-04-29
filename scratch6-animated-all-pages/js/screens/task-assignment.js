// ============================================
// Screen 10 — Task Assignment
// ============================================
import { getState, setState } from '../state.js';
import { navigateTo } from '../router.js';
import { tasks } from '../task-data.js';
import { spawnBgAnim } from '../bg-animations.js';

export function init() {
  spawnBgAnim('task-assignment-bg-anim');
  const state = getState();
  const lang = state.selectedLang || 'python';
  const level = state.selectedLevel || 'beginner';
  const langTasks = tasks[lang]?.[level] || [];
  const grid = document.querySelector('#task-assignment .task-grid');
  const title = document.querySelector('#task-assignment .task-wrap > h2');

  if (title) title.textContent = `${lang.toUpperCase()} Coding Challenges`;

  if (!grid) return;

  grid.innerHTML = langTasks.map(task => `
    <div class="task-card" data-task-id="${task.id}">
      <div class="card-top">
        <h4>${task.title}</h4>
        <span class="badge ${task.difficulty}">${task.difficulty}</span>
      </div>
      
      <div class="card-middle">
        <p>${task.description}</p>
        <div class="task-concepts">
          ${task.concepts.map(c => `<span class="concept-tag">${c}</span>`).join('')}
        </div>
      </div>
      
      <div class="card-bottom">
        <span style="font-size: 13px; color: #94a3b8;">⏱ ${task.estimatedTime}</span>
        <button class="start-btn">Start →</button>
      </div>
    </div>
  `).join('');

  // Click handlers
  grid.querySelectorAll('.task-card').forEach(card => {
    card.addEventListener('click', () => {
      const taskId = card.dataset.taskId;
      setState({ currentTask: taskId });
      navigateTo('#submit-task');
    });
  });

  // Entrance
  anime({
    targets: '.task-card',
    opacity: [0, 1],
    translateY: [25, 0],
    delay: anime.stagger(80),
    duration: 400,
    easing: 'easeOutCubic'
  });
}

export function cleanup() {}
