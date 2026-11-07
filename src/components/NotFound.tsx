import React, { useEffect } from "react";
import Link from "./Link";

interface NotFoundProps {
  onNavigate: (path: string) => void;
}

export default function NotFound({ onNavigate }: NotFoundProps) {
  // The host serves index.html (status 200) for every path, so tell crawlers
  // not to index this page.
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <img src="/brand/lenderoo-mascot.webp" alt="" width={120} height={127} className="w-28 h-auto mb-4" />
      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Page not found</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">This page doesn't exist. It may have moved.</p>
      <Link
        to="/"
        onNavigate={onNavigate}
        className="mt-8 px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-xl transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
