import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Engram — 02 · Plain text",
  description:
    "Your mind, in plain text. Markdown files that outlive every app you'll ever install.",
};

function SectionHead({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-bold tracking-[0.14em] text-[#E8A33D]">
      {children}
    </h2>
  );
}

function ManRow({ children }: { children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-[#3A2D1E] py-10 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-10">
      {children}
    </section>
  );
}

export default function PlainText() {
  return (
    <div
      className={`${mono.className} flex-1 bg-[#1A120C] text-[#EDE4D6] selection:bg-[#E8A33D] selection:text-[#1A120C]`}
    >
      {/* ————— man page header ————— */}
      <header className="border-b border-[#3A2D1E]">
        <div className="mx-auto flex max-w-4xl items-baseline justify-between px-6 py-4 text-[13px] text-[#9A8B78]">
          <span className="font-bold text-[#EDE4D6]">ENGRAM(1)</span>
          <span className="hidden sm:inline">User Commands</span>
          <span className="font-bold text-[#EDE4D6]">ENGRAM(1)</span>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 pb-28">
        {/* ————— name ————— */}
        <ManRow>
          <SectionHead>NAME</SectionHead>
          <p className="text-[15px] leading-7">
            <span className="font-bold">engram</span> — a second brain that
            keeps plain text
          </p>
        </ManRow>

        {/* ————— hero file ————— */}
        <div className="mt-4 overflow-hidden rounded-md border border-[#3A2D1E] bg-[#221810] shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between border-b border-[#3A2D1E] px-4 py-2.5 text-[12px] text-[#9A8B78]">
            <span>~/engram/notes/on-forgetting.md</span>
            <span aria-hidden="true">· · ·</span>
          </div>
          <div className="px-5 py-6 text-[13.5px] leading-7 sm:px-7 sm:py-8 sm:text-[15px] sm:leading-8">
            <p className="text-[#E8A33D]"># your mind, in plain text</p>
            <p className="mt-4 text-[#EDE4D6]">
              every app you loved has died.
              <br />
              your notes didn&rsquo;t have to.
            </p>
            <p className="mt-4 text-[#9A8B78]">
              - local markdown files
              <br />- [[links]] that never rot
              <br />- sync that gets out of the way
            </p>
            <p className="mt-6 text-[#EDE4D6]">
              <span className="text-[#E8A33D]">$</span> engram open
              &quot;that idea from march&quot;
              <span
                aria-hidden="true"
                className="ml-1 inline-block h-[1.1em] w-[0.55em] translate-y-[0.2em] bg-[#E8A33D] motion-safe:animate-pulse"
              />
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#install"
            className="rounded-sm bg-[#E8A33D] px-5 py-3 text-[14px] font-bold text-[#1A120C] transition-colors hover:bg-[#F2B85C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A33D]"
          >
            $ brew install engram
          </a>
          <a
            href="#description"
            className="rounded-sm border border-[#3A2D1E] px-5 py-3 text-[14px] text-[#EDE4D6] transition-colors hover:border-[#E8A33D] hover:text-[#E8A33D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A33D]"
          >
            $ man engram
          </a>
        </div>

        {/* ————— synopsis ————— */}
        <ManRow>
          <SectionHead>SYNOPSIS</SectionHead>
          <div className="text-[14px] leading-8 text-[#EDE4D6]">
            <p>
              <span className="font-bold">engram capture</span>{" "}
              <span className="text-[#9A8B78]">[--fast] [--voice]</span>
            </p>
            <p>
              <span className="font-bold">engram link</span>{" "}
              <span className="italic text-[#9A8B78]">note</span>{" "}
              <span className="italic text-[#9A8B78]">note</span>
            </p>
            <p>
              <span className="font-bold">engram resurface</span>{" "}
              <span className="text-[#9A8B78]">[--while-writing]</span>
            </p>
          </div>
        </ManRow>

        {/* ————— description ————— */}
        <ManRow>
          <SectionHead>DESCRIPTION</SectionHead>
          <div className="max-w-[62ch] text-[14px] leading-8 text-[#EDE4D6]">
            <p id="description">
              Engram stores every note as a plain markdown file in{" "}
              <span className="text-[#E8A33D]">~/engram</span>. No database. No
              export wizard. If Engram disappeared tomorrow, you would still
              have everything — open the folder in any editor, on any machine,
              in any decade.
            </p>
            <p className="mt-6">
              It opens like a thought: instant. It links like memory:{" "}
              <span className="text-[#E8A33D]">[[by association]]</span>. And it
              resurfaces like a good librarian — while you are writing, not
              after you have forgotten.
            </p>
          </div>
        </ManRow>

        {/* ————— options ————— */}
        <ManRow>
          <SectionHead>OPTIONS</SectionHead>
          <dl className="max-w-[62ch] space-y-6 text-[14px] leading-8">
            <div>
              <dt className="font-bold text-[#EDE4D6]">--capture</dt>
              <dd className="pl-6 text-[#9A8B78]">
                Inbox at the speed of thought. A line, a link, a voice memo —
                held unjudged until you are ready.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-[#EDE4D6]">--link</dt>
              <dd className="pl-6 text-[#9A8B78]">
                Wikilinks between notes. Engram proposes the connections; you
                decide which ones mean something.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-[#EDE4D6]">--resurface</dt>
              <dd className="pl-6 text-[#9A8B78]">
                Old notes return where you are working. Spaced repetition, but
                for ideas instead of flashcards.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-[#EDE4D6]">--sync</dt>
              <dd className="pl-6 text-[#9A8B78]">
                End-to-end encrypted. The server stores ciphertext it cannot
                read; the folder on disk is the truth.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-[#EDE4D6]">--export</dt>
              <dd className="pl-6 text-[#9A8B78]">
                You will never need this flag. That is the point.
              </dd>
            </div>
          </dl>
        </ManRow>

        {/* ————— files ————— */}
        <ManRow>
          <SectionHead>FILES</SectionHead>
          <div className="text-[14px] leading-8">
            <p>
              <span className="text-[#E8A33D]">~/engram/inbox/</span>
              <span className="ml-6 text-[#9A8B78]">
                where fragments land first
              </span>
            </p>
            <p>
              <span className="text-[#E8A33D]">~/engram/notes/</span>
              <span className="ml-6 text-[#9A8B78]">
                the permanent collection
              </span>
            </p>
            <p>
              <span className="text-[#E8A33D]">~/engram/.graph</span>
              <span className="ml-6 text-[#9A8B78]">
                every link, cached — rebuilt from your files any time
              </span>
            </p>
          </div>
        </ManRow>

        {/* ————— stats output ————— */}
        <ManRow>
          <SectionHead>OUTPUT</SectionHead>
          <div className="overflow-hidden rounded-md border border-[#3A2D1E] bg-[#221810]">
            <div className="px-5 py-5 text-[13.5px] leading-8 sm:text-[14.5px]">
              <p>
                <span className="text-[#E8A33D]">$</span> engram stats
              </p>
              <p className="text-[#9A8B78]">
                12,483 notes · 31,902 links · 0 proprietary formats · lock-in:
                none found
              </p>
              <p className="mt-3">
                <span className="text-[#E8A33D]">$</span> engram resurface
                --while-writing
              </p>
              <p className="text-[#9A8B78]">
                found: notes/on-forgetting.md (dormant 41 days) — relevant to
                current draft
              </p>
            </div>
          </div>
        </ManRow>

        {/* ————— bugs ————— */}
        <ManRow>
          <SectionHead>BUGS</SectionHead>
          <p className="max-w-[62ch] text-[14px] leading-8 text-[#EDE4D6]">
            None filed. Your memory, however, remains lossy — which is why this
            page exists.
          </p>
        </ManRow>

        {/* ————— see also ————— */}
        <ManRow>
          <SectionHead>SEE ALSO</SectionHead>
          <p className="text-[14px] leading-8 text-[#9A8B78]">
            zettel(1), markdown(7), attention(2), thinking(1)
          </p>
        </ManRow>

        {/* ————— install cta ————— */}
        <div
          id="install"
          className="mt-14 overflow-hidden rounded-md border border-[#E8A33D]/60"
        >
          <div className="bg-[#E8A33D] px-6 py-8 text-[#1A120C] sm:px-10 sm:py-10">
            <p className="text-[13px] font-bold tracking-[0.14em]">INSTALL</p>
            <p className="mt-4 text-[22px] font-bold leading-snug sm:text-[28px]">
              $ engram new &quot;start&quot;
            </p>
            <p className="mt-3 max-w-[52ch] text-[14px] leading-7 text-[#1A120C]/80">
              Free for the first thousand notes. macOS, Linux, Windows, iOS —
              and anything that can open a text file.
            </p>
          </div>
        </div>
      </main>

      {/* ————— man page footer ————— */}
      <footer className="border-t border-[#3A2D1E]">
        <div className="mx-auto flex max-w-4xl flex-wrap items-baseline justify-between gap-3 px-6 py-5 text-[12px] text-[#9A8B78]">
          <span>Engram 2.4.1</span>
          <span>September 2026</span>
          <span>ENGRAM(1)</span>
        </div>
      </footer>
    </div>
  );
}
