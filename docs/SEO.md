# SEO Guide

## Site URL

Set `NEXT_PUBLIC_SITE_URL` in `.env.local` and in your hosting provider.
This is used for canonical URLs, Open Graph, and sitemap links.

## Metadata

Global metadata lives in:

```
src/app/layout.tsx
```

Update the title, description, and keywords there if needed.

## Open Graph Image

The Open Graph image is generated at:

```
src/app/opengraph-image.tsx
```

Edit that file to change the social preview image.

## Sitemap and Robots

Metadata routes live here:

```
src/app/sitemap.ts
src/app/robots.ts
```

These are generated automatically by Next.js.
