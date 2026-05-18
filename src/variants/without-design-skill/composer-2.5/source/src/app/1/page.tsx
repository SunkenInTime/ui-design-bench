import { Instrument_Serif, DM_Sans } from "next/font/google";

const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function LumenLanding() {
  return (
    <div
      className={`${serif.variable} ${sans.variable} min-h-full bg-[#FAF9F6] font-[family-name:var(--font-sans)] text-[#1C1917]`}
    >
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <span className="font-[family-name:var(--font-serif)] text-2xl tracking-tight">
          Engram
        </span>
        <nav className="hidden items-center gap-8 text-sm text-[#57534E] md:flex">
          <a href="#features" className="hover:text-[#1C1917]">
            Features
          </a>
          <a href="#" className="hover:text-[#1C1917]">
            Pricing
          </a>
          <a href="#" className="hover:text-[#1C1917]">
            Log in
          </a>
        </nav>
        <button
          type="button"
          className="rounded-full bg-[#3D5A45] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#2F4635]"
        >
          Start free
        </button>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-32">
        <section className="grid items-center gap-16 pt-12 lg:grid-cols-2 lg:pt-20">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#6B8F71]">
              Your second brain
            </p>
            <h1 className="font-[family-name:var(--font-serif)] text-5xl leading-[1.1] tracking-tight text-[#1C1917] sm:text-6xl lg:text-7xl">
              Thoughts that remember each other
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#57534E]">
              Engram turns scattered notes into a living knowledge garden. Capture
              ideas in seconds, link them naturally, and resurface insight when you
              need it most.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                type="button"
                className="rounded-full bg-[#1C1917] px-8 py-3.5 text-sm font-medium text-[#FAF9F6] transition hover:bg-[#292524]"
              >
                Plant your first note
              </button>
              <button
                type="button"
                className="rounded-full border border-[#D6D3D1] px-8 py-3.5 text-sm font-medium text-[#44403C] transition hover:border-[#A8A29E]"
              >
                Watch demo
              </button>
            </div>
            <p className="mt-8 text-sm text-[#A8A29E]">
              Free for personal use · No credit card
            </p>
          </div>

          <div className="relative mx-auto h-[420px] w-full max-w-md lg:max-w-none">
            <NoteCard
              className="absolute left-0 top-8 z-10 w-56 rotate-[-4deg] shadow-lg"
              tag="Meeting"
              title="Product roadmap Q3"
              body="Ship bi-directional links before August. Consider graph view for power users."
            />
            <NoteCard
              className="absolute right-0 top-0 z-20 w-60 rotate-[3deg] shadow-xl"
              tag="Idea"
              title="Spaced repetition for notes"
              body="Surface notes at decay intervals based on last review + link density."
              accent
            />
            <NoteCard
              className="absolute bottom-4 left-12 z-30 w-64 rotate-[-1deg] shadow-md"
              tag="Research"
              title="How memory palaces work"
              body="Spatial anchoring increases recall. Our canvas view could mimic loci method."
            />
            <svg
              className="absolute inset-0 h-full w-full text-[#6B8F71]/30"
              aria-hidden
            >
              <line x1="28%" y1="35%" x2="55%" y2="28%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="55%" y1="28%" x2="48%" y2="72%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="28%" y1="35%" x2="48%" y2="72%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>
        </section>

        <section id="features" className="mt-32 grid gap-8 sm:grid-cols-3">
          {[
            {
              title: "Capture without friction",
              desc: "Quick capture from anywhere. Voice, markdown, or plain text — your brain doesn't wait for formatting.",
            },
            {
              title: "Connect, don't file",
              desc: "Bidirectional links weave context automatically. Discover relationships you didn't know you were building.",
            },
            {
              title: "Recall at the right moment",
              desc: "Smart resurfacing brings forgotten notes back when your current work needs them.",
            },
          ].map((f) => (
            <article
              key={f.title}
              className="rounded-2xl border border-[#E7E5E4] bg-white p-8"
            >
              <div className="mb-4 h-1 w-8 rounded-full bg-[#6B8F71]" />
              <h3 className="font-[family-name:var(--font-serif)] text-xl text-[#1C1917]">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#78716C]">{f.desc}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

function NoteCard({
  className,
  tag,
  title,
  body,
  accent,
}: {
  className?: string;
  tag: string;
  title: string;
  body: string;
  accent?: boolean;
}) {
  return (
    <article
      className={`rounded-xl border border-[#E7E5E4] bg-white p-5 ${className ?? ""}`}
    >
      <span
        className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
          accent ? "bg-[#6B8F71]/15 text-[#3D5A45]" : "bg-[#F5F5F4] text-[#78716C]"
        }`}
      >
        {tag}
      </span>
      <h4 className="mt-3 font-[family-name:var(--font-serif)] text-lg leading-snug text-[#1C1917]">
        {title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-[#78716C]">{body}</p>
    </article>
  );
}
