// ============================================================
//  Std 7 Goa Board Maths — Large Numbers Around Us
//  Hinde Classes | hindeclasses.com
//  Maitreya Hinde | 7358425108
//  30 Questions | 30 Marks | 60 Minutes | Medium–Hard
//  ID range: 8301–8330
// ============================================================

var questions = [

  // ══ MODERATE (Q1–Q15) ════════════════════════════════════

  {
    id: 8301, section: "Maths",
    text: "The place value of 7 in 47,83,652 is:",
    options: ["A) 7,00,000", "B) 70,00,000", "C) 7,000", "D) 70,000"],
    answer: "A",
    explanation: "In 47,83,652 the digit 7 is in the lakhs place. Place value = 7 × 1,00,000 = 7,00,000."
  },
  {
    id: 8302, section: "Maths",
    text: "Which numeral represents 'Three crore five lakh twenty thousand nine hundred six'?",
    options: ["A) 3,05,20,906", "B) 3,50,20,906", "C) 3,05,02,906", "D) 3,05,20,096"],
    answer: "A",
    explanation: "Three crore = 3,00,00,000; five lakh = 5,00,000; twenty thousand = 20,000; nine hundred six = 906. Total = 3,05,20,906."
  },
  {
    id: 8303, section: "Maths",
    text: "In the International number system, 4,50,75,000 is written as:",
    options: ["A) 45,075,000", "B) 4,507,500", "C) 450,750,000", "D) 4,050,750"],
    answer: "A",
    explanation: "4,50,75,000 (Indian) = 45,075,000 (International). Grouping three digits from right: 45 | 075 | 000."
  },
  {
    id: 8304, section: "Maths",
    text: "The difference between the place value and face value of 6 in 56,784 is:",
    options: ["A) 5,994", "B) 6,000", "C) 5,940", "D) 994"],
    answer: "A",
    explanation: "Place value of 6 in 56,784 = 6,000 (thousands place). Face value of 6 = 6. Difference = 6,000 − 6 = 5,994."
  },
  {
    id: 8305, section: "Maths",
    text: "Which Roman numeral correctly represents 2,749?",
    options: ["A) MMDCCXLIX", "B) MMDCCIL", "C) MMCCXLIX", "D) MMDCXLIX"],
    answer: "A",
    explanation: "2,749 = 2000 + 700 + 49 = MM + DCC + XLIX = MMDCCXLIX. Note: IL is not a valid Roman numeral; 49 must be written as XLIX."
  },
  {
    id: 8306, section: "Maths",
    text: "Estimate 7,86,423 + 4,13,289 by rounding each to the nearest lakh:",
    options: ["A) 12,00,000", "B) 11,00,000", "C) 13,00,000", "D) 11,50,000"],
    answer: "A",
    explanation: "7,86,423 rounds to 8,00,000 (86,423 > 50,000). 4,13,289 rounds to 4,00,000 (13,289 < 50,000). Estimated sum = 8,00,000 + 4,00,000 = 12,00,000."
  },
  {
    id: 8307, section: "Maths",
    text: "How many lakhs make one crore?",
    options: ["A) 10", "B) 100", "C) 1,000", "D) 10,000"],
    answer: "B",
    explanation: "1 crore = 1,00,00,000. 1 lakh = 1,00,000. So 1 crore ÷ 1 lakh = 100. Therefore 100 lakhs = 1 crore."
  },
  {
    id: 8308, section: "Maths",
    text: "The successor of 99,99,999 is:",
    options: ["A) 1,00,00,000", "B) 99,99,998", "C) 1,00,00,001", "D) 10,00,00,000"],
    answer: "A",
    explanation: "The successor is the next number. 99,99,999 + 1 = 1,00,00,000 (one crore)."
  },
  {
    id: 8309, section: "Maths",
    text: "In the number 6,54,32,819, the digit in the ten-thousands place is:",
    options: ["A) 3", "B) 2", "C) 5", "D) 4"],
    answer: "A",
    explanation: "6,54,32,819 from right: 9(ones), 1(tens), 8(hundreds), 2(thousands), 3(ten-thousands), 4(lakhs), 5(ten-lakhs), 6(crores). The digit in ten-thousands place is 3."
  },
  {
    id: 8310, section: "Maths",
    text: "Which of the following numbers is the greatest?",
    options: ["A) 9,09,09,009", "B) 9,09,90,009", "C) 9,90,00,990", "D) 9,90,09,900"],
    answer: "D",
    explanation: "Comparing digit by digit: A and B start with 9,09 while C and D start with 9,90. Between C (9,90,00,990) and D (9,90,09,900): at ten-thousands position C has 0 and D has 9. So D = 9,90,09,900 is the greatest."
  },
  {
    id: 8311, section: "Maths",
    text: "The value of XLIV in Hindu-Arabic numerals is:",
    options: ["A) 54", "B) 44", "C) 46", "D) 56"],
    answer: "B",
    explanation: "XL = 50 − 10 = 40 (X before L means subtract). IV = 5 − 1 = 4 (I before V means subtract). So XLIV = 40 + 4 = 44."
  },
  {
    id: 8312, section: "Maths",
    text: "A stadium holds 85,400 spectators. If 62,875 tickets were sold, how many seats are still available?",
    options: ["A) 22,525", "B) 22,125", "C) 23,525", "D) 21,525"],
    answer: "A",
    explanation: "Available seats = 85,400 − 62,875 = 22,525."
  },
  {
    id: 8313, section: "Maths",
    text: "How many 6-digit numbers are there in all?",
    options: ["A) 9,00,000", "B) 8,99,999", "C) 10,00,000", "D) 9,99,999"],
    answer: "A",
    explanation: "6-digit numbers range from 1,00,000 to 9,99,999. Count = 9,99,999 − 1,00,000 + 1 = 9,00,000."
  },
  {
    id: 8314, section: "Maths",
    text: "5,07,60,400 in words (Indian system) is:",
    options: [
      "A) Five crore seven lakh sixty thousand four hundred",
      "B) Fifty seven lakh sixty thousand four hundred",
      "C) Five crore seventy lakh sixty thousand four hundred",
      "D) Five crore seven lakh six thousand four hundred"
    ],
    answer: "A",
    explanation: "5,07,60,400: 5 crore + 07 lakh + 60 thousand + 400 = Five crore seven lakh sixty thousand four hundred."
  },
  {
    id: 8315, section: "Maths",
    text: "The sum of place values of all 5s in 5,85,050 is:",
    options: ["A) 5,05,050", "B) 55,050", "C) 5,05,005", "D) 5,00,050"],
    answer: "A",
    explanation: "In 5,85,050: digit 5 at lakhs place = 5,00,000; digit 5 at thousands place = 5,000; digit 5 at tens place = 50. Sum = 5,00,000 + 5,000 + 50 = 5,05,050."
  },

  // ══ HARD (Q16–Q30) ═══════════════════════════════════════

  {
    id: 8316, section: "Maths",
    text: "A city has a population of 38,47,625. Another city has 12,86,475 more people than the first city. What is the total population of both cities together?",
    options: ["A) 89,81,725", "B) 51,34,100", "C) 90,08,725", "D) 88,81,725"],
    answer: "A",
    explanation: "Second city = 38,47,625 + 12,86,475 = 51,34,100. Total of both = 38,47,625 + 51,34,100 = 89,81,725."
  },
  {
    id: 8317, section: "Maths",
    text: "Find the product of 4,567 × 1,008:",
    options: ["A) 46,03,536", "B) 45,67,000", "C) 46,35,036", "D) 45,03,536"],
    answer: "A",
    explanation: "4,567 × 1,008 = 4,567 × 1,000 + 4,567 × 8 = 45,67,000 + 36,536 = 46,03,536."
  },
  {
    id: 8318, section: "Maths",
    text: "What is the remainder when 9,87,65,433 is divided by 9?",
    options: ["A) 0", "B) 1", "C) 3", "D) 8"],
    answer: "A",
    explanation: "A number is divisible by 9 if its digit sum is divisible by 9. Digit sum of 9,87,65,433 = 9+8+7+6+5+4+3+3 = 45. Since 45 ÷ 9 = 5 exactly, the remainder is 0."
  },
  {
    id: 8319, section: "Maths",
    text: "The difference between the smallest 8-digit number and the largest 7-digit number is:",
    options: ["A) 1", "B) 10", "C) 100", "D) 0"],
    answer: "A",
    explanation: "Smallest 8-digit number = 1,00,00,000. Largest 7-digit number = 99,99,999. Difference = 1,00,00,000 − 99,99,999 = 1."
  },
  {
    id: 8320, section: "Maths",
    text: "1 billion is equal to how many crores?",
    options: ["A) 10", "B) 1,000", "C) 100", "D) 10,000"],
    answer: "C",
    explanation: "1 billion = 1,00,00,00,000 (9 zeros). 1 crore = 1,00,00,000 (7 zeros). 1 billion ÷ 1 crore = 100. So 1 billion = 100 crores."
  },
  {
    id: 8321, section: "Maths",
    text: "4,56,78,945 rounded to the nearest ten-lakhs is:",
    options: ["A) 4,50,00,000", "B) 4,60,00,000", "C) 5,00,00,000", "D) 4,57,00,000"],
    answer: "B",
    explanation: "The ten-lakhs digit is 5. The next digit (lakhs) is 6, which is ≥ 5. So round up: 4,56,78,945 → 4,60,00,000."
  },
  {
    id: 8322, section: "Maths",
    text: "The place value of 8 in 8,07,65,432 is how many times the place value of 8 in 3,80,76,542?",
    options: ["A) 100", "B) 10", "C) 1,000", "D) 1,00,000"],
    answer: "B",
    explanation: "In 8,07,65,432: 8 is in crores place → value = 8,00,00,000. In 3,80,76,542: 8 is in ten-lakhs place → value = 80,00,000. Ratio = 8,00,00,000 ÷ 80,00,000 = 10."
  },
  {
    id: 8323, section: "Maths",
    text: "What number does 3 × 10⁷ + 4 × 10⁵ + 7 × 10² + 5 × 10⁰ represent?",
    options: ["A) 3,04,00,705", "B) 3,40,07,050", "C) 3,04,07,005", "D) 3,40,70,500"],
    answer: "A",
    explanation: "3×10⁷ = 3,00,00,000; 4×10⁵ = 4,00,000; 7×10² = 700; 5×10⁰ = 5. Sum = 3,00,00,000 + 4,00,000 + 700 + 5 = 3,04,00,705."
  },
  {
    id: 8324, section: "Maths",
    text: "A factory produces 24,685 items per day. How many items will it produce in 365 days?",
    options: ["A) 90,10,025", "B) 90,01,025", "C) 89,10,025", "D) 91,10,025"],
    answer: "A",
    explanation: "24,685 × 365 = 24,685 × 300 + 24,685 × 65 = 74,05,500 + 16,04,525 = 90,10,025."
  },
  {
    id: 8325, section: "Maths",
    text: "The Roman numeral MMCMXCIX represents which number?",
    options: ["A) 2,999", "B) 2,909", "C) 2,990", "D) 2,889"],
    answer: "A",
    explanation: "MM = 2000; CM = 900 (M−C = 1000−100); XC = 90 (C−X = 100−10); IX = 9 (X−I = 10−1). Total = 2000+900+90+9 = 2,999."
  },
  {
    id: 8326, section: "Maths",
    text: "Using digits 1, 0, 3, 5, 7, 8, 9 (each exactly once), the difference between the greatest and smallest 7-digit numbers formed is:",
    options: ["A) 88,39,521", "B) 87,39,521", "C) 88,49,521", "D) 88,39,621"],
    answer: "A",
    explanation: "Greatest 7-digit number = 9,87,53,10 → 98,75,310. Smallest 7-digit number (0 cannot be first digit) = 10,35,789. Difference = 98,75,310 − 10,35,789 = 88,39,521."
  },
  {
    id: 8327, section: "Maths",
    text: "A toll booth collects ₹47 per vehicle. If 3,26,850 vehicles passed in a month, what is the total collection?",
    options: ["A) ₹1,53,61,950", "B) ₹1,54,61,950", "C) ₹1,52,61,950", "D) ₹1,53,16,950"],
    answer: "A",
    explanation: "Total = 47 × 3,26,850. = 47 × 3,00,000 + 47 × 26,850 = 1,41,00,000 + 12,61,950 = 1,53,61,950."
  },
  {
    id: 8328, section: "Maths",
    text: "The expanded form of 6,05,40,307 is:",
    options: [
      "A) 6×10⁷ + 5×10⁵ + 4×10⁴ + 3×10² + 7×10⁰",
      "B) 6×10⁸ + 5×10⁵ + 4×10⁴ + 3×10² + 7×10⁰",
      "C) 6×10⁷ + 5×10⁶ + 4×10⁴ + 3×10² + 7×10⁰",
      "D) 6×10⁷ + 5×10⁵ + 4×10³ + 3×10² + 7×10⁰"
    ],
    answer: "A",
    explanation: "6,05,40,307 = 6×10⁷ + 0×10⁶ + 5×10⁵ + 4×10⁴ + 0×10³ + 3×10² + 0×10¹ + 7×10⁰. Non-zero terms: 6×10⁷ + 5×10⁵ + 4×10⁴ + 3×10² + 7×10⁰."
  },
  {
    id: 8329, section: "Maths",
    text: "The largest 5-digit number + 1 equals the smallest 6-digit number. If this result is multiplied by 9, what is the product?",
    options: ["A) 9,00,000", "B) 8,99,991", "C) 9,00,009", "D) 10,00,000"],
    answer: "A",
    explanation: "Largest 5-digit number + 1 = 99,999 + 1 = 1,00,000 (smallest 6-digit number). 1,00,000 × 9 = 9,00,000."
  },
  {
    id: 8330, section: "Maths",
    text: "A number when rounded to the nearest lakh gives 6,00,000. What is the largest possible original number?",
    options: ["A) 6,49,999", "B) 5,99,999", "C) 6,50,000", "D) 6,50,001"],
    answer: "A",
    explanation: "For a number to round to 6,00,000 (nearest lakh), it must be in the range 5,50,000 to 6,49,999. The largest value in this range is 6,49,999."
  }

];
