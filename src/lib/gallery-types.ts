import type { ReactNode } from "react";

export type GalleryGroupSlug =
  | "with-design-skill"
  | "with-ui-sh-skill"
  | "without-design-skill"
  | "miscellaneous";
export type ModelSlug =
  | "composer-1.5"
  | "composer-2.0"
  | "gemini"
  | "glm-5-turbo"
  | "glm-5.1"
  | "gpt-5.4"
  | "gpt-5.5-low"
  | "gpt-5.5-high"
  | "kimi-k-2.5"
  | "kimi-k-2.6"
  | "opus-4.6"
  | "opus-4.7";
export type IterationId = "1" | "2" | "3" | "4" | "5";
export type SourceAppType = "next" | "vite";

export interface GalleryIteration {
  id: IterationId;
  title: string;
  sourceSlug: string;
  thumbnailPath: string;
}

export interface GalleryEntry {
  group: GalleryGroupSlug;
  groupLabel: string;
  model: ModelSlug;
  modelLabel: string;
  sourceDir: string;
  sourceAppType: SourceAppType;
  defaultIteration: IterationId;
  summary: string;
  iterations: GalleryIteration[];
}

export interface VariantRenderProps {
  entry: GalleryEntry;
  iteration: IterationId;
  preview: boolean;
}

export interface VariantModule {
  render(props: VariantRenderProps): ReactNode;
}
