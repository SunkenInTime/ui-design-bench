import Link from "next/link";
import {
  IconArrowRight,
  IconBrain,
  IconCheck,
  IconCloud,
  IconLink,
  IconNotebook,
  IconQuote,
  IconSearch,
  IconShield,
  IconSparkles,
} from "../../components/icons";

export const metadata = {
  title: "Cortex — Iteration 1 · Editorial",
};

const NAV_LINKS = ["Product", "Features", "Pricing", "Story"];

const LOGOS = ["Northwind", "Fieldnote", "Acme Labs", "Studio Nine", "Orbit Co"];

const FEATURES = [
  {
    icon: IconNotebook,
    title: "Capture without friction",
    body: "A blank note is one keystroke away, on every device. Write first, organize later — Cortex never gets in the way of a thought.",
  },
  {
    icon: IconLink,
    title: "Notes that remember each other",
    body: "Mention an idea once and Cortex quietly links it everywhere it belongs, weaving a map of your thinking as you write.",
  },
  {
    icon: IconSearch,
    title: "Recall, not just search",
    body: "Ask a question in plain language and Cortex surfaces the note you half-remember writing — even if you used different words.",
  },
];

const BENTO = [
  {
    icon: IconSparkles,
    title: "Gentle AI assistance",
    body: "Summaries, follow-up questions, and tidy outlines — only when you ask.",
  },
  {
    icon: IconCloud,
    title: "Always in sync",
    body: "Local-first storage means your notes load instantly, then sync quietly.",
  },
  {
    icon: IconShield,
    title: "Private by default",
    body: "End-to-end encryption on every plan, including the free one.",
  },
  {
    icon: IconBrain,
    title: "A map of your mind",
    body: "Zoom out to see how a single note connects to a year of thinking.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Write it down",
    body: "A thought, a meeting, a half-formed idea. Drop it into Cortex exactly as it occurs to you.",
  },
  {
    n: "02",
    title: "Let it connect",
    body: "Cortex notices references to people, projects, and past notes, and quietly links them together.",
  },
  {
    n: "03",
    title: "Find it later",
    body: "Months on, search by feeling, not keyword — Cortex understands what you meant.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I stopped losing ideas the week I switched. Cortex feels like the notebook I always meant to keep.",
    name: "Maya R.",
    role: "Product Designer",
  },
  {
    quote:
      "The linking is invisible until you need it — then it's the whole point. My research notes finally talk to each other.",
    name: "Daniyal K.",
    role: "PhD Researcher",
  },
  {
    quote:
      "Calm, fast, and it gets out of the way. That's rarer than it should be in a notes app.",
    name: "Tomas B.",
    role: "Indie Founder",
  },
];

const PRICING = [
  {
    name: "Personal",
    price: "Free",
    tagline: "For your first second brain.",
    features: ["Unlimited notes", "Bi-directional links", "Sync across 2 devices"],
  },
  {
    name: "Pro",
    price: "$8",
    tagline: "For people who write daily.",
    features: ["Everything in Personal", "Unlimited devices", "AI assist & summaries", "Full history"],
    highlighted: true,
  },
  {
    name: "Teams",
    price: "$15",
    tagline: "Shared knowledge, kept tidy.",
    features: ["Everything in Pro", "Shared workspaces", "Admin controls", "Priority support"],
  },
];

const FAQS = [
  {
    q: "What makes Cortex different from a regular notes app?",
    a: "Cortex links related notes automatically and lets you search by meaning rather than exact words, so your past thinking stays usable instead of buried.",
  },
  {
    q: "Can I use Cortex offline?",
    a: "Yes. Cortex is local-first — everything you write is saved to your device instantly and syncs whenever you're back online.",
  },
  {
    q: "Is my data private?",
    a: "Your notes are end-to-end encrypted on every plan, including the free tier. We can't read your notes, and neither can anyone else.",
  },
  {
    q: "Can I import notes from another app?",
    a: "Cortex supports Markdown, Evernote, and Notion imports out of the box, with links preserved wherever possible.",
  },
];

