import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MagnifyingGlass,
  Link as LinkIcon,
  CalendarCheck,
  LockKey,
  FileArrowDown,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/variants/with-taste-skill/kimi-k3/source/components/Reveal";

export const metadata: Metadata = {
  title: "Marginalia - the quiet system behind your best ideas",
  description:
    "Iteration 4: cold, precise, premium. Marginalia organizes what you read, think, and write into a searchable second brain.",
};

const accent = "#2440c9";

const logos = [
  {
    name: "Halvard Institute",
    mark: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
        <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <text x="16" y="21" textAnchor="middle" fontSize="13" fontWeight="700" fill="currentColor">H</text>
      </svg>
    ),
  },
  {
    name: "Otium",
    mark: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
        <rect x="7" y="7" width="18" height="18" rx="1" transform="rotate(45 16 16)" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <text x="16" y="21" textAnchor="middle" fontSize="12" fontWeight="700" fill="currentColor">O</text>
      </svg>
    ),
  },
  {
    name: "Fieldnote",
    mark: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
        <rect x="6" y="6" width="20" height="20" rx="2" fill="currentColor" />
        <text x="16" y="21" textAnchor="middle" fontSize="13" fontWeight="700" fill="#f5f6f8">F</text>
      </svg>
    ),
  },
  {
    name: "Kestrel",
    mark: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
        <path d="M16 6 L27 26 L5 26 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <text x="16" y="23" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor">K</text>
      </svg>
    ),
  },
  {
    name: "Verso",
    mark: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
        <path d="M8 6 A13 13 0 0 1 8 26 Z" fill="currentColor" />
        <path d="M24 6 A13 13 0 0 0 24 26 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
];

const plans = [
  {
    name: "Solo",
    price: "$0",
    unit: "forever",
    body: "One device, unlimited notes, full search and backlinks. For the curious.",
    featured: false,
  },
  {
    name: "Studio",
    price: "$10",
    unit: "per month",
    body: "Encrypted sync, version history, shared notebooks, and priority support.",
    featured: true,
  },
];

