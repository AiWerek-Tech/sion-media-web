import { FirebaseStatus } from '../ui/FirebaseStatus'

function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">SION Media</p>
          <p className="mt-2 text-sm text-slate-400">Pengalaman landing page modern untuk perangkat lunak gereja dan pembaruan desktop.</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
          <FirebaseStatus />
          <p className="text-sm text-slate-500">© 2026 AiWerek-Tech. Hosted on GitHub Pages.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
