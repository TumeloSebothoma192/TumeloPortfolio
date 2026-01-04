import React from 'react'
import './Testimonials.css'

export default function Testimonials(){
  const quotes = [
    {name:'Ashish Mistry', text:'"Trushank is an absolute delight to work with..."'},
    {name:'Namrata Dhanak', text:'"I have seen him lead design engagements with clients..."'},
    {name:'Batsirai Madzonga', text:'"Trushank is an AMAZING designer. Any team is lucky to have him."'},
    {name:'Sonakshi Sharma', text:'"Trushank is excellent in understanding technical aspects of UX..."'}
  ]

  return (
    <section id="testimonials" className="section testimonials">
      <div className="inner">
        <div className="section-header">
          <h2>Words of Appreciation</h2>
          <p className="sub">Reflections from peers and leaders</p>
        </div>

        <div className="cards">
          {quotes.map((q,i)=> (
            <div className="quote" key={i}>
              <div className="stars">★★★★★</div>
              <p className="text">{q.text}</p>
              <div className="author">{q.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
