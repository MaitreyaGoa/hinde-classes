import { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getTestById } from '../tests/testConfig'
import styles from './TestEngine.module.css'

const PHASE = { INTRO: 'intro', TAKING: 'taking', REVIEW: 'review', RESULT: 'result' }

export default function TestEngine() {
  const { testId } = useParams()
  const navigate   = useNavigate()
  const { completeItem } = useAuth()
  const test = getTestById(testId)

  const [phase, setPhase]       = useState(PHASE.INTRO)
  const [current, setCurrent]   = useState(0)
  const [answers, setAnswers]   = useState({})
  const [timeLeft, setTimeLeft] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [result, setResult]     = useState(null)

  useEffect(() => {
    if (test) setTimeLeft(test.duration * 60)
  }, [test])

  // Timer
  useEffect(() => {
    if (phase !== PHASE.TAKING || submitted) return
    if (timeLeft <= 0) { handleSubmit(); return }
    const t = setTimeout(() => setTimeLeft(p => p - 1), 1000)
    return () => clearTimeout(t)
  }, [phase, timeLeft, submitted])

  const handleSubmit = useCallback(() => {
    if (submitted) return
    setSubmitted(true)
    const questions = test.questions
    let scored = 0
    const breakdown = questions.map(q => {
      const given = answers[q.id]
      const correct = given === q.correct
      if (correct) scored += q.marks
      return { ...q, given, correct }
    })
    const total = questions.reduce((s, q) => s + q.marks, 0)
    const pct   = Math.round((scored / total) * 100)
    const grade = pct >= 90 ? 'A+' : pct >= 75 ? 'A' : pct >= 60 ? 'B' : pct >= 40 ? 'C' : 'D'
    setResult({ scored, total, pct, grade, breakdown })
    completeItem({ id: `test_${testId}`, label: `${test.title} – Std ${test.std}`, pts: test.pts })
    setPhase(PHASE.RESULT)
  }, [submitted, answers, test, testId])

  if (!test) return (
    <div className={styles.notFound}>
      <div>❌ Test not found</div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )

  if (phase === PHASE.INTRO) return <IntroScreen test={test} onStart={() => setPhase(PHASE.TAKING)} onBack={() => navigate(-1)} />
  if (phase === PHASE.RESULT) return <ResultScreen test={test} result={result} onReview={() => setPhase(PHASE.REVIEW)} onHome={() => navigate('/')} />
  if (phase === PHASE.REVIEW) return <ReviewScreen test={test} result={result} onBack={() => setPhase(PHASE.RESULT)} />

  // ---- TAKING phase ----
  const q = test.questions[current]
  const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0')
  const secs = String(timeLeft % 60).padStart(2, '0')
  const isLast = current === test.questions.length - 1
  const allAnswered = test.questions.every(q => answers[q.id])

  return (
    <div className={styles.page}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <span className={styles.testTitle}>{test.title}</span>
          <span className={styles.stdBadge}>Std {test.std}</span>
        </div>
        <div className={`${styles.timer} ${timeLeft < 120 ? styles.timerWarn : ''}`}>
          ⏱ {mins}:{secs}
        </div>
      </div>

      {/* Progress */}
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${((current + 1) / test.questions.length) * 100}%` }} />
      </div>

      {/* Question */}
      <div className={styles.body}>
        <div className={styles.qCard}>
          <div className={styles.qMeta}>
            <span className={styles.qNum}>Question {current + 1} of {test.questions.length}</span>
            <span className={styles.qMarks}>{q.marks} marks</span>
            <span className={styles.qConcept}>{q.concept}</span>
          </div>
          <div className={styles.qText}>{q.question}</div>
          <div className={styles.options}>
            {q.options.map((opt, i) => {
              const letter = ['A','B','C','D'][i]
              const selected = answers[q.id] === letter
              return (
                <button
                  key={letter}
                  className={`${styles.option} ${selected ? styles.optionSelected : ''}`}
                  onClick={() => setAnswers(p => ({ ...p, [q.id]: letter }))}
                >
                  <span className={styles.optLetter}>{letter}</span>
                  <span className={styles.optText}>{opt.slice(3)}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Nav */}
        <div className={styles.nav}>
          <button className={styles.navBtn} onClick={() => setCurrent(p => p - 1)} disabled={current === 0}>← Previous</button>

          <div className={styles.qDots}>
            {test.questions.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotCurrent : ''} ${answers[test.questions[i].id] ? styles.dotDone : ''}`}
                onClick={() => setCurrent(i)}
              >{i + 1}</button>
            ))}
          </div>

          {isLast
            ? <button className={`${styles.navBtn} ${styles.submitBtn}`} onClick={handleSubmit}>Submit Test ✓</button>
            : <button className={styles.navBtn} onClick={() => setCurrent(p => p + 1)}>Next →</button>
          }
        </div>

        {allAnswered && !isLast && (
          <div className={styles.submitHint}>
            All questions answered! <button className={styles.submitLink} onClick={handleSubmit}>Submit now →</button>
          </div>
        )}
      </div>
    </div>
  )
}

