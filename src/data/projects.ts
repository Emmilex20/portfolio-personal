import "server-only";

import { cache } from "react";

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
    src: string;
    alt: string;
  }>;
  sections: Array<{
    title: string;
    content: string[];
  }>;
  featured?: boolean;
};

type GitHubRepo = {
  name: string;
  description: string | null;
  homepage: string | null;
  html_url: string;
  language: string | null;
  languages_url: string;
  size: number;
  fork: boolean;
  private: boolean;
  archived: boolean;
  disabled: boolean;
  pushed_at: string;
  updated_at: string;
};

type RepoSeed = Omit<GitHubRepo, "languages_url" | "fork" | "private" | "archived" | "disabled"> & {
  languages: string[];
};

type ProjectCopy = {
  title?: string;
  tagline: string;
  role: string;
  stack?: string[];
  highlights: string[];
  sections: Project["sections"];
};

const DEFAULT_GITHUB_USERNAME = process.env.GITHUB_USERNAME ?? "Emmilex20";
const GITHUB_REVALIDATE_SECONDS = 60 * 60;
const PROJECT_LIMIT = 8;
const FEATURED_LIMIT = 3;

const EXCLUDED_REPO_NAMES = new Set([
  "portfolio-personal",
  "portfolio",
  "Emmilex20",
]);

const PINNED_PROJECTS: Project[] = [
  {
    slug: "school-management-system",
    title: "School Management System",
    tagline:
      "A private school operations platform for managing academics, records, and day-to-day admin workflows in one product.",
    year: "2026",
    role: "Full-stack Engineer",
    stack: ["Private Repository", "School Admin Workflows", "Dashboard UX"],
    highlights: [
      "Most recent project called out for the portfolio",
      "Built in a private GitHub repository",
      "Live deployment is available for portfolio review",
    ],
    links: {
      live: "https://school-management-system-two-rosy.vercel.app/",
    },
    sections: [
      {
        title: "Overview",
        content: [
          "This project is a school management product built in a private repository, so the portfolio presents the work without exposing source access.",
        ],
      },
      {
        title: "What it covers",
        content: [
          "The system is framed around school operations, which typically means handling records, staff or student workflows, and the kind of admin interfaces that need clarity and reliability.",
        ],
      },
      {
        title: "Why it is pinned",
        content: [
          "You identified this as your most recent important project, so it is now pinned into the portfolio data instead of waiting on public GitHub discovery.",
        ],
      },
    ],
    featured: true,
  },
];

