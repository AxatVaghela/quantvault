"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, BookOpen, Zap, History, Calculator, X, ArrowRight } from "lucide-react";
import { CONCEPTS_DATA } from "@/data/concepts";
import { FORMULA_VAULT_DATA } from "@/data/formulas";
import { SHORTCUTS_DATA } from "@/data/shortcuts";
import { PYQ_DATA } from "@/data/pyqs";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose(); // toggle
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalized = query.toLowerCase().trim();

  const filteredConcepts = CONCEPTS_DATA.filter(
    (c) =>
      c.title.toLowerCase().includes(normalized) ||
      c.tags.some((t) => t.toLowerCase().includes(normalized)) ||
      c.simplifiedExplanation.toLowerCase().includes(normalized)
  ).slice(0, 4);

  const filteredFormulas = FORMULA_VAULT_DATA.filter(
    (f) =>
      f.title.toLowerCase().includes(normalized) ||
      f.topic.toLowerCase().includes(normalized) ||
      f.plainText.toLowerCase().includes(normalized)
  ).slice(0, 4);

  const filteredShortcuts = SHORTCUTS_DATA.filter(
    (s) =>
      s.title.toLowerCase().includes(normalized) ||
      s.technique.toLowerCase().includes(normalized) ||
      s.applicableWhen.toLowerCase().includes(normalized)
  ).slice(0, 3);

  const filteredPYQs = PYQ_DATA.filter(
    (p) =>
      p.concept.toLowerCase().includes(normalized) ||
      p.statement.toLowerCase().includes(normalized) ||
      p.pattern.toLowerCase().includes(normalized)
  ).slice(0, 3);

  const totalResults =
    filteredConcepts.length +
    filteredFormulas.length +
    filteredShortcuts.length +
    filteredPYQs.length;

  const handleSelect = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/75 backdrop-blur-sm p-4 animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 gap-3 bg-slate-950/80">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input
            type="text"
            placeholder="Search concepts, formulas, shortcuts, PYQ patterns... (e.g. 'alligation', 'vieta', '2022')"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-3 space-y-4 text-xs">
          {query.trim() === "" && (
            <div className="p-6 text-center text-slate-500 space-y-2">
              <p className="text-sm font-medium text-slate-300">Instant Quant Command Search</p>
              <p className="text-xs">Type any concept keyword, CAT formula, speed trick, or previous year question.</p>
              <div className="flex justify-center gap-2 pt-3 flex-wrap">
                {["LCM Work Unit", "Post-Meeting TSD", "Vieta Roots", "Euler Totient", "Beggar's Stars & Bars"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 hover:bg-blue-600/20 hover:text-blue-300 border border-slate-700 text-[11px] transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query.trim() !== "" && totalResults === 0 && (
            <div className="p-8 text-center text-slate-500">
              No results found for &ldquo;<span className="text-slate-300">{query}</span>&rdquo;. Try searching for &lsquo;Logarithms&rsquo;, &lsquo;Similarity&rsquo;, or &lsquo;Circles&rsquo;.
            </div>
          )}

          {/* Concepts */}
          {filteredConcepts.length > 0 && (
            <div>
              <div className="px-2 py-1 text-[11px] font-semibold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5" /> Concepts & Frameworks
              </div>
              <div className="space-y-1 mt-1">
                {filteredConcepts.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(`/${item.topicCategory}#${item.slug}`)}
                    className="w-full text-left p-2.5 rounded-lg bg-slate-800/40 hover:bg-blue-600/20 border border-slate-800 hover:border-blue-500/40 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-slate-200 text-sm group-hover:text-blue-300">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                        {item.simplifiedExplanation}
                      </div>
                    </div>
                    <span className="px-2 py-0.5 text-[10px] rounded bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30 shrink-0 ml-2">
                      {item.priority}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Formulas */}
          {filteredFormulas.length > 0 && (
            <div>
              <div className="px-2 py-1 text-[11px] font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" /> Formulas
              </div>
              <div className="space-y-1 mt-1">
                {filteredFormulas.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(`/formula-vault?search=${encodeURIComponent(item.title)}`)}
                    className="w-full text-left p-2.5 rounded-lg bg-slate-800/40 hover:bg-amber-600/20 border border-slate-800 hover:border-amber-500/40 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-slate-200 text-sm group-hover:text-amber-300">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                        {item.plainText}
                      </div>
                    </div>
                    <span className="text-slate-400 group-hover:text-amber-300">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Shortcuts */}
          {filteredShortcuts.length > 0 && (
            <div>
              <div className="px-2 py-1 text-[11px] font-semibold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" /> Speed Shortcuts
              </div>
              <div className="space-y-1 mt-1">
                {filteredShortcuts.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect("/shortcuts")}
                    className="w-full text-left p-2.5 rounded-lg bg-slate-800/40 hover:bg-purple-600/20 border border-slate-800 hover:border-purple-500/40 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-slate-200 text-sm group-hover:text-purple-300">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {item.timeSaved} • {item.technique}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* PYQs */}
          {filteredPYQs.length > 0 && (
            <div>
              <div className="px-2 py-1 text-[11px] font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <History className="w-3.5 h-3.5" /> Previous Year Question Intel
              </div>
              <div className="space-y-1 mt-1">
                {filteredPYQs.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(`/pyq-patterns?highlight=${item.id}`)}
                    className="w-full text-left p-2.5 rounded-lg bg-slate-800/40 hover:bg-emerald-600/20 border border-slate-800 hover:border-emerald-500/40 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-slate-200 text-sm group-hover:text-emerald-300">
                        CAT {item.year} Slot {item.slot} • {item.concept}
                      </div>
                      <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                        {item.pattern}
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                      {item.difficulty}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-slate-950/80 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">ESC</kbd> to exit</span>
          <span>Fast Search Navigation</span>
        </div>
      </div>
    </div>
  );
}
