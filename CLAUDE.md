# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Related repository

This is the marketing/legal website for Lenderoo. The actual app (React
Native / Expo Router, Supabase backend) lives in a separate sibling repo at
`D:\Repos\Personal Repos\Lenderoo\Lenderoo` — it has its own `CLAUDE.md`.
This site's Privacy Policy (`src/components/PrivacyPolicy.tsx`) and Data
Deletion (`src/components/DataDeletion.tsx`) pages describe in prose what
account deletion, data retention, and third-party services (Supabase, Expo
Notifications) do in the app — when that app repo's behavior changes,
especially anything under `supabase/functions/delete-account/` or the RLS
policies in `supabase/migrations/`, check whether this copy is still
accurate. These are two separate repos, so changes in one won't show up in
a diff of the other.

## Project Overview

Marketing/legal website for the Lenderoo app, built as a Vite 6 + React 19 +
TypeScript single-page app. No meta-framework (not Next.js) — routing is
hand-rolled in `src/App.tsx` via a `currentPath` state variable plus
`pushState`/`popstate` wiring. Hosted on Vercel; `vercel.json` rewrites every
path to `index.html` (static files in `public/` are served first).

**Key Technologies:**
- **Vite 6** as the build tool (`@vitejs/plugin-react`)
- **React 19** with TypeScript, no router library
- **Tailwind CSS v4** via `@tailwindcss/vite` (not the PostCSS plugin)
- **lucide-react** for icons

## Common Commands

```bash
npm run dev      # Vite dev server, port 3000
npm run build    # Production build to dist/
npm run preview  # Preview the production build locally
npm run lint     # tsc --noEmit (no separate linter configured)
```

## Structure

- `src/App.tsx` — routing (`currentPath` string compared against literals:
  `/`, `/privacy`, `/delete-data`, `/roadmap`, else 404) + top-level page
  composition + dark mode state + per-route `document.title`
- `src/lib/site.ts` — single source for support email, developer name, store
  links and page titles. Never hardcode these in components.
- `src/components/` — one component per page/section: `Navbar`, `Hero`,
  `Features`, `Screenshots`, `AppSimulator`, `Footer`, `NotFound`,
  `PrivacyPolicy`, `DataDeletion`, `Roadmap`, plus `Link` (use it for every
  in-site link: a real `<a href>` with client-side navigation) and
  `GetTheApp` (the only place store buttons are rendered)
- `src/index.css` — Tailwind entry point
- `public/` — static assets: `brand/` (logo mark and mascot, from the app's
  `assets/images/icon.png` and `kangaroo.png`), favicons, `og-image.png`,
  `robots.txt`, `sitemap.xml`
- `docs/LAUNCH-AUDIT.md` — pre-launch audit and plan

## Styling

Tailwind v4 utility classes directly in JSX, no CSS Modules or
styled-components. Dark mode via a `dark` class on `document.documentElement`:
set before first paint by the boot script in `index.html`, then by `App.tsx`.
A saved `localStorage` choice wins, otherwise the OS setting.
`@custom-variant dark` in `index.css` is what makes `dark:` follow the class;
without it Tailwind v4 follows the OS setting and the toggle silently breaks.

Contrast: the brand teal `#00BFA6` is only 2.3:1 against white. Never use it
for text or as a background behind white text; use `teal-700` (light) /
`teal-300` (dark) for teal text. Small grey text is `slate-600` /
`dark:slate-400` or darker.
