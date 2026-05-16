import type { GalleryEntry, ModelSlug } from "@/lib/gallery-types";

/**
 * Defines model lineages for the gallery home page only. Within a gallery group section,
 * a model is "archived" when another model shares the same `family` with a strictly higher tier.
 */
const MODEL_GALLERY_GENERATION = {
  "composer-1.5": { family: "composer", tier: 1 },
  "composer-2.0": { family: "composer", tier: 2 },
  "gpt-5.4": { family: "gpt", tier: 1 },
  "gpt-5.5-low": { family: "gpt", tier: 2 },
  "gpt-5.5-high": { family: "gpt", tier: 2 },
  "kimi-k-2.5": { family: "kimi", tier: 1 },
  "kimi-k-2.6": { family: "kimi", tier: 2 },
  "opus-4.6": { family: "opus", tier: 1 },
  "opus-4.7": { family: "opus", tier: 2 },
  "glm-5-turbo": { family: "glm", tier: 1 },
  "glm-5.1": { family: "glm", tier: 2 },
} as const satisfies Partial<
  Record<ModelSlug, { family: string; tier: number }>
>;

function maxTierInFamily(entries: GalleryEntry[], family: string): number {
  let max = 0;
  for (const entry of entries) {
    const gen = MODEL_GALLERY_GENERATION[entry.model as keyof typeof MODEL_GALLERY_GENERATION];
    if (gen?.family !== family) continue;
    max = Math.max(max, gen.tier);
  }
  return max;
}

export function isGalleryModelArchivedWithinGroup(entries: GalleryEntry[], entry: GalleryEntry): boolean {
  const gen = MODEL_GALLERY_GENERATION[entry.model as keyof typeof MODEL_GALLERY_GENERATION];
  if (!gen) return false;
  const cap = maxTierInFamily(entries, gen.family);
  return gen.tier < cap;
}

export function filterGalleryEntriesForArchiveVisibility(
  entries: GalleryEntry[],
  showArchived: boolean,
): GalleryEntry[] {
  if (showArchived) return entries;
  return entries.filter((entry) => !isGalleryModelArchivedWithinGroup(entries, entry));
}
