"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const iterations = [
  { slug: "one", label: "Neural Ink" },
  { slug: "two", label: "Paper Garden" },
  { slug: "three", label: "Brutalist Archive" },
  { slug: "four", label: "Cosmos" },
  { slug: "five", label: "Retro Terminal" },
];

export default function IterationNav() {
  const pathname = usePathname();
  const current = pathname.split("/").filter(Boolean)[0] || "one";

  return (
    <nav className="iteration-nav">
      <div className="nav-track">
        {iterations.map((it, i) => {
          const isActive = current === it.slug;
          return (
            <Link
              key={it.slug}
              href={`/${it.slug}`}
              className={`nav-pill ${isActive ? "nav-pill--active" : ""}`}
              title={it.label}
            >
              <span className="nav-pill__num">{i + 1}</span>
              <span className="nav-pill__label">{it.label}</span>
            </Link>
          );
        })}
      </div>
      <style>{`
        .iteration-nav {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
        }
        .nav-track {
          display: flex;
          gap: 6px;
          padding: 6px;
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
        }
        .nav-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.5);
          font-family: system-ui, -apple-system, sans-serif;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
        }
        .nav-pill:hover {
          color: rgba(255, 255, 255, 0.9);
          background: rgba(255, 255, 255, 0.08);
        }
        .nav-pill--active {
          background: rgba(255, 255, 255, 0.15);
          color: #fff;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
        }
        .nav-pill__num {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          font-size: 11px;
          font-weight: 700;
          flex-shrink: 0;
        }
        .nav-pill--active .nav-pill__num {
          background: #fff;
          color: #0a0a0a;
        }
        .nav-pill__label {
          display: none;
        }
        @media (min-width: 640px) {
          .nav-pill__label {
            display: inline;
          }
        }
      `}</style>
    </nav>
  );
}
