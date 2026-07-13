"use client";

import clsx from "clsx";
import { ArrowLeftRight, Link2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CompareGroupSelect, CompareModelSelect } from "@/components/compare/compare-selects";
import {
  buildCompareHref,
  compareGroupOrder,
  getDefaultSelectionForGroup,
  getModelsForGroup,
  type CompareSelection,
  type CompareState,
} from "@/lib/compare";
import { buildPreviewHref } from "@/lib/gallery-paths";
import type {
  GalleryCatalogEntry,
  GalleryGroupSlug,
  IterationId,
  ModelSlug,
} from "@/lib/gallery-types";

const ITERATION_OPTIONS = ["1", "2", "3", "4", "5"] as const satisfies readonly IterationId[];

function getGroupLabel(
  catalog: readonly GalleryCatalogEntry[],
  group: GalleryGroupSlug,
): string {
  return getModelsForGroup(catalog, group)[0]?.groupLabel ?? group;
}

function resolveSelection(
  catalog: readonly GalleryCatalogEntry[],
  group: GalleryGroupSlug,
  model: ModelSlug,
  iteration: IterationId,
): CompareSelection {
  const entry = catalog.find((item) => item.group === group && item.model === model);
  if (!entry) {
    return getDefaultSelectionForGroup(catalog, group) ?? { group, model, iteration: "1" };
  }

  return {
    group: entry.group,
    model: entry.model,
    iteration: entry.iterations.includes(iteration) ? iteration : "1",
  };
}

