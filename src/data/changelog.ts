import type { ChangelogEntry } from '../types'

/**
 * SION Media Changelog Data
 * Ordered: Newest to Oldest (Descending)
 * Synchronized with SION Media desktop release history.
 */
export const changelogEntries: ChangelogEntry[] = [
  {
    version: '1.1.0-beta.1',
    date: '2026-07-13',
    type: 'Beta Testing · Connected Production Release',
    notes: [
      'SION Link Desktop: auto-discovery LAN/Wi-Fi, smart paste link, reconnect, riwayat perangkat, dan akses role Pemateri, Operator, Live Viewer, serta Stage.',
      'OBS Network Output berbasis SRT: Program Output 1080p dan audio dapat diterima OBS Studio di PC lain tanpa plugin khusus.',
      'PowerPoint Package Import: judul dan Speaker Notes dipertahankan dengan provider PowerPoint, WPS Presentation, serta LibreOffice.',
      'PowerPoint Presentation Bridge: slide aktif dan notes dari PC pemateri dapat dikirim ke Live SION Media menggunakan kode Operator.',
      'Stage Display profesional: current/next cue, notes, chord, heartbeat, timer, status runtime, auto-fit, dan monitor terpisah.',
      'SION Link dan Pengaturan Sistem mendapat perombakan UI/UX responsif, onboarding pemula, koneksi otomatis, serta recovery yang lebih jelas.',
      'Keamanan diperketat melalui sender policy per-window, validasi payload, pembatasan origin, endpoint discovery terverifikasi, dan import transaksional.'
    ]
  },
  {
    version: '1.0.0-beta.2',
    date: '2026-07-03',
    type: 'Closed Beta System Release',
    notes: [
      'Stage Display Redesign: Tipografi Poppins ExtraBold untuk keterbacaan panggung jarak jauh, perbaikan alignment timer header, dan penghitungan counter slide akurat (SLIDE X / Y).',
      'Dynamic CSS Motion Atmospheres: 22 preset atmosfer visual GPU-accelerated (asap panggung volumetrik, garis laser, neon grid, bokeh/cosmic orbs) tanpa beban file video.',
      'Pengaturan Sistem Terintegrasi: Audit & penyempurnaan 9 sub-halaman Settings (Display, Hymnals, Bible Pack Manager, Appearance, Theme & Font, Background, Shortcuts, Backup & Restore, About).',
      'Management Mode Pratinjau: Tombol Pratinjau lagu terhubung langsung ke layar proyeksi, metrik summary dinamis, dan fallback metadata tabel.',
      'Quick Search Tag Adventis: Tag pencarian cepat lirik lagu Adventis (Pujian, Sabat, Kasih, Pengharapan, Doa, Persepuluhan, Roh Kudus, Syukur).',
      'Sistem Bible Content Pack: Arsitektur berbasis database SQLite eksternal untuk pengelolaan terjemahan Alkitab secara modular (termasuk TB LAI 1974 bawaan).',
      'Windows Release Build: Installer NSIS (.exe) versi v1.0.0-beta.2 untuk pengujian distribusi internal.'
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
