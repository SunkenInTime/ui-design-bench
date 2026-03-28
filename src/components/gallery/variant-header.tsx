import Link from "next/link";
import { Home } from "lucide-react";
import type { GalleryEntry, IterationId } from "@/lib/gallery-types";
import { buildVariantHref } from "@/lib/gallery-paths";

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
      className="fixed top-5 right-5 z-[100] flex items-center gap-2.5 rounded-lg border border-[var(--gallery-border)] bg-white/85 px-2.5 py-2 text-[0.8125rem] font-medium text-neutral-500 shadow-[0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-[12px] sm:top-6 sm:right-6"
    >
      <Link
        href="/"
        aria-label="Back to Composer Bench Gallery"
        className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-neutral-600 transition-colors hover:bg-black/[0.04] hover:text-neutral-900"
      >
        <Home className="size-3.5 shrink-0 opacity-80" aria-hidden="true" />
        <span className="text-neutral-700">Home</span>
      </Link>
      <div
        className="h-4 w-px shrink-0 bg-[var(--gallery-border)]"
        aria-hidden="true"
      />
      <div className="flex items-center gap-1">
        {entry.iterations.map((item) => {
          const active = item.id === iteration;
          return (
            <Link
              key={item.id}
              href={buildVariantHref(entry.group, entry.model, item.id)}
              aria-current={active ? "page" : undefined}
              aria-label={`Open iteration ${item.id}`}
              className={`inline-flex min-w-[1.75rem] items-center justify-center rounded-md px-2 py-1.5 font-medium transition-colors ${
                active
                  ? "bg-neutral-900 text-[#fafafa]"
                  : "text-neutral-600 hover:bg-black/[0.04] hover:text-neutral-900"
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
