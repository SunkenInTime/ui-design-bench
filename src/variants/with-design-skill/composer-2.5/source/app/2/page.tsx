import { IBM_Plex_Mono } from "next/font/google";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-brutal",
});

const specs = [
  ["CAPTURE", "RAW INPUT. NO TEMPLATES. NO FRICTION."],
  ["LINK", "EVERY NOTE IS AN ADDRESS. EVERY ADDRESS IS A DOOR."],
  ["RECALL", "SEARCH BY MEANING. NOT BY FOLDER PATH."],
  ["EXPORT", "YOUR DATA. PLAIN TEXT. ALWAYS YOURS."],
];

export default function BrutalistLanding() {
  return (
    <div
      className={`${mono.variable} min-h-screen`}
      style={{
        fontFamily: "var(--font-brutal), monospace",
        background: "#ffffff",
        color: "#000000",
      }}
    >
      <div className="border-b-4 border-black">
        <div className="mx-auto flex max-w-6xl items-stretch justify-between">
          <div className="border-r-4 border-black px-6 py-4 text-2xl font-bold tracking-tighter">
            RAW_NOTE
          </div>
          <div className="hidden flex-1 items-center justify-end gap-0 md:flex">
            {["DOCS", "PRICING", "LOGIN"].map((item) => (
              <a
                key={item}
                href="#"
                className="border-l-4 border-black px-6 py-4 text-xs font-bold tracking-widest transition hover:bg-black hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-6xl">
        <section className="grid border-b-4 border-black lg:grid-cols-2">
          <div className="border-b-4 border-black p-8 lg:border-b-0 lg:border-r-4 lg:p-16">
            <p className="mb-6 text-xs font-bold tracking-[0.4em] text-red-600">
              {`/// SECOND BRAIN v0.9`}
            </p>
            <h1 className="text-5xl font-bold leading-[0.95] tracking-tighter md:text-7xl lg:text-8xl">
              THINK
              <br />
              IN
              <br />
              <span className="bg-black px-2 text-white">PLAIN</span>
              <br />
              TEXT
            </h1>
          </div>
          <div className="flex flex-col justify-between p-8 lg:p-16">
            <p className="max-w-md text-sm leading-7">
              NOTE-TAKING WITHOUT THE PERFORMANCE. NO PRETTY UI TRICKS. NO
              ARTIFICIAL INTELLIGENCE PROMISES. JUST A RELENTLESS SYSTEM FOR
              CAPTURING, CONNECTING, AND RETRIEVING WHAT YOU KNOW.
            </p>
            <div className="mt-12 flex flex-col gap-0 sm:flex-row">
              <button
                type="button"
                className="border-4 border-black bg-black px-10 py-5 text-sm font-bold tracking-widest text-white transition hover:bg-red-600 hover:border-red-600"
              >
                START WRITING →
              </button>
              <button
                type="button"
                className="border-4 border-t-0 border-black px-10 py-5 text-sm font-bold tracking-widest transition hover:bg-black hover:text-white sm:border-t-4 sm:border-l-0"
              >
                READ MANIFESTO
              </button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 border-b-4 border-black md:grid-cols-4">
          {[
            ["10ms", "CAPTURE LATENCY"],
            ["∞", "LINK DEPTH"],
            ["0", "ADS"],
            ["100%", "YOURS"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border-b-4 border-r-4 border-black p-6 last:border-r-0 md:border-b-0"
            >
              <p className="text-3xl font-bold md:text-4xl">{value}</p>
              <p className="mt-2 text-[10px] tracking-[0.3em]">{label}</p>
            </div>
          ))}
        </section>

        <section className="border-b-4 border-black">
          {specs.map(([title, desc], i) => (
            <div
              key={title}
              className={`grid border-b-4 border-black last:border-b-0 md:grid-cols-[200px_1fr] ${
                i % 2 === 1 ? "bg-black text-white" : ""
              }`}
            >
              <div className="border-b-4 border-black p-6 text-xl font-bold tracking-widest md:border-b-0 md:border-r-4 md:p-8">
                {title}
              </div>
              <div className="p-6 text-sm leading-7 md:p-8">{desc}</div>
            </div>
          ))}
        </section>

        <section className="grid lg:grid-cols-[1fr_2fr]">
          <div className="border-b-4 border-black bg-red-600 p-8 text-white lg:border-b-0 lg:border-r-4 lg:p-16">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter">
              THE TOOL
              <br />
              DISAPPEARS.
              <br />
              THE THOUGHT
              <br />
              REMAINS.
            </h2>
          </div>
          <div className="p-8 font-mono text-xs leading-6 lg:p-16">
            <pre className="overflow-x-auto whitespace-pre-wrap">
              {`> raw_note init
[OK] vault created at ~/brain

> raw_note new "meeting insights"
[LINKED] → project-alpha
[LINKED] → sarah-feedback
[LINKED] → q3-strategy

> raw_note graph
┌─────────────────────────────────┐
│  meeting insights               │
│    ├── project-alpha            │
│    ├── sarah-feedback           │
│    └── q3-strategy              │
└─────────────────────────────────┘

> raw_note recall "what did sarah say"
[3 results] ranked by connection strength`}
            </pre>
          </div>
        </section>

        <footer className="flex flex-col items-center justify-between gap-4 p-8 text-[10px] tracking-[0.3em] sm:flex-row">
          <span>RAW_NOTE © 2026</span>
          <span>NO TRACKERS. NO CLOUD LOCK-IN. NO EXCUSES.</span>
        </footer>
      </main>
    </div>
  );
}
