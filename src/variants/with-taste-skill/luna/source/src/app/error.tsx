"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="app-error">
      <p className="eyebrow">SOMETHING GOT IN THE WAY</p>
      <h1>The notes are still here.</h1>
      <p>Try the page again and we will pick up where we left off.</p>
      <button type="button" className="button button-primary" onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}
