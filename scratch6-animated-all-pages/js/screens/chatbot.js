// ============================================
// Screen 9 — AI Chatbot (Gemini 2.5 Flash)
// ============================================
import { getState } from '../state.js';
import { highlightElement } from '../code-highlighter.js';
import { spawnBgAnim } from '../bg-animations.js';
import { api } from '../api.js';


// Store references for cleanup
let sendHandler = null;
let keyHandler = null;
let chipHandlers = [];

export function init() {
  spawnBgAnim('chatbot-bg-anim');
  // Clean up previous listeners first to prevent duplicates
  cleanup();

  const lang = getState().selectedLang || 'python';
  const messagesEl = document.getElementById('chat-messages');
  const inputEl = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');
  const starterChips = document.querySelector('.starter-chips');

  // Clear messages
  messagesEl.innerHTML = '';
  if (starterChips) starterChips.style.display = 'flex';

  // Welcome message
  addBotMessage(messagesEl, `👋 Hi${getState().userName ? ', ' + getState().userName : ''}! I'm your **${lang.toUpperCase()} tutor** powered by AI. Ask me anything about programming, or tap a suggestion below to get started.\n\n💡 I can help with **Python**, **HTML**, **CSS**, and more!`, lang);

  // Starter chips — store handlers for cleanup
  chipHandlers = [];
  document.querySelectorAll('.starter-chips .chip').forEach(chip => {
    const handler = () => {
      const text = chip.textContent;
      sendMessage(text, messagesEl, lang);
      hideSuggestions(starterChips);
    };
    chip.addEventListener('click', handler);
    chipHandlers.push({ el: chip, handler });
  });

  // Send handler
  sendHandler = () => {
    const text = inputEl.value.trim();
    if (!text) return;
    inputEl.value = '';
    sendMessage(text, messagesEl, lang);
    hideSuggestions(starterChips);
  };

  keyHandler = (e) => {
    if (e.key === 'Enter') sendHandler();
  };

  sendBtn?.addEventListener('click', sendHandler);
  inputEl?.addEventListener('keydown', keyHandler);
}

function hideSuggestions(el) {
  if (el) {
    el.style.display = 'none';
  }
}

async function sendMessage(text, messagesEl, lang) {
  // User message
  const userMsg = document.createElement('div');
  userMsg.className = 'chat-msg user';
  userMsg.textContent = text;
  messagesEl.appendChild(userMsg);
  messagesEl.scrollTop = messagesEl.scrollHeight;

  // Show typing indicator
  const typingEl = document.createElement('div');
  typingEl.className = 'chat-msg bot typing-indicator';
  typingEl.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
  messagesEl.appendChild(typingEl);
  messagesEl.scrollTop = messagesEl.scrollHeight;

  // Disable input while waiting
  const inputEl = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');
  if (inputEl) inputEl.disabled = true;
  if (sendBtn) sendBtn.disabled = true;

  try {
    const data = await api.ask(text, lang);

    // Remove typing indicator
    typingEl.remove();

    addBotMessage(messagesEl, data.response, lang);
  } catch (err) {
    // Remove typing indicator
    typingEl.remove();
    addBotMessage(messagesEl, '⚠️ Could not connect to AI service. Make sure the backend server is running.', lang);
  } finally {
    // Re-enable input
    if (inputEl) inputEl.disabled = false;
    if (sendBtn) sendBtn.disabled = false;
    inputEl?.focus();
  }
}

function addBotMessage(container, text, lang) {
  const msg = document.createElement('div');
  msg.className = 'chat-msg bot';

  // Parse markdown-ish code blocks
  const html = text
    .replace(/```(\w+)?\n([\s\S]*?)```/g, (_, language, code) => {
      const l = language || (lang === 'html' ? 'markup' : lang);
      return `<div class="code-block-wrap" style="margin:0.5rem 0;"><div class="code-block-header"><span class="lang-label">${(language || lang).toUpperCase()}</span><button class="copy-btn" style="font-size:0.7rem;">Copy</button></div><pre><code class="language-${l}">${escapeHtml(code.trim())}</code></pre></div>`;
    })
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');

  msg.innerHTML = html;
  container.appendChild(msg);

  // Highlight code blocks
  highlightElement(msg);

  // Add copy listeners
  msg.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const codeEl = btn.closest('.code-block-wrap').querySelector('code');
      navigator.clipboard.writeText(codeEl.textContent).then(() => {
        btn.textContent = 'Copied ✓';
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
      });
    });
  });

  container.scrollTop = container.scrollHeight;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function cleanup() {
  // Remove previous event listeners to prevent duplicate messages
  const sendBtn = document.getElementById('chat-send');
  const inputEl = document.getElementById('chat-input');

  if (sendHandler) {
    sendBtn?.removeEventListener('click', sendHandler);
    sendHandler = null;
  }
  if (keyHandler) {
    inputEl?.removeEventListener('keydown', keyHandler);
    keyHandler = null;
  }
  chipHandlers.forEach(({ el, handler }) => {
    el.removeEventListener('click', handler);
  });
  chipHandlers = [];
}
