// ============================================================
//  Std 8 Goa Board Maths — Number Play
//  Hinde Classes | hindeclasses.com
//  Maitreya Hinde | 7358425108
//  NCERT Ganita Prakash Ch. 5 | Goa Board | 30Q | 60 min
//  50% Moderate + 50% Hard | PYQ-aligned
//  ID range: 9531–9560
// ============================================================

var questions = [

  // ══ MODERATE (Q1–Q15) ════════════════════════════════════

  {
    id: 9531, section: "Maths",
    text: "Is 4563 divisible by 3? Use the divisibility rule to check.",
    options: ["A) Yes, since digit sum (18) is divisible by 3", "B) No, since digit sum is not divisible by 3", "C) Cannot be determined without division", "D) Yes, but only because it ends in 3"],
    answer: "A",
    explanation: "Divisibility rule for 3: sum of digits must be divisible by 3. Digit sum of 4563 = 4+5+6+3 = 18, which is divisible by 3. So 4563 is divisible by 3."
  },
  {
    id: 9532, section: "Maths",
    text: "Is 7299 divisible by 9? Use the divisibility rule to verify.",
    options: ["A) No", "B) Yes, since digit sum (27) is divisible by 9", "C) Only divisible by 3, not 9", "D) Cannot be checked using digit sum"],
    answer: "B",
    explanation: "Divisibility rule for 9: sum of digits must be divisible by 9. Digit sum of 7299 = 7+2+9+9 = 27, which is divisible by 9. So 7299 is divisible by 9."
  },
  {
    id: 9533, section: "Maths",
    text: "Using the divisibility rule for 4, is 3548 divisible by 4?",
    options: ["A) No", "B) Yes, since the last two digits (48) form a number divisible by 4", "C) Cannot be determined", "D) Only divisible by 2, not 4"],
    answer: "B",
    explanation: "Divisibility rule for 4: the last two digits must form a number divisible by 4. Last two digits of 3548 are '48', and 48÷4=12 exactly. So 3548 is divisible by 4."
  },
  {
    id: 9534, section: "Maths",
    text: "Using the divisibility rule for 11, check if 2728 is divisible by 11.",
    options: ["A) No", "B) Yes, since the alternating digit sum (11) is divisible by 11", "C) Only divisible by 2", "D) Cannot be checked this way"],
    answer: "B",
    explanation: "Divisibility rule for 11: the alternating sum of digits (from right) must be divisible by 11. For 2728: 8−2+7−2 = 11, which is divisible by 11. So 2728 is divisible by 11."
  },
  {
    id: 9535, section: "Maths",
    text: "Which of the following numbers is a palindrome?",
    options: ["A) 1234", "B) 5678", "C) 12321", "D) 10001 is not, but 12321 also isn't"],
    answer: "C",
    explanation: "A palindrome reads the same forwards and backwards. 12321 reversed is still 12321, making it a palindrome. 1234 and 5678 are not palindromes."
  },
  {
    id: 9536, section: "Maths",
    text: "In a 3×3 magic square using the numbers 1 to 9, what is the 'magic sum' (the sum of each row, column, and diagonal)?",
    options: ["A) 9", "B) 12", "C) 15", "D) 45"],
    answer: "C",
    explanation: "The magic sum for a 3×3 magic square using numbers 1–9 is found using: (sum of 1 to 9) ÷ 3 = 45÷3 = 15. Every row, column, and diagonal must add up to 15."
  },
  {
    id: 9537, section: "Maths",
    text: "What is the digital root (repeated digit sum) of 36, and what does it confirm about 36?",
    options: ["A) Digital root = 9, confirming 36 is divisible by 9", "B) Digital root = 6, confirming 36 is divisible by 6 only", "C) Digital root = 3, confirming 36 is prime", "D) Digital root has no meaning for 36"],
    answer: "A",
    explanation: "Digit sum of 36 = 3+6 = 9. Since the result is exactly 9, the digital root is 9, which confirms that 36 is divisible by 9 (36÷9=4)."
  },
  {
    id: 9538, section: "Maths",
    text: "Calculate 11 × 11. What special property does the result have?",
    options: ["A) 121, a palindrome", "B) 122, not a palindrome", "C) 111, a palindrome", "D) 21, not relevant"],
    answer: "A",
    explanation: "11×11 = 121, which reads the same forwards and backwards, making it a palindrome — part of an interesting pattern (1×1=1, 11×11=121, 111×111=12321...)."
  },
  {
    id: 9539, section: "Maths",
    text: "Calculate 111 × 111. What special property does the result have?",
    options: ["A) 12321, a palindrome", "B) 11211, not a palindrome", "C) 1221, a palindrome", "D) 111111, not relevant"],
    answer: "A",
    explanation: "111×111 = 12321, which is a palindrome, continuing the pattern seen with 11×11=121."
  },
  {
    id: 9540, section: "Maths",
    text: "Check if 4326 is divisible by 6 using the appropriate divisibility rule.",
    options: ["A) No, since it's not divisible by 2", "B) Yes, since it is divisible by BOTH 2 and 3", "C) Yes, but only by 2", "D) Cannot be checked using a combined rule"],
    answer: "B",
    explanation: "A number is divisible by 6 if it is divisible by both 2 and 3. 4326 is even (divisible by 2), and digit sum = 4+3+2+6=15, divisible by 3. Since both conditions hold, 4326 is divisible by 6."
  },
  {
    id: 9541, section: "Maths",
    text: "Using the divisibility rule for 8, check if 1000 is divisible by 8.",
    options: ["A) No", "B) Yes, since the last three digits (000) form a number divisible by 8", "C) Only divisible by 4", "D) Cannot be determined without full division"],
    answer: "B",
    explanation: "Divisibility rule for 8: the last three digits must form a number divisible by 8. Last three digits of 1000 are '000' = 0, which is divisible by 8 (0÷8=0). So 1000 is divisible by 8."
  },
  {
    id: 9542, section: "Maths",
    text: "Starting with the 2-digit number 57: reverse it to get 75, add (57+75=132), then reverse 132 to get 231, and add again (132+231). What palindrome results, and after how many reversal-addition steps?",
    options: ["A) 363, after 2 steps", "B) 132, after 1 step", "C) 1001, after 3 steps", "D) No palindrome is ever reached"],
    answer: "A",
    explanation: "Step 1: 57+75=132 (not a palindrome). Step 2: 132+231=363, which IS a palindrome (reads same forwards/backwards). So the palindrome 363 is reached after 2 reversal-addition steps."
  },
  {
    id: 9543, section: "Maths",
    text: "If a 3-digit number is repeated to form a 6-digit number (e.g., 456 → 456456), this 6-digit number is always divisible by which THREE numbers?",
    options: ["A) 2, 3, and 5", "B) 7, 11, and 13", "C) 9, 11, and 13", "D) 3, 7, and 9"],
    answer: "B",
    explanation: "Repeating any 3-digit number to form a 6-digit number (like abcabc) is equivalent to multiplying the original 3-digit number by 1001. Since 1001 = 7×11×13, the resulting 6-digit number is always divisible by 7, 11, and 13."
  },
  {
    id: 9544, section: "Maths",
    text: "Why is 1001 a special number in relation to repeating 3-digit numbers?",
    options: [
      "A) 1001 = 7 × 11 × 13, which is the multiplier when repeating any 3-digit number to form a 6-digit number",
      "B) 1001 is a prime number",
      "C) 1001 has no special mathematical properties",
      "D) 1001 only relates to 4-digit numbers"
    ],
    answer: "A",
    explanation: "1001 factors as 7×11×13. When a 3-digit number 'abc' is repeated to form 'abcabc', this is mathematically equal to abc×1001 — which is why the result is always divisible by 7, 11, and 13."
  },
  {
    id: 9545, section: "Maths",
    text: "Multiply 47 by 9. What is the digit sum of the result, and what does this confirm?",
    options: [
      "A) Result=423, digit sum=9, confirming the rule that multiplying any number by 9 gives a digit sum that is 9 or a multiple of 9",
      "B) Result=423, digit sum=15, no special pattern",
      "C) Result=432, digit sum=9",
      "D) Multiplying by 9 has no digit sum pattern"
    ],
    answer: "A",
    explanation: "47×9 = 423. Digit sum of 423 = 4+2+3 = 9. This confirms the interesting number pattern: multiplying ANY whole number by 9 always results in a digit sum of 9 (or a number whose digits further sum to 9)."
  },

  // ══ HARD (Q16–Q30) ═══════════════════════════════════════

  {
    id: 9546, section: "Maths",
    text: "Determine if the statement is ALWAYS, SOMETIMES, or NEVER true: 'The sum of two even numbers is a multiple of 4.'",
    options: [
      "A) Always true",
      "B) Sometimes true — e.g., 2+6=8 (multiple of 4) but 4+6=10 (not a multiple of 4)",
      "C) Never true",
      "D) True only for numbers greater than 10"
    ],
    answer: "B",
    explanation: "This is SOMETIMES true. Counter-example showing it can be true: 2+6=8 (multiple of 4). Counter-example showing it can be false: 4+6=10 (NOT a multiple of 4). Since both cases occur, the statement is sometimes true, not always or never."
  },
  {
    id: 9547, section: "Maths",
    text: "Determine if the statement is ALWAYS, SOMETIMES, or NEVER true: 'If a number is divisible by 18, then it is also divisible by 9.'",
    options: [
      "A) Always true, since 18 = 2×9, so any multiple of 18 is automatically a multiple of 9",
      "B) Sometimes true",
      "C) Never true",
      "D) Only true for even numbers"
    ],
    answer: "A",
    explanation: "Since 18 = 2×9, any number divisible by 18 can be written as 18k = 9×(2k), which is clearly also divisible by 9. This makes the statement ALWAYS true (though the reverse — divisible by 9 implies divisible by 18 — is NOT always true)."
  },
  {
    id: 9548, section: "Maths",
    text: "Prove algebraically whether this is ALWAYS, SOMETIMES, or NEVER true: 'The sum of a multiple of 6 and a multiple of 9 is always a multiple of 3.'",
    options: [
      "A) Always true: writing the multiples as 6a and 9b, their sum 6a+9b = 3(2a+3b), which is clearly divisible by 3 for any integers a, b",
      "B) Sometimes true, depending on the specific multiples chosen",
      "C) Never true",
      "D) Cannot be proven algebraically"
    ],
    answer: "A",
    explanation: "Let the multiple of 6 be 6a and the multiple of 9 be 9b (where a, b are integers). Their sum = 6a+9b = 3(2a+3b). Since this is 3 times an integer, the sum is ALWAYS a multiple of 3, regardless of which specific multiples are chosen."
  },
  {
    id: 9549, section: "Maths",
    text: "Find the SMALLEST number that leaves a remainder of 2 when divided by 3, a remainder of 3 when divided by 4, and a remainder of 4 when divided by 5.",
    options: ["A) 47", "B) 59", "C) 119", "D) 29"],
    answer: "B",
    explanation: "Notice the pattern: in each case, the remainder is exactly 1 less than the divisor (3−1=2, 4−1=3, 5−1=4). This means the number is 1 LESS than a common multiple of 3, 4, and 5. LCM(3,4,5)=60. So the smallest such number = 60−1 = 59. Verify: 59÷3=19 r.2 ✓, 59÷4=14 r.3 ✓, 59÷5=11 r.4 ✓."
  },
  {
    id: 9550, section: "Maths",
    text: "Prove whether this is ALWAYS, SOMETIMES, or NEVER true: 'If two numbers are each divisible by 8, their sum is always divisible by 8.'",
    options: [
      "A) Always true: writing the numbers as 8a and 8b, their sum = 8a+8b = 8(a+b), clearly a multiple of 8",
      "B) Sometimes true",
      "C) Never true",
      "D) Only true if both numbers are equal"
    ],
    answer: "A",
    explanation: "Let the two numbers be 8a and 8b (since both are divisible by 8). Their sum = 8a+8b = 8(a+b), which is clearly a multiple of 8 for ANY integers a and b. This statement is ALWAYS true."
  },
  {
    id: 9551, section: "Maths",
    text: "Determine if this is ALWAYS, SOMETIMES, or NEVER true: 'If two numbers are NOT divisible by 6, their sum is also NOT divisible by 6.'",
    options: [
      "A) Always true",
      "B) Never true — for example, 8 and 10 are each not divisible by 6, but 8+10=18 IS divisible by 6",
      "C) Sometimes true, sometimes false, in roughly equal proportion",
      "D) This can only be tested with even numbers"
    ],
    answer: "B",
    explanation: "This statement is actually NEVER guaranteed to be true — counter-examples are common. For instance, 8 and 10 are each NOT divisible by 6, yet their sum 8+10=18 IS divisible by 6. This single counter-example proves the original claim is false in this case, demonstrating that the 'not divisible implies sum not divisible' pattern does not reliably hold."
  },
  {
    id: 9552, section: "Maths",
    text: "Using the digit-sum-based remainder method, find the remainder when 4779 is divided by 7. (Hint: 4779 can be split into terms like 682×7 + 5.)",
    options: ["A) 0", "B) 3", "C) 5", "D) 6"],
    answer: "C",
    explanation: "4779 = 682×7 + 5 (since 682×7=4774, and 4779−4774=5). So the remainder when 4779 is divided by 7 is 5. (Verify: 4779÷7 = 682.71..., and 682×7+5=4779 ✓)"
  },
  {
    id: 9553, section: "Maths",
    text: "Verify the divisibility pattern by testing if 97 is a prime number, using the rule that you only need to check divisibility by primes up to √97.",
    options: [
      "A) 97 is prime, since √97≈9.8, and 97 is not divisible by any prime up to 9 (2, 3, 5, 7)",
      "B) 97 is not prime, since it's divisible by 7",
      "C) 97 is not prime, since it's an odd number",
      "D) Primality cannot be checked this way"
    ],
    answer: "A",
    explanation: "To check if 97 is prime, we only need to test divisibility by primes up to √97 ≈ 9.8, i.e., primes 2, 3, 5, and 7. Checking: 97 is odd (not div by 2), digit sum=16 (not div by 3), doesn't end in 0/5 (not div by 5), and 97÷7≈13.86 (not div by 7). Since none divide evenly, 97 is prime."
  },
  {
    id: 9554, section: "Maths",
    text: "Verify algebraically why the sum of the first 5 odd numbers (1+3+5+7+9) equals 5².",
    options: [
      "A) 1+3+5+7+9 = 25 = 5², confirming the pattern that the sum of the first n odd numbers always equals n²",
      "B) 1+3+5+7+9 = 25, but this is a coincidence with no general pattern",
      "C) The sum of odd numbers has no relationship with squares",
      "D) This pattern only works for exactly 5 terms"
    ],
    answer: "A",
    explanation: "1+3+5+7+9 = 25 = 5². This illustrates a well-known mathematical pattern: the sum of the first n odd numbers always equals n² (e.g., 1=1², 1+3=4=2², 1+3+5=9=3², and so on), connecting simple addition to the pattern of perfect squares."
  },
  {
    id: 9555, section: "Maths",
    text: "A 6-digit number is formed by repeating the 3-digit number 789 (giving 789789). Verify this number's divisibility by 7, 11, and 13 using the general rule, without performing long division.",
    options: [
      "A) 789789 = 789 × 1001 = 789 × 7 × 11 × 13, so it must be divisible by all three numbers",
      "B) 789789 is only divisible by 7, not 11 or 13",
      "C) The repeating pattern rule does not apply to 789",
      "D) 789789 is a prime number"
    ],
    answer: "A",
    explanation: "Since 789789 = 789 × 1001 (repeating a 3-digit number is equivalent to multiplying by 1001), and 1001 = 7×11×13, we can conclude that 789789 = 789×7×11×13 — making it automatically divisible by 7, 11, and 13, regardless of what the original 3-digit number was."
  },
  {
    id: 9556, section: "Maths",
    text: "Determine if this is ALWAYS, SOMETIMES, or NEVER true: 'The sum of a multiple of 6 and a multiple of 3 is always a multiple of 9.'",
    options: [
      "A) Always true",
      "B) Sometimes true — e.g., 6+3=9 (multiple of 9) but 12+9=21 (NOT a multiple of 9)",
      "C) Never true",
      "D) Only true for the smallest multiples"
    ],
    answer: "B",
    explanation: "This is SOMETIMES true. Example where it works: 6+3=9 (a multiple of 9). Counter-example where it fails: 12+9=21 (21÷9 is not exact, so NOT a multiple of 9). Since the result depends on which specific multiples are chosen, this statement is only sometimes true."
  },
  {
    id: 9557, section: "Maths",
    text: "Using algebra, prove that any 4 consecutive integers, when added together with alternating + and − signs (in some combination), will ALWAYS produce an even result.",
    options: [
      "A) True — since any combination of adding/subtracting 4 consecutive integers (which include 2 even and 2 odd numbers) will always result in an even number, because the odd-number contributions always cancel out in parity",
      "B) False — the result depends entirely on which signs are chosen",
      "C) This can only be tested with specific examples, not proven generally",
      "D) The result is always odd, not even"
    ],
    answer: "A",
    explanation: "Among any 4 consecutive integers, there are always exactly 2 even and 2 odd numbers. Regardless of how + and − signs are assigned, the combination of two odd numbers (whether added or subtracted) always results in an even contribution to the total parity. This means the overall sum/difference of 4 consecutive integers, under any sign combination, is always even."
  },
  {
    id: 9558, section: "Maths",
    text: "Tathagat claims: 'If you add any three numbers, each leaving remainder 2 when divided by 6, the sum will always be a multiple of 6.' Verify this claim algebraically.",
    options: [
      "A) The claim is TRUE: writing the three numbers as (6a+2), (6b+2), (6c+2), their sum = 6a+6b+6c+6 = 6(a+b+c+1), which is always a multiple of 6",
      "B) The claim is FALSE in all cases",
      "C) The claim is true only for specific values of a, b, c",
      "D) This cannot be verified algebraically"
    ],
    answer: "A",
    explanation: "Let the three numbers be (6a+2), (6b+2), (6c+2). Their sum = 6a+6b+6c+2+2+2 = 6(a+b+c)+6 = 6(a+b+c+1). Since this expression is 6 times an integer, the sum is ALWAYS a multiple of 6, proving Tathagat's claim is correct."
  },
  {
    id: 9559, section: "Maths",
    text: "A 5-digit number is in the form 3p7q8 and must be divisible by 44 (which equals 4×11). Using divisibility rules for 4 and 11 separately, what condition must the LAST TWO digits (q8) satisfy for divisibility by 4?",
    options: [
      "A) 'q8' must form a number divisible by 4, meaning q can only be certain specific digits (0,2,4,6,8) that make q8 divisible by 4",
      "B) Any value of q works for divisibility by 4",
      "C) q must always equal 8",
      "D) The last two digits have no role in checking divisibility by 4"
    ],
    answer: "A",
    explanation: "For divisibility by 4, the last two digits ('q8') must form a number divisible by 4. Testing values: q=0→08(8÷4=2✓), q=2→28(÷4=7✓), q=4→48(÷4=12✓), q=6→68(÷4=17✓), q=8→88(÷4=22✓). So q must be an even digit (0,2,4,6,8) for the last-two-digit divisibility-by-4 condition to hold — this is one part of solving the full cryptarithm, which would also need to satisfy the divisibility-by-11 condition simultaneously."
  },
  {
    id: 9560, section: "Maths",
    text: "Explore consecutive number sums: 15 can be written as a sum of consecutive numbers in MULTIPLE ways (7+8, 4+5+6, 1+2+3+4+5). What general pattern explains why some numbers (like 15) have multiple such representations while powers of 2 (like 8, 16) have NONE?",
    options: [
      "A) Numbers with MORE divisors (especially odd divisors) tend to have more ways of being expressed as sums of consecutive integers; powers of 2 have very limited odd factors, which is why they cannot be expressed this way at all",
      "B) All numbers have exactly one way to be written as consecutive sums",
      "C) Powers of 2 can always be written as consecutive sums, just like any other number",
      "D) The number of representations has no relationship to a number's factors"
    ],
    answer: "A",
    explanation: "This reflects a deeper number-theoretic pattern: the number of ways a positive integer can be expressed as a sum of consecutive positive integers relates to its number of ODD factors. Numbers like 15 (which has odd factors 1,3,5,15) have multiple representations, while pure powers of 2 (like 8=2³, 16=2⁴) have NO odd factors other than 1, which is why they cannot be expressed as a sum of two or more consecutive positive integers at all."
  }

];
