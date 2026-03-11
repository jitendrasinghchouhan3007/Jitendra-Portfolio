import React from "react";
import { motion } from "framer-motion";
import geekProjectImg from "../../public/geek.png";
import skillProjectImg from "../../public/skill.png";
import vataProjectImg from "../../public/vata.png";



export default function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "3rem 1rem",
        color: "white",
      }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          background: "rgba(255,255,255,0.04)",
          borderRadius: "18px",
          padding: "2.5rem 3rem",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 30px rgba(0,0,0,0.6)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "0.4rem" }}>
              MERN Stack Developer Intern
            </h2>

            <a
              href="https://www.google.com/maps/place/Geektheory+-+Website+Development+%26+Software+Development+company/@23.1770704,75.7862496,17z/data=!3m1!4b1!4m6!3m5!1s0x396375005192d21d:0x6c2b92e89e5e906!8m2!3d23.1770655!4d75.7888245!16s%2Fg%2F11w4gv4z89?authuser=0&entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
              style={{
                color: "#4da6ff",
                textDecoration: "none",
                fontSize: "0.95rem",
              }}
            >
              Geek Theory
            </a>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.85rem",
            }}
          >
            Oct 2025 – Mar 2026
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.1)",
            margin: "1.8rem 0",
          }}
        />

        {/* Description */}
        <ul
          style={{
            paddingLeft: "1.2rem",
            margin: 0,
            lineHeight: "1.9",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          <li>
            Designed and implemented backend services with <strong>Node.js</strong> &{" "}
            <strong>Express</strong>, increasing API efficiency by 25%.

          </li>
          <li>
            Applied JWT-based authentication with encrypted passwords to strengthen application security.
          </li>
          <li>
            Developed interactive React interfaces with reusable components for consistent user experience.
          </li>
          <li>
            Optimized MongoDB queries and data models to improve data retrieval speed.
          </li>
          <li>
            Built responsive, modular <strong>React</strong> components for
            seamless cross-device compatibility.
          </li>
          <li>
            Enhanced application performance through code splitting and lazy loading, cutting load times by 30%.
          </li>
          <li>
            Actively participated in code reviews and Git-based collaboration to deliver stable features.
          </li>
        </ul>

        {/* Tech Stack */}
        <div style={{ marginTop: "2rem" }}>
          <p
            style={{
              fontSize: "0.85rem",
              letterSpacing: "1px",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "0.6rem",
            }}
          >
            TECH STACK
          </p>
           <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {[
                  "React.js",
                  "CSS3",
                  "JavaScript",
                  "Express",
                  "Node.js",
                  "MongoDB",
                  "MySQL",
                  "Tailwind CSS ",
                  "Responsive Design",
                  "RESTful APIs",
                  "JWT-based authentication",
                  "API-based AI integrations",
                ].map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: "6px 12px",
                      fontSize: "0.75rem",
                      borderRadius: "10px",
                      background: "rgba(77,166,255,0.12)",
                      border: "1px solid rgba(77,166,255,0.35)",
                      color: "#4da6ff",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
        </div>

        <br />


        {/* Button */}
        <motion.a
          href="https://drive.google.com/file/d/1FLvXquu_3lfP_of28UUZLextl7oyH9Al/view"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.15,
            boxShadow: "0 0 25px rgba(0,180,255,0.6)",
          }}
          transition={{ type: "spring", stiffness: 250 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 16px",
            borderRadius: "5px",
            background: "rgba(77,166,255,0.15)",
            color: "#4da6ff",
            textDecoration: "none",
            border: "1px solid rgba(77,166,255,0.35)",
            fontSize: "0.9rem",
          }}
        >
          View Certificate ↗
        </motion.a>


        <br />
        <br />


        {/* ===== Featured Project Section ===== */}
        {/* ===== Featured Project Section ===== */}
        <div style={{ marginTop: "4rem" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "2rem",
              color: "#7994ae",
            }}
          >
            Projects I’ve Worked On
          </h2>
          <br />

          {/* SINGLE CONTAINER */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: "16px",
              padding: "2rem",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* TOP ROW */}
            <div
              style={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                flexWrap: "wrap",
                marginBottom: "1.5rem",
              }}
            >
              {/* LEFT – IMAGE */}
              <div
                style={{
                  width: "400px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 0 30px rgba(0,0,0,0.6)",
                  flexShrink: 0,
                }}
              >
                <img
                  src={geekProjectImg}
                  alt="Geek Theory Website"
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* RIGHT – TITLE */}
              <div>
                <h3
                  style={{
                    fontSize: "1.6rem",
                    marginBottom: "0.4rem",
                    color: "#4da6ff",
                  }}
                >
                  Geek Theory Website
                </h3>

                <p
                  style={{
                    fontSize: "1.2rem",

                  }}
                >
                  IT solutions and software development website
                </p>


                {/* LIVE DEMO BUTTON */}
                <motion.a
                  href="https://geektheo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 25px rgba(0,180,255,0.6)",
                  }}
                  transition={{ type: "spring", stiffness: 250 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 16px",
                    borderRadius: "5px",
                    background: "rgba(77,166,255,0.15)",
                    color: "#4da6ff",
                    textDecoration: "none",
                    border: "1px solid rgba(77,166,255,0.35)",
                    fontSize: "0.9rem",
                    marginTop: "1.2rem",
                    marginBottom: "1.2rem",
                  }}
                >
                  Live Demo ↗
                </motion.a>

              </div>
            </div>

            {/* BOTTOM – DESCRIPTION */}
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                lineHeight: "1.6",
                fontSize: "0.95rem",
              }}
            >
              Geek Theory Website is the official platform for Geek Theory, a
              Chennai-based IT solutions and software development company offering
              modern digital services. The website showcases technical expertise,
              services, and a professional approach to building scalable digital
              solutions.
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                lineHeight: "1.6",
                fontSize: "0.95rem",
              }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                }}
              >
                The site showcases expertise in web and mobile app development, AI integration, and digital business solutions.
                It provides a clear view of services, technologies, and project capabilities tailored for tech-focused businesses. The platform emphasizes a clean, responsive design aimed at delivering professional IT solutions online.
              </p>
            </p>

            {/* TECH STACK */}
            <div style={{ marginTop: "1.5rem" }}>
              <p
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "1px",
                  color: "rgba(255,255,255,0.55)",
                  marginBottom: "0.6rem",
                }}
              >
                TECH STACK
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {[
                  "React.js",
                  "CSS3",
                  "JavaScript",
                  "Express",
                  "Node.js",
                  "MongoDB",
                  "Tailwind CSS ",
                  "REST APIs",
                ].map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: "6px 12px",
                      fontSize: "0.75rem",
                      borderRadius: "10px",
                      background: "rgba(77,166,255,0.12)",
                      border: "1px solid rgba(77,166,255,0.35)",
                      color: "#4da6ff",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        

        <div style={{ marginTop: "4rem" }}>
          

          {/* SINGLE CONTAINER */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: "16px",
              padding: "2rem",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* TOP ROW */}
            <div
              style={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                flexWrap: "wrap",
                marginBottom: "1.5rem",
              }}
            >
              {/* LEFT – IMAGE */}
              <div
                style={{
                  width: "400px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 0 30px rgba(0,0,0,0.6)",
                  flexShrink: 0,
                }}
              >
                <img
                  src={skillProjectImg}
                  alt="Skilledu - Study AI"
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* RIGHT – TITLE */}
              <div>
                <h3
                  style={{
                    fontSize: "1.6rem",
                    marginBottom: "0.4rem",
                    color: "#4da6ff",
                  }}
                >
                  Skilledu - Study AI

                </h3>

                <p
                  style={{
                    fontSize: "1.2rem",

                  }}
                >
                  Skilledu AI-powered doubt-solving website
                </p>


                {/* LIVE DEMO BUTTON */}
                <motion.a
                  href="https://sai.skilledu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 25px rgba(0,180,255,0.6)",
                  }}
                  transition={{ type: "spring", stiffness: 250 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 16px",
                    borderRadius: "5px",
                    background: "rgba(77,166,255,0.15)",
                    color: "#4da6ff",
                    textDecoration: "none",
                    border: "1px solid rgba(77,166,255,0.35)",
                    fontSize: "0.9rem",
                    marginTop: "1.2rem",
                    marginBottom: "1.2rem",
                  }}
                >
                  Live Demo ↗
                </motion.a>

              </div>
            </div>

            {/* BOTTOM – DESCRIPTION */}
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                lineHeight: "1.6",
                fontSize: "0.95rem",
              }}
            >
              SkilledU AI is an AI-powered learning and doubt-solving platform designed to help students and learners understand complex academic and technical concepts more effectively. The website allows users to explore learning resources, ask subject-specific questions, and receive intelligent, contextual explanations that support self-paced learning. It is especially useful for students preparing for exams, technical interviews, or skill development in modern technology domains.
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                lineHeight: "1.6",
                fontSize: "0.95rem",
              }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                }}
              >
               The platform is used by learners to quickly clarify doubts, reinforce concepts, and access structured educational guidance without relying solely on traditional classroom methods. Its intuitive interface and responsive design make it accessible across devices, enabling users to study anytime and anywhere. The AI-driven approach helps personalize the learning experience by providing relevant explanations based on user queries.    </p>
            </p>

            {/* TECH STACK */}
            <div style={{ marginTop: "1.5rem" }}>
              <p
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "1px",
                  color: "rgba(255,255,255,0.55)",
                  marginBottom: "0.6rem",
                }}
              >
                TECH STACK
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {[
                  "React.js",
                  "CSS3",
                  "JavaScript",
                  "Express",
                  "Node.js",
                  "MongoDB",
                  "Tailwind CSS ",
                  "Groq AI Integration",
                ].map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: "6px 12px",
                      fontSize: "0.75rem",
                      borderRadius: "10px",
                      background: "rgba(77,166,255,0.12)",
                      border: "1px solid rgba(77,166,255,0.35)",
                      color: "#4da6ff",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>


        <div style={{ marginTop: "4rem" }}>
          

          {/* SINGLE CONTAINER */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: "16px",
              padding: "2rem",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* TOP ROW */}
            <div
              style={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                flexWrap: "wrap",
                marginBottom: "1.5rem",
              }}
            >
              {/* LEFT – IMAGE */}
              <div
                style={{
                  width: "400px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 0 30px rgba(0,0,0,0.6)",
                  flexShrink: 0,
                }}
              >
                <img
                  src={vataProjectImg}
                  alt="VaataSmart-CRM System"
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
 
              {/* RIGHT – TITLE */}
              <div>
                <h3
                  style={{
                    fontSize: "1.6rem",
                    marginBottom: "0.4rem",
                    color: "#4da6ff",
                  }}
                >
                  VaataSmart-CRM System

                </h3>

                <p
                  style={{
                    fontSize: "1.2rem",

                  }}
                >
                  VaataSmart CRM System internal management platform
                </p>


                {/* LIVE DEMO BUTTON */}
                <motion.a
                  href="https://crm.vaatasmart.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 25px rgba(0,180,255,0.6)",
                  }}
                  transition={{ type: "spring", stiffness: 250 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 16px",
                    borderRadius: "5px",
                    background: "rgba(77,166,255,0.15)",
                    color: "#4da6ff",
                    textDecoration: "none",
                    border: "1px solid rgba(77,166,255,0.35)",
                    fontSize: "0.9rem",
                    marginTop: "1.2rem",
                    marginBottom: "1.2rem",
                  }}
                >
                  Live Demo ↗
                </motion.a>

              </div>
            </div>

            {/* BOTTOM – DESCRIPTION */}
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                lineHeight: "1.6",
                fontSize: "0.95rem",
              }}
            >
              The VaataSmart CRM System is a web-based internal management platform developed to streamline business operations such as customer management, sales tracking, and order processing for the company. The system helps teams manage customer information, monitor product orders, and maintain business data in a centralized dashboard.
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                lineHeight: "1.6",
                fontSize: "0.95rem",
              }}
              
            >
              
              <p
                style={{
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                }}
              >
               The CRM enables employees to efficiently handle customer interactions, maintain records, and track business activities in real time. It improves operational efficiency by reducing manual processes and providing a structured workflow for managing clients and business data.    </p>
            </p>

            {/* TECH STACK */}
            <div style={{ marginTop: "1.5rem" }}>
              <p
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "1px",
                  color: "rgba(255,255,255,0.55)",
                  marginBottom: "0.6rem",
                }}
              >
                TECH STACK
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {[
                  "React.js",
                  "CSS3",
                  "JavaScript",
                  "Express",
                  "Node.js",
                  "MongoDB",
                  "Tailwind CSS ",
                  "REST APIs",
                ].map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: "6px 12px",
                      fontSize: "0.75rem",
                      borderRadius: "10px",
                      background: "rgba(77,166,255,0.12)",
                      border: "1px solid rgba(77,166,255,0.35)",
                      color: "#4da6ff",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>


      </motion.div>
    </motion.section>
  );
}
