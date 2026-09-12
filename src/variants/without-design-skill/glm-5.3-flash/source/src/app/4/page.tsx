import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MindVault — Remember everything. Learn faster.',
}

const sidebarItems = ['Inbox', 'Daily notes', 'Projects', 'Reading', 'Ideas']

const noteLines = [
  'w-full',
  'w-11/12',
  'w-full',
  'w-4/5',
  'w-full',
  'w-2/3',
]

export default function Page() {
  return (
    <div className="min-h-dvh bg-white font-sans text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-indigo-600">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden>
                <path d="M12 3a6 6 0 0 0-6 6c0 2 .9 3.6 2 4.8V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3.2c1.1-1.2 2-2.8 2-4.8a6 6 0 0 0-6-6zM10 20h4v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1z" />
              </svg>
            </span>
            MindVault
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-slate-900">Features</a>
            <a href="#stats" className="transition hover:text-slate-900">Customers</a>
            <a href="#pricing" className="transition hover:text-slate-900">Pricing</a>
            <a href="#" className="transition hover:text-slate-900">Changelog</a>
          </nav>
          <div className="flex items-center gap-3 text-sm font-medium">
            <a href="#" className="text-slate-600 transition hover:text-slate-900">Sign in</a>
            <a
              href="#cta"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-white shadow-sm transition hover:bg-indigo-500"
            >
              Get started
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section className="pt-16 pb-14 text-center md:pt-24">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1.5 text-xs font-medium text-indigo-700 transition hover:bg-indigo-100"
          >
            <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] font-semibold text-white">NEW</span>
            AI recall is now 3× faster
          </a>
          <h1 className="mx-auto mt-6 max-w-3xl text-5xl leading-[1.06] font-bold tracking-tight text-balance md:text-[64px]">
            Remember everything.
            <br />
            <span className="relative whitespace-nowrap text-indigo-600">
              Learn faster.
              <svg aria-hidden className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 300 10" preserveAspectRatio="none">
                <path d="M2 8 Q 150 -4 298 7" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" className="text-indigo-300" />
              </svg>
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-slate-600 text-pretty">
            MindVault is the second-brain workspace that turns scattered notes,
            links, and highlights into connected knowledge your whole team can
            search in plain English.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#cta"
              className="w-full rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500 sm:w-auto"
            >
              Start free trial
            </a>
            <a
              href="#features"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 px-7 py-3.5 text-sm font-semibold transition hover:border-slate-400 hover:bg-slate-50 sm:w-auto"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M8 5.14v13.72L19 12 8 5.14z" />
              </svg>
              Watch demo · 2 min
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-500">Free 14-day trial · No credit card required</p>
        </section>

        <section aria-label="Customers" className="border-y border-slate-100 py-8">
          <p className="text-center text-xs font-medium tracking-widest text-slate-400 uppercase">
            Trusted by knowledge teams at
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-base font-semibold text-slate-400">
            <span>Vercel</span><span>Notion</span><span>Linear</span><span>Stripe</span><span>Ramp</span><span>Loom</span>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-2xl shadow-slate-900/10">
            <div className="flex items-center gap-1.5 border-b border-slate-200 bg-white px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="mx-auto rounded-md bg-slate-100 px-16 py-1 text-xs text-slate-400">
                app.mindvault.io/notes/q3-research
              </span>
            </div>
            <div className="grid grid-cols-[140px_190px_1fr] text-left sm:grid-cols-[180px_220px_1fr]">
              <aside className="hidden border-r border-slate-200 bg-white p-3 sm:block">
                {sidebarItems.map((item, i) => (
                  <div
                    key={item}
                    className={`mb-1 flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[13px] ${
                      i === 1 ? 'bg-indigo-50 font-medium text-indigo-700' : 'text-slate-600'
                    }`}
                  >
                    <span className={`h-2 w-2 rounded-sm ${i === 1 ? 'bg-indigo-500' : 'bg-slate-300'}`} />
                    {item}
                  </div>
                ))}
                <div className="mt-6 border-t border-slate-100 pt-3">
                  <div className="mb-1 px-2.5 text-[11px] font-medium tracking-wide text-slate-400 uppercase">
                    Linked
                  </div>
                  {['Memory models', 'User interviews'].map((t) => (
                    <div key={t} className="mb-1 rounded-md px-2.5 py-1.5 text-[13px] text-slate-600">
                      ↳ {t}
                    </div>
                  ))}
                </div>
              </aside>
              <ul className="border-r border-slate-200 bg-white p-3">
                {[
                  'Why spaced repetition works',
                  'Interview: Priya on memory',
                  'Competitive scan — Q3',
                  'Idea: recall digest email',
                  'Reading: “Make it Stick”',
                ].map((title, i) => (
                  <li
                    key={title}
                    className={`mb-1 cursor-default truncate rounded-md px-2.5 py-2 text-[13px] ${
                      i === 0 ? 'bg-slate-100 font-medium' : 'text-slate-600'
                    }`}
                  >
                    {title}
                  </li>
                ))}
              </ul>
              <div className="p-5 sm:p-7">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-indigo-100 px-2 py-0.5 text-[11px] font-medium text-indigo-700">Evergreen</span>
                  <span className="text-xs text-slate-400">Updated 2 min ago</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">Why spaced repetition works</h3>
                <div className="mt-4 space-y-2.5">
                  {noteLines.map((w, i) => (
                    <div key={i} className={`h-2.5 rounded-full bg-slate-200 ${w}`} />
                  ))}
                </div>
                <div className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50 p-3.5">
                  <p className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-indigo-600 uppercase">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2l2.4 7.2H22l-6 4.6 2.3 7.2-6.3-4.5L5.7 21 8 13.8l-6-4.6h7.6z" />
                    </svg>
                    AI insight
                  </p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-slate-700">
                    This note contradicts “Massed practice memo” from March. Reconcile?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="grid gap-4 pb-16 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Instant capture',
              body: 'Clip anything from any app with one global shortcut. Web pages, PDFs, tweets, meetings.',
              icon: 'M12 19V5M5 12l7-7 7 7',
              span: '',
            },
            {
              title: 'Semantic search',
              body: 'Ask “what did we learn about churn last quarter?” and get sourced answers from every note you have ever saved.',
              icon: 'M21 21l-4.35-4.35M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z',
              span: 'lg:col-span-2',
            },
            {
              title: 'Auto-linking graph',
              body: 'MindVault builds a living knowledge graph as you write.',
              icon: 'M9 20l-5.5-2.5v-11L9 9m0 11l6-2.5M9 20V9m6 8.5l5.5-2.5v-11L15 6.5m0 11V6.5M15 6.5L9 9',
              span: '',
            },
            {
              title: 'Team libraries',
              body: 'Shared spaces with granular permissions keep personal thinking private and team knowledge open.',
              icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
              span: '',
            },
            {
              title: 'Recall digest',
              body: 'A gentle Monday-morning email resurfaces the notes that matter now, based on what you are working on this week.',
              icon: 'M3 8l9 6 9-6M3 6h18v12H3z',
              span: 'lg:col-span-2',
            },
          ].map((f) => (
            <article
              key={f.title}
              className={`group rounded-2xl border border-slate-200 p-6 transition hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-600/5 ${f.span}`}
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d={f.icon} />
                </svg>
              </span>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{f.body}</p>
            </article>
          ))}
        </section>

        <section id="stats" className="grid grid-cols-2 gap-y-10 rounded-3xl bg-slate-900 px-8 py-12 text-center md:grid-cols-4">
          {[
            ['128k+', 'active thinkers'],
            ['41M', 'notes captured'],
            ['99.99%', 'uptime SLA'],
            ['4.9/5', 'average rating'],
          ].map(([num, label]) => (
            <div key={label}>
              <p className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">{num}</p>
              <p className="mt-1 text-sm text-slate-400">{label}</p>
            </div>
          ))}
        </section>

        <section className="py-16 md:py-20">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            Loved by people who think for a living
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                quote: 'We replaced three tools with MindVault. New hires onboard twice as fast because the team’s brain is searchable.',
                name: 'Sarah Chen',
                role: 'Head of Research, Ramp',
                initials: 'SC',
              },
              {
                quote: 'The semantic search is uncanny. It finds the exact interview clip I half-remember from two years ago.',
                name: 'Marcus Webb',
                role: 'Founder, Fieldnotes',
                initials: 'MW',
              },
              {
                quote: 'Finally a notes tool my whole team actually adopted. The digest email is the highlight of my Mondays.',
                name: 'Ana Duarte',
                role: 'Staff PM, Loom',
                initials: 'AD',
              },
            ].map((t) => (
              <figure key={t.name} className="rounded-2xl border border-slate-200 p-6">
                <div className="flex gap-1 text-amber-400" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2l2.4 7.2H22l-6 4.6 2.3 7.2-6.3-4.5L5.7 21 8 13.8l-6-4.6h7.6z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4 text-[15px] leading-relaxed text-slate-700">{t.quote}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                    {t.initials}
                  </span>
                  <span className="text-sm">
                    <span className="font-medium">{t.name}</span>
                    <br />
                    <span className="text-slate-500">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="cta" className="pb-20">
          <div id="pricing" className="rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 px-8 py-14 text-center shadow-2xl shadow-indigo-600/25 md:py-16">
            <h2 className="mx-auto max-w-xl text-3xl font-bold tracking-tight text-white text-balance md:text-4xl">
              Give your team a collective memory
            </h2>
            <p className="mx-auto mt-4 max-w-md text-indigo-100">
              From $10 per seat per month. Free for students and open source.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#" className="w-full rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-indigo-700 shadow-lg transition hover:bg-indigo-50 sm:w-auto">
                Start free trial
              </a>
              <a href="#" className="w-full rounded-xl border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto">
                Book a demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="flex items-center gap-2 font-semibold">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-indigo-600 text-white">M</span>
              MindVault
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
              The second brain for teams. Built in San Francisco, synced everywhere.
            </p>
          </div>
          {[
            ['Product', ['Features', 'Pricing', 'Integrations', 'Changelog']],
            ['Company', ['About', 'Blog', 'Careers', 'Contact']],
            ['Legal', ['Privacy', 'Terms', 'Security']],
          ].map(([title, links]) => (
            <nav key={title as string}>
              <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">{title}</p>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
                {(links as string[]).map((l) => (
                  <li key={l}>
                    <a href="#" className="transition hover:text-slate-900">{l}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="border-t border-slate-100 py-6 text-center text-xs text-slate-400">
          © 2026 MindVault, Inc.
        </div>
      </footer>

    </div>
  )
}
