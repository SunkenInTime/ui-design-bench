const RED = "#e6331a";

const MANIFESTO = [
  {
    n: "01",
    h: "Capture is cheap. Retrieval is everything.",
    p: "Any tool can store a note. Almost none can give it back to you at the moment you need it. Tessera is designed backwards from retrieval: every feature exists to make old thinking findable.",
  },
  {
    n: "02",
    h: "Links, not folders.",
    p: "A folder holds a note in one place. A link holds it in many. Type two brackets and the structure builds itself — bidirectionally, automatically, permanently.",
  },
  {
    n: "03",
    h: "Meaning over keywords.",
    p: "You rarely remember the words you used. You remember what you meant. Search runs on device against meaning, in under forty milliseconds.",
  },
  {
    n: "04",
    h: "Plain text is the only format that lasts.",
    p: "Your vault is a folder of Markdown files. Open it in any editor. Back it up with anything. Leave whenever you like — you won't need to.",
  },
  {
    n: "05",
    h: "Privacy is a feature, not a setting.",
    p: "Sync is end-to-end encrypted. Indexes are built on your machine. There is no version of Tessera that can read your notes.",
  },
];

const SPECS = [
  ["Format", "Markdown + YAML frontmatter"],
  ["Search", "Hybrid lexical/semantic, on device"],
  ["Sync", "E2E encrypted, CRDT-based"],
  ["Platforms", "macOS · Windows · Linux · iOS · Android"],
  ["Import", "Obsidian · Notion · Roam · Apple Notes · Evernote"],
  ["Export", "Always. It's a folder."],
  ["Price", "$0 to 1,000 notes · $6/mo unlimited"],
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* Top bar */}
      <header className="border-b-2 border-black">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x-2 divide-black text-[12px] font-medium uppercase tracking-[0.12em] md:grid-cols-12">
          <div className="col-span-1 px-5 py-4 md:col-span-3">Tessera</div>
          <div className="hidden px-5 py-4 md:col-span-3 md:block">A second brain</div>
          <div className="hidden px-5 py-4 md:col-span-3 md:block">Vol. 3 — 2026</div>
          <nav className="col-span-1 flex justify-end gap-6 px-5 py-4 md:col-span-3">
            <a className="hover:text-[#e6331a]" href="#manifesto">Manifesto</a>
            <a className="hover:text-[#e6331a]" href="#specs">Specs</a>
            <a className="hover:text-[#e6331a]" href="#">Download</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b-2 border-black">
        <div className="mx-auto grid max-w-[1400px] md:grid-cols-12 md:divide-x-2 md:divide-black">
          <div className="px-5 pb-10 pt-12 md:col-span-8 md:pb-16 md:pt-20">
            <h1 className="text-[64px] font-semibold leading-[0.88] tracking-[-0.05em] md:text-[152px]">
              Think
              <br />
              in <span style={{ color: RED }}>links.</span>
            </h1>
            <p className="mt-12 max-w-[42ch] text-pretty text-[20px] leading-[1.4] md:text-[24px]">
              Tessera is a note-taking system that stores what you know the way
              you actually know it — as a network, not a filing cabinet.
            </p>
          </div>
          <div className="flex flex-col justify-between border-t-2 border-black md:col-span-4 md:border-t-0">
            <div className="px-5 py-8">
              <div className="text-[12px] font-medium uppercase tracking-[0.12em] text-black/50">Abstract</div>
              <p className="mt-3 text-[15px] leading-[1.5]">
                Notes are cheap to write and expensive to find. Tessera inverts
                the cost: bidirectional links, on-device semantic search and
                daily resurfacing make retrieval the default outcome of
                writing anything down.
              </p>
            </div>
            <div className="grid grid-cols-2 divide-x-2 divide-black border-t-2 border-black">
              <a href="#" className="px-5 py-5 text-[14px] font-medium uppercase tracking-[0.12em] transition hover:bg-black hover:text-white">
                Download ↓
              </a>
              <a href="#" className="px-5 py-5 text-[14px] font-medium uppercase tracking-[0.12em] text-white transition hover:bg-black" style={{ background: RED }}>
                Try free →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-b-2 border-black py-2.5">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-mono text-[12px] uppercase tracking-[0.14em]">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12">
              {[
                "12,480 notes indexed",
                "38ms median search",
                "6.2 links per note",
                "100% Markdown",
                "0 readable by us",
                "5 platforms",
                "1885 — Ebbinghaus",
              ].map((t) => (
                <span key={t} className="flex items-center gap-12">
                  {t} <span style={{ color: RED }}>●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Figure: linked notes as a grid diagram */}
      <section className="border-b-2 border-black">
        <div className="mx-auto grid max-w-[1400px] md:grid-cols-12 md:divide-x-2 md:divide-black">
          <div className="px-5 py-8 md:col-span-3">
            <div className="font-mono text-[12px] uppercase tracking-[0.12em] text-black/50">Fig. 1</div>
            <p className="mt-3 text-[15px] leading-[1.5]">
              A single note and its neighbourhood. Solid lines are explicit
              links; dashed lines are unlinked mentions Tessera has detected.
            </p>
          </div>
          <div className="md:col-span-9">
            <svg viewBox="0 0 900 320" className="w-full">
              <defs>
                <pattern id="g" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M30 0H0v30" fill="none" stroke="#000" strokeOpacity="0.08" />
                </pattern>
              </defs>
              <rect width="900" height="320" fill="url(#g)" />
              {[
                [450, 160, 150, 80, false], [450, 160, 300, 260, false], [450, 160, 620, 70, false], [450, 160, 720, 230, false],
                [150, 80, 300, 260, true], [620, 70, 720, 230, true], [450, 160, 820, 120, true],
              ].map(([a, b, c, d, dash], i) => (
                <line key={i} x1={Number(a)} y1={Number(b)} x2={Number(c)} y2={Number(d)} stroke="#000" strokeWidth="1.5" strokeDasharray={dash ? "5 5" : undefined} />
              ))}
              {[
                [150, 80, "Zettelkasten"], [300, 260, "Weekly review"], [620, 70, "Forgetting curve"], [720, 230, "Make It Stick"], [820, 120, "Feynman technique"],
              ].map(([x, y, l]) => (
                <g key={String(l)}>
                  <rect x={Number(x) - 6} y={Number(y) - 6} width="12" height="12" fill="#fff" stroke="#000" strokeWidth="1.5" />
                  <text x={Number(x) + 14} y={Number(y) + 4} fontSize="12" fontFamily="var(--font-jetbrains-mono)" fill="#000">{l}</text>
                </g>
              ))}
              <rect x="436" y="146" width="28" height="28" fill={RED} />
              <text x="474" y="165" fontSize="13" fontWeight="600" fontFamily="var(--font-inter)" fill="#000">Why we forget what we read</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section id="manifesto" className="border-b-2 border-black">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid border-b-2 border-black md:grid-cols-12 md:divide-x-2 md:divide-black">
            <div className="px-5 py-5 font-mono text-[12px] uppercase tracking-[0.12em] md:col-span-3">Section A</div>
            <div className="px-5 py-5 text-[12px] font-medium uppercase tracking-[0.12em] md:col-span-9">Five principles</div>
          </div>
          {MANIFESTO.map((m, i) => (
            <div key={m.n} className={`grid md:grid-cols-12 md:divide-x-2 md:divide-black ${i < MANIFESTO.length - 1 ? "border-b-2 border-black" : ""}`}>
              <div className="px-5 pt-8 font-mono text-[40px] leading-none tracking-tight md:col-span-3 md:py-10 md:text-[56px]" style={{ color: RED }}>
                {m.n}
              </div>
              <div className="px-5 pb-10 pt-4 md:col-span-6 md:py-10">
                <h2 className="text-balance text-[30px] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[40px]">{m.h}</h2>
              </div>
              <div className="px-5 pb-10 md:col-span-3 md:py-10">
                <p className="text-pretty text-[15px] leading-[1.55]">{m.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specs */}
      <section id="specs" className="border-b-2 border-black">
        <div className="mx-auto grid max-w-[1400px] md:grid-cols-12 md:divide-x-2 md:divide-black">
          <div className="px-5 py-10 md:col-span-3">
            <div className="font-mono text-[12px] uppercase tracking-[0.12em] text-black/50">Section B</div>
            <h2 className="mt-3 text-[34px] font-semibold leading-[0.95] tracking-[-0.04em] md:text-[40px]">Specifications</h2>
          </div>
          <div className="md:col-span-9">
            <dl className="divide-y-2 divide-black">
              {SPECS.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[120px_1fr] gap-6 px-5 py-4 text-[15px] md:grid-cols-[220px_1fr]">
                  <dt className="font-mono text-[12px] uppercase tracking-[0.12em] text-black/50 pt-0.5">{k}</dt>
                  <dd className="font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-b-2 border-black" style={{ background: RED }}>
        <div className="mx-auto max-w-[1400px] px-5 py-20 text-white md:py-28">
          <p className="max-w-[24ch] text-balance text-[40px] font-semibold leading-[0.98] tracking-[-0.04em] md:text-[80px]">
            &ldquo;The first tool that made my old notes worth having.&rdquo;
          </p>
          <div className="mt-8 font-mono text-[12px] uppercase tracking-[0.14em] text-white/80">
            Maren Lindqvist — Historian, Uppsala
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b-2 border-black">
        <div className="mx-auto grid max-w-[1400px] md:grid-cols-12 md:divide-x-2 md:divide-black">
          <div className="px-5 py-14 md:col-span-8">
            <h2 className="text-[48px] font-semibold leading-[0.9] tracking-[-0.05em] md:text-[104px]">
              Start
              <br />
              remembering.
            </h2>
          </div>
          <div className="grid divide-y-2 divide-black border-t-2 border-black md:col-span-4 md:border-t-0">
            {[
              ["macOS", "Apple silicon · Intel"],
              ["Windows", "x64 · ARM"],
              ["Linux", "AppImage · deb · rpm"],
              ["Mobile", "iOS · Android"],
            ].map(([k, v]) => (
              <a key={k} href="#" className="group flex items-center justify-between px-5 py-5 transition hover:bg-black hover:text-white">
                <span className="text-[18px] font-semibold tracking-tight">{k}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-black/50 group-hover:text-white/70">{v} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x-2 divide-black text-[12px] font-medium uppercase tracking-[0.12em] md:grid-cols-12">
          <div className="px-5 py-4 md:col-span-3">© 2026 Tessera</div>
          <div className="hidden px-5 py-4 md:col-span-3 md:block">Set in Inter &amp; JetBrains Mono</div>
          <div className="hidden px-5 py-4 md:col-span-3 md:block">Printed on screen</div>
          <div className="flex justify-end gap-6 px-5 py-4 md:col-span-3">
            <a className="hover:text-[#e6331a]" href="#">Privacy</a>
            <a className="hover:text-[#e6331a]" href="#">GitHub</a>
          </div>
        </div>
        <div className="h-16" />
      </footer>
    </div>
  );
}
