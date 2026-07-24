export type Card = {
  call: string;
  heading: string;
  body: string;
  filed: string;
  backlinks: number;
  /** Subject tracings, numbered the way a catalog card numbers them. */
  tracings: string[];
  seeAlso: string[];
};

/**
 * The demo drawer: five cards from one person's reading on external memory.
 * Every `seeAlso` entry is the call number of another card in this drawer, so
 * the cross-references in the hero actually resolve.
 */
export const cards: Card[] = [
  {
    call: "MEM 2.14",
    heading: "External memory, uses of",
    body: "Storage was never the problem. Retrieval is. A note you can never be reminded of is a note you did not take.",
    filed: "04 MAR",
    backlinks: 6,
    tracings: ["Memory, external", "Retrieval", "Reminding"],
    seeAlso: ["LUH 1.03", "ATT 9.02"],
  },
  {
    call: "LUH 1.03",
    heading: "Luhmann, N. — slip box",
    body: "Ninety thousand cards, one address each. He did not file by topic. He filed by what a card pointed at next.",
    filed: "11 MAR",
    backlinks: 4,
    tracings: ["Zettelkasten", "Sociologists — method", "Addresses"],
    seeAlso: ["IDX 4.40", "MEM 2.14"],
  },
  {
    call: "IDX 4.40",
    heading: "Indexing against filing",
    body: "A folder asks you to guess, today, where you will go looking in ten years. An index lets the question arrive from any direction.",
    filed: "19 MAR",
    backlinks: 9,
    tracings: ["Indexes", "Folders — futility of", "Questions"],
    seeAlso: ["CAP 6.11", "LUH 1.03"],
  },
  {
    call: "ATT 9.02",
    heading: "Attention, cost of switching",
    body: "Capture has to cost less than the thought is worth. Two seconds is the entire budget, and the drawer has to be open already.",
    filed: "02 APR",
    backlinks: 3,
    tracings: ["Attention", "Interruption", "Cost, cognitive"],
    seeAlso: ["CAP 6.11", "MEM 2.14"],
  },
  {
    call: "CAP 6.11",
    heading: "Capture, frictionless",
    body: "Voice memo at six in the morning, a clipped paragraph at noon, half a sentence at midnight. All of it lands in the same drawer.",
    filed: "16 APR",
    backlinks: 5,
    tracings: ["Capture", "Voice memos", "Habits — daily"],
    seeAlso: ["ATT 9.02", "IDX 4.40"],
  },
];
