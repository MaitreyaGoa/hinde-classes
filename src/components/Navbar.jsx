import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { user, points, logout } = useAuth()
  const navigate  = useNavigate()
  const { pathname } = useLocation()

  return (
    <nav className={styles.nav}>
      <button className={styles.brand} onClick={() => navigate('/')}>
        <div className={styles.logo}>
          <img
            src="/logo.jpg"
            alt="Hinde Classes"
            onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
          />
          <span className={styles.logoFallback} style={{ display: 'none' }}>🪐</span>
        </div>
        <span className={styles.brandName}>Hinde Classes</span>
      </button>

      <div className={styles.right}>
        <button className={styles.ptsBadge} onClick={() => navigate('/points')}>
          <span>⭐</span>
          <span>{points} pts</span>
        </button>

        {pathname !== '/' && (
          <button className={styles.navLink} onClick={() => navigate('/')}>🏠 Home</button>
        )}

        <div className={styles.userMenu}>
          <button className={styles.avatar} title={user?.email}>
            {user?.picture
              ? <img src={user.picture} alt={user.name} className={styles.avatarImg} />
              : <span>{user?.avatar || 'S'}</span>
            }
          </button>
          <div className={styles.dropdown}>
            <div className={styles.dropName}>{user?.name}</div>
            <div className={styles.dropEmail}>{user?.email}</div>
            <hr className={styles.dropDivider} />
            <button className={styles.dropItem} onClick={() => navigate('/points')}>⭐ My Points</button>
            <button className={styles.dropItem} onClick={logout}>🚪 Sign Out</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
