import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loci — Terminal",
  description: "Loci as an operable system for capture, links, and recall.",
};

export default function TerminalPage() {
  return (
    <div className="min-h-screen bg-[#0B0F0C] text-[#C6F6C6] [color-scheme:dark]">
      <header className="border-b border-[#1F2E1F]">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4 font-mono text-sm">
          <span className="text-[#3DFF7A]">loci</span>
          <span className="text-[#6B8F6B]">session://second-brain</span>
          <a
            href="#run"
            className="rounded-sm border border-[#3DFF7A]/40 px-3 py-1.5 text-[#3DFF7A] transition-colors hover:bg-[#3DFF7A]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3DFF7A]"
          >
            start --free
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-10 font-mono text-[15px] leading-relaxed">
        <p className="text-[#6B8F6B]">$ loci --open second-brain</p>
        <p className="mt-1 text-[#6B8F6B]">
          ready. 0 rooms. 0 links. waiting for input_
        </p>
        <span aria-hidden className="ml-0.5 inline-block h-[1.05em] w-[0.55em] translate-y-[0.15em] bg-[#3DFF7A] motion-safe:animate-pulse" />

        <div className="mt-12 border-t border-[#1F2E1F] pt-10">
          <p className="text-[#3DFF7A]"># thesis</p>
          <h1 className="mt-4 text-3xl leading-tight text-[#E8FFE8] sm:text-4xl md:text-5xl">
            Your notes are a system.
            <br />
            Operate it.
          </h1>
          <p className="mt-6 max-w-2xl text-[#9BCF9B]">
            Loci is a second brain with terminal clarity: capture streams,
            links are first-class paths, and recall is a query—not a scroll
            hunt through yesterday’s mess.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <a
              id="run"
              href="#ops"
              className="border border-[#3DFF7A] bg-[#3DFF7A]/10 px-4 py-2 text-[#3DFF7A] transition-colors hover:bg-[#3DFF7A]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3DFF7A]"
            >
              $ loci init
            </a>
            <span className="px-2 py-2 text-[#6B8F6B]">
              local-first · plain-text export · no telemetry by default
            </span>
          </div>
        </div>

        <section id="ops" className="mt-16 border-t border-[#1F2E1F] pt-10">
          <p className="text-[#3DFF7A]"># operations</p>
          <div className="mt-6 space-y-0">
            {[
              {
                cmd: "loci capture",
                desc: "Stream a thought before it evaporates. Markdown in, structure optional.",
                out: "[ok] wrote room/inbox/2026-02-14T09:12.md",
              },
              {
                cmd: "loci link",
                desc: "Point notes at each other. Backlinks are automatic; forward intent is yours.",
                out: "[ok] 3 paths updated · graph delta +2 edges",
              },
              {
                cmd: "loci recall",
                desc: "Query by phrase, room, or time. Get the note and the corridor that led there.",
                out: "[ok] 1 direct hit · 4 adjacent rooms",
              },
            ].map((row, i) => (
              <article
                key={row.cmd}
                className="grid gap-3 border-b border-[#1F2E1F] py-6 md:grid-cols-[1fr_1.4fr]"
              >
                <div>
                  <p className="text-[#F0C674]">
                    0{i + 1} {row.cmd}
                  </p>
                  <p className="mt-2 text-[#9BCF9B]">{row.desc}</p>
                </div>
                <pre className="overflow-x-auto border border-[#1F2E1F] bg-[#111811] p-4 text-xs text-[#3DFF7A]">
                  <code>{row.out}</code>
                </pre>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-[#1F2E1F] pt-10">
          <p className="text-[#3DFF7A]"># features --list</p>
          <div className="mt-6 grid gap-px bg-[#1F2E1F] sm:grid-cols-2">
            {[
              ["stream inbox", "One key to empty your head. Sort later."],
              ["path graph", "Bidirectional links without the ceremony."],
              ["room search", "Find by place and phrase together."],
              ["offline core", "Works on a plane. Syncs when you land."],
            ].map(([title, body]) => (
              <div key={title} className="bg-[#0B0F0C] p-5">
                <p className="text-[#3DFF7A]">▸ {title}</p>
                <p className="mt-2 text-sm text-[#9BCF9B]">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-[#1F2E1F] pt-10 pb-8">
          <p className="text-[#3DFF7A]"># close</p>
          <h2 className="mt-4 text-2xl text-[#E8FFE8] sm:text-3xl">
            Initialize a room. Leave it imperfect.
          </h2>
          <p className="mt-4 text-[#9BCF9B]">
            A second brain that only works when you are organized is not a
            second brain—it is homework.
          </p>
          <a
            href="#run"
            className="mt-8 inline-block border border-[#3DFF7A] px-5 py-3 text-[#3DFF7A] transition-colors hover:bg-[#3DFF7A]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3DFF7A]"
          >
            $ loci start
          </a>
        </section>
      </main>

      <footer className="border-t border-[#1F2E1F]">
        <div className="mx-auto flex max-w-4xl flex-col gap-2 px-5 py-6 text-xs text-[#6B8F6B] sm:flex-row sm:justify-between">
          <p>loci · second-brain runtime</p>
          <p>iteration 02 — terminal</p>
        </div>
      </footer>
    </div>
  );
}
