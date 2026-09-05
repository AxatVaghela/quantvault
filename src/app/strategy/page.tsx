import React from "react";
import { Metadata } from "next";
import { Target, Award, Clock, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { SCORE_PERCENTILE_MATRIX, EXAM_STRATEGY_GUIDE } from "@/data/examStrategy";

export const metadata: Metadata = {
  title: "Exam Strategy & ABC Rule — QuantVault",
  description: "Score vs Percentile matrix, ABC question selection rule, and 40-minute QA slot playbook.",
};

export default function ExamStrategyPage() {
  return (
    <div className="space-y-10">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-amber-950/60 via-slate-900 to-slate-950 border border-amber-500/30 p-6 sm:p-8 shadow-2xl space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs border border-amber-500/30 uppercase tracking-wider flex items-center gap-1">
            <Target className="w-3.5 h-3.5 text-amber-400" />
            CAT QA Execution Playbook
          </span>
          <span className="text-xs text-slate-400 font-mono">
            40-Minute Time Management
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-3">
          <Target className="w-8 h-8 text-amber-400" />
          Exam Strategy & Score Matrix
        </h1>

        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          The CAT Quantitative Aptitude section is not a test of math knowledge; it is a test of <strong>question rejection and time allocation</strong>. Understanding the exact score-to-percentile dynamics removes exam anxiety and guides your 40-minute game plan.
        </p>
      </div>

      {/* Score vs Percentile Table */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Historical Score vs. Percentile Matrix (CAT QA)
            </h2>
            <p className="text-xs text-slate-400">
              Based on standardized 22-question (66 marks total) slot benchmarks.
            </p>
          </div>
          <span className="text-xs font-bold text-amber-400 font-mono px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/20">
            Total QA Marks: 66
          </span>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 shadow-xl bg-slate-900/90">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950/80 text-slate-400 uppercase text-[11px] font-bold border-b border-slate-800 tracking-wider">
              <tr>
                <th className="py-3.5 px-4">Target Percentile</th>
                <th className="py-3.5 px-4">Raw QA Score</th>
                <th className="py-3.5 px-4">Net Correct Qs</th>
                <th className="py-3.5 px-4">Suggested Attempts</th>
                <th className="py-3.5 px-4">Target Accuracy</th>
                <th className="py-3.5 px-4">Exam Strategy Verdict</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {SCORE_PERCENTILE_MATRIX.map((tier, idx) => (
                <tr
                  key={idx}
                  className={`hover:bg-slate-800/40 transition-colors ${
                    idx === 0 ? "bg-amber-500/5 font-semibold" : ""
                  }`}
                >
                  <td className="py-4 px-4 font-bold text-amber-300">
                    {tier.percentile}
                  </td>
                  <td className="py-4 px-4 font-mono font-bold text-white">
                    {tier.rawScoreQA}
                  </td>
                  <td className="py-4 px-4 font-mono text-emerald-400">
                    {tier.netCorrectQuestions}
                  </td>
                  <td className="py-4 px-4 font-mono text-slate-300">
                    {tier.targetAttempts}
                  </td>
                  <td className="py-4 px-4 font-mono text-slate-300">
                    {tier.accuracyTarget}
                  </td>
                  <td className="py-4 px-4 text-xs text-slate-400">
                    {tier.verdict}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Strategic Playbook Principles */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Core Tactical Principles
          </h2>
          <p className="text-xs text-slate-400">
            Rules followed by 99.5+ percentilers in the testing room.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXAM_STRATEGY_GUIDE.map((principle) => (
            <div
              key={principle.id}
              className="rounded-2xl bg-slate-900/80 border border-slate-800/90 p-6 space-y-4 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 font-mono">
                    {principle.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {principle.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {principle.description}
                </p>

                <div className="space-y-2 pt-2">
                  {principle.actionPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[11px] text-amber-300/90 bg-amber-950/20 p-2.5 rounded-xl border border-amber-500/20">
                <span className="font-bold">CAT Reality: </span>
                {principle.catContext}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
