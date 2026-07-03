// ============================================================
//  ws_goa_s8_math_20260707_01 — Std 8 Maths (Goa) — A Story of Numbers — Worksheet 3
//  Focus: Egyptian Numerals & The Idea of a Base
//  Date: 7 July 2026 (Tuesday)
//  20 questions · subjective/worked-out only · no MCQ
//  "answer" field is for the TEACHER'S reference only — worksheet.html
//  does not display it to students.
// ============================================================

window.worksheetQuestions = [

  { id:"q1", section:"The Egyptian System", marks:1,
    text:"What is the base of the Egyptian number system, and roughly when was it developed?",
    answer:"Base-10 (decimal). It was developed by the Egyptians around 3000 BCE." },

  { id:"q2", section:"The Egyptian System", marks:1,
    text:"What is the value of the 3rd landmark number in a base-10 system (10²)?",
    answer:"10² = 100." },

  { id:"q3", section:"Breaking Numbers into Egyptian Landmarks", marks:2,
    text:"Break 324 into Egyptian landmark numbers, as in the textbook example (100+100+100+10+10+4).",
    answer:"324 = 100+100+100+10+10+1+1+1+1 (i.e. three 100s, two 10s, four 1s)." },

  { id:"q4", section:"Breaking Numbers into Egyptian Landmarks", marks:2,
    text:"Break 784 into Egyptian landmark numbers.",
    answer:"784 = 100×7 + 10×8 + 1×4 → seven 100s, eight 10s, four 1s." },

  { id:"q5", section:"Breaking Numbers into Egyptian Landmarks", marks:2,
    text:"In the base-5 system from the chapter, what are the first four landmark numbers (5⁰, 5¹, 5², 5³)?",
    answer:"5⁰=1, 5¹=5, 5²=25, 5³=125." },

  { id:"q6", section:"Creating and Using a Base-5 System", marks:3,
    text:"Break 143 into base-5 landmark numbers, following the textbook's method.",
    answer:"143 = 125 + 5 + 5 + 5 + 1 + 1 + 1 (one 125, three 5s, three 1s)." },

  { id:"q7", section:"Creating and Using a Base-5 System", marks:3,
    text:"Break 2660 into Egyptian landmark numbers.",
    answer:"2660 = 1000×2 + 100×6 + 10×6 + 1×0 → two 1000s, six 100s, six 10s, zero 1s." },

  { id:"q8", section:"Creating and Using a Base-5 System", marks:3,
    text:"Represent 15 in the base-5 system.",
    answer:"15 = 5+5+5 → three 5s (0 lots of 25, three 5s, zero 1s)." },

  { id:"q9", section:"Creating and Using a Base-5 System", marks:3,
    text:"Represent 50 in the base-5 system.",
    answer:"50 = 25+25 → two 25s (two 5²s, zero 5s, zero 1s)." },

  { id:"q10", section:"Creating and Using a Base-5 System", marks:3,
    text:"A base-n system's landmarks are: first=1, each next = current×n. What are the first four landmarks of a base-7 system?",
    answer:"7⁰=1, 7¹=7, 7²=49, 7³=343." },

  { id:"q11", section:"More Base-5 and Egyptian Practice", marks:4,
    text:"Represent 137 in the base-5 system, showing your grouping from the largest landmark down.",
    answer:"Largest landmark ≤137 is 125. 137−125=12. 12=5+5+1+1. So 137 = one 125, two 5s, two 1s." },

  { id:"q12", section:"More Base-5 and Egyptian Practice", marks:4,
    text:"Represent 293 in the base-5 system.",
    answer:"Largest landmark ≤293: two 125s=250, remainder 43. 43: one 25, remainder 18. 18: three 5s, remainder 3: three 1s. So 293 = two 125s, one 25, three 5s, three 1s." },

  { id:"q13", section:"More Base-5 and Egyptian Practice", marks:4,
    text:"Break 10458 into Egyptian landmark numbers.",
    answer:"10458 = 10,000 + 400 + 50 + 8 → one 10,000, four 100s, five 10s, eight 1s." },

  { id:"q14", section:"More Base-5 and Egyptian Practice", marks:4,
    text:"Break 70707 into Egyptian landmark numbers.",
    answer:"70707 = 70,000 + 700 + 7 → seven 10,000s, seven 100s, seven 1s (zero 1000s and zero 10s)." },

  { id:"q15", section:"More Base-5 and Egyptian Practice", marks:4,
    text:"Is there any whole number that CANNOT be represented in the base-5 system? Explain why or why not.",
    answer:"No — any whole number can be represented, because we can always break it down into landmark numbers (powers of 5) starting from the largest landmark less than or equal to the number, exactly as done for 143, similar to how every number can be represented in base-10." },

  { id:"q16", section:"Generalizing the Idea of a Base", marks:5,
    text:"Represent 651 in the base-5 system, showing every step.",
    answer:"Largest landmark ≤651 is 625 (5⁴). 651−625=26. Next landmark ≤26 is 25 (5²) — no 5³=125 needed since 26<125. 26−25=1. So 651 = one 625, one 25, one 1 (zero 125s, zero 5s)." },

  { id:"q17", section:"Generalizing the Idea of a Base", marks:5,
    text:"Create your own base-4 system (landmarks 1, 4, 16, 64). Using symbols of your choice, represent 1 through 16.",
    answer:"Example using ▲=1, ■=4, ●=16: 1=▲, 2=▲▲, 3=▲▲▲, 4=■, 5=■▲, 6=■▲▲, 7=■▲▲▲, 8=■■, 9=■■▲, 10=■■▲▲, 11=■■▲▲▲, 12=■■■, 13=■■■▲, 14=■■■▲▲, 15=■■■▲▲▲, 16=● (one landmark of the next level)." },

  { id:"q18", section:"Generalizing the Idea of a Base", marks:5,
    text:"In general, what are the landmark numbers of a base-n system? State the pattern (not specific numbers).",
    answer:"The landmark numbers of a base-n system are the powers of n, starting from n⁰=1, then n¹, n², n³, and so on." },

  { id:"q19", section:"Generalizing the Idea of a Base", marks:5,
    text:"Both a base-10 (Egyptian) system and the base-5 system can represent 143. Which needs FEWER total symbols? Show your working for both.",
    answer:"Base-10 (Egyptian): 143 = 100+10+10+10+1+1+1 → one 100 + three 10s + three 1s = 7 symbols total. Base-5: 143 = 125+5+5+5+1+1+1 → one 125 + three 5s + three 1s = 7 symbols total. Both need exactly 7 symbols for this particular number — showing that a smaller base isn't always worse for symbol count on any single number, though larger bases are generally more compact for bigger numbers overall." },

  { id:"q20", section:"Generalizing the Idea of a Base", marks:5,
    text:"Explain why the Egyptian system is \"base-10\" and the chapter's Section II system is \"base-5.\" What two conditions must a system satisfy to be called \"base-n\"?",
    answer:"A number system is called base-n if: (a) its first landmark number is 1, and (b) every next landmark number is obtained by multiplying the current landmark number by the fixed number n. The Egyptian system's landmarks (1,10,100,1000...) are powers of 10, so it is base-10. The chapter's Section II system's landmarks (1,5,25,125...) are powers of 5, so it is base-5." },

];
