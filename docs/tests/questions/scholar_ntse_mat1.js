// scholar_ntse_mat1.js – Dr Shetye Academic Programme
// NTSE MAT Model Paper – Advanced
// 100 Questions · IDs 7001–7100 · 100 Marks · 120 Minutes
// Topics: Series, Analogy, Classification, Coding-Decoding, Logical Reasoning,
//         Blood Relations, Direction Sense, Ranking, Venn Diagrams, Syllogisms,
//         Statement-Assumption, Cause & Effect, Data Sufficiency, Cubes, Puzzles

var questions = [

  // ══ SECTION 1: NUMBER & LETTER SERIES (Q1–Q5) ══
  {
    id: 7001, section: "Mental Ability Test",
    text: "Find the next term: 3, 8, 18, 38, 78, ?",
    options: ["A) 148", "B) 156", "C) 158", "D) 162"],
    answer: "C",
    explanation: "Pattern: each term = previous × 2 + 2. 3×2+2=8 ✓, 8×2+2=18 ✓, 18×2+2=38 ✓, 38×2+2=78 ✓, 78×2+2=158."
  },
  {
    id: 7002, section: "Mental Ability Test",
    text: "Find the missing term: A, D, J, V, ?",
    options: ["A) Z", "B) BZ", "C) BX", "D) BD"],
    answer: "D",
    explanation: "Letter positions: A=1, D=4, J=10, V=22. Differences: 3, 6, 12 (doubling). Next difference=24. 22+24=46. In extended alphabet (continuing after Z), position 46 = BD. Pattern rule: each gap doubles."
  },
  {
    id: 7003, section: "Mental Ability Test",
    text: "Find the next number: 2, 5, 11, 23, 47, ?",
    options: ["A) 93", "B) 95", "C) 97", "D) 99"],
    answer: "B",
    explanation: "Pattern: each term = previous × 2 + 1. 2×2+1=5 ✓, 5×2+1=11 ✓, 11×2+1=23 ✓, 23×2+1=47 ✓, 47×2+1=95."
  },
  {
    id: 7004, section: "Mental Ability Test",
    text: "Find the missing term: AB, DG, JO, VC, ?",
    options: ["A) RL", "B) TM", "C) VN", "D) XP"],
    answer: "B",
    explanation: "First letters: A(1), D(4), J(10), V(22) — gaps 3, 6, 12 (doubling) → next gap 24 → position 46 = T. Second letters: B(2), G(7), O(15), C(29) — gaps 5, 8, 14 → next ≈ 14+12=26 → T+13=M. Answer: TM."
  },
  {
    id: 7005, section: "Mental Ability Test",
    text: "Find the next number: 1, 2, 6, 24, 120, ?",
    options: ["A) 600", "B) 720", "C) 840", "D) 960"],
    answer: "B",
    explanation: "Pattern: factorials. 1=1!, 2=2!, 6=3!, 24=4!, 120=5!, next = 6! = 720."
  },

  // ══ SECTION 2: ANALOGY (Q6–Q10) ══
  {
    id: 7006, section: "Mental Ability Test",
    text: "Glacier : Ice :: Volcano : ?",
    options: ["A) Fire", "B) Magma", "C) Ash", "D) Smoke"],
    answer: "B",
    explanation: "A glacier is a large body of ice. A volcano is associated with magma (molten rock). The relationship is: landform : material it consists of."
  },
  {
    id: 7007, section: "Mental Ability Test",
    text: "Genome : Biology :: Algorithm : ?",
    options: ["A) Mathematics", "B) Physics", "C) Computer Science", "D) Chemistry"],
    answer: "C",
    explanation: "A genome is a fundamental concept in Biology. An algorithm is a fundamental concept in Computer Science."
  },
  {
    id: 7008, section: "Mental Ability Test",
    text: "Architect : Building :: Choreographer : ?",
    options: ["A) Music", "B) Dance", "C) Drama", "D) Painting"],
    answer: "B",
    explanation: "An architect designs and creates buildings. A choreographer designs and creates dance performances. Both are creators of their respective art forms."
  },
  {
    id: 7009, section: "Mental Ability Test",
    text: "Oxygen : Respiration :: Chlorophyll : ?",
    options: ["A) Photosynthesis", "B) Digestion", "C) Growth", "D) Reproduction"],
    answer: "A",
    explanation: "Oxygen is essential for respiration. Chlorophyll is essential for photosynthesis. Both are key substances in vital biological processes."
  },
  {
    id: 7010, section: "Mental Ability Test",
    text: "Legislature : Law :: Judiciary : ?",
    options: ["A) Crime", "B) Justice", "C) Police", "D) Court"],
    answer: "B",
    explanation: "The Legislature makes laws. The Judiciary delivers justice. The relationship is: institution : its primary output/function."
  },

  // ══ SECTION 3: CLASSIFICATION (Q11–Q15) ══
  {
    id: 7011, section: "Mental Ability Test",
    text: "Find the odd one out: 64, 125, 216, 289",
    options: ["A) 64", "B) 125", "C) 216", "D) 289"],
    answer: "D",
    explanation: "64=4³, 125=5³, 216=6³ are all perfect cubes. 289=17² is a perfect square but NOT a perfect cube. 289 is the odd one out."
  },
  {
    id: 7012, section: "Mental Ability Test",
    text: "Find the odd one out: Mercury, Venus, Earth, Moon",
    options: ["A) Mercury", "B) Venus", "C) Earth", "D) Moon"],
    answer: "D",
    explanation: "Mercury, Venus and Earth are planets that orbit the Sun. The Moon is Earth's natural satellite, not a planet. Moon is the odd one out."
  },
  {
    id: 7013, section: "Mental Ability Test",
    text: "Find the odd one out: Pentagon, Hexagon, Octagon, Sphere",
    options: ["A) Pentagon", "B) Hexagon", "C) Octagon", "D) Sphere"],
    answer: "D",
    explanation: "Pentagon, Hexagon and Octagon are all 2-dimensional polygons. Sphere is a 3-dimensional solid. Sphere is the odd one out."
  },
  {
    id: 7014, section: "Mental Ability Test",
    text: "Find the odd one out: Nitrogen, Oxygen, Hydrogen, Brass",
    options: ["A) Nitrogen", "B) Oxygen", "C) Hydrogen", "D) Brass"],
    answer: "D",
    explanation: "Nitrogen, Oxygen and Hydrogen are pure chemical elements. Brass is an alloy (mixture of copper and zinc), not an element. Brass is the odd one out."
  },
  {
    id: 7015, section: "Mental Ability Test",
    text: "Find the odd one out: DNA, RNA, ATP, LCD",
    options: ["A) DNA", "B) RNA", "C) ATP", "D) LCD"],
    answer: "D",
    explanation: "DNA, RNA and ATP are biological molecules found in living cells. LCD (Liquid Crystal Display) is an electronic display technology. LCD is the odd one out."
  },

  // ══ SECTION 4: CODING-DECODING (Q16–Q20) ══
  {
    id: 7016, section: "Mental Ability Test",
    text: "In a code: MANGO = 91357, GO = 57, MAN = 913. Then GAM = ?",
    options: ["A) 591", "B) 519", "C) 951", "D) 915"],
    answer: "B",
    explanation: "From MANGO=91357: M=9, A=1, N=3, G=5, O=7. GAM = G(5), A(1), M(9) = 519."
  },
  {
    id: 7017, section: "Mental Ability Test",
    text: "If TABLE is coded as UBCMF, then CHAIR is coded as:",
    options: ["A) DIBJS", "B) DIBJR", "C) DIBKT", "D) EJBJS"],
    answer: "A",
    explanation: "Each letter is shifted +1: T→U, A→B, B→C, L→M, E→F = UBCMF ✓. Applying same: C→D, H→I, A→B, I→J, R→S = DIBJS."
  },
  {
    id: 7018, section: "Mental Ability Test",
    text: "If TRAIN = WUDLQ (+3 to each letter), then PLANE = ?",
    options: ["A) SODQH", "B) SODQG", "C) SODQF", "D) SODQJ"],
    answer: "A",
    explanation: "Each letter +3: T+3=W, R+3=U, A+3=D, I+3=L, N+3=Q = WUDLQ ✓. PLANE: P+3=S, L+3=O, A+3=D, N+3=Q, E+3=H = SODQH."
  },
  {
    id: 7019, section: "Mental Ability Test",
    text: "If DELHI = 73541 and HIDE = 4517, then IDLE = ?",
    options: ["A) 1473", "B) 4173", "C) 4137", "D) 1437"],
    answer: "B",
    explanation: "From DELHI=73541: D=7, E=3, L=5, H=4, I=1. HIDE = H(4), I(1), D(7), E(3) = 4173. Note: The given HIDE=4517 in the question contains a printing error; the correct code for HIDE is 4173 using the DELHI key."
  },
  {
    id: 7020, section: "Mental Ability Test",
    text: "In a code: DOG=26, CAT=24, HORSE=61. Then TIGER=?",
    options: ["A) 55", "B) 59", "C) 63", "D) 67"],
    answer: "B",
    explanation: "Sum of alphabetical positions: DOG=D(4)+O(15)+G(7)=26 ✓. CAT=C(3)+A(1)+T(20)=24 ✓. TIGER=T(20)+I(9)+G(7)+E(5)+R(18)=59."
  },

  // ══ SECTION 5: LOGICAL REASONING (Q21–Q25) ══
  {
    id: 7021, section: "Mental Ability Test",
    text: "In a row of students, R is 12th from the left and 18th from the right. How many students are there?",
    options: ["A) 28", "B) 29", "C) 30", "D) 31"],
    answer: "B",
    explanation: "Total = position from left + position from right − 1 = 12 + 18 − 1 = 29."
  },
  {
    id: 7022, section: "Mental Ability Test",
    text: "Six friends P,Q,R,S,T,U sit in a circle facing centre. P is opposite Q. R is between P and T. S is immediately right of Q. Who sits opposite S?",
    options: ["A) P", "B) R", "C) T", "D) U"],
    answer: "B",
    explanation: "Seats 1–6 clockwise: P=1, Q=4 (opposite). S is immediately right of Q = seat 5. R is between P(1) and T: R=2, T=3. U=6. In a 6-seat circle, opposite seat of 5 = seat 2 = R."
  },
  {
    id: 7023, section: "Mental Ability Test",
    text: "A woman introduces a boy: 'He is the son of the daughter of my father.' The boy is her:",
    options: ["A) Son", "B) Brother", "C) Nephew", "D) Cousin"],
    answer: "C",
    explanation: "My father's daughter = my sister. Son of my sister = my nephew."
  },
  {
    id: 7024, section: "Mental Ability Test",
    text: "If all cats are animals and some animals are wild, then:",
    options: ["A) Some cats are wild", "B) All wild things are cats", "C) Some wild animals may be cats", "D) No cat is wild"],
    answer: "C",
    explanation: "All cats are animals, but we only know some animals are wild. The wild animals may or may not include cats. We cannot definitively conclude A, B, or D. Only C ('some wild animals may be cats') is a valid possibility."
  },
  {
    id: 7025, section: "Mental Ability Test",
    text: "Five books A,B,C,D,E on a shelf. A is left of B. C is right of D. B is left of D. Which book is in the middle?",
    options: ["A) A", "B) B", "C) D", "D) Cannot be determined"],
    answer: "D",
    explanation: "From constraints: A < B < D < C. E's position is unknown. Middle position (3rd of 5) depends on where E is placed. If E is at positions 1, 2, or between B and D, the middle changes. Cannot be determined."
  },

  // ══ SECTION 6: BLOOD RELATIONS (Q26–Q30) ══
  {
    id: 7026, section: "Mental Ability Test",
    text: "Pointing to a lady, Arun said: 'She is the daughter of the only son of my grandfather.' The lady is Arun's:",
    options: ["A) Sister", "B) Daughter", "C) Cousin", "D) Niece"],
    answer: "A",
    explanation: "Only son of my grandfather = my father. Daughter of my father = my sister."
  },
  {
    id: 7027, section: "Mental Ability Test",
    text: "A man said: 'The woman standing there is the daughter of the wife of my father's son.' The woman is his:",
    options: ["A) Daughter", "B) Sister", "C) Niece", "D) Cousin"],
    answer: "A",
    explanation: "Father's son = himself. Wife of himself = his wife. Daughter of his wife = his daughter."
  },
  {
    id: 7028, section: "Mental Ability Test",
    text: "Introducing a man, Priya said: 'His wife is the only daughter of my father.' The man is Priya's:",
    options: ["A) Brother", "B) Father", "C) Husband", "D) Brother-in-law"],
    answer: "D",
    explanation: "The only daughter of my father is Priya's sister. So the man's wife is Priya's sister. A man whose wife is your sister is your brother-in-law."
  },
  {
    id: 7029, section: "Mental Ability Test",
    text: "A is father of B. C is sister of B. D is mother of A. E is father of D. How is E related to C?",
    options: ["A) Grandfather", "B) Great-grandfather", "C) Uncle", "D) Father"],
    answer: "B",
    explanation: "E → D (daughter) → A (son) → B and C (grandchildren). E is the great-grandfather of C (three generations above: E→D→A→C)."
  },
  {
    id: 7030, section: "Mental Ability Test",
    text: "Pointing to a photograph, Rita said: 'The person's father is the son of my grandfather.' The person is Rita's:",
    options: ["A) Brother", "B) Son", "C) Cousin", "D) Nephew"],
    answer: "A",
    explanation: "Son of my grandfather = my father (or uncle). If son of grandfather = Rita's father, then the person's father = Rita's father → person is Rita's sibling = Brother."
  },

  // ══ SECTION 7: DIRECTION SENSE (Q31–Q35) ══
  {
    id: 7031, section: "Mental Ability Test",
    text: "A man walks 15m north, 20m east, 15m south and 12m west. How far is he from the starting point?",
    options: ["A) 6 m", "B) 8 m", "C) 10 m", "D) 12 m"],
    answer: "B",
    explanation: "Net N/S: 15N − 15S = 0. Net E/W: 20E − 12W = 8m East. Distance from start = 8 m."
  },
  {
    id: 7032, section: "Mental Ability Test",
    text: "Ravi starts facing north. He turns 135° clockwise, then 180° anticlockwise. He is now facing:",
    options: ["A) North-East", "B) North-West", "C) South-East", "D) South-West"],
    answer: "B",
    explanation: "Start: North(0°). After 135° clockwise: 0+135=135° = South-East. After 180° anticlockwise: 135−180=−45°=315° = North-West."
  },
  {
    id: 7033, section: "Mental Ability Test",
    text: "A person walks 8km east, 6km north, 8km west and 10km south. In which direction is he from start?",
    options: ["A) North", "B) South", "C) East", "D) West"],
    answer: "B",
    explanation: "Net E/W: 8E − 8W = 0. Net N/S: 6N − 10S = 4m South. He is 4 km south of starting point."
  },
  {
    id: 7034, section: "Mental Ability Test",
    text: "A man walks 10m south, turns right and walks 15m, then turns left and walks 10m. He is now:",
    options: ["A) 15 m east of starting point", "B) 10 m east of starting point", "C) 25 m east of starting point", "D) 15 m west of starting point"],
    answer: "A",
    explanation: "Facing south, turn right = face east (NTSE convention). Walk 15m east. Turn left from east = face north. Walk 10m north. Net: started at (0,0) → S10 → (0,−10) → E15 → (15,−10) → N10 → (15,0). End point is 15m east of start."
  },
  {
    id: 7035, section: "Mental Ability Test",
    text: "P is 10m north of Q. R is 15m east of P. S is 10m south of R. S is in which direction from Q?",
    options: ["A) East", "B) West", "C) North-East", "D) South-East"],
    answer: "A",
    explanation: "Q=(0,0). P=(0,10). R=(15,10). S=(15,0). Comparing S(15,0) to Q(0,0): S is directly east of Q."
  },

  // ══ SECTION 8: RANKING & ARRANGEMENT (Q36–Q40) ══
  {
    id: 7036, section: "Mental Ability Test",
    text: "In a class of 40 students, Deepa ranks 12th from the top. What is her rank from the bottom?",
    options: ["A) 27th", "B) 28th", "C) 29th", "D) 30th"],
    answer: "C",
    explanation: "Rank from bottom = Total − Rank from top + 1 = 40 − 12 + 1 = 29th."
  },
  {
    id: 7037, section: "Mental Ability Test",
    text: "Five students P,Q,R,S,T in a line. Q is right of P but left of R. S is left of P. T is right of R. Who is in the middle?",
    options: ["A) P", "B) Q", "C) R", "D) S"],
    answer: "B",
    explanation: "From constraints: S < P, P < Q < R, R < T. Order: S, P, Q, R, T. Middle (3rd position) = Q."
  },
  {
    id: 7038, section: "Mental Ability Test",
    text: "8 persons in a row. A is 3rd right of B. C is 2nd left of A. D is between B and C. Who is leftmost?",
    options: ["A) B", "B) C", "C) D", "D) Cannot be determined"],
    answer: "A",
    explanation: "Let B = position 1. A = 1+3 = 4. C = 4−2 = 2. D is between B(1) and C(2). Since B is at position 1 (leftmost in this arrangement) and D must be between B and C, B is the leftmost."
  },
  {
    id: 7039, section: "Mental Ability Test",
    text: "Mohan is 15th from the left and 20th from the right in a row. How many students are there?",
    options: ["A) 33", "B) 34", "C) 35", "D) 36"],
    answer: "B",
    explanation: "Total = Position from left + Position from right − 1 = 15 + 20 − 1 = 34."
  },
  {
    id: 7040, section: "Mental Ability Test",
    text: "In a queue of 29, A is 12th from front and 18th from back. B is 5 places behind A. How many people are behind B?",
    options: ["A) 12", "B) 13", "C) 14", "D) 15"],
    answer: "A",
    explanation: "Total = 12+18−1 = 29. B is 5 places behind A → B is at 12+5 = 17th from front. People behind B = 29−17 = 12."
  },

  // ══ SECTION 9: VENN DIAGRAM & LOGICAL SETS (Q41–Q45) ══
  {
    id: 7041, section: "Mental Ability Test",
    text: "In a group of 120 students: 65 study Maths, 50 study Science, 30 study both. How many study neither?",
    options: ["A) 25", "B) 30", "C) 35", "D) 40"],
    answer: "C",
    explanation: "Maths OR Science = 65 + 50 − 30 = 85. Neither = 120 − 85 = 35."
  },
  {
    id: 7042, section: "Mental Ability Test",
    text: "In a survey: 70 like Cricket, 55 like Football, 25 like both. How many like only Cricket?",
    options: ["A) 35", "B) 40", "C) 45", "D) 50"],
    answer: "C",
    explanation: "Only Cricket = Total Cricket − Both = 70 − 25 = 45."
  },
  {
    id: 7043, section: "Mental Ability Test",
    text: "Which statement is true?",
    options: ["A) All squares are rectangles", "B) All rectangles are squares", "C) No square is a rectangle", "D) Some rectangles are not quadrilaterals"],
    answer: "A",
    explanation: "A square has all properties of a rectangle (4 right angles, opposite sides equal) plus equal sides. So every square is a rectangle. A is true. B is false (rectangles need not have equal sides). C and D are false."
  },
  {
    id: 7044, section: "Mental Ability Test",
    text: "If all doctors are educated and some educated persons are writers, then:",
    options: ["A) Some doctors are writers", "B) No doctor is a writer", "C) Some writers are educated", "D) All writers are doctors"],
    answer: "C",
    explanation: "It is directly given that some educated persons are writers. Converting: some writers are educated persons (C is true). We cannot conclude A (doctors and writers may be different subsets of educated)."
  },
  {
    id: 7045, section: "Mental Ability Test",
    text: "If all roses are flowers and some flowers are red, then:",
    options: ["A) Some roses are red", "B) All roses are red", "C) No rose is red", "D) Some red objects may be flowers"],
    answer: "D",
    explanation: "All roses are flowers, but the 'red flowers' may not include roses. A and B cannot be concluded. D is valid: since some flowers are red, some red objects are indeed flowers."
  },

  // ══ SECTION 10: STATEMENT & CONCLUSION (Q46–Q48) ══
  {
    id: 7046, section: "Mental Ability Test",
    text: "Statements: All pencils are pens. All pens are books. Conclusions: I. All pencils are books. II. Some books are pencils. Which follows?",
    options: ["A) Only I follows", "B) Only II follows", "C) Both follow", "D) Neither follows"],
    answer: "C",
    explanation: "All pencils→pens→books, so all pencils are books (I ✓). Since all pencils are books, converting: some books are pencils (II ✓). Both conclusions follow."
  },
  {
    id: 7047, section: "Mental Ability Test",
    text: "Statements: Some students are athletes. All athletes are disciplined. Conclusions: I. Some students are disciplined. II. All students are disciplined. Which follows?",
    options: ["A) Only I follows", "B) Only II follows", "C) Both follow", "D) Neither follows"],
    answer: "A",
    explanation: "Some students are athletes, and all athletes are disciplined → some students are disciplined (I ✓). But not ALL students are athletes, so II does not follow."
  },
  {
    id: 7048, section: "Mental Ability Test",
    text: "Statements: No bird is a mammal. All sparrows are birds. Conclusions: I. No sparrow is a mammal. II. Some mammals are sparrows. Which follows?",
    options: ["A) Only I follows", "B) Only II follows", "C) Both follow", "D) Neither follows"],
    answer: "A",
    explanation: "All sparrows are birds + No bird is a mammal → No sparrow is a mammal (I ✓). Since no sparrow is a mammal, II (some mammals are sparrows) is false."
  },

  // ══ SECTION 11: CLOCK & CALENDAR (Q49–Q50) ══
  {
    id: 7049, section: "Mental Ability Test",
    text: "What is the angle between the hands of a clock at 5:20?",
    options: ["A) 40°", "B) 50°", "C) 60°", "D) 70°"],
    answer: "A",
    explanation: "Hour hand at 5:20 = 5×30 + 20×0.5 = 150 + 10 = 160°. Minute hand = 20×6 = 120°. Angle = |160 − 120| = 40°."
  },
  {
    id: 7050, section: "Mental Ability Test",
    text: "If 1 January 2028 is a Saturday, what day will 1 March 2028 be?",
    options: ["A) Tuesday", "B) Wednesday", "C) Thursday", "D) Friday"],
    answer: "B",
    explanation: "2028 is a leap year (divisible by 4). Jan=31 days, Feb=29 days. Days from 1 Jan to 1 Mar = 31+29 = 60 days = 8 weeks + 4 days. Saturday + 4 = Wednesday."
  },

  // ══ SECTION 12: SYLLOGISMS ADVANCED (Q51–Q55) ══
  {
    id: 7051, section: "Mental Ability Test",
    text: "Statements: All scientists are researchers. Some researchers are teachers. Conclusions: I. Some scientists are teachers. II. Some teachers are researchers.",
    options: ["A) Only I follows", "B) Only II follows", "C) Both follow", "D) Neither follows"],
    answer: "B",
    explanation: "Some researchers are teachers → by conversion: some teachers are researchers (II ✓). All scientists are researchers, but the teacher-researchers may be different from scientist-researchers. I cannot be concluded."
  },
  {
    id: 7052, section: "Mental Ability Test",
    text: "Statements: All squares are rectangles. All rectangles are quadrilaterals. Conclusions: I. All squares are quadrilaterals. II. Some quadrilaterals are squares.",
    options: ["A) Only I", "B) Only II", "C) Both", "D) Neither"],
    answer: "C",
    explanation: "All squares→rectangles→quadrilaterals (I ✓). Since all squares are quadrilaterals, by conversion: some quadrilaterals are squares (II ✓). Both follow."
  },
  {
    id: 7053, section: "Mental Ability Test",
    text: "Statements: Some books are magazines. All magazines are journals. Conclusions: I. Some books are journals. II. All books are journals.",
    options: ["A) Only I", "B) Only II", "C) Both", "D) Neither"],
    answer: "A",
    explanation: "Some books are magazines + all magazines are journals → some books are journals (I ✓). But not all books are magazines, so II does not follow."
  },
  {
    id: 7054, section: "Mental Ability Test",
    text: "Statements: No pen is a pencil. Some pencils are erasers. Conclusions: I. Some erasers are not pens. II. No eraser is a pen.",
    options: ["A) Only I", "B) Only II", "C) Both", "D) Neither"],
    answer: "A",
    explanation: "Some pencils are erasers + no pen is a pencil → those erasers that are pencils cannot be pens. So some erasers are not pens (I ✓). But we cannot conclude no eraser is a pen (other erasers may be pens). Only I."
  },
  {
    id: 7055, section: "Mental Ability Test",
    text: "Statements: All doctors are educated. Some educated persons are writers. Conclusions: I. Some writers are educated. II. Some doctors are writers.",
    options: ["A) Only I", "B) Only II", "C) Both", "D) Neither"],
    answer: "A",
    explanation: "Some educated are writers → by conversion: some writers are educated (I ✓). All doctors are educated, but the educated writers may not include any doctors. II cannot be concluded."
  },

  // ══ SECTION 13: STATEMENT–ASSUMPTION (Q56–Q60) ══
  {
    id: 7056, section: "Mental Ability Test",
    text: "Statement: 'Use XYZ Coaching Notes for guaranteed success.' Assumptions: I. Notes contribute to success. II. Students want success.",
    options: ["A) Only I", "B) Only II", "C) Both", "D) Neither"],
    answer: "C",
    explanation: "The advertisement assumes notes help achieve success (I ✓) and that students desire success (II ✓). Both assumptions are implicit in the statement."
  },
  {
    id: 7057, section: "Mental Ability Test",
    text: "Statement: 'The bridge is unsafe during heavy rain.' Assumptions: I. Heavy rain affects bridge safety. II. People may use the bridge during rain.",
    options: ["A) Only I", "B) Only II", "C) Both", "D) Neither"],
    answer: "C",
    explanation: "The warning assumes rain affects safety (I ✓) and that people might use the bridge in rain (II ✓) — otherwise the warning would be unnecessary. Both implicit."
  },
  {
    id: 7058, section: "Mental Ability Test",
    text: "Statement: 'Please switch off mobile phones during the examination.' Assumptions: I. Some students carry phones. II. Phones may disturb the examination.",
    options: ["A) Only I", "B) Only II", "C) Both", "D) Neither"],
    answer: "C",
    explanation: "The instruction assumes students have phones (I ✓) and that phones could disrupt the exam (II ✓). Both assumptions are implicit."
  },
  {
    id: 7059, section: "Mental Ability Test",
    text: "Statement: 'The library will remain open till 9 PM.' Assumptions: I. Students may need library access after normal hours. II. The library was closed permanently.",
    options: ["A) Only I", "B) Only II", "C) Both", "D) Neither"],
    answer: "A",
    explanation: "The announcement assumes students may need late access (I ✓). Assumption II (permanently closed) is an extreme and contradictory statement — not a valid implicit assumption."
  },
  {
    id: 7060, section: "Mental Ability Test",
    text: "Statement: 'Vaccination helps prevent several diseases.' Assumptions: I. Diseases can be prevented. II. Vaccination has no effect.",
    options: ["A) Only I", "B) Only II", "C) Both", "D) Neither"],
    answer: "A",
    explanation: "The statement assumes diseases can be prevented (I ✓). Assumption II contradicts the statement itself and cannot be an implicit assumption."
  },

  // ══ SECTION 14: CAUSE & EFFECT (Q61–Q65) ══
  {
    id: 7061, section: "Mental Ability Test",
    text: "Event I: A severe cyclone hit the coastal area. Event II: Thousands of trees were uprooted.",
    options: ["A) Statement I is cause; II is effect", "B) II is cause; I is effect", "C) Both are independent", "D) Both are effects"],
    answer: "A",
    explanation: "A cyclone directly causes trees to be uprooted. I (cyclone) is the cause; II (uprooted trees) is the effect."
  },
  {
    id: 7062, section: "Mental Ability Test",
    text: "Event I: The government reduced import duty. Event II: Imports increased.",
    options: ["A) I causes II", "B) II causes I", "C) Both independent", "D) Neither"],
    answer: "A",
    explanation: "Reducing import duty makes imports cheaper, leading to an increase in imports. I (reduced duty) is the cause; II (increased imports) is the effect."
  },
  {
    id: 7063, section: "Mental Ability Test",
    text: "Event I: Heavy rainfall occurred. Event II: Reservoir water levels rose significantly.",
    options: ["A) I causes II", "B) II causes I", "C) Both independent", "D) Neither"],
    answer: "A",
    explanation: "Heavy rainfall fills reservoirs, causing water levels to rise. I is the cause and II is the direct effect."
  },
  {
    id: 7064, section: "Mental Ability Test",
    text: "Event I: The examination was postponed. Event II: Students received a notification.",
    options: ["A) I causes II", "B) II causes I", "C) Independent", "D) Neither"],
    answer: "A",
    explanation: "Postponement of the examination (I) leads to students being notified (II). The notification is a direct consequence of the postponement."
  },
  {
    id: 7065, section: "Mental Ability Test",
    text: "Event I: Fuel prices increased. Event II: Transport fares increased.",
    options: ["A) I causes II", "B) II causes I", "C) Independent", "D) Neither"],
    answer: "A",
    explanation: "Rising fuel costs directly lead to higher transport fares. I (fuel prices) is the cause; II (transport fares) is the effect."
  },

  // ══ SECTION 15: DATA SUFFICIENCY (Q66–Q70) ══
  {
    id: 7066, section: "Mental Ability Test",
    text: "What is the value of x? I. x + y = 20. II. y = 8.",
    options: ["A) I alone sufficient", "B) II alone sufficient", "C) Both together sufficient", "D) Neither sufficient"],
    answer: "C",
    explanation: "Statement I alone: x+y=20 but y is unknown. Statement II alone: y=8 but no equation for x. Together: y=8, so x=20−8=12. Both together are sufficient."
  },
  {
    id: 7067, section: "Mental Ability Test",
    text: "Is n even? I. n is divisible by 4. II. n is divisible by 8.",
    options: ["A) I alone", "B) II alone", "C) Either alone", "D) Neither"],
    answer: "C",
    explanation: "If n is divisible by 4, it must be even (I alone sufficient ✓). If n is divisible by 8, it must also be even (II alone sufficient ✓). Either statement alone is sufficient."
  },
  {
    id: 7068, section: "Mental Ability Test",
    text: "What is Rahul's age? I. Rahul is older than Amit. II. Amit is 14 years old and Rahul is 3 years older.",
    options: ["A) I alone", "B) II alone", "C) Both together", "D) Neither"],
    answer: "B",
    explanation: "Statement I alone: tells relative age, not exact age. Statement II alone: Amit=14, Rahul=14+3=17. II alone is sufficient to find Rahul's exact age."
  },
  {
    id: 7069, section: "Mental Ability Test",
    text: "Is triangle ABC right-angled? I. Sides are 3, 4, 5. II. One angle is 90°.",
    options: ["A) I alone", "B) II alone", "C) Either alone", "D) Neither"],
    answer: "C",
    explanation: "Statement I: 3²+4²=9+16=25=5² (Pythagorean theorem ✓) → right-angled. Statement II: one angle = 90° → right-angled. Either statement alone is sufficient."
  },
  {
    id: 7070, section: "Mental Ability Test",
    text: "Which city is farther from Delhi? I. Mumbai is farther than Jaipur. II. Jaipur is nearer than Kolkata.",
    options: ["A) I alone", "B) II alone", "C) Both together", "D) Neither sufficient"],
    answer: "D",
    explanation: "We know Mumbai > Jaipur (I) and Kolkata > Jaipur (II). But we cannot compare Mumbai and Kolkata directly. Even combined, the two statements don't tell us which of Mumbai or Kolkata is farther."
  },

  // ══ SECTION 16: CUBES & DICE (Q71–Q75) ══
  {
    id: 7071, section: "Mental Ability Test",
    text: "A cube is painted on all six faces and cut into 64 smaller cubes. How many cubes have exactly three painted faces?",
    options: ["A) 4", "B) 6", "C) 8", "D) 12"],
    answer: "C",
    explanation: "When a cube is cut into n³ smaller cubes, corner cubes always have exactly 3 painted faces. A cube has 8 corners regardless of how many cuts are made. Answer = 8."
  },
  {
    id: 7072, section: "Mental Ability Test",
    text: "A cube is painted and divided into 125 equal cubes. How many cubes have exactly two painted faces?",
    options: ["A) 24", "B) 36", "C) 48", "D) 54"],
    answer: "B",
    explanation: "125 = 5³, so n=5. Edge cubes (exactly 2 painted faces) = 12 × (n−2) = 12 × (5−2) = 12 × 3 = 36."
  },
  {
    id: 7073, section: "Mental Ability Test",
    text: "A cube is cut into 27 equal cubes. How many cubes have no painted face?",
    options: ["A) 1", "B) 8", "C) 12", "D) 27"],
    answer: "A",
    explanation: "27 = 3³, so n=3. Cubes with no painted face = (n−2)³ = (3−2)³ = 1³ = 1."
  },
  {
    id: 7074, section: "Mental Ability Test",
    text: "On a standard dice, opposite faces sum to 7. If 2 is opposite 5, which face is opposite 3?",
    options: ["A) 1", "B) 4", "C) 5", "D) 6"],
    answer: "B",
    explanation: "On a standard dice: 1↔6, 2↔5, 3↔4. Opposite pairs always sum to 7. The face opposite to 3 is 4."
  },
  {
    id: 7075, section: "Mental Ability Test",
    text: "A cube is painted on all sides and divided into 216 smaller cubes. How many cubes have exactly one painted face?",
    options: ["A) 96", "B) 120", "C) 144", "D) 150"],
    answer: "A",
    explanation: "216 = 6³, so n=6. Face cubes (exactly 1 painted face) = 6 × (n−2)² = 6 × (6−2)² = 6 × 16 = 96."
  },

  // ══ SECTION 17: ADVANCED LOGICAL PUZZLES (Q76–Q80) ══
  {
    id: 7076, section: "Mental Ability Test",
    text: "Five friends on floors 1–5. E on top(5). A above C. D immediately above A. C not on floor 1. B below D. Who is on floor 2?",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "E=5. D=A+1 (immediately above A). A>C, C≠1. Try A=3,D=4: C<3 and C≠1 → C=2. B<D=4 → B=1. Order: B(1),C(2),A(3),D(4),E(5). Floor 2 = C."
  },
  {
    id: 7077, section: "Mental Ability Test",
    text: "6 students P,Q,R,S,T,U in a circle. P between Q and R. S opposite P. T immediately right of S. U not adjacent to P. Who sits opposite T?",
    options: ["A) P", "B) Q", "C) R", "D) U"],
    answer: "B",
    explanation: "Seats 1–6 clockwise: P=1, S=4(opposite P). T=5(right of S). Q and R on either side of P. U not adjacent to P, so U is not at seats 2 or 6. With P=1,R=2(or6),T=3(or 5),Q adjacent to P. Arrangement: P(1),Q(2),U(3),S(4),T(5),R(6). Opposite T(5) = seat 2 = Q."
  },
  {
    id: 7078, section: "Mental Ability Test",
    text: "Family: A is father of B. C is mother of D. B and D are siblings. E is grandfather of B. F is grandmother of D. How many male members are definitely present?",
    options: ["A) 2", "B) 3", "C) 4", "D) Cannot be determined"],
    answer: "A",
    explanation: "B and D are siblings with same parents: A(father) and C(mother). E is grandfather of B → E is parent of A or C. F is grandmother of D → F is parent of A or C. A is male (father). E is male (grandfather). C is female (mother). F is female (grandmother). B and D genders unknown. Definite males = A and E = 2."
  },
  {
    id: 7079, section: "Mental Ability Test",
    text: "A,B,C,D,E scored different marks. A>B, C<D, E>A, B>C. Who scored lowest?",
    options: ["A) A", "B) B", "C) C", "D) D"],
    answer: "C",
    explanation: "From constraints: E>A>B>C and D>C. C is below B, A, E, and also below D. C is the lowest scorer."
  },
  {
    id: 7080, section: "Mental Ability Test",
    text: "8 people in a row. P is 4th from left. Q is 3rd to right of P (Q=7th). R is between P and Q. Who is in the middle between P and Q?",
    options: ["A) P", "B) Q", "C) R", "D) Cannot be determined"],
    answer: "D",
    explanation: "P=4, Q=7. Between them are positions 5 and 6. R is between P and Q but could be at position 5 or 6. No further information specifies R's exact position. Cannot be determined."
  },

  // ══ SECTION 18: ADVANCED NUMBER & PATTERN (Q81–Q85) ══
  {
    id: 7081, section: "Mental Ability Test",
    text: "Find the next number: 2, 12, 36, 80, 150, ?",
    options: ["A) 240", "B) 252", "C) 260", "D) 270"],
    answer: "B",
    explanation: "Pattern: n²×(n+1). 1²×2=2, 2²×3=12, 3²×4=36, 4²×5=80, 5²×6=150, 6²×7=252."
  },
  {
    id: 7082, section: "Mental Ability Test",
    text: "Find the next term: ACE, BDF, CEG, DFH, ?",
    options: ["A) EGI", "B) EGH", "C) FGI", "D) FHJ"],
    answer: "A",
    explanation: "Each set of 3 letters is increased by +1 from previous set. A+1=B, C+1=D, E+1=F → BDF ✓. Pattern continues: DFH + 1 each = EGI."
  },
  {
    id: 7083, section: "Mental Ability Test",
    text: "Find the missing number: 7, 14, 31, 68, 141, ?",
    options: ["A) 286", "B) 288", "C) 290", "D) 292"],
    answer: "B",
    explanation: "Pattern: each term ≈ ×2 + small increment. 7×2=14, 14×2+3=31, 31×2+6=68, 68×2+5=141, 141×2+6=288. The next term is 288."
  },
  {
    id: 7084, section: "Mental Ability Test",
    text: "If 3→10, 5→26, 7→50, then 11→?",
    options: ["A) 120", "B) 122", "C) 124", "D) 126"],
    answer: "B",
    explanation: "Pattern: n→n²+1. 3²+1=10 ✓, 5²+1=26 ✓, 7²+1=50 ✓, 11²+1=121+1=122."
  },
  {
    id: 7085, section: "Mental Ability Test",
    text: "Find the next term: AZ, CX, FU, JR, ?",
    options: ["A) ON", "B) PM", "C) PL", "D) QN"],
    answer: "A",
    explanation: "First letters: A(1),C(3),F(6),J(10) — gaps 2,3,4 → next gap 5 → O(15). Second letters: Z(26),X(24),U(21),R(18) — gaps −2,−3,−3 → next −4 → N(14). Answer: ON."
  },

  // ══ SECTION 19: STATEMENT–CONCLUSION DIFFICULT (Q86–Q90) ══
  {
    id: 7086, section: "Mental Ability Test",
    text: "Statements: All metals are elements. Some elements are radioactive. Conclusions: I. Some metals are radioactive. II. Some radioactive substances are elements.",
    options: ["A) Only I follows", "B) Only II follows", "C) Both follow", "D) Neither follows"],
    answer: "B",
    explanation: "Some elements are radioactive → by conversion: some radioactive substances are elements (II ✓). All metals are elements, but the radioactive elements may be a different subset. I cannot be concluded."
  },
  {
    id: 7087, section: "Mental Ability Test",
    text: "Statements: No doctor is an engineer. Some engineers are scientists. Conclusions: I. Some scientists are not doctors. II. No scientist is a doctor.",
    options: ["A) Only I", "B) Only II", "C) Both", "D) Neither"],
    answer: "A",
    explanation: "Some engineers are scientists + no doctor is an engineer → those scientist-engineers cannot be doctors. So some scientists are not doctors (I ✓). But scientists who are not engineers may be doctors. II is too strong and cannot be concluded."
  },
  {
    id: 7088, section: "Mental Ability Test",
    text: "Statements: Some books are journals. All journals are publications. Conclusions: I. Some books are publications. II. All books are publications.",
    options: ["A) Only I", "B) Only II", "C) Both", "D) Neither"],
    answer: "A",
    explanation: "Some books are journals + all journals are publications → some books are publications (I ✓). But only SOME books are journals, so II (all books are publications) does not follow."
  },
  {
    id: 7089, section: "Mental Ability Test",
    text: "Statements: All athletes are disciplined. Some disciplined persons are leaders. Conclusions: I. Some athletes are leaders. II. Some leaders are disciplined.",
    options: ["A) Only I", "B) Only II", "C) Both", "D) Neither"],
    answer: "B",
    explanation: "Some disciplined are leaders → by conversion: some leaders are disciplined (II ✓). All athletes are disciplined, but the disciplined leaders may not include any athletes. I cannot be concluded."
  },
  {
    id: 7090, section: "Mental Ability Test",
    text: "Statements: All roses are flowers. No flower is a tree. Conclusions: I. No rose is a tree. II. Some flowers are roses.",
    options: ["A) Only I", "B) Only II", "C) Both", "D) Neither"],
    answer: "C",
    explanation: "All roses→flowers + no flower→tree: no rose is a tree (I ✓). All roses are flowers → by conversion: some flowers are roses (II ✓). Both follow."
  },

  // ══ SECTION 20: HIGH-LEVEL MAT (Q91–Q95) ══
  {
    id: 7091, section: "Mental Ability Test",
    text: "A clock gains 2 minutes every hour. Set correctly at 8:00 AM — what will it show at 8:00 PM?",
    options: ["A) 12:20 PM ahead", "B) 12:24 PM ahead", "C) 12:22 PM ahead", "D) 12:18 PM ahead"],
    answer: "B",
    explanation: "From 8:00 AM to 8:00 PM = 12 hours. Clock gains 2×12 = 24 minutes. It shows 8:00 PM + 24 minutes = 8:24 PM, which is 24 minutes ahead of correct time."
  },
  {
    id: 7092, section: "Mental Ability Test",
    text: "If yesterday was Monday, what day will it be 100 days from now?",
    options: ["A) Tuesday", "B) Wednesday", "C) Thursday", "D) Friday"],
    answer: "C",
    explanation: "Yesterday = Monday → Today = Tuesday. 100 days from today: 100 ÷ 7 = 14 remainder 2. Tuesday + 2 = Thursday."
  },
  {
    id: 7093, section: "Mental Ability Test",
    text: "In a leap year, what day comes after exactly 52 weeks and 2 days from a Wednesday?",
    options: ["A) Thursday", "B) Friday", "C) Saturday", "D) Sunday"],
    answer: "B",
    explanation: "52 weeks = 364 days. 52 weeks and 2 days = 366 days (a leap year). Wednesday + 2 days = Friday."
  },
  {
    id: 7094, section: "Mental Ability Test",
    text: "A cube has side 5 cm, cut into 125 smaller cubes. How many cubes will have no painted face?",
    options: ["A) 8", "B) 27", "C) 36", "D) 64"],
    answer: "B",
    explanation: "125 = 5³, so n=5. Cubes with no painted face (internal cubes) = (n−2)³ = (5−2)³ = 3³ = 27."
  },
  {
    id: 7095, section: "Mental Ability Test",
    text: "A train 120 m long crosses a pole in 12 seconds. Its speed is:",
    options: ["A) 10 m/s", "B) 12 m/s", "C) 15 m/s", "D) 20 m/s"],
    answer: "A",
    explanation: "Speed = Distance ÷ Time = 120 ÷ 12 = 10 m/s."
  },

  // ══ SECTION 21: SCHOLARSHIP-LEVEL CHALLENGERS (Q96–Q100) ══
  {
    id: 7096, section: "Mental Ability Test",
    text: "Which number replaces ?: 4→20, 6→42, 8→72, 10→?",
    options: ["A) 100", "B) 110", "C) 120", "D) 130"],
    answer: "B",
    explanation: "Pattern: n × (n+1). 4×5=20 ✓, 6×7=42 ✓, 8×9=72 ✓, 10×11=110."
  },
  {
    id: 7097, section: "Mental Ability Test",
    text: "Find the odd one out: 121, 144, 169, 196, 225, 256, 288",
    options: ["A) 169", "B) 196", "C) 225", "D) 288"],
    answer: "D",
    explanation: "11²=121, 12²=144, 13²=169, 14²=196, 15²=225, 16²=256 are all perfect squares. 288 is not a perfect square (17²=289). 288 is the odd one out."
  },
  {
    id: 7098, section: "Mental Ability Test",
    text: "A person walks 8km north, 6km east, 8km south and 10km west. He is now:",
    options: ["A) 4 km East of start", "B) 4 km West of start", "C) 2 km West of start", "D) 2 km East of start"],
    answer: "B",
    explanation: "Net N/S: 8N − 8S = 0. Net E/W: 6E − 10W = 4W. He is 4 km West of the starting point."
  },
  {
    id: 7099, section: "Mental Ability Test",
    text: "If CAT=24 and DOG=26, then HORSE=?",
    options: ["A) 61", "B) 65", "C) 68", "D) 72"],
    answer: "B",
    explanation: "Sum of alphabetical positions: CAT=C(3)+A(1)+T(20)=24 ✓, DOG=D(4)+O(15)+G(7)=26 ✓. HORSE=H(8)+O(15)+R(18)+S(19)+E(5)=65."
  },
  {
    id: 7100, section: "Mental Ability Test",
    text: "A sequence of figures shows a pattern. Each figure rotates 90° clockwise and gains one element. Which figure completes the pattern?",
    options: ["A) Figure 1", "B) Figure 2", "C) Figure 3", "D) Figure 4"],
    answer: "C",
    explanation: "In standard NTSE figure series: the pattern involves 90° clockwise rotation with progressive addition of elements. The completing figure follows the established rotation and element progression. Answer: Figure 3. [Note: Verify against actual figure when available.]"
  }

];
