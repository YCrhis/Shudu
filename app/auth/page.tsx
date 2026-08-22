'use client'

import { Login } from "@/actions/auth";
import { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Login logic here
  };

  const handleGoogleLogin = async () => {
    const response = await Login();
    console.log(response)
    
};

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090B] px-6 py-10 text-zinc-100">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/5 blur-[120px]" />

        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-amber-500/5 blur-[100px]" />

        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-orange-500/5 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Brand */}
        <div className="mb-8 flex flex-col items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-black shadow-lg shadow-amber-500/10">
            <span className="text-xl font-black">
              V
            </span>
          </div>

          <p className="mt-3 text-sm font-bold tracking-wide">
            VEHICLE WORKS
          </p>

          <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-zinc-600">
            Maintenance System
          </p>
        </div>

        {/* Login card */}
        <div className="rounded-2xl border border-zinc-800 bg-[#111113]/95 p-7 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
          {/* Heading */}
          <div className="mb-7">
            <h1 className="text-2xl font-bold tracking-tight">
              Welcome back
            </h1>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Sign in to access the vehicle maintenance system.
            </p>
          </div>

          {/* Google */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-600 hover:bg-zinc-800"
          >
            {/* Google icon */}
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                fill="#4285F4"
                d="M21.35 12.21c0-.68-.06-1.34-.18-1.97H12v3.73h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.15Z"
              />

              <path
                fill="#34A853"
                d="M12 21.72c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.74 9.74 0 0 0 12 21.72Z"
              />

              <path
                fill="#FBBC05"
                d="M6.54 13.8A5.86 5.86 0 0 1 6.23 12c0-.62.11-1.22.31-1.8V7.67H3.3A9.74 9.74 0 0 0 2.26 12c0 1.57.38 3.05 1.04 4.33l3.24-2.53Z"
              />

              <path
                fill="#EA4335"
                d="M12 6.17c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.25 14.63 2.28 12 2.28a9.74 9.74 0 0 0-8.7 5.39l3.24 2.53C7.31 7.89 9.46 6.17 12 6.17Z"
              />
            </svg>

            Continue with Google
          </button>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-zinc-800" />

            <span className="text-xs font-medium uppercase tracking-wider text-zinc-600">
              Or continue with
            </span>

            <div className="h-px flex-1 bg-zinc-800" />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-zinc-300"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-700 focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-zinc-300"
                >
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs font-medium text-amber-500 transition hover:text-amber-400"
                >
                  Forgot password?
                </button>
              </div>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  required
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 pr-12 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-700 focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-zinc-600 transition hover:text-zinc-300"
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? "◉" : "◌"}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-amber-500 px-4 py-3.5 text-sm font-bold text-black shadow-lg shadow-amber-500/10 transition hover:bg-amber-400 hover:shadow-amber-500/20 active:scale-[0.99]"
            >
              Sign in
            </button>
          </form>
        </div>

        {/* Back */}
        <div className="mt-6 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-200"
          >
            <span>←</span>
            Back to home
          </a>
        </div>

        <p className="mt-8 text-center text-xs text-zinc-700">
          © 2026 Vehicle Works · Vehicle Maintenance System
        </p>
      </div>
    </main>
  );
};

export default LoginPage;