const PROJECT_COPY: Record<string, ProjectCopy> = {
  faithbliss: {
    title: "Faithbliss",
    tagline:
      "A faith-centered product experience with a live deployment, structured content, and room for community features.",
    role: "Full-stack Engineer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: [
      "One of the most recently pushed repos in the account",
      "Live deployment already connected to the GitHub project",
      "Large TypeScript codebase with active iteration",
    ],
    sections: [
      {
        title: "Overview",
        content: [
          "Faithbliss reads like a real product build rather than a throwaway demo. It combines a live deployment with a substantial codebase and a structure that can support content, community, and ongoing iteration.",
        ],
      },
      {
        title: "Why it stands out",
        content: [
          "This repo is both current and sizeable, which is exactly the combination a portfolio should surface first.",
          "The project signals active development discipline because the public deployment and the GitHub activity line up.",
        ],
      },
      {
        title: "Portfolio fit",
        content: [
          "It shows product thinking, not just interface assembly, which makes it stronger than placeholder portfolio entries.",
        ],
      },
    ],
  },
  gradtracker: {
    title: "GradTracker",
    tagline:
      "A graduation planning and progress-tracking product designed around milestones, deadlines, and clear academic visibility.",
    role: "Product Engineer",
    stack: ["HTML", "CSS", "JavaScript", "Vercel"],
    highlights: [
      "Currently the largest public repo surfaced from the GitHub account",
      "Recent push activity makes it current, not archival",
      "Live deployment linked from GitHub",
    ],
    sections: [
      {
        title: "Overview",
        content: [
          "GradTracker is the clearest example of a substantial project in the account. The repository footprint is large, the deployment is public, and the theme is easy for visitors to understand immediately.",
        ],
      },
      {
        title: "Why it stands out",
        content: [
          "Large repositories usually reveal whether a project can sustain more than a landing page. This one does.",
          "It also has fresh activity, which helps the work feel current rather than historical.",
        ],
      },
      {
        title: "Portfolio fit",
        content: [
          "This is the kind of project that gives your portfolio more credibility because it looks like an owned product with real scope.",
        ],
      },
    ],
  },
  classbookingapp: {
    title: "Class Booking App",
    tagline:
      "A scheduling and booking workflow with a live deployment, CMS-backed content, and account-aware user flows.",
    role: "Full-stack Engineer",
    stack: ["Next.js", "TypeScript", "Sanity", "Clerk", "Tailwind CSS"],
    highlights: [
      "Live booking product already deployed",
      "Modern TypeScript stack with content and auth tooling",
      "Still recent enough to count as current work",
    ],
    sections: [
      {
        title: "Overview",
        content: [
          "Class Booking App presents as a real product workflow instead of a marketing-only build. It is useful in a portfolio because the user journey is obvious from the repo name and deployment.",
        ],
      },
      {
        title: "Why it stands out",
        content: [
          "Booking flows are a good signal of product complexity because they touch content, user state, and conversion.",
          "This project also benefits from being live, which makes it easier for recruiters and clients to evaluate quickly.",
        ],
      },
      {
        title: "Portfolio fit",
        content: [
          "It reinforces that your work goes beyond static pages into practical product workflows.",
        ],
      },
    ],
  },
  jncchoralweb: {
    title: "JNC Choral Web",
    tagline:
      "A polished website build for a choral organization with structured presentation, strong branding, and active recent development.",
    role: "Frontend Engineer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Large active TypeScript repo",
      "Good fit for portfolio variety beyond SaaS and booking products",
      "Recent push activity keeps it current",
    ],
    sections: [
      {
        title: "Overview",
        content: [
          "JNC Choral Web adds range to the portfolio. It broadens the work beyond booking and dashboard-style projects while still showing polish and deliberate frontend structure.",
        ],
      },
      {
        title: "Why it stands out",
        content: [
          "The repo is large enough to count as meaningful work and recent enough to deserve front-page placement.",
          "It also helps the overall portfolio read as more versatile.",
        ],
      },
      {
        title: "Portfolio fit",
        content: [
          "Including this project makes the portfolio feel less repetitive and more representative of your actual client-facing output.",
        ],
      },
    ],
  },
  airclassictravel: {
    title: "Air Classic Travel",
    tagline:
      "A travel booking interface with destination discovery, purchase flow structure, and a sizeable frontend codebase.",
    role: "Frontend Engineer",
    stack: ["React", "JavaScript", "Tailwind CSS", "Paystack"],
    highlights: [
      "One of the larger frontend repositories in the account",
      "Public deployment attached to the repo",
      "Good example of commerce-style UI and flow design",
    ],
    sections: [
      {
        title: "Overview",
        content: [
          "Air Classic Travel is strong portfolio material because travel products demand clear information hierarchy, action-heavy flows, and trust-building UI.",
        ],
      },
      {
        title: "Why it stands out",
        content: [
          "The repository size makes it substantial, and the product domain is easy for viewers to evaluate quickly.",
          "It complements your newer work by showing another interface-heavy product category.",
        ],
      },
      {
        title: "Portfolio fit",
        content: [
          "This project adds scale and commercial relevance to the list without feeling redundant.",
        ],
      },
    ],
  },
  studyhabitcollege: {
    title: "StudyHabit College",
    tagline:
      "A student-focused product for building study routines, tracking progress, and keeping the interface light and readable.",
    role: "Frontend Engineer",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Large enough to qualify as one of the account's bigger projects",
      "Clear product concept with educational focus",
      "Strong fit for motion and dashboard-like UI work",
    ],
    sections: [
      {
        title: "Overview",
        content: [
          "StudyHabit College helps the portfolio show that you can build focused product experiences around consistency, progress, and user motivation.",
        ],
      },
      {
        title: "Why it stands out",
        content: [
          "The concept is immediately understandable, and the codebase is large enough to feel real.",
          "It also adds a different audience and product tone than your booking or travel projects.",
        ],
      },
      {
        title: "Portfolio fit",
        content: [
          "This is useful portfolio evidence for product UX work where clarity matters as much as polish.",
        ],
      },
    ],
  },
  emmycode: {
    title: "Emmy Code",
    tagline:
      "A developer-focused brand and portfolio experience built to present services, work, and contact pathways with polish.",
    role: "Frontend Engineer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: [
      "Substantial TypeScript project with a live deployment",
      "Represents branding and presentation work, not just app workflows",
      "Useful contrast against product-heavy portfolio pieces",
    ],
    sections: [
      {
        title: "Overview",
        content: [
          "Emmy Code gives the portfolio a project that leans into personal brand, presentation, and conversion rather than pure application flow.",
        ],
      },
      {
        title: "Why it stands out",
        content: [
          "A strong portfolio benefits from a mix of product and brand surfaces. This repo helps balance that mix.",
          "It is also big enough to count as meaningful work rather than a thin static site.",
        ],
      },
      {
        title: "Portfolio fit",
        content: [
          "It shows that you can build credible marketing and portfolio experiences in addition to application UIs.",
        ],
      },
    ],
  },
  venivicispa: {
    title: "Venivici Spa",
    tagline:
      "A wellness and spa web experience with service presentation, conversion structure, and deployable frontend polish.",
    role: "Frontend Engineer",
    stack: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    highlights: [
      "Large enough to count as substantial current work",
      "Public deployment available",
      "Adds service-business and wellness domain coverage",
    ],
    sections: [
      {
        title: "Overview",
        content: [
          "Venivici Spa strengthens the portfolio by showing service-business presentation work with a commercial tone and clear conversion framing.",
        ],
      },
      {
        title: "Why it stands out",
        content: [
          "It is one of the larger frontend repos on the account and broadens the visible project mix.",
          "The domain also helps show that your UI work is adaptable across industries.",
        ],
      },
      {
        title: "Portfolio fit",
        content: [
          "This project is useful when the portfolio needs variety without sacrificing polish or perceived scope.",
        ],
      },
    ],
  },
};

