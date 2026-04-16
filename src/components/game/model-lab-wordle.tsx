"use client";

import clsx from "clsx";
import Image from "next/image";
import { useMemo, useState } from "react";
import { LAB_OPTIONS, getModelLab, type LabSlug } from "@/lib/model-labs";
import { galleryManifest } from "@/lib/gallery-manifest";

type Round = {
  id: string;
  imagePath: string;
  answer: LabSlug;
  answerLabel: string;
  modelLabel: string;
  attempts: LabSlug[];
  solved: boolean;
};

const TOTAL_ROUNDS = 6;
const MAX_GUESSES = 3;

function shuffle<T>(items: readonly T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function createRounds(): Round[] {
  const pool = galleryManifest.flatMap((entry) =>
    entry.iterations.map((iteration) => {
      const lab = getModelLab(entry.model);
      return {
        id: `${entry.group}-${entry.model}-${iteration.id}`,
        imagePath: iteration.thumbnailPath,
        answer: lab.slug,
        answerLabel: lab.label,
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

export function ModelLabWordle() {
  const [rounds, setRounds] = useState<Round[]>(() => createRounds());
  const [currentRound, setCurrentRound] = useState(0);

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

  function submitGuess(guess: LabSlug) {
    if (!activeRound || gameOver) return;
    if (activeRound.attempts.length >= MAX_GUESSES || activeRound.solved) return;

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

    const updatedRound = updatedRounds[currentRound];
    if (updatedRound.solved || updatedRound.attempts.length >= MAX_GUESSES) {
      setCurrentRound((prev) => prev + 1);
    }
  }

  function resetGame() {
    setRounds(createRounds());
    setCurrentRound(0);
  }

  return (
    <main className="mx-auto max-w-5xl px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
          Guess the AI Lab
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
          You get six random gallery iterations. Guess the generating AI lab in up to three tries per
          round.
        </p>
      </header>

      {!gameOver && activeRound ? (
        <section className="mt-10 space-y-6">
          <div className="flex items-center justify-between text-sm text-neutral-500">
            <p>
              Round <span className="font-medium text-neutral-800">{currentRound + 1}</span> of {TOTAL_ROUNDS}
            </p>
            <p>{MAX_GUESSES - activeRound.attempts.length} guesses left</p>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
            <Image
              src={activeRound.imagePath}
              alt={`Unknown model iteration, round ${currentRound + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 64rem) 100vw, 64rem"
              priority
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {LAB_OPTIONS.map((lab) => {
              const alreadyChosen = activeRound.attempts.includes(lab.slug);
              return (
                <button
                  type="button"
                  key={lab.slug}
                  onClick={() => submitGuess(lab.slug)}
                  disabled={alreadyChosen}
                  className={clsx(
                    "rounded-lg border px-4 py-3 text-left text-sm font-medium transition",
                    alreadyChosen
                      ? "cursor-not-allowed border-neutral-200 bg-neutral-100 text-neutral-400"
                      : "border-neutral-300 bg-white text-neutral-800 hover:border-neutral-400 hover:bg-neutral-50",
                  )}
                >
                  {lab.label}
                </button>
              );
            })}
          </div>

          <div className="space-y-2 rounded-xl border border-neutral-200 bg-white p-4">
            <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">Round guesses</p>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: MAX_GUESSES }).map((_, idx) => {
                const guess = activeRound.attempts[idx];
                const isCorrect = guess && guess === activeRound.answer;
                return (
                  <div
                    key={idx}
                    className={clsx(
                      "min-w-24 rounded-md border px-3 py-2 text-sm",
                      !guess && "border-dashed border-neutral-200 text-neutral-300",
                      guess && !isCorrect && "border-neutral-300 bg-neutral-100 text-neutral-600",
                      guess && isCorrect && "border-emerald-200 bg-emerald-100 text-emerald-800",
                    )}
                  >
                    {guess ? LAB_OPTIONS.find((option) => option.slug === guess)?.label : "—"}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {gameOver ? (
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
                  title={`${round.modelLabel} · ${round.answerLabel}`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">Guess distribution</p>
            {[
              "Solved in 1",
              "Solved in 2",
              "Solved in 3",
              "Missed",
            ].map((label, idx) => (
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
                  {idx + 1}. {round.modelLabel} → {round.answerLabel}
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
