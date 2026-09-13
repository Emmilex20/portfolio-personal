import Link from "next/link";
import { ArrowUpRight, Github, LockKeyhole } from "lucide-react";
import type { Project } from "@/data/projects";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PRIVATE_PREVIEW_ONLY = new Set([
  "pass-ng-ai",
  "wazent",
  "tradeloop",
  "ckc-parish-kubwa",
  "rixari-skin-secrets",
  "face-of-abuja",
]);

export default function ProjectCard({ project }: { project: Project }) {
  const previewOnly = PRIVATE_PREVIEW_ONLY.has(project.slug);

  return (
    <Card className="group relative overflow-hidden rounded-[1.75rem] border-slate-200/80 bg-white/75 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-white/20 dark:hover:bg-white/[0.065] dark:hover:shadow-2xl dark:hover:shadow-black/20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-400/30 to-transparent opacity-0 transition group-hover:opacity-100 dark:via-white/30" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-violet-500/10 blur-3xl transition duration-500 group-hover:scale-125" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-white/60">
              {project.tagline}
            </p>
          </div>
          <Badge className="shrink-0 rounded-full border-slate-200 bg-slate-100 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-white/60">
            {project.year}
          </Badge>
        </div>

        {previewOnly ? (
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/45">
            <LockKeyhole className="h-3 w-3" /> Private source
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] text-slate-600 dark:border-white/10 dark:bg-black/20 dark:text-white/55"
            >
              {item}
            </span>
          ))}
        </div>

        <ul className="mt-5 space-y-2.5 text-sm text-slate-600 dark:text-white/65">
          {project.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-blue-400 to-violet-400 dark:from-blue-300 dark:to-violet-300" />
              <span className="leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {previewOnly && project.links.live ? (
            <Button asChild className="gap-2 rounded-full">
              <a href={project.links.live} target="_blank" rel="noreferrer">
                Live Preview <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          ) : (
            <Button asChild className="gap-2 rounded-full">
              <Link href={project.links.caseStudy ?? `/projects/${project.slug}`}>
                Case Study <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          )}

          {!previewOnly && project.links.live ? (
            <Button
              asChild
              variant="outline"
              className="gap-2 rounded-full border-slate-200 bg-white/70 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <a href={project.links.live} target="_blank" rel="noreferrer">
                Live <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          ) : null}

          {!previewOnly && project.links.github ? (
            <Button
              asChild
              variant="outline"
              className="gap-2 rounded-full border-slate-200 bg-white/70 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <a href={project.links.github} target="_blank" rel="noreferrer">
                GitHub <Github className="h-4 w-4" />
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
