"use client";

import { useEffect, useRef } from "react";

/* A deterministic map of "notes" (0..1 coordinate space) and the links
   between them — the product's thesis drawn as a night sky. */
const NOTES = [
  { x: 0.1, y: 0.24, label: "reading list", r: 2.6 },
  { x: 0.22, y: 0.62, label: "thesis ch. 3", r: 3.2 },
  { x: 0.34, y: 0.3, label: "memory, book", r: 2.4 },
  { x: 0.33, y: 0.88, label: "1:1 notes", r: 2.2 },
  { x: 0.5, y: 0.16, label: "api design", r: 2.8 },
  { x: 0.68, y: 0.62, label: "talk outline", r: 3.4 },
  { x: 0.63, y: 0.86, label: "recipes", r: 2.1 },
  { x: 0.68, y: 0.32, label: "side project", r: 3 },
  { x: 0.8, y: 0.14, label: "garden plan", r: 2.3 },
  { x: 0.84, y: 0.6, label: "quotes", r: 2.5 },
  { x: 0.92, y: 0.34, label: "trip ideas", r: 2.2 },
  { x: 0.16, y: 0.88, label: "meeting 03.24", r: 2.3 },
  { x: 0.46, y: 0.4, label: "dream journal", r: 2 },
  { x: 0.76, y: 0.44, label: "people", r: 2.4 },
];

const EDGES: Array<[number, number]> = [
  [0, 2],
  [1, 2],
  [1, 3],
  [1, 11],
  [2, 4],
  [4, 7],
  [5, 7],
  [5, 12],
  [5, 13],
  [7, 8],
  [7, 13],
  [9, 10],
  [9, 13],
  [6, 9],
  [3, 12],
  [2, 12],
];

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function Constellation({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const pointer = { x: -1e4, y: -1e4 };

    const rand = mulberry32(42);
    const stars = Array.from({ length: 170 }, () => ({
      x: rand(),
      y: rand(),
      r: rand() * 1.1 + 0.3,
      phase: rand() * Math.PI * 2,
      speed: 0.4 + rand() * 0.9,
    }));
    const drift = NOTES.map(() => ({
      phase: rand() * Math.PI * 2,
      amp: 4 + rand() * 5,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    let t = 0;
    const draw = (time: number) => {
      t = time;
      ctx.clearRect(0, 0, width, height);

      const pts = NOTES.map((n, i) => ({
        ...n,
        px:
          n.x * width +
          (reduced ? 0 : Math.cos(t * 0.3 + drift[i].phase) * drift[i].amp),
        py:
          n.y * height +
          (reduced
            ? 0
            : Math.sin(t * 0.24 + drift[i].phase * 1.3) * drift[i].amp),
      }));

      let hover = -1;
      pts.forEach((p, i) => {
        if (Math.hypot(p.px - pointer.x, p.py - pointer.y) < 46) hover = i;
      });
      canvas.style.cursor = hover >= 0 ? "pointer" : "default";

      const lit = new Set<number>();
      if (hover >= 0) {
        lit.add(hover);
        for (const [a, b] of EDGES) {
          if (a === hover) lit.add(b);
          if (b === hover) lit.add(a);
        }
      }

      // background stars
      for (const s of stars) {
        ctx.globalAlpha = reduced
          ? 0.45
          : 0.22 + 0.5 * Math.abs(Math.sin(t * s.speed + s.phase));
        ctx.fillStyle = "#f2efe6";
        ctx.beginPath();
        ctx.arc(s.x * width, s.y * height, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // link lines
      for (const [a, b] of EDGES) {
        const active = hover >= 0 && (a === hover || b === hover);
        ctx.strokeStyle = active
          ? "rgba(240, 179, 94, 0.95)"
          : "rgba(139, 124, 246, 0.3)";
        ctx.lineWidth = active ? 1.5 : 1;
        ctx.beginPath();
        ctx.moveTo(pts[a].px, pts[a].py);
        ctx.lineTo(pts[b].px, pts[b].py);
        ctx.stroke();
      }

      // note stars + labels
      pts.forEach((p, i) => {
        const dim = hover >= 0 && !lit.has(i);
        const isHover = i === hover;

        if (!dim) {
          const glow = ctx.createRadialGradient(
            p.px,
            p.py,
            0,
            p.px,
            p.py,
            p.r * 7,
          );
          glow.addColorStop(
            0,
            isHover ? "rgba(240, 179, 94, 0.4)" : "rgba(139, 124, 246, 0.28)",
          );
          glow.addColorStop(1, "rgba(139, 124, 246, 0)");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(p.px, p.py, p.r * 7, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = dim
          ? "rgba(154, 160, 200, 0.3)"
          : isHover
            ? "#f0b35e"
            : "#f2efe6";
        ctx.beginPath();
        ctx.arc(p.px, p.py, isHover ? p.r + 1.6 : p.r, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = "11px 'Space Mono', ui-monospace, monospace";
        ctx.fillStyle = dim
          ? "rgba(154, 160, 200, 0.22)"
          : isHover
            ? "rgba(240, 179, 94, 0.95)"
            : "rgba(242, 239, 230, 0.66)";
        ctx.fillText(p.label, p.px + 10, p.py + 4);
      });
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      if (reduced) draw(0);
    };
    const onLeave = () => {
      pointer.x = -1e4;
      pointer.y = -1e4;
      if (reduced) draw(0);
    };
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    const loop = (ms: number) => {
      draw(ms / 1000);
      raf = requestAnimationFrame(loop);
    };
    if (reduced) {
      draw(0);
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      role="presentation"
    />
  );
}
