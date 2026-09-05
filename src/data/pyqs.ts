import { PYQItem } from "@/types/quant";

export const PYQ_DATA: PYQItem[] = [
  {
    id: "cat-2023-s1-q1",
    year: 2023,
    slot: 1,
    topic: "arithmetic",
    subtopic: "Time-Speed-Distance",
    concept: "Races & Linear Headstarts",
    pattern: "Two-stage race with headstart distance and time deficit",
    difficulty: "Medium",
    statement: "In a 1000m race, A beats B by 100m or 10 seconds. In the same race, B beats C by 50m. By what distance does A beat C?",
    options: ["145m", "150m", "140m", "155m"],
    isTITA: false,
    correctAnswer: "145m",
    bestSolvingMethod: {
      methodName: "Ratio of Distances covered in same time",
      whyThisMethod: "Avoids unnecessary time and speed conversions; uses direct scaling of distance ratios.",
      steps: [
        "1. A beats B by 100m means when A finishes 1000m, B covers 900m. Thus distance ratio A : B = 1000 : 900 = 10 : 9.",
        "2. B beats C by 50m means when B finishes 1000m, C covers 950m. Thus distance ratio B : C = 1000 : 950 = 20 : 19.",
        "3. Multiply ratios to find A : C = (A/B) × (B/C) = (10/9) × (20/19) = 200 / 171.",
        "4. When A runs 1000m (which is 200 × 5), C runs 171 × 5 = 855m.",
        "5. Distance A beats C = 1000 - 855 = 145m."
      ],
      solvingTimeMinutes: "1.2 min"
    },
    commonTrap: "Adding the two deficits directly (100m + 50m = 150m). When B runs 900m, C does not trail by 50m — C trails by proportionally less (45m).",
    takeaway: "In races, distance ratios are invariant. Chain A/C = (A/B) × (B/C) and scale to track length."
  },
  {
    id: "cat-2022-s2-q4",
    year: 2022,
    slot: 2,
    topic: "algebra",
    subtopic: "Functions & Graphs",
    concept: "Functional Equations & Symmetric Substitution",
    pattern: "f(x) + f(1-x) constant symmetry with summation series",
    difficulty: "Medium",
    statement: "Let f(x) = 4^x / (4^x + 2). Evaluate the sum: S = f(1/2023) + f(2/2023) + f(3/2023) + ... + f(2022/2023).",
    isTITA: true,
    correctAnswer: "1011",
    bestSolvingMethod: {
      methodName: "Pairwise Complementary Addition f(x) + f(1-x) = 1",
      whyThisMethod: "Evaluating individual non-integer exponents like 4^(1/2023) is impossible; algebraic symmetry simplifies the entire 2022-term series in 2 lines.",
      steps: [
        "1. Compute f(1 - x) = 4^(1-x) / (4^(1-x) + 2) = (4/4^x) / (4/4^x + 2) = 4 / (4 + 2·4^x) = 2 / (2 + 4^x).",
        "2. Add f(x) + f(1 - x) = 4^x / (4^x + 2) + 2 / (4^x + 2) = (4^x + 2) / (4^x + 2) = 1.",
        "3. Pair the terms from ends: [f(1/2023) + f(2022/2023)] + [f(2/2023) + f(2021/2023)] + ...",
        "4. Total number of terms = 2022 terms = 1011 complementary pairs.",
        "5. Since each pair sums to 1, the total sum S = 1011 × 1 = 1011."
      ],
      solvingTimeMinutes: "0.8 min"
    },
    commonTrap: "Trying to expand 4^(1/2023) using logarithms or Binomial theorem instead of testing f(1-x).",
    takeaway: "Whenever an algebraic sum involves fractions k/N summing to 1, immediately check f(x) + f(1-x)."
  },
  {
    id: "cat-2021-s3-q7",
    year: 2021,
    slot: 3,
    topic: "geometry",
    subtopic: "Circles & Tangents",
    concept: "Intersecting Chords & Power of Point",
    pattern: "Circle chord intersection with right-angled coordinate symmetry",
    difficulty: "Hard",
    statement: "Two chords AB and CD of a circle intersect perpendicularly at point P inside the circle. If AP = 3 cm, PB = 4 cm, and CP = 2 cm, find the radius of the circle.",
    options: ["√65 / 2 cm", "5 cm", "√53 / 2 cm", "√73 / 2 cm"],
    isTITA: false,
    correctAnswer: "√65 / 2 cm",
    bestSolvingMethod: {
      methodName: "Power of a Point + Distance from Center Formula",
      whyThisMethod: "Avoids drawing multiple messy auxiliary triangles; uses the standard radius theorem for perpendicular chords.",
      steps: [
        "1. By Intersecting Chords Theorem: AP · PB = CP · PD ⇒ 3 · 4 = 2 · PD ⇒ PD = 6 cm.",
        "2. For perpendicular chords intersecting at P, radius formula is: R² = (AP² + PB² + CP² + PD²) / 4.",
        "3. Substitute values: R² = (3² + 4² + 2² + 6²) / 4 = (9 + 16 + 4 + 36) / 4 = 65 / 4.",
        "4. Radius R = √(65/4) = √65 / 2 cm."
      ],
      solvingTimeMinutes: "1.0 min"
    },
    commonTrap: "Assuming P is the center of the circle (which would make R = 4, completely wrong).",
    takeaway: "For two perpendicular chords of a circle meeting at P: 4R² = AP² + PB² + CP² + PD²."
  },
  {
    id: "cat-2020-s1-q12",
    year: 2020,
    slot: 1,
    topic: "number-systems",
    subtopic: "Factors & Multiples",
    concept: "Integral Solutions to 1/x + 1/y = 1/N",
    pattern: "Symmetric hyperbola transform (x - N)(y - N) = N²",
    difficulty: "Medium",
    statement: "How many pairs of positive integers (x, y) satisfy the equation: 1/x + 1/y = 1/12?",
    isTITA: true,
    correctAnswer: "15",
    bestSolvingMethod: {
      methodName: "Simon's Favorite Factoring Trick (SFFT)",
      whyThisMethod: "Converts fractional Diophantine equation into factor pairs of N² in 2 steps.",
      steps: [
        "1. Multiply by 12xy: 12y + 12x = xy ⇒ xy - 12x - 12y = 0.",
        "2. Add 12² = 144 to both sides: xy - 12x - 12y + 144 = 144.",
        "3. Factorize: (x - 12)(y - 12) = 144 = 12².",
        "4. Since x, y > 12, (x - 12) and (y - 12) must be positive factors of 144.",
        "5. Prime factorize 144 = 2⁴ × 3² → Total factors = (4 + 1)(2 + 1) = 5 × 3 = 15.",
        "6. Each positive factor of 144 uniquely determines a positive integer pair (x, y). Total pairs = 15."
      ],
      solvingTimeMinutes: "0.7 min"
    },
    commonTrap: "Dividing by 2 assuming pairs are unordered when question asks for (x, y) coordinates where (13, 156) ≠ (156, 13).",
    takeaway: "The number of positive integer solutions to 1/x + 1/y = 1/N is simply the Total Factors of N²."
  },
  {
    id: "cat-2019-s2-q5",
    year: 2019,
    slot: 2,
    topic: "modern-math",
    subtopic: "Permutations & Combinations",
    concept: "Grid Paths & Constrained Manhattan Distance",
    pattern: "Point-to-point grid routes passing through a designated checkpoint",
    difficulty: "Medium",
    statement: "Find the number of shortest paths from point (0, 0) to point (6, 5) on a grid that must pass through point (3, 2).",
    options: ["200", "210", "220", "240"],
    isTITA: false,
    correctAnswer: "200",
    bestSolvingMethod: {
      methodName: "Multiplicative Stage Combinations",
      whyThisMethod: "Grid path from (0,0) to (m,n) is (m+n)Cm. Multiply path count of Stage 1 with Stage 2.",
      steps: [
        "1. Stage 1: Path from (0, 0) to (3, 2): Δx = 3, Δy = 2. Ways = (3 + 2)C3 = 5C3 = 10.",
        "2. Stage 2: Path from (3, 2) to (6, 5): Δx = (6 - 3) = 3, Δy = (5 - 2) = 3. Ways = (3 + 3)C3 = 6C3 = 20.",
        "3. By Fundamental Principle of Counting, Total Paths = Ways(Stage 1) × Ways(Stage 2) = 10 × 20 = 200."
      ],
      solvingTimeMinutes: "0.5 min"
    },
    commonTrap: "Adding the combinations (10 + 20 = 30) instead of multiplying independent sequential choices.",
    takeaway: "Shortest grid paths from (x₁,y₁) to (x₂,y₂) equals (Δx + Δy)C(Δx). Multiply across mandatory checkpoints."
  }
];
