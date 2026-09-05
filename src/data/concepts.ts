import { ConceptItem } from "@/types/quant";

export const CONCEPTS_DATA: ConceptItem[] = [
  // =========================================================================
  // 1. ARITHMETIC — PERCENTAGES & MULTIPLIERS
  // =========================================================================
  {
    id: "percentages-multipliers-successive",
    slug: "percentages-multipliers-successive",
    title: "Percentages, Multiplying Factors & Successive Change",
    topicCategory: "arithmetic",
    subtopicId: "percentages",
    subtopicName: "Percentages",
    priority: "P1",
    frequencyScore: 5,
    avgQuestionsPerCAT: "1-2 Direct Qs (Vital across QA & DILR)",
    simplifiedExplanation:
      "A percentage increase or decrease is fundamentally a multiplication operation. An increase of r% multiplies the base by (1 + r/100), while a decrease of r% multiplies it by (1 - r/100). When multiple percentage changes occur sequentially on the same changing quantity, they compound multiplicatively. Never add percentages directly unless they refer to the exact same static base.",
    keyFormulas: [
      {
        id: "pct-1",
        name: "Multiplying Factor (MF)",
        latex: "\\text{Final} = \\text{Initial} \\times \\left(1 \\pm \\frac{r}{100}\\right)",
        explanation: "12.5% increase means MF = 1 + 1/8 = 9/8. 14.28% decrease means MF = 1 - 1/7 = 6/7.",
        variableNotes: ["+ for increase", "- for decrease"],
        catUtility: "Must Know"
      },
      {
        id: "pct-2",
        name: "Successive Percentage Change (2 Changes)",
        latex: "\\text{Net \\% Change} = a + b + \\frac{a \\cdot b}{100}",
        explanation: "Net percentage change when a quantity changes by a% followed by b%.",
        variableNotes: ["Use positive for increase, negative for decrease", "If +x% followed by -x%: Net = -(x^2 / 100)% always loss"],
        catUtility: "Must Know"
      },
      {
        id: "pct-3",
        name: "Product-Constancy Ratio Rule (A × B = Constant)",
        latex: "\\text{If } A \\uparrow \\frac{a}{b} \\implies B \\downarrow \\frac{a}{a + b}",
        explanation: "If price rises by 1/4 (25%), consumption must drop by 1/(4+1) = 1/5 (20%) to keep expenditure unchanged.",
        catUtility: "Speed Booster"
      }
    ],
    recognitionPattern:
      "Look for phrases like 'price increased by x%, consumption reduced so expenditure remains same', 'population grew by 10% in Year 1, dropped by 15% in Year 2', or 'successive discounts of 20% and 10%'.",
    bestApproach:
      "Convert every percentage to its lowest fractional equivalent (e.g. 16.66% = 1/6, 37.5% = 3/8). Apply multiplying factor chains: Final = Initial × (MF₁) × (MF₂)...",
    shortcut: {
      name: "Product Constancy a/(a+b) Drop Rule",
      description: "When Product = Const (Expenditure = Price × Consumption, Work = Men × Days, Distance = Speed × Time).",
      rule: "\\text{Increase of } \\frac{x}{y} \\implies \\text{Compensating decrease of } \\frac{x}{x+y}",
      speedMultiplier: "5x faster (0-calculation mental answer)",
      condition: "Applicable whenever two multiplied variables have a constant product."
    },
    simpleExample: {
      id: "pct-ex-1",
      title: "Price Hike and Compensating Consumption Drop",
      statement: "The price of petrol increases by 25%. By what percentage must a driver reduce petrol consumption so that the total monthly expenditure increases by only 10%?",
      difficulty: "Easy",
      traditionalMethod: "1.25 Price × (1 - x) Consumption = 1.10 Expenditure ⇒ 1 - x = 1.10 / 1.25 = 22/25 ⇒ x = 3/25 = 12%.",
      bestMethod: "Expenditure = Price × Consumption. Initial = 100. Price becomes 125. Target Expenditure = 110. Consumption must scale from 125 down to 110. Required Reduction = (125 - 110) / 125 = 15 / 125 = 3 / 25 = 12%.",
      stepByStepSolution: [
        "1. Let base expenditure = 100.",
        "2. With 25% price increase, expenditure at same consumption would be 125.",
        "3. Allowed expenditure is 110 (+10%).",
        "4. Reduction needed from 125 to 110 = 15 units on base 125.",
        "5. Percentage reduction = (15 / 125) × 100 = (3 / 25) × 100 = 12%."
      ],
      finalAnswer: "12% reduction",
      speedTip: "Multiplier equation: 1.25 × MF_c = 1.10 ⇒ MF_c = 110/125 = 22/25 = 88% ⇒ 12% drop."
    },
    catLevelExample: {
      id: "pct-ex-cat",
      title: "CAT Actual Style: Successive Dilution and Multiplying Factor Equivalence",
      statement: "In an election between two candidates, 10% of voters did not cast their vote, and 60 votes were declared invalid. The winning candidate secured 47% of ALL voters on the electoral roll and won by a margin of 308 votes. Find the total number of voters on the electoral roll.",
      difficulty: "CAT Actual",
      source: "CAT 2019 Slot 1 Pattern",
      bestMethod: "Let total voters on roll = 100x. Total polled = 90x. Valid votes = 90x - 60. Winner gets 47x.",
      stepByStepSolution: [
        "1. Let total registered voters on the roll = 100x.",
        "2. Total votes cast (polled) = 90% of 100x = 90x.",
        "3. Valid votes = (90x - 60).",
        "4. Winner's votes = 47% of 100x = 47x (as stated 'of ALL voters on roll').",
        "5. Loser's votes = Valid votes - Winner = (90x - 60) - 47x = (43x - 60).",
        "6. Winning margin = Winner - Loser = 47x - (43x - 60) = 4x + 60.",
        "7. Equate to given margin: 4x + 60 = 308 ⇒ 4x = 248 ⇒ x = 62.",
        "8. Total voters on the electoral roll = 100x = 100 × 62 = 6,200."
      ],
      finalAnswer: "6,200 voters",
      speedTip: "Watch the base: '47% of ALL voters on list' means 47x, not 47% of polled votes!"
    },
    commonTrap: {
      title: "Base Ambiguity in Percentage Problems",
      description: "Candidates often apply a percentage to the wrong base (e.g. applying winner's percentage to polled votes instead of total enrolled voters).",
      mistakeExample: "Assuming winner got 47% of 90x = 42.3x instead of 47x.",
      howToAvoid: "Underline the phrase 'percent of WHAT' in every percentage statement before writing the equation."
    },
    examTakeaway: "Convert percentages into multiplying factor fractions; when A × B = Const, an increase of a/b requires a drop of a/(a+b).",
    tags: ["Percentages", "Multiplying Factors", "Successive Change", "Product Constancy", "P1"]
  },

  // =========================================================================
  // 2. ARITHMETIC — PROFIT, LOSS & DISCOUNT
  // =========================================================================
  {
    id: "profit-loss-discount-dishonest",
    slug: "profit-loss-discount-dishonest",
    title: "Profit, Loss, Markup, Discount & Dishonest Dealers",
    topicCategory: "arithmetic",
    subtopicId: "profit-and-loss",
    subtopicName: "Profit & Loss",
    priority: "P1",
    frequencyScore: 5,
    avgQuestionsPerCAT: "1-2 Questions in every slot",
    simplifiedExplanation:
      "Profit % is ALWAYS calculated on Cost Price (CP). Discount % is ALWAYS calculated on Marked Price (MP). Selling Price (SP) connects both: SP = CP × (1 + P%) = MP × (1 - D%). For dishonest shopkeepers, profit arises from two multipliers: the price markup multiplier and the weight multiplier (Promised Weight / Actual Weight Given).",
    keyFormulas: [
      {
        id: "pl-1",
        name: "CP, SP, MP Unified Multiplier Chain",
        latex: "\\text{SP} = \\text{CP} \\times \\left(1 + \\frac{P}{100}\\right) = \\text{MP} \\times \\left(1 - \\frac{D}{100}\\right)",
        explanation: "Relates Cost Price, Selling Price, and Marked Price through percentage multipliers.",
        catUtility: "Must Know"
      },
      {
        id: "pl-2",
        name: "Markup to Discount Relation",
        latex: "\\frac{\\text{MP}}{\\text{CP}} = \\frac{100 + P\\%}{100 - D\\%}",
        explanation: "Direct ratio of Marked Price to Cost Price given profit % and discount %.",
        catUtility: "Speed Booster"
      },
      {
        id: "pl-3",
        name: "Dishonest Dealer Total Profit Multiplier",
        latex: "\\text{Overall Multiplier} = \\left(1 + \\frac{\\text{Markup}\\%}{100}\\right) \\times \\left(1 - \\frac{\\text{Discount}\\%}{100}\\right) \\times \\left(\\frac{\\text{Weight Claimed}}{\\text{Weight Given}}\\right)",
        explanation: "Combines pricing actions and physical weight cheating into a single compound multiplying factor.",
        catUtility: "Must Know"
      }
    ],
    recognitionPattern:
      "Look for questions mentioning 'marked up by x% and allowed discount of y%', 'shopkeeper claims to sell at cost price but uses 800g instead of 1kg', or 'two articles sold at same SP, one at x% profit, other at x% loss'.",
    bestApproach:
      "Express all commercial actions as a sequence of multiplying factors: Overall Profit Multiplier = MF_price × MF_discount × MF_weight. If Overall MF = 5/4, profit is 25%.",
    shortcut: {
      name: "Equal SP with Same Gain and Loss %",
      description: "When two articles are sold at the exact same Selling Price (SP), one at +x% profit and other at -x% loss.",
      rule: "\\text{Overall Net Loss \\%} = -\\left(\\frac{x}{10}\\right)^2 \\%",
      speedMultiplier: "Instant 2-second answer",
      condition: "Requires exact same SP for both articles and identical profit/loss percentage x%."
    },
    simpleExample: {
      id: "pl-ex-1",
      title: "Markup and Discount Integration",
      statement: "A merchant marks his goods 40% above the cost price and gives a discount of 15% on the marked price. Find his actual profit percentage.",
      difficulty: "Easy",
      traditionalMethod: "Let CP = 100. MP = 140. SP = 140 × 0.85 = 119. Profit = 119 - 100 = 19%.",
      bestMethod: "Successive change formula on CP: a = +40%, b = -15%. Net % = 40 - 15 + (40 × -15)/100 = 25 - 6 = 19%.",
      stepByStepSolution: [
        "1. Markup = +40%, Discount = -15%.",
        "2. Net Profit % = a + b + (ab / 100).",
        "3. Calculation = 40 - 15 + (40 × -15)/100 = 25 - 6 = 19%.",
        "4. Profit Percentage = 19%."
      ],
      finalAnswer: "19% Profit",
      speedTip: "Multiplier: 1.40 × 0.85 = 1.19 ⇒ 19% profit instantly."
    },
    catLevelExample: {
      id: "pl-ex-cat",
      title: "CAT Actual Style: Dishonest Dealer with Cheating at Both Buying and Selling",
      statement: "A dishonest trader marks up his goods by 20% and offers a 10% discount to customers. Furthermore, he cheats his wholesaler by taking 20% extra weight while purchasing, and cheats his customers by giving 10% less weight while selling. Find his overall percentage profit.",
      difficulty: "CAT Actual",
      source: "CAT 2022 Slot 2",
      bestMethod: "Compound Multiplying Factors for Price Markup, Discount, Buying Weight, and Selling Weight.",
      stepByStepSolution: [
        "1. Price Markup Factor = 1 + 20/100 = 1.20 = 6/5.",
        "2. Discount Factor = 1 - 10/100 = 0.90 = 9/10.",
        "3. Buying Cheating: He pays for 1000g but gets 1200g → Factor = 1200 / 1000 = 6/5.",
        "4. Selling Cheating: He charges for 1000g but gives only 900g → Factor = 1000 / 900 = 10/9.",
        "5. Total Effective Multiplying Factor = (6/5) × (9/10) × (6/5) × (10/9).",
        "6. Cancel terms: (9/10) and (10/9) cancel to 1. Leftover = (6/5) × (6/5) = 36 / 25.",
        "7. Profit = (36 - 25) / 25 = 11 / 25 = 44%."
      ],
      finalAnswer: "44% Profit",
      speedTip: "Notice how discount factor (9/10) and selling weight factor (10/9) completely negate each other!"
    },
    commonTrap: {
      title: "Equal SP vs Equal CP Trap",
      description: "If two items have equal CP and one is sold at +x% and other at -x%, net profit is 0%. Only when Selling Price (SP) is equal is there an automatic loss of (x/10)² %.",
      mistakeExample: "Applying (x/10)² loss when Cost Price is equal.",
      howToAvoid: "Check whether SP is equal or CP is equal in the problem statement."
    },
    examTakeaway: "Chain commercial multiplying factors: Profit = (MF_markup) × (MF_discount) × (Weight_claimed / Weight_given) - 1.",
    tags: ["Profit & Loss", "Dishonest Shopkeeper", "Discount", "Markup", "P1"]
  },

  // =========================================================================
  // 3. ARITHMETIC — RATIO, PROPORTION & VARIATIONS
  // =========================================================================
  {
    id: "ratio-proportion-variations",
    slug: "ratio-proportion-variations",
    title: "Ratio, Proportion, Variations & Componendo-Dividendo",
    topicCategory: "arithmetic",
    subtopicId: "ratio-and-proportion",
    subtopicName: "Ratio & Proportion",
    priority: "P1",
    frequencyScore: 5,
    avgQuestionsPerCAT: "1-2 Questions (Direct & Applied)",
    simplifiedExplanation:
      "A ratio a:b represents relative scale, not absolute values. To bridge multiple ratios (e.g. A:B = 2:3 and B:C = 4:5), equalize the common variable B by finding the LCM of its coefficients (LCM(3,4)=12 ⇒ A:B:C = 8:12:15). Componendo & Dividendo simplifies symmetrical fractional equations: if a/b = c/d, then (a+b)/(a-b) = (c+d)/(c-d).",
    keyFormulas: [
      {
        id: "rat-1",
        name: "Componendo & Dividendo (C&D)",
        latex: "\\frac{a}{b} = \\frac{c}{d} \\iff \\frac{a + b}{a - b} = \\frac{c + d}{c - d}",
        explanation: "Used to remove square roots and radical fractions in symmetric ratios.",
        catUtility: "Must Know"
      },
      {
        id: "rat-2",
        name: "Ratio Equalization (Bridge Method)",
        latex: "A:B = a:b, \\; B:C = c:d \\implies A:B:C = (a \\cdot c) : (b \\cdot c) : (b \\cdot d)",
        explanation: "Multiply first ratio by c and second ratio by b to unify the bridge variable B.",
        catUtility: "Must Know"
      },
      {
        id: "rat-3",
        name: "Joint Variation Equation",
        latex: "z \\propto \\frac{x^p}{y^q} \\implies \\frac{z_1 \\cdot y_1^q}{x_1^p} = \\frac{z_2 \\cdot y_2^q}{x_2^p} = k",
        explanation: "Equates variation constants across initial and modified experimental states.",
        catUtility: "Must Know"
      }
    ],
    recognitionPattern:
      "Look for multiple overlapping ratios A:B, B:C, C:D, symmetric expressions like (√(x+a) + √(x-a)) / (√(x+a) - √(x-a)), or joint variations like 'cost varies directly as the square of weight'.",
    bestApproach:
      "Unify all ratios into a single unified integer ratio chain A:B:C:D. Assign a single multiplier 'k' to represent actual values.",
    shortcut: {
      name: "Diamond Broken Proportionality Rule",
      description: "When a diamond breaks into pieces of weights in ratio w₁:w₂:w₃ with Price ∝ Weight².",
      rule: "\\text{Loss \\%} = 1 - \\frac{w_1^2 + w_2^2 + \\dots}{(w_1 + w_2 + \\dots)^2}",
      speedMultiplier: "4x faster",
      condition: "Price directly proportional to square of total weight."
    },
    simpleExample: {
      id: "rat-ex-1",
      title: "Three-Variable Ratio Unification",
      statement: "If A : B = 3 : 4, B : C = 5 : 6, and C : D = 2 : 3, find the unified ratio A : B : C : D.",
      difficulty: "Easy",
      bestMethod: "Unify step by step: A:B:C = (3×5) : (4×5) : (4×6) = 15 : 20 : 24. Since C is 24 in A:B:C and 2 in C:D, multiply C:D by 12 → C:D = 24 : 36. Thus A:B:C:D = 15 : 20 : 24 : 36.",
      stepByStepSolution: [
        "1. A : B = 3 : 4, B : C = 5 : 6.",
        "2. Multiply first by 5 and second by 4: A:B:C = 15 : 20 : 24.",
        "3. Connect with C : D = 2 : 3. To make C = 24, multiply (2 : 3) by 12 → 24 : 36.",
        "4. Combined Ratio: A : B : C : D = 15 : 20 : 24 : 36."
      ],
      finalAnswer: "15 : 20 : 24 : 36",
      speedTip: "A:D ratio directly = (3/4) × (5/6) × (2/3) = 30 / 72 = 15 / 36 = 5 / 12."
    },
    catLevelExample: {
      id: "rat-ex-cat",
      title: "CAT Actual Style: Proportional Division & Joint Variation",
      statement: "The value of a precious gemstone is directly proportional to the square of its weight. A gemstone weighing 10 carats broke into three pieces whose weights are in the ratio 2 : 3 : 5. As a result of the breakage, its total value decreased by ₹ 62,000. What was the original value of the gemstone?",
      difficulty: "CAT Actual",
      source: "CAT 2021 Slot 1",
      bestMethod: "Set Value = k · (Weight)². Compare original (2+3+5)² vs broken (2² + 3² + 5²).",
      stepByStepSolution: [
        "1. Let weights of the 3 broken pieces be 2x, 3x, and 5x. Total weight = 10x.",
        "2. Original value V_orig = k · (10x)² = 100 k x².",
        "3. Value of the three pieces after breaking = k·(2x)² + k·(3x)² + k·(5x)² = k(4 + 9 + 25)x² = 38 k x².",
        "4. Loss in value = 100 k x² - 38 k x² = 62 k x².",
        "5. Given Loss = ₹ 62,000 ⇒ 62 k x² = 62,000 ⇒ k x² = 1,000.",
        "6. Original Value = 100 k x² = 100 × 1,000 = ₹ 1,00,000 (1 Lakh)."
      ],
      finalAnswer: "₹ 1,00,000 (₹ 1 Lakh)",
      speedTip: "Fractional value retained = (4 + 9 + 25) / 100 = 38%. Loss = 62% = 62,000 ⇒ 100% = 1,00,000!"
    },
    commonTrap: {
      title: "Direct Addition of Ratios",
      description: "Aspirants add terms of two different ratios without finding the common scaling multiplier.",
      mistakeExample: "Adding A:B (2:3) and C:D (4:5) to claim (A+C):(B+D) = 6:8.",
      howToAvoid: "Never add across ratios unless both refer to identical base total units."
    },
    examTakeaway: "Unify common variables via LCM bridging; for variation problems, express initial vs final state as a ratio to eliminate constant 'k'.",
    tags: ["Ratio", "Proportion", "Componendo Dividendo", "Variations", "P1"]
  },

  // =========================================================================
  // 4. ARITHMETIC — AVERAGES & DEVIATION METHOD
  // =========================================================================
  {
    id: "averages-deviation-method",
    slug: "averages-deviation-method",
    title: "Averages, Assumed Mean & Deviation Method",
    topicCategory: "arithmetic",
    subtopicId: "averages-and-weighted-avg",
    subtopicName: "Averages",
    priority: "P1",
    frequencyScore: 5,
    avgQuestionsPerCAT: "1 Question directly or in DI",
    simplifiedExplanation:
      "Average is the point of balance where the algebraic sum of deviations of all observations equals ZERO (∑(x_i - A) = 0). When a new member joins or replaces someone, the change in total equals the new average change multiplied by the new group size. Weighted average of two groups n₁ and n₂ with averages A₁ and A₂ is (n₁A₁ + n₂A₂) / (n₁ + n₂).",
    keyFormulas: [
      {
        id: "avg-1",
        name: "Zero Net Deviation Property",
        latex: "\\sum_{i=1}^n (x_i - \\bar{x}) = 0 \\implies \\bar{x} = A_{\\text{assumed}} + \\frac{\\sum \\text{Deviations}}{n}",
        explanation: "Allows finding average of huge numbers (e.g. 984, 992, 988) in seconds by taking assumed mean 990.",
        catUtility: "Must Know"
      },
      {
        id: "avg-2",
        name: "Replacement / Entry Formula",
        latex: "\\text{Value of New Member} = \\text{Replaced Member} + n \\times (\\text{New Average} - \\text{Old Average})",
        explanation: "Calculates incoming member weight/age without computing total sum of entire group.",
        catUtility: "Must Know"
      },
      {
        id: "avg-3",
        name: "Weighted Average (Alligation Form)",
        latex: "A_{\\text{weighted}} = \\frac{n_1 A_1 + n_2 A_2}{n_1 + n_2} \\iff \\frac{n_1}{n_2} = \\frac{A_2 - A_w}{A_w - A_1}",
        explanation: "Weighted average is the center of gravity of the two individual group averages.",
        catUtility: "Must Know"
      }
    ],
    recognitionPattern:
      "Look for wording like 'when a person weighing 65 kg leaves and a new person joins, the average increases by 1.5 kg', 'average score of boys is 72 and girls is 81', or consecutive integer averages.",
    bestApproach:
      "Use Deviation Method: Net Change in Total = (New Count) × (Change in Average). Avoid calculating large multiplication sums.",
    shortcut: {
      name: "Assumed Mean Deviation Speedup",
      description: "Pick a round number near the cluster center as assumed mean A.",
      rule: "\\text{True Avg} = A + \\frac{\\sum (x_i - A)}{N}",
      speedMultiplier: "3x faster mental addition",
      condition: "Data values tightly clustered within a narrow range."
    },
    simpleExample: {
      id: "avg-ex-1",
      title: "Replacement Impact on Group Average",
      statement: "The average weight of a group of 20 students increases by 0.75 kg when one student weighing 50 kg is replaced by a new student. What is the weight of the new student?",
      difficulty: "Easy",
      bestMethod: "New Weight = Replaced Weight + Total Students × Average Shift = 50 + 20 × 0.75 = 50 + 15 = 65 kg.",
      stepByStepSolution: [
        "1. Number of students n = 20.",
        "2. Average increase ΔA = +0.75 kg.",
        "3. Total weight increase of group = 20 × 0.75 = 15 kg.",
        "4. Weight of new student = Old student weight (50 kg) + Total increase (15 kg) = 65 kg."
      ],
      finalAnswer: "65 kg",
      speedTip: "Mental math: 50 + (20 × 3/4) = 50 + 15 = 65 kg in 3 seconds."
    },
    catLevelExample: {
      id: "avg-ex-cat",
      title: "CAT Actual Style: Sequential Removals & Maxima-Minima of Average",
      statement: "The average score of 40 students in an exam is 76. If the highest and lowest scores are excluded, the average score of the remaining 38 students drops by 1 mark. If the highest score is 98, find the lowest score.",
      difficulty: "CAT Actual",
      source: "CAT 2020 Slot 3",
      bestMethod: "Balance sum of deviations for the 2 excluded students.",
      stepByStepSolution: [
        "1. Initial total sum = 40 × 76 = 3040.",
        "2. New average of 38 students = 76 - 1 = 75.",
        "3. New total sum = 38 × 75 = 2850.",
        "4. Sum of (Highest + Lowest) = 3040 - 2850 = 190.",
        "5. Since Highest = 98: Lowest = 190 - 98 = 92."
      ],
      finalAnswer: "92",
      speedTip: "Deviation method: The 38 remaining students lost 1 mark each = -38 marks. Thus (Highest + Lowest) had a surplus of 38 over baseline: (H + L) = 2 × 76 + 38 = 152 + 38 = 190. L = 190 - 98 = 92!"
    },
    commonTrap: {
      title: "Off-by-One Group Count on Entry/Exit",
      description: "When a new person joins, the count becomes (n + 1). When calculating deviation, using old count 'n' gives wrong total shift.",
      mistakeExample: "Multiplying average shift by 20 instead of 21 when 1 person enters a 20-person room.",
      howToAvoid: "Check: 'Is it Replacement (n constant) or New Entry (n + 1)?'"
    },
    examTakeaway: "Sum of deviations from true average is always zero; New Entry Value = Replaced Value + N × ΔAverage.",
    tags: ["Averages", "Deviation Method", "Weighted Average", "Replacement", "P1"]
  },

  // =========================================================================
  // 5. ARITHMETIC — MIXTURES & ALLIGATION
  // =========================================================================
  {
    id: "mixtures-alligation-dilution",
    slug: "mixtures-alligation-dilution",
    title: "Mixtures, Alligation Cross & Repeated Dilution",
    topicCategory: "arithmetic",
    subtopicId: "mixtures-and-alligation",
    subtopicName: "Mixtures & Alligation",
    priority: "P1",
    frequencyScore: 5,
    avgQuestionsPerCAT: "1-2 Questions (Speed Booster)",
    simplifiedExplanation:
      "Alligation is a visual shortcut for weighted averages. The ratio in which two ingredients of concentrations C₁ and C₂ must be mixed to obtain a mean concentration C_m is (C₂ - C_m) : (C_m - C₁). For repeated replacement where 'x' litres are drawn from capacity 'V' and replaced with pure water 'n' times, the remaining pure liquid is Initial × (1 - x/V)^n.",
    keyFormulas: [
      {
        id: "mix-1",
        name: "Alligation Cross Ratio",
        latex: "\\frac{Q_{\\text{cheaper}}}{Q_{\\text{dearer}}} = \\frac{C_{\\text{dearer}} - C_{\\text{mean}}}{C_{\\text{mean}} - C_{\\text{cheaper}}}",
        explanation: "Ratio of quantities is inversely proportional to distance from mean concentration.",
        catUtility: "Must Know"
      },
      {
        id: "mix-2",
        name: "Repeated Replacement Dilution Formula",
        latex: "Q_{\\text{final}} = Q_{\\text{initial}} \\left(1 - \\frac{x}{V}\\right)^n",
        explanation: "Amount of original liquid remaining after n iterations of drawing x litres and replacing with water.",
        variableNotes: ["V = total capacity", "x = volume replaced per cycle", "n = number of operations"],
        catUtility: "Must Know"
      }
    ],
    recognitionPattern:
      "Look for phrases like 'mix two varieties of tea costing ₹40/kg and ₹60/kg to sell at ₹55/kg', 'a vessel contains 60L milk, 6L is drawn and replaced with water twice', or 'ratio of alcohol to water in two vessels'.",
    bestApproach:
      "Pick one consistent component (e.g. only milk % or only price per kg). Draw the Alligation Cross. Cross-subtract to get integer quantity ratios.",
    shortcut: {
      name: "Replacement Ratio Inversion",
      description: "If ratio of pure liquid to total liquid after n operations is a/b.",
      rule: "\\left(1 - \\frac{x}{V}\\right) = \\sqrt[n]{\\frac{\\text{Pure Liquid Remaining}}{\\text{Total Mixture Volume}}}",
      speedMultiplier: "Instant nth root simplification",
      condition: "Equal volume replaced each turn."
    },
    simpleExample: {
      id: "mix-ex-1",
      title: "Alligation of Milk Solutions",
      statement: "In what ratio must a 20% milk solution be mixed with a 50% milk solution to obtain a 30% milk solution?",
      difficulty: "Easy",
      bestMethod: "Alligation on milk %: Solution 1 (20%), Solution 2 (50%), Desired Mean (30%). Right difference = |50 - 30| = 20. Left difference = |20 - 30| = 10. Ratio Sol 1 : Sol 2 = 20 : 10 = 2 : 1.",
      stepByStepSolution: [
        "1. Concentration 1 = 20%, Concentration 2 = 50%, Mean = 30%.",
        "2. Quantity 1 / Quantity 2 = (50 - 30) / (30 - 20) = 20 / 10 = 2 / 1.",
        "3. Mix 2 parts of 20% solution with 1 part of 50% solution."
      ],
      finalAnswer: "2 : 1",
      speedTip: "Cross subtractions: (50 - 30) = 20 and (30 - 20) = 10 ⇒ 2:1 in 3 seconds."
    },
    catLevelExample: {
      id: "mix-ex-cat",
      title: "CAT Actual Style: Multi-Vessel Mixing with Replacement",
      statement: "A container is completely filled with pure milk. 10 litres of milk is drawn out and replaced with water. This process is repeated one more time. The ratio of milk to water in the container now becomes 49 : 15. What is the total capacity of the container?",
      difficulty: "CAT Actual",
      source: "CAT 2021 Slot 2",
      bestMethod: "Ratio of Milk Remaining to Total Volume = 49 / (49 + 15) = 49 / 64.",
      stepByStepSolution: [
        "1. Final ratio Milk : Water = 49 : 15.",
        "2. Total Mixture Volume = 49 + 15 = 64 parts.",
        "3. Fraction of milk remaining = 49 / 64.",
        "4. Number of operations n = 2.",
        "5. Apply formula: (1 - x / V)² = 49 / 64.",
        "6. Take square root on both sides: 1 - 10 / V = 7 / 8.",
        "7. 10 / V = 1 - 7/8 = 1/8 ⇒ V = 10 × 8 = 80 litres."
      ],
      finalAnswer: "80 litres",
      speedTip: "Recognize that √(49/64) = 7/8. The 1/8 fraction lost corresponds to the 10 litres drawn ⇒ V = 10 × 8 = 80 L!"
    },
    commonTrap: {
      title: "Using Milk:Water instead of Milk:Total in Dilution",
      description: "Candidates equate (1 - x/V)^n to Milk/Water (49/15) instead of Milk/Total Volume (49/64).",
      mistakeExample: "Taking square root of 49/15 instead of 49/64.",
      howToAvoid: "The denominator in dilution is ALWAYS Total Capacity V, so fraction is Milk / (Milk + Water)."
    },
    examTakeaway: "Alligation cross gives ratio of quantity bases; in dilution, equate (1 - x/V)^n to (Pure Left / Total Volume).",
    tags: ["Mixtures", "Alligation", "Dilution", "Replacement", "P1"]
  },

  // =========================================================================
  // 6. ARITHMETIC — TIME & WORK
  // =========================================================================
  {
    id: "time-work-lcm-method",
    slug: "time-work-lcm-method",
    title: "Time & Work: LCM Unit Method & Efficiency",
    topicCategory: "arithmetic",
    subtopicId: "time-and-work",
    subtopicName: "Time & Work",
    priority: "P1",
    frequencyScore: 5,
    avgQuestionsPerCAT: "1-2 Questions per slot",
    simplifiedExplanation:
      "Instead of working with messy fractions like 1/12 or 1/18 of work done per day, assume the total work to be the Least Common Multiple (LCM) of all given individual time periods. This turns fractional equations into clean, integer addition and subtraction of 'units per day' (efficiency).",
    keyFormulas: [
      {
        id: "tw-1",
        name: "Efficiency Equation",
        latex: "\\text{Efficiency (Units/Day)} = \\frac{\\text{Total Work (LCM of days)}}{\\text{Time Taken (Days)}}",
        explanation: "Efficiency is directly proportional to work and inversely proportional to time.",
        variableNotes: ["Total Work = Efficiency × Time", "Time = Total Work / Combined Efficiency"],
        catUtility: "Must Know"
      },
      {
        id: "tw-2",
        name: "Man-Days-Hours Formula (Chain Rule)",
        latex: "\\frac{M_1 \\times D_1 \\times H_1 \\times E_1}{W_1} = \\frac{M_2 \\times D_2 \\times H_2 \\times E_2}{W_2}",
        explanation: "Equates total work effort across varying crew sizes, working hours, and individual efficiencies.",
        variableNotes: ["M = Men/Workers", "D = Days", "H = Hours/Day", "E = Efficiency", "W = Output/Work done"],
        catUtility: "Must Know"
      }
    ],
    recognitionPattern:
      "Look for problems mentioning multiple people completing a project in varying individual days (e.g. 'A takes 15 days, B takes 20 days'), people joining/leaving mid-way, or alternate-day shifts.",
    bestApproach:
      "LCM Unit Allocation: (1) Find LCM of times → Set as Total Units. (2) Compute daily efficiency for each person. (3) Model the timeline as integer unit subtraction from total pool.",
    shortcut: {
      name: "Two-Worker Product-Over-Sum",
      description: "When only 2 people A and B work together from start to finish.",
      rule: "t_{AB} = \\frac{a \\times b}{a + b}",
      speedMultiplier: "3x faster mental math",
      condition: "Both work simultaneously for full duration."
    },
    simpleExample: {
      id: "tw-ex-1",
      title: "Two Workers Simultaneous Project",
      statement: "A can complete a project in 12 days and B can complete it in 18 days. Working together, in how many days will they finish the project?",
      difficulty: "Easy",
      traditionalMethod: "1/12 + 1/18 = (3+2)/36 = 5/36 per day → Total days = 36/5 = 7.2 days.",
      bestMethod: "LCM(12, 18) = 36 units total work. Rate A = 36/12 = 3 u/d. Rate B = 36/18 = 2 u/d. Combined = 5 u/d. Total time = 36 / 5 = 7.2 days.",
      stepByStepSolution: [
        "1. Let Total Work = LCM(12, 18) = 36 units.",
        "2. Rate of A = 36 / 12 = 3 units/day.",
        "3. Rate of B = 36 / 18 = 2 units/day.",
        "4. Combined Rate = 3 + 2 = 5 units/day.",
        "5. Time Required = 36 / 5 = 7.2 days."
      ],
      finalAnswer: "7.2 days",
      speedTip: "(12 × 18) / (12 + 18) = 216 / 30 = 7.2 days directly."
    },
    catLevelExample: {
      id: "tw-ex-cat",
      title: "CAT Actual Style: Leaving Mid-Way & Adding Hypothetical Work",
      statement: "A, B, and C can complete a job in 15, 20, and 30 days respectively. All three start together. After 2 days, A leaves. B works until 3 days before the completion of the job, and C works till the end. Find the total number of days taken to complete the job.",
      difficulty: "CAT Actual",
      source: "CAT 2021 Slot 1",
      bestMethod: "LCM Unit Method with backward work addition for B's early departure.",
      stepByStepSolution: [
        "1. Total Work = LCM(15, 20, 30) = 60 units.",
        "2. Rates: A = 4 u/d, B = 3 u/d, C = 2 u/d.",
        "3. First 2 days (A + B + C work): (4 + 3 + 2) × 2 = 18 units done.",
        "4. Work remaining = 60 - 18 = 42 units.",
        "5. B leaves 3 days before end: Add hypothetical 3 days of B's work (3 × 3 = 9 units) to the pool → 42 + 9 = 51 units.",
        "6. Now both B & C work for full T days at (3 + 2 = 5 u/d) → T = 51 / 5 = 10.2 days.",
        "7. Total days = 2 + 10.2 = 12.2 days."
      ],
      finalAnswer: "12.2 days",
      speedTip: "Add work of the person leaving early before completion to avoid multi-variable equations!"
    },
    commonTrap: {
      title: "Alternate Day Cycle Remainder Trap",
      description: "When units remain after full cycles on alternate days, dividing by 2-day rate gives wrong fractional days. Person A gets the first turn.",
      mistakeExample: "If 5 units remain and A does 4 units on Day 1, B does 2 units on Day 2: Writing 5/6 cycle instead of 1 full day for A + 1/2 day for B = 1.5 days.",
      howToAvoid: "Always resolve leftover units sequentially person-by-person."
    },
    examTakeaway: "Convert fractions into LCM integer work units; if someone leaves before finish, add their hypothetical work.",
    tags: ["Time & Work", "LCM Method", "Efficiency", "Alternate Days", "P1"]
  },

  // =========================================================================
  // 7. ARITHMETIC — PIPES & CISTERNS
  // =========================================================================
  {
    id: "pipes-and-cisterns-negative-work",
    slug: "pipes-and-cisterns-negative-work",
    title: "Pipes & Cisterns: Inlets, Outlets & Leakages",
    topicCategory: "arithmetic",
    subtopicId: "pipes-and-cisterns",
    subtopicName: "Pipes & Cisterns",
    priority: "P1",
    frequencyScore: 4,
    avgQuestionsPerCAT: "1 Question per slot",
    simplifiedExplanation:
      "Pipes & Cisterns is identical to Time & Work with one crucial distinction: Filling pipes (inlets) perform POSITIVE work (+ units/hr), while emptying pipes (outlets/leaks) perform NEGATIVE work (- units/hr). The tank capacity is assumed to be the LCM of individual filling and emptying times.",
    keyFormulas: [
      {
        id: "pc-1",
        name: "Net Filling Rate",
        latex: "\\text{Net Rate} = \\sum \\text{Inlet Rates} - \\sum \\text{Outlet Rates} = \\frac{\\text{Total Capacity}}{\\text{Net Time}}",
        explanation: "If Net Rate > 0, tank fills. If Net Rate < 0, full tank empties.",
        catUtility: "Must Know"
      },
      {
        id: "pc-2",
        name: "Leakage at Height 'h'",
        latex: "\\text{Emptying Rate Active Only When Water Level } \\ge h",
        explanation: "A leak at half height (h = H/2) only drains the upper half of the tank.",
        catUtility: "Speed Booster"
      }
    ],
    recognitionPattern:
      "Look for inlet pipes and outlet drains, a leak that delays filling time by x hours, or alternate operation of filling and emptying pipes.",
    bestApproach:
      "Set Tank Capacity = LCM of all hours. Assign positive efficiency to inlets and negative efficiency to outlets. Track tank level cycle-by-cycle.",
    shortcut: {
      name: "Leakage Rate Deduction",
      description: "If pipe fills tank in 'a' hrs, but with leak takes 'b' hrs.",
      rule: "\\text{Time for leak alone to empty full tank} = \\frac{a \\times b}{b - a}",
      speedMultiplier: "Instant 5-second mental calculation",
      condition: "Single inlet pipe and single bottom leak."
    },
    simpleExample: {
      id: "pc-ex-1",
      title: "Bottom Leak Impact on Tank Filling",
      statement: "A pipe can fill a tank in 8 hours. Due to a leak in the bottom, it takes 10 hours to fill the tank. In how many hours will the leak alone empty the full tank?",
      difficulty: "Easy",
      bestMethod: "LCM(8, 10) = 40 units capacity. Pipe Rate = +5 u/h. Pipe + Leak Rate = +4 u/h. Leak Rate = 4 - 5 = -1 u/h. Time for leak alone to empty 40 units = 40 / 1 = 40 hours.",
      stepByStepSolution: [
        "1. Let Tank Capacity = LCM(8, 10) = 40 units.",
        "2. Inlet Pipe rate = 40 / 8 = +5 units/hour.",
        "3. Combined (Inlet + Leak) rate = 40 / 10 = +4 units/hour.",
        "4. Leak emptying rate = 4 - 5 = -1 unit/hour.",
        "5. Time for leak alone = 40 / 1 = 40 hours."
      ],
      finalAnswer: "40 hours",
      speedTip: "(8 × 10) / (10 - 8) = 80 / 2 = 40 hours directly."
    },
    catLevelExample: {
      id: "pc-ex-cat",
      title: "CAT Actual Style: Alternate Filling and Emptying with Pre-Threshold Cutoff",
      statement: "Pipe A can fill a cistern in 6 hours and Pipe B can empty it in 8 hours. They are opened alternately for 1 hour each, starting with Pipe A. In how many hours will the cistern be completely filled for the first time?",
      difficulty: "CAT Actual",
      source: "CAT 2021 Slot 3",
      bestMethod: "LCM Capacity = 24 units. Deduct Pipe A's first turn rate (4 units) from total to find safe cycle threshold (20 units).",
      stepByStepSolution: [
        "1. Capacity = LCM(6, 8) = 24 units.",
        "2. Pipe A rate = +4 u/h. Pipe B rate = -3 u/h.",
        "3. 2-hour cycle (A then B): Output = +4 - 3 = +1 unit in 2 hours.",
        "4. CRUCIAL: Once tank reaches 24 units on Pipe A's turn, it is full and B will not be opened.",
        "5. Safe threshold before final turn = 24 - 4 = 20 units.",
        "6. Time to reach 20 units = 20 cycles × 2 hours/cycle = 40 hours.",
        "7. At 40 hours, tank has 20 units. Hour 41: Pipe A opens and fills remaining 4 units (20 + 4 = 24 units).",
        "8. Total Time = 40 + 1 = 41 hours."
      ],
      finalAnswer: "41 hours",
      speedTip: "Subtract inlet rate from total capacity before computing cycle counts to prevent over-cycling beyond full tank!"
    },
    commonTrap: {
      title: "The Alternating Drain Over-Cycle Trap",
      description: "Aspirants divide 24 by 1 unit/2hrs and answer 48 hours. In reality, the tank fills at 41 hours before Pipe B ever opens on the 21st cycle.",
      mistakeExample: "Answering 48 hours instead of 41 hours.",
      howToAvoid: "Subtract the positive inlet capacity (4 units) from total before calculating full 2-hour cycles."
    },
    examTakeaway: "Assign negative rates to outlets; in alternate inlet/outlet schedules, subtract inlet rate from capacity first.",
    tags: ["Pipes & Cisterns", "Negative Work", "Alternate Cycles", "Leakage", "P1"]
  },

  // =========================================================================
  // 8. ARITHMETIC — TIME, SPEED & DISTANCE (TSD)
  // =========================================================================
  {
    id: "tsd-relative-speed-races",
    slug: "tsd-relative-speed-races",
    title: "Time, Speed & Distance: Relative Speed & Circular Tracks",
    topicCategory: "arithmetic",
    subtopicId: "time-speed-distance",
    subtopicName: "Time-Speed-Distance",
    priority: "P1",
    frequencyScore: 5,
    avgQuestionsPerCAT: "2-3 Questions per slot",
    simplifiedExplanation:
      "Distance = Speed × Time. Relative speed is the rate at which distance between two moving bodies collapses: (S₁ + S₂) in opposite directions, and |S₁ - S₂| in the same direction. For circular tracks of circumference L, first meeting anywhere is L / Relative Speed; first meeting at starting point is LCM(t₁, t₂).",
    keyFormulas: [
      {
        id: "tsd-1",
        name: "Relative Speed",
        latex: "S_{\\text{rel}} = \\begin{cases} S_1 + S_2 & (\\text{Opposite Direction}) \\\\ |S_1 - S_2| & (\\text{Same Direction}) \\end{cases}",
        explanation: "Time to meet or overtake = Separation Distance / Relative Speed.",
        catUtility: "Must Know"
      },
      {
        id: "tsd-2",
        name: "Post-Meeting Speed & Time Formula",
        latex: "\\frac{S_1}{S_2} = \\sqrt{\\frac{t_2}{t_1}}, \\quad t_{\\text{meeting}} = \\sqrt{t_1 \\cdot t_2}",
        explanation: "When two travelers start simultaneously, cross each other, and take t1 and t2 to reach endpoints.",
        catUtility: "Speed Booster"
      },
      {
        id: "tsd-3",
        name: "Average Speed for Equal Distances",
        latex: "S_{\\text{avg}} = \\frac{2 S_1 S_2}{S_1 + S_2} \\quad (\\text{Harmonic Mean})",
        explanation: "Valid only when distances covered at speed S1 and S2 are identical.",
        catUtility: "Must Know"
      }
    ],
    recognitionPattern:
      "Look for problems with two people starting towards each other, catching up, circular tracks, or times taken after meeting.",
    bestApproach:
      "Synchronize starting clocks so both bodies move simultaneously from T₀, then apply Gap / Relative Speed.",
    shortcut: {
      name: "Post-Meeting Speed Ratio Formula",
      description: "Eliminates quadratic distance equations in post-meeting problems.",
      rule: "S_1 / S_2 = \\sqrt{t_2 / t_1}",
      speedMultiplier: "5x faster",
      condition: "Both start simultaneously from opposite endpoints and meet en route."
    },
    simpleExample: {
      id: "tsd-ex-1",
      title: "Two Travelers Crossing En Route",
      statement: "A and B start at the same time towards each other from X and Y. After crossing each other, A takes 4 hours to reach Y and B takes 9 hours to reach X. Find the ratio of their speeds.",
      difficulty: "Easy",
      bestMethod: "Apply S_A / S_B = √(t_B / t_A) = √(9 / 4) = 3 / 2.",
      stepByStepSolution: [
        "1. Time taken by A after meeting t_A = 4 hours.",
        "2. Time taken by B after meeting t_B = 9 hours.",
        "3. Speed Ratio S_A : S_B = √(t_B / t_A) = √(9 / 4) = 3 : 2."
      ],
      finalAnswer: "3 : 2",
      speedTip: "Direct square root inversion: √(9/4) = 3/2 in 2 seconds."
    },
    catLevelExample: {
      id: "tsd-ex-cat",
      title: "CAT Actual Style: Circular Track Distinct Meeting Points",
      statement: "Two runners A and B run on a circular track of 600m in opposite directions with speeds 15 m/s and 25 m/s respectively. At how many distinct points on the track will they cross each other, and what is the time between consecutive meetings?",
      difficulty: "CAT Actual",
      source: "CAT 2020 Slot 2",
      bestMethod: "Speed ratio in lowest terms a:b = 15:25 = 3:5. Distinct points in opposite direction = a + b = 3 + 5 = 8.",
      stepByStepSolution: [
        "1. Speed of A = 15 m/s, Speed of B = 25 m/s.",
        "2. Speed ratio in lowest integer terms = 15 : 25 = 3 : 5 (a = 3, b = 5).",
        "3. For opposite directions, number of distinct meeting points = a + b = 3 + 5 = 8 points.",
        "4. Relative speed = 15 + 25 = 40 m/s.",
        "5. Time between any two consecutive meetings = Circumference / Relative Speed = 600 / 40 = 15 seconds."
      ],
      finalAnswer: "8 distinct points, 15 seconds between meetings",
      speedTip: "Distinct points = a + b (opposite) or |a - b| (same direction) where a:b is in lowest terms."
    },
    commonTrap: {
      title: "Arithmetic Mean for Average Speed Trap",
      description: "Using (S1 + S2)/2 when distance is constant instead of Harmonic Mean 2S1S2/(S1 + S2).",
      mistakeExample: "Going at 20 km/h, returning at 30 km/h: Answering 25 km/h instead of 2(20)(30)/50 = 24 km/h.",
      howToAvoid: "Constant Distance → Harmonic Mean. Constant Time → Arithmetic Mean."
    },
    examTakeaway: "Synchronize starting times before applying relative speed; use S1/S2 = √(t2/t1) for post-meeting scenarios.",
    tags: ["TSD", "Relative Speed", "Circular Tracks", "Harmonic Mean", "P1"]
  },

  // =========================================================================
  // 9. ARITHMETIC — BOATS & STREAMS
  // =========================================================================
  {
    id: "boats-and-streams-speed-decomposition",
    slug: "boats-and-streams-speed-decomposition",
    title: "Boats & Streams: Upstream, Downstream & River Drift",
    topicCategory: "arithmetic",
    subtopicId: "boats-and-streams",
    subtopicName: "Boats & Streams",
    priority: "P1",
    frequencyScore: 4,
    avgQuestionsPerCAT: "1 Question per slot",
    simplifiedExplanation:
      "Let speed of boat in still water be 'u' and speed of stream be 'v'. When moving with the current (Downstream), effective speed is (u + v). When moving against the current (Upstream), effective speed is (u - v). Inverting gives: Boat speed in still water u = (D + U)/2, and Stream speed v = (D - U)/2.",
    keyFormulas: [
      {
        id: "bs-1",
        name: "Speed Decomposition Relations",
        latex: "D = u + v, \\quad U = u - v \\iff u = \\frac{D + U}{2}, \\quad v = \\frac{D - U}{2}",
        explanation: "D = Downstream speed, U = Upstream speed, u = Boat in still water, v = Stream speed.",
        catUtility: "Must Know"
      },
      {
        id: "bs-2",
        name: "Round-Trip Time Equation",
        latex: "T_{\\text{round}} = \\frac{d}{u + v} + \\frac{d}{u - v} = \\frac{2 d u}{u^2 - v^2}",
        explanation: "Total time taken to row distance 'd' downstream and return back upstream.",
        catUtility: "Must Know"
      }
    ],
    recognitionPattern:
      "Look for terms like 'still water speed', 'speed of current / stream', 'upstream against flow', or 'takes 3 times as long to row upstream as downstream'.",
    bestApproach:
      "Express everything in terms of Downstream rate D and Upstream rate U. Use D:U ratio to directly extract u:v.",
    shortcut: {
      name: "Time Ratio to Speed Ratio Shortcut",
      description: "If time taken upstream is 'k' times time taken downstream for same distance (t_up / t_down = k).",
      rule: "\\frac{u}{v} = \\frac{k + 1}{k - 1}",
      speedMultiplier: "4x faster (eliminates algebraic substitution)",
      condition: "Identical upstream and downstream distance."
    },
    simpleExample: {
      id: "bs-ex-1",
      title: "Stream Speed from Time Multiplier",
      statement: "A man can row a boat at 9 km/h in still water. If it takes him twice as long to row upstream as to row downstream the same distance, find the speed of the stream.",
      difficulty: "Easy",
      bestMethod: "Since t_up / t_down = k = 2: u / v = (k + 1)/(k - 1) = (2 + 1)/(2 - 1) = 3/1. Since u = 9 km/h: v = 9 / 3 = 3 km/h.",
      stepByStepSolution: [
        "1. Time ratio upstream : downstream = 2 : 1 ⇒ Speed ratio D : U = 2 : 1.",
        "2. u / v = (D + U) / (D - U) = (2 + 1) / (2 - 1) = 3 / 1.",
        "3. Boat speed in still water u = 9 km/h.",
        "4. Stream speed v = 9 / 3 = 3 km/h."
      ],
      finalAnswer: "3 km/h",
      speedTip: "u/v = (2+1)/(2-1) = 3/1 ⇒ v = 9/3 = 3 km/h in 3 seconds."
    },
    catLevelExample: {
      id: "bs-ex-cat",
      title: "CAT Actual Style: River Drift and Two Boats Meeting",
      statement: "Two boats A and B start simultaneously towards each other from two ports X and Y separated by 120 km on a river. Boat A travels downstream with still water speed 28 km/h and Boat B travels upstream with still water speed 32 km/h. If the river flows at 4 km/h, after how many hours will they meet?",
      difficulty: "CAT Actual",
      source: "CAT 2022 Slot 1",
      bestMethod: "Relative speed between one downstream boat and one upstream boat on the same river completely cancels the river current!",
      stepByStepSolution: [
        "1. Speed of Boat A (Downstream) = u_A + v = 28 + 4 = 32 km/h.",
        "2. Speed of Boat B (Upstream) = u_B - v = 32 - 4 = 28 km/h.",
        "3. Relative Speed = Speed_A + Speed_B = (28 + 4) + (32 - 4) = 28 + 32 = 60 km/h.",
        "4. Time to meet = Total Distance / Relative Speed = 120 km / 60 km/h = 2 hours."
      ],
      finalAnswer: "2 hours",
      speedTip: "River current (+v and -v) ALWAYS cancels out when two boats move towards each other on the same river: S_rel = u_A + u_B!"
    },
    commonTrap: {
      title: "Adding Stream Speed to Relative Speed",
      description: "Aspirants mistakenly add or subtract river stream speed when computing relative speed of two boats on the same river.",
      mistakeExample: "Writing Relative Speed = (28 + 4) + (32 + 4) = 68.",
      howToAvoid: "One is downstream (+v) and other is upstream (-v), so stream speed 'v' always sums to zero."
    },
    examTakeaway: "When two boats move towards each other on a river, stream speed cancels out completely: S_rel = u_A + u_B.",
    tags: ["Boats & Streams", "Upstream", "Downstream", "River Drift", "P1"]
  },

  // =========================================================================
  // 10. ARITHMETIC — TRAINS & PLATFORM CROSSING
  // =========================================================================
  {
    id: "trains-effective-lengths-crossing",
    slug: "trains-effective-lengths-crossing",
    title: "Trains: Point Objects, Platforms & Relative Crossing",
    topicCategory: "arithmetic",
    subtopicId: "trains",
    subtopicName: "Trains",
    priority: "P1",
    frequencyScore: 4,
    avgQuestionsPerCAT: "1 Question per slot",
    simplifiedExplanation:
      "A train is an object of finite physical length. Crossing a point object (pole, standing man) requires covering distance equal to its own length (L_train). Crossing an extended object (platform, bridge, second train) requires covering distance equal to (L_train + L_platform). Always convert speed units: km/h × (5/18) = m/s.",
    keyFormulas: [
      {
        id: "tr-1",
        name: "Unit Conversion Factor",
        latex: "1 \\text{ km/h} = \\frac{5}{18} \\text{ m/s}, \\quad 1 \\text{ m/s} = \\frac{18}{5} \\text{ km/h}",
        explanation: "Essential conversion: 36 km/h = 10 m/s, 54 km/h = 15 m/s, 72 km/h = 20 m/s, 90 km/h = 25 m/s.",
        catUtility: "Must Know"
      },
      {
        id: "tr-2",
        name: "Time to Cross Extended Object",
        latex: "T_{\\text{cross}} = \\frac{L_{\\text{train}} + L_{\\text{object}}}{S_{\\text{relative}}}",
        explanation: "For stationary platform, S_relative = S_train. For moving second train, use S1 ± S2.",
        catUtility: "Must Know"
      }
    ],
    recognitionPattern:
      "Look for lengths given in meters and speeds in km/h, trains passing a man on a bicycle, or two trains crossing each other in same/opposite directions.",
    bestApproach:
      "Convert all speeds to m/s immediately. Set Total Distance = L₁ + L₂. Apply Distance = Relative Speed × Time.",
    shortcut: {
      name: "Train Length from Two Platform Passings",
      description: "If a train passes platform of length L1 in t1 sec and platform of length L2 in t2 sec.",
      rule: "S_{\\text{train}} = \\frac{L_2 - L_1}{t_2 - t_1}",
      speedMultiplier: "Instant speed derivation",
      condition: "Same train at constant speed crossing two distinct platform lengths."
    },
    simpleExample: {
      id: "tr-ex-1",
      title: "Train Crossing a Platform and a Pole",
      statement: "A train running at constant speed crosses a pole in 9 seconds and a 180-meter long platform in 15 seconds. Find the length and speed of the train.",
      difficulty: "Easy",
      bestMethod: "In the extra (15 - 9 = 6) seconds, the train covers the platform length (180 m). Speed = 180 / 6 = 30 m/s (108 km/h). Length of train = Speed × Pole Time = 30 × 9 = 270 meters.",
      stepByStepSolution: [
        "1. Time to cross pole (only train length L) = 9s.",
        "2. Time to cross platform (L + 180) = 15s.",
        "3. Time taken to cover 180m platform = 15 - 9 = 6s.",
        "4. Speed of train = 180 / 6 = 30 m/s = 30 × (18/5) = 108 km/h.",
        "5. Length of train = 30 m/s × 9s = 270 meters."
      ],
      finalAnswer: "Length = 270 m, Speed = 108 km/h (30 m/s)",
      speedTip: "Speed = ΔDistance / ΔTime = 180 / 6 = 30 m/s. Length = 30 × 9 = 270 m in 5 seconds."
    },
    catLevelExample: {
      id: "tr-ex-cat",
      title: "CAT Actual Style: Man Sitting Inside a Moving Train Crossing Another Train",
      statement: "Train A of length 150m is moving at 72 km/h. Train B of length 250m is moving at 54 km/h in the opposite direction. Find the time taken by a passenger sitting in Train A to completely cross Train B.",
      difficulty: "CAT Actual",
      source: "CAT 2021 Slot 2",
      bestMethod: "For a passenger sitting in Train A, the passenger is a point object. Distance to cover is ONLY the length of Train B (250m), NOT the sum of both trains!",
      stepByStepSolution: [
        "1. Relative Speed (Opposite direction) = 72 + 54 = 126 km/h.",
        "2. Convert to m/s: 126 × (5 / 18) = 7 × 5 = 35 m/s.",
        "3. Distance to cross for the PASSENGER = Length of Train B only = 250 meters.",
        "4. Time taken = 250 / 35 = 50 / 7 seconds ≈ 7.14 seconds."
      ],
      finalAnswer: "50/7 seconds (7 1/7 sec)",
      speedTip: "Passenger in Train A is a point object: Distance is ONLY Length of Train B (250m), do NOT add Train A's length!"
    },
    commonTrap: {
      title: "Adding Both Train Lengths for a Passenger",
      description: "When the question asks for time taken by a 'passenger in train A' to cross train B, adding (L_A + L_B) = 400m is wrong.",
      mistakeExample: "Using 400 / 35 = 11.4s instead of 250 / 35 = 7.14s.",
      howToAvoid: "A passenger is a point object. Distance = Length of the OTHER train being observed."
    },
    examTakeaway: "A passenger inside a train is a point object (Distance = Length of opposite train only); Speed = ΔL / Δt across two platforms.",
    tags: ["Trains", "Platform Crossing", "Relative Speed", "Point Object", "P1"]
  },

  // =========================================================================
  // 11. ARITHMETIC — SIMPLE & COMPOUND INTEREST
  // =========================================================================
  {
    id: "interest-si-ci-installments",
    slug: "interest-si-ci-installments",
    title: "Simple & Compound Interest, CI-SI Delta & Installments",
    topicCategory: "arithmetic",
    subtopicId: "simple-and-compound-interest",
    subtopicName: "Interest",
    priority: "P1",
    frequencyScore: 4,
    avgQuestionsPerCAT: "1 Question (Often mixed with AP/GP)",
    simplifiedExplanation:
      "Simple Interest (SI) grows linearly in an Arithmetic Progression (SI = P·R·T / 100). Compound Interest (CI) grows exponentially in a Geometric Progression (Amount = P(1 + R/100)^T). The difference between CI and SI for 2 years is P(R/100)², and for 3 years is P(R/100)² · (3 + R/100). For equal annual installments under CI, Principal = Installment / (1 + r) + Installment / (1 + r)² + ...",
    keyFormulas: [
      {
        id: "int-1",
        name: "Difference between CI and SI (2 & 3 Years)",
        latex: "\\Delta_2 = P \\left(\\frac{R}{100}\\right)^2, \\quad \\Delta_3 = P \\left(\\frac{R}{100}\\right)^2 \\left(3 + \\frac{R}{100}\\right)",
        explanation: "Notice that Δ3 / Δ2 = 3 + R/100, which gives Rate R instantly.",
        catUtility: "Must Know"
      },
      {
        id: "int-2",
        name: "CI Equal Annual Installment Formula",
        latex: "P = \\frac{x}{1 + \\frac{R}{100}} + \\frac{x}{\\left(1 + \\frac{R}{100}\\right)^2} + \\dots + \\frac{x}{\\left(1 + \\frac{R}{100}\\right)^n}",
        explanation: "P = Loan amount borrowed, x = Equal annual installment amount.",
        catUtility: "Must Know"
      }
    ],
    recognitionPattern:
      "Look for 'difference between CI and SI for 2 or 3 years', 'sum doubles in 4 years at CI', or 'loan repaid in 2 equal annual installments'.",
    bestApproach:
      "Use Compounding Multipliers (1 + R/100). For CI difference problems, divide Δ3 by Δ2 to isolate (3 + R/100).",
    shortcut: {
      name: "Rule of 72 for Doubling Time",
      description: "Quick mental estimate for money to double under annual compound interest.",
      rule: "T_{\\text{double}} \\approx \\frac{72}{R}",
      speedMultiplier: "Instant estimation",
      condition: "Standard annual compounding rate."
    },
    simpleExample: {
      id: "int-ex-1",
      title: "2-Year CI vs SI Difference",
      statement: "The difference between compound interest and simple interest on a certain sum of money for 2 years at 10% per annum is ₹ 65. Find the principal sum.",
      difficulty: "Easy",
      bestMethod: "Δ2 = P(R/100)² ⇒ 65 = P(10/100)² = P(1/100) ⇒ P = 65 × 100 = ₹ 6,500.",
      stepByStepSolution: [
        "1. Rate R = 10%, Time T = 2 years, Difference Δ = ₹ 65.",
        "2. Formula: Δ = P × (R / 100)².",
        "3. 65 = P × (10 / 100)² = P × (1 / 100).",
        "4. Principal P = 65 × 100 = ₹ 6,500."
      ],
      finalAnswer: "₹ 6,500",
      speedTip: "10% for 2 yrs: SI = 20%, CI = 21%. Difference = 1% = ₹65 ⇒ 100% = ₹6,500 in 2 seconds."
    },
    catLevelExample: {
      id: "int-ex-cat",
      title: "CAT Actual Style: Ratio of 3-Year to 2-Year CI-SI Delta",
      statement: "The difference between the compound interest and simple interest on a sum of money for 3 years is ₹ 1,550, and for 2 years is ₹ 500 at the same rate of interest. Find the rate of interest and the principal sum.",
      difficulty: "CAT Actual",
      source: "CAT 2020 Slot 1",
      bestMethod: "Ratio Δ3 / Δ2 = (3 + R/100).",
      stepByStepSolution: [
        "1. Δ3 = ₹ 1,550 and Δ2 = ₹ 500.",
        "2. Divide: Δ3 / Δ2 = [P(R/100)² (3 + R/100)] / [P(R/100)²] = 3 + R/100.",
        "3. 1550 / 500 = 3 + R/100 ⇒ 3.1 = 3 + R/100 ⇒ R/100 = 0.1 ⇒ R = 10%.",
        "4. Find Principal P using Δ2: 500 = P × (10/100)² = P / 100 ⇒ P = ₹ 50,000."
      ],
      finalAnswer: "Rate = 10% p.a., Principal = ₹ 50,000",
      speedTip: "Δ3/Δ2 = 1550/500 = 3.1 = 3 + 0.10 ⇒ Rate is 10% immediately!"
    },
    commonTrap: {
      title: "Confusing Half-Yearly Compounding Rate",
      description: "When interest is compounded half-yearly, Rate becomes R/2 and Time period becomes 2T.",
      mistakeExample: "Using annual rate R with 2T periods without halving R.",
      howToAvoid: "Always replace R → R/2 and T → 2T for semi-annual compounding."
    },
    examTakeaway: "Δ3 / Δ2 = 3 + R/100 gives interest rate instantly; under CI, equal installments discount by (1 + R/100)^t.",
    tags: ["Interest", "CI vs SI", "Installments", "Rule of 72", "P1"]
  },

  // =========================================================================
  // 12. ARITHMETIC — AGES & LINEAR INVARIANCE
  // =========================================================================
  {
    id: "ages-time-shift-invariance",
    slug: "ages-time-shift-invariance",
    title: "Ages: Time-Shift Invariance & Ratio Equalization",
    topicCategory: "arithmetic",
    subtopicId: "ages",
    subtopicName: "Ages",
    priority: "P1",
    frequencyScore: 4,
    avgQuestionsPerCAT: "0-1 Question (Usually quick scorer)",
    simplifiedExplanation:
      "The single golden principle of age problems is: The age difference between any two people remains strictly CONSTANT over time. If the ratio of ages changes from a:b to c:d after 'k' years, the difference between ratio units (b - a) and (d - c) must be made equal before cross-multiplying.",
    keyFormulas: [
      {
        id: "age-1",
        name: "Age Difference Invariance",
        latex: "A_{\\text{present}} - B_{\\text{present}} = A_{\\text{future}} - B_{\\text{future}} = \\text{Constant}",
        explanation: "Age gap never changes regardless of how many years elapse.",
        catUtility: "Must Know"
      },
      {
        id: "age-2",
        name: "Ratio Difference Equalization",
        latex: "\\text{Multiply Ratio 1 by } (c - d) \\text{ and Ratio 2 by } (a - b) \\text{ to equalize unit gap}",
        explanation: "Standardizes units so 1 ratio unit corresponds to exact integer years.",
        catUtility: "Speed Booster"
      }
    ],
    recognitionPattern:
      "Look for 'ratio of ages of father and son was 3:1 five years ago and will be 2:1 in five years'.",
    bestApproach:
      "Equalize the vertical unit difference in ratios so that 1 unit = ΔYears directly.",
    shortcut: {
      name: "Cross-Multiplication Age Rule",
      description: "For ratios a:b and c:d separated by T years.",
      rule: "\\text{1 Ratio Unit} = \\frac{T \\times |c - d|}{|a d - b c|}",
      speedMultiplier: "Instant mental calculation (5 seconds)",
      condition: "Both persons age by the same number of years T."
    },
    simpleExample: {
      id: "age-ex-1",
      title: "Equalizing Age Gaps Across Time",
      statement: "The ratio of present ages of A and B is 4 : 5. After 6 years, the ratio of their ages will become 5 : 6. What is the present age of A?",
      difficulty: "Easy",
      bestMethod: "Present Ratio = 4 : 5 (Diff = 1 unit). Future Ratio = 5 : 6 (Diff = 1 unit). Notice A increases from 4 to 5 (+1 unit) and B increases from 5 to 6 (+1 unit). Thus 1 unit = 6 years. Present age of A = 4 units = 4 × 6 = 24 years.",
      stepByStepSolution: [
        "1. Ratio 1 (Present) = 4 : 5.",
        "2. Ratio 2 (+6 Years) = 5 : 6.",
        "3. Difference in units for both A and B = 5 - 4 = 1 unit.",
        "4. Time elapsed = 6 years ⇒ 1 unit = 6 years.",
        "5. Present age of A = 4 × 6 = 24 years. Present age of B = 5 × 6 = 30 years."
      ],
      finalAnswer: "24 years",
      speedTip: "Gap 1 unit = 6 years directly ⇒ Age of A = 4 × 6 = 24 years in 2 seconds."
    },
    catLevelExample: {
      id: "age-ex-cat",
      title: "CAT Actual Style: Non-Aligned Ratio Difference Equalization",
      statement: "Ten years ago, the ratio of the ages of a father and his son was 7 : 2. Ten years hence, the ratio of their ages will be 5 : 3. What is the present age of the father?",
      difficulty: "CAT Actual",
      source: "CAT 2019 Slot 2",
      bestMethod: "Ratio 1 difference = 7 - 2 = 5 units. Ratio 2 difference = 5 - 3 = 2 units. Equalize gaps by multiplying Ratio 1 by 2 and Ratio 2 by 5.",
      stepByStepSolution: [
        "1. Ratio 1 (-10 yrs) = 7 : 2 (Gap = 5 units). Multiply by 2 → 14 : 4 (Gap = 10 units).",
        "2. Ratio 2 (+10 yrs) = 5 : 3 (Gap = 2 units). Multiply by 5 → 25 : 15 (Gap = 10 units).",
        "3. Total time elapsed from (-10 yrs) to (+10 yrs) = 10 + 10 = 20 years.",
        "4. Unit change for Father: 25 - 14 = 11 units. Unit change for Son: 15 - 4 = 11 units.",
        "5. 11 units = 20 years ⇒ 1 unit = 20 / 11 years.",
        "6. Father's age 10 years ago = 14 units = 14 × (20 / 11) = 280 / 11 = 25.45 years.",
        "7. Present age = 25.45 + 10 = 35.45 years."
      ],
      finalAnswer: "35 5/11 years (~35.45 years)",
      speedTip: "Always equalize the unit difference between both persons before computing elapsed years!"
    },
    commonTrap: {
      title: "Direct Unit Subtraction without Equalizing Gaps",
      description: "Subtracting (5 - 7) and (3 - 2) directly when the gap between father and son in the two ratios is not equalized.",
      mistakeExample: "Claiming 1 unit = 20 years without multiplying ratios by cross-gap.",
      howToAvoid: "Ensure (Father - Son) unit difference is identical in both ratio representations first."
    },
    examTakeaway: "Age difference is invariant over time; multiply ratios by opposing unit gaps to equalize scaling.",
    tags: ["Ages", "Ratio Equalization", "Invariance", "Linear Equations", "P1"]
  },

  // =========================================================================
  // ALGEBRA CONCEPTS
  // =========================================================================
  {
    id: "algebra-quadratic-roots-vieta",
    slug: "algebra-quadratic-roots-vieta",
    title: "Quadratic Equations, Vieta's Relations & Nature of Roots",
    topicCategory: "algebra",
    subtopicId: "linear-quadratic-equations",
    subtopicName: "Linear & Quadratic Equations",
    priority: "P1",
    frequencyScore: 5,
    avgQuestionsPerCAT: "2 Questions per slot",
    simplifiedExplanation:
      "For any quadratic ax² + bx + c = 0, the discriminant D = b² - 4ac determines root character (real, equal, imaginary, rational). Vieta's formulas give the sum of roots (-b/a) and product of roots (c/a). CAT tests symmetric expressions like α³ + β³, integral roots, or sign of roots based on coefficients.",
    keyFormulas: [
      {
        id: "quad-1",
        name: "Vieta's Relations",
        latex: "\\alpha + \\beta = -\\frac{b}{a}, \\quad \\alpha \\cdot \\beta = \\frac{c}{a}",
        explanation: "Relates coefficients of a polynomial to sums and products of its roots.",
        catUtility: "Must Know"
      },
      {
        id: "quad-2",
        name: "Discriminant Character Table",
        latex: "D = b^2 - 4ac \\begin{cases} > 0 & \\text{Two distinct real roots} \\\\ = 0 & \\text{Real & equal roots} \\\\ < 0 & \\text{Complex conjugate roots} \\end{cases}",
        explanation: "Essential for determining integer and real root boundary conditions.",
        catUtility: "Must Know"
      }
    ],
    recognitionPattern:
      "Look for questions asking for 'sum of squares of roots', 'integral values of k for which roots are integers', or 'common root between two quadratics'.",
    bestApproach:
      "Express everything in terms of (α + β) and (αβ). If looking for integer solutions, enforce divisibility on coefficients.",
    simpleExample: {
      id: "quad-ex-1",
      title: "Symmetric Root Calculation",
      statement: "If α and β are the roots of x² - 7x + 10 = 0, find the value of (α/β + β/α).",
      difficulty: "Easy",
      bestMethod: "(α² + β²) / (αβ) = [(α + β)² - 2αβ] / (αβ) = (49 - 20)/10 = 2.9.",
      stepByStepSolution: [
        "1. α + β = 7, αβ = 10.",
        "2. Expression = (α² + β²) / (αβ) = [(α + β)² - 2αβ] / 10 = (49 - 20) / 10 = 2.9."
      ],
      finalAnswer: "2.9",
      speedTip: "Never solve for roots individually; plug Vieta's sums directly."
    },
    catLevelExample: {
      id: "quad-ex-cat",
      title: "CAT Actual Style: Number of Integer Roots",
      statement: "For how many integer values of 'k' does x² - (k - 2)x + (k² - 3k + 5) = 0 have real roots?",
      difficulty: "CAT Actual",
      source: "CAT 2022 Slot 3",
      bestMethod: "Enforce Discriminant D ≥ 0.",
      stepByStepSolution: [
        "1. D = [-(k - 2)]² - 4(1)(k² - 3k + 5) ≥ 0.",
        "2. (k² - 4k + 4) - (4k² - 12k + 20) ≥ 0 ⇒ 3k² - 8k + 16 ≤ 0.",
        "3. Check discriminant of this inequality: (-8)² - 4(3)(16) = -128 < 0.",
        "4. Since leading coefficient 3 > 0 and D < 0, 3k² - 8k + 16 is strictly > 0 for all real k.",
        "5. No real integer k satisfies the inequality."
      ],
      finalAnswer: "0 (Zero values of k)",
      speedTip: "If ax² + bx + c ≤ 0 has a > 0 and D < 0, solution set is immediately null!"
    },
    commonTrap: {
      title: "Real vs Real & Distinct Roots",
      description: "Using D > 0 when question says 'real roots' misses the equal roots case D = 0.",
      mistakeExample: "Excluding D = 0 endpoint values.",
      howToAvoid: "Real → D ≥ 0. Distinct Real → D > 0."
    },
    examTakeaway: "Never solve for individual roots when symmetric combinations (α+β, αβ) or discriminant inequalities suffice.",
    tags: ["Algebra", "Quadratic Equations", "Vieta's Formulas", "Roots", "P1"]
  },

  // =========================================================================
  // GEOMETRY CONCEPTS
  // =========================================================================
  {
    id: "geometry-triangles-similarity-areas",
    slug: "geometry-triangles-similarity-areas",
    title: "Triangles: Similarity, Cevians & Area Ratios",
    topicCategory: "geometry",
    subtopicId: "triangles-and-properties",
    subtopicName: "Triangles",
    priority: "P2",
    frequencyScore: 5,
    avgQuestionsPerCAT: "2-3 Questions per slot",
    simplifiedExplanation:
      "Triangle similarity (AAA) is the highest-yield tool in CAT Geometry. When side ratio is k = a₁/a₂, areas are in ratio k². For cevians, triangles sharing the same height have areas proportional to base lengths.",
    keyFormulas: [
      {
        id: "geo-1",
        name: "Area Ratio of Similar Triangles",
        latex: "\\frac{\\text{Area}(\\Delta_1)}{\\text{Area}(\\Delta_2)} = \\left(\\frac{s_1}{s_2}\\right)^2",
        explanation: "Area scales with the square of any linear 1D dimension.",
        catUtility: "Must Know"
      },
      {
        id: "geo-2",
        name: "Apollonius' Theorem",
        latex: "AB^2 + AC^2 = 2(AD^2 + BD^2)",
        explanation: "Where AD is median to BC.",
        catUtility: "Speed Booster"
      }
    ],
    recognitionPattern:
      "Look for parallel lines cut across a triangle, intersecting cevians dividing areas, or segment ratios.",
    bestApproach:
      "Look for shared angles or parallel lines for similarity; use Mass Point Geometry for intersecting cevians.",
    simpleExample: {
      id: "geo-ex-1",
      title: "Angle Bisector Ratio",
      statement: "In ΔABC, AB = 8, AC = 12, BC = 10. Internal bisector AD meets BC at D. Find BD.",
      difficulty: "Easy",
      bestMethod: "BD/DC = 8/12 = 2/3 ⇒ BD = 10 × (2/5) = 4 cm.",
      stepByStepSolution: [
        "1. BD / DC = AB / AC = 8 / 12 = 2 / 3.",
        "2. BD = (2/5) × 10 = 4 cm."
      ],
      finalAnswer: "4 cm",
      speedTip: "Direct split: 10 × (8/20) = 4 cm."
    },
    catLevelExample: {
      id: "geo-ex-cat",
      title: "CAT Actual Style: Mass Point Cevian Area",
      statement: "In ΔABC, BD:DC = 2:3, AE:ED = 1:2 on AD. Line CE extended meets AB at F. Area(ABC) = 60 cm². Find Area(ΔAEF).",
      difficulty: "CAT Actual",
      source: "CAT 2022 Slot 1",
      bestMethod: "Mass points: Mass(B)=3, Mass(C)=2, Mass(D)=5. Mass(A)=10. Mass(E)=15. FE:EC = 2:13.",
      stepByStepSolution: [
        "1. Area(ADC) = (3/5) × 60 = 36 cm².",
        "2. Area(AEC) = (1/3) × 36 = 12 cm².",
        "3. FE:EC = 2:13 ⇒ Area(AEF) = (2/13) × 12 = 24/13 cm² ≈ 1.85 cm²."
      ],
      finalAnswer: "24/13 cm² (~1.85 cm²)",
      speedTip: "Mass Point Geometry solves cevian intersection areas in 30 seconds."
    },
    commonTrap: {
      title: "Linear vs Area Ratio",
      description: "Assuming area ratio equals linear side ratio instead of (side ratio)².",
      mistakeExample: "Writing 1:2 area ratio when sides are 1:2.",
      howToAvoid: "1D = k, 2D Area = k², 3D Volume = k³."
    },
    examTakeaway: "Use Mass Point Geometry for cevian intersections; area scales with side squared.",
    tags: ["Geometry", "Triangles", "Similarity", "Mass Points", "P2"]
  },

  // =========================================================================
  // NUMBER SYSTEMS CONCEPTS
  // =========================================================================
  {
    id: "number-systems-factors-remainders",
    slug: "number-systems-factors-remainders",
    title: "Factors, Totient & Modular Remainder Theorems",
    topicCategory: "number-systems",
    subtopicId: "factors-and-multiples",
    subtopicName: "Factors & Multiples",
    priority: "P2",
    frequencyScore: 4,
    avgQuestionsPerCAT: "1-2 Questions per slot",
    simplifiedExplanation:
      "For N = p₁^a · p₂^b, total factors = (a+1)(b+1). Euler's Totient function φ(N) = N(1 - 1/p₁)(1 - 1/p₂) counts coprimes ≤ N. By Euler's Theorem, a^φ(m) ≡ 1 (mod m) when gcd(a,m)=1.",
    keyFormulas: [
      {
        id: "ns-1",
        name: "Factor Count & Euler Totient",
        latex: "\\text{Factors} = (a+1)(b+1), \\quad \\phi(N) = N \\prod \\left(1 - \\frac{1}{p_i}\\right)",
        explanation: "Prime factorize N first.",
        catUtility: "Must Know"
      }
    ],
    recognitionPattern:
      "Look for high power remainders, number of factors with divisibility constraints, or coprime factor pairs.",
    bestApproach:
      "Prime factorize N first; reduce power exponents modulo φ(Divisor).",
    simpleExample: {
      id: "ns-ex-1",
      title: "Constrained Factors Count",
      statement: "How many factors of 720 are multiples of 6?",
      difficulty: "Easy",
      bestMethod: "720 = 6 × (2³ × 3¹ × 5¹). Factors = (3+1)(1+1)(1+1) = 16.",
      stepByStepSolution: [
        "1. 720 = 2⁴ × 3² × 5¹ = 6 × [2³ × 3¹ × 5¹].",
        "2. Total factors of bracket = 4 × 2 × 2 = 16."
      ],
      finalAnswer: "16 factors",
      speedTip: "Factor out the constraint and count factors of the quotient."
    },
    catLevelExample: {
      id: "ns-ex-cat",
      title: "CAT Actual Style: Power Remainder with Composite Modulo",
      statement: "Find the remainder when 3²⁰²⁴ is divided by 100.",
      difficulty: "CAT Actual",
      source: "CAT 2020 Slot 1",
      bestMethod: "φ(100) = 40. 2024 mod 40 = 24. 3²⁴ = (3⁴)⁶ = 81⁶ ≡ 81 (mod 100).",
      stepByStepSolution: [
        "1. φ(100) = 100 × (1/2) × (4/5) = 40.",
        "2. 2024 = 40 × 50 + 24 ⇒ 3²⁰²⁴ ≡ 3²⁴ (mod 100).",
        "3. (80 + 1)⁶ ≡ 480 + 1 ≡ 81 (mod 100)."
      ],
      finalAnswer: "81",
      speedTip: "Cycle of 3 mod 100 repeats every 20 powers. 3²⁰²⁴ ≡ 3⁴ = 81."
    },
    commonTrap: {
      title: "Fermat on Composite Divisors",
      description: "Using (m - 1) instead of Euler's φ(m) when m is composite.",
      mistakeExample: "Using 14 instead of φ(15) = 8.",
      howToAvoid: "Composite divisor → Always use Euler's Totient φ(m)."
    },
    examTakeaway: "Prime factorize first; reduce exponents using φ(m) for composite divisors and (p-1) for prime divisors.",
    tags: ["Number Systems", "Remainders", "Euler Totient", "Factors", "P2"]
  },

  // =========================================================================
  // MODERN MATH CONCEPTS
  // =========================================================================
  {
    id: "modern-math-pnc-stars-bars",
    slug: "modern-math-pnc-stars-bars",
    title: "Permutations, Combinations & Beggar's Method (Stars & Bars)",
    topicCategory: "modern-math",
    subtopicId: "permutations-and-combinations",
    subtopicName: "Permutations & Combinations (P&C)",
    priority: "P3",
    frequencyScore: 4,
    avgQuestionsPerCAT: "1-2 Questions per slot",
    simplifiedExplanation:
      "Beggar's Method distributes 'n' identical items among 'r' distinct recipients. Non-negative solutions (x_i ≥ 0): (n+r-1)C(r-1). Positive solutions (x_i ≥ 1): (n-1)C(r-1). Derangements D(n) gives ways where no item goes to its assigned place.",
    keyFormulas: [
      {
        id: "pnc-1",
        name: "Stars & Bars",
        latex: "\\text{Non-negative: } \\binom{n + r - 1}{r - 1}, \\quad \\text{Positive: } \\binom{n - 1}{r - 1}",
        explanation: "Distributing n identical items among r distinct people.",
        catUtility: "Must Know"
      },
      {
        id: "pnc-2",
        name: "Derangements D(n)",
        latex: "D(1)=0, \\; D(2)=1, \\; D(3)=2, \\; D(4)=9, \\; D(5)=44, \\; D(6)=265",
        explanation: "Precomputed derangement constants.",
        catUtility: "Speed Booster"
      }
    ],
    recognitionPattern:
      "Look for identical item distribution, non-negative integer equations x + y + z = n, or no person getting their assigned seat.",
    bestApproach:
      "Subtract mandatory minimum items first to convert to standard non-negative (n'+r-1)C(r-1) form.",
    simpleExample: {
      id: "pnc-ex-1",
      title: "Non-Negative Integer Distribution",
      statement: "Find the number of non-negative integer solutions to x + y + z = 12.",
      difficulty: "Easy",
      bestMethod: "(12 + 3 - 1)C(3 - 1) = 14C2 = 91.",
      stepByStepSolution: [
        "1. n = 12, r = 3.",
        "2. (n + r - 1) C (r - 1) = 14 C 2 = 91."
      ],
      finalAnswer: "91 solutions",
      speedTip: "Direct formula 14C2 = 91 in 3 seconds."
    },
    catLevelExample: {
      id: "pnc-ex-cat",
      title: "CAT Actual Style: Constrained Stars & Bars with Inclusion-Exclusion",
      statement: "Find integral solutions to x + y + z = 20 with 1 ≤ x ≤ 6, 1 ≤ y ≤ 7, z ≥ 1.",
      difficulty: "CAT Actual",
      source: "CAT 2021 Slot 2",
      bestMethod: "Inclusion-Exclusion: Total - (x≥7) - (y≥8) + (Both).",
      stepByStepSolution: [
        "1. Baseline x'+y'+z' = 17.",
        "2. Total = 19C2 = 171.",
        "3. Bad x (x'≥6): 13C2 = 78.",
        "4. Bad y (y'≥7): 12C2 = 66.",
        "5. Both Bad: 6C2 = 15.",
        "6. Valid = 171 - (78 + 66) + 15 = 42."
      ],
      finalAnswer: "42 solutions",
      speedTip: "Use Inclusion-Exclusion for upper bounds in Stars & Bars."
    },
    commonTrap: {
      title: "Non-negative vs Positive Formula",
      description: "Using (n-1)C(r-1) when zero is permitted.",
      mistakeExample: "Using 11C2 instead of 14C2 when x,y,z ≥ 0.",
      howToAvoid: "Zero allowed → (n+r-1)C(r-1). All ≥ 1 → (n-1)C(r-1)."
    },
    examTakeaway: "Pre-allocate minimum constraints to convert problems into standard non-negative (n+r-1)C(r-1) form.",
    tags: ["Modern Math", "P&C", "Stars and Bars", "Derangements", "P3"]
  }
];
