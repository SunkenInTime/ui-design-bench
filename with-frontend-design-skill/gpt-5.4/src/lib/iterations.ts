export const iterationIds = ["one", "two", "three", "four", "five"] as const;

export type DesignIterationId = (typeof iterationIds)[number];

export const designIterations: ReadonlyArray<{
  id: DesignIterationId;
  href: `/${DesignIterationId}`;
  label: string;
  title: string;
  mood: string;
}> = [
  {
    id: "one",
    href: "/one",
    label: "01",
    title: "Atlas Noir",
    mood: "Midnight constellation",
  },
  {
    id: "two",
    href: "/two",
    label: "02",
    title: "Editorial Memory",
    mood: "Magazine intelligence",
  },
  {
    id: "three",
    href: "/three",
    label: "03",
    title: "Signal Desk",
    mood: "Operational focus",
  },
  {
    id: "four",
    href: "/four",
    label: "04",
    title: "Quiet Garden",
    mood: "Organic calm",
  },
  {
    id: "five",
    href: "/five",
    label: "05",
    title: "Kinetic Recall",
    mood: "Playful acceleration",
  },
] as const;

export const defaultIteration = designIterations[0];
