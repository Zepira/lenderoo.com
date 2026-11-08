import React from "react";
import { Mail } from "lucide-react";
import LegalPage, { Section, P, List, A } from "./LegalPage";
import { SUPPORT_EMAIL, DEVELOPER_NAME } from "../lib/site";

interface DataDeletionProps {
  onBackToHome: () => void;
}

const MAILTO = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Delete my Lenderoo account")}`;

// Matches supabase/functions/delete-account in the Lenderoo repo. Update both together.
export default function DataDeletion({ onBackToHome }: DataDeletionProps) {
  return (
    <LegalPage
      title="Delete your account and data"
      updated="8 November 2026"
      onBackToHome={onBackToHome}
      intro={
        <p>
          How to delete your Lenderoo account (an app by {DEVELOPER_NAME}) and the information in it, and what happens
          when you do.
        </p>
      }
    >
      <Section title="In the app (fastest)">
        <ol className="list-decimal space-y-2 pl-5 text-base text-slate-700 marker:font-bold marker:text-teal-700 dark:text-slate-300 dark:marker:text-teal-300">
          <li>Open Lenderoo on your iPhone or Android phone.</li>
          <li>
            Go to <strong>Settings</strong> and tap <strong>Delete Account</strong>.
          </li>
          <li>Confirm. Your account is deleted straight away, and this can't be undone.</li>
        </ol>
      </Section>

      <Section title="By email">
        <P>
          If you can't get into the app, email <A href={MAILTO}>{SUPPORT_EMAIL}</A> from the email address on your
          account, with the subject "Delete my Lenderoo account". We'll confirm with you, then delete it within 7 days.
        </P>
        <a
          href={MAILTO}
          className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-ink hover:bg-brand-hover"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Email a deletion request
        </a>
      </Section>

      <Section title="What's deleted">
        <List>
          <li>Your name, email address, phone number, password and profile photo. You can't sign in again.</li>
          <li>Your library: every item you own, with its photos.</li>
          <li>Your friend connections, borrow requests, favourites and "tell me when it's available" requests.</li>
          <li>Your push notification token and the contact-matching codes for your email and phone.</li>
        </List>
        <P>
          Anything on loan at the time is marked as returned first, so nobody's left waiting on a loan that can't
          finish. Things you've borrowed stay with their owners.
        </P>
      </Section>

      <Section title="What's kept">
        <List>
          <li>
            <strong>Your friends' borrowing history.</strong> If a friend borrowed from you or lent to you, their
            history keeps a record of the loan (the item, dates and any notes on it), shown with "Deleted User" in place
            of your name.
          </li>
          <li>
            <strong>Feedback you sent.</strong> It isn't linked to your account, so we can't find it to delete it. If
            you want a particular piece of feedback removed, email us and describe it.
          </li>
          <li>
            <strong>Backups.</strong> Copies in our hosting provider's backups are overwritten within 30 days.
          </li>
        </List>
        <P>None of what's kept includes your name, email address, phone number or photo.</P>
      </Section>
    </LegalPage>
  );
}
