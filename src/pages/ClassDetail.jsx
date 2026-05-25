import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { CONTENT, SUBJECTS } from '../data/content'
import Toast from '../components/Toast'
import styles from './ClassDetail.module.css'

const TABS = [
  { key: 'notes',  label: '📄 Notes',       color: '#0d5c73' },
  { key: 'tests',  label: '✏️ Test Series', color: '#f59e0b' },
  { key: 'videos', label: '▶️ Videos',      color: '#059669' },
]

export default function ClassDetail() {
  const { cls } = useParams()
  const clsNum = Number(cls)
  const navigate = useNavigate()
  const { completed, completeItem } = useAuth()
  const [tab, setTab]     = useState('notes')
  const [toast, setToast] = useState(null)
  const [modal, setModal] = useState(null)

  if (!CONTENT[clsNum]) {
    return <div className={styles.notFound}>Class not found.</div>
  }

  const items = CONTENT[clsNum][tab]

  async function handleOpen(item) {
    const key = `${item.id}-${clsNum}`
    if (completed.has(key)) {
      setModal({ title: 'Already Completed ✅', body: `You already earned points for "${item.title}".`, pts: 0 })
      return
    }
    const earned = await completeItem({ id: key, label: `${item.title} – Std ${clsNum}`, pts: item.pts })
    if (earned) {
      setToast({ pts: item.pts, msg: 'Points added to your account!' })
      setModal({ title: 'Activity Complete! 🎉', body: `"${item.title}" is now unlocked. Keep going!`, pts: item.pts })
    }
  }

  return (
    <div className={styles.page}>
      {toast && <Toast pts={toast.pts} msg={toast.msg} onDone={() => setToast(null)} />}

      {/* Modal */}
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

      {/* Header */}
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

      {/* Tabs */}
      <div className={styles.tabs}>
        {TABS.map(t => (
          <button
            key={t.key}
            className={`${styles.tab} ${tab === t.key ? styles.tabActive : ''}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
            <span className={styles.tabCount}>{CONTENT[clsNum][t.key].length}</span>
          </button>
        ))}
      </div>

      {/* Items */}
      <div className={styles.list}>
        {items.map(item => {
          const key = `${item.id}-${clsNum}`
          const done = completed.has(key)
          return (
            <button key={item.id} className={styles.item} onClick={() => handleOpen(item)}>
              <div className={`${styles.itemIcon} ${styles[`icon_${tab}`]}`}>
                {tab === 'notes' ? '📄' : tab === 'tests' ? (item.type === 'mock' ? '🏆' : item.type === 'quiz' ? '⚡' : '✏️') : '▶️'}
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
    </div>
  )
}
