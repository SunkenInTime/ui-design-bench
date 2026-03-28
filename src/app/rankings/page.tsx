import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import type { GalleryGroupSlug } from "@/lib/gallery-types";
import { getGalleryEntry } from "@/lib/gallery-manifest";
import { modelLogoSrc } from "@/lib/model-logos";
import { modelRankings } from "@/lib/rankings-data";
import { buildVariantHref } from "@/lib/gallery-paths";

export const metadata: Metadata = {
  title: "Model rankings · Composer Bench Gallery",
  description: "Pros, cons, and notes for each model with the same first-iteration previews as the gallery home.",
};

const GALLERY_CARD_GROUPS: { group: GalleryGroupSlug; label: string }[] = [
  { group: "with-design-skill", label: "With Design Skill" },
  { group: "without-design-skill", label: "Without Design Skill" },
];

export default function RankingsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <nav className="text-sm text-neutral-500">
        <Link href="/" className="inline-flex items-center gap-1.5 transition-colors hover:text-neutral-900">
          <ArrowLeft className="size-3.5 opacity-60" aria-hidden="true" />
          Gallery
        </Link>
      </nav>

      <header className="mt-8 max-w-2xl">
        <h1 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">Rankings</h1>
        <p className="mt-5 text-[15px] leading-relaxed text-neutral-600">
          Each model with pros, cons, and notes. Previews use the same first-iteration thumbnails as the cards on
          the home page (with and without design skill).
        </p>
      </header>

      <div className="mt-16 space-y-14">
        {modelRankings.map((row) => {
          return (
            <article
              key={row.model}
              className="rounded-lg border border-neutral-200 bg-white p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-100 pb-5">
                <div className="flex min-w-0 flex-wrap items-center gap-3">
                  <span className="font-mono text-sm text-neutral-400">#{row.rank}</span>
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-neutral-50 p-1.5"
                    aria-hidden="true"
                  >
                    <Image
                      src={modelLogoSrc[row.model]}
                      alt=""
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-xl font-medium tracking-tight text-neutral-900">{row.modelLabel}</h2>
                </div>
              </div>

              <div className="mt-8 grid gap-8 sm:grid-cols-2 sm:items-stretch">
                {GALLERY_CARD_GROUPS.map(({ group, label }) => {
                  const entry = getGalleryEntry(group, row.model);
                  const first = entry?.iterations[0];
                  const src = first?.thumbnailPath;

                  return (
                    <div key={group} className="flex flex-col">
                      <p className="mb-3 text-xs text-neutral-500">{label}</p>
                      {src && entry && first ? (
                        <div className="group flex-1 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100">
                          <Link
                            href={buildVariantHref(entry.group, entry.model, first.id)}
                            className="block"
                          >
                            <div className="relative aspect-[16/10] w-full">
                              <Image
                                src={src}
                                alt={`${row.modelLabel} · ${label} · iteration ${first.id}`}
                                fill
                                className="object-cover transition-opacity duration-300 group-hover:opacity-95"
                                sizes="(min-width: 640px) 50vw, 100vw"
                              />
                            </div>
                          </Link>
                        </div>
                      ) : (
                        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed border-neutral-200 bg-neutral-50 px-4 py-16 text-sm text-neutral-500">
                          Preview not available
                        </div>
                      )}
                      {src && entry && first ? (
                        <p className="mt-2 text-xs text-neutral-400">
                          Iteration {first.id} · same asset as home card
                        </p>
                      ) : null}
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-wide text-neutral-400">Pros</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-neutral-700">
                    {row.pros.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-wide text-neutral-400">Cons</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-neutral-700">
                    {row.cons.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-neutral-100 pt-8">
                <h3 className="text-xs font-medium uppercase tracking-wide text-neutral-400">Notes</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">{row.notes}</p>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
