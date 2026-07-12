import type {
  GalleryCatalogEntry,
  GalleryGroupSlug,
  IterationId,
  ModelSlug,
} from "@/lib/gallery-types";

export type CompareSelection = {
  group: GalleryGroupSlug;
  model: ModelSlug;
  iteration: IterationId;
};

export type CompareState = {
  left: CompareSelection;
  right: CompareSelection;
};

export const compareGroupOrder = [
  "with-design-skill",
  "with-taste-skill",
  "with-ui-sh-skill",
  "without-design-skill",
  "miscellaneous",
] as const satisfies readonly GalleryGroupSlug[];

export const DEFAULT_COMPARE_STATE: CompareState = {
  left: {
    group: "with-design-skill",
    model: "gpt-5.4",
    iteration: "1",
  },
  right: {
    group: "without-design-skill",
    model: "gpt-5.4",
    iteration: "1",
  },
};

export function getModelsForGroup(
  catalog: readonly GalleryCatalogEntry[],
  group: GalleryGroupSlug,
): GalleryCatalogEntry[] {
  return catalog.filter((entry) => entry.group === group);
}

export function getDefaultSelectionForGroup(
  catalog: readonly GalleryCatalogEntry[],
  group: GalleryGroupSlug,
): CompareSelection | null {
  const models = getModelsForGroup(catalog, group);
  const entry = models.find((item) => item.model === "gpt-5.4") ?? models[0];
  return entry
    ? { group: entry.group, model: entry.model, iteration: "1" }
    : null;
}

export function buildCompareHref(state: CompareState): string {
  const params = new URLSearchParams([
    ["leftGroup", state.left.group],
    ["leftModel", state.left.model],
    ["leftIteration", state.left.iteration],
    ["rightGroup", state.right.group],
    ["rightModel", state.right.model],
    ["rightIteration", state.right.iteration],
  ]);

  return `/compare?${params.toString()}`;
}
