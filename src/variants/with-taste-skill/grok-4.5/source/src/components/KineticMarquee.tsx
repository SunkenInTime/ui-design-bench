"use client";

import { motion, useReducedMotion } from "motion/react";

const WORDS = [
  "Capture",
  "Link",
  "Cluster",
  "Recall",
  "Compose",
  "Share",
  "Archive",
  "Rediscover",
];

export function KineticMarquee() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="overflow-hidden border-y border-[#1a1410]/12 bg-[#f3ebe3] py-5">
        <p className="text-center font-[family-name:var(--font-outfit)] text-sm tracking-wide text-[#5c4f45]">
          {WORDS.join("  /  ")}
        </p>
      </div>
    );
  }

  const track = [...WORDS, ...WORDS].join("   ·   ");

  return (
    <div className="overflow-hidden border-y border-[#1a1410]/12 bg-[#f3ebe3] py-5">
      <motion.div
        className="flex whitespace-nowrap font-[family-name:var(--font-outfit)] text-sm uppercase tracking-[0.2em] text-[#5c4f45]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        <span className="px-4">{track}</span>
        <span className="px-4" aria-hidden>
          {track}
        </span>
      </motion.div>
    </div>
  );
}
