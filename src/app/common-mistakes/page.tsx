"use client";

import React, { useState } from "react";
import { AlertTriangle, AlertOctagon, ShieldAlert, CheckCircle, Filter } from "lucide-react";
import { COMMON_MISTAKES_DATA } from "@/data/commonMistakes";

export default function CommonMistakesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredMistakes = COMMON_MISTAKES_DATA.filter((m) =>
    selectedCategory === "all" ? true : m.category === selectedCategory
  );

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-rose-950/70 via-slate-900 to-slate-950 border border-rose-500/30 p-6 sm:p-8 shadow-2xl space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-3 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-bold text-xs border border-rose-500/30 uppercase tracking-wider flex items-center gap-1">
            <AlertOctagon className="w-3.5 h-3.5 text-rose-400" />
            CAT Negative Mark Prevention
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {COMMON_MISTAKES_DATA.length} Critical Traps Curated
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-3">
          <AlertTriangle className="w-8 h-8 text-rose-400" />
          The Hall of Common Traps & Blunders
        </h1>

        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          The difference between a 95 percentile and a 99.5 percentile in Quant is rarely solving harder questions — it is avoiding the 3-4 silly mistakes and trap options engineered by CAT question designers.
        </p>

        {/* Filter Pills */}
        <div className="pt-2 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: "all", label: "All Traps" },
            { id: "arithmetic", label: "Arithmetic" },
            { id: "algebra", label: "Algebra" },
            { id: "geometry", label: "Geometry" },
            { id: "modern-math", label: "Modern Math" }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                selectedCategory === cat.id
                  ? "bg-rose-600 text-white border-rose-500 shadow-md shadow-rose-600/20"
                  : "bg-slate-950 text-slate-400 border-slate-800 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Traps Grid */}
      <div className="space-y-6">
        {filteredMistakes.map((mistake) => (
          <article
            key={mistake.id}
            className="rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-rose-500/40 p-5 sm:p-7 shadow-xl space-y-4 transition-all"
          >
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 uppercase tracking-wider">
                  {mistake.frequency} Trap • {mistake.topic}
                </span>
                <span className="text-xs text-slate-400 capitalize font-medium">
                  {mistake.category}
                </span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-rose-200">{mistake.title}</h3>

            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              {mistake.theBlunder}
            </p>

            {/* Example Case */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200">
              <span className="text-slate-400 block mb-1 uppercase font-bold text-[10px] tracking-wider">
                Problem Context:
              </span>
              {mistake.exampleQuestion}
            </div>

            {/* Wrong vs Right */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/40 space-y-1">
                <span className="text-red-400 font-bold block uppercase tracking-wider text-[10px]">
                  ❌ What Aspirants Mark (Trap Option):
                </span>
                <p className="text-rose-200 font-mono font-bold">{mistake.wrongAnswer}</p>
                <p className="text-slate-400 pt-1 text-[11px]">
                  {mistake.whyAspirantsFallForIt}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40 space-y-1">
                <span className="text-emerald-400 font-bold block uppercase tracking-wider text-[10px]">
                  ✓ Correct Answer & Safe Method:
                </span>
                <p className="text-emerald-300 font-mono font-bold">{mistake.correctAnswer}</p>
                <p className="text-slate-300 pt-1 text-[11px]">
                  {mistake.correctSolution}
                </p>
              </div>
            </div>

            {/* Prevention Rule */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-950/30 to-slate-950 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-amber-300">Golden Prevention Rule: </span>
                <span className="text-slate-200">{mistake.preventionRule}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
