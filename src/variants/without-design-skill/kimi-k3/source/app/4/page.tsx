const nodes = [
  { id: "you", x: 240, y: 205, r: 34, label: "You", primary: true },
  { id: "books", x: 88, y: 78, r: 22, label: "Books" },
  { id: "ideas", x: 385, y: 66, r: 22, label: "Ideas" },
  { id: "projects", x: 414, y: 250, r: 22, label: "Projects" },
  { id: "people", x: 322, y: 372, r: 22, label: "People" },
  { id: "quotes", x: 104, y: 336, r: 22, label: "Quotes" },
  { id: "journal", x: 54, y: 200, r: 22, label: "Journal" },
];

const edges: Array<[string, string]> = [
  ["you", "books"],
  ["you", "ideas"],
  ["you", "projects"],
  ["you", "people"],
  ["you", "quotes"],
  ["you", "journal"],
  ["books", "ideas"],
  ["ideas", "projects"],
  ["people", "quotes"],
  ["journal", "quotes"],
  ["books", "journal"],
];

const satellites = [
  { x: 150, y: 40, r: 5 },
  { x: 320, y: 30, r: 4 },
  { x: 450, y: 150, r: 5 },
  { x: 30, y: 110, r: 4 },
  { x: 200, y: 380, r: 5 },
  { x: 420, y: 340, r: 4 },
  { x: 40, y: 280, r: 5 },
  { x: 290, y: 120, r: 3.5 },
  { x: 170, y: 260, r: 3.5 },
];

const lifecycle = [
  {
    stage: "Seed",
    title: "Capture without ceremony",
    body: "A note starts as a fragment — a quote, a hunch, half a sentence. Drop it in the soil; no folder decisions required.",
  },
  {
    stage: "Root",
    title: "Link it to what you know",
    body: "Each connection is a root. Link the fragment to a book, a person, a project — and it starts drawing nutrients from all three.",
  },
  {
    stage: "Bloom",
    title: "Resurface in context",
    body: "While you write, Cortex shows the notes that belong beside your cursor. Old ideas bloom exactly where they can be used.",
  },
  {
    stage: "Forest",
    title: "Create from the canopy",
    body: "Essays, talks, and products stop starting from blank pages. They emerge, almost assembled, from a forest you planted years ago.",
  },
];

const features = [
  {
    title: "Bi-directional links",
    body: "Every note lists not just where it points, but everything that points back. Context is never more than one click away.",
  },
  {
    title: "Graph overview",
    body: "Zoom out and see your thinking as a living constellation. Find the dense clusters — and the lonely ideas waiting for a friend.",
  },
  {
    title: "Serendipity engine",
    body: "A daily shuffle of forgotten notes, weighted toward what you're working on now. Rediscovery on schedule.",
  },
];

