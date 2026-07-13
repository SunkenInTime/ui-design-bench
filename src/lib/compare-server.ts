import "server-only";

import {
  buildCompareHref,
  DEFAULT_COMPARE_STATE,
  type CompareSelection,
  type CompareState,
} from "@/lib/compare";
import { getGalleryEntry } from "@/lib/gallery-manifest";
import { isGalleryGroup } from "@/lib/gallery-paths";
import type { GalleryEntry, IterationId } from "@/lib/gallery-types";

type SearchParamsValue = string | string[] | undefined;
type SearchParamsLike = URLSearchParams | Record<string, SearchParamsValue>;
type CompareSearchParamKey =
  | "leftGroup"
  | "leftModel"
  | "leftIteration"
  | "rightGroup"
  | "rightModel"
  | "rightIteration";

const COMPARE_PARAM_KEYS = [
  "leftGroup",
  "leftModel",
  "leftIteration",
  "rightGroup",
  "rightModel",
  "rightIteration",
] as const satisfies readonly CompareSearchParamKey[];

function getSingleSearchParamValue(
  searchParams: SearchParamsLike,
  key: CompareSearchParamKey,
): string | null | "multiple" {
  if (searchParams instanceof URLSearchParams) {
    const values = searchParams.getAll(key);
    if (values.length === 0) return null;
    if (values.length > 1) return "multiple";
    return values[0] ?? "";
  }

  const value = searchParams[key];
  if (typeof value === "undefined") return null;
  return Array.isArray(value) ? "multiple" : value;
}

function isValidIterationForEntry(
  entry: GalleryEntry,
  iteration: string,
): iteration is IterationId {
  return entry.iterations.some((item) => item.id === iteration);
}

export function parseCompareSearchParams(
  searchParams: SearchParamsLike,
): CompareState | "default" | "invalid" {
  const rawValues = Object.fromEntries(
    COMPARE_PARAM_KEYS.map((key) => [key, getSingleSearchParamValue(searchParams, key)]),
  ) as Record<CompareSearchParamKey, string | null | "multiple">;

  if (!Object.values(rawValues).some((value) => value !== null)) return "default";
  if (Object.values(rawValues).some((value) => value === null || value === "multiple")) {
    return "invalid";
  }

  const leftGroup = rawValues.leftGroup as string;
  const rightGroup = rawValues.rightGroup as string;
  if (!isGalleryGroup(leftGroup) || !isGalleryGroup(rightGroup)) return "invalid";

  const leftEntry = getGalleryEntry(leftGroup, rawValues.leftModel as string);
  const rightEntry = getGalleryEntry(rightGroup, rawValues.rightModel as string);
  if (!leftEntry || !rightEntry) return "invalid";

  const leftIteration = rawValues.leftIteration as string;
  const rightIteration = rawValues.rightIteration as string;
  if (
    !isValidIterationForEntry(leftEntry, leftIteration) ||
    !isValidIterationForEntry(rightEntry, rightIteration)
  ) {
    return "invalid";
  }

  return {
    left: { group: leftEntry.group, model: leftEntry.model, iteration: leftIteration },
    right: { group: rightEntry.group, model: rightEntry.model, iteration: rightIteration },
  };
}

function getCounterpartSelection(selection: CompareSelection): CompareSelection | null {
  if (selection.group === "miscellaneous") return null;

  const counterpartGroup =
    selection.group === "with-design-skill"
      ? "without-design-skill"
      : "with-design-skill";
  const counterpartEntry = getGalleryEntry(counterpartGroup, selection.model);
  if (!counterpartEntry) return null;

  return {
    group: counterpartEntry.group,
    model: counterpartEntry.model,
    iteration: isValidIterationForEntry(counterpartEntry, selection.iteration)
      ? selection.iteration
      : "1",
  };
}

export function buildCompareHrefForSelection(left: CompareSelection): string {
  return buildCompareHref({
    left,
    right: getCounterpartSelection(left) ?? DEFAULT_COMPARE_STATE.right,
  });
}
