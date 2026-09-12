"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Tag = "div" | "li" | "section" | "article" | "figure" | "p" | "h1" | "h2";

type RevealProps = {
  as?: Tag;
  className?: string;
  id?: string;
  /** Stagger index; multiplies the base delay. */
  index?: number;
  /** Distance travelled in px. */
  y?: number;
  children: ReactNode;
};

/**
 * Enter-on-scroll reveal. Used to establish reading order on sections that
 * benefit from sequence. Collapses to static under prefers-reduced-motion.
 */
export function Reveal({
  as = "div",
  className,
  id,
  index = 0,
  y = 20,
  children,
}: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp
      id={id}
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.7,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </Comp>
  );
}
