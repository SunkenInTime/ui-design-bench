"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/variants/with-design-skill/glm-5.3-flash/source/src/components/use-reduced-motion";

function useRevealed(threshold = 0.6) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const [observed, setObserved] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setObserved(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced, threshold]);

  return { ref, on: reduced || observed };
}

export function Mark({
  children,
  color = "yellow",
}: {
  children: ReactNode;
  color?: "yellow" | "pink";
}) {
  const { ref, on } = useRevealed();

  return (
    <span ref={ref} className={`mark mark-${color}${on ? " on" : ""}`}>
      {children}
    </span>
  );
}

export function Underline({ children }: { children: ReactNode }) {
  const { ref, on } = useRevealed();

  return (
    <span ref={ref} className={`ballpoint${on ? " on" : ""}`}>
      {children}
      <svg
        viewBox="0 0 300 14"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="squiggle"
      >
        <path d="M3 9 C 40 2, 70 13, 105 8 S 170 3, 205 9 S 270 12, 297 6" />
      </svg>
    </span>
  );
}
