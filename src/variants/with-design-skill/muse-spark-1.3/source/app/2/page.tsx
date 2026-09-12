"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Marcellus, Spline_Sans_Mono } from "next/font/google";

const display = Marcellus({ subsets: ["latin"], weight: ["400"] });
const mono = Spline_Sans_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });

type Star = {
  id: string;
  name: string;
  note: string;
  mag: number;
  ox: number;
  oy: number;
  links: string[];
};

const STARS: Star[] = [
  { id: "a", name: "Attention", note: "214 notes orbit this star. Last visited 2h ago.", mag: 5, ox: 0.22, oy: 0.38, links: ["b", "c"] },
  { id: "b", name: "Memory", note: "168 notes. Strong pull toward Sleep and Spaced repetition.", mag: 4, ox: 0.45, oy: 0.24, links: ["a", "d"] },
  { id: "c", name: "Sleep", note: "96 notes. Dim but dense — your most-cited cluster.", mag: 3, ox: 0.62, oy: 0.52, links: ["a", "d", "e"] },
  { id: "d", name: "Writing", note: "301 notes. Brightest object in your sky this month.", mag: 6, ox: 0.4, oy: 0.68, links: ["b", "c"] },
  { id: "e", name: "Walking", note: "57 notes. A comet — returns every few weeks with ideas.", mag: 2.5, ox: 0.78, oy: 0.3, links: ["c"] },
];

const FEATURES = [
  {
    t: "Capture at light speed",
    d: "A global hotkey anywhere on your machine. Thought → note in under a second, sorted into the right constellation later.",
  },
  {
    t: "Charts drawn for you",
    d: "No manual graph-tending. Loam maps every link nightly and surfaces the clusters that are heating up.",
  },
  {
    t: "Navigate by question",
    d: "Point at any star and ask. Answers arrive with sight-lines back to the exact notes they came from.",
  },
];

