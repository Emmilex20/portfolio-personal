import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group rounded-3xl border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-base font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-white/65">{project.tagline}</p>
        </div>
        <Badge className="border-white/10 bg-white/5 text-white/70">
          {project.year}
        </Badge>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.slice(0, 5).map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
          >
            {s}
          </span>
        ))}
      </div>

      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {project.highlights.slice(0, 3).map((h) => (
          <li key={h} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400/80" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        <Button asChild className="gap-2">
          <Link href={project.links.caseStudy ?? `/projects/${project.slug}`}>
            Case Study <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>

        {project.links.live ? (
          <Button
            asChild
            variant="outline"
            className="border-white/10 bg-white/5 hover:bg-white/10 gap-2"
          >
            <a href={project.links.live} target="_blank" rel="noreferrer">
              Live <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        ) : null}

        {project.links.github ? (
          <Button
            asChild
            variant="outline"
            className="border-white/10 bg-white/5 hover:bg-white/10 gap-2"
          >
            <a href={project.links.github} target="_blank" rel="noreferrer">
              GitHub <Github className="h-4 w-4" />
            </a>
          </Button>
        ) : null}
      </div>
    </Card>
  );
}
