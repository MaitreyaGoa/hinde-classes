// ============================================================
//  ws_goa_s7_math_20260713_01 — Std 7 Maths (Goa) — Large Numbers Around Us — Worksheet 6
//  Focus: Real-World Estimation and Number Puzzles
//  Date: 13 July 2026 (Monday)
//  20 questions · subjective/worked-out only · no MCQ
//  "answer" field is for the TEACHER'S reference only — worksheet.html
//  does not display it to students.
// ============================================================

window.worksheetQuestions = [

  { id:"q1", section:"Fascinating Facts About Large Numbers", marks:1,
    text:"Calculate 1250x380 (the number of kirtanas composed by Purandaradasa, per legend).",
    answer:"1250 x 380 = 4,75,000" },

  { id:"q2", section:"Fascinating Facts About Large Numbers", marks:1,
    text:"Calculate 2100x70,000 (approximate Earth-Sun distance in km).",
    answer:"2100 x 70,000 = 14,70,00,000 km" },

  { id:"q3", section:"Fascinating Facts About Large Numbers", marks:2,
    text:"Calculate 6400x62,500 (litres the Amazon discharges into the Atlantic every second).",
    answer:"6400 x 62,500 = 40,00,00,000 litres" },

  { id:"q4", section:"Fascinating Facts About Large Numbers", marks:2,
    text:"Calculate 13,95,000 divided by 150 (distance of the world's longest single-train journey, in km).",
    answer:"13,95,000 / 150 = 9,300 km" },

  { id:"q5", section:"Fascinating Facts About Large Numbers", marks:2,
    text:"Calculate 10,50,00,000 divided by 700 (approximate weight in kg an adult blue whale can weigh).",
    answer:"10,50,00,000 / 700 = 1,50,000 kg" },

  { id:"q6", section:"Fascinating Facts About Large Numbers", marks:2,
    text:"Calculate 52,00,00,00,000 divided by 130 (weight in tonnes of global plastic waste generated in 2021).",
    answer:"52,00,00,00,000 / 130 = 40,00,00,000 tonnes" },

  { id:"q7", section:"Making Sense of the Facts", marks:3,
    text:"Using your Q1 answer as total songs, if Purandaradasa composed from age 20 to age 80 (60 years), roughly how many songs per year would he need to compose?",
    answer:"4,75,000 / 60 is approximately 7,917 songs per year (about 22 songs a day!)" },

  { id:"q8", section:"Making Sense of the Facts", marks:3,
    text:"Assume a bus carries 50 people. Using Mumbai's 2011 population (1,24,42,373), could 1 lakh buses carry the entire population? Show your working.",
    answer:"1 lakh buses x 50 = 50,00,000 people capacity. Since 50,00,000 < 1,24,42,373, NO -- 1 lakh buses cannot carry Mumbai's entire population (about 2.49 lakh buses would actually be needed)" },

  { id:"q9", section:"Making Sense of the Facts", marks:3,
    text:"The RMS Titanic carried about 2500 passengers. Would 5000 such ships be enough to carry Mumbai's entire 2011 population? Show your working.",
    answer:"5000 x 2500 = 1,25,00,000 capacity. Since 1,25,00,000 > 1,24,42,373, YES -- 5000 Titanic-sized ships would (just barely) be enough" },

  { id:"q10", section:"Journeys to the Moon and Sun", marks:3,
    text:"The Earth-Moon distance is 3,84,400 km. If you travelled 100 km every day, how far in 1 year (365 days)? How far in 10 years?",
    answer:"1 year: 100 x 365 = 36,500 km. 10 years: 36,500 x 10 = 3,65,000 km" },

  { id:"q11", section:"Journeys to the Moon and Sun", marks:3,
    text:"Using your Q10 answer, would 10 years of travelling 100 km/day be enough to reach the Moon? By roughly how much would you fall short or exceed it?",
    answer:"3,65,000 km travelled vs 3,84,400 km needed -- NOT quite enough, falling short by 19,400 km" },

  { id:"q12", section:"Journeys to the Moon and Sun", marks:4,
    text:"Using your Q2 answer (Earth-Sun distance) and travelling 1000 km/day, roughly how many YEARS would it take to reach the Sun? Is this within a human lifetime?",
    answer:"14,70,00,000 km / 1000 km per day = 1,47,000 days. 1,47,000 / 365 is approximately 403 years -- this is FAR beyond a human lifetime" },

  { id:"q13", section:"Reasonable Assumptions", marks:4,
    text:"Make a reasonable assumption: if one sheet of paper weighs 5 grams, how much would one lakh sheets weigh (in kg)? Could an adult lift this all at once?",
    answer:"1,00,000 x 5 grams = 5,00,000 grams = 500 kg. No, an average adult cannot lift 500 kg at once -- this is far beyond typical human lifting capacity" },

  { id:"q14", section:"Reasonable Assumptions", marks:4,
    text:"Make a reasonable assumption: if 250 babies are born every minute worldwide, will a million babies be born in a day? Show your calculation.",
    answer:"250 x 60 x 24 = 3,60,000 babies per day. Since 3,60,000 is less than 10,00,000 (1 million), NO -- a million babies would not be born in a single day at this rate" },

  { id:"q15", section:"Reasonable Assumptions", marks:4,
    text:"Make a reasonable assumption: if you count 1 coin every second, can you count 1 million coins in a single 24-hour day? Show your calculation.",
    answer:"24 x 60 x 60 = 86,400 seconds in a day. Since 86,400 is far less than 10,00,000, NO -- you could not count 1 million coins in a single day at 1 coin/second (it would take about 11.6 days)" },

  { id:"q16", section:"Number Puzzles: Toothpick Digits and Beyond", marks:4,
    text:"Using Toothpick Digits (digit stick-costs: 0=6, 1=2, 5=5, 8=7), how many sticks are needed to write 5108 in total?",
    answer:"5(5 sticks) + 1(2 sticks) + 0(6 sticks) + 8(7 sticks) = 5+2+6+7 = 20 sticks" },

  { id:"q17", section:"Number Puzzles: Toothpick Digits and Beyond", marks:4,
    text:"42,019 needs exactly 23 sticks. Adding exactly TWO more sticks and rearranging gives 42,078 (a bigger number). Explain which digit changed, from what to what, and why this needed exactly 2 extra sticks. (Full stick-costs: 0=6,1=2,2=5,3=5,4=4,5=5,6=6,7=3,8=7,9=6)",
    answer:"The last two digits changed from '19' to '78'. Original cost of '19' = 2(for 1)+6(for 9) = 8 sticks. New cost of '78' = 3(for 7)+7(for 8) = 10 sticks. Difference = 10-8 = 2 extra sticks, matching exactly" },

  { id:"q18", section:"Number Puzzles: Toothpick Digits and Beyond", marks:4,
    text:"Write a 9-digit number where exchanging (swapping) ANY two digits always makes it bigger. How many such numbers exist? Explain your reasoning.",
    answer:"123456789 -- digits arranged in strictly increasing order. Only ONE such number exists: if any digit repeated, swapping two equal digits wouldn't change the number (not 'bigger'), so all 9 digits must be distinct; and 0 cannot be included since it would have to sit in the leftmost (smallest) position in ascending order, creating an invalid leading zero. This leaves exactly the digits 1-9 in ascending order as the only possibility" },

  { id:"q19", section:"Final Challenges", marks:5,
    text:"Strike out 10 digits from 12345123451234512345 (20 digits) so the remaining 10-digit number is as LARGE as possible. Write the result.",
    answer:"5534512345 (verified as the maximum possible 10-digit subsequence, checked against all 184,756 possible ways to choose 10 digits from the 20)" },

  { id:"q20", section:"Final Challenges", marks:5,
    text:"A bar-tailed godwit flew 13,560 km non-stop from Alaska to Australia over about 11 days. (a) Find the approximate distance covered per day. (b) Find the approximate distance covered per hour.",
    answer:"(a) 13,560 / 11 is approximately 1,233 km/day. (b) 1,233 / 24 is approximately 51.4 km/hour" },

];
