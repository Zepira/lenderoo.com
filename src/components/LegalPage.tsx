import React from "react";
import { ArrowLeft } from "lucide-react";

interface LegalPageProps {
  title: string;
  updated: string;
  intro?: React.ReactNode;
  onBackToHome: () => void;
  children: React.ReactNode;
}

/** Shared layout for the privacy policy, terms and data deletion pages. */
export default function LegalPage({ title, updated, intro, onBackToHome, children }: LegalPageProps) {
  return (
    <div className="bg-slate-50 px-4 py-12 text-slate-800 dark:bg-slate-950 dark:text-slate-200 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <button
          type="button"
          onClick={onBackToHome}
          className="group mb-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900 dark:text-teal-300 dark:hover:text-teal-200"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
          Back to home
        </button>

        <header className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Last updated {updated}</p>
          {intro && <div className="mt-5 text-base leading-relaxed text-slate-700 dark:text-slate-300">{intro}</div>}
        </header>

        <div className="space-y-10 rounded-3xl border border-slate-200 bg-white p-6 leading-relaxed shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
          {children}
        </div>
      </article>
    </div>
  );
}

export function Section({ title, id, children }: { title: string; id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 space-y-3">
      <h2 className="text-xl font-bold text-slate-950 dark:text-white">{title}</h2>
      {children}
    </section>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="text-base text-slate-700 dark:text-slate-300">{children}</p>;
}

export function List({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc space-y-2 pl-5 text-base text-slate-700 marker:text-teal-700 dark:text-slate-300 dark:marker:text-teal-300">{children}</ul>;
}

export function A({ href, children }: { href: string; children: React.ReactNode }) {
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="font-semibold text-teal-700 underline underline-offset-2 hover:text-teal-900 dark:text-teal-300 dark:hover:text-teal-200"
    >
      {children}
    </a>
  );
}
