"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/variants/with-design-skill/glm-5.3-flash/source/src/components/use-reduced-motion";

/* Big analog gauge — needle sweeps to `value` on mount */
export function Gauge({
  value,
  label,
  unit = "%",
}: {
  value: number;
  label: string;
  unit?: string;
}) {
  const reduced = useReducedMotion();
  const [v, setV] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const t = setTimeout(() => setV(value), 350);
    return () => clearTimeout(t);
  }, [value, reduced]);

  const shown = reduced ? value : v;
  const angle = -120 + (Math.min(shown, 100) / 100) * 240;
  const ticks = Array.from({ length: 25 }, (_, i) => {
    const a = -120 + (i / 24) * 240;
    const major = i % 6 === 0;
    const r1 = major ? 58 : 63;
    const x1 = 80 + r1 * Math.sin((a * Math.PI) / 180);
    const y1 = 80 - r1 * Math.cos((a * Math.PI) / 180);
    const r2 = 70;
    const x2 = 80 + r2 * Math.sin((a * Math.PI) / 180);
    const y2 = 80 - r2 * Math.cos((a * Math.PI) / 180);
    return { x1, y1, x2, y2, major };
  });

  return (
    <div className="gauge">
      <svg viewBox="0 0 160 100" role="img" aria-label={`${label}: ${value}${unit}`}>
        <path
          d="M 14 92 A 66 66 0 1 1 146 92"
          fill="none"
          stroke="#3f3a30"
          strokeWidth="10"
        />
        <path
          d="M 14 92 A 66 66 0 1 1 146 92"
          fill="none"
          stroke="#e85d1f"
          strokeWidth="3"
          strokeDasharray={`${(Math.min(shown, 100) / 100) * 276} 400`}
        />
        {ticks.map((t, i) => (
          <line
            key={i}
            x1={t.x1}
            y1={t.y1}
            x2={t.x2}
            y2={t.y2}
            stroke={t.major ? "#26231d" : "#8b8374"}
            strokeWidth={t.major ? 1.6 : 0.8}
          />
        ))}
        <line
          x1="80"
          y1="80"
          x2="80"
          y2="22"
          stroke="#26231d"
          strokeWidth="2.5"
          strokeLinecap="round"
          transform={`rotate(${angle} 80 80)`}
          style={{
            transformOrigin: "80px 80px",
            transition: "transform 1.8s cubic-bezier(.2,1.35,.35,1)",
          }}
        />
        <circle cx="80" cy="80" r="5" fill="#26231d" />
      </svg>
      <p className="readout">
        {label} <strong>{Math.round(shown)}{unit}</strong>
      </p>
    </div>
  );
}

/* Recessed toggle switch */
export function ToggleSwitch({
  on,
  onToggle,
  label,
}: {
  on: boolean;
  onToggle: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={onToggle}
      className={"switch" + (on ? " on" : "")}
    >
      <span className="slot">
        <span className="lever" />
      </span>
      <span className="sw-label">{label}</span>
      <span className={"led" + (on ? " lit" : "")} aria-hidden="true" />
    </button>
  );
}

/* Fader that estimates linked notes */
export function SemanticFader() {
  const [range, setRange] = useState(55);
  const linked = Math.round(2 + range * 0.32);
  return (
    <div className="fader-block">
      <label className="sw-label" htmlFor="semrange">
        SEMANTIC RANGE
      </label>
      <input
        id="semrange"
        type="range"
        min={0}
        max={100}
        value={range}
        onChange={(e) => setRange(Number(e.target.value))}
        className="fader"
      />
      <p className="readout">
        LINKED NOTES SURFACED <strong>≈ {linked}</strong>
      </p>
    </div>
  );
}

/* VU meter for recall mode */
export function RecallMeter({ adventurous }: { adventurous: boolean }) {
  const reduced = useReducedMotion();
  return (
    <div className="vu-wrap">
      <div className={"vu" + (adventurous && !reduced ? " wide" : "")}>
        <span className="vu-needle" />
        <span className="vu-zone safe" />
        <span className="vu-zone wild" />
      </div>
      <p className="readout">
        MODE <strong>{adventurous ? "SERENDIPITOUS" : "PRECISE"}</strong>
      </p>
    </div>
  );
}

/* Guarded main power switch */
export function PowerSwitch() {
  const [on, setOn] = useState(false);
  return (
    <div className="power">
      <button
        type="button"
        aria-pressed={on}
        onClick={() => setOn(!on)}
        className={"power-btn" + (on ? " on" : "")}
      >
        <span className="guard" aria-hidden="true" />
        <span className="power-lever" aria-hidden="true" />
        <span className="power-text">{on ? "SYSTEM RUNNING" : "THROW SWITCH"}</span>
      </button>
      <p className="power-sub">
        {on
          ? "your second brain is live — welcome back, 2019 you"
          : "main power · starts your free box"}
      </p>
    </div>
  );
}

export function Screw({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  return <i className={`screw s-${pos}`} aria-hidden="true" />;
}

/* Module 01 console — inbox sweep toggle */
export function CaptureConsole() {
  const [sweep, setSweep] = useState(true);
  return (
    <div className="module-console">
      <Screw pos="tl" />
      <Screw pos="tr" />
      <Screw pos="bl" />
      <Screw pos="br" />
      <ToggleSwitch
        on={sweep}
        onToggle={() => setSweep(!sweep)}
        label="Inbox sweep"
      />
      <p className="readout">
        STATUS{" "}
        <strong>{sweep ? "AUTO-FILED IN 0.2 S" : "MANUAL FILING REQUIRED"}</strong>
      </p>
    </div>
  );
}

/* Module 03 console — recall mode meter + toggle */
export function RecallConsole() {
  const [adventure, setAdventure] = useState(false);
  return (
    <div className="module-console">
      <Screw pos="tl" />
      <Screw pos="tr" />
      <Screw pos="bl" />
      <Screw pos="br" />
      <RecallMeter adventurous={adventure} />
      <ToggleSwitch
        on={adventure}
        onToggle={() => setAdventure(!adventure)}
        label="Serendipity mode"
      />
    </div>
  );
}
