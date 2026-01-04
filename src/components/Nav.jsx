import React, {useEffect, useState} from 'react'
import './Nav.css'

export default function Nav(){
  const [active, setActive] = useState('home')

  useEffect(()=>{
    const ids = ['home','work','trusted','experience','case-studies','community','testimonials','contact']
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
        <li>
          <a href="#home" className={itemClass('home')} aria-label="Home">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8.5z" fill="currentColor" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#work" className={itemClass('work')} aria-label="What I Do">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M3 7a2 2 0 0 1 2-2h3V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" fill="currentColor" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#trusted" className={itemClass('trusted')} aria-label="Trusted">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 2l2.9 6.2L21 9l-5 3.6L17.8 21 12 17.8 6.2 21 8 12.6 3 9l6.1-0.8L12 2z" fill="currentColor" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#experience" className={itemClass('experience')} aria-label="Experience">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 1a11 11 0 1 0 .001 22.001A11 11 0 0 0 12 1zm1 11.5h4v1.5h-6V6h1.5v6.5z" fill="currentColor" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#case-studies" className={itemClass('case-studies')} aria-label="Case Studies">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M3 5h18v14H3V5zm2 2v10h14V7H5zM7 9h2v6H7V9z" fill="currentColor" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#community" className={itemClass('community')} aria-label="Community">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm-9 9c0-3 6-4.5 9-4.5s9 1.5 9 4.5v1H3v-1z" fill="currentColor" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#testimonials" className={itemClass('testimonials')} aria-label="Testimonials">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M21 6h-6l-2-4H5a2 2 0 0 0-2 2v14l4-4h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" fill="currentColor" />
            </svg>
          </a>
        </li>
      </ul>

      <div className="nav-cta-wrap">
        <a className={active==='contact' ? 'nav-cta active' : 'nav-cta'} href="#contact">Contact</a>
      </div>
    </nav>
  )
}
