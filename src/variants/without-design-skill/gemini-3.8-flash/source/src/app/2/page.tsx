"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Feather,
  BookOpen,
  Sparkles,
  Check,
  ArrowRight,
  Sliders,
  Coffee,
  Sun,
  Moon,
  Volume2,
  Maximize,
  Clock,
  Bookmark,
  Compass,
  Edit3,
  Eye,
  Heart,
  Quote,
  Shield,
  Layers
} from "lucide-react";

export default function IterationTwo() {
  const [activeTab, setActiveTab] = useState<"capture" | "distill" | "express">("distill");
  const [distillLevel, setDistillLevel] = useState<number>(3); // 1 = raw, 2 = bolded, 3 = highlighted, 4 = executive summary
  const [paperTheme, setPaperTheme] = useState<"ivory" | "linen" | "charcoal">("ivory");
  const [fontChoice, setFontChoice] = useState<"serif" | "sans">("serif");

  const paperBackgrounds = {
    ivory: "bg-[#FAF7F2] text-[#292524] border-[#E7E2D9]",
    linen: "bg-[#F3EFE6] text-[#1C1917] border-[#DCD5C8]",
    charcoal: "bg-[#1E1C1A] text-[#EDE8DF] border-[#38332E]",
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans ${
      paperTheme === "charcoal" ? "bg-[#141211] text-[#EDE8DF]" : "bg-[#F7F4EE] text-[#292524]"
    }`}>
      {/* Editorial Navigation */}
      <header className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors ${
        paperTheme === "charcoal"
          ? "border-[#2E2A27] bg-[#141211]/85"
          : "border-[#E7E2D9] bg-[#F7F4EE]/85"
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center border ${
              paperTheme === "charcoal"
                ? "bg-[#292524] border-[#443E38] text-[#D97706]"
                : "bg-[#EDE7DC] border-[#D9D1C3] text-[#C2410C]"
            }`}>
              <Feather className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight">
                Atelier
              </span>
              <span className="block text-[10px] tracking-widest uppercase opacity-60">
                The Digital Sanctuary
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm opacity-80">
            <a href="#philosophy" className="hover:opacity-100 transition">Philosophy</a>
            <a href="#interactive-canvas" className="hover:opacity-100 transition">Distillation</a>
            <a href="#manifesto" className="hover:opacity-100 transition">Quiet Software</a>
            <a href="#library" className="hover:opacity-100 transition">The Garden</a>
            <a href="#membership" className="hover:opacity-100 transition">Membership</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#membership"
              className={`text-xs px-5 py-2.5 rounded-full font-serif font-medium tracking-wide transition shadow-sm ${
                paperTheme === "charcoal"
                  ? "bg-[#EDE8DF] text-[#1C1917] hover:bg-white"
                  : "bg-[#292524] text-[#FAF7F2] hover:bg-[#1C1917]"
              }`}
            >
              Begin Journal
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs tracking-wider uppercase mb-8 opacity-75 border-current/20">
          <Coffee className="w-3.5 h-3.5 text-[#C2410C]" />
          <span>A serene sanctuary for longform contemplation</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.15]">
          Your mind is meant for thinking.{" "}
          <span className="italic block mt-1 font-serif text-[#C2410C]">
            Not for hoarding.
          </span>
        </h1>

        <p className="mt-8 text-lg sm:text-xl opacity-80 max-w-2xl mx-auto font-serif leading-relaxed">
          Step into a quiet editorial environment designed for the patient gestation of ideas. Free of clutter, notification badges, and superficial hype.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#interactive-canvas"
            className={`px-8 py-3.5 rounded-full text-sm font-medium tracking-wide shadow-md transition-all hover:scale-105 ${
              paperTheme === "charcoal"
                ? "bg-[#D97706] text-black hover:bg-[#F59E0B]"
                : "bg-[#C2410C] text-[#FAF7F2] hover:bg-[#9A3412]"
            }`}
          >
            Explore The Living Canvas
          </a>
          <a
            href="#manifesto"
            className="px-8 py-3.5 rounded-full border border-current/20 text-sm font-medium hover:border-current/40 transition"
          >
            Read The Manifesto
          </a>
        </div>

        {/* Paper & Type Switcher HUD for user joy */}
        <div className="mt-12 inline-flex items-center gap-4 p-2 rounded-2xl border border-current/10 bg-current/5 backdrop-blur text-xs">
          <span className="opacity-60 pl-2">Atmosphere:</span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPaperTheme("ivory")}
              className={`px-3 py-1 rounded-xl text-xs transition ${
                paperTheme === "ivory" ? "bg-white text-stone-900 shadow-sm font-medium" : "opacity-70"
              }`}
            >
              Warm Ivory
            </button>
            <button
              onClick={() => setPaperTheme("linen")}
              className={`px-3 py-1 rounded-xl text-xs transition ${
                paperTheme === "linen" ? "bg-[#EDE7DC] text-stone-900 shadow-sm font-medium" : "opacity-70"
              }`}
            >
              Japanese Linen
            </button>
            <button
              onClick={() => setPaperTheme("charcoal")}
              className={`px-3 py-1 rounded-xl text-xs transition ${
                paperTheme === "charcoal" ? "bg-[#292524] text-white shadow-sm font-medium" : "opacity-70"
              }`}
            >
              Nocturne Charcoal
            </button>
          </div>
          <div className="h-4 w-px bg-current/20" />
          <button
            onClick={() => setFontChoice(fontChoice === "serif" ? "sans" : "serif")}
            className="px-2.5 py-1 rounded-lg border border-current/15 text-[11px] hover:border-current/30 transition"
          >
            Font: {fontChoice === "serif" ? "Editorial Serif" : "Modern Sans"}
          </button>
        </div>
      </section>

      {/* Interactive Feature: Progressive Distillation Workspace */}
      <section id="interactive-canvas" className="py-12 px-6 max-w-5xl mx-auto">
        <div className={`rounded-3xl border shadow-xl p-6 sm:p-10 transition-all ${paperBackgrounds[paperTheme]}`}>
          {/* Workspace Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-current/10">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest font-mono opacity-60">
                Studio Document: #042
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#C2410C]" />
              <span className="text-xs opacity-75">Saved locally • No cloud tether</span>
            </div>

            {/* Distillation Level Stepper */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-serif opacity-75 hidden sm:inline">
                Distillation Layer:
              </span>
              <div className="flex items-center gap-1 bg-current/5 p-1 rounded-full border border-current/10">
                {[1, 2, 3, 4].map((level) => (
                  <button
                    key={level}
                    onClick={() => setDistillLevel(level)}
                    className={`h-7 px-3 rounded-full text-xs transition ${
                      distillLevel === level
                        ? "bg-[#C2410C] text-white font-medium"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    {level === 1 && "L1: Raw Notes"}
                    {level === 2 && "L2: Bold Accents"}
                    {level === 3 && "L3: Highlights"}
                    {level === 4 && "L4: Pure Essence"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Document Content Area */}
          <div className={`mt-8 max-w-2xl mx-auto ${fontChoice === "serif" ? "font-serif" : "font-sans"}`}>
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
              On Voluntary Simplicity and Deep Knowledge Synthesis
            </h2>
            <div className="mt-2 flex items-center gap-4 text-xs opacity-60 font-mono">
              <span>Reading time: 3 min</span>
              <span>•</span>
              <span>Source: Reading Marginalia on Seneca & Montaigne</span>
            </div>

            {/* Executive Distillation Box (L4) */}
            {distillLevel >= 4 && (
              <div className="mt-6 p-5 rounded-2xl bg-[#C2410C]/10 border border-[#C2410C]/30 animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C2410C] font-semibold mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Executive Distillation (L4 Essence)
                </div>
                <p className="text-sm font-serif leading-relaxed italic">
                  Information collection without periodic distillation is mental vanity. A note is only as valuable as the future creative decision it empowers. Prune ruthlessly until only foundational leverage remains.
                </p>
              </div>
            )}

            {/* Main Interactive Prose */}
            <div className="mt-8 space-y-6 text-base sm:text-lg leading-relaxed">
              <p>
                In our contemporary frenzy, the instinct is to capture everything. We bookmark hundreds of articles, screenshot thousands of slides, and store megabytes of highlights we will never revisit.
              </p>

              <p>
                {distillLevel >= 2 ? (
                  <strong className="font-semibold underline decoration-[#C2410C]/30 decoration-2">
                    True understanding does not arise from retention, but from deliberate distillation.
                  </strong>
                ) : (
                  "True understanding does not arise from retention, but from deliberate distillation."
                )}{" "}
                When you record an impression, you must return to it days later with fresh eyes.
              </p>

              <p>
                {distillLevel >= 3 ? (
                  <mark className="bg-[#FEF08A]/70 dark:bg-amber-500/20 px-1 py-0.5 rounded text-inherit">
                    The mark of mastery is the ability to compress a 400-page treatise into three lucid sentences.
                  </mark>
                ) : (
                  "The mark of mastery is the ability to compress a 400-page treatise into three lucid sentences."
                )}{" "}
                If you cannot summarize your notes into actionable principles, you have merely built an archive of unread paper.
              </p>

              <p>
                Atelier structures your thought into four organic tides:{" "}
                <span className="font-medium">Capture</span> without friction,{" "}
                <span className="font-medium">Organize</span> by emotional resonance,{" "}
                <span className="font-medium">Distill</span> into crystalline nuggets, and{" "}
                <span className="font-medium">Express</span> into published works.
              </p>
            </div>

            {/* Footnote / Marginalia */}
            <div className="mt-10 pt-6 border-t border-current/10 flex items-center justify-between text-xs opacity-75 font-mono">
              <span className="flex items-center gap-2">
                <Bookmark className="w-3.5 h-3.5 text-[#C2410C]" />
                Connected to: /essays/intellectual-gardening.md
              </span>
              <span>Layer {distillLevel} of 4 applied</span>
            </div>
          </div>
        </div>
      </section>

      {/* The 4-Stage Method Section */}
      <section id="philosophy" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-mono text-[#C2410C] font-semibold">
            The Atelier Method
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal">
            A Natural Rhythm of Reflection
          </h2>
          <p className="mt-4 text-base opacity-75 font-serif leading-relaxed">
            Unlike hyperactive task apps that demand constant micro-management, Atelier honors the seasons of deep intellectual creation.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Stage 1 */}
          <div className="rounded-2xl border border-current/10 p-6 flex flex-col justify-between hover:border-[#C2410C]/40 transition group">
            <div>
              <span className="font-mono text-xs opacity-50">Stage 01</span>
              <h3 className="mt-2 font-serif text-xl font-bold">1. Capture Purely</h3>
              <p className="mt-3 text-sm opacity-75 font-serif leading-relaxed">
                Record fleeting inspirations via audio transcription, book scan OCR, or rapid journal entries with zero formatting pressure.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-current/10 text-xs text-[#C2410C] font-mono">
              Zero distraction entry
            </div>
          </div>

          {/* Stage 2 */}
          <div className="rounded-2xl border border-current/10 p-6 flex flex-col justify-between hover:border-[#C2410C]/40 transition group">
            <div>
              <span className="font-mono text-xs opacity-50">Stage 02</span>
              <h3 className="mt-2 font-serif text-xl font-bold">2. The Garden Bed</h3>
              <p className="mt-3 text-sm opacity-75 font-serif leading-relaxed">
                Allow raw fragments to sit in your inbox. Only seedlings that withstand the test of time deserve cultivation into your main garden.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-current/10 text-xs text-[#C2410C] font-mono">
              Natural incubation
            </div>
          </div>

          {/* Stage 3 */}
          <div className="rounded-2xl border border-current/10 p-6 flex flex-col justify-between hover:border-[#C2410C]/40 transition group">
            <div>
              <span className="font-mono text-xs opacity-50">Stage 03</span>
              <h3 className="mt-2 font-serif text-xl font-bold">3. Layered Distillation</h3>
              <p className="mt-3 text-sm opacity-75 font-serif leading-relaxed">
                Progressively bold, highlight, and summarize. Turn thousands of words into concentrated intellectual leverage.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-current/10 text-xs text-[#C2410C] font-mono">
              Progressive distillation
            </div>
          </div>

          {/* Stage 4 */}
          <div className="rounded-2xl border border-current/10 p-6 flex flex-col justify-between hover:border-[#C2410C]/40 transition group">
            <div>
              <span className="font-mono text-xs opacity-50">Stage 04</span>
              <h3 className="mt-2 font-serif text-xl font-bold">4. Lyrical Expression</h3>
              <p className="mt-3 text-sm opacity-75 font-serif leading-relaxed">
                Export beautifully formatted essays, books, PDFs, or Substack newsletters with immaculate typographic typesetting.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-current/10 text-xs text-[#C2410C] font-mono">
              Typeset publishing
            </div>
          </div>
        </div>
      </section>

      {/* Quiet Software Manifesto */}
      <section id="manifesto" className="py-20 border-y border-current/10 bg-current/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="w-10 h-10 mx-auto text-[#C2410C] opacity-70 mb-4" />
          <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-snug">
            &quot;In an age of relentless notification feeds and artificial urgency, the greatest luxury an intellectual can possess is uninterrupted silence.&quot;
          </h2>
          <p className="mt-6 text-sm opacity-70 font-mono">
            — From The Atelier Manifesto on Quiet Tools
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="p-5 rounded-2xl bg-current/5 border border-current/10">
              <h4 className="font-serif font-bold text-base">No Gamification</h4>
              <p className="mt-2 text-xs opacity-75 font-serif leading-relaxed">
                No streak counters or guilt badges. Your writing practice is a sanctuary, not an engagement metric.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-current/5 border border-current/10">
              <h4 className="font-serif font-bold text-base">Local File Sovereignty</h4>
              <p className="mt-2 text-xs opacity-75 font-serif leading-relaxed">
                Everything lives in open formats on your hard drive. We could cease to exist and your journals remain untouched.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-current/5 border border-current/10">
              <h4 className="font-serif font-bold text-base">Zero Algorithmic Noise</h4>
              <p className="mt-2 text-xs opacity-75 font-serif leading-relaxed">
                No social feeds, no unsolicited recommendations. Only you and your evolving body of ideas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Membership */}
      <section id="membership" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <span className="text-xs uppercase tracking-widest font-mono text-[#C2410C]">
          Patron Membership
        </span>
        <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal">
          Invest in Your Intellectual Haven
        </h2>
        <p className="mt-3 text-base opacity-75 font-serif max-w-xl mx-auto">
          We are an independent studio. No venture capital, no ad tracking, no data harvesting. Just handcrafted software.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Annual Membership */}
          <div className="rounded-3xl border border-current/15 p-8 flex flex-col justify-between hover:border-[#C2410C]/50 transition bg-current/5">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider opacity-60">Annual Patron</span>
              <div className="mt-3 text-4xl font-serif font-bold">
                $68 <span className="text-sm font-normal opacity-60">/ year</span>
              </div>
              <p className="mt-2 text-xs opacity-75 font-serif">A modest tribute to quiet craftsmanship.</p>
              <div className="mt-6 space-y-3 text-xs opacity-85 font-serif">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C2410C]" />
                  <span>All desktop & mobile apps (macOS, iPadOS, iOS)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C2410C]" />
                  <span>Bespoke editorial typography & themes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C2410C]" />
                  <span>Encrypted iCloud & local drive backup</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C2410C]" />
                  <span>High-resolution book & essay PDF exports</span>
                </div>
              </div>
            </div>
            <a
              href="#join"
              className="mt-8 block text-center py-3 rounded-full bg-current/10 hover:bg-current/20 font-medium text-xs transition"
            >
              Begin 14-Day Quiet Trial
            </a>
          </div>

          {/* Lifetime Patron */}
          <div className={`rounded-3xl border-2 border-[#C2410C] p-8 flex flex-col justify-between relative shadow-lg ${
            paperTheme === "charcoal" ? "bg-[#292524]" : "bg-[#EDE7DC]"
          }`}>
            <span className="absolute -top-3 right-6 text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[#C2410C] text-white font-bold">
              Lifetime Patron
            </span>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#C2410C] font-semibold">Founder License</span>
              <div className="mt-3 text-4xl font-serif font-bold">
                $220 <span className="text-sm font-normal opacity-60">once</span>
              </div>
              <p className="mt-2 text-xs opacity-75 font-serif">Pay once. Own forever. Free updates for life.</p>
              <div className="mt-6 space-y-3 text-xs opacity-85 font-serif">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C2410C]" />
                  <span>Perpetual license to all present & future releases</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C2410C]" />
                  <span>Private roundtable discussions with the founders</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C2410C]" />
                  <span>Custom monograph typesetters included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C2410C]" />
                  <span>Supports 100% independent artisanal software</span>
                </div>
              </div>
            </div>
            <a
              href="#join"
              className="mt-8 block text-center py-3 rounded-full bg-[#C2410C] hover:bg-[#9A3412] text-white font-bold text-xs shadow-md transition"
            >
              Secure Lifetime Patronage
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-current/10 text-xs opacity-60 font-serif">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Feather className="w-4 h-4 text-[#C2410C]" />
            <span className="font-bold">Atelier</span>
            <span>— Handcrafted for thoughtful minds</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/without-design-skill/gemini-3.8-flash/3" className="hover:opacity-100 transition">Iteration 3: Cortex CLI →</Link>
            <a href="#manifesto" className="hover:opacity-100 transition">The Manifesto</a>
            <a href="#privacy" className="hover:opacity-100 transition">Zero Telemetry</a>
            <span>© 2026 Atelier Studios</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
