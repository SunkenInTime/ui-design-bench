import "@/generated/scoped-variant-css/without-design-skill/mimo-x-pro-preview/source/app/one/page.css";
const NODES = [
  { id: "capture", x: 120, y: 80, label: "Capture" },
  { id: "link", x: 280, y: 48, label: "Link" },
  { id: "recall", x: 400, y: 130, label: "Recall" },
  { id: "thread", x: 220, y: 170, label: "Thread" },
  { id: "essay", x: 90, y: 200, label: "Essay" },
  { id: "meeting", x: 360, y: 220, label: "Meeting" },
];

const EDGES: Array<[string, string]> = [
  ["capture", "link"],
  ["link", "recall"],
  ["capture", "thread"],
  ["thread", "essay"],
  ["link", "meeting"],
  ["thread", "meeting"],
  ["recall", "meeting"],
];

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function OnePage() {
  return (
    <div className="min-h-screen bg-[#F6F1E7] text-[#1C1917]">

      <div className="fn-page">
        <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <div className="flex items-baseline gap-3">
            <span className="text-xl font-bold tracking-tight text-[#1C1917]">Cortex</span>
            <span className="mono text-[11px] uppercase tracking-[0.18em] text-[#3D6B4F]">
              Est. commonplacing
            </span>
          </div>
          <nav className="sans flex items-center gap-6 text-[13px] text-[#6B5344]">
            <a className="transition-colors hover:text-[#3D6B4F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D6B4F]" href="#method">Method</a>
            <a className="transition-colors hover:text-[#3D6B4F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D6B4F]" href="#practice">Practice</a>
            <a className="rounded-full bg-[#3D6B4F] px-4 py-2 text-white transition-colors hover:bg-[#2F5440] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1917]" href="#begin">Begin a notebook</a>
          </nav>
        </header>

        <section className="mx-auto grid max-w-5xl gap-12 px-6 pb-16 pt-8 md:grid-cols-[1.15fr_0.85fr] md:items-end md:pt-16">
          <div className="fn-margin-rule pl-6 md:pl-8">
            <p className="mono mb-5 text-[11px] uppercase tracking-[0.22em] text-[#B08D57]">
              Field notes on thinking
            </p>
            <h1 className="text-5xl leading-[1.05] tracking-tight text-[#1C1917] md:text-6xl">
              A commonplace book
              <span className="block italic text-[#3D6B4F]">for the modern mind.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#3a342e]">
              Cortex is a second brain that behaves like a well-kept journal:
              capture fragments as they arrive, press them into related ideas,
              and find them again when a project needs them.
            </p>
            <div className="sans mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#begin"
                className="inline-flex min-h-11 items-center rounded-sm border border-[#1C1917] bg-[#1C1917] px-5 text-sm font-medium text-[#F6F1E7] transition-colors hover:bg-[#3D6B4F] hover:border-[#3D6B4F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D6B4F]"
              >
                Open your first page
              </a>
              <a
                href="#method"
                className="inline-flex min-h-11 items-center px-2 text-sm text-[#6B5344] underline decoration-[#B08D57] decoration-2 underline-offset-4 transition-colors hover:text-[#3D6B4F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D6B4F]"
              >
                See the method
              </a>
            </div>
          </div>

          <figure className="rounded-sm border border-[rgba(28,25,23,0.14)] bg-[#FBF8F1] p-5 shadow-[0_18px_40px_rgba(61,107,79,0.08)]">
            <figcaption className="mono mb-3 text-[10px] uppercase tracking-[0.18em] text-[#6B5344]">
              Live constellation · sample vault
            </figcaption>
            <svg
              viewBox="0 0 480 280"
              className="h-auto w-full"
              role="img"
              aria-label="A small knowledge graph connecting capture, link, recall, and related notes"
            >
              <rect width="480" height="280" fill="transparent" />
              {EDGES.map(([a, b]) => {
                const from = NODES.find((n) => n.id === a)!;
                const to = NODES.find((n) => n.id === b)!;
                return (
                  <line
                    key={`${a}-${b}`}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke="#3D6B4F"
                    strokeWidth="1.2"
                    opacity="0.35"
                  />
                );
              })}
              {NODES.map((n) => (
                <g key={n.id} className="fn-dot">
                  <circle cx={n.x} cy={n.y} r="7" fill="#3D6B4F" />
                  <circle cx={n.x} cy={n.y} r="12" fill="none" stroke="#B08D57" strokeWidth="1" opacity="0.7" />
                  <text
                    x={n.x}
                    y={n.y + 28}
                    textAnchor="middle"
                    className="mono"
                    fill="#6B5344"
                    fontSize="11"
                  >
                    {n.label}
                  </text>
                </g>
              ))}
            </svg>
          </figure>
        </section>

        <section id="method" className="border-y border-[rgba(28,25,23,0.12)] bg-[#FBF8F1]">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-3xl tracking-tight md:text-4xl">The method</h2>
              <p className="sans max-w-sm text-sm leading-6 text-[#6B5344]">
                Three habits, practiced daily. No folders to maintain. No tags to invent in advance.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden border border-[rgba(28,25,23,0.12)] bg-[rgba(28,25,23,0.12)] md:grid-cols-3">
              {[
                {
                  n: "I",
                  title: "Capture in the margin",
                  body: "Phone, desktop, or keyboard shortcut. A thought is written before the kettle boils — no title required.",
                },
                {
                  n: "II",
                  title: "Press into relations",
                  body: "Cortex proposes links from language you already used. You accept, rewrite, or ignore with one keystroke.",
                },
                {
                  n: "III",
                  title: "Return on demand",
                  body: "Ask in plain language. Surface the note, the source, and the path of connections that led there.",
                },
              ].map((item) => (
                <article key={item.n} className="bg-[#F6F1E7] p-7">
                  <p className="mono mb-4 text-[11px] uppercase tracking-[0.2em] text-[#B08D57]">{item.n}</p>
                  <h3 className="mb-3 text-2xl leading-snug">{item.title}</h3>
                  <p className="sans text-[15px] leading-7 text-[#3a342e]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="practice" className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <h2 className="text-3xl tracking-tight md:text-4xl">Built for long thinking</h2>
              <p className="mt-4 text-lg leading-8 text-[#3a342e]">
                Most apps optimize for collecting. Cortex optimizes for the second half of the work:
                turning fragments into judgment.
              </p>
            </div>
            <ul className="fn-ruled space-y-0 rounded-sm border border-[rgba(28,25,23,0.12)] bg-[#FBF8F1] p-2">
              {[
                ["Bidirectional links", "Every note knows where it was cited — and why."],
                ["Daily pages", "A quiet inbox that becomes part of the graph, not a graveyard."],
                ["Source memory", "Quotes keep their origin, so ideas stay accountable."],
                ["Quiet export", "Plain Markdown out. Your archive never locks you in."],
              ].map(([title, body]) => (
                <li key={title} className="border-b border-[rgba(28,25,23,0.08)] px-4 py-4 last:border-b-0">
                  <div className="sans text-[13px] font-semibold uppercase tracking-[0.08em] text-[#3D6B4F]">
                    {title}
                  </div>
                  <div className="mt-1 text-[17px] leading-7 text-[#1C1917]">{body}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="begin" className="border-t border-[rgba(28,25,23,0.12)]">
          <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-end md:justify-between md:py-20">
            <div>
              <p className="mono mb-3 text-[11px] uppercase tracking-[0.2em] text-[#B08D57]">Begin</p>
              <h2 className="max-w-xl text-4xl leading-tight tracking-tight md:text-5xl">
                Keep a mind you can return to.
              </h2>
              <p className="sans mt-4 max-w-md text-[15px] leading-7 text-[#6B5344]">
                Free for personal use. Import from Markdown, Obsidian, or plain files in under a minute.
              </p>
            </div>
            <a
              href="#begin"
              className="sans inline-flex min-h-12 items-center rounded-sm bg-[#3D6B4F] px-6 text-sm font-medium text-white transition-colors hover:bg-[#2F5440] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1917]"
            >
              Start writing
            </a>
          </div>
        </section>

        <footer className="mx-auto max-w-5xl px-6 pb-16 pt-4">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(28,25,23,0.12)] pt-6 text-[13px] text-[#6B5344]">
            <span>Cortex · Iteration 01 · Field Notes</span>
            <span className="mono text-[11px] tracking-[0.12em]">Capture · Link · Recall</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
