import { useEffect, useState } from 'react'
import styles from './Toast.module.css'

export default function Toast({ pts, msg, onDone }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true))
    const t = setTimeout(() => {
      setVisible(false)
      setTimeout(onDone, 300)
    }, 3000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`${styles.toast} ${visible ? styles.show : ''}`}>
      <div className={styles.row}>
        <span className={styles.icon}>🎉</span>
        <div>
          <div className={styles.main}>You earned <span className={styles.pts}>+{pts} pts</span></div>
          <div className={styles.sub}>{msg}</div>
        </div>
      </div>
    </div>
  )
}
