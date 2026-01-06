import React from "react";
import "./ContactSection.css";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <div className="footer-cards">
        {/* Connect With Me card */}
        <div className="contact-card">
          <h3>Connect with Me</h3>
          <p className="muted">
            Whether you want to discuss AI, software, multimedia projects, or
            just exchange ideas, I’m all ears. Let’s collaborate and create
            something impactful.
          </p>
          <a
            className="cta cta-pulse"
            href="mailto:jeremiahmakgoka24@gmail.com"
          >
            Let's Talk
          </a>
        </div>

        {/* Reach Me At card */}
        <div className="contact-card">
          <h3>Reach Me At</h3>
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/mrsebothoma-515993289"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
