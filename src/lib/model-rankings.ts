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
    model: "opus-4.7",
    modelLabel: "Claude Opus 4.7",
    previewGroup: "with-design-skill",
    bestIteration: "3",
    notes: `It’s not just “4.6 except the lowest generations got pulled up.” That undersells it. It’s quite a job: not only layout-wise, but how you take all these different things, customize assets, and put them together so they fit the style of what you’re building. I’m noticing a lot of intentional custom assets. Iteration two’s ASCII for each vault name, the type treatment, and the session live section all read deliberate. Page three on iteration three is the one that got me: a full mushroom illustration, and card icons that look like proper SVG marks instead of the random emoji some Opus runs lean on. Field notes in the right font, imagery that fits the site even when it’s a little silly. Iteration five does the same thing, where every illustration feels like someone actually styled this. Down in practice objects and invitation, the one, two, three kanji touches are just beautiful.`,
  },
  {
    rank: 2,
    model: "opus-4.6",
    modelLabel: "Claude Opus 4.6",
    previewGroup: "with-design-skill",
    bestIteration: "2",
    notes: `Hard to beat on cohesion: it folds the little strengths you see lower in the stack into something cohesive top to bottom. Even iteration one’s terminal concept (not usually my thing) reads tasteful: the refresh animation and how the terminal loads feel intentional. Iteration two’s editorial layout is my favorite, with cards that ease away slightly on hover. Great micro-detail, full-page cohesion, and a first prompt you could plausibly ship. That “first generation is prod-shaped” thing is real; 4.7 just raised the floor on the rest.`,
  },
  {
    rank: 3,
    model: "gemini",
    modelLabel: "Gemini 3.1 Pro",
    previewGroup: "with-design-skill",
    bestIteration: "4",
    notes: `What Gemini doesn’t lack is creativity: iterations usually diverge instead of repeating the same layout recipe, and motion is often a strength. Getting it to do exactly what you asked is another story: tooling flakes, outages, brittle instruction-following (that may age fast). In this gallery it’s strong at inventing new directions; next to Claude it falls short for tight, iterative UI polish.`,
  },
  {
    rank: 4,
    model: "composer-2.0",
    modelLabel: "Composer 2.0",
    previewGroup: "with-design-skill",
    bestIteration: "3",
    notes: `Fast, not expensive, and genuinely good on a lot of fronts. People joke that Composer 2.0 is “Kimi K2.5 part two” because it’s RL’d on Kimi K2.5 (not joking on the lineage), but it’s wrong to treat them as the same model: Cursor put real work in, and the gap in practice (UI included) is big enough that conflating them misses the point.

It still has Composer sickness: it does the bare minimum. Landings here tend to be one screen tall (nothing to scroll), because it rarely goes past what you literally asked.`,
  },
  {
    rank: 5,
    model: "gpt-5.4",
    modelLabel: "GPT-5.4",
    previewGroup: "with-design-skill",
    bestIteration: "5",
    notes: `In the beginning there was nothing; then Sam Altman gave us cards. Cards, cards, cards galore: the pattern stack gets played out fast, and the whole thing trends tasteless even when individual choices look “fine.” If you already know exactly what you want, you can steer it; otherwise it’s a lot of default UI noise.`,
  },
  {
    rank: 6,
    model: "kimi-k-2.5",
    modelLabel: "Kimi K 2.5",
    previewGroup: "with-design-skill",
    bestIteration: "1",
    notes: `Results are middling: animation is fine, but stacked against GPT‑5.4 at its best I’m not sure it wins on overall polish; it’s close enough to feel like a toss-up, and GPT’s own card habit is partly what keeps the race tight. Again: comparative picks in this bench, not a universal law.`,
  },
  {
    rank: 7,
    model: "composer-1.5",
    modelLabel: "Composer 1.5",
    previewGroup: "with-design-skill",
    bestIteration: "4",
    notes: `Taste isn’t the main problem; delivery is. You ask for a landing page and get something more like a square with three sentences (minimal to the point of not doing the job), so it loses points on ambition and creative range for the brief.`,
  },
];

export function getRankingPreviewPath(ranking: ModelRanking): string | undefined {
  const entry = getGalleryEntry(ranking.previewGroup, ranking.model);
  const iteration = entry?.iterations.find((it) => it.id === ranking.bestIteration);
  return iteration?.thumbnailPath;
}
