import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GalleryBreadcrumb, IterationLinks } from "@/components/gallery/gallery-shell";
import { buildCompareHrefForSelection } from "@/lib/compare-server";
import { getGalleryEntry } from "@/lib/gallery-manifest";
import { getStaticGalleryModelParams } from "@/lib/gallery-static-params";
import { buildVariantHref, isGalleryGroup } from "@/lib/gallery-paths";

export const dynamicParams = false;

export function generateStaticParams() {
  return getStaticGalleryModelParams();
}

export default async function ModelPage({
  params,
}: {
  params: Promise<{ group: string; model: string }>;
}) {
  const { group, model } = await params;
  if (!isGalleryGroup(group)) {
    notFound();
  }

  const entry = getGalleryEntry(group, model);
  if (!entry) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-[98rem] px-4 py-12 sm:px-6 sm:py-16 lg:px-4">
      <div className="space-y-6">
        <GalleryBreadcrumb entry={entry} />
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs text-[var(--gallery-text-tertiary)]">{entry.groupLabel}</p>
            <h1 className="text-3xl font-medium tracking-tight text-[var(--gallery-text-primary)] sm:text-4xl">
              {entry.modelLabel}
            </h1>
            <p className="text-[15px] leading-relaxed text-[var(--gallery-text-secondary)]">{entry.summary}</p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <IterationLinks entry={entry} />
            <Link
              href={buildCompareHrefForSelection({
                group: entry.group,
                model: entry.model,
                iteration: "1",
              })}
              prefetch={false}
              className="inline-flex items-center rounded-full border border-[var(--gallery-divider-strong)] bg-[var(--gallery-surface)] px-4 py-2 text-sm font-medium text-[var(--gallery-text-secondary)] transition-colors hover:border-[var(--gallery-text-quaternary)] hover:text-[var(--gallery-text-primary)]"
              aria-label="Compare this model"
            >
              Compare model
            </Link>
          </div>
        </div>
      </div>

      <section className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
        {entry.iterations.map((iteration) => (
          <article
            key={iteration.id}
            className="flex flex-col overflow-hidden rounded-lg border border-[var(--gallery-border)] bg-[var(--gallery-surface)] gallery-elevated-surface"
          >
            <a href={buildVariantHref(entry.group, entry.model, iteration.id)} className="block bg-[var(--gallery-surface-muted)]">
              <div className="relative aspect-[16/10]">
                <Image
                  src={iteration.thumbnailPath}
                  alt={`${entry.modelLabel} iteration ${iteration.id}`}
                  fill
                  sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1279px) calc(50vw - 2.5rem), 24rem"
                  quality={70}
                  preload={iteration.id === entry.defaultIteration}
                  className="object-cover"
                />
              </div>
            </a>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <p className="text-xs text-[var(--gallery-text-tertiary)]">Iteration {iteration.id}</p>
              <h2 className="text-lg font-medium tracking-tight text-[var(--gallery-text-primary)]">{iteration.title}</h2>
              <p className="text-sm text-[var(--gallery-text-tertiary)]">
                <code className="rounded bg-[var(--gallery-surface-muted)] px-1.5 py-0.5 text-xs text-[var(--gallery-text-secondary)]">
                  {iteration.sourceSlug}
                </code>
              </p>
              <div className="mt-auto flex items-center gap-4">
                <a
                  href={buildVariantHref(entry.group, entry.model, iteration.id)}
                  className="inline-flex text-sm font-medium text-[var(--gallery-text-primary)] underline decoration-[var(--gallery-divider-strong)] underline-offset-4 transition-colors hover:decoration-[var(--gallery-text-primary)]"
                >
                  Open iteration
                </a>
                <Link
                  href={buildCompareHrefForSelection({
                    group: entry.group,
                    model: entry.model,
                    iteration: iteration.id,
                  })}
                  prefetch={false}
                  className="inline-flex text-sm font-medium text-[var(--gallery-text-secondary)] underline decoration-[var(--gallery-divider-strong)] underline-offset-4 transition-colors hover:text-[var(--gallery-text-primary)] hover:decoration-[var(--gallery-text-primary)]"
                  aria-label={`Compare ${entry.modelLabel} iteration ${iteration.id}`}
                >
                  Compare
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
