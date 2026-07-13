import Link from "next/link";
import type { GalleryEntry, GalleryGroupSlug } from "@/lib/gallery-types";
import {
  ANTHROPIC_FRONTEND_DESIGN_SKILL_URL,
  TASTE_SKILL_URL,
  UNCODEXIFY_SKILL_URL,
} from "@/lib/gallery-anthropic-skill";
import { GalleryCard } from "@/components/gallery/gallery-card";
import { GalleryArchiveGrid } from "@/components/gallery/gallery-archive-grid";
import type { GalleryCardEntry } from "@/components/gallery/gallery-card";
import { isGalleryModelArchivedWithinGroup } from "@/lib/gallery-archived";
import { buildCompareHrefForSelection } from "@/lib/compare-server";

export function GalleryGroupSection({
  group,
  entries,
  preloadFirstImage = false,
}: {
  group: GalleryGroupSlug;
  entries: GalleryEntry[];
  preloadFirstImage?: boolean;
}) {
  const labelId = `gallery-group-${group}`;

  const label =
    group === "with-design-skill" ? (
      <>
        With{" "}
        <Link
          href={ANTHROPIC_FRONTEND_DESIGN_SKILL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-2 decoration-[var(--gallery-text-tertiary)] underline-offset-[6px] transition-colors hover:text-[var(--gallery-accent)] hover:decoration-[var(--gallery-accent)]"
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
          className="underline decoration-2 decoration-[var(--gallery-text-tertiary)] underline-offset-[6px] transition-colors hover:text-[var(--gallery-accent)] hover:decoration-[var(--gallery-accent)]"
        >
          Design Skill
        </Link>
      </>
    ) : group === "with-taste-skill" ? (
      <>
        With{" "}
        <Link
          href={TASTE_SKILL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-2 decoration-[var(--gallery-text-tertiary)] underline-offset-[6px] transition-colors hover:text-[var(--gallery-accent)] hover:decoration-[var(--gallery-accent)]"
        >
          Taste Skill
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
          className="underline decoration-2 decoration-[var(--gallery-text-tertiary)] underline-offset-[6px] transition-colors hover:text-[var(--gallery-accent)] hover:decoration-[var(--gallery-accent)]"
        >
          Uncodexify skill
        </Link>
      </>
    ) : (
      entries[0]?.groupLabel ?? group
    );

  const firstVisibleEntry = preloadFirstImage
    ? entries.find((entry) => !isGalleryModelArchivedWithinGroup(entries, entry))
    : undefined;
  const items = entries.map((entry) => {
    const archived = isGalleryModelArchivedWithinGroup(entries, entry);
    const cardEntry = {
      group: entry.group,
      groupLabel: entry.groupLabel,
      model: entry.model,
      modelLabel: entry.modelLabel,
      defaultIteration: entry.defaultIteration,
      iterations: entry.iterations.map(({ id, thumbnailPath }) => ({ id, thumbnailPath })),
    } satisfies GalleryCardEntry;
    const compareHref = buildCompareHrefForSelection({
      group: entry.group,
      model: entry.model,
      iteration: "1",
    });

    return archived
      ? {
          key: `${entry.group}-${entry.model}`,
          archived: true as const,
          entry: cardEntry,
          compareHref,
        }
      : {
          key: `${entry.group}-${entry.model}`,
          archived: false as const,
          card: (
            <GalleryCard
              entry={cardEntry}
              compareHref={compareHref}
              preload={firstVisibleEntry === entry}
            />
          ),
        };
  });

  return (
    <GalleryArchiveGrid
      labelId={labelId}
      label={label}
      items={items}
      hasArchived={items.some((item) => item.archived)}
    />
  );
}
