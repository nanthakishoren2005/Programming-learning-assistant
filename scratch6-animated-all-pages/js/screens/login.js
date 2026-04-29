// ============================================
// Login / Sign Up Screen — Lottie-Animated
// ============================================
import { navigateTo } from '../router.js';
import { getState, setState } from '../state.js';
import { spawnBgAnim } from '../bg-animations.js';
import { api } from '../api.js';

let cleanupFns = [];

// ── Helpers ─────────────────────────────────────────────────────
function isValidEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

function showError(msg) {
  const el = document.getElementById('login-error');
  if (!el) return;
  el.textContent = msg;
  el.classList.remove('la-shake');
  void el.offsetWidth;
  el.classList.add('la-shake');
}

function addRipple(btn, ev) {
  const r    = document.createElement('span');
  r.className = 'la-ripple';
  const rect = btn.getBoundingClientRect();
  r.style.left = (ev.clientX - rect.left - 4) + 'px';
  r.style.top  = (ev.clientY - rect.top  - 4) + 'px';
  btn.appendChild(r);
  setTimeout(() => r.remove(), 700);
}

function triggerSuccess(name) {
  const bar = document.getElementById('la-progress');
  if (bar) bar.classList.add('active');
  setTimeout(() => {
    const overlay  = document.getElementById('la-success');
    const nameEl   = document.getElementById('la-success-name');
    if (nameEl)  nameEl.textContent = `Welcome, ${name}!`;
    if (overlay) overlay.classList.add('show');
  }, 700);
}

// ── Particles ────────────────────────────────────────────────────
function initBackground() {
  spawnBgAnim('la-particle-layer');
}

// ── Tab switching ────────────────────────────────────────────────
function switchTab(tab) {
  const isLogin = tab === 'login';
  document.getElementById('login-fields').style.display  = isLogin ? 'block' : 'none';
  document.getElementById('signup-fields').style.display = isLogin ? 'none'  : 'block';
  document.getElementById('login-title').textContent     = isLogin ? 'Welcome'              : 'Join for free';
  document.getElementById('login-sub').textContent       = isLogin ? 'Sign in to continue your journey' : 'Start learning today';
  document.getElementById('login-error').textContent     = '';
  document.getElementById('la-tab-login')?.classList.toggle('active',  isLogin);
  document.getElementById('la-tab-signup')?.classList.toggle('active', !isLogin);
  restaggerFields();
}

function restaggerFields() {
  document.querySelectorAll('#login-fields .login-input-box, #signup-fields .login-input-box')
    .forEach(b => { b.style.animation = 'none'; void b.offsetWidth; b.style.animation = ''; });
}

// ── Setup ────────────────────────────────────────────────────────
function setupTabs() {
  const tl = document.getElementById('la-tab-login');
  const ts = document.getElementById('la-tab-signup');
  const onLogin  = () => switchTab('login');
  const onSignup = () => switchTab('signup');
  tl?.addEventListener('click', onLogin);
  ts?.addEventListener('click', onSignup);
  cleanupFns.push(() => {
    tl?.removeEventListener('click', onLogin);
    ts?.removeEventListener('click', onSignup);
  });
}

function setupToggle() {
  const ss = document.getElementById('show-signup');
  const sl = document.getElementById('show-login');
  const goS = () => switchTab('signup');
  const goL = () => switchTab('login');
  ss?.addEventListener('click', goS);
  sl?.addEventListener('click', goL);
  cleanupFns.push(() => {
    ss?.removeEventListener('click', goS);
    sl?.removeEventListener('click', goL);
  });
}

function setupPasswordToggle() {
  const eye  = document.getElementById('login-eye');
  const pass = document.getElementById('login-password');
  const toggle = () => {
    if (!pass) return;
    pass.type = pass.type === 'password' ? 'text' : 'password';
    eye?.classList.toggle('fa-eye');
    eye?.classList.toggle('fa-eye-slash');
  };
  eye?.addEventListener('click', toggle);
  cleanupFns.push(() => eye?.removeEventListener('click', toggle));
}

