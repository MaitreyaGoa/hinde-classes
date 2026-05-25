const test_std10_maths_linear_equations = {
  id: 'std10_maths_linear_eq_01',
  title: 'Linear Equations in Two Variables',
  subject: 'Maths',
  std: 10,
  totalMarks: 6,
  duration: 15,
  instructions: [
    'Read each question carefully before answering.',
    'This test has 2 questions carrying 3 marks each.',
    'Show your method clearly for full marks.',
    'You have 15 minutes to complete this test.',
  ],
  questions: [
    {
      id: 'q1',
      marks: 3,
      type: 'mcq',
      question: 'The pair of linear equations 2x + 3y = 5 and 4x + 6y = 10 has:',
      options: [
        'A. No solution',
        'B. A unique solution',
        'C. Infinitely many solutions',
        'D. Exactly two solutions',
      ],
      correct: 'C',
      explanation: 'Dividing the second equation by 2 gives 2x + 3y = 5, exactly the same as the first. Both equations represent the same line, giving infinitely many solutions.',
      concept: 'Consistent & Dependent System',
    },
    {
      id: 'q2',
      marks: 3,
      type: 'mcq',
      question: 'If x = 2 and y = 3 is a solution of the equation 3x - ky = 6, then the value of k is:',
      options: [
        'A. k = 0',
        'B. k = 1',
        'C. k = 2',
        'D. k = 3',
      ],
      correct: 'A',
      explanation: 'Substituting x=2, y=3: 3(2) - k(3) = 6 → 6 - 3k = 6 → -3k = 0 → k = 0',
      concept: 'Substitution Method',
    },
  ],
}

export default test_std10_maths_linear_equations
