"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

export type Panel = {
  heading: string;
  body: string;
  image?: StaticImageData;
  alt?: string;
};

/**
 * Vertical scroll drives a horizontal pan across four panels. The wrapper pins
 * the instant its top reaches the viewport top, so a panel is never caught
 * half-way. Motivated by sequence: this is one route through the four ideas.
 */
export function HorizontalPan({ panels }: { panels: Panel[] }) {
  const reduce = useReducedMotion();
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  // Measured, not per-frame: this only changes when the viewport resizes.
  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const measure = () =>
      setDistance(Math.max(0, element.scrollWidth - window.innerWidth));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  if (reduce) {
    return (
      <div className="mx-auto grid max-w-[1400px] gap-5 px-6 md:grid-cols-2 lg:px-10">
        {panels.map((panel) => (
          <PanelBody key={panel.heading} panel={panel} />
        ))}
      </div>
    );
  }

  return (
    <div ref={wrap} className="relative h-[340vh]">
      <div className="sticky top-0 flex h-[100dvh] items-center overflow-hidden">
        <motion.div
          ref={track}
          style={{ x }}
          className="flex gap-5 pr-6 pl-6 lg:pr-10 lg:pl-10"
        >
          {panels.map((panel) => (
            <div
              key={panel.heading}
              className="h-[68vh] w-[84vw] shrink-0 md:w-[56vw] lg:w-[44vw]"
            >
              <PanelBody panel={panel} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function PanelBody({ panel }: { panel: Panel }) {
  if (panel.image) {
    return (
      <article className="relative flex h-full min-h-[380px] flex-col justify-end overflow-hidden bg-[#141416]">
        <Image
          src={panel.image}
          alt={panel.alt ?? ""}
          placeholder="blur"
          fill
          sizes="(min-width: 1024px) 44vw, 84vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-[#0b0b0c]/55 to-transparent"
        />
        <div className="relative p-8 sm:p-10">
          <h3 className="max-w-[13ch] font-[family-name:var(--font-syne)] text-[1.75rem] leading-[1.05] font-extrabold tracking-[-0.03em] text-white sm:text-[2.25rem]">
            {panel.heading}
          </h3>
          <p className="mt-4 max-w-[36ch] text-[15px] leading-relaxed text-[#c9c9c2]">
            {panel.body}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="flex h-full min-h-[380px] flex-col justify-end bg-[#c9f24d] p-8 sm:p-10">
      <h3 className="max-w-[13ch] font-[family-name:var(--font-syne)] text-[1.75rem] leading-[1.05] font-extrabold tracking-[-0.03em] text-[#0b0b0c] sm:text-[2.25rem]">
        {panel.heading}
      </h3>
      <p className="mt-4 max-w-[36ch] text-[15px] leading-relaxed text-[#1e2410]">
        {panel.body}
      </p>
    </article>
  );
}
