// ============================================================
//  Std 7 IB Maths — Chapter 2: Fractions and Decimals
//  Hinde Classes | hindeclasses.com
//  Maitreya Hinde | 7358425108
//  ICSE Class 7 Syllabus | IB Section | 30Q | 50 min
//  50% Moderate + 50% Hard
//  ID range: 8731–8760
// ============================================================

var questions = [

  // ══ MODERATE (Q1–Q15) ════════════════════════════════════

  {
    id: 8731, section: "Maths",
    text: "Evaluate: 3/4 + 1/6",
    options: ["A) 4/10", "B) 11/12", "C) 2/5", "D) 7/12"],
    answer: "B",
    explanation: "LCM of 4 and 6 is 12. 3/4 = 9/12, 1/6 = 2/12. Sum = 9/12 + 2/12 = 11/12."
  },
  {
    id: 8732, section: "Maths",
    text: "Evaluate: 5/8 − 1/4",
    options: ["A) 4/8", "B) 1/2", "C) 3/8", "D) 1/4"],
    answer: "C",
    explanation: "LCM of 8 and 4 is 8. 1/4 = 2/8. So 5/8 − 2/8 = 3/8."
  },
  {
    id: 8733, section: "Maths",
    text: "Evaluate: 2/3 × 9/10",
    options: ["A) 18/30", "B) 3/5", "C) 11/13", "D) 2/5"],
    answer: "B",
    explanation: "2/3 × 9/10 = (2×9)/(3×10) = 18/30 = 3/5 (after simplifying by dividing both by 6)."
  },
  {
    id: 8734, section: "Maths",
    text: "Evaluate: 4/5 ÷ 2/15",
    options: ["A) 8/75", "B) 3", "C) 6", "D) 2/3"],
    answer: "C",
    explanation: "Dividing by a fraction means multiplying by its reciprocal: 4/5 × 15/2 = 60/10 = 6."
  },
  {
    id: 8735, section: "Maths",
    text: "Express 0.45 as a fraction in its simplest form.",
    options: ["A) 45/100", "B) 9/20", "C) 4/9", "D) 45/10"],
    answer: "B",
    explanation: "0.45 = 45/100. HCF of 45 and 100 is 5. Simplifying: 45÷5 / 100÷5 = 9/20."
  },
  {
    id: 8736, section: "Maths",
    text: "Evaluate: 3.7 + 2.85",
    options: ["A) 5.92", "B) 6.55", "C) 6.45", "D) 5.55"],
    answer: "B",
    explanation: "Aligning decimal points: 3.70 + 2.85 = 6.55."
  },
  {
    id: 8737, section: "Maths",
    text: "Evaluate: 7.2 − 3.65",
    options: ["A) 3.45", "B) 3.65", "C) 3.55", "D) 4.45"],
    answer: "C",
    explanation: "Aligning decimal points: 7.20 − 3.65 = 3.55."
  },
  {
    id: 8738, section: "Maths",
    text: "Evaluate: 0.6 × 0.4",
    options: ["A) 0.024", "B) 0.24", "C) 2.4", "D) 24"],
    answer: "B",
    explanation: "0.6 × 0.4 = 6×4/100 = 24/100 = 0.24 (multiply as whole numbers, then place decimal: 2 decimal digits total)."
  },
  {
    id: 8739, section: "Maths",
    text: "Evaluate: 4.8 ÷ 0.2",
    options: ["A) 2.4", "B) 24", "C) 0.24", "D) 240"],
    answer: "B",
    explanation: "Multiply both numbers by 10 to remove decimals: 48 ÷ 2 = 24."
  },
  {
    id: 8740, section: "Maths",
    text: "Express 2½ as a decimal.",
    options: ["A) 2.2", "B) 2.05", "C) 2.5", "D) 25"],
    answer: "C",
    explanation: "2½ = 2 + 1/2 = 2 + 0.5 = 2.5."
  },
  {
    id: 8741, section: "Maths",
    text: "Evaluate: 1/3 + 1/6 + 1/2",
    options: ["A) 1", "B) 2/3", "C) 5/6", "D) 1/6"],
    answer: "A",
    explanation: "LCM of 3, 6, 2 is 6. 1/3=2/6, 1/6=1/6, 1/2=3/6. Sum = 2/6+1/6+3/6 = 6/6 = 1."
  },
  {
    id: 8742, section: "Maths",
    text: "Find 5/6 of 24.",
    options: ["A) 18", "B) 20", "C) 22", "D) 4"],
    answer: "B",
    explanation: "5/6 of 24 = (5×24)/6 = 120/6 = 20."
  },
  {
    id: 8743, section: "Maths",
    text: "Which is the largest among: 3/4, 5/8, 7/10, 2/3?",
    options: ["A) 3/4", "B) 5/8", "C) 7/10", "D) 2/3"],
    answer: "A",
    explanation: "Converting to decimals: 3/4=0.75, 5/8=0.625, 7/10=0.7, 2/3≈0.667. The largest is 3/4."
  },
  {
    id: 8744, section: "Maths",
    text: "Express 0.125 as a fraction in simplest form.",
    options: ["A) 125/1000", "B) 1/8", "C) 1/4", "D) 25/100"],
    answer: "B",
    explanation: "0.125 = 125/1000. HCF of 125 and 1000 is 125. Simplifying: 125÷125 / 1000÷125 = 1/8."
  },
  {
    id: 8745, section: "Maths",
    text: "Find the reciprocal of 3/7.",
    options: ["A) 7/3", "B) 3/7", "C) −3/7", "D) 1/21"],
    answer: "A",
    explanation: "The reciprocal of a fraction a/b is b/a. The reciprocal of 3/7 is 7/3."
  },

  // ══ HARD (Q16–Q30) ═══════════════════════════════════════

  {
    id: 8746, section: "Maths",
    text: "Simplify: (2/3 + 1/4) × (5/6 − 1/3)",
    options: ["A) 11/24", "B) 11/12", "C) 5/12", "D) 7/24"],
    answer: "A",
    explanation: "Step 1: 2/3+1/4 = 8/12+3/12 = 11/12. Step 2: 5/6−1/3 = 5/6−2/6 = 3/6 = 1/2. Step 3: 11/12 × 1/2 = 11/24."
  },
  {
    id: 8747, section: "Maths",
    text: "Evaluate: 3.5 × 2.4 ÷ 0.6",
    options: ["A) 14", "B) 8.4", "C) 1.4", "D) 5.04"],
    answer: "A",
    explanation: "Step 1: 3.5 × 2.4 = 8.4. Step 2: 8.4 ÷ 0.6 = 84 ÷ 6 = 14 (multiplying both by 10 to clear decimals)."
  },
  {
    id: 8748, section: "Maths",
    text: "Evaluate: 5⅔ − 2⅚",
    options: ["A) 2⅚", "B) 2⅙", "C) 2⁵⁄₆", "D) 3"],
    answer: "B",
    explanation: "Convert to fractions: 5⅔ = 17/3, 2⅚ = 17/6. LCM of 3,6 is 6. 17/3 = 34/6. So 34/6 − 17/6 = 17/6 = 2⅙."
  },
  {
    id: 8749, section: "Maths",
    text: "A recipe needs 2/3 cup of sugar for 1 batch. How much sugar is needed for 4.5 batches?",
    options: ["A) 2 cups", "B) 3 cups", "C) 3⅓ cups", "D) 2⅔ cups"],
    answer: "B",
    explanation: "Sugar needed = 2/3 × 4.5 = 2/3 × 9/2 = 18/6 = 3 cups."
  },
  {
    id: 8750, section: "Maths",
    text: "Evaluate: 3/4 × 2/9",
    options: ["A) 6/13", "B) 1/6", "C) 5/13", "D) 6/36"],
    answer: "B",
    explanation: "3/4 × 2/9 = (3×2)/(4×9) = 6/36 = 1/6 (after simplifying by dividing both by 6)."
  },
  {
    id: 8751, section: "Maths",
    text: "Simplify: (3/5 ÷ 9/10) + (2/3 × 3/8)",
    options: ["A) 11/12", "B) 7/12", "C) 5/6", "D) 3/4"],
    answer: "A",
    explanation: "Step 1: 3/5÷9/10 = 3/5×10/9 = 30/45 = 2/3. Step 2: 2/3×3/8 = 6/24 = 1/4. Step 3: 2/3+1/4 = 8/12+3/12 = 11/12."
  },
  {
    id: 8752, section: "Maths",
    text: "A length of cloth is 8.75 m. If 3.25 m is used, how much cloth remains?",
    options: ["A) 5.5 m", "B) 5.25 m", "C) 6.5 m", "D) 4.5 m"],
    answer: "A",
    explanation: "Remaining cloth = 8.75 − 3.25 = 5.50 m."
  },
  {
    id: 8753, section: "Maths",
    text: "If 13/4 is written as a mixed number, what is the sum of the whole number part and the numerator of the fractional part?",
    options: ["A) 3", "B) 4", "C) 7", "D) 13"],
    answer: "B",
    explanation: "13/4 = 3 remainder 1, so as a mixed number: 3¼. Whole number = 3, numerator of fraction = 1. Sum = 3 + 1 = 4."
  },
  {
    id: 8754, section: "Maths",
    text: "If 3/8 of a number is 24, find the number.",
    options: ["A) 32", "B) 56", "C) 64", "D) 9"],
    answer: "C",
    explanation: "Let the number be x. 3/8 of x = 24, so x = 24 ÷ 3/8 = 24 × 8/3 = 192/3 = 64."
  },
  {
    id: 8755, section: "Maths",
    text: "Find the product of 0.25 and 0.04, expressed as a fraction.",
    options: ["A) 1/10", "B) 1/100", "C) 1/1000", "D) 1/40"],
    answer: "B",
    explanation: "0.25 = 1/4, 0.04 = 1/25. Product = 1/4 × 1/25 = 1/100. (Or: 0.25×0.04=0.01=1/100.)"
  },
  {
    id: 8756, section: "Maths",
    text: "Evaluate: 0.125 + 0.375",
    options: ["A) 0.5", "B) 0.25", "C) 0.45", "D) 5"],
    answer: "A",
    explanation: "0.125 + 0.375 = 0.500 = 0.5."
  },
  {
    id: 8757, section: "Maths",
    text: "Simplify: 7/12 − 1/4 + 1/3",
    options: ["A) 1/3", "B) 1/2", "C) 2/3", "D) 5/6"],
    answer: "C",
    explanation: "LCM of 12,4,3 is 12. 7/12 − 3/12 + 4/12 = (7−3+4)/12 = 8/12 = 2/3."
  },
  {
    id: 8758, section: "Maths",
    text: "Evaluate: 1/8 + 0.625 (express your answer as a decimal)",
    options: ["A) 0.625", "B) 0.75", "C) 0.875", "D) 1.0"],
    answer: "B",
    explanation: "1/8 = 0.125. So 0.125 + 0.625 = 0.750 = 0.75."
  },
  {
    id: 8759, section: "Maths",
    text: "Evaluate: 15.75 ÷ 2.5",
    options: ["A) 6.3", "B) 6.03", "C) 63", "D) 0.63"],
    answer: "A",
    explanation: "Multiply both by 10 to clear decimals: 157.5 ÷ 25 = 6.3."
  },
  {
    id: 8760, section: "Maths",
    text: "Evaluate: 9/16 × 8/3",
    options: ["A) 3/2", "B) 24/48", "C) 72/48", "D) 2/3"],
    answer: "A",
    explanation: "9/16 × 8/3 = (9×8)/(16×3) = 72/48 = 3/2 (after simplifying by dividing both by 24)."
  }

];
