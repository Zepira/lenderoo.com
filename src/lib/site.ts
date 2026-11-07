// Single place for site-wide facts. Change a value here, not in components.

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

/** Per-route document titles. */
export const PAGE_TITLES: Record<string, string> = {
  "/": "Lenderoo: lend and borrow with friends",
  "/privacy": "Privacy policy | Lenderoo",
  "/delete-data": "Delete your account and data | Lenderoo",
  "/roadmap": "Roadmap and release notes | Lenderoo",
};
