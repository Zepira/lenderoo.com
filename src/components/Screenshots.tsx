import React from "react";
import PhoneScreen from "./PhoneScreen";

// Same screens as the App Store listing (store/screenshots/ios in the app repo).
// Every name and cover in them is made up.
const SCREENS = [
  {
    name: "home",
    caption: "Everything you've lent, in one place",
    alt: "Home screen with counts of items in your library, lent out and borrowed",
  },
  {
    name: "requests",
    caption: "Say yes or no to borrow requests",
    alt: "Two borrow requests, a snorkel set and a ski jacket, each with a note from the friend and Approve and Deny buttons",
  },
  {
    name: "library",
    caption: "Your whole library, covers and all",
    alt: "My Library: a grid of books with their covers, plus kitchen and clothing items marked Available",
  },
  {
    name: "item",
    caption: "See who has it, and for how long",
    alt: "A book's page: owner, condition, how long it's been out, who it's lent to and its borrowing history",
  },
  {
    name: "friends",
    caption: "Lend only to friends you add",
    alt: "My Friends: a list of friends with animal avatars and how many items each shares",
  },
  {
    name: "explore",
    caption: "Browse what your friends can lend",
    alt: "Explore: search your friends' items or browse by category, such as books, tools, clothing and games",
  },
];

export default function Screenshots() {
  return (
    <section className="border-t border-slate-200/60 bg-slate-50 py-20 dark:border-slate-800/60 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-widest text-teal-700 dark:text-teal-300">Screenshots</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            A closer look at Lenderoo
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Every name, item and book cover here is made up for the screenshots.
          </p>
        </div>

        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 sm:gap-x-8 lg:grid-cols-6 lg:gap-x-5">
          {SCREENS.map((screen) => (
            <li key={screen.name} className="flex flex-col items-center text-center">
              <PhoneScreen name={screen.name} alt={screen.alt} className="w-full max-w-[220px]" />
              <p className="mt-4 max-w-[14rem] text-sm font-semibold leading-snug text-slate-700 dark:text-slate-200">
                {screen.caption}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
