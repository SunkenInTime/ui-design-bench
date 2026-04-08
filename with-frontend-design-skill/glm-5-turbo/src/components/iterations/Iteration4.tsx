"use client";

import { useEffect, useState } from "react";

export default function Iteration4() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes i4-grow {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes i4-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes i4-leaf-sway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        @keyframes i4-breathe {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        @keyframes i4-draw-line {
          from { height: 0; }
          to { height: 120px; }
        }
        .i4-el { opacity: 0; }
        .i4-el.show { animation: i4-grow 1s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .i4-d1 { animation-delay: 0.15s !important; }
        .i4-d2 { animation-delay: 0.35s !important; }
        .i4-d3 { animation-delay: 0.55s !important; }
        .i4-d4 { animation-delay: 0.75s !important; }
        .i4-d5 { animation-delay: 0.95s !important; }
        .i4-d6 { animation-delay: 1.15s !important; }
        .i4-d7 { animation-delay: 1.35s !important; }
        .i4-seed:hover { transform: translateY(-4px); }
        .i4-seed:hover .i4-seed-icon { background: #6b8f5e !important; }
      `}</style>

      <div style={{
        minHeight: "100vh",
        background: "#f0ebe3",
        fontFamily: "var(--font-fraunces), Georgia, serif",
        color: "#3d3428",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Organic background shapes */}
        <div style={{
          position: "absolute",
          top: "-200px",
          right: "-200px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(143, 174, 126, 0.15), transparent 70%)",
          animation: "i4-breathe 6s ease-in-out infinite",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          bottom: "-150px",
          left: "-150px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196, 163, 90, 0.1), transparent 70%)",
          animation: "i4-breathe 8s ease-in-out 2s infinite",
          pointerEvents: "none",
        }} />

        {/* Floating leaf SVGs */}
        <svg style={{
          position: "absolute",
          top: "15%",
          right: "8%",
          opacity: 0.06,
          animation: "i4-leaf-sway 6s ease-in-out infinite",
          pointerEvents: "none",
        }} width="200" height="200" viewBox="0 0 200 200">
          <path d="M100 10 C130 50, 170 80, 160 140 C150 180, 100 200, 60 170 C20 140, 30 80, 60 50 C80 30, 100 10, 100 10Z" fill="#8fae7e" />
          <path d="M100 10 Q100 120, 60 170" stroke="#6b8f5e" strokeWidth="1.5" fill="none" />
        </svg>
        <svg style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          opacity: 0.05,
          animation: "i4-leaf-sway 7s ease-in-out 1s infinite",
          pointerEvents: "none",
        }} width="160" height="160" viewBox="0 0 200 200">
          <path d="M100 10 C130 50, 170 80, 160 140 C150 180, 100 200, 60 170 C20 140, 30 80, 60 50 C80 30, 100 10, 100 10Z" fill="#8fae7e" />
        </svg>

        {/* Nav */}
        <nav className={`i4-el ${visible ? "show i4-d1" : ""}`} style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "28px 48px",
          position: "relative",
          zIndex: 1,
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="13" stroke="#6b8f5e" strokeWidth="1.5" />
              <circle cx="14" cy="14" r="6" fill="#6b8f5e" opacity="0.3" />
              <circle cx="14" cy="14" r="2" fill="#6b8f5e" />
              <path d="M14 1 L14 4 M14 24 L14 27 M1 14 L4 14 M24 14 L27 14" stroke="#6b8f5e" strokeWidth="1" opacity="0.5" />
            </svg>
            <span style={{
              fontSize: "18px",
              fontWeight: 500,
              color: "#3d3428",
              letterSpacing: "1px",
            }}>Cortex</span>
          </div>
          <div style={{
            display: "flex",
            gap: "28px",
            fontFamily: "var(--font-geist-sans), sans-serif",
            fontSize: "13px",
            color: "#8a7d6b",
          }}>
            <a href="#" style={{ color: "#8a7d6b", textDecoration: "none" }}>Garden</a>
            <a href="#" style={{ color: "#8a7d6b", textDecoration: "none" }}>Seeds</a>
            <a href="#" style={{ color: "#8a7d6b", textDecoration: "none" }}>Harvest</a>
          </div>
        </nav>

        {/* Hero */}
        <div style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "900px",
          margin: "0 auto",
          padding: "80px 48px 60px",
          textAlign: "center",
        }}>
          <div className={`i4-el ${visible ? "show i4-d2" : ""}`} style={{
            display: "inline-block",
            fontFamily: "var(--font-caveat), cursive",
            fontSize: "20px",
            color: "#8fae7e",
            marginBottom: "24px",
          }}>
            a quiet place for your thinking to grow...
          </div>

          <h1 className={`i4-el ${visible ? "show i4-d3" : ""}`} style={{
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 300,
            lineHeight: 1.15,
            color: "#3d3428",
            marginBottom: "32px",
            letterSpacing: "-0.5px",
          }}>
            Tend to your thoughts, <br />
            <span style={{ fontWeight: 600, color: "#6b8f5e" }}>watch them bloom.</span>
          </h1>

          <p className={`i4-el ${visible ? "show i4-d4" : ""}`} style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: "#7a6f5f",
            maxWidth: "520px",
            margin: "0 auto 40px",
            fontFamily: "var(--font-geist-sans), sans-serif",
          }}>
            Like a garden, your mind needs the right environment to flourish.
            Cortex gives your ideas room to breathe, connect, and grow into
            something extraordinary.
          </p>

          <div className={`i4-el ${visible ? "show i4-d5" : ""}`} style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <a href="#" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 32px",
              borderRadius: "100px",
              background: "#6b8f5e",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
              fontFamily: "var(--font-geist-sans), sans-serif",
              boxShadow: "0 4px 20px rgba(107, 143, 94, 0.3)",
              transition: "all 0.3s",
            }}>
              Plant Your First Seed
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" style={{
              padding: "14px 32px",
              borderRadius: "100px",
              border: "1px solid rgba(107, 143, 94, 0.3)",
              color: "#6b8f5e",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
              fontFamily: "var(--font-geist-sans), sans-serif",
              transition: "all 0.3s",
            }}>
              Take a Walk
            </a>
          </div>
        </div>

        {/* Vertical vine divider */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px 0 60px",
        }}>
          <div className={`i4-el ${visible ? "show i4-d5" : ""}`} style={{
            width: "1px",
            background: "linear-gradient(to bottom, transparent, #8fae7e, transparent)",
            animation: "i4-draw-line 1.5s ease-out both",
            animationDelay: "1s",
          }} />
        </div>

        {/* Features - Seed/Garden metaphor */}
        <div style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "40px 48px 160px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "32px",
        }}>
          {[
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="10" stroke="#8fae7e" strokeWidth="1.5" />
                  <path d="M16 6 L16 26" stroke="#8fae7e" strokeWidth="1" />
                  <path d="M16 11 C20 8, 24 10, 24 14 C24 12, 20 10, 16 11Z" fill="#8fae7e" opacity="0.3" />
                  <path d="M16 16 C12 13, 8 15, 8 19 C8 17, 12 15, 16 16Z" fill="#8fae7e" opacity="0.3" />
                  <path d="M16 21 C20 18, 24 20, 24 24 C24 22, 20 20, 16 21Z" fill="#8fae7e" opacity="0.3" />
                </svg>
              ),
              season: "SPRING",
              title: "Gather Seeds",
              desc: "Every idea, note, or inspiration is a seed. Plant them in your garden and watch them take root in your digital soil.",
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M8 28 Q16 8, 24 28" stroke="#8fae7e" strokeWidth="1.5" fill="none" />
                  <circle cx="16" cy="12" r="5" stroke="#8fae7e" strokeWidth="1.5" fill="rgba(143,174,126,0.1)" />
                  <path d="M13 12 Q16 6, 19 12" stroke="#8fae7e" strokeWidth="1" fill="none" />
                  <path d="M16 7 L16 4" stroke="#8fae7e" strokeWidth="1" />
                </svg>
              ),
              season: "SUMMER",
              title: "Nurture Growth",
              desc: "Connections form naturally between related thoughts. Watch as your ideas intertwine and strengthen each other.",
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="12" stroke="#c4a35a" strokeWidth="1.5" />
                  <circle cx="16" cy="16" r="8" stroke="#c4a35a" strokeWidth="1" fill="rgba(196,163,90,0.08)" />
                  <circle cx="16" cy="16" r="3" fill="#c4a35a" opacity="0.4" />
                  <circle cx="16" cy="16" r="1.5" fill="#c4a35a" />
                </svg>
              ),
              season: "AUTUMN",
              title: "Harvest Insight",
              desc: "When the time is right, patterns reveal themselves. Surface the wisdom hiding in the connections you've cultivated.",
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="10" stroke="#8fae7e" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="16" cy="16" r="5" stroke="#8fae7e" strokeWidth="1" fill="rgba(143,174,126,0.15)" />
                  <path d="M16 6 L16 26 M6 16 L26 16" stroke="#8fae7e" strokeWidth="0.5" opacity="0.3" />
                  <circle cx="16" cy="16" r="2" fill="#8fae7e" opacity="0.5" />
                </svg>
              ),
              season: "WINTER",
              title: "Rest & Reflect",
              desc: "Return to your garden in any season. Every note waits patiently, ready to bloom again when new context arrives.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className={`i4-el ${visible ? `show i4-d${Math.min(i + 4, 7)}` : ""} i4-seed`}
              style={{
                padding: "36px 28px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(143, 174, 126, 0.15)",
                backdropFilter: "blur(10px)",
                transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                cursor: "default",
                textAlign: "center",
              }}
            >
              <div className="i4-seed-icon" style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                background: "rgba(143, 174, 126, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                transition: "background 0.3s",
              }}>
                {f.icon}
              </div>
              <div style={{
                fontSize: "9px",
                letterSpacing: "3px",
                color: "#8fae7e",
                marginBottom: "12px",
                fontWeight: 500,
              }}>
                {f.season}
              </div>
              <h3 style={{
                fontSize: "20px",
                fontWeight: 500,
                color: "#3d3428",
                marginBottom: "12px",
              }}>
                {f.title}
              </h3>
              <p style={{
                fontSize: "14px",
                lineHeight: 1.75,
                color: "#7a6f5f",
                fontFamily: "var(--font-geist-sans), sans-serif",
              }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
