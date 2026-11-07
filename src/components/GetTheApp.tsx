import React from "react";
import { STORE_LINKS } from "../lib/site";

interface GetTheAppProps {
  /** "light" for use on teal or dark backgrounds. */
  tone?: "default" | "light";
  align?: "start" | "center";
  className?: string;
}

/**
 * Store download buttons, or a "Coming soon" note while no listing is public.
 * The only place store links are rendered: set them in src/lib/site.ts.
 */
export default function GetTheApp({ tone = "default", align = "start", className = "" }: GetTheAppProps) {
  const { appStore, googlePlay } = STORE_LINKS;
  const justify = align === "center" ? "justify-center" : "justify-center lg:justify-start";

  if (!appStore && !googlePlay) {
    return (
      <p
        className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold ${
          tone === "light"
            ? "bg-white/15 text-white ring-1 ring-white/40"
            : "bg-white text-slate-800 ring-1 ring-slate-200 dark:bg-slate-900 dark:text-slate-100 dark:ring-slate-700"
        } ${className}`}
      >
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-amber-400"></span>
        Coming soon to iPhone and Android
      </p>
    );
  }

  // Pass 3: replace these with the official Apple and Google badge artwork.
  const buttonClass =
    tone === "light"
      ? "inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-teal-800 shadow-lg hover:bg-teal-50"
      : "inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100";

  return (
    <div className={`flex flex-col sm:flex-row items-center gap-3 ${justify} ${className}`}>
      {appStore && (
        <a href={appStore} target="_blank" rel="noopener noreferrer" className={buttonClass}>
          Download on the App Store
        </a>
      )}
      {googlePlay && (
        <a href={googlePlay} target="_blank" rel="noopener noreferrer" className={buttonClass}>
          Get it on Google Play
        </a>
      )}
    </div>
  );
}
