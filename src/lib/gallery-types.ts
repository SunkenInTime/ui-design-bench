import type { ReactNode } from "react";

export type GalleryGroupSlug =
  | "with-design-skill"
  | "without-design-skill"
  | "miscellaneous";
export type ModelSlug =
  | "composer-1.5"
  | "composer-2.0"
  | "gemini"
  | "gpt-5.4"
  | "kimi-k-2.5"
  | "opus-4.6";
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
