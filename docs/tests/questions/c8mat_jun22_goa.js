// ============================================================
//  Std 8 Goa Board Maths — A Story of Numbers (Rational Numbers)
//  Hinde Classes | hindeclasses.com
//  Maitreya Hinde | 7358425108
//  NCERT Ganita Prakash Ch. 3 | Goa Board | 30Q | 60 min
//  50% Moderate + 50% Hard | PYQ-aligned
//  ID range: 8331–8360
// ============================================================

var questions = [

  // ══ MODERATE (Q1–Q15) ════════════════════════════════════

  {
    id: 8331, section: "Maths",
    text: "Which of the following is NOT a rational number?",
    options: ["A) 3/4", "B) −5", "C) √2", "D) 0"],
    answer: "C",
    explanation: "A rational number can be expressed as p/q where p, q are integers and q ≠ 0. √2 = 1.41421... is non-terminating and non-repeating, so it cannot be expressed as p/q. It is irrational."
  },
  {
    id: 8332, section: "Maths",
    text: "The number 0 can be written in p/q form as:",
    options: ["A) 0/0", "B) 1/0", "C) 0/1", "D) 0 is not a rational number"],
    answer: "C",
    explanation: "0 can be written as 0/1, where p = 0 and q = 1 (q ≠ 0). So 0 is a rational number. Note: 0/0 is undefined and 1/0 is undefined."
  },
  {
    id: 8333, section: "Maths",
    text: "The additive inverse of −7/9 is:",
    options: ["A) 7/9", "B) −9/7", "C) 9/7", "D) −7/9"],
    answer: "A",
    explanation: "The additive inverse of a number a is −a such that a + (−a) = 0. Additive inverse of −7/9 is −(−7/9) = 7/9. Check: −7/9 + 7/9 = 0 ✓"
  },
  {
    id: 8334, section: "Maths",
    text: "The multiplicative inverse (reciprocal) of −4/5 is:",
    options: ["A) 4/5", "B) 5/4", "C) −5/4", "D) −4/5"],
    answer: "C",
    explanation: "The multiplicative inverse of a/b is b/a. Multiplicative inverse of −4/5 is 5/(−4) = −5/4. Check: (−4/5) × (−5/4) = 20/20 = 1 ✓"
  },
  {
    id: 8335, section: "Maths",
    text: "3/4 + (−5/8) = ?",
    options: ["A) 1/8", "B) −1/8", "C) 2/8", "D) 1/4"],
    answer: "A",
    explanation: "LCM of 4 and 8 is 8. 3/4 = 6/8. So 6/8 + (−5/8) = (6−5)/8 = 1/8."
  },
  {
    id: 8336, section: "Maths",
    text: "(−2/3) × (9/4) = ?",
    options: ["A) −3/2", "B) 3/2", "C) −6/7", "D) −18/12"],
    answer: "A",
    explanation: "(−2/3) × (9/4) = (−2 × 9)/(3 × 4) = −18/12 = −3/2. The product of a negative and a positive is negative."
  },
  {
    id: 8337, section: "Maths",
    text: "The property used in: (−3/5) + (7/9) = (7/9) + (−3/5) is:",
    options: ["A) Associativity of addition", "B) Commutativity of addition", "C) Distributivity", "D) Closure property"],
    answer: "B",
    explanation: "When the order of addition is changed without affecting the result (a + b = b + a), it is the commutative property of addition. Rational numbers are commutative under addition."
  },
  {
    id: 8338, section: "Maths",
    text: "(−3/7) ÷ (6/7) = ?",
    options: ["A) −1/2", "B) 1/2", "C) −18/49", "D) 2"],
    answer: "A",
    explanation: "Division by a fraction means multiplying by its reciprocal. (−3/7) ÷ (6/7) = (−3/7) × (7/6) = −21/42 = −1/2."
  },
  {
    id: 8339, section: "Maths",
    text: "A rational number that lies exactly between 1/3 and 1/2 is:",
    options: ["A) 5/12", "B) 2/5", "C) 3/7", "D) 1/4"],
    answer: "A",
    explanation: "Using the mean method: (1/3 + 1/2)/2 = (2/6 + 3/6)/2 = (5/6)/2 = 5/12. Since 1/3 = 4/12 and 1/2 = 6/12, and 5/12 lies between them. ✓"
  },
  {
    id: 8340, section: "Maths",
    text: "Which of the following correctly represents −8 as a rational number?",
    options: ["A) −8/1", "B) 8/−0", "C) −1/8", "D) −8 is not rational"],
    answer: "A",
    explanation: "Every integer is a rational number. −8 can be written as −8/1, where p = −8 and q = 1 (q ≠ 0). So −8 is a rational number."
  },
  {
    id: 8341, section: "Maths",
    text: "The additive identity for rational numbers is:",
    options: ["A) 1", "B) −1", "C) 0", "D) 1/2"],
    answer: "C",
    explanation: "The additive identity is the number that, when added to any rational number, gives the same number. For any rational a: a + 0 = a. So 0 is the additive identity."
  },
  {
    id: 8342, section: "Maths",
    text: "(−5/11) + (5/11) = ?",
    options: ["A) 10/11", "B) 0", "C) 1", "D) −10/11"],
    answer: "B",
    explanation: "(−5/11) and (5/11) are additive inverses of each other. Their sum = 0. This illustrates the property: a + (−a) = 0."
  },
  {
    id: 8343, section: "Maths",
    text: "Rational numbers are NOT closed under which operation?",
    options: ["A) Addition", "B) Subtraction", "C) Multiplication", "D) Division by zero"],
    answer: "D",
    explanation: "Rational numbers are closed under addition, subtraction, and multiplication (result is always a rational number). Division by zero is not defined, so rational numbers are not closed under division by zero."
  },
  {
    id: 8344, section: "Maths",
    text: "On a number line, which of the following lies to the LEFT of 0?",
    options: ["A) 3/4", "B) 7/8", "C) −3/4", "D) 1/100"],
    answer: "C",
    explanation: "Negative rational numbers lie to the left of 0 on the number line. −3/4 is a negative rational number, so it lies to the left of 0."
  },
  {
    id: 8345, section: "Maths",
    text: "Using distributivity, (1/2) × (3/4 + 5/4) equals:",
    options: ["A) 1", "B) 1/2", "C) 2", "D) 15/16"],
    answer: "A",
    explanation: "By distributivity: (1/2)×(3/4+5/4) = (1/2)×(3/4) + (1/2)×(5/4) = 3/8 + 5/8 = 8/8 = 1. Or directly: 3/4+5/4 = 8/4 = 2, then (1/2)×2 = 1."
  },

  // ══ HARD (Q16–Q30) ═══════════════════════════════════════

  {
    id: 8346, section: "Maths",
    text: "Simplify: (−5/6) × (3/10) + (−7/4) ÷ (7/8)",
    options: ["A) −9/4", "B) −3/4", "C) −5/4", "D) 9/4"],
    answer: "A",
    explanation: "Step 1: (−5/6)×(3/10) = −15/60 = −1/4. Step 2: (−7/4)÷(7/8) = (−7/4)×(8/7) = −56/28 = −2. Step 3: −1/4 + (−2) = −1/4 − 8/4 = −9/4."
  },
  {
    id: 8347, section: "Maths",
    text: "How many rational numbers lie between 2/5 and 3/5?",
    options: ["A) 1", "B) 10", "C) 100", "D) Infinitely many"],
    answer: "D",
    explanation: "Between any two distinct rational numbers, there are infinitely many rational numbers. This is called the density property of rational numbers. No matter how close 2/5 and 3/5 appear, infinitely many rationals exist between them."
  },
  {
    id: 8348, section: "Maths",
    text: "If x + (−5/13) = 0, then x = ?",
    options: ["A) 5/13", "B) −5/13", "C) 13/5", "D) −13/5"],
    answer: "A",
    explanation: "x + (−5/13) = 0 ⟹ x = 0 − (−5/13) = 5/13. This is the additive inverse of −5/13."
  },
  {
    id: 8349, section: "Maths",
    text: "(−7/8) × (−8/7) = ?",
    options: ["A) −1", "B) 1", "C) 49/64", "D) 0"],
    answer: "B",
    explanation: "(−7/8) × (−8/7) = (7×8)/(8×7) = 56/56 = 1. Both numbers have the same sign (negative × negative = positive), and they are multiplicative inverses of each other."
  },
  {
    id: 8350, section: "Maths",
    text: "Verify by calculating both sides: (2/3 + 1/4) + 3/8 and 2/3 + (1/4 + 3/8). Both equal:",
    options: ["A) 31/24", "B) 13/12", "C) 5/8", "D) 29/24"],
    answer: "A",
    explanation: "LHS: (2/3+1/4)+3/8 = (8/12+3/12)+3/8 = 11/12+3/8 = 22/24+9/24 = 31/24. RHS: 2/3+(1/4+3/8) = 2/3+(2/8+3/8) = 2/3+5/8 = 16/24+15/24 = 31/24. This verifies associativity."
  },
  {
    id: 8351, section: "Maths",
    text: "Find the rational number exactly halfway between −1/2 and 3/4:",
    options: ["A) 1/4", "B) 1/8", "C) 1/6", "D) 5/8"],
    answer: "B",
    explanation: "Halfway = mean = (−1/2 + 3/4)/2 = (−2/4 + 3/4)/2 = (1/4)/2 = 1/8. Check: 1/8 − (−1/2) = 1/8 + 4/8 = 5/8; 3/4 − 1/8 = 6/8 − 1/8 = 5/8. Equal gaps ✓"
  },
  {
    id: 8352, section: "Maths",
    text: "(−4/5) ÷ (−8/15) = ?",
    options: ["A) 3/2", "B) −3/2", "C) 2/3", "D) 6/75"],
    answer: "A",
    explanation: "(−4/5) ÷ (−8/15) = (−4/5) × (−15/8) = (4×15)/(5×8) = 60/40 = 3/2. Negative ÷ negative = positive."
  },
  {
    id: 8353, section: "Maths",
    text: "The property illustrated by (a × b) × c = a × (b × c) for rational numbers is:",
    options: ["A) Closure under multiplication", "B) Commutativity of multiplication", "C) Associativity of multiplication", "D) Distributivity"],
    answer: "C",
    explanation: "The property (a × b) × c = a × (b × c) shows that the grouping (association) of factors does not change the product. This is the associative property of multiplication."
  },
  {
    id: 8354, section: "Maths",
    text: "Subtract −3/4 from 5/6:",
    options: ["A) 19/12", "B) 1/12", "C) −19/12", "D) 7/12"],
    answer: "A",
    explanation: "Subtracting −3/4 from 5/6 means: 5/6 − (−3/4) = 5/6 + 3/4. LCM of 6 and 4 is 12: 10/12 + 9/12 = 19/12."
  },
  {
    id: 8355, section: "Maths",
    text: "The product of two rational numbers is −15/56. If one of them is 5/8, the other is:",
    options: ["A) −3/7", "B) 3/7", "C) −75/448", "D) −7/3"],
    answer: "A",
    explanation: "Let the other number be x. Then (5/8) × x = −15/56. So x = (−15/56) ÷ (5/8) = (−15/56) × (8/5) = −120/280 = −3/7."
  },
  {
    id: 8356, section: "Maths",
    text: "If x/(−4) = −3/16, then x = ?",
    options: ["A) 3/4", "B) −3/4", "C) 12/64", "D) 3/64"],
    answer: "A",
    explanation: "x/(−4) = −3/16. Cross-multiplying: x × 16 = (−3) × (−4) = 12. So x = 12/16 = 3/4."
  },
  {
    id: 8357, section: "Maths",
    text: "Simplify: (2/3 + 1/6) × (3/5 ÷ 9/10)",
    options: ["A) 5/9", "B) 5/18", "C) 5/3", "D) 1/3"],
    answer: "A",
    explanation: "Step 1: 2/3 + 1/6 = 4/6 + 1/6 = 5/6. Step 2: 3/5 ÷ 9/10 = 3/5 × 10/9 = 30/45 = 2/3. Step 3: (5/6) × (2/3) = 10/18 = 5/9."
  },
  {
    id: 8358, section: "Maths",
    text: "The standard (simplest) form of −36/48 is:",
    options: ["A) −3/4", "B) 3/4", "C) −6/8", "D) −9/12"],
    answer: "A",
    explanation: "HCF of 36 and 48 is 12. −36/48 = −(36÷12)/(48÷12) = −3/4. The standard form has a positive denominator and the fraction is in lowest terms."
  },
  {
    id: 8359, section: "Maths",
    text: "Using distributivity, verify: (−2/3) × (3/4 − 1/6). The result is:",
    options: ["A) −7/18", "B) 7/18", "C) −5/18", "D) −1/3"],
    answer: "A",
    explanation: "Method 1 (direct): 3/4−1/6 = 9/12−2/12 = 7/12. Then (−2/3)×(7/12) = −14/36 = −7/18. Method 2 (distributivity): (−2/3)×(3/4) + (−2/3)×(−1/6) = −6/12 + 2/18 = −1/2 + 1/9 = −9/18 + 2/18 = −7/18. ✓"
  },
  {
    id: 8360, section: "Maths",
    text: "The sum of a rational number and its additive inverse is always:",
    options: ["A) 1", "B) The number itself", "C) 0", "D) 2 times the number"],
    answer: "C",
    explanation: "By definition, the additive inverse of any rational number a/b is −a/b, and a/b + (−a/b) = 0. This is true for every rational number — the sum with its additive inverse is always 0."
  }

];
