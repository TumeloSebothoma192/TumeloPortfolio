import React, {useEffect, useState} from 'react'
import './Nav.css'

export default function Nav(){
  const [active, setActive] = useState('home')

  useEffect(()=>{
    const ids = ['home','work','projects','about','contact']
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean)
    if(sections.length === 0) return

    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          setActive(entry.target.id)
        }
      })
    },{root:null,rootMargin:'-30% 0px -50% 0px',threshold:0})

    sections.forEach(s => obs.observe(s))
    return ()=>{ obs.disconnect() }
  }, [])

  function itemClass(id){ return `nav-item${active===id ? ' active' : ''}` }

  return (
    <nav className="portfolio-nav" aria-label="Primary navigation">
      <ul className="nav-list">
        <li><a href="#home" className={itemClass('home')} aria-label="Home">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10.5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a></li>
        <li><a href="#work" className={itemClass('work')} aria-label="Work">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.2"/><path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a></li>
        <li><a href="#projects" className={itemClass('projects')} aria-label="Projects">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a></li>
        <li><a href="#about" className={itemClass('about')} aria-label="About">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.2"/><path d="M6 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a></li>
      </ul>

      <div className="nav-cta-wrap">
        <a className={active==='contact' ? 'nav-cta active' : 'nav-cta'} href="#contact">Contact</a>
      </div>
    </nav>
  )
}
