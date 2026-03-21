import { notFound } from "next/navigation";

import { renderIteration } from "@/variants/with-design-skill/gpt-5.4/source/src/components/landing-iterations";
import {
  designIterations,
  iterationIds,
  type DesignIterationId,
} from "@/variants/with-design-skill/gpt-5.4/source/src/lib/iterations";

type IterationPageProps = {
  params: Promise<{ iteration: string }>;
};

export function generateStaticParams() {
  return iterationIds.map((iteration) => ({ iteration }));
}

export async function generateMetadata({ params }: IterationPageProps) {
  const { iteration } = await params;
  const currentIteration = designIterations.find((item) => item.id === iteration);

  if (!currentIteration) {
    return {};
  }

  return {
    title: `${currentIteration.title} | Nerva`,
    description: `Landing page design iteration ${currentIteration.label} for Nerva, a note-taking second brain.`,
  };
}

export default async function IterationPage({ params }: IterationPageProps) {
  const { iteration } = await params;

  if (!iterationIds.includes(iteration as DesignIterationId)) {
    notFound();
  }

  return renderIteration(iteration as DesignIterationId);
}
