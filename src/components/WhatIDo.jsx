import React from 'react'
import './WhatIDo.css'
import profileSrc from '../assets/profile.svg'

export default function WhatIDo(){
  return (
    <section id="work" className="whatido">
      <div className="whatido-frame">
        <div className="whatido-inner">
          <div className="whatido-left">
            <h2 className="whatido-title">What I <span>Do</span></h2>
            <div className="whatido-pill">Driven by Purpose</div>
            <p className="whatido-text">I create with passion and purpose. For me, design isn't just about making things look beautiful—it's about solving real problems that matter.</p>
            <p className="whatido-text muted">With over a decade of experience, I focus on deeply understanding people's needs and translating them into intuitive, meaningful, and delightful experiences.</p>
          </div>

          <div className="whatido-right">
            <div className="whatido-photo">
              <img src={profileSrc} alt="profile" className="whatido-img" />
            </div>
          </div>
        </div>

        <h3 className="whatido-section-title">Core Expertise</h3>
        <div className="expertise-grid">
          <div className="card">
            <div className="card-icon">🎨</div>
            <h4>Product Design</h4>
            <p>Crafting user-centered interfaces that solve complex problems with simplicity and elegance.</p>
          </div>

          <div className="card">
            <div className="card-icon">🧭</div>
            <h4>Design Strategy</h4>
            <p>Aligning business goals with user needs to drive measurable product outcomes.</p>
          </div>

          <div className="card">
            <div className="card-icon">🧩</div>
            <h4>Design Systems</h4>
            <p>Building scalable design languages that ensure consistency across platforms.</p>
          </div>

          <div className="card">
            <div className="card-icon">📈</div>
            <h4>Product Management</h4>
            <p>Leading cross-functional teams from discovery to delivery with data-driven decisions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