function IntroScreen({ test, onStart, onBack }) {
  return (
    <div className={styles.introPage}>
      <div className={styles.introCard}>
        <button className={styles.backBtn} onClick={onBack}>← Back</button>
        <div className={styles.introIcon}>✏️</div>
        <h1 className={styles.introTitle}>{test.title}</h1>
        <div className={styles.introBadges}>
          <span>Std {test.std}</span>
          <span>{test.subject}</span>
          <span>{test.totalMarks} Marks</span>
          <span>⏱ {test.duration} min</span>
          <span>⭐ +{test.pts} pts</span>
        </div>
        <div className={styles.instructions}>
          <h3>Instructions</h3>
          <ol>
            {test.instructions.map((ins, i) => <li key={i}>{ins}</li>)}
          </ol>
        </div>
        <button className={styles.startBtn} onClick={onStart}>Start Test →</button>
      </div>
    </div>
  )
}

function ResultScreen({ test, result, onReview, onHome }) {
  const { scored, total, pct, grade, breakdown } = result
  const gradeColor = pct >= 75 ? '#059669' : pct >= 40 ? '#f59e0b' : '#dc2626'
  return (
    <div className={styles.introPage}>
      <div className={styles.introCard}>
        <div className={styles.resultGrade} style={{ color: gradeColor }}>{grade}</div>
        <h2 className={styles.introTitle}>Test Complete!</h2>
        <div className={styles.scoreBox}>
          <div className={styles.scoreBig}>{scored} / {total}</div>
          <div className={styles.scorePct}>{pct}%</div>
        </div>
        <div className={styles.introBadges}>
          <span>{pct >= 75 ? '🎉 Great job!' : pct >= 40 ? '👍 Good effort!' : '📚 Keep practising!'}</span>
          <span>+{test.pts} pts earned</span>
        </div>
        <div className={styles.resultBreakdown}>
          {breakdown.map((q, i) => (
            <div key={i} className={`${styles.breakItem} ${q.correct ? styles.breakCorrect : styles.breakWrong}`}>
              <span>Q{i + 1}</span>
              <span>{q.correct ? '✅ Correct' : `❌ Wrong (Ans: ${q.correct})`}</span>
              <span>{q.correct ? `+${q.marks}` : '0'} / {q.marks}</span>
            </div>
          ))}
        </div>
        <div className={styles.resultBtns}>
          <button className={styles.reviewBtn} onClick={onReview}>Review Answers</button>
          <button className={styles.startBtn} onClick={onHome}>Back to Home</button>
        </div>
      </div>
    </div>
  )
}

function ReviewScreen({ test, result, onBack }) {
  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <span className={styles.testTitle}>Review – {test.title}</span>
        </div>
        <button className={styles.navBtn} onClick={onBack}>← Back to Results</button>
      </div>
      <div className={styles.body}>
        {result.breakdown.map((q, i) => (
          <div key={i} className={`${styles.reviewCard} ${q.correct ? styles.reviewCorrect : styles.reviewWrong}`}>
            <div className={styles.reviewHeader}>
              <span className={styles.qNum}>Q{i + 1} · {q.marks} marks · {q.concept}</span>
              <span>{q.correct ? '✅ Correct' : '❌ Incorrect'}</span>
            </div>
            <div className={styles.qText}>{q.question}</div>
            <div className={styles.reviewOptions}>
              {q.options.map((opt, j) => {
                const letter = ['A','B','C','D'][j]
                const isCorrect = letter === q.correct
                const isGiven   = letter === q.given
                return (
                  <div key={letter} className={`${styles.reviewOpt}
                    ${isCorrect ? styles.reviewOptCorrect : ''}
                    ${isGiven && !isCorrect ? styles.reviewOptWrong : ''}`}>
                    <span className={styles.optLetter}>{letter}</span>
                    <span>{opt.slice(3)}</span>
                    {isCorrect && <span className={styles.tag}>✓ Correct</span>}
                    {isGiven && !isCorrect && <span className={styles.tag}>Your answer</span>}
                  </div>
                )
              })}
            </div>
            <div className={styles.explanation}>
              <strong>Explanation:</strong> {q.explanation}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
