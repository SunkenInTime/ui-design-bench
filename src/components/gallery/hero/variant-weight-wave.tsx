"use client";

import { useEffect, useRef } from "react";
import type { HeroVariantProps } from "./types";

const BASE_WEIGHT = 420;
const MIN_WEIGHT = 220;
const MAX_WEIGHT = 820;
const FALLOFF = 110;
const PEAK_BOOST = 380;
const IDLE_AMPLITUDE = 70;

export function WeightWaveVariant({ lines }: HeroVariantProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

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

    let centers: { x: number; y: number }[] = [];
    const targets = new Array<number>(n).fill(BASE_WEIGHT);
    const currents = new Array<number>(n).fill(BASE_WEIGHT);

    function recompute() {
      centers = chars.map((c) => {
        const r = c.getBoundingClientRect();
        return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      });
    }
    recompute();

    const ro = new ResizeObserver(recompute);
    ro.observe(el);
    window.addEventListener("scroll", recompute, { passive: true });
    window.addEventListener("resize", recompute);

    let raf = 0;
    const t0 = performance.now();

    function tick(now: number) {
      const t = (now - t0) / 1000;
      const cursor = cursorRef.current;

      for (let i = 0; i < n; i++) {
        const idle = reduceMotion
          ? 0
          : Math.sin(t * 0.85 - i * 0.42) * IDLE_AMPLITUDE;
        let target = BASE_WEIGHT + idle;

        if (cursor.active) {
          const c = centers[i];
          const dx = c.x - cursor.x;
          const dy = c.y - cursor.y;
          const dist = Math.hypot(dx, dy);
          const influence = Math.exp(-(dist * dist) / (2 * FALLOFF * FALLOFF));
          target += influence * PEAK_BOOST;
        }

        targets[i] = Math.max(MIN_WEIGHT, Math.min(MAX_WEIGHT, target));
      }

      for (let i = 0; i < n; i++) {
        const next = currents[i] + (targets[i] - currents[i]) * 0.2;
        currents[i] = next;
        chars[i].style.fontVariationSettings = `"wght" ${next.toFixed(0)}`;
      }

      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    function onMove(e: PointerEvent) {
      cursorRef.current = { x: e.clientX, y: e.clientY, active: true };
    }
    function onLeave() {
      cursorRef.current = { ...cursorRef.current, active: false };
    }
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("scroll", recompute);
      window.removeEventListener("resize", recompute);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      for (const c of chars) {
        c.style.fontVariationSettings = "";
      }
    };
  }, []);

  return (
    <span ref={containerRef} className="hero-fx hero-fx--wave">
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
