import type { ChangelogEntry } from '../types'

/**
 * SION Media Changelog Data
 * Ordered: Newest to Oldest (Descending)
 * Synchronized with SION Media desktop release history.
 */
export const changelogEntries: ChangelogEntry[] = [
  {
    version: '1.0.0-beta.2',
    date: '2026-07-02',
    type: 'Closed Beta System Release',
    notes: [
      'Sistem Bible Content Pack: Arsitektur baru berbasis database SQLite eksternal untuk pengelolaan terjemahan Alkitab secara modular.',
      'Bible Reader & Study: Panel navigasi Alkitab interaktif, chapter rail, verse cards, catatan ayat, dan highlight warna.',
      'Mixed Rundown: Playlist yang mendukung item campuran antara lirik lagu dan ayat Alkitab dalam satu rundown.',
      'Database Default & Bundling: Bundling database default dengan 525 lagu dan hymnal, serta menyertakan Alkitab Terjemahan Baru (TB) secara bawaan.',
      'Auto-Registrasi Database: Sistem pembaruan path Alkitab dinamis saat startup agar kompatibel di semua perangkat pengguna secara langsung.',
      'Windows Code Signing: Integrasi infrastruktur penandatanganan kode digital lokal dan halaman panduan bypass Windows SmartScreen di dalam wizard installer.',
      'Redesain Visual: Tampilan Splash Screen, Welcome Screen, dan Projection Panel yang diperbarui agar terasa lebih premium.'
    ],
  },
  {
    version: '1.0.0-beta.1',
    date: '2026-05-23',
    type: 'Closed Beta Release Candidate',
    notes: [
      'Projection ErrorBoundary: Safe black-screen fallback on render errors with auto-retry to prevent audience disruption.',
      'Panic Recovery Hotkey: Ctrl+Alt+R hotkey to reload the projection React tree and re-sync slide/state in case of desync.',
      'URL Protocol Validation: Hardened IPC handlers to restrict external links to safe protocols (https, http, mailto).',
      'Session Crash Diagnostics: Help -> Export Debug Info action to compile an exportable JSON diagnostic report containing version and memory metrics.',
      'Identity Consolidation: Consolidated app author as "AiWerek Tech" and app ID as com.aiwerek.sion-media.',
      'Broadcast Mode Hidden: Masked the unfinished Broadcast Mode UI to maintain focus on the stable Projection Mode.',
      'Zustand State Cleanup: Refactored prevStateBeforeBlack property cleanly into the projection store.',
      'UI Error Boundary Coverage: Wrapped SongEditor, Settings, Bible, and ImportExport screens in robust error boundaries.'
    ],
  },
  {
    version: 'Pre-beta',
    date: '2026-05-14',
    type: 'Update & Metrics Integration',
    notes: [
      'Update Check Integration: Embedded update check and notification panel in the About Settings screen connected to latest-version.json.',
      'External Link Protection: Standardized safe external browser link handlers.',
      'Firestore Metrics Tracking: Configured Firestore connections to aggregate public usage statistics securely.'
    ],
  },
  {
    version: 'Pre-release',
    date: '2025-11-20',
    type: 'UI/UX Visual System',
    notes: [
      'Console Interface Design: Premium UI/UX visual layout for Management, Song Library, and Welcome screens.',
      'Atmosphere Media Library: Implemented dynamic background renders for lyrics projection.',
      'Design System Tokens: Standardized design system tokens for buttons, inputs, fields, and modals.'
    ],
  },
  {
    version: 'Initial Prototype',
    date: '2024-12-01',
    type: 'Architecture Prototype',
    notes: [
      'Prototype Launch: First prototype of SION Media projection and database synchronization.',
      'Local SQLite Database: Initial sqlite repository layout and lyrics parsing engine.'
    ],
  },
]
