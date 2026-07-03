// ============================================================
//  worksheets-config.js — Hinde Classes
//  Practice Worksheets — subjective, no timer, no auto-score
//  Weightage: ×2 (relative to a normal test, for points formula)
//  Students submit → entry created in backend with NO score.
//  Teacher manually enters marks later via Apps Script sheet.
//
//  WEEKLY PLAN (starting Week of 3 Jul 2026):
//    Per batch, per week →  4 Maths worksheets + 1 Science
//    question bank + 1 Social Science question bank.
//    15–20 questions per worksheet.
//
//  BATCHES (5 total):
//    Std 7  · Goa Board
//    Std 8  · Goa Board
//    Std 9  · Goa Board
//    Std 10 · Goa Board
//    Std 9  · CBSE
//
//  ID CONVENTION:
//    ws_<board>_s<class>_<subjectCode>_<weekISO no-dashes>_<seq>
//    e.g. ws_goa_s8_math_20260703_02
//         (Week of 3 Jul 2026, Std 8 Goa Board, Maths worksheet #2)
//    subjectCode: math | sci | ss
//
//  "week" field = ISO date (YYYY-MM-DD) of the MONDAY that week
//  starts on. The portal computes the display label ("3 Jul")
//  from this automatically — don't hardcode labels here.
// ============================================================

// ── BATCH REGISTRY — used by the worksheets portal to build
//    the Subject → Week → Batch grid. Add a batch here ONLY
//    when you actually start a new board/standard combo. ──
var WS_BATCHES = [
  { board: "goa",  class: "7",  section: "std7",  label: "Std 7 · Goa Board"  },
  { board: "goa",  class: "8",  section: "std8",  label: "Std 8 · Goa Board"  },
  { board: "goa",  class: "9",  section: "std9",  label: "Std 9 · Goa Board"  },
  { board: "goa",  class: "10", section: "std10", label: "Std 10 · Goa Board" },
  { board: "cbse", class: "9",  section: "std9",  label: "Std 9 · CBSE"       }
];

// ── SUBJECT DISPLAY ORDER (portal renders tabs in this order) ──
var WS_SUBJECTS = ["Maths", "Science", "Social Science"];

