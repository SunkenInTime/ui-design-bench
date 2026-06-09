"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

/*
  Canonical horizontal-pan: the wrapper pins at viewport top, the inner
  track slides horizontally as the user scrolls. Motivation: the four
  slides are the product loop in sequence; the pan walks the story.
  Reduced motion: slides render as a plain vertical stack.
*/
export function HorizontalPan({ children }: { children: React.ReactNode }) {
  const wrap = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !wrap.current || !track.current) return;
    const ctx = gsap.context(() => {
      const distance = track.current!.scrollWidth - window.innerWidth;
      gsap.to(track.current, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${distance}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrap);
    return () => ctx.revert();
  }, [reduce]);

  if (reduce) {
    return (
      <section
        id="loop"
        className="flex flex-col [&>article]:md:min-h-[70vh] [&>article]:md:w-full"
      >
        {children}
      </section>
    );
  }

  return (
    <section id="loop" ref={wrap} className="relative overflow-hidden">
      <div ref={track} className="flex h-[100dvh] items-stretch">
        {children}
      </div>
    </section>
  );
}
