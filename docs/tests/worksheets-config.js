// ============================================================
//  worksheets-config.js — Hinde Classes
//  Practice Worksheets — subjective, no timer, no auto-score
//  Weightage: ×2 (relative to a normal test, for points formula)
//  Students submit → entry created in backend with NO score.
//  Teacher manually enters marks later via Apps Script sheet.
// ============================================================

var ALL_WORKSHEETS = [

  // ── STANDARD 7 ───────────────────────────────────────────
  {
    id: "c7sci_ws1",
    title: "Std 7 Science — Worksheet 1",
    subject: "Science",
    class: "7",
    section: "std7",
    chapters: [
      "Exploring Substances: Acidic, Basic and Neutral",
      "Electricity: Circuits and Their Components",
      "The World of Metals and Non-Metals"
    ],
    totalMarks: 55,
    weight: 2,                 // ×2 weightage vs a normal test
    live: true,
    questionsFile: "questions/c7sci_worksheet1.js"
  }

  // Add more worksheets here as they are created, e.g.:
  // {
  //   id: "c7mat_ws1",
  //   title: "Std 7 Maths — Worksheet 1",
  //   subject: "Maths",
  //   class: "7",
  //   section: "std7",
  //   chapters: ["Large Numbers Around Us", "Arithmetic Expressions"],
  //   totalMarks: 40,
  //   weight: 2,
  //   live: false,
  //   questionsFile: "questions/c7mat_worksheet1.js"
  // }

];

window.ALL_WORKSHEETS = ALL_WORKSHEETS;
