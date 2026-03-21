"use client";

import { useState } from "react";

export default function BrutalistDesign() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        background: "#0a0a0a",
        fontFamily: "'Neue Montreal', 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* Grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Noise texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-8 md:p-12 flex justify-between items-start border-b border-white/10">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 flex items-center justify-center text-black text-xl font-bold"
              style={{ background: "#fff" }}
            >
              C
            </div>
            <div>
              <h1 className="text-white text-xl font-bold tracking-tight">
                CORTEX
              </h1>
              <p className="text-white/40 text-xs tracking-widest">
                SECOND BRAIN v2.0
              </p>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-white/60 tracking-wide">
            <span className="hover:text-white cursor-pointer transition-colors">
              MANIFESTO
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              PRICING
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              LOGIN
            </span>
          </div>
        </header>

        {/* Hero section */}
        <main className="flex-1 flex flex-col justify-center px-8 md:px-12 py-20">
          {/* Giant type */}
          <div className="max-w-[1400px]">
            <h1
              className="text-[12vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter text-white"
              style={{
                fontFamily: "'Neue Montreal', 'Helvetica Neue', sans-serif",
                letterSpacing: "-0.04em",
              }}
            >
              THINK
              <br />
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2px #fff",
                }}
              >
                HARDER
              </span>
            </h1>
          </div>

          {/* Subhead + CTA */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <p
                className="text-lg md:text-xl text-white/70 leading-relaxed"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                No templates. No folders. No distractions. Just raw thought
                capture in its purest form.
              </p>
            </div>
            <div className="md:col-span-7 flex items-end justify-start md:justify-end">
              <button
                className="group relative px-12 py-5 text-black font-bold text-lg tracking-wide transition-all duration-200 hover:translate-x-1 hover:-translate-y-1"
                style={{
                  background: "#fff",
                  clipPath: "polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%)",
                }}
              >
                START NOW →
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: "#ff3b30",
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%)",
                    transform: "translate(4px, 4px)",
                    zIndex: -1,
                  }}
                />
              </button>
            </div>
          </div>

          {/* Feature grid */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10">
            {[
              {
                num: "01",
                title: "CAPTURE",
                desc: "Dump everything. Sort later.",
              },
              {
                num: "02",
                title: "CONNECT",
                desc: "Links form naturally.",
              },
              {
                num: "03",
                title: "RECALL",
                desc: "Find anything instantly.",
              },
              {
                num: "04",
                title: "CREATE",
                desc: "Output your best work.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 bg-[#0a0a0a] transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredFeature(i)}
                onMouseLeave={() => setHoveredFeature(null)}
                style={{
                  borderLeft:
                    hoveredFeature === i ? "4px solid #fff" : "4px solid transparent",
                }}
              >
                <span
                  className="text-5xl font-black text-white/20"
                  style={{ fontFamily: "'Neue Montreal', sans-serif" }}
                >
                  {feature.num}
                </span>
                <h3 className="mt-4 text-xl font-bold text-white tracking-wide">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-white/50">{feature.desc}</p>
              </div>
            ))}
          </div>
        </main>

        {/* Footer stats */}
        <footer className="p-8 md:p-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "∞", label: "NOTES" },
              { value: "0ms", label: "LOAD TIME" },
              { value: "100%", label: "YOURS" },
              { value: "24/7", label: "SYNC" },
            ].map((stat, i) => (
              <div key={i}>
                <div
                  className="text-4xl md:text-5xl font-black text-white"
                  style={{ fontFamily: "'Neue Montreal', sans-serif" }}
                >
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-white/40 tracking-[0.2em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </footer>

        {/* Decorative elements */}
        <div
          className="fixed bottom-0 right-0 w-[400px] h-[400px] pointer-events-none opacity-20"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, transparent 0deg, #fff 60deg, transparent 120deg, transparent 180deg, #fff 240deg, transparent 300deg, transparent 360deg)",
          }}
        />
      </div>
    </div>
  );
}

