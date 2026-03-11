import SiteNavbar from "@/components/site-navbar";
import { getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import ProjectGallery from "@/components/project-gallery";
import Reveal from "@/components/reveal";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <main>
      <SiteNavbar />

      <div className="mx-auto max-w-6xl px-4 py-10">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Button
              asChild
              variant="outline"
              className="border-white/10 bg-white/5 hover:bg-white/10 gap-2"
            >
              <Link href="/projects">
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Link>
            </Button>

            <div className="flex flex-wrap gap-2">
              {project.links.live ? (
                <Button asChild className="gap-2">
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
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <Github className="h-4 w-4" />
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="border-white/10 bg-white/5 text-white/70">
                {project.year}
              </Badge>
              <Badge className="border-white/10 bg-white/5 text-white/70">
                {project.role}
              </Badge>
            </div>

            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-3 max-w-3xl text-white/70 md:text-lg">
              {project.tagline}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Gallery */}
        {project.screenshots?.length ? (
          <div className="mt-10">
            <Reveal>
              <h2 className="text-lg font-semibold">Screenshots</h2>
              <p className="mt-2 text-sm text-white/65">
                Key screens showing the flow and UI quality.
              </p>
            </Reveal>

            <div className="mt-5">
              <Reveal delay={0.05}>
                <ProjectGallery images={project.screenshots} />
              </Reveal>
            </div>
          </div>
        ) : null}

        {/* Highlights */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.highlights.map((h, idx) => (
            <Reveal key={h} delay={0.03 * idx}>
              <Card className="rounded-3xl border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold">Highlight</div>
                <p className="mt-2 text-sm text-white/70">{h}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Sections */}
        <div className="mt-10 grid gap-4">
          {project.sections.map((sec, idx) => (
            <Reveal key={sec.title} delay={0.04 * idx}>
              <Card className="rounded-3xl border-white/10 bg-white/5 p-6">
                <h2 className="text-lg font-semibold">{sec.title}</h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/75 md:text-base">
                  {sec.content.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
