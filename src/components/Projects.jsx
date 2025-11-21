import React from 'react'

const projects = [
  {
    title: 'Riverside Office Tower',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop',
    meta: '12 floors • 18 months • $32M',
  },
  {
    title: 'The Artisan Residences',
    img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
    meta: '48 units • 10 months • $11M',
  },
  {
    title: 'Harbor Retail Park',
    img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
    meta: '65,000 sq ft • 8 months • $7.5M',
  },
]

function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(251,191,36,0.06),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Recent Projects</h2>
            <p className="mt-2 text-white/70">A snapshot of the work we deliver with precision and pride.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex text-amber-400 hover:text-amber-300">Start your project →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-5">
                <div className="text-amber-400 text-sm">{p.meta}</div>
                <h3 className="mt-1 text-white font-bold">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
