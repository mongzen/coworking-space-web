# Coworking Space Web (Payload CMS + Next.js)

A modern, SEO-ready coworking website powered by Payload CMS, Next.js App Router, and Tailwind CSS.

## Highlights

- **Payload CMS** for editable content (hero section, stats, memberships, spaces).
- **Tailwind CSS** for utility-first styling.
- **Framer Motion** for lightweight visual effects.
- **SEO-friendly metadata** in `src/app/layout.tsx`.
- **Responsive sections** for desktop/tablet/mobile layouts.
- **Fast load defaults** (optimized Next.js rendering + lazy images after the first visual).

## Quick start

```bash
npm install
npm run dev
```

Open:
- Website: `http://localhost:3000`
- Payload Admin: `http://localhost:3000/admin`

## Environment variables

Create `.env` if needed:

```bash
PAYLOAD_SECRET=change-me
DATABASE_URI=file:./payload.db
```

## Content model

- Global: `homepage`
- Collections: `memberships`, `spaces`

## Project continuity

See `docs/PROJECT_CONTEXT.md` for architecture notes and handover-ready context.
