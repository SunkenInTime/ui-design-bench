import "./variant-tailwind.css";
import { GalleryIterationView } from "@/components/gallery/gallery-iteration-view";
import variantModule from "@/variants/without-design-skill/gpt-5.4";

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
      model="gpt-5.4"
      iteration={iteration}
      preview={false}
      variantModule={variantModule}
    />
  );
}
