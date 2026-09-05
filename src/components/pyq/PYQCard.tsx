"use client";

import React, { useState } from "react";
import { History, Zap, AlertTriangle, Lightbulb, ChevronDown, ChevronUp, Check, Bookmark } from "lucide-react";
import { PYQItem } from "@/types/quant";
import { useQuantProgress } from "@/hooks/useQuantProgress";

interface PYQCardProps {
  pyq: PYQItem;
  isHighlighted?: boolean;
}

export function PYQCard({ pyq, isHighlighted = false }: PYQCardProps) {
  const [showSolution, setShowSolution] = useState(false);
  const { isBookmarked, toggleBookmark } = useQuantProgress();
  const bookmarked = isBookmarked(pyq.id);

  const getDifficultyBadge = (diff: PYQItem["difficulty"]) => {
    switch (diff) {
      case "Easy":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
      case "Medium":
        return "bg-amber-500/20 text-amber-300 border-amber-500/30";
      case "Hard":
        return "bg-rose-500/20 text-rose-300 border-rose-500/30";
    }
  };

  return (
    <div
      id={pyq.id}
      className={`rounded-2xl border p-5 sm:p-6 transition-all ${
        isHighlighted
          ? "bg-slate-900 border-amber-500/60 shadow-xl shadow-amber-500/10 ring-1 ring-amber-500/30"
          : "bg-slate-900/80 border-slate-800/90 hover:border-slate-700/80 shadow-md"
      }`}
    >
      {/* Header Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 font-bold text-xs font-mono">
            <History className="w-3.5 h-3.5" />
            <span>CAT {pyq.year} • Slot {pyq.slot}</span>
          </div>

          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${getDifficultyBadge(pyq.difficulty)}`}>
            {pyq.difficulty}
          </span>

          <span className="text-xs text-slate-400 font-medium">
            {pyq.subtopic} • {pyq.concept}
          </span>

          {pyq.isTITA && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
              TITA (No Options)
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleBookmark(pyq.id)}
            className={`p-1.5 rounded-lg border transition-all ${
              bookmarked
                ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                : "bg-slate-800 text-slate-400 border-slate-700 hover:text-white"
            }`}
            title="Bookmark PYQ"
          >
            <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? "fill-amber-400" : ""}`} />
          </button>
        </div>
      </div>

      {/* Pattern identifier */}
      <div className="mt-3 text-xs text-amber-400/90 font-medium flex items-center gap-1.5">
        <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-[11px] font-semibold">
          Question Pattern
        </span>
        <span>{pyq.pattern}</span>
      </div>

      {/* Question statement */}
      <div className="my-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 text-slate-200 text-sm leading-relaxed font-sans">
        {pyq.statement}
      </div>

      {/* Options if available */}
      {pyq.options && pyq.options.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          {pyq.options.map((opt, idx) => (
            <div
              key={idx}
              className="p-2 rounded-lg bg-slate-800/40 border border-slate-800 text-center text-xs text-slate-300 font-mono"
            >
              <span className="text-slate-500 mr-1.5">({String.fromCharCode(65 + idx)})</span>
              {opt}
            </div>
          ))}
        </div>
      )}

      {/* Toggle Solution */}
      <div className="pt-2 flex items-center justify-between">
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 py-1"
        >
          <span>{showSolution ? "Hide Intel & Solution" : "Reveal Best Solving Method & Traps"}</span>
          {showSolution ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        <span className="text-[11px] text-slate-500 font-mono">
          Target Solving Speed: {pyq.bestSolvingMethod.solvingTimeMinutes}
        </span>
      </div>

      {/* Solution Body */}
      {showSolution && (
        <div className="mt-4 pt-4 border-t border-slate-800 space-y-3.5 animate-in fade-in duration-200">
          {/* Method Card */}
          <div className="rounded-xl bg-gradient-to-br from-blue-950/30 to-indigo-950/20 border border-blue-500/30 p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-300 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                Best Method: {pyq.bestSolvingMethod.methodName}
              </span>
              <span className="text-xs font-bold font-mono text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-500/30">
                Answer: {pyq.correctAnswer}
              </span>
            </div>

            <p className="text-xs text-slate-400 italic">
              Why this method: {pyq.bestSolvingMethod.whyThisMethod}
            </p>

            <div className="space-y-1.5 pt-1 text-xs text-slate-300 font-mono">
              {pyq.bestSolvingMethod.steps.map((step, idx) => (
                <p key={idx}>{step}</p>
              ))}
            </div>
          </div>

          {/* Common Trap */}
          <div className="rounded-xl bg-rose-950/30 border border-rose-500/30 p-3 flex items-start gap-2.5 text-xs text-rose-200">
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-rose-300">Exam Trap to Avoid: </span>
              <span className="text-slate-300">{pyq.commonTrap}</span>
            </div>
          </div>

          {/* Takeaway */}
          <div className="rounded-xl bg-amber-950/30 border border-amber-500/30 p-3 flex items-start gap-2.5 text-xs text-amber-200">
            <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-amber-300">Exam Takeaway: </span>
              <span className="text-slate-300">{pyq.takeaway}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