function ComparePanel({
  side,
  catalog,
  selection,
  onSelectionChange,
}: {
  side: "left" | "right";
  catalog: readonly GalleryCatalogEntry[];
  selection: CompareSelection;
  onSelectionChange: (selection: CompareSelection) => void;
}) {
  const sideLabel = side === "left" ? "Left" : "Right";

  const entry = catalog.find(
    (item) => item.group === selection.group && item.model === selection.model,
  );
  if (!entry) {
    return null;
  }

  const iframeTitle = `${sideLabel} preview: ${entry.groupLabel}, ${entry.modelLabel}, iteration ${selection.iteration}`;

  const panelFrame =
    side === "left"
      ? "lg:pr-2"
      : "border-t border-[var(--gallery-border)] pt-12 lg:border-t-0 lg:border-l lg:border-[var(--gallery-border)] lg:pl-2 lg:pt-0";

  return (
    <section
      aria-label={`${sideLabel} compare panel`}
      data-testid={`compare-panel-${side}`}
      className={`flex min-h-0 flex-col lg:h-full ${panelFrame}`}
    >
      <div className="relative min-h-0 flex-1 bg-[var(--gallery-surface)]">
        <div
          role="group"
          aria-label={`${sideLabel} iterations`}
          className="gallery-variant-switcher absolute top-4 right-1 z-10 flex flex-col items-center gap-1 rounded-lg border border-[var(--gallery-border)] bg-[var(--gallery-nav-bg)] px-1 py-1 text-[var(--gallery-text-tertiary)] shadow-[var(--gallery-shadow-sm)] backdrop-blur-[12px] sm:top-5 sm:right-1"
        >
          {ITERATION_OPTIONS.map((iteration) => {
            const active = iteration === selection.iteration;
            return (
              <button
                key={iteration}
                type="button"
                onClick={() =>
                  onSelectionChange(
                    resolveSelection(catalog, selection.group, selection.model, iteration),
                  )
                }
                className={`gallery-variant-switcher__iteration inline-flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-md text-[11px] font-medium tabular-nums leading-none transition-colors ${
                  active
                    ? "bg-[var(--gallery-accent)] text-[var(--gallery-accent-foreground)]"
                    : "text-[var(--gallery-text-secondary)] hover:bg-[var(--gallery-hover-bg)] hover:text-[var(--gallery-text-primary)]"
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
          src={buildPreviewHref(selection.group, selection.model, selection.iteration)}
          loading={side === "right" ? "lazy" : "eager"}
          className="block h-[min(72dvh,760px)] w-full bg-white lg:h-[calc(100dvh-10.25rem)]"
        />
      </div>
    </section>
  );
}

function CompareSideControls({
  side,
  catalog,
  selection,
  onSelectionChange,
}: {
  side: "left" | "right";
  catalog: readonly GalleryCatalogEntry[];
  selection: CompareSelection;
  onSelectionChange: (selection: CompareSelection) => void;
}) {
  const [openMenu, setOpenMenu] = useState<"group" | "model" | null>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const models = getModelsForGroup(catalog, selection.group);
  const sideLabel = side === "left" ? "Left" : "Right";

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

  return (
    <div ref={controlsRef} className="min-w-0">
      <div className="mb-1.5 text-xs font-medium text-[var(--gallery-text-tertiary)]">
        {sideLabel}
      </div>
      <div className="grid min-w-0 gap-2 sm:grid-cols-2">
        <CompareGroupSelect
          value={selection.group}
          onChange={(nextGroup) => {
            const nextModels = getModelsForGroup(catalog, nextGroup);
            const nextModel =
              nextModels.find((item) => item.model === selection.model)?.model ??
              getDefaultSelectionForGroup(catalog, nextGroup)?.model;

            if (!nextModel) {
              return;
            }

            onSelectionChange(
              resolveSelection(catalog, nextGroup, nextModel, selection.iteration),
            );
          }}
          groups={compareGroupOrder}
          getLabel={(group) => getGroupLabel(catalog, group)}
          open={openMenu === "group"}
          setOpen={(next) => setOpenMenu(next ? "group" : null)}
          showLabel={false}
        />

        <CompareModelSelect
          models={models}
          value={selection.model}
          onChange={(nextModel) => {
            onSelectionChange(
              resolveSelection(catalog, selection.group, nextModel, selection.iteration),
            );
          }}
          open={openMenu === "model"}
          setOpen={(next) => setOpenMenu(next ? "model" : null)}
          showLabel={false}
        />
      </div>
    </div>
  );
}

export function ComparePage({
  initialState,
  catalog,
}: {
  initialState: CompareState;
  catalog: readonly GalleryCatalogEntry[];
}) {
  const [compareState, setCompareState] = useState(initialState);
  const [copied, setCopied] = useState(false);
  const [copyFlash, setCopyFlash] = useState(false);
  const currentHref = buildCompareHref(compareState);

  const updateState = (nextState: CompareState) => {
    const nextHref = buildCompareHref(nextState);
    if (nextHref === currentHref) {
      return;
    }

    setCompareState(nextState);
    // Next.js integrates the native History API with its router. This keeps the
    // URL shareable without waiting for a new server-rendered compare payload.
    window.history.replaceState(null, "", nextHref);
  };

  const swapSelections = () => {
    updateState({
      left: compareState.right,
      right: compareState.left,
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
    <div className="min-h-screen text-[var(--gallery-text-primary)]">
      <h1 className="fixed top-5 left-5 z-[110] hidden h-11 items-center text-2xl font-medium tracking-tight text-[var(--gallery-text-primary)] sm:top-6 sm:left-6 sm:text-3xl lg:flex">
        Compare
      </h1>
      <main className="flex min-h-screen flex-col px-3 pb-4 pt-[5.25rem] sm:px-5 lg:px-6">
        <header className="relative z-50 mb-3 w-full">
          <div className="grid min-w-0 gap-3 border-b border-[var(--gallery-border)] pb-3 lg:grid-cols-2 lg:items-end lg:gap-0">
            <div className="min-w-0 lg:hidden">
              <h1 className="text-2xl font-medium tracking-tight text-[var(--gallery-text-primary)] sm:text-3xl">
                Compare
              </h1>
            </div>

            <div className="min-w-0 lg:pr-2">
              <CompareSideControls
                side="left"
                catalog={catalog}
                selection={compareState.left}
                onSelectionChange={(selection) =>
                  updateState({
                    ...compareState,
                    left: selection,
                  })
                }
              />
            </div>

            <div className="flex min-w-0 items-end gap-4 lg:pl-2">
              <div className="min-w-0 flex-1">
                <CompareSideControls
                  side="right"
                  catalog={catalog}
                  selection={compareState.right}
                  onSelectionChange={(selection) =>
                    updateState({
                      ...compareState,
                      right: selection,
                    })
                  }
                />
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={swapSelections}
                  aria-label="Swap sides"
                  title="Swap sides"
                  className="inline-flex size-9 cursor-pointer items-center justify-center rounded-md border border-[var(--gallery-border)] bg-[var(--gallery-surface)] text-[var(--gallery-text-secondary)] shadow-[var(--gallery-shadow-sm)] transition-[color,background-color,border-color,transform] hover:border-[var(--gallery-divider-strong)] hover:bg-[var(--gallery-surface-subtle)] hover:text-[var(--gallery-text-primary)] active:scale-90"
                >
                  <ArrowLeftRight className="size-4 opacity-80" aria-hidden="true" />
                </button>
                <div className="relative z-[200]">
                  {copied ? (
                    <div
                      role="status"
                      aria-live="polite"
                      className="gallery-toast-enter pointer-events-none absolute bottom-full left-1/2 z-[200] mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-[var(--gallery-border)] bg-[var(--gallery-tooltip-bg)] px-4 py-2.5 text-sm font-medium text-[var(--gallery-text-primary)] shadow-[var(--gallery-shadow-lg)] backdrop-blur-md"
                    >
                      Link copied
                    </div>
                  ) : null}
                  <button
                    type="button"
                    onClick={copyLink}
                    aria-label={copied ? "Copied" : "Copy link"}
                    title={copied ? "Copied" : "Copy link"}
                    className={clsx(
                      "inline-flex size-9 cursor-pointer items-center justify-center rounded-md border shadow-[var(--gallery-shadow-sm)] transition-[color,background-color,border-color,transform] duration-200 active:scale-90",
                      copyFlash
                        ? "border-[var(--gallery-accent)] bg-[color-mix(in_srgb,var(--gallery-accent)_22%,var(--gallery-accent-hover-mix))] text-[var(--gallery-accent)]"
                        : "border-[var(--gallery-border)] bg-[var(--gallery-surface)] text-[var(--gallery-text-secondary)] hover:border-[var(--gallery-divider-strong)] hover:bg-[var(--gallery-surface-subtle)] hover:text-[var(--gallery-text-primary)]",
                    )}
                  >
                    <Link2
                      className={clsx("size-4", copyFlash ? "opacity-100" : "opacity-80")}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="grid min-h-0 flex-1 gap-12 lg:grid-cols-2 lg:gap-0">
          <ComparePanel
            side="left"
            catalog={catalog}
            selection={compareState.left}
            onSelectionChange={(selection) =>
              updateState({
                ...compareState,
                left: selection,
              })
            }
          />
          <ComparePanel
            side="right"
            catalog={catalog}
            selection={compareState.right}
            onSelectionChange={(selection) =>
              updateState({
                ...compareState,
                right: selection,
              })
            }
          />
        </div>
      </main>
    </div>
  );
}
