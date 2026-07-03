// ============================================================
//  ws_goa_s7_math_20260706_01 — Std 7 Maths (Goa) — Large Numbers Around Us — Worksheet 2
//  Focus: Land of Tens: Place Value Through Button Calculators
//  Date: 6 July 2026 (Monday)
//  20 questions · subjective/worked-out only · no MCQ
//  "answer" field is for the TEACHER'S reference only — worksheet.html
//  does not display it to students.
// ============================================================

window.worksheetQuestions = [

  { id:"q1", section:"The Thoughtful Thousands (+1000 only)", marks:1,
    text:"The \"Thoughtful Thousands\" calculator only has a +1000 button. How many times must it be pressed to show 3,000?",
    answer:"3 times" },

  { id:"q2", section:"The Thoughtful Thousands (+1000 only)", marks:1,
    text:"How many times must the +1000 button be pressed to show 10,000?",
    answer:"10 times" },

  { id:"q3", section:"The Thoughtful Thousands (+1000 only)", marks:1,
    text:"How many times must the +1000 button be pressed to show one lakh?",
    answer:"100 times (since 100 x 1000 = 1,00,000)" },

  { id:"q4", section:"The Tedious Tens and Handy Hundreds", marks:2,
    text:"The \"Tedious Tens\" calculator only has a +10 button. How many presses to show 780?",
    answer:"78 times" },

  { id:"q5", section:"The Tedious Tens and Handy Hundreds", marks:2,
    text:"How many presses of +10 to show 3,700?",
    answer:"370 times" },

  { id:"q6", section:"The Tedious Tens and Handy Hundreds", marks:2,
    text:"How many presses of +10 to show one lakh?",
    answer:"10,000 times" },

  { id:"q7", section:"The Tedious Tens and Handy Hundreds", marks:2,
    text:"The \"Handy Hundreds\" calculator only has a +100 button. How many presses to show 97,600?",
    answer:"976 times" },

  { id:"q8", section:"Comparing the Calculators", marks:3,
    text:"How many hundreds are required to make ten thousand? How many hundreds are required to make one lakh?",
    answer:"Ten thousand / 100 = 100 hundreds. One lakh / 100 = 1,000 hundreds" },

  { id:"q9", section:"Comparing the Calculators", marks:3,
    text:"Handy Hundreds claims: \"There are some numbers Tedious Tens and Thoughtful Thousands can't show but I can.\" Is this true? Give an example.",
    answer:"Yes, true. E.g. 500 can be shown by Handy Hundreds (5 presses of +100) but Tedious Tens needs 50 presses of +10 (still possible actually) -- a better example: 250 cannot be shown by Thoughtful Thousands at all (not a multiple of 1000), but Handy Hundreds shows it in 2.5 presses... actually 250 isn't a multiple of 100 either. Best example: 350 -- Handy Hundreds shows it in 3.5 presses (not whole), so instead use 400: Handy Hundreds = 4 presses; Thoughtful Thousands cannot show 400 at all (not a multiple of 1000)" },

  { id:"q10", section:"Comparing the Calculators", marks:3,
    text:"If the +1000 button is pressed 153 times, what number is shown?",
    answer:"153 x 1000 = 1,53,000" },

  { id:"q11", section:"Comparing the Calculators", marks:3,
    text:"If the +10 button is pressed 435 times, what number is shown?",
    answer:"435 x 10 = 4,350" },

  { id:"q12", section:"Comparing the Calculators", marks:3,
    text:"If the +100 button is pressed 582 times, what number is shown?",
    answer:"582 x 100 = 58,200" },

  { id:"q13", section:"Creative Chitti: Many Ways to the Same Number", marks:4,
    text:"Creative Chitti has buttons +1,+10,+100,+1000,+10000,+100000,+1000000. To make 321, it presses +10 thirty-two times and +1 once. Verify this works, then find ONE more different way to make 321.",
    answer:"Verify: 32x10 + 1 = 320+1 = 321, correct. Another way: press +100 three times, +10 two times, +1 once: 300+20+1 = 321" },

  { id:"q14", section:"Creative Chitti: Many Ways to the Same Number", marks:4,
    text:"Two ways to make 5072 are given: (a) (50x100)+(7x10)+(2x1) (b) (3x1000)+(20x100)+(72x1). Verify both, then find a THIRD different way and write its expression.",
    answer:"(a) 5000+70+2=5072 correct. (b) 3000+2000+72=5072 correct. Third way: (4x1000)+(10x100)+(7x10)+(2x1) = 4000+1000+70+2 = 5072" },

  { id:"q15", section:"Creative Chitti: Many Ways to the Same Number", marks:4,
    text:"For 8300, write expressions for at least TWO different ways to obtain it through button clicks.",
    answer:"Way 1: (8x1000)+(3x100) = 8000+300 = 8300. Way 2: (7x1000)+(13x100) = 7000+1300 = 8300" },

  { id:"q16", section:"Systematic Sippy: The Fewest Clicks", marks:5,
    text:"\"Systematic Sippy\" wants the fewest clicks possible. One way to get 5072 uses 23 clicks: (5x1000)+(0x100)+(6x10)+(12x1). Find a way using FEWER than 23 clicks, and count the total.",
    answer:"Standard place-value way: (5x1000)+(0x100)+(7x10)+(2x1) = 5000+0+70+2 = 5072. Total clicks = 5+0+7+2 = 14 clicks (fewer than 23)" },

  { id:"q17", section:"Systematic Sippy: The Fewest Clicks", marks:5,
    text:"Find the way to make 8300 using the SMALLEST possible number of clicks, and write the expression.",
    answer:"(8x1000)+(3x100)+(0x10)+(0x1) = 8300. Total clicks = 8+3 = 11" },

  { id:"q18", section:"Systematic Sippy: The Fewest Clicks", marks:5,
    text:"For 56354, write the expression using the fewest clicks (the standard place-value breakdown), and count the total clicks.",
    answer:"(5x10000)+(6x1000)+(3x100)+(5x10)+(4x1) = 56354. Total clicks = 5+6+3+5+4 = 23" },

  { id:"q19", section:"Systematic Sippy: The Fewest Clicks", marks:5,
    text:"The textbook observes that the fewest-click expressions also give the Indian place-value notation. Explain in your own words WHY minimizing clicks always leads you to the digits of the number.",
    answer:"Because using a higher-value button (like +1000 instead of ten +100s) always reaches the same amount in fewer presses, the minimum-click solution will always use each button the same number of times as the actual digit in that place -- e.g. to add 5 thousands you press +1000 exactly 5 times (not +100 fifty times), which is precisely what the digit '5' in the thousands place means" },

  { id:"q20", section:"Systematic Sippy: The Fewest Clicks", marks:5,
    text:"You must make EXACTLY 30 button presses. What is the LARGEST 3-digit number you can make? What is the SMALLEST 3-digit number you can make? Show the button combination for each.",
    answer:"Largest: 993, using 8 presses of +100, 19 presses of +10, 3 presses of +1 (800+190+3=993, total presses=8+19+3=30). Smallest: 102, using 0 presses of +100, 8 presses of +10, 22 presses of +1 (0+80+22=102, total presses=8+22=30)" },

];
