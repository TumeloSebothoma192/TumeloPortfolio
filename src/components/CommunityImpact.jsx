import React from "react";
import "./CommunityImpact.css";

export default function CommunityImpact() {
  return (
    <section id="community" className="section community">
      <div className="inner">
        <div className="section-header">
          <h2 className="neon-text neon-animate" data-neon="Community Impact">
            Community Impact
          </h2>
          <p className="sub">
            I believe in empowering others. Sharing knowledge and guiding
            emerging designers is how I contribute to a stronger, more creative
            community.
          </p>
        </div>

        <div className="motivation">
          <div className="motivation-inner">
            <h3>Why I Give Back</h3>
            <p className="muted">
              Every mentorship, talk, and meetup is a chance to inspire growth
              and spark innovation. Teaching others deepens my own practice and
              helps build a more collaborative design culture.
            </p>

            <div className="quotes">
              <blockquote>
                "Teaching others is the best way to learn yourself."
              </blockquote>
              <blockquote>
                "Great designers don’t just create, they uplift others around
                them."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
