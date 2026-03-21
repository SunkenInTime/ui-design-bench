"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const designs = [
  { path: "/one", label: "Organic", color: "#8B9D77" },
  { path: "/two", label: "Brutalist", color: "#1a1a1a" },
  { path: "/three", label: "Retro-Future", color: "#ff006e" },
  { path: "/four", label: "Editorial", color: "#c9a227" },
  { path: "/five", label: "Maximalist", color: "#ff5e00" },
];

export function DesignSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/") {
      router.push("/one");
    }
  }, [pathname, router]);

  const currentDesign = designs.find((d) => d.path === pathname) || designs[0];

  return (
    <div className="fixed top-6 right-6 z-[9999]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-3 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105"
        style={{
          background: "rgba(255,255,255,0.95)",
          border: `2px solid ${currentDesign.color}`,
        }}
      >
        <span
          className="w-3 h-3 rounded-full"
          style={{ background: currentDesign.color }}
        />
        <span className="text-sm font-semibold text-gray-800">
          {currentDesign.label}
        </span>
        <svg
          className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute top-full right-0 mt-2 p-2 rounded-2xl shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200"
          style={{ background: "rgba(255,255,255,0.98)" }}
        >
          {designs.map((design) => (
            <button
              key={design.path}
              onClick={() => {
                router.push(design.path);
                setIsOpen(false);
              }}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left transition-all duration-200 hover:bg-gray-100 ${
                pathname === design.path ? "bg-gray-100" : ""
              }`}
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: design.color }}
              />
              <span className="text-sm font-medium text-gray-800">
                {design.label}
              </span>
              {pathname === design.path && (
                <svg
                  className="w-4 h-4 ml-auto"
                  style={{ color: design.color }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
