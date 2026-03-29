import Image from "next/image";
import Link from "next/link";
import type { GalleryEntry } from "@/lib/gallery-types";
import { buildVariantHref } from "@/lib/gallery-paths";
import { getModelBrandLogoPath } from "@/lib/model-brand-logo";

export function GalleryCard({ entry }: { entry: GalleryEntry }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-neutral-300 bg-white transition-transform duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg">
      <Link
        href={buildVariantHref(entry.group, entry.model, entry.defaultIteration)}
        className="block bg-neutral-100"
      >
        <div className="relative aspect-[16/10]">
          <Image
            src={entry.iterations[0].thumbnailPath}
            alt={`${entry.modelLabel} preview`}
            fill
            className="object-cover transition-opacity duration-300 group-hover:opacity-95"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="space-y-1">
          <p className="text-xs text-neutral-500">{entry.groupLabel}</p>
          <h3 className="flex flex-wrap items-center gap-2 text-lg font-medium tracking-tight text-neutral-900">
            <span>{entry.modelLabel}</span>
            <Image
              src={getModelBrandLogoPath(entry.model)}
              alt=""
              width={28}
              height={28}
              className="h-[1em] w-auto shrink-0 object-contain"
              aria-hidden
            />
          </h3>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {entry.iterations.map((iteration) => (
            <Link
              key={iteration.id}
              href={buildVariantHref(entry.group, entry.model, iteration.id)}
              className="rounded-md border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-xs text-neutral-600 transition-colors hover:border-neutral-300 hover:bg-white hover:text-neutral-900"
            >
              {iteration.id}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
