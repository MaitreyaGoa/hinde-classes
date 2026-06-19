// ============================================================
//  Std 7 IB Maths — Chapter 3: Rational Numbers
//  Hinde Classes | hindeclasses.com
//  Maitreya Hinde | 7358425108
//  ICSE Class 7 Syllabus | IB Section | 30Q | 50 min
//  50% Moderate + 50% Hard
//  ID range: 8761–8790
// ============================================================

var questions = [

  // ══ MODERATE (Q1–Q15) ════════════════════════════════════

  {
    id: 8761, section: "Maths",
    text: "Is −7 a rational number? If yes, express it in p/q form.",
    options: ["A) Yes, −7/1", "B) No, it is an integer only", "C) Yes, but only as 7/−1", "D) No, negative numbers aren't rational"],
    answer: "A",
    explanation: "Every integer is a rational number. −7 can be written as −7/1, where p=−7 and q=1 (q≠0)."
  },
  {
    id: 8762, section: "Maths",
    text: "Express 24/−36 in standard form.",
    options: ["A) 24/−36", "B) −2/3", "C) 2/−3", "D) −4/6"],
    answer: "B",
    explanation: "Standard form requires the denominator to be positive and the fraction in lowest terms. 24/−36 = −24/36 = −2/3 (dividing by HCF 12)."
  },
  {
    id: 8763, section: "Maths",
    text: "Evaluate: (−3/5) + (2/5)",
    options: ["A) −1/5", "B) 1/5", "C) −1", "D) 1"],
    answer: "A",
    explanation: "Same denominator, add numerators: (−3+2)/5 = −1/5."
  },
  {
    id: 8764, section: "Maths",
    text: "Evaluate: (−7/8) × (4/21)",
    options: ["A) −1/6", "B) 1/6", "C) −28/168", "D) −4/21"],
    answer: "A",
    explanation: "(−7/8) × (4/21) = (−7×4)/(8×21) = −28/168. Simplifying by HCF 28: −28/168 = −1/6."
  },
  {
    id: 8765, section: "Maths",
    text: "Find the additive inverse of 5/−9.",
    options: ["A) 5/9", "B) −5/9", "C) 9/5", "D) −9/5"],
    answer: "A",
    explanation: "5/−9 in standard form = −5/9. The additive inverse of −5/9 is 5/9, since −5/9 + 5/9 = 0."
  },
  {
    id: 8766, section: "Maths",
    text: "Evaluate: (−4/9) ÷ (2/3)",
    options: ["A) 2/3", "B) −2/3", "C) −8/27", "D) 8/27"],
    answer: "B",
    explanation: "Dividing by a fraction means multiplying by its reciprocal: (−4/9) × (3/2) = −12/18 = −2/3."
  },
  {
    id: 8767, section: "Maths",
    text: "Which is greater: −3/4 or −2/3?",
    options: ["A) −3/4", "B) −2/3", "C) They are equal", "D) Cannot be compared"],
    answer: "B",
    explanation: "Converting to decimals: −3/4 = −0.75, −2/3 ≈ −0.667. Since −0.667 > −0.75 (less negative is greater), −2/3 is greater."
  },
  {
    id: 8768, section: "Maths",
    text: "Express 5/−6 in standard form.",
    options: ["A) 5/−6", "B) −5/6", "C) −6/5", "D) 6/−5"],
    answer: "B",
    explanation: "Standard form requires a positive denominator. 5/−6 = −5/6."
  },
  {
    id: 8769, section: "Maths",
    text: "Find a rational number exactly between −1/2 and 0.",
    options: ["A) −1/4", "B) 1/4", "C) −3/4", "D) −1"],
    answer: "A",
    explanation: "The mean of −1/2 and 0 is (−1/2+0)/2 = −1/4, which lies exactly between them."
  },
  {
    id: 8770, section: "Maths",
    text: "Evaluate: (−2/5) − (−3/10)",
    options: ["A) 1/10", "B) −1/10", "C) −7/10", "D) 7/10"],
    answer: "B",
    explanation: "LCM of 5,10 is 10. (−2/5) = (−4/10). So (−4/10) − (−3/10) = (−4/10)+(3/10) = −1/10."
  },
  {
    id: 8771, section: "Maths",
    text: "What is the multiplicative identity for rational numbers?",
    options: ["A) 0", "B) −1", "C) 1", "D) Any rational number"],
    answer: "C",
    explanation: "The multiplicative identity is the number that, when multiplied by any rational number, gives back the same number. For any rational a: a × 1 = a. So 1 is the multiplicative identity."
  },
  {
    id: 8772, section: "Maths",
    text: "Evaluate: (3/−7) × (−7/3)",
    options: ["A) 1", "B) −1", "C) 0", "D) 9/49"],
    answer: "A",
    explanation: "(3/−7) = (−3/7). So (−3/7) × (−7/3) = 21/21 = 1. This shows the product of a number and its multiplicative inverse equals 1."
  },
  {
    id: 8773, section: "Maths",
    text: "Is 0 a rational number?",
    options: ["A) Yes, since 0 = 0/1", "B) No, 0 is not a number", "C) Yes, but only sometimes", "D) No, rational numbers must be non-zero"],
    answer: "A",
    explanation: "0 can be written as 0/1, where p=0 and q=1 (q≠0). Since this satisfies the p/q form, 0 is a rational number."
  },
  {
    id: 8774, section: "Maths",
    text: "Evaluate: (−9/4) + (5/4)",
    options: ["A) 1", "B) −1", "C) 14/4", "D) −14/4"],
    answer: "B",
    explanation: "Same denominator, add numerators: (−9+5)/4 = −4/4 = −1."
  },
  {
    id: 8775, section: "Maths",
    text: "Simplify −45/60 to its lowest terms.",
    options: ["A) −9/12", "B) −3/4", "C) −15/20", "D) −5/4"],
    answer: "B",
    explanation: "HCF of 45 and 60 is 15. −45/60 = −(45÷15)/(60÷15) = −3/4."
  },

  // ══ HARD (Q16–Q30) ═══════════════════════════════════════

  {
    id: 8776, section: "Maths",
    text: "Simplify: (−3/5) × (10/9) ÷ (−2/3)",
    options: ["A) 1", "B) −1", "C) 2/3", "D) −2/3"],
    answer: "A",
    explanation: "Step 1: (−3/5)×(10/9) = −30/45 = −2/3. Step 2: (−2/3) ÷ (−2/3) = 1 (any nonzero number divided by itself equals 1)."
  },
  {
    id: 8777, section: "Maths",
    text: "Verify distributivity: does (−2/3) × (3/4 + (−1/2)) equal (−2/3)×(3/4) + (−2/3)×(−1/2)?",
    options: ["A) Yes, both equal −1/6", "B) Yes, both equal 1/6", "C) No, they are different", "D) Cannot be determined"],
    answer: "A",
    explanation: "LHS: 3/4+(−1/2) = 1/4. (−2/3)×(1/4) = −2/12 = −1/6. RHS: (−2/3)×(3/4) + (−2/3)×(−1/2) = −1/2 + 1/3 = −3/6+2/6 = −1/6. Both equal −1/6, confirming distributivity."
  },
  {
    id: 8778, section: "Maths",
    text: "If x + (−5/6) = 1/3, find x.",
    options: ["A) 1/2", "B) 7/6", "C) −1/2", "D) −7/6"],
    answer: "B",
    explanation: "x = 1/3 − (−5/6) = 1/3 + 5/6 = 2/6 + 5/6 = 7/6."
  },
  {
    id: 8779, section: "Maths",
    text: "Find the product of the additive inverse of −8/9 and the multiplicative inverse of −3/4.",
    options: ["A) 32/27", "B) −32/27", "C) 24/36", "D) −24/36"],
    answer: "B",
    explanation: "Additive inverse of −8/9 = 8/9. Multiplicative inverse of −3/4 = −4/3. Product: (8/9) × (−4/3) = −32/27."
  },
  {
    id: 8780, section: "Maths",
    text: "Between which two consecutive integers does −7/12 lie?",
    options: ["A) 0 and 1", "B) −1 and 0", "C) −2 and −1", "D) 1 and 2"],
    answer: "B",
    explanation: "−7/12 ≈ −0.583, which lies between −1 and 0 on the number line."
  },
  {
    id: 8781, section: "Maths",
    text: "Simplify: (2/3 − 1/6) ÷ (1/2 + 1/3)",
    options: ["A) 3/5", "B) 5/3", "C) 1/2", "D) 2/5"],
    answer: "A",
    explanation: "Step 1: 2/3−1/6 = 4/6−1/6 = 3/6 = 1/2. Step 2: 1/2+1/3 = 3/6+2/6 = 5/6. Step 3: (1/2)÷(5/6) = (1/2)×(6/5) = 6/10 = 3/5."
  },
  {
    id: 8782, section: "Maths",
    text: "If a/b = −3/5 and a = −12, find b.",
    options: ["A) 7.2", "B) 20", "C) −20", "D) 36/5"],
    answer: "B",
    explanation: "a/b = −3/5 → −12/b = −3/5. Cross-multiply: −12×5 = −3×b → −60 = −3b → b = 20."
  },
  {
    id: 8783, section: "Maths",
    text: "Arrange in ascending order: −2/3, −5/6, 1/2, −1/4",
    options: [
      "A) −5/6, −2/3, −1/4, 1/2",
      "B) −2/3, −5/6, −1/4, 1/2",
      "C) 1/2, −1/4, −2/3, −5/6",
      "D) −5/6, −1/4, −2/3, 1/2"
    ],
    answer: "A",
    explanation: "Converting to decimals: −5/6≈−0.833, −2/3≈−0.667, −1/4=−0.25, 1/2=0.5. Ascending order (smallest to largest): −5/6, −2/3, −1/4, 1/2."
  },
  {
    id: 8784, section: "Maths",
    text: "Find the value of: |(−3/5)| + |(−7/10)| − |(1/2)|",
    options: ["A) 4/5", "B) 1", "C) 9/10", "D) 3/5"],
    answer: "A",
    explanation: "Absolute values remove signs: |−3/5|=3/5, |−7/10|=7/10, |1/2|=1/2. So 3/5+7/10−1/2 = 6/10+7/10−5/10 = 8/10 = 4/5."
  },
  {
    id: 8785, section: "Maths",
    text: "Which of these rational numbers does NOT lie between −1 and 1: −1/2, 0, 2/3, 3/2?",
    options: ["A) −1/2", "B) 0", "C) 2/3", "D) 3/2"],
    answer: "D",
    explanation: "3/2 = 1.5, which is greater than 1, so it does NOT lie between −1 and 1. The other three values (−1/2, 0, 2/3) all lie strictly between −1 and 1."
  },
  {
    id: 8786, section: "Maths",
    text: "Evaluate: (−5/8) + (3/4) − (1/8)",
    options: ["A) 0", "B) 1/4", "C) −1/4", "D) 1"],
    answer: "A",
    explanation: "LCM of 8,4,8 is 8. (−5/8) + (6/8) − (1/8) = (−5+6−1)/8 = 0/8 = 0."
  },
  {
    id: 8787, section: "Maths",
    text: "Evaluate: (7/9) × (−9/14)",
    options: ["A) 1/2", "B) −1/2", "C) −63/126", "D) 63/126"],
    answer: "B",
    explanation: "(7/9) × (−9/14) = (7×−9)/(9×14) = −63/126. Simplifying by HCF 63: −63/126 = −1/2."
  },
  {
    id: 8788, section: "Maths",
    text: "Find the additive inverse of −11/15.",
    options: ["A) −11/15", "B) 11/15", "C) 15/11", "D) −15/11"],
    answer: "B",
    explanation: "The additive inverse of −11/15 is 11/15, since −11/15 + 11/15 = 0."
  },
  {
    id: 8789, section: "Maths",
    text: "Find the multiplicative inverse of −8/13.",
    options: ["A) 8/13", "B) 13/8", "C) −13/8", "D) −8/13"],
    answer: "C",
    explanation: "The multiplicative inverse of a/b is b/a. For −8/13, the multiplicative inverse is −13/8, since (−8/13)×(−13/8) = 104/104 = 1."
  },
  {
    id: 8790, section: "Maths",
    text: "If a is any non-zero rational number, what is the value of a ÷ a?",
    options: ["A) 0", "B) a", "C) 1", "D) 2a"],
    answer: "C",
    explanation: "Any non-zero number divided by itself always equals 1. This holds true for any rational number a (a ≠ 0)."
  }

];
