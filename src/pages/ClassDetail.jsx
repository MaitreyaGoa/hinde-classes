import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { SUBJECTS, CHAPTERS, getNotesForSubject, getVideosForSubject } from '../data/content'
import { getLiveTests } from '../tests/testConfig'
import { getLiveVisualizers, VISUALIZER_PTS } from '../visualizers/vizConfig'
import Toast from '../components/Toast'
import styles from './ClassDetail.module.css'

const TABS = [
  { key: 'notes',       label: '📄 Notes' },
  { key: 'tests',       label: '✏️ Tests' },
  { key: 'videos',      label: '▶️ Videos' },
  { key: 'visualizers', label: '🔬 Visualizers' },
]

const SUBJECT_ICONS = {
  'Maths':          { icon: '📐', color: '#0d5c73', bg: '#e8f4f8' },
  'Science':        { icon: '🔬', color: '#059669', bg: '#ecfdf5' },
  'Physics':        { icon: '⚡', color: '#7c3aed', bg: '#ede9fe' },
  'Chemistry':      { icon: '🧪', color: '#dc2626', bg: '#fef2f2' },
  'Biology':        { icon: '🌿', color: '#059669', bg: '#ecfdf5' },
  'English':        { icon: '📖', color: '#f59e0b', bg: '#fef3c7' },
  'Hindi':          { icon: '🗣️', color: '#f59e0b', bg: '#fef3c7' },
  'Social Science': { icon: '🌍', color: '#0d5c73', bg: '#e8f4f8' },
}

