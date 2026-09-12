export type Design = {
  slug: string;
  n: string;
  name: string;
  vibe: string;
  /** Swatch colors for the gallery + switcher previews: [bg, ink, accent] */
  swatch: [string, string, string];
};

export const designs: Design[] = [
  {
    slug: "/1",
    n: "01",
    name: "Aurora",
    vibe: "Dark, luminous, graph-native",
    swatch: ["#05060a", "#e6e8f0", "#8b5cf6"],
  },
  {
    slug: "/2",
    n: "02",
    name: "Paper",
    vibe: "Editorial, serif, quiet",
    swatch: ["#faf7f2", "#1a1815", "#b4532a"],
  },
  {
    slug: "/3",
    n: "03",
    name: "Acid",
    vibe: "Brutalist grid, loud",
    swatch: ["#eeeeea", "#111111", "#ccff00"],
  },
  {
    slug: "/4",
    n: "04",
    name: "Studio",
    vibe: "Polished SaaS, product-led",
    swatch: ["#ffffff", "#0f172a", "#4f46e5"],
  },
  {
    slug: "/5",
    n: "05",
    name: "Terminal",
    vibe: "Keyboard-first, monospace",
    swatch: ["#0a0a0a", "#d4d4d4", "#4ade80"],
  },
];
