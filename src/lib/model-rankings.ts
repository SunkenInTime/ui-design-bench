import type { GalleryGroupSlug, IterationId, ModelSlug } from "@/lib/gallery-types";
import { getGalleryEntry } from "@/lib/gallery-manifest";

export interface ModelRanking {
  /** 1 = highest */
  rank: number;
  model: ModelSlug;
  modelLabel: string;
  /** Which generated run the “best” screenshot is taken from */
  previewGroup: GalleryGroupSlug;
  bestIteration: IterationId;
  notes: string;
}

/**
 * Subjective ordering and notes for the bench. Edit `bestIteration` / `previewGroup`
 * to point at the preview you consider strongest among the five iterations.
 */
export const modelRankings: ModelRanking[] = [
  {
    rank: 1,
    model: "fable-5.1",
    modelLabel: "Fable 5.1",
    previewGroup: "with-design-skill",
    bestIteration: "1",
    notes: `Every page feels visually distinct, and the animation work is consistently excellent. It feels like the best version of this whole generation of frontend models. Clear number one.`,
  },
  {
    rank: 2,
    model: "opus-5",
    modelLabel: "Opus 5",
    previewGroup: "with-design-skill",
    bestIteration: "2",
    notes: `Excellent. It can carry an idea through a full page without the design falling apart. Fable 5.1 wins because its five attempts feel more distinct and the motion is better.`,
  },
  {
    rank: 3,
    model: "kimi-k3",
    modelLabel: "Kimi K3",
    previewGroup: "with-design-skill",
    bestIteration: "4",
    notes: `I went back and forth on third, but Kimi K3 kept winning the comparison. It takes bigger swings than the middle tier without immediately falling apart.`,
  },
  {
    rank: 4,
    model: "glm-5.3-flash",
    modelLabel: "GLM 5.3 Flash",
    previewGroup: "with-design-skill",
    bestIteration: "4",
    notes: `The clear leader of the middle tier. Its layouts and visuals actually hold together. The gap between GLM 5.3 Flash and Grok is not close.`,
  },
  {
    rank: 5,
    model: "gemini-3.8-flash",
    modelLabel: "Gemini 3.8 Flash",
    previewGroup: "with-design-skill",
    bestIteration: "2",
    notes: `The layouts are genuinely good, which is enough to put it directly behind GLM. It still dumps way too much fucking text onto every page.`,
  },
  {
    rank: 6,
    model: "grok-4.6",
    modelLabel: "Grok 4.6",
    previewGroup: "with-design-skill",
    bestIteration: "2",
    notes: `There is an idea of where each page should go, but Grok sucks at turning that idea into visuals that make proper sense. It is not close to GLM 5.3 Flash.`,
  },
  {
    rank: 7,
    model: "sol",
    modelLabel: "GPT-5.6 Sol",
    previewGroup: "with-design-skill",
    bestIteration: "4",
    notes: `Great ideas, absolutely dog-shit colors, and so much text. The GPT-isms are still all over it. Absolutely horrible.`,
  },
  {
    rank: 8,
    model: "sonnet-5",
    modelLabel: "Sonnet 5",
    previewGroup: "with-design-skill",
    bestIteration: "4",
    notes: `The output is good. The price is stupid. There is no reasonable case for using Sonnet 5 for frontend work when the models above can get you there for less.`,
  },
];

export function getRankingPreviewPath(ranking: ModelRanking): string | undefined {
  const entry = getGalleryEntry(ranking.previewGroup, ranking.model);
  const iteration = entry?.iterations.find((it) => it.id === ranking.bestIteration);
  return iteration?.thumbnailPath;
}
