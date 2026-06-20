import { Lock } from "lucide-react";

const CHAIN_LINK_SVG =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="46" height="22" viewBox="0 0 46 22">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#e8ebef"/>
          <stop offset="0.45" stop-color="#aab0ba"/>
          <stop offset="1" stop-color="#5c626d"/>
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#g)" stroke-width="4">
        <ellipse cx="11" cy="11" rx="9" ry="5.5"/>
        <ellipse cx="34" cy="11" rx="9" ry="5.5"/>
        <ellipse cx="22.5" cy="11" rx="5.5" ry="9"/>
      </g>
    </svg>`,
  );

function ChainStrap({ rotation }: { rotation: number }) {
  return (
    <div
      aria-hidden
      className="absolute left-1/2 top-1/2 h-[20px] w-[170%]"
      style={{
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        backgroundImage: `url("${CHAIN_LINK_SVG}")`,
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto 100%",
        filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.45))",
      }}
    />
  );
}

export function GalleryCardBannedOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-lg"
      aria-label="Banned"
    >
      <div aria-hidden className="absolute inset-0 bg-black/25 backdrop-grayscale" />

      {/* Chains crossing from multiple sides */}
      <ChainStrap rotation={32} />
      <ChainStrap rotation={-32} />

      {/* Padlock where the chains meet */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="flex size-16 items-center justify-center rounded-2xl border border-[#3a3f49] bg-gradient-to-b from-[#5b626e] to-[#2c313a]"
          style={{
            boxShadow:
              "inset 0 2px 2px rgba(255,255,255,0.35), inset 0 -3px 6px rgba(0,0,0,0.5), 0 6px 16px rgba(0,0,0,0.55)",
          }}
        >
          <Lock className="size-8 text-[#e9ecf1]" strokeWidth={2.25} aria-hidden />
        </div>
      </div>

      {/* Banner */}
      <div className="absolute inset-x-0 top-[18%] z-30 flex -rotate-[8deg] justify-center">
        <div
          className="bg-[#d7263d] px-10 py-2 text-center"
          style={{
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 14px rgba(0,0,0,0.5)",
            clipPath:
              "polygon(0 0, 100% 0, calc(100% - 14px) 50%, 100% 100%, 0 100%, 14px 50%)",
          }}
        >
          <span className="text-xl font-extrabold uppercase tracking-[0.18em] text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
            banned :(
          </span>
        </div>
      </div>
    </div>
  );
}
