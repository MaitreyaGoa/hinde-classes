// ============================================================
// HINDE CLASSES — config.js
// Central configuration for all tests
// ============================================================

var SCRIPT_URL = "YOUR_APPS_SCRIPT_URL";

// ============================================================
// CLASS_TESTS — Chapter-wise tests per class per subject
// ID prefix: c5_ c6_ c7_ c8_ c9_ c10_ c11_ c12_
// Password:  c10mat1, c9sci1, etc.
// ============================================================
var CLASS_TESTS = [

  // ---- CLASS 5 ----
  {
    id: "c5eng1",
    class: "5",
    subject: "English",
    chapter: "Grammar Basics",
    title: "Class 5 English — Grammar Basics",
    description: "20 questions · Chapter test · 25 min",
    password: "c5eng1",
    duration: 1500,
    totalMarks: 20,
    sections: { "English": 20 },
    questionsFile: "questions/c5eng1.js",
    live: false
  },
  {
    id: "c5mat1",
    class: "5",
    subject: "Maths",
    chapter: "Fractions",
    title: "Class 5 Maths — Fractions",
    description: "20 questions · Chapter test · 25 min",
    password: "c5mat1",
    duration: 1500,
    totalMarks: 20,
    sections: { "Maths": 20 },
    questionsFile: "questions/c5mat1.js",
    live: false
  },

  // ---- CLASS 6 ----
  {
    id: "c6eng1",
    class: "6",
    subject: "English",
    chapter: "Parts of Speech",
    title: "Class 6 English — Parts of Speech",
    description: "20 questions · Chapter test · 25 min",
    password: "c6eng1",
    duration: 1500,
    totalMarks: 20,
    sections: { "English": 20 },
    questionsFile: "questions/c6eng1.js",
    live: false
  },

  // ---- CLASS 7 ----
  {
    id: "c7eng1",
    class: "7",
    subject: "English",
    chapter: "Tenses",
    title: "Class 7 English — Tenses",
    description: "20 questions · Chapter test · 25 min",
    password: "c7eng1",
    duration: 1500,
    totalMarks: 20,
    sections: { "English": 20 },
    questionsFile: "questions/c7eng1.js",
    live: true
  },
  {
    id: "c7mat1",
    class: "7",
    subject: "Maths",
    chapter: "Simple Equations",
    title: "Class 7 Maths — Simple Equations",
    description: "20 questions · Chapter test · 25 min",
    password: "c7mat1",
    duration: 1500,
    totalMarks: 20,
    sections: { "Maths": 20 },
    questionsFile: "questions/c7mat1.js",
    live: true
  },
  {
    id: "c7sci1",
    class: "7",
    subject: "Science",
    chapter: "Nutrition in Plants",
    title: "Class 7 Science — Nutrition in Plants",
    description: "20 questions · Chapter test · 25 min",
    password: "c7sci1",
    duration: 1500,
    totalMarks: 20,
    sections: { "Science": 20 },
    questionsFile: "questions/c7sci1.js",
    live: false
  },

  // ---- CLASS 8 ----
  {
    id: "c8eng1",
    class: "8",
    subject: "English",
    chapter: "Active & Passive Voice",
    title: "Class 8 English — Active & Passive Voice",
    description: "20 questions · Chapter test · 25 min",
    password: "c8eng1",
    duration: 1500,
    totalMarks: 20,
    sections: { "English": 20 },
    questionsFile: "questions/c8eng1.js",
    live: false
  },
  {
    id: "c8sci1",
    class: "8",
    subject: "Science",
    chapter: "Microorganisms",
    title: "Class 8 Science — Microorganisms",
    description: "20 questions · Chapter test · 25 min",
    password: "c8sci1",
    duration: 1500,
    totalMarks: 20,
    sections: { "Science": 20 },
    questionsFile: "questions/c8sci1.js",
    live: true
  },
  {
    id: "c8mat1",
    class: "8",
    subject: "Maths",
    chapter: "Linear Equations in One Variable",
    title: "Class 8 Maths — Linear Equations",
    description: "20 questions · Chapter test · 25 min",
    password: "c8mat1",
    duration: 1500,
    totalMarks: 20,
    sections: { "Maths": 20 },
    questionsFile: "questions/c8mat1.js",
    live: false
  },

  // ---- CLASS 9 ----
  {
    id: "c9eng1",
    class: "9",
    subject: "English",
    chapter: "Reading Comprehension",
    title: "Class 9 English — Reading Comprehension",
    description: "20 questions · Chapter test · 25 min",
    password: "c9eng1",
    duration: 1500,
    totalMarks: 20,
    sections: { "English": 20 },
    questionsFile: "questions/c9eng1.js",
    live: false
  },
  {
    id: "c9sci1",
    class: "9",
    subject: "Science",
    chapter: "Force & Motion",
    title: "Class 9 Science — Force & Motion",
    description: "25 questions · Chapter test · 30 min",
    password: "c9sci1",
    duration: 1800,
    totalMarks: 25,
    sections: { "Science": 25 },
    questionsFile: "questions/c9sci1.js",
    live: true
  },
  {
    id: "c9mat1",
    class: "9",
    subject: "Maths",
    chapter: "Number Systems",
    title: "Class 9 Maths — Number Systems",
    description: "25 questions · Chapter test · 30 min",
    password: "c9mat1",
    duration: 1800,
    totalMarks: 25,
    sections: { "Maths": 25 },
    questionsFile: "questions/c9mat1.js",
    live: false
  },
  {
    id: "c9sst1",
    class: "9",
    subject: "Social Science",
    chapter: "French Revolution",
    title: "Class 9 SST — French Revolution",
    description: "20 questions · Chapter test · 25 min",
    password: "c9sst1",
    duration: 1500,
    totalMarks: 20,
    sections: { "Social Science": 20 },
    questionsFile: "questions/c9sst1.js",
    live: false
  },

  // ---- CLASS 10 ----
  {
    id: "c10eng1",
    class: "10",
    subject: "English",
    chapter: "Writing Skills & Grammar",
    title: "Class 10 English — Writing Skills & Grammar",
    description: "25 questions · Chapter test · 30 min",
    password: "c10eng1",
    duration: 1800,
    totalMarks: 25,
    sections: { "English": 25 },
    questionsFile: "questions/c10eng1.js",
    live: true
  },
  {
    id: "c10mat1",
    class: "10",
    subject: "Maths",
    chapter: "Quadratic Equations",
    title: "Class 10 Maths — Quadratic Equations",
    description: "25 questions · Chapter test · 30 min",
    password: "c10mat1",
    duration: 1800,
    totalMarks: 25,
    sections: { "Maths": 25 },
    questionsFile: "questions/c10mat1.js",
    live: true
  },
  {
    id: "c10sci1",
    class: "10",
    subject: "Science",
    chapter: "Chemical Reactions & Equations",
    title: "Class 10 Science — Chemical Reactions",
    description: "25 questions · Chapter test · 30 min",
    password: "c10sci1",
    duration: 1800,
    totalMarks: 25,
    sections: { "Science": 25 },
    questionsFile: "questions/c10sci1.js",
    live: false
  },
  {
    id: "c10sst1",
    class: "10",
    subject: "Social Science",
    chapter: "Nationalism in India",
    title: "Class 10 SST — Nationalism in India",
    description: "20 questions · Chapter test · 25 min",
    password: "c10sst1",
    duration: 1500,
    totalMarks: 20,
    sections: { "Social Science": 20 },
    questionsFile: "questions/c10sst1.js",
    live: false
  },

  // ---- CLASS 11 ----
  {
    id: "c11eng1",
    class: "11",
    subject: "English",
    chapter: "Prose & Poetry Analysis",
    title: "Class 11 English — Prose & Poetry Analysis",
    description: "25 questions · Chapter test · 30 min",
    password: "c11eng1",
    duration: 1800,
    totalMarks: 25,
    sections: { "English": 25 },
    questionsFile: "questions/c11eng1.js",
    live: false
  },
  {
    id: "c11phy1",
    class: "11",
    subject: "Physics",
    chapter: "Units & Measurement",
    title: "Class 11 Physics — Units & Measurement",
    description: "25 questions · Chapter test · 30 min",
    password: "c11phy1",
    duration: 1800,
    totalMarks: 25,
    sections: { "Physics": 25 },
    questionsFile: "questions/c11phy1.js",
    live: false
  },
  {
    id: "c11chem1",
    class: "11",
    subject: "Chemistry",
    chapter: "Some Basic Concepts",
    title: "Class 11 Chemistry — Basic Concepts",
    description: "25 questions · Chapter test · 30 min",
    password: "c11chem1",
    duration: 1800,
    totalMarks: 25,
    sections: { "Chemistry": 25 },
    questionsFile: "questions/c11chem1.js",
    live: false
  },

  // ---- CLASS 12 ----
  {
    id: "c12eng1",
    class: "12",
    subject: "English",
    chapter: "Board Writing & Comprehension",
    title: "Class 12 English — Board Writing & Comprehension",
    description: "25 questions · Board pattern · 30 min",
    password: "c12eng1",
    duration: 1800,
    totalMarks: 25,
    sections: { "English": 25 },
    questionsFile: "questions/c12eng1.js",
    live: false
  },
  {
    id: "c12phy1",
    class: "12",
    subject: "Physics",
    chapter: "Electric Charges & Fields",
    title: "Class 12 Physics — Electric Charges & Fields",
    description: "25 questions · Chapter test · 30 min",
    password: "c12phy1",
    duration: 1800,
    totalMarks: 25,
    sections: { "Physics": 25 },
    questionsFile: "questions/c12phy1.js",
    live: false
  },
  {
    id: "c12mat1",
    class: "12",
    subject: "Maths",
    chapter: "Relations & Functions",
    title: "Class 12 Maths — Relations & Functions",
    description: "25 questions · Chapter test · 30 min",
    password: "c12mat1",
    duration: 1800,
    totalMarks: 25,
    sections: { "Maths": 25 },
    questionsFile: "questions/c12mat1.js",
    live: false
  }
];

