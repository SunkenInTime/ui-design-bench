import Image from "next/image";
import Link from "next/link";
import type { GalleryEntry } from "@/lib/gallery-types";
import { buildModelHref, buildVariantHref } from "@/lib/gallery-paths";

export function GalleryCard({ entry }: { entry: GalleryEntry }) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
      <Link
        href={buildVariantHref(entry.group, entry.model, entry.defaultIteration)}
        className="block border-b border-stone-200 bg-stone-100"
      >
        <div className="relative aspect-[16/10]">
          <Image
            src={entry.iterations[0].thumbnailPath}
            alt={`${entry.modelLabel} preview`}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <div className="space-y-4 p-5">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
            {entry.groupLabel}
          </p>
          <h2 className="text-2xl font-semibold text-stone-950">{entry.modelLabel}</h2>
          <p className="text-sm leading-6 text-stone-600">{entry.summary}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {entry.iterations.map((iteration) => (
            <Link
              key={iteration.id}
              href={buildVariantHref(entry.group, entry.model, iteration.id)}
              className="rounded-full border border-stone-300 px-3 py-1 text-sm text-stone-700 transition hover:border-stone-900 hover:text-stone-900"
            >
              {iteration.id}
            </Link>
          ))}
        </div>
        <Link
          href={buildModelHref(entry.group, entry.model)}
          className="inline-flex items-center rounded-full bg-stone-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-800"
        >
          Open model
        </Link>
      </div>
    </article>
  );
}
