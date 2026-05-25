"use client";

import { useEffect, useRef } from "react";
import type { HeroVariantProps } from "./types";

const RADIUS = 150;
const STRENGTH = 26;
const STIFFNESS = 0.18;
const DAMPING = 0.78;

export function MagneticVariant({ lines }: HeroVariantProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const chars = Array.from(
      el.querySelectorAll<HTMLSpanElement>("[data-char]"),
    );
    const n = chars.length;
    if (n === 0) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    type P = { ox: number; oy: number; x: number; y: number; vx: number; vy: number };
    const pos: P[] = chars.map(() => ({
      ox: 0,
      oy: 0,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
    }));

    function recompute() {
      for (const c of chars) c.style.transform = "";
      for (let i = 0; i < n; i++) {
        const r = chars[i].getBoundingClientRect();
        pos[i].ox = r.left + r.width / 2;
        pos[i].oy = r.top + r.height / 2;
      }
      for (let i = 0; i < n; i++) {
        chars[i].style.transform = `translate3d(${pos[i].x.toFixed(2)}px, ${pos[i].y.toFixed(2)}px, 0)`;
      }
    }
    recompute();

    const ro = new ResizeObserver(recompute);
    ro.observe(el);
    window.addEventListener("scroll", recompute, { passive: true });
    window.addEventListener("resize", recompute);

    let raf = 0;
    function tick() {
      const cur = cursorRef.current;
      const k = reduceMotion ? 0.4 : 1;
      for (let i = 0; i < n; i++) {
        const p = pos[i];
        let tx = 0;
        let ty = 0;
        const dx = p.ox + p.x - cur.x;
        const dy = p.oy + p.y - cur.y;
        const d = Math.hypot(dx, dy);
        if (d > 0 && d < RADIUS) {
          const f = (1 - d / RADIUS) ** 2 * STRENGTH * k;
          tx = (dx / d) * f;
          ty = (dy / d) * f;
        }
        const ax = (tx - p.x) * STIFFNESS;
        const ay = (ty - p.y) * STIFFNESS;
        p.vx = (p.vx + ax) * DAMPING;
        p.vy = (p.vy + ay) * DAMPING;
        p.x += p.vx;
        p.y += p.vy;
        chars[i].style.transform = `translate3d(${p.x.toFixed(2)}px, ${p.y.toFixed(2)}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    function onMove(e: PointerEvent) {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    }
    window.addEventListener("pointermove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("scroll", recompute);
      window.removeEventListener("resize", recompute);
      window.removeEventListener("pointermove", onMove);
      for (const c of chars) c.style.transform = "";
    };
  }, []);

  return (
    <span ref={containerRef} className="hero-fx hero-fx--magnetic">
      {lines.map((line, li) => (
        <span key={li} className="hero-fx__line">
          {Array.from(line).map((ch, i) => (
            <span
              key={`${li}-${i}`}
              data-char
              className="hero-fx__char"
              aria-hidden="true"
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
