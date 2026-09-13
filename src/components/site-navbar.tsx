"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const nav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function SiteNavbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme !== "light" : true;
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <Fragment>
      <header className="fixed inset-x-0 top-0 z-[100] border-b border-slate-200/80 bg-white/85 shadow-sm shadow-slate-900/[0.03] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/75 dark:shadow-black/20">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="group inline-flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
              <Image
                src="/profile.png"
                alt="Emmanuel Agina"
                width={36}
                height={36}
                className="h-9 w-9 object-cover"
                priority
              />
            </span>
            <span className="text-sm font-semibold tracking-tight text-slate-950 dark:text-white">
              Emmanuel <span className="text-slate-500 dark:text-white/60">Agina</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-600 transition hover:text-slate-950 dark:text-white/70 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden rounded-full md:inline-flex">
              <a href="/#contact">Let’s Collaborate</a>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-slate-200 bg-white/80 text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              title={isDark ? "Switch to light theme" : "Switch to dark theme"}
            >
              {mounted ? (
                isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
              ) : (
                <span className="h-4 w-4" />
              )}
            </Button>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-slate-200 bg-white/80 text-slate-700 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                    aria-label="Open menu"
                  >
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>

                <SheetContent className="border-slate-200 bg-white/98 text-slate-950 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/98 dark:text-white">
                  <SheetHeader>
                    <div className="flex items-center justify-between gap-4 pr-8">
                      <div>
                        <SheetTitle className="text-left text-slate-950 dark:text-white">Menu</SheetTitle>
                        <SheetDescription className="mt-1 text-left text-xs text-slate-500 dark:text-white/45">
                          Navigate the portfolio or change appearance.
                        </SheetDescription>
                      </div>

                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="shrink-0 rounded-full border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-100 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                        onClick={toggleTheme}
                        aria-label={isDark ? "Switch menu to light theme" : "Switch menu to dark theme"}
                        title={isDark ? "Switch to light theme" : "Switch to dark theme"}
                      >
                        {mounted ? (
                          isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
                        ) : (
                          <span className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </SheetHeader>

                  <div className="mt-6 grid gap-2">
                    {nav.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 hover:text-slate-950 dark:border-white/10 dark:bg-white/[0.045] dark:text-white/80 dark:hover:border-white/20 dark:hover:bg-white/[0.08] dark:hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ))}

                    <a
                      href="/#contact"
                      className="mt-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-slate-50 transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                    >
                      Let’s Collaborate
                    </a>
                  </div>

                  <div className="mt-6 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-white/[0.04]">
                    <div>
                      <div className="text-xs font-medium text-slate-500 dark:text-white/45">Appearance</div>
                      <div className="mt-0.5 text-sm font-semibold text-slate-900 dark:text-white">
                        {isDark ? "Dark mode" : "Light mode"}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={toggleTheme}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
                    >
                      {isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
                      {isDark ? "Use light" : "Use dark"}
                    </button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Reserve the navbar height so fixed positioning never covers page content. */}
      <div aria-hidden="true" className="h-16" />
    </Fragment>
  );
}
