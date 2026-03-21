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
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-5">
        <GalleryBreadcrumb entry={entry} />
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
              {entry.groupLabel}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-stone-950">
              {entry.modelLabel}
            </h1>
            <p className="text-lg leading-8 text-stone-600">{entry.summary}</p>
          </div>
          <IterationLinks entry={entry} />
        </div>
      </div>

      <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {entry.iterations.map((iteration) => (
          <article
            key={iteration.id}
            className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]"
          >
            <a href={buildVariantHref(entry.group, entry.model, iteration.id)} className="block">
              <div className="relative aspect-[16/10] border-b border-stone-200 bg-stone-100">
                <Image
                  src={iteration.thumbnailPath}
                  alt={`${entry.modelLabel} iteration ${iteration.id}`}
                  fill
                  className="object-cover"
                />
              </div>
            </a>
            <div className="space-y-3 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                Iteration {iteration.id}
              </p>
              <h2 className="text-2xl font-semibold text-stone-950">{iteration.title}</h2>
              <p className="text-sm leading-6 text-stone-600">
                Source slug: <code>{iteration.sourceSlug}</code>
              </p>
              <a
                href={buildVariantHref(entry.group, entry.model, iteration.id)}
                className="inline-flex rounded-full bg-stone-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-800"
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
