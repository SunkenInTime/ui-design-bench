import Link from "next/link";

function AppMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_30px_60px_-20px_rgba(15,23,42,0.25)] ring-1 ring-slate-900/5">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-slate-200/80 bg-slate-50/80 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-slate-300" />
        <span className="size-2.5 rounded-full bg-slate-300" />
        <span className="size-2.5 rounded-full bg-slate-300" />
        <div className="mx-auto flex items-center gap-1.5 rounded-md bg-white px-3 py-1 text-[10px] text-slate-400 ring-1 ring-slate-200">
          <svg viewBox="0 0 16 16" className="size-2.5" aria-hidden>
            <circle
              cx="7"
              cy="7"
              r="4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="M10.5 10.5 L14 14"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          Search 4,182 notes
        </div>
      </div>

      <div className="grid grid-cols-[7rem_1fr] sm:grid-cols-[9rem_1fr_9rem]">
        {/* Sidebar */}
        <aside className="space-y-4 border-r border-slate-200/80 bg-slate-50/50 p-3">
          <div>
            <p className="px-2 text-[9px] font-semibold tracking-wider text-slate-400 uppercase">
              Pinned
            </p>
            <div className="mt-1.5 space-y-0.5">
              {["Daily note", "Reading queue", "Q3 strategy"].map((x, i) => (
                <p
                  key={x}
                  className={`truncate rounded px-2 py-1 text-[10px] ${
                    i === 2
                      ? "bg-indigo-50 font-medium text-indigo-700"
                      : "text-slate-600"
                  }`}
                >
                  {x}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="px-2 text-[9px] font-semibold tracking-wider text-slate-400 uppercase">
              Recent
            </p>
            <div className="mt-1.5 space-y-0.5">
              {["Retention teardown", "Call — Priya", "Pricing v4", "Idea dump"].map(
                (x) => (
                  <p
                    key={x}
                    className="truncate rounded px-2 py-1 text-[10px] text-slate-600"
                  >
                    {x}
                  </p>
                ),
              )}
            </div>
          </div>
        </aside>

        {/* Editor */}
        <div className="p-5">
          <p className="text-[9px] font-medium tracking-wider text-indigo-500 uppercase">
            Strategy · edited 4m ago
          </p>
          <h4 className="mt-2 text-base font-semibold tracking-tight text-slate-900">
            Q3 strategy
          </h4>
          <div className="mt-3 space-y-2">
            <p className="text-[10px] leading-relaxed text-slate-600">
              Retention is the whole game this quarter. The{" "}
              <span className="rounded bg-indigo-50 px-1 font-medium text-indigo-700">
                activation gap
              </span>{" "}
              we found in June is still the biggest lever — see{" "}
              <span className="rounded bg-indigo-50 px-1 font-medium text-indigo-700">
                Retention teardown
              </span>
              .
            </p>
            <p className="text-[10px] leading-relaxed text-slate-600">
              Priya disagrees: she thinks pricing is upstream of all of it.
            </p>
            <div className="!mt-4 rounded-lg border border-slate-200 bg-slate-50/70 p-2.5">
              <p className="text-[9px] font-semibold text-slate-500">
                ↩ 3 backlinks
              </p>
              <p className="mt-1 text-[10px] text-slate-500">
                Call — Priya · Pricing v4 · Board update
              </p>
            </div>
          </div>
        </div>

        {/* Mini graph */}
        <aside className="hidden border-l border-slate-200/80 bg-slate-50/50 p-3 sm:block">
          <p className="text-[9px] font-semibold tracking-wider text-slate-400 uppercase">
            Graph
          </p>
          <svg viewBox="0 0 100 120" className="mt-2 w-full" aria-hidden>
            <g stroke="#c7d2fe" strokeWidth="1.2">
              <line x1="50" y1="55" x2="22" y2="26" />
              <line x1="50" y1="55" x2="80" y2="30" />
              <line x1="50" y1="55" x2="30" y2="92" />
              <line x1="50" y1="55" x2="76" y2="88" />
              <line x1="30" y1="92" x2="76" y2="88" />
            </g>
            <g fill="#a5b4fc">
              <circle cx="22" cy="26" r="4.5" />
              <circle cx="80" cy="30" r="3.5" />
              <circle cx="30" cy="92" r="4" />
              <circle cx="76" cy="88" r="3.5" />
            </g>
            <circle cx="50" cy="55" r="7" fill="#4f46e5" />
          </svg>
        </aside>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Automatic backlinks",
    body: "Every mention becomes a two-way connection. Context finds you instead of the other way round.",
    icon: (
      <>
        <circle cx="7" cy="7" r="3" />
        <circle cx="17" cy="17" r="3" />
        <path d="M9.5 9.5 L14.5 14.5" />
      </>
    ),
  },
  {
    title: "Recall search",
    body: "Ask a real question, get a real answer — assembled from your notes with citations you can click.",
    icon: (
      <>
        <circle cx="11" cy="11" r="6" />
        <path d="M15.5 15.5 L20 20" />
      </>
    ),
  },
  {
    title: "Capture anywhere",
    body: "Global hotkey on desktop, share sheet on mobile, email-to-inbox from anything else.",
    icon: (
      <>
        <path d="M12 4 L12 20" />
        <path d="M4 12 L20 12" />
      </>
    ),
  },
  {
    title: "Yours, in plain text",
    body: "Markdown files in a folder you control, synced end-to-end encrypted across every device.",
    icon: (
      <>
        <path d="M5 4 h9 l5 5 v11 a1 1 0 0 1 -1 1 H5 a1 1 0 0 1 -1 -1 V5 a1 1 0 0 1 1 -1z" />
        <path d="M14 4 v5 h5" />
      </>
    ),
  },
  {
    title: "Templates & dailies",
    body: "Meeting notes, book notes, one-on-ones. Start from a structure, or from nothing at all.",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 9 h16" />
      </>
    ),
  },
  {
    title: "Works offline",
    body: "Everything is local first. The plane, the tunnel, the cabin — all fine.",
    icon: (
      <>
        <path d="M6 16 a4 4 0 0 1 0.5 -7.9 A5.5 5.5 0 0 1 17 8.5 a3.75 3.75 0 0 1 0.5 7.5z" />
      </>
    ),
  },
];