function setupFormHandlers() {
  const loginBtn  = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupBtn');


  // LOGIN HANDLER (calls backend)
  const handleLogin = async (ev) => {
    addRipple(loginBtn, ev);
    const email = document.getElementById('login-email')?.value.trim();
    const pass  = document.getElementById('login-password')?.value.trim();
    if (!email || !pass)       { showError('Please fill all fields');                  return; }
    if (!isValidEmail(email))  { showError('Please use a valid email address');        return; }
    if (pass.length < 4)       { showError('Password must be at least 4 characters'); return; }

    loginBtn.textContent = 'Signing in…';
    loginBtn.disabled    = true;
    try {
      const data = await api.login(email, pass);
      // Save JWT token
      localStorage.setItem('token', data.access_token);
      // Save user state
      const cur = getState();
      setState({ isLoggedIn:true, email,
        userName:  cur.userName  || email.split('@')[0],
        firstName: cur.firstName || email.split('@')[0],
        lastName:  cur.lastName  || '' });
      loginBtn.textContent = 'Sign In';
      loginBtn.disabled    = false;
      triggerSuccess(email.split('@')[0]);
      setTimeout(() => navigateTo('#welcome'), 1500);
    } catch (err) {
      showError(err.message === 'Failed to fetch' ? 'Cannot connect to server. Make sure backend is running.' : err.message);
      loginBtn.textContent = 'Sign In';
      loginBtn.disabled    = false;
    }
  };

  // SIGNUP HANDLER (calls backend)
  const handleSignup = async (ev) => {
    addRipple(signupBtn, ev);
    const firstName = document.getElementById('signup-firstname')?.value.trim();
    const lastName  = document.getElementById('signup-lastname')?.value.trim();
    const email     = document.getElementById('signup-email')?.value.trim();
    const username  = document.getElementById('signup-username')?.value.trim();
    const password  = document.getElementById('signup-password')?.value.trim();
    if (!firstName||!lastName||!email||!username||!password) { showError('Please fill all fields');                  return; }
    if (!isValidEmail(email))                                 { showError('Please use a valid email address');        return; }
    if (password.length < 4)                                  { showError('Password must be at least 4 characters'); return; }

    signupBtn.textContent = 'Creating account…';
    signupBtn.disabled    = true;
    try {
      const data = await api.signup(username, email, password);
      // Optionally, auto-login after signup
      setState({ isLoggedIn:true, userName:username, firstName, lastName, email });
      signupBtn.textContent = 'Create Account';
      signupBtn.disabled    = false;
      triggerSuccess(firstName);
      setTimeout(() => navigateTo('#welcome'), 1500);
    } catch (err) {
      showError(err.message === 'Failed to fetch' ? 'Cannot connect to server. Make sure backend is running.' : err.message);
      signupBtn.textContent = 'Create Account';
      signupBtn.disabled    = false;
    }
  };

  loginBtn?.addEventListener('click',  handleLogin);
  signupBtn?.addEventListener('click', handleSignup);
  cleanupFns.push(() => {
    loginBtn?.removeEventListener('click',  handleLogin);
    signupBtn?.removeEventListener('click', handleSignup);
  });
}

function setupEnterKey() {
  const handler = (e) => {
    if (e.key !== 'Enter') return;
    const lf = document.getElementById('login-fields');
    if (lf?.style.display !== 'none') document.getElementById('loginBtn')?.click();
    else document.getElementById('signupBtn')?.click();
  };
  document.addEventListener('keydown', handler);
  cleanupFns.push(() => document.removeEventListener('keydown', handler));
}

// ── Public API ───────────────────────────────────────────────────
export function init() {
  // Reset to login view
  document.getElementById('login-fields').style.display  = 'block';
  document.getElementById('signup-fields').style.display = 'none';
  document.getElementById('login-title').textContent     = 'Welcome';
  document.getElementById('login-sub').textContent       = 'Sign in to continue your journey';
  document.getElementById('login-error').textContent     = '';
  document.querySelectorAll('#login-screen input').forEach(i => i.value = '');

  // Reset UI state
  document.getElementById('la-tab-login')?.classList.add('active');
  document.getElementById('la-tab-signup')?.classList.remove('active');
  const prog = document.getElementById('la-progress');
  if (prog) prog.classList.remove('active');
  const succ = document.getElementById('la-success');
  if (succ) succ.classList.remove('show');

  initBackground();
  setupTabs();
  setupToggle();
  setupFormHandlers();
  setupPasswordToggle();
  setupEnterKey();
  restaggerFields();

  // Card entrance re-trigger
  const card = document.querySelector('.login-card');
  if (card) { card.style.animation = 'none'; void card.offsetWidth; card.style.animation = ''; }
}

export function cleanup() {
  cleanupFns.forEach(fn => fn());
  cleanupFns = [];
}
