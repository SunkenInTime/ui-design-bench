"use client";

import { motion, useReducedMotion } from "motion/react";
import { steps } from "@/variants/with-taste-skill/opus-5/source/src/lib/content";

/*
  Three ruled columns, no cards. Vertical hairlines at md and up, horizontal
  hairlines when it stacks to one column below that.

  Motion: the columns reveal left to right so the reveal order matches the order
  of the work (capture, connect, recall). Static under prefers-reduced-motion.
*/
export function StepColumns() {
  const reduce = useReducedMotion();

  return (
    <div className="mt-10 grid grid-cols-1 divide-y divide-white/[0.09] border-t border-white/[0.09] md:grid-cols-3 md:divide-x md:divide-y-0">
      {steps.map((step, index) => (
        <motion.div
          key={step.title}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.55,
            delay: index * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="py-7 md:px-8 md:py-2 md:first:pl-0 md:last:pr-0"
        >
          <h3 className="text-lg tracking-[-0.01em] text-[#e8e8e6]">
            {step.title}
          </h3>
          <p className="mt-3 max-w-[40ch] text-[14px] leading-[1.65] text-[#8b8b87]">
            {step.body}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
