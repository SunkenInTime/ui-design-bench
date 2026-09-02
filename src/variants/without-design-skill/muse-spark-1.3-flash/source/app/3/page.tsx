import Link from "next/link";

export const metadata = {
  title: "Memora v3 — Editorial Split | Second Brain",
  description: "Version 3: a warm editorial split-screen landing page for Memora.",
};

const steps = [
  { n: "01", title: "Drop it in", body: "Notes, highlights, voice memos, PDFs — Memora swallows them whole and files them for you." },
  { n: "02", title: "Let it connect", body: "Backlinks form on their own. Open any note and see everything it relates to." },
  { n: "03", title: "Think on top", body: "Weekly review mode turns scattered captures into essays, plans, and decisions." },
];

export default function V3() {
  return (
    <div className="min-h-screen bg-[#f4efe6] font-sans text-[#1c1917]">
      <header className="border-b border-[#1c1917]/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <span className="text-lg font-extrabold tracking-tight">
            Memora<span className="text-amber-600">.</span>
          </span>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#how" className="hover:text-amber-700">How it works</a>
            <a href="#notes" className="hover:text-amber-700">In practice</a>
            <a href="#cta" className="hover:text-amber-700">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/4" className="text-sm font-medium hover:text-amber-700">
              See playful v4 →
            </Link>
            <a href="#cta" className="rounded-full bg-[#1c1917] px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-700">
              Get started
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pt-14 pb-24 sm:pt-20">
        <p className="text-xs font-bold tracking-[0.25em] text-amber-700 uppercase">
          Version 03 — Editorial
        </p>
        <div className="mt-6 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-5xl leading-[1.02] font-extrabold tracking-tight text-balance sm:text-6xl">
              Everything you&apos;ve learned, finally in one place.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#57534e]">
              Memora is the note-taking app that reads between the lines —
              linking your highlights, ideas, and half-thoughts into a second
              brain you can actually think with.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#cta" className="rounded-full bg-amber-600 px-8 py-3.5 text-center text-sm font-bold text-white hover:bg-amber-700">
                Start your second brain
              </a>
              <a href="#how" className="rounded-full border border-[#1c1917]/20 px-8 py-3.5 text-center text-sm font-bold hover:border-[#1c1917]">
                How it works
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["AK", "JM", "RS", "TW"].map((i) => (
                  <span key={i} className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#f4efe6] bg-[#1c1917] text-[10px] font-bold text-white">
                    {i}
                  </span>
                ))}
              </div>
              <p className="text-sm text-[#57534e]">
                <strong className="text-[#1c1917]">4.9/5</strong> from 6,200+ reviews
              </p>
            </div>
          </div>

          {/* Mock notes stack */}
          <div id="notes" className="relative">
            <div aria-hidden className="absolute -top-6 -right-4 h-full w-full rotate-3 rounded-3xl bg-amber-200/60" />
            <div aria-hidden className="absolute -top-3 -right-2 h-full w-full -rotate-2 rounded-3xl bg-white shadow-sm" />
            <div className="relative rounded-3xl border border-[#1c1917]/10 bg-white p-7 shadow-xl">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold tracking-widest text-stone-400 uppercase">✦ Launch plan — linked notes</p>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800"> synced </span>
              </div>
              <h2 className="mt-4 text-2xl font-bold">Positioning draft</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-stone-600">
                “Memora isn&apos;t storage — it&apos;s <mark className="bg-amber-200 px-1">thinking infrastructure</mark>.
                See also: notes on Zettelkasten, Maya&apos;s pricing thread…”
              </p>
              <div className="mt-5 space-y-2">
                {[
                  ["→ Zettelkasten method", "12 links"],
                  ["→ Pricing psychology", "8 links"],
                  ["→ Voice memo · gym idea", "3 links"],
                ].map(([t, c]) => (
                  <div key={t} className="flex items-center justify-between rounded-xl bg-[#f4efe6] px-4 py-3 text-sm">
                    <span className="font-semibold">{t}</span>
                    <span className="text-xs text-stone-500">{c}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 rounded-xl bg-[#1c1917] px-4 py-3 text-sm text-white">
                <span className="text-amber-400">✦</span>
                Ask Memora: “what did we decide about pricing?”
              </div>
            </div>
          </div>
        </div>

        <section id="how" className="mt-24 grid gap-px overflow-hidden rounded-3xl border border-[#1c1917]/10 bg-[#1c1917]/10 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="bg-[#faf7f0] p-8">
              <p className="font-mono text-sm font-bold text-amber-600">{s.n}</p>
              <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-stone-600">{s.body}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 grid items-center gap-8 rounded-3xl bg-[#1c1917] p-10 text-white sm:p-14 lg:grid-cols-[1fr_auto]">
          <div id="cta">
            <p className="text-xs font-bold tracking-[0.25em] text-amber-400 uppercase">Free for 30 days</p>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Stop losing your best ideas to the scroll.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/" className="rounded-full bg-amber-500 px-8 py-3.5 text-center text-sm font-bold text-black hover:bg-amber-400">
              Try Memora free
            </Link>
            <Link href="/2" className="rounded-full border border-white/25 px-8 py-3.5 text-center text-sm font-bold hover:border-white">
              ← Compare v2
            </Link>
          </div>
        </section>

        <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500">
          <span>Memora v3 · Editorial</span>
          <span className="flex gap-4">
            <Link href="/1" className="hover:text-stone-800">v1</Link>
            <Link href="/2" className="hover:text-stone-800">v2</Link>
            <Link href="/4" className="hover:text-stone-800">v4</Link>
            <Link href="/5" className="hover:text-stone-800">v5</Link>
          </span>
        </footer>
      </main>
    </div>
  );
}
