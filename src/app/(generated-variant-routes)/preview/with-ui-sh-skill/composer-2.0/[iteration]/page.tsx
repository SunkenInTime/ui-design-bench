import "./variant-tailwind.css";
import { GalleryIterationView } from "@/components/gallery/gallery-iteration-view";
import variantModule from "@/variants/with-ui-sh-skill/composer-2.0";

export const dynamicParams = false;

export function generateStaticParams() {
  return ["1","2","3","4","5"].map((iteration) => ({ iteration }));
}

export default async function PreviewIterationPage({
  params,
}: {
  params: Promise<{ iteration: string }>;
}) {
  const { iteration } = await params;
  return (
    <GalleryIterationView
      group="with-ui-sh-skill"
      model="composer-2.0"
      iteration={iteration}
      preview={true}
      variantModule={variantModule}
    />
  );
}
