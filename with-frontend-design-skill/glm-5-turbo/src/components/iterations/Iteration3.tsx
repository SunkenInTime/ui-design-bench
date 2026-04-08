"use client";

import { useEffect, useState } from "react";

export default function Iteration3() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes i3-slam {
          0% { opacity: 0; transform: translateY(-20px) scaleY(1.1); }
          60% { opacity: 1; transform: translateY(4px) scaleY(0.98); }
          100% { opacity: 1; transform: translateY(0) scaleY(1); }
        }
        @keyframes i3-slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes i3-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes i3-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes i3-stripe-move {
          from { background-position: 0 0; }
          to { background-position: 40px 40px; }
        }
        .i3-el { opacity: 0; }
        .i3-el.show { animation: i3-slide-up 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }
        .i3-d1 { animation-delay: 0.1s !important; }
        .i3-d2 { animation-delay: 0.25s !important; }
        .i3-d3 { animation-delay: 0.4s !important; }
        .i3-d4 { animation-delay: 0.55s !important; }
        .i3-d5 { animation-delay: 0.7s !important; }
        .i3-d6 { animation-delay: 0.85s !important; }
        .i3-d7 { animation-delay: 1.0s !important; }
        .i3-cell:hover { background: #ffff00 !important; color: #000 !important; }
        .i3-cell:hover .i3-cell-num { color: #000 !important; }
        .i3-cell:hover .i3-cell-label { color: #000 !important; }
      `}</style>

      <div style={{
        minHeight: "100vh",
        background: "#000000",
        color: "#ffffff",
        fontFamily: "var(--font-space-mono), monospace",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Diagonal stripe pattern */}
        <div style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 19px,
            #ffffff 19px,
            #ffffff 20px
          )`,
          backgroundSize: "40px 40px",
          animation: "i3-stripe-move 2s linear infinite",
          pointerEvents: "none",
        }} />

        {/* Top warning bar */}
        <div style={{
          background: "#ffff00",
          color: "#000",
          padding: "8px 24px",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "1px",
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          overflow: "hidden",
          position: "relative",
          zIndex: 2,
        }}>
          <span style={{
            display: "inline-block",
            animation: "i3-marquee 20s linear infinite",
            whiteSpace: "nowrap",
          }}>
            SYSTEM ONLINE — NEURAL LINK ESTABLISHED — THOUGHT CAPTURE ACTIVE — CONNECTION ENGINE LOADED — PATTERN DETECTION READY — SYSTEM ONLINE — NEURAL LINK ESTABLISHED — THOUGHT CAPTURE ACTIVE — CONNECTION ENGINE LOADED — PATTERN DETECTION READY —&nbsp;
          </span>
        </div>

        {/* Main content */}
        <div style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 24px",
        }}>
          {/* Hero */}
          <div style={{
            padding: "80px 0 60px",
            borderBottom: "3px solid #ffff00",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "40px",
          }}>
            <div style={{ maxWidth: "700px" }}>
              <div className={`i3-el ${loaded ? "show i3-d1" : ""}`} style={{
                fontSize: "10px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#ffff00",
                marginBottom: "24px",
                border: "1px solid #ffff00",
                display: "inline-block",
                padding: "4px 10px",
              }}>
                BUILD // VERSION 3.0
              </div>

              <h1 className={`i3-el ${loaded ? "show i3-d2" : ""}`} style={{
                fontSize: "clamp(48px, 8vw, 110px)",
                fontWeight: 700,
                lineHeight: 0.9,
                letterSpacing: "-3px",
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: "24px",
              }}>
                YOUR
                <br />
                BRAIN
                <br />
                <span style={{ color: "#ffff00" }}>IS THE</span>
                <br />
                LIMIT
              </h1>

              <p className={`i3-el ${loaded ? "show i3-d3" : ""}`} style={{
                fontSize: "13px",
                lineHeight: 1.8,
                color: "#888",
                maxWidth: "420px",
                borderLeft: "3px solid #333",
                paddingLeft: "16px",
              }}>
                STOP LOSING IDEAS. START BUILDING NEURAL PATHWAYS
                BETWEEN EVERY THOUGHT YOU&apos;VE EVER HAD. RAW.
                UNCOMPROMISING. BRUTAL EFFICIENCY.
              </p>
            </div>

            <div className={`i3-el ${loaded ? "show i3-d4" : ""}`} style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}>
              <a href="#" style={{
                display: "inline-block",
                padding: "20px 40px",
                background: "#ffff00",
                color: "#000",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "none",
              }}>
                ENTER THE SYSTEM &rarr;
              </a>
              <div style={{
                textAlign: "center",
                fontSize: "9px",
                letterSpacing: "2px",
                color: "#555",
                marginTop: "8px",
              }}>
                NO SIGNUP WALL. NO CREDIT CARD.
              </div>
            </div>
          </div>

          {/* Feature Grid - Brutalist */}
          <div style={{
            padding: "60px 0 160px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
          }}>
            {[
              {
                num: "01",
                label: "CAPTURE",
                title: "Ingest Everything",
                desc: "TEXT. LINKS. IMAGES. VOICE. PDF. WHATEVER YOU THROW AT IT. CORTEX DIGESTS IT ALL WITHOUT FLINCHING.",
              },
              {
                num: "02",
                label: "CONNECT",
                title: "Auto-Wire",
                desc: "THE ENGINE FINDS RELATIONSHIPS YOU DIDN'T KNOW EXISTED. IDEAS CLUSTER. PATTERNS EMERGE. SYNAPSES FIRE.",
              },
              {
                num: "03",
                label: "SURFACE",
                title: "On Demand",
                desc: "NEED THAT INSIGHT FROM THREE YEARS AGO? IT'S THERE. SEARCH ISN'T A FEATURE. IT'S THE PRODUCT.",
              },
              {
                num: "04",
                label: "COMPOUND",
                title: "Grow Forever",
                desc: "EVERY NOTE MAKES THE NEXT ONE MORE VALUABLE. YOUR KNOWLEDGE BASE DOESN'T GROW — IT MULTIPLIES.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className={`i3-el ${loaded ? `show i3-d${Math.min(i + 4, 7)}` : ""} i3-cell`}
                style={{
                  padding: "40px 24px",
                  borderTop: "3px solid #222",
                  borderRight: "3px solid #222",
                  color: "#fff",
                  transition: "all 0.2s",
                  cursor: "default",
                  position: "relative",
                }}
              >
                <div style={{
                  fontSize: "48px",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  lineHeight: 1,
                  marginBottom: "8px",
                  fontFamily: "var(--font-archivo-black), sans-serif",
                }}>
                  {f.num}
                </div>
                <div className="i3-cell-num" style={{
                  fontSize: "9px",
                  letterSpacing: "4px",
                  color: "#ffff00",
                  marginBottom: "20px",
                  transition: "color 0.2s",
                }}>
                  {f.label}
                </div>
                <h3 className="i3-cell-label" style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "16px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}>
                  {f.title}
                </h3>
                <p className="i3-cell-label" style={{
                  fontSize: "11px",
                  lineHeight: 1.8,
                  color: "#666",
                  transition: "color 0.2s",
                }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          right: "0",
          background: "#ffff00",
          color: "#000",
          padding: "6px 24px",
          fontSize: "9px",
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
          zIndex: 9998,
          display: "flex",
          justifyContent: "space-between",
        }}>
          <span>RAW://BRAIN.SYSTEMS</span>
          <span>
            STATUS: OPERATIONAL
            <span style={{
              display: "inline-block",
              width: "8px",
              height: "8px",
              background: "#000",
              borderRadius: "0",
              marginLeft: "8px",
              animation: "i3-blink 1s infinite",
            }} />
          </span>
        </div>
      </div>
    </>
  );
}