// ============================================================
// SUBJECT_TESTS — Full subject mock tests
// ID prefix: sub_
// Password:  s10sci1, s9mat1, etc.
// ============================================================
var SUBJECT_TESTS = [
  {
    id: "sub_c10mat1",
    class: "10",
    subject: "Maths",
    title: "Class 10 Maths — Full Mock Test 1",
    description: "40 questions · Annual pattern · 60 min",
    password: "s10mat1",
    duration: 3600,
    totalMarks: 40,
    sections: { "Maths": 40 },
    questionsFile: "questions/sub_c10mat1.js",
    live: false
  },
  {
    id: "sub_c10sci1",
    class: "10",
    subject: "Science",
    title: "Class 10 Science — Full Mock Test 1",
    description: "40 questions · Annual pattern · 60 min",
    password: "s10sci1",
    duration: 3600,
    totalMarks: 40,
    sections: { "Physics": 15, "Chemistry": 15, "Biology": 10 },
    questionsFile: "questions/sub_c10sci1.js",
    live: false
  },
  {
    id: "sub_c9sci1",
    class: "9",
    subject: "Science",
    title: "Class 9 Science — Half-Yearly Mock",
    description: "35 questions · Half-yearly pattern · 45 min",
    password: "s9sci1",
    duration: 2700,
    totalMarks: 35,
    sections: { "Physics": 12, "Chemistry": 12, "Biology": 11 },
    questionsFile: "questions/sub_c9sci1.js",
    live: false
  },
  {
    id: "sub_c12phy1",
    class: "12",
    subject: "Physics",
    title: "Class 12 Physics — Full Mock Test 1",
    description: "35 questions · Board pattern · 60 min",
    password: "s12phy1",
    duration: 3600,
    totalMarks: 35,
    sections: { "Physics": 35 },
    questionsFile: "questions/sub_c12phy1.js",
    live: false
  }
];

