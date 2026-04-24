"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftRight, Link2 } from "lucide-react";
import { useEffect, useRef, useState, useTransition } from "react";
import { CompareGroupSelect, CompareModelSelect } from "@/components/compare/compare-selects";
import { GalleryRankingsNav } from "@/components/gallery/gallery-rankings-nav";
import {
  buildCompareHref,
  compareGroupOrder,
  getDefaultSelectionForGroup,
  getModelsForGroup,
  type CompareSelection,
  type CompareState,
} from "@/lib/compare";
import { getGalleryEntry } from "@/lib/gallery-manifest";
import type { GalleryGroupSlug, IterationId, ModelSlug } from "@/lib/gallery-types";

const ITERATION_OPTIONS = ["1", "2", "3", "4", "5"] as const satisfies readonly IterationId[];

function buildPreviewHref(selection: CompareSelection): string {
  return `/preview/${selection.group}/${selection.model}/${selection.iteration}`;
}

function getGroupLabel(group: GalleryGroupSlug): string {
  return getModelsForGroup(group)[0]?.groupLabel ?? group;
}

function resolveSelection(
  group: GalleryGroupSlug,
  model: ModelSlug,
  iteration: IterationId,
): CompareSelection {
  const entry = getGalleryEntry(group, model);
  if (!entry) {
    return getDefaultSelectionForGroup(group) ?? { group, model, iteration: "1" };
  }

  return {
    group: entry.group,
    model: entry.model,
    iteration: entry.iterations.some((item) => item.id === iteration) ? iteration : "1",
  };
}

function ComparePanel({
  side,
  selection,
  onSelectionChange,
}: {
  side: "left" | "right";
  selection: CompareSelection;
  onSelectionChange: (selection: CompareSelection) => void;
}) {
  const sideLabel = side === "left" ? "Left" : "Right";
  const [openMenu, setOpenMenu] = useState<"group" | "model" | null>(null);
  const controlsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openMenu) {
      return;
    }

    const onMouseDown = (e: MouseEvent) => {
      if (controlsRef.current?.contains(e.target as Node)) {
        return;
      }
      setOpenMenu(null);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [openMenu]);

  const entry = getGalleryEntry(selection.group, selection.model);
  if (!entry) {
    return null;
  }

  const models = getModelsForGroup(selection.group);
  const iframeTitle = `${sideLabel} preview: ${entry.groupLabel}, ${entry.modelLabel}, iteration ${selection.iteration}`;

  const panelFrame =
    side === "left"
      ? "lg:pr-2"
      : "border-t border-neutral-200 pt-12 lg:border-t-0 lg:border-l lg:border-neutral-200 lg:pl-2 lg:pt-0";

  return (
    <section
      aria-label={`${sideLabel} compare panel`}
      data-testid={`compare-panel-${side}`}
      className={`flex min-h-0 flex-col lg:h-full ${panelFrame}`}
    >
      <div className="space-y-4 pb-6">
        <div
          ref={controlsRef}
          className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end"
        >
          <CompareGroupSelect
            value={selection.group}
            onChange={(nextGroup) => {
              const nextModels = getModelsForGroup(nextGroup);
              const nextModel =
                nextModels.find((item) => item.model === selection.model)?.model ??
                getDefaultSelectionForGroup(nextGroup)?.model;

              if (!nextModel) {
                return;
              }

              onSelectionChange(resolveSelection(nextGroup, nextModel, selection.iteration));
            }}
            groups={compareGroupOrder}
            getLabel={getGroupLabel}
            open={openMenu === "group"}
            setOpen={(next) => setOpenMenu(next ? "group" : null)}
          />

          <CompareModelSelect
            models={models}
            value={selection.model}
            onChange={(nextModel) => {
              onSelectionChange(resolveSelection(selection.group, nextModel, selection.iteration));
            }}
            open={openMenu === "model"}
            setOpen={(next) => setOpenMenu(next ? "model" : null)}
          />
        </div>
      </div>

      <div className="relative min-h-0 flex-1 bg-white">
        <div
          role="group"
          aria-label={`${sideLabel} iterations`}
          className="gallery-variant-switcher absolute top-4 right-1 z-10 flex flex-col items-center gap-1 rounded-lg border border-[var(--gallery-border)] bg-white/85 px-1 py-1 text-neutral-500 shadow-[0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-[12px] sm:top-5 sm:right-1"
        >
          {ITERATION_OPTIONS.map((iteration) => {
            const active = iteration === selection.iteration;
            return (
              <button
                key={iteration}
                type="button"
                onClick={() =>
                  onSelectionChange(resolveSelection(selection.group, selection.model, iteration))
                }
                className={`gallery-variant-switcher__iteration inline-flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-md text-[11px] font-medium tabular-nums leading-none transition-colors ${
                  active
                    ? "bg-[var(--gallery-accent)] text-[var(--gallery-accent-foreground)]"
                    : "text-neutral-600 hover:bg-black/[0.04] hover:text-neutral-900"
                }`}
                aria-pressed={active}
              >
                {iteration}
              </button>
            );
          })}
        </div>
        <iframe
          title={iframeTitle}
          src={buildPreviewHref(selection)}
          className="block h-[min(70dvh,720px)] w-full bg-white lg:h-[min(calc(100dvh-13rem),900px)]"
        />
      </div>
    </section>
  );
}