export default function Observatory() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [focus, setFocus] = useState<Star>(STARS[3]);
  const focusRef = useRef(focus);

  useEffect(() => {
    focusRef.current = focus;
  }, [focus]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const dust = Array.from({ length: 110 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.1 + 0.3,
      p: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const pos = (s: Star, t: number) => ({
      x: s.ox * w + Math.sin(t / 2600 + s.ox * 9) * 10,
      y: s.oy * h + Math.cos(t / 3100 + s.oy * 7) * 10,
    });

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dust) {
        const tw = 0.25 + 0.35 * Math.abs(Math.sin(t / 1400 + d.p));
        ctx.globalAlpha = tw;
        ctx.fillStyle = "#EFE6D2";
        ctx.beginPath();
        ctx.arc(d.x * w, d.y * h, d.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      const byId = Object.fromEntries(STARS.map((s) => [s.id, s]));
      const seen = new Set<string>();
      for (const s of STARS)
        for (const l of s.links) {
          const k = [s.id, l].sort().join("~");
          if (seen.has(k)) continue;
          seen.add(k);
          const a = pos(s, t);
          const b = pos(byId[l], t);
          const hot = focusRef.current.id === s.id || focusRef.current.id === l;
          ctx.strokeStyle = hot ? "#D2A94E" : "rgba(239,230,210,0.28)";
          ctx.lineWidth = hot ? 1.6 : 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      for (const s of STARS) {
        const p = pos(s, t);
        const hot = focusRef.current.id === s.id;
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, s.mag * 7);
        glow.addColorStop(0, hot ? "rgba(210,169,78,0.9)" : "rgba(239,230,210,0.55)");
        glow.addColorStop(1, "rgba(210,169,78,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, s.mag * 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = hot ? "#D2A94E" : "#EFE6D2";
        ctx.beginPath();
        ctx.arc(p.x, p.y, hot ? s.mag + 1 : s.mag, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(239,230,210,0.85)";
        ctx.font = "12px monospace";
        ctx.fillText(s.name.toUpperCase(), p.x + 14, p.y + 4);
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const pick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    let best: Star | null = null;
    let bd = 48;
    for (const s of STARS) {
      const dx = s.ox * rect.width - mx;
      const dy = s.oy * rect.height - my;
      const d = Math.hypot(dx, dy);
      if (d < bd) {
        bd = d;
        best = s;
      }
    }
    if (best) setFocus(best);
  };

  return (
    <div className={`${mono.className} min-h-full bg-[#131736] text-[#EFE6D2]`}>
      <header className="border-b border-white/10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-sm tracking-[0.3em] uppercase">
            ✦ Loam
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-8 text-xs tracking-widest uppercase sm:flex">
            <a href="#sky" className="hover:text-[#D2A94E]">Sky</a>
            <a href="#instruments" className="hover:text-[#D2A94E]">Instruments</a>
            <a href="#admission" className="hover:text-[#D2A94E]">Admission</a>
          </nav>
          <a
            href="#admission"
            className="rounded-full bg-[#D2A94E] px-5 py-2.5 text-xs font-bold tracking-widest text-[#131736] uppercase transition-colors hover:bg-[#EFE6D2]"
          >
            Begin watch
          </a>
        </div>
      </header>

      <section className="mx-auto w-full max-w-6xl px-6 pt-16 pb-8 text-center sm:pt-24">
        <p className="text-xs tracking-[0.35em] text-[#D2A94E] uppercase">
          Night 4,812 · seeing excellent
        </p>
        <h1 className={`${display.className} mx-auto mt-6 max-w-4xl text-5xl leading-[1.05] text-balance sm:text-7xl`}>
          Your notes already form constellations.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#EFE6D2]/70">
          Loam is the second brain that charts what you know. Capture
          fragments by day; by night it draws the lines between them, and your
          thinking becomes navigable sky.
        </p>
      </section>

      {/* signature: the sky */}
      <section id="sky" className="mx-auto w-full max-w-6xl px-6 py-8">
        <div className="overflow-hidden rounded-3xl border border-white/15 bg-[#0D1027]">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-3 text-[11px] tracking-[0.25em] uppercase opacity-70">
            <p>Live chart · your sky tonight</p>
            <p className="hidden sm:block">Select a star to inspect</p>
          </div>
          <canvas
            ref={canvasRef}
            onClick={pick}
            role="img"
            aria-label="Interactive star chart of linked notes. Activate a star to inspect it."
            className="block h-[380px] w-full cursor-crosshair sm:h-[440px]"
          />
          <div className="grid gap-2 border-t border-white/10 px-6 py-4 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-6">
            <p className="text-lg text-[#D2A94E]">✦ {focus.name}</p>
            <p className="text-sm text-[#EFE6D2]/70">{focus.note}</p>
            <div className="flex gap-2" role="group" aria-label="Inspect a star">
              {STARS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setFocus(s)}
                  aria-pressed={focus.id === s.id}
                  className={`rounded-full border px-3 py-1 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D2A94E] ${
                    focus.id === s.id
                      ? "border-[#D2A94E] bg-[#D2A94E] text-[#131736]"
                      : "border-white/25 text-[#EFE6D2]/80 hover:border-[#D2A94E]"
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="instruments" className="mx-auto w-full max-w-6xl px-6 py-14">
        <p className="text-xs tracking-[0.35em] text-[#D2A94E] uppercase">Instruments</p>
        <h2 className={`${display.className} mt-4 max-w-2xl text-4xl text-balance sm:text-5xl`}>
          Three instruments. One clear sky.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {FEATURES.map((f) => (
            <article
              key={f.t}
              className="rounded-2xl border border-white/15 bg-white/[0.04] p-7 transition-colors duration-300 hover:border-[#D2A94E]/60"
            >
              <p className="text-lg text-[#D2A94E]">✦</p>
              <h3 className="mt-3 text-lg font-bold">{f.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#EFE6D2]/70">{f.d}</p>
            </article>
          ))}
        </div>
        <figure className="mt-12 rounded-2xl bg-[#D2A94E] p-8 text-[#131736] sm:p-12">
          <blockquote className={`${display.className} max-w-3xl text-2xl leading-snug text-balance sm:text-3xl`}>
            “My dissertation lived in forty folders. In Loam it lives in one
            sky, and I can finally see which stars are pulling on each other.”
          </blockquote>
          <figcaption className="mt-6 text-xs tracking-[0.25em] uppercase opacity-70">
            Dr. Amara Eze · astrophysicist, extremely online note-taker
          </figcaption>
        </figure>
      </section>

      <section id="admission" className="mx-auto w-full max-w-6xl px-6 pt-4 pb-24 text-center">
        <h2 className={`${display.className} text-4xl text-balance sm:text-5xl`}>
          The dome is open every night.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#EFE6D2]/70">
          Free for 1,000 notes. Comet plan at $10/month for unlimited sky,
          priority charting, and shared constellations.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#admission"
            className="rounded-full bg-[#EFE6D2] px-8 py-3.5 text-sm font-bold tracking-widest text-[#131736] uppercase transition-colors hover:bg-[#D2A94E]"
          >
            Start charting free
          </a>
          <a
            href="#admission"
            className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors hover:border-[#D2A94E] hover:text-[#D2A94E]"
          >
            Talk to a keeper
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 pb-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs tracking-[0.3em] uppercase">✦ Loam · Observatory № 2</p>
          <p className="text-sm text-[#EFE6D2]/60">Clear skies. Free to start, export anytime.</p>
        </div>
      </footer>
    </div>
  );
}
