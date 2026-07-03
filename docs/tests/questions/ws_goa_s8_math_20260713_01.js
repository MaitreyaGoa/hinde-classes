// ============================================================
//  ws_goa_s8_math_20260713_01 — Std 8 Maths (Goa) — A Story of Numbers — Worksheet 6
//  Focus: Chinese Rod Numerals & The Hindu System: Synthesis
//  Date: 13 July 2026 (Monday)
//  20 questions · subjective/worked-out only · no MCQ
//  "answer" field is for the TEACHER'S reference only — worksheet.html
//  does not display it to students.
// ============================================================

window.worksheetQuestions = [

  { id:"q1", section:"The Chinese Rod Numeral System", marks:1,
    text:"What base is the Chinese rod numeral system?",
    answer:"Base-10 (decimal)." },

  { id:"q2", section:"The Chinese Rod Numeral System", marks:1,
    text:"How many digit symbols does the Hindu system use, and which one is the crucial \"placeholder AND number\"?",
    answer:"10 digit symbols (0–9); the digit 0 is the crucial placeholder-and-number." },

  { id:"q3", section:"The Chinese Rod Numeral System", marks:2,
    text:"What do \"Zong\" and \"Heng\" refer to in the Chinese rod system?",
    answer:"Zong and Heng are the two styles of rod symbols used for digits 1–9: Zong symbols are used for units, hundreds, ten-thousands, etc. (odd-numbered positions), and Heng symbols are used for tens, thousands, hundred-thousands, etc. (even-numbered positions)." },

  { id:"q4", section:"The Chinese Rod Numeral System", marks:2,
    text:"Read 2634 = (2)×10³+(6)×10²+(3)×10+(4)×1. Which digits are Zong and which are Heng, based on position?",
    answer:"4 (units/10⁰) is Zong. 3 (tens/10¹) is Heng. 6 (hundreds/10²) is Zong. 2 (thousands/10³) is Heng." },

  { id:"q5", section:"Why the Chinese Alternated Symbol Styles", marks:2,
    text:"Why did the Chinese alternate Zong/Heng symbols for adjacent places instead of using one style throughout?",
    answer:"Alternating styles makes it visually clear where one place value ends and the next begins, even without a strong gap between them — similar to how our own system relies on position, but here the SHAPE of the symbol itself signals the place value, reducing the risk of misreading adjacent digits as one another." },

  { id:"q6", section:"Why the Chinese Alternated Symbol Styles", marks:3,
    text:"If only Zong symbols were used, how would 41 be represented, and why could it be misread as 23, 32, or others without clear spacing?",
    answer:"41 would be written as 4 vertical strokes (Zong for the tens digit, since without alternation both digits look the same) followed by 1 vertical stroke — i.e. |||| |. Without a clear, reliable gap, this string of 5 strokes total could be regrouped differently by a reader (e.g. as 2 and 3 strokes = '23', or 3 and 2 = '32'), since there is no visual cue distinguishing where the tens digit ends and the units digit begins." },

  { id:"q7", section:"Building a Base-2 Place Value System", marks:3,
    text:"Form a base-2 system using \"ukasar\"=1 and \"urapon\"=0. Represent 5 (hint: use 4, 2, 1).",
    answer:"5 = (1)×4 + (0)×2 + (1)×1 → ukasar-urapon-ukasar." },

  { id:"q8", section:"Building a Base-2 Place Value System", marks:3,
    text:"Using your base-2 system, represent 8. What's special about 8 in base-2?",
    answer:"8 = (1)×8 + (0)×4 + (0)×2 + (0)×1 → ukasar-urapon-urapon-urapon. 8 is special because it is exactly the next landmark number (2³), so it is represented by a single 'ukasar' at a new position with all lower positions as 'urapon' (0) — just like 10, 100, 1000 in base-10." },

  { id:"q9", section:"Building a Base-2 Place Value System", marks:3,
    text:"Compare your base-2 place-value system to the ORIGINAL Gumulgal system (no place value, just sequential counting). What's the key structural difference, even though both use two symbols?",
    answer:"The original Gumulgal system has NO place value — 'ukasar' simply means 'add another 2' every time it appears, in sequence, with no positional meaning (it's closer to a tally/grouping system). The base-2 system built here DOES have place value — the same symbol 'ukasar' means a different amount (1, 2, 4, 8...) depending on which position it sits in. This positional structure is what makes the base-2 system a true place-value system, unlike Gumulgal's." },

  { id:"q10", section:"Building a Base-2 Place Value System", marks:3,
    text:"Why does the chapter call 0 \"not just a placeholder, but a number in its own right\"? Give one arithmetic property of 0 mentioned in the chapter.",
    answer:"Because in Indian mathematics, 0 can be added, subtracted, and multiplied just like any other number, following consistent rules — for example, the chapter mentions that 0 plus any number equals that same number, and 0 times any number is 0. Aryabhata used these properties for real computations, and Brahmagupta later formally codified arithmetic rules for 0, treating it as a full member of the number system rather than just a blank-space marker." },

  { id:"q11", section:"The Hindu Number System", marks:4,
    text:"Write 375 and show its breakdown into landmarks (100s, 10s, 1s), as in the textbook's summary table.",
    answer:"375 = (3)×10² + (7)×10 + (5)×1 → three 100s, seven 10s, five 1s." },

  { id:"q12", section:"The Hindu Number System", marks:4,
    text:"Convert 25 into base-8, showing your working.",
    answer:"25 ÷ 8 = 3 remainder 1. So 25 = (3)×8 + 1 → base-8 representation is 31." },

  { id:"q13", section:"The Hindu Number System", marks:4,
    text:"Convert 25 into base-5, showing your working.",
    answer:"25 = (1)×5² + (0)×5 + (0)×1 → base-5 representation is 100." },

  { id:"q14", section:"The Hindu Number System", marks:4,
    text:"Convert 25 into base-2, showing your working.",
    answer:"25 = 16+8+1 = (1)×2⁴+(1)×2³+(0)×2²+(0)×2+(1)×1 → base-2 representation is 11001." },

  { id:"q15", section:"The Hindu Number System", marks:4,
    text:"Name one Indian and one Arab-world mathematician mentioned in the chapter, important to developing/popularizing the Hindu system and zero. State each one's contribution.",
    answer:"Aryabhata (c. 499 CE) was the first mathematician to fully explain and do elaborate scientific computations with the Indian system of 10 symbols, including 0. Al-Khwārizmī (through his book 'On the Calculation with Hindu Numerals', c. 825) popularised the Indian number system in the Arab world — the word 'algorithm' is named after him." },

  { id:"q16", section:"Full Chapter Synthesis", marks:5,
    text:"The chapter's summary lists 5 stages: counting in groups → landmark numbers → base idea → place value → zero. For 4 of the civilizations studied, state which stage(s) they reached and which they did NOT.",
    answer:"Gumulgal: reached only 'counting in groups' — no landmark numbers, no base, no place value, no zero. Roman: reached 'landmark numbers' but did NOT reach the base idea (landmarks aren't powers of one number), so no place value or zero either. Egyptian: reached the 'base idea' (base-10 landmarks are powers of 10) but did NOT use place value or zero — it still needed a unique symbol for every landmark. Mesopotamian: reached 'place value' (a true base-60 positional system) and even added a placeholder symbol, but their zero was NOT used consistently as a true number/at the end of numbers, so it didn't fully reach the final 'zero as a number' stage." },

  { id:"q17", section:"Full Chapter Synthesis", marks:5,
    text:"Explain why the Hindu system is the most complete system in this chapter, referencing BOTH place value AND zero-as-a-number.",
    answer:"The Hindu system combines a true place-value structure (a digit's value depends entirely on its position, using base-10 landmarks) WITH zero treated as a full number, not just an empty-position marker — 0 can be added, subtracted, and multiplied following consistent rules like any other digit. This combination removes all the ambiguities seen in earlier systems (Roman's lack of a base, Egyptian's lack of place value, Mesopotamian's inconsistent zero) and allows any number, however large or small, to be written unambiguously with just 10 symbols." },

  { id:"q18", section:"Full Chapter Synthesis", marks:5,
    text:"If humans had 8 fingers instead of 10, we might use base-8. Using your Q12 answer (25 in base-8), explain how everyday arithmetic would feel different, with one concrete example.",
    answer:"In a base-8 world, what we call '25' would be written as '31,' and place values would represent powers of 8 (1, 8, 64, 512...) instead of powers of 10. For example, counting up to what we call '10' today would actually mean reaching the second landmark (written '10' in base-8, but meaning eight, not ten) much sooner — so multiplication tables, carrying/regrouping in addition, and even everyday counting rhythms would all shift to a rhythm of 8s instead of 10s, even though the underlying quantities being counted wouldn't change at all." },

  { id:"q19", section:"Full Chapter Synthesis", marks:5,
    text:"Trace the journey from tally marks to the Hindu place-value system. List the main systems in the order discussed, and state the ONE key new idea each contributed.",
    answer:"1. Tally marks/sticks — one-to-one mapping (matching objects to marks). 2. Gumulgal (counting in 2s) — the first hint of landmark numbers, grouping by a fixed size. 3. Roman numerals — explicit landmark numbers (1,5,10,50,100,500,1000) as reference points. 4. Egyptian system — the idea of a true BASE (landmarks as powers of one number, 10). 5. Mesopotamian and Mayan systems — the idea of PLACE VALUE (position determines value) plus early placeholder symbols. 6. Chinese rod numerals — a near-complete place-value system, still missing a true zero. 7. Hindu system — the final piece: ZERO as both a placeholder AND a genuine number, completing an efficient, unambiguous, unending system." },

  { id:"q20", section:"Full Chapter Synthesis", marks:5,
    text:"Reflect in 3–4 sentences: why does the chapter call the invention of 0 and the Hindu system \"one of the greatest, most influential inventions of all time\"? Use one real-world application to support your answer.",
    answer:"The Hindu number system, with 0 as both placeholder and number, lets us write any number — however large or small — unambiguously using just 10 symbols, and it enables simple, reliable methods for every arithmetic operation. This efficiency became the foundation for nearly all of modern science, technology, computing, accounting, and engineering; for example, every calculation done on a computer today ultimately relies on positional number representation and the concept of zero. Without this invention, tasks we take for granted — from banking to GPS navigation to the very device this worksheet might be read on — would be vastly more difficult to build and use." },

];
