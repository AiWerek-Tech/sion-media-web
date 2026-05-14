import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchLatestVersion } from '../../services/updateService'
import type { LatestVersionData } from '../../types'
import { brandingUtils } from '../../utils/brandingUtils'
import { AuthButton } from '../ui/AuthButton'

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

  useEffect(() => {
    fetchLatestVersion()
      .then((data) => setLatestVersion(data))
      .catch(() => undefined)
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center">
          <img src="/logo-horizontal.svg" alt="SION Media Logo" className="h-8" />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
          <AuthButton variant="link" />
          <a
            href="https://github.com/AiWerek-Tech/SION-Media/releases/latest"
            target="_blank"
            rel="noreferrer"
            className={brandingUtils.getPrimaryButtonClasses('outline')}
          >
            GitHub Releases
          </a>
          <a
            href="https://github.com/AiWerek-Tech/SION-Media/releases/latest"
            target="_blank"
            rel="noreferrer"
            className={
              `inline-flex items-center rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.35em] transition ` +
              (latestVersion?.mandatory
                ? 'border border-rose-500/30 bg-rose-500/10 text-rose-200 hover:border-rose-400 hover:bg-rose-500/20 hover:text-white'
                : 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-200 hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-white')
            }
          >
            {latestVersion
              ? latestVersion.mandatory
                ? `v${latestVersion.version} required`
                : `v${latestVersion.version} latest`
              : 'Latest release'}
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
