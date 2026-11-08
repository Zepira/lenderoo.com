import React from "react";
import { Users, BellRing, Heart } from "lucide-react";
import PhoneScreen from "./PhoneScreen";
import GetTheApp from "./GetTheApp";
import { isOnAnyStore } from "../lib/site";

const POINTS = [
  { icon: Users, label: "Only friends you add" },
  { icon: BellRing, label: "Reminders when things are due" },
  { icon: Heart, label: "Free, with no ads" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-12 pb-20 dark:bg-slate-950 sm:pt-16 lg:pt-20 lg:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-brand/15 blur-3xl dark:bg-brand/10"
      ></div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="flex flex-col items-center space-y-7 text-center lg:col-span-6 lg:items-start lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-800 ring-1 ring-teal-200 dark:bg-slate-900 dark:text-teal-200 dark:ring-teal-900">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand"></span>
            {isOnAnyStore ? "Out now" : "Coming soon"}
          </p>

          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            Share more,
            <br />
            <span className="text-teal-700 dark:text-teal-300">buy less.</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Lenderoo keeps track of what you've lent to friends and what you've borrowed from them. Add your books,
            tools and camping gear once, and your friends can ask to borrow them.
          </p>

          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold text-slate-700 dark:text-slate-300 lg:justify-start">
            {POINTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-1.5">
                <Icon className="h-4 w-4 text-teal-700 dark:text-teal-300" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>

          <GetTheApp />
        </div>

        <div className="flex justify-center lg:col-span-6">
          <div className="relative w-[62%] max-w-[280px] sm:w-[48%]">
            <PhoneScreen
              name="item"
              alt=""
              className="absolute top-10 -left-[58%] hidden w-full -rotate-6 opacity-95 sm:block"
            />
            <PhoneScreen
              name="home"
              priority
              alt="Lenderoo home screen: a greeting from the kangaroo, counts of items in your library, lent out and borrowed, and the things you've asked to borrow"
              className="relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
