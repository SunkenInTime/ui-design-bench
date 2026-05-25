"use client";

import { useEffect, useRef } from "react";
import type { HeroVariantProps } from "./types";

const SAMPLE_STRIDE = 3;
const PARTICLE_SIZE = 2.5;
const FORCE_RADIUS = 90;
const FORCE_PEAK = 7;
const SPRING = 0.06;
const DAMPING = 0.82;

export function PixelDustVariant({ lines }: HeroVariantProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const measure = measureRef.current;
    if (!container || !canvas || !measure) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    type Particle = {
      ox: number;
      oy: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
    };
    let particles: Particle[] = [];
    let raf = 0;
    let w = 0;
    let h = 0;

    const ink = "#171717";

    function setup() {
      const rect = measure.getBoundingClientRect();
      const cRect = container.getBoundingClientRect();
      w = Math.ceil(rect.width);
      h = Math.ceil(rect.height);
      if (w === 0 || h === 0) return;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.style.left = `${rect.left - cRect.left}px`;
      canvas.style.top = `${rect.top - cRect.top}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const off = document.createElement("canvas");
      off.width = w;
      off.height = h;
      const octx = off.getContext("2d");
      if (!octx) return;

      const cs = getComputedStyle(measure);
      const lineSample = measure.querySelector(".hero-fx__line");
      const lineRect = lineSample?.getBoundingClientRect();
      const lineHeight =
        lineRect?.height ?? parseFloat(cs.fontSize) * 1.05;
      const fontSize = parseFloat(cs.fontSize);
      const family = cs.fontFamily;
      const weight = cs.fontWeight;

      octx.fillStyle = ink;
      octx.font = `${weight} ${fontSize}px ${family}`;
      octx.textBaseline = "alphabetic";
      const lineEls = Array.from(
        measure.querySelectorAll<HTMLElement>(".hero-fx__line"),
      );
      lineEls.forEach((lineEl) => {
        const lr = lineEl.getBoundingClientRect();
        const offsetX = lr.left - rect.left;
        const baseline = lr.top - rect.top + lineHeight * 0.82;
        octx.fillText(lineEl.textContent ?? "", offsetX, baseline);
      });
      // Fallback: if lineEls were empty, draw using `lines` prop directly.
      if (lineEls.length === 0) {
        lines.forEach((ln, i) => {
          octx.fillText(ln, 0, lineHeight * (i + 0.85));
        });
      }

      const img = octx.getImageData(0, 0, w, h);
      const data = img.data;
      const list: Particle[] = [];
      for (let y = 0; y < h; y += SAMPLE_STRIDE) {
        for (let x = 0; x < w; x += SAMPLE_STRIDE) {
          const idx = (y * w + x) * 4;
          if (data[idx + 3] > 90) {
            list.push({ ox: x, oy: y, x, y, vx: 0, vy: 0 });
          }
        }
      }
      particles = list;
    }
    setup();

    const ro = new ResizeObserver(setup);
    ro.observe(container);
    window.addEventListener("resize", setup);

    function tick() {
      const cur = cursorRef.current;
      const measureRect = measure.getBoundingClientRect();
      const lx = cur.x - measureRect.left;
      const ly = cur.y - measureRect.top;

      ctx!.clearRect(0, 0, w, h);
      ctx!.fillStyle = ink;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = p.x - lx;
        const dy = p.y - ly;
        const d = Math.hypot(dx, dy);
        if (d > 0 && d < FORCE_RADIUS) {
          const f = (1 - d / FORCE_RADIUS) ** 2 * FORCE_PEAK;
          p.vx += (dx / d) * f;
          p.vy += (dy / d) * f;
        }
        p.vx += (p.ox - p.x) * SPRING;
        p.vy += (p.oy - p.y) * SPRING;
        p.vx *= DAMPING;
        p.vy *= DAMPING;
        p.x += p.vx;
        p.y += p.vy;
        ctx!.fillRect(
          (p.x - PARTICLE_SIZE / 2) | 0,
          (p.y - PARTICLE_SIZE / 2) | 0,
          PARTICLE_SIZE,
          PARTICLE_SIZE,
        );
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
      window.removeEventListener("resize", setup);
      window.removeEventListener("pointermove", onMove);
    };
  }, [lines]);

  return (
    <div ref={containerRef} className="hero-fx hero-fx--pixel">
      <span ref={measureRef} className="hero-fx__measure" aria-hidden="true">
        {lines.map((line, li) => (
          <span key={li} className="hero-fx__line">
            {line}
          </span>
        ))}
      </span>
      <canvas
        ref={canvasRef}
        className="hero-fx__canvas"
        aria-hidden="true"
      />
    </div>
  );
}
