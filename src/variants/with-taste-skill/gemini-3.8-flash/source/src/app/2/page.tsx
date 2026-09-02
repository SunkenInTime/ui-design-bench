"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Feather,
  Article,
  BookmarkSimple,
  TextAa,
  PencilSimple,
  Quotes,
  ArrowRight,
  Check,
  NotePencil,
} from "@phosphor-icons/react";

/*
  DESIGN READ:
  Reading this as: Distraction-free thinking journal for essayists and architects of thought,
  with an austere Swiss editorial language, leaning toward monochrome off-white paper,
  strict typography with geometric sans, stark asymmetric layout, and quiet tactile rhythm.

  DIALS:
  DESIGN_VARIANCE: 6
  MOTION_INTENSITY: 4
  VISUAL_DENSITY: 3
*/

interface MarginaliaItem {
  id: string;
  sourceText: string;
  note: string;
  author: string;
}

const MARGINALIA: MarginaliaItem[] = [
  {
    id: "m1",
    sourceText: "Linear composition suffocates serendipity.",
    note: "Cross-referenced with Montaigne, Essays, Book I. Serendipity thrives when marginal notes remain visible while drafting.",
    author: "Margin Note 01",
  },
  {
    id: "m2",
    sourceText: "A sentence is a complete thought frozen in transit.",
    note: "Atelier preserves every revision draft locally with timestamped delta trees.",
    author: "Margin Note 02",
  },
  {
    id: "m3",
    sourceText: "Writing is not transcription; it is discovery.",
    note: "Cited in Epistemic Cartography, Vol. 4. Notes exist to challenge earlier convictions.",
    author: "Margin Note 03",
  },
];

