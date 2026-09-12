"use client";

import React, { useState } from "react";
import Link from "next/link";

interface SedimentStage {
  label: string;
  timeframe: string;
  badge: string;
  accent: string;
  headline: string;
  text: string;
  metadata: {
    clarity: string;
    connections: number;
    permanence: string;
  };
}

const STAGES: SedimentStage[] = [
  {
    label: "Raw Whisper Current",
    timeframe: "07:14 AM // Morning Walk",
    badge: "EPHEMERAL STREAM",
    accent: "#FBBF24",
    headline: "Unfiltered stream of consciousness",
    text: "walking through foggy pine trees... realized something about distributed teams—it feels just like ancient maritime convoys? they didn't have radio, so ship captains were given sealed letters with intent rather than hourly micromanagement. what if software management isn't about slack pings but sealed orders? need to re-read that book on 18th century naval doctrine...",
    metadata: {
      clarity: "24% (Labile)",
      connections: 1,
      permanence: "Fluid River",
    },
  },
  {
    label: "Semantic Ripening",
    timeframe: "T + 48 Hours // Sleep Consolidation",
    badge: "SEDIMENT FORMING",
    accent: "#B388FF",
    headline: "Latent theme extraction & sleep replay",
    text: "Naval Doctrine & Asynchronous Autonomy: 18th-century maritime command relied on 'Command by Intent' (Auftragstaktik). Captains operated for 9 months with zero communication yet executed cohesive fleet strategy. Key insight: High-context latency requires radical local autonomy, not faster communication tools.",
    metadata: {
      clarity: "68% (Forming)",
      connections: 6,
      permanence: "Sedimentary Bed",
    },
  },
  {
    label: "Crystalline Bedrock",
    timeframe: "T + 30 Days // Evergreen Wisdom",
    badge: "DIAMOND BEDROCK",
    accent: "#6EE7B7",
    headline: "Hardened evergreen thesis & decision axiom",
    text: "THE CONVOY PROTOCOL FOR DISTRIBUTED SYSTEMS: Real autonomy is inversely proportional to communication frequency. Organizations with continuous synchronous chat (Slack/Teams) degrade into low-context micromanagement. Resilient scale requires sealed-order intent: clear boundaries, high trust, and silence until landfall.",
    metadata: {
      clarity: "99% (Crystalline)",
      connections: 19,
      permanence: "Eternal Bedrock",
    },
  },
];

