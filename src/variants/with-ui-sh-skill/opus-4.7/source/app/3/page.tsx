import Link from "next/link";

export default function NotebookVariant() {
  return (
    <div
      className="min-h-dvh bg-[#fbf5e8] text-neutral-900 font-dm isolate"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(60,40,20,0.10) 1px, transparent 0)",
        backgroundSize: "22px 22px",
      }}
    >
      <header className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
        <div className="flex items-center justify-between rounded-2xl border border-neutral-900/10 bg-white/70 px-4 py-3 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-sm sm:px-6">
          <Link href="/3" className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-xl bg-[#f6c177] text-lg shadow-inner">
              ✿
            </span>
            <span className="text-lg font-medium tracking-tight">Mnema</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {[
              ["features", "Capture"],
              ["routine", "Routine"],
              ["price", "Pricing"],
              ["faq", "FAQ"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-xl px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-900/5"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="rounded-xl px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-900/5"
            >
              Sign in
            </a>
            <a
              href="#"
              className="rounded-xl bg-neutral-900 px-3.5 py-1.5 text-sm text-white shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_2px_8px_rgba(0,0,0,0.1)] hover:bg-neutral-800"
            >
              Try free
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pt-10 pb-20 sm:px-8 sm:pt-16 sm:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-amber-100/70 px-3 py-1 text-xs font-medium text-amber-900">
              <span className="size-1.5 rounded-full bg-amber-500" />
              New: Daily Reflections is here
            </div>
            <h1 className="mt-7 text-balance text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              A cozy little place
              <br />
              for your{" "}
              <span className="font-serif italic text-[#a86b35]">
                second brain.
              </span>
            </h1>
            <p className="mt-6 max-w-[52ch] text-pretty text-lg leading-relaxed text-neutral-700">
              Mnema is a notebook that remembers everything for you — quotes you
              loved, ideas mid-shower, the name of that restaurant from last
              August. Soft, slow, and shaped like the way you actually think.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_4px_14px_rgba(0,0,0,0.15)] hover:bg-neutral-800"
              >
                Start your notebook
              </a>
              <a
                href="#features"
                className="rounded-xl border border-neutral-900/10 bg-white/80 px-5 py-3 text-sm font-medium text-neutral-800 shadow-[0_1px_0_rgba(0,0,0,0.03)] hover:bg-white"
              >
                See how it feels →
              </a>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["#f6c177", "#b6d3a3", "#f3a4b5", "#a8c4ec"].map((c) => (
                  <span
                    key={c}
                    className="size-8 rounded-full border-2 border-[#fbf5e8]"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <p className="text-sm text-neutral-700">
                <span className="font-medium text-neutral-900">14,000+</span>{" "}
                quiet thinkers writing daily
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 hidden size-24 rotate-[-6deg] rounded-full bg-amber-200/70 blur-2xl sm:block" />
            <div className="absolute -bottom-6 -right-6 hidden size-32 rotate-12 rounded-full bg-rose-200/70 blur-2xl sm:block" />
            <div className="relative -rotate-1 rounded-3xl border border-neutral-900/10 bg-white p-6 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.18),0_8px_20px_-8px_rgba(0,0,0,0.08)] sm:p-8">
              <div className="flex items-center justify-between">
                <p className="font-serif text-xl">Tuesday, March 12</p>
                <span className="rounded-full bg-neutral-900/5 px-2.5 py-1 font-mono text-[0.6875rem] tracking-wide text-neutral-600 uppercase">
                  Note · 04
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-medium leading-snug">
                Things I want to remember about today
              </h3>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                The way the morning light hit the kitchen counter. A line from
                an old letter:{" "}
                <mark className="bg-amber-200/80 px-1 text-neutral-900">
                  &ldquo;the days are long, the years are short.&rdquo;
                </mark>{" "}
                Need to reread{" "}
                <span className="rounded-md bg-rose-100 px-1.5 py-0.5 text-rose-900">
                  Annie Dillard
                </span>{" "}
                this weekend.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
                {["#mornings", "#letters", "#reading-list"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-neutral-900/10 bg-neutral-900/5 px-2.5 py-1 font-mono text-neutral-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-dashed border-neutral-900/15 pt-4 text-xs text-neutral-600">
                <span>↳ links to 3 older notes</span>
                <span className="font-mono">last edited · 2m ago</span>
              </div>
            </div>
            <div className="absolute -right-3 top-10 rotate-6 rounded-2xl border border-neutral-900/10 bg-rose-200/90 px-4 py-3 shadow-md">
              <p className="font-serif text-sm italic text-rose-950">
                pinned · re-read in May
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-[#a86b35] uppercase">
            What it does
          </p>
          <h2 className="mt-4 max-w-[20ch] text-balance text-4xl font-medium tracking-tight sm:text-5xl">
            Three soft tools, used every day.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            {
              chip: "Capture",
              chipBg: "bg-amber-200 text-amber-950",
              icon: "✎",
              iconBg: "bg-amber-100",
              title: "Catch it before it goes",
              body: "Open a fresh page in two keystrokes. Voice notes, photos, a quote from anywhere on the web — Mnema files it, dates it, and remembers where it came from.",
            },
            {
              chip: "Connect",
              chipBg: "bg-rose-200 text-rose-950",
              icon: "✿",
              iconBg: "bg-rose-100",
              title: "Notice the patterns",
              body: "Mnema quietly threads related notes together. The link you didn't know you were making last month surfaces exactly when you need it again.",
            },
            {
              chip: "Reflect",
              chipBg: "bg-emerald-200 text-emerald-950",
              icon: "♡",
              iconBg: "bg-emerald-100",
              title: "Re-read your own mind",
              body: "Each morning, a small ritual: three notes from your own past, chosen with care. A gentle nudge from the version of you that knew something useful.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-3xl border border-neutral-900/10 bg-white p-7 shadow-[0_2px_0_rgba(0,0,0,0.04),0_20px_40px_-24px_rgba(0,0,0,0.15)]"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`grid size-10 place-items-center rounded-2xl text-xl ${f.iconBg}`}
                >
                  {f.icon}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 font-mono text-[0.6875rem] uppercase tracking-wide ${f.chipBg}`}
                >
                  {f.chip}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-medium leading-snug">{f.title}</h3>
              <p className="mt-3 text-pretty leading-relaxed text-neutral-700">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="routine"
        className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32"
      >
        <div className="rounded-[2rem] border border-neutral-900/10 bg-gradient-to-br from-amber-50 via-white to-rose-50 p-6 sm:p-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-sm font-medium tracking-wide text-[#a86b35] uppercase">
                A daily ritual
              </p>
              <h2 className="mt-4 text-balance text-4xl font-medium tracking-tight sm:text-5xl">
                Five minutes,
                <br />
                with your{" "}
                <span className="font-serif italic">past self.</span>
              </h2>
              <p className="mt-5 max-w-[44ch] text-pretty leading-relaxed text-neutral-700">
                Each morning Mnema picks a small handful of notes — something
                to revisit, something to expand, something to thank yourself
                for. A gentle conversation with the version of you that already
                knew.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ol role="list" className="space-y-3">
                {[
                  {
                    time: "07:14",
                    tag: "revisit",
                    tagBg: "bg-amber-200 text-amber-950",
                    text: "A note from last winter on slowing down weekend mornings.",
                  },
                  {
                    time: "07:16",
                    tag: "expand",
                    tagBg: "bg-rose-200 text-rose-950",
                    text: "&ldquo;Letter to a friend about ambition&rdquo; — three sentences, ready to grow.",
                  },
                  {
                    time: "07:19",
                    tag: "thank",
                    tagBg: "bg-emerald-200 text-emerald-950",
                    text: "You wrote down the way the apartment smelled in October. Still here.",
                  },
                ].map((s) => (
                  <li
                    key={s.time}
                    className="flex items-start gap-4 rounded-2xl border border-neutral-900/10 bg-white px-5 py-4 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
                  >
                    <span className="font-mono text-xs tabular-nums text-neutral-500 pt-1">
                      {s.time}
                    </span>
                    <div className="flex-1">
                      <span
                        className={`inline-block rounded-full px-2 py-0.5 font-mono text-[0.6875rem] uppercase tracking-wide ${s.tagBg}`}
                      >
                        {s.tag}
                      </span>
                      <p
                        className="mt-2 text-neutral-800 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: s.text }}
                      />
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="price" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="text-center">
          <p className="text-sm font-medium tracking-wide text-[#a86b35] uppercase">
            Pricing
          </p>
          <h2 className="mx-auto mt-4 max-w-[24ch] text-balance text-4xl font-medium tracking-tight sm:text-5xl">
            Pick a notebook, start writing.
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
          {[
            {
              name: "Pocket",
              price: "Free",
              tag: "starter",
              tagBg: "bg-amber-200 text-amber-950",
              feats: [
                "Up to 200 notes",
                "Daily reflections",
                "Web + iPhone",
                "Markdown export",
              ],
              cta: "Start free",
              ctaStyle:
                "border border-neutral-900/10 bg-white text-neutral-900 hover:bg-neutral-50",
            },
            {
              name: "Bound",
              price: "$6 / mo",
              tag: "everyone",
              tagBg: "bg-rose-200 text-rose-950",
              feats: [
                "Unlimited notes, forever",
                "Connections + graph view",
                "Mac, iPhone, iPad, web",
                "End-to-end encryption",
              ],
              cta: "Try Bound for 14 days",
              ctaStyle: "bg-neutral-900 text-white hover:bg-neutral-800",
              highlight: true,
            },
          ].map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl border border-neutral-900/10 p-7 ${
                p.highlight
                  ? "bg-white shadow-[0_30px_50px_-20px_rgba(0,0,0,0.15)]"
                  : "bg-white/70"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl">{p.name}</h3>
                <span
                  className={`rounded-full px-2.5 py-0.5 font-mono text-[0.6875rem] uppercase tracking-wide ${p.tagBg}`}
                >
                  {p.tag}
                </span>
              </div>
              <p className="mt-6 text-4xl font-medium tracking-tight tabular-nums">
                {p.price}
              </p>
              <ul role="list" className="mt-6 space-y-2.5 text-neutral-700">
                {p.feats.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="mt-2 size-1.5 rounded-full bg-[#a86b35]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-7 inline-block w-full rounded-xl px-4 py-3 text-center text-sm font-medium ${p.ctaStyle}`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer
        id="faq"
        className="mx-auto max-w-6xl px-5 pb-32 sm:px-8"
      >
        <div className="rounded-[2rem] border border-neutral-900/10 bg-neutral-900 px-6 py-10 text-[#fbf5e8] sm:px-12 sm:py-14">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-serif text-3xl italic">
                Mnema — your second brain, in soft focus.
              </p>
              <p className="mt-3 text-sm text-neutral-400">
                Made by three writers who needed it. Brooklyn, NY.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
              >
                Twitter
              </a>
              <a
                href="#"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
              >
                Newsletter
              </a>
              <a
                href="#"
                className="rounded-xl bg-amber-200 px-4 py-2 text-sm font-medium text-amber-950 hover:bg-amber-100"
              >
                Get the app
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
