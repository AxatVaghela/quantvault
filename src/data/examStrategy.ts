export interface ScorePercentileTier {
  percentile: string;
  rawScoreQA: string;
  netCorrectQuestions: string;
  targetAttempts: string;
  accuracyTarget: string;
  verdict: string;
}

export const SCORE_PERCENTILE_MATRIX: ScorePercentileTier[] = [
  {
    percentile: "99.5+ %ile",
    rawScoreQA: "33 - 38 Marks",
    netCorrectQuestions: "11 - 13 Questions",
    targetAttempts: "13 - 15 Questions",
    accuracyTarget: "90%+",
    verdict: "Top 0.5% in QA. Full mastery of P1 (Arithmetic + Algebra) + 2-3 P2/P3 gems."
  },
  {
    percentile: "99.0 %ile",
    rawScoreQA: "28 - 32 Marks",
    netCorrectQuestions: "9.5 - 11 Questions",
    targetAttempts: "11 - 13 Questions",
    accuracyTarget: "88%+",
    verdict: "IIM Ahmedabad / Bangalore / Calcutta safe benchmark. Requires zero silly errors."
  },
  {
    percentile: "95.0 %ile",
    rawScoreQA: "19 - 23 Marks",
    netCorrectQuestions: "6.5 - 8 Questions",
    targetAttempts: "8 - 10 Questions",
    accuracyTarget: "85%+",
    verdict: "Clears all IIM sectional cutoffs (typically 75-85%ile). 7 clean P1 solves guarantee this."
  },
  {
    percentile: "90.0 %ile",
    rawScoreQA: "14 - 17 Marks",
    netCorrectQuestions: "5 - 6 Questions",
    targetAttempts: "6 - 8 Questions",
    accuracyTarget: "85%+",
    verdict: "Solid foundation. Achievable solely through Arithmetic mastery."
  },
  {
    percentile: "80.0 %ile",
    rawScoreQA: "10 - 12 Marks",
    netCorrectQuestions: "3.5 - 4 Questions",
    targetAttempts: "5 - 6 Questions",
    accuracyTarget: "80%+",
    verdict: "Sectional cutoff clearance threshold for most Top-15 B-schools."
  }
];

export interface StrategyPrinciple {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  actionPoints: string[];
  catContext: string;
}

export const EXAM_STRATEGY_GUIDE: StrategyPrinciple[] = [
  {
    id: "abc-framework",
    title: "The ABC Question Selection Rule",
    subtitle: "Abhi Karo • Baad Mein Karo • Chhod Do",
    description: "CAT QA is an exam of rejection, not selection. The single biggest reason for score collapse is spending 5+ minutes on an ego question.",
    actionPoints: [
      "A (Abhi Karo - Now): Solvable in ≤ 2 minutes with known formula/pattern (Arithmetic, direct Log, standard TSD). Attempt immediately.",
      "B (Baad Mein Karo - Later): Concept is familiar but requires 3-4 minutes of calculation or case exploration. Mark for Review and move on.",
      "C (Chhod Do - Never): Unfamiliar wording, tedious 5-variable geometry, or convoluted Modern Math. Never look at it again in the 40-minute slot."
    ],
    catContext: "Solving 9 questions cleanly with 90% accuracy yields 27 marks (98+ percentile). Leaving 13 questions untouched is the winning strategy."
  },
  {
    id: "two-round-protocol",
    title: "The 40-Minute Two-Round Time Allocation",
    subtitle: "Round 1 (25 mins) + Round 2 (12 mins) + Buffer (3 mins)",
    description: "Never solve questions sequentially from Q1 to Q22. Use a structured 2-round sweep.",
    actionPoints: [
      "Minutes 0-25 (Round 1): Sweep through all 22 questions. Solve only Category 'A' questions (aim for 5-7 solves). Tag Category 'B' questions for review.",
      "Minutes 25-37 (Round 2): Return to marked Category 'B' questions. Solve the easiest 3-4 candidates with focus.",
      "Minutes 37-40 (Final Check): Verify TITA inputs, calculation arithmetic, and ensure no mis-marked option choices."
    ],
    catContext: "Ensures you never miss an easy question hidden at Q20-Q22 because of being stuck on Q6."
  },
  {
    id: "tita-advantage",
    title: "TITA (Type In The Answer) Zero-Risk Maximization",
    subtitle: "Zero Negative Marking Asset",
    description: "TITA questions carry +3 marks for correct answer and 0 negative marks for incorrect answer.",
    actionPoints: [
      "Never leave an attempted TITA blank — always input your best calculated integer/value.",
      "Be wary of unit mismatches: If question asks for 'speed in km/h' and problem gave m/s, convert accurately before typing.",
      "TITA questions often have clean integer answers (e.g. 12, 45, 120)."
    ],
    catContext: "2-3 TITA questions appear every slot. An educated attempt never damages your score."
  }
];
