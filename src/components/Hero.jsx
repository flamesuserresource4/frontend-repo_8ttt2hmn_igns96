import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient and texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage:
          'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0, transparent 50%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.06) 0, transparent 40%), radial-gradient(circle at 50% 100%, rgba(255,255,255,0.05) 0, transparent 45%)'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-28 md:pb-28">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-slate-900 font-extrabold">CB</div>
            <span className="text-white/90 font-semibold tracking-wide">ConstructaBuild</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-lg bg-amber-500 text-slate-900 font-semibold hover:brightness-110 transition shadow">Get a Quote</a>
          </div>
        </div>

        {/* Hero content */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 mt-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-sm text-white/90">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
              Licensed • Insured • 15+ Years Experience
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              We Build Spaces That Stand The Test Of Time
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              From residential renovations to large-scale commercial builds, our team delivers craftsmanship, safety, and on‑time results.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-6 py-3 rounded-xl bg-amber-500 text-slate-900 font-semibold hover:brightness-110 transition shadow-md">
                Request a Free Estimate
              </a>
              <a href="#projects" className="px-6 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/15 border border-white/10 transition">
                View Recent Projects
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-white/80">
              <div>
                <div className="text-3xl md:text-4xl font-extrabold text-white">450+</div>
                <div className="text-sm">Projects completed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-extrabold text-white">15</div>
                <div className="text-sm">Years in business</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-extrabold text-white">98%</div>
                <div className="text-sm">On‑time delivery</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1482537729095-51c30f0b3ae8?q=80&w=1600&auto=format&fit=crop"
                alt="Construction site"
                className="w-full h-[320px] md:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-slate-900/70 backdrop-blur border border-white/10 text-white rounded-xl px-5 py-4 shadow-lg">
              <div className="text-sm">Current project</div>
              <div className="font-bold">12-Story Office Build • Phase 2</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
