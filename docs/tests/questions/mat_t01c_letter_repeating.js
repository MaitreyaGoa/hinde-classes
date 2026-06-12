// ============================================================
//  MAT — Series Completion: Letter Repeating Series
//  Hinde Classes | hindeclasses.com | Maitreya Hinde | 7358425108
//  Source: Class VII Mental Ability DPP-03
//  ID range: 9021–9030
// ============================================================

var questions = [
  {
    id: 9021, section: "MAT",
    text: "Which set of letters completes the series? a b c a _ b c a a b _ a _ b c _",
    options: ["A) ccaa", "B) bbaa", "C) acaa", "D) abba"],
    answer: "C",
    explanation: "The repeating unit is 'abca': a,b,c,a | a,b,c,a | a,b,c,a | a,b,c,a. The blanks are filled by a, c, a, a → acaa."
  },
  {
    id: 9022, section: "MAT",
    text: "Which set of letters completes the series? a a b _ a a _ b b b _ a a a _ b b b",
    options: ["A) abba", "B) baab", "C) aaab", "D) abab"],
    answer: "B",
    explanation: "The series groups as aabb | aabb | bbbaaa | bbb. The blanks are filled b, a, a, b → baab."
  },
  {
    id: 9023, section: "MAT",
    text: "Which set of letters completes the series? b c _ b _ c _ b _ c c b",
    options: ["A) cbcb", "B) bbcb", "C) cbbc", "D) bcbc"],
    answer: "C",
    explanation: "The repeating unit is 'bccb': b,c,c,b | b,c,c,b | b,c,c,b. The blanks are filled c, b, b, c → cbbc."
  },
  {
    id: 9024, section: "MAT",
    text: "Which set of letters completes the series? _ _ a b a _ _ b a _ a b",
    options: ["A) abbba", "B) abbab", "C) baabb", "D) bbaba"],
    answer: "D",
    explanation: "The repeating unit is 'bbab': b,b,a,b | a,b,b,a | b,a,a,b. The blanks are filled b, b, a, b, a → bbaba."
  },
  {
    id: 9025, section: "MAT",
    text: "Which set of letters completes the series? c _ b b a _ c a b _ a c _ a b _ a c",
    options: ["A) abcbc", "B) acbcb", "C) babcc", "D) bcacb"],
    answer: "B",
    explanation: "The repeating unit is 'cabba': c,a,b,b,a | c,a,b,b,a | c,a,b,b,a | c. The blanks are filled a, c, b, c, b → acbcb."
  },
  {
    id: 9026, section: "MAT",
    text: "Which set of letters completes the series? b _ b _ b b _ _ b b b a b b _ a",
    options: ["A) bbbba", "B) bbaab", "C) ababb", "D) babab"],
    answer: "A",
    explanation: "The repeating unit is 'bbba': b,b,b,a | b,b,b,a | b,b,b,a | b,b,b,a. The blanks are filled b, b, b, b, a → bbbba."
  },
  {
    id: 9027, section: "MAT",
    text: "Which set of letters completes the series? l m n _ n o p n _ p q r _ p _ r s _",
    options: ["A) noprt", "B) mooqt", "C) nooqt", "D) ostsr"],
    answer: "C",
    explanation: "The series progresses through overlapping groups sharing letters: lmnn, nopn, oopq, opqr, pqrs. The blanks are filled n, o, o, q, t → nooqt."
  },
  {
    id: 9028, section: "MAT",
    text: "Which set of letters completes the series? o k _ o _ a _ k _ o k a",
    options: ["A) akoa", "B) okoa", "C) kaoa", "D) akao"],
    answer: "A",
    explanation: "The repeating unit is 'oka': o,k,a | o,k,a | o,k,a | o,k,a. The blanks are filled a, k, o, a → akoa."
  },
  {
    id: 9029, section: "MAT",
    text: "Which set of letters completes the series? s _ a r _ t a r _ t a _",
    options: ["A) rats", "B) tssr", "C) ttas", "D) rrst"],
    answer: "B",
    explanation: "The repeating unit is 'star': s,t,a,r | s,t,a,r | s,t,a,r. The blanks are filled t, s, s, r → tssr."
  },
  {
    id: 9030, section: "MAT",
    text: "Which set of letters completes the series? l _ n n _ l l m _ n m _",
    options: ["A) lmmn", "B) lmnn", "C) mnln", "D) mmnl"],
    answer: "A",
    explanation: "The series groups in pairs: llnn | llmm | nnmm, cycling through ll, nn, mm pairs. The blanks are filled l, m, m, n → lmmn."
  }
];
