"use client";

import { useId, useState } from "react";

export type SignupStatus = "idle" | "sending" | "sent" | "error";

/**
 * Headless signup state. Each iteration renders its own markup so the five
 * forms share behaviour and validation without sharing an aesthetic.
 */
export function useSignup() {
  const inputId = useId();
  const messageId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SignupStatus>("idle");
  const [error, setError] = useState("");

  function onChange(value: string) {
    setEmail(value);
    if (status === "error") {
      setStatus("idle");
      setError("");
    }
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!/^[^@\s]+@[^@\s.]+\.[^@\s]+$/.test(email)) {
      setStatus("error");
      setError("That address is missing something. Check it and try again.");
      return;
    }
    setStatus("sending");
    setError("");
    // Stands in for the real endpoint.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("sent");
  }

  return {
    inputId,
    messageId,
    email,
    status,
    error,
    onChange,
    onSubmit,
    isError: status === "error",
    isSending: status === "sending",
    isSent: status === "sent",
  };
}
