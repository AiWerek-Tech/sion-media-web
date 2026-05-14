import { Link } from 'react-router-dom'
import { Heart, Zap, Code, Monitor, Cpu, Layout } from 'lucide-react'
import { FirebaseStatus } from '../ui/FirebaseStatus'

function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg brand-gradient text-slate-950">
                <Zap size={18} fill="currentColor" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">SION<span className="text-cyan-400">Media</span></span>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-slate-500">
              Ekosistem presentasi ibadah profesional yang menghubungkan persiapan, proyeksi, produksi, dan manajemen dalam satu platform desktop yang stabil.
            </p>
            <div className="mt-8 flex gap-3">
              {[
                { icon: Monitor, label: 'Windows' },
                { icon: Cpu, label: 'macOS' },
                { icon: Layout, label: 'Linux' },
              ].map((plat, i) => (
                <div 
                  key={i}
                  title={plat.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-500 transition hover:border-cyan-500/50 hover:text-cyan-400"
                >
                  <plat.icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Product</h4>
            <ul className="mt-6 space-y-4">
              {[
                { label: 'Download Aurora', path: '/download' },
                { label: 'Release Notes', path: '/changelog' },
                { label: 'Public Statistics', path: '/statistics' },
                { label: 'Operator Guide', path: '/docs' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-slate-500 transition hover:text-cyan-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Modes */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">4 Core Modes</h4>
            <ul className="mt-6 space-y-4">
              {[
                'Library Mode',
                'Projection Mode',
                'Broadcast Mode',
                'Management Mode',
              ].map((mode) => (
                <li key={mode}>
                  <Link to="/docs" className="text-sm text-slate-500 transition hover:text-cyan-400">
                    {mode}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Status & Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">System Status</h4>
            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <FirebaseStatus />
              <p className="mt-4 text-[10px] uppercase tracking-widest text-slate-600">
                Connected Software Ecosystem
              </p>
            </div>
            <div className="mt-6">
              <a 
                href="https://github.com/AiWerek-Tech/SION-Media"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition"
              >
                <Code size={16} />
                GitHub Repository
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between border-t border-slate-900 pt-10 lg:flex-row">
          <p className="text-sm text-slate-500">
            © 2026 AiWerek-Tech. Hak cipta dilindungi.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-slate-500 lg:mt-0">
            Built with <Heart size={14} className="text-rose-500 fill-rose-500" /> for the Church.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
