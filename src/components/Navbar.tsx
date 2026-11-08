import React, { useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import Link from "./Link";
import GetTheApp from "./GetTheApp";
import { isOnAnyStore } from "../lib/site";

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  currentPath: string;
  onNavigate: (path: string) => void;
}

const SECTION_LINKS = [
  { label: "Features", to: "/#features-section" },
  { label: "Screenshots", to: "/#screenshots-section" },
];

const PAGE_LINKS = [
  { label: "Roadmap", to: "/roadmap" },
  { label: "Privacy policy", to: "/privacy" },
];

export default function Navbar({ darkMode, onToggleDarkMode, currentPath, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen]);

  const go = (to: string) => {
    setMobileMenuOpen(false);
    onNavigate(to);
  };

  const themeLabel = darkMode ? "Switch to light mode" : "Switch to dark mode";

  const desktopLinkClass = (active: boolean) =>
    `text-sm font-semibold transition-colors ${
      active
        ? "text-teal-700 dark:text-teal-300"
        : "text-slate-600 hover:text-teal-700 dark:text-slate-300 dark:hover:text-teal-300"
    }`;

  const mobileLinkClass = (active: boolean) =>
    `block w-full px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
      active
        ? "bg-teal-50 text-teal-800 dark:bg-slate-900 dark:text-teal-300"
        : "text-slate-700 hover:bg-teal-50 hover:text-teal-800 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-teal-300"
    }`;

  const themeButton = (
    <button
      type="button"
      onClick={onToggleDarkMode}
      aria-label={themeLabel}
      title={themeLabel}
      className="p-2 rounded-xl text-slate-600 hover:text-teal-700 dark:text-slate-300 dark:hover:text-teal-300 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors"
    >
      {darkMode ? <Sun className="w-4 h-4" aria-hidden="true" /> : <Moon className="w-4 h-4" aria-hidden="true" />}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            onNavigate={go}
            className="flex items-center gap-3 group rounded-xl"
            aria-label="Lenderoo home"
          >
            <img
              src="/brand/lenderoo-mark.webp"
              alt=""
              width={36}
              height={36}
              className="w-9 h-9 rounded-xl shadow-sm transition-transform group-hover:scale-105"
            />
            <span className="font-black text-xl tracking-tight text-slate-900 dark:text-white">Lenderoo</span>
          </Link>

          <nav aria-label="Main" className="hidden md:flex items-center gap-8">
            {SECTION_LINKS.map((item) => (
              <Link key={item.to} to={item.to} onNavigate={go} className={desktopLinkClass(false)}>
                {item.label}
              </Link>
            ))}
            {PAGE_LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onNavigate={go}
                aria-current={currentPath === item.to ? "page" : undefined}
                className={desktopLinkClass(currentPath === item.to)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {themeButton}
            {isOnAnyStore && <GetTheApp />}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            {themeButton}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 space-y-1 shadow-lg animate-fade-in"
        >
          {SECTION_LINKS.map((item) => (
            <Link key={item.to} to={item.to} onNavigate={go} className={mobileLinkClass(false)}>
              {item.label}
            </Link>
          ))}
          {PAGE_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onNavigate={go}
              aria-current={currentPath === item.to ? "page" : undefined}
              className={mobileLinkClass(currentPath === item.to)}
            >
              {item.label}
            </Link>
          ))}
          {isOnAnyStore && (
            <div className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-800">
              <GetTheApp align="center" />
            </div>
          )}
        </nav>
      )}
    </header>
  );
}
