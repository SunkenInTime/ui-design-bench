import { GalleryIterationView } from "@/components/gallery/gallery-iteration-view";
import { getStaticGalleryIterationParams } from "@/lib/gallery-static-params";

export const dynamicParams = false;

export function generateStaticParams() {
  return getStaticGalleryIterationParams();
}

export default async function PreviewIterationPage({
  params,
}: {
  params: Promise<{ group: string; model: string; iteration: string }>;
}) {
  const { group, model, iteration } = await params;
  return <GalleryIterationView group={group} model={model} iteration={iteration} preview />;
}
