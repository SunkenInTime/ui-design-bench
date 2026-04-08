import { notFound } from "next/navigation";
import { VariantSwitcher } from "@/components/gallery/variant-header";
import { getGalleryEntry } from "@/lib/gallery-manifest";
import { getVariantModule } from "@/lib/gallery-registry";
import { isGalleryGroup, isIterationId } from "@/lib/gallery-paths";

export function GalleryIterationView({
  group,
  model,
  iteration,
  preview,
}: {
  group: string;
  model: string;
  iteration: string;
  preview: boolean;
}) {
  if (!isGalleryGroup(group) || !isIterationId(iteration)) {
    notFound();
  }

  const entry = getGalleryEntry(group, model);
  const variantModule = entry ? getVariantModule(entry.group, entry.model) : undefined;
  if (!entry || !variantModule) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {!preview ? <VariantSwitcher entry={entry} iteration={iteration} /> : null}
      {variantModule.render({ entry, iteration, preview })}
    </main>
  );
}
