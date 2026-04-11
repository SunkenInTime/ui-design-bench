import type { ModelSlug } from "@/lib/gallery-types";

export type LabSlug = "gpt" | "anthropic" | "google" | "moonshot" | "z-ai" | "cursor";

export interface ModelLab {
  slug: LabSlug;
  label: string;
}

const MODEL_TO_LAB: Record<ModelSlug, ModelLab> = {
  "composer-1.5": { slug: "cursor", label: "Cursor" },
  "composer-2.0": { slug: "cursor", label: "Cursor" },
  gemini: { slug: "google", label: "Google" },
  "glm-5-turbo": { slug: "z-ai", label: "Z.ai" },
  "glm-5.1": { slug: "z-ai", label: "Z.ai" },
  "gpt-5.4": { slug: "gpt", label: "GPT" },
  "kimi-k-2.5": { slug: "moonshot", label: "Moonshot" },
  "opus-4.6": { slug: "anthropic", label: "Anthropic" },
};

export const LAB_OPTIONS: ModelLab[] = [
  { slug: "gpt", label: "GPT" },
  { slug: "anthropic", label: "Anthropic" },
  { slug: "google", label: "Google" },
  { slug: "moonshot", label: "Moonshot" },
  { slug: "z-ai", label: "Z.ai" },
  { slug: "cursor", label: "Cursor" },
];

export function getModelLab(model: ModelSlug): ModelLab {
  return MODEL_TO_LAB[model];
}
