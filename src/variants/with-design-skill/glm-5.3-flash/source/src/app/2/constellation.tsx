"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  gold: boolean;
  ice: boolean;
};

const FRAGMENTS = [
  "resurfaced · “the map is the territory, slowly”",
  "from your note · “on attention”, mar 2021",
  "you asked, 647 days ago · “what is entropy doing here?”",
  "linked just now · “garden notes” ↔ “borges”",
  "from the archive · “call it a compost heap of ideas”",
];

export default function Constellation() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let nodes: Node[] = [];
    const pointer = { x: -9999, y: -9999 };
    let shoot: { x: number; y: number; vx: number; vy: number; life: number; text: string } | null =
      null;
    let nextShoot = 3000;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas || !ctx) return;
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(110, Math.max(45, Math.round((w * h) / 16000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: Math.random() < 0.85 ? 0.8 + Math.random() * 1.1 : 1.8 + Math.random() * 1.4,
        gold: Math.random() < 0.08,
        ice: !false && Math.random() < 0.06,
      }));
    }

    function draw(t: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      // edges
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 12100) {
            const alpha = (1 - Math.sqrt(d2) / 110) * 0.16;
            ctx.strokeStyle = `rgba(244,239,226,${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        // pointer links
        const pdx = a.x - pointer.x;
        const pdy = a.y - pointer.y;
        const pd2 = pdx * pdx + pdy * pdy;
        if (pd2 < 25600) {
          const alpha = (1 - Math.sqrt(pd2) / 160) * 0.5;
          ctx.strokeStyle = `rgba(233,190,98,${alpha})`;
          ctx.lineWidth = 0.9;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      }

      // nodes
      for (const n of nodes) {
        const glow = n.gold ? 0.9 : n.ice ? 0.75 : 0.65;
        ctx.fillStyle = n.gold
          ? `rgba(233,190,98,${glow})`
          : n.ice
            ? `rgba(143,199,222,${glow})`
            : `rgba(244,239,226,${glow})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // shooting star with resurfaced-note caption
      if (shoot) {
        shoot.life -= 16;
        shoot.x += shoot.vx;
        shoot.y += shoot.vy;
        const fade = Math.min(1, shoot.life / 1200);
        ctx.strokeStyle = `rgba(233,190,98,${0.7 * fade})`;
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.moveTo(shoot.x, shoot.y);
        ctx.lineTo(shoot.x - shoot.vx * 26, shoot.y - shoot.vy * 26);
        ctx.stroke();
        ctx.fillStyle = `rgba(244,239,226,${0.85 * fade})`;
        ctx.font = "11px 'Space Grotesk', sans-serif";
        ctx.fillText(shoot.text, Math.min(shoot.x + 14, w - 240), shoot.y - 10);
        if (shoot.life <= 0) shoot = null;
      } else if (t > nextShoot && !reduced) {
        const target = nodes[Math.floor(Math.random() * nodes.length)];
        if (target) {
          shoot = {
            x: target.x - 90,
            y: target.y - 60,
            vx: 1.6,
            vy: 1.05,
            life: 2600,
            text: FRAGMENTS[Math.floor(Math.random() * FRAGMENTS.length)],
          };
        }
        nextShoot = t + 6000 + Math.random() * 5000;
      }
    }

    function tick(t: number) {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = w + 20;
        if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        if (n.y > h + 20) n.y = -20;
      }
      draw(t);
      raf = requestAnimationFrame(tick);
    }

    function onMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    }
    function onLeave() {
      pointer.x = -9999;
      pointer.y = -9999;
    }
    function onVis() {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else if (!reduced) {
        raf = requestAnimationFrame(tick);
      }
    }

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVis);

    if (reduced) {
      draw(0); // single static frame
    } else {
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 h-full w-full"
      style={{ zIndex: 0 }}
    />
  );
}
