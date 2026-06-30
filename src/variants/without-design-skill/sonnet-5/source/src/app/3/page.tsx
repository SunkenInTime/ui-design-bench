import Link from "next/link";
import {
  IconArrowRight,
  IconBrain,
  IconCheck,
  IconLink,
  IconNotebook,
  IconSearch,
  IconSparkles,
  IconStar,
} from "../../components/icons";

export const metadata = {
  title: "Cortex — Iteration 3 · Playful",
};

const NAV_LINKS = ["Product", "Features", "Pricing", "Community"];

const STICKIES = [
  { text: "Call Maya re: Q3 launch 🎯", color: "bg-yellow-200", rotate: "-rotate-6", top: "4%", left: "4%" },
  { text: "Idea: weekly recap email", color: "bg-pink-200", rotate: "rotate-3", top: "10%", left: "58%" },
  { text: "Books to read: Atomic Habits", color: "bg-sky-200", rotate: "rotate-6", top: "46%", left: "2%" },
  { text: "Recipe — grandma's soup", color: "bg-emerald-200", rotate: "-rotate-3", top: "54%", left: "60%" },
  { text: "Linked to: Onboarding notes", color: "bg-violet-200", rotate: "rotate-2", top: "78%", left: "30%" },
];

const FEATURES = [
  {
    icon: IconNotebook,
    color: "bg-yellow-300",
    title: "Jot it down, fast",
    body: "A new note is one tap away — capture the thought before it slips away, on any device.",
  },
  {
    icon: IconLink,
    color: "bg-pink-300",
    title: "Notes that find each other",
    body: "Mention something once and Cortex quietly draws the line to every related note you've written.",
  },
  {
    icon: IconSearch,
    color: "bg-sky-300",
    title: "Find it, even half-remembered",
    body: "Search by vibe, not just keywords. Cortex gets what you mean, even when you don't say it exactly.",
  },
  {
    icon: IconSparkles,
    color: "bg-emerald-300",
    title: "A little AI help",
    body: "Friendly summaries and gentle nudges, never in your way, always optional.",
  },
];

const STEPS = [
  { n: 1, color: "bg-yellow-300", title: "Catch the thought", body: "Open Cortex, type or talk, done." },
  { n: 2, color: "bg-pink-300", title: "Watch it connect", body: "Cortex links it to your other notes automatically." },
  { n: 3, color: "bg-sky-300", title: "Forget on purpose", body: "Trust it's saved — and findable — whenever you need it." },
];

const TESTIMONIALS = [
  { quote: "It genuinely feels like my notes app has a personality. In a good way!", name: "Jules P.", role: "Illustrator", color: "bg-yellow-200", rotate: "-rotate-2" },
  { quote: "I finally stopped losing sticky notes — Cortex is just... where they live now.", name: "Renee O.", role: "Teacher", color: "bg-pink-200", rotate: "rotate-2" },
  { quote: "The connections it makes are eerily on point. My brain, but tidier.", name: "Sam W.", role: "Podcaster", color: "bg-sky-200", rotate: "-rotate-1" },
];

const PRICING = [
  { name: "Just me", price: "Free", body: "Everything you need to start.", features: ["Unlimited notes", "Auto-linking", "2 devices"], color: "border-zinc-900" },
  { name: "Me, but more", price: "$8", body: "For your daily-note habit.", features: ["Everything in Free", "Unlimited devices", "AI summaries"], color: "border-pink-400", highlighted: true },
  { name: "Our team", price: "$15", body: "Shared brains, one team.", features: ["Everything in More", "Shared spaces", "Admin tools"], color: "border-sky-400" },
];

const FAQS = [
  { q: "Is Cortex actually fun to use?", a: "We hope so! Cortex keeps the playful bits purely cosmetic — under the hood it's the same serious linking and recall engine as our other tiers." },
  { q: "Can I make it look less colorful?", a: "Totally — every Cortex theme, including this one, is just a skin. Switch anytime from Settings, no data changes." },
  { q: "What happens to my sticky notes if I cancel?", a: "You can export everything as Markdown at any time, free plan included. Your notes are always yours." },
];

