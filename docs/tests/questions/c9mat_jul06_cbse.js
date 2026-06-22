// ============================================================
//  Std 9 CBSE Maths — Algebra & Patterns
//  Hinde Classes | hindeclasses.com
//  Maitreya Hinde | 7358425108
//  CBSE Board Pattern | 30Q | 60 min
//  50% Moderate + 50% Hard | PYQ-aligned
//  ID range: 9591–9620
// ============================================================

var questions = [

  // ══ MODERATE (Q1–Q15) ════════════════════════════════════

  {
    id: 9591, section: "Maths",
    text: "Find the 5th term of the arithmetic sequence: 2, 5, 8, 11, ...",
    options: ["A) 11", "B) 14", "C) 17", "D) 13"],
    answer: "B",
    explanation: "This is an arithmetic sequence with first term a=2 and common difference d=3. The nth term formula is a+(n−1)d. For n=5: 2+4(3) = 2+12 = 14."
  },
  {
    id: 9592, section: "Maths",
    text: "The sequence of square numbers is 1, 4, 9, 16, 25, ... What is the 6th square number?",
    options: ["A) 30", "B) 32", "C) 36", "D) 40"],
    answer: "C",
    explanation: "Square numbers follow the pattern n². The 6th square number is 6² = 36."
  },
  {
    id: 9593, section: "Maths",
    text: "Triangular numbers follow the pattern 1, 3, 6, 10, 15, ... using the formula n(n+1)/2. What is the 7th triangular number?",
    options: ["A) 21", "B) 24", "C) 28", "D) 36"],
    answer: "C",
    explanation: "Using the formula n(n+1)/2 for n=7: 7×8/2 = 56/2 = 28."
  },
  {
    id: 9594, section: "Maths",
    text: "Write an algebraic expression for: '5 more than thrice a number x.'",
    options: ["A) 3x+5", "B) 5x+3", "C) 3(x+5)", "D) x+5×3"],
    answer: "A",
    explanation: "'Thrice a number x' means 3x. 'Five more than' that means adding 5: 3x+5."
  },
  {
    id: 9595, section: "Maths",
    text: "The pattern 2, 4, 6, 8, ... follows the rule 'nth term = 2n'. What is the 10th term?",
    options: ["A) 10", "B) 18", "C) 20", "D) 22"],
    answer: "C",
    explanation: "Using nth term = 2n for n=10: 2×10 = 20."
  },
  {
    id: 9596, section: "Maths",
    text: "Evaluate the expression 2x² − 5x + 1 when x = 3.",
    options: ["A) 4", "B) 10", "C) −4", "D) 16"],
    answer: "A",
    explanation: "Substituting x=3: 2(3)²−5(3)+1 = 2(9)−15+1 = 18−15+1 = 4."
  },
  {
    id: 9597, section: "Maths",
    text: "A pattern of squares made from matchsticks follows: 4, 7, 10, 13, ... (each new square adds 3 matchsticks). How many matchsticks are needed for the 5th figure?",
    options: ["A) 13", "B) 15", "C) 16", "D) 19"],
    answer: "C",
    explanation: "Using nth term = 4+3(n−1) for n=5: 4+3(4) = 4+12 = 16."
  },
  {
    id: 9598, section: "Maths",
    text: "Solve for x: 3x + 7 = 22",
    options: ["A) x=3", "B) x=5", "C) x=7", "D) x=15"],
    answer: "B",
    explanation: "3x+7=22 → 3x=15 → x=5."
  },
  {
    id: 9599, section: "Maths",
    text: "Using the identity (a+b)(a−b)=a²−b², expand (x+4)(x−4).",
    options: ["A) x²−16", "B) x²+16", "C) x²−8x+16", "D) x²−4"],
    answer: "A",
    explanation: "Using (a+b)(a−b)=a²−b² with a=x, b=4: x²−4² = x²−16."
  },
  {
    id: 9600, section: "Maths",
    text: "The sequence of powers of 2: 2, 4, 8, 16, 32, ... follows nth term = 2ⁿ. What is the 6th term?",
    options: ["A) 32", "B) 48", "C) 64", "D) 128"],
    answer: "C",
    explanation: "Using nth term = 2ⁿ for n=6: 2⁶ = 64."
  },
  {
    id: 9601, section: "Maths",
    text: "Simplify the algebraic expression: 5x + 3x − 2x",
    options: ["A) 4x", "B) 6x", "C) 8x", "D) 10x"],
    answer: "B",
    explanation: "Combining like terms: 5x+3x−2x = (5+3−2)x = 6x."
  },
  {
    id: 9602, section: "Maths",
    text: "In the Fibonacci-like sequence 1, 1, 2, 3, 5, 8, ... (each term is the sum of the previous two), what is the next term after 8?",
    options: ["A) 11", "B) 13", "C) 16", "D) 10"],
    answer: "B",
    explanation: "Following the Fibonacci pattern (each term = sum of previous two): 5+8 = 13."
  },
  {
    id: 9603, section: "Maths",
    text: "Solve for x: x/4 = 9",
    options: ["A) x=2.25", "B) x=13", "C) x=36", "D) x=5"],
    answer: "C",
    explanation: "x/4=9 → x = 9×4 = 36."
  },
  {
    id: 9604, section: "Maths",
    text: "In the geometric sequence 3, 9, 27, 81, ..., what is the common ratio between consecutive terms?",
    options: ["A) 2", "B) 3", "C) 6", "D) 9"],
    answer: "B",
    explanation: "Common ratio = (next term)÷(previous term) = 9÷3 = 3 (also verify: 27÷9=3, 81÷27=3)."
  },
  {
    id: 9605, section: "Maths",
    text: "Identify the pattern rule for the sequence: 1, 4, 7, 10, 13, ...",
    options: ["A) Add 2 each time", "B) Add 3 each time", "C) Multiply by 2 each time", "D) Subtract 3 each time"],
    answer: "B",
    explanation: "Checking consecutive differences: 4−1=3, 7−4=3, 10−7=3, 13−10=3. The pattern rule is 'add 3 each time' (an arithmetic sequence with common difference 3)."
  },

  // ══ HARD (Q16–Q30) ═══════════════════════════════════════

  {
    id: 9606, section: "Maths",
    text: "For the arithmetic sequence 7, 12, 17, 22, ..., find a general formula for the nth term, then calculate the 20th term.",
    options: ["A) nth term = 5n+2; 20th term = 102", "B) nth term = 5n−2; 20th term = 98", "C) nth term = 7n; 20th term = 140", "D) nth term = 5n+7; 20th term = 107"],
    answer: "A",
    explanation: "First term a=7, common difference d=5. General formula: nth term = a+(n−1)d = 7+5(n−1) = 5n+2. For n=20: 5(20)+2 = 102."
  },
  {
    id: 9607, section: "Maths",
    text: "Using the formula for the sum of the first n natural numbers, n(n+1)/2, find the sum of the first 50 natural numbers.",
    options: ["A) 1225", "B) 1275", "C) 1300", "D) 2550"],
    answer: "B",
    explanation: "Using n(n+1)/2 for n=50: 50×51/2 = 2550/2 = 1275."
  },
  {
    id: 9608, section: "Maths",
    text: "The pentagonal numbers follow the pattern 1, 5, 12, 22, 35, ... using the formula n(3n−1)/2. Verify this formula gives the correct 5th term, and find the 4th term using the same formula.",
    options: [
      "A) 5th term = 35 (verified); 4th term = 22",
      "B) 5th term = 30; 4th term = 18",
      "C) 5th term = 40; 4th term = 25",
      "D) The formula does not work for n=5"
    ],
    answer: "A",
    explanation: "5th term: 5×(15−1)/2 = 5×14/2 = 35 ✓ (matches given sequence). 4th term: 4×(12−1)/2 = 4×11/2 = 22 (matches given sequence value)."
  },
  {
    id: 9609, section: "Maths",
    text: "Solve the system of equations: x + y = 10 and x − y = 4. Find the values of x and y.",
    options: ["A) x=7, y=3", "B) x=6, y=4", "C) x=5, y=5", "D) x=8, y=2"],
    answer: "A",
    explanation: "Adding both equations: 2x=14, so x=7. Substituting into x+y=10: 7+y=10, so y=3."
  },
  {
    id: 9610, section: "Maths",
    text: "The sequence 1, 4, 9, 16, 25, ... has differences 3, 5, 7, 9 between consecutive terms (which are odd numbers, increasing by 2 each time). Using this pattern, predict the 6th term.",
    options: ["A) 30", "B) 32", "C) 34", "D) 36"],
    answer: "D",
    explanation: "The next difference after 9 should be 11 (continuing the odd-number pattern). So the 6th term = 25+11 = 36. (This confirms the sequence is simply n²: 6²=36.)"
  },
  {
    id: 9611, section: "Maths",
    text: "Write and simplify the algebraic expression for the sum of three consecutive integers, starting with n.",
    options: ["A) 3n+3", "B) 3n", "C) n+3", "D) 3n+2"],
    answer: "A",
    explanation: "Three consecutive integers starting with n are: n, n+1, n+2. Their sum = n+(n+1)+(n+2) = 3n+3."
  },
  {
    id: 9612, section: "Maths",
    text: "A matchstick pattern of triangles in a row follows: 3, 5, 7, 9, ... (each new triangle adds 2 matchsticks). Find the number of matchsticks needed for the 10th figure.",
    options: ["A) 19", "B) 20", "C) 21", "D) 23"],
    answer: "C",
    explanation: "Using nth term = 3+2(n−1) for n=10: 3+2(9) = 3+18 = 21."
  },
  {
    id: 9613, section: "Maths",
    text: "Verify algebraically that the sum of the first 8 odd numbers (1+3+5+7+9+11+13+15) equals 8².",
    options: ["A) Sum = 64 = 8², confirmed", "B) Sum = 60, does not match 8²", "C) Sum = 72, does not match", "D) This pattern only works for even counts of terms"],
    answer: "A",
    explanation: "Sum = 1+3+5+7+9+11+13+15 = 64. Since 8² = 64, this confirms the well-known pattern: the sum of the first n odd numbers always equals n²."
  },
  {
    id: 9614, section: "Maths",
    text: "A sequence has first differences 4, 6, 8, 10 (increasing by 2 each time, meaning the SECOND differences are constant at 2). The sequence is 2, 6, 12, 20, 30, ... following the rule n(n+1). Find the 6th term.",
    options: ["A) 36", "B) 40", "C) 42", "D) 48"],
    answer: "C",
    explanation: "Using the formula n(n+1) for n=6: 6×7 = 42."
  },
  {
    id: 9615, section: "Maths",
    text: "Solve the word problem algebraically: 'Twice a number, increased by 7, equals 25. Find the number.'",
    options: ["A) x=7", "B) x=9", "C) x=11", "D) x=18"],
    answer: "B",
    explanation: "Let the number be x. The equation is: 2x+7=25. Solving: 2x=18, so x=9."
  },
  {
    id: 9616, section: "Maths",
    text: "A student claims: 'Every quadratic-type number pattern (where second differences are constant) can be written in the form an²+bn+c.' Using the sequence 2, 6, 12, 20, 30 (which equals n(n+1)=n²+n), identify the values of a, b, and c.",
    options: ["A) a=1, b=1, c=0", "B) a=1, b=0, c=1", "C) a=2, b=1, c=0", "D) a=1, b=2, c=0"],
    answer: "A",
    explanation: "Since n(n+1) = n²+n, comparing with an²+bn+c: a=1 (coefficient of n²), b=1 (coefficient of n), c=0 (constant term)."
  },
  {
    id: 9617, section: "Maths",
    text: "Two consecutive even numbers have a sum of 38. Using algebra, find both numbers.",
    options: ["A) 18 and 20", "B) 16 and 22", "C) 19 and 19", "D) 17 and 21"],
    answer: "A",
    explanation: "Let the consecutive even numbers be x and x+2. Then x+(x+2)=38 → 2x+2=38 → 2x=36 → x=18. So the numbers are 18 and 20."
  },
  {
    id: 9618, section: "Maths",
    text: "A pattern of dots forms hexagonal numbers: 1, 6, 15, 28, 45, ... using the formula n(2n−1). Verify this formula for n=4, and predict the 6th hexagonal number.",
    options: [
      "A) n=4 gives 28 (verified); 6th term = 66",
      "B) n=4 gives 24; 6th term = 60",
      "C) n=4 gives 28; 6th term = 70",
      "D) The formula does not match for n=4"
    ],
    answer: "A",
    explanation: "For n=4: 4×(8−1) = 4×7 = 28 ✓ (matches given sequence). For n=6: 6×(12−1) = 6×11 = 66."
  },
  {
    id: 9619, section: "Maths",
    text: "If the sum of two numbers is 15 and their difference is 5, use algebra (a system of two equations) to find both numbers.",
    options: ["A) 10 and 5", "B) 12 and 3", "C) 9 and 6", "D) 11 and 4"],
    answer: "A",
    explanation: "Let the numbers be x and y. x+y=15 and x−y=5. Adding: 2x=20, so x=10. Substituting: 10+y=15, so y=5."
  },
  {
    id: 9620, section: "Maths",
    text: "A number pattern is given: 5, 11, 19, 29, 41, ... A student observes the first differences are 6, 8, 10, 12 (increasing by 2 each time, suggesting a quadratic pattern n²+bn+c). Using the general quadratic form, find the next (6th) term in the sequence.",
    options: ["A) 53", "B) 55", "C) 57", "D) 59"],
    answer: "B",
    explanation: "Since second differences are constant at 2, the next first-difference (after 12) should be 14 (continuing the pattern of increasing by 2). So the 6th term = 41+14 = 55."
  }

];
