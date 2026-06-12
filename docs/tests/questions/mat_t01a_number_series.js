// ============================================================
//  MAT — Series Completion: Number Series
//  Hinde Classes | hindeclasses.com | Maitreya Hinde | 7358425108
//  Source: Class VII Mental Ability DPP-01
//  ID range: 9001–9010
// ============================================================

var questions = [
  {
    id: 9001, section: "MAT",
    text: "Find the missing term: 1, 2, 4, 8, ?, 32",
    options: ["A) 10", "B) 12", "C) 14", "D) 16"],
    answer: "D",
    explanation: "Each term is double the previous term: 1, 2, 4, 8, 16, 32. The missing term is 16."
  },
  {
    id: 9002, section: "MAT",
    text: "Find the missing term: 26, 20, 15, 11, ?",
    options: ["A) 10", "B) 7", "C) 9", "D) 8"],
    answer: "D",
    explanation: "The differences are −6, −5, −4, −3. The next difference is −3, so 11 − 3 = 8."
  },
  {
    id: 9003, section: "MAT",
    text: "Find the missing term: 2, 4, 12, 48, ?",
    options: ["A) 288", "B) 250", "C) 240", "D) 192"],
    answer: "A",
    explanation: "Each term is multiplied by 2, 3, 4, 5 respectively. So 48 × 6 = 288."
  },
  {
    id: 9004, section: "MAT",
    text: "Find the missing term: 3, 29, 7, 24, 11, ?, 15, 14",
    options: ["A) 19", "B) 13", "C) 21", "D) 16"],
    answer: "A",
    explanation: "Two alternating series: odd positions (3, 7, 11, 15) add +4; even positions (29, 24, ?, 14) subtract −5. So 24 − 5 = 19."
  },
  {
    id: 9005, section: "MAT",
    text: "Find the missing term: 8, 7, 16, 5, 32, 3, 64, 1, 128, ?",
    options: ["A) 18", "B) 13", "C) −1", "D) 3"],
    answer: "C",
    explanation: "Two alternating series: odd positions (8, 16, 32, 64, 128) double each time; even positions (7, 5, 3, 1, ?) decrease by −2. So 1 − 2 = −1."
  },
  {
    id: 9006, section: "MAT",
    text: "Find the missing term: 16, 33, 65, 131, ?, 523",
    options: ["A) 261", "B) 521", "C) 613", "D) 721"],
    answer: "A",
    explanation: "The rule alternates ×2+1 and ×2−1: 16×2+1=33, 33×2−1=65, 65×2+1=131, 131×2−1=261, 261×2+1=523."
  },
  {
    id: 9007, section: "MAT",
    text: "Find the missing term: 4, 9, 19, 34, 54, ?",
    options: ["A) 66", "B) 75", "C) 79", "D) 84"],
    answer: "C",
    explanation: "Differences are 5, 10, 15, 20, 25 — increasing by 5 each time. So 54 + 25 = 79."
  },
  {
    id: 9008, section: "MAT",
    text: "Find the missing term: 2, 2, 4, 4, 6, 8, 8, ?",
    options: ["A) 10", "B) 12", "C) 14", "D) 16"],
    answer: "D",
    explanation: "Two interleaved series: odd positions (2, 4, 6, 8) add +2; even positions (2, 4, 8, ?) double each time. So 8 × 2 = 16."
  },
  {
    id: 9009, section: "MAT",
    text: "Find the wrong term in the series: 190, 94, 46, 22, 10, 4, 3",
    options: ["A) 94", "B) 46", "C) 22", "D) 3"],
    answer: "D",
    explanation: "Each term = (previous − 2) ÷ 2: (190−2)/2=94, (94−2)/2=46, (46−2)/2=22, (22−2)/2=10, (10−2)/2=4, (4−2)/2=1. The last term should be 1, not 3."
  },
  {
    id: 9010, section: "MAT",
    text: "Find the wrong term in the series: 40, 34, 28, 25, 22, 20",
    options: ["A) 34", "B) 28", "C) 22", "D) 25"],
    answer: "D",
    explanation: "The series decreases by 6 each step: 40, 34, 28, 22, 16, 10. The term 25 is incorrect; it should be 22."
  }
];
