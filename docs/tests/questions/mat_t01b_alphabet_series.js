// ============================================================
//  MAT — Series Completion: Alphabet Series
//  Hinde Classes | hindeclasses.com | Maitreya Hinde | 7358425108
//  Source: Class VII Mental Ability DPP-02
//  ID range: 9011–9020
// ============================================================

var questions = [
  {
    id: 9011, section: "MAT",
    text: "Find the missing term: A, C, ?, G, I",
    options: ["A) E", "B) D", "C) F", "D) H"],
    answer: "A",
    explanation: "Letters are at positions 1, 3, 5, 7, 9 — every alternate letter. Position 5 is E."
  },
  {
    id: 9012, section: "MAT",
    text: "Find the missing term: A, C, F, ?, O",
    options: ["A) G", "B) J", "C) H", "D) K"],
    answer: "B",
    explanation: "Gaps increase by 1: +2 (A→C), +3 (C→F), +4 (F→J), +5 (J→O). The missing letter is J."
  },
  {
    id: 9013, section: "MAT",
    text: "Find the missing term: DC, DE, FE, ?, HG, HI",
    options: ["A) FE", "B) FG", "C) GF", "D) GH"],
    answer: "B",
    explanation: "The terms pair by the same first letter: DC, DE | FE, FG | HG, HI. The missing term is FG."
  },
  {
    id: 9014, section: "MAT",
    text: "Find the missing term: AB, BA, ABD, DBA, PQRS, ?",
    options: ["A) SRQP", "B) SRPQ", "C) RSQP", "D) PQRS"],
    answer: "A",
    explanation: "Each term is the reverse of the previous one. Reverse of PQRS is SRQP."
  },
  {
    id: 9015, section: "MAT",
    text: "Find the missing term: (ABC)−6, (DEF)−15, (GHI)−24, ?",
    options: ["A) (JKL)−31", "B) (JKM)−32", "C) (KLM)−34", "D) (JKL)−33"],
    answer: "D",
    explanation: "Letters advance by 3 each group. The number is the sum of letter positions: J+K+L = 10+11+12 = 33. Answer: (JKL)−33."
  },
  {
    id: 9016, section: "MAT",
    text: "Find the missing term: B, I, P, W, ?",
    options: ["A) C", "B) D", "C) B", "D) Z"],
    answer: "B",
    explanation: "Each letter advances by +7: B(2), I(9), P(16), W(23). Next: 23+7=30, and 30−26=4, which is D."
  },
  {
    id: 9017, section: "MAT",
    text: "Find the missing term: AOBN, DREQ, GUHT, ?",
    options: ["A) JXLX", "B) JXKW", "C) JXLY", "D) JYKU"],
    answer: "B",
    explanation: "All four letter positions advance by +3: A→D→G→J, O→R→U→X, B→E→H→K, N→Q→T→W. The next term is JXKW."
  },
  {
    id: 9018, section: "MAT",
    text: "Find the missing term: A, R, C, S, E, T, G, ?",
    options: ["A) V", "B) U", "C) W", "D) X"],
    answer: "B",
    explanation: "Two alternating series: odd positions A, C, E, G (skip one letter each time); even positions R, S, T, ? (consecutive letters). Next after T is U."
  },
  {
    id: 9019, section: "MAT",
    text: "Find the missing term: 2BCD, ?, BC4D, BCD5, 6BCD",
    options: ["A) BC2D", "B) B3CD", "C) B2CD", "D) BCD7"],
    answer: "B",
    explanation: "The digit shifts one position to the right in each term: position 1→2→3→4, then back to 1. In the second term the digit is at position 2, giving B3CD."
  },
  {
    id: 9020, section: "MAT",
    text: "Find the missing term: J14, L16, ?, P20, R22",
    options: ["A) S24", "B) N18", "C) M18", "D) T24"],
    answer: "B",
    explanation: "Letters advance by +2 (J, L, N, P, R) and numbers advance by +2 (14, 16, 18, 20, 22). The missing term is N18."
  }
];
