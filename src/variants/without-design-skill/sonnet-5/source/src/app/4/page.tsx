import Link from "next/link";
import {
  IconArrowRight,
  IconBrain,
  IconCheck,
  IconCloud,
  IconLink,
  IconNetwork,
  IconSearch,
  IconShield,
  IconX,
  IconZap,
} from "../../components/icons";

export const metadata = {
  title: "Cortex — Iteration 4 · Terminal",
};

const NAV_LINKS = ["$ docs", "$ changelog", "$ pricing"];

const METRICS = [
  { label: "uptime_30d", value: "99.98%" },
  { label: "median_sync_ms", value: "118" },
  { label: "notes_indexed", value: "4.2B" },
  { label: "active_graphs", value: "612K" },
];

const FEATURES = [
  {
    tag: "// capture",
    title: "capture.write(thought)",
    body: "A single shortcut pipes any thought — text, voice, clipped link — straight into your graph. No staging area.",
    icon: IconZap,
  },
  {
    tag: "// link",
    title: "graph.autolink(note)",
    body: "Entity and reference detection runs on every save, wiring new notes into your existing graph in real time.",
    icon: IconLink,
  },
  {
    tag: "// recall",
    title: "graph.query(intent)",
    body: "Semantic search over your full history — query by intent, not just exact string match.",
    icon: IconSearch,
  },
  {
    tag: "// sync",
    title: "sync.replicate(*)",
    body: "Local-first CRDT sync engine. Works fully offline, reconciles instantly when you're back online.",
    icon: IconCloud,
  },
  {
    tag: "// secure",
    title: "vault.encrypt(note)",
    body: "Client-side encryption by default. Your raw notes never touch our servers unencrypted.",
    icon: IconShield,
  },
  {
    tag: "// graph",
    title: "graph.render(view)",
    body: "Inspect your second brain as a force-directed graph — filter by tag, date, or connection depth.",
    icon: IconNetwork,
  },
];

const COMPARISON = [
  { label: "Bi-directional linking", cortex: true, basic: false },
  { label: "Semantic / intent search", cortex: true, basic: false },
  { label: "Local-first offline mode", cortex: true, basic: true },
  { label: "End-to-end encryption", cortex: true, basic: false },
  { label: "Graph visualization", cortex: true, basic: false },
  { label: "Markdown + plaintext export", cortex: true, basic: true },
];

const TESTIMONIALS = [
  { handle: "@priyacodes", quote: "Migrated from a folder-based app in one evening. Backlinks alone justify the switch.", role: "Staff Engineer" },
  { handle: "@marcus_builds", quote: "The graph query language for recall is the first 'AI feature' in a notes app I've actually kept using.", role: "Founder, devtools" },
  { handle: "@sofia_writes", quote: "Offline-first and it actually works offline. Refreshing in 2026.", role: "Technical Writer" },
];

const PRICING = [
  { name: "free", price: "$0", body: "// for personal graphs", features: ["unlimited_notes: true", "autolink: true", "devices: 2"] },
  { name: "pro", price: "$10", body: "// for daily-driver use", features: ["everything: free", "semantic_search: true", "devices: unlimited", "history: full"], highlighted: true },
  { name: "team", price: "$18", body: "// for shared graphs", features: ["everything: pro", "shared_graphs: true", "sso: true", "support: priority"] },
];

