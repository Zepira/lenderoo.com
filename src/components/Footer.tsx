import React from "react";
import { Mail, Shield, Download, ArrowUp, Heart, ExternalLink } from "lucide-react";
import KangarooLogo from "./KangarooLogo";

interface FooterProps {
  onNavigate: (path: string) => void;
  onScrollToTop: () => void;
}

export default function Footer({ onNavigate, onScrollToTop }: FooterProps) {
  const handlePrivacyClick = () => {
    onNavigate("/privacy");
    onScrollToTop();
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-850">
          
          {/* Logo & Pitch */}
          <div className="md:col-span-5 space-y-4">
            <div 
              onClick={() => { onNavigate("/"); onScrollToTop(); }}
              className="flex items-center gap-3 cursor-pointer group w-fit"
            >
              <div className="w-8 h-8 bg-[#6366f1] rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <KangarooLogo size={10} variant="silhouette" className="text-[#6366f1]" />
                </div>
              </div>
              <span className="font-black text-base tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                Lenderoo
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Lenderoo is a social lending application that allows users to manage a personal library of items and easily borrow/lend them with friends. Reduce waste, save money, and strengthen community ties.
            </p>
            <div className="text-[10px] font-mono text-slate-500">
              Developer: Zepira • Package ID: com.zepira.lenderoo
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3 text-sm">
            <h4 className="text-xs font-black text-slate-200 uppercase tracking-widest">
              Application
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => { onNavigate("/"); onScrollToTop(); }}
                  className="hover:text-white transition-colors text-xs cursor-pointer text-left"
                >
                  Lenderoo Home
                </button>
              </li>
              <li>
                <button
                  onClick={handlePrivacyClick}
                  className="hover:text-white transition-colors text-xs cursor-pointer text-left"
                >
                  Privacy Policy (Google Play submission)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate("/delete-data"); onScrollToTop(); }}
                  className="hover:text-white transition-colors text-xs cursor-pointer text-left"
                >
                  Data Deletion Request
                </button>
              </li>
              <li>
                <a 
                  href="mailto:alana.labouchardiere@gmail.com"
                  className="hover:text-white transition-colors text-xs flex items-center gap-1"
                >
                  <span>Email Developer Support</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
            </ul>
          </div>

          {/* Download & Platforms */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-black text-slate-200 uppercase tracking-widest">
              Download App
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.zepira.lenderoo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0fbca2] hover:bg-[#0da48d] text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md transition-colors w-fit cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download for Android</span>
              </a>
              <span className="text-[10px] text-slate-500">
                iOS application is currently in development (Apple App Store coming soon)
              </span>
            </div>
          </div>

        </div>

        {/* Bottom credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Zepira. Built for sustainable living and neighborhood connection.</p>
          
          <button
            onClick={onScrollToTop}
            className="flex items-center gap-1 hover:text-white transition-colors font-semibold text-[11px] uppercase tracking-wider bg-slate-800/60 border border-slate-750 px-3 py-1.5 rounded-xl cursor-pointer"
          >
            <ArrowUp className="w-3 h-3" />
            <span>Scroll to Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
