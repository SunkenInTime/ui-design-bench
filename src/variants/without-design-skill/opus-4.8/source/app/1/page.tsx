import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cortex — Think it. Keep it. Find it.",
};

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 text-white">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 0-4 4 4 4 0 0 0-2 7 4 4 0 0 0 6 4 4 4 0 0 0 6-4 4 4 0 0 0-2-7 4 4 0 0 0-4-4Z" />
          <path d="M12 6v13" />
        </svg>
      </div>
      <span className="text-[17px] font-semibold tracking-tight text-zinc-900">Cortex</span>
    </div>
  );
}

const features = [
  {
    title: "Capture in a keystroke",
    body: "Press ⌘K anywhere and dump a thought before it vanishes. No folders, no friction.",
    icon: (
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
    ),
  },
  {
    title: "Ideas that link themselves",
    body: "Mention any note with [[ ]] and Cortex builds the connections — and the backlinks — for you.",
    icon: (
      <>
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M8.5 8.5 15.5 15.5" />
      </>
    ),
  },
  {
    title: "Recall, not search",
    body: "Ask in plain language. Cortex answers from everything you've ever saved, with sources.",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </>
    ),
  },
  {
    title: "Everywhere you are",
    body: "Mac, Windows, web and mobile, synced in real time. Offline edits merge the moment you reconnect.",
    icon: (
      <>
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <path d="M8 20h8M12 18v2" />
      </>
    ),
  },
];

export default function Page() {
  return (
    <div className="flex flex-1 flex-col bg-white font-sans text-zinc-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm text-zinc-600 md:flex">
            <a href="#features" className="transition hover:text-zinc-900">Features</a>
            <a href="#how" className="transition hover:text-zinc-900">How it works</a>
            <a href="#pricing" className="transition hover:text-zinc-900">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden text-sm font-medium text-zinc-600 transition hover:text-zinc-900 sm:block">Log in</a>
            <a href="#" className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700">
              Get Cortex
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-20 pb-16 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Now with instant AI recall
          </div>
          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            The calm home for everything you think.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-zinc-600">
            Cortex is a note-taking app that grows into a second brain — capture
            a thought in a second, and find it forever.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#" className="w-full rounded-xl bg-zinc-900 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-zinc-700 sm:w-auto">
              Start for free
            </a>
            <a href="#" className="w-full rounded-xl border border-zinc-200 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50 sm:w-auto">
              Watch the 2-min tour
            </a>
          </div>
          <p className="mt-4 text-xs text-zinc-400">Free forever for personal use · No credit card</p>
        </div>

        {/* Product mock */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_24px_70px_-20px_rgba(0,0,0,0.18)]">
            <div className="flex items-center gap-1.5 border-b border-zinc-100 bg-zinc-50 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-zinc-300" />
              <span className="h-3 w-3 rounded-full bg-zinc-300" />
              <span className="h-3 w-3 rounded-full bg-zinc-300" />
              <div className="ml-3 h-5 w-56 rounded-md bg-zinc-100" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr]">
              <aside className="hidden border-r border-zinc-100 p-4 text-sm text-zinc-500 sm:block">
                <p className="mb-3 px-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">Workspace</p>
                {["Daily notes", "Reading", "Projects", "Ideas", "People"].map((n, i) => (
                  <div key={n} className={`mb-1 rounded-md px-2 py-1.5 ${i === 1 ? "bg-zinc-100 text-zinc-900" : ""}`}>
                    {n}
                  </div>
                ))}
              </aside>
              <div className="p-7 text-left">
                <p className="text-xs text-zinc-400">Reading · today</p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight">Notes on “Thinking in Systems”</h3>
                <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-zinc-600">
                  <p>A system is more than the sum of its parts — it’s the relationships between them.</p>
                  <p>
                    Linked to{" "}
                    <span className="rounded bg-amber-100 px-1.5 py-0.5 font-medium text-amber-800">[[Feedback loops]]</span>{" "}
                    and{" "}
                    <span className="rounded bg-sky-100 px-1.5 py-0.5 font-medium text-sky-800">[[Leverage points]]</span>.
                  </p>
                  <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-500">
                    3 backlinks · 1 mention in <span className="font-medium text-zinc-700">Daily notes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-zinc-100 bg-zinc-50/60">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Built for the way your mind actually works.</h2>
            <p className="mt-4 text-lg text-zinc-600">No rigid hierarchy. Just notes that find each other.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="bg-white p-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-700">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {f.icon}
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="pricing" className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="rounded-3xl bg-zinc-900 px-8 py-16 text-center">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Give your ideas a place to live.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-zinc-400">Join 200,000 thinkers building their second brain with Cortex.</p>
          <a href="#" className="mt-8 inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200">
            Start for free
          </a>
        </div>
      </section>

      <footer className="border-t border-zinc-100">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row">
          <Logo />
          <p>© {new Date().getFullYear()} Cortex Labs. Think freely.</p>
        </div>
      </footer>
    </div>
  );
}
