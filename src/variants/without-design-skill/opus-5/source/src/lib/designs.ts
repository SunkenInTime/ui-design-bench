export type Design = {
  /** Route number, doubles as the keyboard shortcut. */
  id: number;
  href: string;
  name: string;
  direction: string;
  note: string;
  /** Swatch shown in the switcher; roughly the page's dominant accent. */
  accent: string;
  /** Whether the page reads as light or dark, for the switcher preview. */
  tone: "light" | "dark";
};

export const designs: Design[] = [
  {
    id: 1,
    href: "/1",
    name: "Synapse",
    direction: "Dark / knowledge graph",
    note: "Connections as the hero. Animated node graph, electric accents.",
    accent: "#8b5cf6",
    tone: "dark",
  },
  {
    id: 2,
    href: "/2",
    name: "Marginalia",
    direction: "Warm / editorial paper",
    note: "Reads like a well-loved notebook. Serif display, ruled paper, sticky notes.",
    accent: "#c2410c",
    tone: "light",
  },
  {
    id: 3,
    href: "/3",
    name: "Command",
    direction: "Terminal / keyboard-first",
    note: "For people who never touch the mouse. Phosphor green, monospaced.",
    accent: "#4ade80",
    tone: "dark",
  },
  {
    id: 4,
    href: "/4",
    name: "Atlas",
    direction: "Bright / product-forward",
    note: "Classic SaaS confidence. Soft gradients and a glassy app mock.",
    accent: "#4f46e5",
    tone: "light",
  },
  {
    id: 5,
    href: "/5",
    name: "Cortex",
    direction: "Brutalist / poster",
    note: "Loud and physical. Oversized type, hard borders, lime on black.",
    accent: "#bef264",
    tone: "dark",
  },
];

export function findDesign(pathname: string): Design | undefined {
  return designs.find((design) => design.href === pathname);
}
