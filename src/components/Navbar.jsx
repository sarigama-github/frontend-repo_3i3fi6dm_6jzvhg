import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Sun, Moon, Phone } from 'lucide-react'

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = React.useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-full text-sm transition-colors duration-300 ${
          isActive
            ? 'text-sky-700 bg-white/80 shadow-sm'
            : 'text-slate-700 hover:text-sky-700'
        }`}
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/60 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-300 to-sky-500 shadow-inner shadow-white/60 border border-white/50" />
            <div className="leading-tight">
              <div className="text-slate-900 font-semibold">CitySmile</div>
              <div className="text-[11px] tracking-wide text-slate-500">Dental Studio</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItem('/', 'Home')}
            {navItem('/about', 'About')}
            {navItem('/services', 'Services')}
            {navItem('/technology', 'Technology')}
            {navItem('/gallery', 'Gallery')}
            {navItem('/book', 'Book Appointment')}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a href="tel:+1234567890" className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-900 text-white text-sm hover:bg-slate-800 transition-colors">
              <Phone size={16} /> Call Now
            </a>
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 rounded-full bg-white/70 border border-white/60 hover:bg-white transition-colors"
            >
              {theme === 'light' ? <Moon size={18} className="text-slate-800"/> : <Sun size={18} className="text-yellow-300"/>}
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(v => !v)}>
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            {navItem('/', 'Home')}
            {navItem('/about', 'About')}
            {navItem('/services', 'Services')}
            {navItem('/technology', 'Technology')}
            {navItem('/gallery', 'Gallery')}
            {navItem('/book', 'Book Appointment')}
            <a href="tel:+1234567890" className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-900 text-white text-sm">
              <Phone size={16} /> Call Now
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
