// import React from 'react'
// import { motion } from 'framer-motion'
// import "../CSS/Home.css"
// import '../index.css'


// // 🖼️ Import Assets
// import photo from '../../public/photo3.jpeg'
// import githubLogo from '../../public/github.png'
// import linkedinLogo from '../../public/linkedin.png'
// import gmailLogo from '../../public/gmail.png'


// export default function Home() {
//   const professions = [
//     'MERN Stack Developer',
//     'Problem Solver',
//     "Software Developer",
//     'User-Focused Engineer',
//     'Product-Oriented Problem Solver',

//   ]

//   const quickLinks = [
//     { img: githubLogo, title: 'GitHub', link: 'https://github.com/jitendrasinghchouhan3007' },
//     { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/jitendra-singh-chouhan-309560316/' },
//     { img: gmailLogo, title: 'Email', link: 'mailto:jsinghchouhan971@gmail.com' },



//   ]

//   return (
//     <section className="home-section">
//       {/* Typing Effect Styles */}
//       <style>
//         {`
//           @keyframes typing { from { width: 0; } to { width: 100%; } }
//           @keyframes blink { 50% { border-color: transparent; } }
//         `}
//       </style>

//       {/* Top Section: Photo + Info */}
//       <div className="home-top">
//         {/* Left: Glowing Photo */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="photo-container"
//         >
//           <motion.div
//             animate={{ rotate: [0, 360] }}
//             transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
//             className="photo-ring"
//           />
//           <motion.div
//             animate={{ y: [0, -8, 0] }}
//             transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//             className="photo-frame"
//           >
//             <motion.img
//               src={photo}
//               alt="Kunj Desai"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 1 }}
//               className="profile-photo"
//             />
//           </motion.div>
//         </motion.div>

//         {/* Right: Info Section */}
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="home-info"
//         >
//           <h1 className="home-title">
//             Hi, I’m{' '}
//             <motion.span
//               animate={{ backgroundPositionX: ['0%', '200%'] }}
//               transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
//               className="home-name"
//             >
//               Jitendra Singh Chouhan
//             </motion.span>
//           </h1>

//           {/* Typing Animated Text */}
//           <p className="typing-effect">
//             MERN Stack Developer  |  Tech Explorer  |  UI/UX Enthusiast
//           </p>

//           <p className="home-description">
//             I’m a passionate developer who enjoys building modern, scalable web
//             applications with clean UI and strong backend logic. I love turning ideas
//             into real-world products and continuously learning new technologies to
//             improve my craft.
//           </p>


//           {/* Profession Tags */}
//           <motion.div className="profession-tags">
//             {professions.map((role, i) => (
//               <motion.div key={i} whileHover={{ scale: 1.05, background: 'linear-gradient(90deg,var(--accent),var(--accent-2))' }} transition={{ type: 'spring', stiffness: 200 }} className="profession-tag">
//                 {role}
//               </motion.div>
//             ))}
//           </motion.div>



//           {/* Info Cards */}

//         </motion.div>
//       </div>

//       {/* Bottom Quick Links */}
//       <motion.div className="quick-links">
//         <h2 className="quick-links-title">Connect with me</h2>
//         <div className="quick-links-list">
//           {quickLinks.map((item, i) => (
//             <motion.a
//               key={i}
//               href={item.link}
//               title={item.title}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.15, rotate: 5 }}
//               transition={{ type: 'spring', stiffness: 250 }}
//             >
//               <motion.img
//                 src={item.img}
//                 alt={item.title}
//                 //whileHover={{ filter: 'drop-shadow(0 0 15px var(--accent)) brightness(1.2)' }}
//                 className="quick-link-img"
//               />
//             </motion.a>
//           ))}
//         </div>
//       </motion.div>

//     </section>
//   )
// }

import React from "react";
import { motion } from "framer-motion";

// Assets
import photo from "../../public/photo3.jpeg";
import githubLogo from "../../public/github.png";
import linkedinLogo from "../../public/linkedin.png";
import gmailLogo from "../../public/gmail.png";

