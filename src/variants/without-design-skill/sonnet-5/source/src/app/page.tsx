import Link from "next/link";
import { IconArrowRight, IconBrain } from "../components/icons";

const VARIANTS = [
  {
    slug: "1",
    name: "Editorial",
    description:
      "Quiet, confident, and content-led. Serif headlines, generous whitespace, and a single clear story.",
    tags: ["Light", "Serif", "Minimal"],
    preview: (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-white p-6">
        <div className="h-1.5 w-10 rounded-full bg-zinc-900" />
        <div className="h-2 w-28 rounded-full bg-zinc-900" />
        <div className="h-2 w-20 rounded-full bg-zinc-300" />
        <div className="mt-2 h-6 w-24 rounded-full border border-zinc-900" />
      </div>
    ),
  },
  {
    slug: "2",
    name: "Neural",
    description:
      "Dark, kinetic, and AI-forward. Mesh gradients, glass cards, and a confident startup energy.",
    tags: ["Dark", "Gradient", "AI"],
    preview: (
      <div className="absolute inset-0 bg-zinc-950">
        <div className="absolute -left-6 -top-10 h-32 w-32 rounded-full bg-fuchsia-500/40 blur-2xl" />
        <div className="absolute -right-4 bottom-0 h-28 w-28 rounded-full bg-indigo-500/50 blur-2xl" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <div className="h-2 w-24 rounded-full bg-white/90" />
          <div className="h-2 w-16 rounded-full bg-white/40" />
          <div className="mt-2 h-6 w-20 rounded-full bg-white/90" />
        </div>
      </div>
    ),
  },
  {
    slug: "3",
    name: "Playful",
    description:
      "Warm, colorful, and human. Sticky-note motifs, hand-drawn touches, and rounded everything.",
    tags: ["Pastel", "Friendly", "Illustrative"],
    preview: (
      <div className="absolute inset-0 bg-amber-50">
        <div className="absolute left-4 top-3 h-8 w-8 rotate-[-8deg] rounded-md bg-yellow-300" />
        <div className="absolute right-5 top-6 h-7 w-7 rotate-[10deg] rounded-md bg-pink-300" />
        <div className="absolute bottom-4 left-10 h-6 w-6 rotate-[6deg] rounded-md bg-sky-300" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <div className="h-2 w-24 rounded-full bg-zinc-900/80" />
          <div className="mt-2 h-6 w-20 rounded-full bg-zinc-900" />
        </div>
      </div>
    ),
  },
  {
    slug: "4",
    name: "Terminal",
    description:
      "Dense, technical, and graph-driven. Monospace type, node networks, and a developer-tool feel.",
    tags: ["Dark", "Mono", "Graph"],
    preview: (
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-line-grid text-emerald-500/10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <div className="h-2 w-24 rounded-sm bg-emerald-400/80" />
          <div className="h-2 w-16 rounded-sm bg-zinc-500" />
          <div className="mt-2 h-6 w-20 rounded-sm border border-emerald-400/60" />
        </div>
      </div>
    ),
  },
  {
    slug: "5",
    name: "Atelier",
    description:
      "Premium and considered. Warm neutrals, gold accents, and asymmetric, gallery-like layout.",
    tags: ["Warm", "Premium", "Asymmetric"],
    preview: (
      <div className="absolute inset-0 bg-[#f4efe8]">
        <div className="absolute left-0 top-0 h-full w-1.5 bg-[#b08d57]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <div className="h-2 w-24 rounded-full bg-[#2a2622]" />
          <div className="h-2 w-16 rounded-full bg-[#b08d57]" />
          <div className="mt-2 h-6 w-20 rounded-full border border-[#2a2622]" />
        </div>
      </div>
    ),
  },
] as const;

export default function GalleryPage() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50">
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-20 sm:py-28">
        <div className="animate-fade-up mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 text-white">
            <IconBrain className="h-6 w-6" />
          </div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Cortex landing page lab
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Five takes on a second brain.
          </h1>
          <p className="mt-5 text-balance text-lg leading-relaxed text-zinc-600">
            Same product, five different stories. Pick a direction below, or
            use the dock at the bottom of the screen to hop between them
            instantly.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VARIANTS.map((v, i) => (
            <Link
              key={v.slug}
              href={`/${v.slug}`}
              className="animate-fade-up group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="relative h-40 w-full overflow-hidden border-b border-zinc-200">
                {v.preview}
                <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-sm font-semibold text-zinc-900 shadow">
                  {v.slug}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex flex-wrap gap-1.5">
                  {v.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="text-lg font-semibold text-zinc-950">
                  Iteration {v.slug} — {v.name}
                </h2>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-zinc-600">
                  {v.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900">
                  View landing page
                  <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}

          <div className="animate-fade-up flex flex-col justify-center rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/60 p-6 text-sm text-zinc-500">
            <p className="font-medium text-zinc-700">
              Tip: use the floating dock
            </p>
            <p className="mt-1.5 leading-relaxed">
              Every variant carries a small switcher fixed to the bottom of
              the screen — jump straight from Iteration 2 to Iteration 5
              without coming back here.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-400">
        Built with Next.js &amp; Tailwind CSS — internal design exploration,
        not affiliated with any real product.
      </footer>
    </div>
  );
}
