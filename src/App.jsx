import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <Services />
      <Projects />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
