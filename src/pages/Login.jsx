import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import styles from './Login.module.css'

export default function Login() {
  const { loginWithGoogle, loginDemo } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')

  async function handleGoogle() {
    setLoading(true); setError('')
    try { await loginWithGoogle() }
    catch (e) { setError('Google login failed. Try the demo account below.') }
    finally { setLoading(false) }
  }

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
            src="./logo.jpg"
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

        {error && <div className={styles.error}>{error}</div>}

        <div
          id="g_id_onload"
          data-client_id="572990500681-12u9hv4cg632ichlkutnjnet58t7vb83.apps.googleusercontent.com"
          data-callback="handleGoogleCallback"
          data-auto_prompt="false"
        />

        <div
          className="g_id_signin"
          data-type="standard"
          data-size="large"
          data-theme="outline"
          data-text="continue_with"
          data-shape="rectangular"
          data-logo_alignment="left"
          data-width="360"
        />

        <div className={styles.divider}><span>or</span></div>

        <button className={styles.demoBtn} onClick={handleDemo} disabled={loading}>
          🎓 Try Demo Account
        </button>

        <p className={styles.note}>
          By signing in you agree to our Terms of Service.<br />
          Your progress and points are saved to your account.
        </p>
      </div>
    </div>
  )
}