export default function IterationFour() {
  return (
    <main className="min-h-[100dvh]">
      {/* Nav */}
      <header>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="#" className="text-lg font-semibold tracking-tight">
            Marginalia
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-[#475467] md:flex">
            <a href="#system" className="transition hover:text-[#101828]">
              System
            </a>
            <a href="#privacy" className="transition hover:text-[#101828]">
              Privacy
            </a>
            <a href="#pricing" className="transition hover:text-[#101828]">
              Pricing
            </a>
          </nav>
          <a
            href="#pricing"
            className="rounded-full px-5 py-2 text-sm font-medium text-white transition active:translate-y-px"
            style={{ backgroundColor: accent }}
          >
            Try free
          </a>
        </div>
      </header>

      {/* Hero: split, copy left / image right */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 py-16 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-12 lg:py-0">
        <div className="lg:col-span-6">
          <Reveal>
            <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight lg:text-6xl">
              A quiet system for loud ideas.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-[#475467] md:text-lg">
              Marginalia organizes what you read, think, and write into a
              second brain you can actually search.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="rounded-full px-7 py-3 text-sm font-medium text-white transition active:translate-y-px"
                style={{ backgroundColor: accent }}
              >
                Try free
              </a>
              <a
                href="#system"
                className="group inline-flex items-center gap-1.5 rounded-full border border-[#101828]/15 px-7 py-3 text-sm font-medium transition hover:border-[#101828]/35 active:translate-y-px"
              >
                Explore the system
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-6">
          <Reveal delay={0.15}>
            <Image
              src="https://picsum.photos/id/119/1200/900"
              alt="A minimal white desk with a single monitor"
              width={1200}
              height={900}
              priority
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Logo wall: marks only */}
      <section aria-label="Organizations using Marginalia" className="border-y border-[#101828]/10 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-14 gap-y-6 px-6 py-9 text-[#667085]">
          {logos.map((logo) => (
            <span
              key={logo.name}
              title={logo.name}
              aria-label={logo.name}
              className="flex items-center gap-2.5 opacity-70 transition hover:opacity-100"
            >
              {logo.mark}
              <span className="text-sm font-semibold tracking-tight">
                {logo.name}
              </span>
            </span>
          ))}
        </div>
      </section>

      {/* Bento: 5 cells, exact fit */}
      <section id="system" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: accent }}>
            The system
          </p>
          <h2 className="mt-4 max-w-[22ch] text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            Five parts, one archive
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-4">
          <Reveal className="md:col-span-2 md:row-span-2">
            <div className="relative h-full min-h-[20rem] overflow-hidden rounded-2xl">
              <Image
                src="https://picsum.photos/id/36/1000/1100"
                alt="Everyday objects arranged in a precise grid"
                width={1000}
                height={1100}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101828]/80 via-[#101828]/10 to-transparent" />
              <div className="absolute bottom-0 p-8 text-white">
                <MagnifyingGlass size={26} weight="light" />
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  Search that keeps up with thought
                </h3>
                <p className="mt-2 max-w-[38ch] text-sm leading-relaxed text-white/80">
                  Full-text and semantic search across every note, indexed on
                  your device. Ask loosely, find exactly.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.06} className="md:col-span-2">
            <div
              className="flex h-full flex-col justify-between rounded-2xl p-8 text-white"
              style={{ backgroundColor: accent }}
            >
              <LinkIcon size={26} weight="light" />
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  Backlinks, always on
                </h3>
                <p className="mt-2 max-w-[36ch] text-sm leading-relaxed text-white/85">
                  Every note lists what points to it. Context accumulates
                  without filing.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-[#101828]/10 bg-white p-7">
              <CalendarCheck size={24} weight="light" color={accent} />
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  Daily review
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#475467]">
                  Five resurfaced notes each morning.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-[#101828]/10 bg-white p-7">
              <LockKey size={24} weight="light" color={accent} />
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  End-to-end encrypted
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#475467]">
                  Keys never leave your devices.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.18} className="md:col-span-4">
            <div
              className="flex h-full flex-col justify-between rounded-2xl border border-[#101828]/10 bg-[#eceef2] p-8"
              style={{
                backgroundImage:
                  "radial-gradient(#10182814 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            >
              <FileArrowDown size={26} weight="light" color={accent} />
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  Export without permission
                </h3>
                <p className="mt-2 max-w-[40ch] text-sm leading-relaxed text-[#475467]">
                  Plain Markdown files in a folder you own. Leave any time,
                  take everything.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Privacy split */}
      <section id="privacy" className="border-t border-[#101828]/10 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="max-w-[20ch] text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
                Private by architecture, not by promise
              </h2>
              <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-[#475467]">
                Notes are encrypted on your device before sync. Our servers
                store ciphertext, our business model is a subscription, and
                nothing you write trains a model.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Image
              src="https://picsum.photos/id/42/1100/850"
              alt="A bright home office with a long wooden desk"
              width={1100}
              height={850}
              className="aspect-[11/8.5] w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="max-w-[20ch] text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            Start free, stay because it works
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div
                className={`flex h-full flex-col rounded-2xl p-9 ${
                  p.featured
                    ? "text-white"
                    : "border border-[#101828]/10 bg-white"
                }`}
                style={p.featured ? { backgroundColor: accent } : undefined}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                    p.featured ? "text-white/75" : "text-[#667085]"
                  }`}
                >
                  {p.name}
                </p>
                <p className="mt-5 text-5xl font-semibold tracking-tight">
                  {p.price}
                  <span
                    className={`ml-2 text-base font-normal ${
                      p.featured ? "text-white/75" : "text-[#667085]"
                    }`}
                  >
                    {p.unit}
                  </span>
                </p>
                <p
                  className={`mt-4 max-w-[42ch] text-sm leading-relaxed ${
                    p.featured ? "text-white/85" : "text-[#475467]"
                  }`}
                >
                  {p.body}
                </p>
                <a
                  href="#"
                  className={`mt-8 inline-block w-fit rounded-full px-7 py-3 text-sm font-medium transition active:translate-y-px ${
                    p.featured
                      ? "bg-white text-[#101828]"
                      : "text-white"
                  }`}
                  style={p.featured ? undefined : { backgroundColor: accent }}
                >
                  Try free
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#101828]/10 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-tight">Marginalia</p>
            <p className="mt-2 max-w-[36ch] text-xs leading-relaxed text-[#667085]">
              A second brain for the long now of your work.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 text-sm text-[#475467] sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#98a2b3]">
                Product
              </p>
              <a href="#system" className="transition hover:text-[#101828]">System</a>
              <a href="#pricing" className="transition hover:text-[#101828]">Pricing</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#98a2b3]">
                Company
              </p>
              <a href="#" className="transition hover:text-[#101828]">About</a>
              <a href="#" className="transition hover:text-[#101828]">Careers</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#98a2b3]">
                Legal
              </p>
              <a href="#" className="transition hover:text-[#101828]">Privacy</a>
              <a href="#" className="transition hover:text-[#101828]">Terms</a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#101828]/10">
          <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-[#98a2b3]">
            © 2026 Marginalia
          </p>
        </div>
      </footer>
    </main>
  );
}
