import Image from "next/image";
import {
  ArrowRightIcon,
  GraphIcon,
  LightningIcon,
  TerminalWindowIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../../components/Reveal";
import { TRUSTED_LOGOS, logoUrl } from "../../lib/logos";

export default function FourPage() {
  return (
    <div className="min-h-[100dvh] bg-[#07080b] text-zinc-100">
      <header className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-8">
        <a
          href="#top"
          className="font-[family-name:var(--font-geist-mono)] text-sm font-semibold tracking-tight"
        >
          lumen<span className="text-emerald-400">.graph</span>
        </a>
        <nav className="hidden items-center gap-8 font-[family-name:var(--font-geist-mono)] text-xs text-zinc-400 md:flex">
          <a href="#nodes" className="hover:text-zinc-100">
            nodes
          </a>
          <a href="#query" className="hover:text-zinc-100">
            query
          </a>
          <a href="#stack" className="hover:text-zinc-100">
            stack
          </a>
        </nav>
        <a
          href="#start"
          className="rounded-md bg-emerald-500 px-3.5 py-2 font-[family-name:var(--font-geist-mono)] text-xs font-semibold text-zinc-950 transition-transform active:scale-[0.98] hover:bg-emerald-400"
        >
          start_free
        </a>
      </header>

      <main id="top">
        <section className="relative mx-auto grid min-h-[calc(100dvh-4rem)] max-w-[1400px] items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-2 md:px-8 md:pt-14">
          <div>
            <h1 className="font-[family-name:var(--font-outfit)] text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Map your mind as a living graph.
            </h1>
            <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-zinc-400">
              Lumen indexes every note as a node. Edges form as you write. Recall becomes a traversal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                id="start"
                href="#start"
                className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-zinc-950 transition-transform active:scale-[0.98] hover:bg-emerald-400"
              >
                Start free
                <ArrowRightIcon weight="bold" className="h-4 w-4" />
              </a>
              <a
                href="#nodes"
                className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-5 py-3 font-[family-name:var(--font-geist-mono)] text-xs text-zinc-300 hover:border-zinc-500 hover:text-white"
              >
                inspect_graph
              </a>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
            <Image
              src="/variants/with-taste-skill/grok-4.5/iterations/four/hero-four.png"
              alt="Neural knowledge graph visualization"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07080b]/50 to-transparent" />
          </div>
        </section>

        <section className="border-y border-zinc-800/80 py-10">
          <ul className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-12 gap-y-6 px-5 md:px-8">
            {TRUSTED_LOGOS.map((logo) => (
              <li key={logo.slug}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logoUrl(logo.slug, "a1a1aa")}
                  alt={logo.name}
                  width={88}
                  height={24}
                  className="h-5 w-auto opacity-60"
                />
              </li>
            ))}
          </ul>
        </section>

        {/* Nodes - bento with visual diversity */}
        <section id="nodes" className="mx-auto max-w-[1400px] px-5 py-24 md:px-8">
          <Reveal>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight md:text-4xl">
              Nodes that refuse to stay alone
            </h2>
            <p className="mt-3 max-w-[50ch] text-zinc-400">
              Drop a thought. Watch neighbors light up. Orphan notes get pulled into clusters automatically.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-12 md:grid-rows-2">
            <Reveal className="md:col-span-7 md:row-span-2" delay={0.05}>
              <div className="relative h-full min-h-[280px] overflow-hidden rounded-xl border border-zinc-800">
                <Image
                  src="/variants/with-taste-skill/grok-4.5/iterations/four/feature-links.png"
                  alt="Linked notes forming connections"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
              </div>
            </Reveal>
            <Reveal className="md:col-span-5" delay={0.1}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
                <GraphIcon weight="duotone" className="h-7 w-7 text-emerald-400" />
                <div className="mt-8">
                  <h3 className="font-[family-name:var(--font-outfit)] text-xl font-semibold">
                    Cluster detect
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Topics emerge from co-occurrence. No manual tagging required.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal className="md:col-span-5" delay={0.15}>
              <div className="flex h-full flex-col justify-between rounded-xl bg-emerald-500 p-6 text-zinc-950">
                <LightningIcon weight="duotone" className="h-7 w-7" />
                <div className="mt-8">
                  <h3 className="font-[family-name:var(--font-outfit)] text-xl font-semibold">
                    Sub-50ms search
                  </h3>
                  <p className="mt-2 text-sm text-emerald-950/80">
                    Local index first. Cloud only when you ask for deep recall.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Query - terminal-ish but not fake screenshot divs - editorial code block as real content */}
        <section id="query" className="bg-zinc-950 py-24">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <Reveal>
              <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight md:text-4xl">
                Ask the graph like a REPL
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-10 overflow-hidden rounded-xl border border-zinc-800 bg-[#0c0e12]">
                <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
                  <TerminalWindowIcon weight="duotone" className="h-4 w-4 text-zinc-500" />
                  <span className="font-[family-name:var(--font-geist-mono)] text-xs text-zinc-500">
                    lumen query
                  </span>
                </div>
                <pre className="overflow-x-auto p-5 font-[family-name:var(--font-geist-mono)] text-sm leading-relaxed text-emerald-300/90">
                  <code>{`> find notes about "pricing experiments" since 2025
→ 14 nodes · 6 edges · top: Q3_pricing_lab.md
→ related: competitor_matrix.md, win_loss_calls.md

> path from "onboarding" to "retention"
→ onboarding → activation_hooks → week2_email → retention`}</code>
                </pre>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Stack - dense mono specs as grouped chunks not hairline table */}
        <section id="stack" className="mx-auto max-w-[1400px] px-5 py-24 md:px-8">
          <Reveal>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight md:text-4xl">
              Under the hood
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                group: "Storage",
                items: [
                  { k: "Format", v: "Markdown + SQLite" },
                  { k: "Sync", v: "CRDT merge" },
                  { k: "Backup", v: "Encrypted snapshots" },
                ],
              },
              {
                group: "Index",
                items: [
                  { k: "Search", v: "Hybrid BM25 + vectors" },
                  { k: "Graph", v: "In-memory adjacency" },
                  { k: "Latency", v: "Local-first" },
                ],
              },
              {
                group: "Clients",
                items: [
                  { k: "Desktop", v: "macOS, Windows, Linux" },
                  { k: "Mobile", v: "iOS, Android" },
                  { k: "API", v: "REST + webhooks" },
                ],
              },
            ].map((block, i) => (
              <Reveal key={block.group} delay={i * 0.07}>
                <div className="rounded-xl border border-zinc-800 p-6">
                  <p className="font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.16em] text-emerald-400">
                    {block.group}
                  </p>
                  <dl className="mt-5 space-y-4">
                    {block.items.map((row) => (
                      <div key={row.k} className="flex justify-between gap-4 text-sm">
                        <dt className="text-zinc-500">{row.k}</dt>
                        <dd className="font-[family-name:var(--font-geist-mono)] text-zinc-200">
                          {row.v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-800 px-5 py-24 md:px-8">
          <Reveal>
            <div className="mx-auto flex max-w-[900px] flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight">
                  Boot your graph tonight.
                </h2>
                <p className="mt-2 text-zinc-400">Import a vault. Edges appear as you open files.</p>
              </div>
              <a
                href="#start"
                className="inline-flex shrink-0 items-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-zinc-950 transition-transform active:scale-[0.98] hover:bg-emerald-400"
              >
                Start free
                <ArrowRightIcon weight="bold" className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-zinc-800 py-10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 font-[family-name:var(--font-geist-mono)] text-xs text-zinc-500 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="text-zinc-300">
            lumen<span className="text-emerald-400">.graph</span>
          </p>
          <p>© 2026 Lumen Labs</p>
        </div>
      </footer>
    </div>
  );
}
