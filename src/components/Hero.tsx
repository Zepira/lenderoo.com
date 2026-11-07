import React from "react";
import { Sparkles, Star, ShieldCheck, Heart } from "lucide-react";
import AppSimulator from "./AppSimulator";
import GetTheApp from "./GetTheApp";
import { isOnAnyStore } from "../lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Decorative background shapes */}
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border-[40px] border-teal-50/70 dark:border-teal-950/20 rounded-full pointer-events-none opacity-75 dark:opacity-45"></div>
      <div aria-hidden="true" className="absolute top-24 right-12 w-24 h-24 bg-teal-100 dark:bg-teal-950/40 rounded-3xl rotate-12 pointer-events-none opacity-80"></div>
      <div aria-hidden="true" className="absolute bottom-24 left-10 w-32 h-32 bg-amber-50 dark:bg-amber-950/20 rounded-full pointer-events-none opacity-60"></div>
      <div aria-hidden="true" className="absolute top-1/4 left-1/10 w-96 h-96 bg-teal-200 dark:bg-teal-950/15 rounded-full filter blur-3xl opacity-30 dark:opacity-10 pointer-events-none"></div>
      <div aria-hidden="true" className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-amber-200 dark:bg-amber-950/10 rounded-full filter blur-3xl opacity-30 dark:opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Headline and call to action */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8 relative z-10">
            <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-900/60 text-teal-800 dark:text-teal-200 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{isOnAnyStore ? "Out now" : "Coming soon"}</span>
            </p>

            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Share more, <br />
                <span className="text-teal-700 dark:text-teal-300">buy less.</span>
              </h1>
              <p className="text-sm font-bold text-teal-700 dark:text-teal-300 tracking-wide uppercase">
                Why buy when you can borrow?
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-medium leading-relaxed">
              Lenderoo is your personal social library. Manage your books, tools, and games, then lend them safely to friends in your circle.
            </p>

            <ul className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-bold text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-teal-700 dark:text-teal-300" aria-hidden="true" />
                <span>Trusted Friends Only</span>
              </li>
              <li className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-rose-600 dark:text-rose-400" aria-hidden="true" />
                <span>Sustainable Living</span>
              </li>
              <li className="flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" aria-hidden="true" />
                <span>100% Free & No Ads</span>
              </li>
            </ul>

            <GetTheApp />

            {/* Mascot card */}
            <div className="hidden sm:flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-w-lg mt-4 text-left shadow-xs">
              <img
                src="/brand/lenderoo-mascot.webp"
                alt=""
                width={56}
                height={59}
                className="flex-shrink-0 w-14 h-auto"
              />
              <div>
                <p className="text-xs font-black text-teal-700 dark:text-teal-300 uppercase tracking-wide">Meet Lenderoo</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 font-medium">
                  Lenderoo sits happily in your pocket, holding the keys to your neighbourhood's shared resources!
                </p>
              </div>
            </div>
          </div>

          {/* Interactive demo and privacy summary */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative">
              <AppSimulator />

              <div className="absolute -bottom-6 -right-12 xl:-right-16 hidden md:block w-72 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-2xl z-20">
                <div className="flex items-center gap-2 mb-3">
                  <div aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <p className="font-bold text-xs tracking-tight text-slate-900 dark:text-white uppercase">Privacy Highlights</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <span className="text-teal-700 dark:text-teal-300 font-bold" aria-hidden="true">✔</span>
                    <span><strong>No Selling Data:</strong> We never sell your personal information.</span>
                  </li>
                  <li className="flex gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <span className="text-teal-700 dark:text-teal-300 font-bold" aria-hidden="true">✔</span>
                    <span><strong>Total Control:</strong> Delete your account and all items anytime.</span>
                  </li>
                  <li className="flex gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <span className="text-teal-700 dark:text-teal-300 font-bold" aria-hidden="true">✔</span>
                    <span><strong>Private to your circle:</strong> Only friends you add can see your library.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
