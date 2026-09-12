"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const child: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Staggers the hero copy in on load so headline, body and CTAs read in order. */
export function HeroStagger({ children }: { children: ReactNode[] }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={parent}
      initial={reduce ? "show" : "hidden"}
      animate="show"
      className="max-w-3xl"
    >
      {children.map((c, i) => (
        <motion.div key={i} variants={child}>
          {c}
        </motion.div>
      ))}
    </motion.div>
  );
}
