// ============================================================
//  Std 7 Goa Board Maths — Arithmetic Expressions
//  Hinde Classes | hindeclasses.com
//  Maitreya Hinde | 7358425108
//  NCERT Ganita Prakash Ch. 2 | Goa Board | 30Q | 60 min
//  50% Moderate + 50% Hard | PYQ-aligned
//  ID range: 9001–9030 (reusing series, check for conflicts)
// ============================================================

var questions = [

  // ══ MODERATE (Q1–Q15) ════════════════════════════════════

  {
    id: 9501, section: "Maths",
    text: "Evaluate using BODMAS: 30 + 5 × 4",
    options: ["A) 140", "B) 50", "C) 35", "D) 70"],
    answer: "B",
    explanation: "By BODMAS rule, multiplication is performed before addition: 5×4=20, then 30+20=50."
  },
  {
    id: 9502, section: "Maths",
    text: "In the expression 12 + 7, how many terms are there?",
    options: ["A) 1", "B) 2", "C) 3", "D) 19"],
    answer: "B",
    explanation: "Terms are parts of an expression separated by a '+' sign. In 12+7, the two terms are '12' and '7'."
  },
  {
    id: 9503, section: "Maths",
    text: "The expression 83 − 14 can be rewritten using the concept of terms as:",
    options: ["A) 83 + 14", "B) 83 + (−14)", "C) −83 + 14", "D) 83 − (−14)"],
    answer: "B",
    explanation: "Subtracting a number is the same as adding its inverse (opposite sign). So 83 − 14 = 83 + (−14), where the terms are 83 and −14."
  },
  {
    id: 9504, section: "Maths",
    text: "Evaluate: 100 − (15 + 56)",
    options: ["A) 141", "B) 29", "C) 71", "D) 39"],
    answer: "B",
    explanation: "First evaluate the bracket: 15+56=71. Then 100−71=29."
  },
  {
    id: 9505, section: "Maths",
    text: "Removing the brackets correctly, 100 − (15 + 56) becomes:",
    options: ["A) 100 − 15 + 56", "B) 100 − 15 − 56", "C) 100 + 15 − 56", "D) 100 + 15 + 56"],
    answer: "B",
    explanation: "When a minus sign precedes a bracket, the sign of EVERY term inside the bracket flips: 100 − (15+56) = 100 − 15 − 56."
  },
  {
    id: 9506, section: "Maths",
    text: "Which property is demonstrated by: 7 + 12 = 12 + 7?",
    options: ["A) Associative property", "B) Distributive property", "C) Commutative property", "D) Identity property"],
    answer: "C",
    explanation: "The commutative property states that changing the order of terms in addition does not change the result: a+b = b+a."
  },
  {
    id: 9507, section: "Maths",
    text: "Compare without complicated calculation: 245 + 289 ___ 246 + 285",
    options: ["A) >", "B) <", "C) =", "D) Cannot be determined"],
    answer: "A",
    explanation: "245→246 is +1, but 289→285 is −4. Net change = +1−4 = −3, meaning the RHS is smaller. So 245+289 > 246+285. (Verify: 534 > 531.)"
  },
  {
    id: 9508, section: "Maths",
    text: "Using the distributive property, 5 × (20 + 3) is equal to:",
    options: ["A) 5×20 + 3", "B) 5×20 + 5×3", "C) 5 + 20×3", "D) 5×20 − 5×3"],
    answer: "B",
    explanation: "The distributive property states a×(b+c) = a×b + a×c. So 5×(20+3) = 5×20 + 5×3 = 100+15 = 115."
  },
  {
    id: 9509, section: "Maths",
    text: "Mallika spends ₹25 every day for lunch at school. What is the total amount she spends from Monday to Friday (5 days)?",
    options: ["A) ₹100", "B) ₹125", "C) ₹150", "D) ₹30"],
    answer: "B",
    explanation: "Total spent = 5 × 25 = ₹125 (using the expression 5×25 for 5 days at ₹25 each)."
  },
  {
    id: 9510, section: "Maths",
    text: "Fill in the blank: 22 + ___ = 6 × 5",
    options: ["A) 6", "B) 7", "C) 8", "D) 9"],
    answer: "C",
    explanation: "6×5 = 30. So 22 + x = 30, giving x = 30−22 = 8."
  },
  {
    id: 9511, section: "Maths",
    text: "Fill in the blank: 8 × ___ = 64 ÷ 2",
    options: ["A) 2", "B) 3", "C) 4", "D) 8"],
    answer: "C",
    explanation: "64÷2 = 32. So 8×x = 32, giving x = 32÷8 = 4."
  },
  {
    id: 9512, section: "Maths",
    text: "Fill in the blank: 34 − ___ = 25",
    options: ["A) 7", "B) 8", "C) 9", "D) 10"],
    answer: "C",
    explanation: "34 − x = 25, so x = 34−25 = 9."
  },
  {
    id: 9513, section: "Maths",
    text: "Fill in the blank: 13 + 4 = ___ + 6",
    options: ["A) 10", "B) 11", "C) 12", "D) 13"],
    answer: "B",
    explanation: "13+4 = 17. So x+6 = 17, giving x = 17−6 = 11."
  },
  {
    id: 9514, section: "Maths",
    text: "Which property is demonstrated by: (3 + 5) + 2 = 3 + (5 + 2)?",
    options: ["A) Commutative property", "B) Associative property", "C) Distributive property", "D) Closure property"],
    answer: "B",
    explanation: "The associative property states that the way terms are grouped in addition does not affect the result: (a+b)+c = a+(b+c). Both sides equal 10."
  },
  {
    id: 9515, section: "Maths",
    text: "In the expression 30 + 5 × 4, identify the two terms:",
    options: ["A) 30 and 5", "B) 5 and 4", "C) 30 and 20 (i.e., 5×4)", "D) 30, 5, and 4 separately"],
    answer: "C",
    explanation: "Terms are separated by '+' signs, and each term is fully evaluated (multiplication/division done first) before identifying it. So the terms are 30 and (5×4)=20."
  },

  // ══ HARD (Q16–Q30) ═══════════════════════════════════════

  {
    id: 9516, section: "Maths",
    text: "A shopkeeper sold 3 books at ₹75 each and 5 pens at ₹12 each. Write and evaluate the expression for the total amount earned.",
    options: ["A) 3×75 + 5×12 = ₹225", "B) 3×75 + 5×12 = ₹285", "C) (3+5)×(75+12) = ₹696", "D) 3×12 + 5×75 = ₹411"],
    answer: "B",
    explanation: "Total = (3×75) + (5×12) = 225 + 60 = ₹285. Each term must be evaluated separately (multiplication first) before adding."
  },
  {
    id: 9517, section: "Maths",
    text: "Compare without complicated calculation: 364 + 587 ___ 363 + 589",
    options: ["A) >", "B) <", "C) =", "D) Cannot be determined"],
    answer: "B",
    explanation: "364→363 is −1, but 587→589 is +2. Net change = −1+2 = +1, meaning the RHS is larger. So 364+587 < 363+589. (Verify: 951 < 952.)"
  },
  {
    id: 9518, section: "Maths",
    text: "Compare without complicated calculation: 213 − 77 ___ 214 − 76",
    options: ["A) >", "B) <", "C) =", "D) Cannot be determined"],
    answer: "B",
    explanation: "213→214 is +1, and 77→76 (being subtracted) means subtracting a SMALLER number, which is equivalent to adding +1 more. Net effect = +1+1 = +2, so RHS is larger. So 213−77 < 214−76. (Verify: 136 < 138.)"
  },
  {
    id: 9519, section: "Maths",
    text: "Compare without complicated calculation: 273 − 145 ___ 272 − 144",
    options: ["A) >", "B) <", "C) =", "D) Cannot be determined"],
    answer: "C",
    explanation: "273→272 is −1, and 145→144 (being subtracted) means subtracting 1 LESS, equivalent to adding +1. Net effect = −1+1 = 0, so both sides are EQUAL. (Verify: 128 = 128.)"
  },
  {
    id: 9520, section: "Maths",
    text: "Evaluate using correct removal of brackets: 100 − (50 + 20)",
    options: ["A) 70", "B) 130", "C) 30", "D) 170"],
    answer: "C",
    explanation: "When removing brackets preceded by a minus sign, both terms inside flip sign: 100 − (50+20) = 100 − 50 − 20 = 30."
  },
  {
    id: 9521, section: "Maths",
    text: "Compare without complicated calculation: 124 + 245 ___ 129 + 245",
    options: ["A) >", "B) <", "C) =", "D) Cannot be determined"],
    answer: "B",
    explanation: "Since 245 is unchanged on both sides, compare 124 vs 129. Since 124 < 129, the LHS (124+245) < RHS (129+245). (Verify: 369 < 374.)"
  },
  {
    id: 9522, section: "Maths",
    text: "Evaluate using BODMAS: 50 − 3 × 4 + 2",
    options: ["A) 196", "B) 40", "C) 36", "D) 44"],
    answer: "B",
    explanation: "Multiplication first: 3×4=12. Then left to right: 50−12+2 = 38+2 = 40."
  },
  {
    id: 9523, section: "Maths",
    text: "Verify the distributive property by evaluating BOTH sides: 8 × (10 − 3) and 8×10 − 8×3.",
    options: ["A) Both equal 56", "B) Both equal 80", "C) They give different results", "D) Both equal 24"],
    answer: "A",
    explanation: "LHS: 8×(10−3) = 8×7 = 56. RHS: 8×10 − 8×3 = 80−24 = 56. Both sides match, confirming the distributive property for subtraction inside brackets."
  },
  {
    id: 9524, section: "Maths",
    text: "Evaluate the multi-term expression: 45 − 12 + 8 − 5",
    options: ["A) 26", "B) 30", "C) 36", "D) 60"],
    answer: "C",
    explanation: "Working left to right (all terms already separated by +/−): 45−12=33, 33+8=41, 41−5=36."
  },
  {
    id: 9525, section: "Maths",
    text: "Simplify by removing the bracket: −(20 − 8)",
    options: ["A) 12", "B) −12", "C) 28", "D) −28"],
    answer: "B",
    explanation: "A negative sign before a bracket flips the sign of every term inside: −(20−8) = −20+8 = −12."
  },
  {
    id: 9526, section: "Maths",
    text: "A library charges ₹15 per book per week, plus a fixed ₹20 registration fee. Write an expression for the total cost of borrowing 4 books for one week, and evaluate it.",
    options: ["A) 4×15 + 20 = ₹80", "B) 4×(15+20) = ₹140", "C) 4×15×20 = ₹1200", "D) 15+20+4 = ₹39"],
    answer: "A",
    explanation: "Total cost = (cost per book × number of books) + fixed fee = 4×15 + 20 = 60+20 = ₹80. The fixed fee is added only once, not multiplied by the number of books."
  },
  {
    id: 9527, section: "Maths",
    text: "Two students simplify 90 − 25 + 10 differently. Student A computes left to right: (90−25)+10. Student B computes 90 − (25+10). Which result is mathematically CORRECT according to the rules of terms in expressions?",
    options: [
      "A) Both give the same WRONG answer",
      "B) Student A is correct: 90−25+10 should be evaluated left to right as separate terms (90, −25, +10), giving 75",
      "C) Student B is correct, since brackets always take priority",
      "D) Neither method is valid for this expression"
    ],
    answer: "B",
    explanation: "In 90−25+10, the terms are 90, −25, and +10 (each separated by +/− signs). These should be evaluated by adding them in any order: 90−25+10 = 65+10 = 75. Student B's method incorrectly groups 25 and 10 together as if there were a bracket, which doesn't exist in the original expression, giving an incorrect result of 90−35=55."
  },
  {
    id: 9528, section: "Maths",
    text: "A taxi charges a base fare of ₹50 plus ₹8 per kilometre. Write an expression for the total fare for a 12 km trip, and evaluate it.",
    options: ["A) 50 + 8×12 = ₹146", "B) (50+8)×12 = ₹696", "C) 50×8×12 = ₹4800", "D) 50×12 + 8 = ₹608"],
    answer: "A",
    explanation: "Total fare = base fare + (rate per km × distance) = 50 + 8×12 = 50+96 = ₹146. The base fare is a fixed one-time charge, added separately from the distance-based charge."
  },
  {
    id: 9529, section: "Maths",
    text: "Simplify: 200 − (80 − 30) + (15 − 5)",
    options: ["A) 160", "B) 130", "C) 110", "D) 60"],
    answer: "A",
    explanation: "Evaluate brackets first: (80−30)=50, (15−5)=10. Then: 200−50+10 = 150+10 = 160."
  },
  {
    id: 9530, section: "Maths",
    text: "A school orders 6 packs of pencils at ₹40 per pack and 6 packs of erasers at ₹15 per pack. Using the distributive property, write a SIMPLIFIED single expression (factoring out the common term) for the total cost, and evaluate it.",
    options: ["A) 6×(40+15) = ₹330", "B) 6×40 + 15 = ₹255", "C) 40+15×6 = ₹130", "D) 6×40×15 = ₹3600"],
    answer: "A",
    explanation: "Since both items are bought in quantities of 6, the distributive property allows factoring: 6×40 + 6×15 = 6×(40+15) = 6×55 = ₹330. This is a practical application of the distributive property to simplify calculation."
  }

];
