import React from 'react'

const services = [
  {
    title: 'Commercial Construction',
    desc: 'Office buildings, retail spaces, and industrial facilities built to code and delivered on schedule.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M3 3h18v2H3V3zm2 4h14v14H5V7zm2 2v10h10V9H7z"/></svg>
    ),
  },
  {
    title: 'Residential Renovation',
    desc: 'Kitchen, bath, and full-home remodels that improve comfort, value, and style.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M12 3l9 8h-3v9H6v-9H3l9-8z"/></svg>
    ),
  },
  {
    title: 'Project Management',
    desc: 'From permitting to punch list, we coordinate timelines, trades, and inspections.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M5 3h14v2H5V3zm0 4h14v2H5V7zm0 4h10v2H5v-2zm0 4h10v2H5v-2z"/></svg>
    ),
  },
  {
    title: 'Concrete & Framing',
    desc: 'Foundations, slabs, structural framing, and steelwork executed with precision.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M4 4h16v4H4V4zm0 6h10v10H4V10zm12 2h4v8h-4v-8z"/></svg>
    ),
  },
]

function Services() {
  return (
    <section id="services" className="relative bg-slate-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">What We Do</h2>
            <p className="mt-2 text-white/70 max-w-2xl">A full‑service contractor for commercial and residential projects across the region.</p>
          </div>
          <a href="#projects" className="hidden md:inline-flex text-amber-400 hover:text-amber-300">See our work →</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">{s.icon}</div>
              <h3 className="mt-4 text-white font-bold text-lg">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
