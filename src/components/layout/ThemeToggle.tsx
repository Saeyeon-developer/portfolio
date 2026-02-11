"use client";

import { useTheme } from "@/components/layout/ClientProviders";

export function ThemeToggle() {
  const { theme, mounted, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className="rounded-full border border-black/15 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] transition hover:-translate-y-0.5 hover:bg-white dark:border-white/25 dark:bg-white/10 dark:hover:bg-white/20"
    >
      {mounted ? (theme === "dark" ? "Light" : "Dark") : "Mode"}
    </button>
  );
}
