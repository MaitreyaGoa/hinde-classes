import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react'
import { upsertStudent, fetchStudent, saveCompleted, updatePoints, logActivity } from '../utils/sheets'
import { POINTS } from '../data/content'

const AuthContext = createContext(null)

const LS_KEY  = 'hinde_user'
const LS_PTS  = 'hinde_points'
const LS_DONE = 'hinde_completed'
const LS_ACT  = 'hinde_activity'

export function AuthProvider({ children }) {
  const [user, setUser]           = useState(null)
  const [points, setPoints]       = useState(0)
  const [completed, setCompleted] = useState(new Set())
  const [activity, setActivity]   = useState([])
  const [loading, setLoading]     = useState(true)

  const setUserRef       = useRef(setUser)
  const setPointsRef     = useRef(setPoints)
  const setCompletedRef  = useRef(setCompleted)
  const setActivityRef   = useRef(setActivity)

  useEffect(() => { setUserRef.current      = setUser      }, [setUser])
  useEffect(() => { setPointsRef.current    = setPoints    }, [setPoints])
  useEffect(() => { setCompletedRef.current = setCompleted }, [setCompleted])
  useEffect(() => { setActivityRef.current  = setActivity  }, [setActivity])

  // Restore session
  useEffect(() => {
    const saved = localStorage.getItem(LS_KEY)
    if (saved) {
      const u = JSON.parse(saved)
      setUser(u)
      setPoints(Number(localStorage.getItem(LS_PTS) || 0))
      const done = JSON.parse(localStorage.getItem(LS_DONE) || '[]')
      setCompleted(new Set(done))
      const act = JSON.parse(localStorage.getItem(LS_ACT) || '[]')
      setActivity(act)
    }
    setLoading(false)
  }, [])

  // Persist to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem(LS_KEY,  JSON.stringify(user))
      localStorage.setItem(LS_PTS,  String(points))
      localStorage.setItem(LS_DONE, JSON.stringify([...completed]))
      localStorage.setItem(LS_ACT,  JSON.stringify(activity.slice(0, 50)))
    }
  }, [user, points, completed, activity])

  async function _awardPoints(email, pts, label, itemId) {
    setPointsRef.current(prev => {
      const next = prev + pts
      updatePoints({ email, points: next })
      return next
    })
    const entry = { label, pts, itemId, time: new Date().toISOString() }
    setActivityRef.current(prev => [entry, ...prev].slice(0, 50))
    await logActivity({ email, action: label, pts, itemId })
  }

  async function _completeLogin(userData) {
    setUserRef.current(userData)
    const remote = await fetchStudent(userData.email)
    if (remote && remote.points !== undefined) {
      setPointsRef.current(Number(remote.points))
      const done = JSON.parse(remote.completed || '[]')
      setCompletedRef.current(new Set(done))
    } else {
      await upsertStudent(userData)
      await _awardPoints(userData.email, POINTS.login, 'Daily Login Bonus', 'login')
    }
    await upsertStudent({ ...userData, lastLogin: new Date().toISOString() })
  }

  // Register Google callback on mount
  useEffect(() => {
    window.handleGoogleCallback = async (response) => {
      try {
        const payload = JSON.parse(atob(response.credential.split('.')[1]))
        const userData = {
          name:    payload.name,
          email:   payload.email,
          picture: payload.picture,
          avatar:  payload.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase(),
        }
        await _completeLogin(userData)
      } catch (err) {
        console.error('Google login error:', err)
      }
    }
  }, [])

  const loginWithGoogle = useCallback(() => {
    window.handleGoogleCallback = async (response) => {
      try {
        const payload = JSON.parse(atob(response.credential.split('.')[1]))
        const userData = {
          name:    payload.name,
          email:   payload.email,
          picture: payload.picture,
          avatar:  payload.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase(),
        }
        await _completeLogin(userData)
      } catch (err) {
        console.error('Google login error:', err)
      }
    }
  }, [])

  const loginDemo = useCallback(async () => {
    const userData = {
      name:    'Demo Student',
      email:   'demo@hindeclasses.in',
      picture: null,
      avatar:  'DS',
    }
    await _completeLogin(userData)
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(LS_KEY)
    localStorage.removeItem(LS_PTS)
    localStorage.removeItem(LS_DONE)
    localStorage.removeItem(LS_ACT)
    setUser(null)
    setPoints(0)
    setCompleted(new Set())
    setActivity([])
  }, [])

  const completeItem = useCallback(async ({ id, label, pts }) => {
    if (!user) return false
    if (completed.has(id)) return false
    const next = new Set(completed)
    next.add(id)
    setCompleted(next)
    await _awardPoints(user.email, pts, label, id)
    await saveCompleted({ email: user.email, completed: next })
    return true
  }, [user, completed])

  return (
    <AuthContext.Provider value={{
      user, points, completed, activity, loading,
      loginWithGoogle, loginDemo, logout, completeItem,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be inside AuthProvider')
  return ctx
}
