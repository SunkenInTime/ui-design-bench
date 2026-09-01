const NODES: { id: string; x: number; y: number; r: number; label?: string; hot?: boolean }[] = [
  { id: "a", x: 120, y: 140, r: 5, label: "Zettelkasten" },
  { id: "b", x: 260, y: 80, r: 3 },
  { id: "c", x: 340, y: 210, r: 7, label: "Spaced repetition", hot: true },
  { id: "d", x: 520, y: 120, r: 4 },
  { id: "e", x: 610, y: 260, r: 5, label: "Forgetting curve" },
  { id: "f", x: 760, y: 90, r: 3 },
  { id: "g", x: 860, y: 220, r: 6, label: "Weekly review" },
  { id: "h", x: 1000, y: 140, r: 4 },
  { id: "i", x: 1080, y: 300, r: 3 },
  { id: "j", x: 200, y: 320, r: 4 },
  { id: "k", x: 450, y: 350, r: 3 },
  { id: "l", x: 720, y: 380, r: 5, label: "Make It Stick" },
  { id: "m", x: 940, y: 400, r: 3 },
  { id: "n", x: 60, y: 260, r: 3 },
  { id: "o", x: 1160, y: 80, r: 4 },
];
const EDGES: [string, string][] = [
  ["a", "b"], ["a", "c"], ["a", "j"], ["a", "n"], ["b", "d"], ["c", "d"], ["c", "e"], ["c", "k"],
  ["d", "f"], ["e", "g"], ["e", "l"], ["f", "g"], ["g", "h"], ["g", "m"], ["h", "i"], ["h", "o"],
  ["j", "k"], ["k", "l"], ["l", "m"], ["i", "m"],
];

function Graph() {
  const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));
  return (
    <svg
      viewBox="0 0 1200 460"
      className="pointer-events-none absolute inset-x-0 top-0 h-[520px] w-full select-none opacity-90"
      aria-hidden
    >
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#7c5cff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="m">
          <rect width="1200" height="460" fill="url(#fade)" />
        </mask>
      </defs>
      <g mask="url(#m)">
        {EDGES.map(([s, t]) => {
          const a = byId[s];
          const b = byId[t];
          const hot = a.hot || b.hot;
          return (
            <line
              key={s + t}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={hot ? "#7c5cff" : "#ffffff"}
              strokeOpacity={hot ? 0.55 : 0.12}
              strokeWidth={hot ? 1.2 : 1}
            />
          );
        })}
        {NODES.map((n) => (
          <g key={n.id} className={n.hot ? "animate-pulse-soft" : undefined}>
            {n.hot && <circle cx={n.x} cy={n.y} r={28} fill="url(#glow)" />}
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={n.hot ? "#b9a6ff" : n.label ? "#dcd7ff" : "#8f8ba8"}
            />
            {n.label && (
              <text
                x={n.x + n.r + 8}
                y={n.y + 4}
                fontSize="12"
                fill="#a9a5c4"
                fontFamily="var(--font-jetbrains-mono)"
              >
                {n.label}
              </text>
            )}
          </g>
        ))}
      </g>
    </svg>
  );
}

