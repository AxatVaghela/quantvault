"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Zap, HelpCircle, CheckCircle2, Award } from "lucide-react";
import { ExampleProblem } from "@/types/quant";

interface ExampleWalkthroughProps {
  example: ExampleProblem;
  type: "simple" | "cat-level";
}

export function ExampleWalkthrough({ example, type }: ExampleWalkthroughProps) {
  const [showSolution, setShowSolution] = useState(type === "simple");
  const [showTraditional, setShowTraditional] = useState(false);

  const isCat = type === "cat-level";

  return (
    <div
      className={`rounded-xl border p-4 sm:p-5 transition-all ${
        isCat
          ? "bg-slate-900/90 border-indigo-500/30 shadow-lg shadow-indigo-500/5"
          : "bg-slate-900/60 border-slate-800"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          {isCat ? (
            <Award className="w-4 h-4 text-indigo-400" />
          ) : (
            <HelpCircle className="w-4 h-4 text-blue-400" />
          )}
          <span
            className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
              isCat
                ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
                : "bg-blue-500/20 text-blue-300 border-blue-500/30"
            }`}
          >
            {isCat ? "CAT-Level Actual Pattern" : "Simple Foundation Example"}
          </span>
          {example.source && (
            <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
              • {example.source}
            </span>
          )}
        </div>

        <button
          onClick={() => setShowSolution(!showSolution)}
          className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
        >
          <span>{showSolution ? "Hide Solution" : "Reveal Solution"}</span>
          {showSolution ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Problem Title & Statement */}
      <h4 className="font-bold text-slate-100 text-sm sm:text-base mb-2">
        {example.title}
      </h4>
      <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
        {example.statement}
      </div>

      {/* Solution Section */}
      {showSolution && (
        <div className="mt-4 pt-4 border-t border-slate-800 space-y-4 animate-in fade-in duration-200">
          {/* Best Method Card */}
          <div className="rounded-lg bg-gradient-to-r from-blue-950/30 to-indigo-950/20 border border-blue-500/30 p-3.5 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-blue-300 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Optimal CAT Solving Method
              </span>
              <span className="text-[11px] text-slate-400">{example.bestMethod}</span>
            </div>

            {/* Steps */}
            <div className="space-y-1.5 pt-2">
              {example.stepByStepSolution.map((step, idx) => (
                <p key={idx} className="text-xs text-slate-300 leading-relaxed font-mono">
                  {step}
                </p>
              ))}
            </div>

            {/* Final Answer */}
            <div className="pt-2 flex items-center justify-between text-xs border-t border-blue-500/20 mt-2">
              <span className="font-semibold text-slate-400">Final Result:</span>
              <span className="font-bold font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30">
                {example.finalAnswer}
              </span>
            </div>
          </div>

          {/* Speed Tip */}
          {example.speedTip && (
            <div className="flex items-start gap-2 text-xs bg-amber-950/30 border border-amber-500/30 p-2.5 rounded-lg text-amber-200">
              <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-amber-300">Exam Speed Hack: </span>
                <span className="text-slate-300">{example.speedTip}</span>
              </div>
            </div>
          )}

          {/* Traditional Method Comparison Toggle */}
          {example.traditionalMethod && (
            <div>
              <button
                onClick={() => setShowTraditional(!showTraditional)}
                className="text-[11px] text-slate-400 hover:text-slate-300 underline underline-offset-4"
              >
                {showTraditional ? "Hide Traditional Textbook Method" : "Compare with Traditional Textbook Method"}
              </button>
              {showTraditional && (
                <div className="mt-2 p-3 rounded bg-slate-950/60 border border-slate-800/80 text-xs text-slate-400 font-mono">
                  <span className="text-slate-500 block mb-1">Traditional Algebra:</span>
                  {example.traditionalMethod}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
