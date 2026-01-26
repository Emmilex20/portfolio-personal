export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  stack: string[];
  highlights: string[];
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
  screenshots?: Array<{
    src: string; // path in /public
    alt: string;
  }>;
  sections: Array<{
    title: string;
    content: string[];
  }>;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "gig-booking",
    title: "Gig Booking Platform",
    tagline:
      "A talent booking platform that streamlines discovery, scheduling, and payment for live gigs.",
    year: "2026",
    role: "Full-stack Engineer",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    highlights: [
      "Authenticated booking flow with validation and guardrails",
      "Automated email notifications and confirmations",
      "PDF-ready summaries for organizers and vendors",
    ],
    links: {
      live: "https://gig-booking.vercel.app",
      github: "https://github.com/Emmilex20/gig-booking",
      caseStudy: "/projects/gig-booking",
    },
    screenshots: [
      { src: "/projects/gig-booking/01.png", alt: "Gig booking home" },
      { src: "/projects/gig-booking/02.png", alt: "Gig booking flow" },
      { src: "/projects/gig-booking/03.png", alt: "Gig booking overview" },
    ],
    sections: [
      {
        title: "Problem",
        content: [
          "Event organizers needed a clean way to find talent, book slots, and manage confirmations without back-and-forth.",
        ],
      },
      {
        title: "Approach",
        content: [
          "Built a clear booking funnel with authenticated flows, realtime validation, and polished UI states.",
          "Added email updates and PDF-ready summaries to keep communication tight.",
        ],
      },
      {
        title: "Outcome",
        content: [
          "A production-ready platform foundation that supports bookings, payments, and vendor management.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "class-booking-app",
    title: "Class Booking App",
    tagline:
      "A scheduling and booking experience for classes with CMS-driven content and location context.",
    year: "2026",
    role: "Full-stack Engineer",
    stack: ["Next.js", "TypeScript", "Sanity", "Clerk", "Tailwind"],
    highlights: [
      "CMS-driven class listings and updates",
      "Secure auth and profile management",
      "Location-aware browsing with map integration",
    ],
    links: {
      live: "https://class-booking-app-one.vercel.app",
      github: "https://github.com/Emmilex20/Class-booking-app",
      caseStudy: "/projects/class-booking-app",
    },
    screenshots: [
      { src: "/projects/class-booking-app/01.png", alt: "Class booking landing" },
      { src: "/projects/class-booking-app/02.png", alt: "Class listings" },
      { src: "/projects/class-booking-app/03.png", alt: "Class booking details" },
    ],
    sections: [
      {
        title: "Problem",
        content: [
          "Learners needed a simple way to find, compare, and book classes without manual coordination.",
        ],
      },
      {
        title: "Approach",
        content: [
          "Used Sanity for structured content and Clerk for secure onboarding and sessions.",
          "Designed map-aware browsing to help users choose classes by location.",
        ],
      },
      {
        title: "Outcome",
        content: [
          "A scalable booking experience that can grow into payments, reminders, and instructor dashboards.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "ai-mock-interview",
    title: "AI Mock Interview",
    tagline:
      "An interview practice tool with AI prompts, session tracking, and modern UX polish.",
    year: "2025",
    role: "Frontend Engineer",
    stack: ["React", "TypeScript", "Vite", "Tailwind", "Firebase"],
    highlights: [
      "AI-driven prompts and guided interview flow",
      "Form validation, timers, and session feedback states",
      "Responsive UI with polished motion",
    ],
    links: {
      live: "https://ai-mock-interview-taupe-delta.vercel.app",
      github: "https://github.com/Emmilex20/ai-mock-interview",
      caseStudy: "/projects/ai-mock-interview",
    },
    screenshots: [
      { src: "/projects/ai-mock-interview/01.png", alt: "AI mock interview home" },
      { src: "/projects/ai-mock-interview/02.png", alt: "Interview session" },
      { src: "/projects/ai-mock-interview/03.png", alt: "Interview feedback" },
    ],
    sections: [
      {
        title: "Problem",
        content: [
          "Interview prep tools often feel static and lack a realistic, guided experience.",
        ],
      },
      {
        title: "Approach",
        content: [
          "Built a guided flow with AI prompts, validation, and motion to keep sessions engaging.",
          "Focused on clarity, pacing, and mobile-friendly layouts.",
        ],
      },
      {
        title: "Outcome",
        content: [
          "A polished practice experience that feels close to a real interview session.",
        ],
      },
    ],
  },
  {
    slug: "studyhabitcollege",
    title: "StudyHabit College",
    tagline:
      "A student-focused platform for building study routines and tracking progress.",
    year: "2025",
    role: "Frontend Engineer",
    stack: ["React", "TypeScript", "Vite", "Tailwind", "Framer Motion"],
    highlights: [
      "Habit tracking flows with clear progress states",
      "Readable dashboards with strong hierarchy",
      "Smooth motion and responsive layouts",
    ],
    links: {
      live: "https://studyhabitcollege.vercel.app",
      github: "https://github.com/Emmilex20/studyhabitcollege",
      caseStudy: "/projects/studyhabitcollege",
    },
    screenshots: [
      { src: "/projects/studyhabitcollege/01.png", alt: "StudyHabit College landing" },
      { src: "/projects/studyhabitcollege/02.png", alt: "Habit tracking view" },
      { src: "/projects/studyhabitcollege/03.png", alt: "Progress dashboard" },
    ],
    sections: [
      {
        title: "Problem",
        content: [
          "Students need lightweight tools to build consistent routines without overwhelming setup.",
        ],
      },
      {
        title: "Approach",
        content: [
          "Designed a calm interface with clear progress signals and a short onboarding flow.",
        ],
      },
      {
        title: "Outcome",
        content: [
          "A focused product experience that encourages consistency and habit formation.",
        ],
      },
    ],
  },
  {
    slug: "investment",
    title: "Investment Platform",
    tagline:
      "A clean investment experience that communicates plans, performance, and onboarding.",
    year: "2025",
    role: "Frontend Engineer",
    stack: ["React", "TypeScript", "Vite", "Tailwind", "Axios"],
    highlights: [
      "Clear plan comparison and CTA hierarchy",
      "Performance-focused layout with trust signals",
      "Modern UI polish for finance audiences",
    ],
    links: {
      live: "https://investment-one-ruby.vercel.app",
      github: "https://github.com/Emmilex20/investment",
      caseStudy: "/projects/investment",
    },
    screenshots: [
      { src: "/projects/investment/01.png", alt: "Investment landing page" },
      { src: "/projects/investment/02.png", alt: "Investment plans" },
      { src: "/projects/investment/03.png", alt: "Investment onboarding" },
    ],
    sections: [
      {
        title: "Problem",
        content: [
          "Investment products need clarity, trust, and quick path-to-action for users.",
        ],
      },
      {
        title: "Approach",
        content: [
          "Built a conversion-focused layout with plan comparison, proof, and crisp CTAs.",
        ],
      },
      {
        title: "Outcome",
        content: [
          "A credible, modern surface that can scale into full dashboards and account flows.",
        ],
      },
    ],
  },
  {
    slug: "vitabiotics",
    title: "Vitabiotics Brand Site",
    tagline:
      "A product-forward brand experience for wellness with clean conversion paths.",
    year: "2025",
    role: "Frontend Engineer",
    stack: ["React", "TypeScript", "Vite", "Tailwind", "React Router"],
    highlights: [
      "Product-led layout with clear category framing",
      "Polished marketing sections and CTAs",
      "Responsive grids for modern catalog UI",
    ],
    links: {
      live: "https://vitabiotics.vercel.app",
      github: "https://github.com/Emmilex20/Vitabiotics",
      caseStudy: "/projects/vitabiotics",
    },
    screenshots: [
      { src: "/projects/vitabiotics/01.png", alt: "Vitabiotics landing" },
      { src: "/projects/vitabiotics/02.png", alt: "Vitabiotics products" },
      { src: "/projects/vitabiotics/03.png", alt: "Vitabiotics sections" },
    ],
    sections: [
      {
        title: "Problem",
        content: [
          "Wellness brands need visual clarity and structure to showcase product value quickly.",
        ],
      },
      {
        title: "Approach",
        content: [
          "Designed a product-led layout with strong hierarchy and conversion-ready sections.",
        ],
      },
      {
        title: "Outcome",
        content: [
          "A clean marketing experience that highlights products and builds trust.",
        ],
      },
    ],
  },
  {
    slug: "air-classic-travel",
    title: "Air Classic Travel",
    tagline:
      "A travel booking UI with destination discovery and a streamlined checkout flow.",
    year: "2025",
    role: "Frontend Engineer",
    stack: ["React", "JavaScript", "Vite", "Tailwind", "Paystack"],
    highlights: [
      "Destination discovery and search layout",
      "Payment-ready UI with trust cues",
      "Responsive booking cards and details",
    ],
    links: {
      live: "https://air-classic-travel.vercel.app",
      github: "https://github.com/Emmilex20/air-classic-travel",
      caseStudy: "/projects/air-classic-travel",
    },
    screenshots: [
      { src: "/projects/air-classic-travel/01.png", alt: "Air Classic landing" },
      { src: "/projects/air-classic-travel/02.png", alt: "Travel listings" },
      { src: "/projects/air-classic-travel/03.png", alt: "Travel checkout" },
    ],
    sections: [
      {
        title: "Problem",
        content: [
          "Travel booking needs to balance inspiration with quick paths to action.",
        ],
      },
      {
        title: "Approach",
        content: [
          "Built a discovery-first layout with fast access to booking details and payment flow.",
        ],
      },
      {
        title: "Outcome",
        content: [
          "A ready-to-scale travel UI that supports listings, booking, and payments.",
        ],
      },
    ],
  },
  {
    slug: "jpken-e-commerce",
    title: "JPKen E-commerce",
    tagline:
      "A multi-category storefront with cart, checkout, and payment-ready UX.",
    year: "2025",
    role: "Frontend Engineer",
    stack: ["React", "JavaScript", "Vite", "Redux Toolkit", "Paystack"],
    highlights: [
      "Cart flow with totals and inventory states",
      "Payment integrations (Paystack and PayPal-ready)",
      "Real-time UI feedback for checkout steps",
    ],
    links: {
      live: "https://jp-ken-e-commerce-client.vercel.app",
      github: "https://github.com/Emmilex20/jpKen-e-commerce",
      caseStudy: "/projects/jpken-e-commerce",
    },
    screenshots: [
      { src: "/projects/jpken-e-commerce/01.png", alt: "JPKen store home" },
      { src: "/projects/jpken-e-commerce/02.png", alt: "JPKen product listing" },
      { src: "/projects/jpken-e-commerce/03.png", alt: "JPKen checkout" },
    ],
    sections: [
      {
        title: "Problem",
        content: [
          "E-commerce experiences must feel fast, reliable, and easy to purchase from.",
        ],
      },
      {
        title: "Approach",
        content: [
          "Focused on a clean store layout, quick cart access, and payment-friendly checkout UI.",
        ],
      },
      {
        title: "Outcome",
        content: [
          "A storefront foundation that can scale into inventory, reviews, and order tracking.",
        ],
      },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
