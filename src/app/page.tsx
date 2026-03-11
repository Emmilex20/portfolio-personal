import SiteNavbar from "@/components/site-navbar";
import Hero from "@/components/hero";
import Section from "@/components/section";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import ProjectCard from "@/components/project-card";
import { getFeaturedProjects } from "@/data/projects";
import ContactForm from "@/components/contact-form";

import Testimonials from "@/components/testimonials";
import Timeline from "@/components/timeline";
import Footer from "@/components/footer";

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <main>
      <SiteNavbar />
      <Hero />

      {/* WORK */}
      <Section
        id="work"
        title="Selected Work"
        subtitle="A few things I’ve built — case-study style. See more on the Projects page."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            href="/projects"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 hover:bg-white/10"
          >
            View all projects →
          </Link>
        </div>
      </Section>

      {/* SERVICES */}
      <Section
        id="services"
        title="Services"
        subtitle="What you get when we collaborate — fast, clean, and conversion-focused."
        className="pt-0"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Web Development", "React.js and Next.js apps, landing pages, dashboards, portals."],
            ["UI/UX & Design Systems", "Reusable components, consistent styles, clean UX."],
            ["Performance & Polish", "Animations, SEO, accessibility, best practices."],
          ].map(([t, d]) => (
            <Card key={t} className="rounded-3xl border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold">{t}</div>
              <p className="mt-2 text-sm text-white/70">{d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* PROOF */}
      <Section
        id="proof"
        title="Proof & Trust"
        subtitle="People remember delivery. These are the kind of collaborations I optimize for."
        className="pt-0"
      >
        <Testimonials />
      </Section>

      {/* TIMELINE */}
      <Section
        id="timeline"
        title="Experience Timeline"
        subtitle="A quick view of what I’ve been building and improving over time."
        className="pt-0"
      >
        <Timeline />
      </Section>

      {/* PROCESS */}
      <Section
        id="process"
        title="How I Work"
        subtitle="A clear, repeatable process that keeps projects moving and reduces risk."
        className="pt-0"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "1) Discover",
              "Clarify goals, users, constraints, and success metrics. Align on scope and timelines.",
            ],
            [
              "2) Design",
              "Define layout, flow, and component structure. Focus on clarity, hierarchy, and conversion.",
            ],
            [
              "3) Build",
              "Develop fast, reusable UI with clean state handling, validation, and responsiveness.",
            ],
            [
              "4) Ship",
              "QA, polish, and performance pass. Deliver with documentation and a clear handoff.",
            ],
          ].map(([t, d]) => (
            <Card key={t} className="rounded-3xl border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold">{t}</div>
              <p className="mt-2 text-sm text-white/70">{d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CAPABILITIES */}
      <Section
        id="capabilities"
        title="Capabilities"
        subtitle="The exact areas I focus on for product teams and founders."
        className="pt-0"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            [
              "Product UI Engineering",
              "Conversion-first layouts, design systems, and polished interactions that feel premium.",
            ],
            [
              "React.js Development",
              "Component architecture, hooks, state management, and reusable patterns for scalable apps.",
            ],
            [
              "Full-stack Architecture",
              "Component-driven structure, scalable styling, and clean data flow for large apps.",
            ],
            [
              "Performance and Reliability",
              "Fast load times, predictable state management, and resilient forms.",
            ],
            [
              "UX and Content Clarity",
              "Microcopy, hierarchy, and layout tweaks that improve comprehension and action.",
            ],
            [
              "Developer Experience",
              "Maintainable code, clear handoffs, and docs that help teams move faster.",
            ],
            [
              "Launch Readiness",
              "SEO, accessibility checks, and final polish for a confident release.",
            ],
          ].map(([t, d]) => (
            <Card key={t} className="rounded-3xl border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold">{t}</div>
              <p className="mt-2 text-sm text-white/70">{d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* AVAILABILITY */}
      <Section
        id="availability"
        title="Availability"
        subtitle="Clear collaboration terms help teams move fast."
        className="pt-0"
      >
        <Card className="rounded-3xl border-white/10 bg-white/5 p-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Status", "Available for collaboration"],
              ["Preferred", "Remote • Product UI • React.js + Next.js builds"],
              ["Response time", "Within 24 hours"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div className="text-xs text-white/55">{k}</div>
                <div className="mt-1 text-sm text-white/80">{v}</div>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* ABOUT */}
      <Section
        id="about"
        title="About"
        subtitle="A clear, credible story that makes teams want to build with you."
        className="pt-0"
      >
        <Card className="rounded-3xl border-white/10 bg-white/5 p-6">
          <div className="grid gap-6 md:grid-cols-[1.1fr_.9fr] md:items-center">
            <div>
              <p className="text-sm leading-relaxed text-white/75 md:text-base">
                I am Emmanuel Agina, a full stack developer who helps teams ship modern,
                conversion-ready products with clarity, speed, and confidence. I start with
                outcomes, then craft the React.js UI system that delivers them: clean
                hierarchy, deliberate spacing, reliable states, and microcopy that guides
                users to action.
              </p>
              <input id="about-more" type="checkbox" className="peer sr-only" />
              <div className="mt-4 text-sm leading-relaxed text-white/70 md:text-base hidden peer-checked:block md:block">
                My approach blends product thinking with engineering discipline. I map the
                critical journeys, simplify decision points, and translate design into
                scalable components your team can extend without friction. I care about
                performance, accessibility, and polish because they shape trust.
              </div>
              <div className="mt-4 text-sm leading-relaxed text-white/70 md:text-base hidden peer-checked:block md:block">
                On every project, I deliver a codebase that is easy to maintain, easy to
                hand off, and ready for iteration. Whether it is a marketing site, a
                dashboard, or a full product build, the goal is the same: an experience
                that feels premium, moves fast, and converts.
              </div>
              <label
                htmlFor="about-more"
                className="mt-4 inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/10 md:hidden peer-checked:hidden"
              >
                Read more
              </label>
              <label
                htmlFor="about-more"
                className="mt-4 hidden items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/10 md:hidden peer-checked:inline-flex"
              >
                Read less
              </label>
            </div>
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <Image
                src="/profile.webp"
                alt="Portrait of Emmanuel Agina"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority={false}
              />
            </div>
          </div>
        </Card>
      </Section>

      {/* FAQ */}
      <Section
        id="faq"
        title="FAQ"
        subtitle="Common questions from teams before we start."
        className="pt-0"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            [
              "What types of teams do you work with?",
              "Founders, product teams, and agencies that need a sharp UI engineer with product taste.",
            ],
            [
              "What do you need to start?",
              "A clear goal, target users, and any existing assets. I can help define the rest.",
            ],
            [
              "Can you work with designers?",
              "Yes. I translate Figma into production-ready UI and refine micro-interactions.",
            ],
            [
              "Do you ship full products?",
              "Yes. I can build the UI plus core flows, then hand off a maintainable codebase.",
            ],
          ].map(([q, a]) => (
            <Card key={q} className="rounded-3xl border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold">{q}</div>
              <p className="mt-2 text-sm text-white/70">{a}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        title="Contact"
        subtitle="Send a collaboration brief, or download my one-page profile for your team."
        className="pt-0 pb-20"
      >
        <Card className="rounded-3xl border-white/10 bg-white/5 p-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left: CTA + Links */}
            <div>
              <div className="text-sm font-semibold">Let’s collaborate</div>
              <p className="mt-2 text-sm text-white/70">
                Send a message and include what you’re building, timeline, and what you need
                from me. I reply fast.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="/api/profile-pdf"
                  className="w-full rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black hover:opacity-95 sm:w-auto"
                >
                  Download Collaboration Profile (PDF)
                </a>

                <a
                  href="https://github.com/Emmilex20"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 hover:bg-white/10 sm:w-auto"
                >
                  View GitHub
                </a>

                <Link
                  href="/projects"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 hover:bg-white/10 sm:w-auto"
                >
                  Browse Projects
                </Link>
              </div>

              <div className="mt-6 space-y-2 text-sm text-white/65 wrap-break-word">
                <p>Email: aginaemmanuel6@gmail.com</p>
                <p>Location: Nigeria (Remote)</p>
                <p>GitHub: github.com/Emmilex20</p>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </Card>
      </Section>

      <Footer />
    </main>
  );
}


