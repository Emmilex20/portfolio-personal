import SiteNavbar from "@/components/site-navbar";
import Section from "@/components/section";
import ProjectCard from "@/components/project-card";
import { getProjects } from "@/data/projects";
import { featuredCurrentProjects } from "@/data/featured-current";

export default async function ProjectsPage() {
  const archiveProjects = await getProjects();
  const flagshipSlugs = new Set(featuredCurrentProjects.map((project) => project.slug));
  const flagshipTitles = new Set(
    featuredCurrentProjects.map((project) => project.title.toLowerCase()),
  );

  const remainingProjects = archiveProjects
    .filter(
      (project) =>
        !flagshipSlugs.has(project.slug) &&
        !flagshipTitles.has(project.title.toLowerCase()),
    )
    .sort(
      (a, b) => Number.parseInt(b.year, 10) - Number.parseInt(a.year, 10),
    );

  return (
    <main className="min-h-screen">
      <SiteNavbar />

      <div className="mx-auto max-w-6xl px-4 pb-2 pt-16 md:pt-20">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 dark:text-blue-300/70">
            Selected work
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Products built for real users, workflows and businesses.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-white/60 md:text-lg">
            My strongest current work comes first. Private repositories keep their source private and expose only the live product preview where one is available.
          </p>
        </div>
      </div>

      <Section
        title="Current flagship projects"
        subtitle="The same current work featured on the homepage, including AI, SaaS, commerce, community and marketplace products."
        className="pt-10"
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredCurrentProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section
        title="More projects"
        subtitle="A wider archive of public builds and previous product work from my GitHub portfolio."
        className="pt-2 pb-24"
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {remainingProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </main>
  );
}
