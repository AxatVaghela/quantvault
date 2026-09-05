"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Compass,
  Map,
  Calculator,
  Binary,
  Shapes,
  Hash,
  Sparkles,
  BookOpen,
  Zap,
  Clock,
  History,
  Target,
  Bookmark,
  AlertTriangle,
  Flame,
  CheckCircle2
} from "lucide-react";
import { useQuantProgress } from "@/hooks/useQuantProgress";

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  badgeColor?: string;
  priority?: "P1" | "P2" | "P3";
}

const NAV_SECTIONS: { sectionTitle?: string; items: NavItem[] }[] = [
  {
    items: [
      { title: "Home Hub", href: "/", icon: Compass },
      { title: "Quant Roadmap", href: "/roadmap", icon: Map, badge: "P1-P3 Path" },
    ]
  },
  {
    sectionTitle: "Core Modules",
    items: [
      { title: "Arithmetic", href: "/arithmetic", icon: Calculator, badge: "P1 • 8-9 Qs", badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
      { title: "Algebra", href: "/algebra", icon: Binary, badge: "P1 • 6-8 Qs", badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
      { title: "Geometry", href: "/geometry", icon: Shapes, badge: "P2 • 3-5 Qs", badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
      { title: "Number Systems", href: "/number-systems", icon: Hash, badge: "P2 • 2-3 Qs", badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
      { title: "Modern Math", href: "/modern-math", icon: Sparkles, badge: "P3 • 1-3 Qs", badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20" },
    ]
  },
  {
    sectionTitle: "Speed & Revision",
    items: [
      { title: "Formula Vault", href: "/formula-vault", icon: BookOpen, badge: "Flashcards" },
      { title: "Shortcut Library", href: "/shortcuts", icon: Zap, badge: "Mental Math" },
      { title: "Quick Revision", href: "/revision", icon: Clock, badge: "15/30/60m", badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
      { title: "PYQ Patterns", href: "/pyq-patterns", icon: History, badge: "10-Yr Intel" },
      { title: "Exam Strategy", href: "/strategy", icon: Target, badge: "ABC Rule" },
      { title: "Common Mistakes", href: "/common-mistakes", icon: AlertTriangle, badge: "Hall of Traps", badgeColor: "bg-red-500/10 text-red-400 border-red-500/20" },
      { title: "Bookmarks", href: "/bookmarks", icon: Bookmark },
    ]
  }
];

export function Sidebar({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const { stats } = useQuantProgress();

  return (
    <aside className={`flex flex-col h-screen w-72 bg-[#0a0d14] border-r border-slate-800/80 text-slate-300 select-none ${className}`}>
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-800/80 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-blue-600 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
            <span className="font-extrabold text-slate-950 text-xl tracking-tighter">Q</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg text-white tracking-tight">QuantVault</span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-widest">
                CAT OS
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium">Concept → Pattern → Speed</p>
          </div>
        </Link>
      </div>

      {/* Mastery Progress Capsule */}
      <div className="px-4 py-3 mx-3 mt-3 rounded-xl bg-slate-900/90 border border-slate-800/80 shadow-inner">
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="text-slate-400 font-medium flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            QA Readiness
          </span>
          <span className="font-bold text-white">{stats.masteryPercentage}%</span>
        </div>
        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 via-indigo-500 to-amber-400 h-full rounded-full transition-all duration-500"
            style={{ width: `${Math.max(stats.masteryPercentage, 8)}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2">
          <span className="text-emerald-400 font-medium">✓ {stats.strongCount} Strong</span>
          <span className="text-amber-400 font-medium">⚡ {stats.mediumCount} Medium</span>
          <span className="text-rose-400 font-medium">△ {stats.weakCount} Weak</span>
        </div>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6 scrollbar-thin scrollbar-thumb-slate-800">
        {NAV_SECTIONS.map((section, idx) => (
          <div key={idx} className="space-y-1">
            {section.sectionTitle && (
              <div className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                {section.sectionTitle}
              </div>
            )}
            {section.items.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all group ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600/20 to-indigo-600/10 text-white border border-blue-500/30 shadow-sm"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon
                      className={`w-4 h-4 transition-colors ${
                        isActive
                          ? "text-blue-400"
                          : "text-slate-400 group-hover:text-slate-200"
                      }`}
                    />
                    <span className="truncate">{item.title}</span>
                  </div>

                  {item.badge && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-md font-semibold tracking-wide border shrink-0 ${
                        item.badgeColor ||
                        (isActive
                          ? "bg-blue-500/20 text-blue-300 border-blue-400/30"
                          : "bg-slate-800/80 text-slate-400 border-slate-700/50")
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      {/* Bottom Footer info */}
      <div className="p-3 border-t border-slate-800/80 bg-slate-950/60 text-[11px] text-slate-500 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Local Sync Active</span>
        </div>
        <span className="text-slate-400 font-mono text-[10px]">CAT 2024-25 Ready</span>
      </div>
    </aside>
  );
}
