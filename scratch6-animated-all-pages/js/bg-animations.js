// ============================================
// Advanced Coding Background Animations
// ============================================

const mouse = { x: null, y: null, radius: 150 };
const codeKeywords = [
  'def', 'class', 'import', 'async', 'await', 'const', 'let', 'export', 'function',
  'if', 'else', 'return', 'yield', 'lambda', '<div>', '<html>', 'flex', 'grid',
  'map', 'filter', 'reduce', '=>', 'null', 'undefined', 'true', 'false', '{ }', '</>', '[]'
];

const colors = {
  dark: {
    text: 'rgba(139, 92, 246, 0.4)',
    nodes: 'rgba(139, 92, 246, 0.15)',
    lines: 'rgba(139, 92, 246, 0.08)'
  },
  light: {
    text: 'rgba(79, 70, 229, 0.7)',
    nodes: 'rgba(79, 70, 229, 0.4)',
    lines: 'rgba(79, 70, 229, 0.3)'
  }
};

window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

/**
 * Injects a high-performance Canvas-based animation into .bg-anim-layer.
 */
export function spawnBgAnim(layerId) {
  const container = document.getElementById(layerId);
  if (!container || container.dataset.spawned) return;
  container.dataset.spawned = '1';

  const canvas = document.createElement('canvas');
  canvas.className = 'bg-canvas';
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  [1, 2, 3].forEach(n => {
    const orb = document.createElement('div');
    orb.className = `bg-orb bg-orb-${n}`;
    container.appendChild(orb);
  });

  let width, height;
  const particles = [];
  const streams = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initElements();
  }

  function initElements() {
    particles.length = 0;
    streams.length = 0;

    const nodeCount = Math.floor((width * height) / 25000);
    for (let i = 0; i < nodeCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1
      });
    }

    const fontSize = 14;
    const columns = Math.floor(width / (fontSize * 4));
    for (let i = 0; i < columns; i++) {
      streams.push({
        x: i * fontSize * 4,
        y: Math.random() * height,
        speed: Math.random() * 1.5 + 0.5,
        content: codeKeywords[Math.floor(Math.random() * codeKeywords.length)],
        opacity: Math.random() * 0.4 + 0.1
      });
    }
  }

  window.addEventListener('resize', resize);

  function draw() {
    // Optimization: only draw if the container's parent (screen) is active
    const screen = container.closest('.screen');
    if (screen && !screen.classList.contains('active')) {
      requestAnimationFrame(draw);
      return;
    }

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const themeColors = isDark ? colors.dark : colors.light;

    ctx.clearRect(0, 0, width, height);

    // Draw Code Streams
    ctx.font = '14px "Fira Code", monospace';
    streams.forEach(s => {
      ctx.fillStyle = themeColors.text;
      ctx.globalAlpha = s.opacity;
      ctx.fillText(s.content, s.x, s.y);

      s.y += s.speed;
      if (s.y > height + 50) {
        s.y = -50;
        s.x = Math.random() * width;
      }
    });

    // Draw Plexus
    ctx.globalAlpha = 1;
    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = themeColors.nodes;
      ctx.fill();

      if (mouse.x) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = themeColors.lines.replace('0.08', (0.15 * (1 - dist / mouse.radius)).toString());
          ctx.stroke();
        }
      }

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = themeColors.lines;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(draw);
  }

  resize();
  draw();
}

export function spawnBgAnims(layerIds) {
  layerIds.forEach(id => spawnBgAnim(id));
}
