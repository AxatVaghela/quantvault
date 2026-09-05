"use client";

import React from "react";
import {
  Sparkles,
  Eye,
  Zap,
  Target,
  Bookmark,
  Award,
  ChevronRight,
  Flame,
  Lightbulb,
  Check
} from "lucide-react";
import { ConceptItem } from "@/types/quant";
import { FormulaBox } from "./FormulaBox";
import { TrapAlert } from "./TrapAlert";
import { ExampleWalkthrough } from "./ExampleWalkthrough";
import { ConfidenceSelector } from "./ConfidenceSelector";
import { useQuantProgress } from "@/hooks/useQuantProgress";

interface ConceptCardProps {
  concept: ConceptItem;
}

export function ConceptCard({ concept }: ConceptCardProps) {
  const { isBookmarked, toggleBookmark } = useQuantProgress();
  const bookmarked = isBookmarked(concept.id);

  const getPriorityBadge = (p: string) => {
    switch (p) {
      case "P1":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "P2":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
      case "P3":
        return "bg-pink-500/20 text-pink-300 border-pink-500/30";
      default:
        return "bg-slate-800 text-slate-300";
    }
  };

  return (
    <article
      id={concept.slug}
      className="rounded-2xl bg-slate-900/70 border border-slate-800/90 p-5 sm:p-7 shadow-xl space-y-6 scroll-mt-24 transition-all hover:border-slate-700/80"
    >
      {/* 1. Header & Metadata */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${getPriorityBadge(
                concept.priority
              )}`}
            >
              {concept.priority} • High Yield
            </span>
            <span className="text-xs text-slate-400 font-medium">
              {concept.subtopicName}
            </span>
            <span className="text-xs text-amber-400/90 font-mono font-medium">
              ★ {concept.avgQuestionsPerCAT}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            {concept.title}
          </h3>
        </div>

        {/* Action controls */}
        <div className="flex items-center gap-2 self-start sm:self-center">
          <ConfidenceSelector conceptId={concept.id} />
          <button
            onClick={() => toggleBookmark(concept.id)}
            className={`p-2 rounded-xl border transition-all ${
              bookmarked
                ? "bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-amber-500/10"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
            }`}
            title={bookmarked ? "Bookmarked" : "Add to Bookmarks"}
          >
            <Bookmark className={`w-4 h-4 ${bookmarked ? "fill-amber-400" : ""}`} />
          </button>
        </div>
      </div>

      {/* 2. Concept Explained Simply */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
          <Lightbulb className="w-4 h-4 text-blue-400" />
          <span>1. Concept Explained Simply</span>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800/60 font-sans">
          {concept.simplifiedExplanation}
        </p>
      </div>

      {/* 3. Must-Know Formulas */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>2. Must-Know Formulas</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {concept.keyFormulas.map((formula) => (
            <FormulaBox key={formula.id} formula={formula} />
          ))}
        </div>
      </div>

      {/* 4. Pattern Recognition & Best CAT Approach (2-column layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Pattern Recognition */}
        <div className="rounded-xl bg-slate-950/60 border border-slate-800 p-4 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
            <Eye className="w-4 h-4 text-cyan-400" />
            <span>3. How to Recognize in Exam</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {concept.recognitionPattern}
          </p>
        </div>

        {/* Best Approach */}
        <div className="rounded-xl bg-slate-950/60 border border-blue-500/20 p-4 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
            <Target className="w-4 h-4 text-blue-400" />
            <span>4. Best CAT Solving Approach</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {concept.bestApproach}
          </p>
        </div>
      </div>

      {/* 5. Shortcut (If applicable) */}
      {concept.shortcut && (
        <div className="rounded-xl bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-slate-900 border border-purple-500/30 p-4 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-300">
              <Zap className="w-4 h-4 text-purple-400" />
              <span>5. Speed Shortcut: {concept.shortcut.name}</span>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
              ⚡ {concept.shortcut.speedMultiplier}
            </span>
          </div>
          <p className="text-xs text-slate-300">{concept.shortcut.description}</p>
          <div className="p-2.5 rounded bg-slate-950/80 border border-purple-500/20 font-mono text-xs text-purple-200">
            Rule: {concept.shortcut.rule}
          </div>
          <p className="text-[11px] text-slate-400 italic">
            Condition: {concept.shortcut.condition}
          </p>
        </div>
      )}

      {/* 6. Simple Example */}
      <div className="space-y-2">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
          6. Simple Foundation Problem
        </div>
        <ExampleWalkthrough example={concept.simpleExample} type="simple" />
      </div>

      {/* 7. CAT-Level Example */}
      <div className="space-y-2">
        <div className="text-xs font-bold uppercase tracking-wider text-indigo-400">
          7. CAT-Level Solved Example
        </div>
        <ExampleWalkthrough example={concept.catLevelExample} type="cat-level" />
      </div>

      {/* 8. Common Trap */}
      <div className="space-y-2">
        <div className="text-xs font-bold uppercase tracking-wider text-rose-400">
          8. Common CAT Trap
        </div>
        <TrapAlert trap={concept.commonTrap} />
      </div>

      {/* 9. One-Line Exam Takeaway (Golden Highlight) */}
      <div className="rounded-xl bg-gradient-to-r from-amber-500/20 via-orange-500/10 to-transparent border border-amber-500/40 p-4 flex items-start gap-3 shadow-lg shadow-amber-500/5">
        <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300 shrink-0">
          <Award className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
            9. One-Line Exam Takeaway
          </span>
          <p className="text-sm font-bold text-white tracking-wide">
            &ldquo;{concept.examTakeaway}&rdquo;
          </p>
        </div>
      </div>
    </article>
  );
}
