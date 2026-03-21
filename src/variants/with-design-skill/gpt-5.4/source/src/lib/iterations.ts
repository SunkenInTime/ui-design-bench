import { buildVariantHref } from "@/lib/gallery-paths";

export const iterationIds = ["one", "two", "three", "four", "five"] as const;

export type DesignIterationId = (typeof iterationIds)[number];

export const designIterations: ReadonlyArray<{
  id: DesignIterationId;
  href: string;
  label: string;
  title: string;
  mood: string;
}> = [
  {
    id: "one",
    href: buildVariantHref("with-design-skill", "gpt-5.4", "1"),
    label: "01",
    title: "Atlas Noir",
    mood: "Midnight constellation",
  },
  {
    id: "two",
    href: buildVariantHref("with-design-skill", "gpt-5.4", "2"),
    label: "02",
    title: "Editorial Memory",
    mood: "Magazine intelligence",
  },
  {
    id: "three",
    href: buildVariantHref("with-design-skill", "gpt-5.4", "3"),
    label: "03",
    title: "Signal Desk",
    mood: "Operational focus",
  },
  {
    id: "four",
    href: buildVariantHref("with-design-skill", "gpt-5.4", "4"),
    label: "04",
    title: "Quiet Garden",
    mood: "Organic calm",
  },
  {
    id: "five",
    href: buildVariantHref("with-design-skill", "gpt-5.4", "5"),
    label: "05",
    title: "Kinetic Recall",
    mood: "Playful acceleration",
  },
] as const;

export const defaultIteration = designIterations[0];

