# lenderoo.app pre-launch audit and plan

Audited 7 Nov 2026 against the live site (www.lenderoo.app), this repo at `d6fde9e`, and the app repo (`Lenderoo/Lenderoo` at `4cdabc6`). Zepira Labs rules from `D:\zl` (CLAUDE.md, LEARNINGS, ADR 0003) were used as the standard.

Severity: **P0** = must fix before the app goes live (store review, legal or embarrassing). **P1** = should fix before launch. **P2** = polish, can follow.

---

## 1. Findings

### 1.1 Launch blockers (P0)

| # | Area | Finding | Evidence |
|---|---|---|---|
| B1 | Content | **The public Roadmap page shows raw, unmoderated feedback.** It includes profanity and insults ("the app is shit!" / "So's ur face", "Get some friends, loser", "Alana smells…"), and describes a past security hole in detail ("Leaking all emails of all users by searching by any name"). Statuses are also wrong: requests answered "Its on the list" are labelled **Shipped**. App reviewers and new users will see this. | `/roadmap`, data from Supabase `release_notes` + public feedback (migration 043) |
| B2 | Content | **Every download button goes to a dead page.** `play.google.com/store/apps/details?id=com.zepira.lenderoo` returns 404 (the app isn't public yet). The hero badge says "On Android now". | Navbar, hero, CTA banner, footer |
| B3 | Privacy | **Alana's personal Gmail is published** on the home page (hero "Privacy Highlights" card) and in the footer ("Email Developer Support"). The privacy page already uses `support@lenderoo.app`. | `Hero.tsx`, `Footer.tsx` |
| B4 | Legal | **`/terms` doesn't exist, but the app links to it** (`TERMS_OF_SERVICE_URL` in `lib/constants.ts`). It renders the 404 page. | App `lib/constants.ts:327` |
| B5 | Legal | **Privacy policy doesn't match the app.** Missing: Hardcover (book search, via the `hardcover-proxy` function), UPCitemdb (barcode lookups), camera use (barcode scanning, item photos), item photos (`item-images` bucket), in-app feedback (stored, and shown publicly on the roadmap), push tokens stored per device. Claims things the app doesn't collect: a "unique username" and a phone number (users table has name, email, avatar, friend code). No operator details beyond "Zepira Labs", no mention of the Australian Privacy Act or where data is stored. "Last updated 16 July 2026". | `PrivacyPolicy.tsx` vs app `docs/SITEMAP.md`, `lib/services/*`, `supabase/functions/*` |
| B6 | Accessibility | **Hero text is invisible for anyone whose phone or computer is in dark mode.** Root cause: Tailwind v4's `dark:` variant follows the OS setting by default, but the site's toggle only adds a `.dark` class, which Tailwind ignores (no `@custom-variant dark` in `index.css`). The hero has `bg-slate-50` with no dark override, so the H1 renders white on near-white (about 1.05:1). The same bug means **the site's light/dark toggle does nothing** to Tailwind styles. | Live check: `html.dark=false`, H1 `rgb(255,255,255)` on `oklch(0.984…)` |
| B7 | Brand | **The logo is wrong.** The navbar, footer, favicon and "Meet Lenderoo" card use a hand-drawn SVG blob (rendered at 12px inside a white dot it reads as a "1"). The real mark is the app icon: the cartoon kangaroo holding a book on teal (`Lenderoo/assets/images/icon.png`). | `KangarooLogo.tsx`, `public/favicon.svg` |

### 1.2 Brand and visual consistency with the app (P1)

| # | Finding | App reality |
|---|---|---|
| V1 | **Brand teal fails contrast as used.** White text on `#00BFA6` is 2.3:1 (needs 4.5:1, or 3:1 for large text). That covers every primary button, the "buy less." headline, the badge and the eyebrow labels. | App uses the same teal with white button text, so the app has the same issue (flag it for the app too). Fix: keep `#00BFA6` for fills and icons, add a darker "teal ink" (about `#00796B`, 5.3:1 on white) for text and button fills, or use dark navy text on teal. |
| V2 | **Fonts don't match.** Site: Inter only (plus unused JetBrains Mono). | App: **Outfit** for headings and branding, **Inter** for body. |
| V3 | **Palette doesn't match.** Site adds blue, violet, rose and amber accents per feature card and uses Tailwind slate for dark mode. | App tokens (`global.css`): teal `#00BFA6`, yellow `#FFC857`, coral `#FF6B6B`, background `#FDFDFD`, navy foreground `hsl(222 47% 11%)`, dark background `hsl(222 47% 6%)`, cards `rounded-3xl`, buttons 16px radius. |
| V4 | **The hero "screenshot" isn't the app.** It's `AppSimulator.tsx`, a 660-line hand-coded mock with invented items (Sapiens, DeWalt drill, Catan), invented friends, fake notifications, and tabs that don't exist (Library / Friends / Requests). | Real tabs: Home, My Library, Explore, Profile (+ Friends stack). Real flows: two-sided pickup/return confirmation, queues, due dates. |
| V5 | **Gallery screenshots are raw, old device captures**: Android status bar with notification icons, "SOS", 37% battery; the sign-in screen shows an old yellow T-shirt icon; mixed sizes. Captions call them "early days, so the polish is still catching up". | Should be the same cleaned set as the store listings (status bar cleaned, current UI, both light and dark if wanted). |
| V6 | Visual clutter from the AI Studio template: blueprint grid, blur orbs, rotated squares, a 16px white frame around the whole page on desktop, a "Privacy Highlights" card overlapping the phone. | — |
| V7 | No `theme-color`, no `apple-touch-icon`, no Open Graph image. On iPhone the translucent sticky header gives Safari a grey status bar (see global CLAUDE.md iOS Safari notes; only steps 1–3 and 6 apply, there's no hero photo). | — |

### 1.3 Content accuracy (P1)

| # | Site says | Reality / issue |
|---|---|---|
| C1 | "Lenderoo is safe because it's **invite-only**" | Friends are added by friend code, search or phone contacts. Not invite-only. |
| C2 | Features: add items, friends, push notifications, dark mode | Undersells the real app. Missing: book search by title (Hardcover) and **barcode scanning**, Explore friends' libraries with copy counts, borrow requests with **both-sides confirmation**, waiting lists ("next in line"), **max borrow duration and due-date reminders**, favourites, add friends from contacts (hashed on device), lend to people without the app / mark unavailable (check status), owner force-return, account deletion in Settings. |
| C3 | "Real-Time **Expo** notifications", "Built on **Supabase** … row-level security", "Secure Backend: Built with Supabase & Expo notifications" | Developer jargon on a consumer page. Say what it means for the user. |
| C4 | "100% Free & No Ads"; privacy says "currently free" | **Needs a decision.** Zepira's model is a 30-day trial then a one-off purchase; Lenderoo's PORTFOLIO price is "—". Whatever is chosen, the site, privacy policy and store listing must say the same thing. |
| C5 | "Requires Android 8.0 or newer" | Unverified. Expo SDK 54 defaults to minSdk 24 (Android 7.0). Check `android/app/build.gradle` and use the real number, or drop it. |
| C6 | "On Android now, iOS in testing"; footer "iOS is in closed testing (TestFlight)" | Neither store is public. Switch to "Coming soon" now, store badges on launch day. |
| C7 | Developer shown as "Zepira" in places, "Zepira Labs" in others; package ID shown in mono text in hero, footer, privacy, roadmap | Use the seller name exactly as it appears on the stores (sole trader **Zepira Labs**, per STORE-SETUP Path A). Remove the package ID from marketing copy (keep it on the deletion page if Google wants it). |
| C8 | Footer: "Privacy Policy (Google Play submission)", "Review Play Store Privacy Policy" | Internal wording. Just "Privacy policy". |
| C9 | US spelling: "neighborhood", "Categorize", "catalog" | Australian brand: neighbourhood, categorise, catalogue. |
| C10 | "Meet Lenderoo … holding the keys to your neighborhood's shared resources!" | Filler; the app is for friends, not neighbourhoods. |
| C11 | Roadmap release notes stop at v1.0.0 (16 Jul 2026) | App has shipped more since (force return, EXIF stripping, barcode lookup). Decide what v1.0 public notes say at launch. |
| C12 | `/delete-data` | Re-check against `supabase/functions/delete-account/` before launch (repo CLAUDE.md requires this). Google Play needs a deletion URL that works without the app; confirm the page offers an email route. |

### 1.4 Accessibility (P1)

- Icon-only buttons with no accessible name: mobile theme toggle, mobile menu button, simulator buttons (5 found). Desktop toggle relies on `title` only.
- Logo is a clickable `<div>`: not focusable, no keyboard access.
- All navigation is `<button>` + `pushState`, no `href`s: can't open in a new tab, crawlers can't follow, screen readers announce "button" for links.
- Mobile menu has no `aria-expanded` / `aria-controls`; no Escape to close.
- Heading order skips (H1 → H3/H4 inside the simulator; "Key Features" eyebrow is the H2 and the real heading is a `<p>`).
- No skip link; focus styles rely on browser defaults and are hidden on many elements.
- Text at 9–11px in several places (privacy card, captions, footer IDs).
- Animations ignore `prefers-reduced-motion` (fade-in, pulse, hover scale, smooth scroll).
- Screenshot alt text is just the caption ("1. Welcome & Sign In"); should describe what the screen shows.
- Light/dark toggle doesn't work (B6) and there's no flash-free boot script.

### 1.5 Technical, SEO and housekeeping (P1/P2)

- **No meta description, no Open Graph/Twitter tags**, title is just "Lenderoo" on every page. SPA renders nothing until JS runs, so link previews and search snippets are empty. Prerender the five routes at build time (or move to a static generator).
- **Every unknown URL returns 200** (Vercel rewrites `/(.*)` to `index.html`): `/terms`, `/robots.txt`, `/sitemap.xml` all return the HTML shell. Add real `robots.txt` and `sitemap.xml`; make the 404 page set `noindex`.
- Google Fonts loaded from Google (sends visitor IPs to Google). Self-host Outfit + Inter, matching the zl website rule.
- AI Studio leftovers: README ("Run and deploy your AI Studio app", Gemini key), `metadata.json`, `@google/genai`, `express`, `dotenv`, `GEMINI_API_KEY` in `.env.example`, package name `react-example`, GitHub Pages 404 shim and `CNAME` (hosting is Vercel), committed `dist/`.
- Apex `lenderoo.app` 308-redirects to `www`. Fine, but the app and docs link to the apex; pick one canonical and add `<link rel="canonical">`.
- Hosting is Vercel Hobby, which is for non-commercial use (ADR 0003 moved zepiralabs.com off it for this reason). Fine while Lenderoo is free; if it becomes paid, move to Firebase Hosting or Vercel Pro.
- App side (not this repo, note only): `lib/services/storage.ts` routes web image downloads through `corsproxy.io` / `allorigins.win`. Web build only, but if the web build is ever public it sends image URLs to unknown third parties.

---

## 2. Plan

Three passes, each a small PR. Pass 1 needs no decisions and fixes the embarrassing and broken things. Pass 2 needs the answers in §3 and real screenshots. Pass 3 is launch day.

### Pass 1: fix what's broken (no decisions needed)

**Status (7 Nov 2026, branch `fix/prelaunch-pass-1`):** items 2–7 done; item 1 (hide public feedback) done by Alana in the database. Also done: small-text contrast across all pages (teal text → `teal-700`/`teal-300`, grey text → `slate-600`), CTA banner darkened to `teal-700`→`teal-800`, desktop page frame removed. Axe (WCAG 2 A/AA) reports no violations in light or dark on the home page. Still open from the findings for Pass 2: primary button colour (V1), all copy and legal text, hero simulator and screenshots.

Extra findings while doing Pass 1:
- The current `settings.png` screenshot shows **"Subscription — Coming soon"**, which contradicts "100% Free" (decide with §3 Q1 before new screenshots).
- Screenshots and the hero use **Harry Potter cover art**. Third-party artwork in marketing and store screenshots is a common review rejection; use public-domain books in the new captures.

1. **Roadmap:** stop showing public feedback until it's moderated (hide the feature-request list; keep release notes), or show only items with an explicit `public = true` flag. Delete the joke and abusive entries in Supabase either way. Fix the status mapping so "acknowledged" isn't shown as "Shipped". (B1)
2. **Remove the personal Gmail** everywhere; use `support@lenderoo.app`. Confirm that mailbox receives mail first. (B3)
3. **Dark mode fix:** add `@custom-variant dark (&:where(.dark, .dark *));` to `index.css`, give the hero a dark background, add an inline boot script in `index.html` so the theme is set before first paint. Default to the OS setting. (B6)
4. **Download buttons:** replace with a "Coming soon to iPhone and Android" state (no dead links). (B2, C6)
5. **Real logo:** export the app icon to `public/` (SVG trace or PNG at 512/192/180/32), use it in navbar, footer, favicon and `apple-touch-icon`; delete `KangarooLogo.tsx`. (B7)
6. **Accessibility basics:** aria-labels on icon buttons, logo and nav as real `<a href>` links, `aria-expanded` on the menu, skip link, visible focus rings, `prefers-reduced-motion`. (1.4)
7. **Housekeeping:** remove AI Studio leftovers, unused deps, GitHub Pages shim; add `robots.txt`, `sitemap.xml`, meta description, OG tags, `theme-color`. (1.5)

**Decisions (7 Nov 2026):** Lenderoo launches fully free (no ads, no purchases; reassess once there's a user base). Buttons use darker teal `teal-700` `#0F766E` with white text (app change running in its own session). Support email is `support@zepiralabs.com` (ADR 0003 in zepira-apps: it's an alias of `dev@`; check it's been added in Zoho). Canonical address is `lenderoo.app` without www; Vercel still redirects the apex to www and needs flipping.

### Screenshots (before Pass 2)

The site and both store listings use one set. Goals: current UI, clean status bar (9:41, full battery, no notification icons), demo data that looks like a real person's, no third-party artwork or brand names (no Harry Potter covers, DeWalt, Catan), captions in the zepira-apps style (about six words, key words in the accent, no device bezel, flattened JPEG; LEARNINGS L-ST3).

Proposed screens and captions (draft):

1. Home: "Everything you've lent, **in one place**"
2. Explore: "See what **your friends** own"
3. Item detail with borrow button and copy count: "Borrow it with **one tap**"
4. Pickup/return confirmation: "Both sides **confirm** the handover"
5. Due date and reminder: "Gentle reminders **before it's due**"
6. Add item via barcode or title search: "Add a book by **scanning it**"
7. (optional) Free statement: "Free, with **no ads**"

Demo data: one demo user and 4–5 demo friends with the app's animal avatars; public-domain books with public-domain covers (Pride and Prejudice, Frankenstein, The Time Machine…); generic tools and games ("Cordless drill", "Camping tent", "Strategy board game").

Capture options (decision needed):
- **A. Web build + local Supabase (recommended).** Run Supabase locally in Docker (`supabase start`, apply the app's migrations, seed the demo data), point a web build of the app at it, capture each route in Chrome at the store sizes with Playwright, draw the status bar, and compose captions with the same layout as `@zepira/shots`. Repeatable from Windows, nothing touches production, re-run when the UI changes. Risk: React Native Web differences (camera/contacts screens may need stubs; body font is the host's system font on Windows).
- **B. Real native screens.** Same seeded data, captured on an Android emulator (`adb` demo mode for the status bar) and the iOS Simulator on the Mac (`xcrun simctl status_bar override`), then captioned by a compose script. Most faithful; manual navigation each time.
- Seeding demo accounts in the **production** Supabase is not recommended: name search could show demo users to real users.

### Pass 2: match the app (needs §3 answers)

8. **Design tokens from the app:** port `global.css` colours (teal, yellow, coral, navy, dark background), radii and Outfit/Inter (self-hosted) into the site's `@theme`. Add a "teal ink" token for text and buttons that passes 4.5:1, and raise it with the app. (V1–V3)
9. **Hero:** delete `AppSimulator.tsx`; show one or two real screenshots in a clean device frame. Remove the Privacy Highlights overlay. Simplify backgrounds. (V4, V6)
10. **Screenshots:** use the store screenshot set (clean status bar, current UI). Same images and captions as the store listings so they never drift. (V5)
11. **Copy rewrite:** features based on the real app (C2), no jargon (C3), price statement from §3 (C4), Australian spelling (C9), consistent seller name (C7, C8). Use the website-copy skill and run it past the humanizer.
12. **Privacy policy and Terms:** update privacy to list every processor and data type in B5, operator details and Australian Privacy Act; write `/terms` (B4). Re-check `/delete-data` against the delete-account function (C12).
13. **Prerender** the routes so each has its own title, description and OG image.

### Pass 3: launch day

14. Swap "Coming soon" for official App Store and Google Play badges (Apple and Google badge artwork, not hand-made buttons) with the live URLs.
15. Add store URLs to `sites/web/src/external/lenderoo.mjs` in zepira-apps (PORTFOLIO.md says so).
16. Publish v1.0 release notes on the roadmap.
17. Check on a real iPhone and Android phone, light and dark.

---

## 3. Decisions needed from Alana

1. **Price at launch:** free (no ads), or the Zepira 30-day trial + one-off purchase? Changes hero, features, privacy section 3 and the store listing.
2. **Public feedback on the roadmap:** drop it, or keep it with moderation (a `public` flag you set per item)?
3. **Screenshots:** do clean store screenshots exist yet? If not, they come first (Lenderoo's own pipeline, or capture via simulator with a clean status bar) and the site reuses them.
4. **Launch order:** both stores on the same day, or Android first? Decides what the badges say.
5. **Seller identity on the site:** "Zepira Labs" only, or include ABN / contact address (Apple shows the trader address for EU users anyway)?
6. **Hosting:** stay on Vercel Hobby (fine if free) or move to Firebase Hosting with zepiralabs.com?
