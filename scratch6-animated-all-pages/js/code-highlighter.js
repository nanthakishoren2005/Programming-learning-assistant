// ============================================
// Code Highlighter — Prism utils, copy buttons
// ============================================

export function highlightAllCode() {
  if (typeof Prism !== 'undefined') {
    Prism.highlightAll();
  }
}

export function highlightElement(el) {
  if (typeof Prism !== 'undefined') {
    Prism.highlightAllUnder(el);
  }
}

export function wrapCodeLines(preElement) {
  const codeEl = preElement.querySelector('code');
  if (!codeEl) return;

  const html = codeEl.innerHTML;
  const lines = html.split('\n');
  codeEl.innerHTML = lines
    .map(line => `<span class="code-line">${line}</span>`)
    .join('\n');
}

export function animateCodeLines(container) {
  const lines = container.querySelectorAll('.code-line');
  if (lines.length === 0) return;

  anime({
    targets: lines,
    opacity: [0, 1],
    translateX: [-10, 0],
    delay: anime.stagger(60),
    duration: 300,
    easing: 'easeOutCubic'
  });
}

export function setupCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => copyCode(btn));
  });
}

export function copyCode(btn) {
  const wrap = btn.closest('.code-block-wrap');
  if (!wrap) return;

  const codeEl = wrap.querySelector('code');
  if (!codeEl) return;

  const text = codeEl.textContent;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'Copied ✓';
    btn.classList.add('copied');
    anime({
      targets: btn,
      scale: [1, 1.1, 1],
      duration: 300,
      easing: 'easeOutCubic'
    });
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.classList.remove('copied');
    }, 2000);
  }).catch(() => {
    btn.textContent = 'Failed';
    setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
  });
}

export function injectCopyButton(codeBlockWrap) {
  const header = codeBlockWrap.querySelector('.code-block-header');
  if (!header || header.querySelector('.copy-btn')) return;

  const btn = document.createElement('button');
  btn.className = 'copy-btn';
  btn.textContent = 'Copy';
  btn.addEventListener('click', () => copyCode(btn));
  header.appendChild(btn);
}
