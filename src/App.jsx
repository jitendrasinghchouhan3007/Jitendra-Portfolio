import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Education from './pages/Education'

import Experience from './pages/Experience'
import Resume from './pages/Resume'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import SkillNetwork from './pages/Skills'  

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<SkillNetwork />} />
       
          <Route path="/experience" element={<Experience />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} /> {/* ✅ fixed lowercase */}
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Jitendra Singh Chouhan — Built with React
      </footer>
    </div>
  )
}
