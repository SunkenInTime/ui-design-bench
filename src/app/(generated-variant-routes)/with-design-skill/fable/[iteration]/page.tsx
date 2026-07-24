import "./variant-tailwind.css";
import { GalleryIterationView } from "@/components/gallery/gallery-iteration-view";
import variantModule from "@/variants/with-design-skill/fable";

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
      group="with-design-skill"
      model="fable"
      iteration={iteration}
      preview={false}
      variantModule={variantModule}
    />
  );
}