export function ComparePage({ initialState }: { initialState: CompareState }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [copied, setCopied] = useState(false);
  const [copyFlash, setCopyFlash] = useState(false);
  const currentHref = buildCompareHref(initialState);

  const updateState = (nextState: CompareState) => {
    const nextHref = buildCompareHref(nextState);
    if (nextHref === currentHref) {
      return;
    }

    startTransition(() => {
      router.replace(nextHref, { scroll: false });
    });
  };

  const swapSelections = () => {
    updateState({
      left: initialState.right,
      right: initialState.left,
    });
  };

  const copyLink = async () => {
    setCopyFlash(true);
    window.setTimeout(() => setCopyFlash(false), 380);
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="min-h-screen text-neutral-950">
      <GalleryRankingsNav />

      <main className="mx-auto max-w-[1600px] px-5 pb-16 pt-[4.5rem] sm:px-8 sm:pt-20">
        <header className="mb-6 w-full">
          <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <div className="min-w-0 max-w-2xl space-y-2">
              <h1 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
                Compare
              </h1>
              <p className="text-[15px] leading-relaxed text-neutral-600">
                Two previews in one URL. Change either side independently.
              </p>
            </div>

            <div className="flex shrink-0 items-center justify-end gap-2">
              <motion.button
                type="button"
                onClick={swapSelections}
                disabled={isPending}
                aria-label="Swap sides"
                title="Swap sides"
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 520, damping: 28 }}
                className="inline-flex size-9 cursor-pointer items-center justify-center rounded-md border border-[var(--gallery-border)] bg-white text-neutral-600 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ArrowLeftRight className="size-4 opacity-80" aria-hidden="true" />
              </motion.button>
              <div className="relative z-[200]">
                <AnimatePresence>
                  {copied ? (
                    <motion.div
                      role="status"
                      aria-live="polite"
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 420, damping: 28 }}
                      className="pointer-events-none absolute bottom-full left-1/2 z-[200] mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-[var(--gallery-border)] bg-white/95 px-4 py-2.5 text-sm font-medium text-neutral-800 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md"
                    >
                      Link copied
                    </motion.div>
                  ) : null}
                </AnimatePresence>
                <motion.button
                  type="button"
                  onClick={copyLink}
                  aria-label={copied ? "Copied" : "Copy link"}
                  title={copied ? "Copied" : "Copy link"}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 520, damping: 28 }}
                  className={clsx(
                    "inline-flex size-9 cursor-pointer items-center justify-center rounded-md border shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors duration-200",
                    copyFlash
                      ? "border-[var(--gallery-accent)] bg-[color-mix(in_srgb,var(--gallery-accent)_22%,white)] text-[var(--gallery-accent)]"
                      : "border-[var(--gallery-border)] bg-white text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900",
                  )}
                >
                  <Link2
                    className={clsx("size-4", copyFlash ? "opacity-100" : "opacity-80")}
                    aria-hidden="true"
                  />
                </motion.button>
              </div>
            </div>
          </div>
        </header>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-0">
          <ComparePanel
            side="left"
            selection={initialState.left}
            onSelectionChange={(selection) =>
              updateState({
                ...initialState,
                left: selection,
              })
            }
          />
          <ComparePanel
            side="right"
            selection={initialState.right}
            onSelectionChange={(selection) =>
              updateState({
                ...initialState,
                right: selection,
              })
            }
          />
        </div>
      </main>
    </div>
  );
}
