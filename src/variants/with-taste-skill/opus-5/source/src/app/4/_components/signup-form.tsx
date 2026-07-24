"use client";

import {
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
        className="glass flex items-start gap-3.5 rounded-3xl p-7"
      >
        <CheckCircleIcon
          size={22}
          weight="fill"
          className="mt-px shrink-0 text-[#2549e0]"
        />
        <div>
          <p className="font-[family-name:var(--font-outfit)] text-[19px] font-medium text-[#0f141a]">
            On its way to {form.email}
          </p>
          <p className="mt-1.5 text-[14px] leading-relaxed text-[#586274]">
            Open it on the machine you write on. Everything works before you
            make an account.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={form.onSubmit} noValidate className="w-full max-w-md">
      <label
        htmlFor={form.inputId}
        className="block text-[13.5px] font-semibold text-[#0f141a]"
      >
        Email
      </label>
      <div className="mt-2.5 flex flex-col gap-2.5 sm:flex-row">
        <input
          id={form.inputId}
          type="email"
          value={form.email}
          onChange={(event) => form.onChange(event.target.value)}
          aria-describedby={form.messageId}
          aria-invalid={form.isError}
          placeholder="you@studio.com"
          className={`h-13 flex-1 rounded-full border bg-white px-5 text-[15px] text-[#0f141a] placeholder:text-[#7b8494] focus:outline-none focus-visible:border-[#2549e0] focus-visible:ring-3 focus-visible:ring-[#2549e0]/18 ${
            form.isError ? "border-[#c1362b]" : "border-[#d7dce5]"
          }`}
        />
        <button
          type="submit"
          disabled={form.isSending}
          className="inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-full bg-[#2549e0] px-7 text-[15px] font-semibold whitespace-nowrap text-white shadow-[0_14px_34px_-14px_rgba(37,73,224,0.6)] transition-[transform,background-color] hover:bg-[#1d3cc4] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#2549e0] active:scale-[0.98] disabled:opacity-70"
        >
          {form.isSending ? (
            <>
              <CircleNotchIcon size={17} weight="bold" className="animate-spin" />
              Sending
            </>
          ) : (
            "Start free"
          )}
        </button>
      </div>
      <p
        id={form.messageId}
        aria-live="polite"
        className={`mt-2.5 text-[13.5px] leading-relaxed ${
          form.isError ? "text-[#c1362b]" : "text-[#586274]"
        }`}
      >
        {form.isError
          ? form.error
          : "One download link, nothing after it. No newsletter."}
      </p>
    </form>
  );
}
