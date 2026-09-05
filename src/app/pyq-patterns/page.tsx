"use client";

import React, { useState } from "react";
import { History, Filter, Search, Award, AlertTriangle } from "lucide-react";
import { PYQ_DATA } from "@/data/pyqs";
import { PYQCard } from "@/components/pyq/PYQCard";

export default function PYQPatternsPage() {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPYQs = PYQ_DATA.filter((p) => {
    const matchYear = selectedYear === "all" ? true : String(p.year) === selectedYear;
    const matchTopic = selectedTopic === "all" ? true : p.topic === selectedTopic;
    const matchDiff = selectedDifficulty === "all" ? true : p.difficulty === selectedDifficulty;
    const matchSearch =
      searchQuery === ""
        ? true
        : p.concept.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.pattern.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.statement.toLowerCase().includes(searchQuery.toLowerCase());

    return matchYear && matchTopic && matchDiff && matchSearch;
  });

  const years = ["all", "2023", "2022", "2021", "2020", "2019"];
  const topics = [
    { id: "all", label: "All Topics" },
    { id: "arithmetic", label: "Arithmetic" },
    { id: "algebra", label: "Algebra" },
    { id: "geometry", label: "Geometry" },
    { id: "number-systems", label: "Number Systems" },
    { id: "modern-math", label: "Modern Math" }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-slate-950 border border-emerald-500/30 p-6 sm:p-8 shadow-2xl space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs border border-emerald-500/30 uppercase tracking-wider flex items-center gap-1">
            <History className="w-3.5 h-3.5 text-emerald-400" />
            10-Year CAT Slot Intelligence
          </span>
          <span className="text-xs text-slate-400 font-mono">
            Classified by Pattern & Speed Method
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-3">
          <History className="w-8 h-8 text-emerald-400" />
          PYQ Pattern Intelligence
        </h1>

        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          Actual CAT questions analyzed not just for textbook answers, but for recurring question patterns, fastest solving algorithms, and the exact trap answers created by CAT convenors.
        </p>

        {/* Filter Toolbar */}
        <div className="pt-3 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search PYQ patterns, keywords, questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Year Filters */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <span className="text-[10px] font-bold text-slate-500 uppercase px-2">Year:</span>
              {years.map((y) => (
                <button
                  key={y}
                  onClick={() => setSelectedYear(y)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    selectedYear === y
                      ? "bg-emerald-600 text-white shadow"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {y === "all" ? "All" : y}
                </button>
              ))}
            </div>

            {/* Topic Filters */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <span className="text-[10px] font-bold text-slate-500 uppercase px-2">Topic:</span>
              {topics.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTopic(t.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    selectedTopic === t.id
                      ? "bg-emerald-600 text-white shadow"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white tracking-tight">
            Categorized CAT PYQ Patterns ({filteredPYQs.length})
          </h2>
          <span className="text-xs text-slate-400 font-mono">
            Standard CAT QA Timing: ~1.8 min / Question
          </span>
        </div>

        <div className="space-y-6">
          {filteredPYQs.map((pyq) => (
            <PYQCard key={pyq.id} pyq={pyq} />
          ))}
        </div>

        {filteredPYQs.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400">
            No previous year questions match the active filters.
          </div>
        )}
      </div>
    </div>
  );
}
