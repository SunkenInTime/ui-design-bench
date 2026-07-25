/**
 * The five design directions, in switcher order.
 *
 * Shared by the switcher chrome and the index page so route numbering, names and
 * descriptions can never drift apart.
 */
export type Iteration = {
  /** Route path. Also the key the keyboard shortcut listens for. */
  slug: "1" | "2" | "3" | "4" | "5";
  /** Short name for the direction. */
  name: string;
  /** What makes this direction different from the other four. */
  note: string;
  /** Locked page theme, so the index can preview it honestly. */
  theme: "light" | "dark";
  /** Dial settings, as read from the brief. Format: variance / motion / density. */
  dials: string;
};

export const iterations: Iteration[] = [
  {
    slug: "1",
    name: "Commonplace",
    note: "Print editorial. Neutral grey paper, Garamond display, one ink blue accent, hairlines instead of boxes, and almost no motion.",
    theme: "light",
    dials: "6 / 3 / 3",
  },
  {
    slug: "2",
    name: "Terminal",
    note: "Dark developer tool. Monospace, hairline rules, keyboard first, tight information density.",
    theme: "dark",
    dials: "6 / 5 / 6",
  },
  {
    slug: "3",
    name: "Quiet",
    note: "Premium consumer calm. Deep forest and bone, large photography, generous space, soft glass.",
    theme: "light",
    dials: "7 / 6 / 3",
  },
  {
    slug: "4",
    name: "Utility",
    note: "Brutalist. Zero radius, 3px rules, safety orange, everything stated flatly.",
    theme: "light",
    dials: "9 / 4 / 7",
  },
  {
    slug: "5",
    name: "Kinetic",
    note: "Motion led. A pinned horizontal pan and a sticky card stack carry the argument, under oversized type and a rose accent.",
    theme: "dark",
    dials: "9 / 9 / 4",
  },
];
