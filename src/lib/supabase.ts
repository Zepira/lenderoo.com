import { createClient } from "@supabase/supabase-js";

// Read-only public client for the marketing site — same Supabase project as
// the app, but scoped by RLS to anon-readable rows only (public release
// notes, and feedback rows marked display = true). See
// supabase/migrations/043_release_notes_and_public_feedback.sql in the app
// repo for the policies that make this safe to expose in a browser bundle.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;
