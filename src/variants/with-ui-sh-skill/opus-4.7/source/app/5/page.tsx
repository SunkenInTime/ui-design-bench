import Link from "next/link";

export default function GardenVariant() {
  return (
    <div className="min-h-dvh bg-[#f1eedd] text-[#23311e] font-dm isolate overflow-hidden">
      <BotanicalBackdrop />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-7 sm:px-10">
        <Link href="/5" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-full bg-[#3f5538] text-[#e8e4d4]">
            <LeafIcon className="size-5" />
          </span>
          <span className="font-fraunces text-2xl tracking-tight">Mnema</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {[
            ["grow", "How it grows"],
            ["plots", "Your plots"],
            ["seasons", "Seasons"],
            ["price", "Seed packets"],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-[#3f5538] hover:text-[#23311e] hover:underline underline-offset-[6px] decoration-[#a8b89e]"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#"
          className="rounded-full bg-[#3f5538] px-5 py-2.5 text-sm text-[#f1eedd] hover:bg-[#23311e] transition"
        >
          Plant your first note
        </a>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-12 pb-28 sm:px-10 sm:pt-20 sm:pb-40">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 font-fraunces text-sm italic text-[#5d6f57]">
              <span className="h-px w-10 bg-[#a8b89e]" />
              For the slow gardener of ideas
            </p>
            <h1 className="mt-6 text-balance font-fraunces text-5xl leading-[1.02] tracking-tight sm:text-7xl md:text-[5.5rem]">
              Tend the
              <br />
              <span className="italic text-[#3f5538]">garden</span> of
              <br />
              what you know.
            </h1>
            <p className="mt-8 max-w-[54ch] text-pretty text-lg leading-relaxed text-[#3f5538]">
              Mnema is a second brain shaped like a garden — every note a
              seedling, every link a vine, every revisit a season. You write
              when you want; the garden quietly composts the rest into
              something worth returning to.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="rounded-full bg-[#3f5538] px-6 py-3 text-sm text-[#f1eedd] hover:bg-[#23311e] transition"
              >
                Begin a plot — free
              </a>
              <a
                href="#grow"
                className="text-sm text-[#3f5538] underline underline-offset-[6px] decoration-[#a8b89e] hover:decoration-[#3f5538]"
              >
                Wander first ↓
              </a>
            </div>
            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-[#a8b89e]/40 pt-8 text-sm">
              {[
                ["18,420", "gardeners"],
                ["1.2M", "notes growing"],
                ["7 yrs", "oldest plot"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-fraunces text-3xl tracking-tight tabular-nums">
                    {n}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wide text-[#5d6f57]">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:col-span-5">
            <HeroIllustration />
          </div>
        </div>
      </section>

      <section
        id="grow"
        className="relative z-10 border-y border-[#a8b89e]/40 bg-[#e6e3cf]/60"
      >
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="max-w-3xl">
            <p className="font-fraunces text-sm italic text-[#5d6f57]">
              How a thought becomes a harvest
            </p>
            <h2 className="mt-4 max-w-[20ch] font-fraunces text-balance text-4xl tracking-tight sm:text-5xl">
              From{" "}
              <span className="italic text-[#3f5538]">seedling</span> to season
              to harvest.
            </h2>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              {
                stage: "I.",
                name: "Seedling",
                glyph: <SeedIcon className="size-10 text-[#7d9173]" />,
                body: "Drop a thought, a quote, a half-line of dialogue. Mnema files it gently — no folder, no category. Just a tiny green entry in the bed.",
                meta: "≈ 5 seconds to capture",
              },
              {
                stage: "II.",
                name: "Cutting",
                glyph: <BranchIcon className="size-10 text-[#5d6f57]" />,
                body: "As you keep writing, neighboring notes grow toward each other. Mnema offers the cuttings — &lsquo;these three want to live in the same bed.&rsquo;",
                meta: "≈ weekly tending",
              },
              {
                stage: "III.",
                name: "Harvest",
                glyph: <FlowerIcon className="size-10 text-[#3f5538]" />,
                body: "Months later you ask a question. The garden answers in your own voice — quoting your past notes, dated, annotated, ready to compose.",
                meta: "≈ a single keystroke",
              },
            ].map((s) => (
              <div
                key={s.name}
                className="relative rounded-3xl border border-[#a8b89e]/60 bg-[#f1eedd] p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-fraunces text-2xl italic text-[#5d6f57]">
                    {s.stage}
                  </span>
                  {s.glyph}
                </div>
                <h3 className="mt-8 font-fraunces text-3xl tracking-tight">
                  {s.name}
                </h3>
                <p
                  className="mt-4 text-pretty leading-relaxed text-[#3f5538]"
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
                <p className="mt-6 font-mono text-[0.6875rem] uppercase tracking-wide text-[#7d9173]">
                  {s.meta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plots" className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="font-fraunces text-sm italic text-[#5d6f57]">
              A walk through one plot
            </p>
            <h2 className="mt-4 max-w-[18ch] font-fraunces text-balance text-4xl tracking-tight sm:text-5xl">
              Every note is{" "}
              <span className="italic text-[#3f5538]">pressed</span>, dated,
              and ready to revisit.
            </h2>
            <p className="mt-6 max-w-[44ch] text-pretty leading-relaxed text-[#3f5538]">
              Mnema treats your archive like a herbarium — each note kept with
              the date it bloomed, the soil it grew from, and the plants it
              sat next to. Open any leaf to find what was alive around it.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  date: "Apr 14, 2026",
                  tag: "annual",
                  title: "On planting things you may never harvest",
                  excerpt:
                    "From an interview with a 90-year-old beekeeper: &lsquo;the trees you plant in your seventies are not for you.&rsquo;",
                  rotate: "-rotate-1",
                  bg: "bg-[#e6e3cf]",
                },
                {
                  date: "Mar 02, 2026",
                  tag: "perennial",
                  title: "Compounding rituals",
                  excerpt:
                    "Three years of small mornings outranks any single brilliant week. The garden remembers continuity.",
                  rotate: "rotate-1",
                  bg: "bg-[#dde2c4]",
                },
                {
                  date: "Feb 19, 2026",
                  tag: "cutting",
                  title: "Rilke, on living the questions",
                  excerpt:
                    "&lsquo;Be patient toward all that is unsolved in your heart and try to love the questions themselves.&rsquo;",
                  rotate: "rotate-1",
                  bg: "bg-[#eee9d3]",
                },
                {
                  date: "Jan 11, 2026",
                  tag: "seedling",
                  title: "Why I stopped sorting by folder",
                  excerpt:
                    "Folders presume you know the shape of a thought before it has finished growing.",
                  rotate: "-rotate-1",
                  bg: "bg-[#e6e3cf]",
                },
              ].map((n) => (
                <div
                  key={n.title}
                  className={`rounded-2xl border border-[#a8b89e]/60 ${n.bg} p-6 shadow-[0_2px_0_rgba(45,60,40,0.06)] ${n.rotate}`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono uppercase tracking-wide text-[#5d6f57]">
                      {n.date}
                    </span>
                    <span className="rounded-full bg-[#3f5538]/10 px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-wide text-[#3f5538]">
                      {n.tag}
                    </span>
                  </div>
                  <h4 className="mt-4 font-fraunces text-xl leading-snug">
                    {n.title}
                  </h4>
                  <p
                    className="mt-3 text-sm leading-relaxed text-[#3f5538]"
                    dangerouslySetInnerHTML={{ __html: n.excerpt }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="seasons"
        className="relative z-10 border-y border-[#a8b89e]/40 bg-[#3f5538] text-[#f1eedd]"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="font-fraunces text-sm italic text-[#c8d4be]">
                A note from the gardeners
              </p>
              <p className="mt-6 font-fraunces text-3xl text-balance leading-snug sm:text-4xl">
                &ldquo;I&apos;ve kept commonplace books for twenty years. Mnema is
                the first one that holds itself open in the rain — that
                <em className="font-fraunces italic"> remembers</em> for me on
                the days I forget to come outside.&rdquo;
              </p>
            </div>
            <div className="md:col-span-5 md:text-right">
              <p className="font-fraunces text-xl italic">— Hannah Lin</p>
              <p className="mt-1 text-sm text-[#c8d4be]">
                writer, beta gardener since 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="price" className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
        <div className="text-center">
          <p className="font-fraunces text-sm italic text-[#5d6f57]">
            Two seed packets
          </p>
          <h2 className="mx-auto mt-4 max-w-[24ch] font-fraunces text-balance text-4xl tracking-tight sm:text-5xl">
            Pick your packet, plant a row.
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {[
            {
              name: "Allotment",
              tagline: "for the new gardener",
              price: "Free",
              feats: [
                "300 notes / season",
                "Daily revisits",
                "Web + iPhone",
                "Markdown export",
              ],
              cta: "Plant something",
              dark: false,
            },
            {
              name: "Greenhouse",
              tagline: "for the long tender",
              price: "$8 / mo",
              feats: [
                "Unlimited notes, perennial",
                "Cuttings + neighborhood view",
                "Mac, iPhone, iPad, web",
                "End-to-end encrypted soil",
                "Yearly hand-bound archive",
              ],
              cta: "Grow with us",
              dark: true,
            },
          ].map((p) => (
            <div
              key={p.name}
              className={`relative overflow-hidden rounded-3xl border ${
                p.dark
                  ? "border-[#3f5538] bg-[#3f5538] text-[#f1eedd]"
                  : "border-[#a8b89e]/60 bg-[#f1eedd] text-[#23311e]"
              } p-8 sm:p-10`}
            >
              <div
                className={`pointer-events-none absolute -top-10 -right-10 size-40 rounded-full ${
                  p.dark ? "bg-[#5d6f57]/40" : "bg-[#a8b89e]/30"
                } blur-2xl`}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <h3 className="font-fraunces text-3xl">{p.name}</h3>
                  <LeafIcon className={`size-6 ${p.dark ? "text-[#c8d4be]" : "text-[#7d9173]"}`} />
                </div>
                <p
                  className={`mt-2 font-fraunces text-sm italic ${
                    p.dark ? "text-[#c8d4be]" : "text-[#5d6f57]"
                  }`}
                >
                  {p.tagline}
                </p>
                <p className="mt-7 font-fraunces text-5xl tracking-tight tabular-nums">
                  {p.price}
                </p>
                <ul role="list" className="mt-7 space-y-3">
                  {p.feats.map((f) => (
                    <li key={f} className="flex items-start gap-3 leading-relaxed">
                      <span
                        className={`mt-2 size-1.5 rounded-full ${
                          p.dark ? "bg-[#c8d4be]" : "bg-[#3f5538]"
                        }`}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`mt-9 inline-block w-full rounded-full px-5 py-3 text-center text-sm transition ${
                    p.dark
                      ? "bg-[#f1eedd] text-[#23311e] hover:bg-white"
                      : "bg-[#3f5538] text-[#f1eedd] hover:bg-[#23311e]"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#a8b89e]/40 bg-[#e6e3cf]/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-full bg-[#3f5538] text-[#e8e4d4]">
                <LeafIcon className="size-5" />
              </span>
              <span className="font-fraunces text-2xl">Mnema</span>
            </div>
            <p className="mt-3 max-w-[40ch] font-fraunces text-sm italic text-[#5d6f57]">
              A second brain shaped like a garden. Tended by four people in a
              greenhouse in Oakland.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-[#3f5538]">
            <a href="#" className="hover:underline underline-offset-4">Manifesto</a>
            <a href="#" className="hover:underline underline-offset-4">Letters</a>
            <a href="#" className="hover:underline underline-offset-4">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 19c0-9 7-15 16-15-1 9-7 15-16 15z"
        fill="currentColor"
      />
      <path
        d="M4 19C7 16 11 13 16 11"
        stroke="rgba(241,238,221,0.7)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SeedIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <ellipse cx="20" cy="26" rx="6" ry="9" fill="currentColor" />
      <path
        d="M20 17V8M20 8c0-2 2-3 4-3M20 8c0-2-2-3-4-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function BranchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 36V8M20 22c-4 0-7-2-9-6M20 16c4 0 7-2 9-6M20 28c-3 0-5-1-7-4M20 10c3 0 5-1 7-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function FlowerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <circle cx="20" cy="14" r="4" fill="currentColor" />
      <circle cx="13" cy="18" r="4" fill="currentColor" opacity="0.85" />
      <circle cx="27" cy="18" r="4" fill="currentColor" opacity="0.85" />
      <circle cx="16" cy="11" r="4" fill="currentColor" opacity="0.7" />
      <circle cx="24" cy="11" r="4" fill="currentColor" opacity="0.7" />
      <circle cx="20" cy="14" r="2" fill="#f1eedd" />
      <path
        d="M20 18v18M14 30c2-2 4-3 6-3s4 1 6 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function HeroIllustration() {
  return (
    <div className="relative aspect-square w-full max-w-md mx-auto">
      <div
        className="absolute inset-0 rounded-full bg-[#dde2c4]/70"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 60%, transparent 100%)",
        }}
      />
      <svg
        viewBox="0 0 400 400"
        className="relative size-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="leafGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7d9173" />
            <stop offset="100%" stopColor="#3f5538" />
          </linearGradient>
        </defs>

        <path
          d="M200 320 C200 240 200 180 200 100"
          stroke="#3f5538"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M200 240 C160 230 130 200 110 160"
          stroke="#3f5538"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M200 200 C240 195 270 175 290 150"
          stroke="#3f5538"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M200 160 C170 150 150 130 140 100"
          stroke="#3f5538"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M200 130 C230 120 250 100 260 80"
          stroke="#3f5538"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        <g transform="translate(110 160) rotate(-30)">
          <ellipse cx="0" cy="0" rx="30" ry="14" fill="url(#leafGrad)" />
          <path d="M-30 0 H30" stroke="#23311e" strokeWidth="1" opacity="0.4" />
        </g>
        <g transform="translate(290 150) rotate(30)">
          <ellipse cx="0" cy="0" rx="32" ry="15" fill="url(#leafGrad)" />
          <path d="M-32 0 H32" stroke="#23311e" strokeWidth="1" opacity="0.4" />
        </g>
        <g transform="translate(140 100) rotate(-50)">
          <ellipse cx="0" cy="0" rx="24" ry="11" fill="url(#leafGrad)" />
          <path d="M-24 0 H24" stroke="#23311e" strokeWidth="1" opacity="0.4" />
        </g>
        <g transform="translate(260 80) rotate(50)">
          <ellipse cx="0" cy="0" rx="26" ry="12" fill="url(#leafGrad)" />
          <path d="M-26 0 H26" stroke="#23311e" strokeWidth="1" opacity="0.4" />
        </g>
        <g transform="translate(200 100)">
          <ellipse cx="0" cy="-15" rx="18" ry="22" fill="url(#leafGrad)" />
          <path d="M0 -37 V7" stroke="#23311e" strokeWidth="1" opacity="0.4" />
        </g>

        <ellipse cx="200" cy="335" rx="120" ry="14" fill="#3f5538" opacity="0.35" />
        <path
          d="M80 335 C100 325 130 320 200 320 C270 320 300 325 320 335"
          stroke="#23311e"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />

        <circle cx="100" cy="345" r="3" fill="#3f5538" opacity="0.6" />
        <circle cx="130" cy="350" r="2" fill="#3f5538" opacity="0.5" />
        <circle cx="290" cy="348" r="2.5" fill="#3f5538" opacity="0.5" />
        <circle cx="320" cy="343" r="2" fill="#3f5538" opacity="0.6" />

        <text
          x="200"
          y="380"
          textAnchor="middle"
          fontSize="11"
          fill="#5d6f57"
          fontStyle="italic"
          fontFamily="var(--font-fraunces)"
        >
          your archive, in season
        </text>
      </svg>
    </div>
  );
}

function BotanicalBackdrop() {
  return (
    <>
      <svg
        className="pointer-events-none absolute -top-20 -right-20 size-[420px] opacity-30"
        viewBox="0 0 400 400"
        aria-hidden="true"
      >
        <g stroke="#5d6f57" strokeWidth="1.5" fill="none" strokeLinecap="round">
          <path d="M0 200 C 100 100, 200 100, 300 60" />
          <path d="M30 220 C 120 130, 220 140, 320 100" />
          <path d="M60 250 C 140 170, 240 180, 340 140" />
        </g>
        <g fill="#5d6f57" opacity="0.4">
          <ellipse cx="80" cy="180" rx="14" ry="6" transform="rotate(-30 80 180)" />
          <ellipse cx="160" cy="130" rx="14" ry="6" transform="rotate(-25 160 130)" />
          <ellipse cx="240" cy="105" rx="14" ry="6" transform="rotate(-15 240 105)" />
          <ellipse cx="120" cy="220" rx="14" ry="6" transform="rotate(-30 120 220)" />
          <ellipse cx="200" cy="170" rx="14" ry="6" transform="rotate(-20 200 170)" />
        </g>
      </svg>
      <svg
        className="pointer-events-none absolute -bottom-32 -left-20 size-[480px] opacity-25"
        viewBox="0 0 400 400"
        aria-hidden="true"
      >
        <g stroke="#3f5538" strokeWidth="1.5" fill="none" strokeLinecap="round">
          <path d="M400 200 C 300 280, 200 280, 100 320" />
          <path d="M380 170 C 280 250, 180 250, 80 290" />
          <path d="M360 140 C 260 220, 160 220, 60 260" />
        </g>
        <g fill="#3f5538" opacity="0.45">
          <ellipse cx="320" cy="240" rx="14" ry="6" transform="rotate(20 320 240)" />
          <ellipse cx="240" cy="280" rx="14" ry="6" transform="rotate(15 240 280)" />
          <ellipse cx="160" cy="305" rx="14" ry="6" transform="rotate(10 160 305)" />
        </g>
      </svg>
    </>
  );
}
