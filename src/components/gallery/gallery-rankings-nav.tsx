"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { BarChart3, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ease = [0.22, 1, 0.36, 1] as const;

export function GalleryRankingsNav() {
  const pathname = usePathname();
  const onRankings = pathname === "/rankings";
  const onGalleryHome = pathname === "/";

  return (
    <nav
      aria-label="Site navigation"
      className="fixed top-5 right-5 z-[110] flex items-center gap-0.5 rounded-lg border border-neutral-200 bg-white/85 px-1 py-1 text-neutral-700 shadow-[0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-[12px] sm:top-6 sm:right-6"
    >
      <Link
        href="/"
        aria-label={onRankings ? undefined : "Gallery"}
        aria-current={onGalleryHome ? "page" : undefined}
        className={clsx(
          "relative inline-flex h-9 shrink-0 items-center justify-center overflow-hidden rounded-md transition-colors hover:bg-black/[0.04] hover:text-neutral-900",
          onRankings ? "min-w-[5.5rem] px-3" : "min-w-9",
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {onRankings ? (
            <motion.span
              key="gallery-text"
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(4px)" }}
              transition={{ duration: 0.22, ease }}
              className="text-sm font-medium tracking-tight"
            >
              Gallery
            </motion.span>
          ) : (
            <motion.span
              key="gallery-icon"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.22, ease }}
              className="inline-flex size-9 items-center justify-center text-neutral-600"
            >
              <Home className="size-4 shrink-0 opacity-80" aria-hidden />
            </motion.span>
          )}
        </AnimatePresence>
      </Link>

      <div
        className="h-6 w-px shrink-0 bg-neutral-200/90"
        aria-hidden="true"
      />

      <Link
        href="/rankings"
        aria-label={onRankings ? "Model rankings" : undefined}
        aria-current={onRankings ? "page" : undefined}
        className={clsx(
          "relative inline-flex h-9 shrink-0 items-center justify-center overflow-hidden rounded-md transition-colors hover:bg-black/[0.04] hover:text-neutral-900",
          onRankings ? "min-w-9" : "min-w-[8.5rem] px-3",
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {onRankings ? (
            <motion.span
              key="rankings-icon"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.22, ease }}
              className="inline-flex size-9 items-center justify-center text-neutral-600"
            >
              <BarChart3 className="size-4 shrink-0 opacity-80" aria-hidden />
            </motion.span>
          ) : (
            <motion.span
              key="rankings-text"
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(4px)" }}
              transition={{ duration: 0.22, ease }}
              className="whitespace-nowrap text-sm font-medium tracking-tight"
            >
              Model rankings
            </motion.span>
          )}
        </AnimatePresence>
      </Link>
    </nav>
  );
}
