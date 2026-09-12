"use client";

import React, { useState } from "react";
import Link from "next/link";

interface BloatExample {
  title: string;
  source: string;
  rawWordCount: number;
  distilledWordCount: number;
  reductionPercentage: number;
  rawExcerpt: string;
  distilledBrief: {
    coreAxiom: string;
    tradeoffs: string[];
    actionItem: string;
  };
}

const EXAMPLES: Record<string, BloatExample> = {
  board: {
    title: "45-Minute Board Strategy Transcript",
    source: "Q3 Strategy Meeting // Zoom Audio",
    rawWordCount: 4850,
    distilledWordCount: 88,
    reductionPercentage: 98.2,
    rawExcerpt:
      "So basically, looking at the customer churn numbers in Europe, Sarah mentioned that maybe the pricing tier is too high, but then Mark chimed in saying our support latency in Berlin is actually 4 hours longer than New York. And then we spent 25 minutes debating whether we should hire two more support reps or just rewrite the onboarding docs...",
    distilledBrief: {
      coreAxiom:
        "European churn is an SLA failure, not a pricing resistance issue. Berlin response times (4.2h) exceed customer tolerance thresholds.",
      tradeoffs: [
        "Hiring local reps solves SLA in 14 days ($180k/yr).",
        "Self-serve documentation overhaul requires 6 weeks of engineering.",
      ],
      actionItem:
        "Contract 2 fractional EU support leads by Friday to stabilize churn while doc overhaul is scheduled for Q4.",
    },
  },
  research: {
    title: "14 Deep Research Papers on State Channels",
    source: "280 Pages // Distributed Cryptography",
    rawWordCount: 68200,
    distilledWordCount: 114,
    reductionPercentage: 99.8,
    rawExcerpt:
      "Theorem 4.2 states that given an asynchronous adversary with bounded delay delta, state transitions can be finalized off-chain subject to dispute challenge windows tau. However, under adversarial reorgs, the collateral lockup ratio lambda must be bounded by...",
    distilledBrief: {
      coreAxiom:
        "Off-chain state channels offer 10,000x throughput only if dispute periods exceed maximum network reorganization latency.",
      tradeoffs: [
        "Shorter dispute windows (1 hour) improve user liquidity but risk 51% attack exploits.",
        "Longer dispute windows (7 days) ensure security but lock user capital.",
      ],
      actionItem:
        "Adopt a hybrid 12-hour tiered challenge window with insurance bond collateral for transfers exceeding $50k.",
    },
  },
  brainstorm: {
    title: "82-Point Product Ideation Brainstorm",
    source: "Chaos Sticky Notes // Product Offsite",
    rawWordCount: 3120,
    distilledWordCount: 76,
    reductionPercentage: 97.5,
    rawExcerpt:
      "What if we add AI auto-tagging? And also dark mode neon colors? Someone suggested integrations with Jira, Linear, Notion, Asana, Monday, and Trello. Also maybe we can make voice notes with 3D audio spatialization...",
    distilledBrief: {
      coreAxiom:
        "82 features collapse into 1 actual user pain point: notes take too long to organize after the meeting ends.",
      tradeoffs: [
        "Building 6 integrations spreads dev focus thin and adds maintenance debt.",
        "Building 1 automated distillation pipeline solves 90% of user drop-off.",
      ],
      actionItem:
        "Kill 81 feature requests. Ship one ruthless one-click summary action.",
    },
  },
};

