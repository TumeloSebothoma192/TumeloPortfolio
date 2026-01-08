import React from "react";
import "./WhatIDo.css";
import saved480 from "../assets/pics/savedTJ-480.webp";
import saved768 from "../assets/pics/savedTJ-768.webp";
import saved1200 from "../assets/pics/savedTJ-1200.webp";
import savedFallback from "../assets/pics/savedTJ.png";

export default function WhatIDo() {
  return (
    <section id="work" className="whatido">
      <div className="whatido-frame">
        <div className="whatido-inner">
          <div className="whatido-left">
            <h2
              className="whatido-title neon-text neon-animate"
              data-neon="What I Study & Build"
            >
              What I <span>Study & Build</span>
            </h2>

            <div className="whatido-pill">
              Advanced Computer Science & Multimedia Computing
            </div>

            <p className="whatido-text">
              I am trained in both Computer Science and Multimedia Computing,
              with a strong foundation in software development, data structures,
              algorithms, and interactive systems.
            </p>

            <p className="whatido-text muted">
              My academic background spans Data Science, Distributed
              Programming, Human-Computer Interaction, and Multimedia
              Technologies, with a growing focus on Machine Learning and
              data-driven problem solving.
            </p>
          </div>

          <div className="whatido-right">
            <div className="whatido-photo">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${saved480} 480w, ${saved768} 768w, ${saved1200} 1200w`}
                  sizes="(max-width: 768px) 80vw, 300px"
                />
                <img src={savedFallback} alt="profile" className="whatido-img" />
              </picture>
            </div>
          </div>
        </div>

        <h3 className="whatido-section-title">
          Core Academic & Technical Focus
        </h3>

        <div className="expertise-grid">
          <div className="card">
            <h4>Data Science & Machine Learning</h4>
            <p>
              Foundations in data analysis, data-driven decision making, and
              introductory machine learning concepts applied through academic
              projects.
            </p>
          </div>

          <div className="card">
            <h4>Software Engineering</h4>
            <p>
              Strong grounding in software development principles,
              object-oriented programming, service-oriented computing, and
              integrated software projects.
            </p>
          </div>

          <div className="card">
            <h4>Algorithms & Theoretical CS</h4>
            <p>
              Knowledge of data structures, algorithms, distributed programming,
              and theoretical computer science for efficient and scalable
              systems.
            </p>
          </div>

          <div className="card">
            <h4>Multimedia & Interactive Systems</h4>
            <p>
              Experience with multimedia computing, 3D modelling, animation,
              games programming, and interactive virtual environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
