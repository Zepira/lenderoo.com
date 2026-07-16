import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  Sparkles,
  MessageSquareText,
  CheckCircle2,
  CircleDot,
  XCircle,
  Rocket,
  Apple,
  Smartphone,
} from "lucide-react";
import { supabase } from "../lib/supabase";

interface RoadmapProps {
  onBackToHome: () => void;
}

interface ReleaseNote {
  id: string;
  version: string;
  platform: "all" | "ios" | "android";
  release_date: string;
  highlights: string[];
}

type FeedbackStatus = "new" | "in_review" | "resolved" | "wont_fix";

interface FeedbackEntry {
  id: string;
  comment: string;
  status: FeedbackStatus;
  response: string | null;
  created_at: string;
}

const STATUS_CONFIG: Record<
  FeedbackStatus,
  { label: string; icon: React.ElementType; classes: string }
> = {
  new: {
    label: "Under consideration",
    icon: CircleDot,
    classes: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
  },
  in_review: {
    label: "In review",
    icon: Rocket,
    classes: "bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400",
  },
  resolved: {
    label: "Shipped",
    icon: CheckCircle2,
    classes: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400",
  },
  wont_fix: {
    label: "Not planned",
    icon: XCircle,
    classes: "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
  },
};

const PLATFORM_ICON: Record<ReleaseNote["platform"], React.ElementType | null> = {
  all: null,
  ios: Apple,
  android: Smartphone,
};

export default function Roadmap({ onBackToHome }: RoadmapProps) {
  const [releaseNotes, setReleaseNotes] = useState<ReleaseNote[]>([]);
  const [feedback, setFeedback] = useState<FeedbackEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase) {
      setError("Live data isn't configured for this build.");
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function load() {
      const [notesRes, feedbackRes] = await Promise.all([
        supabase!
          .from("release_notes")
          .select("id, version, platform, release_date, highlights")
          .order("release_date", { ascending: false }),
        supabase!
          .from("feedback")
          .select("id, comment, status, response, created_at")
          .eq("display", true)
          .order("created_at", { ascending: false }),
      ]);

      if (cancelled) return;

      if (notesRes.error || feedbackRes.error) {
        setError("Couldn't load the latest data — showing what's cached.");
      }
      setReleaseNotes(notesRes.data ?? []);
      setFeedback(feedbackRes.data ?? []);
      setLoading(false);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

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
          <div className="inline-flex p-3 bg-indigo-50 dark:bg-indigo-950/30 rounded-full mb-4 text-indigo-500">
            <Sparkles className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 dark:text-white mb-3">
            Roadmap & Release Notes
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto">
            What's shipped, what's being worked on, and what the community has
            asked for. Feature requests come straight from in-app feedback.
          </p>
        </div>

        {error && (
          <div className="mb-6 text-center text-xs text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-xl py-2 px-4">
            {error}
          </div>
        )}

        <div className="space-y-10">

          {/* ── Roadmap & feature requests ── */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-lg">
                <MessageSquareText className="w-5 h-5" />
              </div>
              <h2 className="text-base font-extrabold text-slate-950 dark:text-white">
                Roadmap & feature requests
              </h2>
            </div>

            {loading ? (
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 text-center text-sm text-slate-400">
                Loading…
              </div>
            ) : feedback.length === 0 ? (
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 text-center text-sm text-slate-400">
                Nothing public yet — check back soon.
              </div>
            ) : (
              <div className="space-y-3">
                {feedback.map((entry) => {
                  const status = STATUS_CONFIG[entry.status];
                  const StatusIcon = status.icon;
                  return (
                    <div
                      key={entry.id}
                      className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          {entry.comment}
                        </p>
                        <span
                          className={`flex-shrink-0 inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${status.classes}`}
                        >
                          <StatusIcon className="w-3 h-3" />
                          {status.label}
                        </span>
                      </div>
                      {entry.response && (
                        <div className="mt-3 pl-3 border-l-2 border-indigo-200 dark:border-indigo-900/50 text-xs text-slate-500 dark:text-slate-400 italic">
                          {entry.response}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </section>

          {/* ── Release notes ── */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-lg">
                <Rocket className="w-5 h-5" />
              </div>
              <h2 className="text-base font-extrabold text-slate-950 dark:text-white">
                Release notes
              </h2>
            </div>

            {loading ? (
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 text-center text-sm text-slate-400">
                Loading…
              </div>
            ) : releaseNotes.length === 0 ? (
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 text-center text-sm text-slate-400">
                No release notes published yet.
              </div>
            ) : (
              <div className="space-y-4">
                {releaseNotes.map((note) => {
                  const PlatformIcon = PLATFORM_ICON[note.platform];
                  return (
                    <div
                      key={note.id}
                      className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-extrabold text-sm text-slate-950 dark:text-white">
                            v{note.version}
                          </span>
                          {PlatformIcon && (
                            <PlatformIcon className="w-3.5 h-3.5 text-slate-400" />
                          )}
                        </div>
                        <span className="text-xs text-slate-400">
                          {new Date(note.release_date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {note.highlights.map((point, i) => (
                          <li
                            key={i}
                            className="flex gap-2 items-start text-sm text-slate-600 dark:text-slate-400"
                          >
                            <span className="text-indigo-400 mt-1.5 w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}
          </section>

        </div>

        {/* Footer */}
        <div className="text-center mt-10 text-xs text-slate-400 space-y-1">
          <p>
            Got a suggestion? Send it through the Feedback option in the app,
            or email{" "}
            <a
              href="mailto:support@lenderoo.app"
              className="underline hover:text-slate-600 dark:hover:text-slate-300"
            >
              support@lenderoo.app
            </a>
          </p>
          <p>© 2026 Zepira Labs. Lenderoo — com.zepira.lenderoo</p>
        </div>

      </div>
    </div>
  );
}
