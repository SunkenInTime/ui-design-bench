import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mneme — Studio",
  description: "Write it down. Find it later. Watch it grow.",
};

export default function StudioPage() {
  return (
    <div className="min-h-full bg-[#f6f3ee] text-[#1f241f] selection:bg-[#3d6b5a] selection:text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <Link
          href="/without-design-skill/gemini-3.7-flash/4"
          className="flex items-center gap-2 text-[17px] font-medium tracking-tight"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#3d6b5a] text-sm text-white">
            M
          </span>
          Mneme
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-[#1f241f]/60 sm:flex">
          <a href="#product" className="hover:text-[#1f241f]">
            Product
          </a>
          <a href="#why" className="hover:text-[#1f241f]">
            Why Mneme
          </a>
          <a
            href="#start"
            className="rounded-full bg-[#1f241f] px-4 py-2 text-white hover:bg-black"
          >
            Start free
          </a>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 pb-8 pt-10 text-center sm:px-10 sm:pt-16">
          <p className="text-sm tracking-wide text-[#3d6b5a]">
            A second brain, without the mess
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.05] font-medium tracking-[-0.04em]">
            Write it down.{" "}
            <span className="font-serif italic text-[#3d6b5a]">Find it later.</span>{" "}
            Watch it grow.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#1f241f]/65">
            Mneme captures fleeting notes, weaves them into a living graph, and
            hands the right thought back when you need it — quietly, privately,
            on your machine.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              id="start"
              href="#start"
              className="rounded-full bg-[#3d6b5a] px-6 py-3 text-sm font-medium text-white shadow-[0_12px_30px_rgba(61,107,90,0.28)]"
            >
              Start writing — it&apos;s free
            </a>
            <a
              href="#product"
              className="rounded-full border border-[#1f241f]/10 bg-white px-6 py-3 text-sm text-[#1f241f]/70"
            >
              See the notebook
            </a>
          </div>
        </section>

        <section id="product" className="mx-auto max-w-5xl px-6 pb-20 sm:px-10">
          <NotebookMock />
        </section>

        <section id="why" className="mx-auto max-w-6xl px-6 pb-24 sm:px-10">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Inbox for the day",
                body: "Dump the thought before it vanishes. Sort never, or tonight — Mneme does not scold you.",
              },
              {
                title: "Links that reach back",
                body: "Write [[deep work]] once. Every related note lights up, including the ones you forgot existed.",
              },
              {
                title: "Search that listens",
                body: "Ask for “the thing about leftover attention.” Mneme knows the note, even if you didn’t.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-3xl bg-white p-7 shadow-[0_10px_40px_rgba(40,50,40,0.05)] ring-1 ring-black/5"
              >
                <h2 className="text-lg font-medium">{item.title}</h2>
                <p className="mt-3 leading-7 text-[#1f241f]/60">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-14 text-center text-sm text-[#1f241f]/45">
            Used by researchers, novelists, and people who think at 1 a.m.
          </p>
        </section>
      </main>
    </div>
  );
}

function NotebookMock() {
  const notes = [
    { name: "Inbox", active: false },
    { name: "Daily · 12 Aug", active: false },
    { name: "Attention residue", active: true },
    { name: "Deep work", active: false },
    { name: "Walking notes", active: false },
    { name: "Cal Newport", active: false },
  ];

  return (
    <div className="overflow-hidden rounded-[28px] bg-[#1f241f] p-2 shadow-[0_40px_80px_rgba(40,50,40,0.18)] ring-1 ring-black/10">
      <div className="overflow-hidden rounded-[22px] bg-[#fbfaf7]">
        <div className="flex items-center gap-2 border-b border-black/5 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e8b4a2]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ead889]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#b7d3c4]" />
          <p className="ml-3 text-xs tracking-wide text-black/35">
            Mneme — private notebook
          </p>
        </div>
        <div className="grid min-h-[420px] md:grid-cols-[220px_minmax(0,1fr)_200px]">
          <aside className="border-b border-black/5 bg-[#f3efe8] p-4 md:border-r md:border-b-0">
            <p className="text-[11px] tracking-[0.16em] text-black/35 uppercase">
              Notes
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              {notes.map((note) => (
                <li
                  key={note.name}
                  className={
                    note.active
                      ? "rounded-xl bg-white px-3 py-2 font-medium shadow-sm"
                      : "rounded-xl px-3 py-2 text-black/55"
                  }
                >
                  {note.name}
                </li>
              ))}
            </ul>
          </aside>
          <article className="p-6 sm:p-8">
            <p className="text-xs text-black/35">12 August · evergreen</p>
            <h2 className="mt-2 font-serif text-3xl italic">Attention residue</h2>
            <p className="mt-5 leading-8 text-[#1f241f]/80">
              Every unfinished task leaves a film on the next one. Put the
              leftover thought in the inbox and the hour becomes usable again.
            </p>
            <p className="mt-4 leading-8 text-[#1f241f]/80">
              See also{" "}
              <span className="rounded-md bg-[#e7f0eb] px-1.5 py-0.5 text-[#3d6b5a]">
                [[Deep work]]
              </span>{" "}
              and{" "}
              <span className="rounded-md bg-[#e7f0eb] px-1.5 py-0.5 text-[#3d6b5a]">
                [[Cal Newport]]
              </span>
              .
            </p>
          </article>
          <aside className="hidden border-l border-black/5 bg-[#fbfaf7] p-4 md:block">
            <p className="text-[11px] tracking-[0.16em] text-black/35 uppercase">
              Linked
            </p>
            <ul className="mt-3 space-y-3 text-sm text-black/60">
              <li>Deep work</li>
              <li>Walking notes</li>
              <li>Daily · 11 Aug</li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
