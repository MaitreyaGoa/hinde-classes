// ============================================================
//  ws_goa_s8_math_20260711_01 — Std 8 Maths (Goa) — A Story of Numbers — Worksheet 5
//  Focus: Place Value Systems: Mesopotamian (Base-60) & Mayan
//  Date: 11 July 2026 (Saturday)
//  20 questions · subjective/worked-out only · no MCQ
//  "answer" field is for the TEACHER'S reference only — worksheet.html
//  does not display it to students.
// ============================================================

window.worksheetQuestions = [

  { id:"q1", section:"The Mesopotamian System", marks:1,
    text:"What base is the Mesopotamian number system, and what's another name for it?",
    answer:"Base-60, also called the sexagesimal system (also known as the Babylonian number system)." },

  { id:"q2", section:"The Mesopotamian System", marks:1,
    text:"In the Mayan system, what symbol represents zero, and what does it look like?",
    answer:"A seashell-shaped placeholder symbol represents zero in the Mayan system." },

  { id:"q3", section:"The Mesopotamian System", marks:2,
    text:"What are the first three Mesopotamian landmark numbers (powers of 60)?",
    answer:"60⁰=1, 60¹=60, 60²=3600." },

  { id:"q4", section:"The Mesopotamian System", marks:2,
    text:"Where do we still see the Mesopotamian base-60 system's influence in modern life? Give one example.",
    answer:"In units of time: 1 hour = 60 minutes, and 1 minute = 60 seconds (also, a full circle = 360 degrees, related to 60×6)." },

  { id:"q5", section:"Representing Numbers in Base-60", marks:2,
    text:"Why is the Mayan system's third landmark number 360 instead of 400 (the expected base-20 pattern)? What does the chapter suggest?",
    answer:"The chapter suggests this might be related to the Mayan calendar system, rather than following a strict base-20 pattern throughout." },

  { id:"q6", section:"Representing Numbers in Base-60", marks:3,
    text:"Break 640 into Mesopotamian landmarks: 640 = (?)×60 + (?).",
    answer:"640 = (10)×60 + 40 → ten 60s and one 40 (the 40 itself is built from four groups of 10 within the '1s' position, since the sub-symbols only go up to 59)." },

  { id:"q7", section:"Representing Numbers in Base-60", marks:3,
    text:"Break 7530 into Mesopotamian landmarks: 7530 = (?)×3600 + (?)×60 + (?).",
    answer:"7530 = (2)×3600 + (5)×60 + 30 → two 3600s, five 60s, and 30 ones." },

  { id:"q8", section:"Representing Numbers in Base-60", marks:3,
    text:"Represent 63 in the Mesopotamian system (60s and 1s).",
    answer:"63 = (1)×60 + 3 → one 60, three 1s." },

  { id:"q9", section:"More Mesopotamian Practice", marks:3,
    text:"Represent 132 in the Mesopotamian system.",
    answer:"132 = (2)×60 + 12 → two 60s, and 12 ones (12 itself is built as ten+one+one within the 1s position)." },

  { id:"q10", section:"More Mesopotamian Practice", marks:3,
    text:"Represent 200 in the Mesopotamian system.",
    answer:"200 = (3)×60 + 20 → three 60s, twenty 1s." },

  { id:"q11", section:"More Mesopotamian Practice", marks:4,
    text:"Why does (1)×3600 + (70)×60 + 2 need regrouping before it's a valid Mesopotamian representation? Show the regrouping steps from the textbook.",
    answer:"70 is 60 or more, so it cannot stay as a count of 60s — it must be regrouped. (1)×3600+(70)×60+2 = (1)×60²+(60+10)×60+2 = (1)×60²+60²+(10)×60+2 = (2)×60²+(10)×60+2. So the valid representation is two 3600s, ten 60s, and 2 ones." },

  { id:"q12", section:"More Mesopotamian Practice", marks:4,
    text:"Represent 3605 in the Mesopotamian system.",
    answer:"3605 = (1)×3600 + 5 → one 3600, five 1s (zero 60s)." },

  { id:"q13", section:"The Placeholder Problem", marks:4,
    text:"What problem arose in the ORIGINAL Mesopotamian system when a power of 60 was skipped (zero occurrences)? How did later Mesopotamians solve it?",
    answer:"When a power of 60 had zero occurrences, the position was simply left as a blank space — but blank spaces are hard to see consistently and easy to miscount, causing ambiguity when reading numbers. Later Mesopotamians solved this by inventing a placeholder symbol to explicitly mark 'nothing in this position,' similar in purpose to our modern zero." },

  { id:"q14", section:"The Placeholder Problem", marks:4,
    text:"Even with a placeholder symbol added, one ambiguity remained — related to WHERE the placeholder was used. What was this limitation (think of the number 3600)?",
    answer:"The placeholder symbol was mainly used in the MIDDLE of a number, not at the END — so a number like 3600 (which needs a placeholder at the very end, since there are zero 60s and zero 1s after the one 3600) could not be written unambiguously using their placeholder convention." },

  { id:"q15", section:"The Mayan System", marks:4,
    text:"Represent 100 in the Mayan system: 100 = (?)×20 + (?)×1.",
    answer:"100 = (5)×20 + (0)×1 → five 20s, zero 1s." },

  { id:"q16", section:"The Mayan System", marks:5,
    text:"Represent 77 in the Mayan system, showing the breakdown into 20s and 1s, and state how many dots and bars are needed (dot=1, bar=5).",
    answer:"77 = (3)×20 + (17)×1 → three 20s and seventeen 1s. The '3' (20s position) needs 3 dots. The '17' (1s position) needs 3 bars (3×5=15) plus 2 dots (15+2=17)." },

  { id:"q17", section:"The Mayan System", marks:5,
    text:"Represent 361 in the Mayan system, breaking it into 360, 20, and 1.",
    answer:"361 = (1)×360 + (0)×20 + (1)×1 → one 360, zero 20s, one 1." },

  { id:"q18", section:"The Mayan System", marks:5,
    text:"Represent 721 in the Mayan system, breaking it into 360, 20, and 1.",
    answer:"721 = (2)×360 + (0)×20 + (1)×1 → two 360s, zero 20s, one 1." },

  { id:"q19", section:"Comparing the Two Systems", marks:5,
    text:"Compare Mesopotamian landmarks (1,60,3600...) with Mayan landmarks (1,20,360,7200...). Why is Mayan \"not an actual base-20 system\" while Mesopotamian IS a true base-60 system?",
    answer:"The Mesopotamian landmarks are exact powers of 60 (60⁰, 60¹, 60²...), following the strict base-n rule. The Mayan landmarks start as powers of 20 (1, 20) but then break the pattern — the third landmark is 360 (=20×18) instead of 400 (=20×20), so it is NOT simply n multiplied by itself each time. Because it breaks the consistent multiplication rule, the Mayan system does not qualify as a true base-20 system, even though it looks similar." },

  { id:"q20", section:"Comparing the Two Systems", marks:5,
    text:"Both systems independently invented a placeholder for \"nothing.\" Explain why a placeholder is essential for place value to work, with an example of what goes wrong without one.",
    answer:"Without a placeholder, there is no way to show that a position has zero occurrences — for example, the numbers 63 (one 60, three 1s) and 3603 (one 3600, zero 60s, three 1s) could become impossible to tell apart if the empty '60s' position in 3603 isn't clearly marked, since both might otherwise look like just 'one [big landmark], three 1s' with an ambiguous gap. A placeholder removes this ambiguity by explicitly marking empty positions." },

];
