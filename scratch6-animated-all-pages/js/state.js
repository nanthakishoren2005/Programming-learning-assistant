// ============================================
// State Management — global app state
// ============================================

const STORAGE_KEY = 'learnix_state';

const defaultState = {
  isLoggedIn: false,
  userName: '',
  firstName: '',
  lastName: '',
  email: '',
  userGoal: '',
  selectedLang: '',
  selectedLevel: '',
  currentScreen: 'welcome',
  lessonsCompleted: {},
  quizScores: [],
  taskSubmissions: [],
  streak: 0,
  lastVisit: null
};

let state = { ...defaultState };
const listeners = [];

export function getState() {
  return state;
}

export function setState(updates) {
  state = { ...state, ...updates };
  persist();
  listeners.forEach(fn => fn(state));
}

export function subscribe(fn) {
  listeners.push(fn);
  return () => {
    const idx = listeners.indexOf(fn);
    if (idx > -1) listeners.splice(idx, 1);
  };
}

export function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      state = { ...defaultState, ...JSON.parse(saved) };
    }
  } catch {
    state = { ...defaultState };
  }
  // Update streak
  const today = new Date().toDateString();
  if (state.lastVisit !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (state.lastVisit === yesterday) {
      state.streak += 1;
    } else if (state.lastVisit && state.lastVisit !== today) {
      state.streak = 1;
    }
    state.lastVisit = today;
    persist();
  }
  return state;
}

export function resetState() {
  state = { ...defaultState };
  localStorage.removeItem(STORAGE_KEY);
  listeners.forEach(fn => fn(state));
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch { /* quota exceeded — silently fail */ }
}
