"use client";

import { useEffect, useState, useRef } from "react";

export default function MaximalistDesign() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, #ff006e 0%, #8338ec 25%, #3a86ff 50%, #06ffa5 75%, #ffbe0b 100%)
        `,
        fontFamily: "'Shrikhand', 'Cooper Black', 'Georgia', serif",
      }}
    >
      {/* Animated blob backgrounds */}
      <div
        className="fixed w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,0,110,0.6) 0%, transparent 70%)",
          filter: "blur(80px)",
          left: `${20 + mousePos.x * 5}%`,
          top: `${20 + mousePos.y * 5}%`,
          transform: "translate(-50%, -50%)",
          animation: "blob1 15s ease-in-out infinite",
        }}
      />
      <div
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,190,11,0.5) 0%, transparent 70%)",
          filter: "blur(60px)",
          right: `${10 - mousePos.x * 8}%`,
          bottom: `${30 - mousePos.y * 8}%`,
          transform: "translate(50%, 50%)",
          animation: "blob2 12s ease-in-out infinite",
        }}
      />
      <div
        className="fixed w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6,255,165,0.5) 0%, transparent 70%)",
          filter: "blur(50px)",
          left: `${60 + mousePos.x * 3}%`,
          bottom: `${10 - mousePos.y * 5}%`,
          transform: "translate(-50%, 50%)",
          animation: "blob3 18s ease-in-out infinite",
        }}
      />

      {/* Pattern overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px),
            repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(0,0,0,0.05) 35px, rgba(0,0,0,0.05) 70px)
          `,
        }}
      />

      {/* Noise texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col px-6 py-12">
        {/* Wild header */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
          <div
            className="text-4xl md:text-5xl tracking-tight transform -rotate-2"
            style={{
              color: "#fff",
              textShadow: "4px 4px 0px #ff006e, 8px 8px 0px rgba(0,0,0,0.2)",
            }}
          >
            CORTEX!
          </div>
          <nav className="flex gap-4 flex-wrap justify-center">
            {["Capture!", "Link!", "Create!"].map((item, i) => (
              <button
                key={i}
                className="px-6 py-3 text-lg font-bold transform transition-all duration-300 hover:scale-110 hover:-rotate-3"
                style={{
                  background: i === 0 ? "#ff006e" : i === 1 ? "#8338ec" : "#3a86ff",
                  color: "#fff",
                  borderRadius: i === 0 ? "20px 50px 30px 40px" : i === 1 ? "40px 30px 50px 20px" : "30px 40px 20px 50px",
                  boxShadow: "4px 4px 0 rgba(0,0,0,0.3)",
                }}
              >
                {item}
              </button>
            ))}
          </nav>
        </header>

        {/* Hero section */}
        <main className="flex-1 flex flex-col items-center justify-center text-center">
          {/* Animated title */}
          <div className="relative">
            <h1
              className="text-[15vw] md:text-[12vw] leading-[0.85] tracking-tighter"
              style={{
                color: "#fff",
                textShadow: `
                  6px 6px 0 #ff006e,
                  12px 12px 0 #8338ec,
                  18px 18px 0 rgba(0,0,0,0.2)
                `,
                transform: `rotate(${(isLoaded ? 0 : -5)}deg)`,
                transition: "transform 1s ease-out",
              }}
            >
              THINK
              <br />
              <span style={{ color: "#ffbe0b" }}>BIG</span>
            </h1>

            {/* Floating badges */}
            <div
              className="absolute -top-8 -right-8 md:top-0 md:right-[-10%] px-4 py-2 text-sm font-bold animate-bounce"
              style={{
                background: "#06ffa5",
                color: "#000",
                borderRadius: "30px 20px 40px 25px",
                transform: "rotate(12deg)",
                boxShadow: "4px 4px 0 rgba(0,0,0,0.3)",
              }}
            >
              NEW!
            </div>
            <div
              className="absolute -bottom-4 -left-4 md:bottom-[20%] md:left-[-15%] px-4 py-2 text-sm font-bold"
              style={{
                background: "#ff006e",
                color: "#fff",
                borderRadius: "25px 40px 20px 35px",
                transform: "rotate(-8deg)",
                boxShadow: "4px 4px 0 rgba(0,0,0,0.3)",
                animation: "wiggle 2s ease-in-out infinite",
              }}
            >
              FUN!!
            </div>
          </div>

          {/* Subtitle */}
          <p
            className="mt-8 text-xl md:text-2xl max-w-2xl font-bold leading-relaxed"
            style={{
              color: "#fff",
              textShadow: "2px 2px 0 rgba(0,0,0,0.3)",
            }}
          >
            The note-taking app that doesn&apos;t bore you to death. Finally!
          </p>

          {/* CTA buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 items-center">
            <button
              className="group relative px-12 py-5 text-2xl font-bold transition-all duration-300 hover:scale-105"
              style={{
                background: "#fff",
                color: "#ff006e",
                borderRadius: "50px 30px 40px 35px",
                boxShadow: "8px 8px 0 #ff006e, 12px 12px 0 rgba(0,0,0,0.2)",
              }}
            >
              LET&apos;S GO! →
            </button>
            <button
              className="px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105"
              style={{
                background: "transparent",
                color: "#fff",
                border: "3px dashed #fff",
                borderRadius: "30px 50px 40px 20px",
              }}
            >
              Tell me more...
            </button>
          </div>

          {/* Feature stickers */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl">
            {[
              { icon: "🧠", title: "Brain", desc: "It thinks!", color: "#ff006e" },
              { icon: "🔗", title: "Links", desc: "So connected!", color: "#8338ec" },
              { icon: "⚡", title: "Fast", desc: "Zoom zoom!", color: "#3a86ff" },
              { icon: "🎨", title: "Pretty", desc: "So colorful!", color: "#06ffa5" },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-6 transition-all duration-300 hover:scale-110 cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  borderRadius:
                    i === 0
                      ? "40px 20px 50px 30px"
                      : i === 1
                        ? "20px 50px 30px 40px"
                        : i === 2
                          ? "50px 30px 20px 40px"
                          : "30px 40px 40px 20px",
                  boxShadow: `6px 6px 0 ${feature.color}, 10px 10px 0 rgba(0,0,0,0.2)`,
                  transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)`,
                }}
              >
                <div className="text-4xl mb-2 group-hover:scale-125 transition-transform">
                  {feature.icon}
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: feature.color }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Testimonial banner */}
          <div
            className="mt-16 w-full max-w-4xl p-6 md:p-8"
            style={{
              background: "linear-gradient(90deg, #ffbe0b, #ff006e, #8338ec)",
              borderRadius: "60px 30px 50px 40px",
              boxShadow: "8px 8px 0 rgba(0,0,0,0.3)",
            }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div
                className="text-6xl"
                style={{
                  background: "#fff",
                  borderRadius: "50%",
                  width: "80px",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "4px 4px 0 rgba(0,0,0,0.2)",
                }}
              >
                🤯
              </div>
              <div className="text-center md:text-left">
                <p className="text-xl md:text-2xl font-bold text-white leading-tight">
                  &ldquo;I finally enjoy taking notes!! This is NOT a drill!!&rdquo;
                </p>
                <p className="mt-2 text-white/80">— Someone very excited, probably</p>
              </div>
            </div>
          </div>

          {/* Fun stats */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { num: "∞+", label: "IDEAS" },
              { num: "0", label: "BORING" },
              { num: "100%", label: "FUN" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-5xl md:text-7xl font-bold"
                  style={{
                    color: i === 0 ? "#ff006e" : i === 1 ? "#8338ec" : "#06ffa5",
                    textShadow: "3px 3px 0 rgba(0,0,0,0.2)",
                  }}
                >
                  {stat.num}
                </div>
                <div className="mt-1 text-white font-bold tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Wild footer */}
        <footer className="mt-20 py-8 text-center">
          <div
            className="inline-block px-8 py-4 font-bold"
            style={{
              background: "#fff",
              color: "#8338ec",
              borderRadius: "30px 40px 35px 50px",
              boxShadow: "6px 6px 0 rgba(0,0,0,0.2)",
              transform: "rotate(-2deg)",
            }}
          >
            Made with 🌈 and too much caffeine
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes blob1 {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1) rotate(180deg);
          }
        }
        @keyframes blob2 {
          0%, 100% {
            transform: translate(50%, 50%) scale(1) rotate(0deg);
          }
          50% {
            transform: translate(50%, 50%) scale(0.9) rotate(-180deg);
          }
        }
        @keyframes blob3 {
          0%, 100% {
            transform: translate(-50%, 50%) scale(1) rotate(0deg);
          }
          50% {
            transform: translate(-50%, 50%) scale(1.2) rotate(90deg);
          }
        }
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(-8deg);
          }
          50% {
            transform: rotate(-12deg);
          }
        }
      `}</style>
    </div>
  );
}

