"use client";

import { useEffect, useRef, useState } from "react";

const NODE_COUNT = 40;

function generateNodes(w: number, h: number) {
  const nodes: { id: number; x: number; y: number; r: number; delay: number; duration: number }[] = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    nodes.push({
      id: i,
      x: Math.random() * w,
      y: Math.random() * h,
      r: 1.5 + Math.random() * 2.5,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 4,
    });
  }
  return nodes;
}

function generateEdges(nodes: { x: number; y: number }[]) {
  const edges: { x1: number; y1: number; x2: number; y2: number; delay: number; duration: number }[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 220) {
        edges.push({
          x1: nodes[i].x,
          y1: nodes[i].y,
          x2: nodes[j].x,
          y2: nodes[j].y,
          delay: Math.random() * 3,
          duration: 2 + Math.random() * 3,
        });
      }
    }
  }
  return edges;
}

export default function Iteration1() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<ReturnType<typeof generateNodes>>([]);
  const [edges, setEdges] = useState<ReturnType<typeof generateEdges>>([]);

  useEffect(() => {
    const nextNodes = generateNodes(1200, 900);
    setNodes(nextNodes);
    setEdges(generateEdges(nextNodes));
  }, []);

  return (
    <>
      <style>{`
        @keyframes pulse-node {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.8); }
        }
        @keyframes trace-edge {
          0% { opacity: 0; stroke-dashoffset: 200; }
          30% { opacity: 0.6; }
          100% { opacity: 0; stroke-dashoffset: 0; }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 240, 255, 0.3), 0 0 60px rgba(0, 240, 255, 0.1); }
          50% { box-shadow: 0 0 30px rgba(0, 240, 255, 0.5), 0 0 80px rgba(0, 240, 255, 0.2); }
        }
        @keyframes hero-line {
          from { width: 0; }
          to { width: 80px; }
        }
        .i1-fade { animation: fade-up 0.8s ease-out both; }
        .i1-d1 { animation-delay: 0.2s; }
        .i1-d2 { animation-delay: 0.4s; }
        .i1-d3 { animation-delay: 0.6s; }
        .i1-d4 { animation-delay: 0.8s; }
        .i1-d5 { animation-delay: 1.0s; }
        .i1-d6 { animation-delay: 1.2s; }
        .i1-card:hover { border-color: rgba(0, 240, 255, 0.5) !important; background: rgba(0, 240, 255, 0.05) !important; }
        .i1-card { transition: all 0.4s ease; }
        .i1-cta { animation: glow-pulse 2s ease-in-out infinite; }
        .i1-hero-line { animation: hero-line 1s ease-out 0.6s both; height: 2px; background: linear-gradient(90deg, #00f0ff, transparent); }
      `}</style>

      <div ref={canvasRef} style={{
        minHeight: "100vh",
        background: "#060b14",
        position: "relative",
        overflow: "hidden",
        fontFamily: "var(--font-jetbrains-mono), monospace",
        color: "#e0e8f0",
      }}>
        {/* Neural Network Background */}
        <svg style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.6,
        }}>
          {edges.map((e, i) => (
            <line
              key={`e-${i}`}
              x1={e.x1} y1={e.y1}
              x2={e.x2} y2={e.y2}
              stroke="#00f0ff"
              strokeWidth="0.5"
              strokeDasharray="4 4"
              style={{
                animation: `trace-edge ${e.duration}s ease-in-out ${e.delay}s infinite`,
              }}
            />
          ))}
          {nodes.map((n) => (
            <circle
              key={`n-${n.id}`}
              cx={n.x} cy={n.y} r={n.r}
              fill="#00f0ff"
              style={{
                animation: `pulse-node ${n.duration}s ease-in-out ${n.delay}s infinite`,
              }}
            />
          ))}
        </svg>

        {/* Radial gradient overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 30%, transparent 0%, #060b14 70%)",
          pointerEvents: "none",
        }} />

        {/* Hero */}
        <div style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "120px 32px 80px",
        }}>
          <div className="i1-fade i1-d1" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 14px",
            borderRadius: "6px",
            background: "rgba(0, 240, 255, 0.08)",
            border: "1px solid rgba(0, 240, 255, 0.15)",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "#00f0ff",
            marginBottom: "24px",
          }}>
            <span style={{
              width: "6px", height: "6px", borderRadius: "50%", background: "#00f0ff",
              boxShadow: "0 0 8px #00f0ff",
            }} />
            Neural Architecture v2.0
          </div>

          <h1 className="i1-fade i1-d2" style={{
            fontSize: "clamp(42px, 6vw, 80px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            color: "#ffffff",
            marginBottom: "20px",
          }}>
            Think in{" "}
            <span style={{
              background: "linear-gradient(135deg, #00f0ff, #0ea5e9, #6366f1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              connections,
            </span>
            <br />not isolated notes.
          </h1>

          <div className="i1-hero-line" style={{ marginBottom: "32px" }} />

          <p className="i1-fade i1-d3" style={{
            fontSize: "18px",
            lineHeight: 1.7,
            color: "#8a9bb5",
            maxWidth: "560px",
            marginBottom: "48px",
          }}>
            Cortex maps the neural pathways between your ideas. Every note
            strengthens the network. Every connection reveals what you didn&apos;t
            see before.
          </p>

          <div className="i1-fade i1-d4" style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            flexWrap: "wrap",
          }}>
            <a href="#" className="i1-cta" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 28px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #00f0ff, #0ea5e9)",
              color: "#060b14",
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
              letterSpacing: "0.3px",
            }}>
              Build Your Cortex
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" style={{
              padding: "14px 28px",
              borderRadius: "8px",
              border: "1px solid rgba(0, 240, 255, 0.2)",
              color: "#00f0ff",
              fontSize: "15px",
              fontWeight: 500,
              textDecoration: "none",
              transition: "all 0.3s",
            }}>
              See How It Works
            </a>
          </div>
        </div>

        {/* Features */}
        <div style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "40px 32px 120px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}>
          {[
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              ),
              title: "Neural Capture",
              desc: "Save from anywhere. Ideas, links, snippets, images — Cortex ingests them all and finds the synaptic bridges automatically.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                </svg>
              ),
              title: "Auto-Synapse",
              desc: "Related thoughts find each other. Our engine detects conceptual overlap and weaves invisible threads between your notes.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" strokeWidth="1.5">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" />
                </svg>
              ),
              title: "Pattern Recognition",
              desc: "Surface hidden structures in your thinking. See the clusters, outliers, and emergent themes across your entire knowledge graph.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" strokeWidth="1.5">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              ),
              title: "Compound Intelligence",
              desc: "Your knowledge grows exponentially. Each new note doesn't add — it multiplies, creating compounding value over time.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className={`i1-fade i1-d${Math.min(i + 3, 6)} i1-card`}
              style={{
                padding: "32px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div style={{ marginBottom: "20px" }}>{feature.icon}</div>
              <h3 style={{
                fontSize: "17px",
                fontWeight: 600,
                color: "#ffffff",
                marginBottom: "10px",
              }}>{feature.title}</h3>
              <p style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "#6b7f99",
              }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
