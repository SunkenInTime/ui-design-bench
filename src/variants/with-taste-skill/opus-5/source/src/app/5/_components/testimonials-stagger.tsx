"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";

gsap.registerPlugin(ScrollTrigger);

/* Asymmetric 12-column placement, one class set per quote. Single column under md. */
const placement = [
  "md:col-span-7 md:col-start-1",
  "md:col-span-4 md:col-start-9 md:mt-24",
  "md:col-span-6 md:col-start-4",
];

const scale = [
  "text-[1.35rem] md:text-[1.7rem]",
  "text-[1.05rem] md:text-[1.15rem]",
  "text-[1.2rem] md:text-[1.4rem]",
];

export function TestimonialsStagger() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      /*
        MOTION: the quotes lift in one after another as the section enters.
        Justification: hierarchy, the eye is given a reading order in a layout
        that is deliberately not a row of equal cards.
      */
      gsap.from(".k-quote", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.14,
        scrollTrigger: { trigger: root.current, start: "top 75%", once: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full py-28 md:py-40">
      <div
        ref={root}
        className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-5 md:grid-cols-12 md:gap-x-10 md:gap-y-20 md:px-[6vw]"
      >
        {testimonials.map((t, i) => (
          <figure key={t.name} className={`k-quote ${placement[i]}`}>
            <blockquote
              className={`font-grotesk leading-[1.3] tracking-[-0.01em] text-[#f4f4f3] ${scale[i]}`}
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="block text-[#f4f4f3]">{t.name}</span>
              <span className="mt-1 block text-[#8e8e8c]">{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
