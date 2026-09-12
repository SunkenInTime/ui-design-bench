"use client";

/*
  Two motion leaves, both guarded by `useReducedMotion`.

  `Reveal`     scroll-in reveal, `viewport={{ once: true }}`. Reason it exists:
               hierarchy. Sections settle in reading order instead of all being
               present at once, which is what makes an airy page feel composed.
  `MountRise`  fade-and-rise on mount, used only by the hero copy so the first
               thing the visitor reads arrives rather than appears.

  Both animate transform and opacity only.
*/

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: reduce ? 0 : delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/*
  Hero entrance. This one rises WITHOUT fading, and that is deliberate.

  Motion serialises `initial` into the server-rendered markup as an inline style.
  The server cannot know the visitor's motion preference, so `useReducedMotion`
  returns false there and an `opacity: 0` initial state would ship in the HTML,
  leaving the hero headline invisible until hydration finishes. The headline is
  this page's LCP element and the first thing anyone reads, so that trade is not
  worth an opacity fade: it delays LCP and blanks the hero entirely if the JS is
  slow or fails.

  Animating transform only keeps the copy painted and legible from the first
  frame. Without JS it simply rests 22px low, which nobody will notice.
*/
export function MountRise({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { y: 22 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.85, delay: reduce ? 0 : delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
