"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/50 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.7)]" />
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Emmanuel <span className="text-white/60">Agina</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex">
            <a href="/#contact">Let’s Collaborate</a>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className={cn("border-white/10 bg-white/5 hover:bg-white/10")}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {!mounted ? null : theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>

          {/* Mobile */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/10 bg-white/5 hover:bg-white/10"
                  aria-label="Open menu"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="border-white/10 bg-background/80 backdrop-blur-xl">
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
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 hover:bg-white/10"
                    >
                      {item.label}
                    </Link>
                  ))}

                  <a
                    href="/#contact"
                    className="mt-2 rounded-2xl bg-white text-black px-4 py-3 text-sm font-medium"
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
  );
}
