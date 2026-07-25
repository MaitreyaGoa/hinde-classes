// ============================================================
//  worksheets-library-config.js — Hinde Classes
//  Worksheets Hub — one-worksheet-per-chapter library
//
//  THIS IS THE ONLY FILE YOU NEED TO EDIT to add a new worksheet.
//  worksheets-hub.html reads from window.WORKSHEET_LIBRARY below.
//
//  ── HOW TO ADD A NEW WORKSHEET ──────────────────────────────
//  1. Upload your worksheet HTML file to the /worksheets/ folder
//     in the repo (same level as this config file).
//  2. Find the right standard + subject block below.
//  3. Add one entry to that subject's array, e.g.:
//
//       { num: 2, title: "Arithmetic Expressions",
//         html: "worksheets/arithmetic-expressions-worksheet.html",
//         pdf: "https://drive.google.com/file/d/PASTE_ID/view?usp=sharing",
//         meta: "" },
//
//  Fields:
//    num   - chapter number (shown as the small badge on the card)
//    title - card heading
//    html  - path to the HTML worksheet file (always starts with
//            "worksheets/" since that's where the files live)
//    pdf   - Google Drive share link, pasted as-is
//    meta  - optional short note under the title ("" if none)
//
//  Standard keys:  std7, std8, std9goa, std10goa, std9cbse
//  Subject keys:   maths, science, social, english
// ============================================================

const WORKSHEET_LIBRARY = {

  std7: {
    label: "Std 7", board: "Goa Board",
    subjects: {
      maths: [
        { num: 1, title: "Large Numbers Around Us",
          html: "worksheets/large-numbers-worksheet.html",
          pdf: "https://drive.google.com/file/d/1fXPmFlx-WyLBPLohOYvMqsobSn2h0XsD/view?usp=sharing",
          meta: "Includes full answer key for teachers" },
      ],
      science: [],
      social: [],
      english: [],
    }
  },

  std8: {
    label: "Std 8", board: "Goa Board",
    subjects: {
      maths: [
        { num: 3, title: "A Story of Numbers",
          html: "worksheets/story-of-numbers-worksheet.html",
          pdf: "https://drive.google.com/file/d/1ew6S1hjA-7GGHnQIcARpn_2tHKIyHIr4/view?usp=sharing",
          meta: "Complete concept sheet + practice worksheet, with teacher answer key" },
      ],
      science: [
        { num: 1, title: "Exploring the Investigative World of Science",
          html: "worksheets/investigative-world-of-science-worksheet.html",
          pdf: "https://drive.google.com/file/d/1T5fWRxb74dlAKpaMezL91gEIzf6bAPbg/view?usp=sharing",
          meta: "Scientific method, fair testing & variables — concept notes + practice + teacher answer key" },
        { num: 2, title: "The Invisible Living World: Beyond Our Naked Eye",
          html: "worksheets/invisible-living-world-worksheet.html",
          pdf: "https://drive.google.com/file/d/1TtBwEFo5zyFTg4gDS2E-EGwTFTHJOPmi/view?usp=sharing",
          meta: "Cells, microorganisms & their role — concept notes + practice + teacher answer key" },
      ],
      social: [],
      english: [],
    }
  },

  std9goa: {
    label: "Std 9", board: "Goa Board",
    subjects: {
      maths: [],
      science: [],
      social: [],
      english: [],
    }
  },

  std10goa: {
    label: "Std 10", board: "Goa Board",
    subjects: {
      maths: [],
      science: [],
      social: [],
      english: [],
    }
  },

  std9cbse: {
    label: "Std 9", board: "CBSE",
    subjects: {
      maths: [],
      science: [],
      social: [],
      english: [],
    }
  },

};

window.WORKSHEET_LIBRARY = WORKSHEET_LIBRARY;
