"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Calculator,
  Binary,
  Shapes,
  Hash,
  Award,
  Zap,
  Flame,
  ChevronRight
} from "lucide-react";
import { TOPIC_MODULES } from "@/data/topics";
import { useQuantProgress } from "@/hooks/useQuantProgress";

export function RoadmapInteractive() {
  const { stats, state } = useQuantProgress();

  const prioritySections = [
    {
      priority: "P1",
      title: "Phase 1: High ROI Foundation (P1)",
      weightage: "65% - 75% of QA Section (14 - 17 Questions)",
      description: "Arithmetic and Algebra form the bedrock of the 99 percentile score. Master these first before touching complex geometry.",
      color: "from-blue-600/20 via-indigo-600/10 to-transparent",
      borderColor: "border-blue-500/30",
      modules: TOPIC_MODULES.filter((m) => m.priority === "P1")
    },
    {
      priority: "P2",
      title: "Phase 2: Geometry & Number Systems (P2)",
      weightage: "20% - 25% of QA Section (5 - 8 Questions)",
      description: "Visual geometry theorems, similarity, coordinate distance, and number theoretical modular arithmetic.",
      color: "from-emerald-600/20 via-teal-600/10 to-transparent",
      borderColor: "border-emerald-500/30",
      modules: TOPIC_MODULES.filter((m) => m.priority === "P2")
    },
    {
      priority: "P3",
      title: "Phase 3: Modern Mathematics (P3)",
      weightage: "8% - 12% of QA Section (1 - 3 Questions)",
      description: "Permutations, Combinations, Probability, Set Theory and Binomial Theorem. Selective attempt based on question simplicity.",
      color: "from-pink-600/20 via-purple-600/10 to-transparent",
      borderColor: "border-pink-500/30",
      modules: TOPIC_MODULES.filter((m) => m.priority === "P3")
    }
  ];

  return (
    <div className="space-y-8">
      {/* Overview Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-950/60 via-indigo-950/40 to-slate-900 border border-blue-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs border border-amber-500/30 uppercase tracking-widest flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              Strategic Sequence
            </span>
            <span className="text-xs text-slate-400">
              Optimal Time-to-Percentile Efficiency
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            The Master CAT Quantitative Aptitude Roadmap
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed">
            Follow the empirical <strong>P1 → P2 → P3</strong> sequence. By mastering Arithmetic and Algebra alone (P1), an aspirant can reliably score 25-35 marks, placing them comfortably in the <strong>95th to 99th percentile</strong> bracket.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-200 font-medium">{stats.strongCount} Topics Mastered</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="text-slate-200 font-medium">{stats.mediumCount} In Progress</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <Clock className="w-4 h-4 text-blue-400" />
              <span className="text-slate-200 font-medium">Estimated 45 Total Study Hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap Priority Phases */}
      <div className="space-y-8">
        {prioritySections.map((phase) => (
          <section key={phase.priority} className="space-y-4">
            {/* Phase Header */}
            <div className={`p-5 rounded-2xl bg-gradient-to-r ${phase.color} border ${phase.borderColor} flex flex-col md:flex-row md:items-center justify-between gap-3`}>
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-900 font-black text-xs text-white border border-slate-700">
                    {phase.priority}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {phase.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 mt-1">{phase.description}</p>
              </div>

              <div className="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-semibold text-amber-300 shrink-0 self-start md:self-center">
                🎯 {phase.weightage}
              </div>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {phase.modules.map((mod) => (
                <div
                  key={mod.id}
                  className="rounded-2xl bg-slate-900/80 border border-slate-800/90 p-5 hover:border-slate-700 transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                          {mod.id === "arithmetic" && <Calculator className="w-5 h-5" />}
                          {mod.id === "algebra" && <Binary className="w-5 h-5" />}
                          {mod.id === "geometry" && <Shapes className="w-5 h-5" />}
                          {mod.id === "number-systems" && <Hash className="w-5 h-5" />}
                          {mod.id === "modern-math" && <Sparkles className="w-5 h-5" />}
                        </div>
                        <div>
                          <h4 className="font-bold text-base text-white">{mod.title}</h4>
                          <span className="text-xs text-slate-400 font-medium">
                            {mod.subtopics.length} Core Subtopics
                          </span>
                        </div>
                      </div>

                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-amber-300 border border-slate-700">
                        {mod.badgeText}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {mod.description}
                    </p>

                    {/* Subtopic Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {mod.subtopics.map((sub) => (
                        <span
                          key={sub.id}
                          className="px-2 py-1 rounded-md bg-slate-950 text-[11px] text-slate-400 border border-slate-800"
                        >
                          {sub.title}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <Link
                    href={`/${mod.id}`}
                    className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-blue-400 hover:text-blue-300 group"
                  >
                    <span>Open {mod.title} Module</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
