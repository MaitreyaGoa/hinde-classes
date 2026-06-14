// ============================================================
//  config.js — Hinde Classes  |  hindeclasses.com
//  Bicholim, Goa  |  Maitreya Hinde  |  7358425108
//
//  section values (each standard is SEPARATE):
//    std5    → Standard 5
//    std6    → Standard 6
//    std7    → Standard 7
//    std8    → Standard 8
//    std9    → Standard 9
//    std10   → Standard 10
//    std11   → Standard 11
//    std12   → Standard 12
//    daily   → Daily Quiz
//    olm     → Maths Olympiad
//    olsci   → Science Olympiad
//    scholar → Scholarship & NTSE
//    mat     → MAT (Mental Ability Test) Topic Tests
//
//  live: true  → Start button visible
//  live: false → "Coming Soon"
// ============================================================

var SCRIPT_URL = "https://script.google.com/macros/s/AKfycby_ApkIAQyAedZ_gGP-WL4QDfwrE5AaKWwdlzmHDYc3375ifmmSih92t3-qIHz7ykkiVw/exec";

var ALL_TESTS = [

  // ══════════════════════════════════════════════════════════
  //  📅  DAILY QUIZ  |  section: "daily"
  // ══════════════════════════════════════════════════════════
  {
    id: "dq080626",    title: "Daily Quiz — Class 6–8 · 8 June 2026",
    subject: "Mixed",  class: "all",   section: "daily",
    questions: 10,     duration: 10,   password: "dq080626",
    live:          false,        totalMarks: 10, questionsFile: "questions/dq080626.js",
    sections: { "Mixed": 10 }
  },
  {
    id: "dq080626b",   title: "Daily Quiz — Class 9–10 · 8 June 2026",
    subject: "Mixed",  class: "all",   section: "daily",
    questions: 10,     duration: 10,   password: "dq080626b",
    live:          false,        totalMarks: 10, questionsFile: "questions/dq080626b.js",
    sections: { "Mixed": 10 }
  },

  // ══════════════════════════════════════════════════════════
  //  📓  STANDARD 5  |  section: "std5"
  // ══════════════════════════════════════════════════════════
  {
    id: "c5eng1",      title: "Class 5 English — Grammar Basics",
    subject: "English", class: "5",   section: "std5",
    questions: 20,     duration: 25,  password: "c5eng1",
    live:          false,       totalMarks: 20, questionsFile: "questions/c5eng1.js",
    sections: { "English": 20 }
  },
  {
    id: "c5mat1",      title: "Class 5 Maths — Fractions",
    subject: "Maths",  class: "5",   section: "std5",
    questions: 20,     duration: 25,  password: "c5mat1",
    live:          false,       totalMarks: 20, questionsFile: "questions/c5mat1.js",
    sections: { "Maths": 20 }
  },
  {
    id: "c5sci1",      title: "Class 5 Science — Plants & Animals",
    subject: "Science", class: "5",  section: "std5",
    questions: 20,     duration: 25,  password: "c5sci1",
    live:          false,       totalMarks: 20, questionsFile: "questions/c5sci1.js",
    sections: { "Science": 20 }
  },

  // ══════════════════════════════════════════════════════════
  //  📔  STANDARD 6  |  section: "std6"
  //  board: "goa" | "cbse" | "ib"
  // ══════════════════════════════════════════════════════════

  // ── STD 6 : No calendar tests yet — placeholder section ──

  // ══════════════════════════════════════════════════════════
  //  📒  STANDARD 7  |  section: "std7"
  //  board: "goa" | "cbse" | "ib"
  // ══════════════════════════════════════════════════════════

  // ── LIVE (carry-over) ────────────────────────────────────
  {
    id: "c7eng1",      title: "Class 7 English — Tenses",
    subject: "English", class: "7", section: "std7", board: "cbse",
    questions: 20,     duration: 25,  password: "c7eng1",
    live: true,        totalMarks: 20, questionsFile: "questions/c7eng1.js",
    sections: { "English": 20 }
  },
  {
    id: "c7mat1",      title: "Class 7 Maths — Simple Equations",
    subject: "Maths", class: "7", section: "std7", board: "cbse",
    questions: 20,     duration: 25,  password: "c7mat1",
    live: true,        totalMarks: 20, questionsFile: "questions/c7mat1.js",
    sections: { "Maths": 20 }
  },

  // ── 22 June 2026 Tests ───────────────────────────────────
  {
    id: "c7mat_jun22_goa", title: "Std 7 Maths — Large Numbers Around Us",
    subject: "Maths", class: "7", section: "std7", board: "goa",
    questions: 30, duration: 60, password: "c7mat22g",
    live: true,    totalMarks: 30, questionsFile: "questions/c7mat_jun22_goa.js",
    sections: { "Maths": 30 }
  },
  {
    id: "c7sci_jun22_goa", title: "Std 7 Science — Ever-Evolving World of Science",
    subject: "Science", class: "7", section: "std7", board: "goa",
    questions: 30, duration: 60, password: "c7sci22g",
    live: false,   totalMarks: 30, questionsFile: "questions/c7sci_jun22_goa.js",
    sections: { "Science": 30 }
  },

  // ══════════════════════════════════════════════════════════
  //  📙  STANDARD 8  |  section: "std8"
  //  board: "goa" | "cbse" | "ib"
  // ══════════════════════════════════════════════════════════

  // ── LIVE (carry-over) ────────────────────────────────────
  {
    id: "c8sci1",      title: "Class 8 Science — Microorganisms",
    subject: "Science", class: "8", section: "std8", board: "cbse",
    questions: 20,     duration: 25,  password: "c8sci1",
    live: true,        totalMarks: 20, questionsFile: "questions/c8sci1.js",
    sections: { "Science": 20 }
  },

  // ── 22 June 2026 Tests ───────────────────────────────────
  {
    id: "c8mat_jun22_goa", title: "Std 8 Maths — A Story of Numbers",
    subject: "Maths", class: "8", section: "std8", board: "goa",
    questions: 30, duration: 60, password: "c8mat22g",
    live: false,   totalMarks: 30, questionsFile: "questions/c8mat_jun22_goa.js",
    sections: { "Maths": 30 }
  },

  // ══════════════════════════════════════════════════════════
  //  📗  STANDARD 9  |  section: "std9"
  //  board: "goa" | "cbse" | "ib"
  // ══════════════════════════════════════════════════════════

  // ── LIVE (carry-over) ────────────────────────────────────
  {
    id: "c9sci1",      title: "Class 9 Science — Force & Motion",
    subject: "Science", class: "9", section: "std9", board: "cbse",
    questions: 25,     duration: 30,  password: "c9sci1",
    live: true,        totalMarks: 25, questionsFile: "questions/c9sci1.js",
    sections: { "Science": 25 }
  },
  {
    id: "c9sci_cell1", title: "Class 9 Science — The Fundamental Unit of Life",
    subject: "Science", class: "9", section: "std9", board: "cbse",
    questions: 20,     duration: 25,  password: "c9cell1",
    live: true,        totalMarks: 20, questionsFile: "questions/c9sci_cell1.js",
    sections: { "Science": 20 }
  },

  // ── 22 June 2026 Tests ───────────────────────────────────
  {
    id: "c9mat_jun22_goa",  title: "Std 9 Maths — Number System",
    subject: "Maths", class: "9", section: "std9", board: "goa",
    questions: 30, duration: 60, password: "c9mat22g",
    live: false,   totalMarks: 30, questionsFile: "questions/c9mat_jun22_goa.js",
    sections: { "Maths": 30 }
  },
  {
    id: "c9mat_jun22_cbse", title: "Std 9 Maths — Number Systems",
    subject: "Maths", class: "9", section: "std9", board: "cbse",
    questions: 30, duration: 60, password: "c9mat22c",
    live: false,   totalMarks: 30, questionsFile: "questions/c9mat_jun22_cbse.js",
    sections: { "Maths": 30 }
  },
  {
    id: "c9sci_jun22_cbse", title: "Std 9 Science — Cell",
    subject: "Science", class: "9", section: "std9", board: "cbse",
    questions: 30, duration: 60, password: "c9sci22c",
    live: false,   totalMarks: 30, questionsFile: "questions/c9sci_jun22_cbse.js",
    sections: { "Science": 30 }
  },

  // ══════════════════════════════════════════════════════════
  //  📘  STANDARD 10  |  section: "std10"
  //  board: "goa" | "cbse" | "ib"
  // ══════════════════════════════════════════════════════════

  // ── LIVE (carry-over) ────────────────────────────────────
  {
    id: "c10eng1",     title: "Class 10 English — Writing Skills & Grammar",
    subject: "English", class: "10", section: "std10", board: "cbse",
    questions: 25,     duration: 30,  password: "c10eng1",
    live: true,        totalMarks: 25, questionsFile: "questions/c10eng1.js",
    sections: { "English": 25 }
  },
  {
    id: "c10mat1",     title: "Class 10 Maths — Quadratic Equations",
    subject: "Maths", class: "10", section: "std10", board: "cbse",
    questions: 20,     duration: 25,  password: "c10mat1",
    live: true,        totalMarks: 20, questionsFile: "questions/c10mat1.js",
    sections: { "Maths": 20 }
  },
  {
    id: "c10sci_cer1", title: "Class 10 Science — Chemical Reactions",
    subject: "Science", class: "10", section: "std10", board: "cbse",
    questions: 20,     duration: 25,  password: "c10sci1",
    live: true,        totalMarks: 20, questionsFile: "questions/c10sci_cer1.js",
    sections: { "Science": 20 }
  },

  // ── 22 June 2026 Tests ───────────────────────────────────
  {
    id: "c10mat_jun22_goa",  title: "Std 10 Maths — Real Numbers",
    subject: "Maths", class: "10", section: "std10", board: "goa",
    questions: 30, duration: 60, password: "c10mat22g",
    live: false,   totalMarks: 30, questionsFile: "questions/c10mat_jun22_goa.js",
    sections: { "Maths": 30 }
  },
  {
    id: "c10sci_jun22_goa",  title: "Std 10 Science — Chemical Reactions & Equations",
    subject: "Science", class: "10", section: "std10", board: "goa",
    questions: 30, duration: 60, password: "c10sci22g",
    live: false,   totalMarks: 30, questionsFile: "questions/c10sci_jun22_goa.js",
    sections: { "Science": 30 }
  },
  {
    id: "c10mat_jun22_cbse", title: "Std 10 Maths — Real Numbers",
    subject: "Maths", class: "10", section: "std10", board: "cbse",
    questions: 30, duration: 60, password: "c10mat22c",
    live: false,   totalMarks: 30, questionsFile: "questions/c10mat_jun22_cbse.js",
    sections: { "Maths": 30 }
  },
  {
    id: "c10sci_jun22_cbse", title: "Std 10 Science — Chemical Substances & Matter",
    subject: "Science", class: "10", section: "std10", board: "cbse",
    questions: 30, duration: 60, password: "c10sci22c",
    live: false,   totalMarks: 30, questionsFile: "questions/c10sci_jun22_cbse.js",
    sections: { "Science": 30 }
  },
  // ══════════════════════════════════════════════════════════
  //  📕  STANDARD 11  |  section: "std11"
  // ══════════════════════════════════════════════════════════
  {
    id: "c11eng1",     title: "Class 11 English — Prose & Poetry Analysis",
    subject: "English", class: "11", section: "std11",
    questions: 25,     duration: 30,  password: "c11eng1",
    live:          false,       totalMarks: 25, questionsFile: "questions/c11eng1.js",
    sections: { "English": 25 }
  },
  {
    id: "c11mat1",     title: "Class 11 Maths — Sets & Relations",
    subject: "Maths",  class: "11",  section: "std11",
    questions: 25,     duration: 35,  password: "c11mat1",
    live:          false,       totalMarks: 25, questionsFile: "questions/c11mat1.js",
    sections: { "Maths": 25 }
  },
  {
    id: "c11phy1",     title: "Class 11 Physics — Units & Measurement",
    subject: "Physics", class: "11", section: "std11",
    questions: 25,     duration: 35,  password: "c11phy1",
    live:          false,       totalMarks: 25, questionsFile: "questions/c11phy1.js",
    sections: { "Physics": 25 }
  },
  {
    id: "c11chem1",    title: "Class 11 Chemistry — Basic Concepts",
    subject: "Chemistry", class: "11", section: "std11",
    questions: 25,     duration: 35,  password: "c11chem1",
    live:          false,       totalMarks: 25, questionsFile: "questions/c11chem1.js",
    sections: { "Chemistry": 25 }
  },
  {
    id: "c11bio1",     title: "Class 11 Biology — Cell Structure & Functions",
    subject: "Biology", class: "11", section: "std11",
    questions: 25,     duration: 35,  password: "c11bio1",
    live:          false,       totalMarks: 25, questionsFile: "questions/c11bio1.js",
    sections: { "Biology": 25 }
  },

  // ══════════════════════════════════════════════════════════
  //  📕  STANDARD 12  |  section: "std12"
  // ══════════════════════════════════════════════════════════
  {
    id: "c12eng1",     title: "Class 12 English — Board Writing & Comprehension",
    subject: "English", class: "12", section: "std12",
    questions: 25,     duration: 30,  password: "c12eng1",
    live:          false,       totalMarks: 25, questionsFile: "questions/c12eng1.js",
    sections: { "English": 25 }
  },
  {
    id: "c12mat1",     title: "Class 12 Maths — Relations & Functions",
    subject: "Maths",  class: "12",  section: "std12",
    questions: 25,     duration: 35,  password: "c12mat1",
    live:          false,       totalMarks: 25, questionsFile: "questions/c12mat1.js",
    sections: { "Maths": 25 }
  },
  {
    id: "c12mat2",     title: "Class 12 Maths — Integrals",
    subject: "Maths",  class: "12",  section: "std12",
    questions: 25,     duration: 35,  password: "c12mat2",
    live:          false,       totalMarks: 25, questionsFile: "questions/c12mat2.js",
    sections: { "Maths": 25 }
  },
  {
    id: "c12phy1",     title: "Class 12 Physics — Electric Charges & Fields",
    subject: "Physics", class: "12", section: "std12",
    questions: 25,     duration: 35,  password: "c12phy1",
    live:          false,       totalMarks: 25, questionsFile: "questions/c12phy1.js",
    sections: { "Physics": 25 }
  },
  {
    id: "c12phy2",     title: "Class 12 Physics — Ray Optics",
    subject: "Physics", class: "12", section: "std12",
    questions: 25,     duration: 35,  password: "c12phy2",
    live:          false,       totalMarks: 25, questionsFile: "questions/c12phy2.js",
    sections: { "Physics": 25 }
  },
  {
    id: "c12chem1",    title: "Class 12 Chemistry — Solid State",
    subject: "Chemistry", class: "12", section: "std12",
    questions: 25,     duration: 35,  password: "c12chem1",
    live:          false,       totalMarks: 25, questionsFile: "questions/c12chem1.js",
    sections: { "Chemistry": 25 }
  },
  {
    id: "c12chem2",    title: "Class 12 Chemistry — Electrochemistry",
    subject: "Chemistry", class: "12", section: "std12",
    questions: 25,     duration: 35,  password: "c12chem2",
    live:          false,       totalMarks: 25, questionsFile: "questions/c12chem2.js",
    sections: { "Chemistry": 25 }
  },
  {
    id: "c12bio1",     title: "Class 12 Biology — Reproduction in Organisms",
    subject: "Biology", class: "12", section: "std12",
    questions: 25,     duration: 35,  password: "c12bio1",
    live:          false,       totalMarks: 25, questionsFile: "questions/c12bio1.js",
    sections: { "Biology": 25 }
  },
  {
    id: "c12bio2",     title: "Class 12 Biology — Genetics & Evolution",
    subject: "Biology", class: "12", section: "std12",
    questions: 25,     duration: 35,  password: "c12bio2",
    live:          false,       totalMarks: 25, questionsFile: "questions/c12bio2.js",
    sections: { "Biology": 25 }
  },
  {
    id: "sub_c12phy1", title: "Class 12 Physics — Full Mock Test 1",
    subject: "Physics", class: "12", section: "std12",
    questions: 35,     duration: 60,  password: "s12phy1",
    live:          false,       totalMarks: 35, questionsFile: "questions/sub_c12phy1.js",
    sections: { "Physics": 35 }
  },
  {
    id: "sp12b01",     title: "Class 12 Physics — CBSE Sample Paper 2025-26",
    subject: "Physics", class: "12", section: "std12",
    questions: 35,     duration: 60,  password: "sp12b01",
    live:          false,       totalMarks: 35, questionsFile: "questions/sp12b01.js",
    sections: { "Physics": 35 }
  },
  {
    id: "sp12b02",     title: "Class 12 Maths — CBSE Sample Paper 2025-26",
    subject: "Maths",  class: "12",  section: "std12",
    questions: 35,     duration: 60,  password: "sp12b02",
    live:          false,       totalMarks: 35, questionsFile: "questions/sp12b02.js",
    sections: { "Maths": 35 }
  },

  // ══════════════════════════════════════════════════════════
  //  🏆  MATHS OLYMPIAD  |  section: "olm"
  // ══════════════════════════════════════════════════════════
  {
    id: "olm001",      title: "Maths Olympiad — Level 1 (Class 6–8)",
    subject: "Maths",  class: "all", section: "olm",
    questions: 30,     duration: 45,  password: "olm001",
    live:          true,        totalMarks: 30, questionsFile: "questions/olm001.js",
    sections: { "Number Theory": 10, "Geometry": 10, "Logical Maths": 10 }
  },
  {
    id: "olm002",      title: "Maths Olympiad — Level 2 (Class 9–10)",
    subject: "Maths",  class: "all", section: "olm",
    questions: 30,     duration: 45,  password: "olm002",
    live:          false,       totalMarks: 30, questionsFile: "questions/olm002.js",
    sections: { "Algebra": 10, "Number Theory": 10, "Combinatorics": 10 }
  },

  // ══════════════════════════════════════════════════════════
  //  🔬  SCIENCE OLYMPIAD  |  section: "olsci"
  // ══════════════════════════════════════════════════════════
  {
    id: "olsci001",    title: "Science Olympiad — Level 1 (Class 6–8)",
    subject: "Science", class: "all", section: "olsci",
    questions: 30,     duration: 45,  password: "olsci001",
    live:          true,        totalMarks: 30, questionsFile: "questions/olsci001.js",
    sections: { "Physics": 10, "Chemistry": 10, "Biology": 10 }
  },
  {
    id: "olsci002",    title: "Science Olympiad — Level 2 (Class 9–10)",
    subject: "Science", class: "all", section: "olsci",
    questions: 30,     duration: 45,  password: "olsci002",
    live:          false,       totalMarks: 30, questionsFile: "questions/olsci002.js",
    sections: { "Physics": 10, "Chemistry": 10, "Biology": 10 }
  },

  // ══════════════════════════════════════════════════════════
  //  🏅  SCHOLARSHIP & NTSE  |  section: "scholar"
  // ══════════════════════════════════════════════════════════
  {
    id: "nts001",      title: "NTSE Stage 1 — MAT Practice (Class 10)",
    subject: "Mixed",  class: "10",  section: "scholar",
    questions: 40,     duration: 45,  password: "nts001",
    live:          false,       totalMarks: 40, questionsFile: "questions/nts001.js",
    sections: { "MAT": 40 }
  },
  {
    id: "nts002",      title: "NTSE Stage 1 — SAT Practice (Class 10)",
    subject: "Mixed",  class: "10",  section: "scholar",
    questions: 40,     duration: 45,  password: "nts002",
    live:          false,       totalMarks: 40, questionsFile: "questions/nts002.js",
    sections: { "Science": 15, "Maths": 15, "Social Science": 10 }
  },
  {
    id: "nts003",      title: "State Scholarship — Class 8 Practice",
    subject: "Mixed",  class: "8",   section: "scholar",
    questions: 50,     duration: 60,  password: "nts003",
    live:          false,       totalMarks: 50, questionsFile: "questions/nts003.js",
    sections: { "Maths": 20, "Science": 20, "GK": 10 }
  },

  // ── NTSE MAT MOCK TEST ──────────────────────────────────
  {
    id: "ntse_mat1",   title: "NTSE MAT Mock Test 1 — Advanced",
    subject: "MAT",    class: "ntse", section: "scholar",
    questions: 100,    duration: 120, password: "ntsemat1",
    live:          true,        totalMarks: 100,
    questionsFile: "questions/scholar_ntse_mat1.js",
    sections: { "Mental Ability Test": 100 }
  },

  // ══════════════════════════════════════════════════════════
  //  🧠  MAT TOPIC TESTS  |  section: "mat"
  //  Mental Ability Test — Topic-wise practice
  //  Based on Dr. Shetye Academic Programme LR Notes (Day 1–28)
  //  ID range: 9001–9249 (10 IDs per topic)
  // ══════════════════════════════════════════════════════════
  {
    id: "mat_t01a", title: "MAT — Series Completion: Number Series",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt01a",
    live: true,    totalMarks: 10,
    questionsFile: "questions/mat_t01a_number_series.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t01b", title: "MAT — Series Completion: Alphabet Series",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt01b",
    live: true,    totalMarks: 10,
    questionsFile: "questions/mat_t01b_alphabet_series.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t01c", title: "MAT — Series Completion: Letter Repeating Series",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt01c",
    live: true,    totalMarks: 10,
    questionsFile: "questions/mat_t01c_letter_repeating.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t01d", title: "MAT — Series Completion: Missing Terms in Figure",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt01d",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t01d_missing_figure.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t02",  title: "MAT — Analogy",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt02",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t02_analogy.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t03",  title: "MAT — Classification",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt03",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t03_classification.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t04",  title: "MAT — Alphabet Test",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt04",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t04_alphabet_test.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t05",  title: "MAT — Coding-Decoding Part 1",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt05",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t05_coding_decoding_1.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t06",  title: "MAT — Coding-Decoding Part 2",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt06",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t06_coding_decoding_2.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t07",  title: "MAT — Direction Sense Test",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt07",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t07_direction_sense.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t08",  title: "MAT — Blood Relation Part 1",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt08",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t08_blood_relation_1.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t09",  title: "MAT — Blood Relation Part 2",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt09",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t09_blood_relation_2.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t10",  title: "MAT — Mathematical Operations Part 1",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt10",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t10_mathematical_ops_1.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t11",  title: "MAT — Mathematical Operations Part 2",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt11",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t11_mathematical_ops_2.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t12",  title: "MAT — Ranking & Ordering Test",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt12",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t12_ranking_ordering.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t13",  title: "MAT — Puzzle Test",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt13",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t13_puzzle_test.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t14",  title: "MAT — Logical Venn Diagram Part 1",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt14",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t14_venn_diagram_1.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t15",  title: "MAT — Logical Venn Diagram Part 2",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt15",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t15_venn_diagram_2.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t16",  title: "MAT — Arithmetical Reasoning",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt16",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t16_arithmetical_reasoning.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t17",  title: "MAT — Non-Verbal Reasoning Part 1",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt17",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t17_non_verbal_1.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t18",  title: "MAT — Non-Verbal Reasoning Part 2",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt18",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t18_non_verbal_2.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t19",  title: "MAT — Non-Verbal Reasoning Part 3",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt19",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t19_non_verbal_3.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t20",  title: "MAT — Figure Partition & Counting",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt20",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t20_figure_partition.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t21",  title: "MAT — Mirror Image & Water Image",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt21",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t21_mirror_water_image.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t22",  title: "MAT — Paper Cutting & Folding",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt22",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t22_paper_cutting_folding.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t23",  title: "MAT — Cube and Dice Part 1",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt23",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t23_cube_dice_1.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t24",  title: "MAT — Cube and Dice Part 2",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt24",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t24_cube_dice_2.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t25",  title: "MAT — Dot Situation",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "matt25",
    live: false,    totalMarks: 10,
    questionsFile: "questions/mat_t25_dot_situation.js",
    sections: { "MAT": 10 }
  }

];
// ============================================================
//  END OF CONFIG  —  Total updated | Last: 22 June 2026 calendar added
// ============================================================
