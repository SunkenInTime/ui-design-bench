"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FolderOpenIcon,
  GraphIcon,
  LightningIcon,
  LockIcon,
  MagnifyingGlassIcon,
  SunIcon,
  type Icon,
} from "@phosphor-icons/react";
import { capabilities, photo } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";
import { PhotoPlate } from "./photo-plate";

gsap.registerPlugin(ScrollTrigger);

/* Explicit record: the content file stores the Phosphor export name as a string. */
const icons: Record<string, Icon> = {
  LightningIcon,
  GraphIcon,
  SunIcon,
  MagnifyingGlassIcon,
  FolderOpenIcon,
  LockIcon,
};

/* One seed per panel, so the photography is stable across builds. */
const seeds = [
  "verso-capability-capture",
  "verso-capability-links",
  "verso-capability-resurface",
  "verso-capability-ask",
  "verso-capability-files",
  "verso-capability-encrypted",
];

export function CapabilitiesPan() {
  const wrap = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    /*
      MOTION: vertical scroll pans the six panels sideways while the section is
      pinned. Justification: storytelling, the capabilities are one continuous
      argument read left to right instead of six cards competing at once.

      Only ever built at 768px and up with motion allowed. Below that, and under
      reduced motion, the markup is already a plain vertical stack.
    */
    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const ctx = gsap.context(() => {
          const el = track.current;
          if (!el) return;
          /* Floored at 1: on an ultra-wide screen the track can fit without
             overflowing, and a negative pan distance would invert the trigger. */
          const distance = () =>
            Math.max(1, el.scrollWidth - window.innerWidth);
          gsap.to(el, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: wrap.current,
              start: "top top",
              end: () => "+=" + distance(),
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        }, wrap);
        return () => ctx.revert();
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={wrap}
      id="features"
      className="relative w-full md:motion-safe:h-[100dvh] md:motion-safe:overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-[6vw] md:motion-safe:absolute md:motion-safe:top-[9vh] md:motion-safe:left-0 md:motion-safe:z-10 md:motion-safe:max-w-none md:motion-safe:px-[6vw]">
        {/* The single eyebrow on this page. */}
        <p className="text-[11px] tracking-[0.22em] text-[#f43f5e] uppercase">
          Capabilities
        </p>
        <h2 className="font-grotesk mt-4 max-w-[22ch] text-[1.9rem] leading-[1.02] font-medium tracking-[-0.02em] text-[#f4f4f3] md:text-[2.5rem] lg:text-[3rem]">
          Six things it does while you write.
        </h2>
      </div>

      <div
        ref={track}
        className="mt-12 flex flex-col items-center gap-14 px-5 pb-4 md:mt-14 md:px-[6vw] md:motion-safe:mt-0 md:motion-safe:h-[100dvh] md:motion-safe:w-max md:motion-safe:flex-row md:motion-safe:items-center md:motion-safe:gap-[3vw] md:motion-safe:px-0 md:motion-safe:pt-[22vh] md:motion-safe:pb-0 md:motion-safe:pl-[6vw]"
      >
        {capabilities.map((cap, i) => {
          const Glyph = icons[cap.icon];
          return (
            <article
              key={cap.title}
              className="w-full max-w-[520px] shrink-0 md:motion-safe:max-w-none md:motion-safe:w-[clamp(300px,29vw,400px)]"
            >
              <PhotoPlate
                src={photo(seeds[i], 900, 1100)}
                alt={`Photograph for the ${cap.title.toLowerCase()} panel`}
                width={900}
                height={1100}
                sizes="(min-width: 768px) 30vw, 92vw"
                className="aspect-[4/5] w-full md:motion-safe:aspect-auto md:motion-safe:h-[40vh]"
              />
              <div className="mt-6 flex items-start gap-3">
                {Glyph ? (
                  <Glyph
                    size={20}
                    className="mt-[0.2rem] shrink-0 text-[#f43f5e]"
                    aria-hidden
                  />
                ) : null}
                <div>
                  <h3 className="font-grotesk text-lg font-medium tracking-[-0.01em] text-[#f4f4f3]">
                    {cap.title}
                  </h3>
                  <p className="mt-2 max-w-[40ch] text-sm leading-relaxed text-[#8e8e8c]">
                    {cap.body}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
        <div
          aria-hidden
          className="hidden shrink-0 md:motion-safe:block md:motion-safe:w-[6vw]"
        />
      </div>
    </section>
  );
}
