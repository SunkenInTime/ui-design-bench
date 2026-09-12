import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cairn / Xerox",
  description: "Risograph zine landing direction for Cairn.",
};

export default function XeroxPage() {
  return (
    <div className="min-h-screen bg-[#D9D6CE] text-[#0B0B0B]">

      <div className="overflow-hidden border-b-4 border-[#0B0B0B] bg-[#0B0B0B] py-2 text-[#D9D6CE]">
        <div className="cairn-ticker flex w-max gap-10 font-[family-name:var(--font-space-mono)] text-xs whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-10">
              <span>CAIRN // YOUR HEAD, FILED</span>
              <span>NO FOLDERS WERE HARMED</span>
              <span>LINK IT OR LOSE IT</span>
              <span>SECOND BRAIN WITHOUT THE GURU ENERGY</span>
              <span>LOCAL-FIRST · MARKDOWN · FAST</span>
              <span>PRINT THIS PAGE IF YOU MUST</span>
            </span>
          ))}
        </div>
      </div>

      <header className="border-b-2 border-[#0B0B0B]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 items-center bg-[#0B0B0B] px-2 font-[family-name:var(--font-archivo-black)] text-sm text-[#D9D6CE]">
              CAIRN
            </span>
            <span className="font-[family-name:var(--font-space-mono)] text-[11px]">
              ISSUE 01
            </span>
          </div>
          <a
            href="#"
            className="inline-flex h-8 items-center border-2 border-[#0B0B0B] bg-[#FF4B12] px-3 font-[family-name:var(--font-space-mono)] text-xs font-bold hover:bg-[#0B0B0B] hover:text-[#FF4B12]"
          >
            GET IT FREE
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6">
        <section className="relative border-x-2 border-b-2 border-[#0B0B0B] px-4 py-10 sm:px-8 sm:py-14">
          <span
            className="absolute -top-4 right-4 rotate-[-6deg] border-2 border-[#0B0B0B] bg-[#FF4B12] px-3 py-1 font-[family-name:var(--font-space-mono)] text-[11px] font-bold sm:right-8"
            style={{ boxShadow: "4px 4px 0 #0B0B0B" }}
          >
            DROP YOUR FOLDERS
          </span>

          <p className="font-[family-name:var(--font-space-mono)] text-xs font-bold tracking-wide">
            A NOTE APP FOR PEOPLE WHO HATE NOTE APPS
          </p>

          <h1 className="mt-4 font-[family-name:var(--font-archivo-black)] text-[13vw] leading-[0.88] tracking-tight uppercase sm:text-[4.75rem] lg:text-[5.75rem]">
            Your brain
            <br />
            is not a
            <br />
            <span className="bg-[#1B3BFF] px-2 text-[#D9D6CE]">filing</span>
            <br />
            cabinet.
          </h1>

          <p className="mt-8 max-w-lg border-l-4 border-[#0B0B0B] pl-4 font-[family-name:var(--font-space-mono)] text-sm leading-relaxed sm:text-base">
            Cairn is a fast, ugly-honest second brain: capture in plain text,
            link what matters, search that doesn’t suck. No AI that lectures you.
            No onboarding quest. Just your words, stacked.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex h-12 items-center border-2 border-[#0B0B0B] bg-[#0B0B0B] px-5 font-[family-name:var(--font-archivo-black)] text-sm text-[#D9D6CE]"
              style={{ boxShadow: "4px 4px 0 #FF4B12" }}
            >
              START THE VAULT
            </a>
            <a
              href="#guts"
              className="inline-flex h-12 items-center border-2 border-[#0B0B0B] px-5 font-[family-name:var(--font-space-mono)] text-sm font-bold hover:bg-[#0B0B0B] hover:text-[#D9D6CE]"
            >
              READ THE GUTS
            </a>
          </div>
        </section>

        <section id="guts" className="grid gap-0 sm:grid-cols-3">
          {[
            {
              k: "01",
              h: "CAPTURE",
              p: "Hotkey. Type. Done. Voice notes land as text you can actually search later.",
            },
            {
              k: "02",
              h: "LINK",
              p: "Double-bracket links, backlinks, and a graph that isn’t decorative nonsense.",
            },
            {
              k: "03",
              h: "FIND",
              p: "Search that ranks what you meant, not just what you typed in 2021.",
            },
          ].map((b, i) => (
            <article
              key={b.k}
              className={`border-2 border-t-0 border-[#0B0B0B] p-5 sm:border-l-2 ${
                i === 0 ? "sm:border-l-2" : ""
              } ${i > 0 ? "sm:border-l-2" : ""}`}
            >
              <p className="font-[family-name:var(--font-space-mono)] text-[11px] font-bold">
                {b.k} / {b.h}
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-archivo-black)] text-2xl leading-none">
                {b.h}
              </h2>
              <p className="mt-3 font-[family-name:var(--font-space-mono)] text-sm leading-relaxed">
                {b.p}
              </p>
            </article>
          ))}
        </section>

        <section className="border-2 border-t-0 border-[#0B0B0B] bg-[#0B0B0B] px-4 py-12 text-[#D9D6CE] sm:px-8">
          <div className="grid gap-8 sm:grid-cols-2 sm:items-end">
            <div>
              <p className="font-[family-name:var(--font-space-mono)] text-xs text-[#FF4B12]">
                MANIFESTO (ABRIDGED)
              </p>
              <p className="mt-4 font-[family-name:var(--font-archivo-black)] text-3xl leading-tight sm:text-4xl">
                Tools should get out of the way. Ideas should get in.
              </p>
            </div>
            <ul className="space-y-2 font-[family-name:var(--font-space-mono)] text-sm">
              <li>{"// plain markdown files on your disk"}</li>
              <li>{"// keyboard-first, mouse optional"}</li>
              <li>{"// offline by default, sync optional"}</li>
              <li>{"// no engagement metrics on your own notes"}</li>
            </ul>
          </div>
          <a
            href="#"
            className="mt-10 inline-flex h-12 items-center border-2 border-[#D9D6CE] bg-[#FF4B12] px-5 font-[family-name:var(--font-archivo-black)] text-sm text-[#0B0B0B]"
          >
            TAKE THE KEYS
          </a>
        </section>
      </main>

      <footer className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <p className="font-[family-name:var(--font-space-mono)] text-[11px]">
          CAIRN © 2026 · ZINE COPY · NOT FOR RESALE · PASS IT ON
        </p>
      </footer>
    </div>
  );
}
