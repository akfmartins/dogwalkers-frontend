import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import './style/login.css';
import './style/register.css';
import './style/schedule.css';
import './style/layout.css';
import './style/navbar.css';
import './style/footer.css';
import './style/form.css';



import Layout from './components/layout'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Schedule from './pages/Schedule'
import History from './pages/History'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Login /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/schedule" element={<Layout><Schedule /></Layout>} />
        <Route path="/history" element={<Layout><History /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App

