import "./variant-tailwind.css";
import { GalleryIterationView } from "@/components/gallery/gallery-iteration-view";
import variantModule from "@/variants/without-design-skill/kimi-k-2.5";

export const dynamicParams = false;

export function generateStaticParams() {
  return ["1","2","3","4","5"].map((iteration) => ({ iteration }));
}

export default async function IterationPage({
  params,
}: {
  params: Promise<{ iteration: string }>;
}) {
  const { iteration } = await params;
  return (
    <GalleryIterationView
      group="without-design-skill"
      model="kimi-k-2.5"
      iteration={iteration}
      preview={false}
      variantModule={variantModule}
    />
  );
}
