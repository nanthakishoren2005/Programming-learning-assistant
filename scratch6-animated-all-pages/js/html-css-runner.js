// ============================================
// HTML/CSS Runner — compile & preview web code
// ============================================

/**
 * Detect whether code is pure CSS (no HTML tags).
 * Heuristic: if code has no '<' character and contains
 * at least one '{', treat it as CSS-only.
 */
function isPureCSS(code) {
  const trimmed = code.trim();
  return !trimmed.includes('<') && trimmed.includes('{');
}

/**
 * Detect whether code is a full HTML document (has <!DOCTYPE or <html).
 */
function isFullDocument(code) {
  const lower = code.trim().toLowerCase();
  return lower.startsWith('<!doctype') || lower.startsWith('<html');
}

/**
 * Wrap a code fragment inside a modern HTML boilerplate so
 * the preview iframe looks polished even for tiny snippets.
 */
function wrapInBoilerplate(bodyContent, extraCSS = '') {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <style>
    /* ---- Reset & base ---- */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
      line-height: 1.6;
      color: #1e293b;
      background: #ffffff;
      padding: 20px;
      min-height: 100vh;
    }
    img { max-width: 100%; display: block; }
    a { color: #6366f1; }
    h1,h2,h3,h4,h5,h6 { line-height: 1.3; margin-bottom: 0.5em; }
    p { margin-bottom: 0.75em; }
    ${extraCSS}
  </style>
</head>
<body>
${bodyContent}
</body>
</html>`;
}

/**
 * Build the final document string for the iframe preview.
 *
 * @param {string} code   — The user's HTML or CSS code
 * @param {string} lang   — 'html' | 'css'
 * @returns {string}        A complete HTML document string
 */
export function compileHtmlCss(code, lang = 'html') {
  if (!code || !code.trim()) {
    return wrapInBoilerplate(
      '<p style="color:#94a3b8;font-style:italic;">Write some code and click <b>Run</b> to see the result here.</p>'
    );
  }

  // Full document → pass through as-is
  if (isFullDocument(code)) {
    return code;
  }

  // Pure CSS → wrap in demo markup so users can see the styles applied
  if (lang === 'css' || isPureCSS(code)) {
    const demoHTML = `
      <h1>Hello, CSS!</h1>
      <p>This is a preview paragraph. Your styles are applied below.</p>
      <div class="box">Box element</div>
      <button>Button</button>
      <ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>
      <a href="#">Sample link</a>
    `;
    return wrapInBoilerplate(demoHTML, code);
  }

  // JavaScript → wrap in demo HTML and inject script with console.log capture
  if (lang === 'javascript') {
    const demoHTML = `
      <h2 id="title">JavaScript Sandbox</h2>
      <p>Results from console.log or DOM manipulation will appear below:</p>
      <button id="myBtn" style="padding:8px 16px; margin-bottom:12px; cursor:pointer;">Click Me</button>
      <div id="js-console" style="margin-top: 10px; font-family: monospace;"></div>
      <script>
        (function() {
          const consoleContainer = document.getElementById('js-console');
          const oldLog = console.log;
          console.log = function(...args) {
            const msg = args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ');
            const p = document.createElement('div');
            p.textContent = '> ' + msg;
            p.style.background = '#f1f5f9';
            p.style.color = '#0f172a';
            p.style.padding = '8px';
            p.style.borderRadius = '4px';
            p.style.marginBottom = '4px';
            p.style.borderLeft = '3px solid #6366f1';
            consoleContainer.appendChild(p);
            oldLog.apply(console, args);
          };
          window.onerror = function(msg, url, line) {
            const p = document.createElement('div');
            p.textContent = 'Error: ' + msg + ' (Line ' + line + ')';
            p.style.color = '#ef4444';
            p.style.padding = '8px';
            consoleContainer.appendChild(p);
          };
        })();
      </script>
      <script>
        try {
          ${code}
        } catch(e) {
          console.error(e);
          const consoleContainer = document.getElementById('js-console');
          const p = document.createElement('div');
          p.textContent = 'Exception: ' + e.message;
          p.style.color = '#ef4444';
          p.style.padding = '8px';
          consoleContainer.appendChild(p);
        }
      </script>
    `;
    return wrapInBoilerplate(demoHTML);
  }

  // HTML fragment → wrap in boilerplate
  return wrapInBoilerplate(code);
}

/**
 * Render compiled HTML/CSS inside a sandboxed iframe.
 *
 * @param {string}      code      — Raw user code
 * @param {HTMLIFrameElement} iframeEl — Target iframe
 * @param {string}      lang      — 'html' | 'css'
 * @returns {{ success: boolean, error: string|null }}
 */
export function runHtmlCss(code, iframeEl, lang = 'html') {
  if (!iframeEl) {
    return { success: false, error: 'Preview iframe not found.' };
  }

  try {
    const compiled = compileHtmlCss(code, lang);
    iframeEl.srcdoc = compiled;
    iframeEl.style.display = 'block';
    return { success: true, error: null };
  } catch (err) {
    return { success: false, error: err.message || 'Unknown error compiling HTML/CSS.' };
  }
}
