"use client";

import React from "react";
import Link from "next/link";
import { Bookmark, BookOpen, Calculator, History, Trash2, ArrowRight } from "lucide-react";
import { useQuantProgress } from "@/hooks/useQuantProgress";
import { CONCEPTS_DATA } from "@/data/concepts";
import { FORMULA_VAULT_DATA } from "@/data/formulas";
import { PYQ_DATA } from "@/data/pyqs";
import { ConceptCard } from "@/components/concept/ConceptCard";
import { FormulaBox } from "@/components/concept/FormulaBox";
import { PYQCard } from "@/components/pyq/PYQCard";

export default function BookmarksPage() {
  const { state, toggleBookmark } = useQuantProgress();

  const bookmarkedConcepts = CONCEPTS_DATA.filter((c) => state.bookmarks.includes(c.id));
  const bookmarkedFormulas = FORMULA_VAULT_DATA.filter((f) => state.bookmarks.includes(f.id));
  const bookmarkedPYQs = PYQ_DATA.filter((p) => state.bookmarks.includes(p.id));

  const totalBookmarks =
    bookmarkedConcepts.length +
    bookmarkedFormulas.length +
    bookmarkedPYQs.length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-r from-amber-950/60 via-slate-900 to-slate-950 border border-amber-500/30 p-6 sm:p-8 shadow-2xl space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs border border-amber-500/30 uppercase tracking-wider flex items-center gap-1">
            <Bookmark className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            Personal Quant OS Vault
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {totalBookmarks} Items Saved
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-3">
          <Bookmark className="w-8 h-8 text-amber-400" />
          Saved Bookmarks & High-Priority Vault
        </h1>

        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          Your personalized collection of difficult formulas, tricky CAT question patterns, and essential shortcuts for rapid pre-exam review.
        </p>
      </div>

      {totalBookmarks === 0 ? (
        <div className="p-16 text-center rounded-3xl bg-slate-900/40 border border-slate-800 space-y-4 max-w-lg mx-auto">
          <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
            <Bookmark className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white">No Bookmarks Saved Yet</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Click the bookmark icon on any concept, formula, or PYQ card across QuantVault to save it to your personal high-priority hub.
          </p>
          <Link
            href="/formula-vault"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 transition-all shadow-md shadow-blue-600/20"
          >
            <span>Explore Formula Vault</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      ) : (
        <div className="space-y-10">
          {/* Saved Concepts */}
          {bookmarkedConcepts.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-bold text-white border-b border-slate-800 pb-2">
                <Calculator className="w-5 h-5 text-blue-400" />
                <span>Saved Concepts ({bookmarkedConcepts.length})</span>
              </div>
              <div className="space-y-6">
                {bookmarkedConcepts.map((concept) => (
                  <ConceptCard key={concept.id} concept={concept} />
                ))}
              </div>
            </section>
          )}

          {/* Saved Formulas */}
          {bookmarkedFormulas.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-bold text-white border-b border-slate-800 pb-2">
                <BookOpen className="w-5 h-5 text-amber-400" />
                <span>Saved Formulas ({bookmarkedFormulas.length})</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bookmarkedFormulas.map((f) => (
                  <div key={f.id} className="relative group">
                    <FormulaBox
                      formula={{
                        id: f.id,
                        name: f.title,
                        latex: f.latex,
                        explanation: f.explanation,
                        variableNotes: f.variables,
                        catUtility: f.catUtility
                      }}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Saved PYQs */}
          {bookmarkedPYQs.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-bold text-white border-b border-slate-800 pb-2">
                <History className="w-5 h-5 text-emerald-400" />
                <span>Saved PYQ Patterns ({bookmarkedPYQs.length})</span>
              </div>
              <div className="space-y-4">
                {bookmarkedPYQs.map((pyq) => (
                  <PYQCard key={pyq.id} pyq={pyq} />
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
