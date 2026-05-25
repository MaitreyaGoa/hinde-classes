import test_std10_maths_linear_equations from './std10/maths_linear_equations.js'

export const ALL_TESTS = [
  {
    ...test_std10_maths_linear_equations,
    live: true,
    pts: 50,
    tags: ['Chapter 3', 'Board Prep'],
  },
]

export function getLiveTests(std) {
  const now = new Date()
  return ALL_TESTS.filter(t => {
    if (t.std !== std) return false
    if (t.scheduledAt && new Date(t.scheduledAt) > now) return false
    return t.live === true
  })
}

export function getTestById(id) {
  return ALL_TESTS.find(t => t.id === id) || null
}
