import { galleryManifest } from "@/lib/gallery-manifest";

/** Params for `/[group]/[model]` and matching preview model segments. */
export function getStaticGalleryModelParams() {
  return galleryManifest.map((entry) => ({
    group: entry.group,
    model: entry.model,
  }));
}

/** Params for `/[group]/[model]/[iteration]` and matching preview iteration segments. */
export function getStaticGalleryIterationParams() {
  return galleryManifest.flatMap((entry) =>
    entry.iterations.map((it) => ({
      group: entry.group,
      model: entry.model,
      iteration: it.id,
    })),
  );
}
