import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commonplace — 04 · Buffer",
};

export default function Four() {
  return (
    <main className="d4">
      <div className="d4-status" aria-hidden="true">
        <span className="d4-tabname">commonplace.md</span>
        <span>markdown — utf-8 — spaces:2</span>
        <span className="d4-status-right">study 04 of 05</span>
      </div>

      <div className="d4-file">
        <h1 className="d4-l d4-h1">
          <span className="d4-m"># </span>your second brain is a folder of text
          files
          <span className="d4-caret" aria-hidden="true" />
        </h1>
        <p className="d4-l">&nbsp;</p>
        <p className="d4-l">
          write things down. commonplace turns the pile into a brain —
        </p>
        <p className="d4-l">
          every note linked, every thought findable, forever plain text.
        </p>
        <p className="d4-l">&nbsp;</p>
        <p className="d4-l">
          <a className="d4-cmd d4-cmd--primary" href="#rates">
            [ open your vault ]
          </a>{" "}
          <a className="d4-cmd" href="#capture">
            [ read the manual ]
          </a>
        </p>
        <p className="d4-l">&nbsp;</p>
        <h2 className="d4-l d4-h2" id="capture">
          <span className="d4-m">## </span>capture
        </h2>
        <p className="d4-l">
          <span className="d4-m">- </span>quick-add from phone, browser, watch,
          cli
        </p>
        <p className="d4-l">
          <span className="d4-m">- </span>lands in today&rsquo;s note. filing can
          wait.
        </p>
        <p className="d4-l">&nbsp;</p>
        <h2 className="d4-l d4-h2">
          <span className="d4-m">## </span>link
        </h2>
        <p className="d4-l">
          <span className="d4-m">- </span>write{" "}
          <Link className="d4-wiki" href="/four">
            [[tea ceremony]]
          </Link>{" "}
          mid-sentence and it links itself
        </p>
        <p className="d4-l">
          <span className="d4-m">- </span>unlinked mentions get counted anyway —
        </p>
        <p className="d4-l">&quot;tea&quot; finds them all</p>
        <p className="d4-l">&nbsp;</p>
        <h2 className="d4-l d4-h2">
          <span className="d4-m">## </span>keep
        </h2>
        <p className="d4-l">
          <span className="d4-m">- </span>everything lives in ~/commonplace as
          .md files
        </p>
        <p className="d4-l">
          <span className="d4-m">- </span>sync is end-to-end encrypted; export is
        </p>
        <p className="d4-l">a copy command</p>
        <p className="d4-l">
          <span className="d4-m">- </span>no lock-in. no export fee. no ransom.
        </p>
        <p className="d4-l">&nbsp;</p>
        <h2 className="d4-l d4-h2" id="rates">
          <span className="d4-m">## </span>rates
        </h2>
        <p className="d4-l d4-ascii">+----------+-------+-------------------------------+</p>
        <p className="d4-l d4-ascii">| plan     | $/mo  | what you get                  |</p>
        <p className="d4-l d4-ascii">+----------+-------+-------------------------------+</p>
        <p className="d4-l d4-ascii">| reader   | 0     | 1,000 notes, one device       |</p>
        <p className="d4-l d4-ascii">| keeper   | 8     | unlimited, e2e sync, resurface|</p>
        <p className="d4-l d4-ascii">| archive  | 16    | shared vaults, printed index  |</p>
        <p className="d4-l d4-ascii">+----------+-------+-------------------------------+</p>
        <p className="d4-l">&nbsp;</p>
        <h2 className="d4-l d4-h2">
          <span className="d4-m">## </span>start
        </h2>
        <p className="d4-l">
          <Link className="d4-cmd d4-cmd--primary" href="/four">
            [ open your vault ]
          </Link>{" "}
          <span className="d4-dim">free for a thousand notes</span>
        </p>
        <p className="d4-l">&nbsp;</p>
        <p className="d4-l d4-dim">-- end of file --</p>
        <p className="d4-l d4-prompt">
          ~/commonplace $<span className="d4-caret" aria-hidden="true" />
        </p>
      </div>
    </main>
  );
}
