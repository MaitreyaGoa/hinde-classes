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
        { num: 2, title: "Arithmetic Expressions",
          html: "worksheets/std7-maths-ch2-arithmetic-expressions.html",
          pdf: "https://drive.google.com/file/d/1C0JBZvNdvc-HNTaR5lrrzMQ1kgIUYzez/view?usp=sharing",
          meta: "Simplifying and evaluating arithmetic expressions — concept notes + practice + teacher answer key" },
        { num: 3, title: "A Peek Beyond the Point",
          html: "worksheets/std7-maths-ch3-a-peek-beyond-the-point.html",
          pdf: "https://drive.google.com/file/d/1tsOzQK1j49U7EwPlleGclCMNjxVVcuVC/view?usp=sharing",
          meta: "Decimal numbers, place value & operations on decimals — concept notes + practice + teacher answer key" },
        { num: 4, title: "Expressions Using Letter-Numbers",
          html: "worksheets/std7-maths-ch4-expressions-using-letter-numbers.html",
          pdf: "https://drive.google.com/file/d/1GdCIh896lsesG47M9OqSgw-alCzPWfTv/view?usp=sharing",
          meta: "Variables, algebraic expressions & their evaluation — concept notes + practice + teacher answer key" },
      ],
      science: [
        { num: 1, title: "The Ever-Evolving World of Science",
          html: "worksheets/ever-evolving-world-of-science-worksheet.html",
          pdf: "https://drive.google.com/file/d/14rAWE5AUHiLog-EoiqRP2hco3-c_digh/view?usp=sharing",
          meta: "Nature of scientific knowledge & scientific inquiry — concept notes + practice + teacher answer key" },
        { num: 2, title: "Exploring Substances: Acidic, Basic and Neutral",
          html: "worksheets/acidic-basic-neutral-worksheet.html",
          pdf: "https://drive.google.com/file/d/12iQsaw0A_S97GqmEnrftzDJzJq6K0zat/view?usp=sharing",
          meta: "Litmus, natural indicators & neutralisation — concept notes + practice + teacher answer key" },
        { num: 3, title: "Electricity: Circuits and their Components",
          html: "worksheets/electricity-circuits-worksheet.html",
          pdf: "https://drive.google.com/file/d/1DZ9xDeJYxdioipx7r0NWBYt_-LJeFy97/view?usp=sharing",
          meta: "Torchlight, circuits, circuit diagrams & conductors/insulators — concept notes + practice + teacher answer key" },
      ],
      social: [],
      english: [],
    }
  },

  std8: {
    label: "Std 8", board: "Goa Board",
    subjects: {
      maths: [
        { num: 1, title: "A Square and A Cube",
          html: "worksheets/std8-maths-ch1-a-square-and-a-cube.html",
          pdf: "https://drive.google.com/file/d/1PZUbCm3FqRup7tXYecVtdzEqNtteaJNd/view?usp=sharing",
          meta: "Perfect squares, perfect cubes, square roots & cube roots — concept notes + practice + teacher answer key" },
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
      science: [ { num: 1, title: "Life Processes",
    html: "worksheets/Life_Processes_Worksheet.html",
    pdf: "https://drive.google.com/file/d/1XoESU9wkDaWLSxUbvEjTnaPfVB3Kc4Lu/view?usp=sharing",
    meta: "Complete concept notes + practice worksheet with teacher answer key" },],
      social: [],
      english: [],
    }
  },

  std9cbse: {
    label: "Std 9", board: "CBSE",
    subjects: {
      maths: [],
      science: [{
  num: 2,
  title: "Cell – Structure and Functions",
  html: "worksheets/Std9_CBSE_Science_Ch2_Cell_Worksheet_HindeClasses.html",
  pdf: "https://drive.google.com/file/d/1kkclCi25Yqb_QPCsjtqCxlNnJPv8dMiV/view?usp=sharing",
  meta: "Cell structure, organelles & functions — concept notes + practice + teacher answer key"
},],
      social: [],
      english: [],
    }
  },

};

window.WORKSHEET_LIBRARY = WORKSHEET_LIBRARY;
