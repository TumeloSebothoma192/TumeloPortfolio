import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import ThreeBackground from './components/ThreeBackground'
import Nav from './components/Nav'
import './App.css'

function Section({id, title, height=600}){
  return (
    <section id={id} style={{minHeight:height, padding:'80px 20px 80px', display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{maxWidth:900,textAlign:'center'}}>
        <h2 style={{fontSize:32,margin:0}}>{title}</h2>
        <p style={{color:'var(--muted)'}}>Placeholder content for {title} — replace with real content.</p>
      </div>
    </section>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThreeBackground />
      <Hero />
      <Section id="work" title="Work" height={700} />
      <Section id="projects" title="Projects" height={700} />
      <Section id="about" title="About" height={700} />
      <Section id="contact" title="Contact" height={500} />
      <Nav />
    </>
  )
}
export default App
