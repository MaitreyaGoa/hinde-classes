// ============================================================
//  Std 10 CBSE Maths — Real Numbers
//  Hinde Classes | hindeclasses.com
//  Maitreya Hinde | 7358425108
//  NCERT Ch. 1 Class 10 | CBSE Board PYQ Pattern | 30Q | 60 min
//  50% Moderate + 50% Hard | PYQ-aligned (2017–2024)
//  ID range: 8451–8480
// ============================================================

var questions = [

  // ══ MODERATE (Q1–Q15) ════════════════════════════════════

  {
    id: 8451, section: "Maths",
    text: "Using Euclid's Division Algorithm, HCF(4052, 12576) is: [CBSE 2020]",
    options: ["A) 2", "B) 4", "C) 8", "D) 16"],
    answer: "B",
    explanation: "12576=3×4052+420; 4052=9×420+272; 420=1×272+148; 272=1×148+124; 148=1×124+24; 124=5×24+4; 24=6×4+0. Last non-zero remainder=4. So HCF=4."
  },
  {
    id: 8452, section: "Maths",
    text: "The prime factorisation of 7429 is:",
    options: ["A) 7 × 1061", "B) 17 × 19 × 23", "C) 7 × 11 × 97", "D) 13 × 571"],
    answer: "B",
    explanation: "7429 ÷ 17 = 437; 437 ÷ 19 = 23; 23 is prime. So 7429 = 17×19×23. The Fundamental Theorem of Arithmetic guarantees this factorisation is unique."
  },
  {
    id: 8453, section: "Maths",
    text: "The HCF of two numbers is 145 and their LCM is 2175. If one number is 725, find the other. [CBSE PYQ]",
    options: ["A) 290", "B) 360", "C) 435", "D) 580"],
    answer: "C",
    explanation: "HCF × LCM = product of numbers: 145×2175 = 725×other → other = 315375÷725 = 435."
  },
  {
    id: 8454, section: "Maths",
    text: "Why is 7 × 11 × 13 + 13 a composite number?",
    options: ["A) It is divisible by 7", "B) It equals 13×(77+1)=13×78, so it has factors other than 1 and itself", "C) It is an even number", "D) It is a multiple of 11"],
    answer: "B",
    explanation: "7×11×13+13 = 13×(7×11+1) = 13×78 = 13×2×3×13 = 2×3×13². Since it has factors other than 1 and itself, it is composite. The key is factoring out 13."
  },
  {
    id: 8455, section: "Maths",
    text: "Is 7! + 5 a composite number? (7! = 5040)",
    options: ["A) No, it is prime", "B) Yes, it equals 5 × 1009", "C) Cannot be determined", "D) No, because 7! is even"],
    answer: "B",
    explanation: "7! + 5 = 5040 + 5 = 5045 = 5 × 1009. Since 1009 is prime, 5045 is a product of two primes (5 and 1009) and has factors other than 1 and itself — it is composite."
  },
  {
    id: 8456, section: "Maths",
    text: "Find the largest number that divides 245 and 1029, leaving remainder 5 in each case. [CBSE PYQ]",
    options: ["A) 8", "B) 12", "C) 16", "D) 20"],
    answer: "C",
    explanation: "The required number divides (245−5)=240 and (1029−5)=1024 exactly. HCF(240,1024): 240=2⁴×3×5; 1024=2¹⁰. HCF=2⁴=16."
  },
  {
    id: 8457, section: "Maths",
    text: "Which of the following has a NON-terminating decimal expansion?",
    options: ["A) 13/125", "B) 17/8", "C) 32/35", "D) 29/50"],
    answer: "C",
    explanation: "32/35: denominator 35=5×7 has factor 7 → non-terminating. 125=5³, 8=2³, 50=2×5² → only 2s and 5s → all three are terminating."
  },
  {
    id: 8458, section: "Maths",
    text: "441/(2²×5⁷×7²) is terminating because after simplification it becomes:",
    options: ["A) 9/(2²×5⁷)", "B) 441/(2²×5⁷)", "C) 21/(2×5⁷)", "D) 9/(5⁷)"],
    answer: "A",
    explanation: "441 = 3²×7². So 441/(2²×5⁷×7²) = (3²×7²)/(2²×5⁷×7²) = 3²/(2²×5⁷) = 9/(2²×5⁷). Denominator now has only 2s and 5s → terminating decimal."
  },
  {
    id: 8459, section: "Maths",
    text: "Without long division, 17/8 as a decimal is:",
    options: ["A) 2.142857...", "B) 2.125", "C) 2.133...", "D) 1.700"],
    answer: "B",
    explanation: "8=2³ → only factor 2 → terminating. Multiply by 5³/5³: 17/8 = (17×125)/(8×125) = 2125/1000 = 2.125."
  },
  {
    id: 8460, section: "Maths",
    text: "HCF(120, 144) and LCM(120, 144) are respectively:",
    options: ["A) 12 and 1440", "B) 24 and 720", "C) 24 and 1440", "D) 12 and 720"],
    answer: "B",
    explanation: "120=2³×3×5; 144=2⁴×3². HCF=2³×3=24. LCM=2⁴×3²×5=720. Verify: 24×720=17280=120×144 ✓"
  },
  {
    id: 8461, section: "Maths",
    text: "The product of three consecutive positive integers is always divisible by:",
    options: ["A) 4", "B) 6", "C) 9", "D) 12"],
    answer: "B",
    explanation: "Among any 3 consecutive integers, at least one is divisible by 2 and at least one by 3. So their product is always divisible by 2×3=6."
  },
  {
    id: 8462, section: "Maths",
    text: "HCF(56, 72) expressed in the form 56x + 72y is:",
    options: ["A) 8 = 56×4 + 72×(−3)", "B) 8 = 56×(−1) + 72×1", "C) 8 = 56×2 + 72×(−1)", "D) 8 = 56×(−2) + 72×2"],
    answer: "A",
    explanation: "HCF(56,72)=8. Using Euclid back-substitution: 72=1×56+16; 56=3×16+8. So 8=56−3×16=56−3×(72−56)=56×4+72×(−3)=8 ✓"
  },
  {
    id: 8463, section: "Maths",
    text: "LCM(2²×3×5, 2×3²×7) is:",
    options: ["A) 630", "B) 1260", "C) 2520", "D) 420"],
    answer: "B",
    explanation: "Take highest powers of all primes: 2²×3²×5×7 = 4×9×5×7 = 1260."
  },
  {
    id: 8464, section: "Maths",
    text: "The decimal expansion of 1/7 = 0.142857142857... is:",
    options: ["A) Terminating with 6 decimal places", "B) Non-terminating repeating with period 6", "C) Non-terminating non-repeating", "D) A special irrational"],
    answer: "B",
    explanation: "1/7 = 0.142857̄ — the block '142857' (6 digits) repeats endlessly. The period is 6. 7 has a prime factor other than 2 or 5 → non-terminating. Repeating → rational."
  },
  {
    id: 8465, section: "Maths",
    text: "The Fundamental Theorem of Arithmetic states that every composite number:",
    options: ["A) Can be written as a sum of two primes", "B) Has at least one prime factor less than its square root", "C) Can be expressed as a product of primes uniquely (ignoring order)", "D) Is divisible by 2 or 3"],
    answer: "C",
    explanation: "Every integer greater than 1 can be expressed as a product of prime numbers in exactly one way (apart from the order). This uniqueness is the foundation for all HCF and LCM calculations."
  },

  // ══ HARD (Q16–Q30) ═══════════════════════════════════════

  {
    id: 8466, section: "Maths",
    text: "Prove that 3 + 2√5 is irrational. The key step in the proof is: [CBSE 2019]",
    options: ["A) √5 is between 2 and 3, so 3+2√5 is between 7 and 9", "B) Assume 3+2√5=r (rational). Then √5=(r−3)/2=rational, contradicting √5 being irrational", "C) 3+2√5 ≈ 7.47, which is not an integer", "D) 2√5 is irrational so adding 3 keeps it irrational"],
    answer: "B",
    explanation: "Assume 3+2√5=r (rational). Then 2√5=r−3 (rational), so √5=(r−3)/2 (rational). But √5 is proven irrational — contradiction. Option D is a theorem but not a proof; B gives the valid formal proof."
  },
  {
    id: 8467, section: "Maths",
    text: "In the proof that √2 is irrational, after writing p=2m, the critical conclusion is: [CBSE Board]",
    options: ["A) q must be odd", "B) m must be even", "C) q must also be even, contradicting HCF(p,q)=1", "D) p² is divisible by 4"],
    answer: "C",
    explanation: "p=2m → p²=4m². From p²=2q²: 4m²=2q² → q²=2m² → 2|q. So q is even. But p and q were assumed coprime — both being even contradicts this. Hence √2 is irrational."
  },
  {
    id: 8468, section: "Maths",
    text: "1/√2 is irrational. The correct proof is:",
    options: ["A) 1÷irrational is always irrational", "B) Assume 1/√2=p/q (coprime). Then √2=q/p=rational — contradicting √2 being irrational", "C) 0.707... is non-terminating", "D) Its denominator √2 is not of the form 2^m×5^n"],
    answer: "B",
    explanation: "Assume 1/√2=p/q in lowest terms. Then √2=q/p — a ratio of integers, making it rational. But √2 is irrational — contradiction. So 1/√2 is irrational."
  },
  {
    id: 8469, section: "Maths",
    text: "LCM of two numbers is 182 and HCF is 13. If one number is 26, the other is:",
    options: ["A) 78", "B) 84", "C) 91", "D) 104"],
    answer: "C",
    explanation: "HCF×LCM=product: 13×182=2366=26×other → other=2366÷26=91. Verify: HCF(26,91)=13 ✓, LCM(26,91)=182 ✓"
  },
  {
    id: 8470, section: "Maths",
    text: "Find the largest number dividing 70 and 125, leaving remainders 5 and 8 respectively. [CBSE 2018]",
    options: ["A) 9", "B) 13", "C) 17", "D) 23"],
    answer: "B",
    explanation: "Required number divides (70−5)=65 and (125−8)=117. HCF(65,117): 117=1×65+52; 65=1×52+13; 52=4×13+0. HCF=13."
  },
  {
    id: 8471, section: "Maths",
    text: "For any natural number n, 6ⁿ always ends in the digit:",
    options: ["A) 0", "B) 2", "C) 6", "D) It varies"],
    answer: "C",
    explanation: "6¹=6, 6²=36, 6³=216, 6⁴=1296 — all end in 6. This is because any number ending in 6, when multiplied by 6, gives a product ending in 6 (6×6=36). So 6ⁿ always ends in 6 — never 0 or 5."
  },
  {
    id: 8472, section: "Maths",
    text: "Convert 0.686868... (0.6̄8̄) into p/q form:",
    options: ["A) 68/100", "B) 68/99", "C) 34/50", "D) 17/25"],
    answer: "B",
    explanation: "Let x=0.686868... Since 2 digits repeat: 100x=68.6868... Subtract x: 99x=68, so x=68/99. GCD(68,99)=1 (no common factors), so 68/99 is fully simplified."
  },
  {
    id: 8473, section: "Maths",
    text: "HCF(108, 288, 360) is:",
    options: ["A) 18", "B) 24", "C) 36", "D) 72"],
    answer: "C",
    explanation: "108=2²×3³; 288=2⁵×3²; 360=2³×3²×5. HCF=smallest powers of common primes=2²×3²=4×9=36."
  },
  {
    id: 8474, section: "Maths",
    text: "Three tankers contain 403 L, 434 L and 465 L of diesel. What is the maximum capacity of a container that measures all three exactly? [CBSE PYQ]",
    options: ["A) 21 L", "B) 31 L", "C) 41 L", "D) 51 L"],
    answer: "B",
    explanation: "Required = HCF(403,434,465). 403=13×31; 434=2×7×31; 465=3×5×31. HCF=31. So a 31-litre container measures all three tankers exactly."
  },
  {
    id: 8475, section: "Maths",
    text: "If n is an odd positive integer, then n² − 1 is divisible by: [CBSE Board]",
    options: ["A) 4", "B) 6", "C) 8", "D) 16"],
    answer: "C",
    explanation: "Let n=2k+1. n²−1=(2k+1)²−1=4k²+4k=4k(k+1). Since k and k+1 are consecutive, one is even: k(k+1)=2m. So n²−1=4×2m=8m → divisible by 8."
  },
  {
    id: 8476, section: "Maths",
    text: "If HCF(a,b)=18 and LCM(a,b)=378, how many pairs (a,b) with a≤b exist?",
    options: ["A) 1", "B) 2", "C) 3", "D) 4"],
    answer: "B",
    explanation: "Let a=18p, b=18q with HCF(p,q)=1 and pq=378÷18=21. Coprime pairs with product 21: (1,21) and (3,7). Giving (a,b)=(18,378) and (54,126). Verify: HCF(54,126)=18 ✓, LCM(54,126)=378 ✓. Exactly 2 pairs."
  },
  {
    id: 8477, section: "Maths",
    text: "For any natural number n, can 6ⁿ be divisible by 7?",
    options: ["A) Yes, when n is a multiple of 7", "B) Yes, when n is odd", "C) No, because 6ⁿ=2ⁿ×3ⁿ contains no factor 7", "D) Yes, when n>7"],
    answer: "C",
    explanation: "6ⁿ=(2×3)ⁿ=2ⁿ×3ⁿ. Its only prime factors are 2 and 3. By the Fundamental Theorem of Arithmetic, 6ⁿ can never have 7 as a factor. So 6ⁿ is never divisible by 7."
  },
  {
    id: 8478, section: "Maths",
    text: "Four bells ring after intervals of 6, 8, 12 and 18 seconds. After ringing together at t=0, how many times do they ring together in the next 3 minutes (180 s)?",
    options: ["A) 1", "B) 2", "C) 3", "D) 4"],
    answer: "B",
    explanation: "LCM(6,8,12,18)=72 s. They ring together every 72 s. In 180 s: at t=72 s and t=144 s (next would be 216 s > 180 s). So they ring together 2 times."
  },
  {
    id: 8479, section: "Maths",
    text: "For every positive integer n, n³ − n is divisible by 6 because:",
    options: ["A) n³−n=n(n−1)(n+1): product of 3 consecutive integers, always divisible by 2 and 3, hence by 6", "B) n³−n=n²(n−1): divisible by n²", "C) n³ is always divisible by 6", "D) n³−n is always even"],
    answer: "A",
    explanation: "n³−n=n(n−1)(n+1)=(n−1)×n×(n+1), the product of 3 consecutive integers. Among any 3 consecutive integers: at least one is divisible by 2 and at least one by 3. So their product is divisible by 2×3=6."
  },
  {
    id: 8480, section: "Maths",
    text: "Using Euclid's Algorithm, HCF(510, 92) is: [CBSE 2023 style]",
    options: ["A) 1", "B) 2", "C) 4", "D) 6"],
    answer: "B",
    explanation: "510=5×92+50; 92=1×50+42; 50=1×42+8; 42=5×8+2; 8=4×2+0. Last non-zero remainder=2. So HCF(510,92)=2."
  }

];
