import { useState, useMemo } from 'react'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import SectionTitle from '../components/common/SectionTitle'
import { docsSections } from '../data/docsSections'
import type { DocSection } from '../data/docsSections'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BookOpen, Search, AlertCircle, Info, X, Menu, 
  Monitor, Database, Radio, Laptop, Smartphone, HelpCircle
} from 'lucide-react'

function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSectionId, setActiveSectionId] = useState('pengenalan')
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const getSectionIcon = (id: string) => {
    switch (id) {
      case 'pengenalan': return BookOpen
      case 'desktop-library': return Database
      case 'desktop-projection': return Monitor
      case 'powerpoint-bridge': return Laptop
      case 'mobile-app': return Smartphone
      case 'obs-integration': return Radio
      case 'troubleshooting': return HelpCircle
      default: return BookOpen
    }
  }

  // Filter sections and items based on search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return docsSections

    return docsSections.map(section => {
      const matchingItems = section.items.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.detail.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.badge && item.badge.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      
      if (matchingItems.length > 0) {
        return {
          ...section,
          items: matchingItems
        }
      }
      return null
    }).filter((s): s is DocSection => s !== null)
  }, [searchQuery])



  const handleSectionClick = (id: string) => {
    setActiveSectionId(id)
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -90; // Navbar offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-white">
      <Navbar />

      {/* Hero Banner Section */}
      <div className="relative pt-24 pb-12 overflow-hidden border-b border-slate-900/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.08),transparent_50%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle eyebrow="Operator Hub" title="Dokumentasi & Panduan SION Media" align="center" />
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-400 leading-relaxed">
            Panduan lengkap, langkah-demi-langkah, konfigurasi menu, dan integrasi ekosistem multimedia ibadah.
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-8">
          
          {/* MOBILE NAVIGATION BAR */}
          <div className="lg:hidden mb-6 sticky top-20 z-20">
            <div className="flex items-center justify-between p-4 rounded-2xl glass-card">
              <span className="text-sm font-bold text-slate-300">
                Menu Dokumentasi
              </span>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 flex items-center gap-2 hover:bg-slate-800 active:scale-95 transition"
              >
                <Menu size={18} />
                <span className="text-xs font-semibold">Buka Daftar Isi</span>
              </button>
            </div>
            
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 right-0 mt-2 p-4 rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl space-y-2 max-h-[60vh] overflow-y-auto"
                >
                  <div className="relative mb-4">
                    <Search className="absolute top-3 left-3 text-slate-500" size={16} />
                    <input 
                      type="text" 
                      placeholder="Cari kata kunci..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                  {docsSections.map((section) => {
                    const Icon = getSectionIcon(section.id)
                    return (
                      <button
                        key={section.id}
                        onClick={() => handleSectionClick(section.id)}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl text-left text-xs font-semibold transition ${
                          activeSectionId === section.id 
                            ? 'bg-cyan-500/10 text-cyan-400 border-l-4 border-cyan-500 pl-2' 
                            : 'text-slate-400 hover:bg-slate-900/50 hover:text-white'
                        }`}
                      >
                        <Icon size={16} />
                        {section.title}
                      </button>
                    )
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* DESKTOP STICKY SIDEBAR */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-24 space-y-6">
              
              {/* Interactive Search Bar */}
              <div className="relative">
                <Search className="absolute top-3.5 left-4 text-slate-500" size={18} />
                <input 
                  type="text" 
                  placeholder="Cari modul atau menu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900/40 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all shadow-inner"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-3.5 text-slate-500 hover:text-white transition"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Sidebar Menu List */}
              <div className="rounded-3xl border border-slate-900/80 bg-slate-900/20 p-4 space-y-1.5 shadow-premium">
                <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Daftar Isi Panduan
                </p>
                {docsSections.map((section) => {
                  const Icon = getSectionIcon(section.id)
                  const isActive = activeSectionId === section.id
                  return (
                    <button
                      key={section.id}
                      onClick={() => handleSectionClick(section.id)}
                      className={`w-full flex items-center gap-3.5 px-3 py-3 rounded-xl text-left text-xs font-bold transition-all relative ${
                        isActive 
                          ? 'text-cyan-400' 
                          : 'text-slate-400 hover:bg-slate-900/40 hover:text-slate-200'
                      }`}
                    >
                      {isActive && (
                        <motion.div 
                          layoutId="activeIndicator"
                          className="absolute inset-0 bg-cyan-500/5 border border-cyan-500/20 rounded-xl"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <Icon size={16} className={`shrink-0 transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-600'}`} />
                      <span className="relative z-10 leading-snug">{section.title}</span>
                    </button>
                  )
                })}
              </div>

              {/* Version Info Badge */}
              <div className="p-4 rounded-3xl bg-slate-900/20 border border-slate-900/50 text-center">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Status Dokumentasi</span>
                <div className="mt-1 flex items-center justify-center gap-2 text-xs font-bold text-slate-300">
                  <span>Ecosystem v1.1.0-beta.2</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                </div>
              </div>

            </div>
          </aside>

          {/* MAIN DOCUMENTATION CONTENT */}
          <div className="flex-1 space-y-16">
            <AnimatePresence mode="popLayout">
              {filteredSections.length > 0 ? (
                filteredSections.map((section) => (
                  <motion.section
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="relative rounded-4xl border border-slate-900/50 bg-slate-900/10 p-6 md:p-10 shadow-premium"
                  >
                    
                    {/* Section Header */}
                    <div className="border-b border-slate-900/50 pb-6 mb-8 flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                        {(() => {
                          const Icon = getSectionIcon(section.id)
                          return <Icon size={24} />
                        })()}
                      </div>
                      <div>
                        <h2 className="text-xl md:text-2xl font-black text-white tracking-tight uppercase">
                          {section.title}
                        </h2>
                        <p className="mt-1 text-xs md:text-sm text-slate-400 leading-relaxed max-w-2xl">
                          {section.description}
                        </p>
                      </div>
                    </div>

                    {/* Section Items */}
                    <div className="space-y-12">
                      {section.items.map((item, iIndex) => (
                        <div key={item.id} className="relative group/item scroll-mt-24" id={item.id}>
                          
                          {/* Item Title & Badge */}
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-black text-cyan-400 shadow-sm">
                              {iIndex + 1}
                            </span>
                            <h3 className="text-base font-bold text-white group-hover/item:text-cyan-400 transition-colors">
                              {item.title}
                            </h3>
                            {item.badge && (
                              <span className="px-2 py-0.5 rounded-md text-[9px] font-extrabold tracking-wider uppercase border border-slate-800 bg-slate-900/50 text-slate-400">
                                {item.badge}
                              </span>
                            )}
                          </div>

                          {/* Item Detail Paragraphs */}
                          <div className="text-slate-400 text-sm leading-relaxed space-y-3 font-normal">
                            {item.detail.split('\n').map((para, pIdx) => {
                              // Render numbered lists beautifully
                              if (para.startsWith('1. ') || para.startsWith('2. ') || para.startsWith('3. ') || para.startsWith('4. ')) {
                                return (
                                  <div key={pIdx} className="flex gap-2 pl-2">
                                    <span className="text-cyan-400 font-bold">{para.substring(0, 3)}</span>
                                    <span>{para.substring(3)}</span>
                                  </div>
                                )
                              }
                              // Render bulleted lists
                              if (para.startsWith('- ')) {
                                return (
                                  <div key={pIdx} className="flex gap-2 pl-4 items-start">
                                    <span className="text-cyan-400 text-base leading-none select-none">•</span>
                                    <span>{para.substring(2)}</span>
                                  </div>
                                )
                              }
                              return <p key={pIdx}>{para}</p>
                            })}
                          </div>

                          {/* Callouts (Tips/Warnings) */}
                          {item.tips && (
                            <div className="mt-4 p-4 rounded-2xl border-l-4 border-cyan-500/40 bg-cyan-500/5 flex items-start gap-3.5">
                              <Info className="text-cyan-400 shrink-0 mt-0.5" size={16} />
                              <div className="text-xs leading-relaxed text-slate-300">
                                <span className="font-bold text-cyan-400 uppercase text-[9px] tracking-widest block mb-1">💡 Tip Praktis</span>
                                {item.tips}
                              </div>
                            </div>
                          )}

                          {item.warnings && (
                            <div className="mt-4 p-4 rounded-2xl border-l-4 border-amber-500/40 bg-amber-500/5 flex items-start gap-3.5">
                              <AlertCircle className="text-amber-400 shrink-0 mt-0.5" size={16} />
                              <div className="text-xs leading-relaxed text-slate-300">
                                <span className="font-bold text-amber-400 uppercase text-[9px] tracking-widest block mb-1">⚠️ Perhatian Penting</span>
                                {item.warnings}
                              </div>
                            </div>
                          )}

                          {/* Screenshot Container */}
                          {item.screenshot && (
                            <div className="mt-6">
                              <p className="text-[10px] uppercase font-bold text-slate-500 mb-2 flex items-center gap-1.5">
                                <span>Preview Tampilan Menu:</span>
                              </p>
                              <div 
                                onClick={() => setLightboxImage(item.screenshot || null)}
                                className="relative rounded-2xl overflow-hidden border border-slate-900 bg-slate-950/50 cursor-zoom-in group/img shadow-md max-w-xl hover:border-slate-800 transition-all"
                              >
                                <img 
                                  src={item.screenshot} 
                                  alt={item.title} 
                                  className="w-full object-cover max-h-56 group-hover/img:scale-[1.02] transition-transform duration-500 opacity-80 group-hover/img:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-4">
                                  <span className="text-[10px] font-bold text-white px-2 py-1 rounded bg-slate-950/80 border border-slate-800/80 backdrop-blur">
                                    Klik untuk Memperbesar Gambar
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}

                        </div>
                      ))}
                    </div>

                  </motion.section>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-4xl border border-slate-900 bg-slate-900/20 p-16 text-center shadow-premium"
                >
                  <AlertCircle className="mx-auto text-slate-600 mb-4" size={48} />
                  <h3 className="text-lg font-bold text-white">Topik Tidak Ditemukan</h3>
                  <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">
                    Kami tidak dapat menemukan hasil untuk kata kunci &ldquo;{searchQuery}&rdquo;. Silakan periksa ejaan atau gunakan tombol di bawah untuk menyetel ulang pencarian.
                  </p>
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="mt-6 rounded-2xl brand-gradient px-6 py-3 text-xs font-bold text-slate-950 hover:scale-105 active:scale-95 transition"
                  >
                    Reset Pencarian
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Support Section */}
        <section className="mt-32 rounded-4xl border border-slate-900/60 bg-slate-900/10 p-12 text-center relative overflow-hidden shadow-premium">
          <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/5 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <h3 className="text-2xl font-black text-white relative z-10 uppercase tracking-tight">Butuh bantuan lebih lanjut?</h3>
          <p className="mt-3 text-slate-400 text-sm relative z-10 max-w-xl mx-auto leading-relaxed">
            Tim SION Media siap membantu instalasi dan integrasi jaringan multimedia di gereja Anda.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 relative z-10">
            <a 
              href="https://github.com/AiWerek-Tech/SION-Media/issues" 
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 px-8 py-4 text-xs font-bold text-white transition hover:bg-slate-800 active:scale-95"
            >
              Laporkan Bug / Tiket Masalah
            </a>
            <a 
              href="mailto:support@sionmedia.app" 
              className="flex items-center gap-2 rounded-2xl brand-gradient px-8 py-4 text-xs font-bold text-slate-950 transition hover:scale-105 active:scale-95"
            >
              Hubungi Layanan Support
            </a>
          </div>
        </section>
      </main>

      <Footer />

      {/* PICTURE LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl max-h-[85vh] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={lightboxImage} 
                alt="Enlarged screenshot view" 
                className="w-full h-auto object-contain max-h-[80vh]"
              />
              <button 
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white transition active:scale-95"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DocsPage
