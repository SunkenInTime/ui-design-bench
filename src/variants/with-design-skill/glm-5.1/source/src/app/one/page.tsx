import { Syne, Space_Mono } from "next/font/google";
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

export default function IterationOne() {
  return (
    <div
      className={`${syne.variable} ${spaceMono.variable} neural-ink`}
    >
      <div className="ni-bg">
        <div className="ni-orb ni-orb--1" />
        <div className="ni-orb ni-orb--2" />
        <div className="ni-orb ni-orb--3" />
        <div className="ni-grid" />
      </div>

      <header className="ni-header">
        <div className="ni-logo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke="#00f0ff" strokeWidth="1.5" />
            <circle cx="14" cy="14" r="6" fill="#00f0ff" />
            <line x1="14" y1="1" x2="14" y2="8" stroke="#00f0ff" strokeWidth="1" />
            <line x1="14" y1="20" x2="14" y2="27" stroke="#00f0ff" strokeWidth="1" />
            <line x1="1" y1="14" x2="8" y2="14" stroke="#00f0ff" strokeWidth="1" />
            <line x1="20" y1="14" x2="27" y2="14" stroke="#00f0ff" strokeWidth="1" />
          </svg>
          <span style={{ fontFamily: "var(--font-syne)", fontWeight: 700, letterSpacing: "0.05em" }}>CORTEX</span>
        </div>
        <nav className="ni-nav">
          <a href="#features">Features</a>
          <a href="#how">How it Works</a>
          <a href="#cta">Get Started</a>
        </nav>
      </header>

      <main className="ni-main">
        <section className="ni-hero">
          <div className="ni-hero__glow" />
          <p className="ni-hero__tag" style={{ fontFamily: "var(--font-space-mono)" }}>
            YOUR SECOND BRAIN — ACTIVATED
          </p>
          <h1 className="ni-hero__title" style={{ fontFamily: "var(--font-syne)" }}>
            Your Mind.<br />
            <span className="ni-hero__title--accent">Expanded.</span>
          </h1>
          <p className="ni-hero__sub" style={{ fontFamily: "var(--font-space-mono)" }}>
            Capture every thought. Connect every idea. Recall everything.<br />
            Cortex is the neural layer your brain has been missing.
          </p>
          <div className="ni-hero__cta">
            <a href="#cta" className="ni-btn ni-btn--primary">Initialize Cortex</a>
            <a href="#how" className="ni-btn ni-btn--ghost">See How</a>
          </div>
          <div className="ni-hero__nodes">
            <div className="ni-node ni-node--1"><span>Idea</span></div>
            <div className="ni-node ni-node--2"><span>Note</span></div>
            <div className="ni-node ni-node--3"><span>Link</span></div>
            <div className="ni-node ni-node--4"><span>Recall</span></div>
            <svg className="ni-connections" viewBox="0 0 600 200" fill="none">
              <line x1="100" y1="100" x2="250" y2="60" stroke="#00f0ff" strokeWidth="0.5" opacity="0.4" />
              <line x1="250" y1="60" x2="400" y2="120" stroke="#00f0ff" strokeWidth="0.5" opacity="0.4" />
              <line x1="400" y1="120" x2="520" y2="80" stroke="#00f0ff" strokeWidth="0.5" opacity="0.4" />
              <line x1="100" y1="100" x2="400" y2="120" stroke="#00f0ff" strokeWidth="0.3" opacity="0.2" />
            </svg>
          </div>
        </section>

        <section id="features" className="ni-features">
          <h2 className="ni-section-title" style={{ fontFamily: "var(--font-syne)" }}>
            Neural Capabilities
          </h2>
          <div className="ni-features__grid">
            {[
              { icon: "⬡", title: "Bidirectional Links", desc: "Every note connects both ways. Follow thoughts forward and backward through your neural map." },
              { icon: "◈", title: "Graph Navigation", desc: "See your knowledge as a living network. Discover connections you never knew existed." },
              { icon: "◉", title: "Instant Recall", desc: "Search through your entire second brain in milliseconds. Your thoughts, always at hand." },
              { icon: "⬢", title: "Daily Synapses", desc: "Spaced repetition meets note-taking. Cortex surfaces the right ideas at the right time." },
              { icon: "◆", title: "Frictionless Capture", desc: "Markdown, voice, images, code — capture anything in under 2 seconds." },
              { icon: "⬣", title: "Private & Local", desc: "Your second brain stays on your machine. No cloud. No tracking. Just you." },
            ].map((f, i) => (
              <div key={i} className="ni-card" style={{ "--delay": `${i * 0.1}s` } as React.CSSProperties}>
                <div className="ni-card__icon">{f.icon}</div>
                <h3 className="ni-card__title" style={{ fontFamily: "var(--font-syne)" }}>{f.title}</h3>
                <p className="ni-card__desc" style={{ fontFamily: "var(--font-space-mono)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how" className="ni-how">
          <h2 className="ni-section-title" style={{ fontFamily: "var(--font-syne)" }}>
            How Cortex Thinks
          </h2>
          <div className="ni-steps">
            {[
              { num: "01", title: "Capture", desc: "Drop thoughts in any format. Cortex absorbs everything." },
              { num: "02", title: "Connect", desc: "Links form automatically. Your notes build a neural web." },
              { num: "03", title: "Recall", desc: "Query your brain. Get answers from your own knowledge." },
            ].map((s, i) => (
              <div key={i} className="ni-step">
                <div className="ni-step__num" style={{ fontFamily: "var(--font-space-mono)" }}>{s.num}</div>
                <h3 className="ni-step__title" style={{ fontFamily: "var(--font-syne)" }}>{s.title}</h3>
                <p className="ni-step__desc" style={{ fontFamily: "var(--font-space-mono)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="cta" className="ni-cta">
          <div className="ni-cta__glow" />
          <h2 className="ni-cta__title" style={{ fontFamily: "var(--font-syne)" }}>
            Ready to Think Bigger?
          </h2>
          <p className="ni-cta__sub" style={{ fontFamily: "var(--font-space-mono)" }}>
            Join 12,000+ minds who expanded their capacity.
          </p>
          <a href="#" className="ni-btn ni-btn--primary ni-btn--large">Activate Your Cortex</a>
        </section>
      </main>

      <footer className="ni-footer" style={{ fontFamily: "var(--font-space-mono)" }}>
        <span>&copy; 2026 Cortex</span>
        <span>Think more. Forget less.</span>
      </footer>


      <style>{`
        .neural-ink {
          --cyan: #00f0ff;
          --blue: #1a1a4e;
          --bg: #050510;
          --text: #e0e0e0;
          --muted: #6a6a8a;
          min-height: 100vh;
          background: var(--bg);
          color: var(--text);
          overflow-x: hidden;
          position: relative;
        }

        .ni-bg {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .ni-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
        }
        .ni-orb--1 {
          width: 600px; height: 600px;
          background: var(--cyan);
          top: -200px; left: -100px;
          animation: orbFloat 20s ease-in-out infinite;
        }
        .ni-orb--2 {
          width: 400px; height: 400px;
          background: #4040ff;
          bottom: -100px; right: -100px;
          animation: orbFloat 15s ease-in-out infinite reverse;
        }
        .ni-orb--3 {
          width: 300px; height: 300px;
          background: #00ff88;
          top: 50%; left: 60%;
          animation: orbFloat 25s ease-in-out infinite 5s;
          opacity: 0.08;
        }

        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(50px, -30px); }
          66% { transform: translate(-30px, 40px); }
        }

        .ni-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .ni-header {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 40px;
        }
        .ni-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--cyan);
          font-size: 15px;
          letter-spacing: 0.15em;
        }
        .ni-nav {
          display: flex;
          gap: 32px;
        }
        .ni-nav a {
          color: var(--muted);
          text-decoration: none;
          font-size: 13px;
          font-family: var(--font-space-mono);
          transition: color 0.2s;
        }
        .ni-nav a:hover { color: var(--cyan); }

        .ni-main { position: relative; z-index: 10; }

        .ni-hero {
          text-align: center;
          padding: 120px 24px 80px;
          position: relative;
        }
        .ni-hero__glow {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translateX(-50%);
          width: 500px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(0, 240, 255, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .ni-hero__tag {
          display: inline-block;
          padding: 6px 20px;
          border: 1px solid rgba(0, 240, 255, 0.25);
          border-radius: 999px;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: var(--cyan);
          margin-bottom: 32px;
          animation: fadeInDown 0.8s ease-out;
        }
        .ni-hero__title {
          font-size: clamp(48px, 8vw, 96px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #fff;
          margin: 0 0 28px;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }
        .ni-hero__title--accent {
          background: linear-gradient(135deg, var(--cyan), #4040ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ni-hero__sub {
          font-size: 15px;
          line-height: 1.8;
          color: var(--muted);
          max-width: 520px;
          margin: 0 auto 40px;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }
        .ni-hero__cta {
          display: flex;
          gap: 16px;
          justify-content: center;
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }
        .ni-btn {
          display: inline-flex;
          align-items: center;
          padding: 14px 32px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          font-family: var(--font-syne);
          text-decoration: none;
          transition: all 0.3s;
          cursor: pointer;
          border: none;
        }
        .ni-btn--primary {
          background: var(--cyan);
          color: #050510;
          box-shadow: 0 0 30px rgba(0, 240, 255, 0.25);
        }
        .ni-btn--primary:hover {
          box-shadow: 0 0 50px rgba(0, 240, 255, 0.4);
          transform: translateY(-2px);
        }
        .ni-btn--ghost {
          background: transparent;
          color: var(--text);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .ni-btn--ghost:hover {
          border-color: var(--cyan);
          color: var(--cyan);
        }
        .ni-btn--large {
          padding: 18px 48px;
          font-size: 16px;
        }

        .ni-hero__nodes {
          position: relative;
          height: 200px;
          max-width: 600px;
          margin: 60px auto 0;
        }
        .ni-node {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border: 1px solid rgba(0, 240, 255, 0.3);
          border-radius: 50%;
          font-size: 11px;
          font-family: var(--font-space-mono);
          color: var(--cyan);
          background: rgba(0, 240, 255, 0.05);
          animation: nodeFloat 4s ease-in-out infinite;
        }
        .ni-node span { position: relative; z-index: 1; }
        .ni-node--1 { left: 10%; top: 40%; animation-delay: 0s; }
        .ni-node--2 { left: 38%; top: 10%; animation-delay: 1s; }
        .ni-node--3 { left: 62%; top: 50%; animation-delay: 2s; }
        .ni-node--4 { left: 85%; top: 20%; animation-delay: 3s; }

        @keyframes nodeFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .ni-connections {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .ni-features {
          padding: 80px 24px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .ni-section-title {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 700;
          color: #fff;
          text-align: center;
          margin: 0 0 60px;
          letter-spacing: -0.02em;
        }
        .ni-features__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        .ni-card {
          padding: 32px;
          border: 1px solid rgba(0, 240, 255, 0.1);
          border-radius: 12px;
          background: rgba(0, 240, 255, 0.02);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: fadeInUp 0.6s ease-out var(--delay, 0s) both;
        }
        .ni-card:hover {
          border-color: rgba(0, 240, 255, 0.3);
          background: rgba(0, 240, 255, 0.06);
          transform: translateY(-4px);
          box-shadow: 0 8px 40px rgba(0, 240, 255, 0.08);
        }
        .ni-card__icon {
          font-size: 24px;
          margin-bottom: 16px;
          color: var(--cyan);
        }
        .ni-card__title {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 10px;
        }
        .ni-card__desc {
          font-size: 13px;
          line-height: 1.7;
          color: var(--muted);
          margin: 0;
        }

        .ni-how {
          padding: 80px 24px;
          max-width: 900px;
          margin: 0 auto;
        }
        .ni-steps {
          display: flex;
          gap: 40px;
          flex-direction: column;
        }
        .ni-step {
          display: flex;
          gap: 24px;
          align-items: flex-start;
          padding: 32px;
          border-left: 2px solid rgba(0, 240, 255, 0.2);
          position: relative;
        }
        .ni-step::before {
          content: '';
          position: absolute;
          left: -5px;
          top: 36px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 12px var(--cyan);
        }
        .ni-step__num {
          font-size: 36px;
          font-weight: 700;
          color: rgba(0, 240, 255, 0.2);
          line-height: 1;
        }
        .ni-step__title {
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 8px;
        }
        .ni-step__desc {
          font-size: 14px;
          line-height: 1.6;
          color: var(--muted);
          margin: 0;
        }

        .ni-cta {
          text-align: center;
          padding: 120px 24px;
          position: relative;
        }
        .ni-cta__glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(0, 240, 255, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .ni-cta__title {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          color: #fff;
          margin: 0 0 16px;
        }
        .ni-cta__sub {
          font-size: 14px;
          color: var(--muted);
          margin: 0 0 40px;
        }

        .ni-footer {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          padding: 24px 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          color: var(--muted);
          font-size: 12px;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .ni-header { padding: 16px 20px; }
          .ni-nav { gap: 20px; }
          .ni-hero { padding: 80px 20px 60px; }
          .ni-cta { padding: 80px 20px; }
          .ni-footer { flex-direction: column; gap: 8px; text-align: center; padding: 20px; }
        }
      `}</style>
    </div>
  );
}
