import { Archivo_Black, IBM_Plex_Mono } from "next/font/google";
import IterationNav from "@/components/IterationNav";

const archivo = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: "400",
});
const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-mono",
  weight: ["300", "400", "500", "600"],
});

export default function IterationThree() {
  return (
    <div className={`${archivo.variable} ${ibmMono.variable} brutalist-archive`}>
      <header className="ba-header">
        <div className="ba-logo" style={{ fontFamily: "var(--font-archivo)" }}>
          CORTEX
        </div>
        <nav className="ba-nav" style={{ fontFamily: "var(--font-ibm-mono)" }}>
          <a href="#features">FEATURES</a>
          <a href="#how">METHOD</a>
          <a href="#cta">START</a>
        </nav>
      </header>

      <div className="ba-marquee" style={{ fontFamily: "var(--font-archivo)" }}>
        <div className="ba-marquee__inner">
          <span>CAPTURE</span><span className="ba-marquee__dot">■</span>
          <span>CONNECT</span><span className="ba-marquee__dot">■</span>
          <span>RECALL</span><span className="ba-marquee__dot">■</span>
          <span>CAPTURE</span><span className="ba-marquee__dot">■</span>
          <span>CONNECT</span><span className="ba-marquee__dot">■</span>
          <span>RECALL</span><span className="ba-marquee__dot">■</span>
          <span>CAPTURE</span><span className="ba-marquee__dot">■</span>
          <span>CONNECT</span><span className="ba-marquee__dot">■</span>
          <span>RECALL</span><span className="ba-marquee__dot">■</span>
        </div>
      </div>

      <main className="ba-main">
        <section className="ba-hero">
          <div className="ba-hero__index" style={{ fontFamily: "var(--font-ibm-mono)" }}>
            001
          </div>
          <h1 className="ba-hero__title" style={{ fontFamily: "var(--font-archivo)" }}>
            CAPTURE.<br />
            CONNECT.<br />
            <span className="ba-hero__title--red">RECALL.</span>
          </h1>
          <p className="ba-hero__sub" style={{ fontFamily: "var(--font-ibm-mono)" }}>
            Your brain forgets. Cortex doesn&apos;t.<br />
            A note-taking system engineered for total recall.
          </p>
          <div className="ba-hero__cta">
            <a href="#cta" className="ba-btn ba-btn--primary" style={{ fontFamily: "var(--font-archivo)" }}>
              GET STARTED →
            </a>
            <a href="#how" className="ba-btn ba-btn--outline" style={{ fontFamily: "var(--font-archivo)" }}>
              READ THE DOCS
            </a>
          </div>
        </section>

        <section id="features" className="ba-features">
          <div className="ba-features__header">
            <span className="ba-section-num" style={{ fontFamily: "var(--font-ibm-mono)" }}>002</span>
            <h2 className="ba-section-title" style={{ fontFamily: "var(--font-archivo)" }}>
              CAPABILITIES
            </h2>
          </div>
          <div className="ba-features__grid">
            {[
              { num: "01", title: "BIDIRECTIONAL LINKS", desc: "Notes connect in both directions. Follow any thread, from any node. No dead ends." },
              { num: "02", title: "GRAPH VIEW", desc: "See your knowledge as a network topology. Navigate by structure, not folders." },
              { num: "03", title: "INSTANT SEARCH", desc: "Full-text search across your entire archive. Results in under 50ms." },
              { num: "04", title: "DAILY REVIEWS", desc: "Spaced repetition built into your workflow. The archive surfaces what matters." },
              { num: "05", title: "MARKDOWN NATIVE", desc: "Write in plain text. No lock-in. Your data is yours, forever." },
              { num: "06", title: "OFFLINE FIRST", desc: "No cloud dependency. Your archive lives on your machine. Period." },
            ].map((f, i) => (
              <div key={i} className="ba-card">
                <div className="ba-card__num" style={{ fontFamily: "var(--font-ibm-mono)" }}>{f.num}</div>
                <h3 className="ba-card__title" style={{ fontFamily: "var(--font-archivo)" }}>{f.title}</h3>
                <p className="ba-card__desc" style={{ fontFamily: "var(--font-ibm-mono)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how" className="ba-how">
          <div className="ba-how__header">
            <span className="ba-section-num" style={{ fontFamily: "var(--font-ibm-mono)" }}>003</span>
            <h2 className="ba-section-title" style={{ fontFamily: "var(--font-archivo)" }}>
              METHOD
            </h2>
          </div>
          <div className="ba-method">
            <div className="ba-method__step">
              <div className="ba-method__bar" />
              <div className="ba-method__content">
                <h3 className="ba-method__title" style={{ fontFamily: "var(--font-archivo)" }}>1. CAPTURE</h3>
                <p className="ba-method__desc" style={{ fontFamily: "var(--font-ibm-mono)" }}>
                  Input anything: text, code, images, voice. Two seconds or less.
                </p>
              </div>
            </div>
            <div className="ba-method__step">
              <div className="ba-method__bar ba-method__bar--red" />
              <div className="ba-method__content">
                <h3 className="ba-method__title" style={{ fontFamily: "var(--font-archivo)" }}>2. CONNECT</h3>
                <p className="ba-method__desc" style={{ fontFamily: "var(--font-ibm-mono)" }}>
                  Links form a directed graph. Every note finds its neighborhood.
                </p>
              </div>
            </div>
            <div className="ba-method__step">
              <div className="ba-method__bar" />
              <div className="ba-method__content">
                <h3 className="ba-method__title" style={{ fontFamily: "var(--font-archivo)" }}>3. RECALL</h3>
                <p className="ba-method__desc" style={{ fontFamily: "var(--font-ibm-mono)" }}>
                  Query the graph. Traverse connections. Retrieve exactly what you need.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="ba-cta">
          <div className="ba-cta__border" />
          <h2 className="ba-cta__title" style={{ fontFamily: "var(--font-archivo)" }}>
            STOP FORGETTING.<br />START BUILDING.
          </h2>
          <p className="ba-cta__sub" style={{ fontFamily: "var(--font-ibm-mono)" }}>
            12,000+ people already use Cortex as their external memory.
          </p>
          <a href="#" className="ba-btn ba-btn--primary ba-btn--large" style={{ fontFamily: "var(--font-archivo)" }}>
            ACTIVATE CORTEX →
          </a>
        </section>
      </main>

      <footer className="ba-footer" style={{ fontFamily: "var(--font-ibm-mono)" }}>
        <span>© 2026 CORTEX</span>
        <span>FORGET NOTHING.</span>
      </footer>

      <IterationNav />

      <style>{`
        .brutalist-archive {
          --red: #e50000;
          --black: #0a0a0a;
          --white: #f5f5f0;
          --gray: #888;
          --light: #e8e8e3;
          --border: #222;
          min-height: 100vh;
          background: var(--white);
          color: var(--black);
          overflow-x: hidden;
          position: relative;
        }

        .ba-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          border-bottom: 3px solid var(--black);
        }
        .ba-logo {
          font-size: 20px;
          letter-spacing: 0.08em;
        }
        .ba-nav {
          display: flex;
          gap: 32px;
        }
        .ba-nav a {
          color: var(--black);
          text-decoration: none;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          transition: color 0.15s;
        }
        .ba-nav a:hover { color: var(--red); }

        .ba-marquee {
          overflow: hidden;
          border-bottom: 3px solid var(--black);
          padding: 10px 0;
          background: var(--black);
          color: var(--white);
        }
        .ba-marquee__inner {
          display: flex;
          gap: 24px;
          animation: marqueeScroll 20s linear infinite;
          white-space: nowrap;
          font-size: 14px;
          letter-spacing: 0.05em;
          width: max-content;
        }
        .ba-marquee__dot {
          color: var(--red);
          font-size: 10px;
        }

        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .ba-main { position: relative; z-index: 10; }

        .ba-hero {
          padding: 80px 40px 60px;
          border-bottom: 3px solid var(--black);
          position: relative;
        }
        .ba-hero__index {
          position: absolute;
          top: 80px;
          right: 40px;
          font-size: 120px;
          font-weight: 300;
          color: rgba(0, 0, 0, 0.04);
          line-height: 1;
        }
        .ba-hero__title {
          font-size: clamp(48px, 10vw, 120px);
          font-weight: 400;
          line-height: 0.95;
          letter-spacing: -0.02em;
          margin: 0 0 24px;
          max-width: 800px;
        }
        .ba-hero__title--red { color: var(--red); }
        .ba-hero__sub {
          font-size: 14px;
          line-height: 1.8;
          color: var(--gray);
          max-width: 400px;
          margin: 0 0 36px;
          font-weight: 400;
        }
        .ba-hero__cta {
          display: flex;
          gap: 12px;
        }

        .ba-btn {
          display: inline-flex;
          align-items: center;
          padding: 14px 28px;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.05em;
          text-decoration: none;
          transition: all 0.15s;
          cursor: pointer;
          border: none;
        }
        .ba-btn--primary {
          background: var(--red);
          color: var(--white);
        }
        .ba-btn--primary:hover {
          background: var(--black);
        }
        .ba-btn--outline {
          background: transparent;
          color: var(--black);
          border: 3px solid var(--black);
        }
        .ba-btn--outline:hover {
          background: var(--black);
          color: var(--white);
        }
        .ba-btn--large {
          padding: 20px 48px;
          font-size: 16px;
        }

        .ba-features {
          padding: 60px 40px;
          border-bottom: 3px solid var(--black);
        }
        .ba-features__header {
          display: flex;
          align-items: baseline;
          gap: 16px;
          margin-bottom: 48px;
        }
        .ba-section-num {
          font-size: 14px;
          font-weight: 300;
          color: var(--red);
        }
        .ba-section-title {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 400;
          margin: 0;
          letter-spacing: 0.02em;
        }
        .ba-features__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 0;
        }
        .ba-card {
          padding: 32px;
          border: 3px solid var(--black);
          margin: -1.5px;
          transition: all 0.15s;
          position: relative;
        }
        .ba-card:hover {
          background: var(--black);
          color: var(--white);
          z-index: 2;
        }
        .ba-card:hover .ba-card__num { color: var(--red); }
        .ba-card:hover .ba-card__desc { color: var(--gray); }
        .ba-card__num {
          font-size: 12px;
          font-weight: 500;
          color: var(--red);
          margin-bottom: 12px;
          transition: color 0.15s;
        }
        .ba-card__title {
          font-size: 18px;
          font-weight: 400;
          margin: 0 0 10px;
          letter-spacing: 0.05em;
        }
        .ba-card__desc {
          font-size: 13px;
          line-height: 1.7;
          color: var(--gray);
          margin: 0;
          font-weight: 400;
          transition: color 0.15s;
        }

        .ba-how {
          padding: 60px 40px;
          border-bottom: 3px solid var(--black);
        }
        .ba-how__header {
          display: flex;
          align-items: baseline;
          gap: 16px;
          margin-bottom: 48px;
        }
        .ba-method {
          display: flex;
          gap: 0;
          max-width: 900px;
        }
        .ba-method__step {
          flex: 1;
          padding: 32px;
          border-right: 3px solid var(--black);
        }
        .ba-method__step:last-child { border-right: none; }
        .ba-method__bar {
          width: 40px;
          height: 4px;
          background: var(--black);
          margin-bottom: 24px;
        }
        .ba-method__bar--red { background: var(--red); }
        .ba-method__title {
          font-size: 20px;
          margin: 0 0 12px;
          letter-spacing: 0.05em;
        }
        .ba-method__desc {
          font-size: 13px;
          line-height: 1.7;
          color: var(--gray);
          margin: 0;
          font-weight: 400;
        }

        .ba-cta {
          padding: 80px 40px;
          text-align: center;
          position: relative;
          background: var(--black);
          color: var(--white);
        }
        .ba-cta__border {
          position: absolute;
          top: 0;
          left: 40px;
          right: 40px;
          height: 3px;
          background: var(--red);
        }
        .ba-cta__title {
          font-size: clamp(36px, 6vw, 72px);
          font-weight: 400;
          margin: 0 0 16px;
          letter-spacing: 0.02em;
          line-height: 1.05;
        }
        .ba-cta__sub {
          font-size: 14px;
          color: var(--gray);
          margin: 0 0 40px;
          font-weight: 400;
        }

        .ba-footer {
          display: flex;
          justify-content: space-between;
          padding: 20px 40px;
          background: var(--black);
          color: var(--gray);
          font-size: 11px;
          letter-spacing: 0.1em;
          border-top: 3px solid var(--border);
        }

        @media (max-width: 768px) {
          .ba-header { padding: 16px 20px; }
          .ba-nav { gap: 20px; }
          .ba-hero { padding: 60px 20px; }
          .ba-hero__index { display: none; }
          .ba-features, .ba-how { padding: 40px 20px; }
          .ba-method { flex-direction: column; }
          .ba-method__step { border-right: none; border-bottom: 3px solid var(--black); }
          .ba-method__step:last-child { border-bottom: none; }
          .ba-cta { padding: 60px 20px; }
          .ba-cta__border { left: 20px; right: 20px; }
          .ba-footer { flex-direction: column; gap: 8px; text-align: center; padding: 20px; }
        }
      `}</style>
    </div>
  );
}
