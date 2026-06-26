import React from "react";
import { Trash2, ArrowLeft, CheckCircle, XCircle, Mail, AlertTriangle, Smartphone } from "lucide-react";

interface DataDeletionProps {
  onBackToHome: () => void;
}

export default function DataDeletion({ onBackToHome }: DataDeletionProps) {
  const lastUpdated = "June 26, 2026";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8 border-b border-slate-200 dark:border-slate-800 pb-6">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </button>
          <span className="text-xs font-mono text-slate-400">com.zepira.lenderoo</span>
        </div>

        {/* Title */}
        <div className="text-center mb-10">
          <div className="inline-flex p-3 bg-red-50 dark:bg-red-950/30 rounded-full mb-4 text-red-500">
            <Trash2 className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 dark:text-white mb-3">
            Account & Data Deletion
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto">
            This page describes how <strong className="text-slate-700 dark:text-slate-300">Lenderoo</strong> users can request permanent deletion of their account and associated data, as operated by <strong className="text-slate-700 dark:text-slate-300">Zepira Labs</strong>.
          </p>
          <p className="text-xs text-slate-400 mt-2">Last updated: {lastUpdated}</p>
        </div>

        <div className="space-y-6">

          {/* Method 1 — In-app */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-lg">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-extrabold text-slate-950 dark:text-white">Option 1 — Delete directly in the app</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">Fastest method. Instant and does not require contacting us.</p>
              </div>
            </div>
            <ol className="space-y-3">
              {[
                "Open the Lenderoo app on your Android device.",
                <>Tap the <span className="font-bold text-slate-950 dark:text-white">Profile</span> tab or open the <span className="font-bold text-slate-950 dark:text-white">Settings</span> menu.</>,
                <>Scroll to the bottom and tap <span className="font-bold text-red-600 dark:text-red-400">Delete Account</span>.</>,
                "Confirm the deletion when prompted. This action is immediate and cannot be undone.",
              ].map((step, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-black flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Method 2 — Email */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-lg">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-extrabold text-slate-950 dark:text-white">Option 2 — Request deletion by email</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">Use this if you no longer have access to the app.</p>
              </div>
            </div>
            <ol className="space-y-3 mb-6">
              {[
                <>Send an email to <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">dev@zepiralabs.com</span> from the email address associated with your Lenderoo account.</>,
                <>Use the subject line: <span className="font-mono font-bold text-slate-950 dark:text-white">Account Deletion Request — Lenderoo</span></>,
                "Include your Lenderoo username or registered email address so we can locate your account.",
                "We will process your request and send a confirmation within 7 business days.",
              ].map((step, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-black flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">{step}</span>
                </li>
              ))}
            </ol>
            <a
              href="mailto:dev@zepiralabs.com?subject=Account%20Deletion%20Request%20%E2%80%94%20Lenderoo"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors"
            >
              <Mail className="w-4 h-4" />
              Send deletion request
            </a>
          </div>

          {/* What gets deleted vs kept */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-amber-50 dark:bg-amber-950/30 text-amber-500 rounded-lg">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h2 className="text-base font-extrabold text-slate-950 dark:text-white">What data is deleted and what is retained</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Deleted */}
              <div className="rounded-xl border border-red-100 dark:border-red-900/30 bg-red-50/40 dark:bg-red-950/10 p-4">
                <h3 className="text-xs font-extrabold text-red-600 dark:text-red-400 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5" /> Permanently deleted
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {[
                    "Email address and password",
                    "Username and display name",
                    "Profile photo",
                    "All library items you added",
                    "All friend connections",
                    "All borrow and lend request records",
                    "Push notification device tokens",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-3 italic">
                  Deletion from active databases is immediate upon confirmation.
                </p>
              </div>

              {/* Retained */}
              <div className="rounded-xl border border-emerald-100 dark:border-emerald-900/30 bg-emerald-50/40 dark:bg-emerald-950/10 p-4">
                <h3 className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" /> Temporarily retained
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {[
                    { item: "Automated database backups", note: "Purged within 30 days per Supabase backup rotation policy." },
                    { item: "Aggregated, anonymised analytics", note: "No personal identifiers. Retained indefinitely for product improvement." },
                  ].map(({ item, note }) => (
                    <li key={item} className="flex gap-2 items-start">
                      <span className="text-emerald-500 mt-0.5 flex-shrink-0">↻</span>
                      <span>
                        <span className="font-semibold text-slate-700 dark:text-slate-300">{item}</span>
                        <span className="block text-xs text-slate-500 dark:text-slate-500 mt-0.5">{note}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-3 italic">
                  No retained data can be used to identify or contact you after deletion.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="text-center mt-10 text-xs text-slate-400 space-y-1">
          <p>Questions? Email <a href="mailto:dev@zepiralabs.com" className="underline hover:text-slate-600 dark:hover:text-slate-300">dev@zepiralabs.com</a></p>
          <p>© 2026 Zepira Labs. Lenderoo — com.zepira.lenderoo</p>
        </div>

      </div>
    </div>
  );
}
