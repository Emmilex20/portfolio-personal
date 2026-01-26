import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Emmanuel Agina | Full Stack Developer",
    template: "%s | Emmanuel Agina",
  },
  description:
    "Full stack developer specializing in React.js, Next.js, and product-focused web apps. Available for collaboration.",
  keywords: [
    "Emmanuel Agina",
    "full stack developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "portfolio",
    "web developer",
    "UI engineer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Emmanuel Agina | Full Stack Developer",
    description:
      "Full stack developer specializing in React.js, Next.js, and product-focused web apps.",
    url: "/",
    siteName: "Emmanuel Agina",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Agina | Full Stack Developer",
    description:
      "Full stack developer specializing in React.js, Next.js, and product-focused web apps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* background glow */}
          <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-32 left-1/2 h-105 w-185 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_60%)] blur-3xl" />
            <div className="absolute -bottom-40 right-1/4 h-105 w-130 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.28),transparent_60%)] blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_20%,transparent_80%,rgba(255,255,255,0.03))]" />
          </div>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
