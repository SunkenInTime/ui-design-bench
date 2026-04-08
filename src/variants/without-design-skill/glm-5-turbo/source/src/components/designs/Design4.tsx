const connections: [number, number, number, number][] = [
  [200, 300, 280, 250],
  [280, 250, 350, 280],
  [350, 280, 420, 220],
  [420, 220, 500, 260],
  [500, 260, 580, 200],
  [580, 200, 650, 240],
  [650, 240, 720, 190],
  [720, 190, 800, 230],
  [800, 230, 880, 180],
  [880, 180, 950, 220],
  [200, 300, 300, 350],
  [300, 350, 380, 320],
  [380, 320, 450, 370],
  [450, 370, 530, 340],
  [530, 340, 620, 380],
  [620, 380, 700, 350],
  [700, 350, 780, 390],
  [780, 390, 860, 360],
  [860, 360, 950, 320],
  [350, 280, 380, 320],
  [500, 260, 530, 340],
  [650, 240, 700, 350],
  [800, 230, 860, 360],
  [420, 220, 450, 370],
  [580, 200, 620, 380],
  [720, 190, 780, 390],
  [280, 250, 350, 180],
  [500, 260, 520, 170],
  [650, 240, 680, 160],
  [880, 180, 850, 130],
  [350, 180, 420, 220],
  [520, 170, 580, 200],
  [680, 160, 720, 190],
  [850, 130, 880, 180],
  [300, 350, 280, 420],
  [530, 340, 550, 430],
  [700, 350, 680, 440],
  [860, 360, 890, 430],
  [280, 420, 380, 480],
  [550, 430, 620, 480],
  [680, 440, 780, 480],
];

const nodes: [number, number, number][] = [
  [200, 300, 3],
  [280, 250, 2],
  [350, 280, 3],
  [420, 220, 4],
  [500, 260, 3],
  [580, 200, 4],
  [650, 240, 3],
  [720, 190, 4],
  [800, 230, 3],
  [880, 180, 3],
  [950, 220, 2],
  [300, 350, 2],
  [380, 320, 3],
  [450, 370, 2],
  [530, 340, 3],
  [620, 380, 2],
  [700, 350, 3],
  [780, 390, 2],
  [860, 360, 3],
  [950, 320, 2],
  [350, 180, 2],
  [520, 170, 3],
  [680, 160, 2],
  [850, 130, 2],
  [280, 420, 2],
  [550, 430, 2],
  [680, 440, 2],
  [380, 480, 1.5],
  [620, 480, 1.5],
  [780, 480, 1.5],
  [150, 200, 1],
  [100, 350, 1],
  [400, 150, 1],
  [600, 140, 1],
  [750, 130, 1],
  [1000, 250, 1],
  [1050, 350, 1],
  [130, 450, 1],
  [1000, 400, 1],
  [450, 500, 1],
  [700, 500, 1],
  [300, 150, 1],
  [900, 250, 1],
];

const glows: [number, number][] = [
  [420, 220],
  [580, 200],
  [720, 190],
  [500, 260],
  [650, 240],
];

export default function Design4() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#050510] text-white flex items-center justify-center">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        {connections.map(([x1, y1, x2, y2], i) => (
          <line
            key={`l-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="rgba(139,92,246,0.08)"
            strokeWidth="1"
          />
        ))}
        {nodes.map(([cx, cy, r], i) => (
          <circle
            key={`n-${i}`}
            cx={cx}
            cy={cy}
            r={r}
            fill={
              r >= 3
                ? "rgba(167,139,250,0.4)"
                : "rgba(139,92,246,0.15)"
            }
          />
        ))}
        {glows.map(([cx, cy], i) => (
          <g key={`g-${i}`}>
            <circle cx={cx} cy={cy} r={8} fill="rgba(139,92,246,0.05)" />
            <circle cx={cx} cy={cy} r={4} fill="rgba(139,92,246,0.08)" />
          </g>
        ))}
      </svg>

      <div className="relative z-10 text-center px-6">
        <div className="mb-6">
          <span className="text-[11px] uppercase tracking-[0.4em] font-medium text-violet-400/50">
            Cortex
          </span>
        </div>
        <h1 className="text-6xl sm:text-8xl font-extralight tracking-tighter text-white/90 leading-none mb-6">
          Cortex.
        </h1>
        <p className="text-base sm:text-lg text-white/20 max-w-sm mx-auto leading-relaxed font-light mb-14">
          Your thoughts, beautifully connected.
        </p>
        <button className="group px-8 py-3.5 rounded-full text-sm font-light text-white/40 border border-white/[0.06] hover:border-violet-500/30 hover:text-white/70 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all duration-500">
          Begin
          <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
            &rarr;
          </span>
        </button>
      </div>
    </div>
  );
}
