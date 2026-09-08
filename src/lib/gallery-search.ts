import type { GalleryEntry } from "@/lib/gallery-types";
import { getModelLab } from "@/lib/model-labs";

/**
 * Lowercases and strips punctuation so "gpt-5.5", "GPT 5.5" and "gpt5.5"
 * all collapse to the same tokens.
 */
function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/[‐-―\-_/()]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function haystackFor(entry: GalleryEntry): string {
  const lab = getModelLab(entry.model);
  return normalize(
    [entry.modelLabel, entry.model, lab.label, lab.slug, entry.groupLabel].join(" "),
  );
}

export function normalizeGalleryQuery(query: string): string {
  return normalize(query);
}

/**
 * Every whitespace-separated term in the query has to appear somewhere in the
 * entry's label, slug, lab, or group label. Matching is substring-based so
 * "5.5" hits "GPT 5.5 low" and "astra" hits both Astra rows.
 */
export function galleryEntryMatchesQuery(entry: GalleryEntry, query: string): boolean {
  const terms = normalize(query).split(" ").filter(Boolean);
  if (terms.length === 0) return true;
  const haystack = haystackFor(entry);
  const compact = haystack.replace(/ /g, "");
  return terms.every((term) => haystack.includes(term) || compact.includes(term));
}

export function filterGalleryEntriesByQuery(
  entries: GalleryEntry[],
  query: string,
): GalleryEntry[] {
  if (normalize(query).length === 0) return entries;
  return entries.filter((entry) => galleryEntryMatchesQuery(entry, query));
}
