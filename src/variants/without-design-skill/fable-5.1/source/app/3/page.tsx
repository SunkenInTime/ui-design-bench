const YELLOW = "#ffd43b";
const PINK = "#ff8fab";
const BLUE = "#74c0fc";
const GREEN = "#8ce99a";
const LILAC = "#d0bfff";

const card =
  "border-[2.5px] border-black bg-white shadow-[6px_6px_0_0_#000] transition-transform";

function Sticky({
  color,
  rotate,
  children,
  className = "",
}: {
  color: string;
  rotate: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border-[2.5px] border-black p-5 shadow-[6px_6px_0_0_#000] ${className}`}
      style={{ background: color, transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}

const FEATURES = [
  {
    color: YELLOW,
    title: "Capture in 1 tap",
    body: "Widget, share sheet, keyboard shortcut, email. If it's in your head, it's in Tessera before you lose it.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    color: BLUE,
    title: "Link with [[ ]]",
    body: "Two brackets and any note becomes connected. Backlinks show up on their own. No folders required, ever.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M10 13a5 5 0 007.07 0l3-3a5 5 0 00-7.07-7.07l-1.5 1.5" />
        <path d="M14 11a5 5 0 00-7.07 0l-3 3a5 5 0 007.07 7.07l1.5-1.5" />
      </svg>
    ),
  },
  {
    color: PINK,
    title: "Find it by vibe",
    body: "Search for what you meant, not what you typed. 'That thing about habits' actually works.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" className="h-8 w-8">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4-4" />
      </svg>
    ),
  },
  {
    color: GREEN,
    title: "Old notes, new you",
    body: "Every morning: three notes from your past that relate to what you're working on now. Spooky, in a good way.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M3 12a9 9 0 019-9 9 9 0 016.7 3M21 12a9 9 0 01-9 9 9 9 0 01-6.7-3" />
        <path d="M18 2v4h-4M6 22v-4h4" />
      </svg>
    ),
  },
];

const QUOTES = [
  { c: YELLOW, r: -2, t: "I finally stopped keeping 40 tabs open 'to remember later'.", a: "Priya, product designer" },
  { c: LILAC, r: 1.5, t: "It's the first notes app where my old notes actually come back to me.", a: "Tomas, PhD student" },
  { c: BLUE, r: -1, t: "Plain markdown files. If Tessera disappears tomorrow I still have everything.", a: "Ana, engineer" },
];

export default function Page() {
  return (
    <div className="dotgrid-dark min-h-screen bg-[#fff8e7] font-grotesk text-black">
      {/* Nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-6 md:px-10">
        <div className="flex items-center gap-2">
          <span
            className="grid h-9 w-9 place-items-center border-[2.5px] border-black text-[18px] font-bold shadow-[3px_3px_0_0_#000]"
            style={{ background: YELLOW }}
          >
            T
          </span>
          <span className="text-[20px] font-bold tracking-tight">tessera</span>
        </div>
        <nav className="hidden items-center gap-7 text-[15px] font-medium md:flex">
          <a className="underline-offset-4 hover:underline" href="#features">Features</a>
          <a className="underline-offset-4 hover:underline" href="#love">Love</a>
          <a className="underline-offset-4 hover:underline" href="#pricing">Pricing</a>
        </nav>
        <a
          href="#"
          className={`${card} px-4 py-2 text-[15px] font-bold hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_#000]`}
          style={{ background: PINK }}
        >
          Get it free
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-16 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:pt-24">
        <div>
          <div
            className="inline-block border-[2.5px] border-black px-3 py-1 text-[13px] font-bold uppercase tracking-wider shadow-[3px_3px_0_0_#000]"
            style={{ background: GREEN }}
          >
            Your second brain, but fun
          </div>
          <h1 className="mt-6 text-balance text-[56px] font-bold leading-[0.95] tracking-[-0.03em] md:text-[84px]">
            Stop losing your{" "}
            <span className="relative inline-block">
              <span
                className="absolute inset-x-[-4px] bottom-[6px] top-[58%] -z-10 -rotate-1"
                style={{ background: YELLOW }}
              />
              best ideas.
            </span>
          </h1>
          <p className="mt-7 max-w-[46ch] text-pretty text-[19px] leading-[1.5]">
            Tessera is a notes app that links everything together so you never
            have to remember where you put a thought. Jot it, link it, and
            it&rsquo;ll find its way back to you.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className={`${card} px-6 py-3.5 text-[17px] font-bold hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_#000]`}
              style={{ background: BLUE }}
            >
              Start scribbling →
            </a>
            <a
              href="#"
              className={`${card} px-6 py-3.5 text-[17px] font-bold hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_#000]`}
            >
              See it work
            </a>
          </div>
          <div className="mt-6 flex items-center gap-3 text-[14px] font-medium">
            <div className="flex -space-x-2">
              {[YELLOW, PINK, BLUE, GREEN].map((c) => (
                <span key={c} className="h-7 w-7 rounded-full border-2 border-black" style={{ background: c }} />
              ))}
            </div>
            48,000 brains and counting
          </div>
        </div>

        {/* Sticky note pile */}
        <div className="relative h-[420px] md:h-[480px]">
          <Sticky color={YELLOW} rotate={-4} className="absolute left-0 top-4 w-[240px]">
            <div className="text-[12px] font-bold uppercase tracking-wider opacity-60">idea</div>
            <p className="mt-2 text-[17px] font-medium leading-snug">
              What if the weekly review was a <span className="underline decoration-[3px]">[[ritual]]</span> not a chore?
            </p>
          </Sticky>
          <Sticky color={PINK} rotate={3} className="absolute right-0 top-24 w-[250px]">
            <div className="text-[12px] font-bold uppercase tracking-wider opacity-60">reading</div>
            <p className="mt-2 text-[17px] font-medium leading-snug">
              &ldquo;Memory is the residue of thought.&rdquo; — Willingham
            </p>
            <div className="mt-3 text-[12px] font-bold">↳ 4 backlinks</div>
          </Sticky>
          <Sticky color={BLUE} rotate={-1.5} className="absolute bottom-16 left-10 w-[260px]">
            <div className="text-[12px] font-bold uppercase tracking-wider opacity-60">today</div>
            <ul className="mt-2 space-y-1.5 text-[16px] font-medium">
              <li className="flex items-center gap-2"><span className="grid h-4 w-4 place-items-center border-2 border-black bg-white text-[10px]">✓</span> Outline talk</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 border-2 border-black bg-white" /> Reply to Maren</li>
              <li className="flex items-center gap-2"><span className="h-4 w-4 border-2 border-black bg-white" /> Link <span className="underline decoration-[3px]">[[habit stacking]]</span></li>
            </ul>
          </Sticky>
          <Sticky color={GREEN} rotate={5} className="absolute bottom-0 right-6 w-[210px]">
            <div className="text-[12px] font-bold uppercase tracking-wider opacity-60">resurfaced · 2019</div>
            <p className="mt-2 text-[16px] font-medium leading-snug">You wrote this 7 years ago. Still true?</p>
          </Sticky>
          <div className="absolute left-1/2 top-1/2 -z-10 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border-[2.5px] border-dashed border-black/30" />
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y-[2.5px] border-black bg-black py-3 text-[#fff8e7]">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-[15px] font-bold uppercase tracking-wider">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-10">
              {["Capture", "★", "Link", "★", "Rediscover", "★", "Plain markdown", "★", "No folders", "★", "Works offline", "★", "Yours forever", "★"].map((w, i) => (
                <span key={i} style={{ color: w === "★" ? YELLOW : undefined }}>{w}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <h2 className="text-balance text-[40px] font-bold leading-[1] tracking-[-0.03em] md:text-[60px]">
          Everything a brain should do,
          <br />
          minus the forgetting.
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div key={f.title} className={`${card} p-7 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#000]`}>
              <div
                className="inline-grid h-14 w-14 place-items-center border-[2.5px] border-black shadow-[3px_3px_0_0_#000]"
                style={{ background: f.color }}
              >
                {f.icon}
              </div>
              <h3 className="mt-5 text-[26px] font-bold leading-tight tracking-tight">{f.title}</h3>
              <p className="mt-2 text-pretty text-[16px] leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quotes */}
      <section id="love" className="border-y-[2.5px] border-black" style={{ background: LILAC }}>
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <div className="flex items-end justify-between">
            <h2 className="text-[40px] font-bold leading-[1] tracking-[-0.03em] md:text-[56px]">People like it.</h2>
            <span className="hidden text-[15px] font-bold md:block">4.9 ★ on every store that has stars</span>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {QUOTES.map((q) => (
              <Sticky key={q.a} color={q.c} rotate={q.r}>
                <p className="text-[19px] font-medium leading-snug">&ldquo;{q.t}&rdquo;</p>
                <div className="mt-4 text-[13px] font-bold uppercase tracking-wider opacity-70">— {q.a}</div>
              </Sticky>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <h2 className="text-center text-[40px] font-bold leading-[1] tracking-[-0.03em] md:text-[56px]">Two plans. No math.</h2>
        <div className="mx-auto mt-12 grid max-w-3xl gap-8 md:grid-cols-2">
          <div className={`${card} p-8`}>
            <div className="text-[14px] font-bold uppercase tracking-wider">Free</div>
            <div className="mt-3 text-[60px] font-bold leading-none tracking-tight">$0</div>
            <ul className="mt-6 space-y-2 text-[16px] font-medium">
              <li>✓ 1,000 notes</li>
              <li>✓ Links, backlinks, daily notes</li>
              <li>✓ Markdown on your disk</li>
              <li>✓ One device</li>
            </ul>
            <a href="#" className={`${card} mt-8 block py-3 text-center text-[16px] font-bold hover:-translate-y-0.5`}>
              Start free
            </a>
          </div>
          <div className={`${card} p-8`} style={{ background: YELLOW }}>
            <div className="flex items-center justify-between">
              <div className="text-[14px] font-bold uppercase tracking-wider">Plus</div>
              <span className="border-2 border-black bg-white px-2 py-0.5 text-[11px] font-bold uppercase">Popular</span>
            </div>
            <div className="mt-3 text-[60px] font-bold leading-none tracking-tight">
              $6<span className="text-[20px]">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-[16px] font-medium">
              <li>✓ Unlimited notes</li>
              <li>✓ Semantic search</li>
              <li>✓ Encrypted sync, all devices</li>
              <li>✓ Publish notes as pages</li>
            </ul>
            <a href="#" className={`${card} mt-8 block bg-black py-3 text-center text-[16px] font-bold text-white hover:-translate-y-0.5`}>
              Go Plus
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t-[2.5px] border-black bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-[14px] font-medium md:flex-row md:items-center md:justify-between md:px-10">
          <span>© 2026 Tessera. Made with too many sticky notes.</span>
          <div className="flex gap-6">
            <a className="hover:underline" href="#">Help</a>
            <a className="hover:underline" href="#">Blog</a>
            <a className="hover:underline" href="#">Privacy</a>
            <a className="hover:underline" href="#">@tessera</a>
          </div>
        </div>
        <div className="h-16" />
      </footer>
    </div>
  );
}
