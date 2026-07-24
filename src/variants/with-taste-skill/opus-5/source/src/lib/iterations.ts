export type Iteration = {
  /** URL segment, e.g. "1" -> /1 */
  slug: string;
  /** Zero padded label used in the switcher */
  label: string;
  name: string;
  direction: string;
  /** Skill dials: DESIGN_VARIANCE / MOTION_INTENSITY / VISUAL_DENSITY */
  dials: [number, number, number];
  theme: "light" | "dark";
};

export const BRAND = "Tessera";

export const iterations: Iteration[] = [
  {
    slug: "1",
    label: "01",
    name: "Signal",
    direction: "Restrained dark minimalism for technical buyers",
    dials: [6, 4, 3],
    theme: "dark",
  },
  {
    slug: "2",
    label: "02",
    name: "Commonplace",
    direction: "Print editorial for writers and researchers",
    dials: [6, 4, 3],
    theme: "light",
  },
  {
    slug: "3",
    label: "03",
    name: "Cardwall",
    direction: "Brutalist structural grid for power users",
    dials: [9, 5, 6],
    theme: "light",
  },
  {
    slug: "4",
    label: "04",
    name: "Atlas",
    direction: "Premium consumer calm, glass and cobalt",
    dials: [7, 7, 3],
    theme: "light",
  },
  {
    slug: "5",
    label: "05",
    name: "Constellation",
    direction: "Kinetic experimental launch page",
    dials: [9, 9, 3],
    theme: "dark",
  },
];

export function findIteration(pathname: string): Iteration | undefined {
  const segment = pathname.split("/").filter(Boolean)[0];
  return iterations.find((it) => it.slug === segment);
}
