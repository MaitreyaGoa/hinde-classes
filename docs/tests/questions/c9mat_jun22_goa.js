// ============================================================
//  Std 9 Goa Board Maths — Number System
//  Hinde Classes | hindeclasses.com
//  Maitreya Hinde | 7358425108
//  NCERT Ch. 1 | Goa Board | 30Q | 60 min
//  50% Moderate + 50% Hard | PYQ-aligned
//  ID range: 8361–8390
// ============================================================

var questions = [

  // ══ MODERATE (Q1–Q15) ════════════════════════════════════

  {
    id: 8361, section: "Maths",
    text: "State whether True or False: Every integer is a whole number.",
    options: ["A) True", "B) False", "C) True only for positive integers", "D) True only for even integers"],
    answer: "B",
    explanation: "Whole numbers are 0, 1, 2, 3, ... Negative integers (−1, −2, −3, ...) are NOT whole numbers. So the statement is False. Every whole number IS an integer, but not vice versa."
  },
  {
    id: 8362, section: "Maths",
    text: "The decimal expansion 0.666... is an example of a:",
    options: ["A) Terminating decimal", "B) Non-terminating non-repeating decimal", "C) Non-terminating repeating decimal", "D) Irrational number"],
    answer: "C",
    explanation: "0.666... = 0.6̄ is non-terminating (never ends) but repeating (digit 6 repeats). All non-terminating repeating decimals are rational numbers. 0.666... = 2/3."
  },
  {
    id: 8363, section: "Maths",
    text: "Which of the following is an irrational number?",
    options: ["A) √4", "B) √9", "C) √16", "D) √5"],
    answer: "D",
    explanation: "√4 = 2, √9 = 3, √16 = 4 — all perfect squares, so their roots are rational. √5 = 2.2360679... is non-terminating, non-repeating, so it is irrational."
  },
  {
    id: 8364, section: "Maths",
    text: "π (pi) is:",
    options: ["A) A rational number because it equals 22/7", "B) An irrational number", "C) A whole number", "D) A negative integer"],
    answer: "B",
    explanation: "π = 3.14159265... is non-terminating and non-repeating, so it is irrational. 22/7 is only an approximation of π, not its exact value. π cannot be expressed as p/q for any integers p, q."
  },
  {
    id: 8365, section: "Maths",
    text: "Which statement is FALSE?",
    options: ["A) Every irrational number is a real number", "B) Every rational number is a real number", "C) Every real number is an irrational number", "D) √2 is an irrational number"],
    answer: "C",
    explanation: "Real numbers include BOTH rational and irrational numbers. So not every real number is irrational — rational numbers (like 1/2, 3, 0) are also real. Options A, B, and D are all true."
  },
  {
    id: 8366, section: "Maths",
    text: "The decimal expansion of 1/7 is:",
    options: ["A) 0.142857142857... (non-terminating repeating)", "B) 0.1428 (terminating)", "C) 0.14280... (non-terminating non-repeating)", "D) 1.7"],
    answer: "A",
    explanation: "1/7 = 0.142857142857... — the block '142857' repeats indefinitely. This is non-terminating repeating, which confirms 1/7 is a rational number."
  },
  {
    id: 8367, section: "Maths",
    text: "Which of the following decimal numbers is rational?",
    options: ["A) 0.1010010001... (pattern of increasing zeros)", "B) 1.41421356... (√2)", "C) 3.14159265... (π)", "D) 0.333... (3 repeating)"],
    answer: "D",
    explanation: "0.333... = 1/3. A non-terminating but REPEATING decimal is rational. The other options are all non-terminating and non-repeating (irrational). A pattern that does not repeat exactly is not periodic, making it irrational."
  },
  {
    id: 8368, section: "Maths",
    text: "Simplify: √45 + 3√20 − 2√5",
    options: ["A) 5√5", "B) 6√5", "C) 7√5", "D) 9√5"],
    answer: "C",
    explanation: "√45 = √(9×5) = 3√5. 3√20 = 3×√(4×5) = 3×2√5 = 6√5. So 3√5 + 6√5 − 2√5 = 7√5."
  },
  {
    id: 8369, section: "Maths",
    text: "(√3 + √2)(√3 − √2) = ?",
    options: ["A) √6", "B) 1", "C) 5", "D) √5"],
    answer: "B",
    explanation: "Using identity (a+b)(a−b) = a²−b²: (√3+√2)(√3−√2) = (√3)²−(√2)² = 3−2 = 1."
  },
  {
    id: 8370, section: "Maths",
    text: "Is 0 a rational number? If yes, which of the following correctly represents 0 as p/q?",
    options: ["A) 0/0", "B) 0/1", "C) 1/0", "D) 0 is not rational"],
    answer: "B",
    explanation: "Yes, 0 is a rational number. It can be written as 0/1, where p = 0 and q = 1 (q ≠ 0). Note: 0/0 and 1/0 are undefined, so they don't work."
  },
  {
    id: 8371, section: "Maths",
    text: "The collection of all rational numbers and irrational numbers together is called:",
    options: ["A) Natural numbers", "B) Whole numbers", "C) Integers", "D) Real numbers"],
    answer: "D",
    explanation: "Real numbers (ℝ) = Rational numbers (ℚ) ∪ Irrational numbers. Every point on the number line represents a real number. Natural ⊂ Whole ⊂ Integer ⊂ Rational ⊂ Real."
  },
  {
    id: 8372, section: "Maths",
    text: "After rationalising the denominator of 1/√5, we get:",
    options: ["A) √5", "B) 5/√5", "C) √5/5", "D) 1/5"],
    answer: "C",
    explanation: "Multiply numerator and denominator by √5: (1×√5)/(√5×√5) = √5/5. The denominator becomes rational (5), and the result is √5/5."
  },
  {
    id: 8373, section: "Maths",
    text: "Which of the following irrational numbers lies between 1 and 2?",
    options: ["A) √1", "B) √2", "C) √4", "D) √9"],
    answer: "B",
    explanation: "√2 ≈ 1.4142, which lies between 1 and 2. √1 = 1, √4 = 2, √9 = 3 — all rational. √2 is the only irrational option and it lies strictly between 1 and 2."
  },
  {
    id: 8374, section: "Maths",
    text: "The decimal expansion of 3/8 is:",
    options: ["A) 0.375 (terminating)", "B) 0.333... (non-terminating repeating)", "C) 0.37500001... (non-terminating)", "D) 3.8"],
    answer: "A",
    explanation: "3 ÷ 8 = 0.375, which terminates. A fraction p/q in lowest terms gives a terminating decimal if and only if the denominator q has no prime factors other than 2 or 5. Here 8 = 2³, so 3/8 is terminating."
  },
  {
    id: 8375, section: "Maths",
    text: "(√5)² = ?",
    options: ["A) 25", "B) √25", "C) 5", "D) 10"],
    answer: "C",
    explanation: "By definition, (√a)² = a for any non-negative real number a. So (√5)² = 5. This is why squaring and square root are inverse operations."
  },

  // ══ HARD (Q16–Q30) ═══════════════════════════════════════

  {
    id: 8376, section: "Maths",
    text: "Convert 0.373737... into p/q form:",
    options: ["A) 37/99", "B) 37/100", "C) 37/999", "D) 3/9"],
    answer: "A",
    explanation: "Let x = 0.373737... Since 2 digits repeat, multiply by 100: 100x = 37.373737... Subtract: 99x = 37. So x = 37/99."
  },
  {
    id: 8377, section: "Maths",
    text: "Rationalise the denominator: 5/(√3 + √2)",
    options: ["A) 5(√3 − √2)", "B) 5(√3 + √2)", "C) 5/(√3 − √2)", "D) √3 − √2"],
    answer: "A",
    explanation: "Multiply by (√3−√2)/(√3−√2): 5(√3−√2)/[(√3)²−(√2)²] = 5(√3−√2)/(3−2) = 5(√3−√2)/1 = 5(√3−√2)."
  },
  {
    id: 8378, section: "Maths",
    text: "Expand and simplify: (3 + √2)²",
    options: ["A) 9 + 2", "B) 11 + 6√2", "C) 9 + 6√2", "D) 11 + 2√2"],
    answer: "B",
    explanation: "Using (a+b)² = a² + 2ab + b²: (3+√2)² = 3² + 2×3×√2 + (√2)² = 9 + 6√2 + 2 = 11 + 6√2."
  },
  {
    id: 8379, section: "Maths",
    text: "If x = 2 + √3, then x + 1/x = ?",
    options: ["A) 4", "B) 2√3", "C) 4 + 2√3", "D) 2"],
    answer: "A",
    explanation: "1/x = 1/(2+√3). Rationalise: ×(2−√3)/(2−√3) = (2−√3)/(4−3) = 2−√3. So x + 1/x = (2+√3) + (2−√3) = 4."
  },
  {
    id: 8380, section: "Maths",
    text: "√2 × √8 = ?",
    options: ["A) √10", "B) 2√4", "C) 4", "D) 2√2"],
    answer: "C",
    explanation: "√2 × √8 = √(2×8) = √16 = 4. Alternatively: √8 = 2√2, so √2 × 2√2 = 2 × (√2)² = 2 × 2 = 4."
  },
  {
    id: 8381, section: "Maths",
    text: "Using laws of exponents: (2³)² = ?",
    options: ["A) 2⁵", "B) 2⁶", "C) 64", "D) Both B and C"],
    answer: "D",
    explanation: "(2³)² = 2^(3×2) = 2⁶ = 64. Both B (2⁶) and C (64) are correct representations of the same value. When both B and C are offered as separate options but D says 'Both B and C', D is the most complete answer."
  },
  {
    id: 8382, section: "Maths",
    text: "3^(1/2) × 3^(1/3) = ?",
    options: ["A) 3^(2/3)", "B) 3^(5/6)", "C) 9^(1/6)", "D) 3^(2/5)"],
    answer: "B",
    explanation: "Using law aᵐ × aⁿ = a^(m+n): 3^(1/2) × 3^(1/3) = 3^(1/2 + 1/3) = 3^(3/6 + 2/6) = 3^(5/6)."
  },
  {
    id: 8383, section: "Maths",
    text: "(√5 + √3)² + (√5 − √3)² = ?",
    options: ["A) 2√15", "B) 8", "C) 16", "D) 4√15"],
    answer: "C",
    explanation: "(√5+√3)² = 5 + 2√15 + 3 = 8 + 2√15. (√5−√3)² = 5 − 2√15 + 3 = 8 − 2√15. Sum = (8+2√15) + (8−2√15) = 16. The irrational terms cancel."
  },
  {
    id: 8384, section: "Maths",
    text: "5^(1/3) ÷ 5^(1/5) = ?",
    options: ["A) 5^(2/15)", "B) 5^(2/3)", "C) 5^(1/2)", "D) 5^(4/15)"],
    answer: "A",
    explanation: "Using aᵐ ÷ aⁿ = a^(m−n): 5^(1/3) ÷ 5^(1/5) = 5^(1/3 − 1/5) = 5^(5/15 − 3/15) = 5^(2/15)."
  },
  {
    id: 8385, section: "Maths",
    text: "Rationalise the denominator: 1/(√7 − √6)",
    options: ["A) √7 − √6", "B) 1/(√7 + √6)", "C) √7 + √6", "D) (√7−√6)/13"],
    answer: "C",
    explanation: "Multiply by (√7+√6)/(√7+√6): (√7+√6)/[(√7)²−(√6)²] = (√7+√6)/(7−6) = (√7+√6)/1 = √7+√6."
  },
  {
    id: 8386, section: "Maths",
    text: "Two irrational numbers between √2 and √3 are: (√2 ≈ 1.414, √3 ≈ 1.732)",
    options: ["A) √2.1 and √2.9", "B) √1 and √4", "C) 1.5 and 1.6", "D) 3/2 and 5/3"],
    answer: "A",
    explanation: "√2.1 ≈ 1.449 and √2.9 ≈ 1.703, both lie between √2 ≈ 1.414 and √3 ≈ 1.732. Since 2.1 and 2.9 are not perfect squares, √2.1 and √2.9 are irrational. Options C and D give rational numbers, not irrational ones."
  },
  {
    id: 8387, section: "Maths",
    text: "If a = 5 + 2√6, then √a = ?",
    options: ["A) √5 + √6", "B) √3 + √2", "C) 2 + √3", "D) √6 + 1"],
    answer: "B",
    explanation: "5 + 2√6 = 3 + 2 + 2√6 = (√3)² + (√2)² + 2×√3×√2 = (√3 + √2)². Therefore √a = √3 + √2. Verify: (√3+√2)² = 3 + 2√6 + 2 = 5 + 2√6 ✓"
  },
  {
    id: 8388, section: "Maths",
    text: "Simplify: 64^(−1/3) × 64^(1/6)",
    options: ["A) 1/4", "B) 1/2", "C) 2", "D) 4"],
    answer: "B",
    explanation: "64^(−1/3) × 64^(1/6) = 64^(−1/3 + 1/6) = 64^(−2/6 + 1/6) = 64^(−1/6). Now 64 = 2⁶, so 64^(1/6) = 2. Therefore 64^(−1/6) = 1/2."
  },
  {
    id: 8389, section: "Maths",
    text: "Which of the following lies between 1/√2 and √2? (1/√2 ≈ 0.707, √2 ≈ 1.414)",
    options: ["A) 1/2", "B) 2", "C) 1", "D) √3"],
    answer: "C",
    explanation: "1/√2 ≈ 0.707 and √2 ≈ 1.414. Among the options: 1/2 = 0.5 (less than 0.707, so outside), 2 (greater than 1.414), √3 ≈ 1.732 (greater than 1.414). Only 1 lies between 0.707 and 1.414."
  },
  {
    id: 8390, section: "Maths",
    text: "If (125)^x = 5^9, then x = ?",
    options: ["A) 9", "B) 5", "C) 3", "D) 1/3"],
    answer: "C",
    explanation: "125 = 5³. So (5³)^x = 5^9 → 5^(3x) = 5^9. Since bases are equal, 3x = 9, giving x = 3."
  }

];
