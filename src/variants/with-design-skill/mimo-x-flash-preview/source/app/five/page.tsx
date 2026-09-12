import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cairn / Marquee",
  description: "Kinetic poster landing direction for Cairn.",
};

const marqueeItems = [
  "CAPTURE AT THE SPEED OF THOUGHT",
  "LINKS THAT WORK BACKWARDS",
  "LOCAL FILES, NOT LANDFILLS",
  "SEARCH WITH CONTEXT",
  "NO STREAKS, NO SHAME",
  "EXPORT ANY TIME",
];

export default function MarqueePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0D0C10] text-[#F2F0EB]">

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <span className="font-[family-name:var(--font-unbounded)] text-sm font-medium tracking-wide">
          CAIRN
        </span>
        <div className="flex items-center gap-4">
          <a
            href="#features"
            className="hidden font-[family-name:var(--font-familjen)] text-sm text-[#F2F0EB]/60 hover:text-[#F2F0EB] sm:inline"
          >
            Features
          </a>
          <a
            href="#"
            className="inline-flex h-9 items-center rounded-full bg-[#FF2E63] px-4 font-[family-name:var(--font-familjen)] text-sm font-semibold text-[#0D0C10] hover:bg-[#ff4d7c]"
          >
            Get Cairn
          </a>
        </div>
      </header>

      <main>
        <section className="relative mx-auto max-w-6xl px-5 pt-10 sm:px-8 sm:pt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute top-20 right-0 h-64 w-64 rounded-full bg-[#8B5CF6]/30 blur-3xl sm:h-80 sm:w-80"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-40 left-0 h-56 w-56 rounded-full bg-[#FF2E63]/25 blur-3xl"
          />

          <div className="relative">
            <p className="font-[family-name:var(--font-familjen)] text-sm text-[#F2F0EB]/55">
              Note-taking for people who think in leaps
            </p>

            <h1 className="mt-6 font-[family-name:var(--font-unbounded)] text-[15vw] leading-[0.86] tracking-tight uppercase sm:text-[6.5rem] lg:text-[8rem]">
              <span className="block">Think</span>
              <span className="block text-[#FF2E63]">in</span>
              <span className="block">
                layers<span className="text-[#8B5CF6]">.</span>
              </span>
            </h1>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:items-end">
              <p className="max-w-md font-[family-name:var(--font-familjen)] text-lg leading-relaxed text-[#F2F0EB]/72">
                Cairn is your second brain with stage presence — a fast capture
                surface, a living link graph, and zero productivity theater.
              </p>
              <div className="flex flex-wrap gap-3 sm:justify-end">
                <a
                  href="#"
                  className="inline-flex h-12 items-center rounded-full bg-[#F2F0EB] px-6 font-[family-name:var(--font-familjen)] text-base font-semibold text-[#0D0C10] hover:bg-white"
                >
                  Start free
                </a>
                <a
                  href="#features"
                  className="inline-flex h-12 items-center rounded-full border border-[#F2F0EB]/25 px-6 font-[family-name:var(--font-familjen)] text-base font-medium hover:border-[#F2F0EB]/60"
                >
                  See how it moves
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="relative mt-16 border-y border-[#F2F0EB]/10 py-4">
          <div className="cairn-ticker flex w-max gap-8">
            {Array.from({ length: 2 }).map((_, block) => (
              <div key={block} className="flex gap-8" aria-hidden={block === 1}>
                {marqueeItems.map((item) => (
                  <span
                    key={`${block}-${item}`}
                    className="flex items-center gap-8 font-[family-name:var(--font-unbounded)] text-sm tracking-wide whitespace-nowrap text-[#F2F0EB]/50"
                  >
                    {item}
                    <span className="text-[#FF2E63]">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section
          id="features"
          className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20"
        >
          <h2 className="sr-only">Features</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                accent: "#FF2E63",
                h: "Instant capture",
                p: "Global hotkey opens a note before your thought cools down.",
              },
              {
                accent: "#8B5CF6",
                h: "Two-way links",
                p: "Write [[ once. Cairn keeps the relationship alive both ways.",
              },
              {
                accent: "#5EEAD4",
                h: "Graph that earns space",
                p: "See clusters form from real use — not a demo vault.",
              },
              {
                accent: "#F2F0EB",
                h: "Markdown you own",
                p: "Plain files on disk. iCloud, Dropbox, git — your call.",
              },
              {
                accent: "#FF2E63",
                h: "Daily return",
                p: "A short brief of what you touched, linked, and left hanging.",
              },
              {
                accent: "#8B5CF6",
                h: "Quiet by design",
                p: "No badges for checking email. No streak shaming.",
              },
            ].map((f) => (
              <article
                key={f.h}
                className="rounded-2xl border border-[#F2F0EB]/10 bg-[#141318] p-6 transition-colors hover:border-[#F2F0EB]/25"
              >
                <span
                  aria-hidden
                  className="mb-5 block h-1 w-10 rounded-full"
                  style={{ background: f.accent }}
                />
                <h3 className="font-[family-name:var(--font-familjen)] text-xl font-semibold">
                  {f.h}
                </h3>
                <p className="mt-2 font-[family-name:var(--font-familjen)] text-[15px] leading-relaxed text-[#F2F0EB]/65">
                  {f.p}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-[#FF2E63] via-[#c43d8e] to-[#8B5CF6] px-6 py-14 text-center sm:px-12">
              <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-unbounded)] text-3xl leading-tight tracking-tight uppercase sm:text-5xl">
                Build the mind you can navigate
              </h2>
              <p className="mx-auto mt-4 max-w-md font-[family-name:var(--font-familjen)] text-base text-[#0D0C10]/80">
                Free personal plan. Upgrade only when your team wants in.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex h-12 items-center rounded-full bg-[#0D0C10] px-7 font-[family-name:var(--font-familjen)] text-base font-semibold text-[#F2F0EB] hover:bg-black"
              >
                Open Cairn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <p className="font-[family-name:var(--font-familjen)] text-sm text-[#F2F0EB]/40">
          Cairn · second brain · 2026
        </p>
      </footer>
    </div>
  );
}