export default function AtelierLandingPage() {
  const [activeMargin, setActiveMargin] = useState<MarginaliaItem>(MARGINALIA[0]);
  const [selectedFont, setSelectedFont] = useState<"modernist" | "monospace">("modernist");

  return (
    <div className="min-h-[100dvh] bg-[#f6f6f4] text-[#111110] selection:bg-blue-600 selection:text-white">
      {/* Editorial Navigation */}
      <header className="sticky top-0 z-40 border-b border-[#e5e5e1] bg-[#f6f6f4]/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link href="/with-taste-skill/gemini-3.8-flash/2" className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-blue-700 font-bold">
              [ ATELIER ]
            </span>
            <span className="text-sm font-semibold tracking-tight text-[#111110]">
              Monograph Studio
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-[#666660]">
            <a href="#document" className="hover:text-blue-700 transition-colors">
              01 Scriptorium
            </a>
            <a href="#tenets" className="hover:text-blue-700 transition-colors">
              02 Tenets
            </a>
            <a href="#typesetting" className="hover:text-blue-700 transition-colors">
              03 Typesetting
            </a>
            <a href="#colophon" className="hover:text-blue-700 transition-colors">
              04 Colophon
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#manifesto"
              className="text-xs font-mono uppercase tracking-wider text-[#666660] hover:text-[#111110] transition-colors px-2"
            >
              Treatise
            </a>
            <a
              href="#acquire"
              className="inline-flex items-center justify-center rounded-lg bg-[#111110] px-4 py-2 text-xs font-medium text-[#f6f6f4] transition-all hover:bg-blue-700 active:scale-[0.98]"
            >
              Acquire Atelier
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section (Fits Viewport, Left-aligned Editorial Layout, max pt-20) */}
      <section className="pt-14 pb-16 lg:pt-18 lg:pb-22 border-b border-[#e5e5e1]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 7 Columns: Headline & Rationale */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow 1 of 2 */}
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-700">
                <Feather size={14} weight="bold" />
                <span>The Distraction-Free Monograph</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#111110] leading-[1.08]">
                A quiet monograph for your unspoken thoughts.
              </h1>

              <p className="text-base text-[#555550] leading-relaxed max-w-[54ch]">
                The distraction-free writing environment built for deep prose, marginalia citations, and lifelong intellectual clarity.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="#acquire"
                  className="inline-flex items-center justify-center rounded-lg bg-[#111110] px-6 py-3 text-sm font-medium text-[#f6f6f4] transition-all hover:bg-blue-700 active:scale-[0.98]"
                >
                  Acquire Atelier v2.4
                </a>
                <a
                  href="#document"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#d5d5d0] bg-white px-5 py-3 text-sm font-medium text-[#222220] transition-all hover:border-[#111110]"
                >
                  <span>Examine Document</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Right 5 Columns: Swiss Typographic specimen card */}
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-[#deded9] bg-white p-7 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-[#f0f0ec] text-xs font-mono text-[#888880]">
                  <span>FOLIO NO. 419</span>
                  <span className="text-blue-700">65 CHARACTERS / LINE</span>
                </div>

                <div className="py-5 space-y-4 font-sans text-sm text-[#333330] leading-relaxed">
                  <p className="font-medium text-[#111110] text-base">
                    "True intellectual production requires isolation from ambient noise. We think with our hands on the keyboard."
                  </p>
                  <p className="text-xs text-[#666660]">
                    Atelier dispenses with complex tag trees, kanban boards, and social vanity metrics. It renders prose with exact optical kerning, proportional margins, and instant keyboard retrieval.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#f0f0ec] flex items-center justify-between text-xs font-mono text-[#777770]">
                  <span>EXPORT: LATEX / MD / PDF</span>
                  <span className="text-[#111110] font-semibold">100% LOCAL DISK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Strip (Academic Presses & Journals) */}
      <section className="py-8 border-b border-[#e5e5e1] bg-[#efefe9]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-6 text-xs font-mono uppercase tracking-widest text-[#777770]">
            <span>ADOPTED BY FELLOWS AT:</span>
            <span className="text-[#222220] font-medium">Zurich Institute of Design</span>
            <span className="text-[#222220] font-medium">Cambridge Epistemic Press</span>
            <span className="text-[#222220] font-medium">Basel Typographic Society</span>
            <span className="text-[#222220] font-medium">Oxford Digital Humanities</span>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Scriptorium & Marginalia (ID: document) */}
      <section id="document" className="py-20 border-b border-[#e5e5e1] bg-[#f6f6f4]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-normal tracking-tight text-[#111110] sm:text-4xl">
              Marginalia that live alongside your prose.
            </h2>
            <p className="mt-3 text-base text-[#555550] max-w-[60ch]">
              Thoughts should not be hidden behind tooltips. Sidenotes float organically in the margins, mirroring the century-old discipline of annotated manuscripts.
            </p>
          </div>

          {/* Interactive Manuscript Paper */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Text Body (8 cols) */}
            <div className="lg:col-span-8 rounded-xl border border-[#deded9] bg-white p-8 sm:p-12 shadow-sm">
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#f0f0ec] text-xs font-mono text-[#888880]">
                <span>CHAPTER 03 - ON THE ARCHITECTURE OF MEMORY</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedFont("modernist")}
                    className={`px-2 py-1 rounded text-[11px] ${
                      selectedFont === "modernist"
                        ? "bg-[#111110] text-white"
                        : "text-[#666660] hover:text-[#111110]"
                    }`}
                  >
                    Proportional
                  </button>
                  <button
                    onClick={() => setSelectedFont("monospace")}
                    className={`px-2 py-1 rounded text-[11px] ${
                      selectedFont === "monospace"
                        ? "bg-[#111110] text-white"
                        : "text-[#666660] hover:text-[#111110]"
                    }`}
                  >
                    Monospace
                  </button>
                </div>
              </div>

              <div
                className={`space-y-6 text-base sm:text-lg leading-[1.8] text-[#222220] ${
                  selectedFont === "monospace" ? "font-mono text-sm leading-relaxed" : "font-sans"
                }`}
              >
                <p>
                  We often mistakenly view note-taking as an archival chore, accumulating clippings into a digital mausoleum where insights go to die.
                </p>

                {MARGINALIA.map((item) => {
                  const isSelected = activeMargin.id === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveMargin(item)}
                      className={`cursor-pointer rounded-lg p-3 transition-colors border-l-2 ${
                        isSelected
                          ? "bg-blue-50/70 border-blue-600 text-[#111110]"
                          : "border-transparent hover:bg-[#f9f9f7]"
                      }`}
                    >
                      <p className="font-medium">
                        "{item.sourceText}"
                      </p>
                      <span className="text-xs font-mono text-blue-700 uppercase tracking-wider block mt-1">
                        [Click to inspect {item.author}]
                      </span>
                    </div>
                  );
                })}

                <p>
                  When notes are allowed to hold spatial tension with one another, writing ceases to be a linear struggle and becomes an act of architectural composition.
                </p>
              </div>
            </div>

            {/* Marginalia Sidebar (4 cols) */}
            <div className="lg:col-span-4 sticky top-24 space-y-4">
              <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-6 shadow-sm">
                <span className="text-xs font-mono uppercase tracking-widest text-blue-700 font-semibold">
                  {activeMargin.author}
                </span>
                <p className="mt-3 text-sm text-[#222220] leading-relaxed">
                  {activeMargin.note}
                </p>
                <div className="mt-4 pt-4 border-t border-blue-200/80 text-xs font-mono text-[#666660]">
                  REFERENCED IN NOTEBOOK 04
                </div>
              </div>

              <div className="rounded-xl border border-[#deded9] bg-white p-6 text-xs text-[#555550] space-y-2">
                <div className="font-mono text-[#111110] font-semibold uppercase">
                  Scriptorium Rules
                </div>
                <p className="leading-relaxed">
                  Every paragraph contains zero distractions. Pressing Shift+Tab collapses all toolbars and locks focus to the current active thought.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The 4 Core Tenets (2-Column Spec Layout, No Divided Rows) (ID: tenets) */}
      <section id="tenets" className="py-20 border-b border-[#e5e5e1] bg-[#efefe9]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            {/* Eyebrow 2 of 2 */}
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-700 mb-4">
              <Article size={14} weight="bold" />
              <span>Discipline and Craft</span>
            </div>
            <h2 className="text-3xl font-normal tracking-tight text-[#111110] sm:text-4xl">
              Principles of solitary knowledge work.
            </h2>
            <p className="mt-3 text-base text-[#555550]">
              Built on four foundational commitments to personal intellectual agency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-[#deded9] bg-white p-8">
              <div className="font-mono text-2xl text-blue-700 font-semibold">01</div>
              <h3 className="mt-3 text-xl font-medium text-[#111110]">
                Typographic Integrity
              </h3>
              <p className="mt-2 text-sm text-[#555550] leading-relaxed">
                The visual form of your thoughts shapes the rigor of your conclusions. Atelier uses strict proportional geometry, optical sizing, and balanced whitespace.
              </p>
            </div>

            <div className="rounded-xl border border-[#deded9] bg-white p-8">
              <div className="font-mono text-2xl text-blue-700 font-semibold">02</div>
              <h3 className="mt-3 text-xl font-medium text-[#111110]">
                Zero Cloud Dependency
              </h3>
              <p className="mt-2 text-sm text-[#555550] leading-relaxed">
                Your essays exist solely on your local hard drive. There are no tracking scripts, no remote telemetry, and no enterprise analytics watching your unfinished drafts.
              </p>
            </div>

            <div className="rounded-xl border border-[#deded9] bg-white p-8">
              <div className="font-mono text-2xl text-blue-700 font-semibold">03</div>
              <h3 className="mt-3 text-xl font-medium text-[#111110]">
                Reversible Markdown
              </h3>
              <p className="mt-2 text-sm text-[#555550] leading-relaxed">
                Every document is standard UTF-8 text with clean YAML frontmatter. If Atelier disappears in 30 years, every note you wrote will open flawlessly in any text editor.
              </p>
            </div>

            <div className="rounded-xl border border-[#deded9] bg-white p-8">
              <div className="font-mono text-2xl text-blue-700 font-semibold">04</div>
              <h3 className="mt-3 text-xl font-medium text-[#111110]">
                Typewriter Cadence
              </h3>
              <p className="mt-2 text-sm text-[#555550] leading-relaxed">
                Active line centering keeps your active writing point permanently anchored in the vertical middle of your monitor. Your neck remains relaxed throughout multi-hour sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Typesetting Specifications (ID: typesetting) */}
      <section id="typesetting" className="py-20 border-b border-[#e5e5e1] bg-[#f6f6f4]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-normal tracking-tight text-[#111110] sm:text-4xl">
              Typesetting as an instrument of clarity.
            </h2>
            <p className="mt-3 text-base text-[#555550]">
              Every font parameter is tuned for legibility during sustained reading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-[#deded9] bg-white p-6">
              <span className="text-xs font-mono text-blue-700">SPECIFICATION A</span>
              <h3 className="mt-2 text-base font-medium text-[#111110]">Optical Measure</h3>
              <p className="mt-1 text-xs text-[#666660] leading-relaxed">
                Strict 65 character line measure preventing eye fatigue when tracking backward across lines.
              </p>
            </div>

            <div className="rounded-xl border border-[#deded9] bg-white p-6">
              <span className="text-xs font-mono text-blue-700">SPECIFICATION B</span>
              <h3 className="mt-2 text-base font-medium text-[#111110]">Mathematical KaTeX</h3>
              <p className="mt-1 text-xs text-[#666660] leading-relaxed">
                Render intricate mathematical equations inline with zero layout shift or canvas blurring.
              </p>
            </div>

            <div className="rounded-xl border border-[#deded9] bg-white p-6">
              <span className="text-xs font-mono text-blue-700">SPECIFICATION C</span>
              <h3 className="mt-2 text-base font-medium text-[#111110]">Print-Ready PDF</h3>
              <p className="mt-1 text-xs text-[#666660] leading-relaxed">
                Export to ISO 216 book layouts with real running headers, folios, and bibliography citations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Scholarly Endorsements (Attribution without em-dash) */}
      <section className="py-20 border-b border-[#e5e5e1] bg-[#efefe9]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-normal tracking-tight text-[#111110] sm:text-4xl">
              Remarks from the library desk.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-[#deded9] bg-white p-8 flex flex-col justify-between">
              <p className="text-sm text-[#333330] leading-relaxed">
                "Writing my entire monograph in Atelier felt like sitting in a quiet university archive before dawn. The marginal notes keep my thesis grounded."
              </p>
              <div className="mt-6 pt-4 border-t border-[#f0f0ec] text-xs font-mono">
                <span className="font-semibold text-[#111110]">Prof. Julian Weiss</span>
                <span className="text-[#777770] block">Comparative Literature, Heidelberg</span>
              </div>
            </div>

            <div className="rounded-xl border border-[#deded9] bg-white p-8 flex flex-col justify-between">
              <p className="text-sm text-[#333330] leading-relaxed">
                "Most note apps resemble noisy commercial dashboards. Atelier respects the dignity of the blank page and the weight of words."
              </p>
              <div className="mt-6 pt-4 border-t border-[#f0f0ec] text-xs font-mono">
                <span className="font-semibold text-[#111110]">Clara Lindqvist</span>
                <span className="text-[#777770] block">Essayist and Cultural Historian</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Quiet Acquisition CTA & Colophon (ID: acquire, colophon) */}
      <section id="acquire" className="py-22 bg-[#f6f6f4]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-2xl border border-[#deded9] bg-white p-12 sm:p-16 shadow-sm">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-700">
              COMMENCE YOUR TREATISE
            </span>
            <h2 className="mt-4 text-3xl font-normal tracking-tight text-[#111110] sm:text-4xl">
              Write with enduring clarity.
            </h2>
            <p className="mt-3 text-base text-[#555550] max-w-lg mx-auto">
              Perpetual single-license purchase. No monthly recurring subscriptions. Free updates across major revisions.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#download"
                className="inline-flex items-center justify-center rounded-lg bg-[#111110] px-7 py-3 text-sm font-medium text-[#f6f6f4] hover:bg-blue-700 transition-colors active:scale-[0.98]"
              >
                Acquire Atelier for Mac and PC
              </a>
              <a
                href="#sample"
                className="inline-flex items-center justify-center rounded-lg border border-[#d5d5d0] bg-white px-6 py-3 text-sm font-medium text-[#222220] hover:border-[#111110] transition-colors"
              >
                Inspect Sample Folio
              </a>
            </div>
          </div>

          <footer id="colophon" className="mt-16 pt-8 border-t border-[#e5e5e1] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#777770]">
            <div>ATELIER MONOGRAPH STUDIO. TYPESET IN GEIST SANS.</div>
            <div className="flex items-center gap-6">
              <a href="#colophon" className="hover:text-[#111110]">COLOPHON</a>
              <a href="#license" className="hover:text-[#111110]">PERPETUAL LICENSE</a>
              <a href="#vault" className="hover:text-[#111110]">PLAIN TEXT ARCHIVE</a>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