export default function Variant1() {
  return (
    <div className="flex flex-1 flex-col bg-white text-zinc-900">
      <header className="sticky top-0 z-40 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 font-serif text-xl font-medium tracking-tight">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-white">
              <IconBrain className="h-4 w-4" />
            </span>
            Cortex
          </div>
          <nav className="hidden items-center gap-8 text-sm text-zinc-600 md:flex">
            {NAV_LINKS.map((l) => (
              <a key={l} href="#" className="transition-colors hover:text-zinc-950">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hidden text-zinc-600 hover:text-zinc-950 sm:inline">
              Log in
            </a>
            <a
              href="#"
              className="rounded-full bg-zinc-900 px-4 py-2 font-medium text-white transition-colors hover:bg-zinc-700"
            >
              Get started
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pt-20 pb-24 sm:pt-28">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
            <div className="animate-fade-up">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                Notes that think with you
              </p>
              <h1 className="font-serif text-5xl leading-[1.08] tracking-tight text-zinc-950 sm:text-6xl">
                Your second brain,
                <br />
                beautifully organized.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-600">
                Cortex captures every idea the moment it arrives, then quietly
                connects it to everything you&rsquo;ve written before — so
                nothing you think gets lost again.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
                >
                  Start writing, free
                  <IconArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-medium text-zinc-700 hover:text-zinc-950"
                >
                  Watch the 90-second tour
                </a>
              </div>
              <p className="mt-6 text-sm text-zinc-400">
                Free forever plan · No credit card · Export anytime
              </p>
            </div>

            <div className="animate-fade-up relative" style={{ animationDelay: "120ms" }}>
              <div className="relative rounded-2xl border border-zinc-200 bg-white p-1.5 shadow-2xl shadow-zinc-200/60">
                <div className="flex items-center gap-1.5 border-b border-zinc-100 px-3 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
                  <span className="ml-3 text-xs text-zinc-400">Daily note — Tuesday</span>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-0 text-sm">
                  <div className="space-y-2.5 border-r border-zinc-100 p-4">
                    {["Inbox", "Projects", "Reading", "People"].map((s, i) => (
                      <div
                        key={s}
                        className={`rounded-md px-2 py-1.5 text-xs ${
                          i === 0
                            ? "bg-zinc-100 font-medium text-zinc-900"
                            : "text-zinc-400"
                        }`}
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3 p-5">
                    <p className="font-serif text-base text-zinc-900">
                      Met with{" "}
                      <span className="rounded bg-zinc-100 px-1.5 py-0.5 text-zinc-700">
                        Maya
                      </span>{" "}
                      about the{" "}
                      <span className="rounded bg-zinc-100 px-1.5 py-0.5 text-zinc-700">
                        Q3 relaunch
                      </span>
                      .
                    </p>
                    <p className="leading-relaxed text-zinc-500">
                      She suggested revisiting the{" "}
                      <span className="rounded bg-zinc-100 px-1.5 py-0.5 text-zinc-700">
                        onboarding flow
                      </span>{" "}
                      from last spring — worth re-reading those notes.
                    </p>
                    <div className="flex gap-2 pt-1">
                      <span className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-500">
                        3 linked notes
                      </span>
                      <span className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-500">
                        Project · Relaunch
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 hidden rounded-xl border border-zinc-200 bg-white p-4 shadow-xl sm:block">
                <p className="mb-2 text-xs font-medium text-zinc-400">Connected to</p>
                <div className="flex items-center gap-1.5">
                  {["Maya", "Relaunch", "Onboarding", "Spring notes"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-zinc-50 px-2 py-1 text-xs text-zinc-600 ring-1 ring-zinc-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logos */}
        <section className="border-y border-zinc-100 bg-zinc-50/60 py-10">
          <div className="mx-auto max-w-6xl px-6">
            <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
              Trusted by thoughtful teams
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-zinc-400">
              {LOGOS.map((l) => (
                <span key={l} className="font-serif text-lg tracking-tight">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="font-serif text-3xl tracking-tight text-zinc-950 sm:text-4xl">
                Three habits, one calm tool.
              </h2>
              <p className="mt-4 text-lg text-zinc-600">
                Cortex is built around the way memory actually works —
                capture, connection, and recall.
              </p>
            </div>
            <div className="mt-16 grid gap-10 sm:grid-cols-3">
              {FEATURES.map((f) => (
                <div key={f.title} className="text-left">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900 text-white">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-zinc-950">
                    {f.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-zinc-600">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-t border-zinc-100 bg-zinc-50/60 px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-serif text-3xl tracking-tight text-zinc-950 sm:text-4xl">
              How it actually works
            </h2>
            <div className="mt-14 grid gap-12 sm:grid-cols-3">
              {STEPS.map((s) => (
                <div key={s.n} className="relative pl-0">
                  <span className="font-serif text-5xl text-zinc-200">{s.n}</span>
                  <h3 className="mt-4 text-lg font-semibold text-zinc-950">
                    {s.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-zinc-600">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Big quote */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <IconQuote className="mx-auto h-8 w-8 text-zinc-300" />
            <p className="mt-6 font-serif text-2xl leading-snug text-zinc-900 sm:text-3xl">
              &ldquo;Cortex is the first notes app that&rsquo;s made me write
              more — not because it has more features, but because it has
              fewer decisions to make.&rdquo;
            </p>
            <p className="mt-6 text-sm font-medium text-zinc-500">
              Elena Suh · Writer &amp; Editor
            </p>
          </div>
        </section>

        {/* Bento features */}
        <section className="border-t border-zinc-100 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {BENTO.map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl border border-zinc-100 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-zinc-100"
                >
                  <b.icon className="h-6 w-6 text-zinc-700" />
                  <h3 className="mt-4 font-semibold text-zinc-950">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-t border-zinc-100 bg-zinc-50/60 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-serif text-3xl tracking-tight text-zinc-950 sm:text-4xl">
              Loved by careful thinkers
            </h2>
            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6"
                >
                  <blockquote className="flex-1 text-zinc-700">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 text-sm">
                    <span className="font-semibold text-zinc-950">{t.name}</span>
                    <span className="text-zinc-500"> · {t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="font-serif text-3xl tracking-tight text-zinc-950 sm:text-4xl">
                Simple, honest pricing
              </h2>
              <p className="mt-4 text-lg text-zinc-600">
                Start free. Upgrade only once Cortex earns it.
              </p>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {PRICING.map((p) => (
                <div
                  key={p.name}
                  className={`rounded-2xl border p-7 ${
                    p.highlighted
                      ? "border-zinc-900 bg-zinc-900 text-white shadow-xl"
                      : "border-zinc-200 bg-white"
                  }`}
                >
                  <h3 className="font-semibold">{p.name}</h3>
                  <p
                    className={`mt-1 text-sm ${
                      p.highlighted ? "text-zinc-300" : "text-zinc-500"
                    }`}
                  >
                    {p.tagline}
                  </p>
                  <p className="mt-6 font-serif text-4xl">
                    {p.price}
                    {p.price !== "Free" && (
                      <span
                        className={`text-base font-sans ${
                          p.highlighted ? "text-zinc-400" : "text-zinc-400"
                        }`}
                      >
                        /mo
                      </span>
                    )}
                  </p>
                  <ul className="mt-6 space-y-2.5 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <IconCheck
                          className={`h-4 w-4 ${
                            p.highlighted ? "text-white" : "text-zinc-900"
                          }`}
                        />
                        <span className={p.highlighted ? "text-zinc-200" : "text-zinc-600"}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`mt-7 block rounded-full px-4 py-2.5 text-center text-sm font-medium transition-colors ${
                      p.highlighted
                        ? "bg-white text-zinc-900 hover:bg-zinc-200"
                        : "bg-zinc-900 text-white hover:bg-zinc-700"
                    }`}
                  >
                    Choose {p.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-zinc-100 bg-zinc-50/60 px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl tracking-tight text-zinc-950 sm:text-4xl">
              Questions, answered
            </h2>
            <div className="mt-10 divide-y divide-zinc-200">
              {FAQS.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-left font-medium text-zinc-900">
                    {f.q}
                    <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-zinc-300 text-sm text-zinc-500 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-zinc-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl rounded-3xl bg-zinc-900 px-10 py-16 text-center text-white">
            <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
              Start your second brain today.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-zinc-300">
              Free forever, no credit card. Bring your existing notes in
              minutes.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
            >
              Get started, it&rsquo;s free
              <IconArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-100 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 font-serif text-lg">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 text-white">
              <IconBrain className="h-3.5 w-3.5" />
            </span>
            Cortex
          </div>
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} Cortex. A design exploration — not a
            real product.
          </p>
          <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-zinc-950">
            ← Back to gallery
          </Link>
        </div>
      </footer>
    </div>
  );
}
