import { Link } from 'react-router-dom'
import { Code, Heart, Monitor, Network, Smartphone, ExternalLink } from 'lucide-react'
import { FirebaseStatus } from '../ui/FirebaseStatus'
import LogoTransparent from '../../assets/logo-transparent.svg?react'

function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 pt-12 pb-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center">
                <LogoTransparent className="h-full w-full" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                SION<span className="text-cyan-400">Media</span>
              </span>
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              Ekosistem presentasi ibadah yang menghubungkan persiapan lagu, proyeksi live,
              Stage Display, kendali pemateri, output OBS, dan companion Android dalam satu workflow lokal.
            </p>
            <div className="mt-4">
              <a
                href="https://chat.whatsapp.com/KvbT1xpGIUPDlyaDW0M5BR"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition"
              >
                Gabung WA Group Tester <ExternalLink size={12} />
              </a>
            </div>
            <div className="mt-4 flex gap-2">
              {[
                { icon: Monitor, label: 'Windows x64' },
                { icon: Network, label: 'SION Link' },
                { icon: Smartphone, label: 'Android alpha' }
              ].map((plat) => (
                <div
                  key={plat.label}
                  title={plat.label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-500 transition hover:border-cyan-500/50 hover:text-cyan-400"
                >
                  <plat.icon size={14} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Produk</h4>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: 'Unduh Aplikasi', path: '/download' },
                { label: 'Catatan Rilis', path: '/changelog' },
                { label: 'Statistik Publik', path: '/statistics' },
                { label: 'Panduan Operator', path: '/docs' }
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-xs text-slate-500 transition hover:text-cyan-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Mode Inti</h4>
            <ul className="mt-4 space-y-2.5">
              {['Library Mode', 'Projection Mode', 'Stage Display', 'SION Link & OBS'].map(
                (mode) => (
                  <li key={mode}>
                    <Link
                      to="/docs"
                      className="text-xs text-slate-500 transition hover:text-cyan-400"
                    >
                      {mode}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Status Sistem</h4>
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <FirebaseStatus />
              <p className="mt-2 text-[9px] uppercase tracking-widest text-slate-600">
                Connected Software Ecosystem
              </p>
            </div>
            <div className="mt-4">
              <a
                href="https://github.com/AiWerek-Tech/SION-Media"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs text-slate-500 transition hover:text-white"
              >
                <Code size={14} />
                GitHub Repository
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-900 pt-6 lg:flex-row">
          <p className="text-xs text-slate-500">
            © 2026 AiWerek-Tech. Hak cipta dilindungi.
          </p>
          <p className="mt-3 flex items-center gap-1.5 text-xs text-slate-500 lg:mt-0">
            Dibuat dengan <Heart size={12} className="fill-rose-500 text-rose-500" /> untuk gereja.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
