import SiteNavbar from "@/components/site-navbar";
import Section from "@/components/section";
import ProjectCard from "@/components/project-card";
import { getProjects } from "@/data/projects";

export default async function ProjectsPage() {
  const projects = await getProjects();
  const sortedProjects = [...projects].sort(
    (a, b) => Number.parseInt(b.year, 10) - Number.parseInt(a.year, 10),
  );

  return (
    <main>
      <SiteNavbar />
      <Section
        title="Projects"
        subtitle="Case-study style work. Built with clean UI, scalable architecture, and collaboration-ready structure."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sortedProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>
    </main>
  );
}
