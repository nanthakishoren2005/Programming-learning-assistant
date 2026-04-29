// ============================================
// Pyodide Runner — Python code execution
// ============================================

let pyodide = null;
let loading = false;
let loadPromise = null;

// Clean error message — extract correct line number from stack, and actual error from message
function cleanErrorMessage(errorObj) {
  const stack = errorObj.stack || "";
  const message = errorObj.message || "";

  // ✅ Extract correct line number from stack
  const lineMatch = stack.match(/File "<exec>", line (\d+)/);
  const lineNumber = lineMatch ? lineMatch[1] : null;

  // ✅ Extract real Python error (get last non-empty line from message)
  const lines = message.split("\n").filter(line => line.trim().length > 0);
  const errorLine = lines.length > 0 ? lines[lines.length - 1] : message;

  // Final output
  let finalOutput = "";
  if (lineNumber) {
    finalOutput = `Line ${lineNumber}: ${errorLine}`;
  } else {
    finalOutput = errorLine;
  }

  return finalOutput;
}

export async function initPyodide() {
  if (pyodide) return pyodide;
  if (loadPromise) return loadPromise;

  loading = true;
  loadPromise = new Promise(async (resolve, reject) => {
    try {
      // loadPyodide is available globally from CDN
      pyodide = await loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/'
      });
      loading = false;
      resolve(pyodide);
    } catch (err) {
      loading = false;
      reject(err);
    }
  });
  return loadPromise;
}

export async function runPython(code) {
  try {
    if (!pyodide) {
      await initPyodide();
    }

    // Capture stdout
    pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
    `);

    await pyodide.runPythonAsync(code);

    const stdout = pyodide.runPython('sys.stdout.getvalue()');

    // Reset stdout
    pyodide.runPython('sys.stdout = sys.__stdout__');

    return {
      output: stdout || '✓ Ran successfully (no output)',
      error: null
    };
  } catch (err) {
    return {
      output: null,
      error: cleanErrorMessage(err)
    };
  }
}

export function isLoading() {
  return loading;
}

export function isReady() {
  return pyodide !== null;
}
