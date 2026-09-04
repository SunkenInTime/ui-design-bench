"use client";
import { useState } from "react";
import {
  Header,
  Footer,
  FAQ,
  Icon,
  StartButton,
  DoodleFlower,
  FeatureLine,
  useNotebook,
} from "./shared";
import { ThoughtPreview } from "./garden";

export function ElectricPage() {
  const [active, setActive] = useState("Ideas");
  const { openNotebook } = useNotebook();
  return (
    <div className="landing electric">
      <Header variant="electric" />
      <main>
        <section className="electric-hero">
          <div className="electric-hero-copy">
            <div className="electric-hello">
              <span /> A second brain. A fresh start.
            </div>
            <h1>
              Big ideas.
              <br /> Small notes.
              <br /> All yours.
            </h1>
            <p>
              Get it out of your head and into Morrow.
              <br /> One bright place for everything you think,
              <br className="desktop-break" /> find, love, and come back to.
            </p>
            <div className="hero-actions">
              <StartButton>
                Let’s make room <Icon name="plus" size={20} />
              </StartButton>
              <a className="electric-demo-link" href="#how-it-works">
                <span>▶</span> Look around
              </a>
            </div>
            <p className="electric-fine-print">
              No account. No setup. Just start thinking.
            </p>
          </div>
          <div className="electric-stage">
            <div className="electric-big-star" aria-hidden="true">
              ✳
            </div>
            <div className="electric-preview-wrap">
              <ThoughtPreview electric />
            </div>
            <button
              className="electric-sticky"
              onClick={() => openNotebook("project")}
            >
              <span className="sticky-pin" />
              <span>
                What if we
                <br /> actually made
                <br /> that thing?
              </span>
              <span className="electric-sticky-footer">
                An idea worth keeping <Icon name="diagonal" size={18} />
              </span>
            </button>
            <div className="electric-caption">
              <svg
                width="67"
                height="40"
                viewBox="0 0 67 40"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 34C40 39 55 14 48 4m-9 7 10-8 11 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>{" "}
              A home for your many, many tabs.
            </div>
          </div>
        </section>
        <div className="electric-marquee">
          <span>Less mental juggling.</span>
          <DoodleFlower />
          <span>More “I’ve got an idea.”</span>
          <DoodleFlower />
          <span>Room for all of it.</span>
        </div>
        <section className="electric-workflow" id="how-it-works">
          <div className="electric-section-heading">
            <h2>
              Your brain has range.
              <br /> Your notes should, too.
            </h2>
            <p>
              From a two-word spark to your next big thing.
              <br /> Keep the whole messy, wonderful process together.
            </p>
          </div>
          <div className="electric-feature-grid">
            <div className="electric-capture">
              <div
                className="electric-tab-bar"
                role="tablist"
                aria-label="Types of things to collect"
              >
                {["Ideas", "Reading", "Projects"].map((tab) => (
                  <button
                    key={tab}
                    role="tab"
                    aria-selected={active === tab}
                    onClick={() => setActive(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <button
                className="electric-example-note"
                onClick={() =>
                  openNotebook(
                    active === "Reading"
                      ? "book"
                      : active === "Projects"
                        ? "project"
                        : "garden",
                  )
                }
              >
                <Icon
                  name={active === "Reading" ? "book" : "sparkle"}
                  size={30}
                />
                <h3>
                  {active === "Ideas"
                    ? "What if creative work is more like gardening?"
                    : active === "Reading"
                      ? "A sentence I want to live by."
                      : "A small magazine. A very big maybe."}
                </h3>
                <p>
                  {active === "Ideas"
                    ? "Plant something. Give it time. See what grows."
                    : active === "Reading"
                      ? "Pay attention. Be astonished. Tell about it."
                      : "Stories from people who notice the little things."}
                </p>
                <span>
                  Click to open this thought <Icon name="diagonal" size={17} />
                </span>
              </button>
              <h3>Catch it while it’s fresh.</h3>
              <p>
                Give every passing thought a place to land.
                <br /> You can make sense of it later.
              </p>
            </div>
            <div className="electric-connect">
              <div className="electric-link-demo">
                <span className="electric-bubble bubble-a">
                  <Icon name="book" /> A line from a book
                </span>
                <span className="electric-bubble bubble-b">
                  <Icon name="note" /> A thought on a walk
                </span>
                <svg viewBox="0 0 460 235" fill="none" aria-hidden="true">
                  <path
                    d="M103 66C103 145 214 125 230 192M357 73C357 156 247 120 230 192"
                    stroke="#6E79C5"
                    strokeWidth="2"
                    strokeDasharray="5 5"
                  />
                </svg>
                <span className="electric-bubble bubble-c">
                  <Icon name="sparkle" /> Your next good idea
                </span>
              </div>
              <h3>There’s a connection in there.</h3>
              <p>
                Bring your references and rough ideas together.
                <br /> See something you couldn’t see before.
              </p>
            </div>
          </div>
        </section>
        <section className="electric-manifesto" id="made-for-you">
          <DoodleFlower />
          <h2>
            For people with
            <br /> more curiosity
            <br /> than open tabs.
          </h2>
          <div>
            <p>
              The late-night researchers. The chronic screenshotters. The people
              with a notebook for their notebooks.
            </p>
            <p>We made room for you.</p>
            <StartButton>
              Find your space <Icon name="plus" size={18} />
            </StartButton>
          </div>
        </section>
        <div className="electric-benefits">
          <FeatureLine icon="note" title="A fresh page, always">
            No perfect system required.
          </FeatureLine>
          <FeatureLine icon="search" title="Find that one thing">
            Search your thoughts in a moment.
          </FeatureLine>
          <FeatureLine icon="lock" title="Your own corner">
            Your words, on your device.
          </FeatureLine>
        </div>
        <FAQ variant="electric" />
      </main>
      <Footer line="Good things start with a little thought." />
    </div>
  );
}
