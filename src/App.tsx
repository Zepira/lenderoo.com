import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Screenshots from "./components/Screenshots";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import DataDeletion from "./components/DataDeletion";
import NotFound from "./components/NotFound";

export default function App() {
  // Global website dark mode state (defaulting to Light Mode for premium feel)
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    // Check system preference
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // Client-side lightweight routing — decode GitHub Pages 404.html redirect
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const redirected = params.get("p");
      if (redirected) {
        const restored = decodeURIComponent(redirected);
        window.history.replaceState({}, "", restored);
        return restored;
      }
      return window.location.pathname;
    }
    return "/";
  });

  // Keep routing and browser history synced (handles browser back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Update theme setting in HTML document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Navigate function for stateful routing
  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    scrollToTop();
  };

  const handleScrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 lg:border-[16px] lg:border-white dark:lg:border-slate-900 shadow-inner">
      
      {/* Universal Header Navbar */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        currentPath={currentPath}
        onNavigate={navigate}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Page Rendering */}
      <main className="flex-grow">
        {currentPath === "/privacy" ? (
          <PrivacyPolicy onBackToHome={() => navigate("/")} />
        ) : currentPath === "/delete-data" ? (
          <DataDeletion onBackToHome={() => navigate("/")} />
        ) : currentPath === "/" ? (
          <div className="animate-fade-in">
            {/* 1. Hero Section + Interactive Simulator */}
            <Hero />
            
            {/* 2. Key Features List */}
            <div id="demo-section" className="scroll-mt-16">
              <Features />
            </div>

            {/* 3. Sleek Rendered Mobile Screenshots */}
            <div id="screenshots-section" className="scroll-mt-16">
              <Screenshots />
            </div>

            {/* 4. Bottom Download CTA banner */}
            <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none"></div>
              <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative">
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                  Start Sharing with Lenderoo Today
                </h2>
                <p className="text-base sm:text-lg text-indigo-100 max-w-2xl mx-auto">
                  Why buy a tool you'll use once, or a book that will sit on a shelf? Join your friends on Lenderoo and start sharing household resources sustainably.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.zepira.lenderoo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white hover:bg-indigo-50 text-indigo-600 font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl active:scale-98 transition-all cursor-pointer"
                  >
                    <span>Download on Google Play</span>
                    <span className="text-xs opacity-70">com.zepira.lenderoo</span>
                  </a>
                  <button
                    onClick={() => navigate("/privacy")}
                    className="text-sm text-indigo-100 hover:text-white underline underline-offset-4 cursor-pointer font-semibold"
                  >
                    Review Play Store Privacy Policy
                  </button>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <NotFound onNavigate={navigate} />
        )}
      </main>

      {/* Universal Footer */}
      <Footer onNavigate={navigate} onScrollToTop={scrollToTop} />
    </div>
  );
}
