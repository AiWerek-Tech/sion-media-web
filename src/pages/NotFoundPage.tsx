import { Link } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">404</p>
        <h1 className="mt-4 text-5xl font-semibold text-white">Page not found</h1>
        <p className="mt-4 max-w-xl text-slate-400">The page you're looking for does not exist. Use the navigation above to continue.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  )
}

export default NotFoundPage
