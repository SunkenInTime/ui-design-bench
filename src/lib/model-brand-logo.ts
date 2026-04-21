import type { ModelSlug } from "@/lib/gallery-types";

const MODEL_BRAND_LOGO: Record<ModelSlug, string> = {
  "composer-1.5": "/cursor-composer.webp",
  "composer-2.0": "/cursor-composer.webp",
  gemini: "/google-gemini.webp",
  "glm-5-turbo": "/glm.webp",
  "glm-5.1": "/glm.webp",
  "gpt-5.4": "/openai-gpt.svg",
  "kimi-k-2.5": "/kimi-k2.webp",
  "kimi-k-2.6": "/kimi-k2.webp",
  "opus-4.6": "/anthropic-claude.webp",
  "opus-4.7": "/anthropic-claude.webp",
};

export function getModelBrandLogoPath(model: ModelSlug): string {
  return MODEL_BRAND_LOGO[model];
}
