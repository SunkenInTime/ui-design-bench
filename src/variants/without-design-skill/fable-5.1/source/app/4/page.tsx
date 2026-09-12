const ACCENT = "#3b5bdb";

function AppMock() {
  return (
    <div className="relative">
      <div className="absolute inset-x-8 -bottom-6 h-24 rounded-full bg-[#3b5bdb]/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)]">
        {/* Titlebar */}
        <div className="flex items-center gap-2 border-b border-black/[0.06] bg-[#fafafa] px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <div className="mx-auto flex items-center gap-2 rounded-md border border-black/[0.06] bg-white px-3 py-1 text-[11px] text-neutral-500">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
            Search or jump to… <kbd className="ml-4 rounded border border-black/10 px-1 font-mono text-[9px]">⌘K</kbd>
          </div>
        </div>
        <div className="grid grid-cols-[200px_1fr_220px] text-[12.5px]">
          {/* Sidebar */}
          <aside className="border-r border-black/[0.06] bg-[#fafafa] p-3">
            <div className="mb-3 flex items-center gap-2 px-2 py-1 text-[12px] font-medium text-neutral-800">
              <span className="grid h-5 w-5 place-items-center rounded bg-[#3b5bdb] text-[10px] font-bold text-white">D</span>
              Dara&rsquo;s vault
            </div>
            {[
              ["Daily notes", "18"],
              ["Inbox", "3"],
              ["Reading", "142"],
              ["Research", "89"],
              ["Projects", "27"],
            ].map(([n, c], i) => (
              <div
                key={n}
                className={`flex items-center justify-between rounded-md px-2 py-1.5 ${i === 2 ? "bg-black/[0.05] font-medium text-neutral-900" : "text-neutral-600"}`}
              >
                <span>{n}</span>
                <span className="font-mono text-[10px] text-neutral-400">{c}</span>
              </div>
            ))}
            <div className="mt-4 px-2 text-[10px] font-medium uppercase tracking-wider text-neutral-400">Tags</div>
            <div className="mt-1.5 flex flex-wrap gap-1 px-2">
              {["memory", "learning", "habits", "writing"].map((t) => (
                <span key={t} className="rounded bg-black/[0.05] px-1.5 py-0.5 text-[10px] text-neutral-600">#{t}</span>
              ))}
            </div>
          </aside>
          {/* Editor */}
          <main className="min-h-[380px] p-8">
            <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-400">
              Reading <span>/</span> Why we forget what we read
            </div>
            <h3 className="mt-3 text-[22px] font-semibold tracking-tight text-neutral-900">Why we forget what we read</h3>
            <div className="mt-1 flex gap-3 text-[11px] text-neutral-400">
              <span>Edited 2 min ago</span><span>·</span><span>412 words</span><span>·</span><span>3 backlinks</span>
            </div>
            <div className="mt-5 space-y-3 text-[13.5px] leading-[1.7] text-neutral-700">
              <p>
                Retention isn&rsquo;t about rereading — it&rsquo;s about{" "}
                <a className="rounded bg-[#3b5bdb]/10 px-1 text-[#2f4ac2] underline decoration-[#3b5bdb]/30 underline-offset-2">spaced retrieval</a>.
                Ebbinghaus showed the curve in 1885; the fix is to be reminded right before you&rsquo;d forget.
              </p>
              <p>
                That&rsquo;s the job of{" "}
                <a className="rounded bg-[#3b5bdb]/10 px-1 text-[#2f4ac2] underline decoration-[#3b5bdb]/30 underline-offset-2">resurfacing</a>
                {" "}— not a feed, a nudge.
                <span className="ml-px inline-block h-[15px] w-px translate-y-[3px] bg-[#3b5bdb] animate-blink" />
              </p>
              <ul className="ml-4 list-disc space-y-1 marker:text-neutral-400">
                <li>Test yourself before you look.</li>
                <li>Space the tests further apart each time.</li>
                <li>Interleave topics.</li>
              </ul>
            </div>
          </main>
          {/* Right panel */}
          <aside className="border-l border-black/[0.06] bg-[#fafafa] p-4">
            <div className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">Backlinks</div>
            <div className="mt-2 space-y-1.5">
              {["Ebbinghaus & the forgetting curve", "Weekly review — template", "Make It Stick — highlights"].map((b) => (
                <div key={b} className="rounded-md border border-black/[0.06] bg-white px-2.5 py-2 text-[11.5px] leading-snug text-neutral-700">{b}</div>
              ))}
            </div>
            <div className="mt-5 text-[10px] font-medium uppercase tracking-wider text-neutral-400">Local graph</div>
            <svg viewBox="0 0 180 110" className="mt-2 w-full rounded-md border border-black/[0.06] bg-white">
              {[[90, 55, 30, 25], [90, 55, 150, 30], [90, 55, 45, 90], [90, 55, 140, 85], [30, 25, 45, 90]].map(([a, b, c, d], i) => (
                <line key={i} x1={a} y1={b} x2={c} y2={d} stroke="#cbd5e1" />
              ))}
              {[[30, 25], [150, 30], [45, 90], [140, 85]].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="4" fill="#94a3b8" />
              ))}
              <circle cx="90" cy="55" r="6" fill={ACCENT} />
            </svg>
            <div className="mt-5 text-[10px] font-medium uppercase tracking-wider text-neutral-400">Resurfaced</div>
            <div className="mt-2 rounded-md border border-[#3b5bdb]/30 bg-[#3b5bdb]/[0.06] px-2.5 py-2 text-[11.5px] leading-snug text-neutral-700">
              <div className="font-mono text-[9px] text-[#2f4ac2]">14 months ago</div>
              Notes on the Feynman technique
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

