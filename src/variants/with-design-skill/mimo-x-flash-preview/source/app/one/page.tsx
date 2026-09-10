import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cairn / Accession",
  description: "Museum-catalog landing direction for Cairn.",
};

const specimens = [
  {
    id: "C.2026.014",
    title: "Why linked notes beat folders",
    meta: "Essay · 12 min · Linked to 7",
  },
  {
    id: "C.2026.021",
    title: "Interview — spatial memory",
    meta: "Field note · Audio · Tagged research",
  },
  {
    id: "C.2026.033",
    title: "Morning pages, week 9",
    meta: "Daily · Private · Pinned",
  },
];

export default function AccessionPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#111111]">

      <header className="border-b border-[#111111]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <div className="flex items-baseline gap-3">
            <span className="font-[family-name:var(--font-archivo)] text-sm font-semibold tracking-tight">
              Cairn
            </span>
            <span className="font-[family-name:var(--font-plex-mono)] text-[11px] text-[#8A8A84]">
              Second brain · Est. 2026
            </span>
          </div>
          <a
            href="#start"
            className="font-[family-name:var(--font-archivo)] text-sm font-medium underline decoration-[#1F3BFF] decoration-2 underline-offset-4 hover:text-[#1F3BFF]"
          >
            Start free
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-5 pt-14 pb-16 sm:px-8 sm:pt-20 lg:grid-cols-12 lg:gap-8 lg:pt-24">
          <div className="lg:col-span-7">
            <p className="font-[family-name:var(--font-plex-mono)] text-[11px] tracking-wide text-[#8A8A84]">
              Exhibition 01 · Permanent collection
            </p>
            <h1 className="mt-5 font-[family-name:var(--font-instrument)] text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-[5.25rem]">
              A second brain
              <br />
              with room labels
              <br />
              for every thought.
            </h1>
            <p className="mt-7 max-w-[36rem] font-[family-name:var(--font-archivo)] text-base leading-relaxed text-[#3A3A36] sm:text-lg">
              Cairn keeps the notes you take, the links you make, and the paths
              you walk through your own mind — catalogued so you can find them
              again years later.
            </p>
            <div id="start" className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="inline-flex h-11 items-center bg-[#1F3BFF] px-5 font-[family-name:var(--font-archivo)] text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Create your first cairn
              </a>
              <a
                href="#specimens"
                className="inline-flex h-11 items-center border border-[#111111]/20 px-5 font-[family-name:var(--font-archivo)] text-sm font-medium hover:border-[#111111]"
              >
                View specimens
              </a>
            </div>
          </div>

          <aside className="lg:col-span-5 lg:pl-8">
            <div className="border border-[#111111] bg-white p-6">
              <p className="font-[family-name:var(--font-plex-mono)] text-[11px] text-[#8A8A84]">
                Wall text
              </p>
              <p className="mt-4 font-[family-name:var(--font-instrument)] text-2xl leading-snug italic">
                “Most apps bury your thinking in folders. Cairn mounts it.”
              </p>
              <p className="mt-6 font-[family-name:var(--font-archivo)] text-sm text-[#3A3A36]">
                Capture without ceremony. Link without friction. Return without
                search anxiety.
              </p>
              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-[#111]/10 pt-5">
                {[
                  ["Objects", "12.4k"],
                  ["Links", "48k"],
                  ["Recall", "2.1s"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-[family-name:var(--font-plex-mono)] text-[10px] text-[#8A8A84]">
                      {k}
                    </dt>
                    <dd className="mt-1 font-[family-name:var(--font-archivo)] text-lg font-medium">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </section>

        <section
          id="specimens"
          className="border-t border-[#111111] bg-white"
        >
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#111]/15 pb-4">
              <h2 className="font-[family-name:var(--font-archivo)] text-sm font-semibold tracking-tight">
                On view
              </h2>
              <p className="font-[family-name:var(--font-plex-mono)] text-[11px] text-[#8A8A84]">
                Sample objects from a working vault
              </p>
            </div>
            <ul className="mt-0 divide-y divide-[#111]/10">
              {specimens.map((s) => (
                <li
                  key={s.id}
                  className="grid gap-2 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-4"
                >
                  <span className="font-[family-name:var(--font-plex-mono)] text-[11px] text-[#1F3BFF] sm:col-span-2">
                    {s.id}
                  </span>
                  <h3 className="font-[family-name:var(--font-instrument)] text-2xl leading-tight sm:col-span-6">
                    {s.title}
                  </h3>
                  <p className="font-[family-name:var(--font-archivo)] text-sm text-[#8A8A84] sm:col-span-4 sm:text-right">
                    {s.meta}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-[#111111]">
          <div className="mx-auto grid max-w-6xl gap-0 px-5 sm:grid-cols-3 sm:px-8">
            {[
              {
                n: "01",
                h: "Capture",
                p: "One keystroke from anywhere. Text, voice, links — filed with the date you actually thought it.",
              },
              {
                n: "02",
                h: "Connect",
                p: "Bi-directional links surface the note you forgot you wrote, while you write the new one.",
              },
              {
                n: "03",
                h: "Curate",
                p: "Collections, tags, and light structure when you need it — open field when you don’t.",
              },
            ].map((item, i) => (
              <div
                key={item.n}
                className={`py-10 sm:px-6 ${
                  i > 0 ? "border-t border-[#111]/10 sm:border-t-0 sm:border-l" : ""
                }`}
              >
                <p className="font-[family-name:var(--font-plex-mono)] text-[11px] text-[#1F3BFF]">
                  {item.n}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-archivo)] text-lg font-semibold">
                  {item.h}
                </h3>
                <p className="mt-2 max-w-xs font-[family-name:var(--font-archivo)] text-sm leading-relaxed text-[#3A3A36]">
                  {item.p}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#111111] bg-[#111111] text-[#F7F7F5]">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 sm:px-8 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="max-w-xl font-[family-name:var(--font-instrument)] text-3xl leading-tight sm:text-4xl">
              Open the collection. Your notes are already waiting.
            </h2>
            <a
              href="#"
              className="inline-flex h-11 shrink-0 items-center bg-[#1F3BFF] px-5 font-[family-name:var(--font-archivo)] text-sm font-medium text-white hover:opacity-90"
            >
              Start free
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
