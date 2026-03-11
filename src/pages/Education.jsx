import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "clamp(2rem,5vw,3rem) 1rem",
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
          padding: "clamp(1.5rem,4vw,3rem)",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(1.5rem,4vw,1.9rem)",
            marginBottom: "2rem",
            background:
              "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Education
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
          {/* College */}
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 25px rgba(0,255,200,0.15)",
            }}
            transition={{ duration: 0.3 }}
            style={cardStyle}
          >
         <FaUniversity style={{ fontSize: "clamp(28px,5vw,40px)" }} color="var(--accent)" />

            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <h4 style={{ ...titleStyle, margin: 0 }}>
                  BCA - Bachelor of Computer Applications
                </h4>

                <h4 style={{ ...titleStyle, margin: 0, whiteSpace: "nowrap" }}>
                  July 2022 – July 2025
                </h4>
              </div>

              <p style={textStrong}>
                Lokmanya Tilak S.C.C (M.C.N. University) — Ujjain, Madhya Pradesh
              </p>
              <p style={textLight}>CGPA: 7.2</p>

              <br />


              <p>
                ⚡ I have studied core computer science subjects such as Data Structures, Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Architecture, Software Engineering.
              </p>
              <p>
                ⚡ My curriculum also included Engineering Mathematics (Discrete Mathematics, Probability & Statistics), Computer Organization & Architecture, Digital Logic, and Numerical Methods, building strong analytical and logical foundations.
              </p>
              <p>
                ⚡ Through academic projects and labs, I developed strong problem-solving skills, system-level understanding, and software development fundamentals.
              </p>


            </div>




          </motion.div>

          {/* 12th */}
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 25px rgba(0,255,200,0.15)",
            }}
            transition={{ duration: 0.3 }}
            style={cardStyle}
          >
            <FaGraduationCap size={38} color="var(--accent)" />
            <div>
              <h4 style={titleStyle}>Higher Secondary Education (12th)</h4>
              <p style={textStrong}>
                Govt. Excellence H. S. School — Ujjain
              </p>
              <p style={textLight}>M.P Board | 75%</p>
              <p style={textLight}>Completed in 2022</p>
            </div>
          </motion.div>

          {/* 10th */}
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 25px rgba(0,255,200,0.15)",
            }}
            transition={{ duration: 0.3 }}
            style={cardStyle}
          >
            <FaSchool size={36} color="var(--accent)" />
            <div>
              <h4 style={titleStyle}>Secondary Education (10th)</h4>
              <p style={textStrong}>
                Purushottam V. M .H .S  School — Ujjain
              </p>
              <p style={textLight}>M.P Board | 80%</p>
              <p style={textLight}>Completed in 2020</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

/* ---------- Styles ---------- */

const cardStyle = {
  background: "rgba(255,255,255,0.05)",
  borderRadius: "14px",
  padding: "clamp(1rem,3vw,1.5rem)",
  border: "1px solid rgba(255,255,255,0.08)",
  display: "flex",
  alignItems: "flex-start",
  gap: "1rem",
  flexWrap: "wrap",
};


const titleStyle = {
  color: "var(--accent)",
  marginBottom: "0.4rem",
  fontSize: "clamp(1rem,3vw,1.25rem)",
};

const textStrong = {
  color: "rgba(255,255,255,0.85)",
  marginBottom: "0.2rem",
};

const textLight = {
  color: "rgba(255,255,255,0.7)",
};

export default Education;