import Link from "next/link";

export const metadata = {
  title: "Mneme — A quiet place to think",
};

export default function IterationOne() {
  return (
    <div className="min-h-screen w-full bg-[#fafaf7] text-zinc-900 antialiased">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-8 pt-8">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-zinc-900">
            <div className="h-2 w-2 rounded-full bg-[#fafaf7]" />
          </div>
          <span className="text-sm font-medium tracking-tight">Mneme</span>
        </div>
        <div className="hidden items-center gap-8 text-sm text-zinc-600 md:flex">
          <a className="hover:text-zinc-900" href="#features">
            Features
          </a>
          <a className="hover:text-zinc-900" href="#method">
            Method
          </a>
          <a className="hover:text-zinc-900" href="#pricing">
            Pricing
          </a>
          <a className="hover:text-zinc-900" href="#changelog">
            Changelog
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a className="text-sm text-zinc-600 hover:text-zinc-900" href="#">
            Sign in
          </a>
          <Link
            href="#"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-white transition-colors hover:bg-zinc-700"
          >
            Start writing
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-8 pt-32 pb-24">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Version 2.4 · End-to-end encrypted
        </div>
        <h1 className="max-w-4xl font-serif text-[80px] leading-[0.95] tracking-tight text-zinc-900">
          A quiet place
          <br />
          <span className="italic text-zinc-500">to think clearly.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-600">
          Mneme is a second brain that remembers the way you do — by
          association, context, and intent. Capture an idea in seconds. Find
          it years later, exactly when you need it.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            Begin your archive
            <svg
              viewBox="0 0 16 16"
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M2 8h12m-4-4l4 4-4 4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="#"
            className="text-sm text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline"
          >
            Or watch the 90-second tour →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-8 pb-24">
        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_1px_0_rgba(0,0,0,0.03),0_24px_48px_-24px_rgba(0,0,0,0.18)]">
          <div className="flex items-center gap-1.5 border-b border-zinc-100 px-5 py-3">
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
            <div className="ml-4 flex-1 text-center text-xs text-zinc-400">
              mneme.app / daily / 2026-04-16
            </div>
          </div>
          <div className="grid grid-cols-[220px_1fr_280px]">
            <aside className="border-r border-zinc-100 p-5 text-sm">
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                Archive
              </div>
              <ul className="space-y-1">
                {[
                  ["Daily", true],
                  ["Projects", false],
                  ["Readings", false],
                  ["People", false],
                  ["Archive", false],
                ].map(([name, active]) => (
                  <li
                    key={String(name)}
                    className={`rounded-md px-2 py-1.5 ${
                      active ? "bg-zinc-100 font-medium" : "text-zinc-600"
                    }`}
                  >
                    {name}
                  </li>
                ))}
              </ul>
              <div className="mt-6 mb-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                Recent
              </div>
              <ul className="space-y-1 text-zinc-600">
                <li className="truncate">Notes on Borges</li>
                <li className="truncate">Q2 narrative draft</li>
                <li className="truncate">Dinner with M.</li>
                <li className="truncate">Reading: The Overstory</li>
              </ul>
            </aside>

            <main className="p-10">
              <div className="mb-1 text-xs text-zinc-400">Thursday</div>
              <h2 className="mb-8 font-serif text-3xl tracking-tight">
                April 16, 2026
              </h2>
              <p className="mb-4 leading-relaxed text-zinc-800">
                Reading Borges this morning. The library is a point-of-view
                instrument — every cataloguing choice is a choice about what
                kind of mind you will become.
              </p>
              <p className="mb-4 leading-relaxed text-zinc-800">
                <span className="rounded bg-yellow-100 px-1">
                  Idea: treat the archive as a telescope, not a drawer.
                </span>{" "}
                The point is not to store everything, but to aim at what you
                want to notice.
              </p>
              <p className="leading-relaxed text-zinc-500">
                Linked from{" "}
                <span className="text-zinc-900 underline decoration-dotted underline-offset-2">
                  [[Notes on attention]]
                </span>{" "}
                and{" "}
                <span className="text-zinc-900 underline decoration-dotted underline-offset-2">
                  [[Pattern language]]
                </span>
                .
              </p>
            </main>

            <aside className="border-l border-zinc-100 bg-[#fdfdfb] p-5 text-sm">
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                Related
              </div>
              <ul className="space-y-3">
                {[
                  ["Notes on attention", "3 days ago"],
                  ["Calvino, Six Memos", "2 weeks ago"],
                  ["Library as instrument", "1 month ago"],
                  ["What to notice", "3 months ago"],
                ].map(([t, d]) => (
                  <li key={t}>
                    <div className="font-medium text-zinc-800">{t}</div>
                    <div className="text-xs text-zinc-400">{d}</div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 mb-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                Tags
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["reading", "borges", "attention", "archive"].map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-8 pb-32">
        <div className="mb-16 max-w-2xl">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            The Method
          </div>
          <h2 className="font-serif text-5xl leading-[1.05] tracking-tight">
            Three habits. <span className="italic text-zinc-400">That&apos;s it.</span>
          </h2>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Capture without friction",
              d: "One keystroke opens a blank line. Write. Close. The shape of the thought comes later — Mneme just gets out of the way.",
            },
            {
              n: "02",
              t: "Connect by association",
              d: "Type [[ to link any idea to any other. Mneme suggests quiet connections based on language, context, and the way you think.",
            },
            {
              n: "03",
              t: "Retrieve what matters",
              d: "Search the way you remember — by feeling, fragment, or season. Your archive becomes a telescope pointed at your past attention.",
            },
          ].map((f) => (
            <div key={f.n} className="border-t border-zinc-300 pt-6">
              <div className="mb-4 font-mono text-xs text-zinc-400">{f.n}</div>
              <h3 className="mb-3 font-serif text-2xl tracking-tight">
                {f.t}
              </h3>
              <p className="leading-relaxed text-zinc-600">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-8 py-20">
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="font-serif text-3xl leading-[1.3] tracking-tight text-zinc-800">
              &ldquo;I&apos;ve used Mneme every day for two years. It is the only
              software I would genuinely miss.&rdquo;
            </p>
            <footer className="mt-8 text-sm text-zinc-500">
              — Ava Lundgren, essayist
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-8 py-24">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-xl font-serif text-5xl leading-[1.05] tracking-tight">
              Begin a practice
              <br />
              <span className="italic text-zinc-400">you&apos;ll keep.</span>
            </h2>
            <p className="mt-4 max-w-md text-zinc-600">
              Free for individuals, forever. Your notes remain yours — local
              first, fully exportable, always.
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            Start writing today
          </Link>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl border-t border-zinc-200 px-8 py-10 text-sm text-zinc-500">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded bg-zinc-900">
              <div className="h-1.5 w-1.5 rounded-full bg-[#fafaf7]" />
            </div>
            <span>Mneme — made slowly, in Copenhagen.</span>
          </div>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Security</a>
            <a href="#">Manifesto</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
