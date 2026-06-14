// ============================================================
//  Std 9 CBSE Maths — Number Systems
//  Hinde Classes | hindeclasses.com
//  Maitreya Hinde | 7358425108
//  NCERT Ch. 1 | CBSE Board Pattern | 30Q | 60 min
//  50% Moderate + 50% Hard | PYQ-aligned
//  ID range: 8391–8420
// ============================================================

var questions = [

  // ══ MODERATE (Q1–Q15) ════════════════════════════════════

  {
    id: 8391, section: "Maths",
    text: "Which of the following belongs to the set of rational numbers but NOT to the set of integers?",
    options: ["A) −3", "B) 0", "C) −3/4", "D) 7"],
    answer: "C",
    explanation: "Integers are ..., −2, −1, 0, 1, 2, ... Rational numbers also include fractions like −3/4. Since −3/4 cannot be written without a fraction, it is rational but not an integer. Options A, B, D are all integers."
  },
  {
    id: 8392, section: "Maths",
    text: "How many rational numbers exist between 1/4 and 1/3?",
    options: ["A) None", "B) Only 1", "C) Exactly 3", "D) Infinitely many"],
    answer: "D",
    explanation: "Between any two distinct rational numbers, there are infinitely many rational numbers (density property). For example, the mean (1/4+1/3)/2 = 7/24 lies between them, and we can always find more by repeating this process."
  },
  {
    id: 8393, section: "Maths",
    text: "A rational number has a terminating decimal expansion when, in its lowest terms, the denominator has prime factors:",
    options: ["A) Only 2", "B) Only 5", "C) Only 2 and/or 5", "D) Any prime factor"],
    answer: "C",
    explanation: "A fraction p/q (in lowest terms) has a terminating decimal if and only if q has no prime factors other than 2 or 5. For example, 3/8 = 3/2³ terminates; 1/6 = 1/(2×3) does not (has factor 3)."
  },
  {
    id: 8394, section: "Maths",
    text: "The number 2.0100100010001... (where the number of zeros between successive 1s increases by 1) is:",
    options: ["A) A rational number", "B) A terminating decimal", "C) An irrational number", "D) A whole number"],
    answer: "C",
    explanation: "2.0100100010001... is non-terminating and non-repeating — no fixed block of digits repeats. This makes it irrational. A number with a repeating decimal block would be rational; this pattern never repeats exactly."
  },
  {
    id: 8395, section: "Maths",
    text: "Convert 0.2353535... into p/q form:",
    options: ["A) 233/990", "B) 235/999", "C) 23/99", "D) 47/200"],
    answer: "A",
    explanation: "Let x = 0.2353535... Since 1 non-repeating digit (2) precedes 2 repeating digits (35): 10x = 2.3535..., 1000x = 235.3535... Subtract: 990x = 233, so x = 233/990."
  },
  {
    id: 8396, section: "Maths",
    text: "√2 × √3 = ?",
    options: ["A) √5", "B) √6", "C) 6", "D) 2√3"],
    answer: "B",
    explanation: "√2 × √3 = √(2×3) = √6. Since 6 is not a perfect square, √6 is irrational. This also shows that the product of two irrational numbers can be irrational (though not always — e.g., √2 × √2 = 2, which is rational)."
  },
  {
    id: 8397, section: "Maths",
    text: "Simplify: √8 + √18 − √2",
    options: ["A) 3√2", "B) 4√2", "C) 5√2", "D) √24"],
    answer: "B",
    explanation: "√8 = √(4×2) = 2√2. √18 = √(9×2) = 3√2. So 2√2 + 3√2 − √2 = (2+3−1)√2 = 4√2."
  },
  {
    id: 8398, section: "Maths",
    text: "Which of the following is NOT an irrational number?",
    options: ["A) √23", "B) √225", "C) π", "D) 7√5"],
    answer: "B",
    explanation: "√225 = √(15²) = 15, which is a natural number and therefore rational. √23, π, and 7√5 are all irrational (no perfect square, π is proven irrational, and 7√5 = irrational × rational = irrational)."
  },
  {
    id: 8399, section: "Maths",
    text: "Which statement is TRUE?",
    options: [
      "A) Every real number is rational",
      "B) Every real number is irrational",
      "C) Every rational number is a real number",
      "D) Every irrational number is an integer"
    ],
    answer: "C",
    explanation: "Real numbers = Rational ∪ Irrational. So every rational number is a subset of real numbers — statement C is true. A and B are false (real numbers include both rational and irrational). D is false (irrational numbers like √2, π are not integers)."
  },
  {
    id: 8400, section: "Maths",
    text: "To represent √3 on the number line, which of the following constructions is used?",
    options: [
      "A) Draw a right triangle with both legs = 1, hypotenuse = √2; then another with legs √2 and 1, hypotenuse = √3",
      "B) Mark 3 units and halve",
      "C) Draw a right triangle with legs 1 and 2",
      "D) Use a compass to transfer the length 3/2"
    ],
    answer: "A",
    explanation: "Using Pythagoras: OA=1, draw AB⊥OA with AB=1; OB=√(1²+1²)=√2. Then draw BC⊥OB with BC=1; OC=√(√2²+1²)=√3. This is the 'square root spiral' construction taught in CBSE Class 9."
  },
  {
    id: 8401, section: "Maths",
    text: "After rationalising the denominator, 3/√7 becomes:",
    options: ["A) 3√7/7", "B) √7/3", "C) 3/7", "D) 21/√7"],
    answer: "A",
    explanation: "Multiply numerator and denominator by √7: (3×√7)/(√7×√7) = 3√7/7. The denominator becomes rational (7), and the expression is fully rationalised."
  },
  {
    id: 8402, section: "Maths",
    text: "(√3 + √7)(√3 − √7) = ?",
    options: ["A) 4", "B) −4", "C) √21", "D) 10"],
    answer: "B",
    explanation: "Using (a+b)(a−b) = a²−b²: (√3+√7)(√3−√7) = (√3)²−(√7)² = 3−7 = −4."
  },
  {
    id: 8403, section: "Maths",
    text: "The decimal expansion of 17/125 is:",
    options: ["A) 0.136 (terminating)", "B) 0.136136... (repeating)", "C) 0.1360001... (non-repeating)", "D) 0.17125"],
    answer: "A",
    explanation: "125 = 5³. Since the denominator (in lowest terms) has only the prime factor 5, the decimal expansion is terminating. 17/125 = 17×8/(125×8) = 136/1000 = 0.136."
  },
  {
    id: 8404, section: "Maths",
    text: "The multiplicative inverse of (2 + √3) is:",
    options: ["A) 2 + √3", "B) −(2 + √3)", "C) 2 − √3", "D) 1/(2+√3) only"],
    answer: "C",
    explanation: "Multiplicative inverse of x is 1/x such that x × (1/x) = 1. 1/(2+√3) × (2−√3)/(2−√3) = (2−√3)/(4−3) = 2−√3. So (2+√3) × (2−√3) = 4−3 = 1, confirming 2−√3 is the multiplicative inverse."
  },
  {
    id: 8405, section: "Maths",
    text: "(3 + √5)(3 − √5) = ?",
    options: ["A) 9 − 5", "B) 4", "C) 14", "D) 9 + 5"],
    answer: "B",
    explanation: "Using (a+b)(a−b) = a²−b²: (3+√5)(3−√5) = 3²−(√5)² = 9−5 = 4. Note: options A and B both express 4 — but A says '9−5' as an unsimplified expression while B gives the simplified integer 4."
  },

  // ══ HARD (Q16–Q30) ═══════════════════════════════════════

  {
    id: 8406, section: "Maths",
    text: "Convert 1.272727... into p/q form:",
    options: ["A) 127/99", "B) 14/11", "C) 127/100", "D) 7/5"],
    answer: "B",
    explanation: "Let x = 1.272727... Since 2 digits repeat: 100x = 127.2727... Subtract x: 99x = 126, so x = 126/99. Simplify by HCF 9: 126/99 = 14/11. Verify: 14÷11 = 1.2727... ✓"
  },
  {
    id: 8407, section: "Maths",
    text: "In the proof that √2 is irrational, after assuming √2 = p/q (in lowest terms, p and q coprime), we get p² = 2q². This means p is even. Writing p = 2m leads to the conclusion that:",
    options: ["A) q is odd", "B) q is even too, contradicting that p and q are coprime", "C) q² = 4m²", "D) m = 0"],
    answer: "B",
    explanation: "Substituting p = 2m: (2m)² = 2q² → 4m² = 2q² → q² = 2m². So q² is even, meaning q is also even. But if both p and q are even, they share factor 2 — contradicting our assumption that p and q are coprime. So √2 must be irrational."
  },
  {
    id: 8408, section: "Maths",
    text: "Rationalise the denominator: (√5 + √2)/(√5 − √2)",
    options: ["A) (7 + 2√10)/3", "B) (7 − 2√10)/3", "C) 7 + 2√10", "D) (√5 + √2)²"],
    answer: "A",
    explanation: "Multiply by (√5+√2)/(√5+√2): (√5+√2)²/[(√5)²−(√2)²] = (5+2√10+2)/(5−2) = (7+2√10)/3."
  },
  {
    id: 8409, section: "Maths",
    text: "If x = 3 − 2√2, then x + 1/x = ?",
    options: ["A) 6", "B) 4√2", "C) 6 − 4√2", "D) 3"],
    answer: "A",
    explanation: "Rationalise 1/x: 1/(3−2√2) × (3+2√2)/(3+2√2) = (3+2√2)/(9−8) = 3+2√2. So x + 1/x = (3−2√2) + (3+2√2) = 6. The irrational parts cancel."
  },
  {
    id: 8410, section: "Maths",
    text: "Simplify: (2^(1/3))³ × (3^(1/2))⁴",
    options: ["A) 6", "B) 12", "C) 18", "D) 24"],
    answer: "C",
    explanation: "(2^(1/3))³ = 2^(1/3 × 3) = 2¹ = 2. (3^(1/2))⁴ = 3^(1/2 × 4) = 3² = 9. Product = 2 × 9 = 18."
  },
  {
    id: 8411, section: "Maths",
    text: "If a = 2 + √3 and b = 2 − √3, then a² + b² = ?",
    options: ["A) 8", "B) 14", "C) 16", "D) 4√3"],
    answer: "B",
    explanation: "a² = (2+√3)² = 4+4√3+3 = 7+4√3. b² = (2−√3)² = 4−4√3+3 = 7−4√3. a²+b² = (7+4√3)+(7−4√3) = 14. The √3 terms cancel."
  },
  {
    id: 8412, section: "Maths",
    text: "∛27 × ∛8 = ?",
    options: ["A) ∛35", "B) ∛36", "C) 6", "D) ∛216"],
    answer: "C",
    explanation: "∛27 × ∛8 = ∛(27×8) = ∛216 = ∛(6³) = 6. So both C and D are equivalent — but C gives the simplest final value. ∛216 = 6."
  },
  {
    id: 8413, section: "Maths",
    text: "(256)^0.16 × (256)^0.09 = ?",
    options: ["A) 2", "B) 4", "C) 8", "D) 16"],
    answer: "B",
    explanation: "(256)^0.16 × (256)^0.09 = 256^(0.16+0.09) = 256^0.25 = 256^(1/4). Now 256 = 2⁸, so (2⁸)^(1/4) = 2² = 4."
  },
  {
    id: 8414, section: "Maths",
    text: "After full rationalisation, 1/(√5 + √3 + √2) simplifies to:",
    options: [
      "A) (3√2 + 2√3 − √30)/12",
      "B) (√5 − √3 − √2)/2",
      "C) 1/(√5 + √5)",
      "D) (√3 + √2 − √5)/4"
    ],
    answer: "A",
    explanation: "Step 1: multiply by (√5−(√3+√2))/(√5−(√3+√2)). Denom = 5−(√3+√2)² = 5−(5+2√6) = −2√6. Result: (√5−√3−√2)/(−2√6) = (√3+√2−√5)/(2√6). Step 2: rationalise √6: ×√6/√6 = √6(√3+√2−√5)/12 = (√18+√12−√30)/12 = (3√2+2√3−√30)/12."
  },
  {
    id: 8415, section: "Maths",
    text: "If 2^x = 3^y = 6^z, then 1/x + 1/y − 1/z = ?",
    options: ["A) 1", "B) 2", "C) 0", "D) 1/2"],
    answer: "C",
    explanation: "Let 2^x = 3^y = 6^z = k. Then 2 = k^(1/x), 3 = k^(1/y), 6 = k^(1/z). Since 6 = 2×3: k^(1/z) = k^(1/x) × k^(1/y) = k^(1/x+1/y). So 1/z = 1/x+1/y, giving 1/x+1/y−1/z = 0."
  },
  {
    id: 8416, section: "Maths",
    text: "(√3 + 1/√3)² = ?",
    options: ["A) 4", "B) 16/3", "C) 4/3", "D) 3 + 1/3"],
    answer: "B",
    explanation: "Using (a+b)² = a²+2ab+b²: (√3)² + 2×√3×(1/√3) + (1/√3)² = 3 + 2×1 + 1/3 = 3+2+1/3 = 5+1/3 = 16/3."
  },
  {
    id: 8417, section: "Maths",
    text: "Simplify: [6/(2√3 − √6)] × √(2/3)",
    options: ["A) 2 + 2√2", "B) 2√2 + 2", "C) √6 + 2", "D) 4"],
    answer: "B",
    explanation: "2√3−√6 = √3(2−√2). So 6/(√3(2−√2)) × √2/√3 = 6√2/(3(2−√2)) = 2√2/(2−√2). Rationalise: ×(2+√2)/(2+√2) = 2√2(2+√2)/(4−2) = 2√2(2+√2)/2 = √2(2+√2) = 2√2+2."
  },
  {
    id: 8418, section: "Maths",
    text: "If 4^x + 4^(x−1) = 80, then x = ?",
    options: ["A) 2", "B) 3", "C) 4", "D) 5/2"],
    answer: "B",
    explanation: "4^x + 4^x/4 = 80 → 4^x(1 + 1/4) = 80 → 4^x × 5/4 = 80 → 4^x = 64 = 4³. So x = 3."
  },
  {
    id: 8419, section: "Maths",
    text: "∜162 × ∜2 = ?",
    options: ["A) ∜164", "B) 3√2", "C) 3∜2", "D) √18"],
    answer: "B",
    explanation: "∜162 × ∜2 = ∜(162×2) = ∜324. Now 324 = 4×81 = 2²×3⁴. So ∜(2²×3⁴) = ∜(2²) × ∜(3⁴) = 2^(2/4) × 3^(4/4) = 2^(1/2) × 3 = 3√2."
  },
  {
    id: 8420, section: "Maths",
    text: "If p = 7 + 4√3, then √p − 1/√p = ?",
    options: ["A) 2", "B) 2√3", "C) 4", "D) √3 − 1"],
    answer: "B",
    explanation: "Notice 7+4√3 = 4+4√3+3 = (2+√3)². So √p = 2+√3. Then 1/√p = 1/(2+√3) = (2−√3)/((2+√3)(2−√3)) = (2−√3)/1 = 2−√3. Therefore √p − 1/√p = (2+√3)−(2−√3) = 2√3."
  }

];
