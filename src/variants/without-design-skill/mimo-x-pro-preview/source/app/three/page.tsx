import "@/generated/scoped-variant-css/without-design-skill/mimo-x-pro-preview/source/app/three/page.css";
export default function ThreePage() {
  return (
    <div className="min-h-screen bg-[#F1F1EF] text-[#0A0A0A]">

      <div className="ix-page">
        <header className="border-b-2 border-[#0A0A0A]">
          <div className="mx-auto flex max-w-6xl items-stretch">
            <div className="flex flex-1 items-center justify-between px-5 py-4 md:px-8">
              <div className="display text-xl tracking-[-0.03em]">CORTEX</div>
              <div className="mono hidden text-[11px] uppercase tracking-[0.16em] text-[#5C5C58] sm:block">
                Knowledge, indexed
              </div>
            </div>
            <div className="flex items-center gap-0 border-l-2 border-[#0A0A0A]">
              <a
                href="#features"
                className="flex min-h-12 items-center border-r border-[#0A0A0A] px-4 text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors hover:bg-[#0A0A0A] hover:text-[#F1F1EF] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#FF4D00]"
              >
                Index
              </a>
              <a
                href="#cta"
                className="flex min-h-12 items-center bg-[#FF4D00] px-5 text-[12px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#0A0A0A] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0A0A0A]"
              >
                Get access
              </a>
            </div>
          </div>
        </header>

        <section className="border-b-2 border-[#0A0A0A]">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid gap-0 md:grid-cols-12">
              <div className="border-b-2 border-[#0A0A0A] py-10 md:col-span-8 md:border-b-0 md:border-r-2 md:py-16 md:pr-10">
                <p className="mono mb-6 text-[11px] uppercase tracking-[0.2em] text-[#FF4D00]">
                  00 / Manifest
                </p>
                <h1 className="display text-[clamp(3rem,8vw,6.5rem)] leading-[0.92]">
                  Knowledge,
                  <br />
                  indexed.
                </h1>
                <p className="mt-8 max-w-xl text-lg leading-8 text-[#2A2A28]">
                  Cortex is a second brain with Swiss discipline: capture every fragment,
                  force it into a system of relations, and retrieve it without ceremony.
                </p>
              </div>
              <div className="flex flex-col justify-between py-10 md:col-span-4 md:py-16 md:pl-8">
                <div className="space-y-6">
                  {[
                    ["01", "Atomic notes"],
                    ["02", "Hard links"],
                    ["03", "Plain query"],
                  ].map(([n, label]) => (
                    <div key={n} className="flex items-baseline gap-4 border-b border-[#0A0A0A]/20 pb-3">
                      <span className="display ix-num text-4xl text-[#FF4D00]">{n}</span>
                      <span className="text-sm font-semibold uppercase tracking-[0.1em]">{label}</span>
                    </div>
                  ))}
                </div>
                <p className="mono mt-8 text-[11px] leading-5 uppercase tracking-[0.14em] text-[#5C5C58]">
                  No folders.
                  <br />
                  No weekly cleanup.
                  <br />
                  Only structure that earns its place.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="border-b-2 border-[#0A0A0A]">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid md:grid-cols-3">
              {[
                {
                  n: "01",
                  title: "Capture",
                  body: "One hotkey. Mobile share. CLI pipe. The note exists before the thought cools.",
                },
                {
                  n: "02",
                  title: "Connect",
                  body: "Wikilinks and suggested neighbors. You decide what becomes permanent structure.",
                },
                {
                  n: "03",
                  title: "Compile",
                  body: "Ask in sentences. Get notes, the path between them, and the sources you kept.",
                },
              ].map((item, i) => (
                <article
                  key={item.n}
                  className={[
                    "relative px-5 py-10 md:px-8 md:py-14",
                    i < 2 ? "border-b-2 border-[#0A0A0A] md:border-b-0 md:border-r-2" : "",
                  ].join(" ")}
                >
                  <div className="ix-crosshair relative mb-8 inline-flex">
                    <span className="display ix-num text-[5.5rem] text-[#0A0A0A] md:text-[6.5rem]">
                      {item.n}
                    </span>
                  </div>
                  <h2 className="display mb-3 text-3xl">{item.title}</h2>
                  <p className="max-w-sm text-[15px] leading-7 text-[#2A2A28]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b-2 border-[#0A0A0A] bg-[#0A0A0A] text-[#F1F1EF]">
          <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
            <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">
              <div>
                <p className="mono mb-4 text-[11px] uppercase tracking-[0.2em] text-[#FF4D00]">
                  Operating principle
                </p>
                <h2 className="display text-4xl leading-tight md:text-5xl">
                  A second brain should feel like an instrument, not a closet.
                </h2>
              </div>
              <div className="grid gap-px bg-[#F1F1EF]/20 sm:grid-cols-2">
                {[
                  ["Local-first", "Your vault is files on disk."],
                  ["Markdown out", "No proprietary dead ends."],
                  ["Speed budget", "Open and type in under a second."],
                  ["Quiet by default", "No streaks. No gamification."],
                ].map(([t, b]) => (
                  <div key={t} className="bg-[#0A0A0A] p-5">
                    <div className="mono mb-2 text-[11px] uppercase tracking-[0.14em] text-[#FF4D00]">
                      {t}
                    </div>
                    <div className="text-sm leading-6 text-[#F1F1EF]/85">{b}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="border-b-2 border-[#0A0A0A]">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-8 md:py-20">
            <div>
              <p className="mono mb-4 text-[11px] uppercase tracking-[0.2em] text-[#FF4D00]">Access</p>
              <h2 className="display max-w-2xl text-5xl leading-[0.95] md:text-6xl">
                Stop collecting.
                <br />
                Start compiling.
              </h2>
            </div>
            <a
              href="#cta"
              className="inline-flex min-h-14 items-center justify-center border-2 border-[#0A0A0A] bg-[#FF4D00] px-8 text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#0A0A0A] hover:text-[#F1F1EF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4D00]"
            >
              Request invite
            </a>
          </div>
        </section>

        <footer>
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-[11px] uppercase tracking-[0.14em] text-[#5C5C58] md:px-8">
            <span className="mono">Cortex · Iteration 03 · Index</span>
            <span className="mono">System over sentiment</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
