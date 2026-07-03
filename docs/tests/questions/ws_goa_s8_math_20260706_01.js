// ============================================================
//  ws_goa_s8_math_20260706_01 — Std 8 Maths (Goa) — A Story of Numbers — Worksheet 2
//  Focus: Roman Numerals: Landmark Numbers & Arithmetic
//  Date: 6 July 2026 (Monday)
//  20 questions · subjective/worked-out only · no MCQ
//  "answer" field is for the TEACHER'S reference only — worksheet.html
//  does not display it to students.
// ============================================================

window.worksheetQuestions = [

  { id:"q1", section:"Roman Numeral Basics", marks:1,
    text:"What values do I, V, X, L, C, D, M represent?",
    answer:"I=1, V=5, X=10, L=50, C=100, D=500, M=1000." },

  { id:"q2", section:"Roman Numeral Basics", marks:1,
    text:"Convert 8 into Roman numerals.",
    answer:"8 = 5+1+1+1 = VIII." },

  { id:"q3", section:"Roman Numeral Basics", marks:1,
    text:"Convert XVII into a Hindu numeral.",
    answer:"X=10, V=5, I=1, I=1 → 10+5+1+1 = 17." },

  { id:"q4", section:"Converting Between Systems", marks:2,
    text:"Convert 27 into Roman numerals, showing the breakdown (10+10+5+1+1) as in the textbook example.",
    answer:"27 = 10+10+5+1+1 = XXVII." },

  { id:"q5", section:"Converting Between Systems", marks:2,
    text:"Why is 40 sometimes XL and sometimes XXXX in the Roman system? What does this tell you about the system's consistency?",
    answer:"XL uses the 'subtract 1 landmark from the next' shortcut (10 less than 50), following the same idea as IV for 4. XXXX simply repeats X four times. Both were used historically, showing that Roman numeral writers were not always consistent — the system had no single fixed rule, unlike a true place-value system." },

  { id:"q6", section:"Converting Between Systems", marks:2,
    text:"Convert 302 into Roman numerals.",
    answer:"302 = 100+100+100+1+1 = CCCII." },

  { id:"q7", section:"Converting Between Systems", marks:3,
    text:"Convert 715 into Roman numerals.",
    answer:"715 = 500+100+100+10+5 = DCCXV." },

  { id:"q8", section:"Converting Between Systems", marks:3,
    text:"Convert MCMXCIX into a Hindu numeral, breaking it into landmark parts.",
    answer:"M=1000, CM=900, XC=90, IX=9 → 1000+900+90+9 = 1999." },

  { id:"q9", section:"Roman Numeral Arithmetic", marks:3,
    text:"Add CCXXXII + CCCCXIII using the textbook's grouping method (group Is, Xs, Cs from the largest landmark down). Show your grouping.",
    answer:"CCXXXII=232, CCCCXIII=413. Grouping all the Is, Xs, and Cs together: 5 Cs, 6 Xs, 5 Is = 500+60+5. Since 5 Cs regroups into D (500): total = D+LX+V = DCXLV = 645. (Check: 232+413=645.)" },

  { id:"q10", section:"Roman Numeral Arithmetic", marks:3,
    text:"Add LXXXVII + LXXVIII using the same grouping method (the textbook's \"do it yourself\" question).",
    answer:"LXXXVII=87, LXXVIII=78. Grouping: total Ls=2 (→C), total Xs=5 (→L), total Vs=2 (→X), total Is=5 (→V). Result = C+L+X+V = CLXV = 165. (Check: 87+78=165.)" },

  { id:"q11", section:"Roman Numeral Arithmetic", marks:3,
    text:"Find V × L, using the fact that the product of two landmark numbers is another landmark number.",
    answer:"V=5, L=50. 5×50=250=CCL." },

  { id:"q12", section:"Roman Numeral Arithmetic", marks:4,
    text:"Find VII × IX. (Hint: not both are landmark numbers — find the value of each first, multiply, then reconvert.)",
    answer:"VII=7, IX=9. 7×9=63=LXIII." },

  { id:"q13", section:"Why Roman Numerals Struggle", marks:4,
    text:"Convert 2999 into Roman numerals, showing your full breakdown.",
    answer:"2999 = 1000+1000+900+90+9 = MMCMXCIX." },

  { id:"q14", section:"Why Roman Numerals Struggle", marks:4,
    text:"Convert 1222 into Roman numerals.",
    answer:"1222 = 1000+100+100+10+10+1+1 = MCCXXII." },

  { id:"q15", section:"Why Roman Numerals Struggle", marks:4,
    text:"Explain why multiplying two Roman numerals (like 231 × 1852) is much harder than adding them, using the idea of landmark numbers.",
    answer:"Addition just needs grouping and regrouping of matching symbols. But multiplication requires figuring out how each landmark number in one numeral combines with every landmark number in the other, and Roman landmark numbers (1,5,10,50,100,500,1000) don't follow a simple power pattern — so there's no easy shortcut rule, unlike in a base system where landmark×landmark is always another landmark." },

  { id:"q16", section:"Why Roman Numerals Struggle", marks:4,
    text:"Using CCXXXI (231) and MDCCCLII (1852), explain (without calculating the product) why a place-value system makes this calculation far simpler.",
    answer:"In a place-value system, each digit's value is instantly known from its position, and standard multiplication algorithms (multiplying digit by digit, then adding shifted results) work uniformly for any numbers. Roman numerals have no such positional structure, so every multiplication has to be worked out awkwardly from scratch using landmark groupings." },

  { id:"q17", section:"Comparing the Systems", marks:5,
    text:"Identify three specific features of the Hindu system that make it more efficient than Roman, as discussed in the \"Figure it Out\" section.",
    answer:"(1) It is a place-value system, so the same 10 digits can represent any number, however large. (2) It has a symbol for zero, removing ambiguity. (3) Arithmetic operations (especially multiplication and division) follow simple, uniform rules, unlike the irregular landmark-based grouping needed in Roman numerals." },

  { id:"q18", section:"Comparing the Systems", marks:5,
    text:"A shopkeeper recorded CCCXLVII (347) in sales on Monday and CCXIX (219) on Tuesday. Find the total by converting both to Hindu numerals, adding, then converting the total back to Roman.",
    answer:"347+219=566. 566 = 500+60+6 = DLXVI." },

  { id:"q19", section:"Comparing the Systems", marks:5,
    text:"Explain why the Roman system needed a NEW symbol every time numbers got bigger (L for 50, C for 100...), while a true base system doesn't need new symbols beyond the first few.",
    answer:"Roman landmark numbers (1,5,10,50,100,500,1000...) don't follow a repeating multiplicative pattern, so each new size range needs its own invented symbol. A true base-n system's landmarks are just powers of n (1, n, n², n³...), so the SAME small set of digit symbols (0 to n−1) can represent every landmark position just by changing where a digit sits — no new symbols are ever needed." },

  { id:"q20", section:"Comparing the Systems", marks:5,
    text:"The Roman landmark sequence is 1, 5, 10, 50, 100, 500, 1000 — not simple powers of one number. Compare this to a true base-10 landmark sequence (1, 10, 100, 1000...). What's the key structural difference, and why does it make Roman arithmetic harder?",
    answer:"A true base-10 sequence multiplies by exactly 10 each time (1→10→100→1000), a single consistent ratio. The Roman sequence alternates between ×5 and ×2 (1→5 is ×5, 5→10 is ×2, 10→50 is ×5, 50→100 is ×2...) — an irregular, two-step pattern. This irregularity means there's no single simple rule for how landmarks combine under multiplication, making Roman arithmetic far more case-by-case and difficult than base-10 arithmetic." },

];
