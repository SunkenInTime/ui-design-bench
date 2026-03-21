"use client";

import { useEffect, useRef, useState } from "react";

export default function OrganicDesign() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full overflow-hidden relative"
      style={{
        background: `
          radial-gradient(ellipse at ${20 + mousePos.x * 10}% ${30 + mousePos.y * 10}%, rgba(139, 157, 119, 0.3) 0%, transparent 50%),
          radial-gradient(ellipse at ${80 - mousePos.x * 10}% ${70 - mousePos.y * 10}%, rgba(194, 178, 128, 0.25) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 100%, rgba(166, 124, 82, 0.15) 0%, transparent 40%),
          linear-gradient(180deg, #f8f6f0 0%, #f0ece0 100%)
        `,
      }}
    >
      {/* Floating organic shapes */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(139,157,119,0.4) 0%, transparent 70%)",
          filter: "blur(60px)",
          left: `${10 + mousePos.x * 5}%`,
          top: `${15 + mousePos.y * 5}%`,
          transform: "translate(-50%, -50%)",
          transition: "left 0.5s ease-out, top 0.5s ease-out",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(194,178,128,0.5) 0%, transparent 70%)",
          filter: "blur(50px)",
          right: `${5 - mousePos.x * 3}%`,
          bottom: `${20 - mousePos.y * 3}%`,
          transform: "translate(50%, 50%)",
          transition: "right 0.5s ease-out, bottom 0.5s ease-out",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8 py-20">
        {/* Hero section */}
        <div className="max-w-4xl text-center">
          {/* Logo mark */}
          <div
            className="inline-flex items-center justify-center w-20 h-20 mb-10 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, #8B9D77 0%, #C2B280 100%)",
              boxShadow: "0 20px 60px rgba(139,157,119,0.3)",
            }}
          >
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>

          {/* Main headline */}
          <h1
            className="text-6xl md:text-8xl font-light mb-6 tracking-tight"
            style={{
              fontFamily: "'Canela', 'Times New Roman', serif",
              color: "#3d3d3d",
              lineHeight: 1.1,
            }}
          >
            Your thoughts,
            <br />
            <span style={{ color: "#8B9D77" }}>naturally</span> organized
          </h1>

          <p
            className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{
              fontFamily: "'Söhne', 'Georgia', serif",
              color: "#6b6b6b",
            }}
          >
            Cortex grows with your mind. Like roots finding their path, your
            ideas connect organically.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: "#8B9D77",
                color: "white",
                fontFamily: "'Söhne', sans-serif",
                boxShadow: "0 10px 40px rgba(139,157,119,0.3)",
              }}
            >
              Start Growing
            </button>
            <button
              className="px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 border-2"
              style={{
                background: "transparent",
                color: "#8B9D77",
                borderColor: "#8B9D77",
                fontFamily: "'Söhne', sans-serif",
              }}
            >
              Watch Demo
            </button>
          </div>
        </div>

        {/* Feature cards - organic shapes */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          {[
            {
              title: "Branching Ideas",
              desc: "Watch your thoughts bloom into connected networks",
              icon: "🌿",
            },
            {
              title: "Natural Flow",
              desc: "No rigid structures. Ideas grow where they want",
              icon: "🍃",
            },
            {
              title: "Seasonal Memory",
              desc: "Rediscover forgotten thoughts at the perfect moment",
              icon: "🌸",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-8 transition-all duration-500 hover:transform hover:-translate-y-2"
              style={{
                background: "rgba(255,255,255,0.6)",
                borderRadius: "30px 40px 35px 45px",
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px rgba(139,157,119,0.1)",
              }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3
                className="text-xl font-medium mb-2"
                style={{
                  fontFamily: "'Canela', serif",
                  color: "#3d3d3d",
                }}
              >
                {feature.title}
              </h3>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "'Söhne', serif",
                  color: "#6b6b6b",
                }}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Organic divider */}
        <svg
          className="mt-20 w-full max-w-3xl opacity-30"
          viewBox="0 0 400 20"
          fill="none"
        >
          <path
            d="M0 10 Q 100 0, 200 10 T 400 10"
            stroke="#8B9D77"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* Quote section */}
        <div className="mt-16 max-w-3xl text-center">
          <blockquote
            className="text-3xl md:text-4xl font-light italic leading-relaxed"
            style={{
              fontFamily: "'Canela', serif",
              color: "#5a5a5a",
            }}
          >
            "The mind is not a vessel to be filled, but a garden to be
            cultivated."
          </blockquote>
          <p
            className="mt-6 text-lg"
            style={{
              fontFamily: "'Söhne', sans-serif",
              color: "#8B9D77",
            }}
          >
            — Your Second Brain
          </p>
        </div>
      </div>
    </div>
  );
}
