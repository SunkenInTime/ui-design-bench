import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { GalleryEntry, IterationId } from "@/lib/gallery-types";
import { buildModelHref, buildVariantHref } from "@/lib/gallery-paths";

export function GalleryBreadcrumb({
  entry,
}: {
  entry: GalleryEntry;
}) {
  return (
    <div className="flex items-center gap-2 text-sm text-stone-500">
      <Link href="/" className="inline-flex items-center gap-2 hover:text-stone-900">
        <ArrowLeft className="size-4" />
        Gallery
      </Link>
      <span>/</span>
      <Link href={buildModelHref(entry.group, entry.model)} className="hover:text-stone-900">
        {entry.modelLabel}
      </Link>
    </div>
  );
}

export function IterationLinks({
  entry,
  currentIteration,
}: {
  entry: GalleryEntry;
  currentIteration?: IterationId;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {entry.iterations.map((iteration) => {
        const active = iteration.id === currentIteration;
        return (
          <Link
            key={iteration.id}
            href={buildVariantHref(entry.group, entry.model, iteration.id)}
            className={`rounded-full border px-3 py-1 text-sm transition ${
              active
                ? "border-stone-900 bg-stone-900 text-white"
                : "border-stone-300 bg-white text-stone-700 hover:border-stone-900 hover:text-stone-900"
            }`}
          >
            {iteration.id}
          </Link>
        );
      })}
    </div>
  );
}