export default function ClassDetail() {
  const { cls } = useParams()
  const clsNum  = Number(cls)
  const navigate = useNavigate()
  const { completed, completeItem } = useAuth()

  const [selectedSubject, setSelectedSubject] = useState(null)
  const [tab, setTab]       = useState('notes')
  const [toast, setToast]   = useState(null)
  const [modal, setModal]   = useState(null)
  const [vizOpen, setVizOpen] = useState(null)

  const subjects = SUBJECTS[clsNum] || []

  if (!selectedSubject) {
    return (
      <div className={styles.page}>
        <button className={styles.backBtn} onClick={() => navigate('/')}>← Back</button>
        <div className={styles.headerMain}>
          <div className={styles.badge}>{clsNum}</div>
          <div>
            <h1 className={styles.headerTitle}>Standard {clsNum}</h1>
            <p className={styles.headerSub}>Select a subject to continue</p>
          </div>
        </div>
        <h2 className={styles.subjectHeading}>Subjects</h2>
        <div className={styles.subjectGrid}>
          {subjects.map(subj => {
            const meta = SUBJECT_ICONS[subj] || { icon: '📚', color: '#0d5c73', bg: '#e8f4f8' }
            const chapCount = CHAPTERS[clsNum]?.[subj]?.length || 0
            const liveTests = getLiveTests(clsNum).filter(t => t.subject === subj).length
            const liveViz   = getLiveVisualizers(clsNum, subj).length
            return (
              <button
                key={subj}
                className={styles.subjectCard}
                style={{ '--sc': meta.color, '--sb': meta.bg }}
                onClick={() => { setSelectedSubject(subj); setTab('notes') }}
              >
                <div className={styles.subjectIcon}>{meta.icon}</div>
                <div className={styles.subjectName}>{subj}</div>
                <div className={styles.subjectMeta}>
                  <span>{chapCount} Chapters</span>
                  {liveTests > 0 && <span>{liveTests} Tests</span>}
                  {liveViz > 0 && <span>🔬 {liveViz}</span>}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  const meta       = SUBJECT_ICONS[selectedSubject] || { icon: '📚', color: '#0d5c73', bg: '#e8f4f8' }
  const notes      = getNotesForSubject(clsNum, selectedSubject)
  const videos     = getVideosForSubject(clsNum, selectedSubject)
  const liveTests  = getLiveTests(clsNum).filter(t => t.subject === selectedSubject)
  const visualizers = getLiveVisualizers(clsNum, selectedSubject)

  async function handleOpen(item) {
    const key = `${item.id}-${clsNum}`
    if (completed.has(key)) {
      setModal({ title: 'Already Done ✅', body: `You already earned points for "${item.title}".`, pts: 0 })
      return
    }
    const earned = await completeItem({ id: key, label: `${item.title} – Std ${clsNum}`, pts: item.pts })
    if (earned) {
      setToast({ pts: item.pts, msg: 'Points added!' })
      setModal({ title: 'Activity Complete! 🎉', body: `"${item.title}" is now unlocked!`, pts: item.pts })
    }
    if (item.url) setTimeout(() => window.open(item.url, '_blank'), 500)
  }

  async function handleVizOpen(viz) {
    const key = `${viz.id}-${clsNum}`
    if (!completed.has(key)) {
      await completeItem({ id: key, label: `${viz.title} – Std ${clsNum}`, pts: VISUALIZER_PTS })
      setToast({ pts: VISUALIZER_PTS, msg: 'Points earned for exploring!' })
    }
    setVizOpen(viz)
  }

  if (vizOpen) {
    return (
      <div className={styles.page}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <button className={styles.backBtn} onClick={() => setVizOpen(null)}>← Back to Visualizers</button>
          <span style={{ fontSize: 15, fontWeight: 600, color: meta.color }}>{vizOpen.title}</span>
        </div>
        <div style={{ fontSize: 12, color: '#9ca3af', marginBottom: 12 }}>{vizOpen.chapter}</div>
        <iframe
          src={vizOpen.file}
          style={{ width: '100%', height: '85vh', border: 'none', borderRadius: 12, background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
          title={vizOpen.title}
        />
        {toast && <Toast pts={toast.pts} msg={toast.msg} onDone={() => setToast(null)} />}
      </div>
    )
  }

  return (
    <div className={styles.page}>
      {toast && <Toast pts={toast.pts} msg={toast.msg} onDone={() => setToast(null)} />}

      {modal && (
        <div className={styles.overlay} onClick={() => setModal(null)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <h3 className={styles.modalTitle}>{modal.title}</h3>
            <p className={styles.modalBody}>{modal.body}</p>
            {modal.pts > 0 && (
              <div className={styles.modalPts}>
                <div className={styles.modalPtsNum}>+{modal.pts} pts</div>
                <div className={styles.modalPtsLabel}>Added to your account</div>
              </div>
            )}
            <button className={styles.modalBtn} onClick={() => setModal(null)}>Continue →</button>
          </div>
        </div>
      )}

      <button className={styles.backBtn} onClick={() => setSelectedSubject(null)}>← Subjects</button>
      <div className={styles.headerMain} style={{ borderLeftColor: meta.color }}>
        <div className={styles.badge} style={{ background: meta.color }}>{clsNum}</div>
        <div>
          <h1 className={styles.headerTitle} style={{ color: meta.color }}>
            {meta.icon} {selectedSubject}
          </h1>
          <p className={styles.headerSub}>Standard {clsNum} · {CHAPTERS[clsNum]?.[selectedSubject]?.length} Chapters</p>
        </div>
      </div>

      <div className={styles.tabs}>
        {TABS.map(t => {
          const count = t.key === 'notes' ? notes.length : t.key === 'tests' ? liveTests.length : t.key === 'videos' ? videos.length : visualizers.length
          return (
            <button key={t.key} className={`${styles.tab} ${tab === t.key ? styles.tabActive : ''}`} onClick={() => setTab(t.key)}>
              {t.label}
              <span className={styles.tabCount}>{count}</span>
            </button>
          )
        })}
      </div>

      {/* TESTS */}
      {tab === 'tests' && (
        <div className={styles.list}>
          {liveTests.length === 0 ? (
            <div className={styles.emptyBox}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>📋</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: '#4b5563' }}>No tests available yet</div>
              <div style={{ fontSize: 14, color: '#9ca3af', marginTop: 4 }}>Check back soon!</div>
            </div>
          ) : liveTests.map(test => {
            const done = completed.has(`test_${test.id}`)
            return (
              <div key={test.id} className={styles.testCard}>
                <div className={styles.testCardLeft}>
                  <div className={styles.testIcon}>{test.type === 'mock' ? '🏆' : '✏️'}</div>
                  <div className={styles.itemInfo}>
                    <div className={styles.itemTitle}>{test.title}</div>
                    <div className={styles.itemMeta}>{test.totalMarks} Marks · ⏱ {test.duration} min · {test.questions?.length} Qs</div>
                    <div className={styles.testTags}>{test.tags?.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}</div>
                  </div>
                </div>
                <div className={styles.testCardRight}>
                  {done ? <span className={styles.doneBadge}>✅ Done</span> : <span className={styles.ptsBadge}>+{test.pts} pts</span>}
                  <button className={`${styles.startTestBtn} ${done ? styles.startTestBtnDone : ''}`} onClick={() => navigate(`/test/${test.id}`)}>
                    {done ? 'Retake' : 'Start Test →'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* NOTES */}
      {tab === 'notes' && (
        <div className={styles.list}>
          {notes.map(item => {
            const key  = `${item.id}-${clsNum}`
            const done = completed.has(key)
            return (
              <button key={item.id} className={styles.item} onClick={() => handleOpen(item)}>
                <div className={styles.itemIcon} style={{ background: meta.bg, fontSize: 20 }}>📄</div>
                <div className={styles.itemInfo}>
                  <div className={styles.itemTitle}>{item.title}</div>
                  <div className={styles.itemMeta}>{item.subject} · Notes</div>
                </div>
                {done ? <span className={styles.doneBadge}>✅ Done</span> : <span className={styles.ptsBadge} style={{ background: meta.bg, color: meta.color }}>+{item.pts} pts</span>}
              </button>
            )
          })}
        </div>
      )}

      {/* VIDEOS */}
      {tab === 'videos' && (
        <div className={styles.list}>
          {videos.map(item => {
            const key  = `${item.id}-${clsNum}`
            const done = completed.has(key)
            return (
              <button key={item.id} className={styles.item} onClick={() => handleOpen(item)}>
                <div className={styles.itemIcon} style={{ background: '#ecfdf5', fontSize: 20 }}>▶️</div>
                <div className={styles.itemInfo}>
                  <div className={styles.itemTitle}>{item.title}</div>
                  <div className={styles.itemMeta}>{item.subject} · Video Lecture</div>
                </div>
                {done ? <span className={styles.doneBadge}>✅ Done</span> : <span className={styles.ptsBadge} style={{ background: '#ecfdf5', color: '#059669' }}>+{item.pts} pts</span>}
              </button>
            )
          })}
        </div>
      )}

      {/* VISUALIZERS */}
      {tab === 'visualizers' && (
        <div className={styles.list}>
          {visualizers.length === 0 ? (
            <div className={styles.emptyBox}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🔬</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: '#4b5563' }}>No visualizers yet</div>
              <div style={{ fontSize: 14, color: '#9ca3af', marginTop: 4 }}>Interactive tools coming soon!</div>
            </div>
          ) : visualizers.map(viz => {
            const done = completed.has(`${viz.id}-${clsNum}`)
            return (
              <div key={viz.id} className={styles.vizCard} onClick={() => handleVizOpen(viz)}>
                <div className={styles.vizIcon}>🔬</div>
                <div className={styles.itemInfo}>
                  <div className={styles.itemTitle}>{viz.title}</div>
                  <div className={styles.itemMeta}>{viz.chapter}</div>
                  <div className={styles.itemMeta} style={{ marginTop: 2, color: '#6b7280' }}>{viz.description}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                  {done ? <span className={styles.doneBadge}>✅ Done</span> : <span className={styles.ptsBadge} style={{ background: '#ede9fe', color: '#7c3aed' }}>+{VISUALIZER_PTS} pts</span>}
                  <button className={styles.startTestBtn} style={{ background: '#7c3aed' }}>Explore →</button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
