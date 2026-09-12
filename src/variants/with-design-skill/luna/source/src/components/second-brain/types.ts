export type IterationId = 1 | 2 | 3 | 4 | 5;

export const iterations: Array<{
  id: IterationId;
  name: string;
  descriptor: string;
}> = [
  { id: 1, name: "Pocket atlas", descriptor: "A map for the mind" },
  { id: 2, name: "Night signal", descriptor: "Catch the good signal" },
  { id: 3, name: "Soft architecture", descriptor: "Make room for thought" },
  { id: 4, name: "Index machine", descriptor: "Give ideas a spine" },
  { id: 5, name: "Quiet library", descriptor: "Keep the good parts close" },
];
