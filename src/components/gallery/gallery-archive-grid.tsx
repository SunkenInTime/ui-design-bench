"use client";

import { Fragment, lazy, Suspense, useState, useTransition, type ReactNode } from "react";
import type { GalleryCardEntry } from "@/components/gallery/gallery-card";

type VisibleGridItem = {
  key: string;
  archived: false;
  card: ReactNode;
};

type ArchivedGridItem = {
  key: string;
  archived: true;
  entry: GalleryCardEntry;
  compareHref: string;
};

type ArchiveGridItem = VisibleGridItem | ArchivedGridItem;

const LazyGalleryCard = lazy(async () => {
  const galleryCardModule = await import("@/components/gallery/gallery-card");
  return { default: galleryCardModule.GalleryCard };
});

export function GalleryArchiveGrid({
  labelId,
  label,
  items,
  hasArchived,
}: {
  labelId: string;
  label: ReactNode;
  items: ArchiveGridItem[];
  hasArchived: boolean;
}) {
  const [showArchived, setShowArchived] = useState(false);
  const [isPending, startTransition] = useTransition();

  return (
    <section
      aria-labelledby={labelId}
      className="gallery-group-section space-y-8"
    >
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
        <h2
          id={labelId}
          className="text-xl font-medium tracking-tight text-[var(--gallery-text-primary)]"
        >
          {label}
        </h2>
        {hasArchived ? (
          <button
            type="button"
            onClick={() => {
              startTransition(() => setShowArchived((value) => !value));
            }}
            aria-pressed={showArchived}
            aria-busy={isPending}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-[var(--gallery-divider-strong)] bg-[var(--gallery-surface)] px-3 py-1.5 text-sm font-medium tracking-tight text-[var(--gallery-text-primary)] shadow-[var(--gallery-shadow-sm)] transition-colors hover:border-[var(--gallery-text-quaternary)] hover:bg-[var(--gallery-surface-subtle)]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4 shrink-0 opacity-80"
              aria-hidden="true"
            >
              <rect width="20" height="5" x="2" y="3" rx="1" />
              <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
              <path d="M10 12h4" />
            </svg>
            <span>{showArchived ? "Hide Archived" : "Show Archived"}</span>
          </button>
        ) : null}
      </div>
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
        {items.map((item) => {
          if (!item.archived) {
            return <Fragment key={item.key}>{item.card}</Fragment>;
          }

          return showArchived ? (
            <Suspense
              key={item.key}
              fallback={
                <article
                  aria-hidden="true"
                  className="gallery-card-shell min-h-80 rounded-lg border bg-[var(--gallery-surface)]"
                />
              }
            >
              <LazyGalleryCard entry={item.entry} compareHref={item.compareHref} />
            </Suspense>
          ) : null;
        })}
      </div>
    </section>
  );
}
