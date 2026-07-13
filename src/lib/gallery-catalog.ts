import "server-only";

import { galleryManifest } from "@/lib/gallery-manifest";
import type { GalleryCatalogEntry } from "@/lib/gallery-types";

/** Avoid shipping summaries, source paths, and thumbnail metadata to client pickers. */
export const galleryCatalog: GalleryCatalogEntry[] = galleryManifest.map(
  ({ group, groupLabel, model, modelLabel, iterations }) => ({
    group,
    groupLabel,
    model,
    modelLabel,
    iterations: iterations.map((iteration) => iteration.id),
  }),
);
