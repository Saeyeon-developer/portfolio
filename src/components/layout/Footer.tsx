export function Footer() {
  return (
    <footer id="contact" className="mt-20 border-t border-black/10 py-10 dark:border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 sm:px-6 lg:px-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold">yui050505@gmail.com</p>
          <p className="text-sm text-ink/70 dark:text-mist/70">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:underline"
              aria-label="YouTube profile"
            >
              YouTube
            </a>
            {" · "}
            <a
              href="https://github.com/Saeyeon-developer"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:underline"
              aria-label="GitHub profile"
            >
              Github
            </a>
          </p>
        </div>
        <p className="text-xs uppercase tracking-[0.12em] text-ink/60 dark:text-mist/60">
          © {new Date().getFullYear()} LeeJaewon Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
