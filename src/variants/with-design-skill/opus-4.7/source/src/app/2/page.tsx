"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "./memex.css";

export default function MemexPage() {
  const [tick, setTick] = useState(0);
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setBooted(true), 1500);
    const i = setInterval(() => setTick((t) => t + 1), 1000);
    return () => {
      clearTimeout(t);
      clearInterval(i);
    };
  }, []);

  const now = new Date();
  const stamp = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, "0")}.${String(
    now.getDate()
  ).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(
    now.getMinutes()
  ).padStart(2, "0")}`;

  return (
    <main className="memex">
      <div className="memex-scanlines" aria-hidden />
      <div className="memex-crt-vignette" aria-hidden />
      <div className="memex-flicker" aria-hidden />

      <div className="memex-frame">
        <header className="memex-topbar">
          <div className="memex-topbar-left">
            <span className="memex-bracket">[</span>
            <span className="memex-brand">//MEMEX</span>
            <span className="memex-bracket">]</span>
            <span className="memex-dim"> v0.9.3-beta · an associative note system</span>
          </div>
          <div className="memex-topbar-right">
            <span className="memex-dim">sess:</span>
            <span>0x4E2F</span>
            <span className="memex-dim">·</span>
            <span>{stamp}</span>
            <span className={`memex-dot ${tick % 2 === 0 ? "on" : "off"}`} aria-hidden />
          </div>
        </header>

        <section className="memex-hero">
          <pre className="memex-ascii" aria-hidden>{`
    ┌─────────────────────────────┐
    │   ┌───┐       ┌───┐         │
    │   │ N │◄──────┤ N │◄────┐   │
    │   └─┬─┘       └─┬─┘     │   │
    │     │           │       │   │
    │     ▼           ▼       │   │
    │   ┌───┐       ┌───┐     │   │
    │   │ N ├──────►│ N ├─────┘   │
    │   └───┘       └─┬─┘         │
    │                 │  ASSOC.   │
    │                 ▼  TRAILS   │
    │               ┌───┐         │
    │               │ ● │         │
    │               └───┘         │
    └─────────────────────────────┘`}</pre>

          <div className="memex-hero-body">
            <div className="memex-prompt-line">
              <span className="memex-glyph">$</span>
              <span className="memex-type">cat ./manifesto.txt</span>
            </div>

            <h1 className="memex-h1">
              THINK IN
              <br />
              <span className="memex-glow">ASSOCIATIONS.</span>
            </h1>

            <p className="memex-p">
              &gt; MEMEX is a terminal-native second brain. Notes are nodes. Links
              are typed edges. Every thought you have is one keystroke away from
              every other thought you&apos;ve ever had.
            </p>

            <p className="memex-p memex-dim">
              &gt; Named for Vannevar Bush&apos;s 1945 device &mdash; a desk that
              remembers by analogy. Forty years of commonplace books crammed into
              the space between two keystrokes.
            </p>

            <div className="memex-cta-row">
              <Link href="#install" className="memex-btn memex-btn-primary">
                <span>$</span> curl -L memex.sh | sh
                <span className="memex-btn-cursor">_</span>
              </Link>
              <Link href="#docs" className="memex-btn memex-btn-ghost">
                &gt; read the docs
              </Link>
            </div>

            <div className="memex-hero-meta">
              <span>[ ZERO CLOUD · OFFLINE-FIRST · TUI + GUI ]</span>
            </div>
          </div>
        </section>

        {/* Boot log */}
        <section className="memex-boot">
          <div className="memex-section-head">
            <span className="memex-section-tag">::/log/boot.d</span>
            <div className="memex-section-rule" />
          </div>
          <div className="memex-log">
            {BOOT_LINES.map((line, i) => (
              <div
                key={i}
                className="memex-log-line"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="memex-log-ts">{line.ts}</span>
                <span className={`memex-log-tag memex-tag-${line.level}`}>
                  [{line.level.toUpperCase()}]
                </span>
                <span>{line.msg}</span>
              </div>
            ))}
            <div className="memex-log-line">
              <span className="memex-log-ts">[+001.52]</span>
              <span className="memex-log-tag memex-tag-ok">[OK]</span>
              <span>
                ready.{" "}
                <span className={`memex-cursor ${booted ? "done" : ""}`}>
                  {booted ? "█" : "▒"}
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* Module grid */}
        <section className="memex-modules">
          <div className="memex-section-head">
            <span className="memex-section-tag">::/modules</span>
            <div className="memex-section-rule" />
            <span className="memex-section-meta">06 LOADED</span>
          </div>

          <div className="memex-mod-grid">
            {MODULES.map((m) => (
              <div key={m.id} className="memex-mod">
                <div className="memex-mod-head">
                  <span className="memex-mod-id">M-{m.id}</span>
                  <span className="memex-mod-status" data-status={m.status}>
                    ● {m.status}
                  </span>
                </div>
                <pre className="memex-mod-art" aria-hidden>
                  {m.art}
                </pre>
                <h3 className="memex-mod-title">{m.title}</h3>
                <p className="memex-mod-body">{m.body}</p>
                <div className="memex-mod-keys">
                  <kbd>{m.key}</kbd>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Demo pane */}
        <section className="memex-demo">
          <div className="memex-section-head">
            <span className="memex-section-tag">::/session/live</span>
            <div className="memex-section-rule" />
          </div>

          <div className="memex-pane">
            <div className="memex-pane-head">
              <span>~/memex/graph/montaigne</span>
              <span className="memex-dim">237 nodes · 1,108 edges</span>
            </div>
            <div className="memex-pane-body">
              <div className="memex-pane-col">
                <div className="memex-pane-col-head">FILE</div>
                <pre className="memex-code">{`// entry/0238.mx
