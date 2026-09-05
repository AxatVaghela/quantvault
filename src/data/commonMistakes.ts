import { CommonMistakeItem } from "@/types/quant";

export const COMMON_MISTAKES_DATA: CommonMistakeItem[] = [
  {
    id: "cm-1",
    title: "The Faulty Balance & Dishonest Shopkeeper Inversion",
    category: "arithmetic",
    topic: "Profit & Loss",
    frequency: "Critical",
    theBlunder: "Calculating profit percentage on the promised weight instead of the actual goods given away.",
    whyAspirantsFallForIt: "Shopkeeper gives 800g instead of 1000g. Aspirants compute (200 / 1000) = 20% profit.",
    exampleQuestion: "A shopkeeper professes to sell sugar at cost price but uses a weight of 800g for a 1 kg pack. Find his profit percentage.",
    wrongAnswer: "20% profit",
    correctAnswer: "25% profit",
    correctSolution: "Profit is made on the actual goods leaving the store (800g). Profit % = (Error / Actual Weight Given) × 100 = (200 / 800) × 100 = 25%.",
    preventionRule: "Base of profit is ALWAYS actual cost / actual goods handed to customer, NOT the nominal billed quantity."
  },
  {
    id: "cm-2",
    title: "Dividing by Variable in Inequalities Without Knowing Sign",
    category: "algebra",
    topic: "Inequalities",
    frequency: "Extremely High",
    theBlunder: "Cancelling 'x' from both sides of an inequality or cross-multiplying denominators with variables.",
    whyAspirantsFallForIt: "Muscle memory from linear equations leads to dividing out common factors, losing half the solution domain or reversing inequality silently.",
    exampleQuestion: "Solve: x² < 4x.",
    wrongAnswer: "x < 4 (cancelling x)",
    correctAnswer: "0 < x < 4",
    correctSolution: "Bring everything to LHS: x² - 4x < 0 ⇒ x(x - 4) < 0. Critical roots at x = 0, 4. Sign chart gives (0, 4).",
    preventionRule: "NEVER divide or cross-multiply by an algebraic variable unless its sign is guaranteed strictly positive."
  },
  {
    id: "cm-3",
    title: "Square Root Sign vs Quadratic Solutions",
    category: "algebra",
    topic: "Quadratics & Surds",
    frequency: "High",
    theBlunder: "Assuming √25 = ±5.",
    whyAspirantsFallForIt: "Confusing the algebraic equation x² = 25 (which has roots +5 and -5) with the radical function √x (which is strictly principal non-negative).",
    exampleQuestion: "Evaluate √[(-5)²].",
    wrongAnswer: "±5 or -5",
    correctAnswer: "+5 (√x² = |x|)",
    correctSolution: "By mathematical definition, the radical symbol √ denotes the non-negative principal square root. √25 = +5. Thus √[(-5)²] = √25 = 5 = |-5|.",
    preventionRule: "The radical symbol √ is a function and ALWAYS outputs non-negative values. √x² = |x|."
  },
  {
    id: "cm-4",
    title: "Ignoring Triangle Inequality Side Constraints",
    category: "geometry",
    topic: "Triangles",
    frequency: "High",
    theBlunder: "Finding integer sides without checking |a - b| < c < (a + b).",
    whyAspirantsFallForIt: "Candidates calculate algebraic side lengths or parameter values and forget to check whether the triangle can physically exist.",
    exampleQuestion: "How many triangles with integer sides can have side lengths 5, 12, and x?",
    wrongAnswer: "Infinite or unbounded values",
    correctAnswer: "9 triangles (x ∈ {8, 9, ..., 16})",
    correctSolution: "By triangle inequality: |12 - 5| < x < (12 + 5) ⇒ 7 < x < 17. Integer values for x are 8, 9, 10, 11, 12, 13, 14, 15, 16 (total 9 values).",
    preventionRule: "Third side of triangle with known sides a & b ALWAYS satisfies: (2 · min(a,b) - 1) possible integer values."
  },
  {
    id: "cm-5",
    title: "Failing to Subtract Double Overlaps in 3-Set Venn Diagrams",
    category: "modern-math",
    topic: "Set Theory",
    frequency: "Extremely High",
    theBlunder: "Using n(A ∩ B) directly when the question specifies 'passed in A and B only'.",
    whyAspirantsFallForIt: "'A and B' contains the triple intersection (A ∩ B ∩ C), whereas 'Only A and B' excludes C.",
    exampleQuestion: "In a class of 100, 30 like Math and Physics, 10 like Math, Physics and Chemistry. How many like ONLY Math and Physics?",
    wrongAnswer: "30",
    correctAnswer: "20",
    correctSolution: "Only Math & Physics = n(M ∩ P) - n(M ∩ P ∩ C) = 30 - 10 = 20.",
    preventionRule: "Always clarify in 3-set Venn whether given intersection is total pairwise or exclusive 'only' region."
  }
];
