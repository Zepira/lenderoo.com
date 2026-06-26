import React from "react";
import { ArrowDownToLine, Sparkles, Star, ShieldCheck, Heart } from "lucide-react";
import AppSimulator from "./AppSimulator";
import KangarooLogo from "./KangarooLogo";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32 bg-slate-50 dark:from-slate-950 dark:via-slate-900/40 dark:to-slate-950 transition-colors duration-300">
      
      {/* Geometric Balance Background Geometry */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border-[40px] border-indigo-50/70 dark:border-indigo-950/20 rounded-full pointer-events-none -z-0 opacity-75 dark:opacity-45"></div>
      <div className="absolute top-24 right-12 w-24 h-24 bg-indigo-100 dark:bg-indigo-950/40 rounded-3xl rotate-12 pointer-events-none -z-0 opacity-80"></div>
      <div className="absolute bottom-24 left-10 w-32 h-32 bg-teal-50 dark:bg-teal-950/20 rounded-full pointer-events-none -z-0 opacity-60"></div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-indigo-200 dark:bg-indigo-950/15 rounded-full filter blur-3xl opacity-30 dark:opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-teal-200 dark:bg-teal-950/10 rounded-full filter blur-3xl opacity-30 dark:opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left: Headlines & CTA */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8 relative z-10">
            
            {/* Friendly Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950/60 border border-indigo-200/50 dark:border-indigo-900/60 text-[#6366f1] dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Now on Android</span>
            </div>

            {/* Main Headline (Geometric Balance typographic pairing) */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Share more, <br />
                <span className="text-[#6366f1] dark:text-indigo-400">buy less.</span>
              </h1>
              <p className="text-sm font-bold text-[#0fbca2] dark:text-teal-400 tracking-wide uppercase">
                Why buy when you can borrow?
              </p>
            </div>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-medium leading-relaxed">
              Lenderoo is your personal social library. Manage your books, tools, and games, then lend them safely to friends in your circle.
            </p>

            {/* Badge highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-bold text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#0fbca2]" />
                <span>Trusted Friends Only</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-rose-500" />
                <span>Sustainable Living</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>100% Free & No Ads</span>
              </div>
            </div>

            {/* Google Play Store Badge CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="https://play.google.com/store/apps/details?id=com.zepira.lenderoo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#6366f1] hover:bg-indigo-700 text-white px-7 py-3.5 rounded-2xl shadow-lg shadow-indigo-200/50 dark:shadow-none hover:shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer font-bold text-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L14.4,12.71L4.54,22.57C4.69,22.62 4.84,22.67 5,22.67C5.59,22.67 6.11,22.33 6.36,21.83L16.81,15.12M14.4,11.29L16.81,8.88L6.36,2.17C6.11,1.67 5.59,1.33 5,1.33C4.84,1.33 4.69,1.38 4.54,1.43L14.4,11.29M21.3,12.84L17.5,15.26L15.1,12L17.5,8.74L21.3,11.16C21.73,11.41 22,11.72 22,12C22,12.28 21.73,12.59 21.3,12.84Z" />
                </svg>
                <span>Get it on Google Play</span>
              </a>
              
              <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-col items-center sm:items-start">
                <span className="font-bold text-slate-800 dark:text-slate-200">com.zepira.lenderoo</span>
                <span>Requires Android 8.0 or newer</span>
              </div>
            </div>

            {/* Splash Mascot and Splash Tagline */}
            <div className="hidden sm:flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-250/40 dark:border-slate-800/50 max-w-lg mt-4 text-left shadow-xs">
              <div className="flex-shrink-0 bg-[#0fbca2]/10 p-1.5 rounded-xl border border-[#0fbca2]/20">
                <KangarooLogo size={42} variant="icon" />
              </div>
              <div>
                <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">Meet Lenderoo</span>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                  Lenderoo sits happily in your pocket, holding the keys to your neighborhood's shared resources!
                </p>
              </div>
            </div>

          </div>

          {/* Hero Right: Interactive Simulator Screen & Privacy Snippet Overlay */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative">
              {/* Main App Simulator */}
              <AppSimulator />

              {/* Privacy Highlights Snippet Overlay (from Geometric Balance Design) */}
              <div className="absolute -bottom-6 -right-12 xl:-right-16 hidden md:block w-72 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-2xl z-20 transition-transform hover:scale-[1.02]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <h4 className="font-bold text-xs tracking-tight text-slate-900 dark:text-white uppercase">Privacy Highlights</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-[11px] text-slate-650 dark:text-slate-300">
                    <span className="text-[#6366f1] font-bold">✔</span>
                    <span><strong>No Selling Data:</strong> We never sell your personal information.</span>
                  </li>
                  <li className="flex gap-2 text-[11px] text-slate-650 dark:text-slate-300">
                    <span className="text-[#6366f1] font-bold">✔</span>
                    <span><strong>Total Control:</strong> Delete your account and all items anytime.</span>
                  </li>
                  <li className="flex gap-2 text-[11px] text-slate-650 dark:text-slate-300">
                    <span className="text-[#6366f1] font-bold">✔</span>
                    <span><strong>Secure Backend:</strong> Built with Supabase & Expo notifications.</span>
                  </li>
                </ul>
                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                  <p className="text-[9px] text-slate-450 dark:text-slate-400 font-mono">ID: com.zepira.lenderoo • Zepira</p>
                  <p className="text-[9px] text-slate-450 dark:text-slate-400">alana.labouchardiere@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
