import Image from "next/image";
import { notFound } from "next/navigation";
import { GalleryBreadcrumb, IterationLinks } from "@/components/gallery/gallery-shell";
import { getGalleryEntry } from "@/lib/gallery-manifest";
import { buildVariantHref, isGalleryGroup } from "@/lib/gallery-paths";

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
          <IterationLinks entry={entry} />
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
              <a
                href={buildVariantHref(entry.group, entry.model, iteration.id)}
                className="mt-auto inline-flex text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900"
              >
                Open iteration
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
