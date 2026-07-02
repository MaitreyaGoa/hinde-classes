// ============================================================
//  ws_goa_s8_math_20260703_00 — Std 8 Maths (Goa) — Combined Starter Test
//  Covers: A Story of Numbers · Quadrilaterals · Number Play
//  30 questions · subjective/worked-out only · no MCQ
//  "answer" field is for the TEACHER'S reference only — worksheet.html
//  does not display it to students.
// ============================================================

window.worksheetQuestions = [

  // ── SECTION A: A Story of Numbers ────────────────────────────
  { id:"a1", section:"A Story of Numbers", marks:1,
    text:"Write 47 as a Roman numeral.",
    answer:"XLVII" },

  { id:"a2", section:"A Story of Numbers", marks:1,
    text:"Write the Hindu-Arabic (usual) numeral for the Roman numeral XCIV.",
    answer:"94" },

  { id:"a3", section:"A Story of Numbers", marks:2,
    text:"Convert 23 (base 10) into base-5. Show your working using repeated division.",
    answer:"43 (in base 5) — since 23 = 4×5 + 3" },

  { id:"a4", section:"A Story of Numbers", marks:2,
    text:"Convert the base-5 number 132₅ into base-10. Show your working.",
    answer:"132₅ = 1×25 + 3×5 + 2×1 = 25+15+2 = 42" },

  { id:"a5", section:"A Story of Numbers", marks:2,
    text:"Give one advantage of the Hindu-Arabic (Indian) number system over the Roman numeral system, using a numeric example to support your explanation.",
    answer:"e.g. place value lets one write large numbers compactly with only 10 symbols; 3998 needs 11 Roman symbols (MMMCMXCVIII) but only 4 digits in Hindu-Arabic." },

  { id:"a6", section:"A Story of Numbers", marks:3,
    text:"Write 1998 as a Roman numeral. Show how you built it up part by part (thousands, hundreds, tens, units).",
    answer:"1000=M, 900=CM, 90=XC, 8=VIII → MCMXCVIII" },

  { id:"a7", section:"A Story of Numbers", marks:3,
    text:"Convert 50 (base 10) into base-8. Show your working using repeated division.",
    answer:"62 (in base 8) — since 50 = 6×8 + 2" },

  { id:"a8", section:"A Story of Numbers", marks:3,
    text:"A number system uses only the symbols 0 and 1 (base-2). Convert 13 (base 10) into this base-2 system. Show your working.",
    answer:"1101 (in base 2) — since 13 = 8+4+0+1" },

  { id:"a9", section:"A Story of Numbers", marks:4,
    text:"(a) Convert 3998 into Roman numerals, building it up thousands → hundreds → tens → units.\n(b) Convert MMXXIV into a Hindu-Arabic numeral, breaking it into its parts.",
    answer:"(a) MMMCMXCVIII  (b) MM=2000, XX=20, IV=4 → 2024" },

  { id:"a10", section:"A Story of Numbers", marks:5,
    text:"A tally-mark system can only show quantity, with no place value. Explain, with a numeric example, why a place-value system (like the Hindu-Arabic system) lets us write very large numbers far more efficiently than a tally-mark or a pure Roman-numeral system. Compare the length of representation of the number 4000 in Roman numerals versus the Hindu-Arabic system as part of your answer.",
    answer:"Place value lets each digit's position carry meaning, so only 4 symbols (4000) are needed instead of repeating symbols; 4000 in Roman numerals is MMMM — either way much less compact/scalable than '4000'." },

  // ── SECTION B: Quadrilaterals ─────────────────────────────────
  { id:"b1", section:"Quadrilaterals", marks:1,
    text:"What is the sum of all four interior angles of any quadrilateral?",
    answer:"360°" },

  { id:"b2", section:"Quadrilaterals", marks:1,
    text:"Name a quadrilateral in which all four sides are equal in length and all four angles are 90°.",
    answer:"Square" },

  { id:"b3", section:"Quadrilaterals", marks:2,
    text:"In a quadrilateral, three angles measure 85°, 95°, and 100°. Find the measure of the fourth angle. Show your working.",
    answer:"360 − 85 − 95 − 100 = 80°" },

  { id:"b4", section:"Quadrilaterals", marks:2,
    text:"The diagonals of a rhombus are 12 cm and 16 cm. Using the fact that the diagonals of a rhombus bisect each other at right angles, find the length of each side.",
    answer:"Half-diagonals = 6 cm, 8 cm → side = √(6²+8²) = √100 = 10 cm" },

  { id:"b5", section:"Quadrilaterals", marks:2,
    text:"ABCD is a parallelogram where ∠A = 65°. Find ∠B, ∠C, and ∠D, stating the property you use for each.",
    answer:"∠C = 65° (opposite angles equal); ∠B = ∠D = 115° (consecutive angles supplementary, 180−65)" },

  { id:"b6", section:"Quadrilaterals", marks:3,
    text:"The angles of a quadrilateral are in the ratio 2:3:4:6. Find the measure of each angle.",
    answer:"Total parts = 15 → 1 part = 24° → angles = 48°, 72°, 96°, 144°" },

  { id:"b7", section:"Quadrilaterals", marks:3,
    text:"In a trapezium PQRS, PQ ∥ SR. If ∠P = 110°, find ∠S. If ∠Q = 75°, find ∠R. (Use the co-interior angles property for the parallel sides.)",
    answer:"∠S = 180−110 = 70°; ∠R = 180−75 = 105°" },

  { id:"b8", section:"Quadrilaterals", marks:3,
    text:"In a kite, one diagonal is bisected by the other into two equal halves of 8 cm each, meeting at right angles. The other diagonal is divided by this intersection point into two unequal parts of 6 cm and 15 cm. Find the lengths of the two different side-lengths of the kite.",
    answer:"Shorter sides = √(8²+6²) = 10 cm; longer sides = √(8²+15²) = 17 cm" },

  { id:"b9", section:"Quadrilaterals", marks:4,
    text:"PQRS is a quadrilateral where ∠P : ∠Q : ∠R : ∠S = 3 : 4 : 5 : 6.\n(a) Find each angle.\n(b) Could PQRS be a trapezium with PQ ∥ SR? Justify using the co-interior angle property.",
    answer:"(a) 60°, 80°, 100°, 120°  (b) Yes — ∠P+∠S = 60+120 = 180° and ∠Q+∠R = 80+100 = 180°, so PQ ∥ SR is consistent" },

  { id:"b10", section:"Quadrilaterals", marks:5,
    text:"A rectangle has length 24 cm and breadth 10 cm. (Recall: the diagonals of a rectangle are equal and bisect each other.)\n(a) Find the length of each diagonal.\n(b) Find the distance from the point where the diagonals intersect to any vertex.\n(c) What type of quadrilateral is formed by joining the midpoints of the rectangle's four sides? Justify your answer using your result from (a).",
    answer:"(a) √(24²+10²) = 26 cm  (b) 13 cm  (c) A rhombus — since the rectangle's diagonals are equal, the midpoint quadrilateral has all 4 sides equal (each = half the diagonal = 13 cm)" },

  // ── SECTION C: Number Play ───────────────────────────────────
  { id:"c1", section:"Number Play", marks:1,
    text:"Is the sum of two odd numbers always even, always odd, or does it depend? Give one example.",
    answer:"Always even — e.g. 5 + 7 = 12" },

  { id:"c2", section:"Number Play", marks:1,
    text:"Find the digital root of 4875 (repeatedly add the digits until you get a single digit).",
    answer:"4+8+7+5=24 → 2+4=6. Digital root = 6" },

  { id:"c3", section:"Number Play", marks:2,
    text:"Check whether 4,32,180 is divisible by 9. Show the digit-sum test you used.",
    answer:"Digit sum = 4+3+2+1+8+0 = 18, which is divisible by 9 → yes, 4,32,180 is divisible by 9" },

  { id:"c4", section:"Number Play", marks:2,
    text:"Write the general form (using a variable k) of all numbers that leave remainder 4 when divided by 7. List the first four such numbers.",
    answer:"7k+4 → 4, 11, 18, 25" },

  { id:"c5", section:"Number Play", marks:2,
    text:"Prove using algebra that the sum of any three consecutive whole numbers is always divisible by 3. (Let the numbers be n, n+1, n+2.)",
    answer:"n+(n+1)+(n+2) = 3n+3 = 3(n+1), which is always divisible by 3" },

  { id:"c6", section:"Number Play", marks:3,
    text:"For each statement, say whether it is Always True, Sometimes True, or Never True. Justify each with an example or algebra.\n(a) The sum of two even numbers is divisible by 4.\n(b) If a number is divisible by 12, it is also divisible by 3.",
    answer:"(a) Sometimes true — e.g. 4+6=10 (not div by 4), but 4+8=12 (div by 4)\n(b) Always true — since 12=3×4, any multiple of 12 is automatically a multiple of 3" },

  { id:"c7", section:"Number Play", marks:3,
    text:"A number leaves remainder 2 when divided by 5. Using algebra, show that the sum of any three such numbers always leaves remainder 1 when divided by 5.",
    answer:"Numbers: 5a+2, 5b+2, 5c+2. Sum = 5(a+b+c)+6 = 5(a+b+c+1)+1, so the remainder is always 1" },

  { id:"c8", section:"Number Play", marks:3,
    text:"Find the smallest number greater than 100 that leaves remainder 3 when divided by both 4 and 6. (Hint: find LCM(4,6) first.)",
    answer:"LCM(4,6)=12; numbers of the form 12k+3; smallest greater than 100 is 111 (111 = 9×12+3)" },

  { id:"c9", section:"Number Play", marks:4,
    text:"In the cryptarithm SEND + MORE = MONEY, each letter stands for one digit (same letter = same digit, different letters = different digits). Verify that O=0, M=1, Y=2, E=5, N=6, D=7, R=8, S=9 satisfies this addition — show the full addition with these digits substituted in.",
    answer:"SEND=9567, MORE=1085, sum=10652=MONEY. 9567+1085=10652 ✓" },

  { id:"c10", section:"Number Play", marks:5,
    text:"A three-digit number has digits a, b, c in that order (so the number is 100a+10b+c). Prove algebraically that this number minus the number formed by reversing its digits (100c+10b+a) is always divisible by 9, assuming a ≠ c. Then verify your proof using the number 743.",
    answer:"100a+10b+c − (100c+10b+a) = 99a−99c = 99(a−c) = 9×11×(a−c), divisible by 9. For 743: 743−347=396=9×44 ✓" }

];
