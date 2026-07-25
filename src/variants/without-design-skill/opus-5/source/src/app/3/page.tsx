import Link from "next/link";

const marquee = [
  "BIDIRECTIONAL LINKS",
  "PLAIN MARKDOWN",
  "OFFLINE FIRST",
  "GRAPH VIEW",
  "E2E ENCRYPTED",
  "NO FOLDERS",
  "INSTANT CAPTURE",
];

const features = [
  {
    n: "01",
    title: "LINKS BOTH WAYS",
    body: "Reference a note, and it references you back. The graph is a side effect of writing, not a chore.",
    fill: "bg-[#ccff00]",
  },
  {
    n: "02",
    title: "ASK YOUR ARCHIVE",
    body: "Plain-language recall over everything you have written. Every answer cites the note it came from.",
    fill: "bg-white",
  },
  {
    n: "03",
    title: "FILES. NOT LOCK-IN.",
    body: "A folder of .md files on your disk. Delete us and keep everything.",
    fill: "bg-white",
  },
  {
    n: "04",
    title: "0MS CAPTURE",
    body: "Global hotkey. Window opens, thought lands, window dies.",
    fill: "bg-[#2563eb] text-white",
  },
];

export default function AcidLanding() {
  return (
    <div className="min-h-screen flex-1 bg-[#eeeeea] font-sans text-[#111] selection:bg-[#ccff00]">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b-2 border-[#111] bg-[#eeeeea]">
        <nav className="mx-auto flex max-w-7xl items-stretch">
          <span className="flex items-center gap-2 border-r-2 border-[#111] px-5 py-4 text-lg font-black tracking-tighter">
            LOAM<span className="text-[#ccff00] [-webkit-text-stroke:1px_#111]">®</span>
          </span>
          <div className="hidden flex-1 items-center gap-8 px-6 font-mono text-[11px] tracking-wider md:flex">
            <a className="hover:bg-[#ccff00]" href="#what">
              [WHAT]
            </a>
            <a className="hover:bg-[#ccff00]" href="#how">
              [HOW]
            </a>
            <a className="hover:bg-[#ccff00]" href="#price">
              [PRICE]
            </a>
          </div>
          <a
            href="#price"
            className="ml-auto flex items-center border-l-2 border-[#111] bg-[#111] px-6 font-mono text-[11px] font-bold tracking-wider text-[#ccff00] transition hover:bg-[#ccff00] hover:text-[#111] md:ml-0"
          >
            GET IT →
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="border-b-2 border-[#111]">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-[1.35fr_1fr]">
            <div className="border-[#111] px-5 py-14 sm:px-8 sm:py-20 lg:border-r-2">
              <p className="mb-8 inline-block border-2 border-[#111] bg-[#ccff00] px-2.5 py-1 font-mono text-[11px] font-bold tracking-wider">
                A SECOND BRAIN THAT ACTUALLY REMEMBERS
              </p>
              <h1 className="text-[3.25rem] leading-[0.86] font-black tracking-[-0.045em] uppercase sm:text-[5.5rem] lg:text-[6.5rem]">
                Your notes
                <br />
                are a{" "}
                <span className="bg-[#ccff00] px-1.5 [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">
                  mess
                </span>
                .
              </h1>
              <p className="mt-9 max-w-md font-mono text-sm leading-relaxed">
                Good. Mess is where the ideas are. Loam indexes the chaos so you
                never have to tidy it — no folders, no taxonomy, no Sunday
                afternoon reorganising tags.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#price"
                  className="border-2 border-[#111] bg-[#111] px-8 py-4 text-center font-mono text-sm font-bold tracking-wider text-[#eeeeea] shadow-[6px_6px_0_0_#ccff00] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#ccff00]"
                >
                  DOWNLOAD — FREE
                </a>
                <a
                  href="#what"
                  className="border-2 border-[#111] bg-[#eeeeea] px-8 py-4 text-center font-mono text-sm font-bold tracking-wider transition-all hover:bg-[#ccff00]"
                >
                  WHAT IS THIS
                </a>
              </div>
            </div>

            {/* Stat stack */}
            <div className="grid grid-rows-3 divide-y-2 divide-[#111] border-t-2 border-[#111] lg:border-t-0">
              {[
                ["500", "NOTES FREE. THEN $8/MO."],
                ["1.2M", "LINKS DRAWN LAST WEEK"],
                ["0", "PROPRIETARY FILE FORMATS"],
              ].map(([stat, label]) => (
                <div
                  key={label}
                  className="flex flex-col justify-center px-5 py-10 sm:px-8"
                >
                  <p className="text-6xl font-black tracking-tighter tabular-nums sm:text-7xl">
                    {stat}
                  </p>
                  <p className="mt-2 font-mono text-[11px] tracking-wider">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-b-2 border-[#111] bg-[#111] py-3">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
              {marquee.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-6 px-6 font-mono text-[11px] font-bold tracking-[0.2em] whitespace-nowrap text-[#eeeeea]"
                >
                  {item}
                  <span className="text-[#ccff00]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Features grid */}
      <section id="what" className="border-b-2 border-[#111]">
        <div className="mx-auto max-w-7xl">
          <div className="grid divide-[#111] sm:grid-cols-2 sm:divide-x-2">
            {features.map((f, i) => (
              <div
                key={f.n}
                className={`group border-b-2 border-[#111] px-5 py-12 sm:px-8 ${
                  i >= features.length - 2 ? "sm:border-b-0" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[11px] font-bold tracking-wider">
                    [{f.n}]
                  </span>
                  <span
                    className={`grid size-10 shrink-0 place-items-center border-2 border-[#111] text-lg font-black transition-transform group-hover:rotate-12 ${f.fill}`}
                  >
                    ↗
                  </span>
                </div>
                <h3 className="mt-6 text-3xl leading-[0.95] font-black tracking-tight sm:text-4xl">
                  {f.title}
                </h3>
                <p className="mt-4 max-w-sm font-mono text-sm leading-relaxed text-[#111]/75">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How — offset boxes */}
      <section id="how" className="border-b-2 border-[#111] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-14 max-w-3xl text-4xl leading-[0.92] font-black tracking-[-0.03em] uppercase sm:text-6xl">
            Three steps.
            <br />
            Then never think
            <br />
            about it again.
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              [
                "WRITE",
                "Dump it in. Meeting notes, half-sentences, links, voice memos at a red light.",
              ],
              [
                "LOAM LINKS",
                "Mentions become connections. Related notes float up while you type.",
              ],
              [
                "ASK LATER",
                "Six months on, ask a question. Get an answer built from your own words.",
              ],
            ].map(([title, body], i) => (
              <div
                key={title}
                className="border-2 border-[#111] bg-white p-7 shadow-[8px_8px_0_0_#111]"
                style={{ marginTop: `${i * 1.75}rem` }}
              >
                <span className="font-mono text-[11px] font-bold tracking-wider">
                  STEP {i + 1}
                </span>
                <h3 className="mt-3 text-2xl font-black tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 font-mono text-sm leading-relaxed text-[#111]/75">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="price" className="bg-[#ccff00]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h2 className="text-[3rem] leading-[0.86] font-black tracking-[-0.045em] uppercase sm:text-[5rem]">
              Take the
              <br />
              mess
              <br />
              seriously.
            </h2>
            <form className="w-full">
              <label
                htmlFor="acid-email"
                className="mb-3 block font-mono text-[11px] font-bold tracking-wider"
              >
                EMAIL →
              </label>
              <input
                id="acid-email"
                type="email"
                required
                placeholder="YOU@WORK.COM"
                className="w-full border-2 border-[#111] bg-[#eeeeea] px-4 py-4 font-mono text-sm tracking-wider uppercase placeholder:text-[#111]/35 focus:bg-white focus:outline-none"
              />
              <button
                type="submit"
                className="mt-3 w-full border-2 border-[#111] bg-[#111] px-6 py-4 font-mono text-sm font-bold tracking-wider text-[#ccff00] transition hover:bg-[#2563eb] hover:text-white"
              >
                START FREE →
              </button>
              <p className="mt-3 font-mono text-[11px] tracking-wider text-[#111]/60">
                NO CARD. NO ONBOARDING CALL. NO NEWSLETTER.
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-[#111] bg-[#111] px-5 pt-8 pb-28 sm:px-8 sm:pb-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 font-mono text-[11px] tracking-wider text-[#eeeeea] sm:flex-row">
          <span>LOAM® 2026 — BUILT IN A SHED</span>
          <Link className="hover:text-[#ccff00]" href="/">
            [ALL DESIGNS]
          </Link>
        </div>
      </footer>
    </div>
  );
}
