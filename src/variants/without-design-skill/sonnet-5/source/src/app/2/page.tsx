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
  IconSparkles,
  IconZap,
} from "../../components/icons";

export const metadata = {
  title: "Cortex — Iteration 2 · Neural",
};

const NAV_LINKS = ["Product", "Capabilities", "Pricing", "Changelog"];

const STATS = [
  { value: "2.4M+", label: "notes linked every day" },
  { value: "41%", label: "faster recall vs. plain search" },
  { value: "120ms", label: "median sync latency" },
  { value: "100%", label: "private, end-to-end encrypted" },
];

const FEATURES = [
  {
    icon: IconSparkles,
    title: "AI that reads between your lines",
    body: "Cortex understands context across every note you've written, surfacing connections you didn't know to look for.",
  },
  {
    icon: IconNetwork,
    title: "A living knowledge graph",
    body: "Every note is a node. Watch your second brain grow in real time as ideas connect themselves.",
  },
  {
    icon: IconZap,
    title: "Instant everywhere",
    body: "Sub-200ms capture and sync across every device, powered by a local-first engine built for speed.",
  },
  {
    icon: IconShield,
    title: "Encrypted at the core",
    body: "Zero-knowledge encryption means your thoughts stay yours — even we can't read them.",
  },
];

const CAPABILITIES = [
  {
    tag: "Capture",
    title: "Think out loud, anywhere.",
    body: "Voice, text, or a quick clip from the web — Cortex's quantum capture bar is one shortcut away on every device, parsing raw thought into structured notes instantly.",
    bullets: ["Global capture shortcut", "Voice-to-note transcription", "Smart inbox triage"],
  },
  {
    tag: "Connect",
    title: "Your ideas, automatically wired.",
    body: "Cortex's graph engine detects entities, themes, and prior notes as you type, drawing the links so you never have to manage a folder tree again.",
    bullets: ["Real-time backlinking", "Entity & theme detection", "Auto-generated graph view"],
  },
  {
    tag: "Recall",
    title: "Ask your second brain anything.",
    body: "Query in plain language — 'what did I think about the Q2 pricing change?' — and Cortex retrieves the exact thread of notes, not just keyword matches.",
    bullets: ["Natural-language search", "Semantic recall", "Context-aware summaries"],
  },
];

const TESTIMONIALS = [
  {
    quote:
      "It's the closest thing I've found to an actual extension of memory. The graph view alone changed how I research.",
    name: "Priya N.",
    role: "AI Researcher",
    color: "from-fuchsia-500 to-violet-500",
  },
  {
    quote:
      "I asked it a question about a meeting from eight months ago and it just... knew. Genuinely unsettling at first, now indispensable.",
    name: "Marcus L.",
    role: "Startup Founder",
    color: "from-indigo-500 to-blue-500",
  },
  {
    quote:
      "Migrated my entire second brain over in an afternoon. The linking quality after import was better than my manual setup ever was.",
    name: "Sofia A.",
    role: "Systems Engineer",
    color: "from-rose-500 to-fuchsia-500",
  },
];

const PRICING = [
  {
    name: "Starter",
    price: "$0",
    body: "Everything to begin building your graph.",
    features: ["Unlimited notes", "Auto-linking", "2 synced devices"],
  },
  {
    name: "Neural",
    price: "$12",
    body: "Full AI recall and unlimited sync.",
    features: ["Everything in Starter", "Semantic search & recall", "Unlimited devices", "Priority compute"],
    highlighted: true,
  },
  {
    name: "Collective",
    price: "$22",
    body: "Shared graphs for fast-moving teams.",
    features: ["Everything in Neural", "Shared knowledge graphs", "Admin & SSO", "Dedicated support"],
  },
];

