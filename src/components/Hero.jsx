import React, { useState, useRef } from "react";
import "../App.css";
import "./Hero.css";
import profileSrc from "../assets/pics/Tumelo12.webp";

export default function Hero() {
  const stackRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMove(e) {
    const rect = stackRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    setTilt({ x: (dy / rect.height) * 18, y: (dx / rect.width) * -18 });
  }
  function handleLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <section id="home" className="hero">
      <div className="top-logo" aria-hidden="true">
        TS
      </div>
      <div className="hero-frame">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="location">Pretoria • South Africa</div>
            <h1
              className="title neon-text neon-animate"
              data-neon="Hey, I’m Tumelo"
            >
              Hey, I’m Tumelo
            </h1>
            <p className="subtitle">
              Designing intelligent experiences for modern users.
            </p>
            <p className="blurb">
              I turn complex ideas into simple, scalable design solutions.
            </p>
            <div className="hero-cta">
              <a className="btn primary" href="/resume.pdf" download>
                View Resume
              </a>
              <a
                className="btn outline cta-pulse"
                href="mailto:jeremiahmakgoka24@gmail.com"
              >
                Let's Talk
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div
              ref={stackRef}
              className="profile-card-wrap"
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
              aria-hidden="false"
              aria-label="Profile card"
            >
              <div className="profile-card">
                <div className="card-frame">
                  <img
                    src={profileSrc}
                    alt="Tumelo Sebothoma"
                    className="profile-img"
                  />
                </div>

                <div className="badge badge-top-left">
                  Advanced CS · Multimedia Computing
                </div>

                <div className="badge badge-top-right">
                  Data & Machine Learning Focus
                </div>

                <div className="badge badge-bottom">
                  Open to AI · Data · ML Roles
                </div>

                <div className="card-dot" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
