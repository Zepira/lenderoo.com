import React from "react";
import { Layers, Users, Bell, Moon, BookOpen, Wrench, Gamepad } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Layers className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Add Items to Your Library",
      description: "Quickly catalog your personal items, from books and cordless drills to board games and camping tents. Categorize them so they are easy for friends to discover.",
      accent: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Users className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: "Connect with Trusted Friends",
      description: "Lenderoo is safe because it's invite-only with friends you trust. Connect to see what your friends own and make borrowing a friendly, local conversation.",
      accent: "from-teal-500 to-teal-600"
    },
    {
      icon: <Bell className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
      title: "Real-Time Push Notifications",
      description: "Stay in the loop with instant Expo notifications. Get notified when someone wants to borrow an item, when a request is approved, and receive friendly return reminders.",
      accent: "from-amber-400 to-amber-500"
    },
    {
      icon: <Moon className="w-6 h-6 text-indigo-500 dark:text-purple-400" />,
      title: "Dark/Light Mode Support",
      description: "A gorgeous interface that respects your system settings. Toggle dark mode for comfortable late-night library browsing, available on Android.",
      accent: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section id="features-section" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 relative border-t border-slate-200/40 dark:border-slate-900/60">
      
      {/* Geometric Balance blueprint grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-indigo-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
            Key Features
          </h2>
          <p className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 dark:text-white mt-3">
            Designed for seamless, friendly sharing
          </p>
          <p className="text-base text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
            Lenderoo removes the awkwardness of lending. Keep track of what you own, who has it, and when it's coming back, all inside a beautiful social layout.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/2 dark:hover:shadow-indigo-500/1 transition-all duration-300"
            >
              {/* Feature Icon Background */}
              <div className="inline-flex p-3.5 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200/50 dark:border-slate-700/50 mb-6 transition-all group-hover:scale-110 group-hover:shadow-indigo-500/10">
                {feature.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative side accent bar on hover */}
              <div className={`absolute top-0 bottom-0 left-0 w-1 rounded-l-2xl bg-gradient-to-b ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            </div>
          ))}
        </div>

        {/* Categories Section - Interactive visualizer */}
        <div className="mt-16 p-6 sm:p-10 rounded-2xl bg-indigo-50/20 dark:bg-slate-900/40 border border-indigo-100/50 dark:border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-[10px] font-black text-teal-600 dark:text-teal-400 uppercase tracking-widest bg-teal-50 dark:bg-teal-950/20 px-2.5 py-1 rounded-full border border-teal-100 dark:border-teal-900/30">
              Versatile Sharing
            </span>
            <h3 className="text-xl font-extrabold text-slate-950 dark:text-white mt-3">
              Share anything in your household
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              Lenderoo supports custom tags so you are never limited. Categorize your items so friends can find exactly what they need in seconds.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-sm">
            {[
              { icon: <BookOpen className="w-4 h-4 text-emerald-500" />, label: "Books & Literature" },
              { icon: <Wrench className="w-4 h-4 text-amber-500" />, label: "Tools & Equipment" },
              { icon: <Gamepad className="w-4 h-4 text-indigo-500" />, label: "Board Games" },
              { icon: <Layers className="w-4 h-4 text-rose-500" />, label: "And so much more!" }
            ].map((cat, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-1.5 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold shadow-sm"
              >
                {cat.icon}
                <span>{cat.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
