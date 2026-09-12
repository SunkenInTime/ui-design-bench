import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cortex — Your second brain, finally awake',
}

const nodes = [
  { label: 'Sleep & memory', x: '8%', y: '12%', tag: '#neuroscience' },
  { label: 'Hippocampal replay', x: '62%', y: '6%', tag: '#paper' },
  { label: 'Deep work ritual', x: '76%', y: '38%', tag: '#habit' },
  { label: 'Spaced repetition', x: '10%', y: '58%', tag: '#method' },
  { label: 'Zettelkasten', x: '40%', y: '74%', tag: '#system' },
]

export default function Page() {
  return (
    <div className="min-h-dvh overflow-x-clip bg-zinc-950 font-sans text-zinc-100">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(600px circle at 15% 20%, rgba(124,58,237,0.28), transparent 60%), radial-gradient(700px circle at 85% 30%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(800px circle at 50% 90%, rgba(139,92,246,0.16), transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <header className="flex items-center justify-between py-6">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 shadow-lg shadow-violet-500/40">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M19.1 4.9l-2.8 2.8M7.7 16.3l-2.8 2.8" />
              </svg>
            </span>
            <span className="text-lg font-semibold tracking-tight">Cortex</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a href="#features" className="transition hover:text-white">Product</a>
            <a href="#method" className="transition hover:text-white">Method</a>
            <a href="#quote" className="transition hover:text-white">Customers</a>
            <a href="#" className="transition hover:text-white">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden text-sm text-zinc-400 transition hover:text-white sm:block">Sign in</a>
            <a href="#cta" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200">
              Start free
            </a>
          </div>
        </header>

        <main>
          <section className="pt-16 pb-10 text-center md:pt-24">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-1.5 text-xs font-medium text-violet-200 transition hover:bg-violet-400/20"
            >
              Introducing Recall v2 — your notes now resurface themselves
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
            <h1 className="mx-auto mt-8 max-w-3xl text-5xl leading-[1.05] font-semibold tracking-tight text-balance md:text-7xl">
              Your second brain,
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                finally awake.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 text-pretty">
              Cortex captures every fleeting thought, connects it to everything
              you already know, and quietly resurfaces it at the exact moment
              you need it.
            </p>

            <form action="#" className="mx-auto mt-10 flex max-w-md items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-sm">
              <input
                type="email"
                required
                placeholder="you@work.com"
                className="w-full bg-transparent px-4 text-sm text-white placeholder-zinc-500 outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:opacity-90"
              >
                Grow your brain
              </button>
            </form>
            <p className="mt-3 text-xs text-zinc-500">
              Free for your first 1,000 notes · No credit card
            </p>
          </section>

          <section aria-label="Knowledge graph preview" className="relative mx-auto h-[420px] max-w-4xl md:h-[480px]">
            <svg aria-hidden className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 800 460">
              <defs>
                <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="rgba(167,139,250,0.5)" />
                  <stop offset="100%" stopColor="rgba(103,232,249,0.35)" />
                </linearGradient>
              </defs>
              <g stroke="url(#edge)" strokeWidth="1.5" fill="none">
                <path d="M110 80 C 220 120, 280 180, 380 230" strokeDasharray="5 6" />
                <path d="M560 60 C 520 130, 470 190, 420 225" />
                <path d="M650 190 C 570 220, 500 235, 430 240" strokeDasharray="5 6" />
                <path d="M130 290 C 220 270, 300 255, 365 245" />
                <path d="M350 370 C 370 330, 395 295, 405 265" strokeDasharray="5 6" />
              </g>
            </svg>

            <div className="absolute top-[38%] left-[42%] z-10 w-56 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-2xl border border-violet-400/40 bg-gradient-to-b from-violet-500/25 to-zinc-900/80 p-4 shadow-2xl shadow-violet-900/50 backdrop-blur-md">
              <p className="text-[11px] tracking-widest text-violet-300 uppercase">Core idea</p>
              <p className="mt-1.5 text-sm leading-snug font-medium">
                Memory is a network, not a folder
              </p>
              <div className="mt-3 flex gap-1.5">
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-cyan-200">#memory</span>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-violet-200">#learning</span>
              </div>
            </div>

            {nodes.map((n) => (
              <div
                key={n.label}
                className="absolute w-44 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-zinc-900/70 p-3 shadow-lg backdrop-blur-md transition hover:border-cyan-300/40 hover:bg-zinc-800/70"
                style={{ left: n.x, top: n.y }}
              >
                <p className="text-[13px] leading-snug font-medium text-zinc-100">{n.label}</p>
                <p className="mt-1 text-[10px] text-cyan-300/80">{n.tag}</p>
              </div>
            ))}
          </section>

          <section className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 border-y border-white/5 py-8 text-sm text-zinc-500">
            <span className="text-xs tracking-widest uppercase">Powering thinking at</span>
            <span className="font-semibold">Linear</span>
            <span className="font-semibold">Vercel</span>
            <span className="font-semibold">Ramp</span>
            <span className="font-semibold">Retool</span>
            <span className="font-semibold">Anthropic</span>
          </section>

          <section id="features" className="grid gap-4 py-24 md:grid-cols-3">
            {[
              {
                title: 'Bidirectional links',
                body: 'Every note knows its neighbors. Type [[ and watch your past thinking assemble itself around the present moment.',
                glow: 'from-violet-500/20',
              },
              {
                title: 'Spaced recall',
                body: 'Cortex schedules gentle resurfacing of old notes, so knowledge compounds instead of decaying.',
                glow: 'from-cyan-400/20',
              },
              {
                title: 'Local-first sync',
                body: 'Your graph lives on every device in milliseconds, end-to-end encrypted, even offline.',
                glow: 'from-fuchsia-400/20',
              },
            ].map((f) => (
              <article
                key={f.title}
                className={`group rounded-2xl border border-white/10 bg-gradient-to-b ${f.glow} to-transparent p-6 backdrop-blur-sm transition hover:border-white/25`}
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-violet-200" aria-hidden>
                    <circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="8" r="2.5" /><circle cx="12" cy="18" r="2.5" />
                    <path d="M8.2 7.1 15.6 7.7M7 8.3l3.6 7.4M16.6 10.2l-3 5.7" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.body}</p>
              </article>
            ))}
          </section>

          <section id="method" className="pb-24">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-sm md:p-14">
              <p className="text-xs tracking-widest text-cyan-300/80 uppercase">The method</p>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                Capture loosely. Connect deliberately. Remember forever.
              </h2>
              <div className="mx-auto mt-10 grid max-w-3xl gap-8 text-left sm:grid-cols-3">
                {[
                  ['01', 'Capture', 'One keystroke from any app. Inbox it now, organize never.'],
                  ['02', 'Connect', 'Cortex suggests links between notes as your graph grows.'],
                  ['03', 'Recall', 'A daily digest brings old thinking back exactly when relevant.'],
                ].map(([num, title, body]) => (
                  <div key={title}>
                    <p className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-3xl font-bold text-transparent">{num}</p>
                    <h3 className="mt-2 font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <figure id="quote" className="mx-auto max-w-3xl pb-24 text-center">
            <blockquote className="text-2xl leading-relaxed font-medium text-balance md:text-3xl">
              “I stopped losing ideas the week I started using Cortex. It feels
              less like software and more like a prosthetic memory.”
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-center gap-3 text-sm text-zinc-400">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-xs font-bold text-white">
                MK
              </span>
              Maya Krishnan · Research lead, Helios Labs
            </figcaption>
          </figure>

          <section id="cta" className="pb-28 text-center">
            <h2 className="mx-auto max-w-2xl text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              Never lose a good idea again
            </h2>
            <p className="mx-auto mt-4 max-w-md text-zinc-400">
              Join 128,000 thinkers whose best thoughts refuse to stay forgotten.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a href="#" className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:opacity-90">
                Start building your brain
              </a>
              <a href="#" className="rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/40 hover:text-white">
                See how it works
              </a>
            </div>
          </section>
        </main>

        <footer className="flex items-center justify-between border-t border-white/5 py-8 text-xs text-zinc-500">
          <p>© 2026 Cortex Labs</p>
          <p>Your mind, indexed.</p>
        </footer>
      </div>

    </div>
  )
}
