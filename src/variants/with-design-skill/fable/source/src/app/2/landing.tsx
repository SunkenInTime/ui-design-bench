"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import "@/generated/scoped-variant-css/with-design-skill/fable/source/src/app/2/landing.css";

const PALETTE = ["#8B7CFF", "#5FD4E6", "#FFB454"];

type Line = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  cx: number;
  cy: number;
  color: string;
};

const CHIPS = [
  {
    id: "c1",
    node: "a",
    text: "rivers shape cities — cities shape the rivers back",
    meta: "fragment · 14 mar",
  },
  {
    id: "c2",
    node: "b",
    text: "the word for this exists in German, probably",
    meta: "fragment · on a train",
  },
  {
    id: "c3",
    node: "a",
    text: "call with Mira — her unfinished point about attention",
    meta: "call note · 2 jan",
  },
  {
    id: "c4",
    node: "b",
    text: "déjà vu is a retrieval error?",
    meta: "fragment · 3 a.m.",
  },
];

const RECALL_QUERY = "that thing about cities and rivers…";

const RECALL_RESULTS = [
  {
    title: "Rivers shape cities — and cities shape the rivers back",
    meta: "fragment · wired to “infrastructure as memory”",
    tone: "violet",
  },
  {
    title: "Venice: a city as a negotiation with water",
    meta: "reading note · linked 3 ways",
    tone: "cyan",
  },
  {
    title: "Mira: attention is a watershed, not a spotlight",
    meta: "call note · resurfaced last night",
    tone: "amber",
  },
];

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}

