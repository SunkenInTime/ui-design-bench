"use client";

import { memo, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion-astra/react";

// Entry motion establishes reading order. Scroll reveals introduce new sections.
export const Reveal = memo(function Reveal({
  children, className = "", delay = 0, onLoad = false,
}: { children: ReactNode; className?: string; delay?: number; onLoad?: boolean }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={`reveal ${className}`}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      animate={onLoad ? { opacity: 1, y: 0 } : undefined}
      whileInView={onLoad ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
});
