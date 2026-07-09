import type { GalleryEntry, ModelSlug } from "@/lib/gallery-types";

const MODEL_HOME_ORDER: Record<ModelSlug, { familyOrder: number; tier: number }> = {
  fable: { familyOrder: 0, tier: 50 },
  "opus-4.6": { familyOrder: 1, tier: 46 },
  "opus-4.7": { familyOrder: 1, tier: 47 },
  "opus-4.8": { familyOrder: 1, tier: 48 },
  "sonnet-5": { familyOrder: 1, tier: 50 },
  "gpt-5.4": { familyOrder: 2, tier: 54 },
  "gpt-5.5-low": { familyOrder: 2, tier: 55 },
  "gpt-5.5-high": { familyOrder: 2, tier: 56 },
  sol: { familyOrder: 2, tier: 57 },
  luna: { familyOrder: 2, tier: 57 },
  terra: { familyOrder: 2, tier: 57 },
  gemini: { familyOrder: 3, tier: 31 },
  "gemini-3.5-flash": { familyOrder: 3, tier: 35 },
  "grok-4.5": { familyOrder: 4, tier: 45 },
  "composer-1.5": { familyOrder: 5, tier: 15 },
  "composer-2.0": { familyOrder: 5, tier: 20 },
  "composer-2.5": { familyOrder: 5, tier: 25 },
  "glm-5-turbo": { familyOrder: 6, tier: 50 },
  "glm-5.1": { familyOrder: 6, tier: 51 },
  "glm-5.2": { familyOrder: 6, tier: 52 },
  "kimi-k-2.5": { familyOrder: 7, tier: 25 },
  "kimi-k-2.6": { familyOrder: 7, tier: 26 },
};

export function sortGalleryEntriesForHome(entries: GalleryEntry[]) {
  return entries.toSorted((a, b) => {
    const aOrder = MODEL_HOME_ORDER[a.model];
    const bOrder = MODEL_HOME_ORDER[b.model];
    return (
      aOrder.familyOrder - bOrder.familyOrder ||
      bOrder.tier - aOrder.tier ||
      a.modelLabel.localeCompare(b.modelLabel, undefined, { numeric: true })
    );
  });
}
