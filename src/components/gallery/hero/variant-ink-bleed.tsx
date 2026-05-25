"use client";

import { useEffect, useId, useRef } from "react";
import type { HeroVariantProps } from "./types";

export function InkBleedVariant({ lines }: HeroVariantProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const turbRef = useRef<SVGFETurbulenceElement>(null);
  const dispRef = useRef<SVGFEDisplacementMapElement>(null);
  const cursorRef = useRef({ dist: 9999, dirX: 0, dirY: 0 });
  const filterId = `hero-ink-${useId().replace(/:/g, "")}`;

  useEffect(() => {
    const el = containerRef.current;
    const turb = turbRef.current;
    const disp = dispRef.current;
    if (!el || !turb || !disp) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let raf = 0;
    const t0 = performance.now();
    let scale = 2;
    let seedT = 0;

    function tick(now: number) {
      const t = (now - t0) / 1000;

      const cursorDist = cursorRef.current.dist;
      const targetScale =
        cursorDist < 320
          ? 2 + (1 - cursorDist / 320) ** 1.5 * 14
          : 2;
      scale += (targetScale - scale) * 0.16;

      seedT = reduceMotion ? 1 : (seedT + 0.18) % 9999;

      const fxBase = 0.011;
      const fyBase = 0.019;
      const fx = reduceMotion
        ? fxBase
        : fxBase + Math.sin(t * 0.32) * 0.0035;
      const fy = reduceMotion
        ? fyBase
        : fyBase + Math.cos(t * 0.27) * 0.0045;

      turb.setAttribute("seed", seedT.toFixed(1));
      turb.setAttribute("baseFrequency", `${fx.toFixed(4)} ${fy.toFixed(4)}`);
      disp.setAttribute("scale", scale.toFixed(2));

      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    function onMove(e: PointerEvent) {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const d = Math.hypot(dx, dy);
      cursorRef.current = {
        dist: d,
        dirX: d > 0 ? dx / d : 0,
        dirY: d > 0 ? dy / d : 0,
      };
    }
    function onLeave() {
      cursorRef.current = { dist: 9999, dirX: 0, dirY: 0 };
    }
    window.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <span
      ref={containerRef}
      className="hero-fx hero-fx--ink"
      style={{ filter: `url(#${filterId})` }}
    >
      <svg
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
        style={{ position: "absolute" }}
      >
        <defs>
          <filter
            id={filterId}
            x="-15%"
            y="-15%"
            width="130%"
            height="130%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              ref={turbRef}
              type="fractalNoise"
              baseFrequency="0.011 0.019"
              numOctaves="2"
              seed="1"
              result="noise"
            />
            <feDisplacementMap
              ref={dispRef}
              in="SourceGraphic"
              in2="noise"
              scale="2"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      {lines.map((line, li) => (
        <span key={li} className="hero-fx__line" aria-hidden="true">
          {line}
        </span>
      ))}
    </span>
  );
}
