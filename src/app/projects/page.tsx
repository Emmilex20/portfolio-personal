import SiteNavbar from "@/components/site-navbar";
import Section from "@/components/section";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main>
      <SiteNavbar />
      <Section
        title="Projects"
        subtitle="Case-study style work. Built with clean UI, scalable architecture, and collaboration-ready structure."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>
    </main>
  );
}
