"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const capabilities = ["Full-stack products", "AI automation", "SaaS systems", "Product UI/UX"];

export default function Hero() {
  return (
    <section className="relative isolate min-h-[78vh] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-[8%] top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-[90px]"
          animate={{ x: [0, 45, -10, 0], y: [0, 25, -20, 0], scale: [1, 1.12, 0.96, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[8%] top-24 h-72 w-72 rounded-full bg-violet-500/20 blur-[100px]"
          animate={{ x: [0, -35, 20, 0], y: [0, -20, 30, 0], scale: [1, 0.95, 1.1, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-20 md:grid-cols-[1.2fr_.8fr] md:items-center md:pb-24 md:pt-28">
        <motion.div initial="hidden" animate="show">
          <motion.div variants={fadeUp} custom={0}>
            <Badge className="gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-white/75 backdrop-blur-xl hover:bg-white/[0.08]">
              <Sparkles className="h-3.5 w-3.5" />
              Building useful products in 2026
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-7xl"
          >
            I turn ambitious ideas into
            <span className="block bg-gradient-to-r from-blue-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              real digital products.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/65 sm:text-lg sm:leading-8"
          >
            I’m Emmanuel Agina, a full-stack developer building SaaS platforms, AI-powered products,
            business automation, marketplaces and high-polish web experiences from product idea to production.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="mt-7 flex flex-wrap gap-2">
            {capabilities.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-white/55 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} custom={4} className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild className="h-11 gap-2 rounded-full px-5">
              <a href="#work">
                See flagship work <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="h-11 gap-2 rounded-full border-white/10 bg-white/5 px-5 hover:bg-white/10">
              <a href="https://github.com/Emmilex20" target="_blank" rel="noreferrer">
                GitHub <Github className="h-4 w-4" />
              </a>
            </Button>
            <a
              href="#contact"
              className="px-2 text-sm font-medium text-white/55 transition hover:text-white"
            >
              Start a project →
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-fuchsia-500/10 blur-3xl" />
          <div className="rounded-[2rem] border border-white/10 bg-black/30 p-3 shadow-2xl shadow-black/30 backdrop-blur-2xl">
            <div className="rounded-[1.55rem] border border-white/10 bg-white/[0.045] p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-white/40">Current focus</div>
                  <div className="mt-1 text-base font-semibold">Products with real operational depth</div>
                </div>
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  ["AI products", "Learning, assistants and automation"],
                  ["Business systems", "SaaS, dashboards and workflows"],
                  ["Integrations", "Payments, WhatsApp, APIs and data"],
                  ["Experience", "Responsive UI, motion and product polish"],
                ].map(([title, description], index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 + index * 0.08, duration: 0.5 }}
                    className="group rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.055]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-medium text-white/85">{title}</div>
                        <div className="mt-1 text-xs leading-relaxed text-white/45">{description}</div>
                      </div>
                      <div className="mt-1 h-2 w-2 rounded-full bg-gradient-to-br from-blue-300 to-violet-300 opacity-60 transition group-hover:opacity-100" />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-fuchsia-500/10 p-4">
                <div>
                  <div className="text-xs text-white/40">Based in Nigeria</div>
                  <div className="mt-1 text-sm font-medium text-white/80">Working remotely, building globally.</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
