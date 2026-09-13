import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/50 dark:border-white/10 dark:bg-slate-950/40">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_.7fr_.7fr]">
          <div>
            <div className="text-base font-semibold tracking-tight text-slate-950 dark:text-white">
              Emmanuel Agina
            </div>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600 dark:text-white/60">
              Full-stack product engineering for SaaS, AI products, business systems, marketplaces and polished digital experiences.
            </p>
            <a
              href="/#contact"
              className="mt-5 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
            >
              Start a project →
            </a>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-950 dark:text-white">Navigate</div>
            <div className="mt-4 grid gap-2.5 text-sm text-slate-600 dark:text-white/65">
              <Link href="/projects" className="transition hover:text-slate-950 dark:hover:text-white">
                Projects
              </Link>
              <a href="/#services" className="transition hover:text-slate-950 dark:hover:text-white">
                Services
              </a>
              <a href="/#about" className="transition hover:text-slate-950 dark:hover:text-white">
                About
              </a>
              <a href="/#contact" className="transition hover:text-slate-950 dark:hover:text-white">
                Contact
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-950 dark:text-white">Connect</div>
            <div className="mt-4 grid gap-2.5 text-sm text-slate-600 dark:text-white/65">
              <a
                href="https://github.com/Emmilex20"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-slate-950 dark:hover:text-white"
              >
                GitHub
              </a>
              <a
                href="mailto:aginaemmanuel6@gmail.com"
                className="transition hover:text-slate-950 dark:hover:text-white"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/80 pt-6 text-xs text-slate-500 dark:border-white/10 dark:text-white/45">
          <span>© {new Date().getFullYear()} Emmanuel Agina. All rights reserved.</span>
          <span>Next.js • TypeScript • Tailwind • Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
