// questions/olm001.js — Maths Olympiad Level 1 (Class 6–8)
var questions = [
  {
    id: "olm001_001",
    section: "Number Theory",
    text: "What is the sum of all factors of 36 (including 1 and 36)?",
    options: [
      "91",
      "72",
      "78",
      "84"
    ],
    answer: "A",
    explanation: "Factors of 36: 1,2,3,4,6,9,12,18,36. Sum = 1+2+3+4+6+9+12+18+36 = 91."
  },
  {
    id: "olm001_002",
    section: "Number Theory",
    text: "How many prime numbers are there between 1 and 30?",
    options: [
      "10",
      "8",
      "12",
      "9"
    ],
    answer: "A",
    explanation: "Primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 — exactly 10 prime numbers."
  },
  {
    id: "olm001_003",
    section: "Logical Maths",
    text: "A clock shows 3:15. What is the angle between the hour and minute hands?",
    options: [
      "7.5°",
      "0°",
      "15°",
      "90°"
    ],
    answer: "A",
    explanation: "At 3:15, minute hand is at 90°. Hour hand moves 0.5°/min → at 3:15 it is at 90° + 7.5° = 97.5°. Angle between them = 97.5° − 90° = 7.5°."
  },
  {
    id: "olm001_004",
    section: "Number Theory",
    text: "The LCM of 12, 15, and 20 is:",
    options: [
      "60",
      "120",
      "30",
      "180"
    ],
    answer: "A",
    explanation: "12 = 2²×3, 15 = 3×5, 20 = 2²×5. LCM = 2²×3×5 = 60."
  },
  {
    id: "olm001_005",
    section: "Logical Maths",
    text: "If 1 + 1 = 2, 2 + 2 = 8, 3 + 3 = 18, then 4 + 4 = ?",
    options: [
      "32",
      "16",
      "48",
      "64"
    ],
    answer: "A",
    explanation: "Pattern: n + n = 2n². So 4 + 4 = 2 × 4² = 2 × 16 = 32."
  },
  {
    id: "olm001_006",
    section: "Geometry",
    text: "A rectangle has perimeter 48 cm and length 14 cm. Its area is:",
    options: [
      "140 cm²",
      "196 cm²",
      "112 cm²",
      "168 cm²"
    ],
    answer: "A",
    explanation: "Perimeter = 2(l + b) → 48 = 2(14 + b) → b = 10 cm. Area = 14 × 10 = 140 cm²."
  },
  {
    id: "olm001_007",
    section: "Number Theory",
    text: "What is the value of 5! (5 factorial)?",
    options: [
      "120",
      "60",
      "24",
      "720"
    ],
    answer: "A",
    explanation: "5! = 5 × 4 × 3 × 2 × 1 = 120."
  },
  {
    id: "olm001_008",
    section: "Logical Maths",
    text: "In a group of 50 students, 30 play cricket, 20 play football, and 10 play both. How many play neither?",
    options: [
      "10",
      "40",
      "20",
      "0"
    ],
    answer: "A",
    explanation: "By inclusion-exclusion: play cricket or football = 30 + 20 − 10 = 40. Neither = 50 − 40 = 10."
  },
  {
    id: "olm001_009",
    section: "Geometry",
    text: "The sum of interior angles of a hexagon is:",
    options: [
      "720°",
      "540°",
      "1080°",
      "360°"
    ],
    answer: "A",
    explanation: "Sum = (n − 2) × 180° = (6 − 2) × 180° = 4 × 180° = 720°."
  },
  {
    id: "olm001_010",
    section: "Number Theory",
    text: "The HCF of 48 and 60 is:",
    options: [
      "12",
      "6",
      "24",
      "4"
    ],
    answer: "A",
    explanation: "48 = 2⁴×3, 60 = 2²×3×5. HCF = 2²×3 = 12."
  }
];
