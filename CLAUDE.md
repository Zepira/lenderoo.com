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
`pushState`/`popstate` wiring, with a GitHub Pages 404-redirect decode shim
for static hosting. `dist/` is committed build output; `vercel.json` and a
`CNAME` file suggest it's also deployable to Vercel.

**Key Technologies:**
- **Vite 6** as the build tool (`@vitejs/plugin-react`)
- **React 19** with TypeScript, no router library
- **Tailwind CSS v4** via `@tailwindcss/vite` (not the PostCSS plugin)
- **lucide-react** for icons, **motion** for animation

## Common Commands

```bash
npm run dev      # Vite dev server, port 3000
npm run build    # Production build to dist/
npm run preview  # Preview the production build locally
npm run lint     # tsc --noEmit (no separate linter configured)
```

## Structure

- `src/App.tsx` — routing (`currentPath` string compared against literals:
  `/`, `/privacy`, `/delete-data`, else 404) + top-level page composition +
  dark mode state (persisted to `localStorage`)
- `src/components/` — one component per page/section: `Navbar`, `Hero`,
  `Features`, `Screenshots`, `AppSimulator`, `Footer`, `KangarooLogo`,
  `NotFound`, `PrivacyPolicy`, `DataDeletion`
- `src/index.css` — Tailwind entry point
- `public/` — static assets, GitHub Pages `404.html` redirect trick, `CNAME`

## Styling

Tailwind v4 utility classes directly in JSX, no CSS Modules or
styled-components. Dark mode via a `dark` class toggled on
`document.documentElement` (see `App.tsx`), not `prefers-color-scheme`
media queries alone — respects a `localStorage` override.