export default function MnemeLandingPage() {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const currentStage = STAGES[activeStageIndex];

  return (
    <div className="min-h-screen bg-[#090A10] text-[#E5E2ED] selection:bg-[#B388FF]/30 selection:text-white font-serif antialiased overflow-x-hidden relative">
      {/* Ambient Nocturne River Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[400px] bg-gradient-to-b from-[#241A40]/30 via-[#18112C]/20 to-transparent blur-[140px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[50vw] h-[50vw] bg-gradient-to-tr from-[#161224]/40 via-[#B388FF]/05 to-transparent blur-[160px]" />
      </div>

      {/* Top River Header */}
      <header className="relative z-20 border-b border-white/[0.06] bg-[#090A10]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-sans">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B388FF] shadow-[0_0_12px_#B388FF]" />
            <span className="font-serif italic font-bold tracking-wider text-white text-base">
              Mneme
            </span>
            <span className="hidden sm:inline font-mono text-[11px] text-[#8C869E] border-l border-white/10 pl-3">
              THE CHRONOLOGICAL CONSCIOUSNESS
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 font-mono text-xs text-[#8C869E]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]" />
              <span>STREAM: 8,410 VOICES RECORDED</span>
            </span>
            <span>CIRCADIAN: SLEEP CONSOLIDATION READY</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#crystallizer"
              className="px-3.5 py-1.5 text-xs font-mono text-[#E5E2ED] border border-white/10 rounded-full hover:border-[#B388FF]/50 transition-colors"
            >
              Watch Crystallizer
            </a>
            <a
              href="#join-stream"
              className="px-4 py-1.5 text-xs font-mono font-semibold text-white bg-[#5B21B6] hover:bg-[#6D28D9] rounded-full shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all"
            >
              Enter The Stream
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B388FF]/10 border border-[#B388FF]/25 text-[#B388FF] font-mono text-[11px] tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B388FF]" />
            <span>The River of Thought & Time</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-white leading-[1.08] tracking-tight">
            You cannot organize a thought
            <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-[#B388FF] via-[#F3F0F9] to-[#FBBF24] mt-2">
              before you have finished having it.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#AFAABF] font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Traditional tools force you to categorize a fledgling thought the moment it enters
            your head: pick a folder, assign a tag, name a title. That friction kills the spark.
            Mneme welcomes the raw, messy river—and lets time crystallize it into diamond.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 font-sans text-xs">
            <a
              href="#crystallizer"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#9333EA] hover:from-[#8B5CF6] hover:to-[#A855F7] text-white font-semibold tracking-wide transition-all shadow-[0_0_30px_rgba(124,58,237,0.4)]"
            >
              Experience The Crystallization Engine ↓
            </a>
            <a
              href="#philosophy"
              className="px-6 py-3.5 rounded-full border border-white/15 text-[#AFAABF] hover:text-white hover:bg-white/[0.04] transition-all"
            >
              Read The Sediment Manifesto
            </a>
          </div>
        </div>

        {/* The Signature Crystallizer Interactive Engine */}
        <section id="crystallizer" className="mt-20 pt-8 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-[#0E101A]/80 p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-xl">
            {/* Stage Selector Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B388FF]">
                  INTERACTIVE STAGE SCRUBBER
                </span>
                <h3 className="font-serif text-xl text-white mt-0.5">
                  Watch a Thought Harden Through Time
                </h3>
              </div>

              <div className="flex items-center gap-1.5 bg-[#090A10] p-1 rounded-full border border-white/10 font-sans text-xs">
                {STAGES.map((stg, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStageIndex(idx)}
                    className={`px-3 py-1.5 rounded-full transition-all text-xs ${
                      activeStageIndex === idx
                        ? "bg-[#5B21B6] text-white font-medium shadow-md"
                        : "text-[#8C869E] hover:text-white"
                    }`}
                  >
                    Stage 0{idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider Track */}
            <div className="my-8">
              <div className="flex justify-between font-mono text-[11px] text-[#8C869E] mb-2">
                <span>STAGE 1: RAW INGESTION</span>
                <span>STAGE 2: SLEEP RIPENING</span>
                <span>STAGE 3: EVERGREEN BEDROCK</span>
              </div>
              <input
                type="range"
                min="0"
                max="2"
                step="1"
                value={activeStageIndex}
                onChange={(e) => setActiveStageIndex(parseInt(e.target.value))}
                className="w-full accent-[#B388FF] cursor-pointer bg-white/10 h-1.5 rounded-lg"
              />
            </div>

            {/* Stage Content Card */}
            <div className="p-6 sm:p-8 rounded-xl bg-[#131522] border border-white/[0.08] relative overflow-hidden transition-all duration-300">
              {/* Dynamic Aura Accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-25 pointer-events-none"
                style={{ backgroundColor: currentStage.accent }}
              />

              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span
                  className="px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase tracking-wider font-semibold"
                  style={{
                    backgroundColor: `${currentStage.accent}20`,
                    color: currentStage.accent,
                    border: `1px solid ${currentStage.accent}40`,
                  }}
                >
                  {currentStage.badge}
                </span>
                <span className="font-mono text-xs text-[#8C869E]">{currentStage.timeframe}</span>
              </div>

              <h4 className="font-serif italic text-lg sm:text-xl text-white mb-3">
                &ldquo;{currentStage.headline}&rdquo;
              </h4>

              <p className="font-serif text-base sm:text-lg text-[#D2CCE0] leading-relaxed italic">
                {currentStage.text}
              </p>

              {/* Cognitive Telemetry Bar */}
              <div className="mt-8 pt-4 border-t border-white/[0.08] grid grid-cols-3 gap-4 font-mono text-xs">
                <div>
                  <div className="text-[10px] text-[#8C869E] uppercase">Semantic Clarity</div>
                  <div className="text-white font-medium mt-0.5">{currentStage.metadata.clarity}</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#8C869E] uppercase">Cross-Links Formed</div>
                  <div className="text-[#B388FF] font-medium mt-0.5">
                    +{currentStage.metadata.connections} connections
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-[#8C869E] uppercase">Memory State</div>
                  <div className="text-white font-medium mt-0.5">
                    {currentStage.metadata.permanence}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Fallacy of Upfront Categorization */}
        <section id="philosophy" className="mt-28 pt-16 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B388FF]">
                01 // THE PSYCHOLOGY OF CAPTURE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white leading-tight">
                Folders demand decisions you are not yet qualified to make.
              </h2>
              <p className="font-sans text-sm text-[#AFAABF] leading-relaxed">
                When you overhear a brilliant remark on a subway train, you do not know if it
                belongs to your upcoming pitch deck, your philosophical memoir, or a sci-fi short
                story you might write in five years.
              </p>
              <p className="font-sans text-sm text-[#AFAABF] leading-relaxed">
                When an app forces you to file it into a folder, your brain hesitates. That tiny
                hesitation is why 90% of your best thoughts evaporate into thin air.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  title: "Whisper Audio Streams",
                  desc: "Press a single physical lock-screen button and speak freely. Mneme transcribes with intonation, pauses, and emotional nuances captured untouched.",
                },
                {
                  title: "REM Sleep Consolidation",
                  desc: "Just as the biological brain consolidates daily memories during nocturnal slow-wave sleep, Mneme re-evaluates yesterday's fragments overnight.",
                },
                {
                  title: "Geological Sediment Strata",
                  desc: "Your thoughts aren't lost in an archive. They form geological strata. The deeper you scroll, the more foundational the bedrock.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#0E101A] border border-white/[0.06] hover:border-white/[0.15] transition-all"
                >
                  <h3 className="font-serif italic text-lg text-white mb-1.5">{item.title}</h3>
                  <p className="font-sans text-xs text-[#8C869E] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Pricing & Stream Access */}
        <section id="join-stream" className="mt-28 pt-16 border-t border-white/[0.08]">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B388FF]">
              02 // SANCTUARY TIERS
            </span>
            <h2 className="font-serif text-3xl text-white mt-1">
              Begin your continuous river.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-[#0E101A] border border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="font-serif italic text-xl text-white">The Daily Current</h3>
                <div className="mt-4 flex items-baseline gap-1 font-mono">
                  <span className="text-4xl text-white font-bold">$9</span>
                  <span className="text-xs text-[#8C869E]">/ month</span>
                </div>
                <p className="text-xs font-sans text-[#8C869E] mt-3 leading-relaxed">
                  For daily writers, walkers, and thinkers. Unlimited voice audio whispers, automatic
                  overnight consolidation, and instant export.
                </p>
                <ul className="mt-6 space-y-2.5 font-sans text-xs text-[#D2CCE0]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#B388FF]">✓</span> Unlimited voice whisper transcription
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#B388FF]">✓</span> Nightly REM sleep synthesis passes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#B388FF]">✓</span> Mobile lock-screen instant capture
                  </li>
                </ul>
              </div>
              <button className="mt-8 w-full py-3 rounded-full border border-white/20 text-xs font-sans font-semibold text-white hover:bg-white/10 transition-all">
                Enter 14-Day Free Current
              </button>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#18112C] to-[#0E101A] border border-[#B388FF]/40 flex flex-col justify-between shadow-[0_0_30px_rgba(179,136,255,0.15)]">
              <div>
                <h3 className="font-serif italic text-xl text-white">The Obsidian Basin</h3>
                <div className="mt-4 flex items-baseline gap-1 font-mono">
                  <span className="text-4xl text-white font-bold">$19</span>
                  <span className="text-xs text-[#8C869E]">/ month</span>
                </div>
                <p className="text-xs font-sans text-[#AFAABF] mt-3 leading-relaxed">
                  For lifetime essayists, founders, and researchers. Adds multi-year cross-epoch
                  crystallization and personalized AI biographical biographer.
                </p>
                <ul className="mt-6 space-y-2.5 font-sans text-xs text-white">
                  <li className="flex items-center gap-2">
                    <span className="text-[#B388FF]">✓</span> Everything in The Daily Current
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#B388FF]">✓</span> Multi-year chronological sediment geological map
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#B388FF]">✓</span> Dedicated personal biographer synthesis agent
                  </li>
                </ul>
              </div>
              <button className="mt-8 w-full py-3 rounded-full bg-[#7C3AED] hover:bg-[#8B5CF6] text-white text-xs font-sans font-semibold transition-all shadow-md">
                Claim Obsidian Basin
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.08] bg-[#06070B] py-10 px-6 font-sans text-xs text-[#8C869E]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#B388FF]" />
            <span className="text-white font-serif italic text-sm">Mneme</span>
            <span>//</span>
            <span>Thoughts flow like water; wisdom forms like stone.</span>
          </div>
          <div className="flex items-center gap-6 text-[11px] font-mono">
            <Link href="/with-design-skill/gemini-3.8-flash/3" className="hover:text-white">
              ← 03 Syntact
            </Link>
            <Link href="/with-design-skill/gemini-3.8-flash/5" className="hover:text-[#B388FF] font-bold">
              Next: 05 Tessera (Ruthless Distillation) →
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
