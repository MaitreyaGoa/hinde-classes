// ============================================================
//  Std 10 CBSE Maths — Polynomials
//  Hinde Classes | hindeclasses.com
//  Maitreya Hinde | 7358425108
//  NCERT Ch. 2 Class 10 | CBSE Board Pattern | 30Q | 60 min
//  50% Moderate + 50% Hard | Fresh angles (no overlap with Goa test)
//  ID range: 9651–9680
// ============================================================

var questions = [

  // ══ MODERATE (Q1–Q15) ════════════════════════════════════

  {
    id: 9651, section: "Maths",
    text: "[CBSE PYQ pattern] If the zeros of x² + (a+1)x + b are 2 and −3, find the values of a and b.",
    options: ["A) a=0, b=−6", "B) a=1, b=6", "C) a=−1, b=−6", "D) a=0, b=6"],
    answer: "A",
    explanation: "Sum of zeros = 2+(−3) = −1. Using sum=−(a+1): −1=−(a+1) → a+1=1 → a=0. Product of zeros = 2×(−3)=−6=b."
  },
  {
    id: 9652, section: "Maths",
    text: "How many real zeros does the polynomial x² − x − 6 have, and what are they?",
    options: ["A) 2 zeros: x=3 and x=−2", "B) 2 zeros: x=2 and x=−3", "C) 1 zero: x=6", "D) No real zeros"],
    answer: "A",
    explanation: "x²−x−6 = (x−3)(x+2). Setting each factor to zero: x=3 or x=−2. So the polynomial has 2 real zeros: 3 and −2."
  },
  {
    id: 9653, section: "Maths",
    text: "The polynomial 4x² − 4x + 1 has a special property regarding its zeros. What is it?",
    options: [
      "A) It has two equal (repeated) zeros, both equal to 1/2",
      "B) It has two distinct real zeros",
      "C) It has no real zeros",
      "D) It is not a valid quadratic"
    ],
    answer: "A",
    explanation: "4x²−4x+1 = (2x−1)² (a perfect square trinomial). Setting (2x−1)²=0 gives x=1/2 as a REPEATED (double) zero — both zeros coincide at x=1/2."
  },
  {
    id: 9654, section: "Maths",
    text: "Find the zeros of the polynomial x² − 2x − 8.",
    options: ["A) x=4 and x=−2", "B) x=2 and x=−4", "C) x=8 and x=−1", "D) x=−4 and x=−2"],
    answer: "A",
    explanation: "x²−2x−8 = (x−4)(x+2). Setting each factor to zero: x=4 or x=−2."
  },
  {
    id: 9655, section: "Maths",
    text: "Divide p(x) = x² + 5x + 6 by g(x) = x + 2. Find the quotient.",
    options: ["A) x+3", "B) x+2", "C) x−3", "D) x+1"],
    answer: "A",
    explanation: "x²+5x+6 = (x+2)(x+3). Dividing by (x+2) gives quotient (x+3) with remainder 0."
  },
  {
    id: 9656, section: "Maths",
    text: "A quadratic polynomial has one zero equal to 5, and the sum of its zeros is 8. Find the other zero.",
    options: ["A) 3", "B) 13", "C) −3", "D) 5"],
    answer: "A",
    explanation: "If sum of zeros = 8 and one zero is 5, the other zero = 8−5 = 3."
  },
  {
    id: 9657, section: "Maths",
    text: "Find the zeros of the polynomial x² − 49.",
    options: ["A) x=7 and x=−7", "B) x=49 and x=−49", "C) x=7 only", "D) x=−7 only"],
    answer: "A",
    explanation: "x²−49=0 → x²=49 → x=±7. So the zeros are x=7 and x=−7."
  },
  {
    id: 9658, section: "Maths",
    text: "The cubic polynomial x³ + x² − 4x − 4 has zeros at x=−1, x=−2, and x=2. Verify this by checking p(2)=0.",
    options: ["A) p(2) = 8+4−8−4 = 0, confirmed", "B) p(2) = 4, not a zero", "C) p(2) = −4", "D) Cannot verify without full factoring"],
    answer: "A",
    explanation: "p(2) = 2³+2²−4(2)−4 = 8+4−8−4 = 0. This confirms x=2 is indeed a zero of the polynomial."
  },
  {
    id: 9659, section: "Maths",
    text: "For the cubic x³ + x² − 4x − 4 (with zeros −1, −2, 2), find the sum of all three zeros using Vieta's formula, and verify directly.",
    options: ["A) Sum=−1, verified: (−1)+(−2)+2=−1", "B) Sum=4", "C) Sum=−4", "D) Sum=1"],
    answer: "A",
    explanation: "Using sum=−b/a for x³+x²−4x−4 (a=1,b=1): sum=−1/1=−1. Direct verification: (−1)+(−2)+2 = −1 ✓."
  },
  {
    id: 9660, section: "Maths",
    text: "[CBSE PYQ pattern] If α and β are zeros of the polynomial x² − 6x + 8, find the value of α + β + αβ.",
    options: ["A) 14", "B) 6", "C) 8", "D) 2"],
    answer: "A",
    explanation: "Sum (α+β) = −(−6)/1 = 6. Product (αβ) = 8/1 = 8. So α+β+αβ = 6+8 = 14."
  },
  {
    id: 9661, section: "Maths",
    text: "A quadratic polynomial has zeros that are both negative, with sum=−7 and product=10. Find the polynomial.",
    options: ["A) x²+7x+10", "B) x²−7x+10", "C) x²+7x−10", "D) x²−7x−10"],
    answer: "A",
    explanation: "Using x²−(sum)x+(product): x²−(−7)x+10 = x²+7x+10."
  },
  {
    id: 9662, section: "Maths",
    text: "Verify that x=−3 is a zero of p(x) = 2x² + 5x − 3... or determine the correct conclusion.",
    options: [
      "A) p(−3) = 18−15−3 = 0, so x=−3 IS a zero",
      "B) p(−3) = 6, so x=−3 is NOT a zero",
      "C) p(−3) = −18, so x=−3 is NOT a zero",
      "D) Cannot be determined"
    ],
    answer: "A",
    explanation: "p(−3) = 2(−3)²+5(−3)−3 = 2(9)−15−3 = 18−15−3 = 0. Since p(−3)=0, x=−3 IS confirmed to be a zero of the polynomial."
  },
  {
    id: 9663, section: "Maths",
    text: "[CBSE PYQ pattern] For the polynomial p(x) = x² − 1, find the zeros and express the polynomial in factored form.",
    options: ["A) Zeros: 1, −1; Factored: (x−1)(x+1)", "B) Zeros: 1 only; Factored: (x−1)²", "C) No real zeros", "D) Zeros: 1,−1; Factored: (x+1)²"],
    answer: "A",
    explanation: "x²−1 = 0 → x²=1 → x=±1. Using the difference of squares identity: x²−1 = (x−1)(x+1)."
  },
  {
    id: 9664, section: "Maths",
    text: "A quadratic polynomial has equal zeros (a repeated/double root). What must be true about its discriminant (b²−4ac)?",
    options: [
      "A) The discriminant must equal 0",
      "B) The discriminant must be positive",
      "C) The discriminant must be negative",
      "D) The discriminant has no relationship to repeated zeros"
    ],
    answer: "A",
    explanation: "A quadratic has equal (repeated) zeros if and only if its discriminant b²−4ac equals exactly 0. If the discriminant is positive, there are two distinct real zeros; if negative, there are no real zeros."
  },
  {
    id: 9665, section: "Maths",
    text: "Verify that x²−4x+4 has equal zeros, and find the repeated zero value.",
    options: ["A) Discriminant=0, repeated zero x=2", "B) Discriminant=16, two distinct zeros", "C) Discriminant=−16, no real zeros", "D) Repeated zero x=4"],
    answer: "A",
    explanation: "Discriminant = (−4)²−4(1)(4) = 16−16 = 0, confirming equal zeros. Since x²−4x+4=(x−2)², the repeated zero is x=2."
  },

  // ══ HARD (Q16–Q30) ═══════════════════════════════════════

  {
    id: 9666, section: "Maths",
    text: "[CBSE PYQ pattern] If −4 is a zero of the polynomial x² − x − (2k+2), find the value of k.",
    options: ["A) k=9", "B) k=7", "C) k=−9", "D) k=11"],
    answer: "A",
    explanation: "Substituting x=−4: (−4)²−(−4)−(2k+2) = 0 → 16+4−2k−2 = 0 → 18−2k=0 → k=9."
  },
  {
    id: 9667, section: "Maths",
    text: "If α and β are the zeros of 2x² − 5x + 7, find the value of (α/β) + (β/α), using the identity α/β+β/α = (α²+β²)/(αβ) = [(α+β)²−2αβ]/(αβ).",
    options: ["A) −3/14", "B) 25/14", "C) 3/14", "D) −25/14"],
    answer: "A",
    explanation: "Sum (α+β) = 5/2. Product (αβ) = 7/2. Using the identity: [(5/2)²−2(7/2)]/(7/2) = [25/4−7]/(7/2) = [25/4−28/4]/(7/2) = (−3/4)/(7/2) = −3/4 × 2/7 = −3/14."
  },
  {
    id: 9668, section: "Maths",
    text: "Find a quadratic polynomial whose zeros are (3+√2) and (3−√2).",
    options: ["A) x²−6x+7", "B) x²+6x+7", "C) x²−6x−7", "D) x²−6x+9"],
    answer: "A",
    explanation: "Sum = (3+√2)+(3−√2) = 6. Product = (3+√2)(3−√2) = 9−2 = 7. So the quadratic is x²−(sum)x+(product) = x²−6x+7."
  },
  {
    id: 9669, section: "Maths",
    text: "Given that x=1 is a zero of the cubic 2x³ + x² − 5x + 2, find the OTHER two zeros by dividing out (x−1) and solving the resulting quadratic.",
    options: ["A) x=−2 and x=1/2", "B) x=2 and x=−1/2", "C) x=−2 and x=−1/2", "D) x=2 and x=1/2"],
    answer: "A",
    explanation: "Verify x=1: 2(1)+1−5+2=0 ✓. Dividing 2x³+x²−5x+2 by (x−1) gives quotient 2x²+3x−2. Factoring or using the quadratic formula on 2x²+3x−2=0 gives x=−2 and x=1/2."
  },
  {
    id: 9670, section: "Maths",
    text: "If the sum of the squares of the zeros of a quadratic polynomial is 40, and the product of the zeros is 12, find the sum of the zeros (assuming a clean integer answer exists).",
    options: ["A) 8", "B) 10", "C) 6", "D) 4"],
    answer: "A",
    explanation: "Using the identity: (sum)² = (sum of squares) + 2×(product) = 40+2(12) = 40+24 = 64. So sum = √64 = 8."
  },
  {
    id: 9671, section: "Maths",
    text: "Expand (x − 2)³ to find a cubic polynomial with a TRIPLE root (all three zeros equal) at x=2.",
    options: ["A) x³−6x²+12x−8", "B) x³−6x²+12x+8", "C) x³+6x²−12x−8", "D) x³−8"],
    answer: "A",
    explanation: "(x−2)³ = x³−3(x²)(2)+3(x)(2²)−2³ = x³−6x²+12x−8. All three zeros of this polynomial equal 2 (a triple/repeated root)."
  },
  {
    id: 9672, section: "Maths",
    text: "A special polynomial p(x) equals 0 for EVERY value of x (i.e., p(x)=0 identically, sometimes called the 'zero polynomial'). How many zeros does this polynomial have?",
    options: [
      "A) Infinitely many zeros, since EVERY real number is a zero of this polynomial",
      "B) Exactly 0 zeros",
      "C) Exactly 1 zero",
      "D) This concept does not apply to polynomials"
    ],
    answer: "A",
    explanation: "The zero polynomial (where p(x)=0 for all x) is a special case where EVERY real number is technically a zero, since p(x)=0 is satisfied no matter what value of x is substituted. This makes it have infinitely many zeros, unlike typical polynomials which have a finite number of zeros equal to (at most) their degree."
  },
  {
    id: 9673, section: "Maths",
    text: "If dividing a polynomial p(x) by (x−2) gives a remainder of 5 (not 0), what can we conclude about (x−2) as a potential factor of p(x)?",
    options: [
      "A) (x−2) is NOT a factor of p(x), since a true factor must give a remainder of exactly 0",
      "B) (x−2) IS a factor, since any non-zero remainder still counts",
      "C) This tells us nothing about factorization",
      "D) p(x) must be a constant polynomial"
    ],
    answer: "A",
    explanation: "By the Factor Theorem, (x−a) is a factor of p(x) if and only if the remainder when dividing by (x−a) is exactly 0 (equivalently, p(a)=0). Since the remainder here is 5 (non-zero), (x−2) is NOT a factor of p(x)."
  },
  {
    id: 9674, section: "Maths",
    text: "[CBSE PYQ pattern] If one zero of the quadratic polynomial (k−1)x² + kx + 1 is −3, find the value of k.",
    options: ["A) k=4/3", "B) k=−4/3", "C) k=3/4", "D) k=−3/4"],
    answer: "A",
    explanation: "Substituting x=−3: (k−1)(−3)²+k(−3)+1=0 → 9(k−1)−3k+1=0 → 9k−9−3k+1=0 → 6k−8=0 → k=8/6=4/3."
  },
  {
    id: 9675, section: "Maths",
    text: "A quadratic polynomial has zeros α and β where α−β=4 and α+β=10. Find the individual zeros α and β.",
    options: ["A) α=7, β=3", "B) α=6, β=4", "C) α=8, β=2", "D) α=9, β=1"],
    answer: "A",
    explanation: "Adding both equations: (α+β)+(α−β) = 10+4 = 14 → 2α=14 → α=7. Substituting: 7+β=10 → β=3."
  },
  {
    id: 9676, section: "Maths",
    text: "[CBSE PYQ pattern] Find the zeros of the quadratic polynomial 6x² − 3 − 7x, and verify the relationship between zeros and coefficients.",
    options: [
      "A) Zeros are 3/2 and −1/3; sum=7/6 (verified), product=−1/2 (verified)",
      "B) Zeros are −3/2 and 1/3",
      "C) Zeros are 3 and −1",
      "D) No real zeros exist"
    ],
    answer: "A",
    explanation: "Rewriting: 6x²−7x−3=0. Factoring: (2x−3)(3x+1)=0, giving x=3/2 or x=−1/3. Verify sum: 3/2+(−1/3)=9/6−2/6=7/6=−(−7)/6 ✓. Verify product: (3/2)×(−1/3)=−1/2=−3/6 ✓."
  },
  {
    id: 9677, section: "Maths",
    text: "If the zeros of a cubic polynomial x³+px²+qx+r are in the ratio 1:2:3, and their sum is 12, find each individual zero.",
    options: ["A) 2, 4, 6", "B) 1, 2, 3", "C) 4, 8, 12", "D) 3, 6, 9"],
    answer: "A",
    explanation: "Let the zeros be k, 2k, 3k (in ratio 1:2:3). Sum = k+2k+3k = 6k = 12, so k=2. The zeros are k=2, 2k=4, 3k=6."
  },
  {
    id: 9678, section: "Maths",
    text: "A polynomial p(x) is divided by (x+1) and (x−2), giving remainders of 3 and 9 respectively. Using the Remainder Theorem, what are the values of p(−1) and p(2)?",
    options: [
      "A) p(−1)=3 and p(2)=9",
      "B) p(−1)=9 and p(2)=3",
      "C) p(−1)=−3 and p(2)=−9",
      "D) Cannot be determined from remainders alone"
    ],
    answer: "A",
    explanation: "By the Remainder Theorem, the remainder when p(x) is divided by (x−a) equals p(a). So dividing by (x+1)=(x−(−1)) with remainder 3 means p(−1)=3. Dividing by (x−2) with remainder 9 means p(2)=9."
  },
  {
    id: 9679, section: "Maths",
    text: "For a quadratic polynomial ax²+bx+c with REAL coefficients, if the discriminant (b²−4ac) is NEGATIVE, what can we conclude about its zeros?",
    options: [
      "A) The polynomial has no real zeros (the zeros are complex/imaginary)",
      "B) The polynomial has exactly one real zero",
      "C) The polynomial has two equal real zeros",
      "D) The polynomial has two distinct real zeros"
    ],
    answer: "A",
    explanation: "When the discriminant (b²−4ac) is negative, the quadratic formula involves taking the square root of a negative number, resulting in complex (non-real) zeros. This means the graph of the polynomial does not cross or touch the x-axis at all."
  },
  {
    id: 9680, section: "Maths",
    text: "If α, β are zeros of x²−px+q, find a quadratic polynomial whose zeros are (α+1) and (β+1), in terms of p and q.",
    options: [
      "A) x²−(p+2)x+(q+p+1)",
      "B) x²−px+q",
      "C) x²−(p+1)x+q",
      "D) x²−(p−2)x+(q−p+1)"
    ],
    answer: "A",
    explanation: "New sum = (α+1)+(β+1) = (α+β)+2 = p+2. New product = (α+1)(β+1) = αβ+α+β+1 = q+p+1. So the new quadratic is x²−(p+2)x+(q+p+1)."
  }

];
