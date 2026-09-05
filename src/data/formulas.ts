import { PriorityLevel, TopicCategory } from "@/types/quant";

export interface FormulaVaultEntry {
  id: string;
  category: TopicCategory;
  topic: string;
  priority: PriorityLevel;
  title: string;
  latex: string;
  plainText: string;
  explanation: string;
  variables: string[];
  catUtility: "Must Know" | "Speed Booster" | "Rare/Advanced";
  examTip: string;
  flashcardFront: string;
  flashcardBack: string;
  tags: string[];
}

export const FORMULA_VAULT_DATA: FormulaVaultEntry[] = [
  // ARITHMETIC
  {
    id: "f-succ-pct",
    category: "arithmetic",
    topic: "Percentages",
    priority: "P1",
    title: "Successive Percentage Change",
    latex: "\\text{Net \\% Change} = a + b + \\frac{a \\cdot b}{100}",
    plainText: "Net % Change = a + b + (a * b) / 100",
    explanation: "Calculates total percentage change after two successive percentage adjustments a% and b%. Use negative sign for percentage decrease.",
    variables: ["a = first percentage change (positive for increase, negative for decrease)", "b = second percentage change"],
    catUtility: "Must Know",
    examTip: "If a value increases by x% and then decreases by x%, the net change is ALWAYS a loss of -(x²/100)%.",
    flashcardFront: "Formula for Net % change after successive changes of +a% and +b%?",
    flashcardBack: "Net % = a + b + (ab / 100)",
    tags: ["Percentages", "Successive Change", "Discount", "P1"]
  },
  {
    id: "f-dishonest-dealer",
    category: "arithmetic",
    topic: "Profit, Loss & Discount",
    priority: "P1",
    title: "Dishonest Dealer Compound Multiplier",
    latex: "\\text{Overall MF} = \\left(1 + \\frac{\\text{Markup}\\%}{100}\\right) \\left(1 - \\frac{\\text{Discount}\\%}{100}\\right) \\left(\\frac{\\text{Weight Claimed}}{\\text{Weight Given}}\\right)",
    plainText: "Overall MF = (1 + Markup%) * (1 - Discount%) * (Weight Claimed / Weight Given)",
    explanation: "Combines pricing markup, customer discount, and physical weight cheating into a single multiplying factor.",
    variables: ["Weight Claimed = Nominal weight billed (e.g. 1000g)", "Weight Given = Actual goods handed over (e.g. 800g)"],
    catUtility: "Must Know",
    examTip: "If shopkeeper gives 800g instead of 1000g, weight multiplier is 1000/800 = 5/4 (25% profit on goods).",
    flashcardFront: "What is the profit multiplier when a shopkeeper sells 800g for the price of 1kg?",
    flashcardBack: "Multiplier = 1000 / 800 = 5/4 = 1.25 (25% Profit)",
    tags: ["Profit & Loss", "Dishonest Dealer", "Multipliers", "P1"]
  },
  {
    id: "f-boats-streams",
    category: "arithmetic",
    topic: "Boats & Streams",
    priority: "P1",
    title: "Boat & Stream Speed Decomposition",
    latex: "u = \\frac{D + U}{2}, \\quad v = \\frac{D - U}{2}, \\quad \\frac{u}{v} = \\frac{k + 1}{k - 1}",
    plainText: "u = (D + U)/2, v = (D - U)/2, u/v = (k + 1)/(k - 1) where t_up/t_down = k",
    explanation: "u = speed of boat in still water, v = speed of stream, D = Downstream speed (u+v), U = Upstream speed (u-v).",
    variables: ["D = Downstream (with flow)", "U = Upstream (against flow)", "k = Upstream time / Downstream time"],
    catUtility: "Must Know",
    examTip: "When two boats move towards each other on the same river, stream speed cancels out completely: S_rel = u1 + u2.",
    flashcardFront: "How to find boat speed u and stream speed v from Downstream D and Upstream U?",
    flashcardBack: "u = (D + U) / 2 and v = (D - U) / 2",
    tags: ["Boats & Streams", "Upstream", "Downstream", "P1"]
  },
  {
    id: "f-train-conversion",
    category: "arithmetic",
    topic: "Trains",
    priority: "P1",
    title: "Train Platform Crossing & Speed Conversion",
    latex: "T = \\frac{L_{\\text{train}} + L_{\\text{platform}}}{S_{\\text{train}}}, \\quad 1 \\text{ km/h} = \\frac{5}{18} \\text{ m/s}",
    plainText: "Time = (L_train + L_platform) / Speed, 1 km/h = 5/18 m/s",
    explanation: "Crossing a point object covers L_train; crossing an extended platform covers (L_train + L_platform).",
    variables: ["L_train = length of train in meters", "L_platform = length of platform in meters", "Speed in m/s"],
    catUtility: "Must Know",
    examTip: "A passenger inside a train is a point object: Distance to cross opposite train is ONLY the opposite train's length.",
    flashcardFront: "Distance covered when a train crosses a 200m platform vs a pole?",
    flashcardBack: "Platform = (L_train + 200m) | Pole = L_train only",
    tags: ["Trains", "Speed Conversion", "Platform Crossing", "P1"]
  },
  {
    id: "f-pipes-cisterns-leak",
    category: "arithmetic",
    topic: "Pipes & Cisterns",
    priority: "P1",
    title: "Pipes & Cisterns Net Rate & Leakage",
    latex: "\\text{Net Rate} = \\sum \\text{Inlet Rates} - \\sum \\text{Outlet Rates}, \\quad t_{\\text{leak}} = \\frac{a \\cdot b}{b - a}",
    plainText: "Net Rate = Inlets - Outlets | Leak alone time = (a * b) / (b - a)",
    explanation: "If inlet takes 'a' hrs alone and (inlet + leak) takes 'b' hrs, leak alone empties tank in ab/(b - a) hrs.",
    variables: ["a = filling time without leak", "b = filling time with leak"],
    catUtility: "Must Know",
    examTip: "In alternate inlet/outlet schedules, subtract the positive inlet rate from total capacity before counting cycles.",
    flashcardFront: "If pipe fills tank in a=8 hrs, and with leak in b=10 hrs, how fast does leak alone empty tank?",
    flashcardBack: "Time = (8 × 10) / (10 - 8) = 80 / 2 = 40 hours",
    tags: ["Pipes & Cisterns", "Leakage", "Negative Work", "P1"]
  },
  {
    id: "f-ages-cross",
    category: "arithmetic",
    topic: "Ages",
    priority: "P1",
    title: "Age Gap Time-Shift Invariance",
    latex: "A_{\\text{now}} - B_{\\text{now}} = A_{\\text{future}} - B_{\\text{future}} = \\text{Constant}",
    plainText: "Age Gap between two individuals is strictly constant over time",
    explanation: "Standardize ratio units by multiplying by the difference of the opposite ratio before cross-multiplying.",
    variables: ["A, B = ages of two persons across two time periods"],
    catUtility: "Must Know",
    examTip: "Ensure the unit difference (Person 1 - Person 2) is identical in both ratio states before equating unit change to elapsed years.",
    flashcardFront: "What fundamental property is used to solve all CAT age ratio problems?",
    flashcardBack: "The age gap (A - B) remains invariant over time.",
    tags: ["Ages", "Invariance", "Ratios", "P1"]
  },
  {
    id: "f-alligation",
    category: "arithmetic",
    topic: "Mixtures & Alligation",
    priority: "P1",
    title: "Alligation Cross Ratio Rule",
    latex: "\\frac{Q_{\\text{cheaper}}}{Q_{\\text{dearer}}} = \\frac{C_{\\text{dearer}} - C_{\\text{mean}}}{C_{\\text{mean}} - C_{\\text{cheaper}}}",
    plainText: "Q_cheaper / Q_dearer = (C_dearer - C_mean) / (C_mean - C_cheaper)",
    explanation: "Inverse relationship between quantities mixed and their concentration/price distances from the weighted mean.",
    variables: ["Q = Quantity", "C_cheaper = Lower concentration / cost", "C_dearer = Higher concentration / cost", "C_mean = Desired mixture concentration / cost"],
    catUtility: "Must Know",
    examTip: "All quantities on the alligation cross must be per unit of the same base (e.g. all per kg, all per litre, or all profit %).",
    flashcardFront: "How to find the ratio in which two ingredients of prices C₁ and C₂ are mixed to get mean price C_m?",
    flashcardBack: "Ratio = (C₂ - C_m) / (C_m - C₁)",
    tags: ["Alligation", "Mixtures", "Weighted Average", "P1"]
  },
  {
    id: "f-dilution-repeated",
    category: "arithmetic",
    topic: "Mixtures & Alligation",
    priority: "P1",
    title: "Repeated Replacement Dilution Formula",
    latex: "Q_{\\text{final}} = Q_{\\text{initial}} \\left(1 - \\frac{x}{V}\\right)^n",
    plainText: "Q_final = Q_initial * (1 - x / V)^n",
    explanation: "Quantity of original liquid remaining after drawing out 'x' litres from capacity 'V' and replacing with water 'n' successive times.",
    variables: ["Q_initial = Initial pure volume", "x = volume drawn each time", "V = total container volume", "n = number of operations"],
    catUtility: "Must Know",
    examTip: "Ratio of remaining liquid to total volume is simply (1 - x/V)^n.",
    flashcardFront: "Remaining pure liquid after drawing 'x' litres from total 'V' and replacing with water 'n' times?",
    flashcardBack: "Remaining = Initial * (1 - x / V)^n",
    tags: ["Dilution", "Mixtures", "Replacement", "P1"]
  },
  {
    id: "f-post-meet",
    category: "arithmetic",
    topic: "Time-Speed-Distance",
    priority: "P1",
    title: "Post-Meeting Speed and Time Formula",
    latex: "\\frac{S_1}{S_2} = \\sqrt{\\frac{t_2}{t_1}} \\quad \\text{and} \\quad t_{\\text{meet}} = \\sqrt{t_1 \\cdot t_2}",
    plainText: "S1 / S2 = sqrt(t2 / t1) and t_meet = sqrt(t1 * t2)",
    explanation: "When two bodies start simultaneously from opposite endpoints, meet en route, and take t₁ and t₂ to reach respective destinations.",
    variables: ["S1, S2 = speeds of travelers 1 and 2", "t1, t2 = time taken after crossing each other", "t_meet = time elapsed before meeting"],
    catUtility: "Speed Booster",
    examTip: "Saves 2-3 minutes of quadratic equations in CAT TSD problems.",
    flashcardFront: "Two travelers meet and take t₁ and t₂ to reach ends. What is S₁/S₂?",
    flashcardBack: "S₁ / S₂ = √(t₂ / t₁) and t_meeting = √(t₁ · t₂)",
    tags: ["TSD", "Meeting Points", "CAT Classic", "P1"]
  },
  {
    id: "f-ci-si-diff",
    category: "arithmetic",
    topic: "Simple & Compound Interest",
    priority: "P1",
    title: "Difference between CI and SI for 2 & 3 Years",
    latex: "\\Delta_2 = P \\left(\\frac{R}{100}\\right)^2, \\quad \\Delta_3 = P \\left(\\frac{R}{100}\\right)^2 \\left(3 + \\frac{R}{100}\\right)",
    plainText: "Diff_2 = P * (R/100)^2, Diff_3 = P * (R/100)^2 * (3 + R/100)",
    explanation: "Quick direct computation of compound interest vs simple interest difference without multi-step expansion.",
    variables: ["P = Principal", "R = Annual rate of interest (%)", "Δ = CI - SI difference"],
    catUtility: "Must Know",
    examTip: "Note that Δ₃ / Δ₂ = (3 + R/100), allowing instant retrieval of Rate R in CAT questions given both differences.",
    flashcardFront: "What is CI - SI difference for 2 years on Principal P at R%?",
    flashcardBack: "Δ₂ = P(R / 100)²",
    tags: ["Interest", "CI vs SI", "Arithmetic", "P1"]
  },

  // ALGEBRA
  {
    id: "f-vieta",
    category: "algebra",
    topic: "Linear & Quadratic Equations",
    priority: "P1",
    title: "Vieta's Relations (Quadratic & Cubic)",
    latex: "\\text{For } ax^2+bx+c=0: \\quad \\alpha+\\beta = -\\frac{b}{a}, \\; \\alpha\\beta = \\frac{c}{a}",
    plainText: "alpha + beta = -b/a, alpha * beta = c/a",
    explanation: "Fundamental connection between roots and coefficients for polynomials.",
    variables: ["a = coefficient of x²", "b = coefficient of x", "c = constant term"],
    catUtility: "Must Know",
    examTip: "For cubic ax³ + bx² + cx + d = 0: Σα = -b/a, Σαβ = c/a, αβγ = -d/a.",
    flashcardFront: "What are the sum and product of roots for ax² + bx + c = 0?",
    flashcardBack: "Sum = -b/a, Product = c/a",
    tags: ["Algebra", "Vieta", "Quadratics", "P1"]
  },
  {
    id: "f-am-gm",
    category: "algebra",
    topic: "Inequalities & Maxima Minima",
    priority: "P1",
    title: "AM ≥ GM ≥ HM Inequality",
    latex: "\\frac{a_1 + a_2 + \\dots + a_n}{n} \\ge \\sqrt[n]{a_1 a_2 \\dots a_n} \\ge \\frac{n}{\\frac{1}{a_1} + \\frac{1}{a_2} + \\dots + \\frac{1}{a_n}}",
    plainText: "AM >= GM >= HM for all positive real numbers",
    explanation: "Holds for all strictly positive real numbers. Equality holds if and only if a₁ = a₂ = ... = a_n.",
    variables: ["a_i > 0 (all terms must be positive reals)"],
    catUtility: "Must Know",
    examTip: "Use AM-GM whenever you need the minimum sum of positive terms with constant product, or maximum product with constant sum.",
    flashcardFront: "When does equality AM = GM hold?",
    flashcardBack: "If and only if all elements are equal (a₁ = a₂ = ... = a_n)",
    tags: ["Inequalities", "AM-GM", "Optimization", "P1"]
  },
  {
    id: "f-log-base-change",
    category: "algebra",
    topic: "Logarithms",
    priority: "P1",
    title: "Logarithm Base Change & Exponent Rules",
    latex: "\\log_b(a) = \\frac{\\log_k(a)}{\\log_k(b)}, \\quad \\log_{b^n}(a^m) = \\frac{m}{n} \\log_b(a), \\quad a^{\\log_b(c)} = c^{\\log_b(a)}",
    plainText: "log_b(a) = log_k(a)/log_k(b), log_{b^n}(a^m) = (m/n)*log_b(a), a^(log_b c) = c^(log_b a)",
    explanation: "Essential algebraic transformations for simplifying unfamiliar logarithmic equations.",
    variables: ["a, c > 0", "b, k > 0 and b, k ≠ 1"],
    catUtility: "Must Know",
    examTip: "Always enforce domain conditions (argument > 0, base > 0, base ≠ 1) BEFORE algebraic cancellations.",
    flashcardFront: "How to simplify log_{b^n}(a^m)?",
    flashcardBack: "(m / n) · log_b(a)",
    tags: ["Logarithms", "Base Change", "Algebra", "P1"]
  },
  {
    id: "f-infinite-gp",
    category: "algebra",
    topic: "Sequences & Series",
    priority: "P1",
    title: "Sum of Infinite Converging GP",
    latex: "S_\\infty = \\frac{a}{1 - r} \\quad \\text{valid only when } |r| < 1",
    plainText: "S_infinity = a / (1 - r) when |r| < 1",
    explanation: "Sum of infinitely many terms of a geometric progression with first term 'a' and common ratio 'r'.",
    variables: ["a = first term", "r = common ratio where -1 < r < 1"],
    catUtility: "Must Know",
    examTip: "Frequently tested in bouncing ball problems where distance = h + 2h(r + r² + ...) = h(1+r)/(1-r).",
    flashcardFront: "Sum of infinite GP with first term a and ratio |r| < 1?",
    flashcardBack: "S_∞ = a / (1 - r)",
    tags: ["Progressions", "GP", "Infinite Series", "P1"]
  },

  // GEOMETRY
  {
    id: "f-apollonius",
    category: "geometry",
    topic: "Triangles & Properties",
    priority: "P2",
    title: "Apollonius' Theorem (Median Length)",
    latex: "AB^2 + AC^2 = 2(AD^2 + BD^2) \\quad (\\text{where } AD \\text{ is median to } BC)",
    plainText: "AB^2 + AC^2 = 2 * (AD^2 + BD^2)",
    explanation: "Relates the sum of squares of two sides of a triangle to the median drawn to the third side.",
    variables: ["AB, AC = adjacent sides", "AD = median length", "BD = CD = half of base BC"],
    catUtility: "Must Know",
    examTip: "Sum of squares of all 3 medians = 3/4 × (Sum of squares of all 3 sides): m_a² + m_b² + m_c² = 3/4 (a² + b² + c²).",
    flashcardFront: "What is Apollonius' Theorem for median AD to side BC in ΔABC?",
    flashcardBack: "AB² + AC² = 2(AD² + BD²), where BD = BC/2",
    tags: ["Geometry", "Triangles", "Medians", "Apollonius", "P2"]
  },
  {
    id: "f-power-of-point",
    category: "geometry",
    topic: "Circles & Tangents",
    priority: "P2",
    title: "Intersecting Chords & Secant-Tangent Theorem",
    latex: "PA \\cdot PB = PC \\cdot PD = PT^2",
    plainText: "PA * PB = PC * PD = PT^2 (Power of a Point)",
    explanation: "For any line from point P intersecting circle at A & B, and another secant PCD, or tangent PT.",
    variables: ["P = external or internal point", "PA, PB = segments of first secant", "PT = length of tangent from P"],
    catUtility: "Must Know",
    examTip: "Holds whether point P is outside the circle or inside the circle (where chords intersect at P).",
    flashcardFront: "If secant PAB and tangent PT are drawn from point P to a circle, what is PT²?",
    flashcardBack: "PT² = PA · PB",
    tags: ["Geometry", "Circles", "Tangents", "Secants", "P2"]
  },
  {
    id: "f-shoelace",
    category: "geometry",
    topic: "Coordinate Geometry",
    priority: "P2",
    title: "Shoelace Formula for Polygon Area",
    latex: "\\text{Area} = \\frac{1}{2} |(x_1 y_2 + x_2 y_3 + \\dots + x_n y_1) - (y_1 x_2 + y_2 x_3 + \\dots + y_n x_1)|",
    plainText: "Area = 0.5 * |(x1*y2 + x2*y3 + ... + xn*y1) - (y1*x2 + y2*x3 + ... + yn*x1)|",
    explanation: "Calculates the area of any non-self-intersecting polygon given ordered vertex coordinates.",
    variables: ["(x_i, y_i) = coordinates of vertices in cyclic counterclockwise order"],
    catUtility: "Speed Booster",
    examTip: "Always list vertices in cyclic counter-clockwise order and repeat the first vertex at the bottom of column.",
    flashcardFront: "How to find area of triangle with vertices (x₁,y₁), (x₂,y₂), (x₃,y₃)?",
    flashcardBack: "Area = ½ |x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|",
    tags: ["Coordinate Geometry", "Shoelace", "Polygon Area", "P2"]
  },

  // NUMBER SYSTEMS
  {
    id: "f-euler-totient",
    category: "number-systems",
    topic: "Factors & Totient",
    priority: "P2",
    title: "Euler's Totient Function φ(N)",
    latex: "\\phi(N) = N \\prod_{p|N} \\left(1 - \\frac{1}{p}\\right)",
    plainText: "phi(N) = N * (1 - 1/p1) * (1 - 1/p2) * ...",
    explanation: "Counts positive integers up to N that are relatively prime to N.",
    variables: ["N = p₁^a · p₂^b · ... (prime factorization)", "p_i = distinct prime factors"],
    catUtility: "Must Know",
    examTip: "Euler's Theorem: a^φ(m) ≡ 1 (mod m) when gcd(a, m) = 1. Essential for huge exponent remainders.",
    flashcardFront: "Formula for Euler's Totient function φ(N)?",
    flashcardBack: "φ(N) = N · (1 - 1/p₁) · (1 - 1/p₂) · ... for distinct prime factors p_i",
    tags: ["Number Systems", "Euler Totient", "Remainders", "P2"]
  },
  {
    id: "f-legendre",
    category: "number-systems",
    topic: "Base Systems & Indices",
    priority: "P2",
    title: "Legendre's Formula (Highest Power of Prime in n!)",
    latex: "E_p(n!) = \\left\\lfloor \\frac{n}{p} \\right\\rfloor + \\left\\lfloor \\frac{n}{p^2} \\right\\rfloor + \\left\\lfloor \\frac{n}{p^3} \\right\\rfloor + \\dots",
    plainText: "E_p(n!) = [n/p] + [n/p^2] + [n/p^3] + ...",
    explanation: "Finds the exact exponent of prime 'p' dividing factorial n! without multiplying.",
    variables: ["n = factorial number", "p = prime divisor", "⌊ ⌋ = greatest integer floor function"],
    catUtility: "Must Know",
    examTip: "To find number of trailing zeros in n!, calculate highest power of 5 in n! using E₅(n!).",
    flashcardFront: "How to find number of trailing zeros in 100!?",
    flashcardBack: "E₅(100!) = ⌊100/5⌋ + ⌊100/25⌋ = 20 + 4 = 24 trailing zeros",
    tags: ["Number Systems", "Factorials", "Legendre", "Trailing Zeros", "P2"]
  },

  // MODERN MATH
  {
    id: "f-stars-bars",
    category: "modern-math",
    topic: "Permutations & Combinations",
    priority: "P3",
    title: "Stars & Bars (Beggar's Method)",
    latex: "\\text{Non-negative (} x_i \\ge 0 \\text{): } \\binom{n + r - 1}{r - 1}, \\quad \\text{Positive (} x_i \\ge 1 \\text{): } \\binom{n - 1}{r - 1}",
    plainText: "Non-negative: C(n + r - 1, r - 1) | Positive: C(n - 1, r - 1)",
    explanation: "Number of ways to distribute 'n' identical items among 'r' distinct individuals.",
    variables: ["n = identical items (or sum)", "r = distinct buckets/variables"],
    catUtility: "Must Know",
    examTip: "If each person must receive at least k items, subtract r*k from n first and then apply non-negative formula.",
    flashcardFront: "Number of non-negative integer solutions to x₁ + x₂ + ... + x_r = n?",
    flashcardBack: "C(n + r - 1, r - 1) = (n + r - 1)! / [n! (r - 1)!]",
    tags: ["Modern Math", "P&C", "Stars and Bars", "Distribution", "P3"]
  },
  {
    id: "f-derangements",
    category: "modern-math",
    topic: "Permutations & Combinations",
    priority: "P3",
    title: "Derangement Formula D(n)",
    latex: "D(n) = n! \\sum_{k=0}^n \\frac{(-1)^k}{k!} \\approx \\left[\\frac{n!}{e}\\right]",
    plainText: "D(n) = n! * (1/0! - 1/1! + 1/2! - ... + (-1)^n/n!)",
    explanation: "Permutations where none of the n elements appears in its original natural position.",
    variables: ["n = number of distinct items/seats"],
    catUtility: "Speed Booster",
    examTip: "Memorize D(1)=0, D(2)=1, D(3)=2, D(4)=9, D(5)=44, D(6)=265 for instant answers in CAT.",
    flashcardFront: "What is D(4) and D(5) for derangements?",
    flashcardBack: "D(4) = 9, D(5) = 44",
    tags: ["Modern Math", "Derangements", "P&C", "P3"]
  }
];
