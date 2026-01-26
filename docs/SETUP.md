# Setup Guide

## Requirements

- Node.js 18+
- pnpm (recommended)

## Install

```bash
pnpm install
```

## Run

```bash
pnpm dev
```

Open http://localhost:3000

## Build

```bash
pnpm build
pnpm start
```

## Lint

```bash
pnpm lint
```

## Environment Variables

Create `.env.local`:

```
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
NEXT_PUBLIC_SITE_URL=
```

Notes:
- `NEXT_PUBLIC_SITE_URL` should be your production domain.
- Resend keys are required to send contact form emails.
