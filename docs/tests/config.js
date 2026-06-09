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
  // ══════════════════════════════════════════════════════════
  {
    id: "c6eng1",      title: "Class 6 English — Parts of Speech",
    subject: "English", class: "6",  section: "std6",
    questions: 20,     duration: 25,  password: "c6eng1",
    live:          false,       totalMarks: 20, questionsFile: "questions/c6eng1.js",
    sections: { "English": 20 }
  },
  {
    id: "c6mat1",      title: "Class 6 Maths — Basic Algebra",
    subject: "Maths",  class: "6",   section: "std6",
    questions: 20,     duration: 25,  password: "c6mat1",
    live:          false,       totalMarks: 20, questionsFile: "questions/c6mat1.js",
    sections: { "Maths": 20 }
  },
  {
    id: "c6sci1",      title: "Class 6 Science — Food & Nutrition",
    subject: "Science", class: "6",  section: "std6",
    questions: 20,     duration: 25,  password: "c6sci1",
    live:          false,       totalMarks: 20, questionsFile: "questions/c6sci1.js",
    sections: { "Science": 20 }
  },

  // ══════════════════════════════════════════════════════════
  //  📒  STANDARD 7  |  section: "std7"
  // ══════════════════════════════════════════════════════════
  {
    id: "c7eng1",      title: "Class 7 English — Tenses",
    subject: "English", class: "7",  section: "std7",
    questions: 20,     duration: 25,  password: "c7eng1",
    live:          true,        totalMarks: 20, questionsFile: "questions/c7eng1.js",
    sections: { "English": 20 }
  },
  {
    id: "c7mat1",      title: "Class 7 Maths — Simple Equations",
    subject: "Maths",  class: "7",   section: "std7",
    questions: 20,     duration: 25,  password: "c7mat1",
    live:          true,        totalMarks: 20, questionsFile: "questions/c7mat1.js",
    sections: { "Maths": 20 }
  },
  {
    id: "c7sci1",      title: "Class 7 Science — Nutrition in Plants",
    subject: "Science", class: "7",  section: "std7",
    questions: 20,     duration: 25,  password: "c7sci1",
    live:          false,       totalMarks: 20, questionsFile: "questions/c7sci1.js",
    sections: { "Science": 20 }
  },
  {
    id: "c7sst1",      title: "Class 7 SST — Medieval India",
    subject: "Social Science", class: "7", section: "std7",
    questions: 20,     duration: 25,  password: "c7sst1",
    live:          false,       totalMarks: 20, questionsFile: "questions/c7sst1.js",
    sections: { "Social Science": 20 }
  },

  // ══════════════════════════════════════════════════════════
  //  📙  STANDARD 8  |  section: "std8"
  // ══════════════════════════════════════════════════════════
  {
    id: "c8eng1",      title: "Class 8 English — Active & Passive Voice",
    subject: "English", class: "8",  section: "std8",
    questions: 20,     duration: 25,  password: "c8eng1",
    live:          false,       totalMarks: 20, questionsFile: "questions/c8eng1.js",
    sections: { "English": 20 }
  },
  {
    id: "c8mat1",      title: "Class 8 Maths — Linear Equations",
    subject: "Maths",  class: "8",   section: "std8",
    questions: 20,     duration: 25,  password: "c8mat1",
    live:          false,       totalMarks: 20, questionsFile: "questions/c8mat1.js",
    sections: { "Maths": 20 }
  },
  {
    id: "c8sci1",      title: "Class 8 Science — Microorganisms",
    subject: "Science", class: "8",  section: "std8",
    questions: 20,     duration: 25,  password: "c8sci1",
    live:          true,        totalMarks: 20, questionsFile: "questions/c8sci1.js",
    sections: { "Science": 20 }
  },
  {
    id: "c8sst1",      title: "Class 8 SST — The Indian Constitution",
    subject: "Social Science", class: "8", section: "std8",
    questions: 20,     duration: 25,  password: "c8sst1",
    live:          false,       totalMarks: 20, questionsFile: "questions/c8sst1.js",
    sections: { "Social Science": 20 }
  },

  // ══════════════════════════════════════════════════════════
  //  📗  STANDARD 9  |  section: "std9"
  // ══════════════════════════════════════════════════════════
  {
    id: "c9eng1",      title: "Class 9 English — Reading Comprehension",
    subject: "English", class: "9",  section: "std9",
    questions: 20,     duration: 25,  password: "c9eng1",
    live:          false,       totalMarks: 20, questionsFile: "questions/c9eng1.js",
    sections: { "English": 20 }
  },
  {
    id: "c9mat1",      title: "Class 9 Maths — Number Systems",
    subject: "Maths",  class: "9",   section: "std9",
    questions: 25,     duration: 30,  password: "c9mat1",
    live:          false,       totalMarks: 25, questionsFile: "questions/c9mat1.js",
    sections: { "Maths": 25 }
  },
  {
    id: "c9sci1",      title: "Class 9 Science — Force & Motion",
    subject: "Science", class: "9",  section: "std9",
    questions: 25,     duration: 30,  password: "c9sci1",
    live:          true,        totalMarks: 25, questionsFile: "questions/c9sci1.js",
    sections: { "Science": 25 }
  },
  {
    id: "c9sst1",      title: "Class 9 SST — French Revolution",
    subject: "Social Science", class: "9", section: "std9",
    questions: 20,     duration: 25,  password: "c9sst1",
    live:          false,       totalMarks: 20, questionsFile: "questions/c9sst1.js",
    sections: { "Social Science": 20 }
  },

  // ══════════════════════════════════════════════════════════
  //  📘  STANDARD 10  |  section: "std10"
  // ══════════════════════════════════════════════════════════
  {
    id: "c10eng1",     title: "Class 10 English — Writing Skills & Grammar",
    subject: "English", class: "10", section: "std10",
    questions: 25,     duration: 30,  password: "c10eng1",
    live:          true,        totalMarks: 25, questionsFile: "questions/c10eng1.js",
    sections: { "English": 25 }
  },
  {
    id: "c10mat1",     title: "Class 10 Maths — Quadratic Equations",
    subject: "Maths",  class: "10",  section: "std10",
    questions: 25,     duration: 30,  password: "c10mat1",
    live:          true,        totalMarks: 25, questionsFile: "questions/c10mat1.js",
    sections: { "Maths": 25 }
  },
  {
    id: "c10mat2",     title: "Class 10 Maths — Trigonometry",
    subject: "Maths",  class: "10",  section: "std10",
    questions: 25,     duration: 30,  password: "c10mat2",
    live:          false,       totalMarks: 25, questionsFile: "questions/c10mat2.js",
    sections: { "Maths": 25 }
  },
  {
    id: "c10sci1",     title: "Class 10 Science — Chemical Reactions",
    subject: "Science", class: "10", section: "std10",
    questions: 25,     duration: 30,  password: "c10sci1",
    live:          false,       totalMarks: 25, questionsFile: "questions/c10sci1.js",
    sections: { "Science": 25 }
  },
  {
    id: "c10sci2",     title: "Class 10 Science — Life Processes",
    subject: "Science", class: "10", section: "std10",
    questions: 25,     duration: 30,  password: "c10sci2",
    live:          false,       totalMarks: 25, questionsFile: "questions/c10sci2.js",
    sections: { "Science": 25 }
  },
  {
    id: "c10sst1",     title: "Class 10 SST — Nationalism in India",
    subject: "Social Science", class: "10", section: "std10",
    questions: 20,     duration: 25,  password: "c10sst1",
    live:          false,       totalMarks: 20, questionsFile: "questions/c10sst1.js",
    sections: { "Social Science": 20 }
  },
  {
    id: "c10sst2",     title: "Class 10 SST — Resources & Development",
    subject: "Social Science", class: "10", section: "std10",
    questions: 20,     duration: 25,  password: "c10sst2",
    live:          false,       totalMarks: 20, questionsFile: "questions/c10sst2.js",
    sections: { "Social Science": 20 }
  },
  {
    id: "sub_c10mat1", title: "Class 10 Maths — Full Mock Test 1",
    subject: "Maths",  class: "10",  section: "std10",
    questions: 40,     duration: 60,  password: "s10mat1",
    live:          false,       totalMarks: 40, questionsFile: "questions/sub_c10mat1.js",
    sections: { "Maths": 40 }
  },
  {
    id: "sub_c10sci1", title: "Class 10 Science — Full Mock Test 1",
    subject: "Science", class: "10", section: "std10",
    questions: 40,     duration: 60,  password: "s10sci1",
    live:          false,       totalMarks: 40, questionsFile: "questions/sub_c10sci1.js",
    sections: { "Physics": 15, "Chemistry": 15, "Biology": 10 }
  },
  {
    id: "sp10b01",     title: "Class 10 Maths — CBSE Sample Paper 2025-26",
    subject: "Maths",  class: "10",  section: "std10",
    questions: 40,     duration: 60,  password: "sp10b01",
    live:          false,       totalMarks: 40, questionsFile: "questions/sp10b01.js",
    sections: { "Maths": 40 }
  },
  {
    id: "sp10b02",     title: "Class 10 Science — CBSE Sample Paper 2025-26",
    subject: "Science", class: "10", section: "std10",
    questions: 40,     duration: 60,  password: "sp10b02",
    live:          false,       totalMarks: 40, questionsFile: "questions/sp10b02.js",
    sections: { "Physics": 14, "Chemistry": 14, "Biology": 12 }
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
  }

];
// ============================================================
//  END OF CONFIG  —  Total: 56 tests across 12 sections
// ============================================================
