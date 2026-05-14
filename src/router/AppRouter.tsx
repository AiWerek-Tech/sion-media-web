import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import DownloadPage from '../pages/DownloadPage'
import ChangelogPage from '../pages/ChangelogPage'
import StatisticsPage from '../pages/StatisticsPage'
import DocsPage from '../pages/DocsPage'
import AboutPage from '../pages/AboutPage'
import NotFoundPage from '../pages/NotFoundPage'

function AppRouter() {
  return (
    <HashRouter>
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
    </HashRouter>
  )
}

export default AppRouter
