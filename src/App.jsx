import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import ThreeBackground from './components/ThreeBackground'
import Nav from './components/Nav'
import WhatIDo from './components/WhatIDo'
import Experience from './components/Experience'
import TrustedBrands from './components/TrustedBrands'
import CaseStudies from './components/CaseStudies'
import CommunityImpact from './components/CommunityImpact'
import Testimonials from './components/Testimonials'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThreeBackground />
      <Hero />
      <WhatIDo />
      <TrustedBrands />
      <Experience />
      <CaseStudies />
      <CommunityImpact />
      <Testimonials />
      <ContactSection />
      <Footer />
      <Nav />
    </>
  )
}
export default App
