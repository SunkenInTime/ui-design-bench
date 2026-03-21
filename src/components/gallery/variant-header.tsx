import type { GalleryEntry, IterationId } from "@/lib/gallery-types";
import { GalleryBreadcrumb, IterationLinks } from "@/components/gallery/gallery-shell";

export function VariantHeader({
  entry,
  iteration,
}: {
  entry: GalleryEntry;
  iteration: IterationId;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <GalleryBreadcrumb entry={entry} />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
              {entry.groupLabel}
            </p>
            <h1 className="text-2xl font-semibold text-stone-950">{entry.modelLabel}</h1>
          </div>
          <IterationLinks entry={entry} currentIteration={iteration} />
        </div>
      </div>
    </header>
  );
}
