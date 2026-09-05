"use client";

import React, { useState } from "react";
import { Zap, Clock, Sparkles, Filter, ChevronRight, AlertTriangle } from "lucide-react";
import { SHORTCUTS_DATA } from "@/data/shortcuts";
import { MathRenderer } from "@/components/math/MathRenderer";

export default function ShortcutsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredShortcuts = SHORTCUTS_DATA.filter((s) =>
    selectedCategory === "all" ? true : s.category === selectedCategory
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-r from-purple-950/70 via-slate-900 to-slate-950 border border-purple-500/30 p-6 sm:p-8 shadow-2xl space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-3 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-bold text-xs border border-purple-500/30 uppercase tracking-wider flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-purple-400" />
            Mental Math & Speed Multipliers
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {SHORTCUTS_DATA.length} Verified Speed Techniques
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          CAT Shortcut Library
        </h1>

        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          Transform 3-minute equation grinding into 15-second visual deductions. Each shortcut includes a live side-by-side demonstration comparing the traditional method against the CAT speed approach.
        </p>

        {/* Filter Pills */}
        <div className="pt-2 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: "all", label: "All Shortcuts" },
            { id: "arithmetic", label: "Arithmetic" },
            { id: "algebra", label: "Algebra" },
            { id: "geometry", label: "Geometry" },
            { id: "number-systems", label: "Number Systems" }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                selectedCategory === cat.id
                  ? "bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-600/20"
                  : "bg-slate-950 text-slate-400 border-slate-800 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Shortcuts Cards */}
      <div className="space-y-6">
        {filteredShortcuts.map((sc) => (
          <article
            key={sc.id}
            className="rounded-2xl bg-slate-900/80 border border-slate-800/90 p-5 sm:p-7 shadow-xl space-y-5 transition-all hover:border-purple-500/40"
          >
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 uppercase tracking-wider">
                  {sc.category} • {sc.priority}
                </span>
                <h3 className="text-xl font-bold text-white mt-1.5">{sc.title}</h3>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center">
                <span className="px-3 py-1 rounded-xl bg-amber-500/10 text-amber-300 border border-amber-500/20 font-bold text-xs font-mono flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  {sc.timeSaved}
                </span>
              </div>
            </div>

            {/* Technique & Rule */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-300">
                  Technique & Core Mechanism
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  {sc.technique}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-purple-500/20 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                  Formula / Mental Rule
                </span>
                <div className="overflow-x-auto text-xs py-1">
                  <MathRenderer math={sc.formulaOrRule} block={false} className="text-amber-200 font-mono" />
                </div>
              </div>
            </div>

            {/* Applicable When */}
            <div className="text-xs text-slate-400 bg-slate-950/40 p-3 rounded-xl border border-slate-800/60">
              <span className="font-bold text-slate-300">When to Deploy: </span>
              {sc.applicableWhen}
            </div>

            {/* Side by side worked demo */}
            <div className="space-y-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-medium text-slate-200">
                <span className="text-purple-400 font-bold block mb-1">Demonstration Problem:</span>
                {sc.workedDemo.question}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {/* Conventional Way */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1.5">
                  <span className="font-bold text-slate-400 block uppercase tracking-wider text-[10px]">
                    Standard Textbook Method
                  </span>
                  <p className="text-slate-400 font-mono leading-relaxed">
                    {sc.workedDemo.conventionalWay}
                  </p>
                </div>

                {/* Shortcut Way */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-950/40 to-slate-950 border border-purple-500/40 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-purple-300 block uppercase tracking-wider text-[10px] flex items-center gap-1">
                      <Zap className="w-3 h-3 text-amber-400" />
                      QuantVault Speed Solving
                    </span>
                    <span className="text-[10px] font-bold text-emerald-400 font-mono">
                      {sc.workedDemo.timeDelta}
                    </span>
                  </div>
                  <p className="text-purple-100 font-mono leading-relaxed">
                    {sc.workedDemo.shortcutWay}
                  </p>
                </div>
              </div>
            </div>

            {/* Warning Condition if present */}
            {sc.warningCondition && (
              <div className="flex items-start gap-2 p-3 rounded-xl bg-rose-950/20 border border-rose-500/20 text-xs text-rose-300">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-rose-200">Constraint Checklist: </span>
                  {sc.warningCondition}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
