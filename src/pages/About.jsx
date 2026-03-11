
import React from "react";
import { motion } from "framer-motion";
const STACK_ICONS = [
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "Express.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
  {
    name: "Tailwind",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
];

const UI_UX_ICONS = [
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Adobe XD",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
  },
  {
    name: "Illustrator",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
  },
  {
    name: "Photoshop",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  },
];




const About = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "3rem 1rem",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          background: "rgba(255,255,255,0.04)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.5rem",
            background:
              "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* Content */}
        <p style={textPrimary}>
          Hi, I’m <strong>Jitendra</strong> — a passionate{" "}
          <strong>MERN Stack Developer</strong> who loves turning ideas into
          scalable, user-friendly web applications. I enjoy building end-to-end
          solutions using{" "}
          <strong>MongoDB, Express.js, React.js, and Node.js</strong>, with a
          strong focus on performance and clean design.
        </p>

        <p style={textSecondary}>
          Beyond coding, I’m deeply interested in <strong>UI/UX</strong>,
          usability, and creating smooth user experiences that feel intuitive
          and impactful. My goal is to build digital products that not only
          function efficiently but also deliver real value to users.
        </p>

        <p style={textSecondary}>
          Aspiring full-stack developer with hands-on experience in modern web
          technologies, REST APIs, and responsive design. Actively seeking
          opportunities to grow, collaborate, and contribute to meaningful,
          product-driven applications.
        </p>

        <p style={textSecondary}>
          I love collaborating, learning new technologies, and continuously
          improving my skills. My goal is to contribute to meaningful products
          that combine strong engineering with thoughtful design.
        </p>

        {/* Technologies Section */}
        <div style={{ marginTop: "2.5rem" }}>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.75)",
              marginBottom: "1.2rem",
            }}
          >
            Here are a few technologies I’ve been working with recently:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(160px, 1fr))",
              gap: "0.8rem 3.5rem",
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            {/* Left column */}
            <div>
              <span style={{ color: "var(--accent)", marginRight: 8 }}>▸</span>
              React.js
            </div>

            <div>
              <span style={{ color: "var(--accent)", marginRight: 8 }}>▸</span>
              Node.js
            </div>

            <div>
              <span style={{ color: "var(--accent)", marginRight: 8 }}>▸</span>
              Express.js
            </div>

            <div>
              <span style={{ color: "var(--accent)", marginRight: 8 }}>▸</span>
              Tailwind CSS
            </div>

            <div>
              <span style={{ color: "var(--accent)", marginRight: 8 }}>▸</span>
              REST APIs
            </div>

            <div>
              <span style={{ color: "var(--accent)", marginRight: 8 }}>▸</span>
              MangoDB
            </div>
          </div>
        </div>
        <br />
        <br />

        <div style={{ marginTop: "3.5rem" }}>
          <h2
            style={{
              fontSize: "1.7rem",
              marginBottom: "1rem",
              color: "var(--accent)",
              textAlign: "center",
            }}
          >
            What I Do
          </h2>

          <br />
          <br />






          {/* Full Stack Development */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.3fr 1fr",
              gap: "3rem",
              marginTop: "2.5rem",
              alignItems: "center",
            }}
          >
            {/* LEFT SIDE – TEXT */}
            <div>
              <h3
                style={{
                  fontSize: "1.3rem",
                  marginBottom: "1rem",
                  color: "var(--accent)",
                }}
              >
                MERN Stack Development
              </h3>


              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  marginBottom: "1rem",
                  lineHeight: "1.6",
                }}
              >
                I specialize in building scalable, high-performance full-stack web
                applications with clean architecture and intuitive user experiences.
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: "1.8",
                }}
              >
                <li>▸ Developing dynamic user interfaces with React.js</li>
                <li>▸ Connecting frontend to backend via REST APIs</li>
                <li>▸ Designing responsive layouts using Tailwind CSS</li>
                <li>▸ Working with MongoDB for data storage</li>
                <li>▸ Debugging and optimizing application performance</li>


              </ul>
            </div>

            {/* RIGHT SIDE – ICONS */}
            {/* RIGHT SIDE – FULL STACK ICONS (BLUE THEME) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "22px",
                justifyItems: "center",
              }}
            >
              {STACK_ICONS.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 28px rgba(0,180,255,0.7)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "18px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,180,255,0.08)",
                    border: "1px solid rgba(0,180,255,0.35)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    style={{
                      width: "38px",
                      height: "38px",
                      marginBottom: "6px",
                      objectFit: "contain",
                      filter: "drop-shadow(0 0 10px rgba(0,180,255,0.9))",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "#9adfff",
                      letterSpacing: "0.3px",
                    }}
                  >
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>



          <br />
          <br />


          {/* UI / UX DESIGNING */}
          {/* UI / UX Designing */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.3fr 1fr",
              gap: "3rem",
              marginTop: "3.5rem",
              alignItems: "center",
            }}
          >
            {/* LEFT SIDE – TEXT */}
            <div>
              <h3
                style={{
                  fontSize: "1.3rem",
                  marginBottom: "1rem",
                  color: "var(--accent)",
                }}
              >
                UI / UX Designing
              </h3>

              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  marginBottom: "1rem",
                  lineHeight: "1.6",
                }}
              >
                I design intuitive, visually appealing interfaces that focus on user
                experience, accessibility, and consistency across platforms.
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: "1.8",
                }}
              >
                <li>▸ Designing user flows & wireframes in Figma</li>
                <li>▸ Creating high-fidelity UI designs</li>
                <li>▸ Building design systems & reusable components</li>
                <li>▸ Delivering user-centered, clean interfaces</li>
              </ul>
            </div>

            {/* RIGHT SIDE – ICONS */}
            {/* RIGHT SIDE – ICONS (BLUE THEME) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "22px",
                justifyItems: "center",
              }}
            >
              {UI_UX_ICONS.map((tool) => (
                <motion.div
                  key={tool.name}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 25px rgba(0,180,255,0.6)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "18px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,180,255,0.08)",
                    border: "1px solid rgba(0,180,255,0.35)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    style={{
                      width: "38px",
                      height: "38px",
                      marginBottom: "6px",
                      filter: "drop-shadow(0 0 10px rgba(0,180,255,0.9))",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "#9adfff",
                      letterSpacing: "0.3px",
                    }}
                  >
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </motion.div>
    </section>
  );
};

/* ---------- Text Styles ---------- */

const textPrimary = {
  fontSize: "1.1rem",
  color: "rgba(255,255,255,0.85)",
  marginBottom: "1rem",
};

const textSecondary = {
  fontSize: "1.1rem",
  color: "rgba(255,255,255,0.8)",
  marginBottom: "0.9rem",
};

export default About;

