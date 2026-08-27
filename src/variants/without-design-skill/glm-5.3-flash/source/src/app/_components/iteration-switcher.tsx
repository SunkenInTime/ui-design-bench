'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ITERATIONS = [
  { id: 1, name: 'Synapse' },
  { id: 2, name: 'Commonplace' },
  { id: 3, name: 'Brutal' },
  { id: 4, name: 'SaaS' },
  { id: 5, name: 'Terminal' },
]

export default function IterationSwitcher() {
  const pathname = usePathname()
  const currentId =
    ITERATIONS.find((it) => pathname === `/${it.id}`)?.id ?? null
  const currentIndex = ITERATIONS.findIndex((it) => it.id === currentId)
  const prev = currentIndex > 0 ? ITERATIONS[currentIndex - 1] : null
  const next =
    currentIndex >= 0 && currentIndex < ITERATIONS.length - 1
      ? ITERATIONS[currentIndex + 1]
      : null

  return (
    <div className="fixed bottom-4 left-1/2 z-[100] -translate-x-1/2">
      <nav
        aria-label="Design iterations"
        className="flex items-center gap-0.5 rounded-full border border-white/15 bg-zinc-900/85 py-1.5 pr-1.5 pl-3 shadow-2xl shadow-black/40 backdrop-blur-md"
      >
        <span className="mr-1 hidden text-[11px] tracking-wide text-zinc-400 uppercase sm:block">
          Iteration{currentId ? ` ${currentId} — ${ITERATIONS[currentIndex].name}` : ''}
        </span>

        {prev && (
          <Link
            href={`/${prev.id}`}
            aria-label={`Previous: iteration ${prev.id}, ${prev.name}`}
            title={`Iteration ${prev.id} — ${prev.name}`}
            className="grid h-7 w-7 place-items-center rounded-full text-zinc-300 transition hover:bg-white/10 hover:text-white"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Link>
        )}

        <ul className="flex items-center gap-0.5">
          {ITERATIONS.map((it) => {
            const active = it.id === currentId
            return (
              <li key={it.id}>
                <Link
                  href={`/${it.id}`}
                  title={`Iteration ${it.id} — ${it.name}`}
                  aria-current={active ? 'page' : undefined}
                  className={`grid h-7 w-7 place-items-center rounded-full text-xs font-medium transition ${
                    active
                      ? 'bg-white font-semibold text-zinc-900'
                      : 'text-zinc-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {it.id}
                </Link>
              </li>
            )
          })}
        </ul>

        {next && (
          <Link
            href={`/${next.id}`}
            aria-label={`Next: iteration ${next.id}, ${next.name}`}
            title={`Iteration ${next.id} — ${next.name}`}
            className="grid h-7 w-7 place-items-center rounded-full text-zinc-300 transition hover:bg-white/10 hover:text-white"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        )}
      </nav>
    </div>
  )
}
