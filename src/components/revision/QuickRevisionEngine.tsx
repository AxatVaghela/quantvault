"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  Clock,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Flame,
  Volume2
} from "lucide-react";
import { FORMULA_VAULT_DATA, FormulaVaultEntry } from "@/data/formulas";
import { COMMON_MISTAKES_DATA } from "@/data/commonMistakes";
import { MathRenderer } from "../math/MathRenderer";
import { useQuantProgress } from "@/hooks/useQuantProgress";

type RevisionDuration = 15 | 30 | 60;

export function QuickRevisionEngine() {
  const [duration, setDuration] = useState<RevisionDuration>(15);
  const [timeLeft, setTimeLeft] = useState<number>(15 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [mode, setMode] = useState<"formulas" | "traps">("formulas");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [reviewedIds, setReviewedIds] = useState<string[]>([]);
  const { incrementRevision } = useQuantProgress();

  // Reset timer on duration change
  const handleDurationChange = (d: RevisionDuration) => {
    setDuration(d);
    setTimeLeft(d * 60);
    setIsRunning(false);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      incrementRevision();
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        console.warn(e);
      }
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, incrementRevision]);

  const filteredFormulas = FORMULA_VAULT_DATA.filter((f) =>
    activeCategory === "all" ? true : f.category === activeCategory
  );

  const currentItem = filteredFormulas[currentIndex % filteredFormulas.length];
  const currentTrap = COMMON_MISTAKES_DATA[currentIndex % COMMON_MISTAKES_DATA.length];

  const handleNext = () => {
    setIsFlipped(false);
    if (currentItem && !reviewedIds.includes(currentItem.id)) {
      setReviewedIds([...reviewedIds, currentItem.id]);
    }
    setCurrentIndex((prev) => (prev + 1) % (mode === "formulas" ? filteredFormulas.length : COMMON_MISTAKES_DATA.length));
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) =>
      prev === 0 ? (mode === "formulas" ? filteredFormulas.length - 1 : COMMON_MISTAKES_DATA.length - 1) : prev - 1
    );
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  const totalCount = mode === "formulas" ? filteredFormulas.length : COMMON_MISTAKES_DATA.length;

  return (
    <div className="space-y-6">
      {/* Timer & Revision Mode Selection Bar */}
      <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 flex flex-col md:flex-row items-center justify-between gap-5 shadow-xl">
        {/* Preset Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:inline">
            Sprint Duration:
          </span>
          {([15, 30, 60] as RevisionDuration[]).map((d) => (
            <button
              key={d}
              onClick={() => handleDurationChange(d)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                duration === d
                  ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20"
                  : "bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800"
              }`}
            >
              {d} Min Sprint
            </button>
          ))}
        </div>

        {/* Stopwatch Display */}
        <div className="flex items-center gap-4">
          <div className="font-mono text-3xl sm:text-4xl font-extrabold text-amber-300 tracking-wider bg-slate-950 px-4 py-1 rounded-xl border border-slate-800/80 shadow-inner">
            {formattedTime}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`p-2.5 rounded-xl font-bold flex items-center gap-1 text-xs transition-all shadow-lg ${
                isRunning
                  ? "bg-rose-500/20 text-rose-300 border border-rose-500/30 hover:bg-rose-500/30"
                  : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30"
              }`}
            >
              {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-emerald-400" />}
              <span>{isRunning ? "Pause" : "Start Sprint"}</span>
            </button>

            <button
              onClick={() => {
                setIsRunning(false);
                setTimeLeft(duration * 60);
              }}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
              title="Reset Timer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Drill Mode Toggle */}
        <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800">
          <button
            onClick={() => {
              setMode("formulas");
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              mode === "formulas"
                ? "bg-blue-600 text-white shadow"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Formula Flashcards
          </button>
          <button
            onClick={() => {
              setMode("traps");
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              mode === "traps"
                ? "bg-rose-600 text-white shadow"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Trap Red Flags
          </button>
        </div>
      </div>

      {/* Category Pills (Only for formulas) */}
      {mode === "formulas" && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: "all", label: "All Topics" },
            { id: "arithmetic", label: "Arithmetic (P1)" },
            { id: "algebra", label: "Algebra (P1)" },
            { id: "geometry", label: "Geometry (P2)" },
            { id: "number-systems", label: "Number Systems (P2)" },
            { id: "modern-math", label: "Modern Math (P3)" }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all border ${
                activeCategory === cat.id
                  ? "bg-blue-500/20 text-blue-300 border-blue-500/40 font-bold"
                  : "bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Interactive Revision Flashcard */}
      {mode === "formulas" && currentItem && (
        <div className="space-y-4">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer min-h-[320px] rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 hover:border-slate-700 p-6 sm:p-10 shadow-2xl flex flex-col justify-between relative group transition-all"
          >
            {/* Top Bar of Flashcard */}
            <div className="flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30">
                  {currentItem.priority} • {currentItem.topic}
                </span>
                <span className="text-slate-500 font-mono">
                  Card {currentIndex + 1} of {totalCount}
                </span>
              </div>

              <span className="text-[11px] font-semibold text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full group-hover:text-amber-300 transition-colors">
                {isFlipped ? "Showing Answer (Click to Flip)" : "Click anywhere to Flip ↺"}
              </span>
            </div>

            {/* Front vs Back Content */}
            {!isFlipped ? (
              <div className="my-auto py-8 text-center space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Recall Question
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white max-w-xl mx-auto leading-relaxed">
                  {currentItem.flashcardFront}
                </h3>
                <p className="text-xs text-slate-500 font-sans">
                  Topic: {currentItem.title}
                </p>
              </div>
            ) : (
              <div className="my-auto py-6 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  Formula & Identity
                </span>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 overflow-x-auto max-w-xl mx-auto">
                  <MathRenderer math={currentItem.latex} block={true} className="text-xl sm:text-2xl text-amber-300" />
                </div>

                <p className="text-sm text-slate-300 max-w-lg mx-auto">
                  {currentItem.explanation}
                </p>

                <div className="text-xs text-amber-300/90 font-medium bg-amber-950/30 border border-amber-500/30 p-2.5 rounded-xl max-w-lg mx-auto">
                  💡 <span className="font-bold">Exam Tip: </span>{currentItem.examTip}
                </div>
              </div>
            )}

            {/* Bottom Controls */}
            <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/80">
              <span>{currentItem.catUtility}</span>
              <span className="text-slate-400 font-mono">QuantVault Revision Engine</span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePrev}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-bold transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous Card
            </button>

            <div className="text-xs text-slate-400 font-mono">
              Progress: {reviewedIds.length} / {filteredFormulas.length} Reviewed
            </div>

            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 text-xs font-bold transition-all shadow-md shadow-blue-600/20"
            >
              Next Card
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Common Trap Quick Drill */}
      {mode === "traps" && currentTrap && (
        <div className="space-y-4">
          <div className="rounded-3xl bg-gradient-to-b from-rose-950/30 via-slate-900 to-slate-950 border border-rose-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between gap-2 text-xs">
              <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30">
                {currentTrap.frequency} Frequency Trap • {currentTrap.topic}
              </span>
              <span className="text-slate-400 font-mono">
                Trap {currentIndex + 1} of {COMMON_MISTAKES_DATA.length}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-rose-200">
              {currentTrap.title}
            </h3>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200">
              <span className="text-slate-400 block mb-1 text-xs uppercase font-bold tracking-wider">Example Scenario:</span>
              {currentTrap.exampleQuestion}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/40 space-y-1">
                <span className="text-red-400 font-bold block uppercase tracking-wider">❌ Aspirant's Wrong Answer:</span>
                <p className="text-rose-200 font-mono">{currentTrap.wrongAnswer}</p>
                <p className="text-slate-400 pt-1 text-[11px]">{currentTrap.whyAspirantsFallForIt}</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40 space-y-1">
                <span className="text-emerald-400 font-bold block uppercase tracking-wider">✓ Correct Answer & Method:</span>
                <p className="text-emerald-300 font-mono font-bold">{currentTrap.correctAnswer}</p>
                <p className="text-slate-300 pt-1 text-[11px]">{currentTrap.correctSolution}</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200">
              <span className="font-bold text-amber-300">Golden Rule to Remember: </span>
              <span className="text-slate-200">{currentTrap.preventionRule}</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePrev}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-bold"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous Trap
            </button>

            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-rose-600 text-white hover:bg-rose-500 text-xs font-bold"
            >
              Next Trap
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
