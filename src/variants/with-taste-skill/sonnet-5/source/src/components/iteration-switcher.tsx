"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";

const ITERATIONS = [
  { slug: "1", label: "Calm Systems" },
  { slug: "2", label: "Quiet Depth" },
  { slug: "3", label: "Open Notebook" },
  { slug: "4", label: "Everyday Brain" },
  { slug: "5", label: "The Graph" },
];

export default function IterationSwitcher() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const active = pathname?.replace("/", "") || "1";

  return (
    <motion.nav
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Switch between landing page iterations"
      className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4"
    >
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-zinc-950/90 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <span className="hidden pl-2.5 pr-1 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500 sm:inline">
          Iterations
        </span>
        <ul className="flex items-center gap-1">
          {ITERATIONS.map((iteration) => {
            const isActive = active === iteration.slug;
            return (
              <li key={iteration.slug}>
                <Link
                  href={`/${iteration.slug}`}
                  aria-current={isActive ? "page" : undefined}
                  title={iteration.label}
                  className={`relative flex h-8 w-8 items-center justify-center rounded-full font-mono text-xs font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-white text-zinc-950"
                      : "text-zinc-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {iteration.slug}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
}
