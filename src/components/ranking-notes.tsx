import Link from "next/link";
import type { ReactNode } from "react";
import type { GalleryGroupSlug, IterationId, ModelSlug } from "@/lib/gallery-types";
import { buildVariantHref, isIterationId } from "@/lib/gallery-paths";

const ITERATION_REF = /\biteration\s+(one|two|three|four|five|[1-5])\b/gi;

const WORD_TO_ID: Record<string, IterationId> = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
};

function toIterationId(raw: string): IterationId | undefined {
  const lower = raw.toLowerCase();
  if (lower in WORD_TO_ID) return WORD_TO_ID[lower];
  return isIterationId(raw) ? raw : undefined;
}

export function RankingNotes(props: {
  notes: string;
  previewGroup: GalleryGroupSlug;
  model: ModelSlug;
}): ReactNode {
  const { notes, previewGroup, model } = props;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(ITERATION_REF.source, ITERATION_REF.flags);
  let key = 0;

  while ((match = re.exec(notes)) !== null) {
    if (match.index > lastIndex) {
      parts.push(notes.slice(lastIndex, match.index));
    }

    const id = toIterationId(match[1]);
    const label = match[0];

    if (id !== undefined) {
      const href = buildVariantHref(previewGroup, model, id);
      parts.push(
        <Link
          key={key++}
          href={href}
          className="mx-0.5 inline-flex items-center rounded-md border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 align-baseline text-[13px] font-medium leading-snug text-neutral-800 underline-offset-2 transition-colors hover:border-neutral-300 hover:bg-neutral-100"
          title={`Open ${label} in the gallery`}
        >
          {label}
        </Link>,
      );
    } else {
      parts.push(label);
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < notes.length) {
    parts.push(notes.slice(lastIndex));
  }

  return parts.length > 0 ? parts : notes;
}
