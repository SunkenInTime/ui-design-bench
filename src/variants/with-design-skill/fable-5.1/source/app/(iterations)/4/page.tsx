import type { Metadata } from "next";
import { Newsreader, Barlow_Semi_Condensed, Barlow } from "next/font/google";
import styles from "./page.module.css";
import { PalacePlan } from "./palace-plan";
import { ROOMS } from "./rooms";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const draft = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-draft",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loam — Give every idea a room",
};

const WALK = [...ROOMS].sort((a, b) => a.num.localeCompare(b.num));

const REVISIONS = [
  ["A", "2026.03", "Plain-text Markdown on disk. Works without an account."],
  ["B", "2026.06", "Semantic search, indexed on-device. Nothing leaves the house."],
  ["C", "2026.08", "iPhone: same house, smaller door."],
  ["∞", "—", "Yours to renovate. They're your files."],
];

export default function BlueprintPage() {
  return (
    <div
      className={`${newsreader.variable} ${draft.variable} ${barlow.variable} ${styles.page}`}
    >
      <div className={styles.frame}>
        <header className={styles.nav}>
          <a href="#" className={styles.wordmark}>
            Loam
          </a>
          <nav className={styles.navLinks} aria-label="Primary">
            <a href="#walk">The rooms</a>
            <a href="#revisions">Features</a>
            <a href="#">Pricing</a>
            <a href="#" className={styles.navBtn}>
              Sign in
            </a>
          </nav>
        </header>

        <main>
          <section className={styles.hero}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Sheet A-101 · Ground floor</p>
              <h1 className={styles.h1}>
                Give every idea <em>a room.</em>
              </h1>
              <p className={styles.lede}>
                The oldest memory technique on record is to imagine a building
                and put your thoughts in it. Loam draws the plans: an inbox
                that&apos;s a vestibule, a library for what you&apos;ve read, a
                study where you write, a gallery for what&apos;s finished.
                Walk in with a question.
              </p>
              <div className={styles.ctas}>
                <a href="#" className={styles.primary}>
                  Start building — free
                </a>
                <a href="#walk" className={styles.secondary}>
                  Tour the rooms ↓
                </a>
              </div>

              <table className={styles.titleBlock}>
                <caption className={styles.srOnly}>Drawing title block</caption>
                <tbody>
                  <tr>
                    <th scope="row">Project</th>
                    <td>A second brain</td>
                    <th scope="row">Sheet</th>
                    <td>A-101</td>
                  </tr>
                  <tr>
                    <th scope="row">Client</th>
                    <td>You</td>
                    <th scope="row">Scale</th>
                    <td>1 : 1</td>
                  </tr>
                  <tr>
                    <th scope="row">Drawn by</th>
                    <td>Loam</td>
                    <th scope="row">Rev</th>
                    <td className={styles.pencil}>∞</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.heroPlan}>
              <PalacePlan />
            </div>
          </section>

          <section id="walk" className={styles.walk}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>The walk</p>
              <h2 className={styles.h2}>
                Six rooms, in the order <em>you&apos;d walk them.</em>
              </h2>
              <p className={styles.sectionLede}>
                The method of loci works because a route is easier to remember
                than a list. So the rooms are numbered the way you&apos;d move
                through a day: in the front door, past what you&apos;ve read, to
                the desk.
              </p>
            </div>
            <ol className={styles.rooms}>
              {WALK.map((r) => (
                <li key={r.id} className={styles.room}>
                  <span className={styles.roomNum}>{r.num}</span>
                  <div>
                    <h3 className={styles.roomName}>
                      {r.name} <span className={styles.roomConcept}>{r.concept}</span>
                    </h3>
                    <p className={styles.roomBody}>{r.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className={styles.detail}>
            <figure className={styles.detailFig}>
              <svg viewBox="0 0 320 320" className={styles.detailSvg} aria-hidden="true">
                <circle cx="160" cy="160" r="150" className={styles.detailCircle} />
                <path d="M 20 170 L 120 170 M 200 170 L 300 170" className={styles.detailWall} />
                <path d="M 120 170 L 120 90" className={styles.detailLeaf} />
                <path d="M 200 170 A 80 80 0 0 0 120 90" className={styles.detailSwing} />
                <path d="M 200 170 L 200 250" className={styles.detailLeaf} />
                <path d="M 120 170 A 80 80 0 0 0 200 250" className={styles.detailSwing} />
                <path d="M 160 40 L 160 300" className={styles.detailAxis} />
                <path d="M 160 40 l -6 12 h 12 Z M 160 300 l -6 -12 h 12 Z" className={styles.detailArrow} />
              </svg>
              <figcaption className={styles.detailCap}>
                Detail 1 · Door, typical · Scale 1 : 5
              </figcaption>
            </figure>
            <div className={styles.detailCopy}>
              <p className={styles.eyebrow}>Detail 1</p>
              <h2 className={styles.h2}>
                Every door <em>swings both ways.</em>
              </h2>
              <p className={styles.body}>
                Link a note to another and the second note knows about the
                first. In most apps that&apos;s a feature called backlinks. Here
                it&apos;s just how doors work: you can&apos;t build a room you
                can&apos;t get back out of.
              </p>
              <p className={styles.body}>
                While you write in the study, Loam opens the doors for you and
                brings in whatever the library and gallery hold on the subject.
              </p>
            </div>
          </section>

          <section id="revisions" className={styles.revisions}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>Revisions</p>
              <h2 className={styles.h2}>
                Marked up <em>in red pencil.</em>
              </h2>
            </div>
            <table className={styles.revTable}>
              <thead>
                <tr>
                  <th>Rev</th>
                  <th>Date</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {REVISIONS.map(([rev, date, desc]) => (
                  <tr key={rev}>
                    <td className={styles.pencil}>{rev}</td>
                    <td className={styles.revDate}>{date}</td>
                    <td>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className={styles.cta}>
            <h2 className={styles.ctaH}>
              The plans are drawn. <em>Move in.</em>
            </h2>
            <a href="#" className={styles.primary}>
              Start building — free
            </a>
          </section>
        </main>

        <footer className={styles.footer}>
          <span>Loam · Sheet A-101 · Rev ∞</span>
          <span>Privacy · Status · © 2026</span>
        </footer>
      </div>
    </div>
  );
}
