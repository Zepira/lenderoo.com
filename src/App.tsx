import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Screenshots from "./components/Screenshots";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import DataDeletion from "./components/DataDeletion";
import Roadmap from "./components/Roadmap";
import NotFound from "./components/NotFound";
import Link from "./components/Link";
import GetTheApp from "./components/GetTheApp";
import { PAGE_TITLES, SITE_URL } from "./lib/site";

const THEME_COLOR = { light: "#ffffff", dark: "#020618" };

/** Apply the theme to <html>. index.html runs the same logic before first paint. */
function applyTheme(dark: boolean) {
  const root = document.documentElement;
  root.classList.toggle("dark", dark);
  root.style.colorScheme = dark ? "dark" : "light";
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", dark ? THEME_COLOR.dark : THEME_COLOR.light);
}

function readSavedTheme(): string | null {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function App() {
  // The boot script in index.html has already set the class; start from it.
  const [darkMode, setDarkMode] = useState<boolean>(() =>
    document.documentElement.classList.contains("dark"),
  );

  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname);

  useEffect(() => {
    applyTheme(darkMode);
  }, [darkMode]);

  // Follow the device setting until the visitor picks a theme themselves.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      if (!readSavedTheme()) setDarkMode(e.matches);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    document.title = PAGE_TITLES[currentPath] ?? "Page not found | Lenderoo";
    // index.html ships the home page's canonical; point it at the current page.
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", `${SITE_URL}${currentPath === "/" ? "/" : currentPath}`);
  }, [currentPath]);

  const scrollBehavior = (): ScrollBehavior => (prefersReducedMotion() ? "auto" : "smooth");

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: scrollBehavior() });
  }, []);

  const scrollToSection = useCallback((elementId: string) => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
  }, []);

  // Accepts "/privacy" or "/#features-section".
  const navigate = useCallback(
    (to: string) => {
      const [path, hash] = to.split("#");
      const targetPath = path || "/";
      if (targetPath !== window.location.pathname) {
        window.history.pushState({}, "", targetPath);
        setCurrentPath(targetPath);
      }
      if (hash) {
        // Wait a frame so the home page has rendered before scrolling.
        requestAnimationFrame(() => scrollToSection(hash));
      } else {
        scrollToTop();
      }
    },
    [scrollToSection, scrollToTop],
  );

  const toggleDarkMode = () => {
    const next = !darkMode;
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Private mode: the choice just won't persist.
    }
    setDarkMode(next);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-teal-800 focus:shadow-lg"
      >
        Skip to content
      </a>

      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        currentPath={currentPath}
        onNavigate={navigate}
      />

      <main id="main" tabIndex={-1} className="flex-grow focus:outline-none">
        {currentPath === "/privacy" ? (
          <PrivacyPolicy onBackToHome={() => navigate("/")} />
        ) : currentPath === "/delete-data" ? (
          <DataDeletion onBackToHome={() => navigate("/")} />
        ) : currentPath === "/roadmap" ? (
          <Roadmap onBackToHome={() => navigate("/")} />
        ) : currentPath === "/" ? (
          <div className="animate-fade-in">
            <Hero />

            <Features />

            <div id="screenshots-section" className="scroll-mt-16">
              <Screenshots />
            </div>

            {/* Bottom call to action */}
            <section className="py-16 bg-gradient-to-r from-teal-700 to-teal-800 text-white relative overflow-hidden">
              <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative">
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                  Start sharing with Lenderoo
                </h2>
                <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
                  Why buy a tool you'll use once, or a book that will sit on a shelf? Join your friends on Lenderoo and share what you already own.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
                  <GetTheApp tone="light" align="center" />
                  <Link
                    to="/privacy"
                    onNavigate={navigate}
                    className="text-sm text-white hover:text-teal-100 underline underline-offset-4 font-semibold"
                  >
                    Privacy policy
                  </Link>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <NotFound onNavigate={navigate} />
        )}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
