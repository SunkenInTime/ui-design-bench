import Link from "next/link";

export const metadata = {
  title: "Memora v5 — Command / Power | Second Brain",
  description: "Version 5: a keyboard-first power-user landing page for Memora.",
};

const shortcuts = [
  ["⌘ K", "Command bar — jump anywhere"],
  ["⌘ J", "Instant capture from any app"],
  ["⌘ /", "Ask your second brain"],
  ["[[", "Link notes as you type"],
];

const faqs = [
  ["Can I import from Notion / Obsidian?", "One click. Folders become tags, links survive, attachments come along."],
  ["Is my data private?", "End-to-end encrypted. AI recall runs on your vault — never trained on."],
  ["Does it work offline?", "Fully. Syncs when you're back, conflicts merge cleanly."],
];

export default function V5() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 antialiased">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="flex items-center gap-2 font-mono text-sm font-bold text-white">
            <span className="rounded-md bg-emerald-400 px-2 py-1 text-black">▮</span>
            memora<span className="text-slate-500">_v5</span>
          </span>
          <nav className="hidden items-center gap-7 font-mono text-[13px] text-slate-400 md:flex">
            <a href="#editor" className="hover:text-white">~/editor</a>
            <a href="#shortcuts" className="hover:text-white">~/shortcuts</a>
            <a href="#faq" className="hover:text-white">~/faq</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/" className="font-mono text-[13px] text-slate-400 hover:text-white">
              cd ~/all
            </Link>
            <a href="#cta" className="rounded-lg bg-emerald-400 px-4 py-2 font-mono text-[13px] font-bold text-black hover:bg-emerald-300">
              $ install
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pt-14 pb-24 sm:pt-20">
        <p className="font-mono text-xs tracking-widest text-emerald-400 uppercase">
          {"// version 05 — power user"}
        </p>
        <div className="mt-4 grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h1 className="text-5xl leading-[1.02] font-extrabold tracking-tight text-white text-balance sm:text-6xl">
              The fastest way to think in public<span className="text-emerald-400">_</span>
            </h1>
            <p className="mt-5 max-w-lg leading-relaxed text-slate-400">
              Memora is a keyboard-first second brain. Markdown-native, offline-first,
              and scriptable — built for people who live in their notes 8 hours a day.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#cta" className="rounded-lg bg-emerald-400 px-7 py-3.5 text-center font-mono text-sm font-bold text-black hover:bg-emerald-300">
                $ memora init --free
              </a>
              <a href="#editor" className="rounded-lg border border-white/15 px-7 py-3.5 text-center font-mono text-sm text-slate-200 hover:border-white/40">
                view demo ↓
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs text-slate-500">
              {["markdown-native", "offline-first", "vim-mode", "api + webhooks", "e2e-encrypted"].map((t) => (
                <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1">{t}</span>
              ))}
            </div>
          </div>

          {/* Editor mock */}
          <div id="editor" className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220] shadow-2xl shadow-emerald-500/10">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 font-mono text-xs text-slate-500">launch-plan.md — 4 backlinks</span>
            </div>
            <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed">
              <p className="text-slate-500"># Positioning</p>
              <p className="text-slate-200">Memora isn&apos;t storage — it&apos;s <span className="bg-emerald-400/20 px-1 text-emerald-300">thinking infra</span>.</p>
              <p className="text-slate-400">- [[zettelkasten]] says: atomic notes win</p>
              <p className="text-slate-400">- [[pricing-psych]] → anchor high, trial low</p>
              <p className="text-slate-500">- [ ] ship v2 graph view by Fri</p>
              <div className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-emerald-300">
                ⌘/ “draft the launch email from these notes” ⏎
              </div>
            </div>
          </div>
        </div>

        <section id="shortcuts" className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="font-mono text-sm font-bold tracking-widest text-emerald-400 uppercase">~/shortcuts</h2>
            <ul className="mt-5 space-y-3">
              {shortcuts.map(([key, desc]) => (
                <li key={key} className="flex items-center justify-between gap-4 rounded-lg bg-white/[0.04] px-4 py-3">
                  <span className="font-mono text-sm text-slate-300">{desc}</span>
                  <kbd className="rounded-md border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-xs font-bold text-white">{key}</kbd>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="font-mono text-sm font-bold tracking-widest text-emerald-400 uppercase">~/benchmarks</h2>
            <div className="mt-5 space-y-4 font-mono text-sm">
              {[
                ["cold start", "0.4s", "92%"],
                ["search 50k notes", "38ms", "85%"],
                ["sync 1k edits", "1.1s", "70%"],
              ].map(([label, val, w]) => (
                <div key={label}>
                  <div className="flex justify-between text-slate-300">
                    <span>{label}</span>
                    <span className="font-bold text-white">{val}</span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-emerald-400" style={{ width: w }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto mt-20 max-w-3xl">
          <h2 className="font-mono text-sm font-bold tracking-widest text-emerald-400 uppercase">~/faq</h2>
          <div className="mt-5 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
            {faqs.map(([q, a]) => (
              <div key={q} className="p-6">
                <p className="font-bold text-white">$ {q}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-400">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="cta" className="mt-16 rounded-2xl border border-emerald-400/25 bg-gradient-to-b from-emerald-400/15 to-transparent p-10 text-center sm:p-14">
          <p className="font-mono text-xs tracking-widest text-emerald-400 uppercase">$ ready when you are</p>
          <h2 className="mx-auto mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl">
            Pipe your brain into Memora in 60 seconds.
          </h2>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/" className="rounded-lg bg-emerald-400 px-8 py-3.5 font-mono text-sm font-bold text-black hover:bg-emerald-300">
              $ memora init
            </Link>
            <Link href="/4" className="rounded-lg border border-white/20 px-8 py-3.5 font-mono text-sm hover:border-white/50">
              ← back to v4
            </Link>
          </div>
        </section>

        <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-600">
          <span>memora v5 · power</span>
          <span className="flex gap-4">
            <Link href="/1" className="hover:text-slate-300">/1</Link>
            <Link href="/2" className="hover:text-slate-300">/2</Link>
            <Link href="/3" className="hover:text-slate-300">/3</Link>
            <Link href="/4" className="hover:text-slate-300">/4</Link>
          </span>
        </footer>
      </main>
    </div>
  );
}
