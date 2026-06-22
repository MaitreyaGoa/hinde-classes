// ============================================================
//  Std 10 Goa Board Maths — Polynomials
//  Hinde Classes | hindeclasses.com
//  Maitreya Hinde | 7358425108
//  NCERT Ch. 2 Class 10 | Goa Board | 30Q | 60 min
//  50% Moderate + 50% Hard | PYQ-aligned
//  ID range: 9621–9650
// ============================================================

var questions = [

  // ══ MODERATE (Q1–Q15) ════════════════════════════════════

  {
    id: 9621, section: "Maths",
    text: "For the quadratic polynomial x² − 5x + 6, find the sum of its zeros.",
    options: ["A) 5", "B) 6", "C) −5", "D) 1"],
    answer: "A",
    explanation: "For ax²+bx+c, sum of zeros = −b/a. Here a=1, b=−5: sum = −(−5)/1 = 5. (Verify: zeros are 2 and 3; 2+3=5 ✓)"
  },
  {
    id: 9622, section: "Maths",
    text: "For the quadratic polynomial x² − 5x + 6, find the product of its zeros.",
    options: ["A) 5", "B) 6", "C) −6", "D) 1"],
    answer: "B",
    explanation: "For ax²+bx+c, product of zeros = c/a. Here a=1, c=6: product = 6/1 = 6. (Verify: zeros are 2 and 3; 2×3=6 ✓)"
  },
  {
    id: 9623, section: "Maths",
    text: "Find a quadratic polynomial whose zeros have sum=7 and product=12.",
    options: ["A) x²+7x+12", "B) x²−7x+12", "C) x²−7x−12", "D) x²+12x+7"],
    answer: "B",
    explanation: "A quadratic with given sum (S) and product (P) of zeros is x²−Sx+P. So with S=7, P=12: x²−7x+12."
  },
  {
    id: 9624, section: "Maths",
    text: "What is the maximum number of zeros a quadratic polynomial can have?",
    options: ["A) 1", "B) 2", "C) 3", "D) Unlimited"],
    answer: "B",
    explanation: "A quadratic polynomial (degree 2) can have at most 2 zeros, corresponding to the maximum number of times its graph (a parabola) can cross the x-axis."
  },
  {
    id: 9625, section: "Maths",
    text: "What is the maximum number of zeros a cubic polynomial can have?",
    options: ["A) 2", "B) 3", "C) 4", "D) Unlimited"],
    answer: "B",
    explanation: "A cubic polynomial (degree 3) can have at most 3 zeros."
  },
  {
    id: 9626, section: "Maths",
    text: "For the cubic polynomial x³ − 6x² + 11x − 6, find the sum of its zeros.",
    options: ["A) 6", "B) −6", "C) 11", "D) 1"],
    answer: "A",
    explanation: "For ax³+bx²+cx+d, sum of zeros = −b/a. Here a=1, b=−6: sum = −(−6)/1 = 6. (Verify: zeros are 1, 2, 3; 1+2+3=6 ✓)"
  },
  {
    id: 9627, section: "Maths",
    text: "For the cubic polynomial x³ − 6x² + 11x − 6 (with zeros 1, 2, 3), find the sum of products of zeros taken two at a time.",
    options: ["A) 6", "B) 11", "C) 12", "D) 9"],
    answer: "B",
    explanation: "For ax³+bx²+cx+d, sum of products of zeros taken two at a time = c/a = 11/1 = 11. (Verify: (1×2)+(1×3)+(2×3) = 2+3+6 = 11 ✓)"
  },
  {
    id: 9628, section: "Maths",
    text: "For the cubic polynomial x³ − 6x² + 11x − 6, find the product of all three zeros.",
    options: ["A) 6", "B) −6", "C) 11", "D) −11"],
    answer: "A",
    explanation: "For ax³+bx²+cx+d, product of zeros = −d/a. Here a=1, d=−6: product = −(−6)/1 = 6. (Verify: 1×2×3 = 6 ✓)"
  },
  {
    id: 9629, section: "Maths",
    text: "Find the zeros of the polynomial x² − 9.",
    options: ["A) x=3 only", "B) x=−3 only", "C) x=3 and x=−3", "D) x=9 and x=−9"],
    answer: "C",
    explanation: "x²−9=0 → x²=9 → x=±3. So the zeros are x=3 and x=−3."
  },
  {
    id: 9630, section: "Maths",
    text: "For the quadratic polynomial 2x² − 7x + 3, find the sum and product of its zeros.",
    options: ["A) Sum=7/2, Product=3/2", "B) Sum=−7/2, Product=3/2", "C) Sum=7/2, Product=3", "D) Sum=7, Product=3"],
    answer: "A",
    explanation: "For 2x²−7x+3: a=2, b=−7, c=3. Sum = −b/a = 7/2. Product = c/a = 3/2."
  },
  {
    id: 9631, section: "Maths",
    text: "Find a quadratic polynomial whose zeros are (2+√3) and (2−√3).",
    options: ["A) x²−4x+1", "B) x²+4x+1", "C) x²−4x−1", "D) x²−4x+7"],
    answer: "A",
    explanation: "Sum of zeros = (2+√3)+(2−√3) = 4. Product = (2+√3)(2−√3) = 4−3 = 1. So the quadratic is x²−(sum)x+(product) = x²−4x+1."
  },
  {
    id: 9632, section: "Maths",
    text: "What is the maximum number of zeros that a LINEAR polynomial (degree 1) can have?",
    options: ["A) 0", "B) 1", "C) 2", "D) Unlimited"],
    answer: "B",
    explanation: "A linear polynomial (ax+b, with a≠0) has exactly 1 zero, since setting ax+b=0 gives a single solution x=−b/a."
  },
  {
    id: 9633, section: "Maths",
    text: "Verify that x=1 and x=−2 are both zeros of p(x) = x² + x − 2.",
    options: [
      "A) Both values give p(x)=0, confirming they are zeros",
      "B) Only x=1 is a zero",
      "C) Only x=−2 is a zero",
      "D) Neither value is a zero"
    ],
    answer: "A",
    explanation: "p(1) = 1²+1−2 = 0 ✓. p(−2) = (−2)²+(−2)−2 = 4−2−2 = 0 ✓. Both values give p(x)=0, confirming they are zeros of the polynomial."
  },
  {
    id: 9634, section: "Maths",
    text: "For a quadratic polynomial ax² + bx + c with a > 0, the graph (parabola) opens:",
    options: ["A) Upward", "B) Downward", "C) Sideways", "D) Cannot be determined"],
    answer: "A",
    explanation: "When the leading coefficient 'a' is positive, the parabola opens upward (like a U-shape). When a is negative, it opens downward."
  },
  {
    id: 9635, section: "Maths",
    text: "The number of REAL zeros of a polynomial corresponds to:",
    options: [
      "A) The number of times its graph crosses or touches the x-axis",
      "B) The number of terms in the polynomial",
      "C) The coefficient of the highest power term",
      "D) The constant term of the polynomial"
    ],
    answer: "A",
    explanation: "Graphically, the real zeros of a polynomial are the x-coordinates of the points where its graph intersects or touches the x-axis."
  },

  // ══ HARD (Q16–Q30) ═══════════════════════════════════════

  {
    id: 9636, section: "Maths",
    text: "Find a quadratic polynomial whose zeros have sum=4 and product=−5.",
    options: ["A) x²−4x−5", "B) x²+4x−5", "C) x²−4x+5", "D) x²+4x+5"],
    answer: "A",
    explanation: "Using x²−(sum)x+(product): x²−4x+(−5) = x²−4x−5."
  },
  {
    id: 9637, section: "Maths",
    text: "If one zero of the polynomial x² − (k+6)x + 2(2k−1) is the negative of the other zero, find the value of k.",
    options: ["A) k=6", "B) k=−6", "C) k=3", "D) k=−3"],
    answer: "B",
    explanation: "If the zeros are α and −α (negatives of each other), their sum = α+(−α) = 0. Sum of zeros = (k+6)/1, so k+6=0, giving k=−6."
  },
  {
    id: 9638, section: "Maths",
    text: "For the cubic polynomial x³ − 2x² − x + 2 (with zeros 1, −1, and 2), verify ALL THREE of Vieta's relationships.",
    options: [
      "A) Sum=2, sum of pairs=−1, product=−2 — all verified correctly",
      "B) Sum=2, sum of pairs=1, product=2",
      "C) Sum=−2, sum of pairs=−1, product=2",
      "D) The relationships do not hold for this polynomial"
    ],
    answer: "A",
    explanation: "For x³−2x²−x+2: a=1,b=−2,c=−1,d=2. Sum of zeros = −b/a = 2 (verify: 1+(−1)+2=2 ✓). Sum of pairs = c/a = −1 (verify: (1×−1)+(1×2)+(−1×2) = −1+2−2=−1 ✓). Product = −d/a = −2 (verify: 1×(−1)×2=−2 ✓). All three relationships check out correctly."
  },
  {
    id: 9639, section: "Maths",
    text: "Divide p(x) = x³ − 3x² − x + 3 by g(x) = x − 1. Find the quotient and remainder.",
    options: [
      "A) Quotient = x²−2x−3, Remainder = 0",
      "B) Quotient = x²+2x−3, Remainder = 0",
      "C) Quotient = x²−2x+3, Remainder = 1",
      "D) Quotient = x²−3x−1, Remainder = 2"
    ],
    answer: "A",
    explanation: "Performing polynomial long division of x³−3x²−x+3 by (x−1) gives quotient x²−2x−3 with remainder 0, confirming (x−1) is a factor of p(x)."
  },
  {
    id: 9640, section: "Maths",
    text: "If α and β are the zeros of x² − 3x − 2, find the value of α² + β² using the identity α²+β² = (α+β)² − 2αβ.",
    options: ["A) 9", "B) 13", "C) 5", "D) 17"],
    answer: "B",
    explanation: "Sum (α+β) = −(−3)/1 = 3. Product (αβ) = −2/1 = −2. Using the identity: α²+β² = (3)²−2(−2) = 9+4 = 13."
  },
  {
    id: 9641, section: "Maths",
    text: "Find a cubic polynomial whose zeros are 2, 3, and −1.",
    options: ["A) x³−4x²+x+6", "B) x³+4x²+x−6", "C) x³−4x²−x+6", "D) x³−6x²+11x−6"],
    answer: "A",
    explanation: "The cubic polynomial is (x−2)(x−3)(x+1). Expanding: (x−2)(x−3) = x²−5x+6. Then (x²−5x+6)(x+1) = x³−4x²+x+6."
  },
  {
    id: 9642, section: "Maths",
    text: "If the zeros of a quadratic polynomial are reciprocals of each other (i.e., α and 1/α), what special relationship must exist between the coefficients a and c (for ax²+bx+c)?",
    options: [
      "A) a = c, since the product of zeros (α × 1/α = 1) must equal c/a, so c/a=1",
      "B) a = −c always",
      "C) b must equal 0",
      "D) No special relationship exists"
    ],
    answer: "A",
    explanation: "If zeros are α and 1/α, their product = α × (1/α) = 1. Since product of zeros = c/a, we get c/a = 1, meaning a = c. This is a special condition that must hold for the zeros to be reciprocals of each other."
  },
  {
    id: 9643, section: "Maths",
    text: "Find the value of k such that x=2 is a zero of the polynomial 2x² − 3x + k.",
    options: ["A) k=2", "B) k=−2", "C) k=4", "D) k=−4"],
    answer: "B",
    explanation: "Substituting x=2: 2(2)²−3(2)+k=0 → 8−6+k=0 → 2+k=0 → k=−2."
  },
  {
    id: 9644, section: "Maths",
    text: "If the sum of the zeros of a quadratic polynomial ax²+bx+c is 0, what conclusion can we draw about the coefficient b?",
    options: [
      "A) b must equal 0, since sum of zeros = −b/a = 0 implies b=0",
      "B) b must equal a",
      "C) b must equal c",
      "D) No conclusion can be drawn about b"
    ],
    answer: "A",
    explanation: "Sum of zeros = −b/a. If this sum equals 0, then −b/a=0, which (since a≠0) means b must equal 0. This corresponds to a quadratic of the form ax²+c with no middle (x) term."
  },
  {
    id: 9645, section: "Maths",
    text: "For a cubic polynomial of the form x³ + px² + qx + r, if x=0 is one of its zeros, what must be true about the constant term r?",
    options: [
      "A) r must equal 0, since substituting x=0 gives p(0)=r, and for x=0 to be a zero, r must be 0",
      "B) r must equal p",
      "C) r must equal q",
      "D) r can be any non-zero value"
    ],
    answer: "A",
    explanation: "Substituting x=0 into x³+px²+qx+r gives simply r (all other terms become 0). For x=0 to be a zero, we need p(0)=0, which means r must equal 0."
  },
  {
    id: 9646, section: "Maths",
    text: "If α, β, γ are the zeros of x³ − 4x² + x + 6, and it is known that α = −1, find β+γ and βγ using Vieta's relationships for the remaining two zeros.",
    options: [
      "A) β+γ=5, βγ=6",
      "B) β+γ=4, βγ=−6",
      "C) β+γ=3, βγ=−4",
      "D) β+γ=−5, βγ=−6"
    ],
    answer: "A",
    explanation: "Sum of all zeros = −(−4)/1 = 4. Since α=−1: β+γ = 4−(−1) = 5. Product of all zeros = −6/1 = −6. Since α=−1: (−1)×β×γ = −6, so βγ = 6. (Verify directly: x³−4x²+x+6 factors as (x+1)(x−2)(x−3), giving zeros −1, 2, 3. So β,γ = 2,3: β+γ=5 ✓, βγ=6 ✓.)"
  },
  {
    id: 9647, section: "Maths",
    text: "A quadratic polynomial has zeros α and β such that α+β=6 and α−β=2. Find the individual values of α and β.",
    options: ["A) α=4, β=2", "B) α=3, β=3", "C) α=5, β=1", "D) α=6, β=0"],
    answer: "A",
    explanation: "Adding the two equations: (α+β)+(α−β) = 6+2 → 2α=8 → α=4. Substituting back: 4+β=6 → β=2."
  },
  {
    id: 9648, section: "Maths",
    text: "Given that one zero of the quadratic polynomial 3x² − 8x + k is the reciprocal of the other, find the value of k.",
    options: ["A) k=3", "B) k=8", "C) k=−3", "D) k=24"],
    answer: "A",
    explanation: "If zeros are α and 1/α, their product = 1. Product of zeros = k/3 (using c/a). So k/3=1, giving k=3."
  },
  {
    id: 9649, section: "Maths",
    text: "For the polynomial p(x) = x³ − 5x² − 2x + 24, it is given that x=4 is one zero. Find the other two zeros by first dividing out (x−4), then factoring the resulting quadratic.",
    options: ["A) x=−2 and x=3", "B) x=2 and x=−3", "C) x=−2 and x=−3", "D) x=2 and x=3"],
    answer: "A",
    explanation: "Dividing x³−5x²−2x+24 by (x−4) gives quotient x²−x−6, which factors as (x−3)(x+2). So the other two zeros are x=3 and x=−2."
  },
  {
    id: 9650, section: "Maths",
    text: "If the zeros of a cubic polynomial are in arithmetic progression (i.e., they can be written as a−d, a, a+d for some values a and d), and the polynomial is x³−12x²+39x−28, find the value of 'a' (the middle zero) using the sum-of-zeros relationship.",
    options: ["A) a=4", "B) a=12", "C) a=39", "D) a=28"],
    answer: "A",
    explanation: "Sum of zeros = (a−d)+a+(a+d) = 3a. Using sum of zeros = −(−12)/1=12: 3a=12, so a=4. (This is a useful shortcut: for zeros in AP, the middle zero equals one-third of the sum of all zeros.)"
  }

];
