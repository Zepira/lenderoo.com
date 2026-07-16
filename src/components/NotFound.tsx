import React from "react";

interface NotFoundProps {
  onNavigate: (path: string) => void;
}

export default function NotFound({ onNavigate }: NotFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-8xl font-black text-teal-600 dark:text-teal-400">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-slate-800 dark:text-slate-100">Page not found</h2>
      <p className="mt-2 text-slate-500 dark:text-slate-400">
        This page doesn't exist.
      </p>
      <button
        onClick={() => onNavigate("/")}
        className="mt-8 px-6 py-3 bg-[#00BFA6] hover:bg-[#0da48d] text-white font-bold rounded-xl transition-colors"
      >
        Back to home
      </button>
    </div>
  );
}