const LOGOS = ["Linear", "Notion", "Figma", "Arc", "Vercel", "Loom", "Raycast"];

const SECTIONS = [
  {
    eyebrow: "Capture",
    title: "Get it out of your head in under a second.",
    body: "Global hotkey, browser clipper, share sheet, email-in and voice memos that transcribe themselves. Everything lands in an inbox you triage once a day.",
    bullets: ["Web clipper for Chrome, Safari, Arc", "Email anything to notes@", "Voice → text, on device"],
    mock: (
      <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2 rounded-lg border border-black/10 px-3 py-2 text-[13px] text-neutral-500">
          <span className="font-mono text-[11px] text-neutral-400">⌥ Space</span>
          <span className="h-4 w-px bg-black/10" />
          Quick note…
        </div>
        <div className="mt-3 space-y-2">
          {["Ask Maren about the Uppsala archive", "Idea: retrieval prompts in daily note", "Clip: 'Memory is the residue of thought'"].map((t, i) => (
            <div key={t} className="flex items-center gap-2 text-[13px] text-neutral-700">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: i === 0 ? ACCENT : "#cbd5e1" }} />
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    eyebrow: "Connect",
    title: "Links do the filing for you.",
    body: "Type [[ to link to any note. Backlinks appear automatically on both sides. Unlinked mentions get suggested. Over time the graph reflects how you actually think.",
    bullets: ["Bidirectional links", "Unlinked mention suggestions", "Block-level references"],
    mock: (
      <div className="rounded-xl border border-black/10 bg-white p-4 text-[13px] shadow-sm">
        <div className="text-neutral-700">
          Retention isn&rsquo;t about rereading — it&rsquo;s about [[spa
        </div>
        <div className="mt-2 overflow-hidden rounded-lg border border-black/10">
          {["spaced retrieval", "spaced repetition", "spacing effect (Ebbinghaus)"].map((s, i) => (
            <div key={s} className={`flex justify-between px-3 py-2 ${i === 0 ? "bg-[#3b5bdb]/10 text-[#2f4ac2]" : "text-neutral-600"}`}>
              <span>{s}</span>
              <span className="font-mono text-[10px] text-neutral-400">{[12, 7, 3][i]} links</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    eyebrow: "Recall",
    title: "Find it by what it meant.",
    body: "Search understands meaning, not just keywords. And each morning, Tessera resurfaces old notes that relate to what you're writing today — so nothing you learned stays buried.",
    bullets: ["Semantic search, <40ms on device", "Daily resurfacing digest", "Ask questions across your whole vault"],
    mock: (
      <div className="rounded-xl border border-black/10 bg-white p-4 text-[13px] shadow-sm">
        <div className="flex items-center gap-2 text-neutral-500">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
          that argument about attention being finite
        </div>
        <div className="mt-3 space-y-2">
          {[["Attention as a resource", 0.94], ["Deep Work — notes", 0.81], ["Flow state, Csikszentmihalyi", 0.77]].map(([t, s]) => (
            <div key={String(t)} className="flex items-center justify-between rounded-md border border-black/[0.06] px-3 py-2 text-neutral-700">
              <span>{t}</span>
              <span className="font-mono text-[10px] text-neutral-400">{s}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const PLANS = [
  { name: "Free", price: "$0", per: "", desc: "For getting started.", cta: "Start free", features: ["1,000 notes", "Links & backlinks", "Local Markdown files", "1 device"] },
  { name: "Plus", price: "$6", per: "/mo", desc: "For serious thinkers.", cta: "Start 14-day trial", featured: true, features: ["Unlimited notes", "Semantic search", "E2E encrypted sync", "Resurfacing digest", "Publish to web"] },
  { name: "Team", price: "$12", per: "/user/mo", desc: "Shared brains for small teams.", cta: "Contact sales", features: ["Everything in Plus", "Shared vaults", "Permissions & audit log", "SSO / SAML", "Priority support"] },
];

const FAQ = [
  ["Do I own my notes?", "Yes. Notes are plain Markdown files on your disk. You can open the folder with any editor, back it up with anything, and leave anytime."],
  ["Can you read my notes?", "No. Sync is end-to-end encrypted. Semantic search runs on device, so your content never leaves your machine unencrypted."],
  ["Can I import from Notion or Obsidian?", "One click for Obsidian vaults (they're already Markdown). Notion, Apple Notes, Evernote and Roam exports are supported too."],
  ["Is there a mobile app?", "iOS and Android, with offline support and the same encrypted sync."],
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-black/[0.06] bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 md:px-10">
          <div className="flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-md text-white" style={{ background: ACCENT }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M4 4h7v7H4zM13 13h7v7h-7zM13 4h7v7h-7z" /></svg>
            </span>
            <span className="text-[15px] font-semibold tracking-tight">Tessera</span>
          </div>
          <nav className="hidden items-center gap-7 text-[13.5px] text-neutral-600 md:flex">
            <a className="hover:text-neutral-900" href="#product">Product</a>
            <a className="hover:text-neutral-900" href="#pricing">Pricing</a>
            <a className="hover:text-neutral-900" href="#faq">FAQ</a>
            <a className="hover:text-neutral-900" href="#">Changelog</a>
            <a className="hover:text-neutral-900" href="#">Docs</a>
          </nav>
          <div className="flex items-center gap-2 text-[13.5px]">
            <a className="hidden rounded-md px-3 py-1.5 text-neutral-600 hover:text-neutral-900 sm:block" href="#">Sign in</a>
            <a href="#" className="rounded-md px-3.5 py-1.5 font-medium text-white shadow-sm transition hover:brightness-110" style={{ background: ACCENT }}>
              Get started
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 md:px-10 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#fafafa] py-1 pl-1 pr-3 text-[12.5px] text-neutral-600 transition hover:border-black/20">
            <span className="rounded-full px-2 py-0.5 text-[11px] font-medium text-white" style={{ background: ACCENT }}>New</span>
            Tessera 3.0 with on-device semantic search
            <span aria-hidden>→</span>
          </a>
          <h1 className="mt-6 text-balance text-[48px] font-semibold leading-[1.02] tracking-[-0.035em] md:text-[72px]">
            The notes app that remembers for you.
          </h1>
          <p className="mx-auto mt-6 max-w-[58ch] text-pretty text-[18px] leading-[1.6] text-neutral-600">
            Tessera is a second brain for people who read, research and build.
            Capture anything, link it in two keystrokes, and get it back when it
            matters — from plain Markdown files you own.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="rounded-md px-5 py-2.5 text-[15px] font-medium text-white shadow-sm transition hover:brightness-110" style={{ background: ACCENT }}>
              Download for Mac
            </a>
            <a href="#" className="rounded-md border border-black/10 bg-white px-5 py-2.5 text-[15px] font-medium text-neutral-800 transition hover:bg-neutral-50">
              Try in browser
            </a>
          </div>
          <p className="mt-4 text-[12.5px] text-neutral-500">Also on Windows, Linux, iOS and Android · Free up to 1,000 notes</p>
        </div>
        <div className="mt-16 hidden md:block">
          <AppMock />
        </div>
      </section>

      {/* Logos */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <p className="text-center text-[12.5px] font-medium uppercase tracking-wider text-neutral-400">
          Used by thinkers at
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-[18px] font-semibold tracking-tight text-neutral-400">
          {LOGOS.map((l) => <span key={l}>{l}</span>)}
        </div>
      </section>

      {/* Feature sections */}
      <section id="product" className="border-t border-black/[0.06] bg-[#fafafa]">
        <div className="mx-auto max-w-6xl space-y-28 px-6 py-28 md:px-10">
          {SECTIONS.map((s, i) => (
            <div key={s.eyebrow} className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <div className="text-[12.5px] font-medium uppercase tracking-wider" style={{ color: ACCENT }}>{s.eyebrow}</div>
                <h2 className="mt-3 text-balance text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] md:text-[42px]">{s.title}</h2>
                <p className="mt-4 text-pretty text-[16.5px] leading-[1.65] text-neutral-600">{s.body}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-[15px] text-neutral-700">
                      <span className="grid h-5 w-5 place-items-center rounded-full text-white" style={{ background: ACCENT }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-black/[0.06] bg-gradient-to-b from-white to-[#f1f3f9] p-6 md:p-10">{s.mock}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-28 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[48px]">Simple, honest pricing</h2>
          <p className="mt-4 text-[16.5px] text-neutral-600">Start free. Upgrade when your brain outgrows the plan.</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-7 ${p.featured ? "border-[#3b5bdb] shadow-[0_20px_50px_-25px_rgba(59,91,219,0.5)]" : "border-black/10"}`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-6 rounded-full px-2.5 py-0.5 text-[11px] font-medium text-white" style={{ background: ACCENT }}>
                  Most popular
                </span>
              )}
              <div className="text-[15px] font-semibold">{p.name}</div>
              <div className="mt-1 text-[13.5px] text-neutral-500">{p.desc}</div>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-[44px] font-semibold tracking-tight">{p.price}</span>
                <span className="text-[14px] text-neutral-500">{p.per}</span>
              </div>
              <a
                href="#"
                className={`mt-6 block rounded-md py-2.5 text-center text-[14.5px] font-medium transition ${p.featured ? "text-white hover:brightness-110" : "border border-black/10 hover:bg-neutral-50"}`}
                style={p.featured ? { background: ACCENT } : undefined}
              >
                {p.cta}
              </a>
              <ul className="mt-7 space-y-2.5 text-[14px] text-neutral-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-black/[0.06] bg-[#fafafa]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div>
            <h2 className="text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] md:text-[42px]">Questions</h2>
            <p className="mt-3 text-[15.5px] text-neutral-600">Anything else? <a className="underline underline-offset-2" href="#">Talk to a human.</a></p>
          </div>
          <div className="divide-y divide-black/[0.08]">
            {FAQ.map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-[16.5px] font-medium">
                  {q}
                  <span className="ml-4 text-neutral-400 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-[64ch] text-[15px] leading-relaxed text-neutral-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <div className="rounded-3xl px-8 py-16 text-center text-white md:px-16" style={{ background: "linear-gradient(135deg,#3b5bdb,#2f3fa8)" }}>
          <h2 className="text-balance text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[48px]">Your second brain starts with one note.</h2>
          <p className="mx-auto mt-4 max-w-[44ch] text-[16px] text-white/75">Free forever for up to 1,000 notes. Import in one click.</p>
          <a href="#" className="mt-8 inline-block rounded-md bg-white px-6 py-3 text-[15px] font-medium text-[#2f3fa8] transition hover:bg-neutral-100">
            Download Tessera
          </a>
        </div>
      </section>

      <footer className="border-t border-black/[0.06]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 text-[13.5px] md:grid-cols-5 md:px-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-md text-white" style={{ background: ACCENT }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M4 4h7v7H4zM13 13h7v7h-7zM13 4h7v7h-7z" /></svg>
              </span>
              <span className="font-semibold">Tessera</span>
            </div>
            <p className="mt-3 max-w-xs text-neutral-500">A second brain built on files you own.</p>
          </div>
          {[
            ["Product", ["Download", "Pricing", "Changelog", "Roadmap"]],
            ["Resources", ["Docs", "Guides", "Community", "Status"]],
            ["Company", ["About", "Blog", "Privacy", "Terms"]],
          ].map(([h, links]) => (
            <div key={String(h)}>
              <div className="font-medium">{h}</div>
              <ul className="mt-3 space-y-2 text-neutral-500">
                {(links as string[]).map((l) => (
                  <li key={l}><a className="hover:text-neutral-900" href="#">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="h-16" />
      </footer>
    </div>
  );
}