export default function Variant2() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-40 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 via-violet-500 to-indigo-500">
              <IconBrain className="h-4 w-4 text-white" />
            </span>
            Cortex
          </div>
          <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            {NAV_LINKS.map((l) => (
              <a key={l} href="#" className="transition-colors hover:text-white">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3 text-sm">
            <a href="#" className="hidden text-zinc-400 hover:text-white sm:inline">
              Sign in
            </a>
            <a
              href="#"
              className="rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 px-4 py-2 font-medium text-white shadow-lg shadow-violet-500/20 transition-opacity hover:opacity-90"
            >
              Get Cortex
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pt-24 pb-28">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="animate-drift absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-fuchsia-600/30 blur-[100px]" />
            <div className="animate-float-slow absolute -right-20 top-10 h-[24rem] w-[24rem] rounded-full bg-indigo-600/30 blur-[100px]" />
            <div className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-violet-600/20 blur-[100px]" />
            <div className="absolute inset-0 bg-dot-grid text-white/[0.06]" />
          </div>

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="animate-fade-up mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300">
              <IconSparkles className="h-3.5 w-3.5 text-fuchsia-400" />
              Now with semantic recall
            </div>
            <h1
              className="animate-fade-up text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
              style={{ animationDelay: "80ms" }}
            >
              Think faster.
              <br />
              <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Remember everything.
              </span>
            </h1>
            <p
              className="animate-fade-up mx-auto mt-7 max-w-xl text-lg leading-relaxed text-zinc-400"
              style={{ animationDelay: "150ms" }}
            >
              Cortex is the AI-native second brain that captures every idea,
              links it to everything you know, and hands it back the moment
              you need it.
            </p>
            <div
              className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-4"
              style={{ animationDelay: "220ms" }}
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-transform hover:scale-[1.03]"
              >
                Build your second brain
                <IconArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                See the graph in action
              </a>
            </div>
          </div>

          {/* Graph mockup */}
          <div
            className="animate-fade-up relative mx-auto mt-20 max-w-4xl"
            style={{ animationDelay: "280ms" }}
          >
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-fuchsia-500/10 backdrop-blur-xl sm:p-10">
              <div className="mb-6 flex items-center justify-between text-xs text-zinc-500">
                <span className="flex items-center gap-2">
                  <IconNetwork className="h-4 w-4 text-fuchsia-400" />
                  Graph view — &ldquo;Q3 Relaunch&rdquo;
                </span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-emerald-400">
                  Live
                </span>
              </div>
              <div className="relative h-64 w-full sm:h-72">
                <svg
                  className="absolute inset-0 h-full w-full text-white/15"
                  viewBox="0 0 400 220"
                  fill="none"
                >
                  <path d="M70 60 L200 100 M200 100 L330 50 M200 100 L150 180 M200 100 L300 170 M70 60 L150 180" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                {[
                  { x: "16%", y: "26%", label: "Onboarding", color: "bg-fuchsia-500" },
                  { x: "48%", y: "44%", label: "Q3 Relaunch", color: "bg-violet-400", big: true },
                  { x: "80%", y: "20%", label: "Pricing", color: "bg-indigo-400" },
                  { x: "36%", y: "82%", label: "Maya R.", color: "bg-fuchsia-400" },
                  { x: "74%", y: "76%", label: "Customer calls", color: "bg-blue-400" },
                ].map((n) => (
                  <div
                    key={n.label}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: n.x, top: n.y }}
                  >
                    <div
                      className={`animate-pulse-soft mx-auto rounded-full ${n.color} ${
                        n.big ? "h-4 w-4" : "h-2.5 w-2.5"
                      } shadow-[0_0_16px_currentColor]`}
                    />
                    <span className="mt-2 block whitespace-nowrap text-[11px] text-zinc-400">
                      {n.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-t border-white/5 px-6 py-16">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-zinc-500">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Feature grid */}
        <section className="border-t border-white/5 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Built for how thought actually moves.
              </h2>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-fuchsia-400/30 hover:bg-white/[0.06]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 text-fuchsia-300">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="border-t border-white/5 px-6 py-24">
          <div className="mx-auto max-w-5xl space-y-20">
            {CAPABILITIES.map((c, i) => (
              <div
                key={c.tag}
                className={`grid items-center gap-10 sm:grid-cols-2 ${
                  i % 2 === 1 ? "sm:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-fuchsia-500/10 px-3 py-1 text-xs font-medium text-fuchsia-300">
                    {c.tag}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {c.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-zinc-400">{c.body}</p>
                  <ul className="mt-6 space-y-2.5">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-zinc-300">
                        <IconCheck className="h-4 w-4 text-fuchsia-400" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-violet-500/10 to-indigo-500/10 p-8">
                  <div className="absolute inset-0 bg-dot-grid text-white/[0.06]" />
                  <div className="relative flex h-full flex-col items-center justify-center gap-3">
                    {c.tag === "Capture" && <IconZap className="h-12 w-12 text-fuchsia-300" />}
                    {c.tag === "Connect" && <IconLink className="h-12 w-12 text-violet-300" />}
                    {c.tag === "Recall" && <IconSearch className="h-12 w-12 text-indigo-300" />}
                    <p className="text-sm text-zinc-400">{c.tag} module</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-t border-white/5 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Power users run on Cortex
            </h2>
            <div className="mt-14 grid gap-5 sm:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <p className="flex-1 leading-relaxed text-zinc-300">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-semibold text-white`}
                    >
                      {t.name[0]}
                    </span>
                    <div className="text-sm">
                      <p className="font-medium text-white">{t.name}</p>
                      <p className="text-zinc-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="border-t border-white/5 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Scale your second brain
              </h2>
              <p className="mt-4 text-zinc-400">
                Start free. Upgrade for unlimited recall and sync.
              </p>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {PRICING.map((p) => (
                <div
                  key={p.name}
                  className={`relative rounded-2xl border p-7 ${
                    p.highlighted
                      ? "border-transparent bg-gradient-to-b from-fuchsia-500/15 via-violet-500/10 to-transparent ring-1 ring-fuchsia-400/40"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  {p.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-3 py-1 text-xs font-semibold text-white">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-semibold text-white">{p.name}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{p.body}</p>
                  <p className="mt-6 text-4xl font-bold text-white">
                    {p.price}
                    <span className="text-base font-normal text-zinc-500">/mo</span>
                  </p>
                  <ul className="mt-6 space-y-2.5 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-zinc-300">
                        <IconCheck className="h-4 w-4 text-fuchsia-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`mt-7 block rounded-full px-4 py-2.5 text-center text-sm font-semibold transition-opacity hover:opacity-90 ${
                      p.highlighted
                        ? "bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    Choose {p.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden border-t border-white/5 px-6 py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="animate-gradient-pan absolute inset-0 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/10 to-indigo-600/20" />
          </div>
          <div className="relative mx-auto max-w-3xl text-center">
            <IconCloud className="mx-auto h-9 w-9 text-violet-300" />
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Your thoughts deserve a brain this fast.
            </h2>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-zinc-950 transition-transform hover:scale-[1.03]"
            >
              Get Cortex free
              <IconArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 font-semibold">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500">
              <IconBrain className="h-3.5 w-3.5 text-white" />
            </span>
            Cortex
          </div>
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Cortex. A design exploration — not a
            real product.
          </p>
          <Link href="/" className="text-sm font-medium text-zinc-300 hover:text-white">
            ← Back to gallery
          </Link>
        </div>
      </footer>
    </div>
  );
}
