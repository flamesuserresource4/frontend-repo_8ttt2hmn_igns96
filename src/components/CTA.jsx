import React from 'react'

function CTA() {
  return (
    <section id="contact" className="relative py-16 md:py-24 bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Ready to build your next project?</h2>
        <p className="mt-3 text-white/80">Tell us about your goals, timeline, and budget. Well provide a detailed, no‑obligation estimate.</p>

        <form className="mt-8 grid md:grid-cols-3 gap-4 text-left">
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Your name" />
          <input type="email" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Email address" />
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Phone number" />
          <textarea className="md:col-span-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Tell us about your project" rows={4} />
          <button type="button" className="md:col-span-3 inline-flex justify-center items-center px-6 py-3 rounded-xl bg-amber-500 text-slate-900 font-semibold hover:brightness-110 transition shadow">
            Request Your Free Quote
          </button>
        </form>

        <p className="mt-6 text-white/60 text-sm">By submitting, you agree to be contacted about your request. We respect your privacy.</p>
      </div>
    </section>
  )
}

export default CTA
