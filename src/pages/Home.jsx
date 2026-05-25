import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { CLASSES, SUBJECTS, getLevel, LEVEL_CONFIG } from '../data/content'
import styles from './Home.module.css'

const CLASS_COLORS = ['#0d5c73','#1a7a96','#059669','#7c3aed','#f59e0b','#dc2626','#0d5c73']

export default function Home() {
  const { user, points, activity } = useAuth()
  const navigate = useNavigate()
  const level = getLevel(points)
  const nextLevel = LEVEL_CONFIG[LEVEL_CONFIG.indexOf(level) + 1]
  const pct = nextLevel ? Math.round(((points - level.min) / (nextLevel.min - level.min)) * 100) : 100

  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <div className={styles.bannerLeft}>
          <p className={styles.bannerGreeting}>Welcome back, {user?.name?.split(' ')[0]}! 👋</p>
          <h1 className={styles.bannerTitle}>Select Your Class</h1>
          <p className={styles.bannerSub}>Access notes, test series and recorded lectures</p>
        </div>
        <div className={styles.bannerPoints}>
          <div className={styles.ptsBig}>⭐ {points}</div>
          <div className={styles.ptsLabel}>{level.icon} {level.name}</div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${pct}%` }} />
          </div>
          <div className={styles.ptsNext}>
            {nextLevel ? `${nextLevel.min - points} pts to ${nextLevel.name}` : '🏆 Max Level'}
          </div>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>Choose Your Standard</h2>
      <div className={styles.classGrid}>
        {CLASSES.map((cls, i) => {
          const subjects = SUBJECTS[cls] || []
          return (
            <button
              key={cls}
              className={styles.classCard}
              onClick={() => navigate(`/class/${cls}`)}
              style={{ '--accent': CLASS_COLORS[i % CLASS_COLORS.length] }}
            >
              <div className={styles.classNum}>{cls}</div>
              <div className={styles.classLabel}>Standard {cls}</div>
              <div className={styles.classStats}>
                <span>📚 {subjects.length} Subjects</span>
              </div>
            </button>
          )
        })}
      </div>

      {activity.length > 0 && (
        <div className={styles.recentBox}>
          <h2 className={styles.sectionTitle} style={{ marginBottom: 16 }}>Recent Activity</h2>
          <div className={styles.activityList}>
            {activity.slice(0, 6).map((a, i) => (
              <div key={i} className={styles.activityItem}>
                <div className={styles.dot} />
                <div className={styles.actLabel}>{a.label}</div>
                <div className={styles.actTime}>{formatTime(a.time)}</div>
                <div className={styles.actPts}>+{a.pts} pts</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function formatTime(iso) {
  const diff = Date.now() - new Date(iso).getTime()
  const m = Math.floor(diff / 60000)
  if (m < 1)  return 'Just now'
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  return `${Math.floor(h / 24)}d ago`
}
