import { JetBrains_Mono } from "next/font/google";
import IterationNav from "@/components/IterationNav";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["300", "400", "500", "600", "700"],
});

export default function IterationFive() {
  return (
    <div className={`${jetbrains.variable} retro-terminal`}>
      <div className="rt-scanlines" />
      <div className="rt-flicker" />

      <header className="rt-header">
        <div className="rt-header__left">
          <span className="rt-prompt">$</span>
          <span className="rt-cmd">cortex --status</span>
        </div>
        <div className="rt-header__right">
          <span className="rt-status">ONLINE</span>
          <span className="rt-blink">█</span>
        </div>
      </header>

      <main className="rt-main">
        <section className="rt-hero">
          <div className="rt-terminal">
            <div className="rt-terminal__bar">
              <span className="rt-dot rt-dot--red" />
              <span className="rt-dot rt-dot--yellow" />
              <span className="rt-dot rt-dot--green" />
              <span className="rt-terminal__title">cortex_v2.0.exe</span>
            </div>
            <div className="rt-terminal__body">
              <div className="rt-line">
                <span className="rt-prompt-line">$</span>
                <span className="rt-typing">initialize_second_brain.exe</span>
                <span className="rt-cursor">▊</span>
              </div>
              <div className="rt-output">
                <span className="rt-success">[OK]</span> Loading neural interface...
              </div>
              <div className="rt-output">
                <span className="rt-success">[OK]</span> Connecting synapses...
              </div>
              <div className="rt-output">
                <span className="rt-success">[OK]</span> Indexing knowledge graph...
              </div>
              <div className="rt-output">
                <span className="rt-success">[OK]</span> Second brain: <span className="rt-highlight">ACTIVE</span>
              </div>
            </div>
          </div>

          <h1 className="rt-hero__title">
            YOUR BRAIN.<br />
            <span className="rt-hero__title--glow">UPGRADED.</span>
          </h1>
          <p className="rt-hero__sub">
            Cortex is a command center for your mind. Capture, connect, and recall every
            thought through an interface that thinks the way you do.
          </p>
          <div className="rt-hero__cta">
            <a href="#cta" className="rt-btn rt-btn--primary">
              {'>'} BOOT CORTEX
            </a>
            <a href="#how" className="rt-btn rt-btn--outline">
              {'>'} READ MANUAL
            </a>
          </div>
        </section>

        <section id="features" className="rt-features">
          <div className="rt-section-header">
            <span className="rt-comment">{'// core modules'}</span>
            <h2 className="rt-section-title">FEATURES.exe</h2>
          </div>
          <div className="rt-features__grid">
            {[
              { cmd: "link", title: "BIDIRECTIONAL LINKS", desc: "Notes connect in both directions. Traverse the graph forward and backward." },
              { cmd: "graph", title: "KNOWLEDGE GRAPH", desc: "Visualize your notes as a network topology. Navigate by structure." },
              { cmd: "search", title: "INSTANT SEARCH", desc: "Full-text search. Results in <50ms across your entire archive." },
              { cmd: "review", title: "SPACED REVIEWS", desc: "Automatic spaced repetition. The right notes surface at the right time." },
              { cmd: "capture", title: "FRICTIONLESS INPUT", desc: "Markdown, images, code blocks. Capture in under 2 seconds." },
              { cmd: "local", title: "OFFLINE-FIRST", desc: "Runs locally. No cloud. No tracking. Your data, your machine." },
            ].map((f, i) => (
              <div key={i} className="rt-card">
                <div className="rt-card__header">
                  <span className="rt-card__cmd">{'>'} {f.cmd}</span>
                </div>
                <h3 className="rt-card__title">{f.title}</h3>
                <p className="rt-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how" className="rt-how">
          <div className="rt-section-header">
            <span className="rt-comment">{'// execution pipeline'}</span>
            <h2 className="rt-section-title">WORKFLOW.sh</h2>
          </div>
          <div className="rt-pipeline">
            {[
              { step: "STEP_1", cmd: "capture", desc: "Pipe any input into Cortex. Text, code, media — all streams accepted." },
              { step: "STEP_2", cmd: "connect", desc: "Auto-linking builds the knowledge graph. No manual wiring required." },
              { step: "STEP_3", cmd: "recall", desc: "Query the graph. Retrieve anything. Your memory, now searchable." },
            ].map((s, i) => (
              <div key={i} className="rt-pipeline__step">
                <div className="rt-pipeline__arrow">{'>>>'}</div>
                <div className="rt-pipeline__content">
                  <div className="rt-pipeline__step-label">{s.step}</div>
                  <div className="rt-pipeline__cmd">{s.cmd}()</div>
                  <p className="rt-pipeline__desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="cta" className="rt-cta">
          <div className="rt-cta__terminal">
            <span className="rt-prompt-line">$</span> cortex --activate --user=you
          </div>
          <h2 className="rt-cta__title">
            READY TO<br />
            <span className="rt-cta__title--glow">INITIALIZE?</span>
          </h2>
          <p className="rt-cta__sub">
            12,000+ brains already connected.{' '}
            <span className="rt-blink-fast">█</span>
          </p>
          <a href="#" className="rt-btn rt-btn--primary rt-btn--large">
            {'>'} EXECUTE
          </a>
        </section>
      </main>

      <footer className="rt-footer">
        <span>{'$ echo "© 2026 Cortex"'}</span>
        <span>{'FORGET NOTHING // RECALL EVERYTHING'}</span>
      </footer>

      <IterationNav />

      <style>{`
        .retro-terminal {
          --green: #00ff41;
          --dim-green: #00aa2a;
          --dark-green: #003300;
          --bg: #0a0a0a;
          --text: #00ff41;
          --muted: #007a1e;
          --amber: #ffb000;
          --card-bg: rgba(0, 255, 65, 0.03);
          min-height: 100vh;
          background: var(--bg);
          color: var(--text);
          overflow-x: hidden;
          position: relative;
          font-family: var(--font-jetbrains);
        }

        .rt-scanlines {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.15) 0px,
            rgba(0, 0, 0, 0.15) 1px,
            transparent 1px,
            transparent 3px
          );
        }

        .rt-flicker {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 99;
          animation: crtFlicker 0.15s infinite;
          background: transparent;
        }

        @keyframes crtFlicker {
          0% { opacity: 0.97; }
          50% { opacity: 1; }
          100% { opacity: 0.98; }
        }

        .rt-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 32px;
          border-bottom: 1px solid var(--dark-green);
          font-size: 13px;
        }
        .rt-header__left {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .rt-prompt { color: var(--amber); font-weight: 700; }
        .rt-cmd { color: var(--green); }
        .rt-header__right {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .rt-status {
          color: var(--green);
          font-size: 11px;
          letter-spacing: 0.2em;
        }
        .rt-blink {
          animation: blink 1s step-end infinite;
          color: var(--green);
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .rt-main { position: relative; z-index: 10; }

        .rt-hero {
          padding: 60px 32px 40px;
          max-width: 800px;
          margin: 0 auto;
        }

        .rt-terminal {
          border: 1px solid var(--dark-green);
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 48px;
          box-shadow: 0 0 40px rgba(0, 255, 65, 0.05);
        }
        .rt-terminal__bar {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: rgba(0, 255, 65, 0.05);
          border-bottom: 1px solid var(--dark-green);
        }
        .rt-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .rt-dot--red { background: #ff3b30; }
        .rt-dot--yellow { background: #ffcc00; }
        .rt-dot--green { background: #28cd41; }
        .rt-terminal__title {
          margin-left: auto;
          color: var(--muted);
          font-size: 11px;
        }
        .rt-terminal__body {
          padding: 16px;
          font-size: 13px;
          line-height: 2;
        }
        .rt-line {
          display: flex;
          gap: 8px;
        }
        .rt-prompt-line { color: var(--amber); font-weight: 600; }
        .rt-typing { color: var(--green); }
        .rt-cursor {
          animation: blink 1s step-end infinite;
          color: var(--green);
        }
        .rt-output {
          color: var(--dim-green);
          font-size: 12px;
          padding-left: 24px;
        }
        .rt-success { color: var(--green); font-weight: 600; }
        .rt-highlight {
          color: var(--amber);
          font-weight: 700;
          animation: blink 2s step-end infinite;
        }

        .rt-hero__title {
          font-size: clamp(36px, 8vw, 80px);
          font-weight: 700;
          line-height: 1.05;
          margin: 0 0 20px;
          color: var(--green);
        }
        .rt-hero__title--glow {
          text-shadow:
            0 0 10px rgba(0, 255, 65, 0.5),
            0 0 20px rgba(0, 255, 65, 0.3),
            0 0 40px rgba(0, 255, 65, 0.1);
        }
        .rt-hero__sub {
          font-size: 14px;
          line-height: 1.8;
          color: var(--dim-green);
          max-width: 460px;
          margin: 0 0 32px;
          font-weight: 400;
        }
        .rt-hero__cta {
          display: flex;
          gap: 12px;
        }

        .rt-btn {
          display: inline-flex;
          align-items: center;
          padding: 12px 24px;
          font-size: 13px;
          font-weight: 600;
          font-family: var(--font-jetbrains);
          text-decoration: none;
          transition: all 0.2s;
          cursor: pointer;
          border: none;
          letter-spacing: 0.05em;
        }
        .rt-btn--primary {
          background: var(--green);
          color: var(--bg);
          box-shadow: 0 0 20px rgba(0, 255, 65, 0.2);
        }
        .rt-btn--primary:hover {
          box-shadow: 0 0 40px rgba(0, 255, 65, 0.4);
          transform: translateY(-1px);
        }
        .rt-btn--outline {
          background: transparent;
          color: var(--green);
          border: 1px solid var(--dark-green);
        }
        .rt-btn--outline:hover {
          border-color: var(--green);
          box-shadow: 0 0 20px rgba(0, 255, 65, 0.1);
        }
        .rt-btn--large {
          padding: 16px 40px;
          font-size: 15px;
        }

        .rt-features {
          padding: 60px 32px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .rt-section-header {
          margin-bottom: 40px;
        }
        .rt-comment {
          display: block;
          color: var(--muted);
          font-size: 12px;
          margin-bottom: 8px;
        }
        .rt-section-title {
          font-size: clamp(24px, 4vw, 36px);
          font-weight: 700;
          color: var(--green);
          margin: 0;
        }
        .rt-features__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }
        .rt-card {
          padding: 24px;
          border: 1px solid var(--dark-green);
          background: var(--card-bg);
          transition: all 0.25s;
        }
        .rt-card:hover {
          border-color: var(--green);
          background: rgba(0, 255, 65, 0.06);
          box-shadow: 0 0 30px rgba(0, 255, 65, 0.05);
        }
        .rt-card__header {
          margin-bottom: 12px;
        }
        .rt-card__cmd {
          color: var(--amber);
          font-size: 12px;
          font-weight: 600;
        }
        .rt-card__title {
          font-size: 16px;
          font-weight: 700;
          color: var(--green);
          margin: 0 0 8px;
          letter-spacing: 0.05em;
        }
        .rt-card__desc {
          font-size: 12px;
          line-height: 1.7;
          color: var(--dim-green);
          margin: 0;
          font-weight: 400;
        }

        .rt-how {
          padding: 60px 32px;
          max-width: 800px;
          margin: 0 auto;
        }
        .rt-pipeline {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .rt-pipeline__step {
          display: flex;
          gap: 16px;
          padding: 24px 0;
          border-bottom: 1px dashed var(--dark-green);
        }
        .rt-pipeline__step:last-child { border-bottom: none; }
        .rt-pipeline__arrow {
          color: var(--amber);
          font-size: 12px;
          font-weight: 700;
          padding-top: 2px;
        }
        .rt-pipeline__step-label {
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.15em;
          margin-bottom: 4px;
        }
        .rt-pipeline__cmd {
          color: var(--green);
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .rt-pipeline__desc {
          font-size: 13px;
          line-height: 1.6;
          color: var(--dim-green);
          margin: 0;
          font-weight: 400;
        }

        .rt-cta {
          text-align: center;
          padding: 100px 32px;
          position: relative;
        }
        .rt-cta__terminal {
          font-size: 14px;
          color: var(--dim-green);
          margin-bottom: 32px;
        }
        .rt-cta__title {
          font-size: clamp(32px, 6vw, 64px);
          font-weight: 700;
          color: var(--green);
          margin: 0 0 16px;
          line-height: 1.1;
        }
        .rt-cta__title--glow {
          text-shadow:
            0 0 10px rgba(0, 255, 65, 0.5),
            0 0 20px rgba(0, 255, 65, 0.3),
            0 0 40px rgba(0, 255, 65, 0.1);
        }
        .rt-cta__sub {
          font-size: 14px;
          color: var(--dim-green);
          margin: 0 0 36px;
        }
        .rt-blink-fast {
          animation: blink 0.5s step-end infinite;
          color: var(--green);
        }

        .rt-footer {
          display: flex;
          justify-content: space-between;
          padding: 20px 32px;
          border-top: 1px solid var(--dark-green);
          color: var(--muted);
          font-size: 11px;
          letter-spacing: 0.05em;
        }

        @media (max-width: 640px) {
          .rt-header { padding: 12px 16px; }
          .rt-hero { padding: 40px 16px 20px; }
          .rt-features, .rt-how { padding: 40px 16px; }
          .rt-cta { padding: 60px 16px; }
          .rt-footer { flex-direction: column; gap: 8px; text-align: center; padding: 16px; }
          .rt-hero__cta { flex-direction: column; }
        }
      `}</style>
    </div>
  );
}
