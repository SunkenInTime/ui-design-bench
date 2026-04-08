"use client";

import { useEffect, useState } from "react";

export default function Iteration2() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes i2-reveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes i2-line-grow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes i2-quote-fade {
          from { opacity: 0; letter-spacing: 12px; }
          to { opacity: 1; letter-spacing: 1px; }
        }
        .i2-el { opacity: 0; }
        .i2-el.visible { animation: i2-reveal 1s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .i2-d1 { animation-delay: 0.1s !important; }
        .i2-d2 { animation-delay: 0.3s !important; }
        .i2-d3 { animation-delay: 0.5s !important; }
        .i2-d4 { animation-delay: 0.7s !important; }
        .i2-d5 { animation-delay: 0.9s !important; }
        .i2-d6 { animation-delay: 1.1s !important; }
        .i2-d7 { animation-delay: 1.3s !important; }
        .i2-d8 { animation-delay: 1.5s !important; }
        .i2-feature:hover .i2-feature-line { width: 100% !important; }
        .i2-feature:hover .i2-feature-title { color: #1a1a1a !important; }
        .i2-feature-line { transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1); }
      `}</style>

      <div style={{
        minHeight: "100vh",
        background: "#faf7f2",
        fontFamily: "var(--font-playfair), Georgia, serif",
        color: "#2a2a2a",
        position: "relative",
      }}>
        {/* Subtle paper texture overlay */}
        <div style={{
          position: "fixed",
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          pointerEvents: "none",
          zIndex: 0,
        }} />

        {/* Top accent bar */}
        <div style={{
          height: "4px",
          background: "linear-gradient(90deg, #c4a35a, #d4b96a, #c4a35a)",
        }} />

        {/* Header */}
        <header style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "32px 48px",
        }}>
          <div className={`i2-el ${visible ? "visible i2-d1" : ""}`} style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}>
            <span style={{
              fontSize: "24px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#1a1a1a",
            }}>CORTEX</span>
            <span style={{
              width: "20px",
              height: "1px",
              background: "#c4a35a",
            }} />
            <span style={{
              fontSize: "10px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#999",
            }}>Journal</span>
          </div>
          <nav className={`i2-el ${visible ? "visible i2-d1" : ""}`} style={{
            display: "flex",
            gap: "32px",
            fontSize: "11px",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}>
            <a href="#" style={{ color: "#666", textDecoration: "none" }}>Philosophy</a>
            <a href="#" style={{ color: "#666", textDecoration: "none" }}>Features</a>
            <a href="#" style={{ color: "#666", textDecoration: "none" }}>Begin</a>
          </nav>
        </header>

        {/* Hero Section - Editorial Layout */}
        <div style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 48px 80px",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "80px",
          alignItems: "start",
        }}>
          {/* Left: Main headline */}
          <div>
            <div className={`i2-el ${visible ? "visible i2-d2" : ""}`} style={{
              fontSize: "11px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#c4a35a",
              marginBottom: "32px",
              fontWeight: 500,
            }}>
              Vol. I — The Architecture of Thought
            </div>

            <h1 className={`i2-el ${visible ? "visible i2-d3" : ""}`} style={{
              fontSize: "clamp(48px, 5.5vw, 88px)",
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: "-1px",
              color: "#1a1a1a",
              marginBottom: "36px",
            }}>
              The mind{" "}
              <em style={{
                fontStyle: "italic",
                fontWeight: 400,
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}>remembers</em>
              <br />
              what it{" "}
              <em style={{
                fontStyle: "italic",
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}>connects</em>.
            </h1>

            <div className={`i2-el ${visible ? "visible i2-d4" : ""}`} style={{
              width: "60px",
              height: "1px",
              background: "#c4a35a",
              marginBottom: "32px",
            }} />

            <p className={`i2-el ${visible ? "visible i2-d5" : ""}`} style={{
              fontSize: "17px",
              lineHeight: 1.85,
              color: "#555",
              maxWidth: "460px",
              fontWeight: 400,
            }}>
              For centuries, the greatest minds kept commonplace books —
              living repositories of ideas, quotations, and observations
              that compounded into extraordinary insight. Cortex reimagines
              this tradition for the digital age.
            </p>

            <div className={`i2-el ${visible ? "visible i2-d6" : ""}`} style={{
              marginTop: "40px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}>
              <a href="#" style={{
                display: "inline-block",
                padding: "16px 36px",
                background: "#1a1a1a",
                color: "#faf7f2",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "3px",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.3s",
              }}>
                Begin Your Journal
              </a>
              <a href="#" style={{
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#c4a35a",
                textDecoration: "none",
                borderBottom: "1px solid #c4a35a",
                paddingBottom: "2px",
              }}>
                Read More
              </a>
            </div>
          </div>

          {/* Right: Pull quote / decorative */}
          <div style={{
            paddingTop: "80px",
          }}>
            <div className={`i2-el ${visible ? "visible i2-d4" : ""}`} style={{
              borderLeft: "3px solid #c4a35a",
              paddingLeft: "32px",
              marginBottom: "48px",
            }}>
              <p style={{
                fontSize: "22px",
                lineHeight: 1.6,
                fontStyle: "italic",
                color: "#444",
                fontFamily: "var(--font-playfair), Georgia, serif",
              }}>
                &ldquo;Knowledge is not what is memorized. Knowledge is what benefits.&rdquo;
              </p>
              <p style={{
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#999",
                marginTop: "16px",
              }}>
                — Imam Al-Shafi&apos;i
              </p>
            </div>

            <div className={`i2-el ${visible ? "visible i2-d5" : ""}`} style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}>
              {[
                { num: "12k+", label: "Thinkers" },
                { num: "2.4M", label: "Connections" },
                { num: "98%", label: "Retention" },
                { num: "0", label: "Friction" },
              ].map((stat, i) => (
                <div key={i} style={{
                  padding: "20px 0",
                  borderTop: "1px solid rgba(0,0,0,0.08)",
                }}>
                  <div style={{
                    fontSize: "28px",
                    fontWeight: 400,
                    color: "#1a1a1a",
                    fontFamily: "var(--font-playfair), Georgia, serif",
                  }}>{stat.num}</div>
                  <div style={{
                    fontSize: "10px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#999",
                    marginTop: "4px",
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 48px",
        }}>
          <div className={`i2-el ${visible ? "visible i2-d6" : ""}`} style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)",
          }} />
        </div>

        {/* Features - Editorial Grid */}
        <div style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 48px 160px",
        }}>
          <div className={`i2-el ${visible ? "visible i2-d6" : ""}`} style={{
            fontSize: "11px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#c4a35a",
            marginBottom: "48px",
          }}>
            Four Pillars
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px 80px",
          }}>
            {[
              {
                number: "I",
                title: "Gather",
                desc: "From browser clips to voice memos, fleeting thoughts to annotated PDFs — every fragment finds its place. No friction, no friction, no delay.",
              },
              {
                number: "II",
                title: "Resonate",
                desc: "Ideas in proximity begin to resonate. Cortex detects thematic echoes across your collection, revealing connections your conscious mind overlooked.",
              },
              {
                number: "III",
                title: "Distill",
                desc: "Progressive summarization transforms raw capture into refined insight. Each pass through your notes sharpens their clarity and compound value.",
              },
              {
                number: "IV",
                title: "Create",
                desc: "When understanding reaches critical mass, new work emerges naturally. Essays, projects, decisions — all born from the rich soil of your second brain.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className={`i2-el ${visible ? `visible i2-d${Math.min(i + 6, 8)}` : ""} i2-feature`}
                style={{
                  padding: "32px 0",
                  borderBottom: "1px solid rgba(0,0,0,0.06)",
                  cursor: "default",
                }}
              >
                <div style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "16px",
                  marginBottom: "12px",
                }}>
                  <span style={{
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "#c4a35a",
                    fontFamily: "var(--font-playfair), Georgia, serif",
                  }}>{f.number}</span>
                  <h3 className="i2-feature-title" style={{
                    fontSize: "24px",
                    fontWeight: 400,
                    color: "#333",
                    transition: "color 0.4s",
                  }}>{f.title}</h3>
                </div>
                <div className="i2-feature-line" style={{
                  width: "40px",
                  height: "1px",
                  background: "#c4a35a",
                  marginBottom: "16px",
                }} />
                <p style={{
                  fontSize: "15px",
                  lineHeight: 1.8,
                  color: "#666",
                  maxWidth: "400px",
                }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