export default function Variant3() {
  return (
    <div className="flex flex-1 flex-col bg-amber-50 text-zinc-900">
      <header className="sticky top-0 z-40 border-b-2 border-zinc-900/5 bg-amber-50/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
            <span className="flex h-8 w-8 -rotate-6 items-center justify-center rounded-lg bg-pink-400 text-white shadow-[3px_3px_0_0_rgba(0,0,0,0.15)]">
              <IconBrain className="h-4.5 w-4.5" />
            </span>
            Cortex
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-700 md:flex">
            {NAV_LINKS.map((l) => (
              <a key={l} href="#" className="transition-colors hover:text-zinc-950">
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3 text-sm">
            <a href="#" className="hidden font-medium text-zinc-700 hover:text-zinc-950 sm:inline">
              Log in
            </a>
            <a
              href="#"
              className="rounded-full bg-zinc-900 px-4 py-2 font-semibold text-white shadow-[3px_3px_0_0_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-0.5"
            >
              Try it free
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pt-20 pb-28">
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
            <div className="animate-fade-up relative z-10">
              <p className="mb-5 inline-flex -rotate-2 items-center gap-2 rounded-full bg-zinc-900 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                Your second brain, with snacks
              </p>
              <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
                Capture everything.
                <br />
                Forget nothing.
                <br />
                <span className="relative inline-block">
                  Smile a little.
                  <svg
                    className="absolute -bottom-2 left-0 w-full text-pink-400"
                    viewBox="0 0 220 12"
                    fill="none"
                  >
                    <path d="M2 9c40-9 160-9 216 0" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-zinc-600">
                Cortex catches your ideas the second they happen, then quietly
                connects them to everything else you&rsquo;ve ever written.
                No folders. No stress.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-pink-400 px-6 py-3.5 text-sm font-bold text-zinc-900 shadow-[4px_4px_0_0_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-0.5"
                >
                  Start for free
                  <IconArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-900 px-6 py-3.5 text-sm font-bold text-zinc-900 transition-transform hover:-translate-y-0.5"
                >
                  See how it works
                </a>
              </div>
              <p className="mt-6 text-sm font-medium text-zinc-500">
                No credit card. No corkboard required (but encouraged).
              </p>
            </div>

            <div
              className="animate-fade-up relative mx-auto h-[22rem] w-full max-w-md sm:h-[26rem]"
              style={{ animationDelay: "140ms" }}
            >
              <div className="absolute inset-0 rounded-3xl border-2 border-zinc-900/10 bg-white/40" />
              {STICKIES.map((s) => (
                <div
                  key={s.text}
                  className={`absolute w-40 rounded-xl p-3 text-sm font-medium text-zinc-800 shadow-[3px_4px_0_0_rgba(0,0,0,0.12)] ${s.color} ${s.rotate}`}
                  style={{ top: s.top, left: s.left }}
                >
                  {s.text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marquee logos */}
        <section className="overflow-hidden border-y-2 border-zinc-900/5 bg-white py-6">
          <div className="flex animate-marquee gap-16 whitespace-nowrap text-lg font-bold text-zinc-300">
            {[...Array(2)].flatMap((_, k) =>
              ["Sunny Studio", "Loopworks", "Maple & Co", "Tinker Labs", "Glow Collective", "Pixel Pantry"].map(
                (l) => (
                  <span key={`${l}-${k}`}>{l}</span>
                )
              )
            )}
          </div>
        </section>

        {/* Features */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                All the brain, none of the clutter
              </h2>
              <p className="mt-4 text-lg text-zinc-600">
                Four habits that quietly make you sharper.
              </p>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((f, i) => (
                <div
                  key={f.title}
                  className={`rounded-2xl border-2 border-zinc-900 bg-white p-6 shadow-[4px_4px_0_0_rgba(0,0,0,0.9)] transition-transform hover:-translate-y-1 ${
                    i % 2 === 0 ? "rotate-1" : "-rotate-1"
                  }`}
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${f.color}`}>
                    <f.icon className="h-5 w-5 text-zinc-900" />
                  </div>
                  <h3 className="mt-4 font-bold text-zinc-950">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="border-t-2 border-zinc-900/5 bg-white px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
              How it works, in three beats
            </h2>
            <div className="mt-14 grid gap-10 sm:grid-cols-3">
              {STEPS.map((s) => (
                <div key={s.n} className="text-center">
                  <div
                    className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${s.color} text-xl font-extrabold text-zinc-900 shadow-[3px_3px_0_0_rgba(0,0,0,0.2)]`}
                  >
                    {s.n}
                  </div>
                  <h3 className="mt-5 font-bold text-zinc-950">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlight banner */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border-2 border-zinc-900 bg-violet-200 p-10 shadow-[6px_6px_0_0_rgba(0,0,0,0.9)] sm:p-14">
            <div className="grid items-center gap-10 sm:grid-cols-2">
              <div>
                <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-bold text-white">
                  Graph view
                </span>
                <h3 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
                  See your thinking, not just your files.
                </h3>
                <p className="mt-4 leading-relaxed text-zinc-700">
                  Every linked note becomes a little dot on your own
                  constellation. Zoom out anytime to see how today&rsquo;s
                  idea connects to last year&rsquo;s notebook.
                </p>
              </div>
              <div className="relative h-56 rounded-2xl border-2 border-zinc-900 bg-white">
                <svg className="absolute inset-0 h-full w-full text-zinc-300" viewBox="0 0 300 180">
                  <path d="M50 40 L150 90 M150 90 L240 50 M150 90 L100 140 M150 90 L220 140" stroke="currentColor" strokeWidth="2" />
                </svg>
                {[
                  { x: "16%", y: "22%", c: "bg-yellow-300" },
                  { x: "50%", y: "50%", c: "bg-pink-400", big: true },
                  { x: "80%", y: "28%", c: "bg-sky-300" },
                  { x: "33%", y: "78%", c: "bg-emerald-300" },
                  { x: "73%", y: "78%", c: "bg-violet-300" },
                ].map((n, i) => (
                  <div
                    key={i}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-zinc-900 ${n.c} ${
                      n.big ? "h-6 w-6" : "h-4 w-4"
                    }`}
                    style={{ left: n.x, top: n.y }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-t-2 border-zinc-900/5 bg-white px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
              Real notes, from real overthinkers
            </h2>
            <div className="mt-14 grid gap-8 sm:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className={`flex flex-col rounded-xl p-6 shadow-[4px_5px_0_0_rgba(0,0,0,0.15)] ${t.color} ${t.rotate}`}
                >
                  <div className="mb-3 flex gap-0.5 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <IconStar key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-zinc-800">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-4 text-sm font-bold text-zinc-900">
                    {t.name} <span className="font-medium text-zinc-600">· {t.role}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Pricing that won&rsquo;t make you frown
              </h2>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {PRICING.map((p) => (
                <div
                  key={p.name}
                  className={`rounded-2xl border-2 bg-white p-7 shadow-[4px_4px_0_0_rgba(0,0,0,0.9)] ${p.color}`}
                >
                  {p.highlighted && (
                    <span className="mb-3 inline-block rounded-full bg-pink-400 px-3 py-1 text-xs font-bold text-zinc-900">
                      Most loved
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-zinc-950">{p.name}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{p.body}</p>
                  <p className="mt-6 text-4xl font-extrabold">
                    {p.price}
                    {p.price !== "Free" && <span className="text-base font-medium text-zinc-400">/mo</span>}
                  </p>
                  <ul className="mt-6 space-y-2.5 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <IconCheck className="h-4 w-4 text-zinc-900" />
                        <span className="text-zinc-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="mt-7 block rounded-full bg-zinc-900 px-4 py-2.5 text-center text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
                  >
                    Choose {p.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t-2 border-zinc-900/5 bg-white px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
              Quick answers
            </h2>
            <div className="mt-10 space-y-3">
              {FAQS.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-xl border-2 border-zinc-900 bg-amber-50 p-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-zinc-900">
                    {f.q}
                    <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-sm text-white transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-700">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl rounded-3xl border-2 border-zinc-900 bg-pink-300 px-10 py-16 text-center shadow-[6px_6px_0_0_rgba(0,0,0,0.9)]">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Go build that second brain.
            </h2>
            <p className="mx-auto mt-4 max-w-md font-medium text-zinc-700">
              Free forever, genuinely. Bring your notes, your sticky habit,
              and your overthinking — we&rsquo;ve got room for all of it.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3.5 text-sm font-bold text-white shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] transition-transform hover:-translate-y-0.5"
            >
              Start for free
              <IconArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-zinc-900/5 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 text-lg font-extrabold">
            <span className="flex h-6 w-6 -rotate-6 items-center justify-center rounded-md bg-pink-400">
              <IconBrain className="h-3.5 w-3.5" />
            </span>
            Cortex
          </div>
          <p className="text-sm font-medium text-zinc-500">
            © {new Date().getFullYear()} Cortex. A design exploration — not a
            real product.
          </p>
          <Link href="/" className="text-sm font-bold text-zinc-700 hover:text-zinc-950">
            ← Back to gallery
          </Link>
        </div>
      </footer>
    </div>
  );
}