export default function Home() {
  const professions = [
    "MERN Stack Developer",
    "Problem Solver",
    "Software Developer",
    "User-Focused Engineer",
    "Product-Oriented Problem Solver",
  ];

  const quickLinks = [
    { img: githubLogo, title: "GitHub", link: "https://github.com/jitendrasinghchouhan3007" },
    { img: linkedinLogo, title: "LinkedIn", link: "https://www.linkedin.com/in/jitendra-singh-chouhan-309560316/" },
    { img: gmailLogo, title: "Email", link: "mailto:jsinghchouhan971@gmail.com" },
  ];

  return (
    <section style={styles.homeSection}>
      {/* Animations */}
      <style>
        {`
        @keyframes typing { from { width:0 } to { width:100% } }
        @keyframes blink { 50% { border-color: transparent } }
        `}
      </style>

      {/* Top Section */}
      <div style={styles.homeTop}>
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={styles.photoContainer}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={styles.photoFrame}
          >
            <motion.img
              src={photo}
              alt="Jitendra Singh"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              style={styles.profilePhoto}
            />
          </motion.div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={styles.homeInfo}
        >
          <h1 style={styles.homeTitle}>
            Hi, I’m{" "}
            <motion.span
              animate={{ backgroundPositionX: ["0%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={styles.homeName}
            >
              Jitendra Singh Chouhan
            </motion.span>
          </h1>

          <p style={styles.typingEffect}>
            MERN Stack Developer | Tech Explorer | UI/UX Enthusiast
          </p>

          <p style={styles.description}>
            I’m a passionate developer who enjoys building modern, scalable web
            applications with clean UI and strong backend logic.
          </p>

          {/* Profession Tags */}
          <div style={styles.professionTags}>
            {professions.map((role, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                style={styles.professionTag}
              >
                {role}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Links */}
      <motion.div style={styles.quickLinks}>
        <h2 style={styles.quickLinksTitle}>Connect with me</h2>

        <div style={styles.quickLinksList}>
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
            >
              <img src={item.img} alt={item.title} style={styles.quickLinkImg} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- Styles ---------------- */

const styles = {
  homeSection: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "3rem",
    alignItems: "center",
    padding: "3rem 2rem 1rem",
    background:
      "radial-gradient(circle at 30% 30%, rgba(0,255,200,0.08), transparent 80%)",
    color: "#fff",
  },

  homeTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    maxWidth: "1250px",
    flexWrap: "wrap",
    gap: "2rem",
  },

  photoContainer: {
    position: "relative",
    flex: "0 0 380px",
    display: "flex",
    justifyContent: "center",
  },

  photoFrame: {
    borderRadius: "50%",
    overflow: "hidden",
    width: "300px",
    height: "300px",
    boxShadow: "0 0 45px rgba(0,255,200,0.25)",
    border: "3px solid #0077ff",
  },

  profilePhoto: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  homeInfo: {
    flex: 1,
    minWidth: "300px",
    maxWidth: "700px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  homeTitle: {
    fontSize: "clamp(2rem,5vw,3rem)",
    fontWeight: 700,
  },

  homeName: {
    background: "linear-gradient(90deg,#004c99,#0077ff,#004c99)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },

  typingEffect: {
    fontSize: "1.2rem",
    marginTop: "0.4rem",
    whiteSpace: "nowrap",
    borderRight: "2px solid #0077ff",
    overflow: "hidden",
    animation: "typing 3.5s steps(40,end), blink .8s infinite",
  },

  description: {
    marginTop: "1rem",
    color: "rgba(255,255,255,0.8)",
  },

  professionTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.8rem",
    marginTop: "1.4rem",
  },

  professionTag: {
    border: "1px solid #0077ff",
    padding: "8px 16px",
    borderRadius: "20px",
    fontSize: "0.9rem",
    background: "rgba(255,255,255,0.05)",
  },

  quickLinks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    marginTop: "3rem",
  },

  quickLinksTitle: {
    fontSize: "1.5rem",
    fontWeight: 600,
  },

  quickLinksList: {
    display: "flex",
    gap: "1.5rem",
    justifyContent: "center",
  },

  quickLinkImg: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover",
  },
};