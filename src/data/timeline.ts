export type TimelineItem = {
  year: string;
  title: string;
  subtitle: string;
  details: string[];
};

export const timeline: TimelineItem[] = [
  {
    year: "2026",
    title: "Frontend Engineer (Collaboration-ready)",
    subtitle: "Next.js • TypeScript • UI Systems",
    details: [
      "Build modern apps with clean design systems and strong UX.",
      "Ship fast with reusable components and scalable patterns.",
    ],
  },
  {
    year: "2025",
    title: "Dashboard & Product Systems",
    subtitle: "Admin panels • Architecture • UI polish",
    details: [
      "Structured dashboard layouts for future modules and analytics.",
      "Focused on clarity, spacing, and consistency across pages.",
    ],
  },
  {
    year: "2024",
    title: "E-commerce & Payments",
    subtitle: "Checkout flow • Cart logic • Integrations",
    details: [
      "Built product UI, cart calculations, and payment-ready flows.",
      "Learned real-world edge cases and user trust patterns.",
    ],
  },
];