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
              onClick={() => setTheme(isDark ? "light" : "dark")}
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
                <SheetContent className="border-slate-200 bg-white/95 text-slate-950 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/95 dark:text-white">
                  <SheetHeader>
                    <SheetTitle className="text-left">Menu</SheetTitle>
                    <SheetDescription className="sr-only">
                      Primary navigation links.
                    </SheetDescription>
                  </SheetHeader>

                  <div className="mt-6 grid gap-2">
                    {nav.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
                      >
                        {item.label}
                      </Link>
                    ))}

                    <a
                      href="/#contact"
                      className="mt-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-white dark:bg-white dark:text-black"
                    >
                      Let’s Collaborate
                    </a>
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
