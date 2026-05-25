// ============================================================
//  HINDE CLASSES – Visualizer Config
//  
//  HOW TO ADD A NEW VISUALIZER:
//  1. Create HTML file in public/visualizers/std{X}/name.html
//  2. Add entry in VISUALIZERS below for that std + subject
//  3. Set live: true to make it visible to students
// ============================================================

export const VISUALIZERS = {
  6: {
    Maths: [],
    Science: [],
    English: [],
    'Social Science': [],
  },
  7: {
    Maths: [],
    Science: [],
    English: [],
    'Social Science': [],
  },
  8: {
    Maths: [],
    Science: [],
    English: [],
    'Social Science': [],
  },
  9: {
    Maths: [],
    Science: [],
    English: [],
    'Social Science': [],
  },
  10: {
    Maths: [
      {
        id: 'viz_10_maths_ap',
        title: 'Arithmetic Progression Explorer',
        description: 'Visualize sequences, nth term and sum interactively',
        chapter: 'Chapter 5 – Arithmetic Progressions',
        file: 'visualizers/std10/arithmetic_progression.html',
        live: true,
      },
      {
        id: 'viz_10_maths_quad',
        title: 'Quadratic Graph Explorer',
        description: 'Change a, b, c and watch the parabola move live',
        chapter: 'Chapter 4 – Quadratic Equations',
        file: 'visualizers/std10/quadratic_graph.html',
        live: true,
      },
      {
        id: 'viz_10_maths_trig',
        title: 'Trigonometric Ratio Explorer',
        description: 'Unit circle with live sin, cos, tan values',
        chapter: 'Chapter 8 – Introduction to Trigonometry',
        file: 'visualizers/std10/trigonometry_ratios.html',
        live: true,
      },
      {
        id: 'viz_10_maths_tangent',
        title: 'Circle Tangent Explorer',
        description: 'Tangent lines from external point with live calculations',
        chapter: 'Chapter 10 – Circles',
        file: 'visualizers/std10/circle_tangent.html',
        live: true,
      },
      {
        id: 'viz_10_maths_prob',
        title: 'Probability Tree Diagram',
        description: 'Interactive tree diagrams for coin, die and bag experiments',
        chapter: 'Chapter 14 – Probability',
        file: 'visualizers/std10/probability_tree.html',
        live: true,
      },
    ],
    Science: [],
    English: [],
    'Social Science': [],
  },
  11: {
    Maths: [],
    Physics: [],
    Chemistry: [],
    Biology: [],
    English: [],
  },
  12: {
    Maths: [],
    Physics: [],
    Chemistry: [],
    Biology: [],
    English: [],
  },
}

// Get live visualizers for a class + subject
export function getLiveVisualizers(cls, subject) {
  return (VISUALIZERS[cls]?.[subject] || []).filter(v => v.live)
}

// Points awarded for opening a visualizer
export const VISUALIZER_PTS = 10
