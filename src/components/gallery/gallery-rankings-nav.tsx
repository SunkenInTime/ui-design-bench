"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftRight, BarChart3, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buildCompareHref, DEFAULT_COMPARE_STATE } from "@/lib/compare";

const ease = [0.22, 1, 0.36, 1] as const;

const navLinkBase =
  "relative inline-flex h-9 shrink-0 items-center justify-center overflow-hidden rounded-md transition-colors duration-150";

function navLinkClass(active: boolean) {
  return clsx(
    navLinkBase,
    active
      ? "text-[var(--gallery-accent)] hover:bg-[color-mix(in_srgb,var(--gallery-accent)_10%,white)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_srgb,var(--gallery-accent)_45%,transparent)]"
      : "text-neutral-600 hover:bg-[color-mix(in_srgb,var(--gallery-accent)_12%,white)] hover:text-[var(--gallery-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_srgb,var(--gallery-accent)_45%,transparent)]",
  );
}

export function GalleryRankingsNav() {
  const pathname = usePathname();
  const onRankings = pathname === "/rankings";
  const onCompare = pathname === "/compare";
  const onGalleryHome = pathname === "/";
  const homeShowsGalleryLabel = onRankings || onCompare;

  return (
    <nav
      aria-label="Site navigation"
      className="fixed top-5 right-5 z-[110] flex items-center gap-0.5 rounded-lg border border-neutral-200 bg-white/85 px-1 py-1 text-neutral-700 shadow-[0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-[12px] sm:top-6 sm:right-6"
    >
      <Link
        href="/"
        aria-label={homeShowsGalleryLabel ? undefined : "Gallery"}
        aria-current={onGalleryHome ? "page" : undefined}
        className={clsx(
          navLinkClass(onGalleryHome),
          homeShowsGalleryLabel ? "min-w-[5.5rem] px-3" : "min-w-9",
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {homeShowsGalleryLabel ? (
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
              className="inline-flex size-9 items-center justify-center text-current"
            >
              <Home className="size-4 shrink-0" aria-hidden />
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
          navLinkClass(onRankings),
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
              className="inline-flex size-9 items-center justify-center text-current"
            >
              <BarChart3 className="size-4 shrink-0 opacity-90" aria-hidden />
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

      <div
        className="h-6 w-px shrink-0 bg-neutral-200/90"
        aria-hidden="true"
      />

      <Link
        href={buildCompareHref(DEFAULT_COMPARE_STATE)}
        aria-label={onCompare ? "Compare" : undefined}
        aria-current={onCompare ? "page" : undefined}
        className={clsx(
          navLinkClass(onCompare),
          onCompare ? "min-w-9" : "min-w-[5.5rem] px-3",
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {onCompare ? (
            <motion.span
              key="compare-icon"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.22, ease }}
              className="inline-flex size-9 items-center justify-center text-current"
            >
              <ArrowLeftRight className="size-4 shrink-0 opacity-90" aria-hidden />
            </motion.span>
          ) : (
            <motion.span
              key="compare-text"
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(4px)" }}
              transition={{ duration: 0.22, ease }}
              className="whitespace-nowrap text-sm font-medium tracking-tight"
            >
              Compare
            </motion.span>
          )}
        </AnimatePresence>
      </Link>
    </nav>
  );
}
