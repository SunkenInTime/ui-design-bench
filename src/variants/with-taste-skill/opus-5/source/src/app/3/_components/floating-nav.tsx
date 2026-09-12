"use client";

/*
  Floating nav pill. 56px tall, one line at every breakpoint.

  Two states, both of which pass WCAG AA on their own:
    over the hero  a near solid forest pill (90% forest) with bone labels and a
                   bone CTA. Opaque enough that the photograph underneath cannot
                   pull the label contrast down.
    past the hero  the frosted glass state: layered bone gradient, a 1px inner
                   highlight, an inset bottom shade and a tinted drop shadow.
                   Ink labels, forest CTA.

  Glassmorphism appears here and nowhere else on the page. It degrades to a solid
  `#f4f5f2` fill under `prefers-reduced-transparency: reduce`.

  The state flip is driven by Motion's `useScroll` plus `useMotionValueEvent`.
  There is no scroll listener anywhere: the only listener is a resize handler so
  the threshold tracks the hero height, and it cleans itself up.
*/

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { cta, nav, product } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import { PillButton } from "./ui";

const GLASS_CSS = `
.q-nav-glass {
  background: linear-gradient(135deg, rgba(244,245,242,0.88), rgba(233,234,231,0.74));
  border-color: rgba(255,255,255,0.62);
  backdrop-filter: blur(22px) saturate(140%);
  -webkit-backdrop-filter: blur(22px) saturate(140%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.85),
    inset 0 -1px 0 rgba(18,53,42,0.07),
    0 12px 36px rgba(18,53,42,0.12);
}
@media (prefers-reduced-transparency: reduce) {
  .q-nav-glass {
    background: #f4f5f2;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}
`;

export function FloatingNav() {
  const reduce = useReducedMotion();
  const threshold = useRef(600);
  const [past, setPast] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const measure = () => {
      threshold.current = Math.max(240, window.innerHeight * 0.78);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useMotionValueEvent(scrollY, "change", (value) => {
    const next = value > threshold.current;
    setPast((current) => (current === next ? current : next));
  });

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <style href="quiet-nav-glass" precedence="medium">
        {GLASS_CSS}
      </style>

      <nav
        aria-label="Primary"
        className={[
          "flex h-14 w-full max-w-[62rem] items-center gap-3 rounded-full border pl-5 pr-2",
          reduce
            ? ""
            : "transition-[background-color,border-color,box-shadow,color] duration-500 ease-out",
          past
            ? "q-nav-glass text-[#1c211e]"
            : "border-[#e9eae7]/25 bg-[#12352a]/90 text-[#e9eae7]",
        ].join(" ")}
      >
        <a
          href="#top"
          className="font-outfit text-[15px] font-medium tracking-tight"
        >
          {product.name}
        </a>

        <ul className="ml-auto hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[13px] underline-offset-[6px] decoration-2 decoration-[#c2761a] hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <PillButton
          href={`https://${product.domain}`}
          tone={past ? "forest" : "bone"}
          size="sm"
          className="ml-auto md:ml-0"
        >
          {cta.primary}
        </PillButton>
      </nav>
    </header>
  );
}
