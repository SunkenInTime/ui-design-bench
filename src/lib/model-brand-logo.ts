import type { ModelSlug } from "@/lib/gallery-types";

export interface ModelBrandLogoPaths {
  light: string;
  dark?: string;
}

const MODEL_BRAND_LOGO: Record<ModelSlug, ModelBrandLogoPaths> = {
  "composer-1.5": { light: "/cursor-composer.webp" },
  "composer-2.0": { light: "/cursor-composer.webp" },
  "composer-2.5": { light: "/cursor-composer.webp" },
  fable: { light: "/anthropic-claude.webp" },
  gemini: { light: "/google-gemini.webp" },
  "gemini-3.5-flash": { light: "/google-gemini.webp" },
  "glm-5-turbo": { light: "/glm.webp" },
  "glm-5.1": { light: "/glm.webp" },
  "glm-5.2": { light: "/glm.webp" },
  "grok-4.5": { light: "/xai-light.svg", dark: "/xai-dark.svg" },
  "gpt-5.4": { light: "/openai-gpt.svg", dark: "/openai-gpt-dark.svg" },
  "gpt-5.5-low": { light: "/openai-gpt.svg", dark: "/openai-gpt-dark.svg" },
  "gpt-5.5-high": { light: "/openai-gpt.svg", dark: "/openai-gpt-dark.svg" },
  sol: { light: "/openai-gpt.svg", dark: "/openai-gpt-dark.svg" },
  luna: { light: "/openai-gpt.svg", dark: "/openai-gpt-dark.svg" },
  terra: { light: "/openai-gpt.svg", dark: "/openai-gpt-dark.svg" },
  "kimi-k-2.5": { light: "/kimi-k2.webp" },
  "kimi-k-2.6": { light: "/kimi-k2.webp" },
  "kimi-k3": { light: "/kimi-k2.webp" },
  "opus-4.6": { light: "/anthropic-claude.webp" },
  "opus-4.7": { light: "/anthropic-claude.webp" },
  "opus-4.8": { light: "/anthropic-claude.webp" },
  "sonnet-5": { light: "/anthropic-claude.webp" },
};

export function getModelBrandLogoPath(model: ModelSlug): string {
  return MODEL_BRAND_LOGO[model].light;
}

export function getModelBrandLogoPaths(model: ModelSlug): ModelBrandLogoPaths {
  return MODEL_BRAND_LOGO[model];
}
