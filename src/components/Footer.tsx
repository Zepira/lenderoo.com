import React from "react";
import { ArrowUp } from "lucide-react";
import Link from "./Link";
import GetTheApp from "./GetTheApp";
import { DEVELOPER_NAME, SUPPORT_EMAIL } from "../lib/site";

interface FooterProps {
  onNavigate: (path: string) => void;
}

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Roadmap and release notes", to: "/roadmap" },
  { label: "Privacy policy", to: "/privacy" },
  { label: "Terms of use", to: "/terms" },
  { label: "Delete your account and data", to: "/delete-data" },
];

export default function Footer({ onNavigate }: FooterProps) {
  const linkClass = "text-sm text-slate-300 hover:text-white underline-offset-4 hover:underline transition-colors";

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          <div className="md:col-span-5 space-y-4">
            <Link to="/" onNavigate={onNavigate} className="flex items-center gap-3 group w-fit rounded-lg" aria-label="Lenderoo home">
              <img
                src="/brand/lenderoo-mark.webp"
                alt=""
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg shadow-sm transition-transform group-hover:scale-105"
              />
              <span className="font-black text-base tracking-tight text-white">Lenderoo</span>
            </Link>
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              Lenderoo keeps track of the things you lend to friends and the things you borrow from them. Reduce waste, save money, and share what you already own.
            </p>
          </div>

          <nav aria-labelledby="footer-links" className="md:col-span-3 space-y-3">
            <h2 id="footer-links" className="text-xs font-black text-white uppercase tracking-widest">
              Lenderoo
            </h2>
            <ul className="space-y-2">
              {LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} onNavigate={onNavigate} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={`mailto:${SUPPORT_EMAIL}`} className={linkClass}>
                  Email support
                </a>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-4 space-y-4">
            <h2 className="text-xs font-black text-white uppercase tracking-widest">Get the app</h2>
            <GetTheApp tone="light" />
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© 2026 {DEVELOPER_NAME}</p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
            className="flex items-center gap-1 hover:text-white transition-colors font-semibold text-xs uppercase tracking-wider bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-xl"
          >
            <ArrowUp className="w-3 h-3" aria-hidden="true" />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
