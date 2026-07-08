import type { ComponentProps } from "react";
import { ThemeAwareLogo } from "@/components/gallery/theme-aware-logo";
import type { ModelSlug } from "@/lib/gallery-types";
import { getModelBrandLogoPaths } from "@/lib/model-brand-logo";

type ModelBrandLogoProps = Omit<ComponentProps<typeof ThemeAwareLogo>, "lightSrc" | "darkSrc"> & {
  model: ModelSlug;
};

export function ModelBrandLogo({ model, ...props }: ModelBrandLogoProps) {
  const logo = getModelBrandLogoPaths(model);
  return <ThemeAwareLogo lightSrc={logo.light} darkSrc={logo.dark} {...props} />;
}
