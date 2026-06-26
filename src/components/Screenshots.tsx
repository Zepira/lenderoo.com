import React from "react";
import { Wrench, BookOpen, Gamepad, Bell, Check, Users, Shield, ArrowRight, Heart } from "lucide-react";
import KangarooLogo from "./KangarooLogo";

export default function Screenshots() {
  return (
    <section id="screenshots-section" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative border-t border-slate-200/40 dark:border-slate-800/40">
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
            App Gallery
          </h2>
          <p className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 dark:text-white mt-3">
            A beautiful, intuitive mobile experience
          </p>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
            Take a look inside Lenderoo. Crafted for quick cataloging, easy communication, and zero friction. Toggle between light and dark modes according to your preference.
          </p>
        </div>

        {/* CSS Screenshots Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center max-w-5xl mx-auto">
          
          {/* SCREEN 1: SPLASH SCREEN (Based on User Attachment) */}
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">
              1. Splash Screen
            </span>
            {/* Phone Container */}
            <div className="w-[280px] h-[540px] bg-slate-900 rounded-[36px] p-2.5 shadow-2xl border-2 border-slate-800 ring-1 ring-slate-700/50 flex flex-col relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              {/* Inner screen */}
              <div className="w-full h-full bg-[#0fbca2] rounded-[28px] overflow-hidden flex flex-col justify-between p-6 text-white text-center">
                
                {/* Top bar filler */}
                <div className="h-4 flex justify-between items-center text-[9px] opacity-70">
                  <span>19:00</span>
                  <div className="flex gap-1">
                    <span>5G</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Kangaroo Mascot Area */}
                <div className="flex flex-col items-center justify-center flex-grow -mt-8">
                  {/* Kangaroo Mascot Logo */}
                  <KangarooLogo size={130} variant="mascot" className="drop-shadow-lg" />
                  
                  {/* Brand Title */}
                  <h3 className="text-3xl font-black tracking-tight mt-4 drop-shadow-md">
                    Lenderoo
                  </h3>
                  
                  {/* Tagline */}
                  <p className="text-xs font-semibold opacity-90 mt-2 max-w-[180px] leading-tight">
                    Why buy when you can borrow?
                  </p>
                </div>

                {/* Loading indicator */}
                <div className="h-6 flex justify-center items-center">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* SCREEN 2: MY LIBRARY (Light Mode App) */}
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">
              2. Personal Library (Light)
            </span>
            {/* Phone Container */}
            <div className="w-[280px] h-[540px] bg-slate-900 rounded-[36px] p-2.5 shadow-2xl border-2 border-slate-800 ring-1 ring-slate-700/50 flex flex-col relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              {/* Inner screen */}
              <div className="w-full h-full bg-slate-50 rounded-[28px] overflow-hidden flex flex-col justify-between text-slate-800">
                
                {/* Header */}
                <div className="pt-5 px-4 pb-2 bg-white border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <KangarooLogo size={20} variant="silhouette" />
                    <span className="font-extrabold text-xs tracking-tight text-[#0fbca2]">My Library</span>
                  </div>
                  <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-full font-bold">12 Items</span>
                </div>

                {/* Library Scroll Area */}
                <div className="flex-1 p-3 overflow-y-auto space-y-2.5 text-left">
                  <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-1">Available to Lend</h4>
                  
                  {/* Item 1 */}
                  <div className="bg-white p-2 rounded-xl border border-slate-100 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg">
                        <Wrench className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold leading-tight">DeWalt Circular Saw</p>
                        <span className="text-[8px] text-slate-400">Tools</span>
                      </div>
                    </div>
                    <span className="text-[7px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">Available</span>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-white p-2 rounded-xl border border-slate-100 flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg">
                        <BookOpen className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold leading-tight">The Hobbit Book</p>
                        <span className="text-[8px] text-slate-400">Books</span>
                      </div>
                    </div>
                    <span className="text-[7px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">Available</span>
                  </div>

                  <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-wider pt-2 mb-1">Currently Out</h4>

                  {/* Item 3 */}
                  <div className="bg-white p-2 rounded-xl border border-slate-100 flex items-center justify-between shadow-xs opacity-85">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg">
                        <Gamepad className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold leading-tight">PlayStation 5 Controller</p>
                        <span className="text-[8px] text-slate-400">Games</span>
                      </div>
                    </div>
                    <span className="text-[7px] font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded-full">With Marcus</span>
                  </div>
                </div>

                {/* Bottom Nav */}
                <div className="h-10 bg-white border-t border-slate-100 flex items-center justify-around px-2 pb-1 text-slate-400">
                  <span className="text-[8px] font-bold text-[#0fbca2]">Library</span>
                  <span className="text-[8px]">Friends</span>
                  <span className="text-[8px]">Requests</span>
                </div>

              </div>
            </div>
          </div>

          {/* SCREEN 3: BORROW REQUEST (Dark Mode App) */}
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">
              3. Request Hub (Dark)
            </span>
            {/* Phone Container */}
            <div className="w-[280px] h-[540px] bg-slate-900 rounded-[36px] p-2.5 shadow-2xl border-2 border-slate-800 ring-1 ring-slate-700/50 flex flex-col relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              {/* Inner screen */}
              <div className="w-full h-full bg-slate-950 rounded-[28px] overflow-hidden flex flex-col justify-between text-slate-200">
                
                {/* Header */}
                <div className="pt-5 px-4 pb-2 bg-slate-900 border-b border-slate-900 flex items-center justify-between">
                  <span className="font-extrabold text-xs text-white">Requests</span>
                  <span className="text-[9px] text-teal-400 bg-teal-950/40 border border-teal-900 px-2 py-0.5 rounded-full font-bold">1 Active</span>
                </div>

                {/* Content */}
                <div className="flex-1 p-3 space-y-3.5 text-left">
                  
                  {/* Request Card */}
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex flex-col gap-2.5">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1.5">
                        <img 
                          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&fit=crop&q=80" 
                          alt="Chloe" 
                          referrerPolicy="no-referrer"
                          className="w-5 h-5 rounded-full"
                        />
                        <span className="text-[10px] font-bold text-white">Chloe Chen</span>
                      </div>
                      <span className="text-[8px] bg-amber-500/10 text-amber-400 border border-amber-900 px-1.5 py-0.5 rounded">Pending</span>
                    </div>

                    <div className="bg-slate-950/80 p-2 rounded-lg text-[9px]">
                      <span className="text-slate-500">Wants to borrow: </span>
                      <strong className="text-indigo-400">Catan Board Game</strong>
                    </div>

                    <div className="flex gap-2 text-[9px] font-bold pt-1">
                      <div className="flex-grow py-1 border border-slate-800 text-center text-slate-400 rounded-lg bg-slate-950/40">Decline</div>
                      <div className="flex-grow py-1 bg-[#0fbca2] text-center text-white rounded-lg shadow-sm">Approve</div>
                    </div>
                  </div>

                  {/* Status update box */}
                  <div className="p-3 bg-indigo-950/20 border border-indigo-900/40 rounded-xl flex items-start gap-2 text-[9px]">
                    <Bell className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-300 font-bold leading-normal">Recent Notification</p>
                      <p className="text-slate-400 leading-normal">Your request to borrow "Camp Stove" from Chloe Chen was approved 2 hours ago.</p>
                    </div>
                  </div>

                </div>

                {/* Bottom Nav */}
                <div className="h-10 bg-slate-900 border-t border-slate-900 flex items-center justify-around px-2 pb-1 text-slate-500">
                  <span className="text-[8px]">Library</span>
                  <span className="text-[8px]">Friends</span>
                  <span className="text-[8px] font-bold text-[#0fbca2]">Requests</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* CTA box under screenshots */}
        <div className="mt-16 text-center max-w-lg mx-auto bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-200/60 dark:border-slate-850/80 shadow-md">
          <h4 className="text-sm font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
            Community Focus
          </h4>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 dark:text-white mt-2">
            Built with modern standards
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
            Lenderoo is engineered with **Supabase**, offering secure user sessions and end-to-end encryption for your database. Rest assured your connections and sharing rosters are completely safe.
          </p>
        </div>

      </div>
    </section>
  );
}
