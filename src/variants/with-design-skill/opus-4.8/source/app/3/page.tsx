import { Space_Mono, JetBrains_Mono } from "next/font/google";

const display = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--st-display",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--st-mono",
});

const CELLS = [
  {
    cmd: "capture",
    title: "INSTANT CAPTURE",
    body: "Global hotkey. Type. Done. Your thought is on disk before you finish the sentence.",
  },
  {
    cmd: "link",
    title: "[[BIDIRECTIONAL]]",
    body: "Wrap any phrase in brackets to forge a link. The graph builds itself as you write.",
  },
  {
    cmd: "grep",
    title: "FULL-TEXT RECALL",
    body: "Fuzzy. Boolean. Regex if you want it. Search returns in single-digit milliseconds.",
  },
  {
    cmd: "sync",
    title: "LOCAL-FIRST SYNC",
    body: "Plain markdown on your machine. Encrypted mirror in the cloud. You own the files.",
  },
];

export default function StackPage() {
  return (
    <main
      className={`${display.variable} ${mono.variable} min-h-screen bg-[#e7e7e1] text-[#0b0b0a] selection:bg-[#c6ff3a] selection:text-black`}
      style={{ fontFamily: "var(--st-mono), ui-monospace, monospace" }}
    >
      <style>{`
        @keyframes st-blink { 0%,49% { opacity: 1 } 50%,100% { opacity: 0 } }
        @keyframes st-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .st-cursor::after { content: "_"; animation: st-blink 1s steps(1) infinite; color: #0b0b0a; }
        .st-marquee-track { animation: st-marquee 22s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .st-marquee-track { animation: none; }
          .st-cursor::after { animation: none; }
        }
      `}</style>

      {/* Top status bar */}
      <header className="border-b-2 border-[#0b0b0a] bg-[#0b0b0a] text-[#e7e7e1]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-[11px] uppercase tracking-[0.18em] sm:px-6">
          <span className="font-bold">STACK://second-brain</span>
          <span className="hidden gap-6 sm:flex">
            <span className="text-[#c6ff3a]">● online</span>
            <span>v3.0.0</span>
            <span>mem: 12.4mb</span>
          </span>
          <span>{"[ ⌘K ]"}</span>
        </div>
      </header>

      {/* Nav */}
      <nav className="border-b-2 border-[#0b0b0a]">
        <div className="mx-auto flex max-w-6xl items-stretch justify-between text-[12px] uppercase tracking-[0.16em]">
          <div className="flex items-center border-r-2 border-[#0b0b0a] px-4 py-3 font-bold sm:px-6">
            STACK
          </div>
          <div className="hidden divide-x-2 divide-[#0b0b0a] sm:flex">
            <a className="flex items-center px-5 hover:bg-[#c6ff3a]" href="#cells">
              ./features
            </a>
            <a className="flex items-center px-5 hover:bg-[#c6ff3a]" href="#cli">
              ./demo
            </a>
            <a className="flex items-center px-5 hover:bg-[#c6ff3a]" href="#run">
              ./pricing
            </a>
            <a
              className="flex items-center bg-[#0b0b0a] px-5 font-bold text-[#c6ff3a] hover:bg-[#c6ff3a] hover:text-[#0b0b0a]"
              href="#run"
            >
              [ INSTALL ]
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b-2 border-[#0b0b0a]">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-[1.15fr_1fr]">
          <div className="border-[#0b0b0a] px-4 py-12 sm:px-6 sm:py-16 lg:border-r-2">
            <p className="mb-6 inline-block border-2 border-[#0b0b0a] bg-[#c6ff3a] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em]">
              the anti-app for your brain
            </p>
            <h1
              className="text-[clamp(2.6rem,8vw,6rem)] font-bold uppercase leading-[0.92] tracking-[-0.02em]"
              style={{ fontFamily: "var(--st-display), monospace" }}
            >
              CAPTURE
              <br />
              AT THE
              <br />
              <span className="st-cursor bg-[#0b0b0a] px-2 text-[#c6ff3a]">
                SPEED
              </span>
              <br />
              OF THOUGHT
            </h1>
            <p className="mt-8 max-w-md text-[13.5px] leading-relaxed text-[#2c2c27]">
              No folders. No friction. No lock-in. STACK is a plain-text second
              brain for people who&apos;d rather think than file. Keyboard-driven,
              local-first, brutally fast.
            </p>
            <div id="run" className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="border-2 border-[#0b0b0a] bg-[#0b0b0a] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.16em] text-[#c6ff3a] transition-colors hover:bg-[#c6ff3a] hover:text-[#0b0b0a]"
              >
                $ install stack
              </a>
              <a
                href="#cli"
                className="border-2 border-[#0b0b0a] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.16em] transition-colors hover:bg-[#0b0b0a] hover:text-[#e7e7e1]"
              >
                read docs →
              </a>
            </div>
          </div>

          {/* Fake terminal */}
          <div
            id="cli"
            className="bg-[#0b0b0a] px-4 py-6 font-medium text-[#e7e7e1] sm:px-6"
          >
            <div className="mb-4 flex items-center gap-2 border-b border-[#e7e7e1]/20 pb-3 text-[11px] uppercase tracking-[0.16em] text-[#e7e7e1]/50">
              <span className="h-3 w-3 border border-[#e7e7e1]/40" />
              <span className="h-3 w-3 border border-[#e7e7e1]/40" />
              <span className="h-3 w-3 border border-[#e7e7e1]/40" />
              <span className="ml-2">~/brain — stack</span>
            </div>
            <pre className="overflow-x-auto whitespace-pre-wrap text-[12.5px] leading-[1.7]">
              <span className="text-[#c6ff3a]">$</span> stack new
              {"\n"}
              <span className="text-[#6f6f66]"># opened daily note 2026-05-28</span>
              {"\n\n"}
              {"> "}met w/ team re: [[roadmap]]. big idea:
              {"\n"}
              {"  "}link notes like a brain, not a tree.
              {"\n\n"}
              <span className="text-[#c6ff3a]">$</span> stack links roadmap
              {"\n"}
              <span className="text-[#e7e7e1]/70">  ← 14 backlinks</span>
              {"\n"}
              <span className="text-[#e7e7e1]/70">  ← 3 unlinked mentions</span>
              {"\n\n"}
              <span className="text-[#c6ff3a]">$</span> stack find &quot;second brain&quot;
              {"\n"}
              <span className="text-[#e7e7e1]/70">  37 results · 4ms </span>
              <span className="st-cursor" />
            </pre>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-b-2 border-[#0b0b0a] bg-[#c6ff3a] py-2">
        <div className="st-marquee-track flex w-max whitespace-nowrap text-[12px] font-bold uppercase tracking-[0.2em]">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex">
              {[
                "plain text",
                "local first",
                "keyboard driven",
                "open format",
                "no lock-in",
                "backlinks",
                "instant search",
                "markdown native",
              ].map((t) => (
                <span key={t} className="px-5">
                  ✦ {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Cells */}
      <section id="cells" className="mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-2">
          {CELLS.map((c, i) => (
            <article
              key={c.cmd}
              className={`group border-[#0b0b0a] p-7 transition-colors hover:bg-[#0b0b0a] hover:text-[#e7e7e1] sm:p-9 ${
                i % 2 === 0 ? "sm:border-r-2" : ""
              } border-b-2`}
            >
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#7a7a70] group-hover:text-[#c6ff3a]">
                <span className="border border-current px-1.5 py-0.5">
                  0{i + 1}
                </span>
                <span>$ stack {c.cmd}</span>
              </div>
              <h3
                className="mt-5 text-[clamp(1.5rem,3vw,2.2rem)] font-bold uppercase leading-none tracking-tight"
                style={{ fontFamily: "var(--st-display), monospace" }}
              >
                {c.title}
              </h3>
              <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-[#3a3a33] group-hover:text-[#e7e7e1]/70">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA + footer */}
      <section className="mx-auto max-w-6xl border-b-2 border-[#0b0b0a] px-4 py-16 text-center sm:px-6">
        <h2
          className="text-[clamp(2rem,6vw,4rem)] font-bold uppercase leading-none"
          style={{ fontFamily: "var(--st-display), monospace" }}
        >
          STOP FILING.
          <br />
          START THINKING.
        </h2>
        <a
          href="#"
          className="mt-8 inline-block border-2 border-[#0b0b0a] bg-[#c6ff3a] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.18em] transition-colors hover:bg-[#0b0b0a] hover:text-[#c6ff3a]"
        >
          $ install stack — free
        </a>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-[11px] uppercase tracking-[0.18em] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span className="font-bold">STACK</span>
        <span className="text-[#5a5a52]">
          © {new Date().getFullYear()} — exit code 0
        </span>
      </footer>
    </main>
  );
}