export default function IterationFour() {
  return (
    <main className="min-h-screen w-full bg-[#F7F5F1] pb-36 font-sans text-[#16211C] selection:bg-[#0C5A4C] selection:text-white">
      {/* Nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0C5A4C]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F7F5F1" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="2.4" fill="#F7F5F1" stroke="none" />
              <circle cx="4.5" cy="5.5" r="1.6" />
              <circle cx="19.5" cy="4.5" r="1.6" />
              <circle cx="20" cy="19" r="1.6" />
              <circle cx="4" cy="18.5" r="1.6" />
              <path d="M5.8 6.7 10 10.5M18.2 5.7l-4.3 4.6M18.8 17.6l-4.8-4M5.2 17.1l4.7-3.6" />
            </svg>
          </span>
          <span className="text-lg font-semibold tracking-tight">Cortex</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-[#16211C]/60 md:flex">
          <a className="transition-colors hover:text-[#0C5A4C]" href="#lifecycle">Lifecycle</a>
          <a className="transition-colors hover:text-[#0C5A4C]" href="#features">Features</a>
          <a className="transition-colors hover:text-[#0C5A4C]" href="#stories">Stories</a>
        </nav>
        <a
          href="#start"
          className="rounded-full bg-[#0C5A4C] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#094639]"
        >
          Plant your first note
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 pt-14 md:grid-cols-2 md:pt-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#0C5A4C]/25 bg-[#DCE8DF]/60 px-4 py-1.5 text-xs font-medium text-[#0C5A4C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0C5A4C]" />
            Personal knowledge management, minus the management
          </p>
          <h1 className="mt-7 text-5xl leading-[1.05] tracking-tight md:text-6xl">
            Ideas grow when they&rsquo;re{" "}
            <span className="font-serif italic text-[#0C5A4C]">connected</span>.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#16211C]/65">
            Cortex turns your notes into a second brain: a living network where
            every thought feeds the next. Capture fragments, link them loosely,
            and harvest fully-grown ideas later.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              id="start"
              href="#"
              className="rounded-full bg-[#16211C] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0C5A4C]"
            >
              Start growing — free
            </a>
            <a
              href="#lifecycle"
              className="text-sm font-semibold text-[#0C5A4C] underline decoration-[#0C5A4C]/30 underline-offset-8 transition-colors hover:decoration-[#0C5A4C]"
            >
              See the lifecycle
            </a>
          </div>
          <p className="mt-10 text-sm text-[#16211C]/45">
            Joined by <span className="font-semibold text-[#16211C]/70">41,203</span> gardeners of thought
          </p>
        </div>

        {/* Graph */}
        <div className="relative">
          <div className="absolute inset-8 rounded-full bg-[#DCE8DF]/50 blur-3xl" />
          <svg viewBox="0 0 480 420" className="relative w-full" role="img" aria-label="A network graph of connected notes">
            {edges.map(([a, b]) => {
              const na = nodes.find((n) => n.id === a)!;
              const nb = nodes.find((n) => n.id === b)!;
              return (
                <line
                  key={`${a}-${b}`}
                  x1={na.x}
                  y1={na.y}
                  x2={nb.x}
                  y2={nb.y}
                  stroke="#0C5A4C"
                  strokeOpacity="0.25"
                  strokeWidth="1.5"
                />
              );
            })}
            <circle cx={240} cy={205} r={52} fill="none" stroke="#0C5A4C" strokeOpacity="0.2" strokeDasharray="3 6" />
            {satellites.map((s, i) => (
              <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#0C5A4C" fillOpacity="0.18" />
            ))}
            {nodes.map((n) => (
              <g key={n.id}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={n.r}
                  fill={n.primary ? "#0C5A4C" : "#F7F5F1"}
                  stroke="#0C5A4C"
                  strokeWidth={n.primary ? 0 : 2}
                />
                <text
                  x={n.x}
                  y={n.primary ? n.y + 4 : n.y + n.r + 16}
                  textAnchor="middle"
                  fontSize={n.primary ? 13 : 11}
                  fontWeight={n.primary ? 600 : 500}
                  fill={n.primary ? "#F7F5F1" : "#16211C"}
                >
                  {n.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </section>

      {/* Lifecycle */}
      <section id="lifecycle" className="mx-auto max-w-6xl px-6 pt-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0C5A4C]">
            The lifecycle of a thought
          </p>
          <h2 className="mt-4 text-3xl tracking-tight md:text-5xl">
            How a note becomes <span className="font-serif italic">knowledge</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {lifecycle.map((s, i) => (
            <article
              key={s.stage}
              className="relative rounded-3xl border border-[#16211C]/10 bg-white/70 p-7 transition-colors hover:border-[#0C5A4C]/40"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0C5A4C]">
                {String(i + 1).padStart(2, "0")} — {s.stage}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#16211C]/60">{s.body}</p>
              {i < lifecycle.length - 1 && (
                <svg
                  className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-[#0C5A4C]/40 lg:block"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 pt-28">
        <div className="rounded-[2.5rem] bg-[#DCE8DF]/70 px-8 py-14 md:px-14">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-md text-3xl tracking-tight md:text-4xl">
              Three organs of the second brain
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-[#16211C]/60">
              Not features for their own sake — each one mirrors something your
              biological brain already does beautifully.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <article key={f.title} className="rounded-3xl bg-[#F7F5F1] p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0C5A4C] font-serif text-lg italic text-white">
                  {["i", "ii", "iii"][i]}
                </span>
                <h3 className="mt-5 font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#16211C]/60">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="stories" className="mx-auto max-w-3xl px-6 pt-28 text-center">
        <svg className="mx-auto text-[#0C5A4C]" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 8c-3.3 0-6 2.7-6 6v2h5v-5H6.5C6.8 9.6 8.2 8.5 10 8.5V8zm10 0c-3.3 0-6 2.7-6 6v2h5v-5h-2.5c.3-1.4 1.7-2.5 3.5-2.5V8z" />
        </svg>
        <blockquote className="mt-6 font-serif text-2xl leading-snug md:text-[2rem]">
          My Cortex graph looks like a map of my curiosity. When I feel lost on
          a project, I zoom out and literally <span className="italic">see</span> what
          I&rsquo;ve been thinking about.
        </blockquote>
        <p className="mt-7 text-sm font-medium text-[#16211C]/50">
          Tomas Reyes — PhD candidate, keeper of 6,412 notes
        </p>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pt-28">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0C5A4C] px-8 py-16 text-center text-[#F7F5F1] md:py-20">
          <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]" aria-hidden>
            <circle cx="12%" cy="20%" r="4" fill="#F7F5F1" />
            <circle cx="88%" cy="15%" r="3" fill="#F7F5F1" />
            <circle cx="80%" cy="85%" r="5" fill="#F7F5F1" />
            <circle cx="15%" cy="80%" r="3" fill="#F7F5F1" />
            <circle cx="50%" cy="10%" r="2.5" fill="#F7F5F1" />
            <line x1="12%" y1="20%" x2="50%" y2="10%" stroke="#F7F5F1" />
            <line x1="50%" y1="10%" x2="88%" y2="15%" stroke="#F7F5F1" />
            <line x1="12%" y1="20%" x2="15%" y2="80%" stroke="#F7F5F1" />
            <line x1="15%" y1="80%" x2="80%" y2="85%" stroke="#F7F5F1" />
            <line x1="80%" y1="85%" x2="88%" y2="15%" stroke="#F7F5F1" />
          </svg>
          <h2 className="relative text-3xl tracking-tight md:text-5xl">
            Plant a note today.
            <br />
            <span className="font-serif italic">Harvest ideas for decades.</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-md text-[#F7F5F1]/70">
            Free for your first 1,000 notes. Your graph, your files, your
            brain — exportable forever.
          </p>
          <a
            href="#"
            className="relative mt-9 inline-block rounded-full bg-[#F7F5F1] px-9 py-4 text-sm font-semibold text-[#0C5A4C] transition-transform hover:scale-[1.04]"
          >
            Grow your second brain
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto mt-24 flex max-w-6xl flex-col items-start justify-between gap-4 border-t border-[#16211C]/10 px-6 pt-8 text-xs text-[#16211C]/45 sm:flex-row sm:items-center">
        <span className="font-semibold text-[#16211C]">Cortex</span>
        <span>Grown slowly, synced instantly</span>
        <span>© 2026 — Photosynthesis for thoughts</span>
      </footer>
    </main>
  );
}
