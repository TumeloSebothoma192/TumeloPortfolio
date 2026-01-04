import React from 'react'
import './CaseStudies.css'

export default function CaseStudies(){
  const items = [
    {num:'01', title:'Grant Management Tool', desc:'A grant lifecycle management tool for Mubadala Foundation', tags:['UI/UX','Web','Product Owner'], year:2025},
    {num:'02', title:'E-Gift Cards', desc:'Personalized digital gift cards for a banking super app', tags:['UI/UX','Mobile','Banking'], year:2023},
    {num:'03', title:'City Observatory Dashboard', desc:'A solution to monitor livability in Abu Dhabi', tags:['UI/UX','Tablet','Government'], year:2020},
    {num:'04', title:'E-Learning Portal', desc:'A new age learning system for 15,000+ employees', tags:['UI/UX','Web','Ed-Tech'], year:2018}
  ]

  return (
    <section id="case-studies" className="section case-studies">
      <div className="inner">
        <div className="section-header">
          <h3 className="eyebrow">Selected Work</h3>
          <h2>Case Studies</h2>
        </div>

        <div className="list">
          {items.map((it)=> (
            <article key={it.num} className="case-item">
              <div className="index">{it.num}</div>
              <div className="meta">
                <h4 className="case-title">{it.title}</h4>
                <p className="case-desc">{it.desc}</p>
              </div>
              <div className="case-right">
                <div className="badges">
                  {it.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="year">{it.year}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
