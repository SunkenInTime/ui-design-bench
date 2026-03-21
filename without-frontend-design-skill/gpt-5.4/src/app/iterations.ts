export type Iteration = {
  slug: "one" | "two" | "three" | "four" | "five";
  label: string;
  kicker: string;
  description: string;
};

export const iterations: Iteration[] = [
  {
    slug: "one",
    label: "Iteration One",
    kicker: "Editorial",
    description: "A polished, high-end landing page with restrained type, depth, and strong hierarchy.",
  },
  {
    slug: "two",
    label: "Iteration Two",
    kicker: "Product",
    description: "A more direct launch page with a split layout, supporting metrics, and strong actions.",
  },
  {
    slug: "three",
    label: "Iteration Three",
    kicker: "Playful",
    description: "A friendlier concept built from layered cards, motion-like composition, and bright accents.",
  },
  {
    slug: "four",
    label: "Iteration Four",
    kicker: "System",
    description: "A structured dashboard-inspired concept using modular blocks and crisp contrast.",
  },
  {
    slug: "five",
    label: "Iteration Five",
    kicker: "Poster",
    description: "A bold statement-driven direction with oversized messaging and graphic framing.",
  },
];
