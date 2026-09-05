"use client";

import React, { useState } from "react";
import { Calculator, Sparkles, Filter, Bookmark, CheckCircle2, ChevronRight, Award } from "lucide-react";
import { TOPIC_MODULES } from "@/data/topics";
import { CONCEPTS_DATA } from "@/data/concepts";
import { ConceptCard } from "@/components/concept/ConceptCard";

export default function ArithmeticPage() {
  const moduleInfo = TOPIC_MODULES.find((m) => m.id === "arithmetic")!;
  const arithmeticConcepts = CONCEPTS_DATA.filter((c) => c.topicCategory === "arithmetic");
  const [selectedSubtopic, setSelectedSubtopic] = useState<string>("all");

  const filtered = arithmeticConcepts.filter((c) =>
    selectedSubtopic === "all" ? true : c.subtopicId === selectedSubtopic
  );

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-950/70 via-slate-900 to-slate-950 border border-blue-500/30 p-6 sm:p-8 shadow-2xl space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-bold text-xs border border-blue-500/30 uppercase tracking-wider">
              Priority 1 • High ROI
            </span>
            <span className="text-xs text-slate-400 font-mono">
              35% - 42% of QA Section
            </span>
          </div>

          <div className="px-3 py-1 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-bold text-amber-300">
            ★ 8-9 Questions in every slot
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-3">
          <Calculator className="w-8 h-8 text-blue-400" />
          Arithmetic
        </h1>

        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          {moduleInfo.description}
        </p>

        {/* Subtopic Filter Pills */}
        <div className="pt-3 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedSubtopic("all")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
              selectedSubtopic === "all"
                ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/20"
                : "bg-slate-900/90 text-slate-400 border-slate-800 hover:text-white"
            }`}
          >
            All Subtopics ({moduleInfo.subtopics.length})
          </button>
          {moduleInfo.subtopics.map((sub) => (
            <button
              key={sub.id}
              onClick={() => setSelectedSubtopic(sub.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                selectedSubtopic === sub.id
                  ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/20"
                  : "bg-slate-900/90 text-slate-400 border-slate-800 hover:text-white"
              }`}
            >
              {sub.title}
            </button>
          ))}
        </div>
      </div>

      {/* Subtopics Summary Grid if 'all' selected */}
      {selectedSubtopic === "all" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {moduleInfo.subtopics.map((sub) => (
            <div
              key={sub.id}
              onClick={() => setSelectedSubtopic(sub.id)}
              className="cursor-pointer p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-900 transition-all space-y-2 group"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white group-hover:text-blue-300 transition-colors">
                  {sub.title}
                </span>
                <span className="text-[10px] text-amber-400 font-mono">
                  ~{sub.estimatedMinutes}m
                </span>
              </div>
              <p className="text-xs text-slate-400 line-clamp-2">{sub.summary}</p>
              <div className="text-[11px] text-blue-400 font-semibold pt-1 flex items-center gap-1">
                <span>View concepts</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Concepts List adhering to 9-part Template */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white tracking-tight">
            Detailed Concept Blueprints ({filtered.length})
          </h2>
          <span className="text-xs text-slate-400">
            Formula • Pattern • Approach • Trap • Takeaway
          </span>
        </div>

        {filtered.length > 0 ? (
          <div className="space-y-6">
            {filtered.map((concept) => (
              <ConceptCard key={concept.id} concept={concept} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800 space-y-2">
            <p className="text-slate-300 font-bold">Subtopic blueprints expanding soon</p>
            <p className="text-xs text-slate-500">
              Showing standard Arithmetic core. Try selecting another subtopic or &lsquo;All&rsquo;.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
