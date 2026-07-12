import { notFound } from "next/navigation";
import { VariantSwitcher } from "@/components/gallery/variant-header";
import { galleryCatalog } from "@/lib/gallery-catalog";
import { getGalleryEntry } from "@/lib/gallery-manifest";
import { isGalleryGroup, isIterationId } from "@/lib/gallery-paths";
import type { VariantModule } from "@/lib/gallery-types";

export function GalleryIterationView({
  group,
  model,
  iteration,
  preview,
  variantModule,
}: {
  group: string;
  model: string;
  iteration: string;
  preview: boolean;
  variantModule: VariantModule;
}) {
  if (!isGalleryGroup(group) || !isIterationId(iteration)) {
    notFound();
  }

  const entry = getGalleryEntry(group, model);
  if (!entry) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--gallery-body-bg)]">
      {!preview ? (
        <VariantSwitcher entry={entry} iteration={iteration} catalog={galleryCatalog} />
      ) : null}
      <div
        className="gallery-generation"
        data-gallery-generation
        data-gallery-group={entry.group}
        data-gallery-model={entry.model}
        data-gallery-iteration={iteration}
      >
        {variantModule.render({ entry, iteration, preview })}
      </div>
    </main>
  );
}