// ============================================================
// OLYMPIAD_TESTS — Maths & Science olympiad prep
// ID prefix: olm_ (maths) / olsci_ (science)
// Password:  olm001, olsci001, etc.
// ============================================================
var OLYMPIAD_TESTS = [
  {
    id: "olm001",
    subject: "Maths",
    title: "Maths Olympiad — Level 1 (Class 6–8)",
    description: "30 questions · Olympiad pattern · 45 min",
    password: "olm001",
    duration: 2700,
    totalMarks: 30,
    sections: { "Number Theory": 10, "Geometry": 10, "Logical Maths": 10 },
    questionsFile: "questions/olm001.js",
    live: true
  },
  {
    id: "olm002",
    subject: "Maths",
    title: "Maths Olympiad — Level 2 (Class 9–10)",
    description: "30 questions · Olympiad pattern · 45 min",
    password: "olm002",
    duration: 2700,
    totalMarks: 30,
    sections: { "Algebra": 10, "Number Theory": 10, "Combinatorics": 10 },
    questionsFile: "questions/olm002.js",
    live: false
  },
  {
    id: "olsci001",
    subject: "Science",
    title: "Science Olympiad — Level 1 (Class 6–8)",
    description: "30 questions · Mixed Science · 45 min",
    password: "olsci001",
    duration: 2700,
    totalMarks: 30,
    sections: { "Physics": 10, "Chemistry": 10, "Biology": 10 },
    questionsFile: "questions/olsci001.js",
    live: true
  },
  {
    id: "olsci002",
    subject: "Science",
    title: "Science Olympiad — Level 2 (Class 9–10)",
    description: "30 questions · Mixed Science · 45 min",
    password: "olsci002",
    duration: 2700,
    totalMarks: 30,
    sections: { "Physics": 10, "Chemistry": 10, "Biology": 10 },
    questionsFile: "questions/olsci002.js",
    live: false
  }
];

