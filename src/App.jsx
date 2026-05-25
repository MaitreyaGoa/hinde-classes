import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import Navbar  from './components/Navbar'
import Login   from './pages/Login'
import Home    from './pages/Home'
import ClassDetail from './pages/ClassDetail'
import Points  from './pages/Points'

function AppRoutes() {
  const { user, loading } = useAuth()

  if (loading) return <LoadingScreen />

  if (!user) return <Login />

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/class/:cls" element={<ClassDetail />} />
        <Route path="/points"   element={<Points />} />
        <Route path="*"         element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

function LoadingScreen() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', flexDirection: 'column', gap: 16,
      background: 'linear-gradient(135deg, #0a4a5e, #1a7a96)',
    }}>
      <div style={{ fontSize: 48 }}>🪐</div>
      <div style={{ color: 'white', fontFamily: 'var(--font-serif)', fontSize: 22 }}>Hinde Classes</div>
      <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>Loading your portal…</div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}
