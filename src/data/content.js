// ============================================================
//  HINDE CLASSES – Content Database
//  Edit this file to add/update notes, tests, videos per class
// ============================================================

export const CLASSES = [5, 6, 7, 8, 9, 10, 11, 12]

export const SUBJECTS = {
  5:  ['Maths', 'Science', 'English', 'Hindi', 'Social Studies'],
  6:  ['Maths', 'Science', 'English', 'Hindi', 'Social Studies'],
  7:  ['Maths', 'Science', 'English', 'Hindi', 'Social Studies'],
  8:  ['Maths', 'Science', 'English', 'Hindi', 'Social Studies'],
  9:  ['Maths', 'Science', 'English', 'Hindi', 'Social Science'],
  10: ['Maths', 'Science', 'English', 'Hindi', 'Social Science'],
  11: ['Maths', 'Physics', 'Chemistry', 'Biology', 'English'],
  12: ['Maths', 'Physics', 'Chemistry', 'Biology', 'English'],
}

// Points awarded per activity type
export const POINTS = {
  notes:  10,
  test:   30,
  video:  15,
  login:   5,
  mock:   50,
}

// Content per class – duplicate & customize as needed
const makeNotes = (cls) => [
  { id: `n${cls}01`, title: 'Chapter 1 – Introduction & Basics',    meta: '20 pages · PDF',    pts: POINTS.notes, subject: SUBJECTS[cls][0] },
  { id: `n${cls}02`, title: 'Chapter 2 – Core Concepts Explained',  meta: '28 pages · PDF',    pts: POINTS.notes, subject: SUBJECTS[cls][0] },
  { id: `n${cls}03`, title: 'Chapter 3 – Advanced Problem Solving',  meta: '22 pages · PDF',    pts: POINTS.notes, subject: SUBJECTS[cls][1] },
  { id: `n${cls}04`, title: 'Chapter 4 – Revision & Summary Notes', meta: '12 pages · PDF',    pts: POINTS.notes, subject: SUBJECTS[cls][1] },
  { id: `n${cls}05`, title: 'Chapter 5 – Formula & Quick Reference', meta: '6 pages · PDF',    pts: POINTS.notes, subject: SUBJECTS[cls][0] },
  { id: `n${cls}06`, title: 'Mid-Term Revision Notes',               meta: '18 pages · PDF',    pts: POINTS.notes, subject: SUBJECTS[cls][2] },
  { id: `n${cls}07`, title: 'Final Exam Preparation Notes',          meta: '30 pages · PDF',    pts: POINTS.notes, subject: SUBJECTS[cls][3] },
]

const makeTests = (cls) => [
  { id: `t${cls}01`, title: 'Unit Test 1 – Fundamentals',    meta: '20 Questions · 30 min',  pts: POINTS.test,  subject: SUBJECTS[cls][0], type: 'unit'  },
  { id: `t${cls}02`, title: 'Unit Test 2 – Intermediate',    meta: '25 Questions · 40 min',  pts: POINTS.test,  subject: SUBJECTS[cls][1], type: 'unit'  },
  { id: `t${cls}03`, title: 'Weekly Quiz – Chapter 1 & 2',   meta: '10 Questions · 15 min',  pts: 15,           subject: SUBJECTS[cls][0], type: 'quiz'  },
  { id: `t${cls}04`, title: 'Weekly Quiz – Chapter 3 & 4',   meta: '10 Questions · 15 min',  pts: 15,           subject: SUBJECTS[cls][1], type: 'quiz'  },
  { id: `t${cls}05`, title: 'Mid-Term Mock Test',             meta: '40 Questions · 60 min',  pts: POINTS.mock,  subject: 'All Subjects',   type: 'mock'  },
  { id: `t${cls}06`, title: 'Full Syllabus Mock Test',        meta: '50 Questions · 90 min',  pts: POINTS.mock,  subject: 'All Subjects',   type: 'mock'  },
]

const makeVideos = (cls) => [
  { id: `v${cls}01`, title: 'Lecture 1 – Foundation Concepts',      meta: '45 min · HD Video', pts: POINTS.video, subject: SUBJECTS[cls][0] },
  { id: `v${cls}02`, title: 'Lecture 2 – Detailed Walkthrough',     meta: '52 min · HD Video', pts: POINTS.video, subject: SUBJECTS[cls][0] },
  { id: `v${cls}03`, title: 'Lecture 3 – Problem Solving Session',  meta: '38 min · HD Video', pts: POINTS.video, subject: SUBJECTS[cls][1] },
  { id: `v${cls}04`, title: 'Lecture 4 – Revision & Exam Tips',     meta: '28 min · HD Video', pts: POINTS.video, subject: SUBJECTS[cls][1] },
  { id: `v${cls}05`, title: 'Lecture 5 – Advanced Topics',          meta: '55 min · HD Video', pts: POINTS.video, subject: SUBJECTS[cls][2] },
  { id: `v${cls}06`, title: 'Doubt Clearing Session – Q&A',         meta: '60 min · HD Video', pts: 20,           subject: 'All Subjects'   },
]

// Build content for all classes
export const CONTENT = {}
CLASSES.forEach(cls => {
  CONTENT[cls] = {
    notes:  makeNotes(cls),
    tests:  makeTests(cls),
    videos: makeVideos(cls),
  }
})

// Leaderboard mock data (replace with real Google Sheets data)
export const LEVEL_CONFIG = [
  { name: 'Beginner',  min: 0,    max: 200,  icon: '🌱', color: '#059669' },
  { name: 'Explorer',  min: 200,  max: 500,  icon: '🔍', color: '#0d5c73' },
  { name: 'Scholar',   min: 500,  max: 1000, icon: '📚', color: '#7c3aed' },
  { name: 'Expert',    min: 1000, max: 2000, icon: '⚡', color: '#f59e0b' },
  { name: 'Master',    min: 2000, max: 9999, icon: '🏆', color: '#dc2626' },
]

export function getLevel(points) {
  return LEVEL_CONFIG.find(l => points >= l.min && points < l.max) || LEVEL_CONFIG[0]
}
