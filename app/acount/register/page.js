"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [offers, setOffers] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, offers });
    // call your auth / API here
  };

  return (
    <div className="flex min-h-screen flex-col border-t-2 border-neutral-900 bg-white text-neutral-900">
      {/* Store name */}
      <header className="pt-10 text-center">
        <h1 className="text-xl font-medium">wonder-theme-interior</h1>
      </header>

      {/* Form */}
      <main className="flex flex-1 items-center justify-center px-4 pb-24">
        <div className="w-full max-w-95">
          <h2 className="text-2xl font-semibold">Sign in</h2>
          <p className="mt-1 text-sm text-neutral-500">
            Sign in or create an account
          </p>

          {/* Shop button */}
          <button
            type="button"
            className="mt-5 h-12.5 w-full rounded-lg bg-[#5433eb] text-base font-semibold text-white transition hover:bg-[#4526d1]"
          >
            Continue with shop
          </button>

          {/* Divider */}
          <div className="my-5 flex items-center gap-4 text-sm text-neutral-500">
            <span className="h-px flex-1 bg-neutral-200" />
            or
            <span className="h-px flex-1 bg-neutral-200" />
          </div>

          {/* Email form */}
          <form onSubmit={handleSubmit}>
            <div className="flex h-12.5 items-center rounded-lg border border-neutral-300 px-3 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="h-full flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-500"
              />
              <button type="submit" aria-label="Continue" className="p-1">
                <ArrowRight size={18} />
              </button>
            </div>

            <label className="mt-3 flex cursor-pointer items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={offers}
                onChange={(e) => setOffers(e.target.checked)}
                className="h-4 w-4 rounded border-neutral-300 accent-neutral-900"
              />
              Email me with news and offers
            </label>
          </form>
        </div>
      </main>
    </div>
  );
}