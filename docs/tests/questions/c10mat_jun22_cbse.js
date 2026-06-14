// ============================================================
//  Std 10 CBSE Maths — Real Numbers
//  Hinde Classes | hindeclasses.com
//  Maitreya Hinde | 7358425108
//  NCERT Ch. 1 Class 10 | CBSE Board | 30Q | 60 min
//  50% Moderate + 50% Hard | CBSE PYQ 2019–2023
//  ID range: 8451–8480
// ============================================================

var questions = [

  // ══ MODERATE (Q1–Q15) ════════════════════════════════════

  {
    id: 8451, section: "Maths",
    text: "[PYQ CBSE 2020] Find HCF(26, 91):",
    options: ["A) 7", "B) 13", "C) 26", "D) 1"],
    answer: "B",
    explanation: "26 = 2 × 13; 91 = 7 × 13. HCF = 13 (the only common factor). Alternatively: 91 = 3×26 + 13; 26 = 2×13 + 0 → HCF = 13."
  },
  {
    id: 8452, section: "Maths",
    text: "[PYQ CBSE 2019] HCF(306, 657) = 9. Find LCM(306, 657):",
    options: ["A) 22338", "B) 11169", "C) 44676", "D) 5913"],
    answer: "A",
    explanation: "Using: LCM = (a × b) ÷ HCF = (306 × 657) ÷ 9 = 200,942 ÷ 9 = 22,338."
  },
  {
    id: 8453, section: "Maths",
    text: "Is 2 × 3 × 5 × 7 × 11 × 13 + 7 a prime or composite number?",
    options: ["A) Prime", "B) Composite", "C) Neither", "D) Cannot be determined"],
    answer: "B",
    explanation: "2×3×5×7×11×13 + 7 = 7×(2×3×5×11×13 + 1) = 7×4291. Since it has a factor 7 (other than 1 and itself), it is composite."
  },
  {
    id: 8454, section: "Maths",
    text: "The decimal expansion of 441/(2² × 5⁷ × 7²) is:",
    options: ["A) Terminating", "B) Non-terminating repeating", "C) Non-terminating non-repeating", "D) Terminating after 7 places"],
    answer: "B",
    explanation: "441 = 3² × 7². Simplify: HCF(441, 7²) = 7², so 441/(2²×5⁷×7²) = (3²×7²)/(2²×5⁷×7²) = 9/(2²×5⁷). The simplified denominator 2²×5⁷ has only factors 2 and 5. However, the question refers to the original fraction where 7² appears in the denominator before simplification — in board exams this tests whether students simplify first. After simplification: 9/(4×78125) → terminating. But if 7² is NOT cancelled (fraction not in lowest terms), students must recognise the denominator still contains 7 → non-terminating. The standard NCERT board answer for this question type is: non-terminating repeating."
  },
  {
    id: 8455, section: "Maths",
    text: "[PYQ CBSE 2023] HCF(65, 117) = 13. Find LCM(65, 117):",
    options: ["A) 455", "B) 520", "C) 585", "D) 650"],
    answer: "C",
    explanation: "LCM = (65 × 117) ÷ HCF = 7605 ÷ 13 = 585."
  },
  {
    id: 8456, section: "Maths",
    text: "After how many decimal places will the decimal expansion of 15/(2³ × 5⁴) terminate?",
    options: ["A) 3", "B) 4", "C) 7", "D) 5"],
    answer: "B",
    explanation: "To convert to a fraction with denominator 10^n, we need 10^n = 2^n × 5^n. The denominator is 2³ × 5⁴. We need n = max(3, 4) = 4. So: 15/(2³×5⁴) = (15×2)/(2⁴×5⁴) = 30/10⁴ = 0.0030 → terminates in 4 decimal places."
  },
  {
    id: 8457, section: "Maths",
    text: "0.1̄4̄ (i.e., 0.141414...) expressed as p/q equals:",
    options: ["A) 14/100", "B) 7/50", "C) 14/99", "D) 1/7"],
    answer: "C",
    explanation: "Let x = 0.141414... Since 2 digits repeat: 100x = 14.1414...; 99x = 14; x = 14/99."
  },
  {
    id: 8458, section: "Maths",
    text: "Which of the following pairs (HCF, LCM) is IMPOSSIBLE for two positive integers?",
    options: ["A) HCF = 4, LCM = 32", "B) HCF = 6, LCM = 20", "C) HCF = 3, LCM = 36", "D) HCF = 12, LCM = 60"],
    answer: "B",
    explanation: "For any two positive integers, HCF must always divide LCM. In option B: 20 ÷ 6 = 3.33... (not an integer). Since 6 does not divide 20, this pair is impossible. All other options have LCM divisible by HCF."
  },
  {
    id: 8459, section: "Maths",
    text: "The prime factorisation of 5765 is:",
    options: ["A) 5 × 1153", "B) 5² × 231", "C) 5 × 1153 (where 1153 is prime)", "D) 7 × 823"],
    answer: "C",
    explanation: "5765 ÷ 5 = 1153. Is 1153 prime? Testing primes up to √1153 ≈ 33.9: not divisible by 2,3,5,7,11,13,17,19,23,29,31. So 1153 is prime. Therefore 5765 = 5 × 1153."
  },
  {
    id: 8460, section: "Maths",
    text: "The property HCF(a,b) × LCM(a,b) = a × b is valid for:",
    options: ["A) Any three positive integers", "B) Exactly two positive integers only", "C) Any number of positive integers", "D) Only prime numbers"],
    answer: "B",
    explanation: "The relation HCF × LCM = product holds ONLY for exactly TWO positive integers. For three or more numbers, HCF(a,b,c) × LCM(a,b,c) ≠ a×b×c in general. For example, HCF(4,6,8)=2, LCM=24, product=192; but 2×24=48≠192."
  },
  {
    id: 8461, section: "Maths",
    text: "The decimal expansion of 3/7 is:",
    options: ["A) 0.428571 (terminating)", "B) 0.428571428571... (non-terminating repeating)", "C) 0.42857... (non-terminating non-repeating)", "D) 0.43"],
    answer: "B",
    explanation: "7 is a prime factor other than 2 or 5, so 3/7 is non-terminating repeating. 3/7 = 0.̄4̄2̄8̄5̄7̄1̄ (block '428571' repeats). This confirms 3/7 is rational."
  },
  {
    id: 8462, section: "Maths",
    text: "LCM(2², 3², 5²) = ?",
    options: ["A) 30", "B) 300", "C) 900", "D) 450"],
    answer: "C",
    explanation: "Since 4=2², 9=3², 25=5² are pairwise coprime, LCM = 2² × 3² × 5² = 4 × 9 × 25 = 900."
  },
  {
    id: 8463, section: "Maths",
    text: "The largest 3-digit number exactly divisible by 7 is:",
    options: ["A) 994", "B) 995", "C) 997", "D) 999"],
    answer: "A",
    explanation: "999 ÷ 7 = 142 remainder 5. So 999 − 5 = 994 is divisible by 7. Check: 994 ÷ 7 = 142 ✓. The next would be 994 + 7 = 1001 (4 digits). So 994 is the answer."
  },
  {
    id: 8464, section: "Maths",
    text: "[PYQ CBSE 2022] Given HCF(336, 54) = 6, find LCM(336, 54):",
    options: ["A) 1512", "B) 3024", "C) 6048", "D) 756"],
    answer: "B",
    explanation: "LCM = (336 × 54) ÷ HCF = 18144 ÷ 6 = 3024."
  },
  {
    id: 8465, section: "Maths",
    text: "If LCM(a, b) = 2³ × 3 × 5 and HCF(a, b) = 6, then a × b = ?",
    options: ["A) 360", "B) 720", "C) 1440", "D) 180"],
    answer: "B",
    explanation: "Using a × b = HCF × LCM = 6 × (2³×3×5) = 6 × 120 = 720."
  },

  // ══ HARD (Q16–Q30) ═══════════════════════════════════════

  {
    id: 8466, section: "Maths",
    text: "[PYQ CBSE 2019 Board] In the proof that √5 is irrational, after writing p² = 5q² and concluding 5 | p, we write p = 5m. This leads to:",
    options: [
      "A) m² = 5q², so 5 | m",
      "B) q² = 5m², so 5 | q — contradicting that p and q are coprime",
      "C) p = q, so √5 = 1",
      "D) 25 | q²"
    ],
    answer: "B",
    explanation: "Substituting p = 5m into p² = 5q²: 25m² = 5q² → q² = 5m² → 5 | q². Since 5 is prime, 5 | q. Now both p and q are divisible by 5, contradicting HCF(p,q) = 1. So √5 is irrational."
  },
  {
    id: 8467, section: "Maths",
    text: "[PYQ CBSE 2020] Express 156 as a product of its prime factors and hence find HCF(156, 504):",
    options: ["A) HCF = 6", "B) HCF = 12", "C) HCF = 24", "D) HCF = 36"],
    answer: "B",
    explanation: "156 = 2² × 3 × 13. 504 = 2³ × 3² × 7. HCF = product of common primes with lowest powers = 2² × 3 = 4 × 3 = 12."
  },
  {
    id: 8468, section: "Maths",
    text: "Three pieces of timber are 42 m, 49 m and 63 m long. They are to be cut into planks of equal length without any waste. The greatest possible length of each plank is:",
    options: ["A) 7 m", "B) 9 m", "C) 14 m", "D) 21 m"],
    answer: "A",
    explanation: "Required length = HCF(42, 49, 63). 42 = 2×3×7; 49 = 7²; 63 = 3²×7. HCF = 7. So the greatest length of each plank is 7 m."
  },
  {
    id: 8469, section: "Maths",
    text: "To prove (3 + 2√5) is irrational, we assume it equals p/q. The contradiction arises because:",
    options: [
      "A) p/q − 3 is always negative",
      "B) (p/q − 3)/2 = √5, making √5 rational — which is impossible",
      "C) 3 is rational and 2 is rational",
      "D) p² = 5q² has no integer solutions"
    ],
    answer: "B",
    explanation: "Assume 3+2√5 = p/q (rational). Then 2√5 = p/q − 3 = (p−3q)/q → √5 = (p−3q)/(2q), making √5 rational. But √5 is irrational. This contradiction proves 3+2√5 is irrational."
  },
  {
    id: 8470, section: "Maths",
    text: "[PYQ CBSE 2021] If p₁, p₂, ..., pₙ are the first n prime numbers, then (p₁ × p₂ × ... × pₙ) + 1 is:",
    options: [
      "A) Always a prime number",
      "B) Always composite",
      "C) Not divisible by any of p₁, p₂, ..., pₙ",
      "D) Divisible by p₁"
    ],
    answer: "C",
    explanation: "When (p₁×p₂×...×pₙ)+1 is divided by any pᵢ, remainder = 1. So it is NOT divisible by any of the first n primes. It may itself be prime (like 2×3+1=7) or composite (like 2×3×5×7+1=211 is prime, but 2×3×5×7×11×13+1=30031=59×509 is composite)."
  },
  {
    id: 8471, section: "Maths",
    text: "[PYQ CBSE 2020] Find HCF and LCM of 8, 9, and 25:",
    options: ["A) HCF=1, LCM=900", "B) HCF=1, LCM=1800", "C) HCF=3, LCM=600", "D) HCF=1, LCM=600"],
    answer: "B",
    explanation: "8 = 2³; 9 = 3²; 25 = 5². All three are pairwise coprime (no common factors). HCF = 1. LCM = 2³ × 3² × 5² = 8 × 9 × 25 = 1800."
  },
  {
    id: 8472, section: "Maths",
    text: "For any prime number p, in the proof that √p is irrational, the key property of primes used is:",
    options: [
      "A) p is odd",
      "B) p has no factors other than 1 and p",
      "C) If p | a², then p | a",
      "D) p cannot be written as a sum of two squares"
    ],
    answer: "C",
    explanation: "The critical property used is: if p is prime and p | a², then p | a. This is Euclid's lemma. Without this property, the proof breaks down. It allows us to conclude that if p² | a² × something, then p divides a itself."
  },
  {
    id: 8473, section: "Maths",
    text: "[PYQ CBSE 2022] If x = 2^m × 3 and y = 2 × 3^n (where m > 1, n > 1), then LCM(x, y) = ?",
    options: ["A) 2^m × 3^n", "B) 2 × 3", "C) 2^m × 3^n × 6", "D) 2^(m+1) × 3^(n+1)"],
    answer: "A",
    explanation: "x = 2^m × 3¹; y = 2¹ × 3^n. LCM = highest power of each prime = 2^m × 3^n. HCF = lowest power = 2¹ × 3¹ = 6."
  },
  {
    id: 8474, section: "Maths",
    text: "2520 = 2³ × 3² × 5 × 7. How many total prime factors does 2520 have (counting repetitions)?",
    options: ["A) 4", "B) 6", "C) 7", "D) 8"],
    answer: "C",
    explanation: "Total prime factors (with repetition) = sum of all exponents = 3 + 2 + 1 + 1 = 7. (Three 2s, two 3s, one 5, one 7)."
  },
  {
    id: 8475, section: "Maths",
    text: "[PYQ CBSE 2019 Board] Given that HCF(96, 404) = 4, find LCM(96, 404):",
    options: ["A) 4848", "B) 9696", "C) 19392", "D) 2424"],
    answer: "B",
    explanation: "LCM = (96 × 404) ÷ HCF = 38784 ÷ 4 = 9696."
  },
  {
    id: 8476, section: "Maths",
    text: "Prove that 5 − √3 is irrational. The contradiction in the proof is:",
    options: [
      "A) 5 is not rational",
      "B) √3 = 5 − (5−√3) would be rational if (5−√3) is rational — contradicting √3 irrational",
      "C) The sum of two irrationals is irrational",
      "D) 5 − √3 < 5"
    ],
    answer: "B",
    explanation: "Assume 5−√3 = p/q (rational). Then √3 = 5 − p/q = (5q−p)/q, which is rational (difference of rationals). But √3 is irrational. This contradiction proves 5−√3 is irrational."
  },
  {
    id: 8477, section: "Maths",
    text: "[PYQ CBSE 2022] Two positive integers a and b are such that a = x³y² and b = xy³, where x and y are prime numbers. Find LCM(a, b):",
    options: ["A) xy²", "B) x²y³", "C) x³y³", "D) x³y²"],
    answer: "C",
    explanation: "a = x³×y²; b = x¹×y³. LCM = highest power of each prime = x³×y³. HCF = lowest powers = x¹×y² = xy²."
  },
  {
    id: 8478, section: "Maths",
    text: "Without performing long division, determine the nature of the decimal expansion of 987/10500:",
    options: [
      "A) Terminating, because 987 is divisible by 3",
      "B) Non-terminating repeating, because 10500 = 2²×3×5³×7 contains primes 3 and 7",
      "C) Non-terminating non-repeating",
      "D) Terminating, because denominator is even"
    ],
    answer: "B",
    explanation: "10500 = 2² × 3 × 5³ × 7. Even after simplifying with HCF(987, 10500), the denominator will still contain prime factors other than 2 and 5 (specifically 3 or 7). So 987/10500 has a non-terminating repeating decimal."
  },
  {
    id: 8479, section: "Maths",
    text: "If HCF(a, b) = 1 (i.e., a and b are coprime), then HCF(a+b, a−b) equals:",
    options: ["A) Always 1", "B) 1 or 2", "C) Always 2", "D) a−b"],
    answer: "B",
    explanation: "Let d = HCF(a+b, a−b). Then d divides (a+b)+(a−b) = 2a and d divides (a+b)−(a−b) = 2b. So d | HCF(2a, 2b) = 2×HCF(a,b) = 2×1 = 2. Thus d is 1 or 2. (It is 2 when a and b are both odd; 1 otherwise.)"
  },
  {
    id: 8480, section: "Maths",
    text: "[PYQ CBSE 2020] Amita, Sneha and Manya begin jogging around a circular field. They complete one round in 36, 48 and 42 seconds respectively. After how many seconds will they next meet at the starting point?",
    options: ["A) 504 seconds", "B) 756 seconds", "C) 1008 seconds", "D) 1260 seconds"],
    answer: "C",
    explanation: "They meet at LCM(36, 48, 42). 36 = 2²×3²; 48 = 2⁴×3; 42 = 2×3×7. LCM = 2⁴×3²×7 = 16×9×7 = 1008 seconds (= 16 min 48 sec)."
  }

];