function NeuralField({ reduced }: { reduced: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const mouse = { x: -9999, y: -9999 };

    type P = { x: number; y: number; vx: number; vy: number; r: number; c: string; a: number };
    let particles: P[] = [];

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(90, Math.floor((w * h) / 16000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: 0.8 + Math.random() * 1.4,
        c: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        a: 0.35 + Math.random() * 0.45,
      }));
    }

    function draw(step: boolean) {
      ctx!.clearRect(0, 0, w, h);
      const linkDist = 110;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (step) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -10) p.x = w + 10;
          if (p.x > w + 10) p.x = -10;
          if (p.y < -10) p.y = h + 10;
          if (p.y > h + 10) p.y = -10;
        }
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.hypot(dx, dy);
          if (d < linkDist) {
            ctx!.strokeStyle = `rgba(139, 124, 255, ${(1 - d / linkDist) * 0.16})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(q.x, q.y);
            ctx!.stroke();
          }
        }
        const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (dm < 170) {
          ctx!.strokeStyle = `rgba(95, 212, 230, ${(1 - dm / 170) * 0.3})`;
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.moveTo(p.x, p.y);
          ctx!.lineTo(mouse.x, mouse.y);
          ctx!.stroke();
        }
        ctx!.globalAlpha = p.a;
        ctx!.fillStyle = p.c;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.globalAlpha = 1;
      }
    }

    function loop() {
      draw(true);
      raf = requestAnimationFrame(loop);
    }

    function onMouse(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    resize();
    window.addEventListener("resize", resize);
    if (reduced) {
      draw(false);
    } else {
      window.addEventListener("mousemove", onMouse);
      window.addEventListener("mouseout", onLeave);
      raf = requestAnimationFrame(loop);
    }
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [reduced]);

  return <canvas ref={canvasRef} className="sy-field" aria-hidden="true" />;
}

function RecallDemo({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [typed, setTyped] = useState("");
  const [shown, setShown] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function play() {
      if (reduced) {
        setTyped(RECALL_QUERY);
        setShown(RECALL_RESULTS.length);
        return;
      }
      setTyped("");
      setShown(0);
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setTyped(RECALL_QUERY.slice(0, i));
        if (i >= RECALL_QUERY.length) {
          clearInterval(interval);
          RECALL_RESULTS.forEach((_, idx) => {
            setTimeout(() => setShown(idx + 1), 350 + idx * 320);
          });
        }
      }, 42);
    }

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          play();
          obs.disconnect();
        }
      },
      { threshold: 0.45 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced]);

  return (
    <div className="sy-recall" ref={ref}>
      <p className="sy-kicker">RECALL, DEMONSTRATED</p>
      <h2 className="sy-h2">Search the way you actually remember.</h2>
      <div className="sy-searchbox" aria-label="Example search">
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <line x1="11" y1="11" x2="15" y2="15" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        <span className="sy-search-text">
          {typed}
          <span className="sy-caret" aria-hidden="true" />
        </span>
      </div>
      <ul className="sy-results">
        {RECALL_RESULTS.map((r, i) => (
          <li
            key={r.title}
            className={`sy-result sy-result-${r.tone} ${i < shown ? "sy-result-on" : ""}`}
          >
            <span className="sy-result-title">{r.title}</span>
            <span className="sy-result-meta">{r.meta}</span>
          </li>
        ))}
      </ul>
      <p className="sy-recall-caption">
        You don’t need the right words. You need the wrong ones you actually
        remember.
      </p>
    </div>
  );
}

export function Landing() {
  const reduced = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    function compute() {
      if (!hero) return;
      if (window.innerWidth < 880) {
        setLines([]);
        return;
      }
      const rect = hero.getBoundingClientRect();
      const next: Line[] = [];
      const chips = Array.from(hero.querySelectorAll<HTMLElement>("[data-chip]"));
      chips.forEach((chip, idx) => {
        const node = hero.querySelector<HTMLElement>(
          `[data-node="${chip.dataset.chip}"]`
        );
        if (!node) return;
        const c = chip.getBoundingClientRect();
        const n = node.getBoundingClientRect();
        const x1 = n.left - rect.left + n.width / 2;
        const y1 = n.top - rect.top + n.height / 2;
        const x2 = c.left - rect.left + c.width / 2;
        const y2 = c.top - rect.top + c.height / 2;
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2;
        const dx = x2 - x1;
        const dy = y2 - y1;
        const len = Math.hypot(dx, dy) || 1;
        const bend = 34 * (idx % 2 === 0 ? 1 : -1);
        next.push({
          x1,
          y1,
          x2,
          y2,
          cx: mx + (-dy / len) * bend,
          cy: my + (dx / len) * bend,
          color: PALETTE[idx % PALETTE.length],
        });
      });
      setLines(next);
    }

    compute();
    document.fonts?.ready.then(compute);
    const ro = new ResizeObserver(compute);
    ro.observe(hero);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <div className="sy-page">
      <NeuralField reduced={reduced} />

      <div className="sy-content">
        <header className="sy-nav">
          <span className="sy-logo">tangent</span>
          <nav className="sy-nav-links" aria-label="Site">
            <a href="#recall">recall</a>
            <a href="#method">method</a>
            <a href="#start" className="sy-btn sy-btn-amber sy-btn-small">
              Start free
            </a>
          </nav>
        </header>

        <section className="sy-hero" ref={heroRef}>
          <svg className="sy-lines" aria-hidden="true">
            {lines.map((l, i) => (
              <g key={i}>
                <path
                  d={`M ${l.x1} ${l.y1} Q ${l.cx} ${l.cy} ${l.x2} ${l.y2}`}
                  fill="none"
                  stroke={l.color}
                  strokeOpacity="0.45"
                  strokeWidth="1.2"
                />
                <circle className="sy-pulse" cx={l.x1} cy={l.y1} r="4" fill={l.color} />
                <circle cx={l.x2} cy={l.y2} r="2.5" fill={l.color} fillOpacity="0.8" />
              </g>
            ))}
          </svg>

          {CHIPS.map((chip, i) => (
            <div
              key={chip.id}
              className={`sy-chip sy-chip-${i + 1}`}
              data-chip={chip.node}
            >
              <span className="sy-chip-text">{chip.text}</span>
              <span className="sy-chip-meta">{chip.meta}</span>
            </div>
          ))}

          <div className="sy-hero-core">
            <p className="sy-kicker">A NOTE-TAKING APP SHAPED LIKE A MEMORY</p>
            <h1 className="sy-headline">
              Half a <span data-node="a" className="sy-node-word">thought</span>{" "}
              is <span data-node="b" className="sy-node-word">enough</span>.
            </h1>
            <p className="sy-sub">
              Tangent catches the fragments you’d otherwise lose and quietly
              wires them to everything they touch. Months later, when you need
              the whole idea, it’s there — assembled.
            </p>
            <div className="sy-cta-row">
              <a href="#start" className="sy-btn sy-btn-amber">
                Start remembering
              </a>
              <a href="#recall" className="sy-btn sy-btn-ghost">
                <span className="sy-play" aria-hidden="true">▶</span> watch a
                recall · 45s
              </a>
            </div>
          </div>
        </section>

        <section className="sy-recall-section" id="recall">
          <RecallDemo reduced={reduced} />
        </section>

        <section className="sy-features" id="method">
          <p className="sy-kicker sy-center">HOW IT WIRES</p>
          <div className="sy-feature-grid">
            <article className="sy-feature">
              <svg className="sy-const" viewBox="0 0 80 44" aria-hidden="true">
                <path d="M8 36 L30 12 L52 28 L72 8" fill="none" stroke="#8B7CFF" strokeOpacity="0.5" strokeWidth="1" />
                <circle cx="8" cy="36" r="2.5" fill="#8B7CFF" />
                <circle cx="30" cy="12" r="3.5" fill="#8B7CFF" />
                <circle cx="52" cy="28" r="2" fill="#8B7CFF" />
                <circle cx="72" cy="8" r="2.5" fill="#8B7CFF" />
              </svg>
              <h3>Capture at the speed of forgetting</h3>
              <p>
                A global hotkey opens a blank line over anything. Two seconds,
                no app-switch, no title. The thought lands before it fades.
              </p>
            </article>
            <article className="sy-feature">
              <svg className="sy-const" viewBox="0 0 80 44" aria-hidden="true">
                <path d="M12 10 L40 22 L68 10 M40 22 L40 38" fill="none" stroke="#5FD4E6" strokeOpacity="0.5" strokeWidth="1" />
                <circle cx="12" cy="10" r="2.5" fill="#5FD4E6" />
                <circle cx="68" cy="10" r="2.5" fill="#5FD4E6" />
                <circle cx="40" cy="22" r="3.5" fill="#5FD4E6" />
                <circle cx="40" cy="38" r="2" fill="#5FD4E6" />
              </svg>
              <h3>Links that fire together</h3>
              <p>
                Connect any two notes and the link runs both ways. What you
                wire together gets recalled together — that’s the whole
                neuroscience, borrowed.
              </p>
            </article>
            <article className="sy-feature">
              <svg className="sy-const" viewBox="0 0 80 44" aria-hidden="true">
                <path d="M10 30 Q 40 2 70 30" fill="none" stroke="#FFB454" strokeOpacity="0.5" strokeWidth="1" />
                <circle cx="10" cy="30" r="2.5" fill="#FFB454" />
                <circle cx="40" cy="16" r="3.5" fill="#FFB454" />
                <circle cx="70" cy="30" r="2.5" fill="#FFB454" />
              </svg>
              <h3>Sleep on it</h3>
              <p>
                Overnight, Tangent resurfaces a few old notes beside your new
                ones. Ideas come back like dreams: at the right moment,
                slightly rearranged.
              </p>
            </article>
          </div>
        </section>

        <section className="sy-final" id="start">
          <h2 className="sy-final-line">
            Your first brain is busy.
            <br />
            Give it a colleague.
          </h2>
          <a href="#" className="sy-btn sy-btn-amber sy-btn-big">
            Start remembering — free
          </a>
          <p className="sy-fine">Free for your first 1,000 thoughts. Private by default.</p>
        </section>

        <footer className="sy-footer">
          <span>tangent © 2026</span>
          <span>remembers, so you don’t have to</span>
        </footer>
      </div>
    </div>
  );
}
