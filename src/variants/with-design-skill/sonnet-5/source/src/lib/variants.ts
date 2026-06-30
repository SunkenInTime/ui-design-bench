export type Variant = {
  id: string;
  number: string;
  name: string;
  concept: string;
  accent: string;
  chrome: string;
  chromeText: string;
};

export const variants: Variant[] = [
  {
    id: "1",
    number: "01",
    name: "Slip-Box",
    concept: "Card catalog",
    accent: "#B08D57",
    chrome: "#1b2b22",
    chromeText: "#f7f2e7",
  },
  {
    id: "2",
    number: "02",
    name: "Mind Palace",
    concept: "Blueprint",
    accent: "#6CC4D9",
    chrome: "#0c1f33",
    chromeText: "#eaf2f5",
  },
  {
    id: "3",
    number: "03",
    name: "Digital Garden",
    concept: "Growth",
    accent: "#5b7a4f",
    chrome: "#33402c",
    chromeText: "#f2efe3",
  },
  {
    id: "4",
    number: "04",
    name: "Star Atlas",
    concept: "Celestial",
    accent: "#D4AF6A",
    chrome: "#0e1a2b",
    chromeText: "#f2f0e6",
  },
  {
    id: "5",
    number: "05",
    name: "Switchboard",
    concept: "Patch bay",
    accent: "#C1432B",
    chrome: "#211a16",
    chromeText: "#ede3d0",
  },
];

export function getVariant(id: string): Variant | undefined {
  return variants.find((v) => v.id === id);
}