const FALLBACK_REPOS: RepoSeed[] = [
  {
    name: "GradTracker",
    description: null,
    homepage: "https://grad-tracker-pied.vercel.app",
    html_url: "https://github.com/Emmilex20/GradTracker",
    language: "HTML",
    languages: ["HTML", "CSS", "JavaScript"],
    size: 32549,
    pushed_at: "2026-03-10T00:29:41Z",
    updated_at: "2026-03-10T00:29:45Z",
  },
  {
    name: "faithbliss",
    description: null,
    homepage: "https://faithbliss-alpha.vercel.app",
    html_url: "https://github.com/Emmilex20/faithbliss",
    language: "TypeScript",
    languages: ["TypeScript", "CSS", "JavaScript", "HTML"],
    size: 10708,
    pushed_at: "2026-03-11T19:16:31Z",
    updated_at: "2026-03-11T19:16:35Z",
  },
  {
    name: "JNC-Choral-web",
    description: null,
    homepage: null,
    html_url: "https://github.com/Emmilex20/JNC-Choral-web",
    language: "TypeScript",
    languages: ["TypeScript", "CSS", "JavaScript", "HTML"],
    size: 11169,
    pushed_at: "2026-02-09T18:09:51Z",
    updated_at: "2026-02-09T18:09:55Z",
  },
  {
    name: "air-classic-travel",
    description: null,
    homepage: "https://air-classic-travel.vercel.app",
    html_url: "https://github.com/Emmilex20/air-classic-travel",
    language: "JavaScript",
    languages: ["JavaScript", "CSS", "HTML"],
    size: 15661,
    pushed_at: "2025-06-25T06:40:56Z",
    updated_at: "2025-06-25T06:41:00Z",
  },
  {
    name: "Class-booking-app",
    description: null,
    homepage: "https://class-booking-app-one.vercel.app",
    html_url: "https://github.com/Emmilex20/Class-booking-app",
    language: "TypeScript",
    languages: ["TypeScript", "CSS", "JavaScript", "HTML"],
    size: 1313,
    pushed_at: "2026-02-10T05:02:01Z",
    updated_at: "2026-02-10T05:02:05Z",
  },
  {
    name: "emmyCode",
    description: null,
    homepage: "https://emmy-code.vercel.app",
    html_url: "https://github.com/Emmilex20/emmyCode",
    language: "TypeScript",
    languages: ["TypeScript", "CSS", "JavaScript", "HTML"],
    size: 6864,
    pushed_at: "2025-08-02T14:32:07Z",
    updated_at: "2025-08-02T14:32:11Z",
  },
  {
    name: "studyhabitcollege",
    description: null,
    homepage: "https://studyhabitcollege.vercel.app",
    html_url: "https://github.com/Emmilex20/studyhabitcollege",
    language: "TypeScript",
    languages: ["TypeScript", "CSS", "JavaScript", "HTML"],
    size: 7466,
    pushed_at: "2025-07-23T01:56:35Z",
    updated_at: "2025-07-23T01:56:38Z",
  },
  {
    name: "VeniviciSpa",
    description: null,
    homepage: "https://venivici-spa.vercel.app",
    html_url: "https://github.com/Emmilex20/VeniviciSpa",
    language: "JavaScript",
    languages: ["JavaScript", "CSS", "HTML"],
    size: 5671,
    pushed_at: "2025-08-02T01:51:31Z",
    updated_at: "2025-08-02T01:51:34Z",
  },
];

