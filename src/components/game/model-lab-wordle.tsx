"use client";

import clsx from "clsx";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { galleryManifest } from "@/lib/gallery-manifest";
import { buildPreviewHref, buildVariantHref } from "@/lib/gallery-paths";
import { type LabSlug, getModelLab } from "@/lib/model-labs";

type Round = {
  id: string;
  previewHref: string;
  liveHref: string;
  answer: LabSlug;
  answerLabel: string;
  modelLabel: string;
  attempts: LabSlug[];
  solved: boolean;
};

type GuessTone = "yes" | "no" | "maybe" | "idle";

type GuessOption = {
  slug: LabSlug;
  label: string;
  logoPath: string;
};

const TOTAL_ROUNDS = 6;
const MAX_GUESSES = 3;
const ROUND_ADVANCE_DELAY_MS = 950;

const pickerTriggerClass =
  "flex w-full min-w-0 cursor-pointer items-center gap-2 rounded-lg border border-[var(--gallery-border)] bg-white/85 px-3 py-2.5 text-left text-sm font-medium text-neutral-900 shadow-[0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-[12px] transition outline-none hover:border-neutral-300 hover:bg-white focus-visible:border-[var(--gallery-accent)] focus-visible:ring-1 focus-visible:ring-[var(--gallery-accent)]";

const pickerListClass =
  "absolute inset-x-0 bottom-[calc(100%+0.25rem)] z-20 flex max-h-60 flex-col gap-1.5 overflow-auto rounded-lg border border-[var(--gallery-border)] bg-[var(--gallery-body-bg)] p-2";

const pickerOptionClass = (selected: boolean) =>
  clsx(
    "flex w-full cursor-pointer items-center gap-2.5 rounded-md px-3 py-2.5 text-left text-sm transition-colors duration-150",
    selected
      ? "bg-[var(--gallery-accent)]/12 text-neutral-900 hover:bg-[var(--gallery-accent)]/20"
      : "bg-white text-neutral-800 hover:bg-[var(--gallery-accent)]/10 hover:text-neutral-950",
  );

const pickerWidthClass = "w-[min(18rem,calc(100vw-3rem))]";

const GUESS_OPTIONS: GuessOption[] = [
  { slug: "gpt", label: "GPT", logoPath: "/openai-gpt.svg" },
  { slug: "anthropic", label: "Claude", logoPath: "/anthropic-claude.webp" },
  { slug: "google", label: "Gemini", logoPath: "/google-gemini.webp" },
  { slug: "moonshot", label: "Kimi", logoPath: "/kimi-k2.webp" },
  { slug: "z-ai", label: "GLM", logoPath: "/glm.webp" },
  { slug: "cursor", label: "Composer", logoPath: "/cursor-composer.webp" },
] as const;

