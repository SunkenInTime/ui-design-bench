"use client";

import { useEffect, useState } from "react";

export default function RetroFuturisticDesign() {
  const [time, setTime] = useState(new Date());
  const [glitchText, setGlitchText] = useState("CORTEX");

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
          const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";
      let iterations = 0;
      const maxIterations = 8;

      const interval = setInterval(() => {
        setGlitchText(
          "CORTEX"
            .split("")
            .map((char, index) => {
              if (index < iterations) return "CORTEX"[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );
        iterations += 1 / 2;
        if (iterations >= maxIterations) clearInterval(interval);
      }, 50);
    }, 4000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        background: "#0c0c1a",
        fontFamily: "'Orbitron', 'Courier New', monospace",
      }}
    >
      {/* Animated gradient background */}
      <div
        className="fixed inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 100%, rgba(255, 0, 110, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 0% 0%, rgba(0, 255, 255, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse at 100% 0%, rgba(255, 215, 0, 0.15) 0%, transparent 40%),
            linear-gradient(180deg, #0c0c1a 0%, #1a0a2e 50%, #16213e 100%)
          `,
        }}
      />

      {/* Grid floor */}
      <div
        className="fixed bottom-0 left-0 right-0 h-[60vh] pointer-events-none"
        style={{
          background: `
            linear-gradient(transparent 0%, rgba(0, 255, 255, 0.05) 100%),
            linear-gradient(90deg, rgba(255, 0, 110, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(255, 0, 110, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px, 50px 50px, 50px 50px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "bottom",
          animation: "gridMove 20s linear infinite",
        }}
      />

      {/* Sun/moon */}
      <div
        className="fixed top-20 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #ff006e 0%, #ff8500 50%, #ffb700 100%)",
          boxShadow: "0 0 100px rgba(255, 0, 110, 0.5), 0 0 200px rgba(255, 133, 0, 0.3)",
          animation: "pulse 4s ease-in-out infinite",
        }}
      />

      {/* Scanlines */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.08]"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 255, 0.1) 2px,
            rgba(0, 255, 255, 0.1) 4px
          )`,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 md:p-10 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div
              className="w-10 h-10 flex items-center justify-center text-black font-bold"
              style={{
                background: "linear-gradient(135deg, #00ffff, #ff006e)",
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            >
              C
            </div>
            <span
              className="text-cyan-400 text-sm tracking-[0.3em]"
              style={{ textShadow: "0 0 10px rgba(0, 255, 255, 0.5)" }}
            >
              NEURAL_LINK
            </span>
          </div>
          <div
            className="text-xs tracking-widest"
            style={{ color: "#ff006e", textShadow: "0 0 10px rgba(255, 0, 110, 0.5)" }}
          >
            {time.toLocaleTimeString("en-US", {
              hour12: false,
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
            :00
          </div>
        </header>

        {/* Hero */}
        <main className="flex-1 flex flex-col items-center justify-center px-8 text-center">
          {/* Glitch title */}
          <h1
            className="text-6xl md:text-9xl font-black tracking-wider mb-6"
            style={{
              color: "#fff",
              textShadow: `
                0 0 10px rgba(255, 0, 110, 0.8),
                0 0 40px rgba(255, 0, 110, 0.5),
                0 0 80px rgba(255, 0, 110, 0.3),
                -2px 0 #00ffff,
                2px 0 #ff006e
              `,
            }}
          >
            {glitchText}
          </h1>

          <p
            className="text-lg md:text-2xl mb-12 max-w-2xl tracking-wide"
            style={{
              color: "#00ffff",
              textShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
            }}
          >
            EXPAND YOUR NEURAL CAPACITY. UPLOAD THOUGHTS TO THE CLOUD.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button
              className="group relative px-10 py-4 text-black font-bold tracking-widest transition-all duration-300 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #ff006e, #ff8500)",
                clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
                boxShadow: "0 0 30px rgba(255, 0, 110, 0.5)",
              }}
            >
              <span className="relative z-10">INITIALIZE ↵</span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: "linear-gradient(135deg, #00ffff, #0080ff)",
                }}
              />
            </button>

            <button
              className="px-10 py-4 font-bold tracking-widest border-2 transition-all duration-300 hover:bg-cyan-400/20"
              style={{
                color: "#00ffff",
                borderColor: "#00ffff",
                clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
                textShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)",
              }}
            >
              SIMULATION ▶
            </button>
          </div>

          {/* Feature cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
            {[
              {
                title: "NEURAL SYNC",
                desc: "Real-time thought synchronization across all devices",
                color: "#ff006e",
              },
              {
                title: "MEMORY BANK",
                desc: "Infinite storage with instant recall protocols",
                color: "#00ffff",
              },
              {
                title: "LINK MATRIX",
                desc: "Automatic connection discovery between ideas",
                color: "#ffb700",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-6 relative overflow-hidden transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(12, 12, 26, 0.8)",
                  border: `1px solid ${feature.color}40`,
                  clipPath: "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}20, transparent)`,
                  }}
                />
                <div
                  className="text-4xl mb-3"
                  style={{ color: feature.color, textShadow: `0 0 20px ${feature.color}` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className="text-lg font-bold mb-2 tracking-wider"
                  style={{ color: feature.color }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-white/60">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Terminal window */}
          <div
            className="mt-16 w-full max-w-2xl p-6 text-left font-mono text-sm"
            style={{
              background: "rgba(0, 0, 0, 0.6)",
              border: "1px solid #00ffff40",
              boxShadow: "0 0 30px rgba(0, 255, 255, 0.1)",
            }}
          >
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-[#ff006e]" />
              <div className="w-3 h-3 rounded-full bg-[#ffb700]" />
              <div className="w-3 h-3 rounded-full bg-[#00ffff]" />
              <span className="ml-4 text-xs text-white/40">cortex_system.log</span>
            </div>
            <div className="text-green-400/80">
              <p>{`> Initializing neural interface...`}</p>
              <p>{`> Loading thought patterns... [COMPLETE]`}</p>
              <p>{`> Establishing memory banks... [COMPLETE]`}</p>
              <p className="animate-pulse">{`> Awaiting user input_`}</p>
            </div>
          </div>
        </main>

        {/* Decorative corner elements */}
        <div
          className="fixed top-4 left-4 w-16 h-16 pointer-events-none"
          style={{
            border: "2px solid #00ffff",
            borderRight: "none",
            borderBottom: "none",
            opacity: 0.5,
          }}
        />
        <div
          className="fixed top-4 right-4 w-16 h-16 pointer-events-none"
          style={{
            border: "2px solid #ff006e",
            borderLeft: "none",
            borderBottom: "none",
            opacity: 0.5,
          }}
        />
        <div
          className="fixed bottom-4 left-4 w-16 h-16 pointer-events-none"
          style={{
            border: "2px solid #ffb700",
            borderRight: "none",
            borderTop: "none",
            opacity: 0.5,
          }}
        />
        <div
          className="fixed bottom-4 right-4 w-16 h-16 pointer-events-none"
          style={{
            border: "2px solid #00ffff",
            borderLeft: "none",
            borderTop: "none",
            opacity: 0.5,
          }}
        />
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: translateX(-50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateX(-50%) scale(1.05);
            opacity: 0.8;
          }
        }
        @keyframes gridMove {
          0% {
            background-position: 0 0, 0 0, 0 0;
          }
          100% {
            background-position: 0 50px, 0 0, 0 0;
          }
        }
      `}</style>
    </div>
  );
}

