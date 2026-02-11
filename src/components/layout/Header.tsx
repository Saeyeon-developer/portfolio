"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/layout/ThemeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/channels", label: "Channels" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/extras", label: "Extras" }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-mist/75 backdrop-blur-md dark:border-white/10 dark:bg-ink/70">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 text-sm font-extrabold uppercase tracking-[0.24em]">
          Jaewon Portfolio
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm transition ${
                  active
                    ? "bg-pine text-white"
                    : "text-ink/80 hover:bg-black/5 dark:text-mist/80 dark:hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-3">
          <ThemeToggle />
          <a
            href="mailto:contact@example.com"
            className="rounded-full bg-sunset px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:brightness-95"
            aria-label="Contact by email"
          >
            Contact
          </a>
        </div>
      </div>

      <nav className="mx-auto flex w-full max-w-6xl items-center gap-1 overflow-x-auto px-4 pb-2 md:hidden">
        {navItems.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs ${
                active
                  ? "bg-pine text-white"
                  : "bg-black/5 text-ink dark:bg-white/10 dark:text-mist"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
