"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { cta, photo } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import { PhotoPlate } from "./photo-plate";

/*
  Layout effect on the client, plain effect during SSR. The initial hidden state
  is written before the browser paints, so the headline never flashes in place
  and then animates.
*/
const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

/* Two explicit lines, so the headline is exactly 2 lines at desktop. */
const LINES = [
  ["The", "notebook", "that"],
  ["hands", "it", "back"],
];

export function KineticHero() {
  const root = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      /*
        MOTION: headline words rise into place and the photograph unclips.
        Justification: hierarchy plus storytelling, the sentence assembles in
        reading order and the image arrives under it. Runs once on mount.
      */
      gsap.set(".k-word", { yPercent: 115, opacity: 0 });
      gsap.set(".k-fade", { y: 18, opacity: 0 });
      gsap.set(".k-plate-wrap", { clipPath: "inset(100% 0% 0% 0%)" });
      gsap.set(".k-plate-inner", { scale: 1.12 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(".k-word", {
        yPercent: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.075,
      })
        .to(
          ".k-plate-wrap",
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.1 },
          0.2,
        )
        .to(".k-plate-inner", { scale: 1, duration: 1.5 }, 0.2)
        .to(
          ".k-fade",
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.12 },
          0.55,
        );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="hero"
      className="relative w-full overflow-hidden px-5 pt-20 pb-14 md:px-[6vw] md:pt-24 md:pb-16"
    >
      <div className="mx-auto grid min-h-[calc(100dvh-8.5rem)] max-w-[1400px] grid-cols-1 items-center gap-9 md:min-h-[calc(100dvh-10rem)] md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <h1 className="font-grotesk text-[2.35rem] leading-[0.95] font-medium tracking-[-0.02em] text-[#f4f4f3] sm:text-[2.9rem] md:text-[2.4rem] lg:text-[3.1rem] xl:text-[3.9rem] 2xl:text-[4.4rem]">
            {LINES.map((line, li) => (
              <span key={li} className="block">
                {line.map((word) => (
                  <span
                    key={word}
                    className="inline-block overflow-hidden pb-[0.06em] align-bottom"
                  >
                    <span className="k-word inline-block">{word}</span>
                    <span className="inline-block">&nbsp;</span>
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <p className="k-fade mt-7 max-w-[46ch] text-[0.95rem] leading-relaxed text-[#8e8e8c] md:text-base">
            Verso links each new note to what you already wrote, then brings the
            right one back when it matters.
          </p>

          <div className="k-fade mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#pricing"
              className="inline-flex h-12 items-center whitespace-nowrap rounded-full bg-[#f43f5e] px-7 text-sm font-medium text-[#0a0a0b] transition-transform active:scale-[0.98]"
            >
              {cta.primary}
            </a>
            <a
              href="#how"
              className="inline-flex h-12 items-center whitespace-nowrap rounded-full border border-white/20 px-7 text-sm text-[#f4f4f3] transition-colors hover:border-white/45"
            >
              {cta.secondary}
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="k-plate-wrap">
            <PhotoPlate
              src={photo("verso-hero-motion", 1200, 1500)}
              alt="Photograph opening the Verso hero"
              width={1200}
              height={1500}
              sizes="(min-width: 768px) 40vw, 90vw"
              eager
              className="h-[30vh] w-full md:h-[58vh] lg:h-[62vh]"
              imageClassName="k-plate-inner"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
