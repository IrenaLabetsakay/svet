# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

Next.js 15 App Router project with Tailwind CSS v4 and TypeScript.

**Pages** (`app/`):
- `/` → `app/page.tsx` — Home (Hero, ServicesPreview, Advantages, Reviews, CallToAction)
- `/services` → `app/services/page.tsx` — Full services list with prices
- `/about` → `app/about/page.tsx` — Company info, stats, values
- `/contacts` → `app/contacts/page.tsx` — Contact form + info

**Components** (`components/`):
- `layout/Header.tsx` — Sticky nav with mobile hamburger menu (`"use client"`)
- `layout/Footer.tsx` — Footer with links and contact info
- `home/` — Section components used only on the home page
- `contacts/ContactForm.tsx` — Controlled form with submit state (`"use client"`)

**Styling**: Tailwind v4 — configured via CSS `@theme` in `app/globals.css`, not via `tailwind.config.js`. Custom colors: `navy` (#0F172A), `navy-light` (#1E293B), `accent` (#F59E0B). Standard Tailwind palette (`slate-*`, `amber-*`) is used throughout.

**Icons**: `lucide-react`

**Color scheme**: Dark navy (`slate-900`) backgrounds, amber/yellow (`amber-400`) accents, white/`slate-50` content areas.

## Key Conventions

- Server Components by default; add `"use client"` only for interactivity (state, event handlers)
- Each page exports `metadata` for SEO
- Phone placeholder: `+7 (000) 000-00-00` / `tel:+70000000000`
- Address placeholder: `г. Ваш город, ул. Примерная, 1`
- Contact form currently logs to console — needs a backend/email integration
