import { notFound } from "next/navigation";

import { BrainLanding, getIteration, iterations, type IterationId } from "@/variants/without-design-skill/luna/source/src/components/brain-landing";

export function generateStaticParams() {
  return iterations.map(({ id }) => ({ version: id }));
}

export default async function IterationPage({ params }: { params: Promise<{ version: string }> }) {
  const { version } = await params;
  const iteration = getIteration(version);

  if (!iteration) {
    notFound();
  }

  return <BrainLanding iteration={iteration.id as IterationId} />;
}
