# Content Editing Guide

## Key Files

- Home page: `src/app/page.tsx`
- Projects data: `src/data/projects.ts`
- Project detail layout: `src/app/projects/[slug]/page.tsx`
- Hero copy: `src/components/hero.tsx`
- Footer links: `src/components/footer.tsx`

## Projects

Edit `src/data/projects.ts`:

- `slug` must be unique (used in `/projects/[slug]` routes).
- `screenshots` should point to images under `public/projects/<slug>/`.
- `links.live` and `links.github` should be real URLs.

## Screenshots

Store images in:

```
public/projects/<slug>/
```

Example:

```
public/projects/gig-booking/01.png
public/projects/gig-booking/02.png
public/projects/gig-booking/03.png
```

## Profile Photo

The About section uses:

```
public/profile.jpg
```

Replace it with your own image and keep the same filename.

## Contact Info

Update contact text and links in `src/app/page.tsx` under the Contact section.

## Email Template

Email content is in `src/emails/contact-email.tsx`.
