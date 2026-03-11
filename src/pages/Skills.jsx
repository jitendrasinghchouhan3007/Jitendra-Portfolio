import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const SKILLS = [
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
  { name: "VS Code", logo: "https://camo.githubusercontent.com/1e321c65f17c033c981549fa030b2f9df52d03f3a536e79d91d4b6676642ce40/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7673636f6465" },
  { name: "Netlify", logo: "https://camo.githubusercontent.com/838a459c77954c02c35fbc4155b6cd260bfd689da42425d632458d7334743ca0/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6e65746c696679" },
  { name: "Vite", logo: "https://camo.githubusercontent.com/046bb2928d922fed5fcece14e9ddcf40a43b9e120d43d269f2cf510e32d916ed/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d76697465" },
  { name: "Express.js", logo: "https://camo.githubusercontent.com/6c581f9592fa01dbdcf471f2691504e88c96d4840ce2710e9080513cdbed7c21/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d65787072657373" },
  { name: "Vercel", logo: "https://camo.githubusercontent.com/698ad1a1d2b7021ee0d8f3dd5f17415844ae44c1d078979e46b301e1c5d542b7/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d76657263656c" },
  { name: "Postman", logo: "https://camo.githubusercontent.com/8829178716e96490611624f85c953c0805643f4d1645057ba5d29d021957d407/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d706f73746d616e" },

  
];

const ROWS = [
  [
    { title: "Programming Languages", items: [ "C", "C++", "Java"] },
    { title: "MERN Stack Technologies", items: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "Tailwind", "Rest API"] },
    { title: "Databases & Tools", items: ["MySQL", "MongoDB",] },
    { title: "Deployment", items: ["Vercel", "Env management", "Netlify","Render","Railway"] },
  ],
  [
    { title: "Tools & Platforms", items: ["Git", "GitHub", "VS Code", "Antigravity","Cursor" ,"Postman"] },
    {
      title: "Soft Skills",
      items: ["Teamwork", "Problem Solving", "Creativity", "Adaptability", "Communication","Prompt Engineering"],
    },
  ],
];

export default function Skills() {
  const stageRef = useRef();

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const circles = Array.from(stage.querySelectorAll(".skill-circle"));
    const rect = stage.getBoundingClientRect();
    const placed = [];

    const isOverlapping = (x, y, size) =>
      placed.some((p) => {
        const dx = p.x - x;
        const dy = p.y - y;
        return Math.sqrt(dx * dx + dy * dy) < p.size / 2 + size / 2 + 40;
      });

    circles.forEach((circle) => {
      const size = circle.offsetWidth;
      let x, y, tries = 0;
      do {
        x = Math.random() * (rect.width - size - 20);
        y = Math.random() * (rect.height - size - 20);
        tries++;
      } while (isOverlapping(x, y, size) && tries < 150);

      placed.push({ x, y, size });
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      const dx = (Math.random() - 0.5) * 100;
      const dy = (Math.random() - 0.5) * 100;
      circle.animate(
        [{ transform: "translate(0, 0)" }, { transform: `translate(${dx}px, ${dy}px)` }],
        {
          duration: 5000 + Math.random() * 2000,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });
  }, []);

  return (
    <section className="skills-container" id="skills">
      {/* Header */}
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl text-cyan-400 font-semibold mb-3">My Skills</h2>
        <div className="w-28 h-[2px] bg-cyan-400 mx-auto mb-6"></div>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          ✨ Technical expertise blended with creativity — explore my core competencies below.
        </p>
      </motion.div>

      {/* Floating Orbs with page-load + hover highlight animation */}
      <motion.div
        className="skills-stage relative mx-auto mb-20"
        ref={stageRef}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          width: "100%",
          height: "550px",
          borderRadius: "25px",
          background: "radial-gradient(circle at 50% 50%, #0a0a0a, #101010)",
          overflow: "hidden",
          boxShadow: "inset 0 0 60px rgba(0,255,255,0.07)",
          position: "relative",
        }}
      >
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.name}
            className="skill-circle"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.3,
              boxShadow: "0 0 35px 10px rgba(0,255,255,0.6)",
              background: "rgba(0,255,255,0.12)",
            }}
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(0,255,255,0.06)",
              border: "1px solid rgba(0,255,255,0.25)",
              backdropFilter: "blur(8px)",
              cursor: "pointer",
              transition: "box-shadow 0.4s ease, background 0.4s ease",
            }}
          >
            <motion.img
              src={s.logo}
              alt={s.name}
              style={{
                width: "50px",
                height: "50px",
                objectFit: "contain",
                filter: "drop-shadow(0 0 8px rgba(0,255,255,0.4)) brightness(1.2)",
                marginBottom: "5px",
              }}
              whileHover={{
                filter: "drop-shadow(0 0 12px rgba(0,255,255,0.9)) brightness(1.6)",
                rotate: [0, 6, -6, 0],
                transition: { duration: 0.5 },
              }}
            />
            <span
              style={{
                color: "rgba(180,255,255,0.9)",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.3px",
              }}
            >
              {s.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Table (Text Section) */}
      <div className="skills-table">
        {ROWS.map((row, rowIndex) => (
          <div key={rowIndex} className="skills-row">
            {row.map((col, colIndex) => (
              <motion.div
                key={col.title}
                className="skill-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{
                  duration: 0.6,
                  delay: (rowIndex + colIndex) * 0.1,
                }}
              >
                <h3>{col.title}</h3>
                <ul>
                  {col.items.map((item, i) => (
                    <motion.li key={i} whileHover={{ x: 6, color: "#00ffc8" }}>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
