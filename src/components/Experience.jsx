import React from 'react'
import './Experience.css'

export default function Experience(){
  const cards = [
    {title:'Lead Designer', org:'Mubadala', years:'2023 - Present'},
    {title:'Lead UX Consultant', org:'Al-Hilal Bank', years:'2022 - 2023'},
    {title:'Sr Associate - UX', org:'Price Waterhouse Coopers', years:'2021 - 2021'},
    {title:'Lead UX Designer', org:'Accenture', years:'2018 - 2021'}
  ]

  return (
    <section id="experience" className="section experience">
      <div className="inner">
        <div className="section-header">
          <h2>Experience</h2>
          <p className="sub">A decade of crafting digital experiences across industries</p>
        </div>

        <div className="timeline">
          <div className="line" />
          <div className="cards">
            {cards.map((c,i)=> (
              <div className="exp-card" key={i}>
                <div className="badge">{c.years.split(' - ')[0]}</div>
                <h4>{c.title}</h4>
                <p className="org">{c.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
