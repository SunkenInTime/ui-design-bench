import Link from "next/link";
import {
  IconArrowRight,
  IconBrain,
  IconCheck,
  IconCloud,
  IconLink,
  IconSearch,
} from "../../components/icons";

export const metadata = {
  title: "Cortex — Iteration 5 · Atelier",
};

const NAV_LINKS = ["Philosophy", "Method", "Pricing", "Journal"];

const PRINCIPLES = [
  {
    n: "I",
    title: "Capture is sacred",
    body: "A thought interrupted is a thought lost. Cortex meets you the instant an idea arrives — no setup, no friction, no decisions.",
    icon: IconBrain,
  },
  {
    n: "II",
    title: "Connection is intelligence",
    body: "A note alone is a fact. A note linked to ten others is understanding. Cortex builds the connections quietly, in the background, always.",
    icon: IconLink,
  },
  {
    n: "III",
    title: "Recall should feel like memory",
    body: "Not search — recollection. Ask a question the way you'd ask a trusted colleague, and Cortex answers the way your memory should.",
    icon: IconSearch,
  },
];

const METHOD = [
  { step: "Write", body: "Begin anywhere — a margin, a meeting, a 2am thought." },
  { step: "Weave", body: "Cortex threads each note into the larger tapestry of your knowledge." },
  { step: "Return", body: "Months later, find exactly the thread you need, intact." },
];

const TESTIMONIALS = [
  {
    quote:
      "Cortex is the first tool that has made me trust my own archive again.",
    name: "Eleanor V.",
    role: "Author",
  },
  {
    quote:
      "It reads less like software and more like a well-kept commonplace book.",
    name: "Hugo M.",
    role: "Architect",
  },
];

const PRICING = [
  {
    name: "Foundation",
    price: "Free",
    body: "Begin your archive.",
    features: ["Unlimited notes", "Automatic linking", "Two devices"],
  },
  {
    name: "Atelier",
    price: "$14",
    body: "For a daily practice.",
    features: ["Everything in Foundation", "Unlimited devices", "Considered AI assistance", "Complete history"],
    highlighted: true,
  },
  {
    name: "Studio",
    price: "$24",
    body: "For shared work.",
    features: ["Everything in Atelier", "Shared collections", "Guest access", "Dedicated concierge"],
  },
];

