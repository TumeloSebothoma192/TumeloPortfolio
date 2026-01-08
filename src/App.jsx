import React, { useState, lazy, Suspense } from "react";
import "./App.css";
import Hero from "./components/Hero";
const ThreeBackground = lazy(() => import("./components/ThreeBackground"));
import Nav from "./components/Nav";
import WhatIDo from "./components/WhatIDo";
import Experience from "./components/Experience";
import TrustedBrands from "./components/TrustedBrands";
const CaseStudies = lazy(() => import("./components/ProjectsCarousel"));
import CommunityImpact from "./components/CommunityImpact";
const Testimonials = lazy(() => import("./components/Testimonials"));
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>
      <Hero />
      <WhatIDo />
      <Experience />
      <Suspense fallback={null}>
        <CaseStudies />
      </Suspense>
      <CommunityImpact />
      <Suspense fallback={null}>
        <Testimonials />
      </Suspense>
      <ContactSection />
      <Footer />
      <Nav />
    </>
  );
}
export default App;