@ruskin @venice @craft

Reading Ruskin on Venice,
and what strikes me is his
insistence that ornament is
*labour made visible*.

The gargoyle is not a joke —
it is the mason's signature.

↳ linked: 0041 "craft"
↳ linked: 0162 "ornament"
↳ evokes: 0019 "software"`}</pre>
              </div>
              <div className="memex-pane-col">
                <div className="memex-pane-col-head">ASSOCIATIONS</div>
                <pre className="memex-code">
                  {`> link.suggest @ornament
0162 …ornament as labour made visible.
     distance: 0.12 ★★★★★
0041 …craft is what the system conceals.
     distance: 0.19 ★★★★☆
0019 …an interface that reveals its hand.
     distance: 0.24 ★★★☆☆
0091 …the mason, the monk, the maker.
     distance: 0.31 ★★★☆☆

> graph.traverse --start 0238 --depth 3
  found 14 paths in 0.004s
  visualize? [y/N] ▒`}
                </pre>
              </div>
            </div>
            <div className="memex-pane-foot">
              <span>^O save</span>
              <span>^F find</span>
              <span>^G graph</span>
              <span>^L link</span>
              <span>^? help</span>
              <span className="memex-pane-foot-end">READY</span>
            </div>
          </div>
        </section>

        {/* Install */}
        <section id="install" className="memex-install">
          <div className="memex-section-head">
            <span className="memex-section-tag">::/install</span>
            <div className="memex-section-rule" />
          </div>
          <div className="memex-install-grid">
            <pre className="memex-install-code">
              {`# one-liner, no package manager required
$ curl -L https://memex.sh | sh

# or build from source
$ git clone git://memex.sh/memex.git
$ cd memex && make install

# launch
$ memex open ~/brain
  loading vault … 4,382 nodes
  index ready in 14ms
  listening on 127.0.0.1:7070`}
            </pre>
            <div className="memex-install-copy">
              <p>
                &gt; Runs on any UNIX, macOS, WSL, and the browser.
                <br />
                &gt; Encrypts at rest with your SSH key.
                <br />
                &gt; Syncs over git, IPFS, or a USB stick.
              </p>
              <p className="memex-dim">
                &gt; FREE for personal use. $12/mo for teams.
                <br />
                &gt; No telemetry. No accounts. No AI reading your diary.
              </p>
            </div>
          </div>
        </section>

        <footer className="memex-foot">
          <span>
            <span className="memex-dim">&copy;</span> MEMEX SYSTEMS / MMXXVI
          </span>
          <span className="memex-dim">·</span>
          <span>hosted on a thinkpad under a desk in Lisbon</span>
          <span className="memex-dim">·</span>
          <span className="memex-blink">_</span>
        </footer>
      </div>
    </main>
  );
}

const BOOT_LINES = [
  { ts: "[+000.00]", level: "ok", msg: "memex kernel / cold boot initiated" },
  { ts: "[+000.12]", level: "ok", msg: "vault :: ~/brain … 4,382 nodes indexed" },
  { ts: "[+000.27]", level: "ok", msg: "edge table loaded (19,204 typed edges)" },
  { ts: "[+000.43]", level: "info", msg: "embeddings cache hit 94.2%" },
  { ts: "[+000.61]", level: "warn", msg: "untagged nodes detected: 12 → see /orphans" },
  { ts: "[+000.84]", level: "ok", msg: "daemon memexd started on :7070" },
  { ts: "[+001.17]", level: "ok", msg: "backlinks resolved · concordance built" },
  { ts: "[+001.34]", level: "info", msg: "suggest.engine armed · cosine threshold 0.32" },
];

const MODULES = [
  {
    id: "01",
    title: "GRAPH",
    body: "Every note is a node. Every link is a typed edge. Traverse by keyword, by tag, by vibe.",
    status: "ACTIVE",
    key: "ctrl-g",
    art: "◯─●─◯\n│ │\n◯─●─◯",
  },
  {
    id: "02",
    title: "VAULT",
    body: "Plain markdown on disk. Git-friendly. Outlives the tool. Your notes are YOUR notes.",
    status: "ACTIVE",
    key: "ctrl-v",
    art: "▛▀▀▀▜\n▌ ▣ ▐\n▙▄▄▄▟",
  },
  {
    id: "03",
    title: "CONCORD",
    body: "Concordance: every proper noun you've ever used, clustered, waiting for the next reference.",
    status: "ACTIVE",
    key: "ctrl-c",
    art: "A→B→C\n│   │\nZ←Y←X",
  },
  {
    id: "04",
    title: "TRAIL",
    body: "Record your train of thought as a trail. Replay it, fork it, share it, inherit one.",
    status: "ACTIVE",
    key: "ctrl-t",
    art: " ● → ●\n   ↘\n    ●→●",
  },
  {
    id: "05",
    title: "ORACLE",
    body: "Local LLM read-only mode. Asks your notes, never your data. Opt-in, offline, sandboxed.",
    status: "BETA",
    key: "ctrl-o",
    art: "╭──╮\n│??│\n╰┬─╯\n ◉",
  },
  {
    id: "06",
    title: "PRESS",
    body: "Compile a subset of the vault into a static site, a zine, or a plain .txt to email.",
    status: "ACTIVE",
    key: "ctrl-p",
    art: "▐▌▐▌▐▌\n ─────\n   ▼",
  },
];