export default function StudioLanding() {
  return (
    <div className="min-h-screen flex-1 bg-white font-sans text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center gap-8 px-6 py-3.5">
          <span className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid size-7 place-items-center rounded-lg bg-indigo-600 text-[13px] font-bold text-white">
              L
            </span>
            Loam
          </span>
          <div className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
            <a className="transition hover:text-slate-900" href="#features">
              Features
            </a>
            <a className="transition hover:text-slate-900" href="#testimonial">
              Customers
            </a>
            <a className="transition hover:text-slate-900" href="#cta">
              Pricing
            </a>
          </div>
          <div className="ml-auto flex items-center gap-3 text-sm">
            <a className="hidden text-slate-600 hover:text-slate-900 sm:block" href="#cta">
              Sign in
            </a>
            <a
              href="#cta"
              className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-indigo-700"
            >
              Start free
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-slate-50/80 to-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_70%)]"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-[1fr_1.15fr] lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <span className="size-1.5 rounded-full bg-indigo-500" />
              Recall is out of beta
            </span>
            <h1 className="mt-6 text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-balance sm:text-6xl">
              The second brain that keeps up with the first.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-pretty text-slate-600">
              Loam captures what you learn, connects it automatically, and hands
              it back the moment it becomes relevant again.
            </p>
            <form className="mt-9 flex max-w-md flex-col gap-2.5 sm:flex-row">
              <input
                type="email"
                required
                placeholder="you@company.com"
                aria-label="Work email"
                className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-3 text-sm shadow-sm placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              >
                Start free
              </button>
            </form>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Check /> Free for 500 notes
              </span>
              <span className="flex items-center gap-1.5">
                <Check /> No credit card
              </span>
              <span className="flex items-center gap-1.5">
                <Check /> Import from Notion & Obsidian
              </span>
            </div>
          </div>

          <div className="animate-rise lg:pl-4">
            <AppMockup />
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="border-b border-slate-200/70 py-10">
        <p className="text-center text-xs font-medium tracking-wide text-slate-400">
          Trusted by teams at
        </p>
        <div className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-5 px-6">
          {["Northwind", "Kestrel", "Halcyon Bio", "Foundry", "Meridian"].map(
            (name) => (
              <span
                key={name}
                className="text-base font-semibold tracking-tight text-slate-300"
              >
                {name}
              </span>
            ),
          )}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-indigo-600">Features</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-balance sm:text-4xl">
            Everything you need to think in public with yourself.
          </h2>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title}>
              <div className="grid size-10 place-items-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                <svg
                  viewBox="0 0 24 24"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  {f.icon}
                </svg>
              </div>
              <h3 className="mt-4 font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section
        id="testimonial"
        className="scroll-mt-16 border-y border-slate-200/70 bg-slate-50/60"
      >
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-xl leading-relaxed text-balance sm:text-2xl">
            “We stopped writing the same strategy doc twice a year. Loam just
            surfaced the one we already wrote — plus the three reasons we
            abandoned it.”
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
              PR
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold">Priya Raman</p>
              <p className="text-xs text-slate-500">Head of Product, Kestrel</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="scroll-mt-16 px-6 py-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-slate-900 px-8 py-16 text-center sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.45),transparent_60%)] blur-2xl"
          />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-balance text-white sm:text-4xl">
              Your best thinking is already written down.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-slate-300">
              You just can&apos;t find it. Start free — bring your existing notes
              with you in about ninety seconds.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#cta"
                className="rounded-lg bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Start free
              </a>
              <a
                href="#features"
                className="rounded-lg border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Book a walkthrough
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 pt-8 pb-28 text-sm text-slate-500 sm:flex-row sm:pb-8">
          <span>© 2026 Loam Labs, Inc.</span>
          <div className="flex gap-6">
            <Link className="hover:text-slate-900" href="/">
              All designs
            </Link>
            <span>Privacy</span>
            <span>Security</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Check() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="size-3.5 text-emerald-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 8.5 L6.5 12 L13 4.5" />
    </svg>
  );
}