export default function TesseraLandingPage() {
  const [activeExampleKey, setActiveExampleKey] = useState<string>("board");
  const [isDistilling, setIsDistilling] = useState<boolean>(false);
  const [distilledPass, setDistilledPass] = useState<number>(3);

  const currentExample = EXAMPLES[activeExampleKey];

  const handleTriggerDistillation = (key: string) => {
    setIsDistilling(true);
    setActiveExampleKey(key);
    setTimeout(() => {
      setIsDistilling(false);
    }, 450);
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#18181B] selection:bg-[#C25E3E]/20 selection:text-[#18181B] font-sans antialiased overflow-x-hidden relative">
      {/* Heavy Architectural Chamfered Top Bar */}
      <header className="relative z-20 border-b-2 border-[#18181B] bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-5 h-5 bg-[#18181B] flex items-center justify-center text-[#F7F5F0] text-[10px] font-mono font-bold">
              T
            </div>
            <span className="font-mono text-sm tracking-[0.25em] font-black uppercase text-[#18181B]">
              TESSERA
            </span>
            <span className="hidden md:inline font-mono text-[11px] text-[#71717A] border-l border-[#D4CEBE] pl-3">
              THE RUTHLESS DISTILLATION MONOLITH
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-6 font-mono text-xs text-[#52525B]">
            <span>HOARDING AUDIT: ACTIVE</span>
            <span className="text-[#C25E3E] font-bold">AVG COMPRESSION: 98.4%</span>
            <span>NOISE REJECTION: MAXIMUM</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#crucible"
              className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-[#18181B] border border-[#18181B] hover:bg-[#EAE5DA] transition-colors"
            >
              Examine Crucible
            </a>
            <a
              href="#order"
              className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider font-bold text-[#F7F5F0] bg-[#18181B] hover:bg-[#C25E3E] transition-colors"
            >
              Kill Note Bloat
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="max-w-4xl space-y-6">
          <div className="inline-block px-3 py-1 bg-[#18181B] text-[#F7F5F0] font-mono text-[11px] uppercase tracking-widest font-semibold">
            AGAINST DIGITAL HOARDING // THE DISTILLATION ENGINE
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#18181B] leading-[0.98]">
            Note-taking has become digital hoarding.
            <span className="block text-[#C25E3E] mt-2">Tessera is the antidote.</span>
          </h1>

          <p className="text-lg sm:text-2xl text-[#3F3F46] font-normal leading-relaxed max-w-3xl">
            You do not need 10,000 unread bookmarks, 400 pages of rambling meeting transcripts, and
            a digital graveyard of unorganized Notion databases. You need high-conviction clarity.
            Tessera ruthlessly crushes noise and delivers the 3 sentences that dictate decisions.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4 font-mono text-xs">
            <a
              href="#crucible"
              className="px-8 py-4 bg-[#18181B] text-[#F7F5F0] hover:bg-[#C25E3E] uppercase tracking-widest font-bold transition-all shadow-lg flex items-center gap-3"
            >
              <span>Test The Compression Crucible</span>
              <span>↓</span>
            </a>
            <a
              href="#manifesto"
              className="px-8 py-4 border-2 border-[#18181B] text-[#18181B] hover:bg-[#EAE5DA] uppercase tracking-widest font-bold transition-all"
            >
              The Anti-Hoarding Manifesto
            </a>
          </div>
        </div>

        {/* The Compression Crucible Interactive Tool */}
        <section id="crucible" className="mt-20 pt-10 border-t-2 border-[#18181B]">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C25E3E] font-bold">
                THE CRUCIBLE ENGINE // LIVE DEMONSTRATION
              </span>
              <h2 className="text-3xl font-black uppercase text-[#18181B] mt-1">
                Select Bloat To Distill
              </h2>
            </div>

            {/* Example Selectors */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              {(Object.keys(EXAMPLES) as (keyof typeof EXAMPLES)[]).map((key) => (
                <button
                  key={key}
                  onClick={() => handleTriggerDistillation(key)}
                  className={`px-3.5 py-2 uppercase font-bold tracking-wider border-2 transition-all ${
                    activeExampleKey === key
                      ? "bg-[#18181B] text-[#F7F5F0] border-[#18181B]"
                      : "bg-[#EAE5DA] text-[#18181B] border-[#D4CEBE] hover:border-[#18181B]"
                  }`}
                >
                  {key === "board"
                    ? "Board Transcript"
                    : key === "research"
                    ? "14 Research Papers"
                    : "82-Point Brainstorm"}
                </button>
              ))}
            </div>
          </div>

          {/* Before & After Monolith Comparison Grid */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* The Raw Noise (Left) */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-[#EBE7DC] border-2 border-[#18181B] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#D4CEBE] font-mono text-xs">
                  <span className="text-[#71717A] uppercase font-bold">RAW UNFILTERED NOISE</span>
                  <span className="px-2 py-0.5 bg-[#D4CEBE] text-[#18181B] font-bold text-[10px]">
                    {currentExample.rawWordCount.toLocaleString()} WORDS
                  </span>
                </div>

                <div className="mt-4 font-mono text-xs text-[#71717A]">
                  SOURCE: {currentExample.source}
                </div>

                <div className="mt-4 p-4 bg-white border border-[#D4CEBE] text-xs text-[#71717A] font-serif leading-relaxed italic line-clamp-8">
                  &ldquo;{currentExample.rawExcerpt}&rdquo;
                </div>

                <div className="mt-4 text-xs font-mono text-rose-700 font-semibold">
                  ⚠️ Cognitive Cost: 42 minutes wasted reading rambling pleasantries and side debates.
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D4CEBE] flex items-center justify-between font-mono text-xs text-[#71717A]">
                <span>NOISE RATIO: 98%</span>
                <span className="text-[#18181B] font-bold">STATUS: UNFILTERED</span>
              </div>
            </div>

            {/* The Compression Arrow / Ratio Pill */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center p-4 text-center">
              <div className="w-14 h-14 rounded-full bg-[#18181B] text-[#F7F5F0] flex items-center justify-center font-mono font-black text-lg shadow-md mb-2">
                →
              </div>
              <div className="font-mono text-xs font-bold text-[#C25E3E] uppercase tracking-wider">
                -{currentExample.reductionPercentage}% NOISE
              </div>
              <div className="text-[10px] font-mono text-[#71717A] mt-1">
                3-Pass Semantic Sieve
              </div>
            </div>

            {/* The Distilled Brief (Right) */}
            <div
              className={`lg:col-span-5 p-6 sm:p-8 bg-white border-4 border-[#18181B] shadow-[8px_8px_0px_#18181B] flex flex-col justify-between transition-all duration-300 ${
                isDistilling ? "opacity-50 scale-[0.99]" : "opacity-100 scale-100"
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b-2 border-[#18181B] font-mono text-xs">
                  <span className="text-[#C25E3E] uppercase font-bold tracking-wider">
                    EXECUTABLE DECISION BRIEF
                  </span>
                  <span className="px-2 py-0.5 bg-[#18181B] text-[#F7F5F0] font-bold text-[10px]">
                    {currentExample.distilledWordCount} WORDS
                  </span>
                </div>

                {/* Core Axiom */}
                <div className="mt-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] font-bold">
                    01 // THE CORE AXIOM
                  </span>
                  <p className="mt-1 text-base font-bold text-[#18181B] leading-snug">
                    {currentExample.distilledBrief.coreAxiom}
                  </p>
                </div>

                {/* Critical Tradeoffs */}
                <div className="mt-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] font-bold">
                    02 // REAL TRADEOFFS
                  </span>
                  <ul className="mt-2 space-y-2 text-xs text-[#3F3F46] font-medium">
                    {currentExample.distilledBrief.tradeoffs.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#C25E3E] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Item */}
                <div className="mt-6 p-3 bg-[#F7F5F0] border border-[#18181B] font-mono text-xs">
                  <span className="text-[10px] uppercase font-bold text-[#C25E3E]">
                    03 // EXECUTABLE ACTION
                  </span>
                  <div className="mt-1 font-bold text-[#18181B]">
                    {currentExample.distilledBrief.actionItem}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t-2 border-[#18181B] flex items-center justify-between font-mono text-xs">
                <span className="text-[#C25E3E] font-bold">TIME TO READ: 22 SECONDS</span>
                <span className="underline cursor-pointer font-bold">Export PDF Memo →</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Pathology of the Digital Hoarder */}
        <section id="manifesto" className="mt-28 pt-16 border-t-2 border-[#18181B]">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C25E3E] font-bold">
              01 // THE HOARDING EPIDEMIC
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#18181B] mt-2 leading-tight">
              Collecting knowledge is not the same as possessing it.
            </h2>
            <p className="text-base text-[#3F3F46] mt-4 leading-relaxed">
              Knowledge workers spend 6.5 hours a week clipping articles into Readwise, saving
              bookmarks into Pocket, and pasting transcripts into Obsidian. When asked what they
              learned from last month&apos;s 200 clips, they draw a blank.
            </p>
            <p className="text-base text-[#3F3F46] mt-3 leading-relaxed font-semibold">
              Hoarding notes creates the dangerous illusion of competence. Tessera forces every note
              to justify its existence by answering: &ldquo;What decision does this change?&rdquo;
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#EBE7DC] border-2 border-[#18181B]">
              <div className="font-mono text-xs font-black uppercase text-[#C25E3E] mb-2">
                RULE 01 // NOISE GUILLOTINE
              </div>
              <h3 className="font-bold text-base text-[#18181B] mb-2">Pith Over Politeness</h3>
              <p className="text-xs text-[#52525B] leading-relaxed">
                Tessera automatically deletes polite conversational preamble, meeting logistics, and
                fluff. Only assertions and data survives.
              </p>
            </div>

            <div className="p-6 bg-[#EBE7DC] border-2 border-[#18181B]">
              <div className="font-mono text-xs font-black uppercase text-[#C25E3E] mb-2">
                RULE 02 // CONTRADICTION RADAR
              </div>
              <h3 className="font-bold text-base text-[#18181B] mb-2">Expose False Assumptions</h3>
              <p className="text-xs text-[#52525B] leading-relaxed">
                If your memo in October contradicts a baseline thesis you confirmed in April, Tessera
                forces you to reconcile the discrepancy.
              </p>
            </div>

            <div className="p-6 bg-[#EBE7DC] border-2 border-[#18181B]">
              <div className="font-mono text-xs font-black uppercase text-[#C25E3E] mb-2">
                RULE 03 // ENTROPY DECAY
              </div>
              <h3 className="font-bold text-base text-[#18181B] mb-2">Unused Notes Expire</h3>
              <p className="text-xs text-[#52525B] leading-relaxed">
                Notes that fail to inform a decision within 90 days fade into passive cold storage.
                Your active workspace never exceeds 50 cards.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Pricing Monolith */}
        <section id="order" className="mt-28 pt-16 border-t-2 border-[#18181B]">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C25E3E] font-bold">
              02 // COMMERCIAL ACCESS
            </span>
            <h2 className="text-3xl font-black uppercase text-[#18181B] mt-1">
              Invest In Radical Reduction.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Solo Strategist */}
            <div className="p-8 bg-[#EBE7DC] border-2 border-[#18181B] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center font-mono">
                  <h3 className="text-xl font-black uppercase text-[#18181B]">Solo Strategist</h3>
                  <span className="text-[10px] font-bold text-[#71717A] uppercase px-2 py-0.5 bg-[#D4CEBE]">
                    SINGLE OPERATOR
                  </span>
                </div>
                <div className="mt-4 flex items-baseline gap-1 font-mono">
                  <span className="text-4xl font-black text-[#18181B]">$19</span>
                  <span className="text-xs text-[#71717A]">/ month</span>
                </div>
                <p className="text-xs text-[#52525B] mt-3 leading-relaxed">
                  For solo founders, analysts, and operators who refuse to let meeting bloat and PDF
                  overload consume their focus.
                </p>

                <ul className="mt-6 space-y-2.5 font-mono text-xs text-[#18181B]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#C25E3E] font-bold">■</span> Up to 500 hours audio
                    distillation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#C25E3E] font-bold">■</span> Automated 3-sentence decision
                    briefs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#C25E3E] font-bold">■</span> 90-day entropy decay storage
                  </li>
                </ul>
              </div>

              <button className="mt-8 w-full py-4 bg-[#18181B] text-[#F7F5F0] hover:bg-[#C25E3E] font-mono text-xs uppercase tracking-widest font-bold transition-all shadow-md">
                Begin Distillation Trial
              </button>
            </div>

            {/* Executive Board */}
            <div className="p-8 bg-white border-4 border-[#18181B] shadow-[8px_8px_0px_#18181B] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center font-mono">
                  <h3 className="text-xl font-black uppercase text-[#18181B]">Executive Office</h3>
                  <span className="text-[10px] font-bold text-[#C25E3E] uppercase px-2 py-0.5 bg-[#C25E3E]/10 border border-[#C25E3E]">
                    ENTERPRISE
                  </span>
                </div>
                <div className="mt-4 flex items-baseline gap-1 font-mono">
                  <span className="text-4xl font-black text-[#18181B]">$49</span>
                  <span className="text-xs text-[#71717A]">/ seat / month</span>
                </div>
                <p className="text-xs text-[#52525B] mt-3 leading-relaxed">
                  For leadership teams and boards. Unified corporate memory that strips departmental
                  politics and surfaces unvarnished strategic truth.
                </p>

                <ul className="mt-6 space-y-2.5 font-mono text-xs text-[#18181B]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#C25E3E] font-bold">■</span> Everything in Solo
                    Strategist
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#C25E3E] font-bold">■</span> Cross-departmental
                    contradiction detection
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#C25E3E] font-bold">■</span> Board-ready PDF memo
                    generation
                  </li>
                </ul>
              </div>

              <button className="mt-8 w-full py-4 bg-[#C25E3E] text-white hover:bg-[#18181B] font-mono text-xs uppercase tracking-widest font-bold transition-all shadow-md">
                Deploy Executive Monolith
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Monolith Footer */}
      <footer className="relative z-10 border-t-2 border-[#18181B] bg-[#EBE7DC] py-10 px-6 font-mono text-xs text-[#52525B]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-[#18181B]" />
            <span className="text-[#18181B] font-black uppercase">TESSERA MONOLITH</span>
            <span>//</span>
            <span>Silence until sparked. Stop hoarding.</span>
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <Link href="/with-design-skill/gemini-3.8-flash/4" className="hover:text-[#18181B]">
              ← 04 Mneme
            </Link>
            <Link href="/with-design-skill/gemini-3.8-flash/1" className="hover:text-[#C25E3E] font-bold">
              Restart at 01 Cortex →
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
