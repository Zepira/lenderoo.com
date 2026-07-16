import React from "react";
import { Sun, Moon, ArrowDownToLine, Menu, X, ShieldAlert } from "lucide-react";
import KangarooLogo from "./KangarooLogo";

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  currentPath: string;
  onNavigate: (path: string) => void;
  onScrollToSection: (elementId: string) => void;
}

export default function Navbar({
  darkMode,
  onToggleDarkMode,
  currentPath,
  onNavigate,
  onScrollToSection,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { label: "Features", sectionId: "features-section" },
    { label: "App Demo", sectionId: "demo-section" },
    { label: "Screenshots", sectionId: "screenshots-section" },
  ];

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (currentPath !== "/") {
      onNavigate("/");
      // Wait for navigation and DOM update before scrolling
      setTimeout(() => {
        onScrollToSection(sectionId);
      }, 100);
    } else {
      onScrollToSection(sectionId);
    }
  };

  const handlePrivacyClick = () => {
    setMobileMenuOpen(false);
    onNavigate("/privacy");
  };

  const handleRoadmapClick = () => {
    setMobileMenuOpen(false);
    onNavigate("/roadmap");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div 
            onClick={() => onNavigate("/")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 bg-[#6366f1] rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
              <div className="w-4.5 h-4.5 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <KangarooLogo size={12} variant="silhouette" className="text-[#6366f1]" />
              </div>
            </div>
            <span className="font-black text-xl tracking-tight text-slate-900 dark:text-white">
              Lenderoo
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {currentPath === "/" && navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.sectionId)}
                className="text-sm font-semibold text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleRoadmapClick}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                currentPath === "/roadmap"
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
              }`}
            >
              Roadmap
            </button>
            <button
              onClick={handlePrivacyClick}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                currentPath === "/privacy"
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
              }`}
            >
              Privacy Policy
            </button>
          </nav>

          {/* Right Controls */}
          <div className="hidden md:flex items-center gap-4">
            {/* Website Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-xl text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 transition-colors cursor-pointer"
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Play Store Link button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.zepira.lenderoo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md shadow-indigo-600/15 hover:shadow-indigo-600/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              <ArrowDownToLine className="w-3.5 h-3.5" />
              <span>Download for Android</span>
            </a>
          </div>

          {/* Mobile menu toggle & theme toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-xl text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 transition-colors cursor-pointer"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 space-y-3 shadow-lg animate-fade-in">
          {currentPath === "/" && navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.sectionId)}
              className="block w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-900/60 dark:hover:text-indigo-400 transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={handleRoadmapClick}
            className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
              currentPath === "/roadmap"
                ? "bg-indigo-50/80 text-indigo-600 dark:bg-slate-900/60 dark:text-indigo-400"
                : "text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-900/60 dark:hover:text-indigo-400"
            }`}
          >
            Roadmap
          </button>
          <button
            onClick={handlePrivacyClick}
            className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
              currentPath === "/privacy"
                ? "bg-indigo-50/80 text-indigo-600 dark:bg-slate-900/60 dark:text-indigo-400"
                : "text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-900/60 dark:hover:text-indigo-400"
            }`}
          >
            Privacy Policy
          </button>
          
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <a
              href="https://play.google.com/store/apps/details?id=com.zepira.lenderoo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm py-3 rounded-xl shadow-md cursor-pointer"
            >
              <ArrowDownToLine className="w-4 h-4" />
              <span>Download Lenderoo (Android)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