function CommandPalette() {
  const results = [
    { t: "Why we forget what we read", m: "reading · 3 backlinks", hit: true },
    { t: "Ebbinghaus & the forgetting curve", m: "research · linked from 6" },
    { t: "Weekly review — template", m: "systems · edited 2d ago" },
    { t: "Make It Stick — highlights", m: "books · 41 highlights" },
  ];
  return (
    <div className="relative mx-auto mt-16 w-full max-w-2xl">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#7c5cff]/40 via-white/5 to-transparent blur-sm" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0e14]/90 shadow-[0_40px_80px_-30px_rgba(124,92,255,0.45)] backdrop-blur-xl">
        <div className="flex items-center gap-3 border-b border-white/[0.06] px-5 py-4">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a9a5c4" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <span className="flex-1 text-[15px] text-white/90">
            that thing about memory decay
            <span className="ml-px inline-block h-[18px] w-px translate-y-[3px] bg-[#b9a6ff] animate-blink" />
          </span>
          <kbd className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-mono text-[10px] text-white/50">
            ⌘K
          </kbd>
        </div>
        <ul className="p-2">
          {results.map((r) => (
            <li
              key={r.t}
              className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-[14px] ${
                r.hit ? "bg-[#7c5cff]/15 text-white" : "text-white/70"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    r.hit ? "bg-[#b9a6ff]" : "bg-white/25"
                  }`}
                />
                {r.t}
              </div>
              <span className="font-mono text-[11px] text-white/40">{r.m}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between border-t border-white/[0.06] px-5 py-2.5 font-mono text-[11px] text-white/35">
          <span>semantic match · 4 of 12,480</span>
          <span>↵ open · ⇧↵ link</span>
        </div>
      </div>
    </div>
  );
}

const BENTO = [
  {
    title: "Graph that means something",
    body: "Every link you make is a node in a map you can walk. Clusters emerge around what you actually care about.",
    span: "md:col-span-2",
    art: "graph",
  },
  {
    title: "Search by meaning",
    body: "Ask for 'that argument about attention' and get the note, even if it never used the word.",
    span: "",
    art: "search",
  },
  {
    title: "Resurfacing",
    body: "A short daily digest of old notes related to what you're writing now.",
    span: "",
    art: "resurface",
  },
  {
    title: "Local-first, encrypted sync",
    body: "Markdown on disk. Sync is E2E encrypted; we can't read your notes and neither can anyone else.",
    span: "md:col-span-2",
    art: "lock",
  },
];

function Art({ kind }: { kind: string }) {
  if (kind === "graph") {
    return (
      <svg viewBox="0 0 320 120" className="h-28 w-full" aria-hidden>
        {[
          [20, 60, 90, 30], [90, 30, 170, 70], [170, 70, 250, 25], [250, 25, 300, 80], [90, 30, 150, 100], [170, 70, 230, 100],
        ].map(([a, b, c, d], i) => (
          <line key={i} x1={a} y1={b} x2={c} y2={d} stroke="#7c5cff" strokeOpacity="0.5" />
        ))}
        {[[20, 60], [90, 30], [170, 70], [250, 25], [300, 80], [150, 100], [230, 100]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === 2 ? 6 : 3.5} fill={i === 2 ? "#b9a6ff" : "#8f8ba8"} />
        ))}
      </svg>
    );
  }
  if (kind === "search") {
    return (
      <div className="space-y-2 font-mono text-[11px]">
        {["attention as a resource", "deep work — notes", "flow state, Csikszentmihalyi"].map((s, i) => (
          <div
            key={s}
            className={`flex items-center justify-between rounded-md border border-white/[0.06] px-3 py-2 ${
              i === 0 ? "bg-[#7c5cff]/15 text-white" : "text-white/50"
            }`}
          >
            <span>{s}</span>
            <span className="text-white/30">{[0.94, 0.81, 0.77][i]}</span>
          </div>
        ))}
      </div>
    );
  }
  if (kind === "resurface") {
    return (
      <div className="relative h-28">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute left-0 right-0 rounded-lg border border-white/[0.08] bg-[#14151d] p-3 text-[12px] text-white/70"
            style={{ top: i * 14, transform: `scale(${1 - i * 0.04})`, opacity: 1 - i * 0.3, zIndex: 3 - i }}
          >
            <div className="font-mono text-[10px] text-[#b9a6ff]">from 14 months ago</div>
            <div className="mt-1 truncate">Notes on the Feynman technique →</div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] text-white/50">
      <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1">~/notes/*.md</span>
      <span className="text-[#2ee6d6]">──▶</span>
      <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1">AES-256-GCM</span>
      <span className="text-[#2ee6d6]">──▶</span>
      <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1">sync</span>
    </div>
  );
}

export default function Page() {
  return (
    <div className="dotgrid relative min-h-screen overflow-hidden bg-[#07080c] font-sans text-white">
      <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#7c5cff]/20 blur-[140px]" />

      {/* Nav */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-[#b9a6ff] to-[#7c5cff]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#07080c" strokeWidth="2.5">
              <circle cx="6" cy="6" r="2" /><circle cx="18" cy="8" r="2" /><circle cx="10" cy="18" r="2" />
              <path d="M8 7l8 1M7 8l3 8M17 10l-7 8" />
            </svg>
          </span>
          <span className="text-[15px] font-semibold tracking-tight">Tessera</span>
        </div>
        <nav className="hidden items-center gap-8 text-[13.5px] text-white/60 md:flex">
          <a className="hover:text-white" href="#features">Features</a>
          <a className="hover:text-white" href="#">Graph</a>
          <a className="hover:text-white" href="#">Developers</a>
          <a className="hover:text-white" href="#">Pricing</a>
        </nav>
        <div className="flex items-center gap-3 text-[13.5px]">
          <a className="hidden text-white/60 hover:text-white sm:block" href="#">Log in</a>
          <a
            href="#"
            className="rounded-full bg-white px-4 py-2 font-medium text-[#07080c] transition hover:bg-[#b9a6ff]"
          >
            Get started
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <Graph />
        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-28 text-center md:pt-36">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[12px] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2ee6d6]" />
            Now with semantic search across every note
          </div>
          <h1 className="mt-7 text-balance text-[52px] font-semibold leading-[1.02] tracking-[-0.035em] md:text-[84px]">
            Your knowledge,{" "}
            <span className="bg-gradient-to-r from-[#b9a6ff] via-[#8f7bff] to-[#2ee6d6] bg-clip-text text-transparent">
              connected.
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-[56ch] text-pretty text-[18px] leading-[1.6] text-white/60">
            Tessera is a second brain that links as fast as you think. Capture
            anything, connect it with two keystrokes, and find it later by
            meaning — not by remembering where you filed it.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="rounded-full bg-white px-6 py-3 text-[15px] font-medium text-[#07080c] transition hover:bg-[#b9a6ff]"
            >
              Start for free
            </a>
            <a
              href="#"
              className="rounded-full border border-white/15 px-6 py-3 text-[15px] text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Watch the 90s demo
            </a>
          </div>
          <CommandPalette />
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 mx-auto mt-28 max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
          {[
            ["12.4k", "notes in an average vault after 2 years"],
            ["<40ms", "search latency, on device"],
            ["100%", "of your files are plain Markdown"],
            ["0", "notes we can read (E2E encrypted)"],
          ].map(([k, v]) => (
            <div key={v} className="bg-[#0a0b11] p-7">
              <div className="font-mono text-[34px] tracking-tight text-white">{k}</div>
              <div className="mt-2 text-[13px] leading-snug text-white/50">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bento */}
      <section id="features" className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:px-10">
        <div className="mb-12 max-w-2xl">
          <div className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#b9a6ff]">Features</div>
          <h2 className="mt-3 text-balance text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[52px]">
            Built for the way memory actually works.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {BENTO.map((b) => (
            <div
              key={b.title}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-transparent p-7 transition hover:border-[#7c5cff]/50 ${b.span}`}
            >
              <div className="mb-6">
                <Art kind={b.art} />
              </div>
              <h3 className="text-[19px] font-semibold tracking-tight">{b.title}</h3>
              <p className="mt-2 text-pretty text-[14.5px] leading-relaxed text-white/55">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="relative z-10 border-y border-white/[0.06] bg-white/[0.02]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-16 md:flex-row md:justify-between md:px-10">
          <p className="max-w-sm text-center text-[15px] text-white/60 md:text-left">
            Works where you already think. Clip from the browser, send from
            email, sync with your editor.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-[12px] text-white/50">
            {["Chrome", "Safari", "Readwise", "Kindle", "Raycast", "VS Code", "Obsidian import"].map((x) => (
              <span key={x} className="rounded-full border border-white/10 px-3 py-1.5">{x}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 p-12 text-center md:p-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,92,255,0.35),transparent_60%)]" />
          <h2 className="relative text-balance text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[56px]">
            Start remembering everything.
          </h2>
          <p className="relative mx-auto mt-5 max-w-[46ch] text-[16px] text-white/60">
            Free for your first 1,000 notes. Import from Notion, Obsidian, Apple
            Notes or a folder of Markdown in one step.
          </p>
          <a
            href="#"
            className="relative mt-9 inline-block rounded-full bg-white px-7 py-3.5 text-[15px] font-medium text-[#07080c] transition hover:bg-[#b9a6ff]"
          >
            Create your vault
          </a>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-[13px] text-white/40 md:flex-row md:items-center md:justify-between md:px-10">
          <span>© 2026 Tessera Labs</span>
          <div className="flex gap-6">
            <a className="hover:text-white" href="#">Docs</a>
            <a className="hover:text-white" href="#">Security</a>
            <a className="hover:text-white" href="#">Status</a>
            <a className="hover:text-white" href="#">GitHub</a>
          </div>
        </div>
        <div className="h-16" />
      </footer>
    </div>
  );
}
