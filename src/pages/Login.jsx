import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import styles from './Login.module.css'

const CLIENT_ID = '572990500681-12u9hv4cg632ichlkutnjnet58t7vb83.apps.googleusercontent.com'

export default function Login() {
  const { loginDemo } = useAuth()
  const [loading, setLoading] = useState(false)
  const [sdkLoaded, setSdkLoaded] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.google?.accounts?.id) {
        clearInterval(interval)
        setSdkLoaded(true)
        window.google.accounts.id.initialize({
          client_id: CLIENT_ID,
          callback: window.handleGoogleCallback,
          auto_select: false,
          cancel_on_tap_outside: true,
        })
        setTimeout(() => {
          const btn = document.getElementById('google-signin-btn')
          if (btn) {
            window.google.accounts.id.renderButton(btn, {
              type: 'standard',
              theme: 'outline',
              size: 'large',
              text: 'continue_with',
              width: 320,
            })
          }
        }, 100)
      }
    }, 200)
    return () => clearInterval(interval)
  }, [])

  async function handleDemo() {
    setLoading(true)
    await loginDemo()
    setLoading(false)
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <img
            src="logo.jpg"
            alt="Hinde Classes"
            onError={e => { e.target.style.display = 'none' }}
          />
        </div>

        <h1 className={styles.title}>Hinde Classes</h1>
        <p className={styles.tagline}>Student Portal · Empowering Futures Through Learning</p>

        <div className={styles.features}>
          {['📄 Notes & Study Material', '✏️ Test Series & Quizzes', '▶️ Recorded Video Lectures', '⭐ Earn Points for Every Activity'].map(f => (
            <span key={f} className={styles.featurePill}>{f}</span>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, margin: '20px 0' }}>
          <div id="google-signin-btn" style={{ minHeight: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {!sdkLoaded && (
              <div style={{ fontSize: 13, color: '#9ca3af' }}>Loading Google Sign-In...</div>
            )}
          </div>
        </div>

        <div className={styles.divider}><span>or</span></div>

        <button className={styles.demoBtn} onClick={handleDemo} disabled={loading}>
          🎓 {loading ? 'Signing in...' : 'Try Demo Account'}
        </button>

        <p className={styles.note}>
          By signing in you agree to our Terms of Service.<br />
          Your progress and points are saved to your account.
        </p>
      </div>
    </div>
  )
}
