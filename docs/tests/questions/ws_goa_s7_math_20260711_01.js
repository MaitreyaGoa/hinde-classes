// ============================================================
//  ws_goa_s7_math_20260711_01 — Std 7 Maths (Goa) — Large Numbers Around Us — Worksheet 5
//  Focus: Patterns in Products: Multiplication Shortcuts
//  Date: 11 July 2026 (Saturday)
//  20 questions · subjective/worked-out only · no MCQ
//  "answer" field is for the TEACHER'S reference only — worksheet.html
//  does not display it to students.
// ============================================================

window.worksheetQuestions = [

  { id:"q1", section:"Multiplication Shortcuts", marks:1,
    text:"Using the shortcut (x5 = x10 / 2), evaluate 116x5.",
    answer:"116 x 10 / 2 = 1160 / 2 = 580" },

  { id:"q2", section:"Multiplication Shortcuts", marks:1,
    text:"Using the shortcut (x25 = x100 / 4), evaluate 824x25.",
    answer:"824 x 100 / 4 = 82400 / 4 = 20,600" },

  { id:"q3", section:"Multiplication Shortcuts", marks:2,
    text:"Explain why multiplying by 5 is the same as \"multiply by 10, then divide by 2.\"",
    answer:"5 = 10/2, so multiplying by 5 is the same as multiplying by 10 and then dividing by 2 (since x(10/2) = (x10)/2), and multiplying/dividing by 10 or 2 are both easy mental shortcuts" },

  { id:"q4", section:"Multiplication Shortcuts", marks:2,
    text:"Use a quick method to calculate 2x1768x50.",
    answer:"Regroup: 2x50=100, so 1768x100 = 1,76,800" },

  { id:"q5", section:"Multiplication Shortcuts", marks:2,
    text:"Use the hint 125=1000/8 to quickly calculate 72x125.",
    answer:"72 x 1000 / 8 = 72,000 / 8 = 9,000" },

  { id:"q6", section:"Multiplication Shortcuts", marks:2,
    text:"Quickly calculate 125x40x8x25 by regrouping the factors cleverly.",
    answer:"Regroup: (125x8) x (40x25) = 1000 x 1000 = 10,00,000" },

  { id:"q7", section:"Quick Calculation Patterns", marks:3,
    text:"Calculate quickly: (a) 25x12 (b) 25x240 (c) 250x120 (d) 2500x12. What relationship do you notice between (c) and (d)?",
    answer:"(a) 300 (b) 6,000 (c) 30,000 (d) 30,000. (c) and (d) are EQUAL -- both equal 25x1200 rearranged differently (250x120 = 25x10x120 = 25x1200; 2500x12 = 25x100x12 = 25x1200)" },

  { id:"q8", section:"Quick Calculation Patterns", marks:3,
    text:"Find two 'round' numbers (like Q7's pattern) whose product is exactly 120,000,000.",
    answer:"Example: 24,000 x 5,000 = 12,00,00,000 (many other valid pairs exist, e.g. 12,000 x 10,000)" },

  { id:"q9", section:"Interesting Number Patterns", marks:3,
    text:"Evaluate: 11x11, 111x111, 1111x1111. What pattern do you notice in the digits of the results?",
    answer:"11x11=121, 111x111=12321, 1111x1111=1234321. The digits count up from 1 to the number of 1s used and then back down -- a symmetric palindrome pattern" },

  { id:"q10", section:"Interesting Number Patterns", marks:3,
    text:"Evaluate: 3x5, 33x35, 333x335. Predict 3333x3335 WITHOUT fully multiplying -- describe the pattern you'd expect.",
    answer:"3x5=15, 33x35=1155, 333x335=1,11,555. The pattern shows the digit 1 repeated (n-1) times followed by the digit 5 repeated n times, where n is the number of digits in each factor. So 3333x3335 should give 1111 followed by 5555, i.e. 1,11,15,555 (verified: 3333x3335 = 1,11,15,555)" },

  { id:"q11", section:"Interesting Number Patterns", marks:3,
    text:"Evaluate: 101x101, 102x102, 103x103. What pattern do you notice as the numbers increase by 1 each time?",
    answer:"101x101=10,201; 102x102=10,404; 103x103=10,609. Each result increases by an odd number that itself increases by 2 each time (10,404-10,201=203; 10,609-10,404=205) -- following the algebraic pattern (n+1)^2 - n^2 = 2n+1" },

  { id:"q12", section:"Interesting Number Patterns", marks:4,
    text:"Evaluate: 66x61, 666x661, 6666x6661. What pattern do you notice?",
    answer:"66x61=4,026; 666x661=4,40,226; 6666x6661=4,44,02,226. The digit pattern grows systematically with more 4s at the start and more 2s before the final 6, reflecting the repeated-digit structure of the factors" },

  { id:"q13", section:"How Many Digits in a Product?", marks:4,
    text:"Roxie claims 'the product of two 2-digit numbers can only be a 3-digit or 4-digit number.' Verify using her method (smallest possible product vs largest possible product).",
    answer:"Smallest 2-digit x 2-digit = 10x10 = 100 (3-digit). Largest 2-digit x 2-digit = 99x99 = 9,801 (4-digit). So yes, all products of two 2-digit numbers fall between 100 and 9,801, meaning they are always 3-digit or 4-digit numbers -- Roxie is correct" },

  { id:"q14", section:"How Many Digits in a Product?", marks:4,
    text:"Using the same method, can a 3-digit number times a 3-digit number ever give a 4-digit number? Find the smallest and largest possible products to justify.",
    answer:"Smallest: 100x100 = 10,000 (5-digit). Largest: 999x999 = 9,98,001 (6-digit). Since even the SMALLEST possible product is already 5 digits, a 3-digit x 3-digit number can NEVER give a 4-digit number" },

  { id:"q15", section:"How Many Digits in a Product?", marks:4,
    text:"Can a 4-digit number times a 2-digit number ever give a 5-digit number? Show the smallest and largest possible products.",
    answer:"Smallest: 1000x10 = 10,000 (5-digit). Largest: 9999x99 = 9,89,901 (6-digit). Yes, a 4-digit x 2-digit product can be a 5-digit number (in fact the smallest possible case always is)" },

  { id:"q16", section:"The General Pattern", marks:5,
    text:"Complete: 5-digit x 5-digit = ___-digit or ___-digit. Show your working.",
    answer:"Smallest: 10000x10000 = 10,00,00,000 (9-digit). Largest: 99999x99999 = 99,99,80,00,01... (9,99,98,00,001, 10-digit). So: 9-digit or 10-digit" },

  { id:"q17", section:"The General Pattern", marks:5,
    text:"Complete: 8-digit x 3-digit = ___-digit or ___-digit. Show your working.",
    answer:"Smallest: 10000000x100 = 1,00,00,00,000 (10-digit). Largest: 99999999x999 (11-digit). So: 10-digit or 11-digit" },

  { id:"q18", section:"The General Pattern", marks:5,
    text:"Complete: 12-digit x 13-digit = ___-digit or ___-digit. Show your working.",
    answer:"Smallest product has 12+13-1 = 24 digits. Largest product has 12+13 = 25 digits. So: 24-digit or 25-digit" },

  { id:"q19", section:"The General Pattern", marks:5,
    text:"Based on all your patterns, write a GENERAL RULE: for an a-digit number x a b-digit number, what are the two possible digit-counts of the product, in terms of a and b?",
    answer:"The product always has either (a+b-1) digits or (a+b) digits" },

  { id:"q20", section:"The General Pattern", marks:5,
    text:"Using your general rule, without multiplying, state the possible digit-counts of a 15-digit number x a 20-digit number.",
    answer:"Using a+b-1 and a+b with a=15, b=20: the product has either 34 digits or 35 digits" },

];
