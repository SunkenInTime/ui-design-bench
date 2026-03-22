import Link from "next/link";
import { Github } from "lucide-react";
import { GalleryCard } from "@/components/gallery/gallery-card";
import { galleryManifest } from "@/lib/gallery-manifest";

export default function HomePage() {
  const groups = ["with-design-skill", "without-design-skill"] as const;
  const generationPrompt =
    "I want you to design the landing page for a note-taking application as essentially a second brain. You should design five iterations and each of them should be accessible within the slash one, slash two, slash three like pages directory. And then you should add a little button that lets me switch between them easily.";

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-stone-500">
          Unified Gallery
        </p>
        <p className="mt-4 text-base leading-7 text-stone-700">
          This website is a test of how well different AI models handle UI design. It also
          compares how those same models respond when the frontend design skill is used versus
          when it is not.
        </p>
        <div className="mt-6 rounded-3xl border border-stone-200/80 bg-white/70 p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
            Generation Prompt
          </p>
          <p className="mt-3 text-sm leading-7 text-stone-600">{generationPrompt}</p>
          <Link
            href="https://github.com/sunkenintime"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-stone-500 transition hover:text-stone-950"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            <span>
              Built by{" "}
              <span className="font-medium text-stone-800 underline decoration-stone-300 underline-offset-4">
                Dara A.
              </span>
            </span>
          </Link>
        </div>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-stone-950">
          Browse every generated variation from one Next.js site.
        </h1>
        <p className="mt-4 text-lg leading-8 text-stone-600">
          Each card below opens a migrated model overview and every iteration lives under a
          stable namespaced route.
        </p>
      </section>

      <div className="mt-12 space-y-12">
        {groups.map((group) => {
          const entries = galleryManifest.filter((entry) => entry.group === group);
          return (
            <section key={group} className="space-y-6">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
                    {entries[0]?.groupLabel}
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold text-stone-950">
                    {entries[0]?.groupLabel}
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-6 text-stone-600">
                  Six models, five iterations each, collected into a single deployable runtime.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {entries.map((entry) => (
                  <GalleryCard key={`${entry.group}-${entry.model}`} entry={entry} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
