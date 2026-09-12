import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  LinkIcon,
  MagnifyingGlass,
  Lock,
  BookOpen,
  Code,
} from "../../components/icons";
import { Reveal } from "../../components/reveal";
import { Logo } from "../../components/logo";

export const metadata: Metadata = {
  title: "Marginalia · Night Console (Iteration 2)",
  description:
    "A local-first second brain with bidirectional links and encrypted sync. Dark devtool design direction.",
};

const INTEGRATIONS = [
  { slug: "github", label: "GitHub" },
  { slug: "gitlab", label: "GitLab" },
  { slug: "vscode", label: "VS Code" },
  { slug: "raycast", label: "Raycast" },
  { slug: "obsidian", label: "Obsidian" },
  { slug: "linear", label: "Linear" },
  { slug: "slack", label: "Slack" },
  { slug: "notion", label: "Notion" },
];

export default function TwoPage() {
  return (
    <div className="min-h-[100dvh] bg-zinc-950 text-zinc-100 antialiased selection:bg-lime-400/30">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link href="/two" aria-label="Marginalia home">
            <Logo className="text-zinc-100" markClassName="size-5 text-lime-400" />
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/two#features" className="text-sm text-zinc-400 transition-colors hover:text-zinc-100">
              Features
            </Link>
            <Link href="/two#integrations" className="text-sm text-zinc-400 transition-colors hover:text-zinc-100">
              Integrations
            </Link>
            <Link href="/two#docs" className="text-sm text-zinc-400 transition-colors hover:text-zinc-100">
              Docs
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/two#docs"
              className="hidden h-9 items-center gap-1.5 rounded-full border border-white/15 px-4 text-sm text-zinc-200 transition-colors hover:bg-white/5 sm:inline-flex"
            >
              <BookOpen size={15} weight="regular" />
              Read the docs
            </Link>
            <Link
              href="/two#cta"
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-lime-400 px-4 text-sm font-semibold text-zinc-950 transition-all hover:bg-lime-300 active:translate-y-px"
            >
              Get started
              <ArrowRight size={15} weight="bold" />
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero - split: text + real code panel */}
        <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 pt-20 pb-24 md:grid-cols-2 md:gap-12 md:pt-24 md:pb-28">
          <div className="max-w-xl">
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
              A second brain that thinks in links.
            </h1>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-zinc-400">
              Marginalia is a local-first knowledge base with bidirectional
              links, instant search, and your notes encrypted by default.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/two#cta"
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-lime-400 px-6 text-[15px] font-semibold text-zinc-950 transition-all hover:bg-lime-300 active:translate-y-px"
              >
                Get started
                <ArrowRight size={16} weight="bold" />
              </Link>
              <Link
                href="/two#docs"
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-white/15 px-6 text-[15px] font-medium text-zinc-200 transition-all hover:bg-white/5 active:translate-y-px"
              >
                Read the docs
              </Link>
            </div>
          </div>

          <Reveal y={32} className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-lime-400/10 blur-3xl" aria-hidden="true" />
            <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900/70 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
                <span className="font-mono text-xs text-zinc-500">reading-list.md</span>
                <span className="font-mono text-[11px] text-lime-400/80">marginalia:note</span>
              </div>
              <pre className="overflow-x-auto px-4 py-5 font-mono text-[13px] leading-relaxed text-zinc-300">
                <code>
                  <span className="text-zinc-500"># Reading list</span>
                  {"\n\n"}
                  [[atomic-habits]] <span className="text-zinc-500">: small, stackable.</span>
                  {"\n"}
                  <span className="text-lime-400">&gt; You do not rise to the level of your goals.</span>
                  {"\n\n"}
                  <span className="text-zinc-500">links:</span> [[decisions]], [[systems]]
                  {"\n"}
                  <span className="text-sky-400">#status/digesting</span>
                </code>
              </pre>
            </div>
          </Reveal>
        </section>

        {/* Trusted by - static logo row */}
        <section className="border-y border-white/10 bg-white/[0.02] py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5">
            <p className="text-xs text-zinc-500">
              In the toolchain at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
              {INTEGRATIONS.slice(0, 5).map((b) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={b.slug}
                  src={`https://cdn.simpleicons.org/${b.slug}/a1a1aa`}
                  alt={`${b.label} logo`}
                  width={90}
                  height={22}
                  className="h-5 w-auto opacity-80"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features - dark bento */}
        <section id="features" className="mx-auto max-w-6xl px-5 py-24 md:py-28">
          <Reveal className="mb-12 max-w-2xl">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-lime-400">
              features
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
              Built for people who write to think.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              Plain text on disk. Links that go both ways. Search that finishes
              your sentence.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Cell A - wide image */}
            <Reveal className="md:col-span-2">
              <div className="relative h-full min-h-[260px] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="https://picsum.photos/seed/marginalia-night-desk/1600/900"
                  alt="A dimly lit desk with a laptop screen glowing"
                  width={1600}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-7">
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    Capture from anywhere
                  </h3>
                  <p className="mt-2 max-w-md text-[15px] leading-relaxed text-zinc-300">
                    A clipper for the browser, a shortcut for the terminal, and
                    an inbox for email. Everything lands as plain text.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Cell B - lime tinted, code */}
            <Reveal delay={0.06}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-lime-400/20 bg-lime-400/[0.06] p-7">
                <LinkIcon size={26} weight="duotone" className="text-lime-400" />
                <div className="mt-10">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-50">
                    Bidirectional links
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-zinc-300">
                    Write <code className="rounded bg-white/10 px-1 font-mono text-[13px] text-lime-300">[[note]]</code> once.
                    Every backlink appears without filing.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Cell C - zinc panel */}
            <Reveal delay={0.06}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-white/10 bg-zinc-900/60 p-7">
                <MagnifyingGlass size={26} weight="duotone" className="text-lime-400" />
                <div className="mt-10">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-50">
                    Instant search
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-zinc-300">
                    Full-text and query syntax across years of notes, opening
                    in the time it takes to type.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Cell D - wide gradient */}
            <Reveal delay={0.12} className="md:col-span-2">
              <div className="flex h-full flex-col justify-between rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900 to-lime-400/[0.08] p-7 sm:flex-row sm:items-center">
                <div className="max-w-md">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-50">
                    Local-first, encrypted by default
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-zinc-300">
                    Your files live on your machine. Sync is opt-in and
                    end-to-end encrypted. No vendor lock-in.
                  </p>
                </div>
                <div className="mt-6 flex gap-3 sm:mt-0">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[13px] text-zinc-200">
                    <Lock size={15} weight="regular" /> e2ee
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[13px] text-zinc-200">
                    <Code size={15} weight="regular" /> .md
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Integrations - horizontal scroll-snap pills */}
        <section id="integrations" className="border-y border-white/10 bg-white/[0.02] py-24 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal className="mb-10 max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                Lives in the tools you already use.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-zinc-400">
                Clip, sync, and search Marginalia without leaving your editor
                or your browser.
              </p>
            </Reveal>

            <div
              className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 [scrollbar-width:thin]"
              aria-label="Integrations"
            >
              {INTEGRATIONS.map((b) => (
                <div
                  key={b.slug}
                  className="flex shrink-0 snap-start items-center gap-2.5 rounded-full border border-white/10 bg-zinc-900/60 px-4 py-2.5"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://cdn.simpleicons.org/${b.slug}/a3e635`}
                    alt=""
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px]"
                    loading="lazy"
                  />
                  <span className="text-sm text-zinc-200">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pull quote */}
        <section className="mx-auto max-w-4xl px-5 py-28 md:py-36">
          <Reveal>
            <blockquote className="text-balance text-3xl font-medium leading-tight tracking-tight text-zinc-50 sm:text-4xl">
              &ldquo;It is the first note tool that feels like a filesystem I
              understand instead of an app I have to maintain.&rdquo;
            </blockquote>
            <figcaption className="mt-8 font-mono text-sm text-zinc-500">
              <span className="text-zinc-200">priya.io</span>
              {" // "}
              Staff engineer, ex-database team
            </figcaption>
          </Reveal>
        </section>

        {/* CTA band */}
        <section id="cta" className="mx-auto max-w-6xl px-5 pb-24">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 px-6 py-16 text-center sm:px-12 md:py-20">
            <div className="absolute -left-24 -top-24 size-72 rounded-full bg-lime-400/15 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                Open your archive. Keep the keys.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-zinc-400">
                Free for personal use. Your notes stay on your machine.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/two#"
                  className="inline-flex h-12 items-center justify-center gap-1.5 rounded-full bg-lime-400 px-7 text-[15px] font-semibold text-zinc-950 transition-all hover:bg-lime-300 active:translate-y-px"
                >
                  Get started free
                  <ArrowRight size={16} weight="bold" />
                </Link>
                <Link
                  href="/two#docs"
                  className="inline-flex h-12 items-center justify-center gap-1.5 rounded-full border border-white/15 px-7 text-[15px] font-medium text-zinc-200 transition-all hover:bg-white/5"
                >
                  View on GitHub
                  <ArrowUpRight size={16} weight="bold" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-12 sm:flex-row sm:items-center">
          <div>
            <Logo className="text-zinc-100" markClassName="size-5 text-lime-400" />
            <p className="mt-3 max-w-xs text-sm text-zinc-500">
              A local-first second brain for what you read, think, and write.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-400">
            <Link href="/two#features" className="hover:text-zinc-100">Features</Link>
            <Link href="/two#integrations" className="hover:text-zinc-100">Integrations</Link>
            <Link href="/two#docs" className="hover:text-zinc-100">Docs</Link>
            <Link href="/" className="hover:text-zinc-100">All iterations</Link>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-5 pb-10 font-mono text-xs text-zinc-600">
          marginalia · a design concept
        </div>
      </footer>
    </div>
  );
}
