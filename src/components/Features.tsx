import React from "react";
import {
  ScanBarcode,
  Users,
  MessageSquareText,
  BellRing,
  BookOpen,
  Wrench,
  Shirt,
  Smartphone,
  Gamepad2,
  Trophy,
  Utensils,
  Box,
} from "lucide-react";

const FEATURES = [
  {
    icon: ScanBarcode,
    title: "Add things in seconds",
    description:
      "Search for a book by title or scan its barcode, and Lenderoo fills in the cover and details. Everything else goes in with a photo and a category.",
  },
  {
    icon: Users,
    title: "Lend only to friends you add",
    description:
      "Your library is visible to the friends you add and no one else. There's no public feed, and no strangers asking for your drill.",
  },
  {
    icon: MessageSquareText,
    title: "Requests instead of awkward texts",
    description:
      "Friends ask to borrow with a note, like \"off to Byron next weekend\". You approve or decline, and you both know when it's due back.",
  },
  {
    icon: BellRing,
    title: "Reminders do the nudging",
    description:
      "Lenderoo reminds you when something's due back soon or running late, so you don't have to chase it. And if it never comes back, you can claim it back.",
  },
];

const CATEGORIES = [
  { icon: BookOpen, label: "Books" },
  { icon: Wrench, label: "Tools" },
  { icon: Shirt, label: "Clothing" },
  { icon: Smartphone, label: "Electronics" },
  { icon: Gamepad2, label: "Games" },
  { icon: Trophy, label: "Sports" },
  { icon: Utensils, label: "Kitchen" },
  { icon: Box, label: "Anything else" },
];

export default function Features() {
  return (
    <section
      id="features-section"
      className="scroll-mt-16 border-t border-slate-200/60 bg-white py-20 dark:border-slate-900 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-widest text-teal-700 dark:text-teal-300">Features</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Lending between friends, without the guesswork
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Who has your tent? When's that book coming back? Lenderoo remembers, so you don't have to.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="rounded-3xl border border-slate-200/70 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-brand/15 p-3 dark:bg-brand/10">
                <Icon className="h-6 w-6 text-teal-700 dark:text-teal-300" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-950 dark:text-white">{title}</h3>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col items-center justify-between gap-8 rounded-3xl border border-slate-200/70 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-10 md:flex-row">
          <div className="max-w-md text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">Share anything in your house</h3>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
              Sort what you own into categories, and friends can browse by category to find what they need.
            </p>
          </div>

          <ul className="flex max-w-md flex-wrap justify-center gap-2.5">
            {CATEGORIES.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
              >
                <Icon className="h-4 w-4 text-teal-700 dark:text-teal-300" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