export default function Variant4() {
  return (
    <div className="flex flex-1 flex-col bg-black font-mono text-zinc-300">
      <header className="sticky top-0 z-40 border-b border-emerald-500/15 bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm">
          <div className="flex items-center gap-2 font-semibold text-emerald-400">
            <span className="flex h-7 w-7 items-center justify-center rounded border border-emerald-500/40 text-emerald-400">
              <IconBrain className="h-4 w-4" />
            </span>
            cortex<span className="animate-pulse-soft text-emerald-500">_</span>
          </div>
          <nav className="hidden items-center gap-8 text-zinc-500 md:flex">
            {NAV_LINKS.map((l) => (
              <a key={l} href="#" className="transition-colors hover:text-emerald-400">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden text-zinc-500 hover:text-emerald-400 sm:inline">
              sign_in()
            </a>
            <a
              href="#"
              className="rounded border border-emerald-500/50 bg-emerald-500/10 px-4 py-2 font-semibold text-emerald-400 transition-colors hover:bg-emerald-500/20"
            >
              cortex init
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pt-20 pb-24">
          <div className="pointer-events-none absolute inset-0 bg-line-grid text-emerald-500/[0.07] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
            <div className="animate-fade-up">
              <p className="mb-5 inline-flex items-center gap-2 rounded border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-xs text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400" />
                v2.6.0 — semantic recall shipped
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                Notes that <span className="text-emerald-400">connect</span>
                <br />
                themselves.
              </h1>
              <p className="mt-6 max-w-md leading-relaxed text-zinc-400">
                Cortex is a graph-native second brain. Every note is a node;
                every reference, an edge. Built for people who think in
                systems.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4 text-sm">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded bg-emerald-500 px-5 py-3 font-semibold text-black transition-colors hover:bg-emerald-400"
                >
                  npx cortex init
                  <IconArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded border border-zinc-700 px-5 py-3 text-zinc-300 transition-colors hover:border-emerald-500/40 hover:text-emerald-400"
                >
                  read --docs
                </a>
              </div>
              <p className="mt-6 text-xs text-zinc-600">
                $ free tier · no credit card · self-hostable export
              </p>
            </div>

            <div
              className="animate-fade-up rounded-lg border border-zinc-800 bg-zinc-950 shadow-2xl shadow-emerald-500/5"
              style={{ animationDelay: "120ms" }}
            >
              <div className="flex items-center gap-1.5 border-b border-zinc-800 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="ml-3 text-xs text-zinc-500">cortex — zsh</span>
              </div>
              <div className="space-y-2 p-5 text-[13px] leading-relaxed">
                <p className="text-zinc-500">
                  <span className="text-emerald-400">~/cortex</span> $ cortex capture{" "}
                  {`"met w/ maya re: q3 relaunch"`}
                </p>
                <p className="text-zinc-400">→ note created: notes/2026-06-30-1142.md</p>
                <p className="text-zinc-400">→ entities detected: [Maya, Q3 Relaunch]</p>
                <p className="text-zinc-400">
                  → linked: notes/people/maya.md, notes/projects/q3-relaunch.md
                </p>
                <p className="pt-2 text-zinc-500">
                  <span className="text-emerald-400">~/cortex</span> $ cortex recall{" "}
                  {`"what did maya say about onboarding"`}
                </p>
                <p className="text-zinc-400">→ 3 matches, ranked by relevance:</p>
                <p className="pl-4 text-zinc-300">
                  1. notes/2025-11-03.md{" "}
                  <span className="text-zinc-600">{`— "onboarding flow needs a rethink…"`}</span>
                </p>
                <p className="pl-4 text-zinc-300">
                  2. notes/projects/onboarding.md{" "}
                  <span className="text-zinc-600">— linked 4 times</span>
                </p>
                <p className="pl-4 text-zinc-300">
                  3. notes/people/maya.md{" "}
                  <span className="text-zinc-600">— last mentioned today</span>
                </p>
                <p className="pt-2">
                  <span className="text-emerald-400">~/cortex</span> ${" "}
                  <span className="animate-pulse-soft">▍</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="border-y border-zinc-800 px-6 py-12">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-4">
            {METRICS.map((m) => (
              <div key={m.label}>
                <p className="text-2xl font-bold text-emerald-400 sm:text-3xl">{m.value}</p>
                <p className="mt-1.5 text-xs text-zinc-500">{m.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Feature grid */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              The core module set
            </h2>
            <p className="mt-3 text-zinc-500">
              Six primitives. One graph. Zero folders.
            </p>
            <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-zinc-800 bg-zinc-800 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((f) => (
                <div key={f.title} className="bg-zinc-950 p-6">
                  <p className="text-xs text-emerald-500/70">{f.tag}</p>
                  <div className="mt-4 flex items-center gap-2.5 text-white">
                    <f.icon className="h-4.5 w-4.5 text-emerald-400" />
                    <h3 className="font-semibold">{f.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-500">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Graph visual */}
        <section className="border-t border-zinc-800 px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="text-xs text-emerald-500/70">{`// graph.render(view: "force-directed")`}</p>
                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Inspect the shape of your own thinking.
                </h3>
                <p className="mt-4 leading-relaxed text-zinc-500">
                  Filter the graph by tag, date range, or connection depth.
                  Click any node to jump straight into the note, or trace an
                  edge to see exactly why two ideas are linked.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-zinc-400">
                  <li className="flex items-center gap-2">
                    <IconCheck className="h-4 w-4 text-emerald-400" /> depth-limited graph queries
                  </li>
                  <li className="flex items-center gap-2">
                    <IconCheck className="h-4 w-4 text-emerald-400" /> tag &amp; cluster filters
                  </li>
                  <li className="flex items-center gap-2">
                    <IconCheck className="h-4 w-4 text-emerald-400" /> exportable as JSON / GraphML
                  </li>
                </ul>
              </div>
              <div className="relative h-72 rounded-lg border border-zinc-800 bg-zinc-950">
                <div className="absolute inset-0 bg-dot-grid text-emerald-500/[0.08]" />
                <svg className="absolute inset-0 h-full w-full text-emerald-500/25" viewBox="0 0 300 200">
                  <path
                    d="M40 40 L150 100 M150 100 L260 50 M150 100 L90 160 M150 100 L230 160 M40 40 L90 160"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                </svg>
                {[
                  { x: "13%", y: "20%", label: "onboarding.md" },
                  { x: "50%", y: "50%", label: "q3-relaunch.md", big: true },
                  { x: "86%", y: "25%", label: "pricing.md" },
                  { x: "30%", y: "80%", label: "maya.md" },
                  { x: "76%", y: "80%", label: "calls/oct.md" },
                ].map((n) => (
                  <div
                    key={n.label}
                    className="absolute -translate-x-1/2 -translate-y-1/2 text-center"
                    style={{ left: n.x, top: n.y }}
                  >
                    <div
                      className={`mx-auto rounded-full border border-emerald-400 bg-black ${
                        n.big ? "h-3.5 w-3.5" : "h-2 w-2"
                      }`}
                    />
                    <span className="mt-1.5 block text-[10px] text-zinc-500">{n.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="border-t border-zinc-800 px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              cortex --diff ./typical-notes-app
            </h2>
            <div className="mt-10 overflow-hidden rounded-lg border border-zinc-800">
              <div className="grid grid-cols-[1fr_90px_110px] bg-zinc-900 px-5 py-3 text-xs text-zinc-500">
                <span>feature</span>
                <span className="text-center text-emerald-400">cortex</span>
                <span className="text-center">typical app</span>
              </div>
              {COMPARISON.map((c, i) => (
                <div
                  key={c.label}
                  className={`grid grid-cols-[1fr_90px_110px] items-center px-5 py-3 text-sm ${
                    i % 2 === 0 ? "bg-zinc-950" : "bg-black"
                  }`}
                >
                  <span className="text-zinc-300">{c.label}</span>
                  <span className="flex justify-center">
                    {c.cortex ? (
                      <IconCheck className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <IconX className="h-4 w-4 text-zinc-600" />
                    )}
                  </span>
                  <span className="flex justify-center">
                    {c.basic ? (
                      <IconCheck className="h-4 w-4 text-zinc-500" />
                    ) : (
                      <IconX className="h-4 w-4 text-zinc-700" />
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-t border-zinc-800 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              $ cortex feedback --tail
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <div key={t.handle} className="rounded-lg border border-zinc-800 bg-zinc-950 p-5">
                  <p className="text-sm text-emerald-400">{t.handle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{`"${t.quote}"`}</p>
                  <p className="mt-4 text-xs text-zinc-600">{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="border-t border-zinc-800 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              cat pricing.json
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {PRICING.map((p) => (
                <div
                  key={p.name}
                  className={`rounded-lg border bg-zinc-950 p-6 ${
                    p.highlighted ? "border-emerald-500/60 shadow-lg shadow-emerald-500/10" : "border-zinc-800"
                  }`}
                >
                  <p className="text-sm text-zinc-500">{p.body}</p>
                  <h3 className="mt-1 text-lg font-bold text-white">{`"${p.name}"`}</h3>
                  <p className="mt-5 text-3xl font-bold text-emerald-400">
                    {p.price}
                    <span className="text-sm font-normal text-zinc-500">/mo</span>
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-zinc-400">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="text-emerald-500/60">{`>`}</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`mt-7 block rounded px-4 py-2.5 text-center text-sm font-semibold transition-colors ${
                      p.highlighted
                        ? "bg-emerald-500 text-black hover:bg-emerald-400"
                        : "border border-zinc-700 text-zinc-300 hover:border-emerald-500/40 hover:text-emerald-400"
                    }`}
                  >
                    cortex plan set {p.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-zinc-800 px-6 py-24">
          <div className="mx-auto max-w-3xl rounded-lg border border-emerald-500/30 bg-zinc-950 p-10 text-center">
            <p className="text-emerald-400">$ cortex init --second-brain</p>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              Stop organizing. Start linking.
            </h2>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-emerald-400"
            >
              get started — it&apos;s free
              <IconArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 px-6 py-10 text-sm">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 font-semibold text-emerald-400">
            <span className="flex h-6 w-6 items-center justify-center rounded border border-emerald-500/40">
              <IconBrain className="h-3.5 w-3.5" />
            </span>
            cortex_
          </div>
          <p className="text-zinc-600">
            © {new Date().getFullYear()} cortex. design exploration — not a
            real product.
          </p>
          <Link href="/" className="text-zinc-400 hover:text-emerald-400">
            ← cd ../gallery
          </Link>
        </div>
      </footer>
    </div>
  );
}
