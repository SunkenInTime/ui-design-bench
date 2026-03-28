import type { ModelSlug } from "@/lib/gallery-types";

/** Static logo marks for each benchmarked model (header / rankings). */
export const modelLogoSrc: Record<ModelSlug, string> = {
  "composer-1.5": "/model-logos/composer-1.5.svg",
  "composer-2.0": "/model-logos/composer-2.0.svg",
  gemini: "/model-logos/gemini.svg",
  "gpt-5.4": "/model-logos/gpt-5.4.svg",
  "kimi-k-2.5": "/model-logos/kimi-k-2.5.svg",
  "opus-4.6": "/model-logos/opus-4.6.svg",
};
