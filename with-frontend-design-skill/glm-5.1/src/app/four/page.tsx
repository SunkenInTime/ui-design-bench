import { Cormorant_Garamond, Outfit } from "next/font/google";
import IterationNav from "@/components/IterationNav";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function IterationFour() {
  return (
    <div className={`${cormorant.variable} ${outfit.variable} cosmos`}>
      <div className="cos-stars" />

      <header className="cos-header">
        <div className="cos-logo" style={{ fontFamily: "var(--font-outfit)" }}>
          <span className="cos-logo__star">✦</span> Cortex
        </div>
        <nav className="cos-nav" style={{ fontFamily: "var(--font-outfit)" }}>
          <a href="#features">Constellations</a>
          <a href="#how">Orbit</a>
          <a href="#cta">Launch</a>
        </nav>
      </header>

      <main className="cos-main">
        <section className="cos-hero">
          <div className="cos-hero__nebula" />
          <div className="cos-hero__nebula cos-hero__nebula--2" />
          <div className="cos-hero__constellation">
            <svg viewBox="0 0 400 200" fill="none" className="cos-constellation-svg">
              <circle cx="40" cy="60" r="2" fill="#ffd700" opacity="0.8" />
              <circle cx="120" cy="30" r="2.5" fill="#ffd700" opacity="0.6" />
              <circle cx="200" cy="80" r="2" fill="#ffd700" opacity="0.9" />
              <circle cx="280" cy="40" r="1.5" fill="#ffd700" opacity="0.5" />
              <circle cx="360" cy="90" r="2" fill="#ffd700" opacity="0.7" />
              <line x1="40" y1="60" x2="120" y2="30" stroke="#ffd700" strokeWidth="0.4" opacity="0.3" />
              <line x1="120" y1="30" x2="200" y2="80" stroke="#ffd700" strokeWidth="0.4" opacity="0.3" />
              <line x1="200" y1="80" x2="280" y2="40" stroke="#ffd700" strokeWidth="0.4" opacity="0.3" />
              <line x1="280" y1="40" x2="360" y2="90" stroke="#ffd700" strokeWidth="0.4" opacity="0.3" />
            </svg>
          </div>

          <p className="cos-hero__eyebrow" style={{ fontFamily: "var(--font-outfit)" }}>
            ✦ Navigate the cosmos of your mind ✦
          </p>
          <h1 className="cos-hero__title" style={{ fontFamily: "var(--font-cormorant)" }}>
            Navigate the universe<br />
            of your <span className="cos-hero__title--gold">thoughts</span>
          </h1>
          <p className="cos-hero__sub" style={{ fontFamily: "var(--font-outfit)" }}>
            Every idea is a star. Every connection, a constellation. Cortex maps the cosmos of your
            mind — turning scattered thoughts into a navigable galaxy of knowledge.
          </p>
          <div className="cos-hero__cta">
            <a href="#cta" className="cos-btn cos-btn--primary" style={{ fontFamily: "var(--font-outfit)" }}>
              Begin Your Voyage
            </a>
            <a href="#how" className="cos-btn cos-btn--ghost" style={{ fontFamily: "var(--font-outfit)" }}>
              Chart the Stars
            </a>
          </div>
        </section>

        <section id="features" className="cos-features">
          <h2 className="cos-section-title" style={{ fontFamily: "var(--font-cormorant)" }}>
            Stellar Instruments
          </h2>
          <div className="cos-features__grid">
            {[
              { icon: "✦", title: "Constellation Links", desc: "Every note connects to form patterns in your knowledge sky. Follow the light between ideas." },
              { icon: "☍", title: "Stellar Cartography", desc: "Visualize your entire knowledge base as an interactive star map. Zoom into any cluster." },
              { icon: "✧", title: "Light-Speed Search", desc: "Find any thought in the vastness of your archive. Millisecond recall across light-years of notes." },
              { icon: "⊛", title: "Orbital Reviews", desc: "Ideas return to you in natural cycles. The cosmos reminds you of what orbits near." },
              { icon: "✶", title: "Stardust Capture", desc: "Capture fragments, quotes, sketches — the raw material from which new stars ignite." },
              { icon: "◎", title: "Deep Space Privacy", desc: "Your cosmos stays local. No transmissions to unknown galaxies. Your mind, your territory." },
            ].map((f, i) => (
              <div key={i} className="cos-card">
                <div className="cos-card__icon">{f.icon}</div>
                <h3 className="cos-card__title" style={{ fontFamily: "var(--font-cormorant)" }}>{f.title}</h3>
                <p className="cos-card__desc" style={{ fontFamily: "var(--font-outfit)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="cos-divider">
          <span>· ✦ ·</span>
        </div>

        <section id="how" className="cos-how">
          <h2 className="cos-section-title" style={{ fontFamily: "var(--font-cormorant)" }}>
            The Orbital Path
          </h2>
          <div className="cos-orbits">
            {[
              { num: "i", title: "Ignite", desc: "Capture a spark — any fragment of thought. Every star begins as dust.", orbit: "cos-orbit--1" },
              { num: "ii", title: "Orbit", desc: "Ideas attract each other. Links form naturally, building constellations.", orbit: "cos-orbit--2" },
              { num: "iii", title: "Navigate", desc: "Chart your course through the knowledge sky. Find what you need, guided by starlight.", orbit: "cos-orbit--3" },
            ].map((s, i) => (
              <div key={i} className={`cos-orbit ${s.orbit}`}>
                <div className="cos-orbit__ring" />
                <div className="cos-orbit__content">
                  <div className="cos-orbit__num" style={{ fontFamily: "var(--font-outfit)" }}>{s.num}</div>
                  <h3 className="cos-orbit__title" style={{ fontFamily: "var(--font-cormorant)" }}>{s.title}</h3>
                  <p className="cos-orbit__desc" style={{ fontFamily: "var(--font-outfit)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="cta" className="cos-cta">
          <div className="cos-cta__nebula" />
          <h2 className="cos-cta__title" style={{ fontFamily: "var(--font-cormorant)" }}>
            The Cosmos Awaits
          </h2>
          <p className="cos-cta__sub" style={{ fontFamily: "var(--font-outfit)" }}>
            Join 12,000+ explorers navigating their own knowledge galaxies.
          </p>
          <a href="#" className="cos-btn cos-btn--primary cos-btn--large" style={{ fontFamily: "var(--font-outfit)" }}>
            Launch Cortex
          </a>
        </section>
      </main>

      <footer className="cos-footer" style={{ fontFamily: "var(--font-outfit)" }}>
        <span>✦ Cortex 2026</span>
        <span>Explore inward. Expand outward.</span>
      </footer>

      <IterationNav />

      <style>{`
        .cosmos {
          --deep: #0a0a2e;
          --navy: #12123a;
          --purple: #1a0a3e;
          --gold: #ffd700;
          --soft-gold: #c8a84e;
          --text: #d0d0e8;
          --muted: #7a7a9e;
          --card-bg: rgba(255, 255, 255, 0.03);
          min-height: 100vh;
          background: linear-gradient(180deg, var(--deep) 0%, var(--navy) 40%, var(--purple) 100%);
          color: var(--text);
          overflow-x: hidden;
          position: relative;
        }

        .cos-stars {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background-image:
            radial-gradient(1px 1px at 10% 20%, rgba(255, 215, 0, 0.4), transparent),
            radial-gradient(1px 1px at 30% 50%, rgba(255, 255, 255, 0.3), transparent),
            radial-gradient(1.5px 1.5px at 50% 10%, rgba(255, 215, 0, 0.5), transparent),
            radial-gradient(1px 1px at 70% 80%, rgba(255, 255, 255, 0.2), transparent),
            radial-gradient(1px 1px at 90% 30%, rgba(255, 215, 0, 0.3), transparent),
            radial-gradient(1px 1px at 15% 90%, rgba(255, 255, 255, 0.25), transparent),
            radial-gradient(1.5px 1.5px at 85% 60%, rgba(255, 215, 0, 0.35), transparent),
            radial-gradient(1px 1px at 45% 70%, rgba(255, 255, 255, 0.2), transparent),
            radial-gradient(1px 1px at 60% 40%, rgba(255, 215, 0, 0.3), transparent),
            radial-gradient(1px 1px at 25% 35%, rgba(255, 255, 255, 0.15), transparent),
            radial-gradient(1px 1px at 80% 15%, rgba(255, 215, 0, 0.25), transparent),
            radial-gradient(1.5px 1.5px at 5% 65%, rgba(255, 255, 255, 0.3), transparent),
            radial-gradient(1px 1px at 55% 95%, rgba(255, 215, 0, 0.2), transparent),
            radial-gradient(1px 1px at 35% 85%, rgba(255, 255, 255, 0.15), transparent),
            radial-gradient(1px 1px at 95% 50%, rgba(255, 215, 0, 0.35), transparent);
          animation: starTwinkle 8s ease-in-out infinite alternate;
        }

        @keyframes starTwinkle {
          0% { opacity: 1; }
          50% { opacity: 0.6; }
          100% { opacity: 1; }
        }

        .cos-header {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 48px;
        }
        .cos-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 18px;
          font-weight: 500;
          color: var(--gold);
          letter-spacing: 0.1em;
        }
        .cos-logo__star { font-size: 16px; }
        .cos-nav {
          display: flex;
          gap: 36px;
        }
        .cos-nav a {
          color: var(--muted);
          text-decoration: none;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.05em;
          transition: color 0.2s;
        }
        .cos-nav a:hover { color: var(--gold); }

        .cos-main { position: relative; z-index: 10; }

        .cos-hero {
          text-align: center;
          padding: 100px 24px 80px;
          position: relative;
          max-width: 720px;
          margin: 0 auto;
        }
        .cos-hero__nebula {
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(100, 60, 200, 0.15) 0%, transparent 70%);
          pointer-events: none;
          animation: nebulaPulse 12s ease-in-out infinite;
        }
        .cos-hero__nebula--2 {
          top: -10%;
          animation-delay: 6s;
          background: radial-gradient(ellipse, rgba(255, 215, 0, 0.04) 0%, transparent 70%);
        }

        @keyframes nebulaPulse {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 1; }
          50% { transform: translateX(-50%) scale(1.1); opacity: 0.7; }
        }

        .cos-hero__constellation {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 400px;
          height: 200px;
          pointer-events: none;
          opacity: 0.4;
        }
        .cos-constellation-svg {
          width: 100%;
          height: 100%;
        }

        .cos-hero__eyebrow {
          font-size: 11px;
          letter-spacing: 0.3em;
          color: var(--gold);
          margin-bottom: 32px;
          animation: fadeInUp 1s ease-out;
          font-weight: 300;
        }
        .cos-hero__title {
          font-size: clamp(44px, 7vw, 84px);
          font-weight: 300;
          line-height: 1.15;
          color: #fff;
          margin: 0 0 28px;
          letter-spacing: -0.01em;
          animation: fadeInUp 1s ease-out 0.2s both;
        }
        .cos-hero__title--gold {
          color: var(--gold);
          font-style: italic;
        }
        .cos-hero__sub {
          font-size: 15px;
          line-height: 1.9;
          color: var(--muted);
          max-width: 500px;
          margin: 0 auto 40px;
          font-weight: 300;
          animation: fadeInUp 1s ease-out 0.4s both;
        }
        .cos-hero__cta {
          display: flex;
          gap: 16px;
          justify-content: center;
          animation: fadeInUp 1s ease-out 0.6s both;
        }

        .cos-btn {
          display: inline-flex;
          align-items: center;
          padding: 14px 32px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s;
          cursor: pointer;
          border: none;
          letter-spacing: 0.03em;
        }
        .cos-btn--primary {
          background: linear-gradient(135deg, var(--gold), var(--soft-gold));
          color: var(--deep);
          box-shadow: 0 0 30px rgba(255, 215, 0, 0.15);
        }
        .cos-btn--primary:hover {
          box-shadow: 0 0 50px rgba(255, 215, 0, 0.3);
          transform: translateY(-2px);
        }
        .cos-btn--ghost {
          background: transparent;
          color: var(--text);
          border: 1px solid rgba(255, 215, 0, 0.25);
        }
        .cos-btn--ghost:hover {
          border-color: var(--gold);
          color: var(--gold);
        }
        .cos-btn--large {
          padding: 18px 48px;
          font-size: 16px;
        }

        .cos-features {
          padding: 80px 24px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .cos-section-title {
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 300;
          color: #fff;
          text-align: center;
          margin: 0 0 60px;
          letter-spacing: 0.02em;
        }
        .cos-features__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        .cos-card {
          padding: 32px;
          border: 1px solid rgba(255, 215, 0, 0.08);
          border-radius: 16px;
          background: var(--card-bg);
          backdrop-filter: blur(8px);
          transition: all 0.4s;
        }
        .cos-card:hover {
          border-color: rgba(255, 215, 0, 0.25);
          background: rgba(255, 215, 0, 0.03);
          transform: translateY(-4px);
          box-shadow: 0 8px 40px rgba(255, 215, 0, 0.06);
        }
        .cos-card__icon {
          font-size: 22px;
          margin-bottom: 16px;
          color: var(--gold);
        }
        .cos-card__title {
          font-size: 22px;
          font-weight: 400;
          color: #fff;
          margin: 0 0 10px;
          font-style: italic;
        }
        .cos-card__desc {
          font-size: 13px;
          line-height: 1.7;
          color: var(--muted);
          margin: 0;
          font-weight: 300;
        }

        .cos-divider {
          text-align: center;
          padding: 48px 0;
          color: var(--gold);
          opacity: 0.3;
          font-size: 18px;
          letter-spacing: 16px;
        }

        .cos-how {
          padding: 60px 24px 80px;
          max-width: 900px;
          margin: 0 auto;
        }
        .cos-orbits {
          display: flex;
          gap: 40px;
          justify-content: center;
        }
        .cos-orbit {
          text-align: center;
          flex: 1;
          position: relative;
          padding-top: 80px;
        }
        .cos-orbit__ring {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 60px;
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 50%;
          animation: orbitSpin 20s linear infinite;
        }
        .cos-orbit--1 .cos-orbit__ring { border-color: rgba(255, 215, 0, 0.25); }
        .cos-orbit--2 .cos-orbit__ring { border-color: rgba(255, 215, 0, 0.2); animation-duration: 25s; }
        .cos-orbit--3 .cos-orbit__ring { border-color: rgba(255, 215, 0, 0.15); animation-duration: 30s; animation-direction: reverse; }

        .cos-orbit__ring::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 4px;
          height: 4px;
          background: var(--gold);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--gold);
        }

        @keyframes orbitSpin {
          from { transform: translateX(-50%) rotate(0deg); }
          to { transform: translateX(-50%) rotate(360deg); }
        }

        .cos-orbit__num {
          font-size: 12px;
          font-weight: 400;
          color: var(--gold);
          margin-bottom: 8px;
          letter-spacing: 0.15em;
        }
        .cos-orbit__title {
          font-size: 24px;
          font-weight: 400;
          color: #fff;
          margin: 0 0 10px;
          font-style: italic;
        }
        .cos-orbit__desc {
          font-size: 13px;
          line-height: 1.7;
          color: var(--muted);
          margin: 0;
          font-weight: 300;
        }

        .cos-cta {
          text-align: center;
          padding: 120px 24px;
          position: relative;
        }
        .cos-cta__nebula {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(255, 215, 0, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .cos-cta__title {
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 300;
          color: #fff;
          margin: 0 0 16px;
          font-style: italic;
        }
        .cos-cta__sub {
          font-size: 14px;
          color: var(--muted);
          margin: 0 0 40px;
          font-weight: 300;
        }

        .cos-footer {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          padding: 24px 48px;
          border-top: 1px solid rgba(255, 215, 0, 0.08);
          color: var(--muted);
          font-size: 12px;
          font-weight: 300;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .cos-header { padding: 16px 20px; }
          .cos-nav { gap: 20px; }
          .cos-hero { padding: 80px 20px; }
          .cos-cta { padding: 80px 20px; }
          .cos-orbits { flex-direction: column; align-items: center; gap: 48px; }
          .cos-footer { flex-direction: column; gap: 8px; text-align: center; padding: 20px; }
        }
      `}</style>
    </div>
  );
}