export default function Variant5() {
  return (
    <div className="flex flex-1 flex-col bg-[#f4efe8] text-[#2a2622]">
      <header className="sticky top-0 z-40 border-b border-[#2a2622]/10 bg-[#f4efe8]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.22em]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#b08d57] text-[#b08d57]">
              <IconBrain className="h-3.5 w-3.5" />
            </span>
            Cortex
          </div>
          <nav className="hidden items-center gap-10 text-xs font-medium uppercase tracking-[0.16em] text-[#6b6056] md:flex">
            {NAV_LINKS.map((l) => (
              <a key={l} href="#" className="transition-colors hover:text-[#2a2622]">
                {l}
              </a>
            ))}
          </nav>
          <a
            href="#"
            className="border-b border-[#2a2622] pb-0.5 text-xs font-medium uppercase tracking-[0.16em] transition-colors hover:border-[#b08d57] hover:text-[#b08d57]"
          >
            Request access
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative px-6 pt-20 pb-28">
          <div className="mx-auto grid max-w-6xl items-end gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="animate-fade-up">
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-[#b08d57]">
                A second brain, kept properly
              </p>
              <h1 className="font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl">
                The art of
                <br />
                remembering.
              </h1>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-[#6b6056]">
                Cortex is a considered home for your thinking — equal parts
                notebook, archive, and quiet intelligence. Every note finds
                its place; nothing is ever truly lost.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2a2622] px-7 py-3.5 text-sm font-medium text-[#f4efe8] transition-colors hover:bg-[#b08d57]"
                >
                  Begin your archive
                  <IconArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="border-b border-[#2a2622]/40 pb-0.5 text-sm font-medium text-[#2a2622] transition-colors hover:border-[#b08d57] hover:text-[#b08d57]"
                >
                  Read the philosophy
                </a>
              </div>
            </div>

            <div className="animate-fade-up relative" style={{ animationDelay: "120ms" }}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-[#2a2622]/10 bg-gradient-to-br from-[#e7ddc9] via-[#ece3d2] to-[#d9cbb0]">
                <div className="absolute inset-0 mask-fade-edges bg-line-grid text-[#2a2622]/[0.05]" />
                <div className="absolute inset-x-0 bottom-0 flex justify-center pb-10">
                  <div className="h-px w-24 bg-[#b08d57]" />
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 hidden w-56 rounded-sm border border-[#2a2622]/10 bg-[#f4efe8] p-5 shadow-xl sm:block">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#b08d57]">
                  Note · 04:12 PM
                </p>
                <p className="mt-2 font-serif text-sm leading-relaxed text-[#2a2622]">
                  &ldquo;Revisit the onboarding notes from spring before the
                  relaunch review.&rdquo;
                </p>
                <p className="mt-3 text-xs text-[#6b6056]">
                  Linked to 4 notes, 1 person
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Manifesto quote */}
        <section className="border-t border-[#2a2622]/10 px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#b08d57]">
              Our philosophy
            </p>
            <p className="mt-6 font-serif text-2xl leading-snug sm:text-3xl">
              A mind unrecorded is a mind half-lived. We build tools for the
              other half.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="border-t border-[#2a2622]/10 px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-x-12 gap-y-16 sm:grid-cols-[80px_1fr]">
              {PRINCIPLES.map((p) => (
                <div key={p.n} className="contents">
                  <div className="font-serif text-5xl text-[#b08d57] sm:text-6xl">
                    {p.n}
                  </div>
                  <div className="border-t border-[#2a2622]/10 pt-6 sm:border-t-0 sm:pt-0">
                    <div className="flex items-center gap-3">
                      <p.icon className="h-5 w-5 text-[#2a2622]" />
                      <h3 className="font-serif text-2xl tracking-tight">{p.title}</h3>
                    </div>
                    <p className="mt-3 max-w-xl leading-relaxed text-[#6b6056]">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Method */}
        <section className="border-t border-[#2a2622]/10 bg-[#ece3d2] px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#b08d57]">
              The method
            </p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
              Three movements, repeated daily.
            </h2>
            <div className="mt-14 grid gap-10 sm:grid-cols-3">
              {METHOD.map((m, i) => (
                <div key={m.step} className="relative">
                  <div className="flex items-center gap-3">
                    <span className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-[#b08d57]" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#6b6056]">
                      Step {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl tracking-tight">{m.step}</h3>
                  <p className="mt-2 leading-relaxed text-[#6b6056]">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase */}
        <section className="border-t border-[#2a2622]/10 px-6 py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
            <div className="relative aspect-[5/4] overflow-hidden rounded-sm border border-[#2a2622]/10 bg-[#ece3d2]">
              <svg className="absolute inset-0 h-full w-full text-[#2a2622]/15" viewBox="0 0 320 220">
                <path d="M50 50 L160 110 M160 110 L270 60 M160 110 L100 170 M160 110 L240 170" stroke="currentColor" strokeWidth="1" />
              </svg>
              {[
                { x: "16%", y: "23%" },
                { x: "50%", y: "50%", big: true },
                { x: "84%", y: "27%" },
                { x: "31%", y: "77%" },
                { x: "75%", y: "77%" },
              ].map((n, i) => (
                <div
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b08d57]"
                  style={{
                    left: n.x,
                    top: n.y,
                    width: n.big ? 14 : 8,
                    height: n.big ? 14 : 8,
                  }}
                />
              ))}
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#b08d57]">
                The atlas
              </p>
              <h3 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
                Watch your knowledge take shape.
              </h3>
              <p className="mt-5 max-w-md leading-relaxed text-[#6b6056]">
                Step back from any note to see the constellation it belongs
                to — every connection drawn by hand, by Cortex, in the
                background, while you simply wrote.
              </p>
              <ul className="mt-7 space-y-3 text-sm">
                {["Visual map of every connection", "Traceable, explainable links", "Exportable to your own archive"].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[#2a2622]">
                    <IconCheck className="h-4 w-4 text-[#b08d57]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-t border-[#2a2622]/10 bg-[#ece3d2] px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-14 sm:grid-cols-2">
              {TESTIMONIALS.map((t) => (
                <figure key={t.name}>
                  <blockquote className="font-serif text-2xl leading-snug">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-[#6b6056]">
                    {t.name} — {t.role}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="border-t border-[#2a2622]/10 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-xl text-center">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#b08d57]">
                Investment
              </p>
              <h2 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
                Pricing, plainly stated
              </h2>
            </div>
            <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-[#2a2622]/15 bg-[#2a2622]/15 sm:grid-cols-3">
              {PRICING.map((p) => (
                <div
                  key={p.name}
                  className={`p-8 ${p.highlighted ? "bg-[#2a2622] text-[#f4efe8]" : "bg-[#f4efe8]"}`}
                >
                  <h3 className="font-serif text-xl tracking-tight">{p.name}</h3>
                  <p
                    className={`mt-1 text-sm ${
                      p.highlighted ? "text-[#cbbfa8]" : "text-[#6b6056]"
                    }`}
                  >
                    {p.body}
                  </p>
                  <p className="mt-7 font-serif text-4xl">
                    {p.price}
                    {p.price !== "Free" && (
                      <span
                        className={`font-mono text-sm ${
                          p.highlighted ? "text-[#cbbfa8]" : "text-[#6b6056]"
                        }`}
                      >
                        {" "}
                        /mo
                      </span>
                    )}
                  </p>
                  <ul className="mt-7 space-y-2.5 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <IconCheck
                          className={`h-4 w-4 ${p.highlighted ? "text-[#b08d57]" : "text-[#2a2622]"}`}
                        />
                        <span className={p.highlighted ? "text-[#e7ddc9]" : "text-[#4a433c]"}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`mt-8 block rounded-full px-4 py-2.5 text-center text-sm font-medium transition-colors ${
                      p.highlighted
                        ? "bg-[#b08d57] text-[#2a2622] hover:bg-[#c5a36f]"
                        : "border border-[#2a2622] text-[#2a2622] hover:border-[#b08d57] hover:text-[#b08d57]"
                    }`}
                  >
                    Choose {p.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[#2a2622]/10 px-6 py-28 text-center">
          <IconCloud className="mx-auto h-7 w-7 text-[#b08d57]" />
          <h2 className="mx-auto mt-6 max-w-lg font-serif text-3xl tracking-tight sm:text-4xl">
            Begin the archive you&rsquo;ll thank yourself for.
          </h2>
          <a
            href="#"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#2a2622] px-7 py-3.5 text-sm font-medium text-[#f4efe8] transition-colors hover:bg-[#b08d57]"
          >
            Request access
            <IconArrowRight className="h-4 w-4" />
          </a>
        </section>
      </main>

      <footer className="border-t border-[#2a2622]/10 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm sm:flex-row">
          <div className="flex items-center gap-2.5 font-semibold uppercase tracking-[0.22em]">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#b08d57] text-[#b08d57]">
              <IconBrain className="h-3 w-3" />
            </span>
            Cortex
          </div>
          <p className="text-[#6b6056]">
            © {new Date().getFullYear()} Cortex. A design exploration — not a
            real product.
          </p>
          <Link href="/" className="font-medium text-[#2a2622] hover:text-[#b08d57]">
            ← Back to gallery
          </Link>
        </div>
      </footer>
    </div>
  );
}
