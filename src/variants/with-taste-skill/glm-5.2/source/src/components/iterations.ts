export type Iteration = {
  slug: string;
  href: string;
  index: number;
  name: string;
  blurb: string;
  accent: string;
  theme: "light" | "dark";
};

export const ITERATIONS: Iteration[] = [
  {
    slug: "one",
    href: "/one",
    index: 1,
    name: "Quiet Index",
    blurb: "Light, minimalist, emerald accent",
    accent: "emerald",
    theme: "light",
  },
  {
    slug: "two",
    href: "/two",
    index: 2,
    name: "Night Console",
    blurb: "Dark devtool, lime accent, bento",
    accent: "lime",
    theme: "dark",
  },
  {
    slug: "three",
    href: "/three",
    index: 3,
    name: "Cobalt Editorial",
    blurb: "Editorial light, cobalt accent",
    accent: "cobalt",
    theme: "light",
  },
  {
    slug: "four",
    href: "/four",
    index: 4,
    name: "Rose Studio",
    blurb: "Warm dark, rose accent, motion-led",
    accent: "rose",
    theme: "dark",
  },
  {
    slug: "five",
    href: "/five",
    index: 5,
    name: "Mono Brutalist",
    blurb: "Sharp light, electric blue",
    accent: "blue",
    theme: "light",
  },
];
