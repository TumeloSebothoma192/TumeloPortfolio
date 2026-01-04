import React from 'react'
import './TrustedBrands.css'

export default function TrustedBrands(){
  const logos = ['KPIT','accenture','ALHILAL','JLR','Other']
  const stats = [
    {num:'14+', label:'Global Brands'},
    {num:'10+', label:'Years Experience'},
    {num:'50+', label:'Projects Delivered'}
  ]

  return (
    <section id="trusted" className="section trusted-brands">
      <div className="inner">
        <div className="section-header center">
          <h3 className="eyebrow">Collaborations</h3>
          <h2>Trusted by Industry Leaders</h2>
          <p className="sub">Partnering with global organizations to create exceptional digital experiences</p>
        </div>

        <div className="logo-row">
          {logos.map((l,i)=> (
            <div key={i} className="logo-card">{l}</div>
          ))}
        </div>

        <div className="stat-row">
          {stats.map((s,i)=> (
            <div className="stat" key={i}>
              <div className="num">{s.num}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
