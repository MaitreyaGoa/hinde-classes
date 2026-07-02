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
  // Add this week's worksheets below as they're created & reviewed.
  // Template (copy, fill in, verify, then flip live:true):
  //
  // {
  //   id: "ws_goa_s7_math_20260703_01",
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
  //   questionsFile: "questions/ws_goa_s7_math_20260703_01.js"
  // },

];

window.ALL_WORKSHEETS = ALL_WORKSHEETS;
window.WS_BATCHES     = WS_BATCHES;
window.WS_SUBJECTS    = WS_SUBJECTS;
