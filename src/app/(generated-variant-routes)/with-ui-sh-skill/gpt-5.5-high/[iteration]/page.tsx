import "./variant-tailwind.css";
import { GalleryIterationView } from "@/components/gallery/gallery-iteration-view";
import variantModule from "@/variants/with-ui-sh-skill/gpt-5.5-high";

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
      group="with-ui-sh-skill"
      model="gpt-5.5-high"
      iteration={iteration}
      preview={false}
      variantModule={variantModule}
    />
  );
}
