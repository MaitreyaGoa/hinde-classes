// ============================================================
//  ws_goa_s10_math_20260703_00 — Std 10 Maths (Goa) — Combined Starter Test
//  Covers: Polynomials · Pair of Linear Equations in Two Variables · Quadratic Equations
//  30 questions · subjective/worked-out only · no MCQ
//  "answer" field is for the TEACHER'S reference only — worksheet.html
//  does not display it to students.
// ============================================================

window.worksheetQuestions = [

  // ── SECTION A: Polynomials ────────────────────────────────────
  { id:"a1", section:"Polynomials", marks:1,
    text:"Write the standard (general) form of a quadratic polynomial in x.",
    answer:"ax² + bx + c, where a≠0" },

  { id:"a2", section:"Polynomials", marks:1,
    text:"What is the maximum number of zeroes a linear polynomial can have?",
    answer:"1" },

  { id:"a3", section:"Polynomials", marks:2,
    text:"Find the zeroes of p(x) = x² − 5x + 6 by factorization.",
    answer:"(x−2)(x−3)=0 → x=2, 3" },

  { id:"a4", section:"Polynomials", marks:2,
    text:"If α and β are the zeroes of x² − 3x − 10, find α+β and αβ using the coefficients directly (without finding the zeroes first).",
    answer:"α+β = −b/a = 3; αβ = c/a = −10" },

  { id:"a5", section:"Polynomials", marks:2,
    text:"Verify the relationship between zeroes and coefficients for p(x) = x² − 3x − 10 by finding the actual zeroes and checking them against −b/a and c/a.",
    answer:"Zeroes: (x−5)(x+2)=0 → x=5,−2. Sum=5+(−2)=3=−b/a ✓. Product=5×(−2)=−10=c/a ✓" },

  { id:"a6", section:"Polynomials", marks:3,
    text:"Find a quadratic polynomial whose sum and product of zeroes are 4 and 1 respectively.",
    answer:"x² − (sum)x + (product) = x² − 4x + 1" },

  { id:"a7", section:"Polynomials", marks:3,
    text:"Divide p(x) = x³ − 3x² + 5x − 3 by g(x) = x² − 2, using the division algorithm. State the quotient and remainder.",
    answer:"Quotient = x−3, Remainder = 7x−9  (verify: (x²−2)(x−3)+(7x−9) = x³−3x²+5x−3 ✓)" },

  { id:"a8", section:"Polynomials", marks:3,
    text:"Find a cubic polynomial whose zeroes are 2, −3, and 1, using the relationships between zeroes and coefficients.",
    answer:"Sum=0, sum of products two at a time=−7, product=−6 → x³ − 0·x² + (−7)x − (−6) = x³ − 7x + 6" },

  { id:"a9", section:"Polynomials", marks:4,
    text:"If α and β are the zeroes of 2x² − 5x + 3, find the value of α² + β² without directly solving for α and β. (Hint: use the identity α²+β² = (α+β)² − 2αβ.)",
    answer:"α+β=5/2, αβ=3/2. α²+β² = (5/2)² − 2(3/2) = 25/4 − 3 = 13/4" },

  { id:"a10", section:"Polynomials", marks:5,
    text:"(a) Find the zeroes of the quadratic polynomial 6x² − 7x − 3 by factorization.\n(b) Verify the relationship between the zeroes and the coefficients.",
    answer:"(a) (2x−3)(3x+1)=0 → x=3/2, −1/3\n(b) Sum=7/6=−b/a ✓; Product=−1/2=c/a ✓" },

  // ── SECTION B: Pair of Linear Equations in Two Variables ──────
  { id:"b1", section:"Pair of Linear Equations", marks:1,
    text:"Write one linear equation in two variables x and y whose graph passes through the origin.",
    answer:"Any equation of the form ax+by=0, e.g. y=2x or x−y=0" },

  { id:"b2", section:"Pair of Linear Equations", marks:1,
    text:"For the equations x+y=5 and 2x+2y=10, state (without solving) whether the system has a unique solution, no solution, or infinitely many solutions. Give your reasoning using the coefficient ratios.",
    answer:"a1/a2=1/2, b1/b2=1/2, c1/c2=1/2 — all equal → infinitely many solutions (coincident lines)" },

  { id:"b3", section:"Pair of Linear Equations", marks:2,
    text:"Solve by the substitution method: x+y=7, x−y=1.",
    answer:"Adding: 2x=8 → x=4, y=3" },

  { id:"b4", section:"Pair of Linear Equations", marks:2,
    text:"Solve by the elimination method: 2x+3y=12, x−y=1.",
    answer:"From 2nd: x=y+1. Substituting: 2(y+1)+3y=12 → 5y=10 → y=2, x=3" },

  { id:"b5", section:"Pair of Linear Equations", marks:2,
    text:"Using the ratio test, check whether 3x+2y=6 and 6x+4y=18 is consistent or inconsistent.",
    answer:"a1/a2=1/2, b1/b2=1/2, c1/c2=1/3. a1/a2=b1/b2 ≠ c1/c2 → parallel lines → inconsistent (no solution)" },

  { id:"b6", section:"Pair of Linear Equations", marks:3,
    text:"Solve using the cross-multiplication method: 2x + y = 8, x − y = 1.",
    answer:"x=3, y=2 (verify: 2(3)+2=8 ✓, 3−2=1 ✓)" },

  { id:"b7", section:"Pair of Linear Equations", marks:3,
    text:"The sum of two numbers is 25 and their difference is 5. Form a pair of linear equations and solve to find the two numbers.",
    answer:"x+y=25, x−y=5 → x=15, y=10" },

  { id:"b8", section:"Pair of Linear Equations", marks:3,
    text:"Find the value of k for which the system kx+2y=5 and 3x+y=1 has NO solution.",
    answer:"For no solution: a1/a2=b1/b2 → k/3=2/1 → k=6 (and c1/c2=5≠2, confirming no solution)" },

  { id:"b9", section:"Pair of Linear Equations", marks:4,
    text:"5 years ago, a father was 7 times as old as his son. 5 years from now, the father will be 3 times as old as his son. Form a pair of linear equations and find their present ages.",
    answer:"(x−5)=7(y−5) and (x+5)=3(y+5) → present ages: father=40, son=10" },

  { id:"b10", section:"Pair of Linear Equations", marks:5,
    text:"A boat covers 30 km upstream and 44 km downstream in 10 hours. In another trip, it covers 40 km upstream and 55 km downstream in 13 hours. Find the speed of the boat in still water and the speed of the stream.\n(Hint: let u = 1/(boat speed − stream speed) and v = 1/(boat speed + stream speed), and form linear equations in u and v.)",
    answer:"30u+44v=10, 40u+55v=13 → u=1/5, v=1/11 → boat speed−stream=5, boat speed+stream=11 → boat speed = 8 km/h, stream speed = 3 km/h" },

  // ── SECTION C: Quadratic Equations ─────────────────────────────
  { id:"c1", section:"Quadratic Equations", marks:1,
    text:"Write the standard form of a quadratic equation.",
    answer:"ax² + bx + c = 0, where a≠0" },

  { id:"c2", section:"Quadratic Equations", marks:1,
    text:"Find the discriminant of 2x² − 4x + 3 = 0.",
    answer:"D = b²−4ac = 16−24 = −8" },

  { id:"c3", section:"Quadratic Equations", marks:2,
    text:"Solve by factorization: x² − 7x + 10 = 0.",
    answer:"(x−5)(x−2)=0 → x=5, 2" },

  { id:"c4", section:"Quadratic Equations", marks:2,
    text:"Solve using the quadratic formula: 2x² + 3x − 2 = 0.",
    answer:"D=9+16=25 → x=(−3±5)/4 → x=1/2 or x=−2" },

  { id:"c5", section:"Quadratic Equations", marks:2,
    text:"Without solving, determine the nature of the roots of 3x² − 2x + 1 = 0 using the discriminant.",
    answer:"D=4−12=−8 < 0 → no real roots" },

  { id:"c6", section:"Quadratic Equations", marks:3,
    text:"Solve by completing the square: x² + 6x + 5 = 0.",
    answer:"x²+6x+9=4 → (x+3)²=4 → x+3=±2 → x=−1 or x=−5" },

  { id:"c7", section:"Quadratic Equations", marks:3,
    text:"Find the value of k for which the quadratic equation kx² − 6x + 9 = 0 has real and equal roots.",
    answer:"D=0: 36−36k=0 → k=1" },

  { id:"c8", section:"Quadratic Equations", marks:3,
    text:"The product of two consecutive positive integers is 240. Form a quadratic equation and solve to find the integers.",
    answer:"x(x+1)=240 → x²+x−240=0 → (x+16)(x−15)=0 → x=15 (positive) → integers are 15 and 16" },

  { id:"c9", section:"Quadratic Equations", marks:4,
    text:"The sum of the squares of two consecutive positive odd numbers is 130. Form a quadratic equation and solve to find the numbers.",
    answer:"Let numbers be x, x+2: x²+(x+2)²=130 → x²+2x−63=0 → (x+9)(x−7)=0 → x=7 → numbers are 7 and 9 (check: 49+81=130 ✓)" },

  { id:"c10", section:"Quadratic Equations", marks:5,
    text:"A train travels 480 km at a uniform speed. If the speed had been 8 km/h more, it would have taken 3 hours less to cover the same distance.\n(a) Form a quadratic equation for the original speed of the train.\n(b) Solve it to find the original speed.",
    answer:"480/x − 480/(x+8) = 3 → x²+8x−1280=0 → (x+40)(x−32)=0 → x=32 km/h" }

];
