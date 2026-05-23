import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Download, PlayCircle } from 'lucide-react'

const WindowsLogo = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 3.449L9.75 2.1v9.45H0V3.449zM0 12.45h9.75v9.45L0 20.551V12.45zm10.8-10.5L24 0v11.4h-13.2V1.95zm0 10.5H24v11.4l-13.2-1.95V12.45z" />
  </svg>
)

const AppleLogo = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.51 12.06 1.005 1.45 2.202 3.07 3.773 3.01 1.524-.065 2.1-.986 3.937-.986 1.838 0 2.366.987 3.937.95 1.612-.027 2.66-1.464 3.64-2.893 1.144-1.674 1.614-3.295 1.64-3.385-.034-.015-3.153-1.21-3.186-4.786-.027-2.99 2.45-4.426 2.564-4.493-1.4-2.05-3.56-2.285-4.325-2.34-2.03-.166-3.414 1.093-4.37 1.093zm2.533-4.57c.813-1.007 1.36-2.326 1.21-3.65-1.127.046-2.492.753-3.3 1.71-.692.808-1.298 2.148-1.128 3.442 1.258.1 2.532-.61 3.218-1.502z" />
  </svg>
)

const LinuxLogo = () => (
  <svg viewBox="0 0 448 512" className="h-3.5 w-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z" />
  </svg>
)

function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative overflow-hidden border-b border-slate-900 bg-slate-950 px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <motion.div
            variants={itemVariants}
            className="inline-flex flex-wrap items-center gap-2.5 rounded-full border border-slate-800 bg-slate-900/50 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-cyan-400"
          >
            <div className="flex items-center gap-1.5 border-r border-cyan-500/20 pr-2.5">
              <WindowsLogo />
              Windows
            </div>
            <div className="flex items-center gap-1.5 border-r border-cyan-500/20 pr-2.5">
              <AppleLogo />
              macOS
            </div>
            <div className="flex items-center gap-1.5">
              <LinuxLogo />
              Linux
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-5 max-w-2xl text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            SION Media
            <span className="mt-2 block text-cyan-300">
              presentasi ibadah yang siap dipakai live
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400"
          >
            Kelola lagu, susun playlist, siapkan Preview, lalu kirim ke layar jemaat melalui alur
            Cue, Take, dan Program. Fokus utamanya adalah operator gereja yang butuh kontrol jelas,
            cepat, dan stabil saat ibadah berlangsung.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-3.5">
            <Link
              to="/download"
              className="group inline-flex items-center justify-center gap-2 rounded-xl brand-gradient px-5 py-3 text-xs font-bold text-slate-950 transition hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download size={15} />
              Unduh aplikasi desktop
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/docs"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-5 py-3 text-xs font-bold text-white transition hover:border-slate-500 hover:bg-slate-800"
            >
              <PlayCircle size={15} />
              Lihat alur kerja
            </Link>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="relative mt-8 lg:mt-0">
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-premium max-h-[260px] sm:max-h-[320px] lg:max-h-[350px] flex items-center justify-center">
            <img
              src={`${import.meta.env.BASE_URL}screenshots/projection-mode.png`}
              alt="Tampilan Projection Mode SION Media"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2.5 text-[10px] font-bold text-slate-400">
            <span className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1.5 text-center text-emerald-300">
              Preview siap
            </span>
            <span className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1.5 text-center text-cyan-300">
              Take terkontrol
            </span>
            <span className="rounded-lg border border-rose-500/20 bg-rose-500/10 px-2.5 py-1.5 text-center text-rose-300">
              Status jelas
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HeroSection