var ALL_WORKSHEETS = [

  // ── Week of 3 Jul 2026 ──────────────────────────────────────
  {
    id: "ws_goa_s7_math_20260703_00",
    title: "Std 7 Maths (Goa) — July Starter Test (Combined Syllabus)",
    subject: "Maths",
    class: "7",
    section: "std7",
    board: "goa",
    week: "2026-07-03",
    chapters: ["Large Numbers Around Us", "Arithmetic Expressions", "A Peek Beyond the Point"],
    totalMarks: 79,
    weight: 2,
    live: true,
    questionsFile: "questions/ws_goa_s7_math_20260703_00.js"
  },

  {
    id: "ws_goa_s8_math_20260703_00",
    title: "Std 8 Maths (Goa) — July Starter Test (Combined Syllabus)",
    subject: "Maths",
    class: "8",
    section: "std8",
    board: "goa",
    week: "2026-07-03",
    chapters: ["A Story of Numbers", "Quadrilaterals", "Number Play"],
    totalMarks: 78,
    weight: 2,
    live: true,
    questionsFile: "questions/ws_goa_s8_math_20260703_00.js"
  },

  {
    id: "ws_goa_s9_math_20260703_00",
    title: "Std 9 Maths (Goa) — July Starter Test (Combined Syllabus)",
    subject: "Maths",
    class: "9",
    section: "std9",
    board: "goa",
    week: "2026-07-03",
    chapters: ["Number Systems", "Polynomials", "Lines and Angles"],
    totalMarks: 78,
    weight: 2,
    live: true,
    questionsFile: "questions/ws_goa_s9_math_20260703_00.js"
  },

  {
    id: "ws_goa_s10_math_20260703_00",
    title: "Std 10 Maths (Goa) — July Starter Test (Combined Syllabus)",
    subject: "Maths",
    class: "10",
    section: "std10",
    board: "goa",
    week: "2026-07-03",
    chapters: ["Polynomials", "Pair of Linear Equations in Two Variables", "Quadratic Equations"],
    totalMarks: 78,
    weight: 2,
    live: true,
    questionsFile: "questions/ws_goa_s10_math_20260703_00.js"
  },

  {
    id: "ws_cbse_s9_math_20260703_00",
    title: "Std 9 Maths (CBSE) — July Starter Test (Ganita Manjari Ch 1–4)",
    subject: "Maths",
    class: "9",
    section: "std9",
    board: "cbse",
    week: "2026-07-03",
    chapters: ["Orienting Yourself: Coordinates", "Introduction to Linear Polynomials", "The World of Numbers", "Exploring Algebraic Identities"],
    totalMarks: 68,
    weight: 2,
    live: true,
    questionsFile: "questions/ws_cbse_s9_math_20260703_00.js"
  },

  {
    id: "ws_goa_s8_math_20260704_01",
    title: "Std 8 Maths (Goa) — A Story of Numbers — Worksheet 1",
    subject: "Maths",
    class: "8",
    section: "std8",
    board: "goa",
    week: "2026-07-04",
    chapters: ["A Story of Numbers"],
    totalMarks: 64,
    weight: 2,
    live: true,
    questionsFile: "questions/ws_goa_s8_math_20260704_01.js"
  },

  {
    id: "ws_goa_s8_math_20260706_01",
    title: "Std 8 Maths (Goa) — A Story of Numbers — Worksheet 2",
    subject: "Maths",
    class: "8",
    section: "std8",
    board: "goa",
    week: "2026-07-06",
    chapters: ["A Story of Numbers"],
    totalMarks: 64,
    weight: 2,
    live: true,
    questionsFile: "questions/ws_goa_s8_math_20260706_01.js"
  },

  {
    id: "ws_goa_s8_math_20260707_01",
    title: "Std 8 Maths (Goa) — A Story of Numbers — Worksheet 3",
    subject: "Maths",
    class: "8",
    section: "std8",
    board: "goa",
    week: "2026-07-07",
    chapters: ["A Story of Numbers"],
    totalMarks: 68,
    weight: 2,
    live: true,
    questionsFile: "questions/ws_goa_s8_math_20260707_01.js"
  },

  {
    id: "ws_goa_s8_math_20260708_01",
    title: "Std 8 Maths (Goa) — A Story of Numbers — Worksheet 4",
    subject: "Maths",
    class: "8",
    section: "std8",
    board: "goa",
    week: "2026-07-08",
    chapters: ["A Story of Numbers"],
    totalMarks: 68,
    weight: 2,
    live: true,
    questionsFile: "questions/ws_goa_s8_math_20260708_01.js"
  },

  {
    id: "ws_goa_s8_math_20260711_01",
    title: "Std 8 Maths (Goa) — A Story of Numbers — Worksheet 5",
    subject: "Maths",
    class: "8",
    section: "std8",
    board: "goa",
    week: "2026-07-11",
    chapters: ["A Story of Numbers"],
    totalMarks: 68,
    weight: 2,
    live: true,
    questionsFile: "questions/ws_goa_s8_math_20260711_01.js"
  },

  {
    id: "ws_goa_s8_math_20260713_01",
    title: "Std 8 Maths (Goa) — A Story of Numbers — Worksheet 6",
    subject: "Maths",
    class: "8",
    section: "std8",
    board: "goa",
    week: "2026-07-13",
    chapters: ["A Story of Numbers"],
    totalMarks: 68,
    weight: 2,
    live: true,
    questionsFile: "questions/ws_goa_s8_math_20260713_01.js"
  },

  {
    id: "ws_goa_s7_math_20260704_01",
    title: "Std 7 Maths (Goa) — Large Numbers Around Us — Worksheet 1",
    subject: "Maths",
    class: "7",
    section: "std7",
    board: "goa",
    week: "2026-07-04",
    chapters: ["Large Numbers Around Us"],
    totalMarks: 62,
    weight: 2,
    live: true,
    questionsFile: "questions/ws_goa_s7_math_20260704_01.js"
  },

  {
    id: "ws_goa_s7_math_20260706_01",
    title: "Std 7 Maths (Goa) — Large Numbers Around Us — Worksheet 2",
    subject: "Maths",
    class: "7",
    section: "std7",
    board: "goa",
    week: "2026-07-06",
    chapters: ["Large Numbers Around Us"],
    totalMarks: 63,
    weight: 2,
    live: true,
    questionsFile: "questions/ws_goa_s7_math_20260706_01.js"
  },

  {
    id: "ws_goa_s7_math_20260707_01",
    title: "Std 7 Maths (Goa) — Large Numbers Around Us — Worksheet 3",
    subject: "Maths",
    class: "7",
    section: "std7",
    board: "goa",
    week: "2026-07-07",
    chapters: ["Large Numbers Around Us"],
    totalMarks: 61,
    weight: 2,
    live: true,
    questionsFile: "questions/ws_goa_s7_math_20260707_01.js"
  },

  {
    id: "ws_goa_s7_math_20260708_01",
    title: "Std 7 Maths (Goa) — Large Numbers Around Us — Worksheet 4",
    subject: "Maths",
    class: "7",
    section: "std7",
    board: "goa",
    week: "2026-07-08",
    chapters: ["Large Numbers Around Us"],
    totalMarks: 68,
    weight: 2,
    live: true,
    questionsFile: "questions/ws_goa_s7_math_20260708_01.js"
  },

  {
    id: "ws_goa_s7_math_20260711_01",
    title: "Std 7 Maths (Goa) — Large Numbers Around Us — Worksheet 5",
    subject: "Maths",
    class: "7",
    section: "std7",
    board: "goa",
    week: "2026-07-11",
    chapters: ["Large Numbers Around Us"],
    totalMarks: 66,
    weight: 2,
    live: true,
    questionsFile: "questions/ws_goa_s7_math_20260711_01.js"
  },

  {
    id: "ws_goa_s7_math_20260713_01",
    title: "Std 7 Maths (Goa) — Large Numbers Around Us — Worksheet 6",
    subject: "Maths",
    class: "7",
    section: "std7",
    board: "goa",
    week: "2026-07-13",
    chapters: ["Large Numbers Around Us"],
    totalMarks: 63,
    weight: 2,
    live: true,
    questionsFile: "questions/ws_goa_s7_math_20260713_01.js"
  },

  // Add this week's remaining worksheets below as they're created & reviewed.
  // Template (copy, fill in, verify, then flip live:true):
  //
  // {
  //   id: "ws_goa_s7_math_20260704_01",
  //   title: "Std 7 Maths (Goa) — Worksheet 1",
  //   subject: "Maths",
  //   class: "7",
  //   section: "std7",
  //   board: "goa",
  //   week: "2026-07-03",
  //   chapters: ["Large Numbers Around Us"],
  //   totalMarks: 40,
  //   weight: 2,
  //   live: false,
  //   questionsFile: "questions/ws_goa_s7_math_20260704_01.js"
  // },

];

window.ALL_WORKSHEETS = ALL_WORKSHEETS;
window.WS_BATCHES     = WS_BATCHES;
window.WS_SUBJECTS    = WS_SUBJECTS;
