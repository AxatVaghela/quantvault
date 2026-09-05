import React from "react";
import { Metadata } from "next";
import { Clock, Flame, Zap, Award } from "lucide-react";
import { QuickRevisionEngine } from "@/components/revision/QuickRevisionEngine";

export const metadata: Metadata = {
  title: "Quick Revision Engine — QuantVault",
  description: "15-minute, 30-minute, and 60-minute rapid drill revision engine for CAT Quantitative Aptitude.",
};

export default function RevisionPage() {
  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-amber-950/70 via-slate-900 to-slate-950 border border-amber-500/30 p-6 sm:p-8 shadow-2xl space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs border border-amber-500/30 uppercase tracking-wider flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Active Recall Sprint Engine
          </span>
          <span className="text-xs text-slate-400 font-mono">
            High-Yield Flashcards & Trap Drills
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-3">
          <Clock className="w-8 h-8 text-amber-400" />
          Quick Revision Hub
        </h1>

        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          Designed for high-intensity pre-mock and daily warm-up sprints. Test your instant recall of formulas, identities, variable conditions, and red-flag traps.
        </p>
      </div>

      {/* Revision Interactive Engine */}
      <QuickRevisionEngine />
    </div>
  );
}
