"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Bookmark, Clock, Zap, Menu, X, Sparkles, ExternalLink } from "lucide-react";
import { CommandPalette } from "./CommandPalette";
import { useQuantProgress } from "@/hooks/useQuantProgress";

export function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { stats } = useQuantProgress();

  return (
    <>
      <header className="h-16 border-b border-slate-800/80 bg-[#0a0d14]/90 backdrop-blur-md px-4 md:px-8 flex items-center justify-between sticky top-0 z-40">
        {/* Mobile menu trigger & title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            aria-label="Open navigation"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              CAT 2024-25
            </span>
            <span className="text-xs text-slate-400 hidden lg:inline">
              Quantitative Aptitude Precision Operating System
            </span>
          </div>
        </div>

        {/* Search Bar Button (Global CMD+K) */}
        <div className="flex-1 max-w-md mx-4">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="w-full flex items-center justify-between px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200 text-xs transition-all shadow-sm group"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" />
              <span>Search formulas, concepts, PYQs...</span>
            </div>
            <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-400 border border-slate-700">
              <span>⌘</span>K
            </kbd>
          </button>
        </div>

        {/* Quick Action Badges */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/revision"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-amber-300 hover:bg-amber-500/20 text-xs font-semibold transition-all"
          >
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Quick</span> Revision
          </Link>

          <Link
            href="/bookmarks"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-slate-700 transition-all relative"
            title="Saved Bookmarks"
          >
            <Bookmark className="w-4 h-4" />
            {stats.bookmarkCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-slate-950 font-bold text-[9px] flex items-center justify-center">
                {stats.bookmarkCount}
              </span>
            )}
          </Link>
        </div>
      </header>

      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
