import React from 'react'

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-white/80">
          <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center text-slate-900 font-extrabold">CB</div>
          <div>
            <div className="font-semibold text-white">ConstructaBuild</div>
            <div className="text-xs text-white/60">Lic #C-892134 • Insured</div>
          </div>
        </div>
        <div className="text-white/60 text-sm">© {new Date().getFullYear()} ConstructaBuild. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
