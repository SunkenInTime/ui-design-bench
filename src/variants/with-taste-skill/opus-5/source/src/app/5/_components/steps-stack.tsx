"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { photo, steps } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import { PhotoPlate } from "./photo-plate";

gsap.registerPlugin(ScrollTrigger);

const seeds = [
  "verso-step-capture",
  "verso-step-connect",
  "verso-step-recall",
];

export function StepsStack() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    /*
      MOTION: each card pins at the top of the viewport, then shrinks and dims as
      the next one arrives over it. Justification: state transition, the three
      moves happen to the same note in sequence, so the previous move recedes
      rather than scrolling out of the story.

      Built only at 768px and up with motion allowed. Elsewhere the cards are a
      plain vertical stack, no pinning, no shrink.
    */
    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const ctx = gsap.context(() => {
          const cards = gsap.utils.toArray<HTMLElement>(".k-stack-card");
          cards.forEach((card, i) => {
            if (i === cards.length - 1) return;
            ScrollTrigger.create({
              trigger: card,
              start: "top top",
              endTrigger: cards[cards.length - 1],
              end: "top top",
              pin: true,
              pinSpacing: false,
            });
            gsap.to(card, {
              scale: 0.92,
              opacity: 0.55,
              ease: "none",
              scrollTrigger: {
                trigger: cards[i + 1],
                start: "top bottom",
                end: "top top",
                scrub: true,
              },
            });
          });
        }, root);
        return () => ctx.revert();
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <section id="how" className="w-full pt-24 md:pt-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-[6vw]">
        <h2 className="font-grotesk max-w-[20ch] text-[1.9rem] leading-[1.02] font-medium tracking-[-0.02em] text-[#f4f4f3] md:text-[2.5rem] lg:text-[3rem]">
          The whole loop, in three moves.
        </h2>
      </div>

      <div ref={root} className="relative mt-12 md:mt-16">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="k-stack-card bg-[#0a0a0b] px-5 py-4 md:px-[6vw] md:motion-safe:sticky md:motion-safe:top-0 md:motion-safe:flex md:motion-safe:min-h-[100dvh] md:motion-safe:items-center md:motion-safe:py-0"
          >
            <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-7 rounded-xl border border-white/10 bg-[#141416] p-5 md:grid-cols-12 md:gap-10 md:p-10">
              <div className="md:col-span-5">
                <PhotoPlate
                  src={photo(seeds[i], 1000, 1250)}
                  alt={`Photograph for the ${step.title.toLowerCase()} card`}
                  width={1000}
                  height={1250}
                  sizes="(min-width: 768px) 38vw, 92vw"
                  className="aspect-[4/3] w-full md:aspect-auto md:h-[44vh]"
                />
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <h3 className="font-grotesk text-[2rem] leading-none font-medium tracking-[-0.02em] text-[#f4f4f3] md:text-[3.2rem] lg:text-[4rem]">
                  {step.title}
                </h3>
                <p className="mt-5 max-w-[42ch] text-[0.95rem] leading-relaxed text-[#8e8e8c] md:text-base">
                  {step.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
