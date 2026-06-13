// src/components/ProjectSection.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaFigma,
  FaGithub,
  FaTimes,
  FaDownload,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiNestjs,
} from "react-icons/si";
import { PiCodeBold } from "react-icons/pi";
import { LuBadge } from "react-icons/lu";
import { LiaLayerGroupSolid } from "react-icons/lia";
import { useNavbar } from "../contexts/NavbarContext";

const experiences = [
  {
    title: "Fullstack Developer (Java & Node.js)",
    company: "IVS Corporation",
    type: "Full-time",
    location: "Ho Chi Minh City",
    start: "08/2025",
    end: "Present",
    current: true,
    bullets: [
      "Built backend APIs using Java (RESTful, OOP) for a Japanese client's enterprise platform.",
      "Integrated access control & workflow automation with Intra-mart / BES framework.",
      "Designed & optimized Oracle Database schemas and queries.",
      "Built UI screens with React (bes-app framework) for management interfaces.",
      "Managed source code via SVN in an Agile cross-functional team.",
    ],
    tags: ["Java", "Intra-mart/BES", "Oracle DB", "React", "SVN", "Agile"],
  },
  {
    title: "Fullstack Developer (Node.js & React)",
    company: "Nexle Corporation",
    type: "Full-time",
    location: "Ho Chi Minh City",
    start: "09/2024",
    end: "07/2025",
    current: false,
    bullets: [
      "Developed scalable backend systems with Node.js (ExpressJS, NestJS), RESTful APIs & TypeScript.",
      "Built responsive web apps using ReactJS & Next.js with reusable component design.",
      "Participated in database design & optimization with MySQL and MongoDB.",
      "Deployed & maintained containerized services using Docker & Docker Compose.",
      "Collaborated in Agile/Scrum team with Git version control.",
    ],
    tags: ["Node.js", "NestJS", "ReactJS", "Next.js", "MySQL", "MongoDB", "Docker", "TypeScript"],
  },
  {
    title: "Embedded Intern",
    company: "95IDEAL",
    type: "Internship",
    location: "Ho Chi Minh City",
    start: "03/2024",
    end: "07/2024",
    current: false,
    bullets: [
      "Built a Computer Vision product for medical diagnostics — classifying Diabetic Retinopathy stages from retinal fundus images.",
      "Researched integration between retinal fundus camera (Visucam) and Jetson Nano for data pipeline.",
    ],
    tags: ["Computer Vision", "Jetson Nano", "Python", "Embedded"],
  },
];

const BuildingIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
  </svg>
);

const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);


// ===================================
// KOMPONEN UTAMA SECTION EXPERIENCE
// ===================================
function Experience() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl font-bold font-moderniz">
          <span style={{ color: "#fff" }}>WORK </span>
          <span style={{ color: "#00d4b4" }}>EXPERIENCE</span>
        </h2>
        <p style={{ color: "#8899aa", fontSize: "16px", marginTop: "10px", letterSpacing: "0.03em" }}>
          My professional journey
        </p>
      </motion.div>

      <div className="mx-auto max-w-5xl px-4">
        <div style={{ position: "relative" }}>

          {/* Timeline line vẽ dần từ trên xuống */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: "18px",
              top: "12px",
              bottom: "12px",
              width: "2px",
              background: "linear-gradient(to bottom, #00d4b4 0%, #00d4b440 100%)",
              borderRadius: "2px",
              transformOrigin: "top",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}
              >
                {/* Dot glow scale vào */}
                <div style={{
                  flexShrink: 0,
                  width: "38px",
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "22px",
                  zIndex: 1,
                }}>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#00d4b4",
                      boxShadow: "0 0 8px #00d4b4aa",
                      border: "2px solid #0a1628",
                    }}
                  />
                </div>

                {/* Card hover nổi lên */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    flex: 1,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "14px",
                    padding: "24px 28px",
                    backdropFilter: "blur(8px)",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(0,212,180,0.25)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
                >
                  {/* Top row: title + date */}
                  <div style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                      <h3 style={{
                        margin: 0,
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#e8f0f8",
                        letterSpacing: "0.01em",
                      }}>
                        {exp.title}
                      </h3>
                      {exp.current && (
                        <span style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                          background: "rgba(0,212,180,0.12)",
                          border: "1px solid rgba(0,212,180,0.35)",
                          borderRadius: "20px",
                          padding: "2px 10px",
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "#00d4b4",
                          letterSpacing: "0.04em",
                        }}>
                          <span style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "#00d4b4",
                            display: "inline-block",
                          }} />
                          Current
                        </span>
                      )}
                    </div>

                    <span style={{
                      background: "rgba(0,212,180,0.10)",
                      border: "1px solid rgba(0,212,180,0.25)",
                      borderRadius: "8px",
                      padding: "4px 14px",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#00d4b4",
                      whiteSpace: "nowrap",
                      letterSpacing: "0.02em",
                    }}>
                      {exp.start} – {exp.end}
                    </span>
                  </div>

                  {/* Company row */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "10px",
                    fontSize: "15px",
                  }}>
                    <BuildingIcon />
                    <span style={{ color: "#00d4b4", fontWeight: 600 }}>{exp.company}</span>
                    <span style={{ color: "#5a6a7a", fontWeight: 400 }}>· {exp.type} · {exp.location}</span>
                  </div>

                  {/* Bullets */}
                  <ul style={{
                    margin: "16px 0 0",
                    paddingLeft: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}>
                    {exp.bullets.map((b, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + i * 0.08 }}
                        style={{
                          color: "#a8bfd0",
                          fontSize: "15px",
                          lineHeight: "1.6",
                        }}
                      >
                        {b}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tags xuất hiện lần lượt */}
                  <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginTop: "18px",
                  }}>
                    {exp.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + i * 0.05 }}
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          borderRadius: "20px",
                          padding: "4px 14px",
                          fontSize: "13px",
                          color: "#c0d4e8",
                          fontWeight: 500,
                          letterSpacing: "0.02em",
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
