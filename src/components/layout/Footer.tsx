import { Link } from 'react-router-dom'
import { Globe, Heart, Zap, Code } from 'lucide-react'
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
              Solusi proyeksi lagu modern yang dirancang untuk mendukung kelancaran ibadah, 
              live production, dan manajemen konten gereja secara profesional.
            </p>
            <div className="mt-8 flex gap-4">
              {[
                { icon: Code, href: 'https://github.com/AiWerek-Tech' },
                { icon: Globe, href: '#' },
                { icon: Globe, href: '#' },
                { icon: Globe, href: '#' },
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition hover:border-slate-600 hover:text-white"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Project</h4>
            <ul className="mt-6 space-y-4">
              {[
                { label: 'Download', path: '/download' },
                { label: 'Changelog', path: '/changelog' },
                { label: 'Statistics', path: '/statistics' },
                { label: 'Documentation', path: '/docs' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-slate-500 transition hover:text-cyan-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Resources</h4>
            <ul className="mt-6 space-y-4">
              {[
                { label: 'GitHub Repository', href: 'https://github.com/AiWerek-Tech/SION-Media' },
                { label: 'Desktop Integration', path: '/docs' },
                { label: 'Firebase Setup', path: '/docs' },
                { label: 'Privacy Policy', path: '/about' },
              ].map((item) => (
                <li key={item.label}>
                  {item.path ? (
                    <Link to={item.path} className="text-sm text-slate-500 transition hover:text-cyan-400">
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.href} target="_blank" rel="noreferrer" className="text-sm text-slate-500 transition hover:text-cyan-400">
                      {item.label}
                    </a>
                  )}
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
                Hosted on GitHub Pages
              </p>
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
