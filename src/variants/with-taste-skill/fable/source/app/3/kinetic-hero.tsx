"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function KineticHero() {
  const reduce = useReducedMotion();

  const lineReveal = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { y: "110%" },
          animate: { y: "0%" },
          transition: { duration: 0.9, delay, ease: EASE },
        };

  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-6 md:px-12">
      <h1 className="font-grotesk text-[clamp(3.5rem,11vw,10rem)] font-bold uppercase leading-[0.95] tracking-tighter">
        <span className="block overflow-hidden pb-1">
          <motion.span className="block" {...lineReveal(0.1)}>
            Your mind,
          </motion.span>
        </span>
        <span className="block overflow-hidden pb-1">
          <motion.span
            className="block text-transparent [-webkit-text-stroke:2px_#bef264]"
            {...lineReveal(0.22)}
          >
            indexed.
          </motion.span>
        </span>
      </h1>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
        className="mt-10 flex max-w-xl flex-col gap-8"
      >
        <p className="text-lg leading-relaxed text-zinc-400">
          Trove links every note you take and brings the right one back the
          moment it matters.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#join"
            className="rounded-full bg-lime-300 px-7 py-3.5 font-grotesk text-sm font-semibold uppercase tracking-wide text-zinc-950 transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Start free
          </a>
          <a
            href="#loop"
            className="rounded-full border border-white/20 px-7 py-3.5 font-grotesk text-sm font-semibold uppercase tracking-wide text-zinc-200 transition-colors hover:border-lime-300/60 hover:text-lime-300"
          >
            See how it works
          </a>
        </div>
      </motion.div>
    </section>
  );
}
