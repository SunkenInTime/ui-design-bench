import Link from "next/link";
import { Github } from "lucide-react";
import { GalleryRankingsNav } from "@/components/gallery/gallery-rankings-nav";
import { GalleryCard } from "@/components/gallery/gallery-card";
import {
  ANTHROPIC_FRONTEND_DESIGN_SKILL_URL,
  UNCODEXIFY_SKILL_URL,
} from "@/lib/gallery-anthropic-skill";
import { galleryManifest } from "@/lib/gallery-manifest";

export default function HomePage() {
  const groups = [
    "with-design-skill",
    "without-design-skill",
    "miscellaneous",
  ] as const;
  const generationPrompt =
    "I want you to design the landing page for a note-taking application as essentially a second brain. You should design five iterations and each of them should be accessible within the slash one, slash two, slash three like pages directory. And then you should add a little button that lets me switch between them easily.";

  return (
    <>
      <GalleryRankingsNav />
      <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <header className="max-w-2xl">
          <h1 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
            Which AI Made This?
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-neutral-600">
            A comparison of how different AI models approach UI design, with and without{" "}
            <Link
              href={ANTHROPIC_FRONTEND_DESIGN_SKILL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-neutral-800 underline decoration-neutral-300 underline-offset-2 transition-colors hover:text-[var(--gallery-accent)] hover:decoration-[var(--gallery-accent)]"
            >
              Anthropic's frontend design skill
            </Link>{" "}
            enabled.
          </p>
          <blockquote className="mt-8 border-l border-neutral-300 pl-5 text-[15px] leading-relaxed text-neutral-600">
            <span className="text-neutral-400">Prompt · </span>
            {generationPrompt}
          </blockquote>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-500">
            <Link
              href="https://github.com/sunkenintime"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-neutral-900"
            >
              <Github className="h-4 w-4 shrink-0 opacity-70" aria-hidden="true" />
              <span>Dara A.</span>
            </Link>
            <Link
              href="https://x.com/daradoescode"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-neutral-900"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4 shrink-0 fill-current opacity-70"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932Zm-1.29 19.493h2.039L6.486 3.238H4.298z" />
              </svg>
              <span>@daradoescode</span>
            </Link>
          </div>
          <p className="mt-6 text-sm italic text-neutral-400">
            This site was designed by Composer 2.0 LOL
          </p>
        </header>

        <div className="mt-10 space-y-12">
          {groups.map((group) => {
            const entries = galleryManifest.filter((entry) => entry.group === group);
            const label = entries[0]?.groupLabel ?? group;
            return (
              <section key={group} className="space-y-8">
                <h2 className="text-xl font-medium tracking-tight text-neutral-900">
                  {group === "with-design-skill" ? (
                    <>
                      With{" "}
                      <Link
                        href={ANTHROPIC_FRONTEND_DESIGN_SKILL_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-2 decoration-neutral-500 underline-offset-[6px] transition-colors hover:text-[var(--gallery-accent)] hover:decoration-[var(--gallery-accent)]"
                      >
                        Design Skill
                      </Link>
                    </>
                  ) : group === "without-design-skill" ? (
                    <>
                      Without{" "}
                      <Link
                        href={ANTHROPIC_FRONTEND_DESIGN_SKILL_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-2 decoration-neutral-500 underline-offset-[6px] transition-colors hover:text-[var(--gallery-accent)] hover:decoration-[var(--gallery-accent)]"
                      >
                        Design Skill
                      </Link>
                    </>
                  ) : group === "miscellaneous" ? (
                    <>
                      With{" "}
                      <Link
                        href={UNCODEXIFY_SKILL_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-2 decoration-neutral-500 underline-offset-[6px] transition-colors hover:text-[var(--gallery-accent)] hover:decoration-[var(--gallery-accent)]"
                      >
                        Uncodexify skill
                      </Link>
                    </>
                  ) : (
                    label
                  )}
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                  {entries.map((entry) => (
                    <GalleryCard key={`${entry.group}-${entry.model}`} entry={entry} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
}