function shuffle<T>(items: readonly T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getGuessOption(lab: LabSlug | null | undefined): GuessOption | undefined {
  return lab ? GUESS_OPTIONS.find((option) => option.slug === lab) : undefined;
}

function getGuessLabel(lab: LabSlug | null | undefined): string {
  return getGuessOption(lab)?.label ?? "";
}

function createRounds(): Round[] {
  const pool = galleryManifest.flatMap((entry) =>
    entry.iterations.map((iteration) => {
      const lab = getModelLab(entry.model);
      return {
        id: `${entry.group}-${entry.model}-${iteration.id}`,
        previewHref: buildPreviewHref(entry.group, entry.model, iteration.id),
        liveHref: buildVariantHref(entry.group, entry.model, iteration.id),
        answer: lab.slug,
        answerLabel: getGuessLabel(lab.slug),
        modelLabel: entry.modelLabel,
      };
    }),
  );

  return shuffle(pool)
    .slice(0, TOTAL_ROUNDS)
    .map((round) => ({ ...round, attempts: [], solved: false }));
}

function getRoundStatus(round: Round): "correct" | "wrong" | "active" {
  if (round.solved) return "correct";
  if (round.attempts.length >= MAX_GUESSES) return "wrong";
  return "active";
}

function getGuessTone(round: Round, lab: LabSlug, selectedGuess: LabSlug | null): GuessTone {
  if (round.attempts.includes(lab)) {
    return lab === round.answer ? "yes" : "no";
  }

  if (selectedGuess === lab) {
    return "maybe";
  }

  return "idle";
}

export function ModelLabWordle() {
  const [rounds, setRounds] = useState<Round[]>([]);
  const [currentRound, setCurrentRound] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedGuess, setSelectedGuess] = useState<LabSlug | null>(null);
  const [isAdvancing, setIsAdvancing] = useState(false);
  const advanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const activeRound = rounds[currentRound];
  const gameOver = currentRound >= rounds.length;

  const correctCount = useMemo(() => rounds.filter((round) => round.solved).length, [rounds]);

  const attemptsUsed = useMemo(
    () => rounds.reduce((total, round) => total + round.attempts.length, 0),
    [rounds],
  );

  const distribution = useMemo(() => {
    const buckets = [0, 0, 0, 0];
    rounds.forEach((round) => {
      if (!round.solved) {
        buckets[3] += 1;
        return;
      }
      const idx = Math.max(0, Math.min(2, round.attempts.length - 1));
      buckets[idx] += 1;
    });
    return buckets;
  }, [rounds]);

  const selectedOption = getGuessOption(selectedGuess);

  const guessButtonLabel = (() => {
    if (isAdvancing && activeRound?.solved) return "Correct";
    if (isAdvancing) return "Locked In";
    return "Make a Guess";
  })();

  const guessButtonTone: GuessTone =
    isAdvancing && activeRound?.solved
      ? "yes"
      : isAdvancing
        ? "no"
        : selectedGuess
          ? "maybe"
          : "idle";

  useEffect(() => {
    const initTimer = setTimeout(() => {
      setRounds(createRounds());
    }, 0);

    return () => {
      clearTimeout(initTimer);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (advanceTimerRef.current !== null) {
        clearTimeout(advanceTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!dropdownOpen) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      if (dropdownRef.current?.contains(event.target as Node)) {
        return;
      }

      setDropdownOpen(false);
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [dropdownOpen]);

  function queueNextRound() {
    if (advanceTimerRef.current !== null) {
      clearTimeout(advanceTimerRef.current);
    }

    setIsAdvancing(true);
    advanceTimerRef.current = setTimeout(() => {
      setCurrentRound((prev) => prev + 1);
      setDropdownOpen(false);
      setSelectedGuess(null);
      setIsAdvancing(false);
      advanceTimerRef.current = null;
    }, ROUND_ADVANCE_DELAY_MS);
  }

  function submitGuess() {
    if (!activeRound || gameOver || isAdvancing || !selectedGuess) return;
    if (activeRound.attempts.length >= MAX_GUESSES || activeRound.solved) return;

    const guess = selectedGuess;
    const updatedRounds = rounds.map((round, index) => {
      if (index !== currentRound) return round;
      const attempts = [...round.attempts, guess];
      return {
        ...round,
        attempts,
        solved: guess === round.answer,
      };
    });

    setRounds(updatedRounds);
    setSelectedGuess(null);
    setDropdownOpen(false);

    const updatedRound = updatedRounds[currentRound];
    if (updatedRound.solved || updatedRound.attempts.length >= MAX_GUESSES) {
      queueNextRound();
    }
  }

  function resetGame() {
    if (advanceTimerRef.current !== null) {
      clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = null;
    }

    setRounds(createRounds());
    setCurrentRound(0);
    setDropdownOpen(false);
    setSelectedGuess(null);
    setIsAdvancing(false);
  }

  return (
    <main className="mx-auto w-full max-w-[1400px] px-5 pb-8 pt-16 sm:px-8 sm:pb-10 sm:pt-20">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
          Guess the AI Lab
        </h1>
      </header>

      {rounds.length === 0 ? (
        <section className="mt-10 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
          <div className="h-[calc(100dvh-11rem)] min-h-[640px] animate-pulse bg-neutral-100 sm:h-[calc(100dvh-13rem)]" />
        </section>
      ) : null}

      {!gameOver && activeRound ? (
        <section className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
            <div className="relative">
              <iframe
                key={activeRound.id}
                title={`Unknown model iteration, round ${currentRound + 1}`}
                src={activeRound.previewHref}
                className="block h-[calc(100dvh-11rem)] min-h-[640px] w-full bg-white sm:h-[calc(100dvh-13rem)]"
              />

              <div className="pointer-events-auto absolute top-4 right-4 z-20 rounded-xl border border-neutral-200 bg-white/92 px-3 py-3 shadow-[0_16px_36px_rgba(0,0,0,0.12)] backdrop-blur-md sm:top-6 sm:right-6">
                <div className="flex gap-2">
                  {Array.from({ length: MAX_GUESSES }).map((_, idx) => {
                    const used = idx < activeRound.attempts.length;
                    const solvedOnThisGuess =
                      activeRound.solved && idx === activeRound.attempts.length - 1;

                    return (
                      <span
                        key={idx}
                        className={clsx(
                          "size-2.5 rounded-full border",
                          !used && "border-neutral-300 bg-white",
                          used && !solvedOnThisGuess && "border-rose-400 bg-rose-400",
                          solvedOnThisGuess && "border-emerald-500 bg-emerald-500",
                        )}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 px-4 pb-4 pt-24 sm:px-6 sm:pb-6">
                <div className="relative flex w-full items-end justify-center">
                  <div
                    className={clsx("pointer-events-auto relative", pickerWidthClass)}
                    ref={dropdownRef}
                  >
                    <button
                      type="button"
                      onClick={() => setDropdownOpen((open) => !open)}
                      disabled={isAdvancing}
                      className={clsx(
                        pickerTriggerClass,
                        "w-full",
                        isAdvancing && "cursor-default opacity-80",
                      )}
                    >
                      <span className="flex items-center gap-3">
                        {selectedOption ? (
                          <Image
                            src={selectedOption.logoPath}
                            alt=""
                            width={18}
                            height={18}
                            className="size-[18px] rounded-sm object-contain"
                          />
                        ) : (
                          <span className="size-[18px] rounded-sm border border-dashed border-neutral-300 bg-neutral-50" />
                        )}
                        <span>{selectedOption?.label ?? "Choose a model family"}</span>
                      </span>
                      <ChevronDown
                        className={clsx(
                          "ml-auto size-4 shrink-0 text-neutral-400 transition-transform",
                          dropdownOpen && "rotate-180",
                        )}
                        aria-hidden
                      />
                    </button>

                    {dropdownOpen ? (
                      <div className={pickerListClass}>
                        {GUESS_OPTIONS.map((option) => {
                          const alreadyGuessed = activeRound.attempts.includes(option.slug);
                          const tone = getGuessTone(activeRound, option.slug, selectedGuess);

                          return (
                            <button
                              type="button"
                              key={option.slug}
                              onClick={() => {
                                if (!alreadyGuessed && !isAdvancing) {
                                  setSelectedGuess(option.slug);
                                  setDropdownOpen(false);
                                }
                              }}
                              disabled={alreadyGuessed || isAdvancing}
                              className={clsx(
                                pickerOptionClass(tone === "maybe"),
                                alreadyGuessed || isAdvancing
                                  ? "cursor-not-allowed opacity-60"
                                  : "",
                                tone === "yes" && "bg-emerald-100 text-neutral-900 hover:bg-emerald-200",
                                tone === "no" && "bg-rose-50 text-neutral-700 hover:bg-rose-100",
                              )}
                            >
                              <span className="flex min-w-0 flex-1 items-center gap-3">
                                <Image
                                  src={option.logoPath}
                                  alt=""
                                  width={18}
                                  height={18}
                                  className="size-[18px] rounded-sm object-contain"
                                />
                                <span className="truncate font-medium">{option.label}</span>
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>

                </div>

                <button
                  type="button"
                  onClick={submitGuess}
                  disabled={!selectedGuess || isAdvancing}
                  className={clsx(
                    "pointer-events-auto absolute bottom-4 right-4 inline-flex min-w-36 items-center justify-center rounded-xl border px-4 py-3 text-sm font-semibold shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition sm:bottom-6 sm:right-6",
                    guessButtonTone === "yes" &&
                      "border-emerald-500 bg-emerald-500 text-white",
                    guessButtonTone === "no" &&
                      "border-rose-500 bg-rose-500 text-white",
                    guessButtonTone === "maybe" &&
                      "border-amber-400 bg-amber-400 text-amber-950 hover:bg-amber-300",
                    guessButtonTone === "idle" &&
                      "border-neutral-900 bg-neutral-900 text-white",
                    (!selectedGuess || isAdvancing) && "cursor-not-allowed opacity-70",
                  )}
                >
                  {guessButtonLabel}
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {rounds.length > 0 && gameOver ? (
        <section className="mt-10 space-y-6 rounded-2xl border border-neutral-200 bg-white p-6">
          <div>
            <h2 className="text-2xl font-medium tracking-tight text-neutral-900">Results</h2>
            <p className="mt-2 text-sm text-neutral-600">
              You got <span className="font-medium text-neutral-900">{correctCount}</span> / {TOTAL_ROUNDS}
              correct in {attemptsUsed} total guesses.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium tracking-wide text-neutral-500 uppercase">
              Wordle-style board
            </p>
            <div className="flex flex-wrap gap-2">
              {rounds.map((round) => (
                <div
                  key={round.id}
                  className={clsx(
                    "size-8 rounded-sm border",
                    getRoundStatus(round) === "correct" && "border-emerald-300 bg-emerald-500",
                    getRoundStatus(round) === "wrong" && "border-neutral-300 bg-neutral-700",
                    getRoundStatus(round) === "active" && "border-neutral-300 bg-neutral-200",
                  )}
                  title={`${round.modelLabel} - ${round.answerLabel}`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">Guess distribution</p>
            {["Solved in 1", "Solved in 2", "Solved in 3", "Missed"].map((label, idx) => (
              <div key={label} className="flex items-center gap-3 text-sm">
                <span className="w-24 shrink-0 text-neutral-600">{label}</span>
                <div className="h-6 flex-1 overflow-hidden rounded bg-neutral-100">
                  <div
                    className="h-full bg-neutral-800"
                    style={{ width: `${(distribution[idx] / TOTAL_ROUNDS) * 100}%` }}
                  />
                </div>
                <span className="w-5 text-right tabular-nums text-neutral-700">{distribution[idx]}</span>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-600">
            <p className="font-medium text-neutral-800">Answers</p>
            <ul className="mt-2 space-y-1">
              {rounds.map((round, idx) => (
                <li key={round.id}>
                  {idx + 1}. {round.modelLabel} {"->"} {round.answerLabel}
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            onClick={resetGame}
            className="inline-flex rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-50"
          >
            Play again
          </button>
        </section>
      ) : null}
    </main>
  );
}
