# Emmanuel Agina Portfolio

A modern, conversion-ready portfolio built with Next.js. It showcases projects,
capabilities, and a contact flow with email delivery.

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Resend (email)

## Features

- Animated hero and section reveals
- Featured projects and detailed case-study pages
- Responsive layout across devices
- Contact form with server route + email template
- Dark/light theme toggle
- SEO metadata, sitemap, and robots

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the dev server:

```bash
pnpm dev
```

Open http://localhost:3000

Full setup steps: `docs/SETUP.md`

## Environment Variables

Create `.env.local` and set:

```
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
NEXT_PUBLIC_SITE_URL=
```

`NEXT_PUBLIC_SITE_URL` should be your production domain for correct metadata and sitemap URLs.

## Content Editing

See `docs/CONTENT.md` for the full guide.

## SEO

See `docs/SEO.md` for metadata, sitemap, and robots configuration.

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## Deployment

Deploy on Vercel or any Node-compatible host. Make sure to configure the
environment variables above in your hosting provider.
