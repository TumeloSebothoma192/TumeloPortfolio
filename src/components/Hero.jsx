import React, { useState, useRef } from "react";
import "../App.css";
import "./Hero.css";
import profile480 from "../assets/pics/Tumelo12-480.webp";
import profile768 from "../assets/pics/Tumelo12-768.webp";
import profile1200 from "../assets/pics/Tumelo12-1200.webp";
import profileFallback from "../assets/pics/Tumelo12.jpg";

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
              <a
                className="btn primary"
                href="https://1drv.ms/b/c/d44fffd1e2bca4e7/IQC94sffw3JbS5yoiFstHllgAfzUefxNxZWWWZL699-i6Bw"
                download="Professional Resume.pdf"
              >
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
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={`${profile480} 480w, ${profile768} 768w, ${profile1200} 1200w`}
                      sizes="(max-width: 768px) 80vw, 300px"
                    />
                    <img
                      src={profileFallback}
                      alt="Tumelo Sebothoma"
                      className="profile-img"
                    />
                  </picture>
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
