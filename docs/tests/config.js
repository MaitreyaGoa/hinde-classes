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
    questions: 20,     duration: 25,  password: "hindeclasses",
    live: true,        totalMarks: 20, questionsFile: "questions/c7eng1.js",
    sections: { "English": 20 }
  },
  {
    id: "c7mat1",      title: "Class 7 Maths — Simple Equations",
    subject: "Maths", class: "7", section: "std7", board: "cbse",
    questions: 20,     duration: 25,  password: "hindeclasses",
    live: true,        totalMarks: 20, questionsFile: "questions/c7mat1.js",
    sections: { "Maths": 20 }
  },

  // ── 22 June 2026 Tests ───────────────────────────────────
  {
    id: "c7mat_jun22_goa", title: "Std 7 Maths — Large Numbers Around Us",
    subject: "Maths", class: "7", section: "std7", board: "goa",
    questions: 30, duration: 60, password: "hindeclasses",
    live: true,    totalMarks: 30, questionsFile: "questions/c7mat_jun22_goa.js",
    sections: { "Maths": 30 }
  },
  {
    id: "c7sci_jun22_goa", title: "Std 7 Science — Ever-Evolving World of Science",
    subject: "Science", class: "7", section: "std7", board: "goa",
    questions: 30, duration: 50, password: "hindeclasses",
    live: true,   totalMarks: 30, questionsFile: "questions/c7sci_jun22_goa.js",
    sections: { "Science": 30 }
  },
  {
    id: "c7sci_jul09_goa", title: "Std 7 Science — Exploring Substances: Acidic, Basic and Neutral",
    subject: "Science", class: "7", section: "std7", board: "goa",
    questions: 30, duration: 50, password: "hindeclasses",
    live: true,   totalMarks: 30, questionsFile: "questions/c7sci_jul09_goa.js",
    sections: { "Science": 30 }
  },

  // ── STD 7 : IB (International Board) ─────────────────────
  {
    id: "c7mat_ib_integers", title: "Std 7 IB Maths — Integers",
    subject: "Maths", class: "7", section: "std7", board: "ib",
    questions: 30, duration: 50, password: "hindeclasses",
    live: true,   totalMarks: 30, questionsFile: "questions/c7mat_ib_integers.js",
    sections: { "Maths": 30 }
  },
  {
    id: "c7mat_ib_fractions", title: "Std 7 IB Maths — Fractions and Decimals",
    subject: "Maths", class: "7", section: "std7", board: "ib",
    questions: 30, duration: 50, password: "hindeclasses",
    live: true,   totalMarks: 30, questionsFile: "questions/c7mat_ib_fractions.js",
    sections: { "Maths": 30 }
  },
  {
    id: "c7mat_ib_rational", title: "Std 7 IB Maths — Rational Numbers",
    subject: "Maths", class: "7", section: "std7", board: "ib",
    questions: 30, duration: 50, password: "hindeclasses",
    live: true,   totalMarks: 30, questionsFile: "questions/c7mat_ib_rational.js",
    sections: { "Maths": 30 }
  },

  // ══════════════════════════════════════════════════════════
  //  📙  STANDARD 8  |  section: "std8"
  //  board: "goa" | "cbse" | "ib"
  // ══════════════════════════════════════════════════════════

  // ── LIVE (carry-over) ────────────────────────────────────
  {
    id: "c8sci1",      title: "Class 8 Science — Microorganisms",
    subject: "Science", class: "8", section: "std8", board: "cbse",
    questions: 20,     duration: 25,  password: "hindeclasses",
    live: true,        totalMarks: 20, questionsFile: "questions/c8sci1.js",
    sections: { "Science": 20 }
  },

  // ── 22 June 2026 Tests ───────────────────────────────────
  {
    id: "c8mat_jun22_goa", title: "Std 8 Maths — A Story of Numbers",
    subject: "Maths", class: "8", section: "std8", board: "goa",
    questions: 30, duration: 60, password: "hindeclasses",
    live: true,   totalMarks: 30, questionsFile: "questions/c8mat_jun22_goa.js",
    sections: { "Maths": 30 }
  },
  {
    id: "c8sci_jun22_goa", title: "Std 8 Science — Exploring the Investigative World of Science",
    subject: "Science", class: "8", section: "std8", board: "goa",
    questions: 30, duration: 50, password: "hindeclasses",
    live: true,   totalMarks: 30, questionsFile: "questions/c8sci_jun22_goa.js",
    sections: { "Science": 30 }
  },
  {
    id: "c8sci_jul09_goa", title: "Std 8 Science — The Invisible Living World: Beyond Our Naked Eye",
    subject: "Science", class: "8", section: "std8", board: "goa",
    questions: 30, duration: 50, password: "hindeclasses",
    live: true,   totalMarks: 30, questionsFile: "questions/c8sci_jul09_goa.js",
    sections: { "Science": 30 }
  },

  // ══════════════════════════════════════════════════════════
  //  📗  STANDARD 9  |  section: "std9"
  //  board: "goa" | "cbse" | "ib"
  // ══════════════════════════════════════════════════════════

  // ── LIVE (carry-over) ────────────────────────────────────
  {
    id: "c9sci1",      title: "Class 9 Science — Force & Motion",
    subject: "Science", class: "9", section: "std9", board: "cbse",
    questions: 25,     duration: 30,  password: "hindeclasses",
    live: true,        totalMarks: 25, questionsFile: "questions/c9sci1.js",
    sections: { "Science": 25 }
  },
  {
    id: "c9sci_cell1", title: "Class 9 Science — The Fundamental Unit of Life",
    subject: "Science", class: "9", section: "std9", board: "cbse",
    questions: 20,     duration: 25,  password: "hindeclasses",
    live: true,        totalMarks: 20, questionsFile: "questions/c9sci_cell1.js",
    sections: { "Science": 20 }
  },

  // ── 22 June 2026 Tests ───────────────────────────────────
  {
    id: "c9mat_jun22_goa",  title: "Std 9 Maths — Number System",
    subject: "Maths", class: "9", section: "std9", board: "goa",
    questions: 30, duration: 60, password: "hindeclasses",
    live: true,   totalMarks: 30, questionsFile: "questions/c9mat_jun22_goa.js",
    sections: { "Maths": 30 }
  },
  {
    id: "c9sci_jun22_goa", title: "Std 9 Science — Matter in Our Surroundings",
    subject: "Science", class: "9", section: "std9", board: "goa",
    questions: 30, duration: 50, password: "hindeclasses",
    live: true,   totalMarks: 30, questionsFile: "questions/c9sci_jun22_goa.js",
    sections: { "Science": 30 }
  },
  {
    id: "c9sci_jul09_goa", title: "Std 9 Science — Cell: The Fundamental Unit of Life",
    subject: "Science", class: "9", section: "std9", board: "goa",
    questions: 30, duration: 50, password: "hindeclasses",
    live: true,   totalMarks: 30, questionsFile: "questions/c9sci_jul09_goa.js",
    sections: { "Science": 30 }
  },
  {
    id: "c9mat_jun22_cbse", title: "Std 9 Maths — Number Systems",
    subject: "Maths", class: "9", section: "std9", board: "cbse",
    questions: 30, duration: 60, password: "hindeclasses",
    live: true,   totalMarks: 30, questionsFile: "questions/c9mat_jun22_cbse.js",
    sections: { "Maths": 30 }
  },
  {
    id: "c9sci_jun22_cbse", title: "Std 9 Science — Cell",
    subject: "Science", class: "9", section: "std9", board: "cbse",
    questions: 30, duration: 50, password: "hindeclasses",
    live: true,   totalMarks: 30, questionsFile: "questions/c9sci_jun22_cbse.js",
    sections: { "Science": 30 }
  },
  {
    id: "c9sci_jul09_cbse", title: "Std 9 Science — Is Matter Around Us Pure?",
    subject: "Science", class: "9", section: "std9", board: "cbse",
    questions: 30, duration: 50, password: "hindeclasses",
    live: true,   totalMarks: 30, questionsFile: "questions/c9sci_jul09_cbse.js",
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
    questions: 25,     duration: 30,  password: "hindeclasses",
    live: true,        totalMarks: 25, questionsFile: "questions/c10eng1.js",
    sections: { "English": 25 }
  },
  {
    id: "c10mat1",     title: "Class 10 Maths — Quadratic Equations",
    subject: "Maths", class: "10", section: "std10", board: "cbse",
    questions: 20,     duration: 25,  password: "hindeclasses",
    live: true,        totalMarks: 20, questionsFile: "questions/c10mat1.js",
    sections: { "Maths": 20 }
  },
  {
    id: "c10sci_cer1", title: "Class 10 Science — Chemical Reactions",
    subject: "Science", class: "10", section: "std10", board: "cbse",
    questions: 20,     duration: 25,  password: "hindeclasses",
    live: true,        totalMarks: 20, questionsFile: "questions/c10sci_cer1.js",
    sections: { "Science": 20 }
  },

  // ── 22 June 2026 Tests ───────────────────────────────────
  {
    id: "c10mat_jun22_goa",  title: "Std 10 Maths — Real Numbers",
    subject: "Maths", class: "10", section: "std10", board: "goa",
    questions: 30, duration: 60, password: "hindeclasses",
    live: true,   totalMarks: 30, questionsFile: "questions/c10mat_jun22_goa.js",
    sections: { "Maths": 30 }
  },
  {
    id: "c10sci_jun22_goa",  title: "Std 10 Science — Chemical Reactions & Equations",
    subject: "Science", class: "10", section: "std10", board: "goa",
    questions: 30, duration: 50, password: "hindeclasses",
    live: true,   totalMarks: 30, questionsFile: "questions/c10sci_jun22_goa.js",
    sections: { "Science": 30 }
  },
  {
    id: "c10sci_jul09_goa", title: "Std 10 Science — Life Processes",
    subject: "Science", class: "10", section: "std10", board: "goa",
    questions: 30, duration: 50, password: "hindeclasses",
    live: true,   totalMarks: 30, questionsFile: "questions/c10sci_jul09_goa.js",
    sections: { "Science": 30 }
  },
  {
    id: "c10mat_jun22_cbse", title: "Std 10 Maths — Real Numbers",
    subject: "Maths", class: "10", section: "std10", board: "cbse",
    questions: 30, duration: 60, password: "hindeclasses",
    live: true,   totalMarks: 30, questionsFile: "questions/c10mat_jun22_cbse.js",
    sections: { "Maths": 30 }
  },
  {
    id: "c10sci_jun22_cbse", title: "Std 10 Science — Chemical Substances & Matter",
    subject: "Science", class: "10", section: "std10", board: "cbse",
    questions: 30, duration: 50, password: "hindeclasses",
    live: true,   totalMarks: 30, questionsFile: "questions/c10sci_jun22_cbse.js",
    sections: { "Science": 30 }
  },
  {
    id: "c10sci_jul09_cbse", title: "Std 10 Science — Life Processes",
    subject: "Science", class: "10", section: "std10", board: "cbse",
    questions: 30, duration: 50, password: "hindeclasses",
    live: true,   totalMarks: 30, questionsFile: "questions/c10sci_jul09_cbse.js",
    sections: { "Science": 30 }
  },

  // ══════════════════════════════════════════════════════════
  //  🏆  MATHS OLYMPIAD  |  section: "olm"
  // ══════════════════════════════════════════════════════════
  {
    id: "olm001",      title: "Maths Olympiad — Level 1 (Class 6–8)",
    subject: "Maths",  class: "all", section: "olm",
    questions: 30,     duration: 45,  password: "hindeclasses",
    live:          true,        totalMarks: 30, questionsFile: "questions/olm001.js",
    sections: { "Number Theory": 10, "Geometry": 10, "Logical Maths": 10 }
  },

  // ══════════════════════════════════════════════════════════
  //  🔬  SCIENCE OLYMPIAD  |  section: "olsci"
  // ══════════════════════════════════════════════════════════
  {
    id: "olsci001",    title: "Science Olympiad — Level 1 (Class 6–8)",
    subject: "Science", class: "all", section: "olsci",
    questions: 30,     duration: 45,  password: "hindeclasses",
    live:          true,        totalMarks: 30, questionsFile: "questions/olsci001.js",
    sections: { "Physics": 10, "Chemistry": 10, "Biology": 10 }
  },

  // ── NTSE MAT MOCK TEST ──────────────────────────────────
  {
    id: "ntse_mat1",   title: "NTSE MAT Mock Test 1 — Advanced",
    subject: "MAT",    class: "ntse", section: "scholar",
    questions: 100,    duration: 120, password: "hindeclasses",
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
    questions: 10,  duration: 15, password: "hindeclasses",
    live: true,    totalMarks: 10,
    questionsFile: "questions/mat_t01a_number_series.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t01b", title: "MAT — Series Completion: Alphabet Series",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "hindeclasses",
    live: true,    totalMarks: 10,
    questionsFile: "questions/mat_t01b_alphabet_series.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t01c", title: "MAT — Series Completion: Letter Repeating Series",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "hindeclasses",
    live: true,    totalMarks: 10,
    questionsFile: "questions/mat_t01c_letter_repeating.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t02",  title: "MAT — Analogy",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "hindeclasses",
    live: true,    totalMarks: 10,
    questionsFile: "questions/mat_t02.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t03",  title: "MAT — Classification",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "hindeclasses",
    live: true,    totalMarks: 10,
    questionsFile: "questions/mat_t03.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t04",  title: "MAT — Alphabet Test",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "hindeclasses",
    live: true,    totalMarks: 10,
    questionsFile: "questions/mat_t04.js",
    sections: { "MAT": 10 }
  },
  {
    id: "mat_t05",  title: "MAT — Coding-Decoding Part 1",
    subject: "MAT", class: "all", section: "mat",
    questions: 10,  duration: 15, password: "hindeclasses",
    live: true,    totalMarks: 10,
    questionsFile: "questions/mat_t05.js",
    sections: { "MAT": 10 }
  }

];
// ============================================================
//  END OF CONFIG  —  Total updated | Last: 22 June 2026 calendar added
// ============================================================
