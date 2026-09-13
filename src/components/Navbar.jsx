import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      {/* Desktop */}
      <div className="hidden h-14 items-center justify-between px-4 lg:mx-auto lg:max-w-6xl lg:px-8 md:flex">
        <a href="/" className="flex items-center gap-2 text-lg font-bold">
          <img src="/favicon.svg" alt="Dev Stack logo" className="h-6 w-6" />
          <span className="flex items-baseline gap-1">
            <span className="text-black">Dev</span>
            <span className="text-gradient">Stack</span>
          </span>
        </a>
        <nav className="flex items-center gap-6">
          {links.map((l, i) => (
            <a
              key={l}
              href="#"
              className={
                i === 0
                  ? 'text-sm font-bold text-gradient'
                  : 'text-sm text-slate-600 hover-gradient'
              }
            >
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="hover-gradient text-sm text-slate-700">Sign In</button>
          <button className="rounded-full bg-gradient-brand px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:brightness-110 hover:shadow-lg hover:shadow-indigo-200">Sign Up</button>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex h-14 items-center justify-between px-4 md:hidden">
        <button onClick={() => setOpen(!open)} className="hover-bg-gradient rounded-lg p-1 transition" aria-label="Toggle menu">
          {open ? (
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-6 w-6 text-slate-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-6 w-6 text-slate-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        <a href="/" className="flex items-center gap-1.5 text-lg font-bold">
          <img src="/favicon.svg" alt="Dev Stack logo" className="h-5 w-5" />
          <span className="flex items-baseline gap-1">
            <span className="text-black">Dev</span>
            <span className="text-gradient">Stack</span>
          </span>
        </a>
        <div className="flex items-center gap-2">
          <button className="hover-gradient text-xs text-slate-700">Sign In</button>
          <button className="rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-white hover:brightness-110 hover:shadow-lg hover:shadow-indigo-200">Sign Up</button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-slate-200 bg-white px-4 py-4 space-y-3 md:hidden">
          {links.map((l, i) => (
            <a
              key={l}
              href="#"
              className={
                i === 0
                  ? 'block text-sm font-bold text-gradient'
                  : 'block text-sm text-slate-600 hover-gradient'
              }
            >
              {l}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Navbar