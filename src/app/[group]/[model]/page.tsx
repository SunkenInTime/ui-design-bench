import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GalleryBreadcrumb, IterationLinks } from "@/components/gallery/gallery-shell";
import { buildCompareHrefForSelection } from "@/lib/compare";
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
    <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <div className="space-y-6">
        <GalleryBreadcrumb entry={entry} />
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs text-neutral-500">{entry.groupLabel}</p>
            <h1 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
              {entry.modelLabel}
            </h1>
            <p className="text-[15px] leading-relaxed text-neutral-600">{entry.summary}</p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <IterationLinks entry={entry} />
            <Link
              href={buildCompareHrefForSelection({
                group: entry.group,
                model: entry.model,
                iteration: "1",
              })}
              className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-400 hover:text-neutral-900"
              aria-label="Compare this model"
            >
              Compare model
            </Link>
          </div>
        </div>
      </div>

      <section className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {entry.iterations.map((iteration) => (
          <article
            key={iteration.id}
            className="flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white"
          >
            <a href={buildVariantHref(entry.group, entry.model, iteration.id)} className="block bg-neutral-100">
              <div className="relative aspect-[16/10]">
                <Image
                  src={iteration.thumbnailPath}
                  alt={`${entry.modelLabel} iteration ${iteration.id}`}
                  fill
                  className="object-cover"
                />
              </div>
            </a>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <p className="text-xs text-neutral-500">Iteration {iteration.id}</p>
              <h2 className="text-lg font-medium tracking-tight text-neutral-900">{iteration.title}</h2>
              <p className="text-sm text-neutral-500">
                <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs text-neutral-700">
                  {iteration.sourceSlug}
                </code>
              </p>
              <div className="mt-auto flex items-center gap-4">
                <a
                  href={buildVariantHref(entry.group, entry.model, iteration.id)}
                  className="inline-flex text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900"
                >
                  Open iteration
                </a>
                <Link
                  href={buildCompareHrefForSelection({
                    group: entry.group,
                    model: entry.model,
                    iteration: iteration.id,
                  })}
                  className="inline-flex text-sm font-medium text-neutral-600 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900 hover:decoration-neutral-900"
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
