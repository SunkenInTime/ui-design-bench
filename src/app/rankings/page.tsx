import Image from "next/image";
import Link from "next/link";
import { GalleryRankingsNav } from "@/components/gallery/gallery-rankings-nav";
import { RankingNotes } from "@/components/ranking-notes";
import { buildVariantHref } from "@/lib/gallery-paths";
import { getModelBrandLogoPath } from "@/lib/model-brand-logo";
import { getRankingPreviewPath, modelRankings } from "@/lib/model-rankings";

export default function RankingsPage() {
  return (
    <>
      <GalleryRankingsNav />
      <main className="mx-auto max-w-3xl px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
          Model rankings
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
          This is a ranking based off my taste.
        </p>
      </header>

      <ol className="mt-14 space-y-14">
        {modelRankings.map((ranking) => {
          const previewPath = getRankingPreviewPath(ranking);
          const href = buildVariantHref(
            ranking.previewGroup,
            ranking.model,
            ranking.bestIteration,
          );
          return (
            <li key={ranking.model}>
              <article className="space-y-4 border-t border-neutral-200 pt-10 first:border-t-0 first:pt-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-sm font-medium tabular-nums text-neutral-400">
                    {ranking.rank}
                  </span>
                  <h2 className="text-xl font-medium tracking-tight text-neutral-900">
                    <Link
                      href={href}
                      className="inline-flex items-center gap-2 transition-colors hover:text-neutral-600"
                    >
                      <span>{ranking.modelLabel}</span>
                      <Image
                        src={getModelBrandLogoPath(ranking.model)}
                        alt=""
                        width={28}
                        height={28}
                        className="h-[1em] w-auto shrink-0 object-contain"
                        aria-hidden
                      />
                    </Link>
                  </h2>
                </div>
                <Link
                  href={href}
                  className="relative block aspect-[16/10] overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100"
                >
                  {previewPath ? (
                    <Image
                      src={previewPath}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 48rem) 100vw, 48rem"
                    />
                  ) : null}
                </Link>
                <p className="text-[15px] leading-relaxed text-neutral-600">
                  <RankingNotes
                    notes={ranking.notes}
                    previewGroup={ranking.previewGroup}
                    model={ranking.model}
                  />
                </p>
              </article>
            </li>
          );
        })}
      </ol>
    </main>
    </>
  );
}
