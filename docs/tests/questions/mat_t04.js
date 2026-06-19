// ============================================================
//  MAT Topic Test — Alphabet Test (DPP-07)
//  Hinde Classes | hindeclasses.com | Maitreya Hinde | 7358425108
//  Source: Class VII Mental Ability DPP-07
//  ID range: 9271–9280
// ============================================================

var questions = [
  {
    id: 9271, section: "MAT",
    text: "Arrange the following letters to form a meaningful word: C(1) E(2) L(3) S(4) M(5) U(6). Which sequence gives the word?",
    options: ["A) 4,6,3,5,2,1", "B) 5,6,4,1,3,2", "C) 4,6,5,2,3,1", "D) 5,2,3,1,6,4"],
    answer: "B",
    explanation: "Using sequence 5,6,4,1,3,2 → M,U,S,C,L,E = MUSCLE, a meaningful English word."
  },
  {
    id: 9272, section: "MAT",
    text: "Arrange in dictionary order: 1.Precede  2.Precision  3.Precise  4.Precept  5.Preach  6.Prelude. Choose the correct sequence.",
    options: ["A) 5,3,1,4,2,6", "B) 5,1,4,3,2,6", "C) 5,1,3,4,2,6", "D) 5,1,4,2,3,6"],
    answer: "B",
    explanation: "After 'Pre-', compare next letters: -ach < -cede < -cept < -cise < -cision < -lude. So: Preach(5), Precede(1), Precept(4), Precise(3), Precision(2), Prelude(6)."
  },
  {
    id: 9273, section: "MAT",
    text: "How many letters are there between H and P in the English alphabet?",
    options: ["A) 5", "B) 6", "C) 7", "D) 8"],
    answer: "C",
    explanation: "The letters between H and P are: I, J, K, L, M, N, O. Counting these gives 7 letters. (H is the 8th letter, P is the 16th letter; 16-8-1=7.)"
  },
  {
    id: 9274, section: "MAT",
    text: "Number of letters skipped between adjacent letters in the series increases by one each step. Which series follows this rule?",
    options: ["A) KMPTY", "B) IJKOT", "C) HJMQT", "D) DFIJK"],
    answer: "A",
    explanation: "KMPTY: K→M (skip L = 1 letter), M→P (skip NO = 2 letters), P→T (skip QRS = 3 letters), T→Y (skip UVWX = 4 letters). Skipped letters: 1,2,3,4 — increasing by 1 each time ✓."
  },
  {
    id: 9275, section: "MAT",
    text: "Which of the following words can be formed using only the letters in the word MEASUREMENT?",
    options: ["A) MASTER", "B) MANTLE", "C) SUMMIT", "D) ASSURE"],
    answer: "A",
    explanation: "MEASUREMENT has letters: M,E,A,S,U,R,E,M,E,N,T. MASTER needs M,A,S,T,E,R — all present ✓. MANTLE needs L — not in MEASUREMENT ✗. SUMMIT needs two Ms and two Ts — not available ✗. ASSURE needs two Ss — only one S in MEASUREMENT ✗."
  },
  {
    id: 9276, section: "MAT",
    text: "If these words are arranged in dictionary order, what is the 4th letter from the left in the LAST word? Words: INTIMATION, INFORMATION, INTEREST, INTERROGATION, INSTIGATION",
    options: ["A) R", "B) O", "C) T", "D) I"],
    answer: "D",
    explanation: "Dictionary order: INFORMATION, INSTIGATION, INTEREST, INTERROGATION, INTIMATION. The last word is INTIMATION. I-N-T-I-M-A-T-I-O-N → 4th letter from left = I."
  },
  {
    id: 9277, section: "MAT",
    text: "Arrange in alphabetical order: (A) Principal  (B) Principle  (C) Principia  (D) Principled. Which word appears SECOND?",
    options: ["A) Principal", "B) Principle", "C) Principia", "D) Principled"],
    answer: "C",
    explanation: "All start with 'Princip-'. Compare position 8: Principal(A), Principia(I), Principle/Principled(L). A < I < L, so: Principal(1st), Principia(2nd), Principle(3rd), Principled(4th). Second word = Principia."
  },
  {
    id: 9278, section: "MAT",
    text: "In the word ORDINARY, positions 1&5, 2&6, 3&7, 4&8 are interchanged. What is the 5th letter from the right end in the rearranged word?",
    options: ["A) R", "B) O", "C) Y", "D) N"],
    answer: "C",
    explanation: "ORDINARY: O(1)R(2)D(3)I(4)N(5)A(6)R(7)Y(8). After swapping: pos1=N,pos2=A,pos3=R,pos4=Y,pos5=O,pos6=R,pos7=D,pos8=I → NARYORDI. 5th from right in 8-letter word = 4th from left = Y."
  },
  {
    id: 9279, section: "MAT",
    text: "If the first four letters of ANTHROPOMORPHISM are reversed, then the next four reversed, then the next four reversed and so on, which letter is 12th from the left in the rewritten order?",
    options: ["A) O", "B) H", "C) M", "D) P"],
    answer: "C",
    explanation: "ANTHROPOMORPHISM split into groups of 4: ANTH | ROPO | MORP | HISM. Reversed groups: HTNA | OPOR | PROM | MSIH. Full sequence: H,T,N,A,O,P,O,R,P,R,O,M,M,S,I,H. 12th letter = M."
  },
  {
    id: 9280, section: "MAT",
    text: "If the English alphabet is written in reverse order, which letter will be 7th to the right of Q?",
    options: ["A) K", "B) U", "C) J", "D) W"],
    answer: "C",
    explanation: "In the reversed alphabet (Z=1st, Y=2nd, ... A=26th), Q is the 10th letter (since Q=17th normally, reversed position = 26-17+1=10). Seven positions to the right (forward in reversed sequence) = 10+7 = 17th in reversed alphabet = J (since J=10th normally, 26-10+1=17th in reverse). Answer: J."
  }
];
