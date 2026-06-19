// ============================================================
//  MAT Topic Test — Coding-Decoding Part 1 (DPP-08)
//  Hinde Classes | hindeclasses.com | Maitreya Hinde | 7358425108
//  Source: Class VII Mental Ability DPP-08
//  ID range: 9281–9290
// ============================================================

var questions = [
  {
    id: 9281, section: "MAT",
    text: "In a certain code, TEACHER is written as VGCEJGT. How is CHILDREN written in that code?",
    options: ["A) EJKNFGTO", "B) EJKNEGTP", "C) EJKNFHTP", "D) EJKNFTGP"],
    answer: "D",
    explanation: "Each letter is shifted forward by +2. TEACHER: T→V, E→G, A→C, C→E, H→J, E→G, R→T = VGCEJGT ✓. CHILDREN: C→E, H→J, I→K, L→N, D→F, R→T, E→G, N→P = EJKNFTGP."
  },
  {
    id: 9282, section: "MAT",
    text: "If MENTAL is written as LNDFMOSUZBKM, then how is TEST written in that code?",
    options: ["A) UVFGTIIV", "B) RSCDQRRS", "C) SUDFRTSU", "D) SUDFQRSM"],
    answer: "C",
    explanation: "Each letter is encoded as (letter-1)(letter+1). M→LN, E→DF, N→MO, T→SU, A→ZB, L→KM. For TEST: T→SU, E→DF, S→RT, T→SU. Combined: SU+DF+RT+SU = SUDFRTSU."
  },
  {
    id: 9283, section: "MAT",
    text: "If TOWER is coded as 81, what will be the code number for POWER?",
    options: ["A) 75", "B) 55", "C) 77", "D) 18"],
    answer: "C",
    explanation: "Code = sum of letter positions. TOWER: T(20)+O(15)+W(23)+E(5)+R(18) = 81 ✓. POWER: P(16)+O(15)+W(23)+E(5)+R(18) = 77."
  },
  {
    id: 9284, section: "MAT",
    text: "If cloud=white, white=rain, rain=green, green=air, air=blue, blue=water, where do birds fly?",
    options: ["A) Air", "B) Cloud", "C) White", "D) Blue"],
    answer: "D",
    explanation: "Birds normally fly in 'air'. But in this code, 'air' is called 'blue'. So the answer is Blue."
  },
  {
    id: 9285, section: "MAT",
    text: "If table=window, window=chair, chair=door, door=sofa, then which one do we sit on?",
    options: ["A) chair", "B) window", "C) door", "D) sofa"],
    answer: "C",
    explanation: "Normally we sit on a 'chair'. In this code, 'chair' is called 'door'. So the answer is door."
  },
  {
    id: 9286, section: "MAT",
    text: "In a certain code: 253 = books are old; 546 = man is old; 378 = buy good books. What is the code for 'are'?",
    options: ["A) 2", "B) 5", "C) 4", "D) 6"],
    answer: "A",
    explanation: "Common digit in '253' and '378' (both have 'books') → 3 = books. Common digit in '253' and '546' (both have 'old') → 5 = old. Remaining in 253: 2 = are. So 'are' = 2."
  },
  {
    id: 9287, section: "MAT",
    text: "In a certain code: 123 = speed and accident; 345 = speed is cause; 146 = accident is effect. Which numeral stands for 'cause'?",
    options: ["A) 3", "B) 4", "C) 5", "D) 6"],
    answer: "C",
    explanation: "Common in 123 and 345 = 3 → 3 = speed. Common in 123 and 146 = 1 → 1 = accident. Common in 345 and 146 = 4 → 4 = is. In 345, remaining digit = 5 → 5 = cause."
  },
  {
    id: 9288, section: "MAT",
    text: "If TRIANGLE is coded as SSHBMHKF, then SQUARE would be coded as:",
    options: ["A) RRIASF", "B) RPVBSF", "C) RRTBQF", "D) RPVBSD"],
    answer: "C",
    explanation: "Pattern: letters alternate -1, +1. T→S(-1), R→S(+1), I→H(-1), A→B(+1), N→M(-1), G→H(+1), L→K(-1), E→F(+1) = SSHBMHKF ✓. SQUARE: S→R(-1), Q→R(+1), U→T(-1), A→B(+1), R→Q(-1), E→F(+1) = RRTBQF."
  },
  {
    id: 9289, section: "MAT",
    text: "If CRICKETER is coded as DQJBLDUDS, then PLAYER will be coded as:",
    options: ["A) QMBZFS", "B) OMZZDS", "C) QKBXFQ", "D) QKBZDS"],
    answer: "C",
    explanation: "Pattern: letters alternate +1, -1. C+1=D, R-1=Q, I+1=J, C-1=B, K+1=L, E-1=D, T+1=U, E-1=D, R+1=S = DQJBLDUDS ✓. PLAYER: P+1=Q, L-1=K, A+1=B, Y-1=X, E+1=F, R-1=Q = QKBXFQ."
  },
  {
    id: 9290, section: "MAT",
    text: "In a certain code, GIGANTIC is written as GIGTANCI. How is MIRACLES written in that code?",
    options: ["A) MIRLCAES", "B) MIRLACSE", "C) RIMCALSE", "D) RIMLCAES"],
    answer: "B",
    explanation: "Pattern: the first 3 letters stay unchanged; the next 3 letters (positions 4-6) rotate right by one position; the last 2 letters (positions 7-8) swap. GIGANTIC: GIG(unchanged) + ANT→TAN(rotate right) + IC→CI(swap) = GIGTANCI ✓. MIRACLES: MIR(unchanged) + ACL→LAC(rotate right) + ES→SE(swap) = MIRLACSE."
  },
];
