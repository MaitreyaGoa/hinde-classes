// ============================================================
//  Std 9 Goa Board Maths — Polynomials
//  Hinde Classes | hindeclasses.com
//  Maitreya Hinde | 7358425108
//  NCERT Ch. 2 Class 9 | Goa Board | 30Q | 60 min
//  50% Moderate + 50% Hard | PYQ-aligned
//  ID range: 9561–9590
// ============================================================

var questions = [

  // ══ MODERATE (Q1–Q15) ════════════════════════════════════

  {
    id: 9561, section: "Maths",
    text: "The degree of the polynomial 3x² + 5x − 7 is:",
    options: ["A) 1", "B) 2", "C) 3", "D) 7"],
    answer: "B",
    explanation: "The degree of a polynomial is the highest power of the variable present. In 3x²+5x−7, the highest power of x is 2, so the degree is 2."
  },
  {
    id: 9562, section: "Maths",
    text: "If p(x) = 2x + 3, find the value of p(2).",
    options: ["A) 5", "B) 6", "C) 7", "D) 8"],
    answer: "C",
    explanation: "Substituting x=2: p(2) = 2(2)+3 = 4+3 = 7."
  },
  {
    id: 9563, section: "Maths",
    text: "The zero of the polynomial p(x) = x − 5 is:",
    options: ["A) x = −5", "B) x = 0", "C) x = 5", "D) x = 1"],
    answer: "C",
    explanation: "A zero of a polynomial is the value of x for which p(x)=0. Setting x−5=0 gives x=5."
  },
  {
    id: 9564, section: "Maths",
    text: "Expand: (x + 2)(x + 3)",
    options: ["A) x²+5x+6", "B) x²+6x+5", "C) x²+5x+5", "D) x²+x+6"],
    answer: "A",
    explanation: "Using FOIL: (x+2)(x+3) = x²+3x+2x+6 = x²+5x+6."
  },
  {
    id: 9565, section: "Maths",
    text: "Expand using the identity (a+b)²: (x+5)²",
    options: ["A) x²+25", "B) x²+10x+25", "C) x²+5x+25", "D) x²+10x+5"],
    answer: "B",
    explanation: "Using (a+b)²=a²+2ab+b²: (x+5)² = x²+2(x)(5)+5² = x²+10x+25."
  },
  {
    id: 9566, section: "Maths",
    text: "Expand using the difference of squares identity: (x−3)(x+3)",
    options: ["A) x²−9", "B) x²+9", "C) x²−6x+9", "D) x²−6"],
    answer: "A",
    explanation: "Using (a−b)(a+b)=a²−b²: (x−3)(x+3) = x²−3² = x²−9."
  },
  {
    id: 9567, section: "Maths",
    text: "Add the polynomials: (3x²+2x−1) + (x²−3x+4)",
    options: ["A) 4x²−x+3", "B) 4x²+x+3", "C) 2x²−x+3", "D) 4x²−x−3"],
    answer: "A",
    explanation: "Adding like terms: (3x²+x²)+(2x−3x)+(−1+4) = 4x²−x+3."
  },
  {
    id: 9568, section: "Maths",
    text: "Factorize: x² − 25",
    options: ["A) (x−5)(x+5)", "B) (x−25)(x+1)", "C) (x−5)²", "D) Cannot be factorized"],
    answer: "A",
    explanation: "x²−25 = x²−5² is a difference of squares, which factors as (x−5)(x+5)."
  },
  {
    id: 9569, section: "Maths",
    text: "Subtract: (5x−3) − (2x+7)",
    options: ["A) 3x−10", "B) 3x+10", "C) 7x−10", "D) 7x+4"],
    answer: "A",
    explanation: "(5x−3)−(2x+7) = 5x−3−2x−7 = 3x−10 (note both signs inside the second bracket flip)."
  },
  {
    id: 9570, section: "Maths",
    text: "Multiply: 3x × (x² + 2x − 1)",
    options: ["A) 3x³+6x²−3x", "B) 3x³+6x−3", "C) 3x²+6x−3x", "D) 3x³+2x²−x"],
    answer: "A",
    explanation: "Distributing 3x to each term: 3x×x²=3x³; 3x×2x=6x²; 3x×(−1)=−3x. So the result is 3x³+6x²−3x."
  },
  {
    id: 9571, section: "Maths",
    text: "What is the degree of the constant polynomial 7?",
    options: ["A) 0", "B) 1", "C) 7", "D) Undefined"],
    answer: "A",
    explanation: "A non-zero constant polynomial (like 7) has degree 0, since it can be thought of as 7x⁰, and the highest power of x present is 0."
  },
  {
    id: 9572, section: "Maths",
    text: "Find the zero of the polynomial p(x) = 2x − 6.",
    options: ["A) x = 2", "B) x = 3", "C) x = 6", "D) x = −3"],
    answer: "B",
    explanation: "Setting 2x−6=0: 2x=6, so x=3."
  },
  {
    id: 9573, section: "Maths",
    text: "Using the identity (a+b)³ = a³+3a²b+3ab²+b³, expand (x+1)³.",
    options: ["A) x³+3x²+3x+1", "B) x³+x²+x+1", "C) x³+3x+1", "D) x³+1"],
    answer: "A",
    explanation: "Using (a+b)³=a³+3a²b+3ab²+b³ with a=x, b=1: x³+3x²(1)+3x(1)²+1³ = x³+3x²+3x+1."
  },
  {
    id: 9574, section: "Maths",
    text: "Factorize: x² + 7x + 12",
    options: ["A) (x+3)(x+4)", "B) (x+2)(x+6)", "C) (x+1)(x+12)", "D) (x+5)(x+2)"],
    answer: "A",
    explanation: "We need two numbers that multiply to 12 and add to 7: these are 3 and 4. So x²+7x+12 = (x+3)(x+4)."
  },
  {
    id: 9575, section: "Maths",
    text: "If p(x) = x² − 4, find p(0).",
    options: ["A) 0", "B) −4", "C) 4", "D) −2"],
    answer: "B",
    explanation: "Substituting x=0: p(0) = 0²−4 = −4."
  },

  // ══ HARD (Q16–Q30) ═══════════════════════════════════════

  {
    id: 9576, section: "Maths",
    text: "Using the Remainder Theorem, find p(1) for p(x) = x³ − 3x² + 2x − 1.",
    options: ["A) −1", "B) 0", "C) 1", "D) −3"],
    answer: "A",
    explanation: "p(1) = 1³−3(1)²+2(1)−1 = 1−3+2−1 = −1. By the Remainder Theorem, this is also the remainder when p(x) is divided by (x−1)."
  },
  {
    id: 9577, section: "Maths",
    text: "Using the Factor Theorem, verify whether (x − 2) is a factor of p(x) = x³ − 8.",
    options: [
      "A) Yes, since p(2) = 0",
      "B) No, since p(2) = 8",
      "C) Cannot be determined without division",
      "D) Yes, but only partially"
    ],
    answer: "A",
    explanation: "By the Factor Theorem, (x−2) is a factor of p(x) if and only if p(2)=0. Checking: p(2) = 2³−8 = 8−8 = 0. Since p(2)=0, (x−2) IS a factor of x³−8."
  },
  {
    id: 9578, section: "Maths",
    text: "Divide x³ − 1 by (x − 1) and find the quotient.",
    options: ["A) x²+x+1", "B) x²−x+1", "C) x²+x−1", "D) x²−1"],
    answer: "A",
    explanation: "Dividing x³−1 by (x−1): the quotient is x²+x+1 with remainder 0. This confirms x³−1 = (x−1)(x²+x+1), a standard identity for a³−b³ with b=1."
  },
  {
    id: 9579, section: "Maths",
    text: "Using the identity (a+b)³ = a³+3a²b+3ab²+b³, expand (2x+3)³.",
    options: ["A) 8x³+36x²+54x+27", "B) 8x³+27", "C) 8x³+18x²+27x+27", "D) 4x³+36x²+54x+27"],
    answer: "A",
    explanation: "Using (a+b)³ with a=2x, b=3: (2x)³+3(2x)²(3)+3(2x)(3)²+3³ = 8x³+36x²+54x+27."
  },
  {
    id: 9580, section: "Maths",
    text: "Verify the identity a³+b³ = (a+b)(a²−ab+b²) by substituting a=2, b=3 on both sides.",
    options: [
      "A) Both sides equal 35, confirming the identity",
      "B) LHS=35, RHS=30, identity does not hold",
      "C) Both sides equal 30",
      "D) The identity only works for a=b"
    ],
    answer: "A",
    explanation: "LHS: a³+b³ = 8+27 = 35. RHS: (a+b)(a²−ab+b²) = (5)(4−6+9) = 5×7 = 35. Both sides equal 35, confirming the identity holds true."
  },
  {
    id: 9581, section: "Maths",
    text: "Factorize x³ − 27 using the identity a³−b³ = (a−b)(a²+ab+b²).",
    options: ["A) (x−3)(x²+3x+9)", "B) (x−3)(x²−3x+9)", "C) (x−3)³", "D) (x−9)(x²+9)"],
    answer: "A",
    explanation: "Using a³−b³=(a−b)(a²+ab+b²) with a=x, b=3: x³−27 = (x−3)(x²+3x+9)."
  },
  {
    id: 9582, section: "Maths",
    text: "Find the remainder when p(x) = 2x³ − 3x² + 4x − 5 is divided by (x + 1), using the Remainder Theorem.",
    options: ["A) −2", "B) −14", "C) 14", "D) −4"],
    answer: "B",
    explanation: "By the Remainder Theorem, dividing by (x+1) means evaluating p(−1): 2(−1)³−3(−1)²+4(−1)−5 = −2−3−4−5 = −14."
  },
  {
    id: 9583, section: "Maths",
    text: "Find the value of k such that (x − 1) is a factor of x² + kx − 6.",
    options: ["A) k = 3", "B) k = 5", "C) k = −5", "D) k = 6"],
    answer: "B",
    explanation: "By the Factor Theorem, if (x−1) is a factor, then p(1)=0: 1²+k(1)−6=0 → 1+k−6=0 → k=5."
  },
  {
    id: 9584, section: "Maths",
    text: "Using the identity (a−b)² = a²−2ab+b², calculate 98² without direct multiplication.",
    options: ["A) 9604", "B) 9404", "C) 9801", "D) 9216"],
    answer: "A",
    explanation: "Write 98 = 100−2. Then 98² = (100−2)² = 100²−2(100)(2)+2² = 10000−400+4 = 9604."
  },
  {
    id: 9585, section: "Maths",
    text: "If x+y=5 and xy=6, find the value of x³+y³ using the identity x³+y³ = (x+y)³ − 3xy(x+y).",
    options: ["A) 35", "B) 30", "C) 125", "D) 91"],
    answer: "A",
    explanation: "Using x³+y³ = (x+y)³−3xy(x+y): substitute (x+y)=5, xy=6: 5³−3(6)(5) = 125−90 = 35."
  },
  {
    id: 9586, section: "Maths",
    text: "If p(x) = x³ + 3x² − x − 3 has (x−1) as a factor, find the other factor(s) by dividing p(x) by (x−1).",
    options: ["A) (x+1)(x+3)", "B) (x−1)(x+3)", "C) (x+3)(x−3)", "D) (x+1)(x−3)"],
    answer: "A",
    explanation: "Dividing x³+3x²−x−3 by (x−1) gives quotient x²+4x+3, which factors further into (x+1)(x+3). So the complete factorization is (x−1)(x+1)(x+3)."
  },
  {
    id: 9587, section: "Maths",
    text: "Use the identity a²−b² = (a+b)(a−b) to evaluate 53² − 47² without squaring each number separately.",
    options: ["A) 600", "B) 36", "C) 500", "D) 106"],
    answer: "A",
    explanation: "Using a²−b²=(a+b)(a−b) with a=53, b=47: (53+47)(53−47) = 100×6 = 600."
  },
  {
    id: 9588, section: "Maths",
    text: "Verify whether x=2 is a zero of the polynomial p(x) = x³ − 4x² + 5x − 2, and if so, find one factor.",
    options: [
      "A) Yes, p(2)=0, so (x−2) is a factor",
      "B) No, p(2)=8, so (x−2) is not a factor",
      "C) Yes, but the factor is (x+2)",
      "D) Cannot be determined without full factorization"
    ],
    answer: "A",
    explanation: "p(2) = 2³−4(2)²+5(2)−2 = 8−16+10−2 = 0. Since p(2)=0, x=2 is a zero, and by the Factor Theorem, (x−2) must be a factor of p(x)."
  },
  {
    id: 9589, section: "Maths",
    text: "Using the identity (x+a)(x+b) = x²+(a+b)x+ab, find the values of a and b if (x+a)(x+b) = x²+9x+20.",
    options: ["A) a=4, b=5", "B) a=2, b=10", "C) a=1, b=20", "D) a=9, b=20"],
    answer: "A",
    explanation: "We need a+b=9 and ab=20. Testing: 4+5=9 ✓ and 4×5=20 ✓. So a=4, b=5 (or vice versa)."
  },
  {
    id: 9590, section: "Maths",
    text: "If a polynomial p(x) leaves the SAME remainder when divided by (x−1) and (x−2), and this remainder is 5, what does this tell us about p(1) and p(2)?",
    options: [
      "A) p(1) = p(2) = 5, both confirmed by the Remainder Theorem",
      "B) p(1) = 5 but p(2) could be any value",
      "C) This situation is mathematically impossible",
      "D) p(1) and p(2) must both equal 0"
    ],
    answer: "A",
    explanation: "By the Remainder Theorem, the remainder when p(x) is divided by (x−a) equals p(a). If the remainder is the same (5) for both (x−1) and (x−2), this directly means p(1)=5 AND p(2)=5 — the polynomial takes the same value at both x=1 and x=2."
  }

];
