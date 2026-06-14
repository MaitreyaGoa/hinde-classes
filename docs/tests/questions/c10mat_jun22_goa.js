// ============================================================
//  Std 10 Goa Board Maths — Real Numbers
//  Hinde Classes | hindeclasses.com
//  Maitreya Hinde | 7358425108
//  NCERT Ch. 1 Class 10 | Goa Board | 30Q | 60 min
//  50% Moderate + 50% Hard | PYQ-aligned
//  ID range: 8421–8450
// ============================================================

var questions = [

  // ══ MODERATE (Q1–Q15) ════════════════════════════════════

  {
    id: 8421, section: "Maths",
    text: "Using Euclid's Division Algorithm, HCF(306, 657) is:",
    options: ["A) 3", "B) 6", "C) 9", "D) 18"],
    answer: "C",
    explanation: "657 = 2×306 + 45; 306 = 6×45 + 36; 45 = 1×36 + 9; 36 = 4×9 + 0. Last non-zero remainder = 9. So HCF(306, 657) = 9."
  },
  {
    id: 8422, section: "Maths",
    text: "The prime factorisation of 140 is:",
    options: ["A) 2×5×14", "B) 2²×5×7", "C) 4×5×7", "D) 2×7×10"],
    answer: "B",
    explanation: "140 ÷ 2 = 70; 70 ÷ 2 = 35; 35 ÷ 5 = 7; 7 is prime. So 140 = 2²×5×7. Options A, C, D contain composite factors which are not valid prime factorisations."
  },
  {
    id: 8423, section: "Maths",
    text: "HCF(12, 15, 21) by prime factorisation is:",
    options: ["A) 1", "B) 3", "C) 6", "D) 21"],
    answer: "B",
    explanation: "12 = 2²×3; 15 = 3×5; 21 = 3×7. HCF = product of smallest powers of common primes = 3¹ = 3."
  },
  {
    id: 8424, section: "Maths",
    text: "LCM(12, 15, 21) is:",
    options: ["A) 210", "B) 315", "C) 420", "D) 630"],
    answer: "C",
    explanation: "12 = 2²×3; 15 = 3×5; 21 = 3×7. LCM = highest powers of all primes = 2²×3×5×7 = 4×105 = 420."
  },
  {
    id: 8425, section: "Maths",
    text: "For two positive integers a and b, which relation always holds?",
    options: ["A) HCF(a,b) × LCM(a,b) = a + b", "B) HCF(a,b) × LCM(a,b) = a × b", "C) HCF(a,b) + LCM(a,b) = a × b", "D) HCF(a,b) = LCM(a,b) always"],
    answer: "B",
    explanation: "For any two positive integers a and b: HCF(a,b) × LCM(a,b) = a × b. Example: HCF(6,20)=2, LCM(6,20)=60; 2×60=120=6×20 ✓."
  },
  {
    id: 8426, section: "Maths",
    text: "For any positive integer n, can 6ⁿ end with the digit 0?",
    options: ["A) Yes, when n is even", "B) Yes, always", "C) No, because 6ⁿ has no factor of 5", "D) Yes, when n is a multiple of 5"],
    answer: "C",
    explanation: "For a number to end in 0, it must have both 2 and 5 as prime factors. 6ⁿ = 2ⁿ×3ⁿ has no factor of 5. By the Fundamental Theorem of Arithmetic, 6ⁿ can never end in 0."
  },
  {
    id: 8427, section: "Maths",
    text: "Which of the following has a terminating decimal expansion?",
    options: ["A) 7/24", "B) 11/30", "C) 17/8", "D) 19/35"],
    answer: "C",
    explanation: "A fraction in lowest terms terminates iff the denominator has only 2s and 5s. 8 = 2³ → terminating (17/8 = 2.125). 24 = 2³×3, 30 = 2×3×5, 35 = 5×7 all have other prime factors → non-terminating."
  },
  {
    id: 8428, section: "Maths",
    text: "In Euclid's division lemma for a = 267 and b = 17, the remainder r is:",
    options: ["A) 9", "B) 10", "C) 12", "D) 15"],
    answer: "C",
    explanation: "267 ÷ 17 = 15 remainder 12 (17×15 = 255; 267−255 = 12). So 267 = 17×15 + 12, and r = 12."
  },
  {
    id: 8429, section: "Maths",
    text: "Which of the following CANNOT be the HCF of 36 and 48?",
    options: ["A) 4", "B) 6", "C) 8", "D) 12"],
    answer: "C",
    explanation: "HCF(36,48) = 12. The HCF must divide both 36 and 48. 8 does not divide 36 (36 = 8×4 + 4), so 8 cannot be the HCF. Options 4, 6, and 12 all divide both numbers."
  },
  {
    id: 8430, section: "Maths",
    text: "The prime factorisation of 3825 is:",
    options: ["A) 3×5²×51", "B) 3²×5²×17", "C) 3×25×51", "D) 5²×153"],
    answer: "B",
    explanation: "3825 ÷ 5 = 765; 765 ÷ 5 = 153; 153 ÷ 3 = 51; 51 ÷ 3 = 17; 17 is prime. So 3825 = 3²×5²×17."
  },
  {
    id: 8431, section: "Maths",
    text: "If HCF(a, b) = 9 and a × b = 2160, then LCM(a, b) = ?",
    options: ["A) 120", "B) 180", "C) 240", "D) 360"],
    answer: "C",
    explanation: "LCM = a×b ÷ HCF = 2160 ÷ 9 = 240."
  },
  {
    id: 8432, section: "Maths",
    text: "0.375 written as p/q in its simplest form is:",
    options: ["A) 375/1000", "B) 3/8", "C) 75/200", "D) 15/40"],
    answer: "B",
    explanation: "0.375 = 375/1000. HCF(375,1000) = 125. So 375/1000 = 3/8. Denominator 8 = 2³ → only factor 2 → confirms terminating decimal."
  },
  {
    id: 8433, section: "Maths",
    text: "Two bells ring at intervals of 12 and 18 minutes. If they ring together at 8:00 AM, when will they next ring together?",
    options: ["A) 8:24 AM", "B) 8:30 AM", "C) 8:36 AM", "D) 8:48 AM"],
    answer: "C",
    explanation: "Next ring together after LCM(12,18) minutes. 12 = 2²×3; 18 = 2×3². LCM = 2²×3² = 36 minutes. 8:00 AM + 36 min = 8:36 AM."
  },
  {
    id: 8434, section: "Maths",
    text: "p/q (in lowest terms) has a terminating decimal expansion if and only if q is of the form:",
    options: ["A) 2^m only", "B) 5^n only", "C) 2^m × 5^n (m,n ≥ 0)", "D) Any even number"],
    answer: "C",
    explanation: "A fraction p/q in lowest terms terminates iff the denominator q = 2^m × 5^n for non-negative integers m and n. Both m and n can be zero (e.g., q=1 gives any integer, which terminates)."
  },
  {
    id: 8435, section: "Maths",
    text: "HCF(96, 404) using prime factorisation is:",
    options: ["A) 2", "B) 4", "C) 8", "D) 16"],
    answer: "B",
    explanation: "96 = 2⁵×3; 404 = 2²×101. Common prime: 2. Minimum power: 2. So HCF = 2² = 4."
  },

  // ══ HARD (Q16–Q30) ═══════════════════════════════════════

  {
    id: 8436, section: "Maths",
    text: "In the proof that √5 is irrational, after p² = 5q² (with p,q coprime), the next key steps give:",
    options: ["A) q must be divisible by 5", "B) Both p and q must be divisible by 5 — contradicting them being coprime", "C) p must be odd", "D) p² is divisible by 25"],
    answer: "B",
    explanation: "p² = 5q² → 5|p² → 5|p (prime property). Write p=5m: 25m²=5q² → q²=5m² → 5|q. Both p and q are divisible by 5, contradicting HCF(p,q)=1. So √5 is irrational."
  },
  {
    id: 8437, section: "Maths",
    text: "Which correctly proves that 2 + √3 is irrational?",
    options: ["A) √3 is between 1 and 2, so 2+√3 is between 3 and 4 — not an integer", "B) Assume 2+√3 = r (rational). Then √3 = r−2 = rational — contradiction since √3 is irrational", "C) 2+√3 = 3.732... which is not a simple fraction", "D) Because √3 has infinite decimal places"],
    answer: "B",
    explanation: "Assume 2+√3 = r where r is rational. Then √3 = r−2. Difference of two rationals is rational, so √3 would be rational — contradicting the known fact that √3 is irrational. So 2+√3 is irrational."
  },
  {
    id: 8438, section: "Maths",
    text: "Using Euclid's Algorithm, HCF(1848, 3058) is:",
    options: ["A) 11", "B) 22", "C) 44", "D) 66"],
    answer: "B",
    explanation: "3058=1×1848+1210; 1848=1×1210+638; 1210=1×638+572; 638=1×572+66; 572=8×66+44; 66=1×44+22; 44=2×22+0. HCF = last non-zero remainder = 22."
  },
  {
    id: 8439, section: "Maths",
    text: "Given HCF(306, 657) = 9, LCM(306, 657) is:",
    options: ["A) 2238", "B) 22338", "C) 2634", "D) 18954"],
    answer: "B",
    explanation: "LCM = (306×657) ÷ HCF = 201042 ÷ 9 = 22338. Verify: 9 × 22338 = 201042 = 306×657 ✓"
  },
  {
    id: 8440, section: "Maths",
    text: "The decimal expansion of 26/45 is:",
    options: ["A) 0.5777... (non-terminating repeating)", "B) 0.578 (terminating)", "C) 0.2666... (non-terminating repeating)", "D) 0.5 (terminating)"],
    answer: "A",
    explanation: "45 = 3²×5. Since 45 has factor 3 (not just 2s and 5s), 26/45 is non-terminating. Actual value: 26÷45 = 0.5777... = 0.57̄. The digit 7 repeats."
  },
  {
    id: 8441, section: "Maths",
    text: "HCF(2048, 512) = ?",
    options: ["A) 256", "B) 512", "C) 1024", "D) 128"],
    answer: "B",
    explanation: "2048 = 2¹¹; 512 = 2⁹. HCF = 2^min(11,9) = 2⁹ = 512. Since 512 divides 2048 exactly (2048÷512=4), 512 is the HCF."
  },
  {
    id: 8442, section: "Maths",
    text: "The prime factorisation of 5765 is:",
    options: ["A) 5 × 1153", "B) 5 × 7 × 165", "C) 5² × 231", "D) 5 × 13 × 89"],
    answer: "A",
    explanation: "5765 ÷ 5 = 1153. Testing 1153 for primality (divide by all primes up to √1153 ≈ 33.9): none divide it. So 1153 is prime and 5765 = 5 × 1153."
  },
  {
    id: 8443, section: "Maths",
    text: "Two numbers have HCF = 8 and LCM = 240. If one number is 48, the other number is:",
    options: ["A) 30", "B) 32", "C) 40", "D) 48"],
    answer: "C",
    explanation: "HCF × LCM = product of two numbers: 8×240 = 48 × other → other = 1920÷48 = 40. Verify: HCF(48,40) = 8 ✓, LCM(48,40) = 240 ✓"
  },
  {
    id: 8444, section: "Maths",
    text: "HCF(1152, 1664) is:",
    options: ["A) 64", "B) 128", "C) 256", "D) 32"],
    answer: "B",
    explanation: "1152 = 2⁷×3²; 1664 = 2⁷×13. Common prime: 2. Minimum power: 7. HCF = 2⁷ = 128. LCM = 2⁷×3²×13 = 128×117 = 14976. Verify: 128×14976 = 1152×1664 ✓"
  },
  {
    id: 8445, section: "Maths",
    text: "(2 + √3)(2 − √3) = ?",
    options: ["A) 4 − 3 = 1 (rational)", "B) √(4−3)", "C) 4 + 3 = 7", "D) 2√3"],
    answer: "A",
    explanation: "(2+√3)(2−√3) = 2²−(√3)² = 4−3 = 1. This is rational, showing the product of two irrational numbers can be rational. (Note: 2+√3 and 2−√3 are each irrational but their product is 1.)"
  },
  {
    id: 8446, section: "Maths",
    text: "23/(2³ × 5²) as a decimal is:",
    options: ["A) 0.115", "B) 0.023", "C) 1.15", "D) 0.1150"],
    answer: "A",
    explanation: "2³×5² = 8×25 = 200. So 23/200 = 0.115. Terminating because the denominator 200 = 2³×5² has only prime factors 2 and 5."
  },
  {
    id: 8447, section: "Maths",
    text: "HCF(2520, 6600) is:",
    options: ["A) 60", "B) 120", "C) 240", "D) 360"],
    answer: "B",
    explanation: "2520 = 2³×3²×5×7; 6600 = 2³×3×5²×11. HCF = smallest powers of common primes = 2³×3¹×5¹ = 8×3×5 = 120."
  },
  {
    id: 8448, section: "Maths",
    text: "For which natural number n is n² − 1 a prime number?",
    options: ["A) n = 1", "B) n = 2", "C) n = 3", "D) n = 4"],
    answer: "B",
    explanation: "n²−1 = (n−1)(n+1). For n=2: 1×3=3 (prime ✓). For n=1: 0×2=0 (not prime). For n≥3: both (n−1)≥2 and (n+1)≥4, so product is composite. Only n=2 gives a prime."
  },
  {
    id: 8449, section: "Maths",
    text: "5 − 2√3 is irrational. The correct reason is:",
    options: ["A) It contains √3", "B) If 5−2√3=r (rational), then √3=(5−r)/2=rational, contradicting √3 being irrational", "C) 5 and 2√3 cannot be simplified", "D) Its decimal is non-repeating"],
    answer: "B",
    explanation: "Assume 5−2√3 = r where r is rational. Then 2√3 = 5−r (rational), so √3 = (5−r)/2 (rational). But √3 is irrational — contradiction. So 5−2√3 must be irrational."
  },
  {
    id: 8450, section: "Maths",
    text: "The largest 3-digit number exactly divisible by both 8 and 12 is:",
    options: ["A) 960", "B) 972", "C) 984", "D) 996"],
    answer: "C",
    explanation: "LCM(8,12) = 24. A number divisible by both 8 and 12 must be a multiple of 24. Largest 3-digit multiple of 24: 999÷24=41.625, so largest integer = 41. 24×41 = 984."
  }

];
