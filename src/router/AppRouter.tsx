import { lazy, Suspense } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'

const HomePage = lazy(() => import('../pages/HomePage'))
const DownloadPage = lazy(() => import('../pages/DownloadPage'))
const ChangelogPage = lazy(() => import('../pages/ChangelogPage'))
const StatisticsPage = lazy(() => import('../pages/StatisticsPage'))
const DocsPage = lazy(() => import('../pages/DocsPage'))
const AboutPage = lazy(() => import('../pages/AboutPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))

function PageFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-sm text-slate-400">
      Memuat SION Media…
    </div>
  )
}

function AppRouter() {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default AppRouter
