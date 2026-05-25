import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { CONTENT, SUBJECTS } from '../data/content'
import { getLiveTests } from '../tests/testConfig'
import Toast from '../components/Toast'
import styles from './ClassDetail.module.css'

const TABS = [
  { key: 'notes',  label: '📄 Notes' },
  { key: 'tests',  label: '✏️ Test Series' },
  { key: 'videos', label: '▶️ Videos' },
]

export default function ClassDetail() {
  const { cls } = useParams()
  const clsNum  = Number(cls)
  const navigate = useNavigate()
  const { completed, completeItem } = useAuth()
  const [tab, setTab]     = useState('notes')
  const [toast, setToast] = useState(null)
  const [modal, setModal] = useState(null)

  if (!CONTENT[clsNum]) return <div className={styles.notFound}>Class not found.</div>

  const liveTests = getLiveTests(clsNum)
  const items = tab === 'tests' ? null : CONTENT[clsNum][tab]

  async function handleOpen(item) {
    const key = `${item.id}-${clsNum}`
    if (completed.has(key)) {
      setModal({ title: 'Already Completed ✅', body: `You already earned points for "${item.title}".`, pts: 0 })
      return
    }
    const earned = await completeItem({ id: key, label: `${item.title} – Std ${clsNum}`, pts: item.pts })
    if (earned) {
      setToast({ pts: item.pts, msg: 'Points added!' })
      setModal({ title: 'Activity Complete! 🎉', body: `"${item.title}" is now unlocked!`, pts: item.pts })
    }
    if (item.url) setTimeout(() => window.open(item.url, '_blank'), 500)
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
            <button className={styles.modalBtn} onClick={() => setModal(null)}>Continue Learning →</button>
          </div>
        </div>
      )}

      <div className={styles.header}>
        <button className={styles.backBtn} onClick={() => navigate('/')}>← Back</button>
        <div className={styles.headerMain}>
          <div className={styles.badge}>{clsNum}</div>
          <div>
            <h1 className={styles.headerTitle}>Standard {clsNum}</h1>
            <p className={styles.headerSub}>Subjects: {SUBJECTS[clsNum]?.join(', ')}</p>
          </div>
        </div>
      </div>

      <div className={styles.tabs}>
        {TABS.map(t => (
          <button key={t.key} className={`${styles.tab} ${tab === t.key ? styles.tabActive : ''}`} onClick={() => setTab(t.key)}>
            {t.label}
            <span className={styles.tabCount}>
              {t.key === 'tests' ? liveTests.length : CONTENT[clsNum][t.key].length}
            </span>
          </button>
        ))}
      </div>

      {/* TEST SERIES TAB */}
      {tab === 'tests' && (
        <div className={styles.list}>
          {liveTests.length === 0 ? (
            <div className={styles.emptyTests}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>📋</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--gray-600)' }}>No tests available yet</div>
              <div style={{ fontSize: 14, color: 'var(--gray-400)', marginTop: 4 }}>Check back soon!</div>
            </div>
          ) : liveTests.map(test => {
            const done = completed.has(`test_${test.id}`)
            return (
              <div key={test.id} className={styles.testCard}>
                <div className={styles.testCardLeft}>
                  <div className={styles.testIcon}>{test.type === 'mock' ? '🏆' : test.type === 'quiz' ? '⚡' : '✏️'}</div>
                  <div className={styles.itemInfo}>
                    <div className={styles.itemTitle}>{test.title}</div>
                    <div className={styles.itemMeta}>
                      {test.subject} · {test.totalMarks} Marks · ⏱ {test.duration} min · {test.questions?.length} Questions
                    </div>
                    <div className={styles.testTags}>
                      {test.tags?.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                    </div>
                  </div>
                </div>
                <div className={styles.testCardRight}>
                  {done
                    ? <span className={styles.doneBadge}>✅ Done</span>
                    : <span className={styles.ptsBadge}>+{test.pts} pts</span>
                  }
                  <button
                    className={`${styles.startTestBtn} ${done ? styles.startTestBtnDone : ''}`}
                    onClick={() => navigate(`/test/${test.id}`)}
                  >
                    {done ? 'Retake' : 'Start Test →'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* NOTES & VIDEOS TABS */}
      {tab !== 'tests' && (
        <div className={styles.list}>
          {items.map(item => {
            const key  = `${item.id}-${clsNum}`
            const done = completed.has(key)
            return (
              <button key={item.id} className={styles.item} onClick={() => handleOpen(item)}>
                <div className={`${styles.itemIcon} ${styles[`icon_${tab}`]}`}>
                  {tab === 'notes' ? '📄' : '▶️'}
                </div>
                <div className={styles.itemInfo}>
                  <div className={styles.itemTitle}>{item.title}</div>
                  <div className={styles.itemMeta}>{item.meta} · {item.subject}</div>
                </div>
                {done
                  ? <span className={styles.doneBadge}>✅ Done</span>
                  : <span className={`${styles.ptsBadge} ${styles[`pts_${tab}`]}`}>+{item.pts} pts</span>
                }
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
