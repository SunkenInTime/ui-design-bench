import type { ModelSlug } from "@/lib/gallery-types";

export interface ModelRanking {
  rank: number;
  model: ModelSlug;
  modelLabel: string;
  pros: readonly string[];
  cons: readonly string[];
  notes: string;
}

export const modelRankings: readonly ModelRanking[] = [
  {
    rank: 1,
    model: "opus-4.6",
    modelLabel: "Opus 4.6",
    pros: [
      "Rich motion and distinct themes across iterations without feeling random.",
      "Strong information hierarchy on dense marketing-style layouts.",
    ],
    cons: [
      "Vite port adds surface area compared to a single Next route bundle.",
      "Some iterations skew heavier visually than a minimal landing might need.",
    ],
    notes:
      "Often the most opinionated outputs in the bench—good when you want a bold direction and are ready to trim.",
  },
  {
    rank: 2,
    model: "gpt-5.4",
    modelLabel: "GPT-5.4",
    pros: [
      "Editorial typography and art-directed sections read as intentional.",
      "Iteration switcher patterns are usually clear and discoverable.",
    ],
    cons: [
      "Layouts can get busy before you ask for restraint.",
      "Copy and section count sometimes overshoot a simple brief.",
    ],
    notes:
      "Reliable when the prompt asks for multiple explorations with a gallery-like presentation.",
  },
  {
    rank: 3,
    model: "gemini",
    modelLabel: "Gemini 3.1 Pro",
    pros: [
      "Motion and interactive flourishes tend to feel cohesive.",
      "Persistent switchers make comparing iterations straightforward.",
    ],
    cons: [
      "Effects-first pages may need performance passes on low-end devices.",
      "Visual language can converge on a similar “product demo” cadence.",
    ],
    notes:
      "A solid pick when you want polish and motion without hand-authoring every transition.",
  },
  {
    rank: 4,
    model: "composer-2.0",
    modelLabel: "Composer 2.0",
    pros: [
      "Consistent theming across iterations with reusable visual motifs.",
      "Usually lands readable spacing and button affordances quickly.",
    ],
    cons: [
      "Brand-forward treatments can dominate over content hierarchy.",
      "Some routes may need copy tightening for production.",
    ],
    notes:
      "This gallery itself was designed with Composer 2.0—good fit for cohesive marketing shells.",
  },
  {
    rank: 5,
    model: "kimi-k-2.5",
    modelLabel: "Kimi K 2.5",
    pros: [
      "High contrast and clear sectioning for scan-friendly pages.",
      "Floating switchers are easy to spot and use.",
    ],
    cons: [
      "Visual intensity varies; some iterations feel louder than others.",
      "Fine typography tuning may still be manual.",
    ],
    notes:
      "Strong when you want punchy sections and obvious navigation between iterations.",
  },
  {
    rank: 6,
    model: "composer-1.5",
    modelLabel: "Composer 1.5",
    pros: [
      "Expressive layouts with a lighter hand than the heaviest entries.",
      "Iteration grids and links are typically easy to follow.",
    ],
    cons: [
      "Less consistent “system” across iterations than newer models.",
      "May need more design direction to avoid generic SaaS patterns.",
    ],
    notes:
      "A practical baseline—good for rapid exploration when you plan to iterate in the editor.",
  },
];
