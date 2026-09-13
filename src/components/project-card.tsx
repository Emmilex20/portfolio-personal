import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectCard({ project }: { project: Project }) {
  const primaryHref = project.links.caseStudy ?? `/projects/${project.slug}`;
  const primaryIsExternal = primaryHref.startsWith("http");

  return (
    <Card className="group relative overflow-hidden rounded-[1.75rem] border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.065] hover:shadow-2xl hover:shadow-black/20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-violet-500/10 blur-3xl transition duration-500 group-hover:scale-125" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{project.tagline}</p>
          </div>
          <Badge className="shrink-0 rounded-full border-white/10 bg-white/5 text-white/60">
            {project.year}
          </Badge>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[11px] text-white/55"
            >
              {item}
            </span>
          ))}
        </div>

        <ul className="mt-5 space-y-2.5 text-sm text-white/65">
          {project.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-blue-300 to-violet-300" />
              <span className="leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          <Button asChild className="gap-2 rounded-full">
            {primaryIsExternal ? (
              <a href={primaryHref} target="_blank" rel="noreferrer">
                Explore project <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : (
              <Link href={primaryHref}>
                Case study <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
          </Button>

          {project.links.live && project.links.live !== primaryHref ? (
            <Button asChild variant="outline" className="gap-2 rounded-full border-white/10 bg-white/5 hover:bg-white/10">
              <a href={project.links.live} target="_blank" rel="noreferrer">
                Live <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          ) : null}

          {project.links.github ? (
            <Button asChild variant="outline" className="gap-2 rounded-full border-white/10 bg-white/5 hover:bg-white/10">
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