// ============================================================
// SCHOLARSHIP_TESTS — NTS / State scholarship pattern
// ID prefix: nts_
// Password:  nts001, nts002, etc.
// ============================================================
var SCHOLARSHIP_TESTS = [
  {
    id: "nts001",
    title: "NTSE Stage 1 — MAT Practice (Class 10)",
    description: "40 questions · Mental Ability · 45 min",
    password: "nts001",
    duration: 2700,
    totalMarks: 40,
    sections: { "MAT": 40 },
    questionsFile: "questions/nts001.js",
    live: false
  },
  {
    id: "nts002",
    title: "NTSE Stage 1 — SAT Practice (Class 10)",
    description: "40 questions · Scholastic Aptitude · 45 min",
    password: "nts002",
    duration: 2700,
    totalMarks: 40,
    sections: { "Science": 15, "Maths": 15, "Social Science": 10 },
    questionsFile: "questions/nts002.js",
    live: false
  },
  {
    id: "nts003",
    title: "State Scholarship — Class 8 Practice",
    description: "50 questions · State pattern · 60 min",
    password: "nts003",
    duration: 3600,
    totalMarks: 50,
    sections: { "Maths": 20, "Science": 20, "GK": 10 },
    questionsFile: "questions/nts003.js",
    live: false
  }
];

// ============================================================
// DAILY_QUIZ — One daily mixed quiz per class group
// ID prefix: dq_
// Password:  dqDDMMYY (date-based)
// ============================================================
var DAILY_QUIZ = [
  {
    id: "dq080626",
    classGroup: "6-8",
    title: "Daily Quiz — Class 6–8 · 8 June 2026",
    description: "10 questions · Mixed · 10 min · Free!",
    password: "dq080626",
    duration: 600,
    totalMarks: 10,
    sections: { "Mixed": 10 },
    questionsFile: "questions/dq080626.js",
    live: true
  },
  {
    id: "dq080626b",
    classGroup: "9-10",
    title: "Daily Quiz — Class 9–10 · 8 June 2026",
    description: "10 questions · Mixed · 10 min · Free!",
    password: "dq080626b",
    duration: 600,
    totalMarks: 10,
    sections: { "Mixed": 10 },
    questionsFile: "questions/dq080626b.js",
    live: true
  }
];

// ============================================================
// SPECIAL_TESTS — Board exam papers (Class 10 & 12 CBSE)
// ID prefix: sp_
// Password:  sp10b01, sp12b01, etc.
// ============================================================
var SPECIAL_TESTS = [
  {
    id: "sp10b01",
    class: "10",
    title: "CBSE Class 10 Maths — Sample Paper 2025-26",
    description: "40 questions · Board pattern · 60 min",
    password: "sp10b01",
    duration: 3600,
    totalMarks: 40,
    sections: { "Maths": 40 },
    questionsFile: "questions/sp10b01.js",
    live: false
  },
  {
    id: "sp10b02",
    class: "10",
    title: "CBSE Class 10 Science — Sample Paper 2025-26",
    description: "40 questions · Board pattern · 60 min",
    password: "sp10b02",
    duration: 3600,
    totalMarks: 40,
    sections: { "Physics": 14, "Chemistry": 14, "Biology": 12 },
    questionsFile: "questions/sp10b02.js",
    live: false
  },
  {
    id: "sp12b01",
    class: "12",
    title: "CBSE Class 12 Physics — Sample Paper 2025-26",
    description: "35 questions · Board pattern · 60 min",
    password: "sp12b01",
    duration: 3600,
    totalMarks: 35,
    sections: { "Physics": 35 },
    questionsFile: "questions/sp12b01.js",
    live: false
  },
  {
    id: "sp12b02",
    class: "12",
    title: "CBSE Class 12 Maths — Sample Paper 2025-26",
    description: "35 questions · Board pattern · 60 min",
    password: "sp12b02",
    duration: 3600,
    totalMarks: 35,
    sections: { "Maths": 35 },
    questionsFile: "questions/sp12b02.js",
    live: false
  }
];
