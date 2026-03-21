"use client";

import { useEffect, useRef, useState } from "react";

export default function EditorialDesign() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full relative overflow-x-hidden"
      style={{
        background: "#faf9f6",
        fontFamily: "'Tiempos', 'Georgia', 'Times New Roman', serif",
      }}
    >
      {/* Subtle paper texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top accent line */}
      <div
        className="fixed top-0 left-0 right-0 h-1 z-50"
        style={{
          background: "linear-gradient(90deg, #c9a227 0%, #8b4513 50%, #c9a227 100%)",
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-8 py-6 flex justify-between items-center mix-blend-difference">
        <div
          className="text-lg tracking-[0.3em] uppercase font-medium"
          style={{ color: "#1a1a1a" }}
        >
          Cortex
        </div>
        <div className="flex gap-12 text-sm tracking-wider">
          <span className="cursor-pointer hover:opacity-60 transition-opacity">
            Journal
          </span>
          <span className="cursor-pointer hover:opacity-60 transition-opacity">
            Archive
          </span>
          <span className="cursor-pointer hover:opacity-60 transition-opacity">
            Subscribe
          </span>
        </div>
      </nav>

      {/* Hero Section - Asymmetric layout */}
      <header className="relative min-h-screen flex items-center px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-[1600px] mx-auto grid grid-cols-12 gap-8 items-end">
          {/* Left content */}
          <div className="col-span-12 lg:col-span-7 relative">
            {/* Issue label */}
            <div
              className="mb-8 text-xs tracking-[0.4em] uppercase"
              style={{ color: "#c9a227" }}
            >
              Vol. 47 — The Mind Issue
            </div>

            {/* Main headline */}
            <h1
              className="text-[10vw] lg:text-[7vw] leading-[0.9] tracking-tight"
              style={{
                fontFamily: "'Tiempos Headline', 'Times New Roman', serif",
                color: "#1a1a1a",
                fontWeight: 300,
              }}
            >
              The Art of
              <br />
              <span style={{ fontStyle: "italic", color: "#8b4513" }}>
                Remembering
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="mt-8 text-xl lg:text-2xl max-w-md leading-relaxed"
              style={{
                fontFamily: "'Söhne', sans-serif",
                color: "#4a4a4a",
                fontWeight: 300,
              }}
            >
              A thoughtful approach to capturing ideas in the age of infinite
              information.
            </p>

            {/* CTA */}
            <button
              className="mt-12 group flex items-center gap-4 text-sm tracking-[0.2em] uppercase transition-all duration-300"
              style={{ color: "#1a1a1a" }}
            >
              <span
                className="w-12 h-[1px] transition-all duration-300 group-hover:w-20"
                style={{ background: "#c9a227" }}
              />
              Begin Reading
            </button>
          </div>

          {/* Right image area */}
          <div className="col-span-12 lg:col-span-5 relative lg:pl-8">
            <div
              className="aspect-[3/4] relative overflow-hidden"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
              }}
            >
              {/* Abstract geometric composition */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-3/4 h-3/4 rounded-full opacity-20"
                  style={{
                    background:
                      "radial-gradient(circle, #c9a227 0%, transparent 70%)",
                    filter: "blur(40px)",
                  }}
                />
                <svg
                  viewBox="0 0 200 300"
                  className="absolute w-full h-full"
                  style={{ opacity: 0.8 }}
                >
                  {/* Abstract face/head silhouette */}
                  <ellipse
                    cx="100"
                    cy="120"
                    rx="60"
                    ry="70"
                    fill="none"
                    stroke="#1a1a1a"
                    strokeWidth="1"
                  />
                  <circle cx="80" cy="110" r="8" fill="#1a1a1a" />
                  <circle cx="120" cy="110" r="8" fill="#1a1a1a" />
                  <path
                    d="M 70 140 Q 100 160, 130 140"
                    fill="none"
                    stroke="#1a1a1a"
                    strokeWidth="2"
                  />
                  {/* Thought bubbles */}
                  <circle cx="160" cy="60" r="15" fill="none" stroke="#c9a227" />
                  <circle cx="175" cy="40" r="8" fill="#c9a227" opacity="0.5" />
                  <circle cx="185" cy="25" r="4" fill="#c9a227" />
                </svg>
              </div>
            </div>

            {/* Caption */}
            <div
              className="mt-4 text-xs tracking-wider"
              style={{ color: "#8b7355" }}
            >
              Fig. 1 — The Externalization of Thought
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "#8b7355" }}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-current" />
        </div>
      </header>

      {/* Features Grid - Magazine style */}
      <section className="py-32 px-8 md:px-16 lg:px-24" style={{ background: "#f5f3ef" }}>
        <div className="max-w-[1600px] mx-auto">
          {/* Section header */}
          <div className="flex items-end justify-between mb-16 border-b border-gray-300 pb-4">
            <h2
              className="text-sm tracking-[0.4em] uppercase"
              style={{ color: "#8b7355" }}
            >
              Features
            </h2>
            <span
              className="text-xs tracking-wider"
              style={{ color: "#8b7355" }}
            >
              03 Stories
            </span>
          </div>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-12 gap-8">
            {/* Large feature */}
            <div className="col-span-12 lg:col-span-7 group cursor-pointer">
              <div
                className="aspect-[16/10] mb-6 relative overflow-hidden"
                style={{ background: "#e8e4de" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 opacity-30">
                    <path
                      d="M20 50 L50 20 L80 50 L50 80 Z"
                      fill="none"
                      stroke="#1a1a1a"
                      strokeWidth="1"
                    />
                    <circle cx="50" cy="50" r="15" fill="#c9a227" opacity="0.5" />
                  </svg>
                </div>
              </div>
              <span
                className="text-xs tracking-[0.2em] uppercase"
                style={{ color: "#c9a227" }}
              >
                Essay
              </span>
              <h3
                className="mt-2 text-3xl lg:text-4xl leading-tight group-hover:text-[#8b4513] transition-colors"
                style={{ fontFamily: "'Tiempos Headline', serif", color: "#1a1a1a" }}
              >
                Building a Cathedral of Ideas
              </h3>
              <p
                className="mt-3 text-sm leading-relaxed max-w-md"
                style={{ color: "#6a6a6a" }}
              >
                How the practice of externalized thinking shapes our intellectual
                landscape over decades.
              </p>
            </div>

            {/* Side features */}
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-8">
              {[
                {
                  tag: "Profile",
                  title: "The Note-Takers",
                  desc: "Conversations with those who have mastered the art of remembering.",
                },
                {
                  tag: "Guide",
                  title: "Fleeting to Permanent",
                  desc: "A system for transforming passing thoughts into lasting knowledge.",
                },
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer border-t border-gray-300 pt-8">
                  <span
                    className="text-xs tracking-[0.2em] uppercase"
                    style={{ color: "#c9a227" }}
                  >
                    {item.tag}
                  </span>
                  <h4
                    className="mt-2 text-xl lg:text-2xl leading-tight group-hover:text-[#8b4513] transition-colors"
                    style={{ fontFamily: "'Tiempos Headline', serif", color: "#1a1a1a" }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "#6a6a6a" }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="py-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="w-16 h-16 mx-auto mb-8 rounded-full flex items-center justify-center"
            style={{ background: "#c9a227", opacity: 0.2 }}
          >
            <span className="text-3xl" style={{ color: "#c9a227" }}>
              "
            </span>
          </div>
          <blockquote
            className="text-3xl lg:text-5xl leading-tight"
            style={{
              fontFamily: "'Tiempos Headline', serif",
              color: "#1a1a1a",
              fontWeight: 300,
            }}
          >
            "What we write, we remember.
            <br />
            <span style={{ fontStyle: "italic", color: "#8b4513" }}>
              What we forget, we lose."
            </span>
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-12 h-[1px]" style={{ background: "#c9a227" }} />
            <span
              className="text-sm tracking-[0.2em] uppercase"
              style={{ color: "#8b7355" }}
            >
              Ancient Wisdom
            </span>
            <div className="w-12 h-[1px]" style={{ background: "#c9a227" }} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 md:px-16 lg:px-24 border-t border-gray-200">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div
              className="text-2xl tracking-[0.2em] uppercase"
              style={{ color: "#1a1a1a" }}
            >
              Cortex
            </div>
            <p className="mt-2 text-sm" style={{ color: "#8b7355" }}>
              Your second brain, beautifully designed.
            </p>
          </div>
          <div className="flex gap-8 text-sm" style={{ color: "#8b7355" }}>
            <span className="hover:text-[#1a1a1a] cursor-pointer transition-colors">
              Privacy
            </span>
            <span className="hover:text-[#1a1a1a] cursor-pointer transition-colors">
              Terms
            </span>
            <span className="hover:text-[#1a1a1a] cursor-pointer transition-colors">
              Contact
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
