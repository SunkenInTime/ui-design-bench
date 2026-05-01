import Link from "next/link";

export default function SynapseVariant() {
  return (
    <div className="min-h-dvh bg-[#050511] text-white font-sans isolate overflow-hidden relative">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 50% 0%, rgba(120,80,255,0.35) 0%, rgba(40,20,120,0.10) 40%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        <Link href="/4" className="flex items-center gap-2.5">
          <span
            className="grid size-8 place-items-center rounded-lg bg-linear-to-br from-cyan-300 via-violet-400 to-fuchsia-500 text-sm font-medium text-neutral-950 shadow-[0_0_30px_rgba(167,139,250,0.5)]"
          >
            ✦
          </span>
          <span className="text-base font-medium tracking-tight">Mnema</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {[
            ["product", "Product"],
            ["graph", "Graph"],
            ["api", "API"],
            ["price", "Pricing"],
            ["docs", "Docs"],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-lg px-3 py-1.5 text-sm text-neutral-300 hover:bg-white/5 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="rounded-lg px-3 py-1.5 text-sm text-neutral-300 hover:bg-white/5 hover:text-white"
          >
            Sign in
          </a>
          <a
            href="#"
            className="rounded-lg bg-white px-3.5 py-1.5 text-sm font-medium text-neutral-950 hover:bg-neutral-200"
          >
            Get Mnema →
          </a>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-32 sm:px-10 sm:pt-28">
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-neutral-300 backdrop-blur-sm hover:bg-white/10"
          >
            <span className="rounded-full bg-cyan-400/20 px-2 py-0.5 font-mono text-[0.625rem] uppercase tracking-wide text-cyan-300">
              new
            </span>
            <span>Mnema 3.0 is live — neural recall in beta</span>
            <span className="text-neutral-500">→</span>
          </a>
          <h1 className="mx-auto mt-10 max-w-[20ch] text-balance text-5xl font-medium leading-[1.02] tracking-tight sm:text-7xl md:text-[5.5rem]">
            The thinking layer{" "}
            <span className="bg-linear-to-r from-cyan-300 via-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
              between you and everything you know.
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-[58ch] text-pretty text-lg leading-relaxed text-neutral-400 sm:text-xl">
            Mnema is a neural notebook that quietly maps every note, link, and
            half-formed idea into a living graph — then surfaces what you need
            before you ask.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="group relative inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-neutral-950 hover:bg-neutral-200"
            >
              Start free
              <span className="text-neutral-500 group-hover:translate-x-0.5 transition">
                →
              </span>
            </a>
            <a
              href="#graph"
              className="rounded-lg border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/10"
            >
              See the graph
            </a>
          </div>
        </div>

        <div className="relative mt-24 mx-auto max-w-5xl">
          <div
            className="absolute inset-0 -z-10 blur-3xl opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(50% 50% at 50% 50%, rgba(168,85,247,0.45) 0%, rgba(34,211,238,0.20) 50%, transparent 80%)",
            }}
          />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a1f]/80 backdrop-blur-sm shadow-[0_50px_100px_-30px_rgba(120,80,255,0.5)]">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="size-2.5 rounded-full bg-rose-500/80" />
              <span className="size-2.5 rounded-full bg-amber-400/80" />
              <span className="size-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-3 font-mono text-[0.6875rem] uppercase tracking-wide text-neutral-500">
                mnema · graph view · 14,221 nodes
              </span>
            </div>
            <SynapseGraph />
          </div>
        </div>
      </section>

      <section id="product" className="relative z-10 mx-auto max-w-7xl px-6 pb-32 sm:px-10">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wide text-cyan-300">
            01 / what it is
          </p>
          <h2 className="mt-4 max-w-[24ch] text-balance text-4xl font-medium tracking-tight sm:text-5xl">
            Three primitives. One{" "}
            <span className="bg-linear-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
              continuously learning
            </span>{" "}
            mind.
          </h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {[
            {
              title: "Capture",
              desc: "Type, paste, dictate, or clip from anywhere. Mnema embeds every entry into a 1024-dim vector the moment it lands.",
              glow: "from-cyan-500/30 to-transparent",
              ring: "ring-cyan-400/40",
              dot: "bg-cyan-400",
            },
            {
              title: "Connect",
              desc: "A background process discovers semantic links between every note in your archive and re-weights them as you write.",
              glow: "from-violet-500/30 to-transparent",
              ring: "ring-violet-400/40",
              dot: "bg-violet-400",
            },
            {
              title: "Recall",
              desc: "Ask in plain language. Mnema returns a cited synthesis from your own writing — never a model's hallucination.",
              glow: "from-fuchsia-500/30 to-transparent",
              ring: "ring-fuchsia-400/40",
              dot: "bg-fuchsia-400",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="relative bg-[#070716] p-8"
            >
              <div
                className={`absolute -top-px left-8 h-px w-24 bg-linear-to-r ${f.glow}`}
              />
              <div className="flex items-center gap-3">
                <span
                  className={`relative grid size-9 place-items-center rounded-lg border border-white/10 bg-white/5 ring-1 ${f.ring}`}
                >
                  <span className={`size-1.5 rounded-full ${f.dot}`} />
                </span>
                <span className="font-mono text-xs uppercase tracking-wide text-neutral-500">
                  · {f.title.toLowerCase()}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-medium tracking-tight">{f.title}</h3>
              <p className="mt-3 max-w-[36ch] text-pretty leading-relaxed text-neutral-400">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="graph" className="relative z-10 mx-auto max-w-7xl px-6 pb-32 sm:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-wide text-violet-300">
              02 / how it learns you
            </p>
            <h2 className="mt-4 max-w-[18ch] text-balance text-4xl font-medium tracking-tight sm:text-5xl">
              A graph that{" "}
              <span className="bg-linear-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                rewires itself
              </span>{" "}
              every time you write.
            </h2>
            <p className="mt-6 max-w-[52ch] text-pretty leading-relaxed text-neutral-400">
              Every keystroke updates the embedding space. New nodes attach
              themselves to neighbors automatically; old, ignored ones quietly
              fade. The graph you see is always the one you actually use.
            </p>
            <ol role="list" className="mt-10 space-y-5">
              {[
                {
                  step: "01",
                  title: "Embed on capture",
                  desc: "Local 4-bit quantized model generates a vector in <40ms.",
                },
                {
                  step: "02",
                  title: "Cluster overnight",
                  desc: "A nightly pass re-clusters the graph and resurfaces forgotten threads.",
                },
                {
                  step: "03",
                  title: "Cite on recall",
                  desc: "Every synthesized answer links back to the source notes — always.",
                },
              ].map((s) => (
                <li
                  key={s.step}
                  className="flex items-start gap-5 border-l border-white/10 pl-5"
                >
                  <span className="font-mono text-xs tabular-nums text-violet-300 pt-1">
                    {s.step}
                  </span>
                  <div>
                    <p className="font-medium">{s.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-400">
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a1f]/80 p-1 backdrop-blur-sm">
              <div className="rounded-xl bg-[#06061a] p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <p className="font-mono text-xs uppercase tracking-wide text-neutral-500">
                    ask:mnema
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wide text-emerald-400">
                    ● ready
                  </p>
                </div>
                <p className="mt-6 font-mono text-sm text-neutral-300">
                  &gt; what did i conclude about <span className="text-violet-300">attention residue</span> last quarter?
                </p>
                <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.03] p-5">
                  <p className="leading-relaxed text-neutral-200">
                    Across 7 notes between Jan–Mar, you concluded that{" "}
                    <span className="bg-violet-500/20 px-1 rounded text-violet-100">
                      attention residue compounds across context-switches
                    </span>
                    , and that batching small tasks into a single 90-minute
                    block reduced your end-of-day fatigue by roughly 40%.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      "note 0142 · Jan 8",
                      "note 0188 · Jan 22",
                      "note 0234 · Feb 17",
                      "+4 more",
                    ].map((c) => (
                      <span
                        key={c}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[0.6875rem] text-neutral-400"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-3 text-xs text-neutral-500">
                  <span className="font-mono">120ms</span>
                  <span>·</span>
                  <span>14,221 notes searched</span>
                  <span>·</span>
                  <span className="font-mono text-cyan-400">on-device</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="price" className="relative z-10 mx-auto max-w-7xl px-6 pb-32 sm:px-10">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-wide text-fuchsia-300">
            03 / pricing
          </p>
          <h2 className="mx-auto mt-4 max-w-[24ch] text-balance text-4xl font-medium tracking-tight sm:text-5xl">
            Built for one mind.
            <br />
            Priced like it.
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {[
            {
              name: "Sketch",
              price: "$0",
              sub: "/forever",
              feats: [
                "1,000 notes",
                "Semantic search",
                "Web + iOS",
                "Local model only",
              ],
              cta: "Get started",
              ctaStyle:
                "border border-white/10 bg-white/5 text-white hover:bg-white/10",
            },
            {
              name: "Synapse",
              price: "$12",
              sub: "/month",
              feats: [
                "Unlimited notes",
                "Live graph view",
                "Nightly re-clustering",
                "Cited recall",
                "API access",
              ],
              cta: "Start 14-day trial",
              ctaStyle: "bg-white text-neutral-950 hover:bg-neutral-200",
              highlight: true,
            },
            {
              name: "Cortex",
              price: "$48",
              sub: "/month",
              feats: [
                "Everything in Synapse",
                "Team graph (up to 5)",
                "Custom embedding model",
                "SOC-2 + audit log",
              ],
              cta: "Talk to sales",
              ctaStyle:
                "border border-white/10 bg-white/5 text-white hover:bg-white/10",
            },
          ].map((p) => (
            <div
              key={p.name}
              className={`relative bg-[#070716] p-8 ${
                p.highlight ? "lg:scale-[1.02]" : ""
              }`}
            >
              {p.highlight && (
                <>
                  <div
                    className="absolute -top-px left-0 right-0 h-px bg-linear-to-r from-transparent via-violet-400 to-transparent"
                  />
                  <div
                    className="absolute -inset-px -z-10 rounded-2xl opacity-40 blur-xl"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, rgba(34,211,238,0.4), rgba(168,85,247,0.4), rgba(232,121,249,0.4))",
                    }}
                  />
                </>
              )}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium">{p.name}</h3>
                {p.highlight && (
                  <span className="rounded-full bg-violet-500/20 px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-wide text-violet-200">
                    most chosen
                  </span>
                )}
              </div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-medium tracking-tight tabular-nums">
                  {p.price}
                </span>
                <span className="text-sm text-neutral-500">{p.sub}</span>
              </div>
              <ul role="list" className="mt-7 space-y-3 text-sm text-neutral-300">
                {p.feats.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-1.5 size-1 rounded-full bg-violet-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 inline-block w-full rounded-lg px-4 py-2.5 text-center text-sm font-medium ${p.ctaStyle}`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div className="flex items-center gap-2.5">
            <span className="grid size-7 place-items-center rounded-md bg-linear-to-br from-cyan-300 via-violet-400 to-fuchsia-500 text-xs font-medium text-neutral-950">
              ✦
            </span>
            <span className="text-sm">Mnema · 2026</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Status</a>
            <a href="#" className="hover:text-white">Changelog</a>
          </div>
          <p className="font-mono text-xs uppercase tracking-wide text-neutral-600">
            v3.0.4 · all systems nominal
          </p>
        </div>
      </footer>
    </div>
  );
}

function SynapseGraph() {
  const nodes = [
    { x: 110, y: 90, r: 5, c: "violet", label: "stoicism" },
    { x: 220, y: 60, r: 7, c: "cyan", label: "letters" },
    { x: 340, y: 110, r: 6, c: "fuchsia", label: "habits" },
    { x: 470, y: 70, r: 5, c: "violet", label: "burkeman" },
    { x: 600, y: 130, r: 6, c: "cyan", label: "calendar" },
    { x: 720, y: 80, r: 5, c: "fuchsia", label: "mortality" },
    { x: 165, y: 200, r: 5, c: "cyan", label: "morning" },
    { x: 290, y: 240, r: 9, c: "violet", label: "long ideas" },
    { x: 420, y: 200, r: 6, c: "fuchsia", label: "compounding" },
    { x: 550, y: 250, r: 5, c: "cyan", label: "reading" },
    { x: 680, y: 220, r: 6, c: "violet", label: "recall" },
    { x: 240, y: 340, r: 6, c: "fuchsia", label: "patience" },
    { x: 380, y: 360, r: 7, c: "cyan", label: "writing" },
    { x: 530, y: 340, r: 5, c: "violet", label: "essays" },
    { x: 650, y: 380, r: 6, c: "fuchsia", label: "publish" },
  ];

  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
    [0, 6], [6, 7], [7, 8], [8, 9], [9, 10],
    [1, 7], [3, 8], [5, 10], [2, 7],
    [7, 12], [8, 13], [11, 12], [12, 13], [13, 14],
    [6, 11], [10, 14], [12, 8], [11, 7],
  ];

  const colorMap: Record<string, string> = {
    violet: "#a78bfa",
    cyan: "#67e8f9",
    fuchsia: "#f0abfc",
  };

  return (
    <div className="relative">
      <svg
        viewBox="0 0 820 460"
        className="block w-full"
        role="img"
        aria-label="Knowledge graph visualization"
      >
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(167,139,250,0.6)" />
            <stop offset="100%" stopColor="rgba(103,232,249,0.6)" />
          </linearGradient>
        </defs>

        {edges.map(([a, b], i) => {
          const n1 = nodes[a];
          const n2 = nodes[b];
          return (
            <line
              key={i}
              x1={n1.x}
              y1={n1.y}
              x2={n2.x}
              y2={n2.y}
              stroke="url(#edge)"
              strokeWidth="0.75"
              opacity="0.6"
            />
          );
        })}

        {nodes.map((n, i) => (
          <g key={i}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r * 3}
              fill={colorMap[n.c]}
              opacity="0.18"
            />
            <circle cx={n.x} cy={n.y} r={n.r} fill={colorMap[n.c]} />
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r * 0.4}
              fill="white"
              opacity="0.8"
            />
            <text
              x={n.x + n.r + 6}
              y={n.y + 3}
              fontSize="9"
              fill="rgba(255,255,255,0.55)"
              fontFamily="var(--font-jetbrains)"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