function normalizeRepoKey(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function slugifyRepoName(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatRepoTitle(value: string) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function daysSince(date: string) {
  const diffMs = Date.now() - new Date(date).getTime();
  return Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
}

function isRecentAndLarge(repo: GitHubRepo) {
  return repo.size >= 1000;
}

function repoScore(repo: GitHubRepo) {
  const recentDays = daysSince(repo.pushed_at);
  const recentBoost = Math.max(0, 240 - recentDays) * 120;
  const sizeBoost =
    repo.size >= 15000
      ? 25000
      : repo.size >= 8000
        ? 18000
        : repo.size >= 4000
          ? 12000
          : repo.size >= 1000
            ? 6000
            : 0;

  return repo.size + recentBoost + sizeBoost;
}

function dedupeKey(repoName: string) {
  return normalizeRepoKey(repoName).replace(/[0-9]+$/g, "");
}

function buildGitHubHeaders() {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "portfolio-personal",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

async function githubFetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: buildGitHubHeaders(),
    next: { revalidate: GITHUB_REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error(`GitHub request failed: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

function unique(values: Array<string | undefined | null>) {
  return [...new Set(values.filter((value): value is string => Boolean(value)))];
}

function buildGenericTagline(repo: GitHubRepo, title: string, stack: string[]) {
  const primaryStack = stack.slice(0, 3).join(", ");
  const liveText = repo.homepage ? "with a public live deployment" : "tracked publicly on GitHub";

  return `${title} is a current larger project from GitHub, ${liveText}, and built around ${primaryStack || repo.language || "a modern web stack"}.`;
}

function buildGenericHighlights(repo: GitHubRepo, stack: string[]) {
  const highlights = [
    `Last pushed on ${formatDate(repo.pushed_at)}`,
    repo.homepage ? "Live deployment is linked from the repository" : "Public GitHub repository with active source history",
    stack.length ? `Primary stack surfaces as ${stack.slice(0, 4).join(", ")}` : undefined,
  ];

  return unique(highlights).slice(0, 3);
}

function buildGenericSections(repo: GitHubRepo, title: string, tagline: string, stack: string[]) {
  return [
    {
      title: "Overview",
      content: [tagline],
    },
    {
      title: "Why it made the list",
      content: [
        `${title} was selected from GitHub because it combines recent activity with a relatively large public codebase.`,
        `The latest visible push landed on ${formatDate(repo.pushed_at)}, which keeps it relevant to the current portfolio.`,
      ],
    },
    {
      title: "Stack and delivery",
      content: [
        stack.length
          ? `The repository surface points to ${stack.join(", ")} as the main technologies in use.`
          : `The repo is centered on ${repo.language ?? "web development technologies"} based on GitHub metadata.`,
        repo.homepage
          ? `A public deployment is available at ${repo.homepage}.`
          : "This project is currently represented through the public GitHub repository.",
      ],
    },
  ];
}

function buildProjectFromRepo(
  repo: Pick<GitHubRepo, "name" | "description" | "homepage" | "html_url" | "language" | "size" | "pushed_at" | "updated_at">,
  languages: string[],
  featured: boolean,
): Project {
  const key = normalizeRepoKey(repo.name);
  const copy = PROJECT_COPY[key];
  const title = copy?.title ?? formatRepoTitle(repo.name);
  const stack = copy?.stack ?? unique([...languages, repo.language, repo.homepage ? "Vercel" : undefined]).slice(0, 5);
  const tagline =
    copy?.tagline ??
    repo.description?.trim() ??
    buildGenericTagline(repo as GitHubRepo, title, stack);
  const highlights = copy?.highlights ?? buildGenericHighlights(repo as GitHubRepo, stack);
  const sections =
    copy?.sections ??
    buildGenericSections(repo as GitHubRepo, title, tagline, stack);

  return {
    slug: slugifyRepoName(repo.name),
    title,
    tagline,
    year: new Date(repo.pushed_at).getFullYear().toString(),
    role: copy?.role ?? (stack.includes("Next.js") ? "Full-stack Engineer" : "Frontend Engineer"),
    stack,
    highlights,
    links: {
      live: repo.homepage || undefined,
      github: repo.html_url,
    },
    sections,
    featured,
  };
}

async function fetchRepoLanguages(repo: GitHubRepo) {
  try {
    const payload = await githubFetchJson<Record<string, number>>(repo.languages_url);

    return Object.entries(payload)
      .sort((a, b) => b[1] - a[1])
      .map(([name]) => name)
      .slice(0, 4);
  } catch {
    return repo.language ? [repo.language] : [];
  }
}

function fallbackProjectsFromSnapshot() {
  return FALLBACK_REPOS.map((repo, index) =>
    buildProjectFromRepo(repo, repo.languages, index < FEATURED_LIMIT),
  );
}

function finalizeProjects(allProjects: Project[]) {
  const deduped: Project[] = [];
  const seenSlugs = new Set<string>();

  for (const project of allProjects) {
    if (seenSlugs.has(project.slug)) {
      continue;
    }

    seenSlugs.add(project.slug);
    deduped.push(project);
  }

  return deduped.map((project, index) => ({
    ...project,
    featured: index < FEATURED_LIMIT,
  }));
}

function withPinnedProjects(publicProjects: Project[]) {
  return finalizeProjects([...PINNED_PROJECTS, ...publicProjects]);
}

export const projects = withPinnedProjects(fallbackProjectsFromSnapshot());
export const featuredProjects = projects.filter((project) => project.featured);

export const getProjects = cache(async (): Promise<Project[]> => {
  try {
    const repos = await githubFetchJson<GitHubRepo[]>(
      `https://api.github.com/users/${DEFAULT_GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
    );

    const rankedRepos = repos
      .filter(
        (repo) =>
          !repo.fork &&
          !repo.private &&
          !repo.archived &&
          !repo.disabled &&
          !EXCLUDED_REPO_NAMES.has(repo.name) &&
          isRecentAndLarge(repo),
      )
      .sort((a, b) => repoScore(b) - repoScore(a));

    const selectedRepos: GitHubRepo[] = [];
    const seenKeys = new Set<string>();

    for (const repo of rankedRepos) {
      const key = dedupeKey(repo.name);

      if (seenKeys.has(key)) {
        continue;
      }

      seenKeys.add(key);
      selectedRepos.push(repo);

      if (selectedRepos.length === PROJECT_LIMIT) {
        break;
      }
    }

    if (!selectedRepos.length) {
      return withPinnedProjects(fallbackProjectsFromSnapshot());
    }

    const languageLists = await Promise.all(
      selectedRepos.map((repo) => fetchRepoLanguages(repo)),
    );

    const publicProjects = selectedRepos.map((repo, index) =>
      buildProjectFromRepo(repo, languageLists[index], index < FEATURED_LIMIT),
    );

    return withPinnedProjects(publicProjects);
  } catch {
    return withPinnedProjects(fallbackProjectsFromSnapshot());
  }
});

export const getFeaturedProjects = cache(async () => {
  const allProjects = await getProjects();
  return allProjects.filter((project) => project.featured);
});

export const getProjectBySlug = cache(async (slug: string) => {
  const allProjects = await getProjects();
  return allProjects.find((project) => project.slug === slug);
});
