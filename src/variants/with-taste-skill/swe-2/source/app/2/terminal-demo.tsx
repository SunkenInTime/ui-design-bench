"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

type Line = { kind: "cmd" | "out" | "dim"; text: string };

const SCRIPT: { cmd: string; out: Line[] }[] = [
  {
    cmd: 'recall "that idea about attention"',
    out: [
      { kind: "out", text: "0417  on gardens and attention        see also 0312" },
      { kind: "out", text: "0230  weil, gravity and grace         see also 0417" },
      { kind: "dim", text: "2 notes found in 0.04s" },
    ],
  },
  {
    cmd: "link 0417 0897",
    out: [
      { kind: "out", text: "linked. 0417 now knows about 0897, and vice versa." },
    ],
  },
  {
    cmd: "resurface",
    out: [
      { kind: "out", text: "1102  the two-paragraph rule" },
      { kind: "dim", text: "written 14 months ago. relevant to what you opened today." },
    ],
  },
];

const amber = "#eda94e";
const out = "#d9d2c2";
const dim = "#8d8674";

export function TerminalDemo() {
  const reduce = useReducedMotion();
  const [lines, setLines] = useState<Line[]>([]);
  const [typed, setTyped] = useState("");
  const idx = useRef({ script: 0, char: 0, phase: "typing" as "typing" | "printing" | "pause" });

  useEffect(() => {
    if (reduce) return;
    let t: ReturnType<typeof setTimeout>;
    const step = () => {
      const s = idx.current;
      const item = SCRIPT[s.script];
      if (s.phase === "typing") {
        if (s.char <= item.cmd.length) {
          setTyped(item.cmd.slice(0, s.char));
          s.char++;
          t = setTimeout(step, 34 + Math.random() * 30);
        } else {
          s.phase = "printing";
          t = setTimeout(step, 320);
        }
      } else if (s.phase === "printing") {
        setLines((l) => [...l, { kind: "cmd", text: item.cmd }, ...item.out]);
        setTyped("");
        s.char = 0;
        s.phase = "pause";
        t = setTimeout(step, 2300);
      } else {
        if (s.script === SCRIPT.length - 1) {
          s.script = 0;
          s.phase = "typing";
          setLines([]);
          t = setTimeout(step, 700);
        } else {
          s.script++;
          s.phase = "typing";
          t = setTimeout(step, 500);
        }
      }
    };
    t = setTimeout(step, 600);
    return () => clearTimeout(t);
  }, [reduce]);

  if (reduce) {
    const flat: Line[] = SCRIPT.flatMap((s) => [
      { kind: "cmd" as const, text: s.cmd },
      ...s.out,
    ]);
    return <TerminalBody lines={flat} typed="" idle />;
  }
  return <TerminalBody lines={lines} typed={typed} />;
}

function TerminalBody({
  lines,
  typed,
  idle,
}: {
  lines: Line[];
  typed: string;
  idle?: boolean;
}) {
  return (
    <div
      className="w-full rounded-md border font-mono text-[13px] leading-6"
      style={{
        borderColor: "#3a332a",
        background: "#191512",
        boxShadow: "0 24px 60px -24px rgba(0,0,0,0.7)",
      }}
    >
      <div
        className="flex items-center gap-2 border-b px-4 py-2.5 text-[11px] tracking-[0.14em]"
        style={{ borderColor: "#3a332a", color: dim }}
      >
        <span>commonplace</span>
        <span style={{ color: "#4a4438" }}>-</span>
        <span>local store: ~/notes</span>
      </div>
      <div className="min-h-[300px] px-4 py-4">
        {lines.map((l, i) =>
          l.kind === "cmd" ? (
            <p key={i} style={{ color: amber }}>
              <span style={{ color: dim }}>$ </span>
              {l.text}
            </p>
          ) : (
            <p
              key={i}
              className="pl-4 whitespace-pre-wrap"
              style={{ color: l.kind === "dim" ? dim : out }}
            >
              {l.text}
            </p>
          ),
        )}
        <p style={{ color: amber }}>
          <span style={{ color: dim }}>$ </span>
          {typed}
          <span
            className="ml-0.5 inline-block h-[15px] w-[8px] translate-y-[2px]"
            style={{
              background: amber,
              animation: idle ? "none" : "blink 1.1s steps(1) infinite",
            }}
          />
        </p>
      </div>
      <style>{`@keyframes blink { 50% { opacity: 0 } }`}</style>
    </div>
  );
}
