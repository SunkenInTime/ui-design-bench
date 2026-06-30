import type { GalleryGroupSlug, ModelSlug, VariantModule } from "@/lib/gallery-types";
import withComposer15 from "@/variants/with-design-skill/composer-1.5";
import withComposer20 from "@/variants/with-design-skill/composer-2.0";
import withComposer25 from "@/variants/with-design-skill/composer-2.5";
import withFable from "@/variants/with-design-skill/fable";
import withGemini from "@/variants/with-design-skill/gemini";
import withGemini35Flash from "@/variants/with-design-skill/gemini-3.5-flash";
import withGpt54 from "@/variants/with-design-skill/gpt-5.4";
import withGpt55High from "@/variants/with-design-skill/gpt-5.5-high";
import withKimi from "@/variants/with-design-skill/kimi-k-2.5";
import withKimi26 from "@/variants/with-design-skill/kimi-k-2.6";
import withOpus from "@/variants/with-design-skill/opus-4.6";
import withOpus47 from "@/variants/with-design-skill/opus-4.7";
import withOpus48 from "@/variants/with-design-skill/opus-4.8";
import withGlm5Turbo from "@/variants/with-design-skill/glm-5-turbo";
import withGlm51 from "@/variants/with-design-skill/glm-5.1";
import withGlm52 from "@/variants/with-design-skill/glm-5.2";
import withSonnet5 from "@/variants/with-design-skill/sonnet-5";
import withTasteFable from "@/variants/with-taste-skill/fable";
import withTasteGlm52 from "@/variants/with-taste-skill/glm-5.2";
import withTasteSonnet5 from "@/variants/with-taste-skill/sonnet-5";
import withUiShComposer20 from "@/variants/with-ui-sh-skill/composer-2.0";
import withUiShGpt55High from "@/variants/with-ui-sh-skill/gpt-5.5-high";
import withUiShOpus47 from "@/variants/with-ui-sh-skill/opus-4.7";
import miscGpt54 from "@/variants/miscellaneous/gpt-5.4";
import withoutComposer15 from "@/variants/without-design-skill/composer-1.5";
import withoutComposer20 from "@/variants/without-design-skill/composer-2.0";
import withoutComposer25 from "@/variants/without-design-skill/composer-2.5";
import withoutFable from "@/variants/without-design-skill/fable";
import withoutGemini from "@/variants/without-design-skill/gemini";
import withoutGemini35Flash from "@/variants/without-design-skill/gemini-3.5-flash";
import withoutGpt54 from "@/variants/without-design-skill/gpt-5.4";
import withoutGpt55High from "@/variants/without-design-skill/gpt-5.5-high";
import withoutKimi from "@/variants/without-design-skill/kimi-k-2.5";
import withoutKimi26 from "@/variants/without-design-skill/kimi-k-2.6";
import withoutOpus from "@/variants/without-design-skill/opus-4.6";
import withoutOpus47 from "@/variants/without-design-skill/opus-4.7";
import withoutOpus48 from "@/variants/without-design-skill/opus-4.8";
import withoutGlm5Turbo from "@/variants/without-design-skill/glm-5-turbo";
import withoutGlm51 from "@/variants/without-design-skill/glm-5.1";
import withoutGlm52 from "@/variants/without-design-skill/glm-5.2";
import withoutSonnet5 from "@/variants/without-design-skill/sonnet-5";

type RegistryKey = `${GalleryGroupSlug}:${ModelSlug}`;

const registry: Partial<Record<RegistryKey, VariantModule>> = {
  "with-design-skill:composer-1.5": withComposer15,
  "with-design-skill:composer-2.0": withComposer20,
  "with-design-skill:composer-2.5": withComposer25,
  "with-design-skill:fable": withFable,
  "with-design-skill:gemini": withGemini,
  "with-design-skill:gemini-3.5-flash": withGemini35Flash,
  "with-design-skill:gpt-5.4": withGpt54,
  "with-design-skill:gpt-5.5-high": withGpt55High,
  "with-design-skill:kimi-k-2.5": withKimi,
  "with-design-skill:kimi-k-2.6": withKimi26,
  "with-design-skill:opus-4.6": withOpus,
  "with-design-skill:opus-4.7": withOpus47,
  "with-design-skill:opus-4.8": withOpus48,
  "with-design-skill:glm-5-turbo": withGlm5Turbo,
  "with-design-skill:glm-5.1": withGlm51,
  "with-design-skill:glm-5.2": withGlm52,
  "with-design-skill:sonnet-5": withSonnet5,
  "with-taste-skill:fable": withTasteFable,
  "with-taste-skill:glm-5.2": withTasteGlm52,
  "with-taste-skill:sonnet-5": withTasteSonnet5,
  "with-ui-sh-skill:composer-2.0": withUiShComposer20,
  "with-ui-sh-skill:gpt-5.5-high": withUiShGpt55High,
  "with-ui-sh-skill:opus-4.7": withUiShOpus47,
  "miscellaneous:gpt-5.4": miscGpt54,
  "without-design-skill:composer-1.5": withoutComposer15,
  "without-design-skill:composer-2.0": withoutComposer20,
  "without-design-skill:composer-2.5": withoutComposer25,
  "without-design-skill:fable": withoutFable,
  "without-design-skill:gemini": withoutGemini,
  "without-design-skill:gemini-3.5-flash": withoutGemini35Flash,
  "without-design-skill:gpt-5.4": withoutGpt54,
  "without-design-skill:gpt-5.5-high": withoutGpt55High,
  "without-design-skill:kimi-k-2.5": withoutKimi,
  "without-design-skill:kimi-k-2.6": withoutKimi26,
  "without-design-skill:opus-4.6": withoutOpus,
  "without-design-skill:opus-4.7": withoutOpus47,
  "without-design-skill:opus-4.8": withoutOpus48,
  "without-design-skill:glm-5-turbo": withoutGlm5Turbo,
  "without-design-skill:glm-5.1": withoutGlm51,
  "without-design-skill:glm-5.2": withoutGlm52,
  "without-design-skill:sonnet-5": withoutSonnet5,
};

export function getVariantModule(group: GalleryGroupSlug, model: ModelSlug) {
  return registry[`${group}:${model}`];
}
