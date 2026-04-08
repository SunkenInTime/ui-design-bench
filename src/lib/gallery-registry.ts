import type { GalleryGroupSlug, ModelSlug, VariantModule } from "@/lib/gallery-types";
import withComposer15 from "@/variants/with-design-skill/composer-1.5";
import withComposer20 from "@/variants/with-design-skill/composer-2.0";
import withGemini from "@/variants/with-design-skill/gemini";
import withGpt54 from "@/variants/with-design-skill/gpt-5.4";
import withKimi from "@/variants/with-design-skill/kimi-k-2.5";
import withOpus from "@/variants/with-design-skill/opus-4.6";
import withGlm5Turbo from "@/variants/with-design-skill/glm-5-turbo";
import withGlm51 from "@/variants/with-design-skill/glm-5.1";
import miscGpt54 from "@/variants/miscellaneous/gpt-5.4";
import withoutComposer15 from "@/variants/without-design-skill/composer-1.5";
import withoutComposer20 from "@/variants/without-design-skill/composer-2.0";
import withoutGemini from "@/variants/without-design-skill/gemini";
import withoutGpt54 from "@/variants/without-design-skill/gpt-5.4";
import withoutKimi from "@/variants/without-design-skill/kimi-k-2.5";
import withoutOpus from "@/variants/without-design-skill/opus-4.6";
import withoutGlm5Turbo from "@/variants/without-design-skill/glm-5-turbo";
import withoutGlm51 from "@/variants/without-design-skill/glm-5.1";

type RegistryKey = `${GalleryGroupSlug}:${ModelSlug}`;

const registry: Partial<Record<RegistryKey, VariantModule>> = {
  "with-design-skill:composer-1.5": withComposer15,
  "with-design-skill:composer-2.0": withComposer20,
  "with-design-skill:gemini": withGemini,
  "with-design-skill:gpt-5.4": withGpt54,
  "with-design-skill:kimi-k-2.5": withKimi,
  "with-design-skill:opus-4.6": withOpus,
  "with-design-skill:glm-5-turbo": withGlm5Turbo,
  "with-design-skill:glm-5.1": withGlm51,
  "miscellaneous:gpt-5.4": miscGpt54,
  "without-design-skill:composer-1.5": withoutComposer15,
  "without-design-skill:composer-2.0": withoutComposer20,
  "without-design-skill:gemini": withoutGemini,
  "without-design-skill:gpt-5.4": withoutGpt54,
  "without-design-skill:kimi-k-2.5": withoutKimi,
  "without-design-skill:opus-4.6": withoutOpus,
  "without-design-skill:glm-5-turbo": withoutGlm5Turbo,
  "without-design-skill:glm-5.1": withoutGlm51,
};

export function getVariantModule(group: GalleryGroupSlug, model: ModelSlug) {
  return registry[`${group}:${model}`];
}
