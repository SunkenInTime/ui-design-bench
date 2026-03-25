import Link from "next/link";
import { Home } from "lucide-react";
import type { GalleryEntry, IterationId } from "@/lib/gallery-types";
import { buildModelHref, buildVariantHref } from "@/lib/gallery-paths";

export function VariantSwitcher({
  entry,
  iteration,
}: {
  entry: GalleryEntry;
  iteration: IterationId;
}) {
  return (
    <nav
      aria-label={`${entry.modelLabel} gallery navigation`}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-1 rounded-full border border-neutral-200/80 bg-white/90 p-1.5 text-sm text-neutral-700 shadow-lg shadow-black/10 backdrop-blur-md sm:bottom-6 sm:right-6"
    >
      <Link
        href={buildModelHref(entry.group, entry.model)}
        aria-label={`Back to ${entry.modelLabel} home page`}
        className="inline-flex h-9 items-center gap-2 rounded-full px-3 font-medium text-neutral-900 transition-colors hover:bg-neutral-100"
      >
        <Home className="size-4" aria-hidden="true" />
        Home
      </Link>
      <div className="h-5 w-px bg-neutral-200" aria-hidden="true" />
      <div className="flex items-center gap-1">
        {entry.iterations.map((item) => {
          const active = item.id === iteration;
          return (
            <Link
              key={item.id}
              href={buildVariantHref(entry.group, entry.model, item.id)}
              aria-current={active ? "page" : undefined}
              aria-label={`Open iteration ${item.id}`}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full font-semibold transition-colors ${
                active
                  ? "bg-neutral-900 text-white"
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              }`}
            >
              {item.id}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
