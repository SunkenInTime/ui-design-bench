"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Flower,
  Microphone,
  Sparkle,
  Waves,
  Sun,
  Moon,
  CloudSun,
  ShieldCheck,
  TreeEvergreen,
  ArrowRight,
  Heart,
  Compass,
} from "@phosphor-icons/react";

/*
  DESIGN READ:
  Reading this as: Mindful memory repository for creative directors and contemplative
  knowledge workers, with a tactile Scandinavian modernism language, leaning toward
  cool mist #f8fafc, deep forest spruce #064e3b accent, soft pill geometries,
  and fluid bento cards.

  DIALS:
  DESIGN_VARIANCE: 7
  MOTION_INTENSITY: 5
  VISUAL_DENSITY: 4
*/

interface ThoughtCard {
  id: string;
  title: string;
  category: string;
  preview: string;
  time: string;
  color: string;
}

const GARDEN_THOUGHTS: ThoughtCard[] = [
  {
    id: "t1",
    title: "Morning walk audio memo",
    category: "Audio Stream",
    preview: "Reflection on architectural proportion in Finnish libraries. The light through pine needles mirrors cognitive clarity.",
    time: "07:42 AM",
    color: "#ecfdf5",
  },
  {
    id: "t2",
    title: "Notes on deliberate slowness",
    category: "Synthesis",
    preview: "Speed of typing is not speed of thinking. A second brain should encourage distillation rather than hoarding.",
    time: "Yesterday",
    color: "#f0fdf4",
  },
  {
    id: "t3",
    title: "Visual composition study",
    category: "Visual Clipping",
    preview: "Color harmonies extracted from Alvar Aalto glassware: sea green, frosted smoke, and raw linen.",
    time: "Sep 01",
    color: "#f8fafc",
  },
];

