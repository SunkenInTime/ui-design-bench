"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { Archive } from "lucide-react";
import type { GalleryEntry, GalleryGroupSlug } from "@/lib/gallery-types";
import {
  ANTHROPIC_FRONTEND_DESIGN_SKILL_URL,
  UNCODEXIFY_SKILL_URL,
} from "@/lib/gallery-anthropic-skill";
import { GalleryCard } from "@/components/gallery/gallery-card";
import { filterGalleryEntriesForArchiveVisibility } from "@/lib/gallery-archived";

function groupHasArchivedRow(entries: GalleryEntry[]): boolean {
  const visibleWhenHidden = filterGalleryEntriesForArchiveVisibility(entries, false);
  return visibleWhenHidden.length < entries.length;
}

export function GalleryGroupSection({
  group,
  entries,
}: {
  group: GalleryGroupSlug;
  entries: GalleryEntry[];
}) {
  const [showArchived, setShowArchived] = useState(false);
  const visibleEntries = filterGalleryEntriesForArchiveVisibility(entries, showArchived);
  const labelId = useId();
  const hasArchived = groupHasArchivedRow(entries);

  const label =
    group === "with-design-skill" ? (
      <>
        With{" "}
        <Link
          href={ANTHROPIC_FRONTEND_DESIGN_SKILL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-2 decoration-neutral-500 underline-offset-[6px] transition-colors hover:text-[var(--gallery-accent)] hover:decoration-[var(--gallery-accent)]"
        >
          Design Skill
        </Link>
      </>
    ) : group === "without-design-skill" ? (
      <>
        Without{" "}
        <Link
          href={ANTHROPIC_FRONTEND_DESIGN_SKILL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-2 decoration-neutral-500 underline-offset-[6px] transition-colors hover:text-[var(--gallery-accent)] hover:decoration-[var(--gallery-accent)]"
        >
          Design Skill
        </Link>
      </>
    ) : group === "with-ui-sh-skill" ? (
      "With UI SH Skill"
    ) : group === "miscellaneous" ? (
      <>
        With{" "}
        <Link
          href={UNCODEXIFY_SKILL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-2 decoration-neutral-500 underline-offset-[6px] transition-colors hover:text-[var(--gallery-accent)] hover:decoration-[var(--gallery-accent)]"
        >
          Uncodexify skill
        </Link>
      </>
    ) : (
      entries[0]?.groupLabel ?? group
    );

  return (
    <section aria-labelledby={labelId} className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
        <h2 id={labelId} className="text-xl font-medium tracking-tight text-neutral-900">
          {label}
        </h2>
        {hasArchived ? (
          <button
            type="button"
            onClick={() => setShowArchived((v) => !v)}
            aria-pressed={showArchived}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm font-medium tracking-tight text-neutral-800 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors hover:border-neutral-400 hover:bg-neutral-50"
          >
            <Archive className="size-4 shrink-0 opacity-80" aria-hidden />
            <span>{showArchived ? "Hide Archived" : "Show Archived"}</span>
          </button>
        ) : null}
      </div>
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {visibleEntries.map((entry) => (
          <GalleryCard key={`${entry.group}-${entry.model}`} entry={entry} />
        ))}
      </div>
    </section>
  );
}
