// Single place for site-wide facts. Change a value here, not in components.
import pages from "./pages.json";

/** Canonical origin: the apex domain, no www (www redirects here). */
export const SITE_URL = "https://lenderoo.app";

export const SUPPORT_EMAIL = "support@zepiralabs.com";

/** Seller name exactly as it appears on the App Store and Google Play. */
export const DEVELOPER_NAME = "Zepira Labs";

/**
 * Store listing URLs. Leave as null until the listing is public: every
 * download button shows "Coming soon" instead of a link while a value is null.
 * On launch day, paste the live URLs here (and add them to
 * sites/web/src/external/lenderoo.mjs in zepira-apps).
 */
export const STORE_LINKS: { appStore: string | null; googlePlay: string | null } = {
  appStore: null,
  googlePlay: null,
};

export const isOnAnyStore = Boolean(STORE_LINKS.appStore || STORE_LINKS.googlePlay);

/** Per-route titles and descriptions. Also read by scripts/route-heads.mjs at build time. */
export const PAGES: { path: string; title: string; description: string }[] = pages;
