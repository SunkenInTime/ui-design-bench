import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Archive from "../designs/d1/Archive";
import Observatory from "../designs/d2/Observatory";
import Garden from "../designs/d3/Garden";
import Instrument from "../designs/d4/Instrument";
import Blueprint from "../designs/d5/Blueprint";

const DESIGNS: Record<
  string,
  { title: string; description: string; Component: () => React.ReactNode }
> = {
  "1": {
    title: "Cortex — The Archive",
    description:
      "Design iteration 1/5: the library card catalog. Your mind, on file.",
    Component: Archive,
  },
  "2": {
    title: "Cortex — The Observatory",
    description:
      "Design iteration 2/5: your ideas mapped as a night sky of linked stars.",
    Component: Observatory,
  },
  "3": {
    title: "Cortex — The Garden",
    description:
      "Design iteration 3/5: a digital garden where notes grow from seedlings to evergreen.",
    Component: Garden,
  },
  "4": {
    title: "Cortex — The Instrument",
    description:
      "Design iteration 4/5: a precision instrument that records signal from noise.",
    Component: Instrument,
  },
  "5": {
    title: "Cortex — The Blueprint",
    description:
      "Design iteration 5/5: architectural plans for a second brain.",
    Component: Blueprint,
  },
};

export function generateStaticParams() {
  return Object.keys(DESIGNS).map((design) => ({ design }));
}

export const dynamicParams = false;

export async function generateMetadata(props: {
  params: Promise<{ design: string }>;
}): Promise<Metadata> {
  const { design } = await props.params;
  const entry = DESIGNS[design];
  if (!entry) return {};
  return { title: entry.title, description: entry.description };
}

export default async function Page(props: {
  params: Promise<{ design: string }>;
}) {
  const { design } = await props.params;
  const entry = DESIGNS[design];
  if (!entry) notFound();
  const { Component } = entry;
  return <Component />;
}
