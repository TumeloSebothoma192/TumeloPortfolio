import React from 'react'
import './CommunityImpact.css'

export default function CommunityImpact(){
  const items = [
    {title:'Design Mentorship', desc:'350+ Hours | 50+ Mentees'},
    {title:'Speaking Engagements', desc:'3 Talks'},
    {title:'Community Meetups', desc:'Monthly Events'}
  ]

  return (
    <section id="community" className="section community">
      <div className="inner">
        <div className="section-header">
          <h2>Community Impact</h2>
          <p className="sub">Passionate about sharing knowledge, mentoring emerging designers, and contributing to the growth of the design ecosystem</p>
        </div>

        <div className="grid">
          {items.map((it,i)=> (
            <div className="card" key={i}>
              <div className="media" />
              <div className="card-body">
                <h4>{it.title}</h4>
                <p className="muted">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
