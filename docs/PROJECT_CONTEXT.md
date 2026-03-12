# Project Context for Continuity / Handover

## Product intent
Build a modern coworking marketing site aligned with Figma visual direction, editable via Payload CMS, and optimized for SEO/performance/responsive behavior.

## Stack
- Next.js (App Router)
- Payload CMS v3
- SQLite adapter (`payload.db` local)
- Tailwind CSS
- Framer Motion (hero/section entry effects)

## Key files
- `src/payload.config.ts`: CMS config + DB adapter + collections/globals registration.
- `src/globals/Homepage.ts`: editable homepage content model.
- `src/collections/Memberships.ts`: pricing plans + bullet benefits.
- `src/collections/Spaces.ts`: space cards and imagery.
- `src/app/(frontend)/page.tsx`: server component fetching `homepage` global.
- `src/components/HomepageClient.tsx`: interactive, responsive visual page sections.

## Data flow
1. Request hits Next.js page.
2. Page loads Payload config and fetches `homepage` global.
3. If CMS is empty/unavailable, fallback seed content is rendered.
4. Client component renders animated UI.

## SEO + performance decisions
- Server-side rendering for first view and metadata in root layout.
- Minimal JavaScript on critical path (single client component).
- Image loading strategy: first image eager, later images lazy.
- Utility-first CSS to reduce custom stylesheet size.

## How to continue later
1. Add additional sections as Payload blocks for full page-builder flexibility.
2. Add media collection for first-class image uploads (instead of URL fields).
3. Add localized fields for Thai/English content support.
4. Add automated Lighthouse + Playwright checks in CI.

## Handover for another developer
- Start with `npm install` and `npm run dev`.
- Open `/admin`, create first admin user, and edit global `homepage`.
- Keep new business content in Payload entities; avoid hard-coding in components.
- Update this context doc whenever architecture or data model changes.
