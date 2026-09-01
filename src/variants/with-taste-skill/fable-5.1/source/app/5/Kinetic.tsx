"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Word-by-word rise for the hero headline. Motivation: the headline is the
 * whole hero, so its arrival is the moment; everything else follows it.
 * The `accent` word is emphasised with colour and weight in the same family.
 */
export function KineticHeadline({
  words,
  accent,
  className,
}: {
  words: string[];
  accent?: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <h1 className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className={`inline-block ${w === accent ? "font-extrabold text-accent-text" : ""}`}
            initial={reduce ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.08 * i,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? "\u00A0" : null}
        </span>
      ))}
    </h1>
  );
}

/** Slides the hero image tile in from the right after the headline lands. */
export function HeroTile({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, x: 40, rotate: 0 }}
      animate={{ opacity: 1, x: 0, rotate: -2 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}
