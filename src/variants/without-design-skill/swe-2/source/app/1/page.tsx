import type { Metadata } from "next";
import { IBM_Plex_Mono, Newsreader } from "next/font/google";

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Engram — 01 · Slip-box",
  description:
    "A slip-box for everything you think. Ruled cards, pencil red, and the folgezettel numbers behind seventy books.",
};

const RULED = {
  backgroundImage:
    "repeating-linear-gradient(transparent, transparent 33px, #E9E7DD 34px)",
};

function CardRef({ id }: { id: string }) {
  return (
    <span className={`${mono.className} text-[#B5341F]`}>{id}</span>
  );
}

function IndexCard({
  id,
  tag,
  title,
  children,
  seeAlso,
  className = "",
}: {
  id: string;
  tag?: string;
  title: string;
  children: React.ReactNode;
  seeAlso?: string[];
  className?: string;
}) {
  return (
    <article
      className={`rounded-[3px] border border-[#E2E0D6] bg-[#FDFDFB] shadow-[0_1px_0_#E2E0D6,0_18px_40px_-28px_rgba(32,32,43,0.45)] ${className}`}
    >
      <div
        className={`${mono.className} flex items-baseline justify-between border-b border-[#E2E0D6] px-5 py-2.5 text-xs`}
      >
        <span className="font-medium text-[#B5341F]">{id}</span>
        {tag && <span className="text-[#8B8A7C]">{tag}</span>}
      </div>
      <div className="px-6 pt-4 pb-5" style={RULED}>
        <h3 className="text-[22px] leading-[34px] font-medium">{title}</h3>
        <div className="mt-1 text-[16.5px] leading-[34px] text-[#3A3A48]">
          {children}
        </div>
      </div>
      {seeAlso && (
        <div
          className={`${mono.className} flex flex-wrap items-baseline gap-x-2 border-t border-[#E2E0D6] px-5 py-2.5 text-xs text-[#8B8A7C]`}
        >
          <span>see also:</span>
          {seeAlso.map((ref) => (
            <a
              key={ref}
              href="#wall"
              className="text-[#2B4C9B] underline decoration-[#C8C5B6] underline-offset-4 hover:decoration-[#2B4C9B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B4C9B]"
            >
              {ref}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

function MarginNote({
  forId,
  children,
  className = "",
}: {
  forId?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${mono.className} border-t border-[#D8D6CB] pt-2 text-[11.5px] leading-5 text-[#8B8A7C] ${className}`}
    >
      {forId && (
        <span className="mb-1 block font-medium text-[#B5341F]">{forId}</span>
      )}
      {children}
    </div>
  );
}

export default function SlipBox() {
  return (
    <div
      className={`${serif.className} flex-1 bg-[#F6F5F0] text-[#20202B] selection:bg-[#B5341F] selection:text-[#F6F5F0]`}
    >
      {/* ————— header ————— */}
      <header className="border-b border-[#E2E0D6]">
        <div className="mx-auto flex max-w-6xl items-baseline justify-between px-6 py-5">
          <div className="flex items-baseline gap-4">
            <span
              className={`${mono.className} text-sm font-medium tracking-[0.18em]`}
            >
              ENGRAM
            </span>
            <span className="hidden italic text-[#6D6C60] sm:inline">
              a slip-box for everything you think
            </span>
          </div>
          <nav className="flex items-baseline gap-6 text-[15px]">
            <a
              href="#method"
              className="hidden text-[#6D6C60] underline decoration-[#D8D6CB] underline-offset-4 transition-colors hover:text-[#20202B] hover:decoration-[#20202B] sm:inline"
            >
              The method
            </a>
            <a
              href="#wall"
              className="hidden text-[#6D6C60] underline decoration-[#D8D6CB] underline-offset-4 transition-colors hover:text-[#20202B] hover:decoration-[#20202B] sm:inline"
            >
              The cards
            </a>
            <a
              href="#start"
              className="rounded-[3px] border border-[#20202B] bg-[#20202B] px-3.5 py-1.5 text-[#F6F5F0] transition-colors hover:bg-transparent hover:text-[#20202B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20202B]"
            >
              Start your box
            </a>
          </nav>
        </div>
      </header>

      {/* ————— hero ————— */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 sm:pt-24">
        <div className="grid gap-10 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-14">
          {/* margin column */}
          <div className="order-2 flex gap-6 lg:order-1 lg:flex-col lg:gap-10 lg:pt-24">
            <MarginNote forId="21/3a" className="flex-1 lg:flex-none">
              filed under: memory, systems
              <br />
              august 2026
            </MarginNote>
            <MarginNote className="hidden lg:block">
              the numbers are the point — each card keeps its place in the
              conversation
            </MarginNote>
          </div>

          {/* main column */}
          <div className="order-1 max-w-2xl lg:order-2">
            <h1 className="text-[40px] leading-[1.08] font-medium tracking-[-0.01em] sm:text-[56px]">
              Every thought you&rsquo;ve ever had, filed where you can find it.
            </h1>
            <p className="mt-7 max-w-[58ch] text-[19px] leading-[1.65] text-[#4B4A57]">
              Niklas Luhmann wrote seventy books and four hundred papers. His
              secret was not discipline — it was a wooden box of index cards
              that remembered what he would forget. Engram is that box, rebuilt
              for the way you think now.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href="#start"
                className="rounded-[3px] border border-[#20202B] bg-[#20202B] px-6 py-3 text-[16px] text-[#F6F5F0] transition-colors hover:bg-transparent hover:text-[#20202B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20202B]"
              >
                Start your slip-box
              </a>
              <a
                href="#method"
                className="text-[16px] text-[#B5341F] underline decoration-[#B5341F]/40 underline-offset-[5px] transition-colors hover:decoration-[#B5341F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5341F]"
              >
                Read the method
              </a>
            </div>

            {/* the card */}
            <div className="relative mt-16 max-w-xl">
              <IndexCard
                id="21/3a"
                tag="memory"
                title="on second brains"
                seeAlso={["21/3a1", "7/2b", "14/9"]}
              >
                A note is worth keeping only if it can be found again. The value
                of a slip-box is not in{" "}
                <span className="relative inline-block whitespace-nowrap">
                  storing
                  <span
                    aria-hidden="true"
                    className="absolute -inset-x-2.5 -inset-y-1 -rotate-2 rounded-[50%] border-[1.5px] border-[#B5341F]"
                  />
                </span>{" "}
                — it is in the surprise of meeting an old thought exactly when
                it is useful.
              </IndexCard>
              <p className="mt-3 pl-6 text-[15px] italic text-[#B5341F]">
                — and the finding is what Engram does for you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ————— the method ————— */}
      <section id="method" className="border-t border-[#E2E0D6]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-14">
            <MarginNote forId="1">the method, in three drawers</MarginNote>
            <div>
              <h2 className="text-[30px] font-medium tracking-[-0.01em] sm:text-[36px]">
                Three habits, kept for you.
              </h2>
              <p className="mt-4 max-w-[56ch] text-[17px] leading-[1.65] text-[#4B4A57]">
                A slip-box is not a filing system. It is a conversation with
                your past self — and it only works if the cards talk to each
                other.
              </p>
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                <IndexCard
                  id="1/1"
                  tag="capture"
                  title="Catch the fragment"
                  seeAlso={["1/1a"]}
                >
                  A line, a link, a voice memo at 2am. The inbox holds it
                  unjudged — no filing decision stands between you and sleep.
                </IndexCard>
                <IndexCard
                  id="1/2"
                  tag="link"
                  title="Draw the thread"
                  seeAlso={["7/2b"]}
                >
                  Every card points at others. Engram proposes the connections;
                  you decide which ones mean something.
                </IndexCard>
                <IndexCard
                  id="1/3"
                  tag="resurface"
                  title="Meet it again"
                  seeAlso={["14/9", "30/4"]}
                >
                  Old cards return while you write — not after you&rsquo;ve
                  forgotten them. Surprise is the slip-box&rsquo;s dividend.
                </IndexCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ————— the story ————— */}
      <section className="border-t border-[#E2E0D6] bg-[#FBFAF6]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[170px_minmax(0,58ch)] lg:gap-14">
            <MarginNote forId="9/1b" className="lg:pt-2">
              tools shape thought — a box that asks for links gets ideas
            </MarginNote>
            <div className="text-[18px] leading-[1.7] text-[#3A3A48]">
              <h2 className="text-[30px] font-medium tracking-[-0.01em] text-[#20202B] sm:text-[36px]">
                The sociologist and his box.
              </h2>
              <p className="mt-6">
                In 1954, Niklas Luhmann was a civil servant in Lüneburg with a
                hobby: he read, and he filed what he read into a wooden
                slip-box. Each card got a number — <CardRef id="21" />, then{" "}
                <CardRef id="21/3a" />, then <CardRef id="21/3a1" /> — so a
                thought could always answer the thought before it.
              </p>
              <p className="mt-6">
                By the time he died, the box held ninety thousand cards and had
                helped write more books than most departments. Asked how he
                published so much, Luhmann shrugged:{" "}
                <em>
                  &ldquo;I, of course, do not think everything on my own. It
                  happens mainly in the slip-box.&rdquo;
                </em>
              </p>
              <p className="mt-6">
                Engram keeps the parts that mattered — the numbering, the
                threads, the resurfacing — and removes the parts that
                didn&rsquo;t: the index you had to maintain, the drawer you had
                to be standing next to, the handwriting only you could read.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ————— the wall ————— */}
      <section id="wall" className="border-t border-[#E2E0D6]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-14">
            <MarginNote forId="—">from a working box</MarginNote>
            <div>
              <h2 className="text-[30px] font-medium tracking-[-0.01em] sm:text-[36px]">
                Real boxes read like this.
              </h2>
              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    id: "4/2c",
                    text: "The inbox is a harbor, not a home. Unsorted is a state, not a filing system.",
                  },
                  {
                    id: "21/7a",
                    text: "Ideas arrive finished only in hindsight. File the rough version.",
                  },
                  {
                    id: "14/9",
                    text: "Forgetting is not failure — it is indexing. The trick is choosing the index.",
                  },
                  {
                    id: "30/4",
                    text: "A system that only stores is a shelf. A system that resurfaces is a colleague.",
                  },
                  {
                    id: "7/2b",
                    text: "Write the card you would want to find in ten years.",
                  },
                  {
                    id: "9/1b1",
                    text: "Links are cheap. Make them like you mean it.",
                  },
                ].map((c) => (
                  <article
                    key={c.id}
                    className="rounded-[3px] border border-[#E2E0D6] bg-[#FDFDFB] px-5 pt-4 pb-5 shadow-[0_1px_0_#E2E0D6]"
                    style={RULED}
                  >
                    <div className={`${mono.className} text-xs font-medium`}>
                      <CardRef id={c.id} />
                    </div>
                    <p className="mt-2 text-[16.5px] leading-[34px] text-[#3A3A48]">
                      {c.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ————— cta ————— */}
      <section id="start" className="border-t border-[#E2E0D6]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className={`${mono.className} text-xs text-[#B5341F]`}>
              card 0/1 — the first one is always blank
            </p>
            <h2 className="mt-5 text-[36px] leading-[1.1] font-medium tracking-[-0.01em] sm:text-[48px]">
              Your first card is waiting.
            </h2>
            <p className="mx-auto mt-5 max-w-[46ch] text-[17px] leading-[1.65] text-[#4B4A57]">
              Free for the first thousand notes. Import anything, export
              everything — the box is yours.
            </p>
            <div className="mt-9 flex justify-center gap-4">
              <a
                href="#start"
                className="rounded-[3px] border border-[#20202B] bg-[#20202B] px-7 py-3.5 text-[16px] text-[#F6F5F0] transition-colors hover:bg-transparent hover:text-[#20202B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20202B]"
              >
                Start your slip-box
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ————— footer ————— */}
      <footer className="border-t border-[#E2E0D6]">
        <div
          className={`${mono.className} mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-4 px-6 py-6 text-[11.5px] text-[#8B8A7C]`}
        >
          <span>ENGRAM — a slip-box</span>
          <span>set in Newsreader &amp; Plex Mono</span>
          <span>direction 01</span>
        </div>
      </footer>
    </div>
  );
}
