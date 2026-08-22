import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'corTeX — a second brain for the terminal',
}

const tree = `~/brain
├── evergreen/
│   ├── spaced-repetition.md      [12 links]
│   ├── zettelkasten-primer.md    [8 links]
│   └── memory-palaces.md         [5 links]
├── inbox/
│   ├── 2026-08-21-0914.md        new
│   └── hn-thread-on-forgetting.md
└── .cortex/
    └── graph.db                  41,208 nodes`

const transcript = [
  { cmd: 'cortex capture "spaced repetition beats cramming — revisit at expanding intervals"', out: null },
  { cmd: null, out: ['✓ stashed → inbox/2026-08-21-0932.md', '⟲ auto-linked: evergreen/spaced-repetition.md (+3)'] },
  { cmd: 'cortex recall "why do i keep forgetting apis"', out: null },
  { cmd: null, out: ['1 hit · evergreen/spaced-repetition.md', '  “you wrote: retrieval practice > rereading. schedule reviews at 1d, 3d, 7d…”'] },
]

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="rounded border border-emerald-500/40 bg-emerald-950/60 px-1.5 py-0.5 text-[11px] font-semibold text-emerald-300">
      {children}
    </kbd>
  )
}

export default function Page() {
  return (
    <div className="min-h-dvh bg-[#07100b] font-mono text-emerald-100/90 selection:bg-emerald-400 selection:text-black">
      <div className="mx-auto max-w-4xl px-5 pb-24 text-sm leading-relaxed">
        <header className="flex flex-wrap items-center justify-between gap-3 py-4 text-xs">
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-emerald-300">
            <span className="grid h-6 w-6 place-items-center rounded bg-emerald-500/15">▚</span>
            corTeX v3.2.1
          </Link>
          <p className="text-emerald-500/80">
            <span className="mr-4">● local-first</span>
            <span>latency 0ms</span>
          </p>
        </header>

        <main>
          <section className="pt-14 pb-16">
            <p className="text-emerald-500">
              <span className="text-emerald-300">$</span> whoami
            </p>
            <h1 className="mt-5 text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl">
              A SECOND BRAIN
              <br />
              FOR PEOPLE WHO
              <br />
              LIVE IN THE SHELL
              <span className="ml-2 inline-block h-[0.9em] w-[0.55em] translate-y-[0.08em] animate-pulse bg-emerald-400" aria-hidden />
            </h1>
            <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-emerald-200/70 text-pretty">
              corTeX is markdown, a graph database, and a CLI. Capture with one
              keystroke, link notes automatically, and query your entire brain
              without touching a mouse.
            </p>

            <div className="mt-10 overflow-hidden rounded-xl border border-emerald-900 shadow-2xl shadow-black/50">
              <div className="flex items-center justify-between border-b border-emerald-900 bg-emerald-950/50 px-4 py-2.5 text-xs text-emerald-500">
                <span>~/.cortex/session.log</span>
                <span className="flex gap-1.5" aria-hidden>
                  <i className="h-2.5 w-2.5 rounded-full bg-emerald-800" />
                  <i className="h-2.5 w-2.5 rounded-full bg-emerald-800" />
                  <i className="h-2.5 w-2.5 rounded-full bg-red-800/80" />
                </span>
              </div>
              <div className="space-y-4 bg-[#0a140e] p-5">
                {transcript.map((t, i) => (
                  <div key={i} className="space-y-1.5">
                    {t.cmd && (
                      <p className="break-all">
                        <span className="mr-2 text-fuchsia-400">❯</span>
                        {t.cmd}
                      </p>
                    )}
                    {t.out?.map((line) => (
                      <p key={line} className="pl-5 whitespace-pre-wrap text-emerald-300/75">
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
                <p>
                  <span className="mr-2 text-fuchsia-400">❯</span>
                  <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-emerald-400" aria-hidden />
                </p>
              </div>
            </div>
          </section>

          <section className="border-y border-dashed border-emerald-900 py-8">
            <p className="mb-4 text-xs tracking-widest text-emerald-600 uppercase"># command palette</p>
            <div className="rounded-xl border border-emerald-900 bg-[#0a140e] p-4 shadow-xl">
              <div className="flex items-center gap-3 rounded-lg border border-emerald-800 bg-black/40 px-3.5 py-2.5">
                <span className="text-emerald-600">⌕</span>
                <span className="flex-1 italic text-emerald-200/50">search 41,208 notes…</span>
                <Kbd>⌘K</Kbd>
              </div>
              <ul className="mt-2 divide-y divide-emerald-900/60 text-[13px]">
                {[
                  ['capture note', 'C'],
                  ['jump to graph view', 'G G'],
                  ['today’s daily page', 'D'],
                  ['fuzzy find file', 'Ctrl P'],
                ].map(([action, keys]) => (
                  <li key={action} className="flex items-center justify-between px-3.5 py-2.5 transition hover:bg-emerald-950/50">
                    <span>
                      <span className="mr-3 text-emerald-700">{'>_'}</span>
                      {action}
                    </span>
                    <span className="flex gap-1">
                      {keys.split(' ').map((k, keyIndex) => (
                        <Kbd key={`${k}-${keyIndex}`}>{k}</Kbd>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="grid gap-10 py-14 md:grid-cols-2">
            <div>
              <p className="text-xs tracking-widest text-emerald-600 uppercase">NAME</p>
              <h2 className="mt-2 mb-4 text-2xl font-bold text-emerald-200">graph-native notes</h2>
              <p className="text-[15px] text-emerald-200/70">
                Every note is a node. Backlinks are first-class. Type{' '}
                <span className="rounded bg-emerald-950 px-1.5 py-0.5 text-emerald-300">[[</span>{' '}
                and corTeX suggests the connections you would have missed.
              </p>
            </div>
            <pre className="overflow-x-auto rounded-xl border border-emerald-900 bg-[#0a140e] p-5 text-[13px] leading-relaxed text-emerald-300/90">
{tree}
            </pre>
          </section>

          <section className="grid gap-px overflow-hidden rounded-xl border border-emerald-900 bg-emerald-900 sm:grid-cols-3">
            {[
              ['plain files', 'Markdown + YAML frontmatter. No lock-in, no cloud required. grep-friendly forever.'],
              ['zero latency', 'A native binary backed by SQLite. Cold start in 11ms. Works on a plane.'],
              ['git sync', 'Version your brain. Diff your thinking. Merge conflicts only in the good way.'],
            ].map(([title, body]) => (
              <article key={title} className="bg-[#0a140e] p-6">
                <h3 className="font-bold text-emerald-300">${title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-emerald-200/65">{body}</p>
              </article>
            ))}
          </section>

          <figure className="py-16 text-center">
            <blockquote className="mx-auto max-w-2xl text-xl leading-relaxed font-medium text-emerald-100/85 text-balance md:text-2xl">
              “I piped my whole Zettelkasten through it in an afternoon.
              Now my terminal knows me better than my therapist.”
            </blockquote>
            <figcaption className="mt-6 text-xs tracking-widest text-emerald-600 uppercase">
              @ksyluan · maintainer of dotfiles-you-have-heard-of
            </figcaption>
          </figure>

          <section className="pb-10 text-center">
            <p className="text-xs tracking-widest text-emerald-600 uppercase"># install</p>
            <div className="mx-auto mt-5 max-w-md cursor-pointer rounded-lg border border-emerald-800 bg-black/50 px-5 py-4 text-left transition hover:border-emerald-500">
              <p>
                <span className="text-emerald-600">$</span> brew install cortex
                <span className="float-right text-emerald-700">[copy]</span>
              </p>
            </div>
            <p className="mt-4 text-xs text-emerald-700">
              also on npm, cargo, and nix · MIT licensed
            </p>
            <a
              href="#"
              className="mt-8 inline-block rounded-md border-2 border-emerald-500 bg-emerald-500/10 px-8 py-3.5 font-bold tracking-wide text-emerald-300 uppercase transition hover:bg-emerald-400 hover:text-black"
            >
              Read the manual (RTFM)
            </a>
          </section>
        </main>

        <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-dashed border-emerald-900 pt-6 text-xs text-emerald-700">
          <p>© 2026 corTeX contributors</p>
          <p>exit 0</p>
        </footer>
      </div>

    </div>
  )
}
