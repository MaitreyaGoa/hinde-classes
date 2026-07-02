// ============================================================
//  ws_goa_s9_math_20260703_00 — Std 9 Maths (Goa) — Combined Starter Test
//  Covers: Number Systems · Polynomials · Lines and Angles
//  30 questions · subjective/worked-out only · no MCQ
//  "answer" field is for the TEACHER'S reference only — worksheet.html
//  does not display it to students.
// ============================================================

window.worksheetQuestions = [

  // ── SECTION A: Number Systems ────────────────────────────────
  { id:"a1", section:"Number Systems", marks:1,
    text:"Is 0 a rational number? Justify your answer in one line.",
    answer:"Yes — 0 = 0/1, which is of the form p/q with q≠0" },

  { id:"a2", section:"Number Systems", marks:1,
    text:"State whether √16 is rational or irrational, giving a reason.",
    answer:"Rational — √16 = 4, which can be written as 4/1" },

  { id:"a3", section:"Number Systems", marks:2,
    text:"Find two irrational numbers that lie between 2 and 3.",
    answer:"e.g. √5 (≈2.236) and √7 (≈2.646) — both lie between 2 and 3 and are irrational" },

  { id:"a4", section:"Number Systems", marks:2,
    text:"Express 2.5 in the form p/q, where p and q are integers and q≠0.",
    answer:"2.5 = 5/2" },

  { id:"a5", section:"Number Systems", marks:2,
    text:"Simplify, showing each law of exponents you use: (2⁵ × 2³) ÷ 2⁴",
    answer:"2^(5+3−4) = 2⁴ = 16" },

  { id:"a6", section:"Number Systems", marks:3,
    text:"Rationalize the denominator of 1/(√5 − √3). Show your working.",
    answer:"Multiply by (√5+√3)/(√5+√3): (√5+√3)/(5−3) = (√5+√3)/2" },

  { id:"a7", section:"Number Systems", marks:3,
    text:"Simplify, using laws of exponents: (3^(2/3))³ × 3⁻¹",
    answer:"(3^(2/3))³ = 3² = 9; 9 × 3⁻¹ = 9/3 = 3" },

  { id:"a8", section:"Number Systems", marks:3,
    text:"Convert the recurring decimal 0.4̄ (0.4444...) into the form p/q. Show your method.",
    answer:"Let x=0.444...; 10x=4.444...; 10x−x=4 → 9x=4 → x=4/9" },

  { id:"a9", section:"Number Systems", marks:4,
    text:"(a) Express 0.3̄5̄ (0.353535...) as p/q, showing your method.\n(b) Verify your fraction is correct by converting it back to a decimal.",
    answer:"(a) Let x=0.353535...; 100x=35.3535...; 100x−x=35 → 99x=35 → x=35/99\n(b) 35÷99 = 0.353535... ✓" },

  { id:"a10", section:"Number Systems", marks:5,
    text:"Simplify fully, showing every step: (√2 + √3)² − 2√6",
    answer:"(√2+√3)² = 2+3+2√6 = 5+2√6; subtracting 2√6 leaves 5" },

  // ── SECTION B: Polynomials ────────────────────────────────────
  { id:"b1", section:"Polynomials", marks:1,
    text:"What is the degree of the polynomial 5x³ − 2x + 7?",
    answer:"3" },

  { id:"b2", section:"Polynomials", marks:1,
    text:"Is x² + 1/x a polynomial? Give a reason for your answer.",
    answer:"No — 1/x = x⁻¹ has a negative exponent; polynomials require non-negative integer powers of x" },

  { id:"b3", section:"Polynomials", marks:2,
    text:"Find the zero of the polynomial p(x) = 3x − 9.",
    answer:"3x−9=0 → x=3" },

  { id:"b4", section:"Polynomials", marks:2,
    text:"If p(x) = x² − 5x + 6, find p(2) and p(3). What do you notice about both results?",
    answer:"p(2)=4−10+6=0; p(3)=9−15+6=0 — both 2 and 3 are zeroes of the polynomial" },

  { id:"b5", section:"Polynomials", marks:2,
    text:"Use the Factor Theorem to check whether (x−1) is a factor of p(x) = x³ − 3x² + 3x − 1.",
    answer:"p(1) = 1−3+3−1 = 0, so (x−1) IS a factor" },

  { id:"b6", section:"Polynomials", marks:3,
    text:"Use the Remainder Theorem to find the remainder when p(x) = x³ + 3x² + 3x + 1 is divided by (x+1).",
    answer:"Remainder = p(−1) = −1+3−3+1 = 0" },

  { id:"b7", section:"Polynomials", marks:3,
    text:"Using a suitable algebraic identity, expand (2x + 3y)².",
    answer:"4x² + 12xy + 9y²" },

  { id:"b8", section:"Polynomials", marks:3,
    text:"Using a suitable identity (not direct multiplication), evaluate 103 × 97. (Hint: 103 = 100+3, 97 = 100−3.)",
    answer:"(100+3)(100−3) = 100²−3² = 10000−9 = 9991" },

  { id:"b9", section:"Polynomials", marks:4,
    text:"Factorize x² − 7x + 12 by splitting the middle term. Show every step.",
    answer:"Need two numbers multiplying to 12, adding to −7: −3 and −4.\nx²−3x−4x+12 = x(x−3)−4(x−3) = (x−3)(x−4)" },

  { id:"b10", section:"Polynomials", marks:5,
    text:"(a) Using the identity for (a+b)³, expand (x+2)³.\n(b) Verify your expansion is correct by substituting x=1 into both (1+2)³ directly, and into your expanded expression — confirm they match.",
    answer:"(a) x³+6x²+12x+8  (b) (1+2)³=27; expanded form at x=1: 1+6+12+8=27 ✓" },

  // ── SECTION C: Lines and Angles ───────────────────────────────
  { id:"c1", section:"Lines and Angles", marks:1,
    text:"Define complementary angles.",
    answer:"Two angles whose sum is 90°" },

  { id:"c2", section:"Lines and Angles", marks:1,
    text:"Two angles form a linear pair. If one angle is 65°, find the other.",
    answer:"180−65 = 115°" },

  { id:"c3", section:"Lines and Angles", marks:2,
    text:"Find the angle which is equal to its own complement.",
    answer:"x = 90−x → 2x=90 → x=45°" },

  { id:"c4", section:"Lines and Angles", marks:2,
    text:"Two lines intersect, forming four angles. If one of the angles is 72°, find the measures of the other three angles (using the vertically-opposite and linear-pair properties).",
    answer:"Vertically opposite to 72° = 72°; the other two angles = 180−72 = 108° each" },

  { id:"c5", section:"Lines and Angles", marks:2,
    text:"Find the angle which is equal to twice its supplement.",
    answer:"x = 2(180−x) → 3x=360 → x=120° (check: supplement=60°, twice 60°=120° ✓)" },

  { id:"c6", section:"Lines and Angles", marks:3,
    text:"Two parallel lines are cut by a transversal. A pair of co-interior (allied) angles are in the ratio 2:3. (a) Find both angles. (b) State the value of the alternate interior angle equal to the smaller of the two.",
    answer:"(a) Co-interior angles are supplementary → 5 parts=180° → 36° per part → angles = 72°, 108°\n(b) The alternate interior angle equal to 72° is also 72° (alternate angles are equal)" },

  { id:"c7", section:"Lines and Angles", marks:3,
    text:"The angles of a triangle are in the ratio 2:3:4. Find each angle using the angle sum property of a triangle.",
    answer:"9 parts = 180° → 20° per part → angles = 40°, 60°, 80°" },

  { id:"c8", section:"Lines and Angles", marks:3,
    text:"A transversal cuts two parallel lines. One angle formed is 110°. Find: (a) the angle vertically opposite to it, (b) the angle forming a linear pair with it, (c) its corresponding angle on the other parallel line.",
    answer:"(a) 110° (vertically opposite equal)  (b) 70° (linear pair, supplementary)  (c) 110° (corresponding angles equal)" },

  { id:"c9", section:"Lines and Angles", marks:4,
    text:"In triangle ABC, ∠A = 4x, ∠B = 3x, and ∠C = x + 20°.\n(a) Find x using the angle sum property.\n(b) Find the measure of each angle.\n(c) Name the type of triangle ABC is, based on its angles and side-implications.",
    answer:"(a) 4x+3x+x+20=180 → 8x=160 → x=20\n(b) ∠A=80°, ∠B=60°, ∠C=40°\n(c) All angles are different (scalene) and all are less than 90° (acute-angled triangle)" },

  { id:"c10", section:"Lines and Angles", marks:5,
    text:"Two parallel lines l and m are cut by a transversal t. The bisectors of a pair of co-interior (same-side interior) angles are drawn. Prove, using algebra, that these two bisectors always meet at a right angle.\n(Hint: let the co-interior angles be 2a and 2b, so each bisector splits its angle into a and a, or b and b. Use the fact that 2a+2b=180°.)",
    answer:"2a+2b=180° → a+b=90°. In the triangle formed by the transversal and the two bisectors, the third angle = 180−(a+b) = 180−90 = 90°. So the bisectors meet at a right angle." }

];
