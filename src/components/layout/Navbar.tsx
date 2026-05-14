import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code, ExternalLink, Zap } from 'lucide-react'
import { fetchLatestVersion } from '../../services/updateService'
import type { LatestVersionData } from '../../types'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Download', path: '/download' },
  { label: 'Changelog', path: '/changelog' },
  { label: 'Statistics', path: '/statistics' },
  { label: 'Docs', path: '/docs' },
  { label: 'About', path: '/about' },
]

function Navbar() {
  const [latestVersion, setLatestVersion] = useState<LatestVersionData | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    fetchLatestVersion()
      .then((data) => setLatestVersion(data))
      .catch(() => undefined)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg brand-gradient text-slate-950 transition group-hover:scale-110">
            <Zap size={18} fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">SION<span className="text-cyan-400">Media</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                location.pathname === item.path 
                  ? 'bg-slate-800 text-white' 
                  : 'text-slate-400 hover:bg-slate-900 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          <div className="mx-2 h-4 w-px bg-slate-800" />

          <a
            href="https://github.com/AiWerek-Tech/SION-Media"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-slate-700 hover:text-white"
          >
            <Code size={16} />
            Repo
          </a>

          <a
            href="https://github.com/AiWerek-Tech/SION-Media/releases/latest"
            target="_blank"
            rel="noreferrer"
            className={`ml-2 flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-widest transition ${
              latestVersion?.mandatory
                ? 'border-rose-500/30 bg-rose-500/10 text-rose-300 hover:border-rose-400 hover:bg-rose-500/20'
                : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:border-emerald-400 hover:bg-emerald-500/20'
            }`}
          >
            {latestVersion ? `v${latestVersion.version}` : 'Get Latest'}
            <ExternalLink size={14} />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-slate-800 bg-slate-950 md:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={`flex items-center rounded-xl p-3 text-sm font-medium ${
                    location.pathname === item.path 
                      ? 'bg-slate-900 text-cyan-400' 
                      : 'text-slate-400 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 flex gap-2">
                <a
                  href="https://github.com/AiWerek-Tech/SION-Media"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm font-bold text-white"
                >
                  <Code size={18} />
                  GitHub
                </a>
                <a
                  href="https://github.com/AiWerek-Tech/SION-Media/releases/latest"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl brand-gradient p-3 text-sm font-bold text-slate-950"
                >
                  Download
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
