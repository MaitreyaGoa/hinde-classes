import { useAuth } from '../context/AuthContext'
import { getLevel, LEVEL_CONFIG } from '../data/content'
import styles from './Points.module.css'

const HOW_TO = [
  { icon: '📄', label: 'Download / Read Notes',     pts: '+10 pts' },
  { icon: '⚡', label: 'Complete a Weekly Quiz',    pts: '+15 pts' },
  { icon: '✏️', label: 'Finish a Unit Test',        pts: '+30 pts' },
  { icon: '▶️', label: 'Watch a Video Lecture',     pts: '+15 pts' },
  { icon: '🏆', label: 'Complete a Full Mock Test', pts: '+50 pts' },
  { icon: '📅', label: 'Daily Login Bonus',          pts: '+5 pts'  },
]

function formatTime(iso) {
  const diff = Date.now() - new Date(iso).getTime()
  const m = Math.floor(diff / 60000)
  if (m < 1)  return 'Just now'
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  return `${Math.floor(h / 24)}d ago`
}

export default function Points() {
  const { points, activity } = useAuth()
  const level = getLevel(points)
  const lvIdx = LEVEL_CONFIG.indexOf(level)
  const next  = LEVEL_CONFIG[lvIdx + 1]
  const pct   = next ? Math.round(((points - level.min) / (next.min - level.min)) * 100) : 100

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.bigPts}>⭐ {points}</div>
          <div className={styles.levelName}>{level.icon} Level {lvIdx + 1} – {level.name}</div>
          <div className={styles.bar}>
            <div className={styles.barFill} style={{ width: `${pct}%` }} />
          </div>
          <div className={styles.barLabel}>
            {next ? `${points - level.min} / ${next.min - level.min} pts to ${next.name}` : '🏆 Maximum Level Reached!'}
          </div>
        </div>
      </div>

      {/* Level Map */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Level Progression</h2>
        <div className={styles.levelGrid}>
          {LEVEL_CONFIG.map((lv, i) => (
            <div key={lv.name} className={`${styles.levelCard} ${i === lvIdx ? styles.levelCurrent : ''} ${i < lvIdx ? styles.levelDone : ''}`}>
              <div className={styles.levelIcon}>{lv.icon}</div>
              <div className={styles.levelCardName}>{lv.name}</div>
              <div className={styles.levelRange}>{lv.min}+ pts</div>
              {i === lvIdx && <div className={styles.currentBadge}>Current</div>}
              {i < lvIdx  && <div className={styles.doneLevelBadge}>✓</div>}
            </div>
          ))}
        </div>
      </div>

      {/* How to earn */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>How to Earn Points</h2>
        <div className={styles.earnList}>
          {HOW_TO.map(h => (
            <div key={h.label} className={styles.earnItem}>
              <span className={styles.earnIcon}>{h.icon}</span>
              <span className={styles.earnLabel}>{h.label}</span>
              <span className={styles.earnPts}>{h.pts}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Activity History */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Activity History</h2>
        {activity.length === 0
          ? <p className={styles.empty}>No activity yet. Start learning to earn points!</p>
          : (
            <div className={styles.actList}>
              {activity.map((a, i) => (
                <div key={i} className={styles.actItem}>
                  <div className={styles.actDot} />
                  <div className={styles.actInfo}>
                    <div className={styles.actLabel}>{a.label}</div>
                    <div className={styles.actTime}>{formatTime(a.time)}</div>
                  </div>
                  <div className={styles.actPts}>+{a.pts} pts</div>
                </div>
              ))}
            </div>
          )
        }
      </div>
    </div>
  )
}
