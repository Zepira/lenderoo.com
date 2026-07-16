import React from "react";
import { Shield } from "lucide-react";

const SCREENS = [
  {
    src: "/screens/welcome.png",
    label: "1. Welcome & Sign In",
  },
  {
    src: "/screens/add-book.png",
    label: "2. Add a Book",
  },
  {
    src: "/screens/book-detail.png",
    label: "3. Book Detail",
  },
  {
    src: "/screens/settings.png",
    label: "4. Friends & Settings",
  },
];

export default function Screenshots() {
  return (
    <section id="screenshots-section" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative border-t border-slate-200/40 dark:border-slate-800/40">

      {/* Decorative Orbs */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-teal-500/10 dark:bg-teal-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-black text-teal-600 dark:text-teal-400 uppercase tracking-widest">
            App Gallery
          </h2>
          <p className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 dark:text-white mt-3">
            A beautiful, intuitive mobile experience
          </p>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
            Real screens from the app — early days, so the polish is still catching up to the feature set.
          </p>
        </div>

        {/* Real Screenshots Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start justify-center max-w-5xl mx-auto">
          {SCREENS.map((screen) => (
            <div key={screen.src} className="flex flex-col items-center">
              <span className="text-[11px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider text-center">
                {screen.label}
              </span>
              {/* Phone Container */}
              <div className="w-full max-w-[220px] bg-slate-900 rounded-[32px] p-2 shadow-2xl border-2 border-slate-800 ring-1 ring-slate-700/50 overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                <div className="w-full rounded-[24px] overflow-hidden">
                  <img
                    src={screen.src}
                    alt={screen.label}
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA box under screenshots */}
        <div className="mt-16 text-center max-w-lg mx-auto bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-slate-850/80 shadow-md">
          <div className="inline-flex p-2.5 bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400 rounded-xl mb-3">
            <Shield className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-black text-teal-600 dark:text-teal-400 uppercase tracking-widest">
            Community Focus
          </h4>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 dark:text-white mt-2">
            Built with modern standards
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
            Lenderoo is built on Supabase, with secure user sessions and row-level security protecting your data. Your connections and sharing history stay private to your circle.
          </p>
        </div>

      </div>
    </section>
  );
}
