import React from "react";
import { Shield, Mail, Trash2, ArrowLeft, Database, Bell, Lock, CreditCard } from "lucide-react";

interface PrivacyPolicyProps {
  onBackToHome: () => void;
}

export default function PrivacyPolicy({ onBackToHome }: PrivacyPolicyProps) {
  const lastUpdated = "June 26, 2026";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation / Header */}
        <div className="flex items-center justify-between mb-8 border-b border-slate-200 dark:border-slate-800 pb-6">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </button>
          
          <div className="text-right">
            <span className="text-xs font-mono text-slate-400">App Package: com.zepira.lenderoo</span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-full mb-4 text-indigo-600 dark:text-indigo-400">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 dark:text-white mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Last Updated: <span className="font-bold">{lastUpdated}</span>
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm leading-relaxed space-y-8">
          
          {/* Quick Summary Box */}
          <div className="bg-indigo-50/50 dark:bg-indigo-950/10 rounded-xl p-5 border border-indigo-100/50 dark:border-indigo-950/30">
            <h3 className="font-extrabold text-indigo-950 dark:text-indigo-400 text-sm mb-2 flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span>Lenderoo Privacy Pledge</span>
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Lenderoo is built around sharing and community. Zepira Labs (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) takes your privacy seriously. We never sell, rent, or monetize your personal data in any way. The information we collect is strictly utilized to operate the social lending features of the app and to keep you notified.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-950 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
              <span className="text-indigo-600 dark:text-indigo-400">1.</span> Information We Collect
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              To operate the Lenderoo application and offer its social sharing capabilities, we collect specific information when you register and use the app:
            </p>
            <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-3">
              <li>
                <strong className="text-slate-850 dark:text-slate-300">Account Credentials:</strong> Your email address, a unique username, a display name, and a securely encrypted password are required to create an account, log you in, and identify you to friends.
              </li>
              <li>
                <strong className="text-slate-850 dark:text-slate-300">Profile Photo (Optional):</strong> You can optionally upload a profile image to help friends easily recognize you.
              </li>
              <li>
                <strong className="text-slate-850 dark:text-slate-300">Library Items:</strong> We store the lists of items (books, tools, games, outdoor equipment, etc.) that you actively choose to add to your personal Lenderoo library.
              </li>
              <li>
                <strong className="text-slate-850 dark:text-slate-300">Friend Connections:</strong> We store the user IDs of friends you choose to connect with so you can view each other&apos;s libraries.
              </li>
              <li>
                <strong className="text-slate-850 dark:text-slate-300">Borrow & Lend History:</strong> We store records of borrow requests, including the item, the requester, dates, approvals, and return states to track item locations.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-950 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
              <span className="text-indigo-600 dark:text-indigo-400">2.</span> Technical Infrastructure & Services
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Lenderoo relies on secure third-party infrastructure providers to run core app systems. These third parties only process data according to strict privacy guidelines:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex gap-3 bg-slate-50/50 dark:bg-slate-900/50">
                <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold mb-1">Backend & Authentication (Supabase)</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                    We use Supabase for database hosting, user login authentication, and media storage. Your data is securely stored inside our designated Supabase clusters.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex gap-3 bg-slate-50/50 dark:bg-slate-900/50">
                <Bell className="w-5 h-5 text-[#0fbca2] flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold mb-1">Push Notifications (Expo Notifications)</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                    To keep you updated when a friend requests an item or sends a reminder, we use Expo Notifications. This involves sending anonymous notification tokens to route messages safely to your specific Android device.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-950 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
              <span className="text-indigo-600 dark:text-indigo-400">3.</span> Financial and Payment Data
            </h2>
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex gap-3 bg-slate-50/50 dark:bg-slate-900/50">
              <CreditCard className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                All financial transactions, subscriptions, or in-app purchases are handled exclusively through the Google Play Billing Service. We do not collect, process, or store your credit card, bank account, or other financial details.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-950 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
              <span className="text-indigo-600 dark:text-indigo-400">4.</span> Data Sharing & Commercialization
            </h2>
            <div className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 p-4 rounded-xl border border-emerald-500/20 text-sm">
              <strong>Absolutely No Sale of Data:</strong> We do not, have never, and will never sell, lease, exchange, or commercialize your personal information to third-party advertisers, data brokers, or marketing networks.
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <strong className="text-slate-850 dark:text-slate-300">Legal Disclosures:</strong> We only disclose information if strictly required to comply with legally valid subpoenas, judicial orders, or to protect the physical safety, property, or legal rights of other users.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-950 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
              <span className="text-indigo-600 dark:text-indigo-400">5.</span> Account Deletion & Right to be Forgotten
            </h2>
            <div className="flex gap-4 items-start bg-slate-50/50 dark:bg-slate-900/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="p-3 bg-red-50 dark:bg-red-950/20 text-red-500 rounded-lg flex-shrink-0 mt-1">
                <Trash2 className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-slate-650 dark:text-slate-350">
                  You hold full ownership of your data. You can delete your account and permanently purge your records at any time:
                </p>
                <ol className="list-decimal pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  <li>Navigate to the <span className="font-bold text-slate-950 dark:text-white">Settings</span> menu inside the Lenderoo app.</li>
                  <li>Tap the <span className="font-bold text-slate-950 dark:text-white">Delete Account</span> option and confirm.</li>
                </ol>
                <p className="text-xs text-slate-500 dark:text-slate-450 italic mt-3">
                  Upon confirmation, your user credentials, personal library items, friendships, profile pictures, and active request logs will be permanently deleted from our active database servers and cannot be recovered.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-950 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
              <span className="text-indigo-600 dark:text-indigo-400">6.</span> Children&apos;s Privacy
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Lenderoo is not directed at or intended for children under the age of 13. We do not knowingly collect personal data from children under 13. If you believe a child has provided us with personal information, please contact us immediately so we can remove it.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-lg font-extrabold text-slate-950 dark:text-white flex items-center gap-2 pb-1">
              <span className="text-indigo-600 dark:text-indigo-400">7.</span> Contact Us
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              For any questions, data access requests, or issues regarding this Privacy Policy, please reach out directly to:
            </p>
            <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-2.5">
                <div className="bg-indigo-100 dark:bg-indigo-950/40 p-2 rounded-lg text-indigo-600 dark:text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold">Zepira Labs</h4>
                  <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">dev@zepiralabs.com</p>
                </div>
              </div>
              <a
                href="mailto:dev@zepiralabs.com"
                className="inline-flex justify-center items-center bg-[#6366f1] hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Send Email
              </a>
            </div>
          </section>

        </div>

        {/* Footer info */}
        <div className="text-center mt-12 text-xs text-slate-400">
          <p>© 2026 Zepira Labs. All rights reserved.</p>
          <p className="mt-1">Lenderoo and Zepira are registered under package ID: com.zepira.lenderoo</p>
        </div>

      </div>
    </div>
  );
}

