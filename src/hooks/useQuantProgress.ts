"use client";

import { useState, useEffect } from "react";
import { MasteryStatus, UserProgressState } from "@/types/quant";

const STORAGE_KEY = "quantvault_user_progress_v1";

const DEFAULT_STATE: UserProgressState = {
  mastery: {
    "time-work-lcm-method": "strong",
    "tsd-relative-speed-races": "medium",
    "algebra-quadratic-roots-vieta": "strong",
    "algebra-logarithms-mastery": "weak",
    "geometry-triangles-similarity-areas": "medium",
    "number-systems-factors-remainders": "weak",
    "modern-math-pnc-stars-bars": "unvisited"
  },
  bookmarks: ["f-post-meet", "f-stars-bars", "cat-2022-s2-q4"],
  completedRevisionSessions: 4,
  totalTimeSpentSeconds: 1420,
  notes: {}
};

export function useQuantProgress() {
  const [state, setState] = useState<UserProgressState>(DEFAULT_STATE);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setState(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("Could not load QuantVault progress from localStorage", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const saveState = (newState: UserProgressState) => {
    setState(newState);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  };

  const setMastery = (conceptId: string, status: MasteryStatus) => {
    const newState: UserProgressState = {
      ...state,
      mastery: {
        ...state.mastery,
        [conceptId]: status
      }
    };
    saveState(newState);
  };

  const toggleBookmark = (id: string) => {
    const exists = state.bookmarks.includes(id);
    const newBookmarks = exists
      ? state.bookmarks.filter((b) => b !== id)
      : [...state.bookmarks, id];

    const newState = {
      ...state,
      bookmarks: newBookmarks
    };
    saveState(newState);
    return !exists;
  };

  const isBookmarked = (id: string) => state.bookmarks.includes(id);

  const incrementRevision = () => {
    const newState = {
      ...state,
      completedRevisionSessions: state.completedRevisionSessions + 1
    };
    saveState(newState);
  };

  const saveNote = (conceptId: string, note: string) => {
    const newState = {
      ...state,
      notes: {
        ...state.notes,
        [conceptId]: note
      }
    };
    saveState(newState);
  };

  // Stats
  const totalTracked = Object.keys(state.mastery).length || 1;
  const strongCount = Object.values(state.mastery).filter((s) => s === "strong").length;
  const mediumCount = Object.values(state.mastery).filter((s) => s === "medium").length;
  const weakCount = Object.values(state.mastery).filter((s) => s === "weak").length;
  const masteryPercentage = Math.round(((strongCount * 1 + mediumCount * 0.5) / Math.max(totalTracked, 5)) * 100);

  return {
    state,
    isLoaded,
    setMastery,
    toggleBookmark,
    isBookmarked,
    incrementRevision,
    saveNote,
    stats: {
      strongCount,
      mediumCount,
      weakCount,
      totalTracked,
      masteryPercentage,
      bookmarkCount: state.bookmarks.length,
      revisionSessions: state.completedRevisionSessions
    }
  };
}