export default function MindwellLandingPage() {
  const [activeThought, setActiveThought] = useState<ThoughtCard>(GARDEN_THOUGHTS[0]);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  return (
    <div className="min-h-[100dvh] bg-[#f8fafc] text-slate-900 selection:bg-emerald-600/20 selection:text-emerald-950 font-sans">
      {/* Calm Ceramic Navigation */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#f8fafc]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/with-taste-skill/gemini-3.8-flash/4" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#064e3b] text-white shadow-sm">
              <TreeEvergreen size={20} weight="fill" />
            </div>
            <span className="font-semibold text-base tracking-tight text-slate-900">
              Mindwell
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#garden" className="hover:text-[#064e3b] transition-colors">
              Thought Garden
            </a>
            <a href="#rituals" className="hover:text-[#064e3b] transition-colors">
              Rituals
            </a>
            <a href="#privacy" className="hover:text-[#064e3b] transition-colors">
              Sanctuary Privacy
            </a>
            <a href="#stories" className="hover:text-[#064e3b] transition-colors">
              Reflections
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#garden"
              className="hidden sm:inline-flex text-xs font-medium text-slate-600 hover:text-slate-900 px-3 py-1.5"
            >
              Enter Vault
            </a>
            <a
              href="#begin"
              className="inline-flex items-center justify-center rounded-full bg-[#064e3b] px-5 py-2 text-xs font-semibold text-white transition-all hover:bg-[#043d2e] active:scale-[0.98] shadow-sm shadow-emerald-900/10"
            >
              Begin Sanctuary
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section (Fits Viewport, Tactile Ceramic Layout, max pt-16) */}
      <section className="pt-12 pb-16 lg:pt-16 lg:pb-22 border-b border-slate-200/70">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow 1 of 2 */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/15 bg-emerald-50 px-3.5 py-1 text-xs font-medium text-[#064e3b]">
                <Flower size={14} weight="bold" />
                <span>The Tactile Mind Sanctuary</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-slate-950 leading-[1.1]">
                A quiet sanctuary for thoughts that matter.
              </h1>

              <p className="text-base text-slate-600 leading-relaxed max-w-[50ch]">
                Cultivate a calm personal archive designed to reduce cognitive overload and let insights mature at their natural pace.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#begin"
                  className="inline-flex items-center justify-center rounded-full bg-[#064e3b] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#043d2e] active:scale-[0.98] shadow-md shadow-emerald-900/15"
                >
                  Begin Sanctuary
                </a>
                <a
                  href="#garden"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-slate-400 hover:text-slate-900 transition-all"
                >
                  <span>Tour the Garden</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>

            {/* Right Column: Tactile Ceramic Card Preview (6 cols) */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xl shadow-slate-200/50">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#064e3b]" />
                    <span className="text-xs font-medium text-slate-800">
                      GARDEN ACTIVE: 312 THOUGHTS
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">
                    Auto-synthesizing
                  </span>
                </div>

                {/* Interactive Thought Pills */}
                <div className="py-4 space-y-2.5">
                  {GARDEN_THOUGHTS.map((thought) => {
                    const isSelected = activeThought.id === thought.id;
                    return (
                      <div
                        key={thought.id}
                        onClick={() => setActiveThought(thought)}
                        className={`cursor-pointer rounded-2xl p-4 transition-all duration-200 border ${
                          isSelected
                            ? "bg-emerald-50/60 border-emerald-700/30 shadow-sm"
                            : "bg-slate-50 border-slate-200/60 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-900">
                            {thought.title}
                          </span>
                          <span className="text-[11px] text-slate-500">
                            {thought.time}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-slate-600 leading-relaxed line-clamp-2">
                          {thought.preview}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Audio transcription interactive bar */}
                <div className="mt-2 rounded-2xl bg-[#f8fafc] border border-slate-200 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                      className="h-9 w-9 rounded-full bg-[#064e3b] text-white flex items-center justify-center hover:bg-[#043d2e] transition-colors"
                      aria-label="Play audio snippet"
                    >
                      <Microphone size={16} weight="fill" />
                    </button>
                    <div>
                      <div className="text-xs font-semibold text-slate-800">
                        {isAudioPlaying ? "Audio processing live..." : "Whisper Transcription"}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        99.4% word accuracy on local device
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-[#064e3b]">
                    0:42 / 1:15
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gentle Proof Bar */}
      <section className="py-8 border-b border-slate-200/70 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-xs text-slate-500 mb-5">
            Cherished by quiet makers, architects, and essayists worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-sm font-medium text-slate-700">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-700" />
              <span>Studio Aalto Design</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-700" />
              <span>Copenhagen Architecture Collective</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-700" />
              <span>Stockholm Monograph Press</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-700" />
              <span>Kyoto Craft Institute</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Thought Garden Bento Grid (Exact 5 Cells, Rich Visual Diversity) (ID: garden) */}
      <section id="garden" className="py-20 border-b border-slate-200/70 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-normal tracking-tight text-slate-950 sm:text-4xl">
              Nurture your ideas into full bloom.
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-[60ch]">
              Unlike cluttered productivity apps with notifications and gamified streaks, Mindwell provides a peaceful habitat where thoughts breathe.
            </p>
          </div>

          {/* 5 Cells Bento Grid (2 top + 3 bottom) with distinct visual textures */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Cell 1 (4 cols): Serene Audio & Voice Journaling */}
            <div className="md:col-span-4 rounded-3xl border border-emerald-800/15 bg-gradient-to-br from-emerald-50/80 via-white to-slate-50 p-8 flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-[#064e3b]">
                  AMBIENT AUDIO MEMO
                </span>
                <h3 className="mt-4 text-2xl font-normal text-slate-950">
                  Speak your mind into structured prose.
                </h3>
                <p className="mt-2 text-sm text-slate-600 max-w-lg leading-relaxed">
                  Record impromptu thoughts on your commute or during a forest stroll. On-device intelligence transcribes, cleans verbal tics, and organizes insights with semantic tags.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <Waves size={20} className="text-[#064e3b]" />
                <span className="text-xs text-slate-600">
                  "The relationship between light and spatial memory..."
                </span>
              </div>
            </div>

            {/* Cell 2 (2 cols): Ambient Rhythm */}
            <div className="md:col-span-2 rounded-3xl border border-slate-200 bg-white p-8 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-2xl bg-emerald-50 text-[#064e3b] flex items-center justify-center mb-4">
                  <Sun size={22} weight="duotone" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950">
                  Circadian Rhythm
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Warm color temperature shifts automatically with the sun, preventing harsh blue light during quiet evening journal sessions.
                </p>
              </div>

              <div className="mt-6 text-xs font-medium text-[#064e3b]">
                Natural day-to-night palette
              </div>
            </div>

            {/* Cell 3 (2 cols): Bidirectional Roots */}
            <div className="md:col-span-2 rounded-3xl border border-slate-200 bg-white p-8 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4">
                  <Compass size={22} weight="duotone" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950">
                  Interconnected Roots
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Notes form organic roots across topics. When reading past entries, related ideas appear gently at the bottom of the page.
                </p>
              </div>
              <div className="mt-6 text-xs text-slate-500">
                Associative recall without manual tagging
              </div>
            </div>

            {/* Cell 4 (2 cols): Offline Quiet */}
            <div className="md:col-span-2 rounded-3xl border border-slate-200 bg-white p-8 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4">
                  <ShieldCheck size={22} weight="duotone" className="text-[#064e3b]" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950">
                  Quiet Sovereignty
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  No remote surveillance. No investor pressure to monetize your private confessions. Encrypted locally with your private key.
                </p>
              </div>
              <div className="mt-6 text-xs text-slate-500">
                100% on-device local storage
              </div>
            </div>

            {/* Cell 5 (2 cols): Thought Synthesis */}
            <div className="md:col-span-2 rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-8 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-2xl bg-emerald-100 text-[#064e3b] flex items-center justify-center mb-4">
                  <Sparkle size={22} weight="duotone" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950">
                  Weekly Distillation
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Every Sunday, Mindwell gathers the week's fragments into a single cohesive digest, spotlighting recurring motifs and breakthrough ideas.
                </p>
              </div>
              <div className="mt-6 text-xs text-[#064e3b] font-medium">
                Sunday gentle digest
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Daily Thought Rituals (ID: rituals) */}
      <section id="rituals" className="py-20 border-b border-slate-200/70 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            {/* Eyebrow 2 of 2 */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/15 bg-emerald-50 px-3.5 py-1 text-xs font-medium text-[#064e3b] mb-4">
              <CloudSun size={14} weight="bold" />
              <span>Mindful Cadence</span>
            </div>
            <h2 className="text-3xl font-normal tracking-tight text-slate-950 sm:text-4xl">
              Three gentle rituals for each day.
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Designed to weave naturally into your morning tea, afternoon walks, and evening wind-down.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-3xl border border-slate-200/90 bg-[#f8fafc] p-7">
              <span className="text-xs font-semibold text-[#064e3b]">RITUAL I - MORNING</span>
              <h3 className="mt-3 text-xl font-normal text-slate-950">The Clean Slate</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Begin with three unhurried stream-of-consciousness minutes. Clear mental residue before opening your email inbox.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/90 bg-[#f8fafc] p-7">
              <span className="text-xs font-semibold text-[#064e3b]">RITUAL II - MIDDAY</span>
              <h3 className="mt-3 text-xl font-normal text-slate-950">The Cross-Pollinator</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Mindwell surfaces one note from exactly three years ago, asking how your perspective has evolved since that entry.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/90 bg-[#f8fafc] p-7">
              <span className="text-xs font-semibold text-[#064e3b]">RITUAL III - EVENING</span>
              <h3 className="mt-3 text-xl font-normal text-slate-950">The Evening Archive</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Tuck three key takeaways into your knowledge tree and close the application with a clean visual resting state.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Reflections (Quotes, No Em-dashes) (ID: stories) */}
      <section id="stories" className="py-20 border-b border-slate-200/70 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-normal tracking-tight text-slate-950 sm:text-4xl">
              Letters from the sanctuary.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <p className="text-sm text-slate-700 leading-relaxed">
                "Mindwell cured my obsessive productivity anxiety. For the first time in ten years, writing notes feels like tending to an indoor garden rather than managing a Jira sprint."
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs">
                <span className="font-semibold text-slate-950">Astrid Lindgren-Holt</span>
                <span className="text-slate-500 block">Ceramic Sculptor and Creative Director, Oslo</span>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <p className="text-sm text-slate-700 leading-relaxed">
                "The ambient voice transcription captures all my ideas during daily trail runs. It feels like having a gentle, completely silent companion who remembers everything."
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs">
                <span className="font-semibold text-slate-950">Casper Jensen</span>
                <span className="text-slate-500 block">Industrial Designer, Copenhagen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Serene Final CTA & Footer (ID: begin) */}
      <section id="begin" className="py-22 bg-[#f8fafc]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-3xl border border-emerald-800/20 bg-white p-12 sm:p-16 shadow-xl shadow-emerald-950/5">
            <div className="h-12 w-12 rounded-full bg-emerald-50 text-[#064e3b] flex items-center justify-center mx-auto mb-5">
              <Flower size={26} weight="fill" />
            </div>
            <h2 className="text-3xl font-normal tracking-tight text-slate-950 sm:text-4xl">
              Begin your personal thought sanctuary.
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-md mx-auto">
              Download Mindwell for iOS, iPadOS, and macOS. Thirty days of peaceful reflection included.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#download"
                className="inline-flex items-center justify-center rounded-full bg-[#064e3b] px-7 py-3 text-sm font-semibold text-white hover:bg-[#043d2e] transition-all shadow-md shadow-emerald-900/15 active:scale-[0.98]"
              >
                Download for Mac and iPad
              </a>
              <a
                href="#garden"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:border-slate-400 transition-colors"
              >
                Explore Sanctuary Guide
              </a>
            </div>
          </div>

          <footer className="mt-16 pt-8 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>MINDWELL SANCTUARY. CRAFTED FOR SUSTAINED CONTEMPLATION.</div>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-slate-800">PRIVACY CHARTER</a>
              <a href="#rituals" className="hover:text-slate-800">DAILY RITUALS</a>
              <a href="#begin" className="hover:text-slate-800">ACQUIRE APP</a>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
