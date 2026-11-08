# lenderoo.app

Marketing and legal website for the Lenderoo app (Vite + React + Tailwind v4, hosted on Vercel).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build to dist/
npm run lint     # type check
```

- Site-wide facts (support email, developer name, store links, page titles): `src/lib/site.ts`.
- Store buttons show "Coming soon" until `STORE_LINKS` has URLs.
- `/roadmap` reads release notes from Supabase; copy `.env.example` to `.env.local`.
- Pre-launch audit and plan: `docs/LAUNCH-AUDIT.md`.

See `CLAUDE.md` for structure and the link to the app repo.
