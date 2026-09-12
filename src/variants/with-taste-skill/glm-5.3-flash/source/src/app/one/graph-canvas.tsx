"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  hub: boolean;
};

type Pulse = {
  ax: number;
  ay: number;
  bx: number;
  by: number;
  t: number;
};

export function GraphCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    const pulses: Pulse[] = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const LINK_DIST = 150;

    const seed = () => {
      const count = Math.max(18, Math.floor((width * height) / 26000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        hub: Math.random() < 0.16,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      if (reduce) draw();
    };

    const neighbors = () => {
      const pairs: [Node, Node][] = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          if (Math.hypot(dx, dy) < LINK_DIST) pairs.push([nodes[i], nodes[j]]);
        }
      }
      return pairs;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const [a, b] of neighbors()) {
        const alpha =
          (1 - Math.hypot(a.x - b.x, a.y - b.y) / LINK_DIST) * 0.35 + 0.06;
        ctx.strokeStyle = `rgba(148, 163, 184, ${alpha.toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
      for (const p of pulses) {
        ctx.strokeStyle = "rgba(67, 217, 163, 0.9)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(p.ax, p.ay);
        ctx.lineTo(
          p.ax + (p.bx - p.ax) * p.t,
          p.ay + (p.by - p.ay) * p.t
        );
        ctx.stroke();
        ctx.fillStyle = "rgba(67, 217, 163, 1)";
        ctx.beginPath();
        ctx.arc(p.bx, p.by, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
      for (const n of nodes) {
        ctx.fillStyle = n.hub
          ? "rgba(67, 217, 163, 0.95)"
          : "rgba(203, 213, 225, 0.8)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.hub ? 4 : 2.2, 0, Math.PI * 2);
        ctx.fill();
        if (n.hub) {
          ctx.strokeStyle = "rgba(67, 217, 163, 0.25)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 9, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    };

    const step = () => {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;
      }
      for (let i = pulses.length - 1; i >= 0; i--) {
        pulses[i].t += 0.03;
        if (pulses[i].t >= 1) pulses.splice(i, 1);
      }
      if (pulses.length < 4 && Math.random() < 0.05 && nodes.length > 1) {
        const a = nodes[Math.floor(Math.random() * nodes.length)];
        const b = nodes[Math.floor(Math.random() * nodes.length)];
        if (
          a !== b &&
          Math.hypot(a.x - b.x, a.y - b.y) < LINK_DIST
        ) {
          pulses.push({ ax: a.x, ay: a.y, bx: b.x, by: b.y, t: 0 });
        }
      }
      draw();
      raf = requestAnimationFrame(step);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    if (reduce) {
      draw();
    } else {
      raf = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [reduce]);

  return (
    <canvas
      ref={ref}
      className="h-full w-full"
      role="img"
      aria-label="Animated network of connected notes"
    />
  );
}
