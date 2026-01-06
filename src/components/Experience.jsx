import React from "react";
import "./Experience.css";

export default function Experience() {
  const experiences = [
    {
      role: "Multimedia Developer",
      org: "Tshwane University of Technology",
      period: "2022 – 2023",
      desc: [
        "Developed a multimedia application using Java to demonstrate Advanced Object-Oriented Programming (AOP) principles and UI design.",
        "Designed and built a dynamic website for a class project using HTML, CSS, and JavaScript.",
        "Created a Unity project showcasing the historical Marabastad area.",
      ],
    },
    {
      role: "AI Project Team Member",
      org: "A2SV Hackathon – AI for Impact",
      period: "2024",
      desc: [
        "Developed an AI solution to enhance road safety by analysing driver behaviour.",
        "Worked with real-time data processing and introductory machine learning techniques.",
        "Advanced to the semi-finals and refined the solution with expert mentorship.",
      ],
    },
    {
      role: "Multimedia Developer",
      org: "TUT 4IR Lab",
      period: "2023",
      desc: [
        "Worked on interactive multimedia and Unity-based projects.",
        "Strengthened skills in Blender, Unity, and digital content creation through hands-on experimentation.",
      ],
    },
    {
      role: "Software Development Student",
      org: "Tshwane University of Technology",
      period: "2021 – Present",
      desc: [
        "Completed coursework in Data Structures, Distributed Programming, Data Science, and Software Engineering.",
        "Built academic projects using Java, Kotlin, React, Node.js, and database technologies.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="inner">
        <div className="section-header">
          <h2 className="neon-text neon-animate" data-neon="Experience">
            Experience
          </h2>
          <p className="sub">Academic, technical & project-based experience</p>
        </div>

        <div className="stagger-grid">
          {experiences.map((exp, i) => (
            <div key={i} className={`exp-card ${i % 2 === 1 ? "offset" : ""}`}>
              <h4>{exp.role}</h4>
              <p className="org">{exp.org}</p>

              <ul className="desc">
                {exp.desc.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
