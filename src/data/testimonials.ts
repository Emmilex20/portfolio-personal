export type Testimonial = {
  name: string;
  title: string;
  company?: string;
  quote: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Project Collaborator",
    title: "Product / Founder",
    company: "Startup",
    initials: "PC",
    quote:
      "Emmanuel delivered clean UI, fast iterations, and solid structure. Communication was smooth and the result felt premium.",
  },
  {
    name: "Team Lead",
    title: "Engineering Lead",
    company: "Organization",
    initials: "TL",
    quote:
      "Strong attention to detail and layout. He builds with clarity and thinks about scalability, not just visuals.",
  },
  {
    name: "Client",
    title: "Business Owner",
    company: "SME",
    initials: "CL",
    quote:
      "Great experience. The interface was modern and the flow was simple for users. I’d collaborate again.",
  },
];