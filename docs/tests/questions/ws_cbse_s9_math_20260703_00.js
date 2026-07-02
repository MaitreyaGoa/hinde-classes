// ============================================================
//  ws_cbse_s9_math_20260703_00 — Std 9 Maths (CBSE) — Combined Starter Test
//  Covers: Ganita Manjari Part 1, Ch 1–4:
//    Orienting Yourself (Coordinates) · Introduction to Linear Polynomials ·
//    The World of Numbers · Exploring Algebraic Identities
//  30 questions · subjective/worked-out only · no MCQ
//  Doubles as prep for the school exam on 10 July (Ch 1–4).
//  "answer" field is for the TEACHER'S reference only — worksheet.html
//  does not display it to students.
// ============================================================

window.worksheetQuestions = [

  // ── SECTION A: Orienting Yourself — The Use of Coordinates ────
  { id:"a1", section:"Orienting Yourself: Coordinates", marks:1,
    text:"In which quadrant does the point (−3, 5) lie?",
    answer:"Second quadrant" },

  { id:"a2", section:"Orienting Yourself: Coordinates", marks:1,
    text:"What are the coordinates of the origin?",
    answer:"(0, 0)" },

  { id:"a3", section:"Orienting Yourself: Coordinates", marks:2,
    text:"State which axis the point (0, −7) lies on, and explain why.",
    answer:"The y-axis — because its x-coordinate is 0" },

  { id:"a4", section:"Orienting Yourself: Coordinates", marks:2,
    text:"Find the distance between the points A(3, 4) and the origin O(0, 0) using the distance formula.",
    answer:"√(3²+4²) = √25 = 5" },

  { id:"a5", section:"Orienting Yourself: Coordinates", marks:3,
    text:"Find the coordinates of the midpoint of the line segment joining P(2, −3) and Q(6, 7).",
    answer:"Midpoint = ((2+6)/2, (−3+7)/2) = (4, 2)" },

  { id:"a6", section:"Orienting Yourself: Coordinates", marks:3,
    text:"Show that the points A(1,1), B(4,4), and C(7,7) are collinear, by using the distance formula to verify AB + BC = AC.",
    answer:"AB=3√2, BC=3√2, AC=6√2. AB+BC=6√2=AC → collinear" },

  { id:"a7", section:"Orienting Yourself: Coordinates", marks:4,
    text:"Find the distance between A(−2, 3) and B(4, −5). Then find the midpoint of AB, and verify that this midpoint is equidistant from both A and B.",
    answer:"AB = √(6²+8²) = 10. Midpoint = (1, −1). Distance from midpoint to A = 5, to B = 5 — equal, and each equals half of AB" },

  // ── SECTION B: Introduction to Linear Polynomials ─────────────
  { id:"b1", section:"Introduction to Linear Polynomials", marks:1,
    text:"Write the general form of a linear polynomial in x.",
    answer:"ax + b, where a≠0" },

  { id:"b2", section:"Introduction to Linear Polynomials", marks:1,
    text:"Find the zero of the linear polynomial p(x) = 2x − 6.",
    answer:"2x−6=0 → x=3" },

  { id:"b3", section:"Introduction to Linear Polynomials", marks:2,
    text:"Is p(x) = 3x² + 2 a linear polynomial? Give a reason for your answer.",
    answer:"No — it has degree 2 (a quadratic polynomial), not degree 1" },

  { id:"b4", section:"Introduction to Linear Polynomials", marks:2,
    text:"Find the zero of p(x) = −4x + 8, and verify your answer by substituting it back into p(x).",
    answer:"x=2. Check: p(2) = −8+8 = 0 ✓" },

  { id:"b5", section:"Introduction to Linear Polynomials", marks:3,
    text:"Find a linear polynomial whose zero is −5 and whose coefficient of x is 3.",
    answer:"p(x) = 3x + 15 (check: 3(−5)+15 = 0 ✓)" },

  { id:"b6", section:"Introduction to Linear Polynomials", marks:3,
    text:"The graph of a linear polynomial is a straight line. For p(x) = 2x − 4, find two points on its graph by evaluating p(0) and p(3), and state their coordinates.",
    answer:"p(0)=−4 → (0,−4); p(3)=2 → (3,2)" },

  { id:"b7", section:"Introduction to Linear Polynomials", marks:4,
    text:"A linear polynomial p(x) = kx + 5 has zero at x = −1.\n(a) Find the value of k.\n(b) Write the full polynomial.\n(c) Find p(2) using your polynomial.",
    answer:"(a) 0=k(−1)+5 → k=5  (b) p(x)=5x+5  (c) p(2)=10+5=15" },

  // ── SECTION C: The World of Numbers ────────────────────────────
  { id:"c1", section:"The World of Numbers", marks:1,
    text:"Is √9 rational or irrational? Justify your answer.",
    answer:"Rational — √9=3, which can be written as 3/1" },

  { id:"c2", section:"The World of Numbers", marks:1,
    text:"Simplify: 5⁰ + 2³",
    answer:"1 + 8 = 9" },

  { id:"c3", section:"The World of Numbers", marks:2,
    text:"State whether 0.1̄2̄3̄ (0.123123123...) is rational or irrational. Give a reason.",
    answer:"Rational — every repeating (recurring) decimal represents a rational number" },

  { id:"c4", section:"The World of Numbers", marks:2,
    text:"Find two rational numbers that lie between 1/4 and 1/2.",
    answer:"e.g. 1/3 (≈0.333) and 3/8 (=0.375) — both lie between 0.25 and 0.5" },

  { id:"c5", section:"The World of Numbers", marks:2,
    text:"Simplify, showing the laws of exponents used: (5²)³ ÷ 5⁴",
    answer:"5^(6−4) = 5² = 25" },

  { id:"c6", section:"The World of Numbers", marks:3,
    text:"Convert the recurring decimal 0.6̄ (0.666...) into the form p/q. Show your method.",
    answer:"x=0.666...; 10x=6.666...; 9x=6 → x=2/3" },

  { id:"c7", section:"The World of Numbers", marks:3,
    text:"Rationalize the denominator of 1/√7 and simplify.",
    answer:"Multiply by √7/√7: √7/7" },

  { id:"c8", section:"The World of Numbers", marks:4,
    text:"Simplify: √50 + √18 − √8. Write each term in its simplest surd form first, then combine like terms.",
    answer:"√50=5√2, √18=3√2, √8=2√2 → 5√2+3√2−2√2 = 6√2" },

  // ── SECTION D: Exploring Algebraic Identities ─────────────────
  { id:"d1", section:"Exploring Algebraic Identities", marks:1,
    text:"State the identity for (a+b)².",
    answer:"a² + 2ab + b²" },

  { id:"d2", section:"Exploring Algebraic Identities", marks:1,
    text:"Expand (x − 5)² using the identity for (a−b)².",
    answer:"x² − 10x + 25" },

  { id:"d3", section:"Exploring Algebraic Identities", marks:2,
    text:"Using the identity a² − b², evaluate 51 × 49 without direct multiplication. (Hint: 51=50+1, 49=50−1.)",
    answer:"50² − 1² = 2500 − 1 = 2499" },

  { id:"d4", section:"Exploring Algebraic Identities", marks:2,
    text:"Expand (3x + 2y)² using the identity for (a+b)².",
    answer:"9x² + 12xy + 4y²" },

  { id:"d5", section:"Exploring Algebraic Identities", marks:2,
    text:"Factorize x² − 16 using the identity a² − b².",
    answer:"(x−4)(x+4)" },

  { id:"d6", section:"Exploring Algebraic Identities", marks:3,
    text:"Using the identity for (a+b)³, expand (x+1)³.",
    answer:"x³ + 3x² + 3x + 1" },

  { id:"d7", section:"Exploring Algebraic Identities", marks:3,
    text:"Simplify using a suitable identity: (2x+3)² − (2x−3)². (Hint: use A²−B²=(A+B)(A−B) with A=2x+3, B=2x−3.)",
    answer:"(A+B)(A−B) = (4x)(6) = 24x" },

  { id:"d8", section:"Exploring Algebraic Identities", marks:4,
    text:"(a) Using the identity for (a−b)³, expand (x−2)³.\n(b) Verify your expansion by substituting x=3 into (3−2)³ directly, and also into your expanded expression — confirm they match.",
    answer:"(a) x³−6x²+12x−8  (b) Direct: (1)³=1. Expanded at x=3: 27−54+36−8=1 ✓" }

];
