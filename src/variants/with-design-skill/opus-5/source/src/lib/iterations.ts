export type Iteration = {
  slug: string;
  name: string;
  premise: string;
};

/** The five design directions, in switcher order. */
export const ITERATIONS: Iteration[] = [
  {
    slug: "1",
    name: "Card catalog",
    premise: "Notes as index cards in a library drawer.",
  },
  {
    slug: "2",
    name: "Memory palace",
    premise: "The vault drawn as an architectural blueprint.",
  },
  {
    slug: "3",
    name: "Overprint",
    premise: "Risograph layers: two ideas making a third.",
  },
  {
    slug: "4",
    name: "Core sample",
    premise: "A decade of notes read as rock strata.",
  },
  {
    slug: "5",
    name: "Wayfinding",
    premise: "Links as a transit network with interchanges.",
  },
];
