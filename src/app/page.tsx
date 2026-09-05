"use client";

import React from "react";
import Link from "next/link";
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
  ArrowRight,
  Flame,
  CheckCircle2,
  AlertTriangle,
  Award,
  Layers,
  TrendingUp,
  Bookmark
} from "lucide-react";
import { TOPIC_MODULES } from "@/data/topics";
import { CONCEPTS_DATA } from "@/data/concepts";
import { SHORTCUTS_DATA } from "@/data/shortcuts";
import { PYQ_DATA } from "@/data/pyqs";
import { useQuantProgress } from "@/hooks/useQuantProgress";
import { ConceptCard } from "@/components/concept/ConceptCard";

export default function HomePage() {
  const { stats } = useQuantProgress();

  const featuredConcept = CONCEPTS_DATA[0]; // Time & Work

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative rounded-3xl bg-gradient-to-b from-slate-900 via-[#0b0f19] to-[#07090e] border border-slate-800/90 p-6 sm:p-10 shadow-2xl overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>CAT Quantitative Aptitude Precision Engine</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Quant<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-blue-500">Vault</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A high-yield Quant operating system for serious CAT aspirants. No textbook fluff — only high-frequency patterns, speed-solving algorithms, mental shortcuts, and rapid revision drills.
          </p>

          {/* Philosophy Banner */}
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-slate-200">
            <span className="text-blue-400">1. Understand Concept</span>
            <span className="text-slate-600">→</span>
            <span className="text-cyan-400">2. Recognize Pattern</span>
            <span className="text-slate-600">→</span>
            <span className="text-amber-400">3. Choose Best Approach</span>
            <span className="text-slate-600">→</span>
            <span className="text-emerald-400">4. Solve Efficiently</span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/roadmap"
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20"
            >
              <Map className="w-4 h-4" />
              <span>Explore Quant Roadmap</span>
            </Link>

            <Link
              href="/revision"
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 font-bold text-sm flex items-center gap-2 transition-all"
            >
              <Clock className="w-4 h-4 text-amber-400" />
              <span>15/30/60m Rapid Revision</span>
            </Link>

            <Link
              href="/formula-vault"
              className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold text-sm flex items-center gap-2 transition-all"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>Formula Vault</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics & Readiness Hub */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>QA Readiness</span>
            <Flame className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white">
            {stats.masteryPercentage}%
          </div>
          <p className="text-[11px] text-emerald-400 font-medium">
            {stats.strongCount} Topics Confirmed Strong
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Sprint Drills</span>
            <Clock className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white">
            {stats.revisionSessions}
          </div>
          <p className="text-[11px] text-slate-400 font-medium">
            Completed Revision Cycles
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Saved Bookmarks</span>
            <Bookmark className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white">
            {stats.bookmarkCount}
          </div>
          <p className="text-[11px] text-slate-400 font-medium">
            Concepts & PYQ Gems
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Target Benchmark</span>
            <Award className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white">
            99.0+ %ile
          </div>
          <p className="text-[11px] text-purple-400 font-medium">
            28-32 Marks (~10 Net Correct)
          </p>
        </div>
      </section>

      {/* Preparation Priority Modules */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Topic Breakdown by Preparation Priority
            </h2>
            <p className="text-xs text-slate-400">
              Focus effort according to historical CAT question distributions.
            </p>
          </div>
          <Link
            href="/roadmap"
            className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
          >
            <span>View Full Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TOPIC_MODULES.map((module) => (
            <Link
              key={module.id}
              href={`/${module.id}`}
              className="rounded-2xl bg-slate-900/80 border border-slate-800/90 p-5 hover:border-slate-700 hover:bg-slate-900 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                      module.priority === "P1"
                        ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                        : module.priority === "P2"
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                        : "bg-pink-500/20 text-pink-300 border-pink-500/30"
                    }`}
                  >
                    {module.priority} • {module.badgeText}
                  </span>

                  <span className="text-xs text-slate-400 font-mono">
                    {module.historicalWeightage}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {module.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {module.description}
                </p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {module.subtopics.slice(0, 4).map((sub) => (
                    <span
                      key={sub.id}
                      className="px-2 py-0.5 rounded bg-slate-950 text-[10px] text-slate-400 border border-slate-800"
                    >
                      {sub.title}
                    </span>
                  ))}
                  {module.subtopics.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded bg-slate-950 text-[10px] text-slate-500">
                      +{module.subtopics.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-blue-400">
                <span>Explore Concepts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Deep-Dive Concept Card */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Featured High-Yield Concept Blueprint
            </h2>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            9-Point Concept Architecture
          </span>
        </div>

        <ConceptCard concept={featuredConcept} />
      </section>

      {/* Speed & Intel Hub */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Shortcut Library Card */}
        <Link
          href="/shortcuts"
          className="rounded-2xl bg-gradient-to-br from-purple-950/40 via-slate-900 to-slate-900 border border-purple-500/30 p-6 space-y-3 hover:border-purple-500/60 transition-all shadow-xl group"
        >
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
            Shortcut Library
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Mental math tricks, Mass Point Geometry, cyclicity mod-4, reciprocal percentage tables, and speed multipliers.
          </p>
          <div className="text-xs font-bold text-purple-400 flex items-center gap-1 pt-2">
            <span>Explore {SHORTCUTS_DATA.length} Speed Techniques</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* PYQ Pattern Intelligence */}
        <Link
          href="/pyq-patterns"
          className="rounded-2xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 p-6 space-y-3 hover:border-emerald-500/60 transition-all shadow-xl group"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-300">
            <History className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
            PYQ Pattern Intelligence
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            10-Year CAT slot patterns categorized by solving method, question difficulty, and common traps.
          </p>
          <div className="text-xs font-bold text-emerald-400 flex items-center gap-1 pt-2">
            <span>Explore {PYQ_DATA.length} Classified PYQs</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Exam Strategy & Score Matrix */}
        <Link
          href="/strategy"
          className="rounded-2xl bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/30 p-6 space-y-3 hover:border-amber-500/60 transition-all shadow-xl group"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
            CAT Exam Strategy & ABC Rule
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            40-minute slot execution timeline, Round 1 vs Round 2 strategy, Score vs Percentile benchmarks.
          </p>
          <div className="text-xs font-bold text-amber-400 flex items-center gap-1 pt-2">
            <span>Read Exam Playbook</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </section>

      {/* Historical Disclaimer Banner */}
      <footer className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-3">
        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-slate-300">CAT Trend Intelligence Disclaimer: </span>
          Historical weightage and question distributions reflect empirical data across CAT 2017–2023 slots. While P1 (Arithmetic + Algebra) consistently dominates ~70% of the section, CAT convenors may vary exact distributions. Master concepts holistically.
        </div>
      </footer>
    </div>
  );
}
