import { ShortcutItem } from "@/types/quant";

export const SHORTCUTS_DATA: ShortcutItem[] = [
  {
    id: "sc-alligation-averages",
    title: "Alligation Cross for Weighted Averages",
    category: "arithmetic",
    priority: "P1",
    technique: "Speed Replacement for (n1*A1 + n2*A2)/(n1 + n2)",
    formulaOrRule: "\\frac{n_1}{n_2} = \\frac{A_2 - A_{\\text{avg}}}{A_{\\text{avg}} - A_1}",
    timeSaved: "45 seconds saved per problem",
    applicableWhen: "Two groups with distinct average marks/weights/concentrations merge to form a combined average.",
    workedDemo: {
      question: "In a class, the average weight of boys is 64 kg and that of girls is 52 kg. The average weight of the whole class is 60 kg. Find the ratio of boys to girls.",
      conventionalWay: "64B + 52G = 60(B + G) ⇒ 64B + 52G = 60B + 60G ⇒ 4B = 8G ⇒ B/G = 8/4 = 2/1.",
      shortcutWay: "Alligation Cross: Boys (64) and Girls (52) with Mean (60). Distance on right = |52 - 60| = 8. Distance on left = |64 - 60| = 4. Ratio Boys : Girls = 8 : 4 = 2 : 1 in 4 seconds.",
      timeDelta: "Conventional: 40s | Shortcut: 5s"
    },
    warningCondition: "Make sure all three values are of the exact same metric unit."
  },
  {
    id: "sc-base-ratio-triangles",
    title: "Mass Point Geometry for Cevian Intersections",
    category: "geometry",
    priority: "P2",
    technique: "Balancing Seesaw Physics on Triangles",
    formulaOrRule: "m_1 \\times d_1 = m_2 \\times d_2 \\quad \\text{at every cevian split}",
    timeSaved: "2.5 minutes saved",
    applicableWhen: "Multiple cevians intersect inside a triangle and area/segment ratios are requested.",
    workedDemo: {
      question: "In ΔABC, D is on BC with BD:DC = 1:3. E is on AD with AE:ED = 2:1. Line BE meets AC at F. Find AF:FC.",
      conventionalWay: "Apply Menelaus's Theorem twice or set up Cartesian coordinate matrix with 6 linear equations.",
      shortcutWay: "Place mass 3 at B and mass 1 at C → Mass at D = 4. On AD: Mass(A) × 2 = Mass(D) × 1 = 4 × 1 = 4 ⇒ Mass(A) = 2. On line AC: AF:FC = Mass(C) : Mass(A) = 1 : 2. Done in 15 seconds!",
      timeDelta: "Conventional: 180s | Shortcut: 15s"
    },
    warningCondition: "Keep vertices in equilibrium along every intersecting line."
  },
  {
    id: "sc-reciprocal-percentage-fractions",
    title: "Fraction-to-Percentage Reciprocal Chart",
    category: "arithmetic",
    priority: "P1",
    technique: "Mental Math 1/1 to 1/20 Equivalents",
    formulaOrRule: "\\frac{1}{7} = 14.28\\%, \\; \\frac{1}{8} = 12.5\\%, \\; \\frac{1}{9} = 11.11\\%, \\; \\frac{1}{11} = 9.09\\%, \\; \\frac{1}{13} = 7.69\\%, \\; \\frac{1}{14} = 7.14\\%, \\; \\frac{1}{16} = 6.25\\%, \\; \\frac{1}{17} = 5.88\\%, \\; \\frac{1}{19} = 5.26\\%",
    timeSaved: "30-60s on every Arithmetic & DI calculation",
    applicableWhen: "Calculating percentage increases, discounts, ratios, and compound growth factors.",
    workedDemo: {
      question: "Calculate 28.56% of 490.",
      conventionalWay: "490 × (28.56 / 100) = 490 × 0.2856 = 139.944 (needs scratchpad multiplication).",
      shortcutWay: "Recognize 28.56% = 2 × (14.28%) = 2 × (1/7) = 2/7. Compute (2/7) × 490 = 2 × 70 = 140 exactly in 2 seconds.",
      timeDelta: "Conventional: 35s | Shortcut: 2s"
    }
  },
  {
    id: "sc-power-cyclicity-mod-4",
    title: "Unit Digit 4-Step Cyclicity Rule",
    category: "number-systems",
    priority: "P2",
    technique: "Power modulo 4 with 0 mapped to 4",
    formulaOrRule: "\\text{Last Digit of } d^n = \\text{Last Digit of } d^{n \\bmod 4} \\quad (\\text{if } n \\bmod 4 = 0, \\text{ use } d^4)",
    timeSaved: "20 seconds saved",
    applicableWhen: "Finding the unit digit of any large power expression like 7³⁸⁹ + 3²⁴⁴.",
    workedDemo: {
      question: "Find the unit digit of 7³⁸⁹.",
      conventionalWay: "Write out powers: 7¹=7, 7²=9, 7³=3, 7⁴=1, 7⁵=7... divide 389 manually.",
      shortcutWay: "Take last two digits of exponent: 89 mod 4 = 1. Unit digit = 7¹ = 7.",
      timeDelta: "Conventional: 25s | Shortcut: 3s"
    },
    warningCondition: "When remainder is 0, DO NOT use power 0; use power 4 (e.g. 2⁴ = 6, 3⁴ = 1)."
  },
  {
    id: "sc-telescoping-fractions",
    title: "Telescoping Partial Fractions Cancellation",
    category: "algebra",
    priority: "P1",
    technique: "Difference Splitting 1 / [n(n+k)] = (1/k) * (1/n - 1/(n+k))",
    formulaOrRule: "\\sum_{n=1}^N \\frac{1}{n(n+1)} = 1 - \\frac{1}{N+1}",
    timeSaved: "60 seconds saved",
    applicableWhen: "Sum of rational sequences with product terms in denominator.",
    workedDemo: {
      question: "Evaluate 1/(1·2) + 1/(2·3) + 1/(3·4) + ... + 1/(99·100).",
      conventionalWay: "Attempting common denominators leads to failure.",
      shortcutWay: "(1 - 1/2) + (1/2 - 1/3) + ... + (1/99 - 1/100) = 1 - 1/100 = 99/100 = 0.99.",
      timeDelta: "Conventional: Impossible | Shortcut: 5s"
    }
  }
];
