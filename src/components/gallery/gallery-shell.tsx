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
    <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-500">
      <Link href="/" className="inline-flex items-center gap-1.5 transition-colors hover:text-neutral-900">
        <ArrowLeft className="size-3.5 opacity-60" aria-hidden="true" />
        Gallery
      </Link>
      <span className="text-neutral-300" aria-hidden="true">
        /
      </span>
      <Link
        href={buildModelHref(entry.group, entry.model)}
        className="transition-colors hover:text-neutral-900"
      >
        {entry.modelLabel}
      </Link>
    </nav>
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
    <div className="flex flex-wrap gap-1">
      {entry.iterations.map((iteration) => {
        const active = iteration.id === currentIteration;
        return (
          <Link
            key={iteration.id}
            href={buildVariantHref(entry.group, entry.model, iteration.id)}
            className={`rounded-md px-2.5 py-1 text-sm transition-colors ${
              active
                ? "bg-[var(--gallery-accent)] text-[var(--gallery-accent-foreground)]"
                : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
            }`}
          >
            {iteration.id}
          </Link>
        );
      })}
    </div>
  );
}
