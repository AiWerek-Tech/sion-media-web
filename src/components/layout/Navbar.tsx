import { Link } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Download', path: '/download' },
  { label: 'Changelog', path: '/changelog' },
  { label: 'Statistics', path: '/statistics' },
  { label: 'Docs', path: '/docs' },
  { label: 'About', path: '/about' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-white">
          <img src="/logo.svg" alt="SION Media Logo" className="h-8 w-8" />
          SION Media
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
