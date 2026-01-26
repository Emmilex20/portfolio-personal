"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6 },
  }),
};

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-10 md:pt-24">
        <motion.div
          initial="hidden"
          animate="show"
          className="grid gap-8 md:grid-cols-[1.25fr_.75fr] md:items-center"
        >
          <div>
            <motion.div variants={fadeUp} custom={0}>
              <Badge className="gap-2 bg-white/5 text-white/80 hover:bg-white/10 border border-white/10 whitespace-normal text-center sm:whitespace-nowrap">
                <Sparkles className="h-3.5 w-3.5" />
                Collaboration-ready • Product-minded developer
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl"
            >
              I build modern, high-converting{" "}
              <span className="bg-linear-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                web products
              </span>{" "}
              with clean UI and real-world speed.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/70 md:text-lg"
            >
              I’m Emmanuel — a full stack developer focused on React.js, Next.js, UI systems,
              and user experiences that feel premium. Let’s collaborate on your
              next project and ship something people love.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <Button asChild className="gap-2">
                <a href="#work">
                  View Work <ArrowRight className="h-4 w-4" />
                </a>
              </Button>

              <Button asChild variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10">
                <a href="#contact">Send Collaboration Brief</a>
              </Button>

              <div className="ml-1 text-sm text-white/50">
                Available for remote collaborations (Nigeria).
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="relative rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_50px_rgba(0,0,0,0.35)]"
          >
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_55%)]" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-white/80">
                  Quick Snapshot
                </p>
                <span className="text-xs text-white/50">2026-ready</span>
              </div>

              <div className="mt-4 grid gap-3">
                {[
                  ["Tech", "Next.js • TypeScript • Tailwind"],
                  ["Focus", "UI/UX • Performance • Clean architecture"],
                  ["Collab", "Design-to-dev delivery • Fast iterations"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="text-xs text-white/50">{k}</div>
                    <div className="mt-1 text-sm text-white/80">{v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-linear-to-r from-blue-500/10 via-violet-500/10 to-fuchsia-500/10 p-4">
                <div className="text-xs text-white/50">Signature</div>
                <div className="mt-1 text-sm text-white/80">
                  “Minimal, premium, fast.”
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


