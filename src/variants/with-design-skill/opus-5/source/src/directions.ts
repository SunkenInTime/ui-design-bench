export type Direction = {
  slug: string;
  index: string;
  name: string;
  note: string;
  swatches: [string, string, string];
};

/** The five directions, in the order they were presented. */
export const directions: Direction[] = [
  {
    slug: "/1",
    index: "01",
    name: "Card Catalog",
    note: "Every note gets an address",
    swatches: ["#1c1e19", "#e7dec7", "#a32a22"],
  },
  {
    slug: "/2",
    index: "02",
    name: "Mycelium",
    note: "The value is underground",
    swatches: ["#dfe6d8", "#0f231a", "#e0578c"],
  },
  {
    slug: "/3",
    index: "03",
    name: "Memory Palace",
    note: "Notes have a floor plan",
    swatches: ["#08243f", "#a9c8de", "#e0a73c"],
  },
  {
    slug: "/4",
    index: "04",
    name: "Feedback Loop",
    note: "A brain is a loop, not a tree",
    swatches: ["#e9e4d8", "#ff3d8b", "#2233c4"],
  },
  {
    slug: "/5",
    index: "05",
    name: "Signal Room",
    note: "Recall you can watch happen",
    swatches: ["#0b0e1a", "#57e2d2", "#ff5fa2"],
  },
];
