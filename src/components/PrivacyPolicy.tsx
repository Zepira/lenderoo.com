import React from "react";
import LegalPage, { Section, P, List, A } from "./LegalPage";
import { SUPPORT_EMAIL, DEVELOPER_NAME } from "../lib/site";

interface PrivacyPolicyProps {
  onBackToHome: () => void;
}

// Keep this page in step with the app. Facts checked against the Lenderoo repo
// (supabase/migrations, supabase/functions, lib/services) on 8 Nov 2026.
export default function PrivacyPolicy({ onBackToHome }: PrivacyPolicyProps) {
  return (
    <LegalPage
      title="Privacy policy"
      updated="8 November 2026"
      onBackToHome={onBackToHome}
      intro={
        <p>
          Lenderoo is made by {DEVELOPER_NAME}, an Australian developer. This policy explains what the app collects, why,
          who can see it and how to delete it. In short: we collect what the app needs to work, we don't sell it, and
          there are no ads, analytics or tracking in Lenderoo.
        </p>
      }
    >
      <Section title="What we collect">
        <List>
          <li>
            <strong>Your account:</strong> your email address, a password (stored only as a secure hash), the name you
            choose and, if you add one, your phone number.
          </li>
          <li>
            <strong>Profile photo:</strong> only if you add one.
          </li>
          <li>
            <strong>Your library:</strong> the things you add, with their names, descriptions, photos, notes, category
            and details such as a book's author or ISBN.
          </li>
          <li>
            <strong>Friends and lending:</strong> who you're friends with, borrow requests and the notes on them, loan
            dates, due dates, returns and borrowing history. Also items you've favourited or asked to be told about when
            they're available.
          </li>
          <li>
            <strong>Notifications:</strong> a push token from Apple or Google that lets us send notifications to your
            device.
          </li>
          <li>
            <strong>Feedback you send:</strong> your comment, any screenshots you attach, your device model, operating
            system version and app version. Feedback isn't linked to your account.
          </li>
        </List>
        <P>
          We don't collect your location, date of birth or payment details. Lenderoo has no ads, no analytics and no
          crash-reporting or tracking tools.
        </P>
      </Section>

      <Section title="Finding friends from your contacts">
        <P>
          If you choose to find friends from your contacts, the app turns each contact's phone numbers and email
          addresses into hashes (scrambled codes) on your phone and sends only the hashes to our server to look for
          matches. Your contacts' names never leave your phone, and we don't keep the hashes after the check. You can use
          Lenderoo without ever allowing access to your contacts.
        </P>
      </Section>

      <Section title="Who can see your information">
        <List>
          <li>
            <strong>Friends you add</strong> can see your name, photo and library, what you've lent them and their
            borrowing history with you.
          </li>
          <li>
            <strong>Other Lenderoo users</strong> can find you by searching for your name or email address, or with
            your friend code, so they can send you a friend request. They see your name and profile photo.
          </li>
          <li>
            <strong>Photos</strong> (profile and item photos) are stored at long, unlisted web addresses. Anyone who
            has an address can open that photo, so don't add photos you'd want kept secret.
          </li>
          <li>
            <strong>Feedback</strong> may be shown, without your name, on our public roadmap page.
          </li>
        </List>
      </Section>

      <Section title="Why we use it">
        <P>
          Only to run Lenderoo: to sign you in, show your library to your friends, handle borrow requests, send
          notifications and reminders (for example, when something is due back), answer your support emails and fix
          problems you report. We don't sell or rent your information, and we don't use it for advertising.
        </P>
      </Section>

      <Section title="Services we use">
        <P>Lenderoo relies on a few other companies to work. Each one only gets what it needs:</P>
        <List>
          <li>
            <strong>Supabase</strong> stores your account, library and photos, and runs the app's server. Its servers
            may be outside Australia.
          </li>
          <li>
            <strong>Expo</strong> (650 Industries) delivers push notifications and app updates. Notifications include
            the text shown on your screen, such as a friend's name and an item's name.
          </li>
          <li>
            <strong>Hardcover</strong> receives the book titles you search for, to find covers and details.{" "}
            <strong>UPCitemdb</strong> receives barcodes you scan. Neither receives your name, email or account
            details, but they can see your device's internet address, as any website can. Book covers are loaded from
            those services' servers.
          </li>
          <li>
            <strong>Apple and Google</strong> provide the app stores and notification delivery, under their own
            privacy policies.
          </li>
        </List>
        <P>
          Some of these companies store data overseas, including in the United States. We choose services with strong
          security, but overseas laws may not protect your information in the same way as Australian law.
        </P>
        <P>
          We may also disclose information if the law requires it, or to protect someone's safety.
        </P>
      </Section>

      <Section title="Permissions on your phone">
        <List>
          <li>
            <strong>Camera:</strong> to scan barcodes and take photos of your things or your profile photo.
          </li>
          <li>
            <strong>Photos:</strong> to choose item photos, a profile photo or a screenshot for feedback.
          </li>
          <li>
            <strong>Contacts:</strong> to find friends who already use Lenderoo (see above).
          </li>
          <li>
            <strong>Notifications:</strong> for borrow requests, handovers and reminders.
          </li>
        </List>
        <P>Each one is optional, and you can turn it off at any time in your phone's settings.</P>
      </Section>

      <Section title="Keeping and deleting your information">
        <P>
          We keep your information while you have an account. You can delete your account at any time in the app under{" "}
          <strong>Settings → Delete Account</strong>, or by emailing us. See{" "}
          <A href="/delete-data">Delete your account and data</A> for exactly what's removed and what's kept.
        </P>
      </Section>

      <Section title="Seeing or correcting your information">
        <P>
          You can change your name, email, phone number and photo in the app. To get a copy of the information we hold
          about you, or to ask us to correct it, email <A href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</A>.
        </P>
      </Section>

      <Section title="Children">
        <P>
          Lenderoo isn't intended for children under 13, and we don't knowingly collect information from them. If you
          think a child has signed up, email us and we'll delete the account.
        </P>
      </Section>

      <Section title="Questions and complaints">
        <P>
          Email <A href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</A> and we'll reply within 30 days. If you're not
          happy with our answer, you can complain to the{" "}
          <A href="https://www.oaic.gov.au/privacy/privacy-complaints">Office of the Australian Information Commissioner</A>.
        </P>
      </Section>

      <Section title="Changes to this policy">
        <P>
          If we change how Lenderoo uses your information, we'll update this page and the date at the top. For a
          significant change, we'll also let you know in the app.
        </P>
      </Section>
    </LegalPage>
  );
}
