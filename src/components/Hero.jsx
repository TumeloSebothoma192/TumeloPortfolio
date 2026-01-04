import React, {useState, useRef} from 'react'
import '../App.css'
import './Hero.css'
import profileSrc from '../assets/profile.svg'

export default function Hero(){
  const stackRef = useRef(null)
  const [tilt, setTilt] = useState({x:0,y:0})

  function handleMove(e){
    const rect = stackRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width/2
    const cy = rect.top + rect.height/2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    setTilt({x: (dy / rect.height) * 18, y: (dx / rect.width) * -18})
  }
  function handleLeave(){ setTilt({x:0,y:0}) }

  return (
    <section id="home" className="hero">
      <div className="top-logo" aria-hidden="true">TM</div>
      <div className="hero-frame">
        <div className="hero-inner">
        <div className="hero-left">
          <div className="location">Abu Dhabi, UAE</div>
          <h1 className="title">Hi, I'm Trushank.</h1>
          <p className="subtitle">Designing products that unite business and user needs.</p>
          <p className="blurb">Leveraging AI for design impact. 10+ years of experience across UAE & India.</p>
          <div className="hero-cta">
            <a className="btn primary" href="/resume.pdf" download aria-label="Download resume">Download Resume</a>
            <a className="btn outline" href="mailto:hello@example.com" aria-label="Email Trushank">Let's Chat</a>
          </div>
        </div>

        <div className="hero-right">
          <div
            ref={stackRef}
            className="profile-card-wrap"
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{transform:`rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`}}
            aria-hidden="false"
            aria-label="Profile card">
            <div className="profile-card">
              <div className="card-frame">
                <img src={profileSrc} alt="Trushank" className="profile-img" />
              </div>

              <div className="badge badge-top-left">Namaste · Multilingual Designer</div>
              <div className="badge badge-top-right">Mubadala · Lead Product Designer</div>
              <div className="badge badge-bottom">Open to Opportunities</div>
              <div className="card-dot" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
