"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cta, nav, product } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";

gsap.registerPlugin(ScrollTrigger);

/*
  MOTION: the bar swaps from transparent to solid once the hero has left the
  viewport. Justification: state transition, the nav has to stop floating over
  the photograph and start sitting on the page.

  This is a ScrollTrigger onToggle, which fires twice, not a scroll listener.
*/
export function KineticNav() {
  const ref = useRef<HTMLElement>(null);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: hero,
        start: "bottom top+=64",
        end: "max",
        invalidateOnRefresh: true,
        onToggle: (self) => setSolid(self.isActive),
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={ref}
      className={`fixed inset-x-0 top-0 z-50 h-16 transition-colors duration-300 ${
        solid
          ? "border-b border-white/10 bg-[#0a0a0b]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-6 px-5 md:px-[6vw]">
        <a
          href="#hero"
          className="font-grotesk text-lg font-medium tracking-tight text-[#f4f4f3]"
        >
          {product.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#8e8e8c] transition-colors hover:text-[#f4f4f3]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#pricing"
          className="inline-flex h-10 shrink-0 items-center whitespace-nowrap rounded-full bg-[#f43f5e] px-5 text-sm font-medium text-[#0a0a0b] transition-transform active:scale-[0.98]"
        >
          {cta.primary}
        </a>
      </div>
    </header>
  );
}
