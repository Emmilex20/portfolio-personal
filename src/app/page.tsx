import SiteNavbar from "@/components/site-navbar";
import Hero from "@/components/hero";
import Section from "@/components/section";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import ProjectCard from "@/components/project-card";
import { featuredCurrentProjects } from "@/data/featured-current";
import ContactForm from "@/components/contact-form";
import Testimonials from "@/components/testimonials";
import Timeline from "@/components/timeline";
import Footer from "@/components/footer";

const metrics = [
  ["20+", "Products & client builds"],
  ["6", "Current flagship projects"],
  ["Web + Mobile", "Product delivery"],
  ["AI + SaaS", "Current focus"],
];

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <SiteNavbar />
      <Hero />

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(([value, label], index) => (
            <div
              key={label}
              className={`p-5 ${index ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""}`}
            >
              <div className="text-xl font-semibold tracking-tight md:text-2xl">{value}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <Section
        id="work"
        title="Flagship work"
        subtitle="The products that best represent what I build now: real platforms, operational workflows, AI features, commerce, SaaS and polished public experiences."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredCurrentProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-7 flex justify-center">
          <Link
            href="/projects"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            Explore the wider project archive →
          </Link>
        </div>
      </Section>

      <Section
        id="services"
        title="What I build"
        subtitle="I work where product thinking, engineering and business workflows meet."
        className="pt-2"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            [
              "Full-stack products",
              "Production-ready web apps, SaaS platforms, dashboards, portals and internal tools with clean architecture.",
            ],
            [
              "AI & automation",
              "Practical AI features, workflow automation, assistants, retrieval and integrations that reduce repetitive work.",
            ],
            [
              "Product UI/UX",
              "Responsive interfaces, motion, interaction design, design systems and conversion-focused user journeys.",
            ],
            [
              "Business integrations",
              "Payments, WhatsApp, authentication, email, storage, analytics, APIs and operational third-party services.",
            ],
            [
              "Mobile experiences",
              "Cross-platform product experiences and mobile companion apps designed around the same core business system.",
            ],
            [
              "Launch & growth polish",
              "SEO, performance, accessibility, onboarding, analytics and final QA that make products feel launch-ready.",
            ],
          ].map(([title, description]) => (
            <Card
              key={title}
              className="group rounded-3xl border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="mb-4 h-9 w-9 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/20 via-violet-500/15 to-fuchsia-500/15 transition group-hover:scale-110" />
              <div className="text-base font-semibold">{title}</div>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="proof"
        title="Proof & trust"
        subtitle="The standard is simple: understand the problem, communicate clearly and ship work people can actually use."
        className="pt-2"
      >
        <Testimonials />
      </Section>

      <Section
        id="timeline"
        title="Build journey"
        subtitle="A snapshot of how my work has evolved from frontend builds into larger full-stack, SaaS and AI products."
        className="pt-2"
      >
        <Timeline />
      </Section>

      <Section
        id="process"
        title="How I work"
        subtitle="Enough process to protect quality, without turning product development into bureaucracy."
        className="pt-2"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Understand", "Map the business goal, users, constraints, risks and the exact outcome the product needs to create."],
            ["02", "Shape", "Turn the idea into flows, data models, interface hierarchy and a realistic build plan."],
            ["03", "Build", "Ship in focused iterations with responsive UI, reliable state, integrations and production-minded code."],
            ["04", "Polish", "Test the important journeys, tighten performance and UX, then prepare the product for real users."],
          ].map(([number, title, description]) => (
            <Card key={title} className="rounded-3xl border-white/10 bg-white/[0.035] p-6">
              <div className="text-xs font-semibold tracking-[0.2em] text-blue-300/70">{number}</div>
              <div className="mt-4 text-base font-semibold">{title}</div>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="capabilities"
        title="Technical range"
        subtitle="I’m most useful on products that need someone who can move across interface, backend and integrations without losing the product picture."
        className="pt-2"
      >
        <div className="flex flex-wrap gap-2.5">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "MongoDB",
            "Supabase",
            "Prisma",
            "REST APIs",
            "OpenAI",
            "WhatsApp Cloud API",
            "Paystack",
            "Firebase",
            "Tailwind CSS",
            "Framer Motion",
            "Vercel",
            "Render",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            >
              {item}
            </span>
          ))}
        </div>
      </Section>

      <Section
        id="about"
        title="About me"
        subtitle="Developer, product builder and the person who likes turning complicated workflows into something people can actually understand."
        className="pt-2"
      >
        <Card className="rounded-[2rem] border-white/10 bg-white/[0.035] p-3 md:p-5">
          <div className="grid gap-6 md:grid-cols-[1.15fr_.85fr] md:items-stretch">
            <div className="flex flex-col justify-center p-4 md:p-7">
              <div className="mb-5 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/55">
                Full-stack developer • Product builder
              </div>
              <p className="text-base leading-8 text-white/75 md:text-lg">
                I’m Emmanuel Agina. I build digital products from the business problem through to the production interface: product structure, frontend, backend, APIs, automation and the final polish that makes the experience feel intentional.
              </p>
              <p className="mt-4 text-sm leading-7 text-white/60 md:text-base">
                My recent work spans education, WhatsApp automation, pharmaceutical commerce, skincare, faith/community platforms and competition products. I care about clean systems, strong visual hierarchy and shipping useful software rather than demo-only interfaces.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:opacity-90"
                >
                  Start a conversation
                </a>
                <a
                  href="https://github.com/Emmilex20"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/75 transition hover:bg-white/10"
                >
                  GitHub profile
                </a>
              </div>
            </div>
            <div className="relative min-h-[380px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
              <Image
                src="/profile.webp"
                alt="Portrait of Emmanuel Agina"
                fill
                className="object-cover transition duration-700 hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/65 to-transparent" />
            </div>
          </div>
        </Card>
      </Section>

      <Section
        id="availability"
        title="Available for the right build"
        subtitle="Remote collaboration, client product development, technical partnerships and focused product engineering engagements."
        className="pt-2"
      >
        <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-gradient-to-br from-blue-500/10 via-white/[0.035] to-violet-500/10 p-7 md:p-9">
          <div className="grid gap-7 md:grid-cols-[1.2fr_.8fr] md:items-center">
            <div>
              <div className="text-2xl font-semibold tracking-tight md:text-3xl">Have a product that needs more than just a pretty frontend?</div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
                Send the problem, current stage and what success should look like. I can help shape the product, build the system and get it into a state you can confidently show users or clients.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
              {[
                ["Status", "Open to collaboration"],
                ["Location", "Nigeria • Remote"],
                ["Reply", "Usually within 24 hours"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-black/15 p-4">
                  <div className="text-xs uppercase tracking-[0.14em] text-white/40">{label}</div>
                  <div className="mt-1 text-sm text-white/80">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Section>

      <Section
        id="contact"
        title="Let’s build something useful"
        subtitle="Tell me what you’re building, where it is stuck and what you need from me."
        className="pt-2 pb-24"
      >
        <Card className="rounded-[2rem] border-white/10 bg-white/[0.035] p-6 md:p-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="text-xl font-semibold">Start with the brief.</div>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/65">
                Include the product idea or existing product, timeline, key requirements and the part you want me to own. I’ll respond with the clearest next step.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/api/profile-pdf"
                  className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:opacity-90"
                >
                  Download profile PDF
                </a>
                <Link
                  href="/projects"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/75 transition hover:bg-white/10"
                >
                  Browse projects
                </Link>
              </div>

              <div className="mt-8 space-y-2 text-sm text-white/55">
                <p>aginaemmanuel6@gmail.com</p>
                <p>Nigeria • Available remotely</p>
                <p>github.com/Emmilex20</p>
              </div>
            </div>

            <ContactForm />
          </div>
        </Card>
      </Section>

      <Footer />
    </main>
  );
}
