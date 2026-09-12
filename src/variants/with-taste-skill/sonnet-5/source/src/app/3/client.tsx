"use client";

import { useReducedMotion } from "motion/react";

export function Marquee({ words }: { words: string[] }) {
  const reduce = useReducedMotion();
  const track = [...words, ...words];

  return (
    <div className="overflow-hidden border-y border-zinc-900/10 py-6">
      <div
        className={`flex w-max gap-10 whitespace-nowrap ${
          reduce ? "" : "animate-marquee"
        }`}
      >
        {[...track, ...track].map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="text-3xl font-medium uppercase tracking-tight text-zinc-900 md:text-5xl"
          >
            {word}
            <span className="mx-10 text-[#B5502F]/40">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
