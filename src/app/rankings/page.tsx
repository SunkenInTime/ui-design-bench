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
        <h1 className="text-3xl font-medium tracking-tight text-[var(--gallery-text-primary)] sm:text-4xl">
          Model rankings
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--gallery-text-secondary)]">
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
              <article className="space-y-4 border-t border-[var(--gallery-border)] pt-10 first:border-t-0 first:pt-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-sm font-medium tabular-nums text-[var(--gallery-text-quaternary)]">
                    {ranking.rank}
                  </span>
                  <h2 className="text-xl font-medium tracking-tight text-[var(--gallery-text-primary)]">
                    <Link
                      href={href}
                      className="inline-flex items-center gap-2 transition-colors hover:text-[var(--gallery-text-secondary)]"
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
                  className="relative block aspect-[16/10] overflow-hidden rounded-lg border border-[var(--gallery-border)] bg-[var(--gallery-surface-muted)]"
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
                <p className="text-[15px] leading-relaxed text-[var(--gallery-text-secondary)]">
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
