"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/variants/with-design-skill/ox-alpha/source/src/components/use-reduced-motion";

export function Dish({
  variant,
  label,
}: {
  variant: "alpha" | "beta" | "gamma" | "wild" | "hero";
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
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
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  const grown = reduced || observed;

  return (
    <div
      ref={ref}
      role="img"
      aria-label={label}
      className={`dish dish-${variant}${grown ? " grown" : ""}`}
    />
  );
}
