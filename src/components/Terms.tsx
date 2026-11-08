import React from "react";
import LegalPage, { Section, P, List, A } from "./LegalPage";
import { SUPPORT_EMAIL, DEVELOPER_NAME } from "../lib/site";

interface TermsProps {
  onBackToHome: () => void;
}

export default function Terms({ onBackToHome }: TermsProps) {
  return (
    <LegalPage
      title="Terms of use"
      updated="8 November 2026"
      onBackToHome={onBackToHome}
      intro={
        <p>
          These terms apply when you use the Lenderoo app, made by {DEVELOPER_NAME}. By creating an account you agree to
          them. They're written to be read, so please do.
        </p>
      }
    >
      <Section title="Lenderoo is free">
        <P>
          Lenderoo is free to use, with no ads. If we ever add something paid, it will be optional, and we'll tell you
          clearly before you pay for anything.
        </P>
      </Section>

      <Section title="Your account">
        <List>
          <li>Give us a real email address, and keep your password to yourself.</li>
          <li>You're responsible for what happens on your account.</li>
          <li>You need to be at least 13 to use Lenderoo.</li>
        </List>
      </Section>

      <Section title="Lending is between you and your friends">
        <P>
          Lenderoo helps you keep track of what you lend and borrow. It doesn't take part in any loan. Whether to lend
          something, for how long, and what happens if it's lost, damaged or not returned is up to you and your friend.
          We're not responsible for items, their condition or their return, or for disagreements between users.
        </P>
      </Section>

      <Section title="What you add">
        <P>
          The items, photos, notes and messages you add are yours. You give us permission to store them and show them
          to the people the app shares them with (see the <A href="/privacy">privacy policy</A>), only so we can run
          Lenderoo. That permission ends when you delete them or your account, apart from shared borrowing history
          described on the <A href="/delete-data">data deletion page</A>.
        </P>
        <P>If you send us feedback or ideas, we can use them to improve Lenderoo without owing you anything.</P>
      </Section>

      <Section title="Please don't">
        <List>
          <li>use Lenderoo to harass, threaten or deceive anyone;</li>
          <li>add anything illegal, offensive, or that you don't have the right to share;</li>
          <li>use Lenderoo to arrange anything illegal, or to sell things;</li>
          <li>try to get at other people's accounts or data, or interfere with how the app works.</li>
        </List>
        <P>
          If someone breaks these terms, we may remove their content or suspend or close their account. You can report
          a problem by emailing <A href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</A>.
        </P>
      </Section>

      <Section title="The app itself">
        <P>
          We work to keep Lenderoo running and your data safe, but we can't promise it will always be available or free
          of errors. We may change features or, with reasonable notice, stop offering Lenderoo. If we do, we'll give
          you a way to get a copy of your data first.
        </P>
      </Section>

      <Section title="Australian Consumer Law">
        <P>
          Nothing in these terms takes away rights you have under the Australian Consumer Law or other laws that can't
          be excluded. Apart from those rights, and to the extent the law allows, we aren't liable for any loss that
          comes from using Lenderoo, including loss of or damage to items you lend or borrow.
        </P>
      </Section>

      <Section title="Ending your account">
        <P>
          You can stop using Lenderoo and delete your account at any time in the app (Settings → Delete Account). See{" "}
          <A href="/delete-data">Delete your account and data</A>.
        </P>
      </Section>

      <Section title="Changes and contact">
        <P>
          If we change these terms, we'll update this page and the date at the top, and tell you in the app if the
          change is significant. These terms are governed by the laws of Australia. Questions? Email{" "}
          <A href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</A>.
        </P>
      </Section>
    </LegalPage>
  );
}
