import { useRef, useEffect, useCallback } from 'react';

const BASE_SIZE = 24;
const EXPANSION = [72, 56, 42, 34, 28]; // distance 0, 1, 2, 3, 4 from hovered cell
const SHRINK_MIN = 16; // how small distant cells can get during stretch
const SHRINK_RADIUS = 12; // how many cells beyond expansion start shrinking
const LINE_COLOR = '#f0f0f0';

// Spring physics constants
const SPRING_STIFFNESS = 0.04; // lower = slower / longer transition
const SPRING_DAMPING = 0.82;   // <1 = bounce, lower = more bounce
const SETTLE_THRESHOLD = 0.15;
const VELOCITY_THRESHOLD = 0.05;

function getTargetSize(distance: number): number {
  // Cells within expansion range grow
  if (distance < EXPANSION.length) return EXPANSION[distance];
  // Cells beyond expansion range shrink (fabric stretch)
  const shrinkDist = distance - EXPANSION.length;
  if (shrinkDist < SHRINK_RADIUS) {
    const t = shrinkDist / SHRINK_RADIUS; // 0 = closest to expansion, 1 = far
    return SHRINK_MIN + (BASE_SIZE - SHRINK_MIN) * t;
  }
  return BASE_SIZE;
}

export function HeroGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const colWidthsRef = useRef<number[]>([]);
  const rowHeightsRef = useRef<number[]>([]);
  const colVelocitiesRef = useRef<number[]>([]);
  const rowVelocitiesRef = useRef<number[]>([]);
  const rafRef = useRef<number>(0);
  const isActiveRef = useRef(false);
  const sizeRef = useRef<{ w: number; h: number }>({ w: 0, h: 0 });

  const initSizes = useCallback((width: number, height: number) => {
    const cols = Math.ceil(width / BASE_SIZE) + EXPANSION.length * 2;
    const rows = Math.ceil(height / BASE_SIZE) + EXPANSION.length * 2;
    if (colWidthsRef.current.length !== cols) {
      colWidthsRef.current = new Array(cols).fill(BASE_SIZE);
      colVelocitiesRef.current = new Array(cols).fill(0);
    }
    if (rowHeightsRef.current.length !== rows) {
      rowHeightsRef.current = new Array(rows).fill(BASE_SIZE);
      rowVelocitiesRef.current = new Array(rows).fill(0);
    }
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = sizeRef.current.w;
    const h = sizeRef.current.h;
    const cols = colWidthsRef.current;
    const rows = rowHeightsRef.current;

    ctx.save();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = LINE_COLOR;
    ctx.lineWidth = 1;

    // Vertical lines
    let x = 0;
    for (let i = 0; i <= cols.length; i++) {
      if (x > w) break;
      ctx.beginPath();
      ctx.moveTo(Math.round(x) + 0.5, 0);
      ctx.lineTo(Math.round(x) + 0.5, h);
      ctx.stroke();
      if (i < cols.length) x += cols[i];
    }

    // Horizontal lines
    let y = 0;
    for (let i = 0; i <= rows.length; i++) {
      if (y > h) break;
      ctx.beginPath();
      ctx.moveTo(0, Math.round(y) + 0.5);
      ctx.lineTo(w, Math.round(y) + 0.5);
      ctx.stroke();
      if (i < rows.length) y += rows[i];
    }

    ctx.restore();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      sizeRef.current = { w, h };
      initSizes(w, h);
      draw();
    };
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas.parentElement!);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      if (!isActiveRef.current) {
        isActiveRef.current = true;
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current = null;
      if (!isActiveRef.current) {
        isActiveRef.current = true;
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    const animate = () => {
      const cols = colWidthsRef.current;
      const rows = rowHeightsRef.current;
      const colVel = colVelocitiesRef.current;
      const rowVel = rowVelocitiesRef.current;
      const mouse = mouseRef.current;

      // Find which cell the mouse is in
      let mouseCol = -1;
      let mouseRow = -1;
      if (mouse) {
        let accum = 0;
        for (let i = 0; i < cols.length; i++) {
          accum += cols[i];
          if (accum > mouse.x) { mouseCol = i; break; }
        }
        accum = 0;
        for (let i = 0; i < rows.length; i++) {
          accum += rows[i];
          if (accum > mouse.y) { mouseRow = i; break; }
        }
      }

      // Spring physics toward targets
      let needsUpdate = false;
      for (let i = 0; i < cols.length; i++) {
        const dist = mouseCol >= 0 ? Math.abs(i - mouseCol) : Infinity;
        const target = getTargetSize(dist);
        const force = (target - cols[i]) * SPRING_STIFFNESS;
        colVel[i] = (colVel[i] + force) * SPRING_DAMPING;
        cols[i] += colVel[i];
        if (Math.abs(cols[i] - target) > SETTLE_THRESHOLD || Math.abs(colVel[i]) > VELOCITY_THRESHOLD) {
          needsUpdate = true;
        } else {
          cols[i] = target;
          colVel[i] = 0;
        }
      }
      for (let i = 0; i < rows.length; i++) {
        const dist = mouseRow >= 0 ? Math.abs(i - mouseRow) : Infinity;
        const target = getTargetSize(dist);
        const force = (target - rows[i]) * SPRING_STIFFNESS;
        rowVel[i] = (rowVel[i] + force) * SPRING_DAMPING;
        rows[i] += rowVel[i];
        if (Math.abs(rows[i] - target) > SETTLE_THRESHOLD || Math.abs(rowVel[i]) > VELOCITY_THRESHOLD) {
          needsUpdate = true;
        } else {
          rows[i] = target;
          rowVel[i] = 0;
        }
      }

      draw();

      if (needsUpdate) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        isActiveRef.current = false;
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      resizeObserver.disconnect();
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [initSizes, draw]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ cursor: 'default' }}
    />
  );
}
