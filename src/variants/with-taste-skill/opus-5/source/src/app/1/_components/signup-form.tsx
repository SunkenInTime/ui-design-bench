"use client";

import {
  ArrowRightIcon,
  CheckCircleIcon,
  CircleNotchIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useSignup } from "@/variants/with-taste-skill/opus-5/source/src/components/use-signup";

export function SignupForm() {
  const form = useSignup();

  if (form.isSent) {
    return (
      <div
        aria-live="polite"
        className="flex items-start gap-3 rounded-xl border border-emerald-400/25 bg-emerald-400/8 p-5"
      >
        <CheckCircleIcon
          size={20}
          weight="fill"
          className="mt-px shrink-0 text-emerald-400"
        />
        <div>
          <p className="text-[15px] font-medium text-zinc-100">
            Download link sent to {form.email}
          </p>
          <p className="mt-1 text-[13.5px] leading-relaxed text-zinc-400">
            It works offline from the first launch. Nothing to configure.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={form.onSubmit} noValidate className="w-full max-w-md">
      <label
        htmlFor={form.inputId}
        className="block text-[13px] font-medium text-zinc-300"
      >
        Email
      </label>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
        <input
          id={form.inputId}
          type="email"
          value={form.email}
          onChange={(event) => form.onChange(event.target.value)}
          aria-describedby={form.messageId}
          aria-invalid={form.isError}
          placeholder="you@company.com"
          className={`h-11 flex-1 rounded-lg border bg-[#15151a] px-3.5 text-[15px] text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus-visible:border-emerald-400/60 focus-visible:ring-2 focus-visible:ring-emerald-400/25 ${
            form.isError ? "border-red-400/60" : "border-white/12"
          }`}
        />
        <button
          type="submit"
          disabled={form.isSending}
          className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-emerald-400 px-5 text-[14.5px] font-semibold whitespace-nowrap text-[#06130d] transition-[transform,background-color] hover:bg-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 active:translate-y-[1px] disabled:opacity-70"
        >
          {form.isSending ? (
            <>
              <CircleNotchIcon size={16} weight="bold" className="animate-spin" />
              Sending
            </>
          ) : (
            <>
              Start free
              <ArrowRightIcon size={15} weight="bold" />
            </>
          )}
        </button>
      </div>
      <p
        id={form.messageId}
        aria-live="polite"
        className={`mt-2 text-[13px] ${form.isError ? "text-red-400" : "text-zinc-400"}`}
      >
        {form.isError
          ? form.error
          : "We send one download link. No newsletter, no drip sequence."}
      </p>
    </form>
  );
}
