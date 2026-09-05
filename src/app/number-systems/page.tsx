"use client";

import React, { useState } from "react";
import { Hash, Sparkles, Filter, ChevronRight } from "lucide-react";
import { TOPIC_MODULES } from "@/data/topics";
import { CONCEPTS_DATA } from "@/data/concepts";
import { ConceptCard } from "@/components/concept/ConceptCard";

export default function NumberSystemsPage() {
  const moduleInfo = TOPIC_MODULES.find((m) => m.id === "number-systems")!;
  const nsConcepts = CONCEPTS_DATA.filter((c) => c.topicCategory === "number-systems");
  const [selectedSubtopic, setSelectedSubtopic] = useState<string>("all");

  const filtered = nsConcepts.filter((c) =>
    selectedSubtopic === "all" ? true : c.subtopicId === selectedSubtopic
  );

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-amber-950/70 via-slate-900 to-slate-950 border border-amber-500/30 p-6 sm:p-8 shadow-2xl space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs border border-amber-500/30 uppercase tracking-wider">
              Priority 2 • Moderate
            </span>
            <span className="text-xs text-slate-400 font-mono">
              10% - 15% of QA Section
            </span>
          </div>

          <div className="px-3 py-1 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-bold text-amber-300">
            ★ 2-3 Questions in every slot
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-3">
          <Hash className="w-8 h-8 text-amber-400" />
          Number Systems
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
                ? "bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md shadow-amber-500/20"
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
                  ? "bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md shadow-amber-500/20"
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
              className="cursor-pointer p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 hover:bg-slate-900 transition-all space-y-2 group"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white group-hover:text-amber-300 transition-colors">
                  {sub.title}
                </span>
                <span className="text-[10px] text-amber-400 font-mono">
                  ~{sub.estimatedMinutes}m
                </span>
              </div>
              <p className="text-xs text-slate-400 line-clamp-2">{sub.summary}</p>
              <div className="text-[11px] text-amber-400 font-semibold pt-1 flex items-center gap-1">
                <span>View concepts</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Concepts List */}
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
              Showing standard Number Systems core. Try selecting another subtopic or &lsquo;All&rsquo;.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
