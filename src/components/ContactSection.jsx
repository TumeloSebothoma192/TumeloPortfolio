import React from 'react'
import './ContactSection.css'

export default function ContactSection(){
  return (
    <section id="contact" className="section contact-section">
      <div className="inner contact-inner">
        <div className="left">
          <h2>Let's have a Chat</h2>
          <p className="muted">Want to chat design, products, anything digital or just grab a smoothie? Hit me up!</p>
          <a className="cta" href="#">Let's Chat</a>
        </div>
        <div className="right">
          <div className="contact-card">
            <div className="label">GET IN TOUCH</div>
            <div className="email">trushankpmistry@gmail.com</div>
            <div className="phone">+971 58 509 9344</div>
          </div>
        </div>
      </div>
    </section>
  )
}
