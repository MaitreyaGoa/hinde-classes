// ============================================================
//  config.js — Hinde Classes  |  hindeclasses.com
//  Bicholim, Goa  |  Maitreya Hinde  |  7358425108
//
//  HOW TO ADD A TEST:
//  1. Add entry to ALL_TESTS below
//  2. Create question file at questions/{id}.js
//  3. git add . && git commit -m "Add: {title}" && git push
//
//  section values → what section it appears in:
//    c56     Standard 5 & 6
//    c78     Standard 7 & 8
//    c910    Standard 9 & 10
//    c1112   Standard 11 & 12
//    daily   Daily Quiz
//    olm     Maths Olympiad
//    olsci   Science Olympiad
//    scholar Scholarship & NTSE
//
//  class values: "5","6","7","8","9","10","11","12","all"
//
//  live: true  = Start button shown
//  live: false = "Soon" shown (no button)
// ============================================================

var SCRIPT_URL = "https://script.google.com/macros/s/AKfycby_ApkIAQyAedZ_gGP-WL4QDfwrE5AaKWwdlzmHDYc3375ifmmSih92t3-qIHz7ykkiVw/exec";

var ALL_TESTS = [

  // ══════════════════════════════════════════════════════════
  //  📅  DAILY QUIZ
  //  ID format: dqDDMMYY  |  section: "daily"
  //  Password: dqDDMMYY (date-based, change daily)
  // ══════════════════════════════════════════════════════════

  {
    id:            "dq080626",
    title:         "Daily Quiz — Class 6–8 · 8 June 2026",
    subject:       "Mixed",
    class:         "all",
    section:       "daily",
    questions:     10,
    duration:      10,
    password:      "dq080626",
    live:          true,
    sections:      { "Mixed": 10 },
    totalMarks:    10,
    description:   "10 questions · Mixed · 10 min · Free!",
    questionsFile: "questions/dq080626.js"
  },
  {
    id:            "dq080626b",
    title:         "Daily Quiz — Class 9–10 · 8 June 2026",
    subject:       "Mixed",
    class:         "all",
    section:       "daily",
    questions:     10,
    duration:      10,
    password:      "dq080626b",
    live:          true,
    sections:      { "Mixed": 10 },
    totalMarks:    10,
    description:   "10 questions · Mixed · 10 min · Free!",
    questionsFile: "questions/dq080626b.js"
  },

  // ══════════════════════════════════════════════════════════
  //  📓  STANDARD 5  |  section: "c56"  |  class: "5"
  // ══════════════════════════════════════════════════════════

  {
    id:            "c5eng1",
    title:         "Class 5 English — Grammar Basics",
    subject:       "English",
    class:         "5",
    section:       "c56",
    questions:     20,
    duration:      25,
    password:      "c5eng1",
    live:          false,
    sections:      { "English": 20 },
    totalMarks:    20,
    description:   "20 questions · Chapter test · 25 min",
    questionsFile: "questions/c5eng1.js"
  },
  {
    id:            "c5mat1",
    title:         "Class 5 Maths — Fractions",
    subject:       "Maths",
    class:         "5",
    section:       "c56",
    questions:     20,
    duration:      25,
    password:      "c5mat1",
    live:          false,
    sections:      { "Maths": 20 },
    totalMarks:    20,
    description:   "20 questions · Chapter test · 25 min",
    questionsFile: "questions/c5mat1.js"
  },

  // ══════════════════════════════════════════════════════════
  //  📔  STANDARD 6  |  section: "c56"  |  class: "6"
  // ══════════════════════════════════════════════════════════

  {
    id:            "c6eng1",
    title:         "Class 6 English — Parts of Speech",
    subject:       "English",
    class:         "6",
    section:       "c56",
    questions:     20,
    duration:      25,
    password:      "c6eng1",
    live:          false,
    sections:      { "English": 20 },
    totalMarks:    20,
    description:   "20 questions · Chapter test · 25 min",
    questionsFile: "questions/c6eng1.js"
  },

  // ══════════════════════════════════════════════════════════
  //  📒  STANDARD 7  |  section: "c78"  |  class: "7"
  // ══════════════════════════════════════════════════════════

  {
    id:            "c7eng1",
    title:         "Class 7 English — Tenses",
    subject:       "English",
    class:         "7",
    section:       "c78",
    questions:     20,
    duration:      25,
    password:      "c7eng1",
    live:          true,
    sections:      { "English": 20 },
    totalMarks:    20,
    description:   "20 questions · Chapter test · 25 min",
    questionsFile: "questions/c7eng1.js"
  },
  {
    id:            "c7mat1",
    title:         "Class 7 Maths — Simple Equations",
    subject:       "Maths",
    class:         "7",
    section:       "c78",
    questions:     20,
    duration:      25,
    password:      "c7mat1",
    live:          true,
    sections:      { "Maths": 20 },
    totalMarks:    20,
    description:   "20 questions · Chapter test · 25 min",
    questionsFile: "questions/c7mat1.js"
  },
  {
    id:            "c7sci1",
    title:         "Class 7 Science — Nutrition in Plants",
    subject:       "Science",
    class:         "7",
    section:       "c78",
    questions:     20,
    duration:      25,
    password:      "c7sci1",
    live:          false,
    sections:      { "Science": 20 },
    totalMarks:    20,
    description:   "20 questions · Chapter test · 25 min",
    questionsFile: "questions/c7sci1.js"
  },

  // ══════════════════════════════════════════════════════════
  //  📙  STANDARD 8  |  section: "c78"  |  class: "8"
  // ══════════════════════════════════════════════════════════

  {
    id:            "c8eng1",
    title:         "Class 8 English — Active & Passive Voice",
    subject:       "English",
    class:         "8",
    section:       "c78",
    questions:     20,
    duration:      25,
    password:      "c8eng1",
    live:          false,
    sections:      { "English": 20 },
    totalMarks:    20,
    description:   "20 questions · Chapter test · 25 min",
    questionsFile: "questions/c8eng1.js"
  },
  {
    id:            "c8sci1",
    title:         "Class 8 Science — Microorganisms",
    subject:       "Science",
    class:         "8",
    section:       "c78",
    questions:     20,
    duration:      25,
    password:      "c8sci1",
    live:          true,
    sections:      { "Science": 20 },
    totalMarks:    20,
    description:   "20 questions · Chapter test · 25 min",
    questionsFile: "questions/c8sci1.js"
  },
  {
    id:            "c8mat1",
    title:         "Class 8 Maths — Linear Equations",
    subject:       "Maths",
    class:         "8",
    section:       "c78",
    questions:     20,
    duration:      25,
    password:      "c8mat1",
    live:          false,
    sections:      { "Maths": 20 },
    totalMarks:    20,
    description:   "20 questions · Chapter test · 25 min",
    questionsFile: "questions/c8mat1.js"
  },

  // ══════════════════════════════════════════════════════════
  //  📗  STANDARD 9  |  section: "c910"  |  class: "9"
  // ══════════════════════════════════════════════════════════

  {
    id:            "c9eng1",
    title:         "Class 9 English — Reading Comprehension",
    subject:       "English",
    class:         "9",
    section:       "c910",
    questions:     20,
    duration:      25,
    password:      "c9eng1",
    live:          false,
    sections:      { "English": 20 },
    totalMarks:    20,
    description:   "20 questions · Chapter test · 25 min",
    questionsFile: "questions/c9eng1.js"
  },
  {
    id:            "c9sci1",
    title:         "Class 9 Science — Force & Motion",
    subject:       "Science",
    class:         "9",
    section:       "c910",
    questions:     25,
    duration:      30,
    password:      "c9sci1",
    live:          true,
    sections:      { "Science": 25 },
    totalMarks:    25,
    description:   "25 questions · Chapter test · 30 min",
    questionsFile: "questions/c9sci1.js"
  },
  {
    id:            "c9mat1",
    title:         "Class 9 Maths — Number Systems",
    subject:       "Maths",
    class:         "9",
    section:       "c910",
    questions:     25,
    duration:      30,
    password:      "c9mat1",
    live:          false,
    sections:      { "Maths": 25 },
    totalMarks:    25,
    description:   "25 questions · Chapter test · 30 min",
    questionsFile: "questions/c9mat1.js"
  },
  {
    id:            "c9sst1",
    title:         "Class 9 SST — French Revolution",
    subject:       "Social Science",
    class:         "9",
    section:       "c910",
    questions:     20,
    duration:      25,
    password:      "c9sst1",
    live:          false,
    sections:      { "Social Science": 20 },
    totalMarks:    20,
    description:   "20 questions · Chapter test · 25 min",
    questionsFile: "questions/c9sst1.js"
  },
  // Class 9 Full Mock (shown in Standard 9 → Science tab as full mock)
  {
    id:            "sub_c9sci1",
    title:         "Class 9 Science — Half-Yearly Mock",
    subject:       "Science",
    class:         "9",
    section:       "c910",
    questions:     35,
    duration:      45,
    password:      "s9sci1",
    live:          false,
    sections:      { "Physics": 12, "Chemistry": 12, "Biology": 11 },
    totalMarks:    35,
    description:   "35 questions · Half-yearly pattern · 45 min",
    questionsFile: "questions/sub_c9sci1.js"
  },

  // ══════════════════════════════════════════════════════════
  //  📘  STANDARD 10  |  section: "c910"  |  class: "10"
  // ══════════════════════════════════════════════════════════

  {
    id:            "c10eng1",
    title:         "Class 10 English — Writing Skills & Grammar",
    subject:       "English",
    class:         "10",
    section:       "c910",
    questions:     25,
    duration:      30,
    password:      "c10eng1",
    live:          true,
    sections:      { "English": 25 },
    totalMarks:    25,
    description:   "25 questions · Chapter test · 30 min",
    questionsFile: "questions/c10eng1.js"
  },
  {
    id:            "c10mat1",
    title:         "Class 10 Maths — Quadratic Equations",
    subject:       "Maths",
    class:         "10",
    section:       "c910",
    questions:     25,
    duration:      30,
    password:      "c10mat1",
    live:          true,
    sections:      { "Maths": 25 },
    totalMarks:    25,
    description:   "25 questions · Chapter test · 30 min",
    questionsFile: "questions/c10mat1.js"
  },
  {
    id:            "c10sci1",
    title:         "Class 10 Science — Chemical Reactions",
    subject:       "Science",
    class:         "10",
    section:       "c910",
    questions:     25,
    duration:      30,
    password:      "c10sci1",
    live:          false,
    sections:      { "Science": 25 },
    totalMarks:    25,
    description:   "25 questions · Chapter test · 30 min",
    questionsFile: "questions/c10sci1.js"
  },
  {
    id:            "c10sst1",
    title:         "Class 10 SST — Nationalism in India",
    subject:       "Social Science",
    class:         "10",
    section:       "c910",
    questions:     20,
    duration:      25,
    password:      "c10sst1",
    live:          false,
    sections:      { "Social Science": 20 },
    totalMarks:    20,
    description:   "20 questions · Chapter test · 25 min",
    questionsFile: "questions/c10sst1.js"
  },
  // Class 10 Full Mocks
  {
    id:            "sub_c10mat1",
    title:         "Class 10 Maths — Full Mock Test 1",
    subject:       "Maths",
    class:         "10",
    section:       "c910",
    questions:     40,
    duration:      60,
    password:      "s10mat1",
    live:          false,
    sections:      { "Maths": 40 },
    totalMarks:    40,
    description:   "40 questions · Annual pattern · 60 min",
    questionsFile: "questions/sub_c10mat1.js"
  },
  {
    id:            "sub_c10sci1",
    title:         "Class 10 Science — Full Mock Test 1",
    subject:       "Science",
    class:         "10",
    section:       "c910",
    questions:     40,
    duration:      60,
    password:      "s10sci1",
    live:          false,
    sections:      { "Physics": 15, "Chemistry": 15, "Biology": 10 },
    totalMarks:    40,
    description:   "40 questions · Annual pattern · 60 min",
    questionsFile: "questions/sub_c10sci1.js"
  },
  // Class 10 Board Sample Papers
  {
    id:            "sp10b01",
    title:         "Class 10 Maths — CBSE Sample Paper 2025-26",
    subject:       "Maths",
    class:         "10",
    section:       "c910",
    questions:     40,
    duration:      60,
    password:      "sp10b01",
    live:          false,
    sections:      { "Maths": 40 },
    totalMarks:    40,
    description:   "40 questions · Board pattern · 60 min",
    questionsFile: "questions/sp10b01.js"
  },
  {
    id:            "sp10b02",
    title:         "Class 10 Science — CBSE Sample Paper 2025-26",
    subject:       "Science",
    class:         "10",
    section:       "c910",
    questions:     40,
    duration:      60,
    password:      "sp10b02",
    live:          false,
    sections:      { "Physics": 14, "Chemistry": 14, "Biology": 12 },
    totalMarks:    40,
    description:   "40 questions · Board pattern · 60 min",
    questionsFile: "questions/sp10b02.js"
  },

  // ══════════════════════════════════════════════════════════
  //  📕  STANDARD 11  |  section: "c1112"  |  class: "11"
  // ══════════════════════════════════════════════════════════

  {
    id:            "c11eng1",
    title:         "Class 11 English — Prose & Poetry Analysis",
    subject:       "English",
    class:         "11",
    section:       "c1112",
    questions:     25,
    duration:      30,
    password:      "c11eng1",
    live:          false,
    sections:      { "English": 25 },
    totalMarks:    25,
    description:   "25 questions · Chapter test · 30 min",
    questionsFile: "questions/c11eng1.js"
  },
  {
    id:            "c11phy1",
    title:         "Class 11 Physics — Units & Measurement",
    subject:       "Physics",
    class:         "11",
    section:       "c1112",
    questions:     25,
    duration:      30,
    password:      "c11phy1",
    live:          false,
    sections:      { "Physics": 25 },
    totalMarks:    25,
    description:   "25 questions · Chapter test · 30 min",
    questionsFile: "questions/c11phy1.js"
  },
  {
    id:            "c11chem1",
    title:         "Class 11 Chemistry — Basic Concepts",
    subject:       "Chemistry",
    class:         "11",
    section:       "c1112",
    questions:     25,
    duration:      30,
    password:      "c11chem1",
    live:          false,
    sections:      { "Chemistry": 25 },
    totalMarks:    25,
    description:   "25 questions · Chapter test · 30 min",
    questionsFile: "questions/c11chem1.js"
  },

  // ══════════════════════════════════════════════════════════
  //  📕  STANDARD 12  |  section: "c1112"  |  class: "12"
  // ══════════════════════════════════════════════════════════

  {
    id:            "c12eng1",
    title:         "Class 12 English — Board Writing & Comprehension",
    subject:       "English",
    class:         "12",
    section:       "c1112",
    questions:     25,
    duration:      30,
    password:      "c12eng1",
    live:          false,
    sections:      { "English": 25 },
    totalMarks:    25,
    description:   "25 questions · Board pattern · 30 min",
    questionsFile: "questions/c12eng1.js"
  },
  {
    id:            "c12phy1",
    title:         "Class 12 Physics — Electric Charges & Fields",
    subject:       "Physics",
    class:         "12",
    section:       "c1112",
    questions:     25,
    duration:      30,
    password:      "c12phy1",
    live:          false,
    sections:      { "Physics": 25 },
    totalMarks:    25,
    description:   "25 questions · Chapter test · 30 min",
    questionsFile: "questions/c12phy1.js"
  },
  {
    id:            "c12mat1",
    title:         "Class 12 Maths — Relations & Functions",
    subject:       "Maths",
    class:         "12",
    section:       "c1112",
    questions:     25,
    duration:      30,
    password:      "c12mat1",
    live:          false,
    sections:      { "Maths": 25 },
    totalMarks:    25,
    description:   "25 questions · Chapter test · 30 min",
    questionsFile: "questions/c12mat1.js"
  },
  // Class 12 Full Mocks / Board Papers
  {
    id:            "sub_c12phy1",
    title:         "Class 12 Physics — Full Mock Test 1",
    subject:       "Physics",
    class:         "12",
    section:       "c1112",
    questions:     35,
    duration:      60,
    password:      "s12phy1",
    live:          false,
    sections:      { "Physics": 35 },
    totalMarks:    35,
    description:   "35 questions · Board pattern · 60 min",
    questionsFile: "questions/sub_c12phy1.js"
  },
  {
    id:            "sp12b01",
    title:         "Class 12 Physics — CBSE Sample Paper 2025-26",
    subject:       "Physics",
    class:         "12",
    section:       "c1112",
    questions:     35,
    duration:      60,
    password:      "sp12b01",
    live:          false,
    sections:      { "Physics": 35 },
    totalMarks:    35,
    description:   "35 questions · Board pattern · 60 min",
    questionsFile: "questions/sp12b01.js"
  },
  {
    id:            "sp12b02",
    title:         "Class 12 Maths — CBSE Sample Paper 2025-26",
    subject:       "Maths",
    class:         "12",
    section:       "c1112",
    questions:     35,
    duration:      60,
    password:      "sp12b02",
    live:          false,
    sections:      { "Maths": 35 },
    totalMarks:    35,
    description:   "35 questions · Board pattern · 60 min",
    questionsFile: "questions/sp12b02.js"
  },

  // ══════════════════════════════════════════════════════════
  //  🏆  MATHS OLYMPIAD  |  section: "olm"  |  class: "all"
  // ══════════════════════════════════════════════════════════

  {
    id:            "olm001",
    title:         "Maths Olympiad — Level 1 (Class 6–8)",
    subject:       "Maths",
    class:         "all",
    section:       "olm",
    questions:     30,
    duration:      45,
    password:      "olm001",
    live:          true,
    sections:      { "Number Theory": 10, "Geometry": 10, "Logical Maths": 10 },
    totalMarks:    30,
    description:   "30 questions · Olympiad pattern · 45 min",
    questionsFile: "questions/olm001.js"
  },
  {
    id:            "olm002",
    title:         "Maths Olympiad — Level 2 (Class 9–10)",
    subject:       "Maths",
    class:         "all",
    section:       "olm",
    questions:     30,
    duration:      45,
    password:      "olm002",
    live:          false,
    sections:      { "Algebra": 10, "Number Theory": 10, "Combinatorics": 10 },
    totalMarks:    30,
    description:   "30 questions · Olympiad pattern · 45 min",
    questionsFile: "questions/olm002.js"
  },

  // ══════════════════════════════════════════════════════════
  //  🔬  SCIENCE OLYMPIAD  |  section: "olsci"  |  class: "all"
  // ══════════════════════════════════════════════════════════

  {
    id:            "olsci001",
    title:         "Science Olympiad — Level 1 (Class 6–8)",
    subject:       "Science",
    class:         "all",
    section:       "olsci",
    questions:     30,
    duration:      45,
    password:      "olsci001",
    live:          true,
    sections:      { "Physics": 10, "Chemistry": 10, "Biology": 10 },
    totalMarks:    30,
    description:   "30 questions · Mixed Science · 45 min",
    questionsFile: "questions/olsci001.js"
  },
  {
    id:            "olsci002",
    title:         "Science Olympiad — Level 2 (Class 9–10)",
    subject:       "Science",
    class:         "all",
    section:       "olsci",
    questions:     30,
    duration:      45,
    password:      "olsci002",
    live:          false,
    sections:      { "Physics": 10, "Chemistry": 10, "Biology": 10 },
    totalMarks:    30,
    description:   "30 questions · Mixed Science · 45 min",
    questionsFile: "questions/olsci002.js"
  },

  // ══════════════════════════════════════════════════════════
  //  🏅  SCHOLARSHIP & NTSE  |  section: "scholar"
  // ══════════════════════════════════════════════════════════

  {
    id:            "nts001",
    title:         "NTSE Stage 1 — MAT Practice (Class 10)",
    subject:       "Mixed",
    class:         "10",
    section:       "scholar",
    questions:     40,
    duration:      45,
    password:      "nts001",
    live:          false,
    sections:      { "MAT": 40 },
    totalMarks:    40,
    description:   "40 questions · Mental Ability · 45 min",
    questionsFile: "questions/nts001.js"
  },
  {
    id:            "nts002",
    title:         "NTSE Stage 1 — SAT Practice (Class 10)",
    subject:       "Mixed",
    class:         "10",
    section:       "scholar",
    questions:     40,
    duration:      45,
    password:      "nts002",
    live:          false,
    sections:      { "Science": 15, "Maths": 15, "Social Science": 10 },
    totalMarks:    40,
    description:   "40 questions · Scholastic Aptitude · 45 min",
    questionsFile: "questions/nts002.js"
  },
  {
    id:            "nts003",
    title:         "State Scholarship — Class 8 Practice",
    subject:       "Mixed",
    class:         "8",
    section:       "scholar",
    questions:     50,
    duration:      60,
    password:      "nts003",
    live:          false,
    sections:      { "Maths": 20, "Science": 20, "GK": 10 },
    totalMarks:    50,
    description:   "50 questions · State pattern · 60 min",
    questionsFile: "questions/nts003.js"
  }

];
// ============================================================
//  END OF CONFIG  —  Total tests: 47
// ============================================================
