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
          <img src="/logo.jpg" alt="Hinde Classes" onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
          <span className={styles.logoFallback} style={{ display: 'none' }}>🪐</span>
        </div>

        <h1 className={styles.title}>Hinde Classes</h1>
        <p className={styles.tagline}>Student Portal · Empowering Futures Through Learning</p>

        <div className={styles.features}>
          {['📄 Notes & Study Material', '✏️ Test Series & Quizzes', '▶️ Recorded Video Lectures', '⭐ Earn Points for Every Activity'].map(f => (
            <span key={f} className={styles.featurePill}>{f}</span>
          ))}
        </div>

        {error && <div className={styles.error}>{error}</div>}

        <button className={styles.googleBtn} onClick={handleGoogle} disabled={loading}>
          <GoogleIcon />
          {loading ? 'Signing in…' : 'Continue with Google'}
        </button>

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

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}
