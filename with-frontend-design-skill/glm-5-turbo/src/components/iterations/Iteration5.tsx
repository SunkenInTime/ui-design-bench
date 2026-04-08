"use client";

import { useEffect, useState } from "react";

export default function Iteration5() {
  const [loaded, setLoaded] = useState(false);
  const [typed, setTyped] = useState("");

  const fullText = "CORTEX_7 // NEURAL OS v4.2.1";

  useEffect(() => {
    setLoaded(true);
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes i5-scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes i5-flicker {
          0%, 100% { opacity: 1; }
          92% { opacity: 1; }
          93% { opacity: 0.8; }
          94% { opacity: 1; }
          96% { opacity: 0.9; }
          97% { opacity: 1; }
        }
        @keyframes i5-glitch-1 {
          0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
          20% { clip-path: inset(20% 0 60% 0); transform: translate(-4px, 0); }
          40% { clip-path: inset(60% 0 10% 0); transform: translate(4px, 0); }
          60% { clip-path: inset(40% 0 30% 0); transform: translate(-2px, 0); }
          80% { clip-path: inset(10% 0 70% 0); transform: translate(2px, 0); }
        }
        @keyframes i5-reveal {
          from { opacity: 0; transform: translateY(20px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes i5-grid-scroll {
          from { background-position: 0 0; }
          to { background-position: 0 60px; }
        }
        @keyframes i5-pulse-border {
          0%, 100% { border-color: rgba(255, 0, 255, 0.3); }
          50% { border-color: rgba(255, 0, 255, 0.6); }
        }
        @keyframes i5-boot-line {
          from { width: 0; }
          to { width: 100%; }
        }
        .i5-el { opacity: 0; }
        .i5-el.show { animation: i5-reveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .i5-d1 { animation-delay: 0.3s !important; }
        .i5-d2 { animation-delay: 0.6s !important; }
        .i5-d3 { animation-delay: 0.9s !important; }
        .i5-d4 { animation-delay: 1.2s !important; }
        .i5-d5 { animation-delay: 1.5s !important; }
        .i5-d6 { animation-delay: 1.8s !important; }
        .i5-module:hover { border-color: #ff00ff !important; box-shadow: 0 0 30px rgba(255, 0, 255, 0.2) !important; }
        .i5-module:hover .i5-module-id { color: #ff00ff !important; }
      `}</style>

      <div style={{
        minHeight: "100vh",
        background: "#0d0221",
        fontFamily: "var(--font-orbitron), monospace",
        color: "#e0d6ff",
        position: "relative",
        overflow: "hidden",
        animation: "i5-flicker 5s infinite",
      }}>
        {/* Scanline overlay */}
        <div style={{
          position: "fixed",
          inset: 0,
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
          pointerEvents: "none",
          zIndex: 9998,
        }} />

        {/* Moving scanline bar */}
        <div style={{
          position: "fixed",
          left: 0,
          right: 0,
          height: "100px",
          background: "linear-gradient(to bottom, transparent, rgba(255, 0, 255, 0.03), transparent)",
          animation: "i5-scanline 4s linear infinite",
          pointerEvents: "none",
          zIndex: 9997,
        }} />

        {/* Retro grid background */}
        <div style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          height: "50vh",
          backgroundImage: `
            linear-gradient(rgba(255, 0, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          animation: "i5-grid-scroll 3s linear infinite",
          maskImage: "linear-gradient(to bottom, transparent, black 30%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 30%)",
          perspective: "500px",
          transform: "rotateX(45deg)",
          transformOrigin: "bottom",
          pointerEvents: "none",
        }} />

        {/* Gradient fog at top of grid */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "50vh",
          background: "linear-gradient(to top, rgba(13, 2, 33, 0.8), transparent)",
          pointerEvents: "none",
          zIndex: 0,
        }} />

        {/* Content */}
        <div style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 32px",
        }}>
          {/* Terminal Header */}
          <div className="i5-el show" style={{
            padding: "24px 0",
            borderBottom: "1px solid rgba(255, 0, 255, 0.15)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
              <span style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#ff00ff",
                boxShadow: "0 0 8px #ff00ff",
              }} />
              <span style={{
                fontSize: "10px",
                letterSpacing: "2px",
                color: "#ff00ff",
                textTransform: "uppercase",
              }}>CORTEX_7</span>
            </div>
            <div style={{
              fontSize: "9px",
              letterSpacing: "2px",
              color: "rgba(255, 0, 255, 0.4)",
            }}>
              NEURAL OS v4.2.1
            </div>
          </div>

          {/* Hero */}
          <div style={{
            padding: "80px 0 60px",
          }}>
            {/* Typing terminal line */}
            <div className={`i5-el ${loaded ? "show" : ""}`} style={{
              fontSize: "13px",
              color: "#00ffff",
              marginBottom: "40px",
              fontFamily: "var(--font-jetbrains-mono), monospace",
            }}>
              <span style={{ color: "rgba(0, 255, 255, 0.5)" }}>root@cortex:~$</span>{" "}
              {typed}
              <span style={{
                display: "inline-block",
                width: "8px",
                height: "16px",
                background: "#00ffff",
                animation: "i5-flicker 0.8s infinite",
                verticalAlign: "text-bottom",
              }} />
            </div>

            <h1 className={`i5-el ${loaded ? "show i5-d1" : ""}`} style={{
              fontSize: "clamp(40px, 6.5vw, 80px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-1px",
              textTransform: "uppercase",
              marginBottom: "8px",
              position: "relative",
            }}>
              <span style={{
                color: "#fff",
                textShadow: "0 0 40px rgba(255, 0, 255, 0.3)",
              }}>Your</span>{" "}
              <span style={{
                background: "linear-gradient(180deg, #ff00ff, #7b2fbe, #00ffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 20px rgba(255, 0, 255, 0.4))",
              }}>Second</span>
            </h1>
            <h1 className={`i5-el ${loaded ? "show i5-d1" : ""}`} style={{
              fontSize: "clamp(40px, 6.5vw, 80px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-1px",
              textTransform: "uppercase",
              marginBottom: "32px",
            }}>
              <span style={{
                background: "linear-gradient(180deg, #00ffff, #0088ff, #ff00ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 20px rgba(0, 255, 255, 0.3))",
              }}>Brain.</span>{" "}
              <span style={{ color: "rgba(255,255,255,0.3)" }}>Online.</span>
            </h1>

            <p className={`i5-el ${loaded ? "show i5-d2" : ""}`} style={{
              fontSize: "15px",
              lineHeight: 1.8,
              color: "rgba(224, 214, 255, 0.6)",
              maxWidth: "500px",
              fontFamily: "var(--font-geist-sans), sans-serif",
              marginBottom: "40px",
            }}>
              The neural operating system for your mind. Capture, connect, and
              retrieve knowledge at the speed of thought. Welcome to the future
              of thinking.
            </p>

            <div className={`i5-el ${loaded ? "show i5-d3" : ""}`} style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            }}>
              <a href="#" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 28px",
                background: "linear-gradient(135deg, #ff00ff, #7b2fbe)",
                color: "#fff",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "none",
                boxShadow: "0 0 30px rgba(255, 0, 255, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}>
                INITIALIZE
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" style={{
                padding: "14px 28px",
                border: "1px solid rgba(0, 255, 255, 0.3)",
                color: "#00ffff",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
              }}>
                View Terminal
              </a>
            </div>
          </div>

          {/* System Modules */}
          <div className={`i5-el ${loaded ? "show i5-d4" : ""}`} style={{
            fontSize: "9px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "rgba(255, 0, 255, 0.5)",
            marginBottom: "24px",
          }}>
            SYSTEM MODULES
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
            paddingBottom: "160px",
          }}>
            {[
              {
                id: "MOD_01",
                name: "CAPTURE.ENGINE",
                status: "ACTIVE",
                desc: "Multi-input ingestion pipeline. Text, voice, image, URL — all processed through the neural parser into structured thought objects.",
                color: "#00ffff",
              },
              {
                id: "MOD_02",
                name: "SYNAPSE.LINK",
                status: "ACTIVE",
                desc: "Automatic relationship detection. Bidirectional linking engine maps conceptual proximity across your entire knowledge graph.",
                color: "#ff00ff",
              },
              {
                id: "MOD_03",
                name: "RECALL.SYS",
                status: "ACTIVE",
                desc: "Contextual retrieval protocol. Surfaces relevant knowledge based on current thinking context and temporal patterns.",
                color: "#7b2fbe",
              },
              {
                id: "MOD_04",
                name: "GRAPH.RENDER",
                status: "ACTIVE",
                desc: "Visual knowledge network. Interactive 3D graph of your thought topology. Navigate through clusters, bridges, and isolated nodes.",
                color: "#00ffff",
              },
            ].map((mod, i) => (
              <div
                key={i}
                className={`i5-el ${loaded ? `show i5-d${Math.min(i + 4, 6)}` : ""} i5-module`}
                style={{
                  padding: "28px",
                  borderRadius: "4px",
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 0, 255, 0.15)",
                  animation: "i5-pulse-border 4s ease-in-out infinite",
                  animationDelay: `${i * 1}s`,
                  transition: "all 0.3s",
                  cursor: "default",
                }}
              >
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "16px",
                }}>
                  <span className="i5-module-id" style={{
                    fontSize: "9px",
                    letterSpacing: "2px",
                    color: mod.color,
                    transition: "color 0.3s",
                  }}>
                    {mod.id}
                  </span>
                  <span style={{
                    fontSize: "8px",
                    letterSpacing: "2px",
                    color: "#00ff88",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}>
                    <span style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "#00ff88",
                      boxShadow: "0 0 6px #00ff88",
                    }} />
                    {mod.status}
                  </span>
                </div>
                <h3 style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  color: "#fff",
                  marginBottom: "12px",
                }}>
                  {mod.name}
                </h3>
                <p style={{
                  fontSize: "12px",
                  lineHeight: 1.7,
                  color: "rgba(224, 214, 255, 0.4)",
                  fontFamily: "var(--font-geist-sans), sans-serif",
                }}>
                  {mod.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
