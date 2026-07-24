import type { Metadata } from "next";
import { jakarta } from "../fonts";

export const metadata: Metadata = {
  title: "Atlas",
  description:
    "Recall is the note-taking app that thinks with you — capture anything, find everything.",
};

const sidebarItems = [
  { label: "Today", count: "4", active: true },
  { label: "Inbox", count: "12" },
  { label: "Projects", count: "8" },
  { label: "Reading", count: "31" },
  { label: "Archive", count: "2.1k" },
];

const noteCards = [
  {
    title: "Q3 strategy — open questions",
    excerpt:
      "Three things still unresolved after the offsite. Pricing narrative is the big one…",
    time: "9:41am",
    links: 7,
    accent: "bg-indigo-500",
  },
  {
    title: "Call notes: Dana (Acme)",
    excerpt:
      "Same objection as the March review. Worth pulling that thread — see linked note.",
    time: "Yesterday",
    links: 3,
    accent: "bg-emerald-500",
  },
  {
    title: "Clipped: The Cost of Context",
    excerpt:
      "Attention residue lasts ~23 minutes per interruption. Highlighted 4 passages.",
    time: "Mon",
    links: 5,
    accent: "bg-amber-500",
  },
];

const features = [
  {
    title: "Capture in one keystroke",
    body: "A global shortcut takes a thought from your head to your vault without opening the app or picking a folder.",
    glyph: (
      <path
        d="M12 5v14M5 12h14"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  {
    title: "Links it makes for you",
    body: "Recall reads each note as you save it and proposes connections to what you already wrote. You approve with one tap.",
    glyph: (
      <path
        d="M9 15l6-6M8 8H6a4 4 0 100 8h2m8 0h2a4 4 0 000-8h-2"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  {
    title: "Ask instead of search",
    body: "“What did we decide about onboarding in April?” gets an answer with citations, not forty keyword matches.",
    glyph: (
      <path
        d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.3-4.3"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  {
    title: "Yours to leave with",
    body: "Everything is Markdown on your own disk, synced end-to-end encrypted. Export is a folder, not a support ticket.",
    glyph: (
      <path
        d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  {
    title: "Daily notes that build up",
    body: "Start each morning on a fresh page that automatically threads into everything you touched yesterday.",
    glyph: (
      <path
        d="M4 7h16M4 12h16M4 17h10"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  {
    title: "Works offline, always",
    body: "Local-first architecture. The plane, the tunnel, the cabin — the app doesn't notice and neither do you.",
    glyph: (
      <path
        d="M12 4a8 8 0 108 8M12 4v8l5 3"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
];

export default function AtlasPage() {
  return (
    <div
      className={`${jakarta.className} relative flex flex-1 flex-col overflow-hidden bg-white text-slate-900`}
    >
      {/* Soft aurora */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-64 left-1/2 h-[640px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-200/70 via-sky-100/60 to-transparent blur-3xl"
      />

      <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-xl bg-indigo-600 text-[14px] font-extrabold text-white shadow-lg shadow-indigo-600/25">
            R
          </span>
          <span className="text-[16px] font-extrabold tracking-tight">
            Recall
          </span>
        </div>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/70 p-1 text-[13.5px] font-medium text-slate-600 shadow-sm backdrop-blur md:flex">
          {["Product", "Templates", "Pricing", "Blog"].map((item) => (
            <a
              key={item}
              href="#features"
              className="rounded-full px-4 py-1.5 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-[13.5px] font-semibold">
          <a className="hidden text-slate-600 hover:text-slate-900 sm:block" href="#">
            Log in
          </a>
          <a
            href="#cta"
            className="rounded-full bg-slate-900 px-4 py-2 text-white shadow-lg shadow-slate-900/15 transition-colors hover:bg-indigo-600"
          >
            Start free
          </a>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-6xl px-6">
        {/* Hero */}
        <section className="pt-16 pb-10 text-center lg:pt-24">
          <a
            href="#features"
            className="inline-flex animate-rise items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1.5 text-[12.5px] font-semibold text-indigo-700"
          >
            <span className="size-1.5 rounded-full bg-indigo-500" />
            Recall 4.0 — automatic linking is here
          </a>

          <h1 className="mx-auto mt-7 max-w-4xl animate-rise text-[clamp(2.6rem,6vw,4.5rem)] leading-[1.02] font-extrabold tracking-[-0.04em]">
            The notes app that
            <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
              {" "}
              remembers for you
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-[17.5px] leading-relaxed text-slate-600">
            Capture anything in a keystroke. Recall connects it to everything
            else you’ve written, so the note you need shows up exactly when you
            need it.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#cta"
              className="rounded-full bg-indigo-600 px-6 py-3.5 text-[14.5px] font-bold text-white shadow-xl shadow-indigo-600/25 transition-transform hover:scale-[1.03]"
            >
              Start free — no card
            </a>
            <a
              href="#features"
              className="rounded-full border border-slate-300 bg-white px-6 py-3.5 text-[14.5px] font-semibold text-slate-700 transition-colors hover:border-slate-400"
            >
              Watch the 90s tour
            </a>
          </div>

          {/* App mock */}
          <div className="relative mt-16">
            <div
              aria-hidden
              className="absolute inset-x-10 -bottom-6 h-24 rounded-full bg-indigo-500/15 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/90 text-left shadow-[0_40px_80px_-40px_rgba(30,41,59,0.4)] backdrop-blur">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50/80 px-4 py-3">
                <span className="size-2.5 rounded-full bg-slate-300" />
                <span className="size-2.5 rounded-full bg-slate-300" />
                <span className="size-2.5 rounded-full bg-slate-300" />
                <div className="mx-auto flex items-center gap-2 rounded-md bg-white px-3 py-1 text-[11.5px] text-slate-400 shadow-sm">
                  <span className="text-slate-300">⌘K</span>
                  Search or ask 50,412 notes…
                </div>
              </div>

              <div className="grid sm:grid-cols-[188px_1fr]">
                {/* Sidebar */}
                <aside className="hidden border-r border-slate-200 bg-slate-50/60 p-3 sm:block">
                  {sidebarItems.map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center justify-between rounded-lg px-3 py-2 text-[13px] ${
                        item.active
                          ? "bg-indigo-600 font-semibold text-white shadow-sm"
                          : "font-medium text-slate-600"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span
                        className={
                          item.active ? "text-indigo-100" : "text-slate-400"
                        }
                      >
                        {item.count}
                      </span>
                    </div>
                  ))}
                  <div className="mt-4 rounded-lg border border-dashed border-slate-300 px-3 py-2.5 text-[12px] text-slate-400">
                    + New note
                  </div>
                </aside>

                {/* Note list */}
                <div className="space-y-3 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] font-bold tracking-tight text-slate-900">
                      Today
                    </p>
                    <p className="text-[11.5px] text-slate-400">
                      15 suggested links
                    </p>
                  </div>

                  {noteCards.map((note, i) => (
                    <article
                      key={note.title}
                      className="animate-rise rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                      style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`size-2 rounded-full ${note.accent}`}
                        />
                        <h3 className="flex-1 truncate text-[13.5px] font-bold tracking-tight">
                          {note.title}
                        </h3>
                        <span className="text-[11px] text-slate-400">
                          {note.time}
                        </span>
                      </div>
                      <p className="mt-2 line-clamp-2 text-[12.5px] leading-relaxed text-slate-500">
                        {note.excerpt}
                      </p>
                      <p className="mt-2.5 inline-flex items-center gap-1.5 rounded-md bg-indigo-50 px-2 py-0.5 text-[11px] font-semibold text-indigo-700">
                        ⇄ {note.links} linked notes
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo cloud */}
        <section className="border-y border-slate-200 py-10">
          <p className="text-center text-[11.5px] font-bold tracking-[0.18em] text-slate-400 uppercase">
            Trusted by researchers and builders at
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-5 text-[17px] font-extrabold tracking-tight text-slate-300">
            {["Northbeam", "Vireo", "Kepler Labs", "Fathom", "Lantern"].map(
              (name) => (
                <span key={name}>{name}</span>
              ),
            )}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[12.5px] font-bold tracking-[0.16em] text-indigo-600 uppercase">
              Everything you need
            </p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1.08] font-extrabold tracking-[-0.035em]">
              Built for the notes you’ll still want in 2036
            </h2>
            <p className="mt-4 text-[16.5px] leading-relaxed text-slate-600">
              Fast enough for a passing thought, durable enough for a decade of
              them.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/8"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                  <svg viewBox="0 0 24 24" className="size-5" stroke="currentColor" aria-hidden>
                    {feature.glyph}
                  </svg>
                </span>
                <h3 className="mt-5 text-[16.5px] font-bold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonial + stats */}
        <section className="grid gap-5 pb-24 lg:grid-cols-[1.4fr_1fr]">
          <figure className="rounded-2xl bg-slate-900 p-9 text-white">
            <div className="flex gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <blockquote className="mt-5 text-[19px] leading-relaxed font-medium tracking-[-0.01em]">
              “I’ve tried every notes app of the last decade. Recall is the
              first one where my archive got more useful as it got bigger
              instead of less.”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-indigo-400 to-sky-400 text-[13px] font-bold">
                NF
              </span>
              <span className="text-[13px]">
                <span className="block font-semibold">Dr. Naomi Ferrand</span>
                <span className="text-slate-400">
                  Computational biologist · 11,400 notes
                </span>
              </span>
            </figcaption>
          </figure>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {[
              ["38ms", "to search 50,000 notes"],
              ["1.4M", "links created every day"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="flex flex-col justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8"
              >
                <p className="text-[38px] leading-none font-extrabold tracking-[-0.04em] text-indigo-600">
                  {value}
                </p>
                <p className="mt-2 text-[14px] font-medium text-slate-600">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          id="cta"
          className="relative mb-24 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-sky-500 px-8 py-16 text-center text-white"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 animate-sweep bg-gradient-to-r from-transparent via-white/12 to-transparent"
          />
          <h2 className="relative text-[clamp(2rem,4.2vw,3rem)] leading-tight font-extrabold tracking-[-0.035em]">
            Your second brain starts with one note
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-[16px] text-indigo-50">
            Free for your first 500 notes. $8/month for unlimited and encrypted
            sync. Cancel in two clicks, keep every file.
          </p>
          <div className="relative mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#"
              className="rounded-full bg-white px-7 py-3.5 text-[14.5px] font-bold text-indigo-700 shadow-xl transition-transform hover:scale-[1.03]"
            >
              Get started free
            </a>
            <a
              href="#"
              className="rounded-full border border-white/40 px-7 py-3.5 text-[14.5px] font-semibold transition-colors hover:bg-white/10"
            >
              Talk to us
            </a>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 pb-24 text-[13px] text-slate-500">
          <p className="font-medium">© 2026 Recall Labs, Inc.</p>
          <div className="flex gap-6 font-medium">
            <a className="hover:text-slate-900" href="#">
              Privacy
            </a>
            <a className="hover:text-slate-900" href="#">
              Security
            </a>
            <a className="hover:text-slate-900" href="#">
              Status
            </a>
            <a className="hover:text-slate-900" href="#">
              Careers
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
