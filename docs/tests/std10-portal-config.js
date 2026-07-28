/* ============================================================
   STD 10 GOA BOARD PORTAL — CONFIG
   Academic Year 2026-27 · Hinde Classes

   This is the ONLY file you need to edit to update the portal:
   - Add a worksheet          → push into a chapter's `worksheets` array
   - Add a Drive PDF link     → fill in the `driveUrl` field
   - Add a new chapter        → add an object to `chapters` (or inside a section)
   - Mark a subject as ready  → nothing to do, it auto-detects from content

   Fields marked  // TODO  need a real link from you before going live.
   ============================================================ */

window.STD10_PORTAL = {

  academicYear: "2026-27",
  board: "Goa Board of Secondary & Higher Secondary Education",

  subjects: {

    // ============================================================
    // MATHEMATICS — Level 1 (Standard)
    // ============================================================
    maths: {
      label: "Mathematics",
      shortLabel: "Maths",
      icon: "📐",
      level: "Level 1 (Standard)",
      status: "ready",                 // ready | comingSoon
      accent: "teal",

      sampleModelPaper: {
        label: "Goa Board Model Paper (Level 1 – Standard)",
        driveUrl: ""                   // TODO: paste your Drive link to the official sample paper PDF
      },

      blueprint: {
        totalMarks: 80,
        totalTime: "3 hrs",
        totalQuestions: 42,
        pdfUrl: "assets/std10/maths-model-paper-blueprint.pdf", // generated blueprint breakdown (already built)
        objectivesTable: [
          { label: "Remembering & Understanding", marks: 44, pct: "55%" },
          { label: "Applying",                     marks: 19, pct: "24%" },
          { label: "Analysing, Evaluating & Creating", marks: 17, pct: "21%" }
        ],
        questionTypeTable: [
          { type: "VSA (1 mark)",   count: 20, marks: 20 },
          { type: "SA-I (2 marks)", count: 9,  marks: 18 },
          { type: "SA-II (3 marks)",count: 10, marks: 30 },
          { type: "LA (4 marks)",   count: 3,  marks: 12 }
        ],
        difficulty: [
          { label: "Easy", pct: "20%" },
          { label: "Average", pct: "60%" },
          { label: "Difficult", pct: "20%" }
        ]
      },

      // Maths uses SECTION grouping (A/B/C/D)
      sections: {
        A: {
          label: "Numbers & Algebra",
          marks: 30,
          chapters: [
            "Real Numbers", "Polynomials", "Pair of Linear Equations in Two Variables",
            "Quadratic Equations", "Arithmetic Progressions"
          ],
          worksheets: [
            {
              title: "Worksheet 1 (Complete Section)",
              html: "worksheets/std10-maths-section-a-worksheet-1.html",
              driveUrl: ""            // TODO: paste Drive PDF link
            }
          ]
        },
        B: {
          label: "Geometry",
          marks: 21,
          chapters: [
            "Triangles", "Coordinate Geometry", "Circles", "Areas Related to Circles"
          ],
          worksheets: [
            {
              title: "Worksheet 1 (Complete Section)",
              html: "worksheets/std10-maths-section-b-worksheet-1.html",
              driveUrl: ""            // TODO
            }
          ]
        },
        C: {
          label: "Trigonometry",
          marks: 10,
          chapters: [
            "Introduction to Trigonometry", "Some Applications of Trigonometry"
          ],
          worksheets: [
            {
              title: "Worksheet 1 (Complete Section)",
              html: "worksheets/std10-maths-section-c-worksheet-1.html",
              driveUrl: ""            // TODO
            }
          ]
        },
        D: {
          label: "Mensuration & Data",
          marks: 19,
          chapters: [
            "Surface Areas and Volumes", "Statistics", "Probability", "Logarithms"
          ],
          worksheets: [
            {
              title: "Worksheet 1 (Complete Section)",
              html: "worksheets/std10-maths-section-d-worksheet-1.html",
              driveUrl: ""            // TODO
            }
          ]
        }
      }
    },

    // ============================================================
    // SCIENCE
    // ============================================================
    science: {
      label: "Science",
      shortLabel: "Science",
      icon: "🔬",
      level: null,
      status: "comingSoon",            // chapters listed, worksheets not yet built
      accent: "coral",

      sampleModelPaper: {
        label: "Goa Board Model Paper — Science",
        driveUrl: ""                   // TODO
      },

      blueprint: {
        totalMarks: 70,
        totalTime: "180 min",
        totalQuestions: 39,
        pdfUrl: "",                    // TODO: add if you want a Science blueprint PDF like Maths
        objectivesTable: [
          { label: "Remembering",   marks: 21, pct: "30%" },
          { label: "Understanding", marks: 21, pct: "30%" },
          { label: "Application",   marks: 17, pct: "24%" },
          { label: "Analysis",      marks: 4,  pct: "6%" },
          { label: "Evaluation",    marks: 4,  pct: "6%" },
          { label: "Creativity",    marks: 3,  pct: "4%" }
        ],
        questionTypeTable: [
          { type: "VSA (1 mark)",    count: 18, marks: 18 },
          { type: "SA-I (2 marks)",  count: 14, marks: 28 },
          { type: "SA-II (3 marks)", count: 4,  marks: 12 },
          { type: "LA (4 marks)",    count: 3,  marks: 12 }
        ],
        difficulty: [
          { label: "Easy", pct: "20%" },
          { label: "Average", pct: "60%" },
          { label: "Difficult", pct: "20%" }
        ]
      },

      // Science uses a FLAT chapter list with a "tag" for filtering (Physics/Chemistry/Biology)
      // tag is display-only — purely a filter label, no structural effect
      chapters: [
        { name: "Chemical Reactions and Equations",     tag: "Chemistry", marks: 4, worksheets: [] },
        { name: "Acids, Bases and Salts",                tag: "Chemistry", marks: 6, worksheets: [] },
        { name: "Metals and Non-metals",                 tag: "Chemistry", marks: 4, worksheets: [] },
        { name: "Carbon and its Compounds",              tag: "Chemistry", marks: 6, worksheets: [] },
        { name: "Life Processes",                        tag: "Biology",   marks: 7, worksheets: [] },
        { name: "Control and Coordination",              tag: "Biology",   marks: 5, worksheets: [] },
        { name: "How do Organisms Reproduce?",           tag: "Biology",   marks: 6, worksheets: [] },
        { name: "Heredity",                              tag: "Biology",   marks: 3, worksheets: [] },
        { name: "Light – Reflection and Refraction",     tag: "Physics",   marks: 6, worksheets: [] },
        { name: "Human Eye and Colourful World",         tag: "Physics",   marks: 6, worksheets: [] },
        { name: "Electricity",                           tag: "Physics",   marks: 7, worksheets: [] },
        { name: "Magnetic Effect of Electric Current",   tag: "Physics",   marks: 6, worksheets: [] },
        { name: "Our Environment",                       tag: "Biology",   marks: 4, worksheets: [] }
      ]
    },

    // ============================================================
    // SOCIAL SCIENCE — placeholder, to be filled in later
    // ============================================================
    socialScience: {
      label: "Social Science",
      shortLabel: "Social Sci.",
      icon: "🌍",
      level: null,
      status: "comingSoon",
      accent: "gold",
      sampleModelPaper: { label: "Goa Board Model Paper — Social Science", driveUrl: "" },
      blueprint: null,               // TODO: fill in once assessment scheme is available
      chapters: []                   // TODO: add chapters as flat list, same shape as Science
    },

    // ============================================================
    // ENGLISH — placeholder, to be filled in later
    // ============================================================
    english: {
      label: "English",
      shortLabel: "English",
      icon: "📖",
      level: null,
      status: "comingSoon",
      accent: "gold",
      sampleModelPaper: { label: "Goa Board Model Paper — English", driveUrl: "" },
      blueprint: null,               // TODO
      chapters: []                   // TODO
    }

  }
};
