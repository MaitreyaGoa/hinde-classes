// ============================================================
//  ws_goa_s7_math_20260708_01 — Std 7 Maths (Goa) — Large Numbers Around Us — Worksheet 4
//  Focus: Exact and Approximate Values
//  Date: 8 July 2026 (Wednesday)
//  20 questions · subjective/worked-out only · no MCQ
//  "answer" field is for the TEACHER'S reference only — worksheet.html
//  does not display it to students.
// ============================================================

window.worksheetQuestions = [

  { id:"q1", section:"Rounding Basics", marks:1,
    text:"Define \"rounding up\" and give one example situation where it's used.",
    answer:"Rounding up means the approximated number is MORE than the actual number, e.g. a principal ordering 750 sweets for 732 people (rounding up ensures enough for everyone)" },

  { id:"q2", section:"Rounding Basics", marks:1,
    text:"Define \"rounding down\" and give one example situation where it's used.",
    answer:"Rounding down means the approximated number is LESS than the actual number, e.g. a shopkeeper saying an item costing Rs.470 is 'around Rs.450' to sound more attractive to buyers" },

  { id:"q3", section:"Nearest Neighbours", marks:2,
    text:"Find the nearest thousand of 6,72,85,183.",
    answer:"6,72,85,000" },

  { id:"q4", section:"Nearest Neighbours", marks:2,
    text:"Find the nearest lakh of 6,72,85,183.",
    answer:"6,73,00,000" },

  { id:"q5", section:"Nearest Neighbours", marks:2,
    text:"Find the nearest crore of 6,72,85,183.",
    answer:"7,00,00,000" },

  { id:"q6", section:"Nearest Neighbours", marks:3,
    text:"Write all FIVE nearest neighbours (thousand, ten thousand, lakh, ten lakh, crore) of 3,87,69,957.",
    answer:"Nearest thousand: 3,87,70,000. Nearest ten thousand: 3,87,70,000. Nearest lakh: 3,88,00,000. Nearest ten lakh: 3,90,00,000. Nearest crore: 4,00,00,000" },

  { id:"q7", section:"Nearest Neighbours", marks:3,
    text:"Write all FIVE nearest neighbours of 29,05,32,481.",
    answer:"Nearest thousand: 29,05,32,000. Nearest ten thousand: 29,05,30,000. Nearest lakh: 29,05,00,000. Nearest ten lakh: 29,10,00,000. Nearest crore: 29,00,00,000" },

  { id:"q8", section:"Nearest Neighbours", marks:3,
    text:"I have a number for which all five nearest neighbours are 5,00,00,000. Give one possible value, and explain the range such numbers can fall in.",
    answer:"Example: 5,00,00,050. Since the tightest condition is 'nearest thousand', the number must be within 500 of 5,00,00,000, i.e. anywhere from 4,99,99,500 to 5,00,00,499 (1000 possible numbers) -- this range automatically satisfies the looser ten-thousand/lakh/ten-lakh/crore conditions too" },

  { id:"q9", section:"Estimating Sums and Differences", marks:3,
    text:"Roxie estimates 4,63,128 + 4,19,682 as 'near 8,00,000, more than 8,00,000.' Estu estimates 'near 9,00,000, less than 9,00,000.' Find the exact sum and state who was correct.",
    answer:"Exact sum = 8,82,810. Estu's estimate (near 9,00,000, less than it) is closer, since 8,82,810 is much nearer to 9,00,000 than to 8,00,000" },

  { id:"q10", section:"Estimating Sums and Differences", marks:3,
    text:"Will the sum in Q9 be greater than or less than 8,50,000? Explain your reasoning first, then verify with your answer.",
    answer:"Since both numbers (4,63,128 and 4,19,682) are each greater than 4,25,000, their sum must exceed 8,50,000. Verified: 8,82,810 > 8,50,000" },

  { id:"q11", section:"Estimating Sums and Differences", marks:4,
    text:"Find 14,63,128 minus 4,90,020. Roxie estimated 'near 10,00,000, less than it'; Estu estimated 'near 9,00,000, more than it.' Who was closer?",
    answer:"Exact difference = 9,73,108. Estu's estimate (near 9,00,000, more than it) is closer" },

  { id:"q12", section:"Estimating Sums and Differences", marks:4,
    text:"Will the difference in Q11 be greater than or less than 9,50,000? Explain your reasoning, then verify.",
    answer:"14,63,128 is a little more than 14,50,000 and 4,90,020 is a little less than 5,00,000, so the difference should be a little more than 9,50,000. Verified: 9,73,108 > 9,50,000" },

  { id:"q13", section:"Reading Population Data", marks:4,
    text:"Mumbai's population: 2011 = 1,24,42,373, 2001 = 1,19,78,450. Round both to the nearest lakh, then find the approximate increase.",
    answer:"2011 rounds to 1,24,00,000; 2001 rounds to 1,20,00,000. Approximate increase = 4,00,000 (the exact increase is 4,63,923)" },

  { id:"q14", section:"Reading Population Data", marks:4,
    text:"Vadodara's population: 2001 = 16,90,000, 2011 = 35,52,371. Has it more than doubled? Show your reasoning.",
    answer:"Double of 16,90,000 = 33,80,000. Since 35,52,371 > 33,80,000, yes, Vadodara's population has more than doubled" },

  { id:"q15", section:"Reading Population Data", marks:4,
    text:"By approximately what number should Patna's 2011 population (16,84,222) be multiplied to get close to Mumbai's 2011 population (1,24,42,373)? Show your estimation.",
    answer:"1,24,42,373 / 16,84,222 is approximately 7.4, so multiplying Patna's population by about 7 (or 7.5) gives a number close to Mumbai's" },

  { id:"q16", section:"Why Rounding Matters", marks:5,
    text:"A school has 732 people. The principal rounds UP to order 750 sweets rather than rounding down to 700. Explain why rounding up makes more practical sense here.",
    answer:"If the principal rounded down to 700, there wouldn't be enough sweets for all 732 people. Rounding up ensures a small safety margin so nobody is left out -- practical situations involving supplies for people usually call for rounding up" },

  { id:"q17", section:"Why Rounding Matters", marks:5,
    text:"A shopkeeper says an item costing Rs.470 is 'around Rs.450' rather than 'around Rs.500.' Explain why rounding down makes more practical sense for the shopkeeper.",
    answer:"Saying 'around Rs.450' makes the item sound cheaper and more attractive to a buyer than saying 'around Rs.500,' even though both are approximations -- rounding down here serves the shopkeeper's interest in making the price seem more appealing" },

  { id:"q18", section:"Why Rounding Matters", marks:5,
    text:"Give one real-life example each (different from the chapter's own) for: (a) rounding UP is appropriate, (b) rounding DOWN is appropriate, (c) either rounding is fine, (d) an EXACT number is essential.",
    answer:"Open-ended, accept reasonable examples, e.g.: (a) buying enough paint for a room -- round up the area estimate so you don't run short. (b) estimating travel time to reassure someone you'll be quick. (c) describing a crowd size at a casual event. (d) the amount of medicine dosage prescribed to a patient" },

  { id:"q19", section:"Why Rounding Matters", marks:5,
    text:"Using the population table, which city's population grew MOST in absolute numbers between 2001-2011 -- Mumbai, New Delhi, or Bengaluru? Show your subtraction for all three.",
    answer:"Mumbai: 1,24,42,373 - 1,19,78,450 = 4,63,923. New Delhi: 1,10,07,835 - 98,79,172 = 11,28,663. Bengaluru: 84,25,970 - 43,01,326 = 41,24,644. Bengaluru grew the most in absolute numbers" },

  { id:"q20", section:"Why Rounding Matters", marks:5,
    text:"A headline says '1 lakh people visited the book fair,' but the true number might be exactly 1,00,000, or might be anywhere from 95,000 to 1,04,999 if rounded to the nearest lakh. Why does the level of rounding matter for how we interpret such headlines?",
    answer:"The 'level' of rounding (nearest lakh vs. nearest thousand, for instance) determines how wide a range of true values could be hiding behind a rounded headline number -- a number rounded to the nearest lakh could be off by up to 50,000 in either direction, while a number rounded to the nearest thousand would be far more precise. Readers need to know the rounding level to judge how much to trust the exact figure implied by a headline" },

];
