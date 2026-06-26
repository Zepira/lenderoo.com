import React from "react";
import { Shield, Mail, Trash2, ArrowLeft, Database, Bell, Lock } from "lucide-react";

interface PrivacyPolicyProps {
  onBackToHome: () => void;
}

export default function PrivacyPolicy({ onBackToHome }: PrivacyPolicyProps) {
  const lastUpdated = "June 25, 2026";

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
              Lenderoo is built around sharing and community. We take your privacy seriously. **We never sell, rent, or monetize your personal data in any way.** The information we collect is strictly utilized to operate the social lending features of the app and to keep you notified. You retain absolute control, including the right to delete your account and all associated data at any time.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-950 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
              <span className="text-indigo-600 dark:text-indigo-400">1.</span> Information We Collect
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              To operate the Lenderoo application and offer its social sharing capabilities, Zepira ("we", "us", or "our") collects specific information when you register and use the app:
            </p>
            <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-2">
              <li>
                <strong className="text-slate-850 dark:text-slate-300">Account Credentials:</strong> Your **email address** and a **display name** are required to create an account, log you in, and identify you to friends on the platform.
              </li>
              <li>
                <strong className="text-slate-850 dark:text-slate-300">Profile Photo (Optional):</strong> You can optionally upload a profile image to help friends easily recognize you in the application.
              </li>
              <li>
                <strong className="text-slate-850 dark:text-slate-300">Library Items:</strong> We store the lists of items (books, tools, games, outdoor equipment, etc.) that you actively choose to add to your personal Lenderoo library.
              </li>
              <li>
                <strong className="text-slate-850 dark:text-slate-300">Friend Connections:</strong> We store the user IDs of friends you choose to connect with on Lenderoo so you can view each other's libraries.
              </li>
              <li>
                <strong className="text-slate-850 dark:text-slate-300">Borrow & Lend History:</strong> We store records of borrow requests, including the item, the requester, dates, approvals, and return states. This history serves to keep track of item locations for you and your friends.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-950 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
              <span className="text-indigo-600 dark:text-indigo-400">2.</span> Technical Infrastructure & Services
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Lenderoo relies on robust, secure third-party infrastructure providers to run core app systems. These third parties only process data according to strict privacy guidelines:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex gap-3">
                <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold mb-1">Backend & Authentication: Supabase</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                    We use **Supabase** for database hosting, user login authentication, and media storage. Your account credentials, library items, friend relations, and borrow histories are securely stored inside our designated Supabase clusters.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex gap-3">
                <Bell className="w-5 h-5 text-[#0fbca2] flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold mb-1">Push Notifications: Expo Notifications</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                    To keep you immediately updated when a friend requests an item, accepts a request, or sends a return reminder, we use **Expo Notifications** services. This involves sending anonymous notification tokens to route messages safely to your specific Android device.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-950 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
              <span className="text-indigo-600 dark:text-indigo-400">3.</span> How We Use Your Data
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              We process your personal data strictly for the following purposes:
            </p>
            <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-1.5">
              <li>To initialize and secure your personal account.</li>
              <li>To allow friends to view items in your public Lenderoo library.</li>
              <li>To facilitate the sending, managing, approving, and tracking of borrow requests.</li>
              <li>To push real-time status updates and reminder alerts to your device.</li>
              <li>To provide support and troubleshoot technical glitches.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-950 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
              <span className="text-indigo-600 dark:text-indigo-400">4.</span> Data Sharing & Commercialization
            </h2>
            <div className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 p-4 rounded-xl border border-emerald-500/20 text-sm">
              <strong>Absolutely No Sale of Data:</strong> Zepira does not, has never, and will never sell, lease, exchange, or commercialize your personal information to third-party advertisers, data brokers, or marketing networks.
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              We only disclose information in rare circumstances when strictly required:
            </p>
            <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>To comply with legally valid subpoenas, judicial orders, or governmental processes.</li>
              <li>To protect the physical safety, property, or legal rights of other users, the public, or Zepira.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-950 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
              <span className="text-indigo-600 dark:text-indigo-400">5.</span> Account Deletion & Right to be Forgotten
            </h2>
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-red-50 dark:bg-red-950/20 text-red-500 rounded-lg flex-shrink-0 mt-1">
                <Trash2 className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  You hold full ownership of your data on Lenderoo. You can request to delete your account and all associated personal files at any time.
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  To delete your account and purge your records permanently:
                </p>
                <ol className="list-decimal pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  <li>Navigate to the **Settings** menu inside the Lenderoo mobile application.</li>
                  <li>Tap the **Delete Account** option.</li>
                  <li>Confirm your selection.</li>
                </ol>
                <p className="text-xs text-slate-500">
                  *Upon confirmation, Supabase will immediately delete your user credential. All records concerning your personal library items, active friendships, profile pictures, and active request logs will be deleted from our active database servers, and they cannot be recovered.*
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-950 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
              <span className="text-indigo-600 dark:text-indigo-400">6.</span> Children's Privacy
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Lenderoo is not directed at or intended for children under the age of 13. We do not knowingly collect personal data from children under 13. If you believe that a child has provided us with personal information, please contact us immediately so we can take immediate steps to remove such details.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-lg font-extrabold text-slate-950 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
              <span className="text-indigo-600 dark:text-indigo-400">7.</span> Changes to this Policy
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              We may update this Privacy Policy from time to time. When we make amendments, we will revise the "Last Updated" date at the top of this document. We encourage users to periodically check this page for any adjustments. Continued use of Lenderoo constitutes your acceptance of the updated terms.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-lg font-extrabold text-slate-950 dark:text-white flex items-center gap-2 pb-1">
              <span className="text-indigo-600 dark:text-indigo-400">8.</span> Contact Developer Support
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              For any questions, data access requests, or issues regarding this Privacy Policy, please feel free to reach out directly:
            </p>
            <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-2.5">
                <div className="bg-indigo-100 dark:bg-indigo-950/40 p-2 rounded-lg text-indigo-600 dark:text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold">Zepira (Alana Labouchardiere)</h4>
                  <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">alana.labouchardiere@gmail.com</p>
                </div>
              </div>
              <a
                href="mailto:alana.labouchardiere@gmail.com"
                className="inline-flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Send Email
              </a>
            </div>
          </section>

        </div>

        {/* Footer info */}
        <div className="text-center mt-12 text-xs text-slate-400">
          <p>© 2026 Zepira. All rights reserved.</p>
          <p className="mt-1">Lenderoo and Zepira are registered under package ID: com.zepira.lenderoo</p>
        </div>

      </div>
    </div>
  );
}
