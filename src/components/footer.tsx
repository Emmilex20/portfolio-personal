import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/40">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold">Emmanuel Agina</div>
            <p className="mt-2 text-sm text-white/65">
              Modern web UI, clean UX, and collaboration-ready engineering.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">Quick links</div>
            <div className="mt-3 grid gap-2 text-sm text-white/70">
              <Link href="/projects" className="hover:text-slate-900 dark:hover:text-white">
                Projects
              </Link>
              <a href="/#services" className="hover:text-slate-900 dark:hover:text-white">
                Services
              </a>
              <a href="/#about" className="hover:text-slate-900 dark:hover:text-white">
                About
              </a>
              <a href="/#contact" className="hover:text-slate-900 dark:hover:text-white">
                Contact
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Social</div>
            <div className="mt-3 grid gap-2 text-sm text-white/70">
              <a
                href="https://github.com/Emmilex20"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 dark:hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 dark:hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="mailto:aginaemmanuel6@gmail.com"
                className="hover:text-slate-900 dark:hover:text-white"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55">
          <span>© {new Date().getFullYear()} Emmanuel Agina. All rights reserved.</span>
          <span>Built with Next.js • Tailwind • shadcn/ui</span>
        </div>
      </div>
    </footer>
  );
}
