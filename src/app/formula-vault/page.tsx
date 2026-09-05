"use client";

import React, { useState, useMemo } from "react";
import { BookOpen, Search, Copy, Check, Filter, Sparkles, Bookmark } from "lucide-react";
import { FORMULA_VAULT_DATA, FormulaVaultEntry } from "@/data/formulas";
import { MathRenderer } from "@/components/math/MathRenderer";
import { useQuantProgress } from "@/hooks/useQuantProgress";

export default function FormulaVaultPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedUtility, setSelectedUtility] = useState("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const { isBookmarked, toggleBookmark } = useQuantProgress();

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredFormulas = useMemo(() => {
    return FORMULA_VAULT_DATA.filter((item) => {
      const matchCategory =
        selectedCategory === "all" ? true : item.category === selectedCategory;
      const matchUtility =
        selectedUtility === "all" ? true : item.catUtility === selectedUtility;
      const matchSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.plainText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCategory && matchUtility && matchSearch;
    });
  }, [searchQuery, selectedCategory, selectedUtility]);

  const categories = [
    { id: "all", label: "All Categories" },
    { id: "arithmetic", label: "Arithmetic (P1)" },
    { id: "algebra", label: "Algebra (P1)" },
    { id: "geometry", label: "Geometry (P2)" },
    { id: "number-systems", label: "Number Systems (P2)" },
    { id: "modern-math", label: "Modern Math (P3)" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs border border-amber-500/30 uppercase tracking-wider">
            Quick Revision Bank
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {FORMULA_VAULT_DATA.length} Verified Exam Formulas
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-amber-400" />
          Formula Vault
        </h1>

        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          High-precision mathematical equations, identity expansions, and speed-solving formulas with variable notes, exam tips, and one-click LaTeX copying.
        </p>

        {/* Filter and Search Bar */}
        <div className="pt-2 flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search formulas by name, topic, or keyword (e.g. 'alligation', 'vieta', 'median')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  selectedCategory === c.id
                    ? "bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-sm"
                    : "bg-slate-950 text-slate-400 border-slate-800 hover:text-white"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Formula Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredFormulas.map((formula) => {
          const bookmarked = isBookmarked(formula.id);

          return (
            <div
              key={formula.id}
              className="rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 p-5 shadow-lg flex flex-col justify-between space-y-4 transition-all group"
            >
              <div className="space-y-3">
                {/* Card Top */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {formula.priority} • {formula.topic}
                    </span>
                    <h3 className="font-bold text-base text-white mt-1.5">
                      {formula.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => toggleBookmark(formula.id)}
                      className={`p-1.5 rounded-lg border transition-all ${
                        bookmarked
                          ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                          : "bg-slate-800 text-slate-400 border-slate-700 hover:text-white"
                      }`}
                      title="Bookmark Formula"
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? "fill-amber-400" : ""}`} />
                    </button>

                    <button
                      onClick={() => handleCopy(formula.id, formula.latex)}
                      className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
                      title="Copy LaTeX"
                    >
                      {copiedId === formula.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Rendered Math display */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 flex items-center justify-center min-h-[64px] overflow-x-auto text-center">
                  <MathRenderer math={formula.latex} block={true} className="text-base sm:text-lg text-amber-300" />
                </div>

                {/* Explanation */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {formula.explanation}
                </p>

                {/* Variables */}
                {formula.variables && formula.variables.length > 0 && (
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 space-y-1 text-[11px] text-slate-400">
                    <span className="font-semibold text-slate-300 block text-[10px] uppercase tracking-wider">
                      Variable Key:
                    </span>
                    {formula.variables.map((v, idx) => (
                      <p key={idx} className="font-mono text-slate-300">
                        • {v}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* Exam Tip Footer */}
              <div className="pt-3 border-t border-slate-800/80 flex items-start gap-2 text-xs text-amber-200/90 bg-amber-950/20 p-2.5 rounded-xl border border-amber-500/20">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-amber-300">Exam Tip: </span>
                  <span className="text-slate-300">{formula.examTip}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredFormulas.length === 0 && (
        <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400">
          No formulas matching &ldquo;{searchQuery}&rdquo;. Try another search term.
        </div>
      )}
    </div>
  );
}
