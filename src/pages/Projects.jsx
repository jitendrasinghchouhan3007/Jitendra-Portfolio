import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '🎯 JUST-DO-IT',
    desc: 'JUST-DO-IT is a clean and modern to-do list application built to help users organize tasks and stay productive. It offers a smooth, intuitive interface with real-time task management and a visually appealing dashboard. The app focuses on simplicity while keeping productivity at its core.',
    ss: '/todo.png',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'React.js (Vite)', 'LocalStorage'],
    live: 'https://todojustdoit.netlify.app/',
    code: 'https://github.com/jitendrasinghchouhan3007/JUST-DO-IT'
  },
  {
  title: '🍅 Tomato',
  desc: 'Tomato is a modern food delivery website designed to provide a smooth and visually appealing ordering experience. It features an intuitive interface for browsing restaurants, exploring menus, and placing orders quickly. The system-style layout highlights usability, speed, and a responsive design for everyday users.',
  ss: '/tomato1.png',
  tech: ['JavaScript', 'HTML5', 'CSS3', 'React.js (Vite)', 'Tailwind CSS'],
  live: 'https://my-app-jitenda3007-jitenda3007s-projects.vercel.app/',
  code: 'https://github.com/jitendrasinghchouhan3007/Food-Dell'
  },
  {
    title: '🎨 CollabDraw',
    desc: 'CollabDraw is a real-time collaborative whiteboard application that allows users to draw, brainstorm, and share ideas on a shared canvas. Multiple users can work together simultaneously with live updates. It is designed to make team collaboration simple, interactive, and visual.',
    ss: '/board.png',
    tech: ['TypeScript', 'React.js', 'Node.js', 'Express', 'REST API', 'SQLite', 'Tailwind CSS'],
    live: 'https://collabdraw-whiteboard-production-b8c8.up.railway.app/login',
    code: 'https://github.com/jitendrasinghchouhan3007/collabdraw-whiteboard.git'
  },
  // {
  // title: '💼 Portfolio Website',
  // desc: 'A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
  // ss: '/portfolio.jpg',
  // tech: ['React', 'Framer Motion', 'Tailwind CSS'],
  // live: '#',
  // code: 'https://github.com/kunj2803/Kunj-Portfolio'
  // },
  // {
  //   title: '💬 DocuChat – Gemini AI Chatbot',
  //   desc: 'An intelligent document interaction app powered by Gemini API that understands and answers queries from uploaded PDFs.',
  //   ss: '/Docuchat.png',
  //   tech: ['Gemini API', 'LangChain', 'Python', 'Streamlit'],
  //   live: 'https://docuchat-chatbot.streamlit.app/',
  //   code: 'https://github.com/kunj2803/Docuchat-Chatbot'
  // },
  // {
  //   title: '📊 ProfileX – Data Profiler',
  //   desc: 'Smart data profiling and preprocessing web app for CSV datasets — feature summary, missing value handling, and visualization.',
  //   ss: '/ProfileX.png',
  //   tech: ['Streamlit', 'Pandas', 'Plotly'],
  //   live: 'https://profilex.streamlit.app/',
  //   code: 'https://github.com/kunjdesai/ProfileX'
  // },
  // {
  //   title: '🧬 Breast Cancer Prediction',
  //   desc: 'ML pipeline using SVC, Random Forest, and XGBoost with SMOTE for imbalanced dataset handling and model optimization.',
  //   ss: '/breastpred.jpg',
  //   tech: ['scikit-learn', 'XGBoost', 'Pandas'],
  //   live: '#',
  //   code: 'https://github.com/kunjdesai/BreastCancerPrediction'
  // }
]

export default function Projects() {
  return (
    <motion.section
     style={{ maxWidth: "1200px", margin: "28px auto", padding: "0 20px" }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
<div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 My Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>

       <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
  background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
  border: '1px solid rgba(0,255,255,0.1)',
  borderRadius: 16,
  padding: 16,
  overflow: 'hidden',
  boxShadow: '0 0 20px rgba(0,255,255,0.08)'
}}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                  
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                   
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
