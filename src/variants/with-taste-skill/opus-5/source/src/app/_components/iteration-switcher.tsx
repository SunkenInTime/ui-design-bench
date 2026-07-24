"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  CaretLeftIcon,
  CaretRightIcon,
  CaretUpIcon,
  CheckIcon,
  SquaresFourIcon,
} from "@phosphor-icons/react/dist/ssr";
import { iterations } from "@/variants/with-taste-skill/opus-5/source/src/lib/iterations";

/**
 * Deliberately styled as a tool overlay rather than in any one iteration's
 * design language, so it never breaks a page's theme lock.
 */
export function IterationSwitcher() {
  const pathname = usePathname() ?? "";
  const router = useRouter();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const segment = pathname.split("/").filter(Boolean)[0] ?? "";
  const activeIndex = iterations.findIndex((it) => it.slug === segment);
  const active = activeIndex >= 0 ? iterations[activeIndex] : null;

  const go = useCallback(
    (offset: number) => {
      const base = activeIndex >= 0 ? activeIndex : offset > 0 ? -1 : 0;
      const next =
        (base + offset + iterations.length) % iterations.length;
      router.push(`/${iterations[next].slug}`);
    },
    [activeIndex, router],
  );

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    function onPointer(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onPointer);
    };
  }, []);

  const step =
    "grid h-9 w-9 place-items-center rounded-full text-zinc-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-[1px]";

  return (
    <div
      ref={rootRef}
      data-scheme="dark"
      className="pointer-events-none fixed inset-x-0 bottom-4 z-100 flex justify-center px-4 font-sans sm:bottom-6"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={reduce ? false : { opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="pointer-events-auto absolute bottom-[calc(100%+0.5rem)] w-[min(24rem,calc(100vw-2rem))] origin-bottom overflow-hidden rounded-2xl border border-white/12 bg-zinc-900/95 p-1.5 shadow-2xl shadow-black/50 backdrop-blur-xl"
          >
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-zinc-300 transition-colors hover:bg-white/8 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <SquaresFourIcon size={16} weight="regular" />
              <span className="text-[13px] font-medium">All five side by side</span>
            </Link>
            <div className="mx-3 my-1.5 h-px bg-white/10" />
            {iterations.map((it) => {
              const isActive = it.slug === segment;
              return (
                <Link
                  key={it.slug}
                  href={`/${it.slug}`}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span className="mt-px font-mono text-[11px] tabular-nums text-zinc-500">
                    {it.label}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span className="text-[13px] font-medium text-white">
                        {it.name}
                      </span>
                      {isActive && (
                        <CheckIcon size={12} className="text-emerald-400" />
                      )}
                    </span>
                    <span className="mt-0.5 block text-[11.5px] leading-snug text-zinc-400">
                      {it.direction}
                    </span>
                  </span>
                  <span className="mt-px font-mono text-[10.5px] tabular-nums text-zinc-600">
                    {it.dials.join("/")}
                  </span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pointer-events-auto flex items-center gap-0.5 rounded-full border border-white/12 bg-zinc-900/90 p-1 shadow-xl shadow-black/40 backdrop-blur-xl">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous iteration"
          className={step}
        >
          <CaretLeftIcon size={15} weight="bold" />
        </button>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Choose an iteration"
          className="flex h-9 items-center gap-2.5 rounded-full px-3 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-[1px]"
        >
          <span className="font-mono text-[11px] tabular-nums text-zinc-500">
            {active ? active.label : "00"}
          </span>
          <span className="text-[13px] font-medium text-white">
            {active ? active.name : "Iterations"}
          </span>
          <CaretUpIcon
            size={12}
            weight="bold"
            className={`text-zinc-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next iteration"
          className={step}
        >
          <CaretRightIcon size={15} weight="bold" />
        </button>
      </div>
    </div>
  );
}
