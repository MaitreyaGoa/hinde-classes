// ============================================================
//  ws_goa_s8_math_20260708_01 — Std 8 Maths (Goa) — A Story of Numbers — Worksheet 4
//  Focus: Advantages of a Base System: Arithmetic, Abacus, and Limits
//  Date: 8 July 2026 (Wednesday)
//  20 questions · subjective/worked-out only · no MCQ
//  "answer" field is for the TEACHER'S reference only — worksheet.html
//  does not display it to students.
// ============================================================

window.worksheetQuestions = [

  { id:"q1", section:"Regrouping and the Abacus", marks:1,
    text:"What happens when you have 10 or more of the same landmark number while representing a number in base-10?",
    answer:"10 of a landmark number always regroups into exactly 1 of the next landmark number (e.g. 10 ones regroup into 1 ten)." },

  { id:"q2", section:"Regrouping and the Abacus", marks:1,
    text:"What is the value of one counter placed ABOVE a line on the abacus?",
    answer:"5 (it contributes a value of 5 for that place-value line)." },

  { id:"q3", section:"Regrouping and the Abacus", marks:2,
    text:"If a line for \"10s\" on the abacus has 13 counters after adding two numbers, what should you do?",
    answer:"13 counters on the 10s line means 13 tens = 130, which regroups: 10 of those counters become 1 counter on the 100s line, leaving 3 counters remaining on the 10s line." },

  { id:"q4", section:"Regrouping and the Abacus", marks:2,
    text:"Represent 3426 on the abacus (state how many counters go on the 1000s, 100s, 10s, 1s lines).",
    answer:"3426 = 3×1000 + 4×100 + 2×10 + 6×1 → 3 counters on the 1000s line, 4 on the 100s line, 2 on the 10s line, and 6 on the 1s line (shown as 1 counter above the line, worth 5, plus 1 counter below, worth 1)." },

  { id:"q5", section:"Regrouping and the Abacus", marks:2,
    text:"Why can the product of any two Egyptian landmark numbers always be written as another single landmark number?",
    answer:"Because every Egyptian landmark number is a power of 10, and multiplying two powers of 10 always gives another power of 10 (10ᵃ × 10ᵇ = 10^(a+b)) — which is itself a landmark number in the system." },

  { id:"q6", section:"Using the Abacus", marks:3,
    text:"Add 2907 + 43 using the abacus method (both numbers on either side of the partition, combine counters per line). Show your final count per line and state if regrouping is needed.",
    answer:"2907 = 2 thousands, 9 hundreds, 0 tens, 7 ones. 43 = 0 thousands, 0 hundreds, 4 tens, 3 ones. Combining: thousands=2, hundreds=9, tens=0+4=4, ones=7+3=10. Since ones=10, regroup: 10 ones → 1 ten, so tens becomes 4+1=5, ones becomes 0. Final: 2 thousands, 9 hundreds, 5 tens, 0 ones = 2950." },

  { id:"q7", section:"Why Base Systems Make Multiplication Easy", marks:3,
    text:"Multiply a landmark number equal to 10³ by 10², using the rule that landmark×10 always gives the next landmark. State your reasoning.",
    answer:"10³×10² = 10^(3+2) = 10⁵. Multiplying by 10 moves up one landmark level; multiplying by 10² (which is 10×10) moves up two landmark levels, from 10³ to 10⁵." },

  { id:"q8", section:"Why Base Systems Make Multiplication Easy", marks:3,
    text:"Using the distributive law shown in the textbook's Egyptian example, explain why (a+b)×n = a×n + b×n helps simplify multiplication in a base system.",
    answer:"It lets us break a complicated number into simpler landmark pieces (a and b), multiply each piece separately by n (which is easy since landmark×landmark is always another landmark), and then add the results — turning one hard multiplication into several easy ones plus an addition." },

  { id:"q9", section:"Why Base Systems Make Multiplication Easy", marks:3,
    text:"Can an Egyptian numeral have one symbol occurring 10 or more times? Explain why or why not, using regrouping.",
    answer:"No. If any symbol occurred 10 or more times, those 10 copies would always be regrouped into 1 copy of the next landmark number (since 10× any landmark = the next landmark), so a correctly written Egyptian numeral never has 10 or more of the same symbol." },

  { id:"q10", section:"Why Base Systems Make Multiplication Easy", marks:3,
    text:"Give a simple rule for multiplying any number by 5 in the base-5 system.",
    answer:"Multiplying by 5 shifts every landmark number up exactly one level (a count of 5⁰s becomes that same count of 5¹s, a count of 5¹s becomes that same count of 5²s, and so on) — similar to how multiplying by 10 in base-10 just shifts every digit one place to the left." },

  { id:"q11", section:"Creating a Base-4 System", marks:4,
    text:"Create your own base-4 system with symbols for 1, 4, 16, 64. Represent 5, 9, and 14, showing your grouping.",
    answer:"Using ▲=1, ■=4, ●=16: 5=■▲ (one 4, one 1). 9=■■▲ (two 4s, one 1). 14=■■■▲▲ (three 4s, two 1s)." },

  { id:"q12", section:"Creating a Base-4 System", marks:4,
    text:"Using your base-4 system, represent 16. What's special about how 16 is represented compared to 15?",
    answer:"16 = ● (a single symbol for the next landmark, since 16=4²). 15 needs three 4s and three 1s (■■■▲▲▲) — the maximum before regrouping. This shows that once you reach exactly the next landmark number, all the lower-level symbols regroup into a single symbol of the new landmark." },

  { id:"q13", section:"The Egyptian System's Limits", marks:4,
    text:"Explain the \"shortcoming\" of the Egyptian system that arises from needing new symbols endlessly, using ten crore (10⁸) as an example.",
    answer:"The Egyptian system only had symbols up to 10⁷. To represent ten crore (10⁸) or any larger power of 10, an entirely new symbol would need to be invented — and this problem never ends, since numbers can always get bigger. This recreates the very same challenge (needing an unending sequence of NEW symbols) that number systems were originally trying to solve." },

  { id:"q14", section:"The Egyptian System's Limits", marks:4,
    text:"A landmark number equal to 10⁴ is multiplied by 10³. Using the pattern from the chapter, what's the result?",
    answer:"10⁴×10³ = 10^(4+3) = 10⁷, the next landmark number seven levels up from 1." },

  { id:"q15", section:"The Egyptian System's Limits", marks:4,
    text:"On the abacus, why does the POSITION of a counter matter more than the total number of counters? Connect this to \"place value.\"",
    answer:"The same counter represents a completely different value depending on which line it sits on (a counter on the 1s line = 1, but the same counter on the 100s line = 100). This is the core idea of place value: a symbol's value is determined by its position, not just its presence — which is exactly what makes the abacus (and the Hindu number system it foreshadows) so efficient." },

  { id:"q16", section:"Bringing It Together", marks:5,
    text:"Contrast adding two numbers in the Roman system versus a base-n system. Why is the base-n system's addition more systematic?",
    answer:"In a base-n system, every landmark number is a power of n, so 'n of one landmark = 1 of the next' is a single, consistent regrouping rule applied uniformly at every level. In the Roman system, the landmark sequence (1,5,10,50,100,500,1000) is irregular, alternating between ×5 and ×2 jumps, so there's no single consistent regrouping rule — each grouping has to be checked case by case." },

  { id:"q17", section:"Bringing It Together", marks:5,
    text:"Explain, step by step, why multiplication is easier in a base-n system than in Roman numerals, using \"product of two landmarks is another landmark\" as your core point.",
    answer:"Step 1: Break each number into its landmark parts. Step 2: Since any landmark × any landmark = another single landmark (because they're all powers of n), each piece-by-piece multiplication is simple and predictable. Step 3: Use the distributive law to combine all the piece products into a final answer. In Roman numerals, landmarks aren't powers of one number, so step 2 has no simple rule — the product of two Roman landmarks isn't reliably another landmark, making the whole process ad hoc." },

  { id:"q18", section:"Bringing It Together", marks:5,
    text:"The chapter challenges you to multiply CCXXXI (231) and MDCCCLII (1852) directly in Roman numerals. In 2–3 sentences, explain why this is so much harder than 231×1852 in Hindu numerals.",
    answer:"In Hindu numerals, place value lets us use a fixed, mechanical multiplication algorithm (multiply each digit, shift, add) that works the same way for any two numbers. In Roman numerals, there is no place value and no power-based landmark structure, so there is no equivalent mechanical procedure — each multiplication would have to be reasoned out awkwardly from scratch using irregular landmark groupings." },

  { id:"q19", section:"Bringing It Together", marks:5,
    text:"A merchant used an abacus to add 4,782 and 3,659. Using the textbook's grouping/regrouping method, find the total, and state how many times you had to regroup (carry) to a higher line.",
    answer:"Ones: 2+9=11 → regroup 10 ones into 1 ten, write 1, carry 1. Tens: 8+5+1(carried)=14 → regroup 10 tens into 1 hundred, write 4, carry 1. Hundreds: 7+6+1(carried)=14 → regroup into 1 thousand, write 4, carry 1. Thousands: 4+3+1(carried)=8. Total = 8441. Regrouping was needed 3 times (ones→tens, tens→hundreds, hundreds→thousands)." },

  { id:"q20", section:"Bringing It Together", marks:5,
    text:"Summarize the TWO key advantages of a number system having a \"base\" (vs. Roman, which doesn't), covering both representation AND arithmetic.",
    answer:"Representation: a base-n system only ever needs a small, fixed set of digit symbols (0 to n−1), since the SAME symbols can be reused at every landmark level just by changing their position — no endless invention of new symbols is needed, unlike Roman numerals. Arithmetic: since every landmark number is a power of n, there is one single, consistent rule for regrouping (n of one landmark = 1 of the next) and for multiplying landmarks (landmark × landmark = another landmark), making both addition and multiplication systematic and predictable — instead of the case-by-case reasoning Roman numerals require." },

];
