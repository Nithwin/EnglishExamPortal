import { Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Auth/Home'
import AuthLayout from './pages/Auth/AuthLayout'
import Contact from './pages/Auth/Contact'
import About from './pages/Auth/About'
import AdminLogin from './pages/Auth/AdminLogin'
import StudentLogin from './pages/Auth/StudentLogin'
import Dashboard from './pages/Student/Dashboard'
import ProtectedRoutes from './pages/Student/ProtectedRoutes'
import NotFound from './components/NotFound'
import Faculty from './pages/Student/Faculty'
function App() {

  return (
    <main className=''>
      <Routes>
        <Route element={<AuthLayout/>} >
          <Route path={'/'} element={<Home/>} />
          <Route path={'/contact'} element={<Contact/>} />
          <Route path={'/about'} element={<About/>} />
          <Route path={'/student-login'} element={<StudentLogin />} />
          <Route path={'/admin-login'} element={<AdminLogin />} />
        </Route>
        <Route element={<ProtectedRoutes />} >
          <Route path={'/student'} element={<Dashboard/>} />
          <Route path={'/student/faculty'} element={<Faculty/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
