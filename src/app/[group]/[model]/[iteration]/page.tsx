import { notFound } from "next/navigation";
import { VariantSwitcher } from "@/components/gallery/variant-header";
import { getGalleryEntry } from "@/lib/gallery-manifest";
import { getVariantModule } from "@/lib/gallery-registry";
import { isGalleryGroup, isIterationId } from "@/lib/gallery-paths";

export default async function IterationPage({
  params,
  searchParams,
}: {
  params: Promise<{ group: string; model: string; iteration: string }>;
  searchParams: Promise<{ preview?: string }>;
}) {
  const { group, model, iteration } = await params;
  const { preview } = await searchParams;

  if (!isGalleryGroup(group) || !isIterationId(iteration)) {
    notFound();
  }

  const entry = getGalleryEntry(group, model);
  const variantModule = entry ? getVariantModule(entry.group, entry.model) : undefined;
  if (!entry || !variantModule) {
    notFound();
  }

  const previewMode = preview === "1";

  return (
    <main className="min-h-screen bg-white">
      {!previewMode ? <VariantSwitcher entry={entry} iteration={iteration} /> : null}
      {variantModule.render({ entry, iteration, preview: previewMode })}
    </main>
  );
}
