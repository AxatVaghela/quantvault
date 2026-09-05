"use client";

import React, { useState } from "react";
import { Check, Copy, Sparkles, BookOpen } from "lucide-react";
import { MathRenderer } from "../math/MathRenderer";
import { ConceptFormula } from "@/types/quant";

interface FormulaBoxProps {
  formula: ConceptFormula;
}

export function FormulaBox({ formula }: FormulaBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(formula.latex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getBadgeStyle = (utility: ConceptFormula["catUtility"]) => {
    switch (utility) {
      case "Must Know":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Speed Booster":
        return "bg-amber-500/20 text-amber-300 border-amber-500/30";
      case "Rare/Advanced":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30";
    }
  };

  return (
    <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-4 relative group hover:border-slate-700 transition-all">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-blue-400" />
          <h4 className="font-bold text-sm text-slate-100">{formula.name}</h4>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getBadgeStyle(formula.catUtility)}`}>
            {formula.catUtility}
          </span>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Copy LaTeX"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* LaTeX Math Box */}
      <div className="p-3 my-2 rounded-lg bg-slate-950 border border-slate-800/80 overflow-x-auto text-center flex items-center justify-center min-h-[52px]">
        <MathRenderer math={formula.latex} block={true} className="text-base sm:text-lg text-amber-200" />
      </div>

      {/* Explanation */}
      <p className="text-xs text-slate-400 leading-relaxed mt-2">{formula.explanation}</p>

      {/* Variable Notes */}
      {formula.variableNotes && formula.variableNotes.length > 0 && (
        <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex flex-wrap gap-2 text-[11px] text-slate-400">
          {formula.variableNotes.map((note, idx) => (
            <span key={idx} className="bg-slate-800/60 px-2 py-0.5 rounded text-slate-300 font-mono">
              • {note}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
