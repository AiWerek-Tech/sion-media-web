import type { ChangelogEntry } from '../types'

/**
 * SION Media Changelog Data
 * Ordered: Newest to Oldest (Descending)
 * Synchronized with SION Media desktop release history.
 */
export const changelogEntries: ChangelogEntry[] = [
  {
    version: 'SION Link Desktop 1.0.0',
    date: '2026-07-15',
    type: 'Official Release · Stable Production Version',
    notes: [
      'Rilis stabil pertama companion desktop native SION Link Desktop.',
      'Auto-discovery server SION Media di jaringan lokal (WiFi/LAN) secara otomatis tanpa port manual.',
      'PowerPoint Live Bridge menyinkronkan slide aktif, judul slide, notes, dan pratinjau slide berikutnya secara real-time langsung ke operator via PowerShell.',
      'Smart Paste & URL parsing mem-parsing IP, port, dan kode akses dari clipboard link SION.',
      'Akses workspace native khusus untuk Operator (kontrol penuh & PPT bridge), Pemateri (navigasi slide sederhana), Stage Display (Speaker Notes & cue), Live Viewer (clean projection), dan Live OBS (transparent overlay).',
      'Proteksi navigasi origin, pemblokir pop-up otomatis, validasi konfigurasi, dan pemulihan sesi koneksi otomatis saat terputus.'
    ]
  },
  {
    version: 'SION Link Mobile 0.1.0-alpha.1',
    date: '2026-07-14',
    type: 'Android Internal Testing · Native Live Update',
    notes: [
      'Aplikasi Android native berbasis React Native dan Expo Development Build, bukan wrapper WebView.',
      'Semua role kini menampilkan visual slide aktif; Pemateri dan Operator tetap memiliki kontrol sesuai izin, sedangkan Viewer dan Stage bersifat read-only.',
      'Pemutar expo-video native menerima OBS Live H.264/AAC melalui LL-HLS, melakukan reconnect, dan kembali otomatis ke Program Output saat publisher OBS berhenti.',
      'Pemateri, Operator, dan Stage memperoleh panel status OBS tanpa kehilangan notes, next cue, timer, maupun kontrol utamanya.',
      'QR pairing sebagai metode utama serta input IP, port, dan kode role sebagai fallback manual yang dipisahkan dengan jelas.',
      'Animated splash screen, onboarding instalasi pertama, bantuan koneksi, saved-server reconnect card, dan branding resmi SION Media.',
      'SecureStore untuk pairing, validasi payload Zod, REST timeout, SSE snapshot real-time, reconnect state, serta Viewer/Stage keep-awake.',
      'APK internal testing mendukung Android 7+, ARM64 dan ARMv7 serta sudah diverifikasi dengan signature APK v2.'
    ]
  },
  {
    version: '1.1.0-beta.1',
    date: '2026-07-14',
    type: 'Beta Testing · Connected Production & OBS Live',
    notes: [
      'OBS Live Input: OBS mengirim video H.264 dan audio AAC melalui SRT ke SION Media, kemudian SION Media mendistribusikannya ke SION Link Desktop dan Mobile.',
      'MediaMTX 1.17.0 menyediakan LL-HLS untuk playback kompatibel beserta audio dan WebRTC/WHEP untuk integrasi lanjutan berlatensi rendah.',
      'Viewer memprioritaskan publisher OBS yang aktif dan kembali otomatis ke Program Output SION Media ketika stream berhenti atau terputus.',
      'FFmpeg 8.1.2 dan MediaMTX 1.17.0 dibundel ke installer SION Media sehingga konfigurasi pengguna baru tidak memerlukan instalasi manual.',
      'OBS Network Output tetap tersedia sebagai jalur terpisah untuk mengirim Program Output 1080p beserta audio dari SION Media ke OBS tanpa plugin.',
      'Kode Pemateri, Operator, Viewer, dan Stage serta port server dibuat persisten sampai di-reset manual oleh operator.',
      'Tombol ON SION Link tersedia langsung pada title bar Projection Mode untuk aktivasi server tanpa berpindah halaman.',
      'Akses media gambar melalui LAN diperbaiki agar panel, preview, live viewer, dan perangkat lain menggunakan sumber yang dapat dijangkau jaringan.',
      'Pergantian gambar, video, atau PDF dari Preview ke Program dapat dilakukan langsung saat media lain masih live tanpa Clear terlebih dahulu.',
      'Output media live tidak lagi menampilkan watermark SION PRESENTER, sementara thumbnail gambar memakai path dan encoding Windows yang lebih portabel.',
      'Pemenggalan lirik mengikuti tanda titik koma sehingga satu kalimat nyanyian tidak terbagi di antara dua slide.',
      'Playlist mendapat ruang antarelemen yang lebih baik, modal edit berlapis benar, dan aksi Ganti Lagu/Item langsung tanpa menghapus slot.',
      'Navigasi slide mengikuti slide yang benar-benar live, memakai V/C untuk struktur lagu dan nomor 1, 2, 3 untuk halaman PDF/PPTX dengan scroll horizontal.',
      'PowerPoint Package Import mempertahankan Speaker Notes dengan fallback PowerPoint, WPS Presentation, LibreOffice, PDF, dan gambar; Presentation Bridge serta pesan errornya diperjelas.',
      'SION Link Desktop mendapat layout native full-width, koneksi otomatis, slide visual pada semua role, OBS Live, dan recovery yang lebih jelas.',
      'Stage Display disempurnakan dengan current/next cue, notes, chord, heartbeat, timer, status LIVE/FREEZE/BLACK, auto-fit, dan routing monitor terpisah.',
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
